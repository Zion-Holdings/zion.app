import React, { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'holographic' | 'neon' | 'quantum';
  hoverEffect?: 'lift' | 'scale' | 'rotate' | 'morph';
  glowColor?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function EnhancedFuturisticCard({
  children,
  className = '',
  variant = 'default',
  hoverEffect = 'lift',
  glowColor = '#3b82f6',
  onClick,
  disabled = false
}: EnhancedFuturisticCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'glow':
        return {
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
          border: `1px solid ${glowColor}40`,
          boxShadow: isHovered ? `0 0 30px ${glowColor}60` : `0 0 15px ${glowColor}30`
        };
      case 'holographic':
        return {
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))',
          border: '1px solid rgba(0, 255, 255, 0.3)',
          boxShadow: isHovered ? '0 0 40px rgba(0, 255, 255, 0.4)' : '0 0 20px rgba(0, 255, 255, 0.2)'
        };
      case 'neon':
        return {
          background: 'linear-gradient(135deg, rgba(255, 0, 128, 0.1), rgba(128, 0, 255, 0.1))',
          border: '1px solid rgba(255, 0, 128, 0.4)',
          boxShadow: isHovered ? '0 0 35px rgba(255, 0, 128, 0.5)' : '0 0 18px rgba(255, 0, 128, 0.3)'
        };
      case 'quantum':
        return {
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          boxShadow: isHovered ? '0 0 45px rgba(16, 185, 129, 0.4)' : '0 0 22px rgba(16, 185, 129, 0.2)'
        };
      default:
        return {
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: isHovered ? '0 0 25px rgba(59, 130, 246, 0.3)' : '0 0 12px rgba(59, 130, 246, 0.15)'
        };
    }
  };

  const getHoverEffect = () => {
    if (disabled) return {};
    
    switch (hoverEffect) {
      case 'lift':
        return isHovered ? { y: -8, scale: 1.02 } : { y: 0, scale: 1 };
      case 'scale':
        return isHovered ? { scale: 1.05 } : { scale: 1 };
      case 'rotate':
        return isHovered ? { rotateY: 5, rotateX: 2 } : { rotateY: 0, rotateX: 0 };
      case 'morph':
        return isHovered ? { 
          borderRadius: '20px',
          scale: 1.03,
          rotateZ: 1
        } : { 
          borderRadius: '12px',
          scale: 1,
          rotateZ: 0
        };
      default:
        return isHovered ? { y: -5, scale: 1.02 } : { y: 0, scale: 1 };
    }
  };

  const getGlowEffect = () => {
    if (!isHovered || disabled) return {};
    
    return {
      filter: `drop-shadow(0 0 20px ${glowColor}40)`,
      transition: 'all 0.3s ease'
    };
  };

  const mergedStyles = {
    ...getVariantStyles(),
    ...getGlowEffect()
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl backdrop-blur-sm transition-all duration-300 ${className}`}
      style={mergedStyles}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => !disabled && setIsPressed(true)}
      onClick={handleClick}
      animate={getHoverEffect()}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
        {variant === 'holographic' && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
        )}
        {variant === 'quantum' && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.1),transparent_50%)]" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Hover Border Effect */}
      {isHovered && !disabled && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: `linear-gradient(45deg, transparent, ${glowColor}20, transparent)`,
            border: `1px solid ${glowColor}40`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Press Effect */}
      {isPressed && !disabled && (
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        />
      )}
    </motion.div>
  );
}

// Specialized card variants for easier use
export const GlowCard = (props: Omit<EnhancedFuturisticCardProps, 'variant'>) => (
  <EnhancedFuturisticCard {...props} variant="glow" />
);

export const HolographicCard = (props: Omit<EnhancedFuturisticCardProps, 'variant'>) => (
  <EnhancedFuturisticCard {...props} variant="holographic" />
);

export const NeonCard = (props: Omit<EnhancedFuturisticCardProps, 'variant'>) => (
  <EnhancedFuturisticCard {...props} variant="neon" />
);

export const QuantumCard = (props: Omit<EnhancedFuturisticCardProps, 'variant'>) => (
  <EnhancedFuturisticCard {...props} variant="quantum" />
);