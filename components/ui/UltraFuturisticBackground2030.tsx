import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2030Props {
  children: React.ReactNode;
  className?: string;
}

const UltraFuturisticBackground2030: React.FC<UltraFuturisticBackground2030Props> = ({ 
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
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`,
          alpha: Math.random() * 0.8 + 0.2
        });
      }
    };

    // Update and draw particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)'); // slate-900
      gradient.addColorStop(0.3, 'rgba(30, 41, 59, 0.95)'); // slate-800
      gradient.addColorStop(0.7, 'rgba(51, 65, 85, 0.95)'); // slate-700
      gradient.addColorStop(1, 'rgba(71, 85, 105, 0.95)'); // slate-600
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
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
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.strokeStyle = `rgba(147, 51, 234, ${(100 - distance) / 100})`; // purple-600
            ctx.lineWidth = 1;
            ctx.shadowColor = 'rgba(147, 51, 234, 0.5)';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      // Draw floating geometric shapes
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {
        const x = (canvas.width / 6) * (i + 1);
        const y = canvas.height / 2 + Math.sin(time + i) * 100;
        
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = `hsl(${240 + i * 30}, 70%, 60%)`;
        ctx.lineWidth = 2;
        ctx.shadowColor = `hsl(${240 + i * 30}, 70%, 60%)`;
        ctx.shadowBlur = 30;
        
        // Draw hexagon
        ctx.beginPath();
        for (let j = 0; j < 6; j++) {
          const angle = (j * Math.PI) / 3 + time * 0.5;
          const radius = 30 + Math.sin(time * 2 + i) * 10;
          const px = x + Math.cos(angle) * radius;
          const py = y + Math.sin(angle) * radius;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
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

      {/* Floating Neon Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Top left neon corner */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32"
          animate={{
            boxShadow: [
              '0 0 20px rgba(147, 51, 234, 0.5)',
              '0 0 40px rgba(147, 51, 234, 0.8)',
              '0 0 20px rgba(147, 51, 234, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-full h-full border-l-2 border-t-2 border-purple-500 rounded-tl-lg"></div>
        </motion.div>

        {/* Top right neon corner */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32"
          animate={{
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.5)',
              '0 0 40px rgba(59, 130, 246, 0.8)',
              '0 0 20px rgba(59, 130, 246, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <div className="w-full h-full border-r-2 border-t-2 border-blue-500 rounded-tr-lg"></div>
        </motion.div>

        {/* Bottom left neon corner */}
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32"
          animate={{
            boxShadow: [
              '0 0 20px rgba(16, 185, 129, 0.5)',
              '0 0 40px rgba(16, 185, 129, 0.8)',
              '0 0 20px rgba(16, 185, 129, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <div className="w-full h-full border-l-2 border-b-2 border-emerald-500 rounded-bl-lg"></div>
        </motion.div>

        {/* Bottom right neon corner */}
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32"
          animate={{
            boxShadow: [
              '0 0 20px rgba(239, 68, 68, 0.5)',
              '0 0 40px rgba(239, 68, 68, 0.8)',
              '0 0 20px rgba(239, 68, 68, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        >
          <div className="w-full h-full border-r-2 border-b-2 border-red-500 rounded-br-lg"></div>
        </motion.div>

        {/* Floating neon orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-emerald-500 rounded-full"
          animate={{
            x: [0, 30, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Animated grid overlay */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2030;