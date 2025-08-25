import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  className?: string;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = false,
  className = '',
  onMetricsUpdate
}) => {
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
  const [performanceScore, setPerformanceScore] = useState(0);

  // Performance thresholds
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 }
  };

  // Calculate performance score
  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring
    if (metrics.fcp > thresholds.fcp.poor) score -= 25;
    else if (metrics.fcp > thresholds.fcp.good) score -= 10;
    
    // LCP scoring
    if (metrics.lcp > thresholds.lcp.poor) score -= 25;
    else if (metrics.lcp > thresholds.lcp.good) score -= 10;
    
    // FID scoring
    if (metrics.fid > thresholds.fid.poor) score -= 25;
    else if (metrics.fid > thresholds.fid.good) score -= 10;
    
    // CLS scoring
    if (metrics.cls > thresholds.cls.poor) score -= 25;
    else if (metrics.cls > thresholds.cls.good) score -= 10;
    
    return Math.max(0, score);
  }, []);

  // Get performance rating
  const getPerformanceRating = (score: number): { label: string; color: string; icon: React.ReactNode } => {
    if (score >= 90) return { label: 'Excellent', color: 'text-green-400', icon: <CheckCircle className="w-4 h-4" /> };
    if (score >= 70) return { label: 'Good', color: 'text-blue-400', icon: <TrendingUp className="w-4 h-4" /> };
    if (score >= 50) return { label: 'Fair', color: 'text-yellow-400', icon: <AlertTriangle className="w-4 h-4" /> };
    return { label: 'Poor', color: 'text-red-400', icon: <AlertTriangle className="w-4 h-4" /> };
  };

  // Get metric status
  const getMetricStatus = (metric: keyof typeof thresholds, value: number) => {
    const threshold = thresholds[metric];
    if (value <= threshold.good) return { status: 'good', color: 'text-green-400' };
    if (value <= threshold.poor) return { status: 'needs-improvement', color: 'text-yellow-400' };
    return { status: 'poor', color: 'text-red-400' };
  };

  // Format time values
  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  // Start performance monitoring
  const startMonitoring = useCallback(() => {
    if (!('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported');
      return;
    }

    setIsMonitoring(true);

    // First Contentful Paint
    try {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      }).observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('FCP monitoring failed:', e);
    }

    // Largest Contentful Paint
    try {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP monitoring failed:', e);
    }

    // First Input Delay
    try {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (entry.processingStart && entry.startTime) {
            const fid = entry.processingStart - entry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          }
        });
      }).observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID monitoring failed:', e);
    }

    // Cumulative Layout Shift
    try {
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS monitoring failed:', e);
    }

    // Navigation timing
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({
        ...prev,
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
        domLoad: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
        windowLoad: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
      }));
    }

    // DOM Content Loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        const domLoadTime = performance.now();
        setMetrics(prev => ({ ...prev, domLoad: domLoadTime }));
      });
    }

    // Window Load
    if (document.readyState === 'complete') {
      const windowLoadTime = performance.now();
      setMetrics(prev => ({ ...prev, windowLoad: windowLoadTime }));
    } else {
      window.addEventListener('load', () => {
        const windowLoadTime = performance.now();
        setMetrics(prev => ({ ...prev, windowLoad: windowLoadTime }));
      });
    }
  }, []);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Reset metrics
  const resetMetrics = useCallback(() => {
    setMetrics({
      fcp: 0,
      lcp: 0,
      fid: 0,
      cls: 0,
      ttfb: 0,
      domLoad: 0,
      windowLoad: 0
    });
    setPerformanceScore(0);
  }, []);

  // Start monitoring on mount
  useEffect(() => {
    startMonitoring();
    return () => stopMonitoring();
  }, [startMonitoring, stopMonitoring]);

  // Update performance score when metrics change
  useEffect(() => {
    const score = calculateScore(metrics);
    setPerformanceScore(score);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, calculateScore, onMetricsUpdate]);

  const rating = getPerformanceRating(performanceScore);

  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <h3 className="text-white font-medium">Performance Monitor</h3>
        </div>
        
        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium ${rating.color}`}>
            {rating.icon}
          </span>
          <span className={`text-sm font-bold ${rating.color}`}>
            {performanceScore}/100
          </span>
        </div>
      </div>

      {/* Performance Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-300">Performance Score</span>
          <span className={`font-bold ${rating.color}`}>{rating.label}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              performanceScore >= 90 ? 'bg-green-500' :
              performanceScore >= 70 ? 'bg-blue-500' :
              performanceScore >= 50 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${performanceScore}%` }}
          ></div>
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="space-y-3 mb-4">
        <h4 className="text-sm font-medium text-gray-300">Core Web Vitals</h4>
        
        {/* FCP */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">FCP</span>
          <span className={`text-xs font-mono ${
            getMetricStatus('fcp', metrics.fcp).color
          }`}>
            {formatTime(metrics.fcp)}
          </span>
        </div>

        {/* LCP */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">LCP</span>
          <span className={`text-xs font-mono ${
            getMetricStatus('lcp', metrics.lcp).color
          }`}>
            {formatTime(metrics.lcp)}
          </span>
        </div>

        {/* FID */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">FID</span>
          <span className={`text-xs font-mono ${
            getMetricStatus('fid', metrics.fid).color
          }`}>
            {formatTime(metrics.fid)}
          </span>
        </div>

        {/* CLS */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">CLS</span>
          <span className={`text-xs font-mono ${
            getMetricStatus('cls', metrics.cls).color
          }`}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
      </div>

      {/* Additional Metrics (if showDetails is true) */}
      {showDetails && (
        <div className="space-y-3 mb-4 pt-3 border-t border-gray-700/50">
          <h4 className="text-sm font-medium text-gray-300">Additional Metrics</h4>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">TTFB</span>
            <span className="text-xs font-mono text-gray-300">
              {formatTime(metrics.ttfb)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">DOM Load</span>
            <span className="text-xs font-mono text-gray-300">
              {formatTime(metrics.domLoad)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">Window Load</span>
            <span className="text-xs font-mono text-gray-300">
              {formatTime(metrics.windowLoad)}
            </span>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex gap-2 pt-3 border-t border-gray-700/50">
        <button
          onClick={isMonitoring ? stopMonitoring : startMonitoring}
          className={`flex-1 px-3 py-2 text-xs rounded-md transition-colors ${
            isMonitoring
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isMonitoring ? 'Stop' : 'Start'} Monitoring
        </button>
        
        <button
          onClick={resetMetrics}
          className="px-3 py-2 text-xs bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Status Indicator */}
      <div className="mt-3 text-center">
        <div className={`inline-flex items-center gap-1 text-xs ${
          isMonitoring ? 'text-green-400' : 'text-gray-400'
        }`}>
          <div className={`w-2 h-2 rounded-full ${
            isMonitoring ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
          }`}></div>
          {isMonitoring ? 'Monitoring Active' : 'Monitoring Stopped'}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;