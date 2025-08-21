import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuantumHolographicCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'quantum' | 'holographic' | 'matrix' | 'neural' | 'cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  glowColor?: string;
  borderColor?: string;
  background?: 'transparent' | 'glass' | 'solid' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  elevation?: 'none' | 'low' | 'medium' | 'high' | 'extreme';
}

const QuantumHolographicCard: React.FC<QuantumHolographicCardProps> = ({
  children,
  className = '',
  variant = 'quantum',
  intensity = 'medium',
  interactive = true,
  glowColor,
  borderColor,
  background = 'glass',
  size = 'md',
  elevation = 'medium'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const getVariantColors = () => {
    switch (variant) {
      case 'quantum':
        return {
          primary: '#00ffff',
          secondary: '#8b5cf6',
          accent: '#06b6d4',
          glow: '#00ffff',
          border: '#00ffff'
        };
      case 'holographic':
        return {
          primary: '#8b5cf6',
          secondary: '#ec4899',
          accent: '#a855f7',
          glow: '#8b5cf6',
          border: '#8b5cf6'
        };
      case 'matrix':
        return {
          primary: '#00ff00',
          secondary: '#10b981',
          accent: '#059669',
          glow: '#00ff00',
          border: '#00ff00'
        };
      case 'neural':
        return {
          primary: '#ff00ff',
          secondary: '#ec4899',
          accent: '#f97316',
          glow: '#ff00ff',
          border: '#ff00ff'
        };
      case 'cyberpunk':
        return {
          primary: '#f97316',
          secondary: '#ef4444',
          accent: '#f59e0b',
          glow: '#f97316',
          border: '#f97316'
        };
      default:
        return {
          primary: '#00ffff',
          secondary: '#8b5cf6',
          accent: '#06b6d4',
          glow: '#00ffff',
          border: '#00ffff'
        };
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'p-4 text-sm';
      case 'md':
        return 'p-6 text-base';
      case 'lg':
        return 'p-8 text-lg';
      case 'xl':
        return 'p-10 text-xl';
      default:
        return 'p-6 text-base';
    }
  };

  const getElevationClasses = () => {
    switch (elevation) {
      case 'none':
        return '';
      case 'low':
        return 'shadow-lg';
      case 'medium':
        return 'shadow-2xl';
      case 'high':
        return 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]';
      case 'extreme':
        return 'shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)]';
      default:
        return 'shadow-2xl';
    }
  };

  const getBackgroundClasses = () => {
    switch (background) {
      case 'transparent':
        return 'bg-transparent';
      case 'glass':
        return 'bg-black/20 backdrop-blur-xl border border-white/10';
      case 'solid':
        return 'bg-black/80';
      case 'gradient':
        return 'bg-gradient-to-br from-black/90 via-black/70 to-black/90';
      default:
        return 'bg-black/20 backdrop-blur-xl border border-white/10';
    }
  };

  const colors = getVariantColors();
  const finalGlowColor = glowColor || colors.glow;
  const finalBorderColor = borderColor || colors.border;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const getGlowIntensity = () => {
    switch (intensity) {
      case 'low':
        return '0 0 20px';
      case 'medium':
        return '0 0 40px';
      case 'high':
        return '0 0 60px';
      default:
        return '0 0 40px';
    }
  };

  const getParticleCount = () => {
    switch (intensity) {
      case 'low':
        return 5;
      case 'medium':
        return 10;
      case 'high':
        return 20;
      default:
        return 10;
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${getSizeClasses()} ${getBackgroundClasses()} ${getElevationClasses()} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      whileHover={interactive ? { scale: 1.02, y: -5 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      style={{
        boxShadow: isHovered || isFocused 
          ? `${getGlowIntensity()} ${finalGlowColor}40, 0 0 80px ${finalGlowColor}20`
          : undefined
      }}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${finalBorderColor}, transparent, ${finalBorderColor}, transparent)`,
            borderRadius: 'inherit'
          }}
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div 
          className="absolute inset-[2px] rounded-2xl"
          style={{
            background: getBackgroundClasses().includes('bg-') 
              ? getBackgroundClasses() 
              : 'bg-black/20 backdrop-blur-xl'
          }}
        />
      </div>

      {/* Quantum particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: getParticleCount() }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: colors.primary,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Holographic grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(${finalBorderColor}20 1px, transparent 1px),
              linear-gradient(90deg, ${finalBorderColor}20 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Interactive light effect */}
      {interactive && (
        <motion.div
          className="absolute pointer-events-none rounded-full blur-3xl opacity-30"
          style={{
            background: `radial-gradient(circle, ${finalGlowColor}40 0%, transparent 70%)`,
            width: 200,
            height: 200,
            left: mousePosition.x - 100,
            top: mousePosition.y - 100
          }}
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.5 : 0.3
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        />
      )}

      {/* Floating elements based on variant */}
      <div className="absolute inset-0 pointer-events-none">
        {variant === 'quantum' && (
          <>
            <motion.div
              className="absolute top-4 right-4 w-3 h-3 border border-cyan-400/50 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400/60 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}

        {variant === 'holographic' && (
          <>
            <motion.div
              className="absolute top-6 left-6 w-4 h-4 border border-purple-400/40"
              style={{ transform: 'rotate(45deg)' }}
              animate={{
                rotate: [45, 405],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-6 right-6 w-3 h-3 bg-pink-400/50 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}

        {variant === 'matrix' && (
          <>
            <motion.div
              className="absolute top-4 left-4 w-2 h-2 bg-green-400/70"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-4 right-4 w-3 h-3 border border-green-400/50"
              animate={{
                rotate: [0, 180, 360],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}

        {variant === 'neural' && (
          <>
            <motion.div
              className="absolute top-5 left-5 w-3 h-3 bg-pink-400/60 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-5 right-5 w-2 h-2 border border-orange-400/50"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </>
        )}

        {variant === 'cyberpunk' && (
          <>
            <motion.div
              className="absolute top-4 left-4 w-3 h-3 bg-orange-400/70"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-4 right-4 w-2 h-2 bg-red-400/60 rounded-full"
              animate={{
                y: [0, -8, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-current opacity-50" />
      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-current opacity-50" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-current opacity-50" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-current opacity-50" />
    </motion.div>
  );
};

export default QuantumHolographicCard;