import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface UltraFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  hoverEffect?: boolean;
  glowIntensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
}

const UltraFuturisticCard: React.FC<UltraFuturisticCardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  hoverEffect = true,
  glowIntensity = 'medium',
  animated = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Get variant-specific styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900',
          border: 'border border-cyan-500/30',
          glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]',
          accent: 'from-cyan-400 to-blue-500'
        };
      case 'quantum-advanced':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-cyan-900 via-blue-900 to-indigo-900',
          border: 'border border-cyan-500/30',
          glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]',
          accent: 'from-cyan-400 via-blue-400 to-indigo-400'
        };
      case 'holographic':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900',
          border: 'border border-pink-500/30',
          glow: 'shadow-[0_0_30px_rgba(236,72,153,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(236,72,153,0.5)]',
          accent: 'from-pink-400 to-purple-500'
        };
      case 'holographic-advanced':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-purple-900 via-pink-900 to-rose-900',
          border: 'border border-purple-500/30',
          glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]',
          accent: 'from-purple-400 via-pink-400 to-rose-400'
        };
      case 'cyberpunk':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-red-900 to-orange-900',
          border: 'border border-red-500/30',
          glow: 'shadow-[0_0_30px_rgba(239,68,68,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(239,68,68,0.5)]',
          accent: 'from-red-400 to-orange-500'
        };
      case 'neural':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900',
          border: 'border border-emerald-500/30',
          glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]',
          accent: 'from-emerald-400 to-green-500'
        };
      case 'quantum-holographic':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-cyan-900 via-purple-900 to-pink-900',
          border: 'border border-cyan-500/30',
          glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]',
          accent: 'from-cyan-400 via-purple-400 to-pink-400'
        };
      case 'quantum-holographic-advanced':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-cyan-900 via-purple-900 to-pink-900',
          border: 'border border-cyan-500/30',
          glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]',
          accent: 'from-cyan-400 via-purple-400 to-pink-400'
        };
      case 'neural-quantum':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-emerald-900 via-green-900 to-cyan-900',
          border: 'border border-emerald-500/30',
          glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]',
          accent: 'from-emerald-400 via-green-400 to-cyan-400'
        };
      case 'quantum-cyberpunk':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-cyan-900 via-blue-900 to-red-900',
          border: 'border border-cyan-500/30',
          glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]',
          accent: 'from-cyan-400 via-blue-400 to-red-400'
        };
      case 'holographic-neural':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-purple-900 via-pink-900 to-emerald-900',
          border: 'border border-purple-500/30',
          glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]',
          accent: 'from-purple-400 via-pink-400 to-emerald-400'
        };
      case 'quantum-neural-advanced':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-cyan-900 via-blue-900 to-emerald-900',
          border: 'border border-cyan-500/30',
          glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]',
          accent: 'from-cyan-400 via-blue-400 to-emerald-400'
        };
      case 'cyberpunk-holographic':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-red-900 via-pink-900 to-purple-900',
          border: 'border border-red-500/30',
          glow: 'shadow-[0_0_30px_rgba(239,68,68,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(239,68,68,0.5)]',
          accent: 'from-red-400 via-pink-400 to-purple-400'
        };
      case 'quantum-space':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-cyan-900 via-indigo-900 to-blue-900',
          border: 'border border-cyan-500/30',
          glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]',
          accent: 'from-cyan-400 via-indigo-400 to-blue-400'
        };
      case 'ai-futuristic':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-blue-900 via-indigo-900 to-purple-900',
          border: 'border border-blue-500/30',
          glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]',
          accent: 'from-blue-400 via-indigo-400 to-purple-400'
        };
      case 'quantum-entanglement':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900',
          border: 'border border-violet-500/30',
          glow: 'shadow-[0_0_30px_rgba(139,92,246,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]',
          accent: 'from-violet-400 to-purple-500'
        };
      case 'holographic-matrix':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900',
          border: 'border border-teal-500/30',
          glow: 'shadow-[0_0_30px_rgba(20,184,166,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(20,184,166,0.5)]',
          accent: 'from-teal-400 to-cyan-500'
        };
      case 'neural-quantum-cyberpunk':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-emerald-900 via-purple-900 to-red-900',
          border: 'border border-emerald-500/30',
          glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]',
          accent: 'from-emerald-400 via-purple-400 to-red-400'
        };
      case 'quantum-matrix':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900',
          border: 'border border-green-500/30',
          glow: 'shadow-[0_0_30px_rgba(34,197,94,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]',
          accent: 'from-green-400 to-emerald-500'
        };
      case 'neural-cyberpunk':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-emerald-900 via-green-900 to-red-900',
          border: 'border border-emerald-500/30',
          glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]',
          accent: 'from-emerald-400 via-green-400 to-red-400'
        };
      case 'holographic-quantum':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-purple-900 via-pink-900 to-cyan-900',
          border: 'border border-purple-500/30',
          glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]',
          accent: 'from-purple-400 via-pink-400 to-cyan-400'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
          border: 'border border-slate-600/30',
          glow: 'shadow-[0_0_30px_rgba(148,163,184,0.3)]',
          hoverGlow: 'hover:shadow-[0_0_50px_rgba(148,163,184,0.5)]',
          accent: 'from-slate-400 to-slate-500'
        };
    }
  };

  const styles = getVariantStyles();

  // Get glow intensity
  const getGlowIntensity = () => {
    switch (glowIntensity) {
      case 'low':
        return 'shadow-[0_0_20px_rgba(148,163,184,0.2)]';
      case 'high':
        return 'shadow-[0_0_40px_rgba(148,163,184,0.6)]';
      default:
        return styles.glow;
    }
  };

  // Canvas animation for advanced effects
  useEffect(() => {
    if (!animated || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      time += 0.02;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw variant-specific effects
      switch (variant) {
        case 'quantum':
          drawQuantumEffects(ctx, canvas, time);
          break;
        case 'holographic':
          drawHolographicEffects(ctx, canvas, time);
          break;
        case 'cyberpunk':
          drawCyberpunkEffects(ctx, canvas, time);
          break;
        case 'neural':
          drawNeuralEffects(ctx, canvas, time);
          break;
        case 'quantum-entanglement':
          drawQuantumEntanglementEffects(ctx, canvas, time);
          break;
        case 'holographic-matrix':
          drawHolographicMatrixEffects(ctx, canvas, time);
          break;
        case 'neural-quantum-cyberpunk':
          drawNeuralQuantumCyberpunkEffects(ctx, canvas, time);
          break;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, animated]);

  // Effect drawing functions
  const drawQuantumEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    // Quantum particles
    for (let i = 0; i < 5; i++) {
      const x = Math.sin(time + i) * canvas.width * 0.3 + canvas.width * 0.5;
      const y = Math.cos(time + i * 0.7) * canvas.height * 0.3 + canvas.height * 0.5;
      
      ctx.beginPath();
      ctx.arc(x, y, 3 + Math.sin(time * 2 + i) * 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(6, 182, 212, ${0.6 + Math.sin(time + i) * 0.4})`;
      ctx.fill();
    }
  };

  const drawHolographicEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    // Holographic grid
    ctx.strokeStyle = `rgba(236, 72, 153, ${0.3 + Math.sin(time) * 0.2})`;
    ctx.lineWidth = 1;
    
    for (let i = 0; i < canvas.width; i += 30) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    
    for (let i = 0; i < canvas.height; i += 30) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }
  };

  const drawCyberpunkEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    // Scanning lines
    const y = (time * 100) % canvas.height;
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  };

  const drawNeuralEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    // Neural connections
    for (let i = 0; i < 3; i++) {
      const x1 = Math.sin(time + i) * canvas.width * 0.3 + canvas.width * 0.3;
      const y1 = Math.cos(time + i * 0.5) * canvas.height * 0.3 + canvas.height * 0.3;
      const x2 = Math.sin(time + i + 1) * canvas.width * 0.3 + canvas.width * 0.7;
      const y2 = Math.cos(time + i * 0.5 + 1) * canvas.height * 0.3 + canvas.height * 0.7;
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 + Math.sin(time + i) * 0.3})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  };

  const drawSpaceEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    // Stars
    for (let i = 0; i < 20; i++) {
      const x = (i * 50 + time * 20) % canvas.width;
      const y = (i * 30 + time * 15) % canvas.height;
      const size = Math.sin(time + i) * 2 + 1;
      
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + Math.sin(time + i) * 0.2})`;
      ctx.fill();
    }
  };

  const drawQuantumEntanglementEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    // Entangled particles
    for (let i = 0; i < 4; i++) {
      const x1 = Math.sin(time + i) * canvas.width * 0.2 + canvas.width * 0.3;
      const y1 = Math.cos(time + i * 0.7) * canvas.height * 0.2 + canvas.height * 0.3;
      const x2 = Math.sin(time + i + Math.PI) * canvas.width * 0.2 + canvas.width * 0.7;
      const y2 = Math.cos(time + i * 0.7 + Math.PI) * canvas.height * 0.2 + canvas.height * 0.7;
      
      // Draw particles
      ctx.beginPath();
      ctx.arc(x1, y1, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(139, 92, 246, 0.8)`;
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(x2, y2, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(139, 92, 246, 0.8)`;
      ctx.fill();
      
      // Draw connection
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 + Math.sin(time * 2) * 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  };

  const drawHolographicMatrixEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    // Matrix-style grid
    ctx.strokeStyle = `rgba(20, 184, 166, ${0.4 + Math.sin(time) * 0.2})`;
    ctx.lineWidth = 1;
    
    for (let i = 0; i < canvas.width; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    
    for (let i = 0; i < canvas.height; i += 20) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }
    
    // Floating elements
    for (let i = 0; i < 3; i++) {
      const x = Math.sin(time + i) * canvas.width * 0.3 + canvas.width * 0.5;
      const y = Math.cos(time + i * 0.5) * canvas.height * 0.3 + canvas.height * 0.5;
      
      ctx.beginPath();
      ctx.rect(x - 15, y - 15, 30, 30);
      ctx.strokeStyle = `rgba(20, 184, 166, ${0.6 + Math.sin(time * 3 + i) * 0.4})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  };

  const drawNeuralQuantumCyberpunkEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    // Combined effects
    drawNeuralEffects(ctx, canvas, time);
    drawQuantumEffects(ctx, canvas, time);
    drawCyberpunkEffects(ctx, canvas, time);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-2xl backdrop-blur-sm
        ${styles.bg} ${styles.border} ${getGlowIntensity()}
        ${hoverEffect ? styles.hoverGlow : ''}
        transition-all duration-500 ease-out
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={onClick}
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated canvas background */}
      {animated && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        />
      )}

      {/* Holographic overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gradient-to-br from-transparent to-white/20 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gradient-to-bl from-transparent to-white/20 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gradient-to-tr from-transparent to-white/20 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gradient-to-tl from-transparent to-white/20 rounded-br-2xl" />

      {/* Focus indicator */}
      {isFocused && (
        <motion.div
          className="absolute inset-0 rounded-2xl ring-2 ring-white/50 ring-offset-2 ring-offset-slate-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};

export default UltraFuturisticCard;