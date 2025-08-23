import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  X,
  Settings,
  BarChart3,
  Gauge,
  Cpu,
  HardDrive
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
  cpuUsage?: number; // CPU usage percentage
}

interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  fid: { good: number; needsImprovement: number };
  cls: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: 0,
    windowLoad: 0
  });
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Performance thresholds based on Core Web Vitals
  const thresholds: PerformanceThresholds = {
    fcp: { good: 1800, needsImprovement: 3000 },
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 },
    ttfb: { good: 800, needsImprovement: 1800 }
  };

  // Get performance grade
  const getGrade = useCallback((metric: keyof PerformanceMetrics, value: number): 'good' | 'needsImprovement' | 'poor' => {
    if (metric === 'cls') {
      // CLS is better when lower
      if (value <= thresholds[metric].good) return 'good';
      if (value <= thresholds[metric].needsImprovement) return 'needsImprovement';
      return 'poor';
    } else {
      // Other metrics are better when lower
      if (value <= thresholds[metric].good) return 'good';
      if (value <= thresholds[metric].needsImprovement) return 'needsImprovement';
      return 'poor';
    }
  }, [thresholds]);

  // Get grade color
  const getGradeColor = useCallback((grade: string): string => {
    switch (grade) {
      case 'good': return 'text-green-400';
      case 'needsImprovement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  }, []);

  // Get grade icon
  const getGradeIcon = useCallback((grade: string) => {
    switch (grade) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needsImprovement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <X className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  }, []);

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const perf = window.performance;
    const navigation = perf.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = perf.getEntriesByType('paint');

    // First Contentful Paint
    const fcpEntry = paint.find(entry => entry.name === 'first-contentful-paint');
    const fcp = fcpEntry ? fcpEntry.startTime : 0;

    // Largest Contentful Paint
    let lcp = 0;
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          lcp = lastEntry.startTime;
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // Time to First Byte
    const ttfb = navigation ? navigation.responseStart - navigation.requestStart : 0;

    // DOM Content Loaded
    const domLoad = navigation ? navigation.domContentLoadedEventEnd - navigation.fetchStart : 0;

    // Window Load
    const windowLoad = navigation ? navigation.loadEventEnd - navigation.fetchStart : 0;

    setMetrics(prev => ({
      ...prev,
      fcp,
      ttfb,
      domLoad,
      windowLoad
    }));
  }, []);

  // Monitor real-time performance
  const startMonitoring = useCallback(() => {
    if (typeof window === 'undefined') return;

    setIsMonitoring(true);

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      intervalRef.current = setInterval(() => {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / (1024 * 1024); // Convert to MB
        
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memoryUsage * 100) / 100
        }));

        // Alert if memory usage is high
        if (memoryUsage > 100) { // 100MB threshold
          setAlerts(prev => [...prev, `High memory usage: ${Math.round(memoryUsage)}MB`]);
        }
      }, 5000); // Check every 5 seconds
    }

    // Monitor layout shifts
    if ('PerformanceObserver' in window) {
      observerRef.current = new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            cls += (entry as any).value;
          }
        }
        
        setMetrics(prev => ({ ...prev, cls }));
        
        // Alert if CLS is poor
        if (cls > thresholds.cls.needsImprovement) {
          setAlerts(prev => [...prev, `Poor Cumulative Layout Shift: ${cls.toFixed(3)}`]);
        }
      });

      observerRef.current.observe({ entryTypes: ['layout-shift'] });
    }
  }, [thresholds.cls.needsImprovement]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  // Clear alerts
  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  // Initialize performance monitoring
  useEffect(() => {
    measurePerformance();
    startMonitoring();

    return () => {
      stopMonitoring();
    };
  }, [measurePerformance, startMonitoring, stopMonitoring]);

  // Auto-hide alerts after 10 seconds
  useEffect(() => {
    if (alerts.length > 0) {
      const timer = setTimeout(() => {
        setAlerts(prev => prev.slice(1));
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  return (
    <>
      {/* Performance Monitor Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Toggle performance monitor"
        title="Performance Monitor"
      >
        <Activity className="w-7 h-7 mx-auto" />
      </button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 h-full w-80 bg-gray-900 border-r border-gray-700 z-40 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Performance
                </h2>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close performance monitor"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Monitoring Status */}
              <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Monitoring Status</span>
                  <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`} />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={startMonitoring}
                    disabled={isMonitoring}
                    className="px-3 py-1 bg-green-600 text-white text-xs rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 transition-colors"
                  >
                    Start
                  </button>
                  <button
                    onClick={stopMonitoring}
                    disabled={!isMonitoring}
                    className="px-3 py-1 bg-red-600 text-white text-xs rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-colors"
                  >
                    Stop
                  </button>
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
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
                    const grade = getGrade(key as keyof PerformanceMetrics, value);
                    const color = getGradeColor(grade);
                    const icon = getGradeIcon(grade);
                    
                    return (
                      <div key={key} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                        <div className="flex items-center">
                          <span className={`mr-2 ${color}`}>{icon}</span>
                          <span className="text-sm text-gray-300">{label}</span>
                        </div>
                        <span className={`text-sm font-medium ${color}`}>
                          {value > 0 ? `${value}${unit}` : 'N/A'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Load Times */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Load Times
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'DOM Content Loaded', value: metrics.domLoad, unit: 'ms' },
                    { label: 'Window Load', value: metrics.windowLoad, unit: 'ms' }
                  ].map(({ label, value, unit }) => (
                    <div key={label} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <span className="text-sm text-gray-300">{label}</span>
                      <span className="text-sm font-medium text-white">
                        {value > 0 ? `${value}${unit}` : 'N/A'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Resources */}
              {(metrics.memoryUsage !== undefined || metrics.cpuUsage !== undefined) && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Gauge className="w-5 h-5 mr-2" />
                    System Resources
                  </h3>
                  <div className="space-y-3">
                    {metrics.memoryUsage !== undefined && (
                      <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                        <span className="text-sm text-gray-300 flex items-center">
                          <HardDrive className="w-4 h-4 mr-2" />
                          Memory Usage
                        </span>
                        <span className="text-sm font-medium text-white">
                          {metrics.memoryUsage} MB
                        </span>
                      </div>
                    )}
                    {metrics.cpuUsage !== undefined && (
                      <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                        <span className="text-sm text-gray-300 flex items-center">
                          <Cpu className="w-4 h-4 mr-2" />
                          CPU Usage
                        </span>
                        <span className="text-sm font-medium text-white">
                          {metrics.cpuUsage}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Performance Alerts */}
              {alerts.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                      Alerts
                    </h3>
                    <button
                      onClick={clearAlerts}
                      className="text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="space-y-2">
                    {alerts.map((alert, index) => (
                      <div key={index} className="p-3 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
                        <p className="text-sm text-yellow-300">{alert}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Performance Tips */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Performance Tips
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Optimize images and use WebP format</p>
                  <p>• Minimize JavaScript bundle size</p>
                  <p>• Use lazy loading for below-the-fold content</p>
                  <p>• Implement proper caching strategies</p>
                  <p>• Monitor Core Web Vitals regularly</p>
                </div>
              </div>

              {/* Details Toggle */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full p-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                <Settings className="w-4 h-4 mr-2" />
                {showDetails ? 'Hide' : 'Show'} Technical Details
              </button>

              {/* Technical Details */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 p-4 bg-gray-800 rounded-lg overflow-hidden"
                  >
                    <h4 className="text-sm font-semibold text-white mb-2">Technical Details</h4>
                    <div className="text-xs text-gray-400 space-y-1">
                      <p>FCP: First contentful paint - when first text/image appears</p>
                      <p>LCP: Largest contentful paint - when main content loads</p>
                      <p>FID: First input delay - time to respond to first interaction</p>
                      <p>CLS: Cumulative layout shift - visual stability measure</p>
                      <p>TTFB: Time to first byte - server response time</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;