import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  logToConsole?: boolean;
  sendToAnalytics?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  logToConsole = true,
  sendToAnalytics = false,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  // Measure First Contentful Paint (FCP)
  const measureFCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            const fcp = Math.round(entry.startTime);
            setMetrics(prev => ({ ...prev, fcp }));
            if (logToConsole) console.log('FCP:', fcp, 'ms');
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }, [logToConsole]);

  // Measure Largest Contentful Paint (LCP)
  const measureLCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          const lcp = Math.round(lastEntry.startTime);
          setMetrics(prev => ({ ...prev, lcp }));
          if (logToConsole) console.log('LCP:', lcp, 'ms');
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }, [logToConsole]);

  // Measure First Input Delay (FID)
  const measureFID = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fid = Math.round(entry.processingStart - entry.startTime);
          setMetrics(prev => ({ ...prev, fid }));
          if (logToConsole) console.log('FID:', fid, 'ms');
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }, [logToConsole]);

  // Measure Cumulative Layout Shift (CLS)
  const measureCLS = useCallback(() => {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }));
            if (logToConsole) console.log('CLS:', Math.round(clsValue * 1000) / 1000);
          }
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }, [logToConsole]);

  // Measure Time to First Byte (TTFB)
  const measureTTFB = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.entryType === 'navigation') {
            const ttfb = Math.round(entry.responseStart - entry.requestStart);
            setMetrics(prev => ({ ...prev, ttfb }));
            if (logToConsole) console.log('TTFB:', ttfb, 'ms');
          }
        });
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, [logToConsole]);

  // Measure DOM and Window Load Times
  const measureLoadTimes = useCallback(() => {
    const domLoad = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    const windowLoad = performance.timing.loadEventEnd - performance.timing.navigationStart;
    
    setMetrics(prev => ({ 
      ...prev, 
      domLoad: Math.round(domLoad),
      windowLoad: Math.round(windowLoad)
    }));
    
    if (logToConsole) {
      console.log('DOM Load:', Math.round(domLoad), 'ms');
      console.log('Window Load:', Math.round(windowLoad), 'ms');
    }
  }, [logToConsole]);

  // Get performance grade
  const getPerformanceGrade = useCallback((metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    if (value === null) return 'N/A';
    
    switch (metric) {
      case 'fcp':
        if (value < 1800) return '🟢 Good';
        if (value < 3000) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'lcp':
        if (value < 2500) return '🟢 Good';
        if (value < 4000) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'fid':
        if (value < 100) return '🟢 Good';
        if (value < 300) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'cls':
        if (value < 0.1) return '🟢 Good';
        if (value < 0.25) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'ttfb':
        if (value < 800) return '🟢 Good';
        if (value < 1800) return '🟡 Needs Improvement';
        return '🔴 Poor';
      default:
        return 'N/A';
    }
  }, [metrics]);

  // Send metrics to analytics
  const sendMetricsToAnalytics = useCallback(() => {
    if (sendToAnalytics && window.gtag) {
      window.gtag('event', 'performance_metrics', {
        event_category: 'performance',
        fcp: metrics.fcp,
        lcp: metrics.lcp,
        fid: metrics.fid,
        cls: metrics.cls,
        ttfb: metrics.ttfb,
        dom_load: metrics.domLoad,
        window_load: metrics.windowLoad,
      });
    }
  }, [sendToAnalytics, metrics]);

  useEffect(() => {
    // Start measuring when component mounts
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();

    // Measure load times when window loads
    if (document.readyState === 'complete') {
      measureLoadTimes();
    } else {
      window.addEventListener('load', measureLoadTimes);
      return () => window.removeEventListener('load', measureLoadTimes);
    }
  }, [measureFCP, measureLCP, measureFID, measureCLS, measureTTFB, measureLoadTimes]);

  useEffect(() => {
    // Send metrics to analytics when all metrics are available
    if (Object.values(metrics).every(value => value !== null)) {
      sendMetricsToAnalytics();
    }
  }, [metrics, sendMetricsToAnalytics]);

  // Performance recommendations
  const getRecommendations = useCallback(() => {
    const recommendations = [];
    
    if (metrics.fcp && metrics.fcp > 3000) {
      recommendations.push('Optimize server response time and reduce blocking resources');
    }
    
    if (metrics.lcp && metrics.lcp > 4000) {
      recommendations.push('Optimize images and reduce render-blocking resources');
    }
    
    if (metrics.fid && metrics.fid > 300) {
      recommendations.push('Break up long tasks and optimize JavaScript execution');
    }
    
    if (metrics.cls && metrics.cls > 0.25) {
      recommendations.push('Set explicit dimensions for images and avoid layout shifts');
    }
    
    if (metrics.ttfb && metrics.ttfb > 1800) {
      recommendations.push('Optimize server response time and use CDN');
    }
    
    return recommendations;
  }, [metrics]);

  if (!showMetrics) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-white text-sm max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
          aria-label={isVisible ? 'Hide metrics' : 'Show metrics'}
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-gray-400">FCP:</span>
              <span className="ml-2">{metrics.fcp ? `${metrics.fcp}ms` : 'Loading...'}</span>
              <div className="text-xs text-gray-500">{getPerformanceGrade('fcp')}</div>
            </div>
            <div>
              <span className="text-gray-400">LCP:</span>
              <span className="ml-2">{metrics.lcp ? `${metrics.lcp}ms` : 'Loading...'}</span>
              <div className="text-xs text-gray-500">{getPerformanceGrade('lcp')}</div>
            </div>
            <div>
              <span className="text-gray-400">FID:</span>
              <span className="ml-2">{metrics.fid ? `${metrics.fid}ms` : 'Loading...'}</span>
              <div className="text-xs text-gray-500">{getPerformanceGrade('fid')}</div>
            </div>
            <div>
              <span className="text-gray-400">CLS:</span>
              <span className="ml-2">{metrics.cls ? metrics.cls : 'Loading...'}</span>
              <div className="text-xs text-gray-500">{getPerformanceGrade('cls')}</div>
            </div>
            <div>
              <span className="text-gray-400">TTFB:</span>
              <span className="ml-2">{metrics.ttfb ? `${metrics.ttfb}ms` : 'Loading...'}</span>
              <div className="text-xs text-gray-500">{getPerformanceGrade('ttfb')}</div>
            </div>
            <div>
              <span className="text-gray-400">DOM:</span>
              <span className="ml-2">{metrics.domLoad ? `${metrics.domLoad}ms` : 'Loading...'}</span>
            </div>
          </div>
          
          {getRecommendations().length > 0 && (
            <div className="mt-3 pt-3 border-t border-cyan-500/20">
              <h4 className="text-cyan-400 text-xs font-semibold mb-2">Recommendations:</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                {getRecommendations().map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-3 pt-3 border-t border-cyan-500/20">
            <button
              onClick={() => {
                if (logToConsole) {
                  console.table(metrics);
                  console.log('Performance Recommendations:', getRecommendations());
                }
              }}
              className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 text-xs py-2 px-3 rounded transition-colors"
            >
              Log to Console
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Add gtag to window type
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}