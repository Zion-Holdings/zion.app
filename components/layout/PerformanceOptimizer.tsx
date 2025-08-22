import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  duration?: number;
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  threshold = 0.1,
  delay = 0,
  duration = 0.6,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isInView && !isLoaded) {
      setIsLoaded(true);
    }
  }, [isInView, isLoaded]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  if (!isLoaded) {
    return (
      <div 
        ref={ref} 
        className={`min-h-[200px] bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse rounded-lg ${className}`}
      />
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PerformanceOptimizer;