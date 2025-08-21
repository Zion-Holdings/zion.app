import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  glowIntensity?: 'low' | 'medium' | 'high';
  animationSpeed?: 'slow' | 'normal' | 'fast';
}

const UltraFuturisticCard: React.FC<UltraFuturisticCardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  interactive = false,
  glowIntensity = 'medium',
  animationSpeed = 'normal'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    if (interactive) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (interactive) {
        document.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [interactive]);

  const getVariantStyles = () => {
    const baseStyles = 'relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500';
    
    switch (variant) {
      case 'quantum':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-cyan-900/80 border-cyan-500/30 shadow-2xl shadow-cyan-500/20`;
      case 'holographic':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-pink-900/80 border-purple-500/30 shadow-2xl shadow-purple-500/20`;
      case 'cyberpunk':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-red-900/60 to-orange-900/80 border-red-500/30 shadow-2xl shadow-red-500/20`;
      case 'neural':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-green-900/60 to-emerald-900/80 border-green-500/30 shadow-2xl shadow-green-500/20`;
      case 'quantum-holographic':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-blue-900/60 via-purple-900/60 to-pink-900/80 border-cyan-500/30 border-purple-500/30 shadow-2xl shadow-cyan-500/20 shadow-purple-500/20`;
      case 'quantum-advanced':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-indigo-900/60 via-blue-900/60 to-cyan-900/80 border-cyan-500/30 border-blue-500/30 shadow-2xl shadow-cyan-500/20 shadow-blue-500/20`;
      case 'holographic-advanced':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-violet-900/60 via-purple-900/60 to-pink-900/80 border-purple-500/30 border-pink-500/30 shadow-2xl shadow-purple-500/20 shadow-pink-500/20`;
      case 'neural-quantum':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-green-900/60 via-blue-900/60 to-cyan-900/80 border-green-500/30 border-cyan-500/30 shadow-2xl shadow-green-500/20 shadow-cyan-500/20`;
      case 'quantum-cyberpunk':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-blue-900/60 via-red-900/60 to-orange-900/80 border-cyan-500/30 border-red-500/30 shadow-2xl shadow-cyan-500/20 shadow-red-500/20`;
      case 'holographic-neural':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-purple-900/60 via-green-900/60 to-emerald-900/80 border-purple-500/30 border-green-500/30 shadow-2xl shadow-purple-500/20 shadow-green-500/20`;
      case 'quantum-holographic-advanced':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-blue-900/60 via-purple-900/60 via-pink-900/60 to-cyan-900/80 border-cyan-500/30 border-purple-500/30 border-pink-500/30 shadow-2xl shadow-cyan-500/20 shadow-purple-500/20 shadow-pink-500/20`;
      case 'quantum-matrix':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-green-900/60 via-blue-900/60 to-cyan-900/80 border-green-500/30 border-cyan-500/30 shadow-2xl shadow-green-500/20 shadow-cyan-500/20`;
      case 'neural-cyberpunk':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-green-900/60 via-red-900/60 to-orange-900/80 border-green-500/30 border-red-500/30 shadow-2xl shadow-green-500/20 shadow-red-500/20`;
      case 'holographic-quantum':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-purple-900/60 via-blue-900/60 to-cyan-900/80 border-purple-500/30 border-cyan-500/30 shadow-2xl shadow-purple-500/20 shadow-cyan-500/20`;
      case 'quantum-neural-advanced':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-blue-900/60 via-green-900/60 via-emerald-900/60 to-cyan-900/80 border-cyan-500/30 border-green-500/30 border-emerald-500/30 shadow-2xl shadow-cyan-500/20 shadow-green-500/20 shadow-emerald-500/20`;
      case 'cyberpunk-holographic':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-red-900/60 via-purple-900/60 to-pink-900/80 border-red-500/30 border-purple-500/30 shadow-2xl shadow-red-500/20 shadow-purple-500/20`;
      case 'quantum-space':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-blue-900/60 via-indigo-900/60 to-purple-900/80 border-cyan-500/30 border-indigo-500/30 shadow-2xl shadow-cyan-500/20 shadow-indigo-500/20`;
      case 'ai-futuristic':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-violet-900/60 via-blue-900/60 to-cyan-900/80 border-violet-500/30 border-cyan-500/30 shadow-2xl shadow-violet-500/20 shadow-cyan-500/20`;
      case 'quantum-entanglement':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-blue-900/60 via-cyan-900/60 to-teal-900/80 border-cyan-500/30 border-teal-500/30 shadow-2xl shadow-cyan-500/20 shadow-teal-500/20`;
      case 'holographic-matrix':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-purple-900/60 via-pink-900/60 to-rose-900/80 border-purple-500/30 border-pink-500/30 shadow-2xl shadow-purple-500/20 shadow-pink-500/20`;
      case 'neural-quantum-cyberpunk':
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-green-900/60 via-blue-900/60 via-red-900/60 to-orange-900/80 border-green-500/30 border-cyan-500/30 border-red-500/30 shadow-2xl shadow-green-500/20 shadow-cyan-500/20 shadow-red-500/20`;
      default:
        return `${baseStyles} bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 border-slate-600/30 shadow-2xl shadow-slate-500/20`;
    }
  };

  const getGlowIntensity = () => {
    switch (glowIntensity) {
      case 'low':
        return 'shadow-lg';
      case 'medium':
        return 'shadow-2xl';
      case 'high':
        return 'shadow-2xl shadow-[0_0_50px_rgba(0,255,255,0.3)]';
      default:
        return 'shadow-2xl';
    }
  };

  const getAnimationSpeed = () => {
    switch (animationSpeed) {
      case 'slow':
        return 2;
      case 'normal':
        return 1;
      case 'fast':
        return 0.5;
      default:
        return 1;
    }
  };

  const getVariantEffects = () => {
    switch (variant) {
      case 'quantum':
        return (
          <>
            {/* Quantum field lines */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  style={{
                    top: `${20 + i * 15}%`,
                    animation: `quantumWave ${3 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
            {/* Quantum particles */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{
                    left: `${10 + i * 10}%`,
                    top: `${15 + i * 8}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${2 + i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </>
        );
      case 'holographic':
        return (
          <>
            {/* Holographic grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(138, 43, 226, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(138, 43, 226, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }} />
            </div>
            {/* Holographic scan lines */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse" />
            </div>
          </>
        );
      case 'cyberpunk':
        return (
          <>
            {/* Cyberpunk matrix rain */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-green-400 text-xs font-mono animate-pulse"
                  style={{
                    left: `${5 + i * 8}%`,
                    top: `${10 + i * 5}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${1.5 + i * 0.3}s`
                  }}
                >
                  01
                </div>
              ))}
            </div>
            {/* Cyberpunk energy waves */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent animate-pulse" />
            </div>
          </>
        );
      case 'neural':
        return (
          <>
            {/* Neural connections */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-16 h-16 border border-green-400/30 rounded-full animate-spin"
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${20 + i * 10}%`,
                    animationDuration: `${10 + i * 2}s`,
                    animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                  }}
                />
              ))}
            </div>
            {/* Neural pulses */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-400/10 to-transparent animate-pulse" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const cardVariants = {
    initial: { 
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      y: 0
    },
    hover: { 
      scale: 1.02,
      rotateX: interactive ? 5 : 0,
      rotateY: interactive ? 5 : 0,
      y: -5
    },
    focus: { 
      scale: 1.01,
      rotateX: 0,
      rotateY: 0,
      y: -2
    }
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: { opacity: 1, scale: 1.2 },
    focus: { opacity: 0.8, scale: 1.1 }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${getVariantStyles()} ${getGlowIntensity()} ${className}`}
      variants={cardVariants}
      initial="initial"
      whileHover={interactive ? "hover" : "initial"}
      whileFocus={interactive ? "focus" : "initial"}
      animate={isFocused ? "focus" : "initial"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      transition={{
        duration: 0.3 * getAnimationSpeed(),
        ease: "easeOut"
      }}
    >
      {/* Background effects */}
      {getVariantEffects()}
      
      {/* Interactive mouse tracking effect */}
      {interactive && isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial="initial"
          animate="hover"
          variants={glowVariants}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl"
            style={{
              left: mousePosition.x - 64,
              top: mousePosition.y - 64,
              transform: 'translateZ(0)'
            }}
          />
        </motion.div>
      )}
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-purple-400/50 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-green-400/50 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-pink-400/50 rounded-br-2xl" />
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes quantumWave {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(100%); opacity: 1; }
        }
        
        @keyframes holographicScan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        
        @keyframes cyberpunkMatrix {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(100%); opacity: 1; }
        }
        
        @keyframes neuralPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
    </motion.div>
  );
};

export default UltraFuturisticCard;