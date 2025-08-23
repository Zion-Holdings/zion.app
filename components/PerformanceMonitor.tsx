import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChartColumn, Zap, Clock, HardDrive, 
  Wifi, Activity, AlertTriangle, RefreshCw
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  fps: number;
  domSize: number;
  resourceCount: number;
  timestamp: number;
  // Core Web Vitals
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fcp: number; // First Contentful Paint
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  metric: string;
  value: number;
  threshold: number;
  timestamp: Date;
}

interface PerformanceMonitorProps {
  showUI?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showUI = false, 
  autoRefresh = true, 
  refreshInterval = 5000 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    fps: 60,
    domSize: 0,
    resourceCount: 0,
    timestamp: Date.now(),
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0
  });
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  // Performance monitoring functions
  const measureLoadTime = useCallback(() => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        return navigation.loadEventEnd - navigation.loadEventStart;
      }
    }
    return 0;
  }, []);

  const measureMemoryUsage = useCallback(() => {
    if (typeof window !== 'undefined' && (performance as globalThis.Performance & { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory) {
      const memory = (performance as globalThis.Performance & { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      if (memory) {
        return Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100);
      }
    }
    return 0;
  }, []);

  const measureNetworkLatency = useCallback(async () => {
    try {
      const start = performance.now();
      await fetch('/api/health', { method: 'HEAD' });
      const end = performance.now();
      return Math.round(end - start);
    } catch {
      return 0;
    }
  }, []);

  const measureDOMSize = useCallback(() => {
    if (typeof document !== 'undefined') {
      return document.getElementsByTagName('*').length;
    }
    return 0;
  }, []);

  const measureResourceCount = useCallback(() => {
    if (typeof window !== 'undefined' && window.performance) {
      return performance.getEntriesByType('resource').length;
    }
    return 0;
  }, []);

  // Core Web Vitals measurement
  const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return {};

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          const lcp = entry.startTime;
          setMetrics(prev => ({ ...prev, lcp }));
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch {
      // LCP observation not supported
    }

    // Measure FPS
    const measureFPS = () => {
      frameCountRef.current++;
      const currentTime = performance.now();
      
      if (currentTime - lastTimeRef.current >= 1000) {
        const fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current));
        setMetrics(prev => ({ ...prev, fps }));
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    measureFPS();

    return {};
  }, []);

  const updateMetrics = useCallback(async () => {
    setIsRefreshing(true);
    
    try {
      const newMetrics: PerformanceMetrics = {
        loadTime: measureLoadTime(),
        memoryUsage: measureMemoryUsage(),
        cpuUsage: Math.random() * 30 + 10, // Simulated CPU usage
        networkLatency: await measureNetworkLatency(),
        fps: metrics.fps,
        domSize: measureDOMSize(),
        resourceCount: measureResourceCount(),
        timestamp: Date.now(),
        lcp: metrics.lcp,
        fid: metrics.fid,
        cls: metrics.cls,
        ttfb: metrics.ttfb,
        fcp: metrics.fcp
      };

      setMetrics(newMetrics);
      
      // Add to historical data (keep last 100 entries)
      // setHistoricalData(prev => { // This line was removed
      //   const updated = [...prev, newMetrics];
      //   return updated.slice(-100);
      // });

      // Check for performance alerts
      const newAlerts: PerformanceAlert[] = [];
      
      // LCP threshold (should be < 2.5s)
      if (newMetrics.lcp > 2500) {
        newAlerts.push({
          id: `lcp-${Date.now()}`,
          type: 'warning',
          message: 'Largest Contentful Paint is above recommended threshold',
          metric: 'LCP',
          value: newMetrics.lcp,
          threshold: 2500,
          timestamp: new Date()
        });
      }

      // Memory usage threshold (should be < 80%)
      if (newMetrics.memoryUsage > 80) {
        newAlerts.push({
          id: `memory-${Date.now()}`,
          type: 'error',
          message: 'Memory usage is critically high',
          metric: 'Memory',
          value: newMetrics.memoryUsage,
          threshold: 80,
          timestamp: new Date()
        });
      }

      // FPS threshold (should be > 30)
      if (newMetrics.fps < 30) {
        newAlerts.push({
          id: `fps-${Date.now()}`,
          type: 'warning',
          message: 'Frame rate is below recommended threshold',
          metric: 'FPS',
          value: newMetrics.fps,
          threshold: 30,
          timestamp: new Date()
        });
      }

      // Add new alerts
      if (newAlerts.length > 0) {
        setAlerts(prev => [...prev, ...newAlerts]);
      }

    } catch {
      // Error updating performance metrics
    } finally {
      setIsRefreshing(false);
    }
  }, [measureLoadTime, measureMemoryUsage, measureNetworkLatency, measureDOMSize, measureResourceCount, metrics.fps, metrics.lcp, metrics.fid, metrics.cls, metrics.ttfb, metrics.fcp]);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    updateMetrics();
    
    if (autoRefresh) {
      refreshIntervalRef.current = setInterval(updateMetrics, refreshInterval);
    }
  }, [autoRefresh, refreshInterval, updateMetrics]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    if (refreshIntervalRef.current) {
      clearInterval(refreshIntervalRef.current);
    }
  }, []);

  // Toggle monitoring
  const toggleMonitoring = useCallback(() => {
    if (isMonitoring) {
      stopMonitoring();
    } else {
      startMonitoring();
    }
  }, [isMonitoring, startMonitoring, stopMonitoring]);

  // Clear alerts
  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  // Get performance score (0-100)
  const getPerformanceScore = useCallback(() => {
    let score = 100;
    
    // Deduct points for poor performance
    if (metrics.lcp > 2500) score -= 20;
    if (metrics.memoryUsage > 80) score -= 25;
    if (metrics.fps < 30) score -= 15;
    if (metrics.loadTime > 3000) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  // Get performance status
  const getPerformanceStatus = useCallback(() => {
    const score = getPerformanceScore();
    if (score >= 90) return { status: 'Excellent', color: 'text-green-400', bgColor: 'bg-green-500/20' };
    if (score >= 70) return { status: 'Good', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20' };
    if (score >= 50) return { status: 'Fair', color: 'text-orange-400', bgColor: 'bg-orange-500/20' };
    return { status: 'Poor', color: 'text-red-400', bgColor: 'bg-red-500/20' };
  }, [getPerformanceScore]);

  // Initialize monitoring
  useEffect(() => {
    if (showUI) {
      measureCoreWebVitals();
      startMonitoring();
    }

    return () => {
      stopMonitoring();
    };
  }, [showUI, measureCoreWebVitals, startMonitoring, stopMonitoring]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current);
      }
    };
  }, []);

  if (!showUI) return null;

  const performanceStatus = getPerformanceStatus();
  const score = getPerformanceScore();

  return (
    <>
      {/* Performance Monitor Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-40 p-3 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        aria-label="Toggle performance monitor"
      >
        <Activity className="w-5 h-5 text-cyan-400" />
        {alerts.length > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {alerts.length}
          </span>
        )}
      </button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            transition={{ duration: 0.3 }}
            className="fixed left-4 bottom-20 z-50 w-96 bg-black/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <ChartColumn className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">Performance Monitor</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={updateMetrics}
                  disabled={isRefreshing}
                  className="p-1 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
                  aria-label="Refresh metrics"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close performance monitor"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Performance Score */}
            <div className="p-4 border-b border-white/20">
              <div className="text-center">
                <div className={`inline-flex items-center px-3 py-1 rounded-full ${performanceStatus.bgColor} mb-2`}>
                  <span className={`text-sm font-medium ${performanceStatus.color}`}>
                    {performanceStatus.status}
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{score}</div>
                <div className="text-sm text-gray-400">Performance Score</div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-400">Load Time</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {metrics.loadTime > 0 ? `${metrics.loadTime}ms` : 'N/A'}
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <HardDrive className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-400">Memory</span>
                  </div>
                  <div className="text-lg font-semibold text-white">{metrics.memoryUsage}%</div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">FPS</span>
                  </div>
                  <div className="text-lg font-semibold text-white">{metrics.fps}</div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Wifi className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-400">Latency</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {metrics.networkLatency > 0 ? `${metrics.networkLatency}ms` : 'N/A'}
                  </div>
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="bg-white/5 rounded-lg p-3">
                <h4 className="text-sm font-medium text-white mb-3">Core Web Vitals</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">LCP:</span>
                    <span className={`font-medium ${metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.lcp > 0 ? `${metrics.lcp}ms` : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">FID:</span>
                    <span className={`font-medium ${metrics.fid > 100 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.lcp > 0 ? `${metrics.fid}ms` : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">CLS:</span>
                    <span className={`font-medium ${metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.cls > 0 ? metrics.cls.toFixed(3) : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Monitoring Controls */}
              <div className="flex items-center justify-between">
                <button
                  onClick={toggleMonitoring}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isMonitoring
                      ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                      : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                  }`}
                >
                  {isMonitoring ? 'Stop' : 'Start'} Monitoring
                </button>
                <button
                  onClick={clearAlerts}
                  className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Clear Alerts
                </button>
              </div>
            </div>

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="border-t border-white/20">
                <div className="p-4">
                  <h4 className="text-sm font-medium text-white mb-3 flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <span>Performance Alerts ({alerts.length})</span>
                  </h4>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {alerts.slice(-5).map((alert) => (
                      <div
                        key={alert.id}
                        className={`p-2 rounded-lg text-xs ${
                          alert.type === 'error' ? 'bg-red-500/20 text-red-400' :
                          alert.type === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        <div className="font-medium">{alert.metric}: {alert.value}</div>
                        <div className="text-gray-300">{alert.message}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;