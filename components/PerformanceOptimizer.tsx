import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

// Performance entry types for Core Web Vitals
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: any | null;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  children, 
  fallback 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [performanceMetrics, setPerformanceMetrics] = useState<{
    loadTime: number;
    memoryUsage?: number;
    networkRequests: number;
  }>({
    loadTime: 0,
    networkRequests: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    // Simulate performance monitoring
    const timer = setTimeout(() => {
      const loadTime = performance.now() - startTime;
      
      // Get performance metrics
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setPerformanceMetrics({
          loadTime: Math.round(loadTime),
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
          networkRequests: 0 // This would be tracked in a real implementation
        });
      } else {
        setPerformanceMetrics({
          loadTime: Math.round(loadTime),
          networkRequests: 0
        });
      }
      
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as PerformanceEventTiming;
            console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime);
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
      } catch {
        // Fallback for older browsers
        console.log('Performance monitoring not supported');
      }

      return () => observer.disconnect();
    }
  }, []);

  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen flex items-center justify-center bg-black"
        >
          {fallback || (
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-cyan-400 text-lg font-semibold">Optimizing Performance</p>
              <p className="text-gray-400 text-sm mt-2">Loading Zion Tech Group</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <>
      {children}
      {/* Performance metrics display (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
          <div>Load: {performanceMetrics.loadTime}ms</div>
          {performanceMetrics.memoryUsage && (
            <div>Memory: {performanceMetrics.memoryUsage}MB</div>
          )}
          <div>Network: {performanceMetrics.networkRequests}</div>
        </div>
      )}
    </>
  );
};

export default PerformanceOptimizer;