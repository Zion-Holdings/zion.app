import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Gauge, Target, Activity, AlertTriangle
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

interface MemoryInfo {
  usedJSHeapSize: number;
  jsHeapSizeLimit: number;
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
    fps: 0,
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
  const [alerts, setAlerts] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState(0);

  // Enhanced performance monitoring functions
  const measureLoadTime = useCallback(() => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        return navigation.loadEventEnd - navigation.loadEventStart;
      }
    }
    return 0;
  }, []);

  const measureCoreWebVitals = useCallback(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEntry & { processingStart?: number };
          if (fidEntry.processingStart) {
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        if (firstEntry) {
          setMetrics(prev => ({ ...prev, fcp: firstEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

      // TTFB (Time to First Byte)
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({ ...prev, ttfb: navigation.responseStart - navigation.requestStart }));
      }
    }
  }, []);

  const measureMemoryUsage = useCallback(() => {
    if (typeof window !== 'undefined' && (performance as any).memory) {
      const memory = (performance as any).memory as MemoryInfo;
      return Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100);
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

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;
    
    // LCP scoring (target: < 2.5s)
    if (metrics.lcp > 4000) score -= 20;
    else if (metrics.lcp > 2500) score -= 10;
    
    // FID scoring (target: < 100ms)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;
    
    // CLS scoring (target: < 0.1)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;
    
    // Load time scoring
    if (metrics.loadTime > 5000) score -= 15;
    else if (metrics.loadTime > 3000) score -= 10;
    
    // Memory usage scoring
    if (metrics.memoryUsage > 80) score -= 10;
    
    return Math.max(0, score);
  }, []);

  const updateMetrics = useCallback(async () => {
    const newMetrics: PerformanceMetrics = {
      loadTime: measureLoadTime(),
      memoryUsage: measureMemoryUsage(),
      cpuUsage: Math.random() * 30 + 10, // Simulated CPU usage
      networkLatency: await measureNetworkLatency(),
      fps: 60, // Simulated FPS
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
    const score = calculatePerformanceScore(newMetrics);
    setPerformanceScore(score);

    // Enhanced performance alerts
    const newAlerts: string[] = [];
    
    if (newMetrics.lcp > 4000) newAlerts.push('⚠️ LCP is very slow (>4s)');
    if (newMetrics.fid > 300) newAlerts.push('⚠️ FID is very slow (>300ms)');
    if (newMetrics.cls > 0.25) newAlerts.push('⚠️ CLS is very poor (>0.25)');
    if (newMetrics.loadTime > 5000) newAlerts.push('⚠️ Page load time is very slow (>5s)');
    if (newMetrics.memoryUsage > 80) newAlerts.push('⚠️ High memory usage (>80%)');
    
    setAlerts(newAlerts);
  }, [measureLoadTime, measureMemoryUsage, measureNetworkLatency, measureDOMSize, measureResourceCount, calculatePerformanceScore, metrics.lcp, metrics.fid, metrics.cls, metrics.ttfb, metrics.fcp]);

  // Start monitoring
  useEffect(() => {
    if (autoRefresh) {
      setIsMonitoring(true);
      measureCoreWebVitals();
      
      const interval = setInterval(updateMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval, updateMetrics, measureCoreWebVitals]);

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getMetricStatus = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!showUI) return null;

  return (
    <>
      {/* Performance Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Monitor"
      >
        <Gauge className="w-6 h-6" />
      </motion.button>

      {/* Performance Dashboard */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-20 right-4 z-50 bg-gray-900/95 backdrop-blur-sm border border-cyan-400/30 rounded-2xl shadow-2xl w-96 max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Gauge className="w-5 h-5" />
                  <h3 className="font-semibold">Performance Monitor</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-1 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Performance Score */}
              <div className="mt-3 text-center">
                <div className="text-2xl font-bold">
                  <span className={getPerformanceColor(performanceScore)}>
                    {performanceScore}
                  </span>
                  /100
                </div>
                <div className="text-sm opacity-90">Performance Score</div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Core Web Vitals */}
              <div className="space-y-3">
                <h4 className="font-semibold text-cyan-400 flex items-center space-x-2">
                  <Target className="w-4 h-4" />
                  <span>Core Web Vitals</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400">LCP</div>
                    <div className={`font-mono ${getMetricStatus(metrics.lcp, { good: 2500, needsImprovement: 4000 })}`}>
                      {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                    </div>
                    <div className="text-xs text-gray-500">Target: &lt;2.5s</div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400">FID</div>
                    <div className={`font-mono ${getMetricStatus(metrics.fid, { good: 100, needsImprovement: 300 })}`}>
                      {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
                    </div>
                    <div className="text-xs text-gray-500">Target: &lt;100ms</div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400">CLS</div>
                    <div className={`font-mono ${getMetricStatus(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}`}>
                      {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
                    </div>
                    <div className="text-xs text-gray-500">Target: &lt;0.1</div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400">FCP</div>
                    <div className="font-mono text-cyan-400">
                      {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
                    </div>
                    <div className="text-xs text-gray-500">First Contentful Paint</div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-3">
                <h4 className="font-semibold text-cyan-400 flex items-center space-x-2">
                  <Activity className="w-4 h-4" />
                  <span>Performance Metrics</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400">Load Time</div>
                    <div className="font-mono text-cyan-400">{metrics.loadTime}ms</div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400">Memory</div>
                    <div className="font-mono text-cyan-400">{metrics.memoryUsage}%</div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400">Network</div>
                    <div className="font-mono text-cyan-400">{metrics.networkLatency}ms</div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400">DOM Size</div>
                    <div className="font-mono text-cyan-400">{metrics.domSize}</div>
                  </div>
                </div>
              </div>

              {/* Alerts */}
              {alerts.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-400 flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Performance Alerts</span>
                  </h4>
                  <div className="space-y-2">
                    {alerts.map((alert, index) => (
                      <div key={index} className="bg-red-900/20 border border-red-500/30 p-2 rounded text-sm text-red-300">
                        {alert}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Status */}
              <div className="text-center text-sm text-gray-400">
                <div className="flex items-center justify-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                  <span>{isMonitoring ? 'Monitoring Active' : 'Monitoring Inactive'}</span>
                </div>
                <div className="mt-1">Last updated: {new Date(metrics.timestamp).toLocaleTimeString()}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;