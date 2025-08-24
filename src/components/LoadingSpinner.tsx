import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'ripple';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  className?: string;
  text?: string;
  showText?: boolean;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
};

const colorClasses = {
  primary: 'text-zion-purple',
  secondary: 'text-zion-cyan',
  white: 'text-white',
  custom: '',
};

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  color = 'primary',
  customColor,
  className,
  text,
  showText = false,
}: LoadingSpinnerProps) {
  const sizeClass = sizeClasses[size];
  const colorClass = color === 'custom' ? '' : colorClasses[color];
  const finalColor = customColor || colorClass;

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <motion.div
            className={cn('rounded-full bg-current', sizeClass, finalColor, className)}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );

      case 'dots':
        return (
          <div className={cn('flex space-x-1', className)}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={cn('rounded-full bg-current', sizeClass, finalColor)}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className={cn('flex space-x-1', className)}>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={cn('bg-current rounded-sm', finalColor)}
                style={{
                  width: size === 'sm' ? '2px' : size === 'md' ? '3px' : size === 'lg' ? '4px' : '6px',
                  height: size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '20px' : '24px',
                }}
                animate={{
                  scaleY: [1, 2, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        );

      case 'ripple':
        return (
          <div className={cn('relative', sizeClass, className)}>
            <motion.div
              className={cn('absolute inset-0 rounded-full border-2 border-current', finalColor)}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className={cn('absolute inset-0 rounded-full border-2 border-current', finalColor)}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
            />
          </div>
        );

      default:
        return (
          <motion.div
            className={cn('border-2 border-current border-t-transparent rounded-full', sizeClass, finalColor, className)}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      {renderSpinner()}
      
      {showText && text && (
        <motion.p
          className="text-sm text-zion-slate-light text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

// Specialized loading components for common use cases
export function PageLoader({ text = "Loading page..." }: { text?: string }) {
  return (
    <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center">
      <LoadingSpinner
        size="xl"
        variant="ripple"
        color="primary"
        text={text}
        showText={true}
      />
    </div>
  );
}

export function CardLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="flex items-center justify-center p-8">
      <LoadingSpinner
        size="lg"
        variant="pulse"
        color="secondary"
        text={text}
        showText={true}
      />
    </div>
  );
}

export function ButtonLoader({ size = 'sm' }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <LoadingSpinner
      size={size}
      variant="default"
      color="white"
      className="inline-block"
    />
  );
}

export function InlineLoader({ size = 'sm' }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <LoadingSpinner
      size={size}
      variant="dots"
      color="primary"
      className="inline-block"
    />
  );
}