import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: unknown;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  sources?: unknown[];
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Performance monitoring
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1] as PerformanceEventTiming;
        if (fid && 'processingStart' in fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
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
    optimizeImages();
    
    // Lazy loading for images
    setupLazyLoading();
    
    // Preload critical resources
    preloadCriticalResources();

    return () => {
      // Cleanup observers
      if ('PerformanceObserver' in window) {
        PerformanceObserver.prototype.disconnect?.();
      }
    };
  }, []);

  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.loading = 'lazy';
      }
      
      // Add decoding="async" for better performance
      img.decoding = 'async';
      
      // Add error handling
      img.onerror = () => {
        img.style.display = 'none';
      };
    });
  };

  const setupLazyLoading = () => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      // eslint-disable-next-line no-undef
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as { dataset: { src?: string }, src: string, classList: { remove: (cls: string) => void } };
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  };

  const preloadCriticalResources = () => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/styles/critical.css';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.as = 'font';
    fontPreload.href = '/fonts/inter-var.woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);
  };

  const runOptimizations = async () => {
    setIsOptimizing(true);
    
    // Compress images
    await compressImages();
    
    // Minify CSS/JS
    await minifyAssets();
    
    // Cache optimization
    await optimizeCache();
    
    setIsOptimizing(false);
  };

  const compressImages = async () => {
    // Simulate image compression
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const minifyAssets = async () => {
    // Simulate asset minification
    await new Promise(resolve => setTimeout(resolve, 500));
  };

  const optimizeCache = async () => {
    // Simulate cache optimization
    await new Promise(resolve => setTimeout(resolve, 300));
  };

  const getPerformanceScore = () => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // FCP scoring (0-2.5s is good)
    if (metrics.fcp > 2500) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP scoring (0-2.5s is good)
    if (metrics.lcp > 2500) score -= 25;
    else if (metrics.lcp > 1000) score -= 15;
    
    // FID scoring (0-100ms is good)
    if (metrics.fid > 100) score -= 20;
    else if (metrics.fid > 50) score -= 10;
    
    // CLS scoring (0-0.1 is good)
    if (metrics.cls > 0.1) score -= 25;
    else if (metrics.cls > 0.05) score -= 15;
    
    return Math.max(0, score);
  };

  const performanceScore = getPerformanceScore();
  const scoreColor = performanceScore >= 90 ? 'text-green-400' : 
                     performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400';

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/90 backdrop-blur-xl border border-cyan-400/30 rounded-lg p-4 text-white shadow-2xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Performance Monitor</span>
        </div>
        
        {metrics && (
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={metrics.fcp > 2500 ? 'text-red-400' : metrics.fcp > 1000 ? 'text-yellow-400' : 'text-green-400'}>
                {metrics.fcp.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={metrics.lcp > 2500 ? 'text-red-400' : metrics.lcp > 1000 ? 'text-yellow-400' : 'text-green-400'}>
                {metrics.lcp.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>FID:</span>
              <span className={metrics.fid > 100 ? 'text-red-400' : metrics.fid > 50 ? 'text-yellow-400' : 'text-green-400'}>
                {metrics.fid.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={metrics.cls > 0.1 ? 'text-red-400' : metrics.cls > 0.05 ? 'text-yellow-400' : 'text-green-400'}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>TTFB:</span>
              <span className={metrics.ttfb > 600 ? 'text-red-400' : metrics.ttfb > 200 ? 'text-yellow-400' : 'text-green-400'}>
                {metrics.ttfb.toFixed(0)}ms
              </span>
            </div>
          </div>
        )}
        
        <div className="mt-3 pt-3 border-t border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs">Score:</span>
            <span className={`text-sm font-bold ${scoreColor}`}>{performanceScore}/100</span>
          </div>
          
          <button
            onClick={runOptimizations}
            disabled={isOptimizing}
            className="w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs rounded hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isOptimizing ? 'Optimizing...' : 'Run Optimizations'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PerformanceOptimizer;