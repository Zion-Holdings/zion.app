import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdvancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space' | 'matrix' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  interactive?: boolean;
  glow?: boolean;
  border?: boolean;
  shadow?: boolean;
  onClick?: () => void;
}

const AdvancedFuturisticCard: React.FC<AdvancedFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'quantum',
  interactive = true,
  glow = true,
  border = true,
  shadow = true,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Variant-specific styles
  const getVariantStyles = () => {
    const baseStyles = {
      quantum: {
        bg: 'bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20',
        border: 'border-cyan-500/50',
        glow: 'shadow-cyan-500/50',
        text: 'text-cyan-400',
        accent: 'from-cyan-500 to-blue-500'
      },
      holographic: {
        bg: 'bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-indigo-900/20',
        border: 'border-pink-500/50',
        glow: 'shadow-pink-500/50',
        text: 'text-pink-400',
        accent: 'from-pink-500 to-purple-500'
      },
      cyberpunk: {
        bg: 'bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20',
        border: 'border-red-500/50',
        glow: 'shadow-red-500/50',
        text: 'text-red-400',
        accent: 'from-red-500 to-orange-500'
      },
      neural: {
        bg: 'bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20',
        border: 'border-green-500/50',
        glow: 'shadow-green-500/50',
        text: 'text-green-400',
        accent: 'from-green-500 to-emerald-500'
      },
      space: {
        bg: 'bg-gradient-to-br from-slate-900/20 via-gray-900/20 to-zinc-900/20',
        border: 'border-slate-500/50',
        glow: 'shadow-slate-500/50',
        text: 'text-slate-400',
        accent: 'from-slate-500 to-gray-500'
      },
      matrix: {
        bg: 'bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-green-800/20',
        border: 'border-green-500/50',
        glow: 'shadow-green-500/50',
        text: 'text-green-400',
        accent: 'from-green-500 to-emerald-500'
      },
      'quantum-holographic': {
        bg: 'bg-gradient-to-br from-cyan-900/20 via-pink-900/20 to-purple-900/20',
        border: 'border-cyan-500/50',
        glow: 'shadow-cyan-500/50',
        text: 'text-cyan-400',
        accent: 'from-cyan-500 to-pink-500'
      },
      'quantum-advanced': {
        bg: 'bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-indigo-900/20',
        border: 'border-cyan-500/50',
        glow: 'shadow-cyan-500/50',
        text: 'text-cyan-400',
        accent: 'from-cyan-500 to-indigo-500'
      },
      'holographic-advanced': {
        bg: 'bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-violet-900/20',
        border: 'border-pink-500/50',
        glow: 'shadow-pink-500/50',
        text: 'text-pink-400',
        accent: 'from-pink-500 to-violet-500'
      },
      'neural-quantum': {
        bg: 'bg-gradient-to-br from-green-900/20 via-cyan-900/20 to-blue-900/20',
        border: 'border-green-500/50',
        glow: 'shadow-green-500/50',
        text: 'text-green-400',
        accent: 'from-green-500 to-blue-500'
      },
      'quantum-cyberpunk': {
        bg: 'bg-gradient-to-br from-cyan-900/20 via-red-900/20 to-orange-900/20',
        border: 'border-cyan-500/50',
        glow: 'shadow-cyan-500/50',
        text: 'text-cyan-400',
        accent: 'from-cyan-500 to-red-500'
      },
      'holographic-neural': {
        bg: 'bg-gradient-to-br from-pink-900/20 via-green-900/20 to-emerald-900/20',
        border: 'border-pink-500/50',
        glow: 'shadow-pink-500/50',
        text: 'text-pink-400',
        accent: 'from-pink-500 to-emerald-500'
      },
      'quantum-holographic-advanced': {
        bg: 'bg-gradient-to-br from-cyan-900/20 via-pink-900/20 to-violet-900/20',
        border: 'border-cyan-500/50',
        glow: 'shadow-cyan-500/50',
        text: 'text-cyan-400',
        accent: 'from-cyan-500 to-violet-500'
      },
      'quantum-matrix': {
        bg: 'bg-gradient-to-br from-cyan-900/20 via-green-900/20 to-emerald-900/20',
        border: 'border-cyan-500/50',
        glow: 'shadow-cyan-500/50',
        text: 'text-cyan-400',
        accent: 'from-cyan-500 to-emerald-500'
      },
      'neural-cyberpunk': {
        bg: 'bg-gradient-to-br from-green-900/20 via-red-900/20 to-orange-900/20',
        border: 'border-green-500/50',
        glow: 'shadow-green-500/50',
        text: 'text-green-400',
        accent: 'from-green-500 to-red-500'
      },
      'holographic-quantum': {
        bg: 'bg-gradient-to-br from-pink-900/20 via-cyan-900/20 to-blue-900/20',
        border: 'border-pink-500/50',
        glow: 'shadow-pink-500/50',
        text: 'text-pink-400',
        accent: 'from-pink-500 to-blue-500'
      },
      'quantum-neural-advanced': {
        bg: 'bg-gradient-to-br from-cyan-900/20 via-green-900/20 to-teal-900/20',
        border: 'border-cyan-500/50',
        glow: 'shadow-cyan-500/50',
        text: 'text-cyan-400',
        accent: 'from-cyan-500 to-teal-500'
      },
      'cyberpunk-holographic': {
        bg: 'bg-gradient-to-br from-red-900/20 via-pink-900/20 to-purple-900/20',
        border: 'border-red-500/50',
        glow: 'shadow-red-500/50',
        text: 'text-red-400',
        accent: 'from-red-500 to-purple-500'
      },
      'quantum-space': {
        bg: 'bg-gradient-to-br from-cyan-900/20 via-slate-900/20 to-gray-900/20',
        border: 'border-cyan-500/50',
        glow: 'shadow-cyan-500/50',
        text: 'text-cyan-400',
        accent: 'from-cyan-500 to-gray-500'
      },
      'ai-futuristic': {
        bg: 'bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-blue-900/20',
        border: 'border-purple-500/50',
        glow: 'shadow-purple-500/50',
        text: 'text-purple-400',
        accent: 'from-purple-500 to-blue-500'
      },
      'quantum-entanglement': {
        bg: 'bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-indigo-900/20',
        border: 'border-cyan-500/50',
        glow: 'shadow-cyan-500/50',
        text: 'text-cyan-400',
        accent: 'from-cyan-500 to-indigo-500'
      },
      'holographic-matrix': {
        bg: 'bg-gradient-to-br from-pink-900/20 via-green-900/20 to-emerald-900/20',
        border: 'border-pink-500/50',
        glow: 'shadow-pink-500/50',
        text: 'text-pink-400',
        accent: 'from-pink-500 to-emerald-500'
      },
      'neural-quantum-cyberpunk': {
        bg: 'bg-gradient-to-br from-green-900/20 via-cyan-900/20 to-red-900/20',
        border: 'border-green-500/50',
        glow: 'shadow-green-500/50',
        text: 'text-green-400',
        accent: 'from-green-500 to-red-500'
      }
    };
    
    return baseStyles[variant as keyof typeof baseStyles] || baseStyles.quantum;
  };

  const styles = getVariantStyles();

  // Hover effects
  const handleMouseEnter = () => {
    if (interactive) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setIsHovered(false);
    }
  };

  const handleMouseDown = () => {
    if (interactive) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    if (interactive) {
      setIsPressed(false);
    }
  };

  // Click handler
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // Animation variants
  const cardVariants = {
    initial: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0
    },
    hover: {
      scale: 1.02,
      rotateX: 2,
      rotateY: 2,
      z: 20
    },
    pressed: {
      scale: 0.98,
      rotateX: 0,
      rotateY: 0,
      z: 10
    }
  };

  const glowVariants = {
    initial: {
      opacity: 0.3,
      scale: 1
    },
    hover: {
      opacity: 0.8,
      scale: 1.1
    }
  };

  const borderVariants = {
    initial: {
      opacity: 0.5,
      scale: 1
    },
    hover: {
      opacity: 1,
      scale: 1.05
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer select-none ${className}`}
      variants={cardVariants}
      initial="initial"
      animate={isPressed ? "pressed" : isHovered ? "hover" : "initial"}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Background */}
      <div className={`absolute inset-0 rounded-2xl ${styles.bg} backdrop-blur-xl`} />
      
      {/* Glow effect */}
      {glow && (
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${styles.accent} opacity-0 blur-2xl`}
          variants={glowVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Border effect */}
      {border && (
        <motion.div
          className={`absolute inset-0 rounded-2xl border ${styles.border}`}
          variants={borderVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Animated border gradient */}
      {border && (
        <div className="absolute inset-0 rounded-2xl p-[1px]">
          <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${styles.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
      )}

      {/* Shadow effect */}
      {shadow && (
        <motion.div
          className={`absolute inset-0 rounded-2xl ${styles.glow}`}
          style={{
            filter: `blur(${isHovered ? '20px' : '10px'})`,
            opacity: isHovered ? 0.6 : 0.3
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 p-6 rounded-2xl">
        {/* Quantum particles effect */}
        {variant.includes('quantum') && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
            <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" />
          </div>
        )}

        {/* Holographic grid effect */}
        {variant.includes('holographic') && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        )}

        {/* Cyberpunk energy effect */}
        {variant.includes('cyberpunk') && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" />
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-orange-500 to-transparent animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
        )}

        {/* Neural network effect */}
        {variant.includes('neural') && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute top-2 left-2 w-3 h-0.5 bg-green-400 rounded-full animate-pulse" />
            <div className="absolute top-2 right-2 w-0.5 h-3 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="absolute bottom-2 left-2 w-2 h-0.5 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        )}

        {/* Space nebula effect */}
        {variant.includes('space') && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-slate-400 rounded-full animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gray-400 rounded-full animate-ping" />
            <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" />
          </div>
        )}

        {/* Matrix effect */}
        {variant.includes('matrix') && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute top-1 left-1 text-xs text-green-400 font-mono animate-pulse">01</div>
            <div className="absolute bottom-1 right-1 text-xs text-green-400 font-mono animate-pulse" style={{ animationDelay: '0.5s' }}>10</div>
            <div className="absolute top-1/2 left-1/2 text-xs text-green-400 font-mono animate-pulse" style={{ animationDelay: '0.3s' }}>11</div>
          </div>
        )}

        {/* Main content */}
        <div className="relative z-20">
          {children}
        </div>

        {/* Interactive feedback */}
        {interactive && (
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${styles.accent} opacity-5`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-500/50 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-500/50 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-500/50 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-500/50 rounded-br-2xl" />
    </motion.div>
  );
};

export default AdvancedFuturisticCard;