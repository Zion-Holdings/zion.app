import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'hologram' | 'cyber' | 'neon';
  hoverEffect?: boolean;
  glowColor?: 'blue' | 'purple' | 'pink' | 'green' | 'orange' | 'cyan';
  onClick?: () => void;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = true,
  glowColor = 'blue',
  onClick
}) => {
  const getGlowColor = () => {
    switch (glowColor) {
      case 'blue': return 'rgba(0, 212, 255, 0.3)';
      case 'purple': return 'rgba(139, 92, 246, 0.3)';
      case 'pink': return 'rgba(236, 72, 153, 0.3)';
      case 'green': return 'rgba(16, 185, 129, 0.3)';
      case 'orange': return 'rgba(245, 158, 11, 0.3)';
      case 'cyan': return 'rgba(6, 182, 212, 0.3)';
      default: return 'rgba(0, 212, 255, 0.3)';
    }
  };

  const getGlowColorStrong = () => {
    switch (glowColor) {
      case 'blue': return 'rgba(0, 212, 255, 0.6)';
      case 'purple': return 'rgba(139, 92, 246, 0.6)';
      case 'pink': return 'rgba(236, 72, 153, 0.6)';
      case 'green': return 'rgba(16, 185, 129, 0.6)';
      case 'orange': return 'rgba(245, 158, 11, 0.6)';
      case 'cyan': return 'rgba(6, 182, 212, 0.6)';
      default: return 'rgba(0, 212, 255, 0.6)';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'glass backdrop-blur-md bg-white/10 border-white/20';
      case 'hologram':
        return 'hologram bg-gradient-to-br from-transparent via-blue-500/10 to-transparent';
      case 'cyber':
        return 'cyber-grid bg-black/50 border-blue-500/30';
      case 'neon':
        return 'bg-black/80 border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20';
      default:
        return 'bg-gray-900/80 border-gray-700/50';
    }
  };

  const cardVariants = {
    initial: { 
      scale: 1,
      y: 0,
      boxShadow: `0 0 0 0 ${getGlowColor()}`
    },
    hover: hoverEffect ? {
      scale: 1.02,
      y: -8,
      boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px ${getGlowColorStrong()}`
    } : {},
    tap: { scale: 0.98 }
  };

  return (
    <motion.div
      className={`relative rounded-xl border p-6 transition-all duration-300 ${getVariantClasses()} ${className}`}
      variants={cardVariants}
      initial="initial"
      whileHover={hoverEffect ? "hover" : undefined}
      whileTap="tap"
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${getGlowColor()}, transparent)`,
          filter: 'blur(20px)'
        }}
      />
      
      {/* Border glow */}
      {variant === 'neon' && (
        <div 
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
          style={{
            background: `linear-gradient(45deg, ${getGlowColor()}, transparent, ${getGlowColor()})`,
            border: `2px solid ${getGlowColor()}`,
            filter: 'blur(1px)'
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Hover overlay */}
      {hoverEffect && (
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${getGlowColor()}20, transparent, ${getGlowColor()}20)`
          }}
          whileHover={{ opacity: 1 }}
        />
      )}
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-blue-500/50 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-blue-500/50 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-blue-500/50 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-blue-500/50 rounded-br-xl" />
    </motion.div>
  );
};

export default FuturisticCard;