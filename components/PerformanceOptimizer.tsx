import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  showMetrics = false, 
  autoOptimize = true 
}) => {
  const [metrics, setMetrics] = useState<{
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  } | null>(null);

  const [isOptimizing, setIsOptimizing] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
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
        const fid = entries[entries.length - 1];
        if (fid && 'processingStart' in fid) {
          setMetrics(prev => ({ ...prev, fid: (fid as any).processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if ('hadRecentInput' in entry && !(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
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
  }, []);

  // Auto-optimization functions
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for images below the fold
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add decoding="async" for better performance
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const optimizeFonts = useCallback(() => {
    // Preload critical fonts
    const criticalFonts = [
      '/fonts/inter-var.woff2',
      '/fonts/inter-var.woff'
    ];
    
    criticalFonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  const optimizeCSS = useCallback(() => {
    // Remove unused CSS
    const styleSheets = Array.from(document.styleSheets);
    styleSheets.forEach(sheet => {
      try {
        const rules = sheet.cssRules || sheet.rules;
        if (rules) {
          // This is a simplified version - in production you'd want more sophisticated CSS purging
          console.log(`Optimizing stylesheet: ${sheet.href || 'inline'}`);
        }
      } catch (e) {
        // Cross-origin stylesheets will throw an error
      }
    });
  }, []);

  const optimizeJavaScript = useCallback(() => {
    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach(script => {
      if (script instanceof HTMLScriptElement && !script.async) {
        script.async = true;
      }
    });
  }, []);

  const runOptimizations = useCallback(async () => {
    if (!autoOptimize) return;
    
    setIsOptimizing(true);
    
    try {
      // Run optimizations in parallel
      await Promise.all([
        optimizeImages(),
        optimizeFonts(),
        optimizeCSS(),
        optimizeJavaScript()
      ]);
      
      console.log('Performance optimizations completed');
    } catch (error) {
      console.error('Error during optimization:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [autoOptimize, optimizeImages, optimizeFonts, optimizeCSS, optimizeJavaScript]);

  // Initialize performance monitoring
  useEffect(() => {
    measurePerformance();
    
    if (autoOptimize) {
      // Run optimizations after page load
      const timer = setTimeout(runOptimizations, 1000);
      return () => clearTimeout(timer);
    }
  }, [measurePerformance, autoOptimize, runOptimizations]);

  // Performance score calculation
  const getPerformanceScore = () => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 2000) score -= 20;
    else if (metrics.fcp > 1500) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 20;
    else if (metrics.lcp > 2500) score -= 10;
    
    // FID scoring (0-100)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;
    
    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!showMetrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.div
        className="bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 shadow-2xl shadow-black/50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white">Performance</h3>
          {isOptimizing && (
            <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>
        
        {metrics && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Score:</span>
              <span className={`font-semibold ${getScoreColor(getPerformanceScore())}`}>
                {getPerformanceScore()}/100
              </span>
            </div>
            
            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">FCP:</span>
                <span className="text-white">{Math.round(metrics.fcp)}ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">LCP:</span>
                <span className="text-white">{Math.round(metrics.lcp)}ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">FID:</span>
                <span className="text-white">{Math.round(metrics.fid)}ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">CLS:</span>
                <span className="text-white">{metrics.cls.toFixed(3)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">TTFB:</span>
                <span className="text-white">{Math.round(metrics.ttfb)}ms</span>
              </div>
            </div>
          </div>
        )}
        
        {autoOptimize && (
          <button
            onClick={runOptimizations}
            disabled={isOptimizing}
            className="mt-3 w-full px-3 py-1.5 text-xs bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Run performance optimizations"
          >
            {isOptimizing ? 'Optimizing...' : 'Optimize'}
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default PerformanceOptimizer;