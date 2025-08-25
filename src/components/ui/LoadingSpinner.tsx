import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars';
  className?: string;
  text?: string;
  ariaLabel?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  className,
  text,
  ariaLabel = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={cn('relative', sizeClasses[size])}>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-1 rounded-full bg-zion-blue-dark"
              animate={{
                scale: [1, 0.8, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        );

      case 'dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={cn('rounded-full bg-zion-cyan', size === 'sm' ? 'w-2 h-2' : 'w-3 h-3')}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={cn(
                  'bg-gradient-to-t from-zion-cyan to-zion-purple rounded-sm',
                  size === 'sm' ? 'w-1 h-4' : size === 'md' ? 'w-1.5 h-6' : 'w-2 h-8'
                )}
                animate={{
                  scaleY: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      default:
        return (
          <motion.div
            className={cn(
              'border-2 border-zion-cyan/20 border-t-zion-cyan rounded-full',
              sizeClasses[size]
            )}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
    }
  };

  return (
    <div 
      className={cn('flex flex-col items-center justify-center', className)}
      role="status"
      aria-label={ariaLabel}
    >
      {renderSpinner()}
      {text && (
        <motion.p
          className={cn('mt-4 text-zion-slate-light font-medium', textSizes[size])}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
};

// Full page loading component
export const FullPageLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 bg-zion-blue-dark flex items-center justify-center z-50">
      <LoadingSpinner size="xl" variant="pulse" text={text} />
    </div>
  );
};

// Inline loading component
export const InlineLoader: React.FC<{ size?: 'sm' | 'md'; className?: string }> = ({ 
  size = 'sm', 
  className 
}) => {
  return (
    <div className={cn('inline-flex items-center', className)}>
      <LoadingSpinner size={size} variant="dots" />
    </div>
  );
};

// Button loading state
export const ButtonLoader: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'sm' }) => {
  return (
    <div className="flex items-center space-x-2">
      <LoadingSpinner size={size} variant="default" />
      <span>Loading...</span>
    </div>
  );
};