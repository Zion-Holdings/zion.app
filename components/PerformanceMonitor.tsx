import React, { useEffect, useState } from 'react';

// Type definitions for Performance API
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: EventTarget;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  navigationStart: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    navigationStart: null
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      initializePerformanceMonitoring();
    }
  }, []);

  const initializePerformanceMonitoring = () => {
    // Get navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      setMetrics(prev => ({
        ...prev,
        ttfb: navigation.responseStart - navigation.requestStart,
        navigationStart: navigation.startTime
      }));
    }

    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          if (fcp) {
            setMetrics(prev => ({
              ...prev,
              fcp: fcp.startTime
            }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('FCP observer failed:', error);
      }

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          if (lcp) {
            setMetrics(prev => ({
              ...prev,
              lcp: lcp.startTime
            }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('LCP observer failed:', error);
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fid = entries[entries.length - 1];
          if (fid) {
            const eventEntry = fid as PerformanceEventTiming;
            setMetrics(prev => ({
              ...prev,
              fid: eventEntry.processingStart - eventEntry.startTime
            }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('FID observer failed:', error);
      }

      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            const layoutEntry = entry as LayoutShiftEntry;
            if (!layoutEntry.hadRecentInput) {
              clsValue += layoutEntry.value;
            }
          }
          setMetrics(prev => ({
            ...prev,
            cls: clsValue
          }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('CLS observer failed:', error);
      }
    }

    // Report metrics when page is hidden (unload)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        reportMetrics();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Report metrics after a delay to ensure all metrics are captured
    const reportTimer = setTimeout(() => {
      reportMetrics();
    }, 5000);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(reportTimer);
    };
  };

  const reportMetrics = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }

    // Send metrics to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        // Report Core Web Vitals
        if (metrics.fcp !== null) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FCP',
            value: Math.round(metrics.fcp),
            non_interaction: true
          });
        }

        if (metrics.lcp !== null) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(metrics.lcp),
            non_interaction: true
          });
        }

        if (metrics.fid !== null) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FID',
            value: Math.round(metrics.fid),
            non_interaction: true
          });
        }

        if (metrics.cls !== null) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(metrics.cls * 1000) / 1000,
            non_interaction: true
          });
        }

        if (metrics.ttfb !== null) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'TTFB',
            value: Math.round(metrics.ttfb),
            non_interaction: true
          });
        }
      } catch (error) {
        console.warn('Failed to send performance metrics to analytics:', error);
      }
    }

    // Send to custom analytics endpoint
    try {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: window.location.href,
          timestamp: Date.now(),
          metrics,
          userAgent: navigator.userAgent,
          connection: (navigator as any).connection?.effectiveType || 'unknown'
        })
      }).catch(error => {
        console.warn('Failed to send performance metrics to API:', error);
      });
    } catch (error) {
      console.warn('Failed to send performance metrics:', error);
    }
  };

  const getPerformanceScore = () => {
    let score = 0;
    let totalMetrics = 0;

    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      totalMetrics++;
      if (metrics.fcp < 1800) score += 100;
      else if (metrics.fcp < 3000) score += 75;
      else if (metrics.fcp < 4000) score += 50;
      else score += 25;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      totalMetrics++;
      if (metrics.lcp < 2500) score += 100;
      else if (metrics.lcp < 4000) score += 75;
      else if (metrics.lcp < 6000) score += 50;
      else score += 25;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      totalMetrics++;
      if (metrics.fid < 100) score += 100;
      else if (metrics.fid < 300) score += 75;
      else if (metrics.fid < 500) score += 50;
      else score += 25;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      totalMetrics++;
      if (metrics.cls < 0.1) score += 100;
      else if (metrics.cls < 0.25) score += 75;
      else if (metrics.cls < 0.4) score += 50;
      else score += 25;
    }

    return totalMetrics > 0 ? Math.round(score / totalMetrics) : 0;
  };

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const performanceScore = getPerformanceScore();

  return (
    <div className="fixed top-4 left-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-white text-xs z-50 max-w-xs">
      <h3 className="font-semibold mb-2 text-cyan-400">Performance Monitor</h3>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Score:</span>
          <span className={`font-mono ${
            performanceScore >= 90 ? 'text-green-400' :
            performanceScore >= 70 ? 'text-yellow-400' :
            'text-red-400'
          }`}>
            {performanceScore}/100
          </span>
        </div>
        
        {metrics.fcp !== null && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className="font-mono">{Math.round(metrics.fcp)}ms</span>
          </div>
        )}
        
        {metrics.lcp !== null && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className="font-mono">{Math.round(metrics.lcp)}ms</span>
          </div>
        )}
        
        {metrics.fid !== null && (
          <div className="flex justify-between">
            <span>FID:</span>
            <span className="font-mono">{Math.round(metrics.fid)}ms</span>
          </div>
        )}
        
        {metrics.cls !== null && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className="font-mono">{(metrics.cls * 1000 / 1000).toFixed(3)}</span>
          </div>
        )}
        
        {metrics.ttfb !== null && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className="font-mono">{Math.round(metrics.ttfb)}ms</span>
          </div>
        )}
      </div>
      
      <button
        onClick={reportMetrics}
        className="mt-2 w-full px-2 py-1 bg-cyan-600 hover:bg-cyan-700 text-white text-xs rounded transition-colors duration-200"
      >
        Report Metrics
      </button>
    </div>
  );
};

export default PerformanceMonitor;