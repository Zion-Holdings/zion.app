import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, AlertTriangle, 
  CheckCircle, X, Settings, RefreshCw, BarChart3,
  Cpu, HardDrive, Wifi, Battery, Thermometer
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
  memoryUsage?: number; // Memory usage in MB
  networkSpeed?: number; // Network speed in Mbps
  batteryLevel?: number; // Battery level percentage
}

interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  fid: { good: number; needsImprovement: number };
  cls: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [optimizationSuggestions, setOptimizationSuggestions] = useState<string[]>([]);
  const [showDetails, setShowDetails] = useState(false);

  const thresholds: PerformanceThresholds = {
    fcp: { good: 1800, needsImprovement: 3000 },
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 },
    ttfb: { good: 800, needsImprovement: 1800 }
  };

  const getMetricStatus = useCallback((metric: keyof PerformanceMetrics, value: number) => {
    if (!thresholds[metric as keyof PerformanceThresholds]) return 'unknown';
    
    const threshold = thresholds[metric as keyof PerformanceThresholds];
    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  }, []);

  const getMetricColor = useCallback((status: string) => {
    switch (status) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  }, []);

  const getMetricIcon = useCallback((status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <X className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  }, []);

  const measurePerformance = useCallback(async () => {
    setIsMonitoring(true);
    
    try {
      // Measure Core Web Vitals
      const fcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            resolve(fcpEntry.startTime);
          }
        }).observe({ entryTypes: ['paint'] });
      });

      const lcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            resolve(lcpEntry.startTime);
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      });

      const fid = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries.find(entry => {
            const firstInputEntry = entry as any;
            return firstInputEntry.processingStart && firstInputEntry.processingStart > 0;
          });
          if (fidEntry) {
            const firstInputEntry = fidEntry as any;
            resolve(firstInputEntry.processingStart - firstInputEntry.startTime);
          }
        }).observe({ entryTypes: ['first-input'] });
      });

      const cls = await new Promise<number>((resolve) => {
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          }
          resolve(clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
      });

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;

      // Measure DOM and Window load times
      const domLoad = navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart;
      const windowLoad = navigationEntry.loadEventEnd - navigationEntry.loadEventStart;

      // Get memory usage if available
      const memoryInfo = (performance as any).memory;
      const memoryUsage = memoryInfo ? Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024) : undefined;

      // Get network information if available
      const connection = (navigator as any).connection;
      const networkSpeed = connection ? connection.downlink : undefined;

      // Get battery level if available
      let batteryLevel: number | undefined;
      if ('getBattery' in navigator) {
        try {
          const battery = await (navigator as any).getBattery();
          batteryLevel = Math.round(battery.level * 100);
        } catch (error) {
          console.warn('Could not get battery level:', error);
        }
      }

      const newMetrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        domLoad,
        windowLoad,
        memoryUsage,
        networkSpeed,
        batteryLevel
      };

      setMetrics(newMetrics);
      generateOptimizationSuggestions(newMetrics);
    } catch (error) {
      console.error('Error measuring performance:', error);
    } finally {
      setIsMonitoring(false);
    }
  }, []);

  const generateOptimizationSuggestions = useCallback((currentMetrics: PerformanceMetrics) => {
    const suggestions: string[] = [];

    if (currentMetrics.fcp > thresholds.fcp.needsImprovement) {
      suggestions.push('Optimize critical rendering path and reduce server response time');
    }

    if (currentMetrics.lcp > thresholds.lcp.needsImprovement) {
      suggestions.push('Optimize largest contentful paint by improving image loading and server response');
    }

    if (currentMetrics.fid > thresholds.fid.needsImprovement) {
      suggestions.push('Reduce JavaScript execution time and break up long tasks');
    }

    if (currentMetrics.cls > thresholds.cls.needsImprovement) {
      suggestions.push('Fix layout shifts by setting explicit dimensions for images and ads');
    }

    if (currentMetrics.ttfb > thresholds.ttfb.needsImprovement) {
      suggestions.push('Improve server response time and optimize database queries');
    }

    if (currentMetrics.memoryUsage && currentMetrics.memoryUsage > 100) {
      suggestions.push('Optimize memory usage by reducing JavaScript bundle size and implementing code splitting');
    }

    if (currentMetrics.networkSpeed && currentMetrics.networkSpeed < 1) {
      suggestions.push('Implement progressive loading and optimize for slow network conditions');
    }

    if (suggestions.length === 0) {
      suggestions.push('Performance is excellent! Keep monitoring for any regressions.');
    }

    setOptimizationSuggestions(suggestions);
  }, [thresholds]);

  const getOverallScore = useMemo(() => {
    if (!metrics) return 0;

    let score = 0;
    let totalMetrics = 0;

    Object.keys(thresholds).forEach((metric) => {
      const value = metrics[metric as keyof PerformanceMetrics] as number;
      if (value !== undefined) {
        totalMetrics++;
        const status = getMetricStatus(metric as keyof PerformanceMetrics, value);
        switch (status) {
          case 'good': score += 100; break;
          case 'needs-improvement': score += 60; break;
          case 'poor': score += 20; break;
        }
      }
    });

    return totalMetrics > 0 ? Math.round(score / totalMetrics) : 0;
  }, [metrics, thresholds, getMetricStatus]);

  const getScoreColor = useCallback((score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  }, []);

  const getScoreLabel = useCallback((score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  }, []);

  useEffect(() => {
    // Show performance monitor after a delay
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-measure performance after page load
    if (document.readyState === 'complete') {
      setTimeout(measurePerformance, 1000);
    } else {
      window.addEventListener('load', () => setTimeout(measurePerformance, 1000));
      return () => window.removeEventListener('load', () => setTimeout(measurePerformance, 1000));
    }
  }, [measurePerformance]);

  return (
    <>
      {/* Performance Monitor Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
            aria-label="Open performance monitor"
            aria-expanded={isOpen}
            aria-controls="performance-panel"
          >
            <Activity className="w-7 h-7 mx-auto" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Performance Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            className="fixed top-0 left-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
            id="performance-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="performance-title"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <h2 id="performance-title" className="text-2xl font-bold flex items-center gap-3">
                  <BarChart3 className="w-6 h-6" />
                  Performance
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close performance panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Overall Score */}
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
                <div className="text-4xl font-bold mb-2">
                  <span className={getScoreColor(getOverallScore)}>{getOverallScore}</span>
                  <span className="text-2xl text-gray-500">/100</span>
                </div>
                <div className={`text-lg font-semibold ${getScoreColor(getOverallScore)}`}>
                  {getScoreLabel(getOverallScore)}
                </div>
                <button
                  onClick={measurePerformance}
                  disabled={isMonitoring}
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                  aria-label="Refresh performance metrics"
                >
                  {isMonitoring ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <RefreshCw className="w-4 h-4" />
                  )}
                  {isMonitoring ? 'Measuring...' : 'Refresh'}
                </button>
              </div>

              {/* Core Web Vitals */}
              {metrics && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Core Web Vitals
                  </h3>
                  <div className="space-y-3">
                    {[
                      { key: 'fcp', label: 'First Contentful Paint', value: metrics.fcp, unit: 'ms' },
                      { key: 'lcp', label: 'Largest Contentful Paint', value: metrics.lcp, unit: 'ms' },
                      { key: 'fid', label: 'First Input Delay', value: metrics.fid, unit: 'ms' },
                      { key: 'cls', label: 'Cumulative Layout Shift', value: metrics.cls, unit: '' },
                      { key: 'ttfb', label: 'Time to First Byte', value: metrics.ttfb, unit: 'ms' }
                    ].map(({ key, label, value, unit }) => {
                      const status = getMetricStatus(key as keyof PerformanceMetrics, value);
                      return (
                        <div key={key} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className={getMetricColor(status)}>
                              {getMetricIcon(status)}
                            </span>
                            <div>
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {label}
                              </div>
                              <div className="text-xs text-gray-500">
                                {value.toFixed(2)}{unit}
                              </div>
                            </div>
                          </div>
                          <div className={`text-sm font-semibold ${getMetricColor(status)}`}>
                            {status.replace('-', ' ').toUpperCase()}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Additional Metrics */}
              {metrics && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Additional Metrics
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: Clock, label: 'DOM Load', value: metrics.domLoad, unit: 'ms' },
                      { icon: Clock, label: 'Window Load', value: metrics.windowLoad, unit: 'ms' },
                      ...(metrics.memoryUsage ? [{ icon: Cpu, label: 'Memory Usage', value: metrics.memoryUsage, unit: 'MB' }] : []),
                      ...(metrics.networkSpeed ? [{ icon: Wifi, label: 'Network Speed', value: metrics.networkSpeed, unit: 'Mbps' }] : []),
                      ...(metrics.batteryLevel ? [{ icon: Battery, label: 'Battery Level', value: metrics.batteryLevel, unit: '%' }] : [])
                    ].map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center gap-3">
                          <metric.icon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {metric.label}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {metric.value.toFixed(2)}{metric.unit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Optimization Suggestions */}
              {optimizationSuggestions.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Optimization Suggestions
                  </h3>
                  <div className="space-y-2">
                    {optimizationSuggestions.map((suggestion, index) => (
                      <div key={index} className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          {suggestion}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Show Details Toggle */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                  aria-label="Toggle detailed performance information"
                >
                  {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
              </div>

              {/* Detailed Information */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Performance Thresholds
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div>FCP: Good ≤ {thresholds.fcp.good}ms, Needs Improvement ≤ {thresholds.fcp.needsImprovement}ms</div>
                        <div>LCP: Good ≤ {thresholds.lcp.good}ms, Needs Improvement ≤ {thresholds.lcp.needsImprovement}ms</div>
                        <div>FID: Good ≤ {thresholds.fid.good}ms, Needs Improvement ≤ {thresholds.fid.needsImprovement}ms</div>
                        <div>CLS: Good ≤ {thresholds.cls.good}, Needs Improvement ≤ {thresholds.cls.needsImprovement}</div>
                        <div>TTFB: Good ≤ {thresholds.ttfb.good}ms, Needs Improvement ≤ {thresholds.ttfb.needsImprovement}ms</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedPerformanceMonitor;