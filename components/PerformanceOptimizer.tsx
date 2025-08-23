import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      setIsMonitoring(true);
      
      // Measure page load time
      const pageLoadTime = performance.now();
      
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({
            ...prev,
            firstContentfulPaint: fcp.startTime,
            pageLoadTime: performance.now() - pageLoadTime
          }));
        }
      });
      
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({
            ...prev,
            largestContentfulPaint: lcp.startTime
          }));
        }
      });
      
      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        }
        setMetrics(prev => ({
          ...prev,
          cumulativeLayoutShift: clsValue
        }));
      });
      
      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          const inputEntry = fid as PerformanceEventTiming;
          setMetrics(prev => ({
            ...prev,
            firstInputDelay: inputEntry.processingStart - inputEntry.startTime
          }));
        }
      });

      try {
        fcpObserver.observe({ entryTypes: ['paint'] });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        // Silently handle performance monitoring errors
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        clsObserver.disconnect();
        fidObserver.disconnect();
      };
    }
  }, []);

  // PWA Service Worker Registration
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
          // Service worker registered successfully
        })
        .catch(() => {
          // Service worker registration failed
        });
    }
  }, []);

  // Preload critical resources
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Preconnect to external domains
      const preconnectLinks = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com'
      ];

      preconnectLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      // DNS prefetch for performance
      const dnsPrefetchLinks = [
        'https://api.ziontechgroup.com',
        'https://cdn.ziontechgroup.com'
      ];

      dnsPrefetchLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = href;
        document.head.appendChild(link);
      });
    }
  }, []);

  // Performance score calculation
  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.firstContentfulPaint > 1800) score -= 20;
    if (metrics.largestContentfulPaint > 2500) score -= 20;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 20;
    if (metrics.firstInputDelay > 100) score -= 20;
    
    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  return (
    <>
      {children}
      
      {/* Performance Metrics Display */}
      <AnimatePresence>
        {showMetrics && metrics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-white text-sm max-w-xs z-50"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-cyan-400">Performance</h3>
              <button
                onClick={() => setShowMetrics(false)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Score:</span>
                <span className={`font-bold ${
                  getPerformanceScore(metrics) >= 90 ? 'text-green-400' :
                  getPerformanceScore(metrics) >= 70 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {getPerformanceGrade(getPerformanceScore(metrics))} ({getPerformanceScore(metrics)})
                </span>
              </div>
              <div className="flex justify-between">
                <span>FCP:</span>
                <span>{Math.round(metrics.firstContentfulPaint)}ms</span>
              </div>
              <div className="flex justify-between">
                <span>LCP:</span>
                <span>{Math.round(metrics.largestContentfulPaint)}ms</span>
              </div>
              <div className="flex justify-between">
                <span>CLS:</span>
                <span>{metrics.cumulativeLayoutShift.toFixed(3)}</span>
              </div>
              <div className="flex justify-between">
                <span>FID:</span>
                <span>{Math.round(metrics.firstInputDelay)}ms</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Toggle Button */}
      {isMonitoring && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMetrics(!showMetrics)}
          className="fixed bottom-4 left-4 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-50 transition-colors"
          title="Toggle Performance Metrics"
        >
          📊
        </motion.button>
      )}
    </>
  );
};

export default PerformanceOptimizer;