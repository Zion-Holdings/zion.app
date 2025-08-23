import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Type definitions for browser APIs
declare global {
  interface Window {
    IntersectionObserver: typeof IntersectionObserver;
  }
}

// Extend existing types if they don't exist
interface ExtendedPerformanceEntry extends PerformanceEntry {
  hadRecentInput?: boolean;
  value?: number;
}

interface ExtendedPerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: EventTarget;
}

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableOptimizations?: boolean;
  showMetrics?: boolean;
}

export default function PerformanceOptimizer({ 
  children, 
  enableOptimizations = true,
  showMetrics = false 
}: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationComplete, setOptimizationComplete] = useState(false);

  // Performance monitoring
  useEffect(() => {
    if (!enableOptimizations) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          const lcp = entry.startTime;
          setMetrics(prev => prev ? { ...prev, lcp } : { fcp: 0, lcp, fid: 0, cls: 0, ttfb: 0 });
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure FCP
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'first-contentful-paint') {
          const fcp = entry.startTime;
          setMetrics(prev => prev ? { ...prev, fcp } : { fcp, lcp: 0, fid: 0, cls: 0, ttfb: 0 });
        }
      }
    });

    fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

    // Measure CLS
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as ExtendedPerformanceEntry;
        if (entry.entryType === 'layout-shift' && !layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
          setMetrics(prev => prev ? { ...prev, cls: clsValue } : { fcp: 0, lcp: 0, fid: 0, cls: clsValue, ttfb: 0 });
        }
      }
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      setMetrics(prev => prev ? { ...prev, ttfb } : { fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb });
    }

    return () => {
      observer.disconnect();
      fcpObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [enableOptimizations]);

  // Performance optimization strategies
  const optimizePerformance = useCallback(async () => {
    if (!enableOptimizations) return;

    setIsOptimizing(true);

    try {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      images.forEach((img) => {
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const imgElement = entry.target as HTMLImageElement;
                imgElement.src = imgElement.dataset.src!;
                imgElement.classList.remove('lazy');
                observer.unobserve(imgElement);
              }
            });
          });
          observer.observe(img);
        }
      });

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/zion-tech-group-logo.png'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('.woff2') ? 'font' : 'image';
        link.crossOrigin = resource.includes('.woff2') ? 'anonymous' : '';
        document.head.appendChild(link);
      });

      // Optimize animations
      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach((element) => {
        element.setAttribute('style', 'will-change: transform, opacity;');
      });

      // Set optimization complete
      setTimeout(() => {
        setOptimizationComplete(true);
        setIsOptimizing(false);
      }, 1000);

    } catch (error) {
      // Silently handle errors in production
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Performance optimization failed:', error);
      }
      setIsOptimizing(false);
    }
  }, [enableOptimizations]);

  // Auto-optimize on mount
  useEffect(() => {
    if (enableOptimizations) {
      optimizePerformance();
    }
  }, [enableOptimizations, optimizePerformance]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    if (!metrics) return null;

    let score = 100;

    // FCP scoring (0-100)
    if (metrics.fcp > 2000) score -= 20;
    else if (metrics.fcp > 1500) score -= 10;

    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 25;
    else if (metrics.lcp > 2500) score -= 15;

    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 25;
    else if (metrics.cls > 0.1) score -= 15;

    // TTFB scoring (0-100)
    if (metrics.ttfb > 800) score -= 20;
    else if (metrics.ttfb > 600) score -= 10;

    return Math.max(0, score);
  }, [metrics]);

  // Performance grade
  const performanceGrade = useMemo(() => {
    if (!performanceScore) return 'N/A';
    if (performanceScore >= 90) return 'A';
    if (performanceScore >= 80) return 'B';
    if (performanceScore >= 70) return 'C';
    if (performanceScore >= 60) return 'D';
    return 'F';
  }, [performanceScore]);

  // Performance color
  const performanceColor = useMemo(() => {
    if (!performanceScore) return 'text-gray-400';
    if (performanceScore >= 90) return 'text-green-400';
    if (performanceScore >= 80) return 'text-yellow-400';
    if (performanceScore >= 70) return 'text-orange-400';
    return 'text-red-400';
  }, [performanceScore]);

  return (
    <>
      {/* Performance Metrics Display */}
      {showMetrics && metrics && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 right-4 z-50 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-lg p-4 shadow-lg"
        >
          <div className="text-center mb-3">
            <div className={`text-2xl font-bold ${performanceColor}`}>
              {performanceGrade}
            </div>
            <div className="text-sm text-gray-400">
              Score: {performanceScore}
            </div>
          </div>
          
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">FCP:</span>
              <span className={metrics.fcp < 1500 ? 'text-green-400' : 'text-red-400'}>
                {Math.round(metrics.fcp)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">LCP:</span>
              <span className={metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400'}>
                {Math.round(metrics.lcp)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">CLS:</span>
              <span className={metrics.cls < 0.1 ? 'text-green-400' : 'text-red-400'}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">TTFB:</span>
              <span className={metrics.ttfb < 600 ? 'text-green-400' : 'text-red-400'}>
                {Math.round(metrics.ttfb)}ms
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Optimization Status */}
      <AnimatePresence>
        {isOptimizing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-4 left-4 z-50 bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm font-medium">Optimizing Performance...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={enableOptimizations ? 'performance-optimized' : ''}>
        {children}
      </div>

      {/* Performance Tips */}
      {enableOptimizations && optimizationComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 z-40 bg-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-lg p-3 shadow-lg max-w-xs"
        >
          <div className="text-xs text-gray-300">
            <div className="font-medium text-cyan-400 mb-1">Performance Optimized!</div>
            <div>Images lazy-loaded, critical resources preloaded, animations optimized.</div>
          </div>
        </motion.div>
      )}
    </>
  );
}

// Performance monitoring hook
export function usePerformanceMonitoring() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        // LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime } as PerformanceMetrics));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const firstInputEntry = entry as ExtendedPerformanceEventTiming;
            if (firstInputEntry.processingStart) {
              setMetrics(prev => ({ ...prev, fid: firstInputEntry.processingStart - firstInputEntry.startTime } as PerformanceMetrics));
            }
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
        };
      }
    };

    measurePerformance();
  }, []);

  return metrics;
}

// Performance optimization utilities
export const performanceUtils = {
  // Debounce function for performance
  debounce: <T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function for performance
  throttle: <T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Intersection Observer for lazy loading
  createIntersectionObserver: (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      return new IntersectionObserver(callback, options);
    }
    return null;
  },

  // Resource hints for performance
  addResourceHints: () => {
    const hints = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' }
    ];

    hints.forEach(({ rel, href, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    });
  }
};