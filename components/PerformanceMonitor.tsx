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
  logToConsole?: boolean;
  showMetrics?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  logToConsole = false,
  showMetrics = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Performance observer for Core Web Vitals
  const observePerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => prev ? { ...prev, fcp: fcpEntry.startTime } : null);
          if (logToConsole) {
            console.log('FCP:', fcpEntry.startTime, 'ms');
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setMetrics(prev => prev ? { ...prev, lcp: lcpEntry.startTime } : null);
          if (logToConsole) {
            console.log('LCP:', lcpEntry.startTime, 'ms');
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'first-input') {
            const fid = entry.processingStart - entry.startTime;
            setMetrics(prev => prev ? { ...prev, fid } : null);
            if (logToConsole) {
              console.log('FID:', fid, 'ms');
            }
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
            if (logToConsole) {
              console.log('CLS:', clsValue);
            }
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const ttfb = navEntry.responseStart - navEntry.requestStart;
            setMetrics(prev => prev ? { ...prev, ttfb } : null);
            if (logToConsole) {
              console.log('TTFB:', ttfb, 'ms');
            }
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Cleanup function
      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        navigationObserver.disconnect();
      };
    } catch (error) {
      if (logToConsole) {
        console.error('Performance monitoring error:', error);
      }
    }
  }, [enabled, logToConsole]);

  // Get additional performance metrics
  const getAdditionalMetrics = useCallback(() => {
    if (!enabled) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const domLoad = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      const windowLoad = navigation.loadEventEnd - navigation.loadEventStart;

      setMetrics(prev => prev ? { ...prev, domLoad, windowLoad } : null);
      
      if (logToConsole) {
        console.log('DOM Load:', domLoad, 'ms');
        console.log('Window Load:', windowLoad, 'ms');
      }
    }
  }, [enabled, logToConsole]);

  // Performance optimization suggestions
  const getOptimizationSuggestions = useCallback((metrics: PerformanceMetrics) => {
    const suggestions = [];

    if (metrics.fcp > 1800) {
      suggestions.push('First Contentful Paint is slow. Consider optimizing critical rendering path.');
    }
    if (metrics.lcp > 2500) {
      suggestions.push('Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.');
    }
    if (metrics.fid > 100) {
      suggestions.push('First Input Delay is high. Reduce JavaScript execution time.');
    }
    if (metrics.cls > 0.1) {
      suggestions.push('Cumulative Layout Shift is high. Avoid layout shifts during page load.');
    }
    if (metrics.ttfb > 600) {
      suggestions.push('Time to First Byte is slow. Optimize server response time.');
    }

    return suggestions;
  }, []);

  // Send metrics to analytics (if configured)
  const sendMetricsToAnalytics = useCallback((metrics: PerformanceMetrics) => {
    if (!enabled || !window.gtag) return;

    try {
      window.gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(metrics.lcp),
        custom_parameters: {
          fcp: Math.round(metrics.fcp),
          lcp: Math.round(metrics.lcp),
          fid: Math.round(metrics.fid),
          cls: metrics.cls.toFixed(3),
          ttfb: Math.round(metrics.ttfb),
          dom_load: Math.round(metrics.domLoad),
          window_load: Math.round(metrics.windowLoad)
        }
      });
    } catch (error) {
      if (logToConsole) {
        console.error('Error sending metrics to analytics:', error);
      }
    }
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const cleanup = observePerformance();
    
    // Get additional metrics after a delay to ensure they're available
    const timer = setTimeout(getAdditionalMetrics, 1000);

    return () => {
      if (cleanup) cleanup();
      clearTimeout(timer);
    };
  }, [enabled, observePerformance, getAdditionalMetrics]);

  // Update metrics when they change
  useEffect(() => {
    if (metrics && Object.values(metrics).every(val => val !== undefined)) {
      sendMetricsToAnalytics(metrics);
    }
  }, [metrics, sendMetricsToAnalytics]);

  // Show performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && showMetrics) {
      setIsVisible(true);
    }
  }, [showMetrics]);

  if (!enabled || !isVisible) return null;

  const getPerformanceScore = (metrics: PerformanceMetrics) => {
    let score = 100;
    
    if (metrics.fcp > 1800) score -= 20;
    if (metrics.lcp > 2500) score -= 25;
    if (metrics.fid > 100) score -= 20;
    if (metrics.cls > 0.1) score -= 25;
    if (metrics.ttfb > 600) score -= 10;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!metrics) return null;

  const score = getPerformanceScore(metrics);
  const suggestions = getOptimizationSuggestions(metrics);

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-white text-sm max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 mb-3">
        <div className="flex justify-between">
          <span>Performance Score:</span>
          <span className={`font-bold ${getScoreColor(score)}`}>{score}/100</span>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.fcp > 1800 ? 'text-red-400' : 'text-green-400'}>
            {Math.round(metrics.fcp)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}>
            {Math.round(metrics.lcp)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={metrics.fid > 100 ? 'text-red-400' : 'text-green-400'}>
            {Math.round(metrics.fid)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}>
            {Math.round(metrics.ttfb)}ms
          </span>
        </div>
      </div>

      {suggestions.length > 0 && (
        <div className="border-t border-gray-700 pt-3">
          <h4 className="font-semibold text-yellow-400 mb-2">Optimization Suggestions:</h4>
          <ul className="space-y-1 text-xs text-gray-300">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;