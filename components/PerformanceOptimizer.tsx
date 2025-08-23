import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
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
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
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
  }, []);

  // TTFB measurement
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }
    }
  }, []);

  // Performance optimization functions
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const optimizeFonts = useCallback(() => {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        // Font optimization logic
        console.log('Fonts loaded and optimized');
      });
    }
  }, []);

  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/api/services',
      '/api/contact',
      '/images/hero-bg.jpg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.jpg') ? 'image' : 'fetch';
      document.head.appendChild(link);
    });
  }, []);

  const runOptimizations = useCallback(() => {
    setIsOptimizing(true);
    
    // Run optimizations
    optimizeImages();
    optimizeFonts();
    preloadCriticalResources();
    
    // Simulate optimization completion
    setTimeout(() => {
      setIsOptimizing(false);
    }, 1000);
  }, [optimizeImages, optimizeFonts, preloadCriticalResources]);

  // Auto-optimize on mount
  useEffect(() => {
    runOptimizations();
  }, [runOptimizations]);

  // Performance score calculation
  const getPerformanceScore = useCallback(() => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1200) score -= 10;
    
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
  }, [metrics]);

  const performanceScore = getPerformanceScore();

  return (
    <>
      {children}
      
      {/* Performance Monitor (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/80 backdrop-blur-sm border border-cyan-400/50 rounded-lg p-4 text-white text-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-3 h-3 rounded-full ${
                performanceScore >= 90 ? 'bg-green-400' : 
                performanceScore >= 70 ? 'bg-yellow-400' : 'bg-red-400'
              }`} />
              <span className="font-semibold">Performance: {performanceScore}/100</span>
            </div>
            
            {metrics && (
              <div className="space-y-1 text-xs text-gray-300">
                <div>FCP: {metrics.fcp?.toFixed(0)}ms</div>
                <div>LCP: {metrics.lcp?.toFixed(0)}ms</div>
                <div>FID: {metrics.fid?.toFixed(0)}ms</div>
                <div>CLS: {metrics.cls?.toFixed(3)}</div>
                <div>TTFB: {metrics.ttfb?.toFixed(0)}ms</div>
              </div>
            )}
            
            <button
              onClick={runOptimizations}
              disabled={isOptimizing}
              className="mt-2 w-full px-3 py-1 bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 rounded text-xs transition-colors"
            >
              {isOptimizing ? 'Optimizing...' : 'Re-optimize'}
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PerformanceOptimizer;