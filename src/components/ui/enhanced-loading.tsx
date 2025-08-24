import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2, Sparkles } from 'lucide-react';

interface EnhancedLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'ripple';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  className?: string;
}

export function EnhancedLoading({
  size = 'md',
  variant = 'spinner',
  text,
  showProgress = false,
  progress = 0,
  className
}: EnhancedLoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const renderSpinner = () => (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className={cn('border-2 border-zion-blue-light/20 border-t-zion-cyan rounded-full', sizeClasses[size])}
    />
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut'
          }}
          className={cn('bg-zion-cyan rounded-full', sizeClasses[size])}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={cn('bg-zion-cyan rounded-full', sizeClasses[size])}
    />
  );

  const renderBars = () => (
    <div className="flex space-x-1">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{
            height: ['20%', '100%', '20%']
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut'
          }}
          className="w-1 bg-zion-cyan rounded-full"
          style={{ height: sizeClasses[size].split(' ')[1] }}
        />
      ))}
    </div>
  );

  const renderRipple = () => (
    <div className="relative">
      <motion.div
        animate={{
          scale: [1, 2],
          opacity: [1, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeOut'
        }}
        className={cn('absolute inset-0 bg-zion-cyan rounded-full', sizeClasses[size])}
      />
      <motion.div
        animate={{
          scale: [1, 1.5],
          opacity: [1, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.5,
          ease: 'easeOut'
        }}
        className={cn('absolute inset-0 bg-zion-cyan rounded-full', sizeClasses[size])}
      />
      <div className={cn('relative bg-zion-cyan rounded-full', sizeClasses[size])} />
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'bars':
        return renderBars();
      case 'ripple':
        return renderRipple();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <div className="relative">
        {renderVariant()}
        {variant === 'spinner' && (
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          >
            <Sparkles className={cn('text-zion-purple', sizeClasses[size])} />
          </motion.div>
        )}
      </div>

      {text && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={cn('mt-4 text-zion-slate-light text-center', textSizes[size])}
        >
          {text}
        </motion.p>
      )}

      {showProgress && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 w-full max-w-xs"
        >
          <div className="w-full bg-zion-blue-light/20 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
          <p className="text-xs text-zion-slate-light text-center mt-2">
            {Math.round(progress)}% Complete
          </p>
        </motion.div>
      )}
    </div>
  );
}