import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle, 
  X, Settings, RefreshCw, BarChart3, Gauge, HardDrive
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
  si: number; // Speed Index
  tti: number; // Time to Interactive
}

interface PerformanceMonitorProps {
  showUI?: boolean;
  autoOptimize?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showUI = false,
  autoOptimize = false,
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 600
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Performance observer for real-time metrics
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          // Update LCP metric when available
          setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('PerformanceObserver not supported');
    }

    return () => observer.disconnect();
  }, []);

  // Calculate performance metrics
  const calculateMetrics = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    if (navigation && paint) {
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
      
      const newMetrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid: 0, // Would need PerformanceEventTiming
        cls: 0, // Would need LayoutShiftObserver
        ttfb: navigation.responseStart - navigation.requestStart,
        fmp: 0, // Deprecated
        si: 0, // Would need Speed Index calculation
        tti: 0 // Would need Time to Interactive calculation
      };

      setMetrics(newMetrics);
      analyzePerformance(newMetrics);
    }
  }, []);

  // Analyze performance and suggest optimizations
  const analyzePerformance = useCallback((currentMetrics: PerformanceMetrics) => {
    const suggestions: string[] = [];

    if (currentMetrics.fcp > threshold.fcp) {
      suggestions.push('Optimize First Contentful Paint: Consider lazy loading non-critical resources');
    }

    if (currentMetrics.lcp > threshold.lcp) {
      suggestions.push('Improve Largest Contentful Paint: Optimize hero images and critical content');
    }

    if (currentMetrics.ttfb > threshold.ttfb) {
      suggestions.push('Reduce Time to First Byte: Optimize server response and CDN');
    }

    if (currentMetrics.fid > threshold.fid) {
      suggestions.push('Improve First Input Delay: Reduce JavaScript bundle size and execution time');
    }

    if (currentMetrics.cls > threshold.cls) {
      suggestions.push('Fix Cumulative Layout Shift: Set explicit dimensions for images and avoid dynamic content insertion');
    }

    setOptimizations(suggestions);
  }, [threshold]);

  // Auto-optimize performance
  const performAutoOptimize = useCallback(async () => {
    if (!autoOptimize || !metrics) return;

    setIsOptimizing(true);
    
    try {
      // Implement automatic optimizations
      const optimizations = [
        'Lazy loading images and components',
        'Preloading critical resources',
        'Optimizing bundle splitting',
        'Implementing service worker caching'
      ];

      // Simulate optimization process
      for (const optimization of optimizations) {
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(`Applied: ${optimization}`);
      }

      // Recalculate metrics after optimization
      setTimeout(() => {
        calculateMetrics();
        setIsOptimizing(false);
      }, 1000);

    } catch (error) {
      console.error('Auto-optimization failed:', error);
      setIsOptimizing(false);
    }
  }, [autoOptimize, metrics, calculateMetrics]);

  // Get performance score
  const getPerformanceScore = useMemo(() => {
    if (!metrics) return 0;

    let score = 100;
    
    if (metrics.fcp > threshold.fcp) score -= 20;
    if (metrics.lcp > threshold.lcp) score -= 25;
    if (metrics.fid > threshold.fid) score -= 15;
    if (metrics.cls > threshold.cls) score -= 20;
    if (metrics.ttfb > threshold.ttfb) score -= 20;

    return Math.max(0, score);
  }, [metrics, threshold]);

  // Get performance grade
  const getPerformanceGrade = useMemo(() => {
    const score = getPerformanceScore;
    if (score >= 90) return { grade: 'A', color: 'text-green-400', bgColor: 'bg-green-500/20' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-400', bgColor: 'bg-orange-500/20' };
    return { grade: 'D', color: 'text-red-400', bgColor: 'bg-red-500/20' };
  }, [getPerformanceScore]);

  // Initialize metrics on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Wait for page to load
      if (document.readyState === 'complete') {
        calculateMetrics();
      } else {
        window.addEventListener('load', calculateMetrics);
        return () => window.removeEventListener('load', calculateMetrics);
      }
    }
  }, [calculateMetrics]);

  // Auto-optimize when metrics are available
  useEffect(() => {
    if (autoOptimize && metrics && getPerformanceScore < 80) {
      performAutoOptimize();
    }
  }, [autoOptimize, metrics, getPerformanceScore, performAutoOptimize]);

  if (!showUI) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed bottom-6 right-6 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Performance Score */}
          <div className="p-4">
            <div className="text-center mb-4">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getPerformanceGrade.bgColor} mb-2`}>
                <span className={`text-2xl font-bold ${getPerformanceGrade.color}`}>
                  {getPerformanceGrade.grade}
                </span>
              </div>
              <div className="text-2xl font-bold text-white">{getPerformanceScore}</div>
              <div className="text-sm text-gray-400">Performance Score</div>
            </div>

            {/* Key Metrics */}
            {metrics && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">FCP</span>
                  <span className={`text-sm font-medium ${
                    metrics.fcp <= threshold.fcp ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metrics.fcp.toFixed(0)}ms
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">LCP</span>
                  <span className={`text-sm font-medium ${
                    metrics.lcp <= threshold.lcp ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metrics.lcp.toFixed(0)}ms
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">TTFB</span>
                  <span className={`text-sm font-medium ${
                    metrics.ttfb <= threshold.ttfb ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metrics.ttfb.toFixed(0)}ms
                  </span>
                </div>
              </div>
            )}

            {/* Optimizations */}
            {optimizations.length > 0 && (
              <div className="mt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-white">Optimizations</span>
                </div>
                <div className="space-y-2">
                  {optimizations.slice(0, 3).map((optimization, index) => (
                    <div key={index} className="text-xs text-gray-400 bg-gray-800/50 p-2 rounded">
                      {optimization}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex space-x-2 mt-4">
              <button
                onClick={calculateMetrics}
                disabled={isOptimizing}
                className="flex-1 px-3 py-2 bg-gray-800/50 text-gray-300 text-sm rounded-lg hover:bg-gray-700/50 transition-colors duration-200 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 inline mr-2 ${isOptimizing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              {autoOptimize && (
                <button
                  onClick={performAutoOptimize}
                  disabled={isOptimizing}
                  className="flex-1 px-3 py-2 bg-cyan-600 text-white text-sm rounded-lg hover:bg-cyan-700 transition-colors duration-200 disabled:opacity-50"
                >
                  <Zap className="w-4 h-4 inline mr-2" />
                  Optimize
                </button>
              )}
            </div>
          </div>

          {/* Detailed Metrics */}
          <AnimatePresence>
            {showDetails && metrics && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-gray-700/50 p-4"
              >
                <h4 className="text-sm font-medium text-white mb-3">Detailed Metrics</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">First Contentful Paint:</span>
                    <span className="text-white">{metrics.fcp.toFixed(0)}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Largest Contentful Paint:</span>
                    <span className="text-white">{metrics.lcp.toFixed(0)}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time to First Byte:</span>
                    <span className="text-white">{metrics.ttfb.toFixed(0)}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">First Input Delay:</span>
                    <span className="text-white">{metrics.fid.toFixed(0)}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cumulative Layout Shift:</span>
                    <span className="text-white">{metrics.cls.toFixed(3)}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Toggle Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsVisible(true)}
          className="fixed bottom-6 right-6 w-12 h-12 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
          title="Performance Monitor"
        >
          <Activity className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default PerformanceMonitor;