import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

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
  const [optimizationComplete, setOptimizationComplete] = useState(false);

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

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }
    }
  }, []);

  // Performance optimization
  const optimizePerformance = useCallback(async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
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
      link.crossOrigin = 'anonymous';
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

    // Enable intersection observer for animations
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      });

      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    }

    setOptimizationComplete(true);
    setIsOptimizing(false);
  }, []);

  useEffect(() => {
    measurePerformance();
    optimizePerformance();
  }, [measurePerformance, optimizePerformance]);

  // Performance score calculation
  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.fcp > 1800) score -= 20;
    if (metrics.lcp > 2500) score -= 20;
    if (metrics.fid > 100) score -= 20;
    if (metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb > 600) score -= 20;
    
    return Math.max(0, score);
  };

  const score = metrics ? getPerformanceScore(metrics) : 0;
  const scoreColor = score >= 90 ? 'text-green-400' : score >= 70 ? 'text-yellow-400' : 'text-red-400';

  return (
    <>
      {/* Performance Dashboard */}
      <div className="fixed top-4 right-4 z-50">
        <motion.div
          className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 shadow-2xl"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-5 h-5 text-cyan-400" />
            <h3 className="text-white font-semibold">Performance</h3>
            {isOptimizing && (
              <motion.div
                className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>

          {metrics && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Score:</span>
                <span className={`text-lg font-bold ${scoreColor}`}>{score}/100</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-400">FCP:</span>
                  <span className={`ml-1 ${metrics.fcp < 1800 ? 'text-green-400' : 'text-red-400'}`}>
                    {Math.round(metrics.fcp)}ms
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">LCP:</span>
                  <span className={`ml-1 ${metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400'}`}>
                    {Math.round(metrics.lcp)}ms
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">CLS:</span>
                  <span className={`ml-1 ${metrics.cls < 0.1 ? 'text-green-400' : 'text-red-400'}`}>
                    {metrics.cls.toFixed(3)}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">TTFB:</span>
                  <span className={`ml-1 ${metrics.ttfb < 600 ? 'text-green-400' : 'text-red-400'}`}>
                    {Math.round(metrics.ttfb)}ms
                  </span>
                </div>
              </div>
            </div>
          )}

          {optimizationComplete && (
            <motion.div
              className="mt-3 p-2 bg-green-500/20 border border-green-500/30 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="flex items-center gap-2 text-green-400 text-xs">
                <TrendingUp className="w-3 h-3" />
                Optimized
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Performance Optimized Content */}
      <div className="performance-optimized">
        {children}
      </div>

      {/* Performance Styles */}
      <style jsx>{`
        .performance-optimized img {
          transition: opacity 0.3s ease;
        }
        
        .performance-optimized img[loading="lazy"] {
          opacity: 0;
        }
        
        .performance-optimized img[loading="lazy"].loaded {
          opacity: 1;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default PerformanceOptimizer;