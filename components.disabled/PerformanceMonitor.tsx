import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, AlertTriangle, CheckCircle, TrendingUp, TrendingDown, Info } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  timestamp: number;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = true,
  autoRefresh = true,
  refreshInterval = 5000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    timestamp: Date.now()
  });
  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  // Performance thresholds based on Core Web Vitals
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 }
  };

  // Calculate performance score
  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    let deductions = 0;

    if (metrics.fcp && metrics.fcp > thresholds.fcp.good) {
      deductions += Math.min(20, (metrics.fcp - thresholds.fcp.good) / 100);
    }
    if (metrics.lcp && metrics.lcp > thresholds.lcp.good) {
      deductions += Math.min(20, (metrics.lcp - thresholds.lcp.good) / 100);
    }
    if (metrics.fid && metrics.fid > thresholds.fid.good) {
      deductions += Math.min(20, (metrics.fid - thresholds.fid.good) / 10);
    }
    if (metrics.cls && metrics.cls > thresholds.cls.good) {
      deductions += Math.min(20, (metrics.cls - thresholds.cls.good) * 100);
    }

    return Math.max(0, score - deductions);
  }, []);

  // Generate performance recommendations
  const generateRecommendations = useCallback((metrics: PerformanceMetrics): string[] => {
    const recs: string[] = [];

    if (metrics.fcp && metrics.fcp > thresholds.fcp.good) {
      recs.push('Optimize First Contentful Paint: Minimize render-blocking resources');
    }
    if (metrics.lcp && metrics.lcp > thresholds.lcp.good) {
      recs.push('Improve Largest Contentful Paint: Optimize images and critical resources');
    }
    if (metrics.fid && metrics.fid > thresholds.fid.good) {
      recs.push('Reduce First Input Delay: Break up long tasks and optimize JavaScript');
    }
    if (metrics.cls && metrics.cls > thresholds.cls.good) {
      recs.push('Minimize Cumulative Layout Shift: Set explicit dimensions for media');
    }

    if (recs.length === 0) {
      recs.push('Excellent performance! Keep up the good work.');
    }

    return recs;
  }, []);

  // Get performance rating
  const getRating = (score: number): { label: string; color: string; icon: React.ReactNode } => {
    if (score >= 90) {
      return { label: 'Excellent', color: 'text-green-400', icon: <CheckCircle className="w-5 h-5" /> };
    } else if (score >= 70) {
      return { label: 'Good', color: 'text-yellow-400', icon: <TrendingUp className="w-5 h-5" /> };
    } else if (score >= 50) {
      return { label: 'Fair', color: 'text-orange-400', icon: <AlertTriangle className="w-5 h-5" /> };
    } else {
      return { label: 'Poor', color: 'text-red-400', icon: <TrendingDown className="w-5 h-5" /> };
    }
  };

  // Get metric status
  const getMetricStatus = (value: number | null, threshold: { good: number; poor: number }): { status: string; color: string } => {
    if (!value) return { status: 'Unknown', color: 'text-gray-400' };
    
    if (value <= threshold.good) {
      return { status: 'Good', color: 'text-green-400' };
    } else if (value <= threshold.poor) {
      return { status: 'Needs Improvement', color: 'text-yellow-400' };
    } else {
      return { status: 'Poor', color: 'text-red-400' };
    }
  };

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          } else if (entry.entryType === 'layout-shift') {
            const cls = (entry as any).value;
            setMetrics(prev => ({ ...prev, cls }));
          }
        });
      });

      // Observe different performance entry types
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // Measure FMP (First Meaningful Paint approximation)
      const paintEntries = performance.getEntriesByType('paint');
      const fmpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fmpEntry) {
        setMetrics(prev => ({ ...prev, fmp: fmpEntry.startTime }));
      }

      return () => observer.disconnect();
    }
  }, []);

  // Refresh metrics
  const refreshMetrics = useCallback(() => {
    setMetrics(prev => ({ ...prev, timestamp: Date.now() }));
    measurePerformance();
  }, [measurePerformance]);

  // Auto-refresh effect
  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(refreshMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval, refreshMetrics]);

  // Initial measurement
  useEffect(() => {
    measurePerformance();
  }, [measurePerformance]);

  // Update score and recommendations when metrics change
  useEffect(() => {
    const score = calculateScore(metrics);
    setPerformanceScore(score);
    setRecommendations(generateRecommendations(metrics));
  }, [metrics, calculateScore, generateRecommendations]);

  // Toggle visibility
  const toggleVisibility = () => setIsVisible(!isVisible);

  const rating = getRating(performanceScore);

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        onClick={toggleVisibility}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-6 right-6 z-40 w-96 max-h-[80vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Performance Monitor</h3>
                </div>
                <button
                  onClick={toggleVisibility}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Overall Score */}
              <div className="mb-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Overall Score</span>
                  <div className={`flex items-center space-x-2 ${rating.color}`}>
                    {rating.icon}
                    <span className="font-semibold">{rating.label}</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <motion.div
                      className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${performanceScore}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <span className="absolute right-0 top-4 text-2xl font-bold text-white">
                    {Math.round(performanceScore)}
                  </span>
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>Core Web Vitals</span>
                </h4>
                <div className="space-y-3">
                  {/* FCP */}
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-400">First Contentful Paint</div>
                      <div className="text-white font-mono">
                        {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Measuring...'}
                      </div>
                    </div>
                    <div className={`text-sm ${getMetricStatus(metrics.fcp, thresholds.fcp).color}`}>
                      {getMetricStatus(metrics.fcp, thresholds.fcp).status}
                    </div>
                  </div>

                  {/* LCP */}
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-400">Largest Contentful Paint</div>
                      <div className="text-white font-mono">
                        {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Measuring...'}
                      </div>
                    </div>
                    <div className={`text-sm ${getMetricStatus(metrics.lcp, thresholds.lcp).color}`}>
                      {getMetricStatus(metrics.lcp, thresholds.lcp).status}
                    </div>
                  </div>

                  {/* FID */}
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-400">First Input Delay</div>
                      <div className="text-white font-mono">
                        {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Measuring...'}
                      </div>
                    </div>
                    <div className={`text-sm ${getMetricStatus(metrics.fid, thresholds.fid).color}`}>
                      {getMetricStatus(metrics.fid, thresholds.fid).status}
                    </div>
                  </div>

                  {/* CLS */}
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-400">Cumulative Layout Shift</div>
                      <div className="text-white font-mono">
                        {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}
                      </div>
                    </div>
                    <div className={`text-sm ${getMetricStatus(metrics.cls, thresholds.cls).color}`}>
                      {getMetricStatus(metrics.cls, thresholds.cls).status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              {showDetails && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Info className="w-5 h-5 text-green-400" />
                    <span>Additional Metrics</span>
                  </h4>
                  <div className="space-y-3">
                    {/* TTFB */}
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-400">Time to First Byte</div>
                        <div className="text-white font-mono">
                          {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Measuring...'}
                        </div>
                      </div>
                    </div>

                    {/* FMP */}
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-400">First Meaningful Paint</div>
                        <div className="text-white font-mono">
                          {metrics.fmp ? `${Math.round(metrics.fmp)}ms` : 'Measuring...'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Recommendations */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <span>Recommendations</span>
                </h4>
                <div className="space-y-2">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="p-3 bg-slate-800/50 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-sm text-gray-300">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button
                  onClick={refreshMetrics}
                  className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Activity className="w-4 h-4" />
                  <span>Refresh</span>
                </button>
                <button
                  onClick={() => {
                    // Copy performance data to clipboard
                    const data = JSON.stringify(metrics, null, 2);
                    navigator.clipboard.writeText(data);
                  }}
                  className="bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors"
                >
                  Copy
                </button>
              </div>

              {/* Last Updated */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Last updated: {new Date(metrics.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;