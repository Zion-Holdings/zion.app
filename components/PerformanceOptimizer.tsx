import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  showMetrics?: boolean;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  score: number;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableMonitoring = true,
  showMetrics = true,
  enableImageOptimization = true,
  enableLazyLoading = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    score: 0
  });

  // Measure performance metrics
  useEffect(() => {
    if (!enableMonitoring) return;

    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics(prev => ({ ...prev, ttfb: navigation.responseStart - navigation.requestStart }));
        }
      }
    };

    const measureCoreWebVitals = () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fid = entries[entries.length - 1] as FirstInputEntry;
          if (fid && 'processingStart' in fid) {
            setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            const clsEntry = entry as LayoutShiftEntry;
            if (!clsEntry.hadRecentInput) {
              clsValue += clsEntry.value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      }
    };

    const calculatePerformanceScore = () => {
      let score = 100;
      
      // FCP scoring (0-100)
      if (metrics.fcp > 2500) score -= 30;
      else if (metrics.fcp > 1800) score -= 15;
      
      // LCP scoring (0-100)
      if (metrics.lcp > 4000) score -= 30;
      else if (metrics.lcp > 2500) score -= 15;
      
      // FID scoring (0-100)
      if (metrics.fid > 300) score -= 30;
      else if (metrics.fid > 100) score -= 15;
      
      // CLS scoring (0-100)
      if (metrics.cls > 0.25) score -= 30;
      else if (metrics.cls > 0.1) score -= 15;
      
      setMetrics(prev => ({ ...prev, score: Math.max(0, score) }));
    };

    measurePerformance();
    const cleanup = measureCoreWebVitals();
    
    // Calculate score after metrics are updated
    const timer = setTimeout(calculatePerformanceScore, 1000);
    
    return () => {
      cleanup?.();
      clearTimeout(timer);
    };
  }, [enableMonitoring, metrics.fcp, metrics.lcp, metrics.fid, metrics.cls]);

  // Image optimization
  useEffect(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        img.setAttribute('loading', 'lazy');
        img.setAttribute('decoding', 'async');
        
        // Set fetchpriority for above-the-fold images
        if (img.getBoundingClientRect().top < window.innerHeight) {
          img.setAttribute('fetchpriority', 'high');
        }
      });
    };

    // Run after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
      optimizeImages();
    }
  }, [enableImageOptimization]);

  // Lazy loading setup
  useEffect(() => {
    if (!enableLazyLoading || typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new (window as any).IntersectionObserver((entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as any;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    lazyImages.forEach((img) => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, [enableLazyLoading]);

  // Preload critical resources
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = '/fonts/inter-var.woff2';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);

    // Preload critical CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'preload';
    cssLink.href = '/styles/globals.css';
    cssLink.as = 'style';
    document.head.appendChild(cssLink);

    // Prefetch non-critical resources
    const prefetchLinks = [
      '/api/analytics',
      '/api/error-reporting'
    ];

    prefetchLinks.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  if (!showMetrics) return null;

  return (
    <>
      {/* Performance Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 z-50 bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-2xl p-4 shadow-2xl max-w-sm"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
          <div className={`w-3 h-3 rounded-full ${
            metrics.score >= 90 ? 'bg-green-400' : 
            metrics.score >= 70 ? 'bg-yellow-400' : 'bg-red-400'
          }`} />
        </div>
        
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-400">Score:</span>
            <span className="text-white font-medium">{metrics.score}/100</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">FCP:</span>
            <span className="text-white">{metrics.fcp.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">LCP:</span>
            <span className="text-white">{metrics.lcp.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">FID:</span>
            <span className="text-white">{metrics.fid.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">CLS:</span>
            <span className="text-white">{metrics.cls.toFixed(3)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">TTFB:</span>
            <span className="text-white">{metrics.ttfb.toFixed(0)}ms</span>
          </div>
        </div>
      </motion.div>

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite">
        Performance score: {metrics.score} out of 100
      </div>
    </>
  );
};

export default PerformanceOptimizer;