class SnowAnimation {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 300;
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
                radius: this.isDarkMode ? Math.random() * 1 + 0.5 : Math.random() * 1.5 + 0.5,
                speed: Math.random() * 2 + 0.5,
                drift: Math.random() * 1 - 0.5,
                opacity: Math.random() * 0.6 + 0.4
            });
        }
    }

    update() {
        this.particles.forEach(particle => {
            particle.y += particle.speed;
            particle.x += particle.drift;

            // Reset particle when it goes off screen
            if (particle.y > this.canvas.height) {
                particle.y = -10;
                particle.x = Math.random() * this.canvas.width;
            }
            if (particle.x > this.canvas.width) {
                particle.x = 0;
            } else if (particle.x < 0) {
                particle.x = this.canvas.width;
            }
        });
    }

    draw() {
        this.checkDarkMode(); // Check on each draw
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            // Use different colors for light and dark mode
            const color = this.isDarkMode
                ? `rgba(255, 255, 255, ${particle.opacity})`
                : `rgba(57, 151, 255, ${particle.opacity})`;

            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = color;
            this.ctx.fill();
            this.ctx.closePath();

            // Add subtle shadow for visibility in light mode
            if (!this.isDarkMode) {
                this.ctx.shadowBlur = 3;
                this.ctx.shadowColor = 'rgba(100, 120, 180, 0.3)';
            } else {
                this.ctx.shadowBlur = 0;
            }
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

export default SnowAnimation;
