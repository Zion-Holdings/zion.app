import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

  useEffect(() => {
    // Performance monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            setMetrics(prev => prev ? { ...prev, lcp } : { fcp: 0, lcp, fid: 0, cls: 0, ttfb: 0 });
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        setMetrics(prev => prev ? { ...prev, fcp: fcpEntry.startTime } : { fcp: fcpEntry.startTime, lcp: 0, fid: 0, cls: 0, ttfb: 0 });
      }

      // Measure Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => prev ? { ...prev, ttfb } : { fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb });
      }

      return () => observer.disconnect();
    }
  }, []);

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    
    // Simulate performance optimization
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/api/services'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('.woff2') ? 'font' : resource.includes('.jpg') ? 'image' : 'fetch';
      document.head.appendChild(link);
    });

    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });

    setIsOptimizing(false);
  };

  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 2500) score -= 25;
    else if (metrics.lcp > 1700) score -= 15;
    
    // TTFB scoring (0-100)
    if (metrics.ttfb > 600) score -= 15;
    else if (metrics.ttfb > 200) score -= 5;
    
    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const getPerformanceColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    if (score >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <>
      {children}
      
      {/* Performance Monitor */}
      {metrics && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-xl border border-cyan-400/30 rounded-lg p-4 text-white text-sm z-50 max-w-xs"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-cyan-400">Performance</h3>
            <button
              onClick={optimizePerformance}
              disabled={isOptimizing}
              className="px-2 py-1 text-xs bg-cyan-500/20 border border-cyan-400/30 rounded hover:bg-cyan-500/30 transition-colors disabled:opacity-50"
            >
              {isOptimizing ? 'Optimizing...' : 'Optimize'}
            </button>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">FCP:</span>
              <span className={metrics.fcp > 1000 ? 'text-yellow-400' : 'text-green-400'}>
                {Math.round(metrics.fcp)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">LCP:</span>
              <span className={metrics.lcp > 1700 ? 'text-yellow-400' : 'text-green-400'}>
                {Math.round(metrics.lcp)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">TTFB:</span>
              <span className={metrics.ttfb > 200 ? 'text-yellow-400' : 'text-green-400'}>
                {Math.round(metrics.ttfb)}ms
              </span>
            </div>
            
            <div className="border-t border-white/10 pt-2 mt-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Score:</span>
                <span className={`font-bold ${getPerformanceColor(getPerformanceScore(metrics))}`}>
                  {getPerformanceGrade(getPerformanceScore(metrics))} ({getPerformanceScore(metrics)})
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PerformanceOptimizer;