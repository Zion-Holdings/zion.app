import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2036Props {
  children?: React.ReactNode;
}

const UltraFuturisticBackground2036: React.FC<UltraFuturisticBackground2036Props> = ({ children }) => {
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

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: ['#00d4ff', '#8b5cf6', '#ec4899', '#3b82f6'][Math.floor(Math.random() * 4)],
        alpha: Math.random() * 0.5 + 0.3
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
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
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw connections between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.strokeStyle = '#00d4ff';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
            ctx.restore();
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Large floating circles */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)'
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)'
          }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Medium floating elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)'
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Small floating elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, -15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)'
          }}
          animate={{
            y: [0, 15, 0],
            x: [0, 15, 0],
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <div 
          className="w-full h-full opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Neon Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-30">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            filter: 'blur(30px)'
          }}
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-40">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2036;