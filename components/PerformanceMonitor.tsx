import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, TrendingUp, TrendingDown, Clock, 
  Zap, Database, Network, Cpu, HardDrive, 
  Wifi, WifiOff, AlertTriangle,
  CheckCircle, XCircle, Info, BarChart3
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
  resourceCount: number;
  resourceSize: number;
  memoryUsage: number | null;
  networkSpeed: string | null;
  isOnline: boolean;
}

interface ResourceInfo {
  name: string;
  type: string;
  size: number;
  duration: number;
  status: 'success' | 'error' | 'pending';
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null,
    resourceCount: 0,
    resourceSize: 0,
    memoryUsage: null,
    networkSpeed: null,
    isOnline: navigator.onLine
  });
  const [resources, setResources] = useState<ResourceInfo[]>([]);
  const [alerts, setAlerts] = useState<string[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const resourceTimingRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize performance monitoring
  useEffect(() => {
    if (!isMonitoring) return;

    // Core Web Vitals observer
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          });
        });
        observerRef.current.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const firstInputEntry = entry as any;
            if (firstInputEntry.processingStart) {
              setMetrics(prev => ({ ...prev, fid: firstInputEntry.processingStart - firstInputEntry.startTime }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Resource timing
        resourceTimingRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries() as PerformanceResourceTiming[];
          const resourceInfo: ResourceInfo[] = entries.map(entry => ({
            name: entry.name,
            type: entry.initiatorType || 'unknown',
            size: entry.transferSize || 0,
            duration: entry.duration,
            status: entry.transferSize ? 'success' : 'error'
          }));

          setResources(prev => [...prev, ...resourceInfo]);
          setMetrics(prev => ({
            ...prev,
            resourceCount: prev.resourceCount + entries.length,
            resourceSize: prev.resourceSize + entries.reduce((sum, entry) => sum + (entry.transferSize || 0), 0)
          }));
        });
        resourceTimingRef.current.observe({ entryTypes: ['resource'] });

      } catch (error) {
        console.warn('Performance monitoring initialization failed:', error);
      }
    }

    // Time to First Byte
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));
    }

    // DOM and Window load times
    const domLoad = performance.timing?.domContentLoadedEventEnd - performance.timing?.navigationStart;
    const windowLoad = performance.timing?.loadEventEnd - performance.timing?.navigationStart;
    
    if (domLoad) setMetrics(prev => ({ ...prev, domLoad }));
    if (windowLoad) setMetrics(prev => ({ ...prev, windowLoad }));

    // Memory usage monitoring
    const updateMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const usage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
        setMetrics(prev => ({ ...prev, memoryUsage: usage }));
      }
    };

    // Network monitoring
    const updateNetworkInfo = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection.effectiveType) {
          setMetrics(prev => ({ ...prev, networkSpeed: connection.effectiveType }));
        }
      }
    };

    // Online/offline status
    const handleOnlineStatus = () => {
      setMetrics(prev => ({ ...prev, isOnline: navigator.onLine }));
    };

    // Set up monitoring intervals
    intervalRef.current = setInterval(() => {
      updateMemoryUsage();
      updateNetworkInfo();
    }, 2000);

    // Event listeners
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    // Cleanup
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (resourceTimingRef.current) resourceTimingRef.current.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, [isMonitoring]);

  // Performance alerts
  useEffect(() => {
    const newAlerts: string[] = [];
    
    if (metrics.fcp && metrics.fcp > 1800) {
      newAlerts.push('First Contentful Paint is slow (>1.8s)');
    }
    if (metrics.lcp && metrics.lcp > 2500) {
      newAlerts.push('Largest Contentful Paint is slow (>2.5s)');
    }
    if (metrics.fid && metrics.fid > 100) {
      newAlerts.push('First Input Delay is high (>100ms)');
    }
    if (metrics.cls && metrics.cls > 0.1) {
      newAlerts.push('Cumulative Layout Shift is poor (>0.1)');
    }
    if (metrics.memoryUsage && metrics.memoryUsage > 80) {
      newAlerts.push('Memory usage is high (>80%)');
    }

    setAlerts(newAlerts);
  }, [metrics]);

  // Get performance grade
  const getPerformanceGrade = useCallback(() => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.lcp && metrics.lcp > 2500) score -= 25;
    if (metrics.fid && metrics.fid > 100) score -= 15;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    if (metrics.memoryUsage && metrics.memoryUsage > 80) score -= 10;

    if (score >= 90) return { grade: 'A', color: 'text-green-400', bg: 'bg-green-500/20' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-400', bg: 'bg-yellow-500/20' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-400', bg: 'bg-orange-500/20' };
    return { grade: 'D', color: 'text-red-400', bg: 'bg-red-500/20' };
  }, [metrics]);

  // Format bytes
  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Format time
  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${ms.toFixed(0)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  const performanceGrade = getPerformanceGrade();

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsVisible(!isVisible)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl transition-all duration-200 z-50 flex items-center justify-center ${
          alerts.length > 0 
            ? 'bg-gradient-to-r from-red-500 to-orange-500 shadow-red-500/25' 
            : 'bg-gradient-to-r from-green-500 to-blue-500 shadow-green-500/25'
        }`}
        aria-label="Performance monitoring"
        aria-expanded={isVisible}
      >
        <Activity className="w-6 h-6 text-white" />
        {alerts.length > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {alerts.length}
          </span>
        )}
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-96 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl z-50"
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                  aria-label={isExpanded ? "Collapse panel" : "Expand panel"}
                >
                  <TrendingUp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsMonitoring(!isMonitoring)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isMonitoring 
                      ? 'text-green-400 bg-green-500/20' 
                      : 'text-gray-400 bg-gray-800/50'
                  }`}
                  aria-label={isMonitoring ? "Stop monitoring" : "Start monitoring"}
                >
                  <Activity className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Performance Grade */}
            <div className="p-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Performance Score</span>
                <div className={`px-3 py-1 rounded-full ${performanceGrade.bg}`}>
                  <span className={`text-2xl font-bold ${performanceGrade.color}`}>
                    {performanceGrade.grade}
                  </span>
                </div>
              </div>
            </div>

            {/* Core Metrics */}
            <div className="p-4 space-y-3">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Core Web Vitals</h4>
              
              {/* FCP */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-400">FCP</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-mono">
                    {metrics.fcp ? formatTime(metrics.fcp) : '--'}
                  </span>
                  {metrics.fcp && (
                    <div className={`w-2 h-2 rounded-full ${
                      metrics.fcp <= 1800 ? 'bg-green-400' : 'bg-red-400'
                    }`} />
                  )}
                </div>
              </div>

              {/* LCP */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-400">LCP</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-mono">
                    {metrics.lcp ? formatTime(metrics.lcp) : '--'}
                  </span>
                  {metrics.lcp && (
                    <div className={`w-2 h-2 rounded-full ${
                      metrics.lcp <= 2500 ? 'bg-green-400' : 'bg-red-400'
                    }`} />
                  )}
                </div>
              </div>

              {/* FID */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-400">FID</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-mono">
                    {metrics.fid ? formatTime(metrics.fid) : '--'}
                  </span>
                  {metrics.fid && (
                    <div className={`w-2 h-2 rounded-full ${
                      metrics.fid <= 100 ? 'bg-green-400' : 'bg-red-400'
                    }`} />
                  )}
                </div>
              </div>

              {/* CLS */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-400">CLS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-mono">
                    {metrics.cls ? metrics.cls.toFixed(3) : '--'}
                  </span>
                  {metrics.cls && (
                    <div className={`w-2 h-2 rounded-full ${
                      metrics.cls <= 0.1 ? 'bg-green-400' : 'bg-red-400'
                    }`} />
                  )}
                </div>
              </div>
            </div>

            {/* System Metrics */}
            <div className="p-4 space-y-3 border-t border-gray-700/50">
              <h4 className="text-sm font-medium text-gray-300 mb-3">System Metrics</h4>
              
              {/* Memory Usage */}
              <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-400">Memory</span>
                  </div>
                <span className="text-white font-mono">
                  {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}%` : '--'}
                </span>
              </div>

              {/* Network Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {metrics.isOnline ? (
                    <Wifi className="w-4 h-4 text-green-400" />
                  ) : (
                    <WifiOff className="w-4 h-4 text-red-400" />
                  )}
                  <span className="text-sm text-gray-400">Network</span>
                </div>
                <span className="text-white font-mono">
                  {metrics.isOnline ? (metrics.networkSpeed || 'Online') : 'Offline'}
                </span>
              </div>

              {/* Resource Count */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-gray-400">Resources</span>
                </div>
                <span className="text-white font-mono">
                  {metrics.resourceCount} ({formatBytes(metrics.resourceSize)})
                </span>
              </div>
            </div>

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="p-4 border-t border-gray-700/50">
                <h4 className="text-sm font-medium text-red-400 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Performance Alerts
                </h4>
                <div className="space-y-2">
                  {alerts.map((alert, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm text-red-300">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{alert}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Expanded View */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-gray-700/50 overflow-hidden"
                >
                  <div className="p-4 space-y-3">
                    <h4 className="text-sm font-medium text-gray-300">Resource Details</h4>
                    <div className="max-h-32 overflow-y-auto space-y-2">
                      {resources.slice(-10).map((resource, index) => (
                        <div key={index} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              resource.status === 'success' ? 'bg-green-400' : 'bg-red-400'
                            }`} />
                            <span className="text-gray-400 truncate max-w-32">
                              {resource.name.split('/').pop()}
                            </span>
                          </div>
                          <span className="text-white font-mono">
                            {formatTime(resource.duration)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;