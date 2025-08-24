import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticLoaderProps {
  variant?: 'spinner' | 'pulse' | 'dots' | 'matrix';
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'purple' | 'green' | 'pink';
  text?: string;
}

export default function FuturisticLoader({ 
  variant = 'spinner', 
  size = 'md', 
  color = 'blue',
  text 
}: FuturisticLoaderProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-20 h-20'
  };

  const colorClasses = {
    blue: 'border-cyan-400 text-cyan-400',
    purple: 'border-purple-400 text-purple-400',
    green: 'border-green-400 text-green-400',
    pink: 'border-pink-400 text-pink-400'
  };

  const renderSpinner = () => (
    <div className={`${sizeClasses[size]} relative`}>
      <motion.div
        className={`w-full h-full border-2 border-transparent border-t-current border-l-current rounded-full ${colorClasses[color]}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={`absolute inset-0 w-full h-full border-2 border-transparent border-r-current border-b-current rounded-full ${colorClasses[color]} opacity-50`}
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );

  const renderPulse = () => (
    <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
      <motion.div
        className={`w-full h-full rounded-full bg-current ${colorClasses[color]} opacity-20`}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
      />
      <motion.div
        className={`absolute w-1/2 h-1/2 rounded-full bg-current ${colorClasses[color]}`}
        animate={{ scale: [0.8, 1, 0.8], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
      />
    </div>
  );

  const renderDots = () => (
    <div className="flex space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`w-3 h-3 rounded-full bg-current ${colorClasses[color]}`}
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            delay: index * 0.2,
            ease: [0.45, 0, 0.55, 1]
          }}
        />
      ))}
    </div>
  );

  const renderMatrix = () => (
    <div className="relative w-16 h-16 overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 bg-current ${colorClasses[color]} opacity-80`}
          style={{ left: `${i * 12.5}%`, height: '100%' }}
          animate={{ 
            y: ['-100%', '200%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear"
          }}
        />
      ))}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-current to-transparent opacity-10 ${colorClasses[color]}`} />
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case 'pulse':
        return renderPulse();
      case 'dots':
        return renderDots();
      case 'matrix':
        return renderMatrix();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        {renderLoader()}
        {/* Neon glow effect */}
        <div 
          className={`absolute inset-0 rounded-full blur-xl opacity-30 ${colorClasses[color].split(' ')[1]} bg-current`}
          style={{ transform: 'scale(1.5)' }}
        />
      </div>
      {text && (
        <motion.p
          className={`text-sm font-medium ${colorClasses[color]} tracking-wider`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}