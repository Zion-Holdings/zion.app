import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2035Props {
  children?: React.ReactNode;
  className?: string;
}

const UltraFuturisticBackground2035: React.FC<UltraFuturisticBackground2035Props> = ({ 
  children, 
  className = '' 
}) => {
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
      life: number;
      maxLife: number;
    }> = [];

    // Create particles
    const createParticle = (x: number, y: number) => {
      const colors = [
        '#00ffff', // Cyan
        '#ff00ff', // Magenta
        '#ffff00', // Yellow
        '#00ff00', // Green
        '#ff0080', // Pink
        '#8000ff', // Purple
        '#ff8000', // Orange
        '#0080ff'  // Blue
      ];
      
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        maxLife: Math.random() * 100 + 50
      });
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Remove dead particles
        if (particle.life > particle.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle with glow effect
        const alpha = 1 - (particle.life / particle.maxLife);
        ctx.save();
        
        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.globalAlpha = alpha;
        
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }

      // Create new particles
      if (Math.random() < 0.1) {
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }

      // Create particles on mouse movement
      if (Math.random() < 0.05) {
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
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
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 opacity-60"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 opacity-60 rounded-full"
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 opacity-60 transform rotate-45"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.7, 0.6]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Neon Lines */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
        animate={{
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60"
        animate={{
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Energy Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 1, 0.8],
          boxShadow: [
            "0 0 20px rgba(0, 255, 255, 0.5)",
            "0 0 40px rgba(0, 255, 255, 0.8)",
            "0 0 20px rgba(0, 255, 255, 0.5)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.7, 1, 0.7],
          boxShadow: [
            "0 0 15px rgba(255, 0, 255, 0.5)",
            "0 0 30px rgba(255, 0, 255, 0.8)",
            "0 0 15px rgba(255, 0, 255, 0.5)"
          ]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Holographic Rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-300/20 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 border border-purple-300/15 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: -360,
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Quantum Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
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
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2035;