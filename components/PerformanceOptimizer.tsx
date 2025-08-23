import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gauge, TrendingUp, Zap, Clock, Wifi, HardDrive, 
  Cpu, X, Settings, RefreshCw, AlertTriangle
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  showMetrics = false, 
  autoOptimize = false 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<string[]>([]);
  const [showPanel, setShowPanel] = useState(false);

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
          // Type guard for LayoutShiftEntry
          if ('hadRecentInput' in entry && !entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Time to First Byte
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));
    }

    // DOM and Window load times
    const domLoad = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    const windowLoad = performance.timing.loadEventEnd - performance.timing.navigationStart;
    setMetrics(prev => ({ ...prev, domLoad, windowLoad }));
  }, []);

  // Auto-optimization
  const performOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    const optimizations: string[] = [];

    try {
      // Image optimization
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
          optimizations.push('Added lazy loading to images');
        }
      });

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/static/css/main.css'
      ];

      criticalResources.forEach(resource => {
        if (!document.querySelector(`link[href="${resource}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource;
          link.as = resource.endsWith('.woff2') ? 'font' : 'style';
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
          optimizations.push(`Preloaded critical resource: ${resource}`);
        }
      });

      // Service worker optimization
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          await registration.update();
          optimizations.push('Updated service worker');
        }
      }

      // Memory optimization
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB
          // Suggest garbage collection
          if ('gc' in window) {
            (window as any).gc();
            optimizations.push('Triggered garbage collection');
          }
        }
      }

      setOptimizationHistory(prev => [...optimizations, ...prev].slice(0, 10));
    } catch (error) {
      console.error('Optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, []);

  useEffect(() => {
    if (showMetrics) {
      setIsVisible(true);
      measurePerformance();
    }

    if (autoOptimize) {
      const interval = setInterval(performOptimizations, 30000); // Every 30 seconds
      return () => clearInterval(interval);
    }
  }, [showMetrics, autoOptimize, measurePerformance, performOptimizations]);

  const getPerformanceScore = (): number => {
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

  if (!isVisible) return null;

  return (
    <>
      {/* Performance Monitor Button */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full shadow-2xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300/50"
        aria-label="Performance Monitor"
        aria-expanded={showPanel}
      >
        <Gauge className="w-6 h-6" />
      </button>

      {/* Performance Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 w-96 shadow-2xl z-50"
            role="dialog"
            aria-labelledby="performance-panel-title"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 id="performance-panel-title" className="text-xl font-semibold text-white flex items-center">
                <Gauge className="w-6 h-6 mr-2 text-cyan-400" />
                Performance Monitor
              </h2>
              <button
                onClick={() => setShowPanel(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close performance panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Performance Score */}
            {metrics && (
              <div className="mb-6">
                <div className="text-center mb-4">
                  <div className={`text-4xl font-bold ${getPerformanceColor(getPerformanceScore())}`}>
                    {getPerformanceScore()}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    Grade: {getPerformanceGrade(getPerformanceScore())}
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">FCP</div>
                    <div className="text-sm text-white font-mono">
                      {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">LCP</div>
                    <div className="text-sm text-white font-mono">
                      {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">FID</div>
                    <div className="text-sm text-white font-mono">
                      {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">CLS</div>
                    <div className="text-sm text-white font-mono">
                      {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Optimization Controls */}
            <div className="space-y-3 mb-4">
              <button
                onClick={performOptimizations}
                disabled={isOptimizing}
                className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isOptimizing ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Zap className="w-4 h-4" />
                )}
                <span>{isOptimizing ? 'Optimizing...' : 'Run Optimizations'}</span>
              </button>

              <button
                onClick={measurePerformance}
                className="w-full px-4 py-2 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh Metrics</span>
              </button>
            </div>

            {/* Optimization History */}
            {optimizationHistory.length > 0 && (
              <div className="border-t border-gray-700 pt-4">
                <h3 className="text-sm font-semibold text-white mb-3">Recent Optimizations</h3>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {optimizationHistory.map((optimization, index) => (
                    <div key={index} className="text-xs text-gray-400 bg-gray-800/50 rounded p-2">
                      {optimization}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceOptimizer;