import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  variant?: 'default' | 'pulse' | 'orbit' | 'matrix';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
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
              className="absolute inset-1 bg-zion-blue-dark rounded-full"
              animate={{
                scale: [1, 0.8, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
            />
          </div>
        );

      case 'orbit':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className="absolute inset-0 border-2 border-zion-cyan/30 rounded-full"
            />
            <motion.div
              className="absolute top-0 left-1/2 w-2 h-2 bg-zion-cyan rounded-full -translate-x-1/2"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-0 left-1/2 w-2 h-2 bg-zion-purple rounded-full -translate-x-1/2"
              animate={{
                rotate: -360
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        );

      case 'matrix':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <div className="absolute inset-0 bg-zion-blue-dark rounded-lg overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-zion-cyan to-transparent"
                  style={{ top: `${(i * 25)}%` }}
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className="absolute inset-0 border-4 border-zion-cyan/20 rounded-full"
            />
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-zion-cyan rounded-full"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute inset-2 border-4 border-transparent border-t-zion-purple rounded-full"
              animate={{
                rotate: -360
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {renderSpinner()}
      {text && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`text-zion-slate-light font-medium ${textSizes[size]}`}
        >
          {text}
        </motion.div>
      )}
    </div>
  );
};

// Full page loading component
export const FullPageLoader: React.FC<{ text?: string }> = ({ text = 'Loading Zion Tech Group...' }) => {
  return (
    <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">Z</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h1>
          <p className="text-zion-slate-light">Innovation • Technology • Future</p>
        </motion.div>
        
        <LoadingSpinner size="lg" text={text} variant="orbit" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-zion-slate-light text-sm"
        >
          Preparing your digital experience...
        </motion.div>
      </div>
    </div>
  );
};

// Inline loading component
export const InlineLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'sm' }) => {
  return (
    <div className="inline-flex items-center space-x-2">
      <LoadingSpinner size={size} text="" />
      <span className="text-zion-slate-light">Loading...</span>
    </div>
  );
};