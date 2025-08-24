import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
<<<<<<< HEAD
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export function LoadingSpinner({ size = 'md', className, text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <motion.div
        className={cn(
          'border-2 border-zion-blue-light border-t-zion-cyan rounded-full',
          sizeClasses[size]
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      {text && (
        <motion.p
          className={cn('mt-3 text-zion-slate-light', textSizes[size])}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-f1c5
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

<<<<<<< HEAD
export function LoadingDots({ className }: { className?: string }) {
  return (
    <div className={cn('flex space-x-2', className)}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-2 h-2 bg-zion-cyan rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      ))}
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-f1c5
    </div>
  );
}

<<<<<<< HEAD
export function LoadingPulse({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn('w-4 h-4 bg-zion-purple rounded-full', className)}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
=======
// Inline loading component
export function InlineLoader({ className }: { className?: string }) {
  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <LoadingSpinner size="sm" />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-f1c5
  );
}