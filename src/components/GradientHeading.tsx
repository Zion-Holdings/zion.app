import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
>>>>>>> f2b2fbcfb4f353ea65468110a1b8ef64d9d7cf73

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
<<<<<<< HEAD
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
}

export function GradientHeading({ 
  children, 
  className = '', 
  size = '2xl' 
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
    '6xl': 'text-6xl'
  };

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${sizeClasses[size]} font-bold bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan bg-clip-text text-transparent ${className}`}
    >
      {children}
    </motion.h1>
=======
}

export function GradientHeading({ children, className = '' }: GradientHeadingProps) {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent ${className}`}>
      {children}
    </h2>
>>>>>>> f2b2fbcfb4f353ea65468110a1b8ef64d9d7cf73
  );
}