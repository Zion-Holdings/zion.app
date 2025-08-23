import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  autoHide?: boolean;
  hideDelay?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  autoHide = true,
  hideDelay = 5000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null
  });
  const [isVisible, setIsVisible] = useState(showMetrics);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [issues, setIssues] = useState<string[]>([]);

  // Performance thresholds
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  };

  // Calculate performance score
  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    let totalWeight = 0;

    if (metrics.fcp) {
      const weight = 0.25;
      totalWeight += weight;
      if (metrics.fcp > thresholds.fcp.poor) score -= weight * 100;
      else if (metrics.fcp > thresholds.fcp.good) score -= weight * 50;
    }

    if (metrics.lcp) {
      const weight = 0.25;
      totalWeight += weight;
      if (metrics.lcp > thresholds.lcp.poor) score -= weight * 100;
      else if (metrics.lcp > thresholds.lcp.good) score -= weight * 50;
    }

    if (metrics.fid) {
      const weight = 0.25;
      totalWeight += weight;
      if (metrics.fid > thresholds.fid.poor) score -= weight * 100;
      else if (metrics.fid > thresholds.fid.good) score -= weight * 50;
    }

    if (metrics.cls) {
      const weight = 0.25;
      totalWeight += weight;
      if (metrics.cls > thresholds.cls.poor) score -= weight * 100;
      else if (metrics.cls > thresholds.cls.good) score -= weight * 50;
    }

    return Math.max(0, Math.round(score / totalWeight));
  }, []);

  // Analyze performance issues
  const analyzeIssues = useCallback((metrics: PerformanceMetrics): string[] => {
    const issues: string[] = [];

    if (metrics.fcp && metrics.fcp > thresholds.fcp.poor) {
      issues.push('First Contentful Paint is too slow');
    }
    if (metrics.lcp && metrics.lcp > thresholds.lcp.poor) {
      issues.push('Largest Contentful Paint is too slow');
    }
    if (metrics.fid && metrics.fid > thresholds.fid.poor) {
      issues.push('First Input Delay is too high');
    }
    if (metrics.cls && metrics.cls > thresholds.cls.poor) {
      issues.push('Cumulative Layout Shift is too high');
    }
    if (metrics.ttfb && metrics.ttfb > thresholds.ttfb.poor) {
      issues.push('Time to First Byte is too slow');
    }

    return issues;
  }, []);

  // Get metric status
  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number | null) => {
    if (!value) return 'unknown';
    const threshold = thresholds[metric];
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'warning';
    return 'poor';
  };

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'poor':
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default:
        return <Info className="w-4 h-4 text-gray-400" />;
    }
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'poor':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  // Measure performance metrics
  useEffect(() => {
    const measurePerformance = () => {
      // Wait for page to fully load
      if (document.readyState === 'complete') {
        setTimeout(() => {
          const newMetrics: PerformanceMetrics = {
            fcp: null,
            lcp: null,
            fid: null,
            cls: null,
            ttfb: null,
            loadTime: null
          };

          // Measure FCP (First Contentful Paint)
          const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
          if (fcpEntry) {
            newMetrics.fcp = Math.round(fcpEntry.startTime);
          }

          // Measure TTFB (Time to First Byte)
          const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigationEntry) {
            newMetrics.ttfb = Math.round(navigationEntry.responseStart - navigationEntry.requestStart);
            newMetrics.loadTime = Math.round(navigationEntry.loadEventEnd - navigationEntry.loadEventStart);
          }

          // Measure CLS (Cumulative Layout Shift)
          if ('PerformanceObserver' in window) {
            let clsValue = 0;
            const observer = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (entry.entryType === 'layout-shift') {
                  const layoutShiftEntry = entry as any;
                  if (!layoutShiftEntry.hadRecentInput) {
                    clsValue += layoutShiftEntry.value;
                  }
                }
              }
            });
            observer.observe({ entryTypes: ['layout-shift'] });
            newMetrics.cls = Math.round(clsValue * 1000) / 1000;
          }

          setMetrics(newMetrics);
        }, 1000);
      } else {
        window.addEventListener('load', measurePerformance);
        return () => window.removeEventListener('load', measurePerformance);
      }
    };

    measurePerformance();
  }, []);

  // Update performance score and issues when metrics change
  useEffect(() => {
    const score = calculateScore(metrics);
    setPerformanceScore(score);
    setIssues(analyzeIssues(metrics));
  }, [metrics, calculateScore, analyzeIssues]);

  // Auto-hide after delay
  useEffect(() => {
    if (autoHide && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, hideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, isVisible, hideDelay]);

  // Toggle visibility
  const toggleVisibility = () => setIsVisible(!isVisible);

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full shadow-lg hover:bg-gray-700/80 transition-all duration-300 z-50 group"
        title="Show Performance Metrics"
      >
        <Activity className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
      </button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="fixed bottom-4 right-4 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl z-50 max-w-sm w-80"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <h3 className="text-sm font-medium text-white">Performance Monitor</h3>
        </div>
        <button
          onClick={toggleVisibility}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Performance Score */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-300">Performance Score</span>
          <span className={`text-lg font-bold ${
            performanceScore >= 90 ? 'text-green-400' :
            performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {performanceScore}/100
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              performanceScore >= 90 ? 'bg-green-400' :
              performanceScore >= 70 ? 'bg-yellow-400' : 'bg-red-400'
            }`}
            style={{ width: `${performanceScore}%` }}
          />
        </div>
      </div>

      {/* Metrics */}
      <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
        {Object.entries(metrics).map(([key, value]) => {
          if (value === null) return null;
          const status = getMetricStatus(key as keyof PerformanceMetrics, value);
          const label = key.toUpperCase();
          const unit = key === 'cls' ? '' : 'ms';
          
          return (
            <div key={key} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getStatusIcon(status)}
                <span className="text-sm text-gray-300">{label}</span>
              </div>
              <span className={`text-sm font-medium ${getStatusColor(status)}`}>
                {value}{unit}
              </span>
            </div>
          );
        })}
      </div>

      {/* Issues */}
      {issues.length > 0 && (
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Performance Issues</span>
          </div>
          <ul className="space-y-1">
            {issues.map((issue, index) => (
              <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0" />
                {issue}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer */}
      <div className="p-3 bg-gray-800/50 rounded-b-xl">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Core Web Vitals</span>
          <span>Real-time monitoring</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;