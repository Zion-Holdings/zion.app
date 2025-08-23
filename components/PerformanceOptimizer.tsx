import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

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
      cumulativeLayoutShift: layoutShiftEntries.reduce((sum, entry) => sum + (entry as any).value, 0)
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
    }

    setMetrics(newMetrics);
    onMetricsUpdate?.(newMetrics);
  }, [onMetricsUpdate]);

  // Optimize images and resources
  const optimizeResources = useCallback(() => {
    setIsOptimizing(true);
    
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      document.head.appendChild(link);
    });

    setIsOptimizing(false);
  }, []);

  // Monitor performance
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure initial performance
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Optimize resources after initial load
    const timer = setTimeout(optimizeResources, 1000);

    return () => {
      window.removeEventListener('load', measurePerformance);
      clearTimeout(timer);
    };
  }, [measurePerformance, optimizeResources]);

  // Performance warning component
  const PerformanceWarning = () => {
    if (!metrics) return null;

    const isSlow = metrics.loadTime > 3000 || metrics.firstContentfulPaint > 2000;
    
    if (!isSlow) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-lg z-50"
      >
        <div className="text-sm font-medium">Performance Notice</div>
        <div className="text-xs">Page load time: {Math.round(metrics.loadTime)}ms</div>
      </motion.div>
    );
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
  );
};

export default PerformanceOptimizer;