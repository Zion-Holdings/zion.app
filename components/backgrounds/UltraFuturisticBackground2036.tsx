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

    // Particle system
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
        color: ['#00d4ff', '#8b5cf6', '#ec4899', '#3b82f6', '#10b981'][Math.floor(Math.random() * 5)],
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
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
        particles.forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.lineWidth = 0.5;
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
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Animated Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`vertical-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
              style={{ left: `${(i * 100) / 20}%` }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleY: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
          
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`horizontal-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              style={{ top: `${(i * 100) / 15}%` }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleX: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.15
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          animate={{
            rotate: [0, 360],
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
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
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
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-2/3 right-1/3 w-20 h-20 border border-green-400/20 transform rotate-12"
          animate={{
            y: [0, 15, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Neon Glow Effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 blur-3xl"></div>
        </div>

        <div className="absolute top-1/4 right-1/4">
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 blur-2xl"></div>
        </div>

        <div className="absolute bottom-1/4 left-1/4">
          <div className="w-80 h-80 rounded-full bg-gradient-to-r from-green-500/5 via-teal-500/5 to-cyan-500/5 blur-3xl"></div>
        </div>

        {/* Scanning Lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-1"
          animate={{
            y: [0, window.innerHeight]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent w-1"
          animate={{
            x: [0, window.innerWidth]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-400/30"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-400/30"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-pink-400/30"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-blue-400/30"></div>

        {/* Pulsing Rings */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-cyan-400/20 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1
            }}
          />
        ))}

        {/* Data Stream Effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"
              style={{ left: `${20 + i * 20}%` }}
              animate={{
                y: [-100, window.innerHeight + 100]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.5
              }}
            />
          ))}
        </div>

        {/* Quantum Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`quantum-${i}`}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + i * 8}%`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Overlay Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
    </>
  );
};

export default UltraFuturisticBackground2036;