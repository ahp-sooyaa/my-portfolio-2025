class ClearSkyAnimation {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 100;
        this.sunBreath = 0; // For sun breathing effect
        this.sunBreathDirection = 1;
        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.checkDarkMode();
    }

    checkDarkMode() {
        // Check if dark mode is enabled
        this.isDarkMode = document.documentElement.classList.contains('dark');
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.01 + 0.01,
                twinkleDirection: Math.random() > 0.5 ? 1 : -1
            });
        }
    }

    update() {
        if (this.isDarkMode) {
            // Twinkling stars for dark mode
            this.particles.forEach(particle => {
                particle.opacity += particle.twinkleSpeed * particle.twinkleDirection;

                if (particle.opacity >= 1) {
                    particle.opacity = 1;
                    particle.twinkleDirection = -1;
                } else if (particle.opacity <= 0.2) {
                    particle.opacity = 0.2;
                    particle.twinkleDirection = 1;
                }
            });
        } else {
            // Breathing sun glow for light mode
            this.sunBreath += 0.03 * this.sunBreathDirection;

            if (this.sunBreath >= 1) {
                this.sunBreath = 1;
                this.sunBreathDirection = -1;
            } else if (this.sunBreath <= 0) {
                this.sunBreath = 0;
                this.sunBreathDirection = 1;
            }
        }
    }

    draw() {
        this.checkDarkMode(); // Check on each draw
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.isDarkMode) {
            // Draw twinkling stars in dark mode
            this.particles.forEach(particle => {
                const starColor = `rgba(255, 255, 255, ${particle.opacity * 0.8})`;
                const glowColor = `rgba(255, 255, 255, ${particle.opacity * 0.4})`;

                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = starColor;
                this.ctx.fill();
                this.ctx.closePath();

                // Add a subtle glow
                const gradient = this.ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.radius * 3
                );
                gradient.addColorStop(0, glowColor);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
                this.ctx.fillStyle = gradient;
                this.ctx.fill();
                this.ctx.closePath();
            });
        } else {
            // Draw breathing sun in light mode
            const centerX = this.canvas.width * 0.85; // Top right area
            const centerY = this.canvas.height * 0.15;
            const baseRadius = 80;
            const breathIntensity = this.sunBreath * 0.3; // Gentle breathing
            const currentRadius = baseRadius + (breathIntensity * 20);

            // Base opacity pulses between 0.15 and 0.25
            const baseOpacity = 0.15 + (breathIntensity * 0.1);

            // Multiple layers for soft, warm glow
            const layers = [
                { size: 2.5, opacity: baseOpacity * 0.4 },
                { size: 2.0, opacity: baseOpacity * 0.6 },
                { size: 1.5, opacity: baseOpacity * 0.8 },
                { size: 1.0, opacity: baseOpacity * 1.0 }
            ];

            layers.forEach(layer => {
                const gradient = this.ctx.createRadialGradient(
                    centerX, centerY, 0,
                    centerX, centerY, currentRadius * layer.size
                );

                // Warm golden yellow color
                gradient.addColorStop(0, `rgba(255, 223, 128, ${layer.opacity * 1.5})`);
                gradient.addColorStop(0.3, `rgba(255, 200, 100, ${layer.opacity * 1.2})`);
                gradient.addColorStop(0.6, `rgba(255, 180, 80, ${layer.opacity * 0.8})`);
                gradient.addColorStop(1, 'rgba(255, 160, 60, 0)');

                this.ctx.fillStyle = gradient;
                this.ctx.beginPath();
                this.ctx.arc(centerX, centerY, currentRadius * layer.size, 0, Math.PI * 2);
                this.ctx.fill();
            });

            // Optional: Add a very subtle core
            const coreGradient = this.ctx.createRadialGradient(
                centerX, centerY, 0,
                centerX, centerY, currentRadius * 0.3
            );
            coreGradient.addColorStop(0, `rgba(255, 240, 200, ${baseOpacity * 0.6})`);
            coreGradient.addColorStop(1, 'rgba(255, 223, 128, 0)');

            this.ctx.fillStyle = coreGradient;
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, currentRadius * 0.3, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    animate() {
        this.update();
        this.draw();
    }

    destroy() {
        this.particles = [];
    }
}

export default ClearSkyAnimation;
