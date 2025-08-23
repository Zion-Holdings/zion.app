import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showMetrics?: boolean;
  logToConsole?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  showMetrics = false,
  logToConsole = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const measurePerformance = useCallback(() => {
    if (!enabled || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (logToConsole) {
          console.log(`Performance Entry: ${entry.name}`, entry);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'resource', 'paint', 'largest-contentful-paint', 'first-input'] });
    } catch (e) {
      // Fallback for browsers that don't support PerformanceObserver
      if (logToConsole) {
        console.warn('PerformanceObserver not supported');
      }
    }

    // Measure Core Web Vitals
    const measureCoreWebVitals = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      if (navigation) {
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
        
        const newMetrics: PerformanceMetrics = {
          fcp: Math.round(fcp),
          lcp: Math.round(lcp),
          fid: 0, // Will be updated when first input occurs
          cls: 0, // Will be updated by CLS observer
          ttfb: Math.round(navigation.responseStart - navigation.requestStart),
          domLoad: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
          windowLoad: Math.round(navigation.loadEventEnd - navigation.fetchStart)
        };

        setMetrics(newMetrics);

        // Send to analytics if available
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'core_web_vitals', {
            event_category: 'Web Vitals',
            value: Math.round(lcp),
            custom_parameter: {
              fcp: newMetrics.fcp,
              lcp: newMetrics.lcp,
              ttfb: newMetrics.ttfb
            }
          });
        }

        if (logToConsole) {
          console.log('Core Web Vitals:', newMetrics);
        }
      }
    };

    // Measure First Input Delay
    const measureFID = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input') {
            const fid = Math.round((entry as any).processingStart - entry.startTime);
            setMetrics(prev => prev ? { ...prev, fid } : null);
            
            if (logToConsole) {
              console.log('First Input Delay:', fid);
            }
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        if (logToConsole) {
          console.warn('First Input Delay measurement not supported');
        }
      }
    };

    // Measure Cumulative Layout Shift
    const measureCLS = () => {
      let clsValue = 0;
      let clsEntries: PerformanceEntry[] = [];

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!clsEntries.includes(entry)) {
            clsEntries.push(entry);
            clsValue += (entry as any).value;
          }
        }
        
        setMetrics(prev => prev ? { ...prev, cls: Math.round(clsValue * 1000) / 1000 } : null);
      });

      try {
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        if (logToConsole) {
          console.warn('Cumulative Layout Shift measurement not supported');
        }
      }
    };

    // Initialize measurements
    if (document.readyState === 'complete') {
      measureCoreWebVitals();
      measureFID();
      measureCLS();
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => {
          measureCoreWebVitals();
          measureFID();
          measureCLS();
        }, 0);
      });
    }

    setIsMonitoring(true);
  }, [enabled, logToConsole]);

  useEffect(() => {
    measurePerformance();
  }, [measurePerformance]);

  // Monitor for performance issues
  useEffect(() => {
    if (!metrics || !enabled) return;

    // Check for performance issues and provide suggestions
    const issues: string[] = [];
    
    if (metrics.fcp > 1800) {
      issues.push('First Contentful Paint is slow. Consider optimizing critical rendering path.');
    }
    
    if (metrics.lcp > 2500) {
      issues.push('Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.');
    }
    
    if (metrics.fid > 100) {
      issues.push('First Input Delay is high. Reduce JavaScript execution time.');
    }
    
    if (metrics.cls > 0.1) {
      issues.push('Cumulative Layout Shift is high. Avoid layout shifts during page load.');
    }
    
    if (metrics.ttfb > 600) {
      issues.push('Time to First Byte is slow. Optimize server response time.');
    }

    if (issues.length > 0 && logToConsole) {
      console.warn('Performance Issues Detected:', issues);
    }

    // Send performance data to analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        custom_parameter: {
          fcp: metrics.fcp,
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          ttfb: metrics.ttfb,
          issues: issues.length
        }
      });
    }
  }, [metrics, enabled, logToConsole]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setIsMonitoring(false);
    };
  }, []);

  if (!enabled || !showMetrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-xs z-50 max-w-xs">
      <div className="font-semibold mb-2">Performance Monitor</div>
      {metrics ? (
        <div className="space-y-1">
          <div>FCP: {metrics.fcp}ms</div>
          <div>LCP: {metrics.lcp}ms</div>
          <div>FID: {metrics.fid}ms</div>
          <div>CLS: {metrics.cls}</div>
          <div>TTFB: {metrics.ttfb}ms</div>
        </div>
      ) : (
        <div>Measuring performance...</div>
      )}
      <div className="mt-2 text-gray-400">
        Status: {isMonitoring ? 'Active' : 'Inactive'}
      </div>
    </div>
  );
};

export default PerformanceMonitor;