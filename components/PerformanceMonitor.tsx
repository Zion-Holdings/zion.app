import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, TrendingUp, TrendingDown, Zap, 
  Clock, Gauge, BarChart3, X, RefreshCw, AlertTriangle
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
}

interface PerformanceMonitorProps {
  showUI?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showUI = false,
  autoRefresh = false,
  refreshInterval = 30000
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fmp: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [performanceScore, setPerformanceScore] = useState<number>(0);

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

  // Get performance metrics
  const getPerformanceMetrics = useCallback(async () => {
    setIsLoading(true);
    
    try {
      // Use Performance API to get metrics
      if ('performance' in window) {
        const perf = window.performance;
        
        // Get navigation timing
        const navigation = perf.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        // Get paint timing
        const paintEntries = perf.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const fmpEntry = paintEntries.find(entry => entry.name === 'first-meaningful-paint');
        
        // Get layout shift
        let cls = 0;
        if ('PerformanceObserver' in window) {
          // This would need to be set up earlier in the app lifecycle
          // For now, we'll use a placeholder
          cls = 0.05; // Placeholder value
        }
        
        const newMetrics: PerformanceMetrics = {
          fcp: fcpEntry ? fcpEntry.startTime : 0,
          lcp: 0, // Would need LCP observer
          fid: 0, // Would need FID observer
          cls: cls,
          ttfb: navigation ? navigation.responseStart - navigation.requestStart : 0,
          fmp: fmpEntry ? fmpEntry.startTime : 0
        };
        
        setMetrics(newMetrics);
        setPerformanceScore(calculateScore(newMetrics));
        setLastUpdate(new Date());
      }
    } catch (error) {
      console.error('Error getting performance metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, [calculateScore]);

  // Auto-refresh functionality
  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(getPerformanceMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval, getPerformanceMetrics]);

  // Initial load
  useEffect(() => {
    getPerformanceMetrics();
  }, [getPerformanceMetrics]);

  // Get status color based on score
  const getStatusColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  // Get metric status
  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number): {
    color: string;
    icon: React.ReactNode;
    status: string;
  } => {
    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return { color: 'text-gray-400', icon: <BarChart3 className="w-4 h-4" />, status: 'Unknown' };
    
    if (value <= threshold.good) {
      return { color: 'text-green-400', icon: <TrendingUp className="w-4 h-4" />, status: 'Good' };
    } else if (value <= threshold.poor) {
      return { color: 'text-yellow-400', icon: <AlertTriangle className="w-4 h-4" />, status: 'Needs Improvement' };
    } else {
      return { color: 'text-red-400', icon: <TrendingDown className="w-4 h-4" />, status: 'Poor' };
    }
  };

  // Format time values
  const formatTime = (ms: number): string => {
    if (ms === 0) return 'N/A';
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  if (!showUI) return null;

  return (
    <>
      {/* Floating Performance Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-200"
        title="Open Performance Dashboard"
        aria-label="Open Performance Dashboard"
      >
        <Activity className="w-6 h-6" />
      </button>

      {/* Performance Dashboard Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-4xl max-h-[90vh] bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <Activity className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-xl font-bold text-white">Performance Dashboard</h2>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={getPerformanceMetrics}
                    disabled={isLoading}
                    className="p-2 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
                    title="Refresh metrics"
                    aria-label="Refresh performance metrics"
                  >
                    <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close performance dashboard"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Overall Score */}
                <div className="mb-8">
                  <div className="text-center">
                    <div className={`text-6xl font-bold ${getStatusColor(performanceScore)} mb-2`}>
                      {performanceScore}
                    </div>
                    <div className="text-gray-400 mb-4">Performance Score</div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${
                          performanceScore >= 90 ? 'bg-green-500' :
                          performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${performanceScore}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Core Web Vitals */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Core Web Vitals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { key: 'fcp', label: 'First Contentful Paint', value: metrics.fcp, unit: 'ms' },
                      { key: 'lcp', label: 'Largest Contentful Paint', value: metrics.lcp, unit: 'ms' },
                      { key: 'fid', label: 'First Input Delay', value: metrics.fid, unit: 'ms' },
                      { key: 'cls', label: 'Cumulative Layout Shift', value: metrics.cls, unit: '' }
                    ].map((metric) => {
                      const status = getMetricStatus(metric.key as keyof PerformanceMetrics, metric.value);
                      return (
                        <div key={metric.key} className="bg-gray-800 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-300 text-sm">{metric.label}</span>
                            <div className={`flex items-center space-x-1 ${status.color}`}>
                              {status.icon}
                              <span className="text-xs">{status.status}</span>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-white">
                            {metric.key === 'cls' ? metrics.cls.toFixed(3) : formatTime(metric.value)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Additional Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-gray-300 text-sm mb-2">Time to First Byte</div>
                      <div className="text-2xl font-bold text-white">{formatTime(metrics.ttfb)}</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-gray-300 text-sm mb-2">First Meaningful Paint</div>
                      <div className="text-2xl font-bold text-white">{formatTime(metrics.fmp)}</div>
                    </div>
                  </div>
                </div>

                {/* Last Update */}
                <div className="text-center text-gray-400 text-sm">
                  Last updated: {lastUpdate.toLocaleTimeString()}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;