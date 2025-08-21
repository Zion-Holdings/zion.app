import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
  glowColor?: string;
  interactive?: boolean;
  onClick?: () => void;
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'default',
  intensity = 'medium',
  glowColor = 'from-blue-500 to-purple-600',
  interactive = false,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!canvasRef.current || variant === 'default') return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
    }> = [];

    const createParticles = () => {
      const count = intensity === 'high' ? 50 : intensity === 'medium' ? 30 : 15;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: Math.random() * 60,
          maxLife: 60,
          color: getParticleColor(variant)
        });
      }
    };

    const getParticleColor = (variant: string): string => {
      switch (variant) {
        case 'holographic':
          return `hsl(${160 + Math.sin(time * 0.02) * 100}, 90%, 65%)`;
        case 'quantum':
          return `hsl(${280 + Math.sin(time * 0.03) * 80}, 80%, 70%)`;
        case 'cyberpunk':
          return `hsl(${0 + Math.sin(time * 0.04) * 60}, 100%, 60%)`;
        case 'neural':
          return `hsl(${200 + Math.sin(time * 0.015) * 60}, 70%, 60%)`;
        case 'quantum-holographic':
          return `hsl(${220 + Math.sin(time * 0.025) * 180}, 95%, 80%)`;
        case 'quantum-advanced':
          return `hsl(${280 + Math.sin(time * 0.03) * 120}, 90%, 75%)`;
        case 'holographic-advanced':
          return `hsl(${160 + Math.sin(time * 0.025) * 150}, 95%, 70%)`;
        case 'neural-quantum':
          return `hsl(${240 + Math.sin(time * 0.035) * 200}, 90%, 70%)`;
        case 'quantum-cyberpunk':
          return `hsl(${300 + Math.sin(time * 0.045) * 160}, 95%, 75%)`;
        case 'holographic-neural':
          return `hsl(${180 + Math.sin(time * 0.03) * 140}, 85%, 70%)`;
        case 'quantum-holographic-advanced':
          return `hsl(${260 + Math.sin(time * 0.05) * 220}, 98%, 85%)`;
        case 'quantum-matrix':
          return `hsl(${120 + Math.sin(time * 0.04) * 100}, 85%, 65%)`;
        case 'neural-cyberpunk':
          return `hsl(${320 + Math.sin(time * 0.06) * 140}, 90%, 70%)`;
        case 'holographic-quantum':
          return `hsl(${200 + Math.sin(time * 0.035) * 160}, 95%, 75%)`;
        case 'quantum-neural-advanced':
          return `hsl(${250 + Math.sin(time * 0.045) * 180}, 92%, 80%)`;
        case 'cyberpunk-holographic':
          return `hsl(${340 + Math.sin(time * 0.055) * 120}, 95%, 70%)`;
        case 'quantum-space':
          return `hsl(${220 + Math.sin(time * 0.065) * 200}, 88%, 75%)`;
        case 'ai-futuristic':
          return `hsl(${180 + Math.sin(time * 0.075) * 240}, 90%, 80%)`;
        case 'quantum-entanglement':
          return `hsl(${280 + Math.sin(time * 0.085) * 160}, 95%, 85%)`;
        case 'holographic-matrix':
          return `hsl(${140 + Math.sin(time * 0.095) * 180}, 92%, 70%)`;
        case 'neural-quantum-cyberpunk':
          return `hsl(${300 + Math.sin(time * 0.105) * 220}, 98%, 90%)`;
        default:
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
      }
    };

    const animate = () => {
      time += 0.016;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and render particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        if (particle.life > 0) {
          const alpha = particle.life / particle.maxLife;
          ctx.globalAlpha = alpha;
          ctx.fillStyle = particle.color;
          ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
        } else {
          particles.splice(index, 1);
        }

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      // Add new particles
      if (particles.length < (intensity === 'high' ? 50 : intensity === 'medium' ? 30 : 15)) {
        createParticles();
      }

      // Draw variant-specific effects
      switch (variant) {
        case 'holographic':
          drawHolographicGrid(ctx, canvas, time);
          break;
        case 'quantum':
          drawQuantumEffects(ctx, canvas, time);
          break;
        case 'cyberpunk':
          drawCyberpunkEffects(ctx, canvas, time);
          break;
        case 'neural':
          drawNeuralConnections(ctx, canvas, time);
          break;
        case 'quantum-holographic':
          drawQuantumHolographicEffects(ctx, canvas, time);
          break;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawHolographicGrid = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
      ctx.strokeStyle = `hsla(${160 + Math.sin(time * 0.015) * 100}, 90%, 65%, 0.3)`;
      ctx.lineWidth = 0.5;
      const gridSize = 30;
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

    const drawQuantumEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
      // Quantum entanglement lines
      ctx.strokeStyle = `hsla(${280 + Math.sin(time * 0.02) * 80}, 80%, 70%, 0.4)`;
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i += 2) {
        if (i + 1 < particles.length) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
          ctx.stroke();
        }
      }
    };

    const drawCyberpunkEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
      // Glitch effect
      if (Math.random() < 0.02) {
        ctx.fillStyle = '#ff00ff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      // Scan lines
      ctx.strokeStyle = `hsla(0, 100%, 60%, ${0.1 + Math.sin(time * 0.1) * 0.05})`;
      ctx.lineWidth = 1;
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawNeuralConnections = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
      // Neural network connections
      ctx.strokeStyle = `hsla(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%, 0.3)`;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i += 2) {
        if (i + 1 < particles.length) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[i + 1].x, 2) +
            Math.pow(particles[i].y - particles[i + 1].y, 2)
          );
          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawQuantumHolographicEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
      drawHolographicGrid(ctx, canvas, time);
      drawQuantumEffects(ctx, canvas, time);
      
      // Quantum wave interference
      ctx.strokeStyle = `hsla(${220 + Math.sin(time * 0.025) * 180}, 95%, 80%, 0.2)`;
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        const radius = 50 + i * 20 + Math.sin(time * 0.01 + i) * 10;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    createParticles();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  const getCardStyles = () => {
    const baseStyles = 'relative overflow-hidden rounded-2xl backdrop-blur-sm border transition-all duration-500';
    
    switch (variant) {
      case 'holographic':
        return `${baseStyles} bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-500/30 shadow-lg shadow-cyan-500/20`;
      case 'quantum':
        return `${baseStyles} bg-gradient-to-br from-purple-500/20 to-pink-600/20 border-purple-500/30 shadow-lg shadow-purple-500/20`;
      case 'cyberpunk':
        return `${baseStyles} bg-gradient-to-br from-red-500/20 to-orange-600/20 border-red-500/30 shadow-lg shadow-red-500/20`;
      case 'neural':
        return `${baseStyles} bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border-blue-500/30 shadow-lg shadow-blue-500/20`;
      case 'quantum-holographic':
        return `${baseStyles} bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border-indigo-500/30 shadow-lg shadow-indigo-500/20`;
      default:
        return `${baseStyles} bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 shadow-lg`;
    }
  };

  const getGlowEffect = () => {
    if (!isHovered && !isFocused) return '';
    
    const glowIntensity = isHovered ? 'shadow-2xl' : 'shadow-lg';
    return `${glowIntensity} shadow-${glowColor.split('-')[1]}-500/50`;
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${getCardStyles()} ${getGlowEffect()} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={onClick}
      whileHover={interactive ? { scale: 1.02, y: -5 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Animated background canvas */}
      {variant !== 'default' && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        />
      )}

      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Animated border */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(45deg, ${glowColor})`,
              backgroundSize: '400% 400%'
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.3,
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-transparent to-current opacity-50" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-gradient-to-bl from-transparent to-current opacity-50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-gradient-to-tr from-transparent to-current opacity-50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-tl from-transparent to-current opacity-50" />
    </motion.div>
  );
};

export default EnhancedFuturisticCard;