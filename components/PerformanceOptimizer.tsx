import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Performance monitoring
    let fcpObserver: PerformanceObserver | undefined;
    let lcpObserver: PerformanceObserver | undefined;
    let fidObserver: PerformanceObserver | undefined;
    let clsObserver: PerformanceObserver | undefined;

    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1] as PerformanceEventTiming;
        if (fid && 'processingStart' in fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any;
          if (layoutShiftEntry && !layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }
    }

    // Image optimization
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });

    // Font optimization
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.href = '/fonts/inter-var.woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    // Resource hints
    const resourceHints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];

    resourceHints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossOrigin) {
        link.crossOrigin = hint.crossOrigin;
      }
      document.head.appendChild(link);
    });

    return () => {
      fcpObserver?.disconnect();
      lcpObserver?.disconnect();
      fidObserver?.disconnect();
      clsObserver?.disconnect();
    };
  }, []);

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    
    // Preload critical resources
    const criticalResources = [
      '/api/services',
      '/api/analytics',
      '/api/health'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });

    // Optimize images
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const src = img.getAttribute('data-src');
      if (src && img instanceof HTMLImageElement) {
        img.src = src;
        img.removeAttribute('data-src');
      }
    });

    // Optimize CSS
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      try {
        const rules = styleSheets[i].cssRules;
        // Remove unused CSS rules (simplified)
        if (rules.length > 1000) {
          console.log(`Large stylesheet detected: ${rules.length} rules`);
        }
      } catch (e) {
        // Cross-origin stylesheets will throw an error
      }
    }

    setIsOptimizing(false);
  };

  const getPerformanceScore = () => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // FCP penalty (target: < 1.8s)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP penalty (target: < 2.5s)
    if (metrics.lcp > 2500) score -= 20;
    else if (metrics.lcp > 1500) score -= 10;
    
    // FID penalty (target: < 100ms)
    if (metrics.fid > 100) score -= 20;
    else if (metrics.fid > 50) score -= 10;
    
    // CLS penalty (target: < 0.1)
    if (metrics.cls > 0.1) score -= 20;
    else if (metrics.cls > 0.05) score -= 10;
    
    return Math.max(0, score);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-white text-sm z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Performance</h3>
        <button
          onClick={optimizePerformance}
          disabled={isOptimizing}
          className="px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs disabled:opacity-50"
        >
          {isOptimizing ? 'Optimizing...' : 'Optimize'}
        </button>
      </div>
      
      {metrics && (
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Score:</span>
            <span className={`font-bold ${getPerformanceScore() >= 80 ? 'text-green-400' : getPerformanceScore() >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
              {getPerformanceScore()}/100
            </span>
          </div>
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp < 1000 ? 'text-green-400' : metrics.fcp < 1800 ? 'text-yellow-400' : 'text-red-400'}>
              {Math.round(metrics.fcp)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp < 1500 ? 'text-green-400' : metrics.lcp < 2500 ? 'text-yellow-400' : 'text-red-400'}>
              {Math.round(metrics.lcp)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={metrics.fid < 50 ? 'text-green-400' : metrics.fid < 100 ? 'text-yellow-400' : 'text-red-400'}>
              {Math.round(metrics.fid)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls < 0.05 ? 'text-green-400' : metrics.cls < 0.1 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;