import React, { useEffect, useRef, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (isVisible) {
      // Simulate loading delay for better UX
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div ref={ref} className="performance-optimizer">
      {isVisible && isLoaded ? (
        <div className="animate-fade-in">
          {children}
        </div>
      ) : isVisible ? (
        <div className="animate-pulse">
          <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
        </div>
      ) : (
        <div className="w-full h-64 bg-gray-100 rounded-lg"></div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;