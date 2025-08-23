import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full' 
}) => (
  <div 
    className={`${height} ${width} bg-gray-700/50 rounded animate-pulse ${className}`}
  />
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton className="w-12 h-12 rounded-xl" />
      <div className="flex-1">
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-5/6 mb-4" />
    <div className="flex justify-between items-center">
      <Skeleton className="h-8 w-20 rounded-lg" />
      <Skeleton className="h-8 w-8 rounded-lg" />
    </div>
  </div>
);

export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="text-center">
        <Skeleton className="h-12 w-20 mx-auto mb-2" />
        <Skeleton className="h-4 w-24 mx-auto" />
      </div>
    ))}
  </div>
);

export const CategorySkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
        <Skeleton className="w-16 h-16 rounded-2xl mb-6" />
        <Skeleton className="h-6 w-3/4 mb-4" />
        <Skeleton className="h-5 w-1/2" />
      </div>
    ))}
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center max-w-4xl mx-auto px-4">
      <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
      <Skeleton className="h-8 w-full mx-auto mb-8" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Skeleton className="h-14 w-40 mx-auto" />
        <Skeleton className="h-14 w-40 mx-auto" />
      </div>
      <StatsSkeleton />
    </div>
  </div>
);

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'text-cyan-400',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8'
  };
  return (
    <Loader2 
      className={`${sizeClasses[size]} ${color} animate-spin ${className}`} 
    />
  );
};

export const LoadingDots: React.FC = () => (
  <div className="flex space-x-1">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: i * 0.2
        }}
      />
    ))}
  </div>
);

export const LoadingWave: React.FC = () => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="w-1 h-8 bg-cyan-400 rounded-full"
        animate={{
          height: [8, 32, 8]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: i * 0.1
        }}
      />
    ))}
  </div>
);

export const LoadingPulse: React.FC = () => (
  <motion.div
    className="w-16 h-16 bg-cyan-400 rounded-full"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [1, 0.7, 1]
    }}
    transition={{
      duration: 2,
      repeat: Infinity
    }}
  />
);

export const LoadingOrbit: React.FC = () => (
  <div className="relative w-16 h-16">
    <motion.div
      className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
    />
    <motion.div
      className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2"
      animate={{
        rotate: 360
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </div>
);

export const LoadingMatrix: React.FC = () => (
  <div className="grid grid-cols-3 gap-1">
    {[...Array(9)].map((_, i) => (
      <motion.div
        key={i}
        className="w-3 h-3 bg-cyan-400 rounded"
        animate={{
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.1
        }}
      />
    ))}
  </div>
);

export const LoadingNeural: React.FC = () => (
  <div className="relative w-16 h-16">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-cyan-400 rounded-full"
        style={{
          left: `${50 + 30 * Math.cos(i * Math.PI / 3)}%`,
          top: `${50 + 30 * Math.sin(i * Math.PI / 3)}%`
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.2
        }}
      />
    ))}
  </div>
);

export const LoadingQuantum: React.FC = () => (
  <div className="relative w-16 h-16">
    <motion.div
      className="absolute inset-0 border-2 border-cyan-400/50 rounded-full"
      animate={{
        rotate: 360,
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    <motion.div
      className="absolute inset-2 border-2 border-cyan-400/30 rounded-full"
      animate={{
        rotate: -360,
        scale: [1, 0.9, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </div>
);

interface LoadingContentProps {
  type?: 'spinner' | 'dots' | 'wave' | 'pulse' | 'orbit' | 'matrix' | 'neural' | 'quantum';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export const LoadingContent: React.FC<LoadingContentProps> = ({ 
  type = 'spinner',
  size = 'md',
  text = 'Loading...',
  className = '' 
}) => {
  const renderLoader = () => {
    switch (type) {
      case 'dots': return <LoadingDots />;
      case 'wave': return <LoadingWave />;
      case 'pulse': return <LoadingPulse />;
      case 'orbit': return <LoadingOrbit />;
      case 'matrix': return <LoadingMatrix />;
      case 'neural': return <LoadingNeural />;
      case 'quantum': return <LoadingQuantum />;
      default: return <LoadingSpinner size={size} />;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {renderLoader()}
      {text && (
        <motion.p
          className="text-gray-400 text-sm font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};