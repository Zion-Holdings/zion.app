import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showUI?: boolean;
}

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

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  enabled = true, 
  showUI = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Measure Time to First Byte
    const measureTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({ ...prev, ttfb: navigation.responseStart - navigation.requestStart }));
      }
    };

    // Measure First Contentful Paint
    const measureFCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      }
    };

    // Measure Largest Contentful Paint
    const measureLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }
    };

    // Measure First Input Delay
    const measureFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            const eventEntry = entry as PerformanceEventTiming;
            if (eventEntry.processingStart) {
              setMetrics(prev => ({ ...prev, fid: eventEntry.processingStart - eventEntry.startTime }));
            }
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      }
    };

    // Measure Cumulative Layout Shift
    const measureCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            const layoutEntry = entry as LayoutShiftEntry;
            if (!layoutEntry.hadRecentInput) {
              clsValue += layoutEntry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Measure First Meaningful Paint (if available)
    const measureFMP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fmpEntry = entries.find(entry => entry.name === 'first-meaningful-paint');
          if (fmpEntry) {
            setMetrics(prev => ({ ...prev, fmp: fmpEntry.startTime }));
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      }
    };

    // Initialize measurements
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        measureTTFB();
        measureFCP();
        measureLCP();
        measureFID();
        measureCLS();
        measureFMP();
      });
    } else {
      measureTTFB();
      measureFCP();
      measureLCP();
      measureFID();
      measureCLS();
      measureFMP();
    }

    // Show UI after a delay if enabled
    if (showUI) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [enabled, showUI]);

  // Send metrics to analytics (if configured)
  useEffect(() => {
    if (enabled && metrics.lcp && metrics.fid && metrics.cls) {
      // Send to Google Analytics or other analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'Zion Tech Group',
          value: Math.round(metrics.lcp),
          non_interaction: true,
          custom_map: {
            metric1: 'lcp',
            metric2: 'fid',
            metric3: 'cls'
          }
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        // Performance metrics logged for development
      }
    }
  }, [metrics, enabled]);

  // Performance score calculation
  const getPerformanceScore = () => {
    let score = 100;
    
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.ttfb && metrics.ttfb > 200) score -= 20;
    
    return Math.max(0, score);
  };

  // Get performance grade
  const getPerformanceGrade = (score: number) => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400', bgColor: 'bg-green-500/20' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-400', bgColor: 'bg-orange-500/20' };
    return { grade: 'D', color: 'text-red-400', bgColor: 'bg-red-500/20' };
  };

  if (!showUI || !isVisible) return null;

  const score = getPerformanceScore();
  const grade = getPerformanceGrade(score);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 shadow-2xl max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close performance monitor"
          >
            ×
          </button>
        </div>

        {/* Performance Score */}
        <div className={`text-center p-3 rounded-xl mb-3 ${grade.bgColor}`}>
          <div className={`text-2xl font-bold ${grade.color}`}>{grade.grade}</div>
          <div className="text-sm text-gray-300">Score: {score}/100</div>
        </div>

        {/* Metrics */}
        <div className="space-y-2 text-xs">
          {metrics.fcp && (
            <div className="flex justify-between">
              <span className="text-gray-400">FCP:</span>
              <span className={metrics.fcp <= 1800 ? 'text-green-400' : 'text-red-400'}>
                {Math.round(metrics.fcp)}ms
              </span>
            </div>
          )}
          
          {metrics.lcp && (
            <div className="flex justify-between">
              <span className="text-gray-400">LCP:</span>
              <span className={metrics.lcp <= 2500 ? 'text-green-400' : 'text-red-400'}>
                {Math.round(metrics.lcp)}ms
              </span>
            </div>
          )}
          
          {metrics.fid && (
            <div className="flex justify-between">
              <span className="text-gray-400">FID:</span>
              <span className={metrics.fid <= 100 ? 'text-green-400' : 'text-red-400'}>
                {Math.round(metrics.fid)}ms
              </span>
            </div>
          )}
          
          {metrics.cls && (
            <div className="flex justify-between">
              <span className="text-gray-400">CLS:</span>
              <span className={metrics.cls <= 0.1 ? 'text-green-400' : 'text-red-400'}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
          )}
          
          {metrics.ttfb && (
            <div className="flex justify-between">
              <span className="text-gray-400">TTFB:</span>
              <span className={metrics.ttfb <= 200 ? 'text-green-400' : 'text-red-400'}>
                {Math.round(metrics.ttfb)}ms
              </span>
            </div>
          )}
        </div>

        {/* Recommendations */}
        {score < 90 && (
          <div className="mt-3 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <div className="text-xs text-yellow-400 font-medium mb-1">Recommendations:</div>
            <ul className="text-xs text-gray-300 space-y-1">
              {metrics.lcp && metrics.lcp > 2500 && (
                <li>• Optimize images and reduce LCP</li>
              )}
              {metrics.fid && metrics.fid > 100 && (
                <li>• Reduce JavaScript execution time</li>
              )}
              {metrics.cls && metrics.cls > 0.1 && (
                <li>• Fix layout shifts and stabilize elements</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;