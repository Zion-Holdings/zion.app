import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  X,
  Info,
  BarChart3,
  Gauge,
  Target,
  AlertCircle
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
}

interface PerformanceScore {
  overall: number;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceMonitorProps {
  onPerformanceChange?: (metrics: PerformanceMetrics) => void;
  showPanel?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onPerformanceChange,
  showPanel = false
}) => {
  const [isVisible, setIsVisible] = useState(showPanel);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: 0,
    windowLoad: 0
  });
  const [score, setScore] = useState<PerformanceScore>({
    overall: 0,
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [optimizationTips, setOptimizationTips] = useState<string[]>([]);

  // Calculate performance scores based on metrics
  const calculateScore = useCallback((metrics: PerformanceMetrics): PerformanceScore => {
    const fcpScore = Math.max(0, 100 - Math.floor(metrics.fcp / 10));
    const lcpScore = Math.max(0, 100 - Math.floor(metrics.lcp / 100));
    const fidScore = Math.max(0, 100 - Math.floor(metrics.fid / 10));
    const clsScore = Math.max(0, 100 - Math.floor(metrics.cls * 1000));
    const ttfbScore = Math.max(0, 100 - Math.floor(metrics.ttfb / 100));

    const overall = Math.round((fcpScore + lcpScore + fidScore + clsScore + ttfbScore) / 5);

    return {
      overall,
      fcp: fcpScore,
      lcp: lcpScore,
      fid: fidScore,
      cls: clsScore,
      ttfb: ttfbScore
    };
  }, []);

  // Generate optimization tips based on performance metrics
  const generateOptimizationTips = useCallback((metrics: PerformanceMetrics): string[] => {
    const tips: string[] = [];

    if (metrics.fcp > 1800) {
      tips.push('Optimize critical rendering path and reduce render-blocking resources');
    }
    if (metrics.lcp > 2500) {
      tips.push('Optimize images and implement lazy loading for better LCP');
    }
    if (metrics.fid > 100) {
      tips.push('Reduce JavaScript execution time and optimize event handlers');
    }
    if (metrics.cls > 0.1) {
      tips.push('Avoid layout shifts by setting explicit dimensions for images and ads');
    }
    if (metrics.ttfb > 600) {
      tips.push('Optimize server response time and implement caching strategies');
    }

    if (tips.length === 0) {
      tips.push('Great performance! Keep monitoring for any regressions');
    }

    return tips;
  }, []);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if (!('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported');
      return;
    }

    // First Contentful Paint
    try {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, fcp: lastEntry.startTime }));
        }
      }).observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('FCP monitoring failed:', e);
    }

    // Largest Contentful Paint
    try {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP monitoring failed:', e);
    }

    // First Input Delay
    try {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          if (entry.processingStart > 0) {
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
      new PerformanceObserver((entryList) => {
        let clsValue = 0;
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      }).observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS monitoring failed:', e);
    }
  }, []);

  // Monitor additional performance metrics
  const monitorAdditionalMetrics = useCallback(() => {
    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // DOM Content Loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        const domLoadTime = performance.now();
        setMetrics(prev => ({ ...prev, domLoad: domLoadTime }));
      });
    } else {
      setMetrics(prev => ({ ...prev, domLoad: performance.now() }));
    }

    // Window Load
    if (document.readyState === 'complete') {
      setMetrics(prev => ({ ...prev, windowLoad: performance.now() }));
    } else {
      window.addEventListener('load', () => {
        const windowLoadTime = performance.now();
        setMetrics(prev => ({ ...prev, windowLoad: windowLoadTime }));
      });
    }
  }, []);

  // Start performance monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    monitorCoreWebVitals();
    monitorAdditionalMetrics();
  }, [monitorCoreWebVitals, monitorAdditionalMetrics]);

  // Stop performance monitoring
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
    setScore({
      overall: 0,
      fcp: 0,
      lcp: 0,
      fid: 0,
      cls: 0,
      ttfb: 0
    });
    setOptimizationTips([]);
  }, []);

  // Update scores and tips when metrics change
  useEffect(() => {
    const newScore = calculateScore(metrics);
    setScore(newScore);
    setOptimizationTips(generateOptimizationTips(metrics));
    
    if (onPerformanceChange) {
      onPerformanceChange(metrics);
    }
  }, [metrics, calculateScore, generateOptimizationTips, onPerformanceChange]);

  // Start monitoring on mount
  useEffect(() => {
    startMonitoring();
    return () => stopMonitoring();
  }, [startMonitoring, stopMonitoring]);

  // Get performance status color
  const getStatusColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  // Get performance status icon
  const getStatusIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return <AlertCircle className="w-5 h-5 text-red-400" />;
  };

  return (
    <>
      {/* Performance Monitor Toggle Button */}
      <motion.button
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
        onClick={() => setIsVisible(!isVisible)}
        aria-label="Toggle performance monitor"
        aria-expanded={isVisible}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Activity className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 left-6 z-40 w-96 bg-black/90 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl"
            role="dialog"
            aria-labelledby="performance-panel-title"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 id="performance-panel-title" className="text-xl font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                Performance Monitor
              </h2>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close performance monitor"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overall Performance Score */}
            <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">Overall Score</span>
                {getStatusIcon(score.overall)}
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-white">{score.overall}</div>
                <div className="text-sm text-gray-400">out of 100</div>
              </div>
              <div className="mt-2">
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      score.overall >= 90 ? 'bg-green-500' : 
                      score.overall >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${score.overall}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-400" />
                Core Web Vitals
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">First Contentful Paint</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${getStatusColor(score.fcp)}`}>
                      {metrics.fcp > 0 ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
                    </span>
                    <span className="text-xs text-gray-400">({score.fcp}/100)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Largest Contentful Paint</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${getStatusColor(score.lcp)}`}>
                      {metrics.lcp > 0 ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                    </span>
                    <span className="text-xs text-gray-400">({score.lcp}/100)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">First Input Delay</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${getStatusColor(score.fid)}`}>
                      {metrics.fid > 0 ? `${Math.round(metrics.fid)}ms` : 'N/A'}
                    </span>
                    <span className="text-xs text-gray-400">({score.fid}/100)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Cumulative Layout Shift</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${getStatusColor(score.cls)}`}>
                      {metrics.cls > 0 ? metrics.cls.toFixed(3) : 'N/A'}
                    </span>
                    <span className="text-xs text-gray-400">({score.cls}/100)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Gauge className="w-4 h-4 text-green-400" />
                Additional Metrics
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Time to First Byte</span>
                  <span className="text-sm text-white">
                    {metrics.ttfb > 0 ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">DOM Load</span>
                  <span className="text-sm text-white">
                    {metrics.domLoad > 0 ? `${Math.round(metrics.domLoad)}ms` : 'N/A'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Window Load</span>
                  <span className="text-sm text-white">
                    {metrics.windowLoad > 0 ? `${Math.round(metrics.windowLoad)}ms` : 'N/A'}
                  </span>
                </div>
              </div>
            </div>

            {/* Optimization Tips */}
            {optimizationTips.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Info className="w-4 h-4 text-yellow-400" />
                  Optimization Tips
                </h3>
                <div className="space-y-2">
                  {optimizationTips.map((tip, index) => (
                    <div key={index} className="text-sm text-gray-300 bg-white/5 rounded-lg p-3">
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Control Buttons */}
            <div className="flex gap-3">
              <button
                onClick={isMonitoring ? stopMonitoring : startMonitoring}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black ${
                  isMonitoring 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
                aria-label={isMonitoring ? 'Stop monitoring' : 'Start monitoring'}
              >
                {isMonitoring ? 'Stop' : 'Start'} Monitoring
              </button>
              <button
                onClick={resetMetrics}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Reset performance metrics"
              >
                Reset
              </button>
            </div>

            {/* Monitoring Status */}
            <div className="mt-4 text-center">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${
                isMonitoring 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`} />
                {isMonitoring ? 'Monitoring Active' : 'Monitoring Stopped'}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Performance score: {score.overall} out of 100
      </div>
    </>
  );
};

export default PerformanceMonitor;