import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface QuantumHolographicMatrixBackgroundProps {
  variant?: 'default' | 'quantum' | 'holographic' | 'matrix' | 'neural' | 'cyberpunk';
  intensity?: number;
  children: React.ReactNode;
  className?: string;
}

const QuantumHolographicMatrixBackground: React.FC<QuantumHolographicMatrixBackgroundProps> = ({
  variant = 'quantum',
  intensity = 1.0,
  children,
  className = ''
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
      type: 'quantum' | 'holographic' | 'matrix' | 'neural';
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
          color: getParticleColor(variant),
          type: getParticleType(variant)
        });
      }
    };

    const getParticleColor = (variant: string): string => {
      const colors = {
        quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'],
        holographic: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500'],
        matrix: ['#00ff00', '#00dd00', '#00bb00', '#009900', '#007700'],
        neural: ['#ff69b4', '#4169e1', '#32cd32', '#ffa500', '#9370db'],
        cyberpunk: ['#ff0080', '#00ffff', '#ffff00', '#ff4500', '#9400d3'],
        default: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080']
      };
      const colorArray = colors[variant as keyof typeof colors] || colors.default;
      return colorArray[Math.floor(Math.random() * colorArray.length)];
    };

    const getParticleType = (variant: string): 'quantum' | 'holographic' | 'matrix' | 'neural' => {
      const types: Record<string, 'quantum' | 'holographic' | 'matrix' | 'neural'> = {
        quantum: 'quantum',
        holographic: 'holographic',
        matrix: 'matrix',
        neural: 'neural',
        cyberpunk: 'holographic',
        default: 'quantum'
      };
      return types[variant] || 'quantum';
    };

    const drawParticle = (particle: typeof particles[0]) => {
      if (!ctx) return;

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
        case 'neural':
          drawNeuralParticle(ctx, particle);
          break;
      }

      ctx.restore();
    };

    const drawQuantumParticle = (ctx: CanvasRenderingContext2D, particle: typeof particles[0]) => {
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Quantum entanglement lines
      if (Math.random() > 0.95) {
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(
          particle.x + (Math.random() - 0.5) * 100,
          particle.y + (Math.random() - 0.5) * 100
        );
        ctx.stroke();
      }
    };

    const drawHolographicParticle = (ctx: CanvasRenderingContext2D, particle: typeof particles[0]) => {
      // Holographic effect with multiple layers
      for (let i = 0; i < 3; i++) {
        const offset = i * 2;
        const alpha = particle.opacity * (1 - i * 0.3);
        
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = particle.size - i;
        ctx.beginPath();
        ctx.arc(
          particle.x + offset,
          particle.y + offset,
          particle.size + i * 2,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }
    };

    const drawMatrixParticle = (ctx: CanvasRenderingContext2D, particle: typeof particles[0]) => {
      // Matrix-style digital rain effect
      ctx.fillStyle = particle.color;
      ctx.font = `${particle.size * 3}px monospace`;
      ctx.fillText(
        String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96)),
        particle.x,
        particle.y
      );
    };

    const drawNeuralParticle = (ctx: CanvasRenderingContext2D, particle: typeof particles[0]) => {
      // Neural network node effect
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(0.5, particle.color + '80');
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.fill();

      // Neural connections
      if (Math.random() > 0.98) {
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(
          particle.x + (Math.random() - 0.5) * 150,
          particle.y + (Math.random() - 0.5) * 150
        );
        ctx.stroke();
      }
    };

    const updateParticles = () => {
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Update opacity for breathing effect
        particle.opacity += Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.01;
        particle.opacity = Math.max(0.1, Math.min(0.9, particle.opacity));
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background grid for matrix variant
      if (variant === 'matrix') {
        drawMatrixGrid(ctx);
      }

      // Draw quantum field lines
      if (variant === 'quantum') {
        drawQuantumFieldLines(ctx);
      }

      // Draw neural network structure
      if (variant === 'neural') {
        drawNeuralNetwork(ctx);
      }

      // Update and draw particles
      updateParticles();
      particles.forEach(drawParticle);

      animationFrameId = requestAnimationFrame(animate);
    };

    const drawMatrixGrid = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = '#00ff0040';
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
    };

    const drawQuantumFieldLines = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = '#00ffff40';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;

      for (let i = 0; i < 20; i++) {
        const x = Math.sin(Date.now() * 0.001 + i) * canvas.width * 0.5 + canvas.width * 0.5;
        const y = Math.cos(Date.now() * 0.001 + i) * canvas.height * 0.5 + canvas.height * 0.5;
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawNeuralNetwork = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = '#ff69b440';
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.15;

      // Draw neural connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) +
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
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
  }, [variant, intensity]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Additional visual effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Quantum energy waves */}
        {variant === 'quantum' && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 20%, rgba(255, 255, 0, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        )}

        {/* Holographic interference patterns */}
        {variant === 'holographic' && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(255, 20, 147, 0.05) 0%, transparent 50%, rgba(0, 191, 255, 0.05) 100%)',
                'linear-gradient(-45deg, rgba(50, 205, 50, 0.05) 0%, transparent 50%, rgba(255, 215, 0, 0.05) 100%)',
                'linear-gradient(45deg, rgba(255, 20, 147, 0.05) 0%, transparent 50%, rgba(0, 191, 255, 0.05) 100%)'
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        )}

        {/* Matrix digital rain overlay */}
        {variant === 'matrix' && (
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-400 text-xs font-mono opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
                animate={{
                  y: ['-100%', '100vh']
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                {String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default QuantumHolographicMatrixBackground;