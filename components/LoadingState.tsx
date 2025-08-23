import React from 'react';
import { motion } from 'framer-motion';

interface LoadingStateProps {
  type?: 'skeleton' | 'spinner' | 'pulse';
  className?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ 
  type = 'skeleton', 
  className = '' 
}) => {
  if (type === 'spinner') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <motion.div
          className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (type === 'pulse') {
    return (
      <div className={`flex items-center justify-center space-x-2 ${className}`}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-cyan-400 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  // Default skeleton loading
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="space-y-4">
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
  );
};

// Skeleton components for different content types
export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 animate-pulse">
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
      <div className="w-16 h-6 bg-gray-700 rounded-full"></div>
    </div>
    <div className="space-y-3">
      <div className="h-6 bg-gray-700 rounded w-3/4"></div>
      <div className="h-4 bg-gray-700 rounded w-full"></div>
      <div className="h-8 bg-gray-700 rounded w-1/3"></div>
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
      <div className="h-10 bg-gray-700 rounded w-full mt-4"></div>
    </div>
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center px-4">
    <div className="text-center max-w-5xl mx-auto space-y-8">
      <div className="space-y-4">
        <div className="h-20 bg-gray-700 rounded w-full max-w-2xl mx-auto"></div>
        <div className="h-8 bg-gray-700 rounded w-full max-w-3xl mx-auto"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded w-24"></div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {[1, 2].map((i) => (
          <div key={i} className="h-12 bg-gray-700 rounded-lg w-40"></div>
        ))}
      </div>
    </div>
  </div>
);

export const TestimonialSkeleton: React.FC = () => (
  <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 animate-pulse">
    <div className="flex items-center gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="w-4 h-4 bg-gray-700 rounded"></div>
      ))}
    </div>
    <div className="space-y-3 mb-4">
      <div className="h-4 bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      <div className="h-4 bg-gray-700 rounded w-4/6"></div>
    </div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-700 rounded w-1/3"></div>
      <div className="h-3 bg-gray-700 rounded w-1/2"></div>
    </div>
  </div>
);

export default LoadingState;