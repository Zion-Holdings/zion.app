import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, Database, Wifi, 
  TrendingUp, TrendingDown, AlertTriangle, 
  CheckCircle, X, Settings, BarChart3
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
  memoryUsage?: number; // Memory usage (if available)
  networkSpeed?: number; // Network speed (if available)
}

interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  fid: { good: number; needsImprovement: number };
  cls: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}

const PERFORMANCE_THRESHOLDS: PerformanceThresholds = {
  fcp: { good: 1800, needsImprovement: 3000 },
  lcp: { good: 2500, needsImprovement: 4000 },
  fid: { good: 100, needsImprovement: 300 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  ttfb: { good: 800, needsImprovement: 1800 }
};

const PerformanceMonitor: React.FC<{ 
  showMetrics?: boolean; 
  autoOptimize?: boolean;
  enableRealTime?: boolean;
}> = ({ 
  showMetrics = false, 
  autoOptimize = false,
  enableRealTime = true 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [alerts, setAlerts] = useState<Array<{ type: 'warning' | 'error' | 'info'; message: string; timestamp: Date }>>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [monitoringInterval, setMonitoringInterval] = useState<NodeJS.Timeout | null>(null);
  
  const observerRef = useRef<PerformanceObserver | null>(null);
  const metricsRef = useRef<PerformanceMetrics | null>(null);

  // Get performance score based on metrics
  const getPerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring
    if (metrics.fcp > PERFORMANCE_THRESHOLDS.fcp.needsImprovement) score -= 20;
    else if (metrics.fcp > PERFORMANCE_THRESHOLDS.fcp.good) score -= 10;
    
    // LCP scoring
    if (metrics.lcp > PERFORMANCE_THRESHOLDS.lcp.needsImprovement) score -= 20;
    else if (metrics.lcp > PERFORMANCE_THRESHOLDS.lcp.good) score -= 10;
    
    // FID scoring
    if (metrics.fid > PERFORMANCE_THRESHOLDS.fid.needsImprovement) score -= 20;
    else if (metrics.fid > PERFORMANCE_THRESHOLDS.fid.good) score -= 10;
    
    // CLS scoring
    if (metrics.cls > PERFORMANCE_THRESHOLDS.cls.needsImprovement) score -= 20;
    else if (metrics.cls > PERFORMANCE_THRESHOLDS.cls.good) score -= 10;
    
    // TTFB scoring
    if (metrics.ttfb > PERFORMANCE_THRESHOLDS.ttfb.needsImprovement) score -= 10;
    else if (metrics.ttfb > PERFORMANCE_THRESHOLDS.ttfb.good) score -= 5;
    
    return Math.max(0, score);
  }, []);

  // Get performance grade
  const getPerformanceGrade = useCallback((score: number): { grade: string; color: string; icon: React.ReactNode } => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400', icon: <CheckCircle className="w-5 h-5" /> };
    if (score >= 80) return { grade: 'B', color: 'text-blue-400', icon: <TrendingUp className="w-5 h-5" /> };
    if (score >= 70) return { grade: 'C', color: 'text-yellow-400', icon: <AlertTriangle className="w-5 h-5" /> };
    if (score >= 60) return { grade: 'D', color: 'text-orange-400', icon: <TrendingDown className="w-5 h-5" /> };
    return { grade: 'F', color: 'text-red-400', icon: <X className="w-5 h-5" /> };
  }, []);

  // Get metric status
  const getMetricStatus = useCallback((metric: keyof PerformanceMetrics, value: number): { status: 'good' | 'needsImprovement' | 'poor'; color: string } => {
    const thresholds = PERFORMANCE_THRESHOLDS[metric];
    if (value <= thresholds.good) return { status: 'good', color: 'text-green-400' };
    if (value <= thresholds.needsImprovement) return { status: 'needsImprovement', color: 'text-yellow-400' };
    return { status: 'poor', color: 'text-red-400' };
  }, []);

  // Format metric value
  const formatMetric = useCallback((metric: keyof PerformanceMetrics, value: number): string => {
    if (metric === 'cls') return value.toFixed(3);
    if (metric === 'fid') return `${value.toFixed(0)}ms`;
    if (metric === 'ttfb') return `${value.toFixed(0)}ms`;
    return `${value.toFixed(0)}ms`;
  }, []);

  // Collect performance metrics
  const collectMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      // Wait for page to be fully loaded
      if (document.readyState === 'complete') {
        resolve(collectCurrentMetrics());
      } else {
        window.addEventListener('load', () => resolve(collectCurrentMetrics()));
      }
    });
  }, []);

  // Collect current performance metrics
  const collectCurrentMetrics = useCallback((): PerformanceMetrics => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
    
    // Get FID from Performance Observer if available
    const fid = metricsRef.current?.fid || 0;
    
    // Get CLS from Performance Observer if available
    const cls = metricsRef.current?.cls || 0;
    
    const ttfb = navigation.responseStart - navigation.requestStart;
    const domLoad = navigation.domContentLoadedEventEnd - navigation.fetchStart;
    const windowLoad = navigation.loadEventEnd - navigation.fetchStart;
    
    // Get memory usage if available
    const memoryUsage = (performance as any).memory?.usedJSHeapSize / 1024 / 1024;
    
    return {
      fcp,
      lcp,
      fid,
      cls,
      ttfb,
      domLoad,
      windowLoad,
      memoryUsage,
      networkSpeed: (navigator as any).connection?.effectiveType ? 
        ((navigator as any).connection.effectiveType === '4g' ? 100 : 
         (navigator as any).connection.effectiveType === '3g' ? 50 : 25) : undefined
    };
  }, []);

  // Setup Performance Observer for real-time metrics
  const setupPerformanceObserver = useCallback(() => {
    if (!enableRealTime || !('PerformanceObserver' in window)) return;

    try {
      // Observe LCP
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry && metricsRef.current) {
          metricsRef.current.lcp = lastEntry.startTime;
        }
      });
      observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });

      // Observe FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry && metricsRef.current) {
          // FID is the time from first input to first response
          metricsRef.current.fid = (lastEntry as any).processingStart ? 
            (lastEntry as any).processingStart - lastEntry.startTime : 
            lastEntry.duration || 0;
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Observe CLS
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          // Check if the entry has hadRecentInput property, otherwise assume no recent input
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value || 0;
          }
        }
        if (metricsRef.current) {
          metricsRef.current.cls = clsValue;
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }, [enableRealTime]);

  // Generate optimization suggestions
  const generateOptimizations = useCallback((metrics: PerformanceMetrics): string[] => {
    const suggestions: string[] = [];
    
    if (metrics.fcp > PERFORMANCE_THRESHOLDS.fcp.good) {
      suggestions.push('Optimize First Contentful Paint: Minimize render-blocking resources');
    }
    
    if (metrics.lcp > PERFORMANCE_THRESHOLDS.lcp.good) {
      suggestions.push('Optimize Largest Contentful Paint: Optimize images and critical resources');
    }
    
    if (metrics.fid > PERFORMANCE_THRESHOLDS.fid.good) {
      suggestions.push('Reduce First Input Delay: Minimize JavaScript execution time');
    }
    
    if (metrics.cls > PERFORMANCE_THRESHOLDS.cls.good) {
      suggestions.push('Reduce Cumulative Layout Shift: Set explicit dimensions for images and media');
    }
    
    if (metrics.ttfb > PERFORMANCE_THRESHOLDS.ttfb.good) {
      suggestions.push('Optimize Time to First Byte: Improve server response time and CDN');
    }
    
    if (metrics.memoryUsage && metrics.memoryUsage > 50) {
      suggestions.push('Optimize memory usage: Review memory leaks and large object allocations');
    }
    
    return suggestions;
  }, []);

  // Auto-optimize performance
  const performAutoOptimize = useCallback(async () => {
    if (!autoOptimize) return;
    
    const currentMetrics = await collectMetrics();
    const suggestions = generateOptimizations(currentMetrics);
    
    if (suggestions.length > 0) {
      setOptimizations(suggestions);
      
      // Add alerts for critical issues
      const criticalIssues = suggestions.filter(suggestion => 
        suggestion.includes('critical') || suggestion.includes('poor')
      );
      
      criticalIssues.forEach(issue => {
        setAlerts(prev => [...prev, {
          type: 'error',
          message: issue,
          timestamp: new Date()
        }]);
      });
    }
  }, [autoOptimize, collectMetrics, generateOptimizations]);

  // Start real-time monitoring
  const startMonitoring = useCallback(() => {
    if (!enableRealTime || isMonitoring) return;
    
    setIsMonitoring(true);
    const interval = setInterval(async () => {
      const currentMetrics = await collectMetrics();
      setMetrics(currentMetrics);
      
      if (autoOptimize) {
        performAutoOptimize();
      }
    }, 5000); // Update every 5 seconds
    
    setMonitoringInterval(interval);
  }, [enableRealTime, isMonitoring, collectMetrics, autoOptimize]);

  // Stop real-time monitoring
  const stopMonitoring = useCallback(() => {
    if (monitoringInterval) {
      clearInterval(monitoringInterval);
      setMonitoringInterval(null);
    }
    setIsMonitoring(false);
  }, [monitoringInterval]);

  // Initialize performance monitoring
  useEffect(() => {
    setupPerformanceObserver();
    
    // Initial metrics collection
    const initMetrics = async () => {
      const initialMetrics = await collectMetrics();
      setMetrics(initialMetrics);
      metricsRef.current = initialMetrics;
      
      if (autoOptimize) {
        performAutoOptimize();
      }
    };
    
    initMetrics();
    
    // Start monitoring if enabled
    if (enableRealTime) {
      startMonitoring();
    }
    
    return () => {
      stopMonitoring();
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setupPerformanceObserver, collectMetrics, autoOptimize, enableRealTime, startMonitoring, stopMonitoring]);

  // Cleanup alerts after 10 seconds
  useEffect(() => {
    if (alerts.length > 0) {
      const timer = setTimeout(() => {
        setAlerts(prev => prev.slice(1));
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  if (!showMetrics || !metrics) return null;

  const performanceScore = getPerformanceScore(metrics);
  const { grade, color, icon } = getPerformanceGrade(performanceScore);

  return (
    <>
      {/* Performance Monitor Widget */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-8 left-8 z-40"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {/* Main Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Performance Monitor"
        >
          <Activity className="w-6 h-6" />
        </motion.button>

        {/* Expanded Panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-0 mb-4 w-80 bg-gray-800/95 backdrop-blur-md rounded-xl border border-gray-700/50 shadow-2xl shadow-black/50 overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-700/50">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-cyan-400" />
                    Performance Monitor
                  </h3>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close performance monitor"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Performance Score */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Score:</span>
                    <span className={`text-2xl font-bold ${color}`}>{performanceScore}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Grade:</span>
                    <span className={`text-xl font-bold ${color}`}>{grade}</span>
                    {icon}
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                {Object.entries(metrics).map(([key, value]) => {
                  if (typeof value !== 'number' || value === 0) return null;
                  
                  const metricKey = key as keyof PerformanceMetrics;
                  const { status, color: statusColor } = getMetricStatus(metricKey, value);
                  
                  return (
                    <div key={key} className="flex items-center justify-between p-2 bg-gray-700/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          status === 'good' ? 'bg-green-400' : 
                          status === 'needsImprovement' ? 'bg-yellow-400' : 'bg-red-400'
                        }`} />
                        <span className="text-sm text-gray-300 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                      </div>
                      <span className={`text-sm font-medium ${statusColor}`}>
                        {formatMetric(metricKey, value)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Optimizations */}
              {optimizations.length > 0 && (
                <div className="p-4 border-t border-gray-700/50">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Settings className="w-4 h-4 text-cyan-400" />
                    Optimizations
                  </h4>
                  <div className="space-y-2">
                    {optimizations.slice(0, 3).map((optimization, index) => (
                      <div key={index} className="text-xs text-gray-400 bg-gray-700/30 p-2 rounded">
                        {optimization}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Controls */}
              <div className="p-4 border-t border-gray-700/50">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => isMonitoring ? stopMonitoring() : startMonitoring()}
                    className={`px-3 py-1 text-xs rounded ${
                      isMonitoring 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-green-500 hover:bg-green-600 text-white'
                    } transition-colors`}
                  >
                    {isMonitoring ? 'Stop' : 'Start'} Monitoring
                  </button>
                  <span className="text-xs text-gray-400">
                    {isMonitoring ? 'Real-time' : 'Manual'}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Performance Alerts */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {alerts.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className={`p-4 rounded-lg shadow-lg border-l-4 ${
                alert.type === 'error' ? 'bg-red-500/20 border-red-500 text-red-100' :
                alert.type === 'warning' ? 'bg-yellow-500/20 border-yellow-500 text-yellow-100' :
                'bg-blue-500/20 border-blue-500 text-blue-100'
              }`}
            >
              <div className="flex items-start gap-3">
                {alert.type === 'error' ? <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" /> :
                 alert.type === 'warning' ? <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" /> :
                 <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />}
                <div className="flex-1">
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-xs opacity-75 mt-1">
                    {alert.timestamp.toLocaleTimeString()}
                  </p>
                </div>
                <button
                  onClick={() => setAlerts(prev => prev.filter((_, i) => i !== index))}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default PerformanceMonitor;