import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
  showText?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text = 'Loading...',
  showText = true
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-cyan-500',
    secondary: 'border-blue-500',
    white: 'border-white'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4" role="status" aria-label="Loading">
      <motion.div
        className={`${sizeClasses[size]} ${colorClasses[color]} border-4 border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {showText && (
        <motion.p
          className={`${textSizeClasses[size]} text-gray-400 font-medium`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {text}
        </motion.p>
      )}
      
      {/* Accessibility: Screen reader only text */}
      <span className="sr-only">Loading, please wait</span>
    </div>
  );
};

// Skeleton loading component for content
export const SkeletonLoader: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-700 rounded ${className}`} />
);

// Page loading component
export const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="text-center">
      <LoadingSpinner size="lg" color="primary" text="Loading Zion Tech Group..." />
      <motion.div
        className="mt-8 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-lg">Pioneering the future of technology...</p>
      </motion.div>
    </div>
  </div>
);

// Inline loading component
export const InlineLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <div className="inline-flex items-center space-x-2">
    <LoadingSpinner size="sm" color="primary" showText={false} />
    <span className="text-sm text-gray-400">{text}</span>
  </div>
);

// Button loading state
export const ButtonLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => (
  <div className="inline-flex items-center space-x-2">
    <LoadingSpinner size="sm" color="white" showText={false} />
    <span className="text-sm">Processing...</span>
  </div>
);

export default LoadingSpinner;