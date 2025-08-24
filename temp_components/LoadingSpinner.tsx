import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary', 
  text,
  fullScreen = false 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-blue-600',
    secondary: 'border-purple-600',
    white: 'border-white'
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full ${colorClasses[color]} border-t-transparent`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-600 text-center"
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
}

// Pulse loading variant
export function LoadingPulse({ size = 'md', color = 'primary' }: Omit<LoadingSpinnerProps, 'text' | 'fullScreen'>) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'bg-blue-600',
    secondary: 'bg-purple-600',
    white: 'bg-white'
  };

  return (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
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
  );
}

// Skeleton loading variant
export function LoadingSkeleton({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-200 rounded mb-3 ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
}