import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function UltraAdvancedFuturisticBackground2036() {
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
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;
      maxLife: number;
    }> = [];

    // Create particles
    const createParticle = () => {
      const colors = [
        'rgba(0, 212, 255, 0.8)',   // Cyan
        'rgba(139, 92, 246, 0.8)',  // Purple
        'rgba(236, 72, 153, 0.8)',  // Pink
        'rgba(16, 185, 129, 0.8)',  // Emerald
        'rgba(245, 158, 11, 0.8)',  // Amber
      ];

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3,
        life: Math.random() * 100 + 50,
        maxLife: Math.random() * 100 + 50,
      };
    };

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(createParticle());
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Update life
        particle.life--;
        if (particle.life <= 0) {
          particles[index] = createParticle();
        }

        // Draw particle
        const alpha = (particle.life / particle.maxLife) * particle.opacity;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.lineWidth = 0.5;
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const alpha = Math.max(0, 1 - distance / 100) * 0.3;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      // Reset global alpha
      ctx.globalAlpha = 1;

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
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        {/* Radial gradients for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(236,72,153,0.05),transparent_50%)]" />
        
        {/* Additional depth layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(16,185,129,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(245,158,11,0.05),transparent_50%)]" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hexagons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute"
            style={{
              left: `${10 + (i * 10) % 80}%`,
              top: `${20 + (i * 15) % 60}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 clip-path-hexagon" />
          </motion.div>
        ))}

        {/* Triangles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`tri-${i}`}
            className="absolute"
            style={{
              left: `${15 + (i * 12) % 70}%`,
              top: `${30 + (i * 20) % 50}%`,
            }}
            animate={{
              rotate: [0, -360],
              scale: [0.6, 1.4, 0.6],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: Math.random() * 12 + 18,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 clip-path-triangle" />
          </motion.div>
        ))}

        {/* Circles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute"
            style={{
              left: `${5 + (i * 8) % 85}%`,
              top: `${10 + (i * 18) % 70}%`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Energy Waves */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute inset-0"
            style={{
              background: `conic-gradient(from ${i * 120}deg, transparent, rgba(0,212,255,0.1), transparent)`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Neon Glow Effects */}
      <div className="absolute inset-0">
        {/* Corner glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-full blur-3xl" />
        
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .clip-path-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
}