import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface QuantumHolographicMatrixBackgroundProps {
  children: React.ReactNode;
  intensity?: number;
  variant?: 'default' | 'intense' | 'subtle' | 'quantum' | 'holographic' | 'matrix';
}

const QuantumHolographicMatrixBackground: React.FC<QuantumHolographicMatrixBackgroundProps> = ({
  children,
  intensity = 1,
  variant = 'default'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'matrix';
    }> = [];

    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor(100 * intensity);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensity,
          vy: (Math.random() - 0.5) * 2 * intensity,
          size: Math.random() * 3 * intensity + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getRandomQuantumColor(),
          type: getRandomParticleType()
        });
      }
    };

    const getRandomQuantumColor = () => {
      const colors = [
        '#00ffff', // Cyan
        '#8b5cf6', // Purple
        '#ec4899', // Pink
        '#10b981', // Green
        '#3b82f6', // Blue
        '#f59e0b', // Yellow
        '#ef4444', // Red
        '#06b6d4', // Teal
        '#a855f7', // Violet
        '#84cc16'  // Lime
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const getRandomParticleType = () => {
      const types: Array<'quantum' | 'holographic' | 'matrix'> = ['quantum', 'holographic', 'matrix'];
      return types[Math.floor(Math.random() * types.length)];
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create quantum field effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
      gradient.addColorStop(0.3, 'rgba(139, 92, 246, 0.05)');
      gradient.addColorStop(0.6, 'rgba(236, 73, 153, 0.03)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle based on type
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        switch (particle.type) {
          case 'quantum':
            drawQuantumParticle(ctx, particle);
            break;
          case 'holographic':
            drawHolographicParticle(ctx, particle);
            break;
          case 'matrix':
            drawMatrixParticle(ctx, particle);
            break;
        }
        
        ctx.restore();

        // Create quantum entanglement lines
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100 * intensity) {
              const opacity = (100 - distance) / 100 * 0.3 * intensity;
              ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw quantum matrix grid
      drawQuantumMatrix(ctx, canvas.width, canvas.height, intensity);

      animationFrameId = requestAnimationFrame(animate);
    };

    const drawQuantumParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.fill();

      // Add quantum glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = particle.size * 3;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawHolographicParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      // Create holographic effect with multiple layers
      for (let i = 0; i < 3; i++) {
        const size = particle.size * (1 + i * 0.3);
        const opacity = particle.opacity * (1 - i * 0.3);
        
        ctx.globalAlpha = opacity;
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const drawMatrixParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      // Draw matrix-style digital rain effect
      ctx.fillStyle = particle.color;
      ctx.font = `${particle.size * 2}px monospace`;
      ctx.fillText('1', particle.x, particle.y);
      
      // Add trailing effect
      for (let i = 1; i < 5; i++) {
        ctx.globalAlpha = particle.opacity * (1 - i * 0.2);
        ctx.fillText('0', particle.x, particle.y + i * particle.size);
      }
    };

    const drawQuantumMatrix = (ctx: CanvasRenderingContext2D, width: number, height: number, intensity: number) => {
      const gridSize = 50 * intensity;
      const time = Date.now() * 0.001;
      
      ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * intensity})`;
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // Animated quantum nodes at intersections
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5;
          const size = 2 * pulse * intensity;
          
          ctx.fillStyle = `rgba(0, 255, 255, ${0.3 * pulse * intensity})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'transparent',
          zIndex: -1
        }}
      />
      
      {/* Additional quantum effects overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-blue-500/5 via-indigo-500/5 to-cyan-500/5" />
        
        {/* Floating quantum orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-green-400/20 to-teal-500/20 blur-xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -25, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default QuantumHolographicMatrixBackground;