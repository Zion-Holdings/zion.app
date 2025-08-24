import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'ripple';
  color?: 'zion' | 'white' | 'custom';
  customColor?: string;
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'default',
  color = 'zion',
  customColor,
  className = ''
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    zion: 'border-zion-cyan',
    white: 'border-white',
    custom: customColor ? `border-[${customColor}]` : 'border-zion-cyan'
  };

  const variants = {
    default: (
      <motion.div
        className={`${sizeClasses[size]} border-2 border-t-transparent rounded-full ${colorClasses[color]} ${className}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    ),
    pulse: (
      <motion.div
        className={`${sizeClasses[size]} bg-zion-cyan rounded-full ${className}`}
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    ),
    dots: (
      <div className={`flex gap-2 ${className}`}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 bg-zion-cyan rounded-full`}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    ),
    bars: (
      <div className={`flex gap-1 ${className}`}>
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-1 bg-zion-cyan rounded-full"
            style={{ height: size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '20px' : '24px' }}
            animate={{ scaleY: [1, 2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>
    ),
    ripple: (
      <div className={`relative ${sizeClasses[size]} ${className}`}>
        <motion.div
          className={`absolute inset-0 border-2 border-zion-cyan rounded-full`}
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className={`absolute inset-0 border-2 border-zion-cyan rounded-full`}
          animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
        />
      </div>
    )
  };

  return variants[variant] || variants.default;
}

// Convenience components for common use cases
export function ZionSpinner({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }) {
  return <LoadingSpinner size={size} variant="default" color="zion" className={className} />;
}

export function PulseSpinner({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }) {
  return <LoadingSpinner size={size} variant="pulse" color="zion" className={className} />;
}

export function DotsSpinner({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }) {
  return <LoadingSpinner size={size} variant="dots" color="zion" className={className} />;
}

export function BarsSpinner({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }) {
  return <LoadingSpinner size={size} variant="bars" color="zion" className={className} />;
}

export function RippleSpinner({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }) {
  return <LoadingSpinner size={size} variant="ripple" color="zion" className={className} />;
}