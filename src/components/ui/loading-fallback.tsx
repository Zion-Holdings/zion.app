import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoadingFallbackProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingFallback({ 
  message = "Loading...", 
  size = 'md',
  className = ""
}: LoadingFallbackProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8 space-y-4 ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className={`${sizeClasses[size]} text-zion-purple`}
      >
        <Loader2 className="w-full h-full" />
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className={`${textSizes[size]} text-zion-slate-light text-center`}
      >
        {message}
      </motion.p>
      
      <motion.div
        className="flex space-x-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-zion-purple rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Full screen loading fallback
export function FullScreenLoading({ message = "Loading Zion..." }: { message?: string }) {
  return (
    <div className="min-h-screen bg-zion-blue flex items-center justify-center">
      <LoadingFallback message={message} size="lg" />
    </div>
  );
}

// Inline loading fallback
export function InlineLoading({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="flex items-center space-x-2 text-zion-slate-light">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-4 h-4 text-zion-purple"
      >
        <Loader2 className="w-full h-full" />
      </motion.div>
      <span className="text-sm">{message}</span>
    </div>
  );
}