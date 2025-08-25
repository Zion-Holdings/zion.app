import { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  overallScore: number;
  isLoaded: boolean;
}

interface PerformanceEntry {
  name: string;
  entryType: string;
  startTime: number;
  duration: number;
  value?: number;
}

// Performance API types
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target: EventTarget | null;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
}

export const usePerformance = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    overallScore: 0,
    isLoaded: false
  });

  const calculateScore = useCallback((fcp: number, lcp: number, fid: number, cls: number): number => {
    let score = 100;

    // FCP scoring (0-25 points)
    if (fcp <= 1800) score -= 0;
    else if (fcp <= 3000) score -= 10;
    else score -= 25;

    // LCP scoring (0-25 points)
    if (lcp <= 2500) score -= 0;
    else if (lcp <= 4000) score -= 10;
    else score -= 25;

    // FID scoring (0-25 points)
    if (fid <= 100) score -= 0;
    else if (fid <= 300) score -= 10;
    else score -= 25;

    // CLS scoring (0-25 points)
    if (cls <= 0.1) score -= 0;
    else if (cls <= 0.25) score -= 10;
    else score -= 25;

    return Math.max(0, score);
  }, []);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      
      // Calculate overall score when we have all metrics
      if (updated.fcp && updated.lcp && updated.fid && updated.cls) {
        updated.overallScore = calculateScore(updated.fcp, updated.lcp, updated.fid, updated.cls);
      }
      
      return updated;
    });
  }, [calculateScore]);

  useEffect(() => {
    // Check if Performance Observer is supported
    if (!('PerformanceObserver' in window)) {
      console.warn('Performance Observer not supported');
      return;
    }

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        const fcp = Math.round(fcpEntry.startTime);
        updateMetrics({ fcp });
        if (import.meta.env.DEV) {
          console.log('FCP:', fcp, 'ms');
        }
      }
    });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1]; // Get the latest LCP entry
      if (lcpEntry) {
        const lcp = Math.round(lcpEntry.startTime);
        updateMetrics({ lcp });
        if (import.meta.env.DEV) {
          console.log('LCP:', lcp, 'ms');
        }
      }
    });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        const fidEntry = entry as unknown as PerformanceEventTiming;
        if (fidEntry.processingStart) {
          const fid = Math.round(fidEntry.processingStart - fidEntry.startTime);
          updateMetrics({ fid });
          if (import.meta.env.DEV) {
            console.log('FID:', fid, 'ms');
          }
        }
      });
    });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        const clsEntry = entry as unknown as LayoutShift;
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value;
          updateMetrics({ cls: Math.round(clsValue * 1000) / 1000 });
          if (import.meta.env.DEV) {
            console.log('CLS:', Math.round(clsValue * 1000) / 1000);
          }
        }
      });
    });

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = Math.round(navigationEntry.responseStart - navigationEntry.requestStart);
      updateMetrics({ ttfb });
      if (import.meta.env.DEV) {
        console.log('TTFB:', ttfb, 'ms');
      }
    }

    // Start observing
    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Error setting up performance observers:', error);
    }

    // Mark as loaded after a delay to ensure metrics are collected
    const timer = setTimeout(() => {
      updateMetrics({ isLoaded: true });
    }, 5000);

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      clearTimeout(timer);
    };
  }, [updateMetrics]);

  // Performance monitoring for development
  useEffect(() => {
    if (import.meta.env.DEV && metrics.isLoaded) {
      console.group('🚀 Performance Metrics');
      console.log('FCP:', metrics.fcp, 'ms');
      console.log('LCP:', metrics.lcp, 'ms');
      console.log('FID:', metrics.fid, 'ms');
      console.log('CLS:', metrics.cls);
      console.log('TTFB:', metrics.ttfb, 'ms');
      console.log('Overall Score:', metrics.overallScore, '/100');
      console.groupEnd();
    }
  }, [metrics]);

  return metrics;
};

// Hook for monitoring specific performance metrics
export const usePerformanceMetric = (metricName: string) => {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.name === metricName) {
          setValue(entry.startTime);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['measure'] });
    } catch (error) {
      console.warn('Error setting up performance observer for', metricName, error);
    }

    return () => observer.disconnect();
  }, [metricName]);

  return value;
};

// Hook for measuring custom performance marks
export const usePerformanceMark = () => {
  const mark = useCallback((name: string) => {
    if ('performance' in window) {
      performance.mark(name);
    }
  }, []);

  const measure = useCallback((name: string, startMark: string, endMark: string) => {
    if ('performance' in window) {
      try {
        performance.measure(name, startMark, endMark);
        const measure = performance.getEntriesByName(name)[0];
        return measure ? Math.round(measure.duration) : null;
      } catch (error) {
        console.warn('Error measuring performance:', error);
        return null;
      }
    }
    return null;
  }, []);

  const clearMarks = useCallback((name?: string) => {
    if ('performance' in window) {
      if (name) {
        performance.clearMarks(name);
      } else {
        performance.clearMarks();
      }
    }
  }, []);

  const clearMeasures = useCallback((name?: string) => {
    if ('performance' in window) {
      if (name) {
        performance.clearMeasures(name);
      } else {
        performance.clearMeasures();
      }
    }
  }, []);

  return { mark, measure, clearMarks, clearMeasures };
};