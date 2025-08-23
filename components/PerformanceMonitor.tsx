import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, AlertTriangle, 
  CheckCircle, Info, X, Settings, BarChart3
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
  fmp: number | null; // First Meaningful Paint
}

interface PerformanceMonitorProps {
  className?: string;
  showDetails?: boolean;
  autoHide?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  className = '',
  showDetails = false,
  autoHide = true,
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 600
  }
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [issues, setIssues] = useState<string[]>([]);

  // Calculate performance score
  const calculateScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;
    const issues: string[] = [];

    if (metrics.fcp && metrics.fcp > threshold.fcp) {
      score -= 20;
      issues.push(`FCP: ${metrics.fcp}ms (target: ${threshold.fcp}ms)`);
    }

    if (metrics.lcp && metrics.lcp > threshold.lcp) {
      score -= 25;
      issues.push(`LCP: ${metrics.lcp}ms (target: ${threshold.lcp}ms)`);
    }

    if (metrics.fid && metrics.fid > threshold.fid) {
      score -= 20;
      issues.push(`FID: ${metrics.fid}ms (target: ${threshold.fid}ms)`);
    }

    if (metrics.cls && metrics.cls > threshold.cls) {
      score -= 20;
      issues.push(`CLS: ${metrics.cls} (target: ${threshold.cls})`);
    }

    if (metrics.ttfb && metrics.ttfb > threshold.ttfb) {
      score -= 15;
      issues.push(`TTFB: ${metrics.ttfb}ms (target: ${threshold.ttfb}ms)`);
    }

    setIssues(issues);
    return Math.max(0, score);
  }, [threshold]);

  // Get metric status
  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number | null) => {
    if (!value) return 'pending';
    
    const thresholdValue = threshold[metric as keyof typeof threshold];
    if (value <= thresholdValue) return 'good';
    if (value <= thresholdValue * 1.5) return 'needs-improvement';
    return 'poor';
  };

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'needs-improvement':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'poor':
        return <X className="w-4 h-4 text-red-400" />;
      default:
        return <Info className="w-4 h-4 text-gray-400" />;
    }
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'text-green-400';
      case 'needs-improvement':
        return 'text-yellow-400';
      case 'poor':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  // Measure performance metrics
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries[entries.length - 1];
      if (fcp) {
        setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
      }
    });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      if (lcp) {
        setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
      }
    });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fid = entries[entries.length - 1] as any;
      if (fid && fid.processingStart) {
        setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
      }
    });

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        const layoutEntry = entry as any;
        if (!layoutEntry.hadRecentInput) {
          clsValue += layoutEntry.value || 0;
        }
      }
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    // Show monitor after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Update performance score when metrics change
  useEffect(() => {
    const score = calculateScore(metrics);
    setPerformanceScore(score);
  }, [metrics, calculateScore]);

  // Auto-hide after showing
  useEffect(() => {
    if (autoHide && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [autoHide, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating performance button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`fixed top-6 right-6 z-50 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black ${className}`}
        aria-label="Performance monitor"
        aria-expanded={isExpanded}
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-6 z-50 w-96 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-purple-500/20 shadow-2xl"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-purple-400" />
                  Performance Monitor
                </h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close performance monitor"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Performance Score */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">Overall Score</span>
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
                      performanceScore >= 90 ? 'bg-green-500' :
                      performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${performanceScore}%` }}
                  />
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Core Web Vitals</h4>
                
                {/* FCP */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-400 text-sm mr-2">FCP</span>
                    {getStatusIcon(getMetricStatus('fcp', metrics.fcp))}
                  </div>
                  <span className={`text-sm font-mono ${
                    getMetricStatus('fcp', metrics.fcp) === 'pending' ? 'text-gray-500' : 
                    getStatusColor(getMetricStatus('fcp', metrics.fcp))
                  }`}>
                    {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Pending'}
                  </span>
                </div>

                {/* LCP */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-400 text-sm mr-2">LCP</span>
                    {getStatusIcon(getMetricStatus('lcp', metrics.lcp))}
                  </div>
                  <span className={`text-sm font-mono ${
                    getMetricStatus('lcp', metrics.lcp) === 'pending' ? 'text-gray-500' : 
                    getStatusColor(getMetricStatus('lcp', metrics.lcp))
                  }`}>
                    {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Pending'}
                  </span>
                </div>

                {/* FID */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-400 text-sm mr-2">FID</span>
                    {getStatusIcon(getMetricStatus('fid', metrics.fid))}
                  </div>
                  <span className={`text-sm font-mono ${
                    getMetricStatus('fid', metrics.fid) === 'pending' ? 'text-gray-500' : 
                    getStatusColor(getMetricStatus('fid', metrics.fid))
                  }`}>
                    {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Pending'}
                  </span>
                </div>

                {/* CLS */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-400 text-sm mr-2">CLS</span>
                    {getStatusIcon(getMetricStatus('cls', metrics.cls))}
                  </div>
                  <span className={`text-sm font-mono ${
                    getMetricStatus('cls', metrics.cls) === 'pending' ? 'text-gray-500' : 
                    getStatusColor(getMetricStatus('cls', metrics.cls))
                  }`}>
                    {metrics.cls ? metrics.cls.toFixed(3) : 'Pending'}
                  </span>
                </div>

                {/* TTFB */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-400 text-sm mr-2">TTFB</span>
                    {getStatusIcon(getMetricStatus('ttfb', metrics.ttfb))}
                  </div>
                  <span className={`text-sm font-mono ${
                    getMetricStatus('ttfb', metrics.ttfb) === 'pending' ? 'text-gray-500' : 
                    getStatusColor(getMetricStatus('ttfb', metrics.ttfb))
                  }`}>
                    {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Pending'}
                  </span>
                </div>
              </div>

              {/* Issues */}
              {issues.length > 0 && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <h4 className="text-sm font-medium text-red-400 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Performance Issues
                  </h4>
                  <div className="space-y-1">
                    {issues.map((issue, index) => (
                      <div key={index} className="text-xs text-red-300">
                        • {issue}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="text-sm font-medium text-blue-400 mb-2 flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  Recommendations
                </h4>
                <div className="text-xs text-blue-300 space-y-1">
                  <div>• Optimize images and use WebP format</div>
                  <div>• Minimize JavaScript bundles</div>
                  <div>• Use CDN for static assets</div>
                  <div>• Implement lazy loading</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;