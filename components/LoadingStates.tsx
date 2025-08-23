import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap, Brain, Atom, Shield, Rocket, Cpu, Database } from 'lucide-react';

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

interface ServiceCardSkeletonProps {
  className?: string;
}

export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = '' }) => (
  <div className={`bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 ${className}`}>
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton className="w-12 h-12 rounded-xl" />
      <div className="flex-1">
        <Skeleton className="h-5 mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
    <Skeleton className="h-4 mb-2" />
    <Skeleton className="h-4 mb-2" />
    <Skeleton className="h-4 w-2/3" />
    <div className="mt-4 flex space-x-2">
      <Skeleton className="h-8 w-20" />
      <Skeleton className="h-8 w-24" />
    </div>
  </div>
);

interface StatsSkeletonProps {
  count?: number;
  className?: string;
}

export const StatsSkeleton: React.FC<StatsSkeletonProps> = ({ count = 4, className = '' }) => (
  <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="text-center">
        <Skeleton className="h-8 w-20 mx-auto mb-2" />
        <Skeleton className="h-4 w-24 mx-auto" />
      </div>
    ))}
  </div>
);

interface CategorySkeletonProps {
  count?: number;
  className?: string;
}

export const CategorySkeleton: React.FC<CategorySkeletonProps> = ({ count = 6, className = '' }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
        <Skeleton className="w-16 h-16 rounded-2xl mb-6" />
        <Skeleton className="h-6 mb-4" />
        <Skeleton className="h-5 w-24" />
      </div>
    ))}
  </div>
);

interface HeroSkeletonProps {
  className?: string;
}

export const HeroSkeleton: React.FC<HeroSkeletonProps> = ({ className = '' }) => (
  <section className={`pt-20 pb-32 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto text-center">
      <div className="mb-8">
        <Skeleton className="h-16 md:h-20 lg:h-24 w-3/4 mx-auto mb-6" />
        <Skeleton className="h-6 md:h-8 w-2/3 mx-auto mb-4" />
        <Skeleton className="h-6 md:h-8 w-1/2 mx-auto" />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <Skeleton className="h-12 w-40" />
        <Skeleton className="h-12 w-32" />
      </div>
      
      <StatsSkeleton />
    </div>
  </section>
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
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <Loader2 
      className={`${sizeClasses[size]} ${color} animate-spin ${className}`} 
    />
  );
};

interface LoadingDotsProps {
  className?: string;
}

export const LoadingDots: React.FC<LoadingDotsProps> = ({ className = '' }) => (
  <div className={`flex space-x-1 ${className}`}>
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: i * 0.2
        }}
      />
    ))}
  </div>
);

interface LoadingWaveProps {
  className?: string;
}

export const LoadingWave: React.FC<LoadingWaveProps> = ({ className = '' }) => (
  <div className={`flex space-x-1 ${className}`}>
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="w-1 bg-cyan-400 rounded-full"
        animate={{
          height: [20, 40, 20],
          opacity: [0.5, 1, 0.5]
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

interface LoadingPulseProps {
  className?: string;
}

export const LoadingPulse: React.FC<LoadingPulseProps> = ({ className = '' }) => (
  <motion.div
    className={`w-4 h-4 bg-cyan-400 rounded-full ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [1, 0.5, 1]
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

interface LoadingOrbitProps {
  size?: number;
  className?: string;
}

export const LoadingOrbit: React.FC<LoadingOrbitProps> = ({ size = 40, className = '' }) => (
  <div className={`relative ${className}`} style={{ width: size, height: size }}>
    <motion.div
      className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
      animate={{ rotate: 360 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    <motion.div
      className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </div>
);

interface LoadingMatrixProps {
  className?: string;
}

export const LoadingMatrix: React.FC<LoadingMatrixProps> = ({ className = '' }) => (
  <div className={`grid grid-cols-3 gap-1 ${className}`}>
    {Array.from({ length: 9 }).map((_, i) => (
      <motion.div
        key={i}
        className="w-2 h-2 bg-cyan-400 rounded"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1, 0.8]
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

interface LoadingNeuralProps {
  className?: string;
}

export const LoadingNeural: React.FC<LoadingNeuralProps> = ({ className = '' }) => (
  <div className={`relative ${className}`}>
    <motion.div
      className="w-8 h-8 border-2 border-cyan-400 rounded-full"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute inset-0 w-8 h-8 border-2 border-cyan-400/50 rounded-full"
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>
);

interface LoadingQuantumProps {
  className?: string;
}

export const LoadingQuantum: React.FC<LoadingQuantumProps> = ({ className = '' }) => (
  <div className={`relative ${className}`}>
    <motion.div
      className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
      animate={{
        x: [-10, 10, -10],
        y: [-10, 10, -10],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
      animate={{
        x: [10, -10, 10],
        y: [10, -10, 10],
        scale: [1.2, 1, 1.2]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
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
      case 'dots':
        return <LoadingDots />;
      case 'wave':
        return <LoadingWave />;
      case 'pulse':
        return <LoadingPulse />;
      case 'orbit':
        return <LoadingOrbit />;
      case 'matrix':
        return <LoadingMatrix />;
      case 'neural':
        return <LoadingNeural />;
      case 'quantum':
        return <LoadingQuantum />;
      default:
        return <LoadingSpinner size={size} />;
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

export default LoadingContent;