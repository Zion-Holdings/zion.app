import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function UltraAdvancedFuturisticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
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

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      type: 'quantum' | 'neon' | 'hologram';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.alpha = Math.random() * 0.8 + 0.2;
        this.type = ['quantum', 'neon', 'hologram'][Math.floor(Math.random() * 3)] as any;
        
        // Set color based on type
        switch (this.type) {
          case 'quantum':
            this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'neon':
            this.color = `hsl(${280 + Math.random() * 80}, 80%, 70%)`;
            break;
          case 'hologram':
            this.color = `hsl(${160 + Math.random() * 40}, 60%, 70%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Fade in/out
        this.alpha += (Math.random() - 0.5) * 0.02;
        this.alpha = Math.max(0.1, Math.min(1, this.alpha));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        
        switch (this.type) {
          case 'quantum':
            this.drawQuantum();
            break;
          case 'neon':
            this.drawNeon();
            break;
          case 'hologram':
            this.drawHologram();
            break;
        }
        
        ctx.restore();
      }

      drawQuantum() {
        // Quantum particle with wave function
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color + '80');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Wave interference pattern
        ctx.strokeStyle = this.color + '40';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        for (let i = 0; i < 3; i++) {
          const angle = (Date.now() * 0.001 + i * Math.PI / 3) % (Math.PI * 2);
          const radius = this.size * (1.5 + i * 0.5);
          const x = this.x + Math.cos(angle) * radius;
          const y = this.y + Math.sin(angle) * radius;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.stroke();
      }

      drawNeon() {
        // Neon glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = this.color;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }

      drawHologram() {
        // Holographic effect with transparency
        ctx.globalCompositeOperation = 'screen';
        
        // Multiple layers for holographic effect
        for (let i = 0; i < 3; i++) {
          const alpha = this.alpha * (0.3 + i * 0.2);
          const size = this.size * (0.8 + i * 0.4);
          
          ctx.globalAlpha = alpha;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.globalCompositeOperation = 'source-over';
      }
    }

    // Initialize particles
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.8)');
      gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.6)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw quantum connections
      drawQuantumConnections();

      // Draw energy grid
      drawEnergyGrid();

      animationRef.current = requestAnimationFrame(animate);
    };

    // Draw quantum connections between nearby particles
    const drawQuantumConnections = () => {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

          if (distance < 150) {
            const alpha = (150 - distance) / 150 * 0.3;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    // Draw energy grid
    const drawEnergyGrid = () => {
      const gridSize = 100;
      const time = Date.now() * 0.001;
      
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.1)';
      ctx.lineWidth = 0.3;

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const alpha = (Math.sin(time + x * 0.01) + Math.cos(time + y * 0.01)) * 0.5 + 0.5;
          ctx.globalAlpha = alpha * 0.1;
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + gridSize, y);
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + gridSize);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 50%, rgba(15, 23, 42, 0.8) 100%)' }}
      />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Quantum Hexagons */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full border border-cyan-400/30 transform rotate-45"></div>
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 w-24 h-24 opacity-15"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full border border-purple-400/30 transform rotate-12"></div>
        </motion.div>

        {/* Neon Circles */}
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 opacity-25"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-400/30 shadow-lg shadow-cyan-400/20"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-1/3 w-16 h-16 opacity-20"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-400/30 to-cyan-400/30 shadow-lg shadow-pink-400/20"></div>
        </motion.div>

        {/* Holographic Triangles */}
        <motion.div
          className="absolute top-1/2 left-16 w-28 h-28 opacity-15"
          animate={{
            rotate: 360,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full border-l border-r border-b border-cyan-400/20 transform rotate-45"></div>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-32 w-36 h-36 opacity-10"
          animate={{
            rotate: -360,
            y: [0, 30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full border-l border-r border-b border-purple-400/20 transform -rotate-12"></div>
        </motion.div>
      </div>

      {/* Quantum Energy Waves */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      {/* Floating Data Streams */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/20 text-xs font-mono"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          >
            {`0x${Math.random().toString(16).substr(2, 8).toUpperCase()}`}
          </motion.div>
        ))}
      </div>
    </>
  );
}