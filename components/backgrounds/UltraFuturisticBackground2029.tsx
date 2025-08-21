import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2029Props {
  children: React.ReactNode;
}

const UltraFuturisticBackground2029: React.FC<UltraFuturisticBackground2029Props> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        this.alpha = Math.random() * 0.5 + 0.5;
        this.life = Math.random() * 100 + 50;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (this.life <= 0) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.life = Math.random() * 100 + 50;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class Connection {
      particle1: Particle;
      particle2: Particle;
      alpha: number;

      constructor(p1: Particle, p2: Particle) {
        this.particle1 = p1;
        this.particle2 = p2;
        this.alpha = Math.random() * 0.3 + 0.1;
      }

      draw() {
        const distance = Math.sqrt(
          Math.pow(this.particle1.x - this.particle2.x, 2) + 
          Math.pow(this.particle1.y - this.particle2.y, 2)
        );

        if (distance < 150) {
          ctx.save();
          ctx.globalAlpha = this.alpha * (1 - distance / 150);
          ctx.strokeStyle = '#00ffff';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.particle1.x, this.particle1.y);
          ctx.lineTo(this.particle2.x, this.particle2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Initialize particles and connections
    const init = () => {
      particles = [];
      connections = [];

      // Create particles
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }

      // Create connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) + 
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150) {
            connections.push(new Connection(particles[i], particles[j]));
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw quantum grid pattern
      ctx.save();
      ctx.strokeStyle = '#00ffff';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;
      
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      ctx.restore();

      // Draw floating geometric shapes
      ctx.save();
      ctx.strokeStyle = '#ff00ff';
      ctx.globalAlpha = 0.2;
      ctx.lineWidth = 2;
      
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {
        const x = (canvas.width / 2) + Math.cos(time + i) * 200;
        const y = (canvas.height / 2) + Math.sin(time + i) * 200;
        const size = 30 + Math.sin(time * 2 + i) * 10;
        
        ctx.beginPath();
        if (i % 3 === 0) {
          // Triangle
          ctx.moveTo(x, y - size);
          ctx.lineTo(x - size * 0.866, y + size * 0.5);
          ctx.lineTo(x + size * 0.866, y + size * 0.5);
          ctx.closePath();
        } else if (i % 3 === 1) {
          // Square
          ctx.rect(x - size, y - size, size * 2, size * 2);
        } else {
          // Circle
          ctx.arc(x, y, size, 0, Math.PI * 2);
        }
        ctx.stroke();
      }
      ctx.restore();

      // Draw quantum energy waves
      ctx.save();
      ctx.strokeStyle = '#00ff00';
      ctx.globalAlpha = 0.3;
      ctx.lineWidth = 3;
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y = canvas.height / 2 + Math.sin((x + time * 100 + i * 100) * 0.01) * 100;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      ctx.restore();

      // Draw neural network nodes
      ctx.save();
      ctx.fillStyle = '#ffff00';
      ctx.globalAlpha = 0.6;
      
      for (let i = 0; i < 20; i++) {
        const x = (canvas.width / 2) + Math.cos(time * 0.5 + i * 0.3) * 300;
        const y = (canvas.height / 2) + Math.sin(time * 0.5 + i * 0.3) * 300;
        const size = 5 + Math.sin(time + i) * 2;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      connections.forEach(connection => {
        connection.draw();
      });

      // Draw holographic rings
      ctx.save();
      ctx.strokeStyle = '#ff0080';
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 3; i++) {
        const radius = 100 + i * 100 + Math.sin(time + i) * 20;
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // Draw quantum field effect
      ctx.save();
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
      gradient.addColorStop(0.5, 'rgba(255, 0, 255, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Quantum Field Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2029;