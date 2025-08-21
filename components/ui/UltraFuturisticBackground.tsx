import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({ 
  children, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
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

    // Quantum particle system
    class QuantumParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.maxLife = Math.random() * 100 + 50;
        this.life = this.maxLife;
        this.type = ['quantum', 'holographic', 'neural'][Math.floor(Math.random() * 3)] as any;
        
        switch (this.type) {
          case 'quantum':
            this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'holographic':
            this.color = `hsl(${280 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'neural':
            this.color = `hsl(${120 + Math.random() * 60}, 70%, 60%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Quantum tunneling effect
        if (Math.random() < 0.001) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.globalAlpha = this.life / this.maxLife;
        
        // Draw particle with glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = this.color;
        
        if (this.type === 'quantum') {
          // Quantum particle - circular with energy waves
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Energy waves
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          for (let i = 1; i <= 3; i++) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size + i * 3, 0, Math.PI * 2);
            ctx.stroke();
          }
        } else if (this.type === 'holographic') {
          // Holographic particle - diamond shape
          ctx.beginPath();
          ctx.moveTo(this.x, this.y - this.size);
          ctx.lineTo(this.x + this.size, this.y);
          ctx.lineTo(this.x, this.y + this.size);
          ctx.lineTo(this.x - this.size, this.y);
          ctx.closePath();
          ctx.fill();
        } else {
          // Neural particle - hexagonal
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = this.x + this.size * Math.cos(angle);
            const y = this.y + this.size * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
        }
        
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particlesRef.current.push(new QuantumParticle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      gradient.addColorStop(0.5, 'rgba(20, 20, 40, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particlesRef.current[index] = new QuantumParticle();
        }
      });

      // Draw quantum entanglement lines
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
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
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Quantum Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Holographic Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="w-full h-full bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent" />
        <div className="w-full h-full bg-gradient-to-tl from-transparent via-purple-500/5 to-transparent" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{
            rotate: 360,
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
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-green-400/20 transform rotate-45"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Neural Network Connections */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(100, 200, 255, 0.3)" />
              <stop offset="50%" stopColor="rgba(200, 100, 255, 0.3)" />
              <stop offset="100%" stopColor="rgba(100, 255, 200, 0.3)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 100 200 Q 300 100 500 200 T 900 200"
            stroke="url(#neuralGradient)"
            strokeWidth="2"
            fill="none"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M 100 400 Q 300 300 500 400 T 900 400"
            stroke="url(#neuralGradient)"
            strokeWidth="2"
            fill="none"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;