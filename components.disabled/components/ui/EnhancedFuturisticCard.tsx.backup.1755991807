import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface EnhancedFuturisticCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  price?: string;
  period?: string;
  link?: string;
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  color?: string;
  textColor?: string;
  gradient?: string;
  popular?: boolean;
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  className?: string;
<<<<<<< HEAD
  variant?: 'holographic' | 'cyberpunk' | 'quantum' | 'neural' | 'matrix' | 'holographic-matrix' | 'quantum-cyberpunk';
=======
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-advanced' | 'holographic-advanced' | 'quantum-holographic-advanced';
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-bcf6
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  glowColor?: string;
  borderColor?: string;
  background?: 'transparent' | 'glass' | 'solid' | 'gradient';
}

export default function EnhancedFuturisticCard({
  children,
  className = '',
  variant = 'holographic',
  intensity = 'medium',
  interactive = true,
  glowColor,
  borderColor,
  background = 'glass'
}: EnhancedFuturisticCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const intensityMultiplier = {
    low: 0.5,
    medium: 1.0,
    high: 1.5
  }[intensity];

  const getVariantStyles = () => {
    const baseStyles = {
      holographic: {
        glow: 'shadow-[0_0_30px_rgba(0,255,255,0.3)]',
        border: 'border-cyan-400/50',
        background: 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20',
        textGlow: 'text-cyan-400',
        accent: 'from-cyan-400 to-blue-500'
      },
      cyberpunk: {
        glow: 'shadow-[0_0_30px_rgba(255,0,255,0.4)]',
        border: 'border-pink-500/50',
        background: 'bg-gradient-to-br from-pink-900/20 to-purple-900/20',
        textGlow: 'text-pink-400',
        accent: 'from-pink-400 to-purple-500'
      },
      quantum: {
        glow: 'shadow-[0_0_30px_rgba(0,255,255,0.5)]',
        border: 'border-blue-400/50',
        background: 'bg-gradient-to-br from-blue-900/20 to-indigo-900/20',
        textGlow: 'text-blue-400',
        accent: 'from-blue-400 to-indigo-500'
      },
      neural: {
        glow: 'shadow-[0_0_30px_rgba(0,255,0,0.3)]',
        border: 'border-green-400/50',
        background: 'bg-gradient-to-br from-green-900/20 to-emerald-900/20',
        textGlow: 'text-green-400',
        accent: 'from-green-400 to-emerald-500'
      },
      matrix: {
        glow: 'shadow-[0_0_30px_rgba(0,255,0,0.4)]',
        border: 'border-green-500/50',
        background: 'bg-gradient-to-br from-green-900/20 to-black/40',
        textGlow: 'text-green-400',
        accent: 'from-green-400 to-green-600'
      },
      'holographic-matrix': {
        glow: 'shadow-[0_0_30px_rgba(0,255,255,0.4)]',
        border: 'border-cyan-400/50',
        background: 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20',
        textGlow: 'text-cyan-400',
        accent: 'from-cyan-400 to-blue-500'
      },
      'quantum-cyberpunk': {
        glow: 'shadow-[0_0_30px_rgba(0,255,255,0.5)]',
        border: 'border-blue-400/50',
        background: 'bg-gradient-to-br from-blue-900/20 to-indigo-900/20',
        textGlow: 'text-blue-400',
        accent: 'from-blue-400 to-indigo-500'
      }
    };

    return baseStyles[variant] || baseStyles.holographic;
  };

<<<<<<< HEAD
  const getBackgroundStyle = () => {
    switch (background) {
      case 'glass':
        return 'backdrop-blur-md bg-white/5';
      case 'solid':
        return 'bg-gray-900/80';
      case 'gradient':
        return 'bg-gradient-to-br from-gray-900/80 to-black/80';
=======
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
        case 'quantum-cyberpunk':
          return `hsl(${320 + Math.sin(time * 0.035) * 100}, 90%, 65%)`;
        case 'holographic-neural':
          return `hsl(${180 + Math.sin(time * 0.02) * 120}, 85%, 70%)`;
        case 'quantum-advanced':
          return `hsl(${300 + Math.sin(time * 0.03) * 140}, 95%, 75%)`;
        case 'holographic-advanced':
          return `hsl(${120 + Math.sin(time * 0.025) * 160}, 90%, 70%)`;
        case 'quantum-holographic-advanced':
          return `hsl(${260 + Math.sin(time * 0.04) * 200}, 98%, 85%)`;
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
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-bcf6
      default:
        return 'backdrop-blur-md bg-white/5';
    }
  };

  const styles = getVariantStyles();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    if (!interactive) return;
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    if (!interactive) return;
    setIsPressed(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-2xl border transition-all duration-300
        ${styles.border} ${styles.background} ${getBackgroundStyle()}
        ${interactive ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      whileHover={interactive ? { scale: 1.02 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      animate={{
        scale: isPressed ? 0.98 : isHovered ? 1.02 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* 3D Transform for Interactive Cards */}
      {interactive && (
        <motion.div
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: 'preserve-3d'
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20
          }}
        >
          {/* Holographic Border Effect */}
          <div className="absolute inset-0 rounded-2xl">
            <div className={`
              absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
              ${isHovered ? 'opacity-100' : ''}
              ${styles.glow}
            `} />
            
            {/* Animated Border Lines */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent"
                animate={{
                  x: isHovered ? ['0%', '100%'] : '0%',
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                  ease: 'linear'
                }}
                style={{ opacity: 0.6 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent"
                animate={{
                  x: isHovered ? ['100%', '0%'] : '0%',
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                  ease: 'linear'
                }}
                style={{ opacity: 0.6 }}
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 p-6">
            {children}
          </div>

          {/* Interactive Hover Effects */}
          <>
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-current to-transparent opacity-60" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-gradient-to-bl from-current to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-gradient-to-tr from-current to-transparent opacity-60" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-tl from-current to-transparent opacity-60" />
            
            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor || styles.textGlow}20, transparent 50%)`
              }}
              animate={{
                opacity: isHovered ? 0.3 : 0
              }}
            />
          </>

          {/* Particle Effects for High Intensity */}
          {intensity === 'high' && (
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-current rounded-full opacity-40"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* Non-interactive Content */}
      {!interactive && (
        <>
          {/* Holographic Border Effect */}
          <div className="absolute inset-0 rounded-2xl">
            <div className={`
              absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
              ${isHovered ? 'opacity-100' : ''}
              ${styles.glow}
            `} />
          </div>

          {/* Content Container */}
          <div className="relative z-10 p-6">
            {children}
          </div>
        </>
      )}
    </motion.div>
  );
}
