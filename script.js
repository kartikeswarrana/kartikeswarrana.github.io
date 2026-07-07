// Main Physics Simulation: Animated Solar System
class SolarSystemAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.paused = false;

        this.stars = [];
        this.planets = [];
        this.sunGlow = 0;
        this.sunGlowDir = 1;

        this.init();
        this.resize();
        this.createStars();
        this.createPlanets();
        this.animate();
    }

    init() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    resize() {
        window.addEventListener('resize', () => {
            this.canvas.width = this.canvas.offsetWidth;
            this.canvas.height = this.canvas.offsetHeight;
            this.createStars(); // Re-populate stars based on screen size
        });
    }

    createStars() {
        this.stars = [];
        const numStars = Math.floor((this.canvas.width * this.canvas.height) / 8000);
        for (let i = 0; i < numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: 0.2 + Math.random() * 1.5,
                opacity: 0.1 + Math.random() * 0.9,
                twinkleSpeed: 0.005 + Math.random() * 0.015,
                twinkleDirection: Math.random() > 0.5 ? 1 : -1
            });
        }
    }

    createPlanets() {
        this.planets = [
            // Mercury
            {
                name: 'Mercury',
                orbitRadiusRatio: 0.18,
                radius: 3,
                color: '#8e8e93',
                speed: 0.012,
                angle: Math.random() * Math.PI * 2,
                moons: []
            },
            // Venus
            {
                name: 'Venus',
                orbitRadiusRatio: 0.3,
                radius: 5,
                color: '#e5c158',
                speed: 0.008,
                angle: Math.random() * Math.PI * 2,
                moons: []
            },
            // Earth
            {
                name: 'Earth',
                orbitRadiusRatio: 0.45,
                radius: 7,
                color: '#00f2fe',
                speed: 0.005,
                angle: Math.random() * Math.PI * 2,
                moons: [
                    { radius: 1.5, orbitRadius: 12, speed: 0.04, angle: 0 }
                ]
            },
            // Mars
            {
                name: 'Mars',
                orbitRadiusRatio: 0.6,
                radius: 5.5,
                color: '#ff5e3a',
                speed: 0.004,
                angle: Math.random() * Math.PI * 2,
                moons: [
                    { radius: 1, orbitRadius: 9, speed: 0.05, angle: 0 }
                ]
            },
            // Jupiter
            {
                name: 'Jupiter',
                orbitRadiusRatio: 0.8,
                radius: 13,
                color: '#e0ae62',
                speed: 0.002,
                angle: Math.random() * Math.PI * 2,
                moons: [
                    { radius: 1.5, orbitRadius: 20, speed: 0.02, angle: 0 },
                    { radius: 1.8, orbitRadius: 24, speed: 0.015, angle: Math.PI / 2 }
                ]
            },
            // Saturn
            {
                name: 'Saturn',
                orbitRadiusRatio: 1.0,
                radius: 10,
                color: '#dfd1a1',
                speed: 0.0012,
                angle: Math.random() * Math.PI * 2,
                hasRings: true,
                moons: [
                    { radius: 1.5, orbitRadius: 18, speed: 0.02, angle: Math.PI / 3 }
                ]
            }
        ];
    }

    update() {
        if (this.paused) return;

        // Twinkle stars
        this.stars.forEach(star => {
            star.opacity += star.twinkleSpeed * star.twinkleDirection;
            if (star.opacity >= 1) {
                star.opacity = 1;
                star.twinkleDirection = -1;
            } else if (star.opacity <= 0.1) {
                star.opacity = 0.1;
                star.twinkleDirection = 1;
            }
        });

        // Pulsing sun glow
        this.sunGlow += 0.01 * this.sunGlowDir;
        if (this.sunGlow >= 1) {
            this.sunGlow = 1;
            this.sunGlowDir = -1;
        } else if (this.sunGlow <= 0) {
            this.sunGlow = 0;
            this.sunGlowDir = 1;
        }

        // Orbit planets and moons
        this.planets.forEach(planet => {
            planet.angle += planet.speed;
            planet.moons.forEach(moon => {
                moon.angle += moon.speed;
            });
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const cx = this.canvas.width / 2;
        const cy = this.canvas.height / 2;
        const baseOrbitScale = Math.min(this.canvas.width, this.canvas.height) * 0.4;

        // Draw Twinkling Stars
        this.stars.forEach(star => {
            this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });

        // Draw faint orbital rings
        this.planets.forEach(planet => {
            const orbitRadius = planet.orbitRadiusRatio * baseOrbitScale;
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, orbitRadius, 0, Math.PI * 2);
            this.ctx.stroke();
        });

        // Draw Sun (Centered, glowing)
        const sunRadius = 24;
        const sunGlowRadius = sunRadius + 5 + this.sunGlow * 15;
        const sunGradient = this.ctx.createRadialGradient(cx, cy, sunRadius * 0.2, cx, cy, sunGlowRadius);
        sunGradient.addColorStop(0, '#ffffff');
        sunGradient.addColorStop(0.2, '#fff176');
        sunGradient.addColorStop(0.5, '#f57f17');
        sunGradient.addColorStop(1, 'rgba(245, 127, 23, 0)');

        this.ctx.fillStyle = sunGradient;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, sunGlowRadius, 0, Math.PI * 2);
        this.ctx.fill();

        // Draw Planets and Moons
        this.planets.forEach(planet => {
            const orbitRadius = planet.orbitRadiusRatio * baseOrbitScale;
            const px = cx + Math.cos(planet.angle) * orbitRadius;
            const py = cy + Math.sin(planet.angle) * orbitRadius;

            // Planet shadow/glow style
            this.ctx.shadowBlur = 8;
            this.ctx.shadowColor = planet.color;

            // Draw Saturn rings
            if (planet.hasRings) {
                this.ctx.shadowBlur = 0; // Turn off shadow blur for rings
                this.ctx.strokeStyle = 'rgba(223, 209, 161, 0.4)';
                this.ctx.lineWidth = 4;
                this.ctx.beginPath();
                this.ctx.ellipse(px, py, planet.radius * 1.8, planet.radius * 0.7, Math.PI / 6, 0, Math.PI * 2);
                this.ctx.stroke();
                this.ctx.shadowBlur = 8; // Re-enable for the planet body
            }

            // Draw Planet body
            this.ctx.fillStyle = planet.color;
            this.ctx.beginPath();
            this.ctx.arc(px, py, planet.radius, 0, Math.PI * 2);
            this.ctx.fill();

            // Draw Moons
            this.ctx.shadowBlur = 0; // Disable shadow glow for moons
            planet.moons.forEach(moon => {
                const mx = px + Math.cos(moon.angle) * moon.orbitRadius;
                const my = py + Math.sin(moon.angle) * moon.orbitRadius;

                // Draw moon orbit
                this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
                this.ctx.lineWidth = 0.5;
                this.ctx.beginPath();
                this.ctx.arc(px, py, moon.orbitRadius, 0, Math.PI * 2);
                this.ctx.stroke();

                // Draw moon body
                this.ctx.fillStyle = '#94a3b8';
                this.ctx.beginPath();
                this.ctx.arc(mx, my, moon.radius, 0, Math.PI * 2);
                this.ctx.fill();
            });
        });

        this.ctx.shadowBlur = 0; // Reset global shadow blur
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}


// Mouse spotlight tracking on glass-cards
function initCardSpotlight() {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Scroll Reveal Animations
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // If it's the skills container, trigger skill bars filling
                if (entry.target.classList.contains('skills-container')) {
                    animateSkillBars();
                }

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

// Skill bars fill trigger
function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    bars.forEach(bar => {
        const val = bar.getAttribute('data-percentage');
        bar.style.width = `${val}%`;
    });
}

// Mobile navigation toggle
function initMobileNav() {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            if (isVisible) {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(8, 8, 16, 0.95)';
                navLinks.style.padding = '1.5rem';
                navLinks.style.borderBottom = '1px solid var(--surface-border)';
                navLinks.style.gap = '1.25rem';
            }
        });
    }
}


// Animate Tab Favicon (Atom animation)
function initAtomFavicon() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const link = document.getElementById('favicon');
    if (!link) return;
    
    let angle = 0;
    
    function drawFavicon() {
        ctx.clearRect(0, 0, 32, 32);
        const cx = 16;
        const cy = 16;
        
        // Draw orbits
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = 'rgba(0, 242, 254, 0.4)';
        
        const drawOrbit = (rotAngle) => {
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(rotAngle);
            ctx.beginPath();
            ctx.ellipse(0, 0, 13, 4, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
        };
        
        drawOrbit(0);
        drawOrbit(Math.PI / 3);
        drawOrbit(-Math.PI / 3);
        
        // Draw nucleus (center)
        ctx.fillStyle = '#b927fc';
        ctx.beginPath();
        ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw electrons
        ctx.fillStyle = '#00f2fe';
        const drawElectron = (rotAngle, phase) => {
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(rotAngle);
            const ex = Math.cos(angle + phase) * 13;
            const ey = Math.sin(angle + phase) * 4;
            ctx.beginPath();
            ctx.arc(ex, ey, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        };
        
        drawElectron(0, 0);
        drawElectron(Math.PI / 3, (Math.PI * 2) / 3);
        drawElectron(-Math.PI / 3, (Math.PI * 4) / 3);
        
        link.href = canvas.toDataURL('image/png');
        angle += 0.06;
    }
    
    setInterval(drawFavicon, 33); // ~30 FPS for a smoother, premium visual experience
}

// Load initialization
document.addEventListener('DOMContentLoaded', () => {
    // 1. Start main Solar System animation
    new SolarSystemAnimation('physics-canvas');
    
    // 2. Dynamic mouse spotlighting
    initCardSpotlight();

    // 3. Scrolling observer entries
    initScrollReveal();

    // 4. Mobile toggle
    initMobileNav();

    // 5. Start animated favicon
    initAtomFavicon();
});
