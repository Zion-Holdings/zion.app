import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  text?: string;
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  color = 'primary', 
  customColor,
  text,
  className 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-zion-purple',
    secondary: 'border-zion-cyan',
    white: 'border-white',
    custom: customColor ? `border-[${customColor}]` : 'border-zion-purple'
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className="relative">
        {/* Main spinner */}
        <motion.div
          className={cn(
            "border-2 border-transparent rounded-full",
            sizeClasses[size],
            colorClasses[color]
          )}
          style={{
            borderTopColor: customColor || undefined
          }}
          variants={spinnerVariants}
          animate="animate"
        />
        
        {/* Pulsing background */}
        <motion.div
          className={cn(
            "absolute inset-0 border-2 border-current rounded-full opacity-20",
            sizeClasses[size]
          )}
          variants={pulseVariants}
          animate="animate"
        />
      </div>
      
      {/* Loading text */}
      {text && (
        <motion.p
          className="mt-3 text-sm text-zion-slate-light text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

// Page loading component
export function PageLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="xl" color="primary" text={text} />
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-zion-cyan text-lg font-semibold">Zion Tech Group</div>
          <div className="text-zion-slate-light text-sm">Loading your experience...</div>
        </motion.div>
      </div>
    </div>
  );
}

// Inline loading component
export function InlineLoader({ size = 'sm', color = 'primary' }: { size?: 'sm' | 'md' | 'lg', color?: 'primary' | 'secondary' | 'white' }) {
  return <LoadingSpinner size={size} color={color} />;
}

// Button loading component
export function ButtonLoader({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  return (
    <div className="flex items-center gap-2">
      <LoadingSpinner size={size} color="white" />
      <span>Loading...</span>
    </div>
  );
}