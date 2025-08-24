import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  className?: string;
  text?: string;
  showText?: boolean;
}

export function LoadingSpinner({
  size = 'md',
  color = 'primary',
  customColor,
  className,
  text = 'Loading...',
  showText = false
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-zion-purple',
    secondary: 'border-zion-cyan',
    white: 'border-white',
    custom: ''
  };

  const borderColor = customColor || colorClasses[color];

  return (
    <div className={cn('flex flex-col items-center justify-center gap-3', className)}>
      <div className="relative">
        <motion.div
          className={cn(
            'border-2 border-gray-200 rounded-full',
            sizeClasses[size],
            borderColor
          )}
          style={{
            borderTopColor: customColor || 'transparent'
          }}
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Pulsing effect */}
        <motion.div
          className={cn(
            'absolute inset-0 border-2 border-transparent rounded-full',
            sizeClasses[size]
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {showText && (
        <motion.p
          className="text-sm text-muted-foreground text-center"
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

// Skeleton loading component
export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-muted',
        className
      )}
      {...props}
    />
  );
}

// Page loading component
export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <LoadingSpinner size="xl" showText text="Loading Zion..." />
    </div>
  );
}

// Inline loading component
export function InlineLoader({ className }: { className?: string }) {
  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <LoadingSpinner size="sm" />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
  );
}