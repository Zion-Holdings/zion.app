import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Clock, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  Info,
  X,
  Settings,
  BarChart3,
  Gauge,
  Wifi,
  Smartphone
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

interface PerformanceMonitorProps {
  showUI?: boolean;
  autoHide?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

// Type definitions for Performance API
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: EventTarget;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showUI = false,
  autoHide = true,
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 600
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(showUI);
  const [isExpanded, setIsExpanded] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [connectionInfo, setConnectionInfo] = useState<any>(null);
  const [deviceInfo, setDeviceInfo] = useState<any>(null);

  // Get connection information
  const getConnectionInfo = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      return {
        effectiveType: connection.effectiveType || 'unknown',
        downlink: connection.downlink || 'unknown',
        rtt: connection.rtt || 'unknown',
        saveData: connection.saveData || false
      };
    }
    return null;
  }, []);

  // Get device information
  const getDeviceInfo = useCallback(() => {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      memory: (performance as any).memory ? {
        usedJSHeapSize: Math.round((performance as any).memory.usedJSHeapSize / 1048576),
        totalJSHeapSize: Math.round((performance as any).memory.totalJSHeapSize / 1048576),
        jsHeapSizeLimit: Math.round((performance as any).memory.jsHeapSizeLimit / 1048576)
      } : null
    };
  }, []);

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    try {
      // Wait for performance metrics to be available
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
            }
          });
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Measure First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'first-contentful-paint') {
              setMetrics(prev => prev ? { ...prev, fcp: entry.startTime } : null);
            }
          });
        });
        
        observer.observe({ entryTypes: ['first-contentful-paint'] });
      }

      // Measure First Input Delay
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'first-input') {
              const eventEntry = entry as PerformanceEventTiming;
              setMetrics(prev => prev ? { ...prev, fid: eventEntry.processingStart - eventEntry.startTime } : null);
            }
          });
        });
        
        observer.observe({ entryTypes: ['first-input'] });
      }

      // Measure Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'layout-shift') {
              const layoutEntry = entry as LayoutShiftEntry;
              if (!layoutEntry.hadRecentInput) {
                clsValue += layoutEntry.value;
              }
            }
          });
          setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
        });
        
        observer.observe({ entryTypes: ['layout-shift'] });
      }

      // Measure Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => prev ? { ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart } : null);
      }

      // Measure DOM and Window load times
      const domLoad = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
      const windowLoad = performance.timing.loadEventEnd - performance.timing.navigationStart;
      
      setMetrics(prev => prev ? { ...prev, domLoad, windowLoad } : {
        fcp: 0,
        lcp: 0,
        fid: 0,
        cls: 0,
        ttfb: 0,
        domLoad,
        windowLoad
      });

    } catch (error) {
      console.error('Error measuring performance:', error);
      setErrors(prev => [...prev, 'Failed to measure performance metrics']);
    }
  }, []);

  // Analyze performance and generate warnings
  const analyzePerformance = useCallback((metrics: PerformanceMetrics) => {
    const newWarnings: string[] = [];
    const newErrors: string[] = [];

    if (metrics.fcp > threshold.fcp) {
      newWarnings.push(`FCP (${Math.round(metrics.fcp)}ms) is above recommended threshold (${threshold.fcp}ms)`);
    }
    if (metrics.lcp > threshold.lcp) {
      newWarnings.push(`LCP (${Math.round(metrics.lcp)}ms) is above recommended threshold (${threshold.lcp}ms)`);
    }
    if (metrics.fid > threshold.fid) {
      newWarnings.push(`FID (${Math.round(metrics.fid)}ms) is above recommended threshold (${threshold.fid}ms)`);
    }
    if (metrics.cls > threshold.cls) {
      newWarnings.push(`CLS (${metrics.cls.toFixed(3)}) is above recommended threshold (${threshold.cls})`);
    }
    if (metrics.ttfb > threshold.ttfb) {
      newWarnings.push(`TTFB (${Math.round(metrics.ttfb)}ms) is above recommended threshold (${threshold.ttfb}ms)`);
    }

    setWarnings(newWarnings);
    setErrors(newErrors);
  }, [threshold]);

  // Initialize monitoring
  useEffect(() => {
    // Get initial device and connection info
    setConnectionInfo(getConnectionInfo());
    setDeviceInfo(getDeviceInfo());

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [measurePerformance, getConnectionInfo, getDeviceInfo]);

  // Analyze performance when metrics change
  useEffect(() => {
    if (metrics) {
      analyzePerformance(metrics);
    }
  }, [metrics, analyzePerformance]);

  // Auto-hide after 5 seconds
  useEffect(() => {
    if (autoHide && showUI) {
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [autoHide, showUI]);

  // Get performance grade
  const getPerformanceGrade = (metrics: PerformanceMetrics) => {
    let score = 100;
    
    if (metrics.fcp > threshold.fcp) score -= 20;
    if (metrics.lcp > threshold.lcp) score -= 25;
    if (metrics.fid > threshold.fid) score -= 20;
    if (metrics.cls > threshold.cls) score -= 20;
    if (metrics.ttfb > threshold.ttfb) score -= 15;
    
    if (score >= 90) return { grade: 'A', color: 'text-green-400', bgColor: 'bg-green-500/20' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-400', bgColor: 'bg-orange-500/20' };
    return { grade: 'D', color: 'text-red-400', bgColor: 'bg-red-500/20' };
  };

  if (!isVisible) return null;

  const performanceGrade = metrics ? getPerformanceGrade(metrics) : null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="fixed bottom-4 right-4 z-50 max-w-sm w-full"
        role="status"
        aria-label="Performance monitoring dashboard"
      >
        <div className="bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-cyan-400" aria-hidden="true" />
              <span className="font-semibold text-white">Performance Monitor</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
                aria-label={isExpanded ? "Collapse performance details" : "Expand performance details"}
              >
                <Settings className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
                aria-label="Close performance monitor"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Performance Grade */}
          {performanceGrade && (
            <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Performance Grade:</span>
                <div className={`px-3 py-1 rounded-full ${performanceGrade.bgColor}`}>
                  <span className={`text-lg font-bold ${performanceGrade.color}`}>
                    {performanceGrade.grade}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Key Metrics */}
          {metrics && (
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400">
                    {Math.round(metrics.fcp)}
                  </div>
                  <div className="text-xs text-gray-400">FCP (ms)</div>
                  <div className={`text-xs ${metrics.fcp > threshold.fcp ? 'text-yellow-400' : 'text-green-400'}`}>
                    {metrics.fcp > threshold.fcp ? '⚠️ Slow' : '✅ Good'}
                  </div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">
                    {Math.round(metrics.lcp)}
                  </div>
                  <div className="text-xs text-gray-400">LCP (ms)</div>
                  <div className={`text-xs ${metrics.lcp > threshold.lcp ? 'text-yellow-400' : 'text-green-400'}`}>
                    {metrics.lcp > threshold.lcp ? '⚠️ Slow' : '✅ Good'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Expanded View */}
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-cyan-500/20"
            >
              {/* Detailed Metrics */}
              {metrics && (
                <div className="p-4 space-y-3">
                  <h4 className="text-sm font-semibold text-white mb-3">Detailed Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">FID:</span>
                      <span className="text-white">{Math.round(metrics.fid)}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">CLS:</span>
                      <span className="text-white">{metrics.cls.toFixed(3)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">TTFB:</span>
                      <span className="text-white">{Math.round(metrics.ttfb)}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">DOM Load:</span>
                      <span className="text-white">{Math.round(metrics.domLoad)}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Window Load:</span>
                      <span className="text-white">{Math.round(metrics.windowLoad)}ms</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Connection Info */}
              {connectionInfo && (
                <div className="p-4 border-t border-cyan-500/20">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                    <Wifi className="w-4 h-4 mr-2 text-cyan-400" aria-hidden="true" />
                    Connection
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Type:</span>
                      <span className="text-white">{connectionInfo.effectiveType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Speed:</span>
                      <span className="text-white">{connectionInfo.downlink} Mbps</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">RTT:</span>
                      <span className="text-white">{connectionInfo.rtt}ms</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Device Info */}
              {deviceInfo && (
                <div className="p-4 border-t border-cyan-500/20">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                    <Smartphone className="w-4 h-4 mr-2 text-cyan-400" aria-hidden="true" />
                    Device
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Platform:</span>
                      <span className="text-white">{deviceInfo.platform}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Language:</span>
                      <span className="text-white">{deviceInfo.language}</span>
                    </div>
                    {deviceInfo.memory && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Memory:</span>
                        <span className="text-white">{deviceInfo.memory.usedJSHeapSize}MB / {deviceInfo.memory.totalJSHeapSize}MB</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Warnings and Errors */}
              {(warnings.length > 0 || errors.length > 0) && (
                <div className="p-4 border-t border-cyan-500/20">
                  <h4 className="text-sm font-semibold text-white mb-3">Issues</h4>
                  <div className="space-y-2">
                    {warnings.map((warning, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-yellow-400">{warning}</span>
                      </div>
                    ))}
                    {errors.map((error, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-red-400">{error}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Quick Actions */}
          <div className="p-4 border-t border-cyan-500/20">
            <div className="flex space-x-2">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 px-3 py-2 text-xs bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                aria-label="Refresh page to measure performance"
              >
                <Zap className="w-3 h-3 inline mr-1" aria-hidden="true" />
                Refresh
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex-1 px-3 py-2 text-xs bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                aria-label={isExpanded ? "Show less details" : "Show more details"}
              >
                <BarChart3 className="w-3 h-3 inline mr-1" aria-hidden="true" />
                {isExpanded ? 'Less' : 'More'}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceMonitor;