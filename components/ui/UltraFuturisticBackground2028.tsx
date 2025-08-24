import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2028Props {
  children: React.ReactNode;
}

export default function UltraFuturisticBackground2028({ children }: UltraFuturisticBackground2028Props) {
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
    let lines: Line[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
        this.alpha = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
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

    class Line {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      alpha: number;
      color: string;

      constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.alpha = Math.random() * 0.3 + 0.1;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
        ctx.restore();
      }
    }

    // Initialize particles and lines
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < 50; i++) {
      const x1 = Math.random() * canvas.width;
      const y1 = Math.random() * canvas.height;
      const x2 = Math.random() * canvas.width;
      const y2 = Math.random() * canvas.height;
      lines.push(new Line(x1, y1, x2, y2));
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw lines
      lines.forEach(line => {
        line.draw();
      });

      // Create connecting lines between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          );
          
          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.strokeStyle = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ zIndex: 0 }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        {/* Floating Hexagons */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-purple-500/30 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 border border-cyan-500/30 rotate-45"
          animate={{
            rotate: [45, -315],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-20 left-1/4 w-40 h-40 border border-blue-500/30 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Circles */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-16 h-16 border border-purple-500/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-2/3 right-1/3 w-20 h-20 border border-cyan-500/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Triangles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-purple-500/30 border-r-[20px] border-r-transparent"
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-cyan-500/30 border-r-[15px] border-r-transparent"
          animate={{
            rotate: [0, -360],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Neon Grid Effect */}
      <div className="absolute inset-0 z-30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-40">
        {children}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}