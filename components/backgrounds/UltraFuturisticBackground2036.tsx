import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2036: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      opacity: number;
      color: string;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`
        });
      }
    };

    initParticles();

    // Animation loop
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

        // Draw connections between nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;

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

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.1) 0%, transparent 70%)' }}
      />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            y: [10, -10, 10],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
          animate={{
            y: [-15, 15, -15],
            rotate: [45, 50, 40, 45],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        <motion.div
          className="absolute top-1/2 right-20 w-20 h-20 border border-blue-400/20 transform rotate-12"
          animate={{
            y: [-8, 8, -8],
            rotate: [12, 18, 6, 12],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Animated Lines */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
          animate={{
            height: [0, 128, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        <motion.div
          className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent"
          animate={{
            height: [0, 96, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />

        {/* Radial Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-radial-gradient-cyan opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-radial-gradient-purple opacity-10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-radial-gradient-blue opacity-5" />

        {/* Animated Circles */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.8, 0, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.6, 0, 0.6]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div
          className="absolute top-2/3 left-2/3 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Pulse Rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-cyan-400/30 rounded-full"
          animate={{
            scale: [1, 20, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-purple-400/30 rounded-full"
          animate={{
            scale: [1, 25, 1],
            opacity: [0.4, 0, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2
          }}
        />

        {/* Floating Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4
            }}
          />
        ))}

        {/* Energy Waves */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-400/10 via-transparent to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-400/20" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-400/20" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-blue-400/20" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-pink-400/20" />
      </div>

      {/* CSS for radial gradients */}
      <style jsx>{`
        .bg-radial-gradient-cyan {
          background: radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%);
        }
        .bg-radial-gradient-purple {
          background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
        }
        .bg-radial-gradient-blue {
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
        }
      `}</style>
    </>
  );
};

export default UltraFuturisticBackground2036;