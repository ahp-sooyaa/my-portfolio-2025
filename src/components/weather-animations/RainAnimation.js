class RainAnimation {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 250;
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
                length: Math.random() * 10 + 5,
                speed: Math.random() * 8 + 2,
                opacity: Math.random() * 0.4 + 0.2
            });
        }
    }

    update() {
        this.particles.forEach(particle => {
            particle.y += particle.speed;
            particle.x += 2; // Slight diagonal effect

            // Reset particle when it goes off screen
            if (particle.y > this.canvas.height) {
                particle.y = -particle.length;
                particle.x = Math.random() * this.canvas.width;
            }
        });
    }

    draw() {
        this.checkDarkMode(); // Check on each draw
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            // Use different colors for light and dark mode
            const color = this.isDarkMode
                ? `rgba(174, 194, 224, ${particle.opacity})`
                : `rgba(100, 130, 180, ${particle.opacity * 0.8})`;

            this.ctx.beginPath();
            this.ctx.moveTo(particle.x, particle.y);
            this.ctx.lineTo(particle.x + 2, particle.y + particle.length);
            this.ctx.strokeStyle = color;
            this.ctx.lineWidth = 1.5;
            this.ctx.stroke();
            this.ctx.closePath();
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

export default RainAnimation;
