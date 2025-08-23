import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domContentLoaded: number;
  loadComplete: number;
  memoryUsage?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  logToConsole?: boolean;
  sendToAnalytics?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  logToConsole = false,
  sendToAnalytics = false,
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 800,
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Get performance metrics
  const getPerformanceMetrics = useCallback((): PerformanceMetrics => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
    
    // Get FID (First Input Delay) - requires user interaction
    const fid = 0; // Will be updated when user interacts
    
    // Get CLS (Cumulative Layout Shift)
    const cls = 0; // Will be updated by observer
    
    const ttfb = navigation.responseStart - navigation.requestStart;
    const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
    const loadComplete = navigation.loadEventEnd - navigation.fetchStart;
    
    // Get memory usage if available
    let memoryUsage;
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      memoryUsage = {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit,
      };
    }
    
    return {
      fcp,
      lcp,
      fid,
      cls,
      ttfb,
      domContentLoaded,
      loadComplete,
      memoryUsage,
    };
  }, []);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    // Monitor LCP
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        if (lastEntry) {
          setMetrics(prev => prev ? { ...prev, lcp: lastEntry.startTime } : null);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      
      // Monitor CLS
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      
      // Monitor FID
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = (entry as any).processingStart - (entry as any).startTime;
          setMetrics(prev => prev ? { ...prev, fid } : null);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    }
  }, []);

  // Analyze performance and provide recommendations
  const analyzePerformance = useCallback((metrics: PerformanceMetrics) => {
    const recommendations: string[] = [];
    
    if (metrics.fcp > threshold.fcp) {
      recommendations.push('First Contentful Paint is slow. Consider optimizing critical rendering path.');
    }
    
    if (metrics.lcp > threshold.lcp) {
      recommendations.push('Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.');
    }
    
    if (metrics.fid > threshold.fid) {
      recommendations.push('First Input Delay is high. Consider code splitting and reducing JavaScript execution time.');
    }
    
    if (metrics.cls > threshold.cls) {
      recommendations.push('Cumulative Layout Shift is high. Ensure stable layouts and avoid content jumping.');
    }
    
    if (metrics.ttfb > threshold.ttfb) {
      recommendations.push('Time to First Byte is slow. Optimize server response time and consider CDN.');
    }
    
    return recommendations;
  }, [threshold]);

  // Send metrics to analytics
  const sendMetricsToAnalytics = useCallback((metrics: PerformanceMetrics) => {
    if (!sendToAnalytics) return;
    
    // Send to Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'performance',
        event_label: 'core_web_vitals',
        value: Math.round(metrics.lcp),
        custom_parameters: {
          fcp: Math.round(metrics.fcp),
          lcp: Math.round(metrics.lcp),
          fid: Math.round(metrics.fid),
          cls: metrics.cls.toFixed(3),
          ttfb: Math.round(metrics.ttfb),
        }
      });
    }
    
    // Send to custom analytics endpoint
    fetch('/api/analytics/performance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        metrics,
      }),
    }).catch(() => {
      // Silently fail if analytics endpoint is not available
    });
  }, [sendToAnalytics]);

  // Log metrics to console
  const logMetrics = useCallback((metrics: PerformanceMetrics) => {
    if (!logToConsole) return;
    
    console.group('🚀 Performance Metrics');
    console.log('First Contentful Paint:', `${metrics.fcp.toFixed(0)}ms`);
    console.log('Largest Contentful Paint:', `${metrics.lcp.toFixed(0)}ms`);
    console.log('First Input Delay:', `${metrics.fid.toFixed(0)}ms`);
    console.log('Cumulative Layout Shift:', metrics.cls.toFixed(3));
    console.log('Time to First Byte:', `${metrics.ttfb.toFixed(0)}ms`);
    console.log('DOM Content Loaded:', `${metrics.domContentLoaded.toFixed(0)}ms`);
    console.log('Load Complete:', `${metrics.loadComplete.toFixed(0)}ms`);
    
    if (metrics.memoryUsage) {
      console.log('Memory Usage:', {
        used: `${(metrics.memoryUsage.usedJSHeapSize / 1048576).toFixed(2)}MB`,
        total: `${(metrics.memoryUsage.totalJSHeapSize / 1048576).toFixed(2)}MB`,
        limit: `${(metrics.memoryUsage.jsHeapSizeLimit / 1048576).toFixed(2)}MB`,
      });
    }
    
    const recommendations = analyzePerformance(metrics);
    if (recommendations.length > 0) {
      console.group('💡 Performance Recommendations');
      recommendations.forEach(rec => console.log(rec));
      console.groupEnd();
    }
    
    console.groupEnd();
  }, [logToConsole, analyzePerformance]);

  // Start monitoring
  useEffect(() => {
    if (!enabled) return;
    
    setIsMonitoring(true);
    
    // Wait for page to load completely
    if (document.readyState === 'complete') {
      const initialMetrics = getPerformanceMetrics();
      setMetrics(initialMetrics);
      logMetrics(initialMetrics);
      sendMetricsToAnalytics(initialMetrics);
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const initialMetrics = getPerformanceMetrics();
          setMetrics(initialMetrics);
          logMetrics(initialMetrics);
          sendMetricsToAnalytics(initialMetrics);
        }, 100);
      });
    }
    
    // Start monitoring Core Web Vitals
    monitorCoreWebVitals();
    
    // Monitor performance over time
    const interval = setInterval(() => {
      if (metrics) {
        const currentMetrics = getPerformanceMetrics();
        setMetrics(currentMetrics);
        logMetrics(currentMetrics);
        sendMetricsToAnalytics(currentMetrics);
      }
    }, 30000); // Check every 30 seconds
    
    return () => {
      clearInterval(interval);
      setIsMonitoring(false);
    };
  }, [enabled, getPerformanceMetrics, logMetrics, sendMetricsToAnalytics, monitorCoreWebVitals, metrics]);

  // Performance optimization suggestions
  const getOptimizationTips = useCallback(() => {
    if (!metrics) return [];
    
    const tips: string[] = [];
    
    if (metrics.fcp > 1000) {
      tips.push('Optimize critical rendering path by inlining critical CSS');
    }
    
    if (metrics.lcp > 2000) {
      tips.push('Use next/image for automatic image optimization');
    }
    
    if (metrics.ttfb > 600) {
      tips.push('Consider implementing server-side caching');
    }
    
    if (metrics.memoryUsage && metrics.memoryUsage.usedJSHeapSize > 50 * 1024 * 1024) {
      tips.push('Monitor memory usage and implement cleanup for long-running components');
    }
    
    return tips;
  }, [metrics]);

  // Don't render anything in production unless explicitly enabled
  if (!enabled || process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm border border-gray-700 max-w-sm z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <span className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`}></span>
      </div>
      
      {metrics && (
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp > threshold.fcp ? 'text-red-400' : 'text-green-400'}>
              {metrics.fcp.toFixed(0)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp > threshold.lcp ? 'text-red-400' : 'text-green-400'}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls > threshold.cls ? 'text-red-400' : 'text-green-400'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb > threshold.ttfb ? 'text-red-400' : 'text-green-400'}>
              {metrics.ttfb.toFixed(0)}ms
            </span>
          </div>
        </div>
      )}
      
      {getOptimizationTips().length > 0 && (
        <div className="mt-3 pt-2 border-t border-gray-600">
          <h4 className="text-xs font-medium mb-1">Optimization Tips:</h4>
          <ul className="text-xs space-y-1">
            {getOptimizationTips().map((tip, index) => (
              <li key={index} className="text-yellow-300">• {tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;