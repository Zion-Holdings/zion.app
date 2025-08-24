import { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
}

interface PerformanceObserver {
  observe: (options: any) => void;
  disconnect: () => void;
}

export function usePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if Performance Observer is supported
    if ('PerformanceObserver' in window) {
      setIsSupported(true);
    }
  }, []);

  const measureFCP = useCallback(() => {
    if (!isSupported) return;

    try {
      const observer = new (window as any).PerformanceObserver((list: any) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find((entry: any) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });

      observer.observe({ entryTypes: ['paint'] });
      return observer;
    } catch (error) {
      console.warn('FCP measurement failed:', error);
    }
  }, [isSupported]);

  const measureLCP = useCallback(() => {
    if (!isSupported) return;

    try {
      const observer = new (window as any).PerformanceObserver((list: any) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      return observer;
    } catch (error) {
      console.warn('LCP measurement failed:', error);
    }
  }, [isSupported]);

  const measureFID = useCallback(() => {
    if (!isSupported) return;

    try {
      const observer = new (window as any).PerformanceObserver((list: any) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            const fid = entry.processingStart - entry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          }
        });
      });

      observer.observe({ entryTypes: ['first-input'] });
      return observer;
    } catch (error) {
      console.warn('FID measurement failed:', error);
    }
  }, [isSupported]);

  const measureCLS = useCallback(() => {
    if (!isSupported) return;

    try {
      let clsValue = 0;
      const observer = new (window as any).PerformanceObserver((list: any) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });

      observer.observe({ entryTypes: ['layout-shift'] });
      return observer;
    } catch (error) {
      console.warn('CLS measurement failed:', error);
    }
  }, [isSupported]);

  const measureTTFB = useCallback(() => {
    if (!isSupported) return;

    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }
    } catch (error) {
      console.warn('TTFB measurement failed:', error);
    }
  }, [isSupported]);

  const getPerformanceScore = useCallback(() => {
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      if (metrics.fcp < 1800) score -= 0;
      else if (metrics.fcp < 3000) score -= 10;
      else score -= 20;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp < 2500) score -= 0;
      else if (metrics.lcp < 4000) score -= 10;
      else score -= 20;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid < 100) score -= 0;
      else if (metrics.fid < 300) score -= 10;
      else score -= 20;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls < 0.1) score -= 0;
      else if (metrics.cls < 0.25) score -= 10;
      else score -= 20;
    }

    return Math.max(0, score);
  }, [metrics]);

  const getPerformanceGrade = useCallback(() => {
    const score = getPerformanceScore();
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, [getPerformanceScore]);

  useEffect(() => {
    const observers: PerformanceObserver[] = [];

    // Start measuring after a short delay to ensure page is loaded
    const timer = setTimeout(() => {
      const fcpObserver = measureFCP();
      const lcpObserver = measureLCP();
      const fidObserver = measureFID();
      const clsObserver = measureCLS();
      
      if (fcpObserver) observers.push(fcpObserver);
      if (lcpObserver) observers.push(lcpObserver);
      if (fidObserver) observers.push(fidObserver);
      if (clsObserver) observers.push(clsObserver);

      // Measure TTFB immediately
      measureTTFB();
    }, 100);

    return () => {
      clearTimeout(timer);
      observers.forEach(observer => observer.disconnect());
    };
  }, [measureFCP, measureLCP, measureFID, measureCLS, measureTTFB]);

  const resetMetrics = useCallback(() => {
    setMetrics({
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null
    });
  }, []);

  return {
    metrics,
    isSupported,
    score: getPerformanceScore(),
    grade: getPerformanceGrade(),
    resetMetrics
  };
}