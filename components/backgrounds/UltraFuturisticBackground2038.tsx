import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2038: React.FC = () => {
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
      color: string;
      alpha: number;
      life: number;
    }> = [];

    // Create particles
    const createParticle = () => {
      const colors = [
        'rgba(0, 255, 255, 0.8)',   // Cyan
        'rgba(255, 0, 255, 0.8)',   // Magenta
        'rgba(0, 255, 255, 0.6)',   // Light Cyan
        'rgba(255, 255, 0, 0.6)',   // Yellow
        'rgba(255, 0, 255, 0.4)',   // Light Magenta
      ];

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.5,
        life: Math.random() * 100 + 50,
      });
    };

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      createParticle();
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
          createParticle();
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw connecting lines
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          );

          if (distance < 150) {
            const alpha = (150 - distance) / 150 * 0.3;
            ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Rotating Hexagons */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-20 w-32 h-32"
        >
          <div className="w-full h-full border border-cyan-500/30 transform rotate-45"></div>
        </motion.div>

        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear",
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-40 right-32 w-24 h-24"
        >
          <div className="w-full h-full border border-purple-500/30 transform rotate-45"></div>
        </motion.div>

        {/* Floating Circles */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-blue-500/20 rounded-full"
        />

        <motion.div
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 right-1/3 w-28 h-28 border border-green-500/20 rounded-full"
        />

        {/* Animated Triangles */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear",
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 left-10 w-16 h-16"
        >
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[16px] border-b-pink-500/30 border-r-[8px] border-r-transparent"></div>
        </motion.div>

        {/* Floating Squares */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            rotate: 45,
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 right-20 w-12 h-12 border border-yellow-500/20"
        />

        {/* Pulsing Dots */}
        <motion.div
          animate={{ 
            scale: [0.5, 2, 0.5],
            opacity: [0, 0.8, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/2 w-2 h-2 bg-cyan-400 rounded-full"
        />

        <motion.div
          animate={{ 
            scale: [0.5, 2, 0.5],
            opacity: [0, 0.8, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-400 rounded-full"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Radial Gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Animated Lines */}
        <motion.div
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />

        <motion.div
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        />

        {/* Floating Orbs */}
        <motion.div
          animate={{ 
            y: [0, -100, 0],
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-10 left-1/4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-sm"
        />

        <motion.div
          animate={{ 
            y: [0, 80, 0],
            x: [0, -30, 0],
            scale: [1, 0.8, 1],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-10 right-1/4 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
        />
      </div>

      {/* Neon Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30 blur-sm"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30 blur-sm"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-30 blur-sm"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30 blur-sm"></div>
      </div>
    </>
  );
};

export default UltraFuturisticBackground2038;