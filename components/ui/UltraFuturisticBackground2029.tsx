import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2029Props {
  children: React.ReactNode;
}

export default function UltraFuturisticBackground2029({ children }: UltraFuturisticBackground2029Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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
      alpha: number;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
        this.alpha = Math.random() * 0.5 + 0.3;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (this.life <= 0) {
          this.life = this.maxLife;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha * (this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particlesRef.current.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connecting lines
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/30 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-500/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-blue-500/30 transform rotate-45"
          animate={{
            rotate: [0, -360],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Neon Glow Effects */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-radial from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-500" />

        {/* Animated Lines */}
        <motion.div
          className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Floating Data Points */}
        <motion.div
          className="absolute top-1/3 right-1/4 text-cyan-400/30 text-xs font-mono"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          01.01.2029
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 text-purple-400/30 text-xs font-mono"
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          QUANTUM_READY
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-1/3 text-blue-400/30 text-xs font-mono"
          animate={{
            x: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          AI_ENABLED
        </motion.div>
      </div>

      {/* Canvas for Particle System */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      
      {/* Scanning Line Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        animate={{
          y: [0, '100vh'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-500/50" />
      <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-500/50" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-blue-500/50" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyan-500/50" />

      {/* Center Focus Point */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-4 h-4 bg-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-cyan-500/30 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-cyan-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      
      {/* Children Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}