import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Type definitions for browser APIs
declare global {
  interface Window {
    IntersectionObserver: typeof IntersectionObserver;
  }
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target: EventTarget | null;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
  fallback?: React.ReactNode;
  enableIntersectionObserver?: boolean;
  enableLazyLoading?: boolean;
  enablePerformanceMonitoring?: boolean;
}

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  threshold = 0.1,
  fallback = <div className="animate-pulse bg-gray-800/50 rounded-lg h-32" />,
  enableIntersectionObserver = true,
  enableLazyLoading = true,
  enablePerformanceMonitoring = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Performance monitoring
  useEffect(() => {
    if (!enablePerformanceMonitoring) return;

    const measurePerformance = () => {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
            if (fcpEntry) {
              setPerformanceMetrics(prev => ({
                ...prev,
                fcp: fcpEntry.startTime
              }));
            }
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch {
          // FCP measurement not supported
        }

        // Largest Contentful Paint
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              setPerformanceMetrics(prev => ({
                ...prev,
                lcp: lastEntry.startTime
              }));
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch {
          // LCP measurement not supported
        }

        // First Input Delay
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
              if (entry.entryType === 'first-input') {
                const firstInputEntry = entry as PerformanceEventTiming;
                setPerformanceMetrics(prev => ({
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

        // Cumulative Layout Shift
        try {
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            list.getEntries().forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value || 0;
              }
            });
            setPerformanceMetrics(prev => ({
              ...prev,
              cls: clsValue
            }));
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch {
          // CLS measurement not supported
        }
      }

      // Time to First Byte
      if ('navigation' in performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          setPerformanceMetrics(prev => ({
            ...prev,
            ttfb: navigation.responseStart - navigation.requestStart
          }));
        }
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [enablePerformanceMonitoring]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!enableIntersectionObserver || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    observer.observe(containerRef.current);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, enableIntersectionObserver]);

  // Simulate loading delay for better UX
  useEffect(() => {
    if (isVisible && enableLazyLoading) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100); // Small delay for smooth animation

      return () => clearTimeout(timer);
    }
  }, [isVisible, enableLazyLoading]);

  // Performance warning system
  useEffect(() => {
    if (!enablePerformanceMonitoring) return;

    const { fcp, lcp, fid, cls, ttfb } = performanceMetrics;
    
    // Log performance warnings (development only)
    if (process.env.NODE_ENV === 'development') {
      if (fcp && fcp > 1800) {
        // ⚠️ First Contentful Paint is slow: {fcp}ms (target: <1800ms)
      }
      if (lcp && lcp > 2500) {
        // ⚠️ Largest Contentful Paint is slow: {lcp}ms (target: <2500ms)
      }
      if (fid && fid > 100) {
        // ⚠️ First Input Delay is high: {fid}ms (target: <100ms)
      }
      if (cls && cls > 0.1) {
        // ⚠️ Cumulative Layout Shift is poor: {cls} (target: <0.1)
      }
      if (ttfb && ttfb > 600) {
        // ⚠️ Time to First Byte is slow: {ttfb}ms (target: <600ms)
      }
    }
  }, [performanceMetrics, enablePerformanceMonitoring]);

  // Render performance metrics in development
  const renderPerformanceMetrics = () => {
    if (!enablePerformanceMonitoring || process.env.NODE_ENV !== 'development') return null;

    return (
      <div className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-xl border border-cyan-400/30 rounded-lg p-4 text-xs text-white max-w-xs z-50">
        <h4 className="font-semibold text-cyan-400 mb-2">Performance Metrics</h4>
        <div className="space-y-1">
          {performanceMetrics.fcp && (
            <div className={`flex justify-between ${performanceMetrics.fcp > 1800 ? 'text-red-400' : 'text-green-400'}`}>
              <span>FCP:</span>
              <span>{performanceMetrics.fcp.toFixed(0)}ms</span>
            </div>
          )}
          {performanceMetrics.lcp && (
            <div className={`flex justify-between ${performanceMetrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}`}>
              <span>LCP:</span>
              <span>{performanceMetrics.lcp.toFixed(0)}ms</span>
            </div>
          )}
          {performanceMetrics.fid && (
            <div className={`flex justify-between ${performanceMetrics.fid > 100 ? 'text-red-400' : 'text-green-400'}`}>
              <span>FID:</span>
              <span>{performanceMetrics.fid.toFixed(0)}ms</span>
            </div>
          )}
          {performanceMetrics.cls && (
            <div className={`flex justify-between ${performanceMetrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}`}>
              <span>CLS:</span>
              <span>{performanceMetrics.cls.toFixed(3)}</span>
            </div>
          )}
          {performanceMetrics.ttfb && (
            <div className={`flex justify-between ${performanceMetrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}`}>
              <span>TTFB:</span>
              <span>{performanceMetrics.ttfb.toFixed(0)}ms</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (!enableLazyLoading) {
    return (
      <>
        {children}
        {renderPerformanceMetrics()}
      </>
    );
  }

  return (
    <div ref={containerRef} className="performance-optimizer">
      <AnimatePresence mode="wait">
        {!isVisible ? (
          <motion.div
            key="fallback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {fallback}
          </motion.div>
        ) : !isLoaded ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center p-8"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      
      {renderPerformanceMetrics()}
    </div>
  );
};

// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => 
    new Promise<{ default: React.ComponentType<P> }>(resolve => {
      // Simulate network delay for better UX
      setTimeout(() => {
        resolve({ default: Component });
      }, 100);
    })
  );

  return (props: P) => (
    <Suspense fallback={fallback || <div className="animate-pulse bg-gray-800/50 rounded-lg h-32" />}>
      <LazyComponent {...props} />
    </Suspense>
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