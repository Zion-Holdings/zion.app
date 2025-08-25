import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

// Type definitions for Web Performance API
interface LayoutShift extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

// Type guards
function isLayoutShift(entry: PerformanceEntry): entry is LayoutShift {
  return entry.entryType === 'layout-shift';
}

function isPerformanceEventTiming(entry: PerformanceEntry): entry is PerformanceEventTiming {
  return entry.entryType === 'first-input';
}

export function usePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  const updateMetrics = (updater: (prev: PerformanceMetrics) => PerformanceMetrics) => {
    setMetrics(updater);
  };

  useEffect(() => {
    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        updateMetrics((prev: PerformanceMetrics) => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        updateMetrics((prev: PerformanceMetrics) => ({ ...prev, lcp: lcpEntry.startTime }));
      }
    });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (isPerformanceEventTiming(entry)) {
          updateMetrics((prev: PerformanceMetrics) => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        }
      });
    });

    // Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      list.getEntries().forEach((entry) => {
        if (isLayoutShift(entry)) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
      });
      updateMetrics((prev: PerformanceMetrics) => ({ ...prev, cls: clsValue }));
    });

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      updateMetrics((prev: PerformanceMetrics) => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Start observing
    fcpObserver.observe({ entryTypes: ['paint'] });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    fidObserver.observe({ entryTypes: ['first-input'] });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return metrics;
}