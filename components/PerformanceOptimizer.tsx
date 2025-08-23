import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface PerformanceLayoutShift {
  value: number;
}

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  children, 
  onMetricsUpdate 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    const layoutShiftEntries = performance.getEntriesByType('layout-shift');

    const newMetrics: PerformanceMetrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: layoutShiftEntries.reduce((sum, entry) => sum + (entry as PerformanceLayoutShift).value, 0)
    };

    // Measure LCP if supported
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        newMetrics.largestContentfulPaint = lastEntry.startTime;
        setMetrics(newMetrics);
        onMetricsUpdate?.(newMetrics);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
    }

    return { score, color, label };
  };

  return (
    <>
      {children}
      <PerformanceWarning />
      
      {/* Performance Debug Panel (only in development) */}
      {process.env.NODE_ENV === 'development' && metrics && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs"
        >
          <div className="text-sm font-bold mb-2">Performance Metrics</div>
          <div className="text-xs space-y-1">
            <div>Load Time: {Math.round(metrics.loadTime)}ms</div>
            <div>DOM Ready: {Math.round(metrics.domContentLoaded)}ms</div>
            <div>FCP: {Math.round(metrics.firstContentfulPaint)}ms</div>
            <div>LCP: {Math.round(metrics.largestContentfulPaint)}ms</div>
            <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
          </div>
          {isOptimizing && (
            <div className="text-cyan-400 text-xs mt-2">Optimizing resources...</div>
          )}
        </motion.div>
      )}
    </>
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
  );
};

export default PerformanceOptimizer;