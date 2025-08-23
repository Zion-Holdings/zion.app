import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2036: React.FC = () => {
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
      opacity: number;
      color: string;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: `hsl(${Math.random() * 60 + 180}, 70%, 60%)`
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

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
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (100 - distance) / 100 * 0.3;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Enhanced Geometric Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
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
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Neon Grid Lines */}
        <div className="absolute inset-0">
          {/* Vertical Lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
              style={{ left: `${(i * 100) / 20}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Horizontal Lines */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent"
              style={{ top: `${(i * 100) / 15}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Enhanced Glow Effects */}
        <div className="absolute inset-0">
          {/* Radial Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Moving Glow Orbs */}
          <motion.div
            className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 200, 0],
              y: [0, -100, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -150, 0],
              y: [0, 150, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Enhanced Particle Field */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Enhanced Neon Borders */}
        <div className="absolute inset-0">
          {/* Top Border */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Bottom Border */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            animate={{
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Left Border */}
          <motion.div
            className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-pink-400 to-transparent"
            animate={{
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Right Border */}
          <motion.div
            className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent"
            animate={{
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/10 via-transparent to-purple-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/5 to-transparent"></div>
      </div>
    </>
  );
};

export default UltraFuturisticBackground2036;