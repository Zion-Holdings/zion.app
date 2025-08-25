import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2032Props {
  children: React.ReactNode;
  className?: string;
}

const UltraFuturisticBackground2032: React.FC<UltraFuturisticBackground2032Props> = ({ 
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

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    // Create particles
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`,
          alpha: Math.random() * 0.5 + 0.3
        });
      }
    };

    // Update and draw particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.8)');
      gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.6)');
      gradient.addColorStop(1, 'rgba(51, 65, 85, 0.4)');
      ctx.fillStyle = gradient;
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

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < 100) {
              ctx.save();
              ctx.globalAlpha = (100 - distance) / 100 * 0.1;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    createParticles();
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
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          animate={{
            rotate: [0, 360],
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
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/30 transform rotate-45"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-blue-400/30 transform rotate-12"
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Neon Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent opacity-30" />
        
        {/* Horizontal Lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
            style={{ top: `${(i + 1) * 10}%` }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleX: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}

        {/* Vertical Lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-400/40 to-transparent"
            style={{ left: `${(i + 1) * 10}%` }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleY: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 10 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Floating Data Streams */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute text-xs font-mono text-cyan-400/60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          >
            {`0x${Math.random().toString(16).substr(2, 8).toUpperCase()}`}
          </motion.div>
        ))}
      </div>

      {/* Energy Orbs */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-4 h-4 rounded-full"
            style={{
              left: `${25 + i * 20}%`,
              top: `${60 + i * 15}%`,
              background: `radial-gradient(circle, rgba(56, 189, 248, 0.8) 0%, rgba(147, 51, 234, 0.4) 50%, transparent 100%)`
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.8, 0.3],
              boxShadow: [
                '0 0 20px rgba(56, 189, 248, 0.5)',
                '0 0 40px rgba(56, 189, 248, 0.8)',
                '0 0 20px rgba(56, 189, 248, 0.5)'
              ]
            }}
            transition={{
              duration: 6 + i * 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-50">
        {children}
      </div>

      {/* Overlay Gradient */}
      <div className="fixed inset-0 pointer-events-none z-45">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-slate-900/10" />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2032;