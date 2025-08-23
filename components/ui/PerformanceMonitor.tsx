import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null
  });

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const updateMetrics = () => {
      const newMetrics: PerformanceMetrics = { ...metrics };

      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
            if (fcpEntry) {
              newMetrics.fcp = Math.round(fcpEntry.startTime);
            }
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.warn('FCP observer failed:', e);
        }
      }

      // Largest Contentful Paint (LCP)
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            newMetrics.lcp = Math.round(lastEntry.startTime);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer failed:', e);
      }

      // First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'first-input') {
              newMetrics.fid = Math.round(entry.processingStart - entry.startTime);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer failed:', e);
      }

      // Cumulative Layout Shift (CLS)
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          newMetrics.cls = Math.round(clsValue * 1000) / 1000;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer failed:', e);
      }

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        newMetrics.ttfb = Math.round(navigationEntry.responseStart - navigationEntry.requestStart);
        newMetrics.loadTime = Math.round(navigationEntry.loadEventEnd - navigationEntry.loadEventStart);
      }

      setMetrics(newMetrics);
    };

    // Update metrics after page load
    if (document.readyState === 'complete') {
      updateMetrics();
    } else {
      window.addEventListener('load', updateMetrics);
    }

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', updateMetrics);
    };
  }, []);

  const getMetricColor = (metric: keyof PerformanceMetrics, value: number | null) => {
    if (value === null) return 'text-gray-400';
    
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 800, needsImprovement: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'text-gray-600';

    if (value <= threshold.good) return 'text-green-600';
    if (value <= threshold.needsImprovement) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMetricLabel = (metric: keyof PerformanceMetrics) => {
    const labels: Record<string, string> = {
      fcp: 'First Contentful Paint',
      lcp: 'Largest Contentful Paint',
      fid: 'First Input Delay',
      cls: 'Cumulative Layout Shift',
      ttfb: 'Time to First Byte',
      loadTime: 'Page Load Time'
    };
    return labels[metric] || metric;
  };

  const getMetricUnit = (metric: keyof PerformanceMetrics) => {
    return metric === 'cls' ? '' : 'ms';
  };

  // Only show in development or when explicitly enabled
  if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_SHOW_PERFORMANCE) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">Performance Metrics</h3>
      <div className="space-y-2">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center text-xs">
            <span className="text-gray-600">{getMetricLabel(key as keyof PerformanceMetrics)}:</span>
            <span className={`font-mono ${getMetricColor(key as keyof PerformanceMetrics, value)}`}>
              {value !== null ? `${value}${getMetricUnit(key as keyof PerformanceMetrics)}` : '--'}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-2 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          {metrics.lcp && metrics.fid && metrics.cls ? (
            <span>
              Core Web Vitals: {
                (metrics.lcp <= 2500 && metrics.fid <= 100 && metrics.cls <= 0.1) 
                  ? '✅ Good' 
                  : '⚠️ Needs Improvement'
              }
            </span>
          ) : (
            <span>Collecting metrics...</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;