import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticNeonBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const UltraFuturisticNeonBackground: React.FC<UltraFuturisticNeonBackgroundProps> = ({
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
      opacity: number;
      color: string;
    }> = [];

    // Initialize particles
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
      });

      // Draw neon grid lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 100) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 100) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw floating neon orbs
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {
        const x = Math.sin(time + i) * 200 + canvas.width / 2;
        const y = Math.cos(time + i * 0.7) * 200 + canvas.height / 2;
        const size = Math.sin(time * 2 + i) * 20 + 40;

        // Orb glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, `rgba(0, 255, 255, ${0.3 + Math.sin(time + i) * 0.1})`);
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Orb border
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.6 + Math.sin(time + i) * 0.2})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
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
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80" style={{ zIndex: 1 }} />
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 49%, rgba(0, 255, 255, 0.1) 50%, transparent 51%), linear-gradient(0deg, transparent 49%, rgba(0, 255, 255, 0.1) 50%, transparent 51%)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Floating Neon Orbs */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-teal-500 opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Animated Border Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 4 }}>
        <motion.div
          className="absolute inset-0 border-2 border-transparent"
          animate={{
            borderColor: [
              'rgba(0, 255, 255, 0.1)',
              'rgba(0, 255, 255, 0.3)',
              'rgba(0, 255, 255, 0.1)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default UltraFuturisticNeonBackground;