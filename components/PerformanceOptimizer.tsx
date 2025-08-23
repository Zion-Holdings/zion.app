import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, TrendingUp, Clock, Gauge, Activity, AlertTriangle, 
  CheckCircle, X, Settings, RefreshCw, BarChart3
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = false,
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

  const measurePerformance = useCallback(async () => {
    if (typeof window === 'undefined') return;

    try {
      // Use Performance Observer for Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        setMetrics(prev => prev ? { ...prev, fcp: fcpEntry.startTime } : null);
      }

      // Measure Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => prev ? { ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart } : null);
      }

      // Measure Cumulative Layout Shift
      let cls = 0;
      const layoutShiftEntries = performance.getEntriesByType('layout-shift');
      layoutShiftEntries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      });

      setMetrics(prev => prev ? { ...prev, cls } : null);

    } catch (error) {
      console.error('Performance measurement error:', error);
    }
  }, []);

  const generateOptimizations = useCallback((currentMetrics: PerformanceMetrics) => {
    const suggestions: string[] = [];

    if (currentMetrics.fcp > threshold.fcp) {
      suggestions.push('Optimize critical rendering path');
      suggestions.push('Minimize render-blocking resources');
    }

    if (currentMetrics.lcp > threshold.lcp) {
      suggestions.push('Optimize largest contentful paint');
      suggestions.push('Implement lazy loading for images');
    }

    if (currentMetrics.fid > threshold.fid) {
      suggestions.push('Reduce JavaScript execution time');
      suggestions.push('Implement code splitting');
    }

    if (currentMetrics.cls > threshold.cls) {
      suggestions.push('Set explicit dimensions for images');
      suggestions.push('Avoid inserting content above existing content');
    }

    if (currentMetrics.ttfb > threshold.ttfb) {
      suggestions.push('Optimize server response time');
      suggestions.push('Implement CDN caching');
    }

    return suggestions;
  }, [threshold]);

  const applyOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newOptimizations = metrics ? generateOptimizations(metrics) : [];
    setOptimizations(newOptimizations);
    
    setIsOptimizing(false);
  }, [metrics, generateOptimizations]);

  useEffect(() => {
    if (showMetrics) {
      setIsVisible(true);
      measurePerformance();
    }
  }, [showMetrics, measurePerformance]);

  useEffect(() => {
    if (autoOptimize && metrics) {
      const suggestions = generateOptimizations(metrics);
      setOptimizations(suggestions);
    }
  }, [autoOptimize, metrics, generateOptimizations]);

  if (!showMetrics || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed bottom-4 right-4 z-50 max-w-md"
      >
        <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Gauge className="w-5 h-5 text-cyan-400" />
              <h3 className="text-white font-semibold">Performance Monitor</h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {metrics && (
            <div className="space-y-3 mb-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">FCP:</span>
                  <span className={`font-mono ${metrics.fcp > threshold.fcp ? 'text-red-400' : 'text-green-400'}`}>
                    {Math.round(metrics.fcp)}ms
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">LCP:</span>
                  <span className={`font-mono ${metrics.lcp > threshold.lcp ? 'text-red-400' : 'text-green-400'}`}>
                    {Math.round(metrics.lcp)}ms
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300">FID:</span>
                  <span className={`font-mono ${metrics.fid > threshold.fid ? 'text-red-400' : 'text-green-400'}`}>
                    {Math.round(metrics.fid)}ms
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">CLS:</span>
                  <span className={`font-mono ${metrics.cls > threshold.cls ? 'text-red-400' : 'text-green-400'}`}>
                    {metrics.cls.toFixed(3)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {optimizations.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Optimization Suggestions:</h4>
              <div className="space-y-1">
                {optimizations.map((suggestion, index) => (
                  <div key={index} className="flex items-start space-x-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{suggestion}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex space-x-2">
            <button
              onClick={measurePerformance}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-2 rounded transition-colors"
            >
              <RefreshCw className="w-3 h-3 inline mr-1" />
              Refresh
            </button>
            <button
              onClick={applyOptimizations}
              disabled={isOptimizing}
              className="flex-1 bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 text-white text-xs px-3 py-2 rounded transition-colors"
            >
              {isOptimizing ? (
                <>
                  <RefreshCw className="w-3 h-3 inline mr-1 animate-spin" />
                  Optimizing...
                </>
              ) : (
                <>
                  <Zap className="w-3 h-3 inline mr-1" />
                  Optimize
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceOptimizer;