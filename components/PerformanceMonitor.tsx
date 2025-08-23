import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, AlertTriangle, 
  CheckCircle, XCircle, Info, BarChart3, Gauge
} from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
  fmp: number;
  tti: number;
}

interface PerformanceMonitorProps {
  showUI?: boolean;
  autoHide?: boolean;
  threshold?: {
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

// Type definitions for PerformanceObserver entries
interface FirstInputEntry extends PerformanceEntry {
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
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 800
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
    fmp: 0,
    tti: 0
  });
  const [isVisible, setIsVisible] = useState(showUI);
  const [alerts, setAlerts] = useState<string[]>([]);
  const [overallScore, setOverallScore] = useState(0);

  const calculateScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;
    
    // LCP scoring (0-2500ms, lower is better)
    if (metrics.lcp > threshold.lcp) {
      score -= Math.min(30, (metrics.lcp - threshold.lcp) / 100);
    }
    
    // FID scoring (0-100ms, lower is better)
    if (metrics.fid > threshold.fid) {
      score -= Math.min(25, (metrics.fid - threshold.fid) / 10);
    }
    
    // CLS scoring (0-0.1, lower is better)
    if (metrics.cls > threshold.cls) {
      score -= Math.min(25, (metrics.cls / threshold.cls) * 25);
    }
    
    // TTFB scoring (0-800ms, lower is better)
    if (metrics.ttfb > threshold.ttfb) {
      score -= Math.min(20, (metrics.ttfb - threshold.ttfb) / 100);
    }
    
    return Math.max(0, Math.round(score));
  }, [threshold]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return <XCircle className="w-5 h-5 text-red-400" />;
  };

  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number) => {
    const thresholds = {
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 800, needsImprovement: 1800 }
    };
    
    const threshold = thresholds[metric];
    if (!threshold) return 'unknown';
    
    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getMetricColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getMetricIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <XCircle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Core Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        }
        if (entry.entryType === 'first-input') {
          const firstInputEntry = entry as FirstInputEntry;
          setMetrics(prev => ({ ...prev, fid: firstInputEntry.processingStart - firstInputEntry.startTime }));
        }
        if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          setMetrics(prev => ({ ...prev, cls: layoutShiftEntry.value }));
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Navigation timing
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({
        ...prev,
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
        fcp: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
        fmp: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
        tti: navigationEntry.domInteractive - navigationEntry.domContentLoadedEventStart
      }));
    }

    // Paint timing
    const paintObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });

    paintObserver.observe({ entryTypes: ['paint'] });

    // Resource timing
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.initiatorType === 'img' && resourceEntry.duration > 1000) {
            setAlerts(prev => [...prev, `Slow image load: ${resourceEntry.name}`]);
          }
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    // Long tasks monitoring
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'longtask' && entry.duration > 50) {
          setAlerts(prev => [...prev, `Long task detected: ${Math.round(entry.duration)}ms`]);
        }
      }
    });

    longTaskObserver.observe({ entryTypes: ['longtask'] });

    return () => {
      observer.disconnect();
      paintObserver.disconnect();
      resourceObserver.disconnect();
      longTaskObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const score = calculateScore(metrics);
    setOverallScore(score);
    
    // Generate alerts for poor performance
    const newAlerts: string[] = [];
    
    if (metrics.lcp > threshold.lcp) {
      newAlerts.push(`LCP is ${Math.round(metrics.lcp)}ms (should be < ${threshold.lcp}ms)`);
    }
    if (metrics.fid > threshold.fid) {
      newAlerts.push(`FID is ${Math.round(metrics.fid)}ms (should be < ${threshold.fid}ms)`);
    }
    if (metrics.cls > threshold.cls) {
      newAlerts.push(`CLS is ${metrics.cls.toFixed(3)} (should be < ${threshold.cls})`);
    }
    if (metrics.ttfb > threshold.ttfb) {
      newAlerts.push(`TTFB is ${Math.round(metrics.ttfb)}ms (should be < ${threshold.ttfb}ms)`);
    }
    
    setAlerts(newAlerts);
  }, [metrics, threshold, calculateScore]);

  useEffect(() => {
    if (autoHide && showUI) {
      const timer = setTimeout(() => setIsVisible(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [autoHide, showUI]);

  if (!showUI) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm w-full"
        >
          <div className="bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold text-white">Performance Monitor</span>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <XCircle className="w-4 h-4" />
              </button>
            </div>

            {/* Overall Score */}
            <div className="p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Overall Score</span>
                {getScoreIcon(overallScore)}
              </div>
              <div className="flex items-center space-x-3">
                <div className={`text-3xl font-bold ${getScoreColor(overallScore)}`}>
                  {overallScore}
                </div>
                <div className="flex-1">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        overallScore >= 90 ? 'bg-green-500' : overallScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${overallScore}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="p-4 space-y-3">
              {Object.entries(metrics).map(([key, value]) => {
                if (key === 'fmp' || key === 'tti') return null; // Skip less important metrics
                
                const status = getMetricStatus(key as keyof PerformanceMetrics, value);
                const color = getMetricColor(status);
                const icon = getMetricIcon(status);
                
                return (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {icon}
                      <span className="text-sm text-gray-300 uppercase">{key}</span>
                    </div>
                    <div className={`text-sm font-mono ${color}`}>
                      {key === 'cls' ? value.toFixed(3) : `${Math.round(value)}ms`}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="p-4 border-t border-white/10 bg-red-500/10">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-medium text-red-400">Performance Issues</span>
                </div>
                <div className="space-y-1">
                  {alerts.slice(0, 3).map((alert, index) => (
                    <div key={index} className="text-xs text-red-300">
                      • {alert}
                    </div>
                  ))}
                  {alerts.length > 3 && (
                    <div className="text-xs text-red-400">
                      +{alerts.length - 3} more issues
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="p-3 bg-gray-900/50 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Real-time monitoring</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PerformanceMonitor;