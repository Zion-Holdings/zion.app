import React, { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, AlertTriangle, CheckCircle, X, 
  BarChart3, Gauge, Target, Eye
} from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
  loadTime: number;
  domContentLoaded: number;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  enableRealTime?: boolean;
  threshold?: {
    lcp: number;
    fid: number;
    cls: number;
  };
}

// Type definitions for performance entries
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  target?: EventTarget;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  enableRealTime = true,
  threshold = {
    lcp: 2500,
    fid: 100,
    cls: 0.1
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
    loadTime: 0,
    domContentLoaded: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const getPerformanceScore = useCallback((lcp: number, fid: number, cls: number): number => {
    let score = 100;
    
    // LCP scoring (0-100)
    if (lcp <= 2500) score -= 0;
    else if (lcp <= 4000) score -= 10;
    else score -= 30;
    
    // FID scoring (0-100)
    if (fid <= 100) score -= 0;
    else if (fid <= 300) score -= 10;
    else score -= 30;
    
    // CLS scoring (0-100)
    if (cls <= 0.1) score -= 0;
    else if (cls <= 0.25) score -= 10;
    else score -= 30;
    
    return Math.max(0, score);
  }, []);

  const getMetricStatus = useCallback((metric: string, value: number, threshold: number): 'good' | 'needs-improvement' | 'poor' => {
    if (metric === 'cls') {
      if (value <= threshold) return 'good';
      if (value <= threshold * 2.5) return 'needs-improvement';
      return 'poor';
    } else {
      if (value <= threshold) return 'good';
      if (value <= threshold * 1.6) return 'needs-improvement';
      return 'poor';
    }
  }, []);

  const getStatusIcon = useCallback((status: 'good' | 'needs-improvement' | 'poor') => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'needs-improvement':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'poor':
        return <X className="w-5 h-5 text-red-400" />;
    }
  }, []);

  const getStatusColor = useCallback((status: 'good' | 'needs-improvement' | 'poor') => {
    switch (status) {
      case 'good':
        return 'text-green-400';
      case 'needs-improvement':
        return 'text-yellow-400';
      case 'poor':
        return 'text-red-400';
    }
  }, []);

  const trackPerformance = useCallback(() => {
    if (!('performance' in window)) return;

    // Track Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          
          if (entry.startTime > threshold.lcp) {
            setAlerts(prev => [...prev, `LCP is ${Math.round(entry.startTime)}ms (threshold: ${threshold.lcp}ms)`]);
          }
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // Track First Input Delay
    const firstInputObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'first-input') {
          const firstInputEntry = entry as FirstInputEntry;
          const fid = firstInputEntry.processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
          
          if (fid > threshold.fid) {
            setAlerts(prev => [...prev, `FID is ${Math.round(fid)}ms (threshold: ${threshold.fid}ms)`]);
          }
        }
      }
    });

    firstInputObserver.observe({ entryTypes: ['first-input'] });

    // Track Cumulative Layout Shift
    let cumulativeLayoutShift = 0;
    const layoutShiftObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          if (!layoutShiftEntry.hadRecentInput) {
            cumulativeLayoutShift += layoutShiftEntry.value;
            setMetrics(prev => ({ ...prev, cls: cumulativeLayoutShift }));
            
            if (cumulativeLayoutShift > threshold.cls) {
              setAlerts(prev => [...prev, `CLS is ${cumulativeLayoutShift.toFixed(3)} (threshold: ${threshold.cls})`]);
            }
          }
        }
      }
    });

    layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });

    // Track First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });

    fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

    // Track page load metrics
    window.addEventListener('load', () => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({
          ...prev,
          loadTime: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
          domContentLoaded: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart
        }));
      }
    });

    return () => {
      observer.disconnect();
      firstInputObserver.disconnect();
      layoutShiftObserver.disconnect();
      fcpObserver.disconnect();
    };
  }, [threshold]);

  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  useEffect(() => {
    if (enableRealTime) {
      const cleanup = trackPerformance();
      return cleanup;
    }
  }, [enableRealTime, trackPerformance]);

  useEffect(() => {
    // Auto-hide alerts after 5 seconds
    if (alerts.length > 0) {
      const timer = setTimeout(() => {
        setAlerts(prev => prev.slice(1));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  if (!showMetrics) return null;

  const performanceScore = getPerformanceScore(metrics.lcp, metrics.fid, metrics.cls);

  return (
    <>
      {/* Performance Metrics Panel */}
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-20 right-4 z-50 w-80 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl"
      >
        <div className="p-4 border-b border-gray-700/50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isVisible ? <Eye className="w-5 h-5" /> : <BarChart3 className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 space-y-4"
            >
              {/* Overall Score */}
              <div className="text-center p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg">
                <div className="text-3xl font-bold text-white mb-2">{performanceScore}</div>
                <div className="text-sm text-gray-400">Performance Score</div>
                <div className="mt-2">
                  {performanceScore >= 90 && <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />}
                  {performanceScore >= 50 && performanceScore < 90 && <AlertTriangle className="w-6 h-6 text-yellow-400 mx-auto" />}
                  {performanceScore < 50 && <X className="w-6 h-6 text-red-400 mx-auto" />}
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Core Web Vitals
                </h4>
                
                {/* LCP */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">LCP</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-mono ${getStatusColor(getMetricStatus('lcp', metrics.lcp, threshold.lcp))}`}>
                      {metrics.lcp > 0 ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                    </span>
                    {metrics.lcp > 0 && getStatusIcon(getMetricStatus('lcp', metrics.lcp, threshold.lcp))}
                  </div>
                </div>

                {/* FID */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">FID</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-mono ${getStatusColor(getMetricStatus('fid', metrics.fid, threshold.fid))}`}>
                      {metrics.fid > 0 ? `${Math.round(metrics.fid)}ms` : 'N/A'}
                    </span>
                    {metrics.fid > 0 && getStatusIcon(getMetricStatus('fid', metrics.fid, threshold.fid))}
                  </div>
                </div>

                {/* CLS */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">CLS</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-mono ${getStatusColor(getMetricStatus('cls', metrics.cls, threshold.cls))}`}>
                      {metrics.cls > 0 ? metrics.cls.toFixed(3) : 'N/A'}
                    </span>
                    {metrics.cls > 0 && getStatusIcon(getMetricStatus('cls', metrics.cls, threshold.cls))}
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <Gauge className="w-4 h-4" />
                  Additional Metrics
                </h4>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-gray-400">FCP: {metrics.fcp > 0 ? `${Math.round(metrics.fcp)}ms` : 'N/A'}</div>
                  <div className="text-gray-400">TTFB: {metrics.ttfb > 0 ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}</div>
                  <div className="text-gray-400">Load: {metrics.loadTime > 0 ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}</div>
                  <div className="text-gray-400">DOM: {metrics.domContentLoaded > 0 ? `${Math.round(metrics.domContentLoaded)}ms` : 'N/A'}</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Performance Alerts */}
      <AnimatePresence>
        {alerts.map((alert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50, x: 300 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 right-4 z-50 max-w-sm bg-red-900/95 backdrop-blur-sm border border-red-700/50 rounded-lg shadow-2xl p-4"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white mb-1">Performance Alert</h4>
                <p className="text-sm text-red-200">{alert}</p>
              </div>
              <button
                onClick={() => setAlerts(prev => prev.filter((_, i) => i !== index))}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Clear All Alerts Button */}
      {alerts.length > 0 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={clearAlerts}
          className="fixed top-4 right-4 z-40 bg-gray-800/80 hover:bg-gray-700/80 text-white px-3 py-1 rounded-lg text-sm transition-colors"
        >
          Clear All Alerts
        </motion.button>
      )}
    </>
  );
};

export default PerformanceMonitor;