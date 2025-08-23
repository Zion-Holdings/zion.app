import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Clock, 
  Zap, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Info,
  BarChart3
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showPanel?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  showPanel = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: 0,
    windowLoad: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [optimizationTips, setOptimizationTips] = useState<string[]>([]);

  // Performance thresholds
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  };

  const getPerformanceScore = (metric: keyof PerformanceMetrics, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return 'good';
    
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: 'good' | 'needs-improvement' | 'poor') => {
    switch (score) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getScoreIcon = (score: 'good' | 'needs-improvement' | 'poor') => {
    switch (score) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <AlertTriangle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const collectMetrics = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const newMetrics: PerformanceMetrics = {
      fcp: 0,
      lcp: 0,
      fid: 0,
      cls: 0,
      ttfb: 0,
      domLoad: 0,
      windowLoad: 0
    };

    // First Contentful Paint
    const fcpEntry = paint.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      newMetrics.fcp = fcpEntry.startTime;
    }

    // Time to First Byte
    if (navigation) {
      newMetrics.ttfb = navigation.responseStart - navigation.requestStart;
      newMetrics.domLoad = navigation.domContentLoadedEventEnd - navigation.fetchStart;
      newMetrics.windowLoad = navigation.loadEventEnd - navigation.fetchStart;
    }

    // Largest Contentful Paint (if supported)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            newMetrics.lcp = lastEntry.startTime;
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer not supported');
      }
    }

    // First Input Delay (if supported)
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'first-input') {
              const fidEntry = entry as any;
              if (fidEntry.processingStart) {
                newMetrics.fid = fidEntry.processingStart - entry.startTime;
                setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - entry.startTime }));
              }
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer not supported');
      }
    }

    // Cumulative Layout Shift (if supported)
    if ('PerformanceObserver' in window) {
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry) => {
            const layoutShiftEntry = entry as any;
            if (layoutShiftEntry.value && !layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          });
          newMetrics.cls = clsValue;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer not supported');
      }
    }

    setMetrics(newMetrics);
    onMetricsUpdate?.(newMetrics);

    // Generate optimization tips
    generateOptimizationTips(newMetrics);
  }, [onMetricsUpdate]);

  const generateOptimizationTips = (currentMetrics: PerformanceMetrics) => {
    const tips: string[] = [];

    if (currentMetrics.fcp > thresholds.fcp.poor) {
      tips.push('Optimize First Contentful Paint: Minimize render-blocking resources');
    }

    if (currentMetrics.lcp > thresholds.lcp.poor) {
      tips.push('Improve Largest Contentful Paint: Optimize images and critical resources');
    }

    if (currentMetrics.fid > thresholds.fid.poor) {
      tips.push('Reduce First Input Delay: Minimize JavaScript execution time');
    }

    if (currentMetrics.cls > thresholds.cls.poor) {
      tips.push('Fix Cumulative Layout Shift: Set explicit dimensions for images and ads');
    }

    if (currentMetrics.ttfb > thresholds.ttfb.poor) {
      tips.push('Improve Time to First Byte: Optimize server response time');
    }

    setOptimizationTips(tips);
  };

  useEffect(() => {
    // Collect initial metrics after page load
    const handleLoad = () => {
      setTimeout(collectMetrics, 1000); // Wait for all metrics to be available
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [collectMetrics]);

  // Monitor for performance changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint' || 
            entry.entryType === 'first-input' || 
            entry.entryType === 'layout-shift') {
          collectMetrics();
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.warn('Performance observer not supported');
    }

    return () => observer.disconnect();
  }, [collectMetrics]);

  const formatTime = (ms: number) => {
    if (ms === 0) return 'N/A';
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  const formatScore = (score: number) => {
    if (score === 0) return 'N/A';
    return score.toFixed(2);
  };

  if (!showPanel) {
    return (
      <div className="fixed bottom-6 left-6 z-40">
        <motion.button
          className="w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
          onClick={() => setIsVisible(!isVisible)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Performance metrics"
        >
          <Activity className="w-6 h-6 mx-auto" />
        </motion.button>
      </div>
    );
  }

  return (
    <>
      {/* Performance Toggle Button */}
      <motion.button
        className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Performance metrics"
      >
        <Activity className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Performance Panel */}
      {isVisible && (
        <motion.div
          className="fixed bottom-24 left-6 z-30 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Performance
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close performance panel"
            >
              ×
            </button>
          </div>

          {/* Metrics */}
          <div className="p-4 space-y-4">
            {/* FCP */}
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">First Contentful Paint</span>
              </div>
              <div className={`flex items-center ${getScoreColor(getPerformanceScore('fcp', metrics.fcp))}`}>
                {getScoreIcon(getPerformanceScore('fcp', metrics.fcp))}
                <span className="ml-1 text-sm font-medium">{formatTime(metrics.fcp)}</span>
              </div>
            </div>

            {/* LCP */}
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm">Largest Contentful Paint</span>
              </div>
              <div className={`flex items-center ${getScoreColor(getPerformanceScore('lcp', metrics.lcp))}`}>
                {getScoreIcon(getPerformanceScore('lcp', metrics.lcp))}
                <span className="ml-1 text-sm font-medium">{formatTime(metrics.lcp)}</span>
              </div>
            </div>

            {/* FID */}
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm">First Input Delay</span>
              </div>
              <div className={`flex items-center ${getScoreColor(getPerformanceScore('fid', metrics.fid))}`}>
                {getScoreIcon(getPerformanceScore('fid', metrics.fid))}
                <span className="ml-1 text-sm font-medium">{formatTime(metrics.fid)}</span>
              </div>
            </div>

            {/* CLS */}
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white">
                <AlertTriangle className="w-4 h-4 mr-2" />
                <span className="text-sm">Cumulative Layout Shift</span>
              </div>
              <div className={`flex items-center ${getScoreColor(getPerformanceScore('cls', metrics.cls))}`}>
                {getScoreIcon(getPerformanceScore('cls', metrics.cls))}
                <span className="ml-1 text-sm font-medium">{formatScore(metrics.cls)}</span>
              </div>
            </div>

            {/* TTFB */}
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white">
                <Activity className="w-4 h-4 mr-2" />
                <span className="text-sm">Time to First Byte</span>
              </div>
              <div className={`flex items-center ${getScoreColor(getPerformanceScore('ttfb', metrics.ttfb))}`}>
                {getScoreIcon(getPerformanceScore('ttfb', metrics.ttfb))}
                <span className="ml-1 text-sm font-medium">{formatTime(metrics.ttfb)}</span>
              </div>
            </div>

            {/* Optimization Tips */}
            {optimizationTips.length > 0 && (
              <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                <h4 className="text-sm font-medium text-white mb-2">Optimization Tips</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  {optimizationTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Refresh Button */}
            <button
              onClick={collectMetrics}
              className="w-full px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              Refresh Metrics
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PerformanceMonitor;