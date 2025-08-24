import React, { useEffect, useRef, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'scale-in' | 'none';
  delay?: number;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
  animation = 'fade-in',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, delay, hasAnimated]);

  const getAnimationClasses = () => {
    if (animation === 'none') return '';
    
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-in':
          return `${baseClasses} opacity-0`;
        case 'slide-up':
          return `${baseClasses} opacity-0 transform translate-y-8`;
        case 'scale-in':
          return `${baseClasses} opacity-0 transform scale-95`;
        default:
          return baseClasses;
      }
    }
    
    switch (animation) {
      case 'fade-in':
        return `${baseClasses} opacity-100`;
      case 'slide-up':
        return `${baseClasses} opacity-100 transform translate-y-0`;
      case 'scale-in':
        return `${baseClasses} opacity-100 transform scale-100`;
      default:
        return baseClasses;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default PerformanceOptimizer;