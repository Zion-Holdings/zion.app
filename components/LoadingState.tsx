import React from 'react';
import { motion } from 'framer-motion';

interface LoadingStateProps {
  type?: 'skeleton' | 'spinner' | 'dots' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ 
  type = 'skeleton', 
  size = 'md', 
  className = '',
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const renderLoadingType = () => {
    switch (type) {
      case 'spinner':
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-cyan-500/20 border-t-cyan-500 rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        );
      
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-cyan-500 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        );
      
      case 'pulse':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-cyan-500 rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        );
      
      case 'skeleton':
      default:
        return (
          <div className="space-y-3">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              <div className="space-y-2 mt-4">
                <div className="h-3 bg-gray-700 rounded"></div>
                <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                <div className="h-3 bg-gray-700 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {renderLoadingType()}
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-sm font-medium"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Skeleton components for different content types
export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 animate-pulse">
    <div className="w-16 h-16 bg-gray-700 rounded-2xl mb-4"></div>
    <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
    <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-700 rounded"></div>
      <div className="h-3 bg-gray-700 rounded w-5/6"></div>
      <div className="h-3 bg-gray-700 rounded w-4/6"></div>
    </div>
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="text-center space-y-6 animate-pulse">
    <div className="h-16 bg-gray-700 rounded w-3/4 mx-auto"></div>
    <div className="h-6 bg-gray-700 rounded w-1/2 mx-auto"></div>
    <div className="h-6 bg-gray-700 rounded w-2/3 mx-auto"></div>
    <div className="flex justify-center space-x-4">
      <div className="h-12 bg-gray-700 rounded-lg w-32"></div>
      <div className="h-12 bg-gray-700 rounded-lg w-32"></div>
    </div>
  </div>
);

export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-pulse">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="text-center space-y-2">
        <div className="h-8 bg-gray-700 rounded w-20 mx-auto"></div>
        <div className="h-4 bg-gray-700 rounded w-16 mx-auto"></div>
      </div>
    ))}
  </div>
);

export default LoadingState;