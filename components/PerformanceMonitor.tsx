import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
  domContentLoaded: number | null;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
}

// Type definitions for Performance API
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: EventTarget;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showDetails = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    domContentLoaded: null
  });
  const [isVisible, setIsVisible] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  // Calculate performance score
  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp) {
      if (metrics.fcp <= 1800) score -= 0;
      else if (metrics.fcp <= 3000) score -= 10;
      else score -= 20;
    }
    
    // LCP scoring (0-100)
    if (metrics.lcp) {
      if (metrics.lcp <= 2500) score -= 0;
      else if (metrics.lcp <= 4000) score -= 10;
      else score -= 20;
    }
    
    // FID scoring (0-100)
    if (metrics.fid) {
      if (metrics.fid <= 100) score -= 0;
      else if (metrics.fid <= 300) score -= 10;
      else score -= 20;
    }
    
    // CLS scoring (0-100)
    if (metrics.cls) {
      if (metrics.cls <= 0.1) score -= 0;
      else if (metrics.cls <= 0.25) score -= 10;
      else score -= 20;
    }
    
    return Math.max(0, score);
  }, []);

  // Get performance grade
  const getPerformanceGrade = (score: number): { grade: string; color: string; icon: React.ReactNode } => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400', icon: <CheckCircle className="w-4 h-4" /> };
    if (score >= 80) return { grade: 'B', color: 'text-blue-400', icon: <TrendingUp className="w-4 h-4" /> };
    if (score >= 70) return { grade: 'C', color: 'text-yellow-400', icon: <Info className="w-4 h-4" /> };
    return { grade: 'D', color: 'text-red-400', icon: <AlertTriangle className="w-4 h-4" /> };
  };

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

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
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutEntry = entry as LayoutShiftEntry;
        if (!layoutEntry.hadRecentInput) {
          clsValue += layoutEntry.value;
        }
      }
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Navigation timing
    if ('navigation' in performance) {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navEntry) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navEntry.responseStart - navEntry.requestStart,
          loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
          domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart
        }));
      }
    }

    // Cleanup observers
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    // Show performance monitor after page loads
    const timer = setTimeout(() => setIsVisible(true), 5000);
    
    // Start measuring performance
    const cleanup = measurePerformance();
    
    return () => {
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, [measurePerformance]);

  useEffect(() => {
    // Calculate performance score when metrics change
    const score = calculateScore(metrics);
    setPerformanceScore(score);
  }, [metrics, calculateScore]);

  if (!isVisible) return null;

  const { grade, color, icon } = getPerformanceGrade(performanceScore);

  return (
    <>
      {/* Performance Monitor Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        onClick={() => setShowMetrics(!showMetrics)}
        aria-label="Performance metrics"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Activity className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Performance Metrics Panel */}
      <AnimatePresence>
        {showMetrics && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl min-w-[320px] max-w-[400px]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold">Performance Monitor</h3>
              <div className={`flex items-center gap-2 ${color}`}>
                {icon}
                <span className="text-2xl font-bold">{grade}</span>
              </div>
            </div>

            {/* Performance Score */}
            <div className="mb-4 p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm">Overall Score</span>
                <span className="text-white font-bold">{performanceScore}/100</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    performanceScore >= 90 ? 'bg-green-500' :
                    performanceScore >= 80 ? 'bg-blue-500' :
                    performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${performanceScore}%` }}
                />
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="space-y-3 mb-4">
              <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                Core Web Vitals
              </h4>
              
              {metrics.fcp && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">FCP</span>
                  <span className={`font-mono ${metrics.fcp <= 1800 ? 'text-green-400' : metrics.fcp <= 3000 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {metrics.fcp.toFixed(0)}ms
                  </span>
                </div>
              )}
              
              {metrics.lcp && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">LCP</span>
                  <span className={`font-mono ${metrics.lcp <= 2500 ? 'text-green-400' : metrics.lcp <= 4000 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {metrics.lcp.toFixed(0)}ms
                  </span>
                </div>
              )}
              
              {metrics.fid && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">FID</span>
                  <span className={`font-mono ${metrics.fid <= 100 ? 'text-green-400' : metrics.fid <= 300 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {metrics.fid.toFixed(0)}ms
                  </span>
                </div>
              )}
              
              {metrics.cls && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">CLS</span>
                  <span className={`font-mono ${metrics.cls <= 0.1 ? 'text-green-400' : metrics.cls <= 0.25 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {metrics.cls.toFixed(3)}
                  </span>
                </div>
              )}
            </div>

            {/* Additional Metrics */}
            {showDetails && (
              <div className="space-y-3 mb-4">
                <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Additional Metrics
                </h4>
                
                {metrics.ttfb && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">TTFB</span>
                    <span className="text-white font-mono">{metrics.ttfb.toFixed(0)}ms</span>
                  </div>
                )}
                
                {metrics.loadTime && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Load Time</span>
                    <span className="text-white font-mono">{metrics.loadTime.toFixed(0)}ms</span>
                  </div>
                )}
                
                {metrics.domContentLoaded && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">DOM Ready</span>
                    <span className="text-white font-mono">{metrics.domContentLoaded.toFixed(0)}ms</span>
                  </div>
                )}
              </div>
            )}

            {/* Performance Tips */}
            <div className="pt-3 border-t border-white/20">
              <div className="text-center">
                <Info className="w-4 h-4 mx-auto text-gray-400 mb-1" />
                <p className="text-xs text-gray-400">
                  {performanceScore >= 90 ? 'Excellent performance!' :
                   performanceScore >= 80 ? 'Good performance, minor optimizations possible' :
                   performanceScore >= 70 ? 'Performance needs improvement' :
                   'Performance requires significant optimization'}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;