import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
import { Button } from './button';
>>>>>>> a4b0ef56a21d1919a0e2729e4ba64fbc8c4b3f44
import { cn } from '@/lib/utils';

interface FuturisticNeonButtonProps {
  children: React.ReactNode;
<<<<<<< HEAD
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glowIntensity?: 'low' | 'medium' | 'high';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const FuturisticNeonButton: React.FC<FuturisticNeonButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  glowIntensity = 'medium',
  className = '',
  onClick,
  disabled = false,
  loading = false,
  icon,
  fullWidth = false
}) => {
  const variants = {
    primary: {
      borderColor: '#00ffff',
      textColor: '#00ffff',
      glowColor: '#00ffff',
      bgColor: 'rgba(0, 255, 255, 0.1)',
      hoverBgColor: 'rgba(0, 255, 255, 0.2)'
    },
    secondary: {
      borderColor: '#ff00ff',
      textColor: '#ff00ff',
      glowColor: '#ff00ff',
      bgColor: 'rgba(255, 0, 255, 0.1)',
      hoverBgColor: 'rgba(255, 0, 255, 0.2)'
    },
    success: {
      borderColor: '#00ff80',
      textColor: '#00ff80',
      glowColor: '#00ff80',
      bgColor: 'rgba(0, 255, 128, 0.1)',
      hoverBgColor: 'rgba(0, 255, 128, 0.2)'
    },
    warning: {
      borderColor: '#ffff00',
      textColor: '#ffff00',
      glowColor: '#ffff00',
      bgColor: 'rgba(255, 255, 0, 0.1)',
      hoverBgColor: 'rgba(255, 255, 0, 0.2)'
    },
    danger: {
      borderColor: '#ff0080',
      textColor: '#ff0080',
      glowColor: '#ff0080',
      bgColor: 'rgba(255, 0, 128, 0.1)',
      hoverBgColor: 'rgba(255, 0, 128, 0.2)'
    },
    info: {
      borderColor: '#0080ff',
      textColor: '#0080ff',
      glowColor: '#0080ff',
      bgColor: 'rgba(0, 128, 255, 0.1)',
      hoverBgColor: 'rgba(0, 128, 255, 0.2)'
    }
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const glowIntensities = {
    low: '0 0 10px',
    medium: '0 0 20px, 0 0 40px',
    high: '0 0 20px, 0 0 40px, 0 0 60px'
  };

  const selectedVariant = variants[variant];
  const selectedSize = sizes[size];
  const selectedGlow = glowIntensities[glowIntensity];

  return (
    <motion.button
      className={cn(
        'relative inline-flex items-center justify-center font-mono font-bold tracking-wider',
        'border-2 rounded-lg transition-all duration-300',
        'focus:outline-none focus:ring-4 focus:ring-opacity-50',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        selectedSize,
        fullWidth ? 'w-full' : '',
        className
      )}
      style={{
        borderColor: selectedVariant.borderColor,
        color: selectedVariant.textColor,
        backgroundColor: selectedVariant.bgColor,
        boxShadow: `${selectedGlow} ${selectedVariant.glowColor}`,
        textShadow: `0 0 10px ${selectedVariant.glowColor}`
      }}
      whileHover={{
        scale: disabled ? 1 : 1.05,
        backgroundColor: selectedVariant.hoverBgColor,
        boxShadow: disabled ? `${selectedGlow} ${selectedVariant.glowColor}` : `${selectedGlow} ${selectedVariant.glowColor}, 0 0 80px ${selectedVariant.glowColor}`
      }}
      whileTap={{
        scale: disabled ? 1 : 0.95
      }}
      onClick={onClick}
      disabled={disabled || loading}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Inner glow effect */}
      <div
        className="absolute inset-0 rounded-lg opacity-20"
        style={{
          background: `radial-gradient(circle at center, ${selectedVariant.glowColor} 0%, transparent 70%)`,
          filter: 'blur(20px)'
        }}
      />

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          border: `2px solid ${selectedVariant.borderColor}`,
          opacity: 0.5
        }}
        animate={{
          boxShadow: [
            `0 0 20px ${selectedVariant.glowColor}`,
            `0 0 40px ${selectedVariant.glowColor}`,
            `0 0 20px ${selectedVariant.glowColor}`
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        {loading ? (
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ) : icon ? (
          <span className="text-current">{icon}</span>
        ) : null}
        
        <span className="text-current">
          {loading ? 'Loading...' : children}
        </span>
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0"
        style={{
          background: `linear-gradient(45deg, transparent 30%, ${selectedVariant.glowColor}20 50%, transparent 70%)`
        }}
        whileHover={{
          opacity: disabled ? 0 : 0.3,
          x: [0, 100, 0]
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Click ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `radial-gradient(circle, ${selectedVariant.glowColor}40 0%, transparent 70%)`
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{
          scale: [0, 1.5, 0],
          opacity: [0, 0.5, 0]
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

// Specialized button variants
export const CyberpunkButton: React.FC<Omit<FuturisticNeonButtonProps, 'variant'>> = (props) => (
  <FuturisticNeonButton {...props} variant="primary" />
);

export const QuantumButton: React.FC<Omit<FuturisticNeonButtonProps, 'variant'>> = (props) => (
  <FuturisticNeonButton {...props} variant="info" />
);

export const NeonButton: React.FC<Omit<FuturisticNeonButtonProps, 'variant'>> = (props) => (
  <FuturisticNeonButton {...props} variant="secondary" />
);

export const MatrixButton: React.FC<Omit<FuturisticNeonButtonProps, 'variant'>> = (props) => (
  <FuturisticNeonButton {...props} variant="success" />
);

export default FuturisticNeonButton;
=======
  variant?: 'primary' | 'secondary' | 'accent' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  glowIntensity?: 'low' | 'medium' | 'high';
}

export function FuturisticNeonButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  fullWidth = false,
  icon,
  glowIntensity = 'medium'
}: FuturisticNeonButtonProps) {
  const baseClasses = cn(
    'relative overflow-hidden transition-all duration-300 font-semibold tracking-wide',
    'before:absolute before:inset-0 before:rounded-md before:transition-all before:duration-300',
    'after:absolute after:inset-0 after:rounded-md after:transition-all after:duration-300',
    'hover:scale-105 active:scale-95',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
    fullWidth ? 'w-full' : '',
    className
  );

  const variantStyles = {
    primary: {
      button: 'bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white border-zion-purple/50',
      before: 'before:bg-gradient-to-r before:from-zion-purple/20 before:to-zion-purple-dark/20',
      after: 'after:bg-gradient-to-r after:from-zion-cyan/20 after:to-zion-blue/20',
      glow: 'shadow-[0_0_20px_rgba(140,21,233,0.5)] hover:shadow-[0_0_30px_rgba(140,21,233,0.8)]',
      border: 'border border-zion-purple/50 hover:border-zion-purple'
    },
    secondary: {
      button: 'bg-transparent text-zion-cyan border-zion-cyan/50',
      before: 'before:bg-zion-cyan/10',
      after: 'after:bg-zion-blue/10',
      glow: 'shadow-[0_0_20px_rgba(34,221,210,0.5)] hover:shadow-[0_0_30px_rgba(34,221,210,0.8)]',
      border: 'border border-zion-cyan/50 hover:border-zion-cyan'
    },
    accent: {
      button: 'bg-gradient-to-r from-zion-blue to-zion-blue-dark text-white border-zion-blue/50',
      before: 'before:bg-gradient-to-r before:from-zion-blue/20 before:to-zion-blue-dark/20',
      after: 'after:bg-gradient-to-r after:from-zion-purple/20 after:to-zion-cyan/20',
      glow: 'shadow-[0_0_20px_rgba(46,115,234,0.5)] hover:shadow-[0_0_30px_rgba(46,115,234,0.8)]',
      border: 'border border-zion-blue/50 hover:border-zion-blue'
    },
    danger: {
      button: 'bg-gradient-to-r from-red-500 to-red-600 text-white border-red-500/50',
      before: 'before:bg-gradient-to-r before:from-red-500/20 before:to-red-600/20',
      after: 'after:bg-gradient-to-r after:from-pink-500/20 after:to-red-500/20',
      glow: 'shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)]',
      border: 'border border-red-500/50 hover:border-red-500'
    }
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const glowMultiplier = {
    low: 1,
    medium: 1.5,
    high: 2
  };

  const selectedVariant = variantStyles[variant];
  const selectedSize = sizeStyles[size];

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        selectedVariant.button,
        selectedVariant.before,
        selectedVariant.after,
        selectedVariant.glow,
        selectedVariant.border,
        selectedSize,
        `shadow-[0_0_${20 * glowMultiplier[glowIntensity]}px_rgba(140,21,233,0.5)] hover:shadow-[0_0_${30 * glowMultiplier[glowIntensity]}px_rgba(140,21,233,0.8)]`
      )}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </div>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      {/* Inner glow effect */}
      <div className="absolute inset-1 rounded-md bg-gradient-to-r from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </Button>
  );
}
>>>>>>> a4b0ef56a21d1919a0e2729e4ba64fbc8c4b3f44
