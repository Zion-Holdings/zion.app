import React from 'react';
import { motion } from 'framer-motion';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  gradient?: 'zion' | 'cyber' | 'quantum' | 'custom';
  customColors?: string[];
}

export function GradientHeading({ 
  children, 
  className = '', 
  size = '4xl',
  gradient = 'zion',
  customColors 
}: GradientHeadingProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl'
  };

  const gradientClasses = {
    zion: 'bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue bg-clip-text text-transparent',
    cyber: 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent',
    quantum: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent',
    custom: customColors ? `bg-gradient-to-r ${customColors.join(' ')} bg-clip-text text-transparent` : ''
  };

  const baseClasses = `${sizeClasses[size]} font-bold leading-tight ${gradientClasses[gradient]} ${className}`;

  return (
    <motion.h1 
      className={baseClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.h1>
  );
}