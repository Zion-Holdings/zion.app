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
    }

    setMetrics(newMetrics);
    onMetricsUpdate?.(newMetrics);
  }, [onMetricsUpdate]);

  // Optimize images and resources
  const optimizeResources = useCallback(() => {
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      if (!document.querySelector(`link[href="${resource}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        document.head.appendChild(link);
      }
    });
  }, []);

  // Manual optimization trigger
  const triggerOptimization = useCallback(() => {
    if (metrics) {
      analyzeAndOptimize(metrics);
    }
  }, [metrics, analyzeAndOptimize]);

  useEffect(() => {
    if (showMetrics) {
      setIsVisible(true);
      measurePerformance();
      
      // Set up continuous monitoring
      const interval = setInterval(measurePerformance, 30000); // Every 30 seconds
      
      return () => clearInterval(interval);
    }
  }, [showMetrics, measurePerformance]);

  // Enhanced CLS monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as any;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
          clsEntries.push(entry);
        }
      }
      
      if (metrics) {
        setMetrics(prev => prev ? { ...prev, cls: Math.round(clsValue * 1000) / 1000 } : null);
      }
    });

    observer.observe({ entryTypes: ['layout-shift'] });

    return () => observer.disconnect();
  }, [metrics]);

  // Enhanced FID monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let fidValue = 0;
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        fidValue = Math.max(fidValue, (entry as any).processingStart - (entry as any).startTime);
      }
      
      if (metrics) {
        setMetrics(prev => prev ? { ...prev, fid: Math.round(fidValue) } : null);
      }
    });

    observer.observe({ entryTypes: ['first-input'] });

    return () => observer.disconnect();
  }, [metrics]);

  if (!showMetrics || !isVisible) return null;

  const getPerformanceScore = (metric: keyof PerformanceMetrics) => {
    if (!metrics) return 0;
    
    const thresholds: Record<keyof PerformanceMetrics, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 600, needsImprovement: 1800 },
      domLoad: { good: 100, needsImprovement: 300 },
      windowLoad: { good: 200, needsImprovement: 600 }
    };
    
    const value = metrics[metric];
    const threshold = thresholds[metric];
    
    if (value <= threshold.good) return 100;
    if (value <= threshold.needsImprovement) return 50;
    return 25;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <TrendingUp className="w-4 h-4" />;
    if (score >= 50) return <Gauge className="w-4 h-4" />;
    return <Clock className="w-4 h-4" />;
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

// Hook for performance monitoring
export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    const updateMetrics = () => {
      if ('PerformanceObserver' in window) {
        // FCP
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
            if (fcpEntry) {
              setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
            }
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch {
          // FCP measurement not supported
        }

        // LCP
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch {
          // LCP measurement not supported
        }

        // FID
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
              if (entry.entryType === 'first-input') {
                const firstInputEntry = entry as PerformanceEventTiming;
                setMetrics(prev => ({
                  ...prev,
                  fid: firstInputEntry.processingStart - firstInputEntry.startTime
                }));
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch {
          // FID measurement not supported
        }

        // CLS
        try {
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            list.getEntries().forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value || 0;
              }
            });
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch {
          // CLS measurement not supported
        }
      }

      // TTFB
      if ('navigation' in performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            ttfb: navigation.responseStart - navigation.requestStart
          }));
        }
      } catch (e) {
        // Cross-origin stylesheets will throw an error
      }
    };

    if (document.readyState === 'complete') {
      updateMetrics();
    } else {
      window.addEventListener('load', updateMetrics);
      return () => window.removeEventListener('load', updateMetrics);
    }
  }, []);

  return metrics;
};

export default PerformanceOptimizer;