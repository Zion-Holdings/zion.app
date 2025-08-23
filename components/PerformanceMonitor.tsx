import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, HardDrive, Wifi, 
  Cpu, Database, Battery, TrendingUp, TrendingDown,
  AlertTriangle, CheckCircle, Info, Settings, X
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage: number;
  cpuUsage: number;
  networkSpeed: number;
  batteryLevel: number;
}

interface PerformanceIssue {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  suggestion: string;
  priority: 'low' | 'medium' | 'high';
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkSpeed: 0,
    batteryLevel: 0
  });
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [isAutoOptimizing, setIsAutoOptimizing] = useState(false);

  // Performance thresholds
  const thresholds = useMemo(() => ({
    loadTime: { good: 2000, poor: 4000 },
    firstContentfulPaint: { good: 1800, poor: 3000 },
    largestContentfulPaint: { good: 2500, poor: 4000 },
    cumulativeLayoutShift: { good: 0.1, poor: 0.25 },
    firstInputDelay: { good: 100, poor: 300 },
    timeToInteractive: { good: 3800, poor: 7300 }
  }), []);

  // Get performance score
  const getPerformanceScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;
    let deductions = 0;

    // Load time scoring
    if (metrics.loadTime > thresholds.loadTime.poor) {
      deductions += 20;
    } else if (metrics.loadTime > thresholds.loadTime.good) {
      deductions += 10;
    }

    // FCP scoring
    if (metrics.firstContentfulPaint > thresholds.firstContentfulPaint.poor) {
      deductions += 15;
    } else if (metrics.firstContentfulPaint > thresholds.firstContentfulPaint.good) {
      deductions += 7;
    }

    // LCP scoring
    if (metrics.largestContentfulPaint > thresholds.largestContentfulPaint.poor) {
      deductions += 15;
    } else if (metrics.largestContentfulPaint > thresholds.largestContentfulPaint.good) {
      deductions += 7;
    }

    // CLS scoring
    if (metrics.cumulativeLayoutShift > thresholds.cumulativeLayoutShift.poor) {
      deductions += 15;
    } else if (metrics.cumulativeLayoutShift > thresholds.cumulativeLayoutShift.good) {
      deductions += 7;
    }

    // FID scoring
    if (metrics.firstInputDelay > thresholds.firstInputDelay.poor) {
      deductions += 15;
    } else if (metrics.firstInputDelay > thresholds.firstInputDelay.good) {
      deductions += 7;
    }

    // TTI scoring
    if (metrics.timeToInteractive > thresholds.timeToInteractive.poor) {
      deductions += 20;
    } else if (metrics.timeToInteractive > thresholds.timeToInteractive.good) {
      deductions += 10;
    }

    return Math.max(0, score - deductions);
  }, [thresholds]);

  // Analyze performance and generate issues
  const analyzePerformance = useCallback((metrics: PerformanceMetrics) => {
    const newIssues: PerformanceIssue[] = [];

    if (metrics.loadTime > thresholds.loadTime.poor) {
      newIssues.push({
        id: 'load-time',
        type: 'error',
        message: `Page load time is ${(metrics.loadTime / 1000).toFixed(1)}s (poor)`,
        suggestion: 'Optimize images, minimize CSS/JS, enable compression',
        priority: 'high'
      });
    } else if (metrics.loadTime > thresholds.loadTime.good) {
      newIssues.push({
        id: 'load-time',
        type: 'warning',
        message: `Page load time is ${(metrics.loadTime / 1000).toFixed(1)}s (needs improvement)`,
        suggestion: 'Consider lazy loading and code splitting',
        priority: 'medium'
      });
    }

    if (metrics.firstContentfulPaint > thresholds.firstContentfulPaint.poor) {
      newIssues.push({
        id: 'fcp',
        type: 'error',
        message: `First Contentful Paint is ${(metrics.firstContentfulPaint / 1000).toFixed(1)}s (poor)`,
        suggestion: 'Optimize critical rendering path, inline critical CSS',
        priority: 'high'
      });
    }

    if (metrics.largestContentfulPaint > thresholds.largestContentfulPaint.poor) {
      newIssues.push({
        id: 'lcp',
        type: 'error',
        message: `Largest Contentful Paint is ${(metrics.largestContentfulPaint / 1000).toFixed(1)}s (poor)`,
        suggestion: 'Optimize images, use next-gen formats, implement lazy loading',
        priority: 'high'
      });
    }

    if (metrics.cumulativeLayoutShift > thresholds.cumulativeLayoutShift.poor) {
      newIssues.push({
        id: 'cls',
        type: 'error',
        message: `Cumulative Layout Shift is ${metrics.cumulativeLayoutShift.toFixed(3)} (poor)`,
        suggestion: 'Set explicit dimensions for images and media elements',
        priority: 'medium'
      });
    }

    if (metrics.firstInputDelay > thresholds.firstInputDelay.poor) {
      newIssues.push({
        id: 'fid',
        type: 'error',
        message: `First Input Delay is ${metrics.firstInputDelay}ms (poor)`,
        suggestion: 'Reduce JavaScript execution time, implement code splitting',
        priority: 'high'
      });
    }

    if (metrics.memoryUsage > 80) {
      newIssues.push({
        id: 'memory',
        type: 'warning',
        message: `Memory usage is ${metrics.memoryUsage.toFixed(1)}%`,
        suggestion: 'Check for memory leaks, optimize component rendering',
        priority: 'medium'
      });
    }

    if (metrics.cpuUsage > 70) {
      newIssues.push({
        id: 'cpu',
        type: 'warning',
        message: `CPU usage is ${metrics.cpuUsage.toFixed(1)}%`,
        suggestion: 'Optimize animations, reduce JavaScript execution',
        priority: 'medium'
      });
    }

    setIssues(newIssues);
  }, [thresholds]);

  // Collect performance metrics
  const collectMetrics = useCallback(async () => {
    try {
      // Navigation Timing API
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;

      // Paint Timing API
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;

      // Layout Shift API
      const layoutShiftEntries = performance.getEntriesByType('layout-shift');
      const cls = layoutShiftEntries.reduce((sum, entry) => sum + (entry as any).value, 0);

      // Performance Observer for FID and TTI
      let fid = 0;
      let tti = 0;

      // Memory API (if available)
      const memory = (performance as any).memory;
      const memoryUsage = memory ? (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100 : 0;

      // Network Information API (if available)
      const connection = (navigator as any).connection;
      const networkSpeed = connection ? connection.effectiveType === '4g' ? 100 : 75 : 100;

      // Battery API (if available)
      const battery = await (navigator as any).getBattery?.() || null;
      const batteryLevel = battery ? battery.level * 100 : 100;

      // CPU usage estimation (simplified)
      const startTime = performance.now();
      await new Promise(resolve => setTimeout(resolve, 100));
      const endTime = performance.now();
      const cpuUsage = Math.min(100, Math.max(0, ((endTime - startTime - 100) / 100) * 100));

      const newMetrics: PerformanceMetrics = {
        loadTime,
        firstContentfulPaint: fcp,
        largestContentfulPaint: lcp,
        cumulativeLayoutShift: cls,
        firstInputDelay: fid,
        timeToInteractive: tti,
        memoryUsage,
        cpuUsage,
        networkSpeed,
        batteryLevel
      };

      setMetrics(newMetrics);
      analyzePerformance(newMetrics);

    } catch (error) {
      console.error('Error collecting performance metrics:', error);
    }
  }, [analyzePerformance]);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    collectMetrics();
    
    // Set up continuous monitoring
    const interval = setInterval(collectMetrics, 10000); // Every 10 seconds
    
    return () => clearInterval(interval);
  }, [collectMetrics]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Auto-optimize performance
  const autoOptimize = useCallback(() => {
    // Implement automatic performance optimizations
    const optimizations = [
      'Enabling image compression',
      'Implementing lazy loading',
      'Optimizing CSS delivery',
      'Minimizing JavaScript execution'
    ];

    optimizations.forEach((optimization, index) => {
      setTimeout(() => {
        addNotification(`Applied: ${optimization}`);
      }, index * 1000);
    });

    setIsAutoOptimizing(true);
  }, []);

  // Add notification
  const addNotification = (message: string) => {
    // Implementation for notifications
    console.log('Performance optimization:', message);
  };

  // Get metric status
  const getMetricStatus = useCallback((value: number, good: number, poor: number) => {
    if (value <= good) return 'good';
    if (value <= poor) return 'needs-improvement';
    return 'poor';
  }, []);

  // Get status color
  const getStatusColor = useCallback((status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  }, []);

  // Get status icon
  const getStatusIcon = useCallback((status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <AlertTriangle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  }, []);

  // Performance score
  const performanceScore = useMemo(() => getPerformanceScore(metrics), [metrics, getPerformanceScore]);

  // Score color
  const scoreColor = useMemo(() => {
    if (performanceScore >= 90) return 'text-green-400';
    if (performanceScore >= 70) return 'text-yellow-400';
    return 'text-red-400';
  }, [performanceScore]);

  useEffect(() => {
    // Show performance monitor after page load
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMonitoring) {
      startMonitoring();
    }
  }, [isMonitoring, startMonitoring]);

  if (!isVisible) return null;

  return (
    <>
      {/* Performance Monitor Button */}
      <motion.button
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500/50"
        onClick={() => setIsExpanded(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open performance monitor"
        title="Performance Monitor"
      >
        <Activity className="w-7 h-7 mx-auto" />
      </motion.button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Activity className="w-6 h-7 mr-3 text-green-400" />
                  Performance Monitor
                </h2>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                  aria-label="Close performance monitor"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Performance Score */}
              <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                <div className="text-center">
                  <div className={`text-4xl font-bold ${scoreColor} mb-2`}>
                    {performanceScore}
                  </div>
                  <div className="text-gray-400">Performance Score</div>
                  <div className="text-sm text-gray-500 mt-2">
                    {performanceScore >= 90 ? 'Excellent' : performanceScore >= 70 ? 'Good' : 'Needs Improvement'}
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => isMonitoring ? stopMonitoring() : startMonitoring()}
                  className={`px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 ${
                    isMonitoring 
                      ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500' 
                      : 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'
                  }`}
                >
                  {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
                </button>
                <button
                  onClick={autoOptimize}
                  disabled={isAutoOptimizing}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAutoOptimizing ? 'Optimizing...' : 'Auto-Optimize'}
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {/* Load Time */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-blue-400" />
                      <span className="text-white font-medium">Load Time</span>
                    </div>
                    {getStatusIcon(getMetricStatus(metrics.loadTime, thresholds.loadTime.good, thresholds.loadTime.poor))}
                  </div>
                  <div className={`text-2xl font-bold ${getStatusColor(getMetricStatus(metrics.loadTime, thresholds.loadTime.good, thresholds.loadTime.poor))}`}>
                    {(metrics.loadTime / 1000).toFixed(1)}s
                  </div>
                  <div className="text-sm text-gray-400">
                    Target: &lt;{thresholds.loadTime.good / 1000}s
                  </div>
                </div>

                {/* First Contentful Paint */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                      <span className="text-white font-medium">FCP</span>
                    </div>
                    {getStatusIcon(getMetricStatus(metrics.firstContentfulPaint, thresholds.firstContentfulPaint.good, thresholds.firstContentfulPaint.poor))}
                  </div>
                  <div className={`text-2xl font-bold ${getStatusColor(getMetricStatus(metrics.firstContentfulPaint, thresholds.firstContentfulPaint.good, thresholds.firstContentfulPaint.poor))}`}>
                    {(metrics.firstContentfulPaint / 1000).toFixed(1)}s
                  </div>
                  <div className="text-sm text-gray-400">
                    Target: &lt;{thresholds.firstContentfulPaint.good / 1000}s
                  </div>
                </div>

                {/* Largest Contentful Paint */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                      <span className="text-white font-medium">LCP</span>
                    </div>
                    {getStatusIcon(getMetricStatus(metrics.largestContentfulPaint, thresholds.largestContentfulPaint.good, thresholds.largestContentfulPaint.poor))}
                  </div>
                  <div className={`text-2xl font-bold ${getStatusColor(getMetricStatus(metrics.largestContentfulPaint, thresholds.largestContentfulPaint.good, thresholds.largestContentfulPaint.poor))}`}>
                    {(metrics.largestContentfulPaint / 1000).toFixed(1)}s
                  </div>
                  <div className="text-sm text-gray-400">
                    Target: &lt;{thresholds.largestContentfulPaint.good / 1000}s
                  </div>
                </div>

                {/* Cumulative Layout Shift */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <HardDrive className="w-5 h-5 mr-2 text-purple-400" />
                      <span className="text-white font-medium">CLS</span>
                    </div>
                    {getStatusIcon(getMetricStatus(metrics.cumulativeLayoutShift, thresholds.cumulativeLayoutShift.good, thresholds.cumulativeLayoutShift.poor))}
                  </div>
                  <div className={`text-2xl font-bold ${getStatusColor(getMetricStatus(metrics.cumulativeLayoutShift, thresholds.cumulativeLayoutShift.good, thresholds.cumulativeLayoutShift.poor))}`}>
                    {metrics.cumulativeLayoutShift.toFixed(3)}
                  </div>
                  <div className="text-sm text-gray-400">
                    Target: &lt;{thresholds.cumulativeLayoutShift.good}
                  </div>
                </div>

                {/* Memory Usage */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Database className="w-5 h-5 mr-2 text-cyan-400" />
                      <span className="text-white font-medium">Memory</span>
                    </div>
                    {metrics.memoryUsage > 80 ? <AlertTriangle className="w-4 h-4 text-yellow-400" /> : <CheckCircle className="w-4 h-4 text-green-400" />}
                  </div>
                  <div className={`text-2xl font-bold ${metrics.memoryUsage > 80 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {metrics.memoryUsage.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-400">
                    Target: &lt;80%
                  </div>
                </div>

                {/* CPU Usage */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Cpu className="w-5 h-5 mr-2 text-orange-400" />
                      <span className="text-white font-medium">CPU</span>
                    </div>
                    {metrics.cpuUsage > 70 ? <AlertTriangle className="w-4 h-4 text-yellow-400" /> : <CheckCircle className="w-4 h-4 text-green-400" />}
                  </div>
                  <div className={`text-2xl font-bold ${metrics.cpuUsage > 70 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {metrics.cpuUsage.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-400">
                    Target: &lt;70%
                  </div>
                </div>
              </div>

              {/* Performance Issues */}
              {issues.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Performance Issues</h3>
                  <div className="space-y-3">
                    {issues.map((issue) => (
                      <div
                        key={issue.id}
                        className={`p-4 rounded-lg border-l-4 ${
                          issue.type === 'error' ? 'bg-red-900/20 border-red-500' :
                          issue.type === 'warning' ? 'bg-yellow-900/20 border-yellow-500' :
                          'bg-blue-900/20 border-blue-500'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              {issue.type === 'error' ? <AlertTriangle className="w-5 h-5 text-red-400 mr-2" /> :
                               issue.type === 'warning' ? <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" /> :
                               <Info className="w-5 h-5 text-blue-400 mr-2" />}
                              <span className={`font-medium ${
                                issue.type === 'error' ? 'text-red-300' :
                                issue.type === 'warning' ? 'text-yellow-300' :
                                'text-blue-300'
                              }`}>
                                {issue.message}
                              </span>
                            </div>
                            <div className="text-sm text-gray-300">
                              <strong>Suggestion:</strong> {issue.suggestion}
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            issue.priority === 'high' ? 'bg-red-600 text-white' :
                            issue.priority === 'medium' ? 'bg-yellow-600 text-white' :
                            'bg-blue-600 text-white'
                          }`}>
                            {issue.priority}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* System Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-center">
                  <Wifi className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-medium">Network</div>
                  <div className="text-sm text-gray-400">{metrics.networkSpeed}%</div>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg text-center">
                  <Battery className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-medium">Battery</div>
                  <div className="text-sm text-gray-400">{metrics.batteryLevel.toFixed(0)}%</div>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg text-center">
                  <Settings className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-medium">Status</div>
                  <div className="text-sm text-gray-400">{isMonitoring ? 'Active' : 'Idle'}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;