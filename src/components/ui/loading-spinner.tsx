import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
  variant?: 'default' | 'pulse' | 'dots';
}

export function LoadingSpinner({ 
  size = 'md', 
  className, 
  text,
  variant = 'default' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  if (variant === 'pulse') {
    return (
      <div className={cn("flex flex-col items-center justify-center", className)}>
        <div className={cn(
          "rounded-full bg-zion-purple animate-pulse",
          sizeClasses[size]
        )} />
        {text && (
          <p className={cn(
            "mt-2 text-zion-slate-light text-center",
            textSizeClasses[size]
          )}>
            {text}
          </p>
        )}
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn("flex flex-col items-center justify-center", className)}>
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        {text && (
          <p className={cn(
            "mt-3 text-zion-slate-light text-center",
            textSizeClasses[size]
          )}>
            {text}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <motion.div
        className={cn(
          "border-2 border-zion-blue-light border-t-zion-purple rounded-full",
          sizeClasses[size]
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {text && (
        <motion.p 
          className={cn(
            "mt-3 text-zion-slate-light text-center",
            textSizeClasses[size]
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="xl" text="Loading amazing content..." />
      </div>
    </div>
  );
}

export function SectionLoader() {
  return (
    <div className="py-20 flex items-center justify-center">
      <LoadingSpinner size="lg" text="Loading section..." />
    </div>
  );
}

export function CardLoader() {
  return (
    <div className="p-8 flex items-center justify-center">
      <LoadingSpinner size="md" text="Loading..." />
    </div>
  );
}