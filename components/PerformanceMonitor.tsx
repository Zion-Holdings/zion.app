import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, AlertTriangle, 
  CheckCircle, X, Settings, BarChart3, Gauge, 
  Wifi, Cpu, HardDrive, MemoryStick
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
  memoryUsage?: number; // Memory usage if available
  networkSpeed?: number; // Network speed if available
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  };
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  autoOptimize = false,
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1
  },
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);
  
  const observerRef = useRef<PerformanceObserver | null>(null);
  const monitoringIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Get performance metrics
  const getPerformanceMetrics = useCallback((): PerformanceMetrics => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
    
    return {
      fcp,
      lcp,
      fid: 0, // Will be updated by observer
      cls: 0, // Will be updated by observer
      ttfb: navigation?.responseStart - navigation?.requestStart || 0,
      domLoad: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart || 0,
      windowLoad: navigation?.loadEventEnd - navigation?.loadEventStart || 0,
      memoryUsage: (performance as any).memory?.usedJSHeapSize / 1024 / 1024, // MB
      networkSpeed: navigation ? (navigation.transferSize / 1024) / (navigation.loadEventEnd / 1000) : 0 // KB/s
    };
  }, []);

  // Set up performance observers
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Input Delay observer
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'first-input') {
              setMetrics(prev => prev ? { ...prev, fid: (entry as any).processingStart - (entry as any).startTime } : null);
            }
          });
        });
        observerRef.current.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer not supported');
      }

      // Layout Shift observer
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer not supported');
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Monitor performance continuously
  useEffect(() => {
    if (isMonitoring) {
      monitoringIntervalRef.current = setInterval(() => {
        const currentMetrics = getPerformanceMetrics();
        setMetrics(currentMetrics);
        
        // Check for performance issues
        const newAlerts: string[] = [];
        if (currentMetrics.fcp > threshold.fcp) {
          newAlerts.push(`FCP is ${Math.round(currentMetrics.fcp)}ms (target: ${threshold.fcp}ms)`);
        }
        if (currentMetrics.lcp > threshold.lcp) {
          newAlerts.push(`LCP is ${Math.round(currentMetrics.lcp)}ms (target: ${threshold.lcp}ms)`);
        }
        if (currentMetrics.fid > threshold.fid) {
          newAlerts.push(`FID is ${Math.round(currentMetrics.fid)}ms (target: ${threshold.fid}ms)`);
        }
        if (currentMetrics.cls > threshold.cls) {
          newAlerts.push(`CLS is ${currentMetrics.cls.toFixed(3)} (target: ${threshold.cls})`);
        }
        
        setAlerts(newAlerts);
      }, 2000);
    }

    return () => {
      if (monitoringIntervalRef.current) {
        clearInterval(monitoringIntervalRef.current);
      }
    };
  }, [isMonitoring, getPerformanceMetrics, threshold]);

  // Auto-optimize performance
  useEffect(() => {
    if (autoOptimize && metrics) {
      const newOptimizations: string[] = [];
      
      if (metrics.fcp > threshold.fcp) {
        newOptimizations.push('Consider lazy loading non-critical resources');
      }
      if (metrics.lcp > threshold.lcp) {
        newOptimizations.push('Optimize largest contentful paint elements');
      }
      if (metrics.fid > threshold.fid) {
        newOptimizations.push('Reduce JavaScript execution time');
      }
      if (metrics.cls > threshold.cls) {
        newOptimizations.push('Fix layout shifts by setting explicit dimensions');
      }
      
      setOptimizations(newOptimizations);
    }
  }, [autoOptimize, metrics, threshold]);

  // Get performance score
  const getPerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.fcp > threshold.fcp) score -= 20;
    if (metrics.lcp > threshold.lcp) score -= 25;
    if (metrics.fid > threshold.fid) score -= 20;
    if (metrics.cls > threshold.cls) score -= 15;
    
    return Math.max(0, score);
  }, [threshold]);

  // Get performance grade
  const getPerformanceGrade = useCallback((score: number): { grade: string; color: string } => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-400' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-400' };
    if (score >= 60) return { grade: 'D', color: 'text-red-400' };
    return { grade: 'F', color: 'text-red-600' };
  }, []);

  // Toggle monitoring
  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring);
    if (!isMonitoring) {
      setMetrics(getPerformanceMetrics());
    }
  };

  // Show metrics after page load
  useEffect(() => {
    if (showMetrics) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setMetrics(getPerformanceMetrics());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showMetrics, getPerformanceMetrics]);

  if (!isVisible) return null;

  const score = metrics ? getPerformanceScore(metrics) : 0;
  const grade = getPerformanceGrade(score);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className={`fixed bottom-4 right-4 z-50 ${className}`}
      >
        {/* Performance Monitor Panel */}
        <motion.div
          className="bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl p-4 w-80 shadow-2xl"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMonitoring}
                className={`p-1 rounded transition-colors ${
                  isMonitoring ? 'bg-green-500/20 text-green-400' : 'bg-gray-600/20 text-gray-400'
                }`}
                title={isMonitoring ? 'Stop monitoring' : 'Start monitoring'}
              >
                <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-gray-400'}`} />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 rounded hover:bg-gray-600/20 text-gray-400 transition-colors"
              >
                <BarChart3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 rounded hover:bg-gray-600/20 text-gray-400 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Performance Score */}
          <div className="text-center mb-4">
            <div className={`text-3xl font-bold ${grade.color}`}>{score}</div>
            <div className={`text-lg font-semibold ${grade.color}`}>{grade.grade}</div>
            <div className="text-xs text-gray-400">Performance Score</div>
          </div>

          {/* Key Metrics */}
          {metrics && (
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">FCP</span>
                <span className={`font-mono ${metrics.fcp > threshold.fcp ? 'text-red-400' : 'text-green-400'}`}>
                  {Math.round(metrics.fcp)}ms
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">LCP</span>
                <span className={`font-mono ${metrics.lcp > threshold.lcp ? 'text-red-400' : 'text-green-400'}`}>
                  {Math.round(metrics.lcp)}ms
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">FID</span>
                <span className={`font-mono ${metrics.fid > threshold.fid ? 'text-red-400' : 'text-green-400'}`}>
                  {Math.round(metrics.fid)}ms
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">CLS</span>
                <span className={`font-mono ${metrics.cls > threshold.cls ? 'text-red-400' : 'text-green-400'}`}>
                  {metrics.cls.toFixed(3)}
                </span>
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
                className="overflow-hidden"
              >
                <div className="border-t border-gray-700/50 pt-4 space-y-3">
                  {/* Additional Metrics */}
                  {metrics && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">TTFB</span>
                        <span className="font-mono text-cyan-400">{Math.round(metrics.ttfb)}ms</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">DOM Load</span>
                        <span className="font-mono text-cyan-400">{Math.round(metrics.domLoad)}ms</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Window Load</span>
                        <span className="font-mono text-cyan-400">{Math.round(metrics.windowLoad)}ms</span>
                      </div>
                      {metrics.memoryUsage && (
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Memory</span>
                          <span className="font-mono text-cyan-400">{metrics.memoryUsage.toFixed(1)}MB</span>
                        </div>
                      )}
                      {metrics.networkSpeed && (
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Network</span>
                          <span className="font-mono text-cyan-400">{metrics.networkSpeed.toFixed(1)}KB/s</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Alerts */}
                  {alerts.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-red-400 flex items-center">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        Performance Issues
                      </div>
                      {alerts.map((alert, index) => (
                        <div key={index} className="text-xs text-red-300 bg-red-500/10 p-2 rounded">
                          {alert}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Optimizations */}
                  {optimizations.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-cyan-400 flex items-center">
                        <Zap className="w-3 h-3 mr-1" />
                        Recommendations
                      </div>
                      {optimizations.map((optimization, index) => (
                        <div key={index} className="text-xs text-cyan-300 bg-cyan-500/10 p-2 rounded">
                          {optimization}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceMonitor;