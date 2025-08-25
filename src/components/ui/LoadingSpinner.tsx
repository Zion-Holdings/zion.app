import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'quantum';
  className?: string;
  text?: string;
  showText?: boolean;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  className = '',
  text = 'Loading...',
  showText = false
}) => {
  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={cn('flex space-x-1', className)}>
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        );

      case 'dots':
        return (
          <div className={cn('flex space-x-1', className)}>
            <motion.div
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            />
          </div>
        );

      case 'bars':
        return (
          <div className={cn('flex space-x-1', className)}>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-zion-cyan"
                animate={{ height: ['20px', '40px', '20px'] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        );

      case 'quantum':
        return (
          <div className={cn('relative', sizeClasses[size], className)}>
            <motion.div
              className="absolute inset-0 border-4 border-zion-cyan/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-zion-cyan rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 bg-zion-cyan/20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        );

      default:
        return (
          <motion.div
            className={cn(
              'border-4 border-zion-cyan/30 border-t-zion-cyan rounded-full',
              sizeClasses[size],
              className
            )}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      {renderSpinner()}
      {showText && (
        <motion.p
          className="text-zion-slate-light text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Full screen loading overlay
export const LoadingOverlay: React.FC<{
  isVisible: boolean;
  text?: string;
  variant?: LoadingSpinnerProps['variant'];
  className?: string;
}> = ({ isVisible, text = 'Loading...', variant = 'quantum', className = '' }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className={cn(
        'fixed inset-0 bg-zion-blue-dark/95 backdrop-blur-md z-50 flex items-center justify-center',
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoadingSpinner
        size="xl"
        variant={variant}
        text={text}
        showText={true}
      />
    </motion.div>
  );
};

// Inline loading component
export const InlineLoader: React.FC<{
  size?: LoadingSpinnerProps['size'];
  variant?: LoadingSpinnerProps['variant'];
  className?: string;
}> = ({ size = 'sm', variant = 'default', className = '' }) => (
  <div className={cn('inline-flex items-center', className)}>
    <LoadingSpinner size={size} variant={variant} />
  </div>
);

// Button loading state
export const ButtonLoader: React.FC<{
  size?: LoadingSpinnerProps['size'];
  className?: string;
}> = ({ size = 'sm', className = '' }) => (
  <div className={cn('inline-flex items-center', className)}>
    <LoadingSpinner size={size} variant="default" />
  </div>
);