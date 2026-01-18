class CloudAnimation {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 15; // Fewer but better-looking clouds
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
                y: Math.random() * (this.canvas.height * 0.5), // Spread across more of the screen
                radius: Math.random() * 60 + 50, // Larger clouds
                speed: Math.random() * 0.15 + 0.08, // Slower movement
                opacity: Math.random() * 0.25 + 0.15, // More visible
                puffCount: Math.floor(Math.random() * 3) + 4, // 4-6 puffs per cloud
                puffOffsets: []
            });
        }

        // Generate puff positions for each cloud
        this.particles.forEach(particle => {
            for (let i = 0; i < particle.puffCount; i++) {
                particle.puffOffsets.push({
                    x: (Math.random() - 0.5) * particle.radius * 1.5,
                    y: (Math.random() - 0.5) * particle.radius * 0.6,
                    size: Math.random() * 0.4 + 0.7
                });
            }
        });
    }

    update() {
        this.particles.forEach(particle => {
            particle.x += particle.speed;

            // Reset particle when it goes off screen
            if (particle.x - particle.radius * 2 > this.canvas.width) {
                particle.x = -particle.radius * 2;
                particle.y = Math.random() * (this.canvas.height * 0.5);
            }
        });
    }

    draw() {
        this.checkDarkMode(); // Check on each draw
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            // Different colors for light and dark mode
            const baseColor = this.isDarkMode
                ? { r: 200, g: 210, b: 220 }
                : { r: 150, g: 160, b: 180 };

            // Draw each puff of the cloud
            particle.puffOffsets.forEach(puff => {
                const puffX = particle.x + puff.x;
                const puffY = particle.y + puff.y;
                const puffRadius = particle.radius * puff.size;

                // Create gradient for soft cloud effect
                const gradient = this.ctx.createRadialGradient(
                    puffX, puffY, 0,
                    puffX, puffY, puffRadius
                );

                gradient.addColorStop(0, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${particle.opacity * 1.2})`);
                gradient.addColorStop(0.5, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${particle.opacity * 0.8})`);
                gradient.addColorStop(1, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0)`);

                this.ctx.fillStyle = gradient;
                this.ctx.beginPath();
                this.ctx.arc(puffX, puffY, puffRadius, 0, Math.PI * 2);
                this.ctx.fill();
            });

            // Add a subtle center highlight
            const highlightGradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.radius * 0.5
            );

            const highlightColor = this.isDarkMode
                ? `rgba(255, 255, 255, ${particle.opacity * 0.3})`
                : `rgba(200, 210, 230, ${particle.opacity * 0.4})`;

            highlightGradient.addColorStop(0, highlightColor);
            highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            this.ctx.fillStyle = highlightGradient;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius * 0.5, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    animate() {
        this.update();
        this.draw();
    }

    destroy() {
        this.particles = [];
    }
}

export default CloudAnimation;
