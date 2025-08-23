import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraAdvancedFuturisticBackground2025: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        alpha: Math.random() * 0.5 + 0.3
      });
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.restore();

        // Connect nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(100, 150, 255, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -10 }}
      />

      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Floating Hexagons */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 clip-hexagon"></div>
        </motion.div>

        <motion.div
          className="absolute top-40 right-32 w-24 h-24 opacity-30"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-500 clip-hexagon"></div>
        </motion.div>

        {/* Floating Circles */}
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-green-400 to-teal-500 rounded-full"></div>
        </motion.div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(90deg,transparent_98%,rgba(100,150,255,0.3)_100%),linear-gradient(180deg,transparent_98%,rgba(100,150,255,0.3)_100%)] bg-[length:50px_50px]"></div>
        </div>

        {/* Neon Lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Vertical Neon Lines */}
        <motion.div
          className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-0 left-3/4 h-full w-px bg-gradient-to-b from-transparent via-pink-400 to-transparent"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Floating Data Points */}
        <motion.div
          className="absolute top-1/3 right-1/4 text-xs text-cyan-400 font-mono opacity-60"
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          01.101.010
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/4 text-xs text-purple-400 font-mono opacity-60"
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          QUANTUM_001
        </motion.div>

        {/* Holographic Elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full border border-cyan-400/30 rounded-full"></div>
          <div className="absolute inset-4 border border-purple-400/30 rounded-full"></div>
          <div className="absolute inset-8 border border-pink-400/30 rounded-full"></div>
        </motion.div>

        {/* Energy Waves */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32 opacity-20"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,60 Q300,30 600,60 T1200,60 L1200,120 L0,120 Z"
              fill="url(#energyGradient)"
            />
            <defs>
              <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(100,150,255,0.3)" />
                <stop offset="50%" stopColor="rgba(150,100,255,0.3)" />
                <stop offset="100%" stopColor="rgba(255,100,150,0.3)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* CSS for hexagon clip */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground2025;