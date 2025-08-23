import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, AlertTriangle, 
  CheckCircle, Clock, Zap, BarChart3, Eye, EyeOff
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
  si: number; // Speed Index
  tti: number; // Time to Interactive
}

interface ThresholdConfig {
  good: number;
  needsImprovement: number;
  poor: number;
}

interface PerformanceThresholds {
  fcp: ThresholdConfig;
  lcp: ThresholdConfig;
  fid: ThresholdConfig;
  cls: ThresholdConfig;
  ttfb: ThresholdConfig;
  fmp: ThresholdConfig;
  si: ThresholdConfig;
  tti: ThresholdConfig;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  autoHide?: boolean;
  threshold?: PerformanceThresholds;
}

// Extended interfaces for performance entries
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  target?: any;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
}

const defaultThresholds: PerformanceThresholds = {
  fcp: { good: 1800, needsImprovement: 3000, poor: 3000 },
  lcp: { good: 2500, needsImprovement: 4000, poor: 4000 },
  fid: { good: 100, needsImprovement: 300, poor: 300 },
  cls: { good: 0.1, needsImprovement: 0.25, poor: 0.25 },
  ttfb: { good: 800, needsImprovement: 1800, poor: 1800 },
  fmp: { good: 2000, needsImprovement: 4000, poor: 4000 },
  si: { good: 3400, needsImprovement: 5800, poor: 5800 },
  tti: { good: 3800, needsImprovement: 7300, poor: 7300 }
};

export default function PerformanceMonitor({ 
  showDetails = false, 
  autoHide = true,
  threshold = defaultThresholds 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [showFullDetails, setShowFullDetails] = useState(showDetails);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [status, setStatus] = useState<'good' | 'needsImprovement' | 'poor'>('good');
  const observerRef = useRef<PerformanceObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate performance score based on Core Web Vitals
  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 0;
    let totalWeight = 0;

    // Core Web Vitals (higher weight)
    const coreMetrics = [
      { value: metrics.lcp, weight: 25, threshold: threshold.lcp },
      { value: metrics.fid, weight: 25, threshold: threshold.fid },
      { value: metrics.cls, weight: 25, threshold: threshold.cls }
    ];

    // Additional metrics (lower weight)
    const additionalMetrics = [
      { value: metrics.fcp, weight: 10, threshold: threshold.fcp },
      { value: metrics.ttfb, weight: 10, threshold: threshold.ttfb },
      { value: metrics.si, weight: 5, threshold: threshold.si }
    ];

    [...coreMetrics, ...additionalMetrics].forEach(({ value, weight, threshold }) => {
      totalWeight += weight;
      
      if (value <= threshold.good) {
        score += weight;
      } else if (value <= threshold.needsImprovement) {
        score += weight * 0.7;
      } else {
        score += weight * 0.3;
      }
    });

    return Math.round((score / totalWeight) * 100);
  }, [threshold]);

  // Get status based on score
  const getStatus = useCallback((score: number): 'good' | 'needsImprovement' | 'poor' => {
    if (score >= 90) return 'good';
    if (score >= 50) return 'needsImprovement';
    return 'poor';
  }, []);

  // Get status color
  const getStatusColor = (status: 'good' | 'needsImprovement' | 'poor') => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'needsImprovement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  // Get status icon
  const getStatusIcon = (status: 'good' | 'needsImprovement' | 'poor') => {
    switch (status) {
      case 'good': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'needsImprovement': return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'poor': return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default: return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  // Format metric value
  const formatMetric = (value: number, metric: keyof PerformanceMetrics): string => {
    if (metric === 'cls') {
      return value.toFixed(3);
    }
    if (metric === 'fid') {
      return `${value.toFixed(0)}ms`;
    }
    return `${value.toFixed(0)}ms`;
  };

  // Get metric status
  const getMetricStatus = (value: number, metric: keyof PerformanceMetrics): 'good' | 'needsImprovement' | 'poor' => {
    const thresholds = threshold[metric as keyof typeof threshold];
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needsImprovement';
    return 'poor';
  };

  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
        } else if (entry.entryType === 'first-input') {
          const firstInputEntry = entry as FirstInputEntry;
          if (firstInputEntry.processingStart) {
            setMetrics(prev => prev ? { 
              ...prev, 
              fid: firstInputEntry.processingStart - firstInputEntry.startTime 
            } : null);
          }
        } else if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          if (!layoutShiftEntry.hadRecentInput) {
            setMetrics(prev => prev ? { 
              ...prev, 
              cls: prev.cls + layoutShiftEntry.value 
            } : null);
          }
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      observerRef.current = observer;
    } catch {
      // Silently handle PerformanceObserver errors
    }

    // Get initial metrics
    const getInitialMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      if (navigation && paint.length > 0) {
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        const fmp = paint.find(entry => entry.name === 'first-meaningful-paint')?.startTime || 0;
        
        const initialMetrics: PerformanceMetrics = {
          fcp,
          lcp: 0,
          fid: 0,
          cls: 0,
          ttfb: navigation.responseStart - navigation.requestStart,
          fmp,
          si: 0,
          tti: 0
        };

        setMetrics(initialMetrics);
        
        // Calculate initial score
        const score = calculateScore(initialMetrics);
        setPerformanceScore(score);
        setStatus(getStatus(score));
      }
    };

    // Wait for page load to get accurate metrics
    if (document.readyState === 'complete') {
      getInitialMetrics();
    } else {
      window.addEventListener('load', getInitialMetrics);
      return () => window.removeEventListener('load', getInitialMetrics);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [calculateScore, getStatus]);

  // Auto-hide functionality
  useEffect(() => {
    if (autoHide && isVisible) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 10000); // Hide after 10 seconds
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [autoHide, isVisible]);

  // Update score when metrics change
  useEffect(() => {
    if (metrics) {
      const score = calculateScore(metrics);
      setPerformanceScore(score);
      setStatus(getStatus(score));
    }
  }, [metrics, calculateScore, getStatus]);

  if (!metrics) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-3">
                <Activity className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">Performance Monitor</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowFullDetails(!showFullDetails)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                  aria-label={showFullDetails ? 'Hide details' : 'Show details'}
                >
                  {showFullDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close performance monitor"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Performance Score */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(status)}
                  <span className={`font-semibold ${getStatusColor(status)}`}>
                    {status === 'good' ? 'Good' : status === 'needsImprovement' ? 'Needs Improvement' : 'Poor'}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{performanceScore}</div>
                  <div className="text-xs text-gray-400">Score</div>
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">LCP</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${
                      getMetricStatus(metrics.lcp, 'lcp') === 'good' ? 'text-green-400' :
                      getMetricStatus(metrics.lcp, 'lcp') === 'needsImprovement' ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {formatMetric(metrics.lcp, 'lcp')}
                    </span>
                    {getMetricStatus(metrics.lcp, 'lcp') === 'good' ? 
                      <CheckCircle className="w-4 h-4 text-green-400" /> :
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    }
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">FID</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${
                      getMetricStatus(metrics.fid, 'fid') === 'good' ? 'text-green-400' :
                      getMetricStatus(metrics.fid, 'fid') === 'needsImprovement' ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {formatMetric(metrics.fid, 'fid')}
                    </span>
                    {getMetricStatus(metrics.fid, 'fid') === 'good' ? 
                      <CheckCircle className="w-4 h-4 text-green-400" /> :
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    }
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">CLS</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${
                      getMetricStatus(metrics.cls, 'cls') === 'good' ? 'text-green-400' :
                      getMetricStatus(metrics.cls, 'cls') === 'needsImprovement' ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {formatMetric(metrics.cls, 'cls')}
                    </span>
                    {getMetricStatus(metrics.cls, 'cls') === 'good' ? 
                      <CheckCircle className="w-4 h-4 text-green-400" /> :
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    }
                  </div>
                </div>
              </div>

              {/* Detailed Metrics */}
              {showFullDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-gray-700/50 space-y-2"
                >
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-gray-400">FCP:</span>
                      <span className="ml-2 text-white">{formatMetric(metrics.fcp, 'fcp')}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">TTFB:</span>
                      <span className="ml-2 text-white">{formatMetric(metrics.ttfb, 'ttfb')}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">FMP:</span>
                      <span className="ml-2 text-white">{formatMetric(metrics.fmp, 'fmp')}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">SI:</span>
                      <span className="ml-2 text-white">{formatMetric(metrics.si, 'si')}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => window.location.reload()}
                  className="flex-1 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                >
                  <Zap className="w-4 h-4 inline mr-2" />
                  Refresh
                </button>
                <button
                  onClick={() => window.open('https://pagespeed.web.dev/', '_blank')}
                  className="flex-1 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                >
                  <BarChart3 className="w-4 h-4 inline mr-2" />
                  PageSpeed
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}