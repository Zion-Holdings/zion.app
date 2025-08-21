import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface AdvancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'premium' | 'enterprise' | 'quantum';
  glow?: boolean;
  animated?: boolean;
  interactive?: boolean;
  theme?: 'cyberpunk' | 'quantum' | 'holographic' | 'neon';
  onClick?: () => void;
}

const AdvancedFuturisticCard: React.FC<AdvancedFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'default',
  glow = true,
  animated = true,
  interactive = true,
  theme = 'quantum',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Get variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'premium':
        return {
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          shadow: '0 0 30px rgba(139, 92, 246, 0.3)',
          glow: 'rgba(139, 92, 246, 0.5)'
        };
      case 'enterprise':
        return {
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          shadow: '0 0 30px rgba(59, 130, 246, 0.3)',
          glow: 'rgba(59, 130, 246, 0.5)'
        };
      case 'quantum':
        return {
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          shadow: '0 0 30px rgba(6, 182, 212, 0.3)',
          glow: 'rgba(6, 182, 212, 0.5)'
        };
      default:
        return {
          background: 'linear-gradient(135deg, rgba(75, 85, 99, 0.1) 0%, rgba(31, 41, 55, 0.1) 100%)',
          border: '1px solid rgba(75, 85, 99, 0.3)',
          shadow: '0 0 20px rgba(75, 85, 99, 0.2)',
          glow: 'rgba(75, 85, 99, 0.3)'
        };
    }
  };

  // Get theme styles
  const getThemeStyles = () => {
    switch (theme) {
      case 'cyberpunk':
        return {
          accent: 'rgba(239, 68, 68, 0.8)',
          highlight: 'rgba(245, 158, 11, 0.8)',
          pattern: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(239, 68, 68, 0.1) 2px, rgba(239, 68, 68, 0.1) 4px)'
        };
      case 'quantum':
        return {
          accent: 'rgba(6, 182, 212, 0.8)',
          highlight: 'rgba(168, 85, 247, 0.8)',
          pattern: 'radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)'
        };
      case 'holographic':
        return {
          accent: 'rgba(236, 72, 153, 0.8)',
          highlight: 'rgba(139, 92, 246, 0.8)',
          pattern: 'linear-gradient(45deg, rgba(236, 72, 153, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(139, 92, 246, 0.1) 25%, transparent 25%)'
        };
      case 'neon':
        return {
          accent: 'rgba(34, 197, 94, 0.8)',
          highlight: 'rgba(239, 68, 68, 0.8)',
          pattern: 'linear-gradient(90deg, rgba(34, 197, 94, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)'
        };
      default:
        return {
          accent: 'rgba(59, 130, 246, 0.8)',
          highlight: 'rgba(16, 185, 129, 0.8)',
          pattern: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)'
        };
    }
  };

  const variantStyles = getVariantStyles();
  const themeStyles = getThemeStyles();

  // Mouse move handler for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  // Calculate 3D transform
  const get3DTransform = () => {
    if (!interactive) return {};
    
    const centerX = cardRef.current?.offsetWidth / 2 || 0;
    const centerY = cardRef.current?.offsetHeight / 2 || 0;
    
    const rotateX = (mousePosition.y - centerY) / 20;
    const rotateY = (mousePosition.x - centerX) / 20;
    
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  // Animation variants
  const cardVariants: Variants = {
    initial: { 
      opacity: 0, 
      y: 50, 
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    focus: {
      scale: 1.01,
      transition: {
        duration: 0.2
      }
    }
  };

  // Glow effect variants
  const glowVariants: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: { 
      opacity: 0.8, 
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group ${className}`}
      variants={animated ? cardVariants : undefined}
      initial={animated ? "initial" : undefined}
      animate={animated ? "animate" : undefined}
      whileHover={interactive && animated ? "hover" : undefined}
      whileFocus={interactive && animated ? "focus" : undefined}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={onClick}
      style={{
        ...get3DTransform(),
        background: variantStyles.background,
        border: variantStyles.border,
        boxShadow: isHovered ? variantStyles.shadow : variantStyles.shadow.replace('0.3', '0.2'),
      }}
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: themeStyles.pattern }}
      />
      
      {/* Glow effect */}
      {glow && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          variants={animated ? glowVariants : undefined}
          initial={animated ? "initial" : undefined}
          animate={animated ? "animate" : undefined}
          whileHover={animated ? "hover" : undefined}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${variantStyles.glow} 0%, transparent 70%)`,
            filter: 'blur(20px)',
            opacity: isHovered ? 0.8 : 0.3
          }}
        />
      )}
      
      {/* Border glow */}
      <div 
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: `linear-gradient(45deg, ${themeStyles.accent}, ${themeStyles.highlight})`,
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude'
        }}
      />
      
      {/* Animated border */}
      {animated && (
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, transparent, ${themeStyles.accent}, transparent)`,
              transform: `translateX(${isHovered ? '100%' : '-100%'})`,
              transition: 'transform 0.6s ease-in-out'
            }}
          />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-transparent to-current opacity-50" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-gradient-to-bl from-transparent to-current opacity-50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-gradient-to-tr from-transparent to-current opacity-50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-tl from-transparent to-current opacity-50" />
      
      {/* Floating particles effect */}
      {animated && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-current opacity-30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default AdvancedFuturisticCard;