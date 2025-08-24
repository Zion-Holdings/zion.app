import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2029Props {
  children: React.ReactNode;
}

export default function UltraFuturisticBackground2029({ children }: UltraFuturisticBackground2029Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let time = 0;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`,
        opacity: Math.random() * 0.5 + 0.3
      });
    }

    const animate = () => {
      time += 0.01;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Outer glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw quantum waves
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 5; i++) {
        const waveY = canvas.height * 0.5 + Math.sin(time + i) * 50;
        ctx.beginPath();
        ctx.moveTo(0, waveY);
        
        for (let x = 0; x < canvas.width; x += 10) {
          const y = waveY + Math.sin(x * 0.01 + time + i) * 30;
          ctx.lineTo(x, y);
        }
        
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.1),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.08),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.06),transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Moving gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_70%)] animate-spin-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.04),transparent_70%)] animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {/* Hexagons */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-500/20 rotate-45"
          animate={{
            rotate: [45, -315],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Circles */}
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-emerald-500/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-20 right-1/3 w-16 h-16 border-2 border-blue-500/30 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Triangles */}
        <motion.div
          className="absolute top-1/3 left-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-cyan-500/20"
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-2/3 right-1/4 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-purple-500/20"
          animate={{
            rotate: [0, -360],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Energy Grid Lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleY: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleY: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Quantum Field Effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 4 }}>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.02),transparent_50%)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.02),transparent_50%)]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative" style={{ zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
}