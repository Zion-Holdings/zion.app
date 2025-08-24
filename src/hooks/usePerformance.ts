import { useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

interface PerformanceObserverEntry {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Extended interfaces for specific performance entry types
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

export function usePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });

  const [observers, setObservers] = useState<PerformanceObserverEntry[]>([]);
  const observerRef = useRef<PerformanceObserver | null>(null);

  useEffect(() => {
    // Check if PerformanceObserver is supported
    if (!('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported');
      return;
    }

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
      }
    });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fidEntry = entries[entries.length - 1] as FirstInputEntry;
      if (fidEntry && 'processingStart' in fidEntry) {
        setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
      }
    });

    // Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
        }
      }
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });

    // Start observing
    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Error setting up performance observers:', error);
    }

    // Navigation timing metrics
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({
        ...prev,
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
        domLoad: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
        windowLoad: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
      }));
    }

    // Cleanup
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  // Get performance rating
  const getRating = (metric: keyof PerformanceMetrics, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  // Get all metrics with ratings
  const getMetricsWithRatings = () => {
    const result: PerformanceObserverEntry[] = [];
    
    Object.entries(metrics).forEach(([key, value]) => {
      if (value !== null) {
        result.push({
          name: key.toUpperCase(),
          value,
          rating: getRating(key as keyof PerformanceMetrics, value)
        });
      }
    });

    return result;
  };

  // Log performance metrics
  const logMetrics = () => {
    const metricsWithRatings = getMetricsWithRatings();
    console.group('🚀 Performance Metrics');
    
    metricsWithRatings.forEach(({ name, value, rating }) => {
      const emoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';
      console.log(`${emoji} ${name}: ${value.toFixed(2)}ms (${rating})`);
    });
    
    console.groupEnd();
  };

  // Get performance score (0-100)
  const getPerformanceScore = () => {
    const metricsWithRatings = getMetricsWithRatings();
    if (metricsWithRatings.length === 0) return 0;

    const scores = metricsWithRatings.map(({ rating }) => {
      switch (rating) {
        case 'good': return 100;
        case 'needs-improvement': return 65;
        case 'poor': return 0;
        default: return 0;
      }
    });

    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  };

  // Monitor long tasks
  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;

    const longTaskObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.duration > 50) {
          console.warn('Long task detected:', {
            duration: entry.duration,
            startTime: entry.startTime,
            name: entry.name
          });
        }
      });
    });

    try {
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      console.warn('Error setting up long task observer:', error);
    }

    return () => longTaskObserver.disconnect();
  }, []);

  return {
    metrics,
    observers: getMetricsWithRatings(),
    performanceScore: getPerformanceScore(),
    logMetrics,
    getRating: (metric: keyof PerformanceMetrics) => {
      const value = metrics[metric];
      return value !== null ? getRating(metric, value) : null;
    }
  };
}

// Hook for monitoring specific performance events
export function usePerformanceEvent(eventName: string, callback: (entry: PerformanceEntry) => void) {
  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(callback);
    });

    try {
      observer.observe({ entryTypes: [eventName] });
    } catch (error) {
      console.warn(`Error observing ${eventName}:`, error);
    }

    return () => observer.disconnect();
  }, [eventName, callback]);
}

// Hook for measuring time between renders
export function useRenderTime() {
  const renderStart = useRef(performance.now());
  const [renderTime, setRenderTime] = useState(0);

  useEffect(() => {
    const renderEnd = performance.now();
    const time = renderEnd - renderStart.current;
    setRenderTime(time);
    renderStart.current = renderEnd;
  });

  return renderTime;
}