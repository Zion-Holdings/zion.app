import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'holographic' | 'quantum' | 'cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  onClick?: () => void;
  delay?: number;
}

const UltraFuturisticCard: React.FC<UltraFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'default',
  intensity = 'medium',
  interactive = true,
  onClick,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const intensityMultiplier = {
    low: 0.5,
    medium: 1,
    high: 1.5
  }[intensity];

  const variantConfig = {
    default: {
      borderColor: 'from-blue-500 to-purple-500',
      glowColor: 'from-blue-400 to-purple-400',
      shadowColor: 'shadow-blue-500/25',
      bgGradient: 'from-gray-900/80 to-gray-800/80',
      borderGradient: 'from-blue-500/50 to-purple-500/50'
    },
    glow: {
      borderColor: 'from-cyan-500 to-blue-500',
      glowColor: 'from-cyan-400 to-blue-400',
      shadowColor: 'shadow-cyan-500/30',
      bgGradient: 'from-gray-900/90 to-gray-800/90',
      borderGradient: 'from-cyan-500/60 to-blue-500/60'
    },
    holographic: {
      borderColor: 'from-green-500 to-emerald-500',
      glowColor: 'from-green-400 to-emerald-400',
      shadowColor: 'shadow-green-500/35',
      bgGradient: 'from-gray-900/85 to-gray-800/85',
      borderGradient: 'from-green-500/70 to-emerald-500/70'
    },
    quantum: {
      borderColor: 'from-purple-500 to-pink-500',
      glowColor: 'from-purple-400 to-pink-400',
      shadowColor: 'shadow-purple-500/40',
      bgGradient: 'from-gray-900/95 to-gray-800/95',
      borderGradient: 'from-purple-500/80 to-pink-500/80'
    },
    cyberpunk: {
      borderColor: 'from-red-500 to-orange-500',
      glowColor: 'from-red-400 to-orange-400',
      shadowColor: 'shadow-red-500/45',
      bgGradient: 'from-gray-900/75 to-gray-800/75',
      borderGradient: 'from-red-500/90 to-orange-500/90'
    }
  }[variant];

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

  const cardVariants: Variants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      rotateX: -15
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    pressed: {
      scale: 0.98,
      y: -5,
      transition: {
        duration: 0.1
      }
    }
  };

  const glowVariants: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: { 
      opacity: 1, 
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const borderVariants: Variants = {
    initial: { opacity: 0.3 },
    hover: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={interactive ? "hover" : undefined}
      whileTap={interactive ? "pressed" : undefined}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsPressed(true)}
      onTap={() => setIsPressed(false)}
      onClick={onClick}
      className={`
        relative group cursor-pointer overflow-hidden rounded-2xl
        bg-gradient-to-br ${variantConfig.bgGradient}
        border border-transparent
        ${variantConfig.shadowColor}
        shadow-2xl backdrop-blur-xl
        transition-all duration-300 ease-out
        ${className}
      `}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Animated border */}
      <motion.div
        variants={borderVariants}
        className={`
          absolute inset-0 rounded-2xl
          bg-gradient-to-r ${variantConfig.borderGradient}
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        `}
        style={{
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          padding: '1px'
        }}
      />

      {/* Glow effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="hover"
            exit="initial"
            className={`
              absolute inset-0 rounded-2xl
              bg-gradient-to-r ${variantConfig.glowColor}
              opacity-20 blur-xl
              pointer-events-none
            `}
          />
        )}
      </AnimatePresence>

      {/* Interactive light effect */}
      {interactive && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
          }}
        />
      )}

      {/* Particle effect overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        {variant === 'holographic' && (
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-ping" />
            <div className="absolute top-8 right-8 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-300" />
            <div className="absolute bottom-6 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-700" />
          </div>
        )}
        {variant === 'quantum' && (
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />
            <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse delay-500" />
          </div>
        )}
        {variant === 'cyberpunk' && (
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-400 to-orange-400 animate-pulse" />
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400 animate-pulse delay-300" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gradient-to-r from-transparent to-white/20 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gradient-to-l from-transparent to-white/20 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gradient-to-r from-transparent to-white/20 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gradient-to-l from-transparent to-white/20 rounded-br-2xl" />
    </motion.div>
  );
};

export default UltraFuturisticCard;