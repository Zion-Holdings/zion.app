import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
        this.maxLife = Math.random() * 200 + 100;
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

        // Quantum tunneling effect
        if (Math.random() < 0.01) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Boundary wrapping with quantum uncertainty
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Quantum wave function visualization
        if (this.type === 'quantum') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Quantum interference pattern
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        
        // Holographic projection effect
        if (this.type === 'holographic') {
          ctx.beginPath();
          ctx.moveTo(this.x - this.size, this.y);
          ctx.lineTo(this.x + this.size, this.y);
          ctx.lineTo(this.x, this.y - this.size);
          ctx.closePath();
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Holographic glitch effect
          if (Math.random() < 0.1) {
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
        
        // Neural network visualization
        if (this.type === 'neural') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Neural connections
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + this.vx * 10, this.y + this.vy * 10);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        
        ctx.restore();
      }
    }

    // Matrix code rain effect
    class MatrixCode {
      x: number;
      y: number;
      speed: number;
      chars: string[];
      currentChar: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = Math.random() * 2 + 1;
        this.chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.split('');
        this.currentChar = 0;
      }

      update() {
        this.y += this.speed;
        this.currentChar = (this.currentChar + 1) % this.chars.length;
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.fillStyle = '#00ff00';
        ctx.font = '16px monospace';
        ctx.fillText(this.chars[this.currentChar], this.x, this.y);
        ctx.restore();
      }
    }

    let particles: QuantumParticle[] = [];
    let matrixCodes: MatrixCode[] = [];
    let animationId: number;

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(new QuantumParticle());
    }

    // Initialize matrix codes
    for (let i = 0; i < 50; i++) {
      matrixCodes.push(new MatrixCode());
    }

    const animate = () => {
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 20, 0.1)');
      gradient.addColorStop(0.5, 'rgba(20, 0, 40, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 20, 40, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        if (particle.life <= 0) {
          particles[index] = new QuantumParticle();
        }
      });

      // Update and draw matrix codes
      matrixCodes.forEach((code, index) => {
        code.update();
        code.draw();
        
        if (code.y > canvas.height) {
          matrixCodes[index] = new MatrixCode();
        }
      });

      // Draw quantum entanglement lines
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) +
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          
          if (distance < 100) {
            const alpha = (100 - distance) / 100;
            ctx.globalAlpha = alpha * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // Draw holographic grid
      ctx.save();
      ctx.strokeStyle = 'rgba(128, 0, 255, 0.2)';
      ctx.lineWidth = 0.5;
      
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

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Quantum Matrix Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20">
        {/* Animated quantum particles */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-ping" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse" />
        </motion.div>

        {/* Holographic grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(128,0,255,0.1)_100%),linear-gradient(180deg,transparent_98%,rgba(128,0,255,0.1)_100%)] bg-[length:50px_50px]" />
        
        {/* Quantum wave interference patterns */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(0,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(128,0,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 20%, rgba(0,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(0,255,255,0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>

        {/* Neural network connections */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" style={{ filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.3))' }}>
            <motion.path
              d="M 100 100 Q 200 50 300 100 T 500 100"
              stroke="rgba(0,255,255,0.3)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 100 200 Q 200 150 300 200 T 500 200"
              stroke="rgba(128,0,255,0.3)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <motion.path
              d="M 100 300 Q 200 250 300 300 T 500 300"
              stroke="rgba(0,255,255,0.3)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
          </svg>
        </div>
      </div>

      {/* Canvas for dynamic quantum effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Content with enhanced glassmorphism */}
      <div className="relative z-10">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {children}
        </motion.div>
      </div>

      {/* Floating quantum orbs */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Quantum energy field */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;