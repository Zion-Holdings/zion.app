import React, { useEffect, useRef } from 'react';

const UltraFuturisticBackground2038: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        if (ctx) {
          const alpha = this.life / this.maxLife;
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }

    // Grid system
    class Grid {
      spacing: number;
      offset: number;

      constructor() {
        this.spacing = 60;
        this.offset = 0;
      }

      update() {
        this.offset += 0.5;
      }

      draw() {
        if (ctx) {
          ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
          ctx.lineWidth = 1;
          ctx.shadowColor = 'rgba(0, 255, 255, 0.3)';
          ctx.shadowBlur = 5;

          // Vertical lines
          for (let x = this.offset % this.spacing; x < canvas.width; x += this.spacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }

          // Horizontal lines
          for (let y = this.offset % this.spacing; y < canvas.height; y += this.spacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }
        }
      }
    }

    // Energy field
    class EnergyField {
      time: number;
      amplitude: number;

      constructor() {
        this.time = 0;
        this.amplitude = 50;
      }

      update() {
        this.time += 0.02;
      }

      draw() {
        if (ctx) {
          ctx.strokeStyle = 'rgba(138, 43, 226, 0.3)';
          ctx.lineWidth = 2;
          ctx.shadowColor = 'rgba(138, 43, 226, 0.5)';
          ctx.shadowBlur = 15;

          ctx.beginPath();
          for (let x = 0; x < canvas.width; x += 5) {
            const y = canvas.height / 2 + Math.sin(x * 0.01 + this.time) * this.amplitude;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      }
    }

    // Quantum particles
    class QuantumParticle {
      x: number;
      y: number;
      angle: number;
      radius: number;
      speed: number;
      size: number;
      color: string;

      constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * 100 + 50;
        this.speed = Math.random() * 0.02 + 0.01;
        this.size = Math.random() * 4 + 2;
        this.color = `hsl(${Math.random() * 60 + 300}, 80%, 70%)`;
      }

      update() {
        this.angle += this.speed;
        this.x = canvas.width / 2 + Math.cos(this.angle) * this.radius;
        this.y = canvas.height / 2 + Math.sin(this.angle) * this.radius;
      }

      draw() {
        if (ctx) {
          ctx.save();
          ctx.fillStyle = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }

    // Initialize systems
    const particles: Particle[] = [];
    const grid = new Grid();
    const energyField = new EnergyField();
    const quantumParticles: QuantumParticle[] = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Create quantum particles
    for (let i = 0; i < 20; i++) {
      quantumParticles.push(new QuantumParticle());
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw systems
      grid.update();
      grid.draw();

      energyField.update();
      energyField.draw();

      // Update and draw quantum particles
      quantumParticles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          );
        }
      });

      // Draw connection lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const alpha = 1 - distance / 100;
            ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Add some floating geometric shapes
      ctx.save();
      ctx.translate(canvas.width * 0.8, canvas.height * 0.2);
      ctx.rotate(Date.now() * 0.001);
      ctx.strokeStyle = 'rgba(255, 20, 147, 0.3)';
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(255, 20, 147, 0.5)';
      ctx.shadowBlur = 10;
      
      // Draw hexagon
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = Math.cos(angle) * 40;
        const y = Math.sin(angle) * 40;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      // Add floating circles
      ctx.save();
      ctx.translate(canvas.width * 0.2, canvas.height * 0.8);
      ctx.rotate(-Date.now() * 0.0005);
      ctx.strokeStyle = 'rgba(0, 255, 127, 0.3)';
      ctx.lineWidth = 1;
      ctx.shadowColor = 'rgba(0, 255, 127, 0.5)';
      ctx.shadowBlur = 8;
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, 30 + i * 20, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
        }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-blue-400/20 rounded-lg animate-pulse delay-1500"></div>
        
        {/* Neon glow effects */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000 shadow-lg shadow-pink-400/50"></div>
        
        {/* Energy waves */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-20 animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2038;