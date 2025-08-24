import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackground2026Props {
  children: React.ReactNode;
  className?: string;
}

export default function UltraAdvancedFuturisticBackground2026({ 
  children, 
  className = '' 
}: UltraAdvancedFuturisticBackground2026Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Quantum particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
    }> = [];

    // Initialize particles
    const initParticles = () => {
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: ['#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6'][Math.floor(Math.random() * 5)],
          life: Math.random() * 100,
          maxLife: 100,
          type: ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any
        });
      }
    };

    // Update and draw particles
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
      gradient.addColorStop(0.3, 'rgba(0, 0, 0, 0.9)');
      gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.7)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
        }

        // Draw particle based on type
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;

        switch (particle.type) {
          case 'quantum':
            // Quantum particles with entanglement effect
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Quantum glow effect
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 20;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 2;
            ctx.stroke();
            break;

          case 'holographic':
            // Holographic particles with prism effect
            ctx.beginPath();
            ctx.moveTo(particle.x - particle.size, particle.y);
            ctx.lineTo(particle.x + particle.size, particle.y);
            ctx.lineTo(particle.x, particle.y - particle.size);
            ctx.closePath();
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Holographic shimmer
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 15;
            break;

          case 'neural':
            // Neural network particles
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Neural connections
            particles.forEach((otherParticle, otherIndex) => {
              if (index !== otherIndex) {
                const distance = Math.sqrt(
                  Math.pow(particle.x - otherParticle.x, 2) + 
                  Math.pow(particle.y - otherParticle.y, 2)
                );
                if (distance < 100) {
                  ctx.beginPath();
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(otherParticle.x, otherParticle.y);
                  ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
                  ctx.lineWidth = 1;
                  ctx.stroke();
                }
              }
            });
            break;

          case 'cyberpunk':
            // Cyberpunk particles with digital effect
            ctx.fillStyle = particle.color;
            ctx.fillRect(
              particle.x - particle.size / 2, 
              particle.y - particle.size / 2, 
              particle.size, 
              particle.size
            );
            
            // Digital glitch effect
            if (Math.random() > 0.95) {
              ctx.fillStyle = '#ffffff';
              ctx.fillRect(
                particle.x - particle.size / 2, 
                particle.y - particle.size / 2, 
                particle.size, 
                particle.size
              );
            }
            break;
        }

        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      // Draw quantum field lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.moveTo(0, (canvas.height / 20) * i);
        ctx.lineTo(canvas.width, (canvas.height / 20) * i);
        ctx.stroke();
      }

      // Draw holographic matrix
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.moveTo((canvas.width / 20) * i, 0);
        ctx.lineTo((canvas.width / 20) * i, canvas.height);
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(updateParticles);
    };

    initParticles();
    updateParticles();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 100%)' }}
      />

      {/* Animated Overlay Elements */}
      <div className="relative z-10">
        {/* Floating Quantum Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-40 right-32 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/3 w-28 h-28 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 360, 0],
            x: [0, 25, 0],
            y: [0, -25, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
          <motion.path
            d="M 100 200 Q 300 100 500 200 T 900 200"
            stroke="url(#neural-gradient)"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M 100 200 Q 300 100 500 200 T 900 200",
                "M 100 200 Q 300 300 500 200 T 900 200",
                "M 100 200 Q 300 100 500 200 T 900 200"
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Quantum Field Waves */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(236, 73, 153, 0.1) 0%, transparent 50%)
            `
          }}
        />

        {/* Content */}
        <div className="relative z-20">
          {children}
        </div>
      </div>
    </div>
  );
}