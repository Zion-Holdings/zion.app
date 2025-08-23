import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
    // Measure Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            const paintEntry = entry as PerformanceEntry;
            if (paintEntry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: paintEntry.startTime }));
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input'] });
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.jpg',
        '/api/critical-data'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('.woff2') ? 'font' : 'image';
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    // Run optimization after initial load
    const timer = setTimeout(optimizeImages, 1000);
    return () => clearTimeout(timer);
  }, []);

  const runOptimizations = async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Apply optimizations
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.loading = 'lazy';
      img.decoding = 'async';
    });

    // Prefetch next likely pages
    const prefetchLinks = ['/services', '/about', '/contact'];
    prefetchLinks.forEach(link => {
      const prefetchLink = document.createElement('link');
      prefetchLink.rel = 'prefetch';
      prefetchLink.href = link;
      document.head.appendChild(prefetchLink);
    });

    setIsOptimizing(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        className="bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-4 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Performance</span>
        </div>
        
        {metrics && (
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={metrics.fcp < 1000 ? 'text-green-400' : 'text-yellow-400'}>
                {Math.round(metrics.fcp)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={metrics.lcp < 2500 ? 'text-green-400' : 'text-yellow-400'}>
                {Math.round(metrics.lcp || 0)}ms
              </span>
            </div>
          </div>
        )}
        
        <button
          onClick={runOptimizations}
          disabled={isOptimizing}
          className="mt-3 w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50"
        >
          {isOptimizing ? 'Optimizing...' : 'Optimize Now'}
        </button>
      </motion.div>
    </div>
  );
};

export default PerformanceOptimizer;