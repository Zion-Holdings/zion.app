import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuantumHolographicCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'entanglement';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  glow?: boolean;
  floating?: boolean;
  onClick?: () => void;
}

const QuantumHolographicCard: React.FC<QuantumHolographicCardProps> = ({
  children,
  className = '',
  variant = 'quantum',
  intensity = 'medium',
  interactive = true,
  glow = true,
  floating = true,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current && interactive) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [interactive, isClient]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          bg: 'bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-700/20',
          border: 'border-cyan-500/30',
          glow: 'shadow-cyan-500/20',
          accent: 'from-cyan-400 to-blue-500'
        };
      case 'holographic':
        return {
          bg: 'bg-gradient-to-br from-emerald-500/20 via-teal-600/20 to-cyan-700/20',
          border: 'border-emerald-500/30',
          glow: 'shadow-emerald-500/20',
          accent: 'from-emerald-400 to-teal-500'
        };
      case 'neural':
        return {
          bg: 'bg-gradient-to-br from-purple-500/20 via-indigo-600/20 to-blue-700/20',
          border: 'border-purple-500/30',
          glow: 'shadow-purple-500/20',
          accent: 'from-purple-400 to-indigo-500'
        };
      case 'cyberpunk':
        return {
          bg: 'bg-gradient-to-br from-pink-500/20 via-red-600/20 to-orange-700/20',
          border: 'border-pink-500/30',
          glow: 'shadow-pink-500/20',
          accent: 'from-pink-400 to-red-500'
        };
      case 'entanglement':
        return {
          bg: 'bg-gradient-to-br from-yellow-500/20 via-orange-600/20 to-red-700/20',
          border: 'border-yellow-500/30',
          glow: 'shadow-yellow-500/20',
          accent: 'from-yellow-400 to-orange-500'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-700/20',
          border: 'border-cyan-500/30',
          glow: 'shadow-cyan-500/20',
          accent: 'from-cyan-400 to-blue-500'
        };
    }
  };

  const getIntensityStyles = () => {
    switch (intensity) {
      case 'high':
        return {
          backdrop: 'backdrop-blur-2xl',
          borderWidth: 'border-2',
          shadow: 'shadow-2xl'
        };
      case 'medium':
        return {
          backdrop: 'backdrop-blur-xl',
          borderWidth: 'border',
          shadow: 'shadow-xl'
        };
      case 'low':
        return {
          backdrop: 'backdrop-blur-lg',
          borderWidth: 'border',
          shadow: 'shadow-lg'
        };
      default:
        return {
          backdrop: 'backdrop-blur-xl',
          borderWidth: 'border',
          shadow: 'shadow-xl'
        };
    }
  };

  const styles = getVariantStyles();
  const intensityStyles = getIntensityStyles();

  const cardVariants = {
    initial: { 
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      y: floating ? 0 : 0
    },
    hover: { 
      scale: 1.02,
      rotateX: interactive ? 5 : 0,
      rotateY: interactive ? 5 : 0,
      y: floating ? -8 : 0
    },
    pressed: { 
      scale: 0.98,
      rotateX: 0,
      rotateY: 0,
      y: floating ? -4 : 0
    }
  };

  const floatingAnimation = floating ? {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  } : {};

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer ${className}`}
      variants={cardVariants}
      initial="initial"
      whileHover={interactive ? "hover" : "initial"}
      whileTap={interactive ? "pressed" : "initial"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsPressed(true)}
      onTap={() => setIsPressed(false)}
      onClick={onClick}
      {...floatingAnimation}
    >
      {/* Quantum field effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main card */}
      <motion.div
        className={`
          relative rounded-2xl p-6 
          ${styles.bg} 
          ${styles.border} 
          ${intensityStyles.backdrop}
          ${intensityStyles.borderWidth}
          ${intensityStyles.shadow}
          ${glow ? styles.glow : ''}
          transition-all duration-500 ease-out
          group-hover:shadow-2xl group-hover:shadow-cyan-500/30
        `}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Holographic overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quantum particles effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Animated quantum dots */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Neural network connections */}
        {variant === 'neural' && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <svg className="w-full h-full absolute inset-0" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
                  <stop offset="100%" stopColor="rgba(79, 70, 229, 0.3)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 50 50 Q 100 25 150 50 T 250 50"
                stroke="url(#neuralGradient)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>
        )}

        {/* Cyberpunk grid effect */}
        {variant === 'cyberpunk' && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(236,72,153,0.1)_50%),linear-gradient(0deg,transparent_50%,rgba(236,72,153,0.1)_50%)] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Interactive 3D effect */}
        {interactive && (
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20"
            style={{
              transform: `perspective(1000px) rotateX(${(mousePosition.y - 150) * 0.01}deg) rotateY(${(mousePosition.x - 200) * 0.01}deg)`,
              transformStyle: 'preserve-3d'
            }}
            transition={{ duration: 0.1 }}
          />
        )}
      </motion.div>

      {/* Glow effect */}
      {glow && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-700/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      )}

      {/* Quantum entanglement effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuantumHolographicCard;