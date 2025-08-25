import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary';
  text?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  text,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const variantClasses = {
    default: 'text-zion-slate-light',
    primary: 'text-zion-cyan',
    secondary: 'text-zion-purple'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`${sizeClasses[size]} ${variantClasses[variant]}`}
      >
        <Loader2 className="w-full h-full" />
      </motion.div>
      {text && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-sm text-zion-slate-light text-center"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark flex items-center justify-center">
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-3xl">Z</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h2>
        <p className="text-zion-slate-light">Loading amazing things...</p>
      </motion.div>
      
      <LoadingSpinner size="lg" variant="primary" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6"
      >
        <div className="flex space-x-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-zion-cyan rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export const SkeletonLoader: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="bg-zion-blue-light/20 rounded-lg h-4 mb-2"></div>
    <div className="bg-zion-blue-light/20 rounded-lg h-4 mb-2 w-3/4"></div>
    <div className="bg-zion-blue-light/20 rounded-lg h-4 w-1/2"></div>
  </div>
);

export const CardSkeleton: React.FC = () => (
  <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 animate-pulse">
    <div className="w-16 h-16 bg-zion-blue-light/20 rounded-2xl mb-4"></div>
    <div className="bg-zion-blue-light/20 rounded-lg h-6 mb-3"></div>
    <div className="space-y-2">
      <div className="bg-zion-blue-light/20 rounded-lg h-4"></div>
      <div className="bg-zion-blue-light/20 rounded-lg h-4 w-3/4"></div>
    </div>
  </div>
);