import React from 'react';
import { motion } from 'framer-motion';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  variant?: 'default' | 'wide' | 'narrow' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

export default function ResponsiveContainer({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  animated = false
}: ResponsiveContainerProps) {
  const variantClasses = {
    default: 'max-w-7xl mx-auto',
    wide: 'max-w-[90rem] mx-auto',
    narrow: 'max-w-4xl mx-auto',
    full: 'w-full'
  };

  const paddingClasses = {
    none: '',
    sm: 'px-4 py-2 sm:px-6 sm:py-4',
    md: 'px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12',
    lg: 'px-6 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16',
    xl: 'px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20'
  };

  const containerClasses = `
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${className}
  `.trim();

  if (animated) {
    return (
      <motion.div
        className={containerClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
}