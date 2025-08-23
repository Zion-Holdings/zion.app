import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  X, 
  AlertTriangle,
  CheckCircle,
  Info,
  TrendingUp
} from 'lucide-react';

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: EventTarget;
}

interface PerformanceNavigationTiming extends PerformanceEntry {
  responseStart: number;
  requestStart: number;
  domContentLoadedEventEnd: number;
  loadEventEnd: number;
  navigationStart: number;
}

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
  si: number; // Speed Index
  tti: number; // Time to Interactive
  tbt: number; // Total Blocking Time
  domLoad: number;
  windowLoad: number;
  memoryUsage?: {
    used: number;
    total: number;
    limit: number;
  };
  networkInfo?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
}

interface PerformanceEntryExtended extends PerformanceEntry {
  name: string;
  startTime: number;
  processingStart?: number;
  value?: number;
}

interface PerformanceData {
  timestamp: number;
  metrics: PerformanceMetrics;
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
}

interface PerformanceMonitorProps {
  className?: string;
  showDetails?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  className = '',
  showDetails = false,
  autoRefresh = true,
  refreshInterval = 30000 // 30 seconds
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(showDetails);
  const [currentMetrics, setCurrentMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(autoRefresh);
  
  const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Performance thresholds for grading
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 },
    fmp: { good: 2000, poor: 4000 },
    si: { good: 3400, poor: 5800 },
    tti: { good: 3800, poor: 7300 },
    tbt: { good: 300, poor: 600 }
  };

  // Performance observer for Core Web Vitals
  const setupPerformanceObserver = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setCurrentMetrics(prev => prev ? { ...prev, fcp: fcpEntry.startTime } : null);
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setCurrentMetrics(prev => prev ? { ...prev, lcp: lcpEntry.startTime } : null);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries[entries.length - 1] as PerformanceEventTiming;
        if (fidEntry && 'processingStart' in fidEntry) {
          setCurrentMetrics(prev => prev ? { ...prev, fid: fidEntry.processingStart - fidEntry.startTime } : null);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if ('hadRecentInput' in entry && !entry.hadRecentInput && 'value' in entry) {
            clsValue += (entry.value as number);
          }
        });
        setCurrentMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    } catch {
      // Silently handle performance observer errors
    }
  }, []);

  // Collect basic performance metrics
  const collectBasicMetrics = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const newMetrics: PerformanceMetrics = {
        fcp: 0,
        lcp: 0,
        fid: 0,
        cls: 0,
        ttfb: navigation.responseStart - navigation.requestStart,
        fmp: 0,
        si: 0,
        tti: 0,
        tbt: 0,
        domLoad: navigation.domContentLoadedEventEnd - navigation.navigationStart,
        windowLoad: navigation.loadEventEnd - navigation.navigationStart
      };

      // Memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        };
      }

      // Network information (if available)
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        newMetrics.networkInfo = {
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0
        };
      }

      setCurrentMetrics(newMetrics);
    }
  }, []);

  // Get performance score
  const getPerformanceScore = useMemo(() => {
    if (!currentMetrics) return 0;

    let score = 100;
    let totalChecks = 0;

    // FCP score
    if (currentMetrics.fcp > 0) {
      totalChecks++;
      if (currentMetrics.fcp > thresholds.fcp.poor) score -= 25;
      else if (currentMetrics.fcp > thresholds.fcp.good) score -= 10;
    }

    // LCP score
    if (currentMetrics.lcp > 0) {
      totalChecks++;
      if (currentMetrics.lcp > thresholds.lcp.poor) score -= 25;
      else if (currentMetrics.lcp > thresholds.lcp.good) score -= 10;
    }

    // FID score
    if (currentMetrics.fid > 0) {
      totalChecks++;
      if (currentMetrics.fid > thresholds.fid.poor) score -= 25;
      else if (currentMetrics.fid > thresholds.fid.good) score -= 10;
    }

    // CLS score
    if (currentMetrics.cls > 0) {
      totalChecks++;
      if (currentMetrics.cls > thresholds.cls.poor) score -= 25;
      else if (currentMetrics.cls > thresholds.cls.good) score -= 10;
    }

    // TTFB score
    if (currentMetrics.ttfb > 0) {
      totalChecks++;
      if (currentMetrics.ttfb > thresholds.ttfb.poor) score -= 25;
      else if (currentMetrics.ttfb > thresholds.ttfb.good) score -= 10;
    }

    return totalChecks > 0 ? Math.max(0, Math.round(score / totalChecks)) : 0;
  }, [currentMetrics, thresholds]);

  // Get performance status
  const getPerformanceStatus = useMemo(() => {
    if (getPerformanceScore >= 90) return { status: 'excellent', color: 'text-green-400', icon: CheckCircle };
    if (getPerformanceScore >= 70) return { status: 'good', color: 'text-blue-400', icon: CheckCircle };
    if (getPerformanceScore >= 50) return { status: 'fair', color: 'text-yellow-400', icon: AlertTriangle };
    return { status: 'poor', color: 'text-red-400', icon: AlertTriangle };
  }, [getPerformanceScore]);

  // Format time values
  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  // Format memory values
  const formatMemory = (bytes: number): string => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)}MB`;
  };

  // Get metric status
  const getMetricStatus = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return { status: 'good', color: 'text-green-400', icon: CheckCircle };
    if (value <= thresholds.poor) return { status: 'fair', color: 'text-yellow-400', icon: AlertTriangle };
    return { status: 'poor', color: 'text-red-400', icon: AlertTriangle };
  };

  useEffect(() => {
    // Show monitor after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);

    // Setup performance monitoring
    const cleanup = setupPerformanceObserver();
    collectBasicMetrics();

    // Collect metrics periodically
    const interval = setInterval(collectBasicMetrics, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      if (cleanup) cleanup();
    };
  }, [setupPerformanceObserver, collectBasicMetrics]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed bottom-4 right-4 z-50"
      >
        {/* Main Performance Monitor */}
        <motion.div
          className="bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
          layout
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Performance</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium ${getPerformanceStatus.color}`}>
                    {getPerformanceStatus.status}
                  </span>
                  <span className="text-gray-400 text-xs">
                    Score: {getPerformanceScore}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-1"
                aria-label={isExpanded ? 'Hide details' : 'Show details'}
              >
                <Info className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-red-400 transition-colors duration-200 p-1"
                aria-label="Close performance monitor"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Performance Score */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-300 text-sm">Overall Score</span>
              <span className={`text-lg font-bold ${getPerformanceStatus.color}`}>
                {getPerformanceScore}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full ${
                  getPerformanceScore >= 90 ? 'bg-green-500' :
                  getPerformanceScore >= 70 ? 'bg-blue-500' :
                  getPerformanceScore >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${getPerformanceScore}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Quick Metrics */}
          {currentMetrics && (
            <div className="px-4 pb-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">FCP</div>
                  <div className={`text-sm font-mono ${
                    getMetricStatus(currentMetrics.fcp, thresholds.fcp).color
                  }`}>
                    {formatTime(currentMetrics.fcp)}
                  </div>
                </div>
                <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">LCP</div>
                  <div className={`text-sm font-mono ${
                    getMetricStatus(currentMetrics.lcp, thresholds.lcp).color
                  }`}>
                    {formatTime(currentMetrics.lcp)}
                  </div>
                </div>
                <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">TTFB</div>
                  <div className={`text-sm font-mono ${
                    getMetricStatus(currentMetrics.ttfb, thresholds.ttfb).color
                  }`}>
                    {formatTime(currentMetrics.ttfb)}
                  </div>
                </div>
                <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">CLS</div>
                  <div className={`text-sm font-mono ${
                    getMetricStatus(currentMetrics.cls, thresholds.cls).color
                  }`}>
                    {currentMetrics.cls.toFixed(3)}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Expandable Details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-cyan-500/20 overflow-hidden"
              >
                <div className="p-4 space-y-4">
                  {/* Detailed Metrics */}
                  {currentMetrics && (
                    <div className="space-y-3">
                      <h4 className="text-white font-medium text-sm">Detailed Metrics</h4>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-400">DOM Load:</span>
                          <span className="text-white font-mono">{formatTime(currentMetrics.domLoad)}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-400">Window Load:</span>
                          <span className="text-white font-mono">{formatTime(currentMetrics.windowLoad)}</span>
                        </div>
                        {currentMetrics.fid > 0 && (
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-400">FID:</span>
                            <span className={`font-mono ${
                              getMetricStatus(currentMetrics.fid, thresholds.fid).color
                            }`}>
                              {formatTime(currentMetrics.fid)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Memory Usage */}
                      {currentMetrics.memoryUsage && (
                        <div className="pt-2 border-t border-gray-700">
                          <h5 className="text-gray-400 text-xs mb-2">Memory Usage</h5>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Used:</span>
                              <span className="text-white">{formatMemory(currentMetrics.memoryUsage.used)}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Total:</span>
                              <span className="text-white">{formatMemory(currentMetrics.memoryUsage.total)}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Limit:</span>
                              <span className="text-white">{formatMemory(currentMetrics.memoryUsage.limit)}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Network Info */}
                      {currentMetrics.networkInfo && (
                        <div className="pt-2 border-t border-gray-700">
                          <h5 className="text-gray-400 text-xs mb-2">Network</h5>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Type:</span>
                              <span className="text-white">{currentMetrics.networkInfo.effectiveType}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Speed:</span>
                              <span className="text-white">{currentMetrics.networkInfo.downlink} Mbps</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">RTT:</span>
                              <span className="text-white">{currentMetrics.networkInfo.rtt}ms</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Recommendations */}
                  <div className="pt-2 border-t border-gray-700">
                    <h5 className="text-cyan-400 text-xs mb-2 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Recommendations
                    </h5>
                    <div className="space-y-1">
                      {getPerformanceScore < 90 && (
                        <div className="text-gray-300 text-xs bg-gray-800/50 p-2 rounded">
                          Consider optimizing images and reducing JavaScript bundle size
                        </div>
                      )}
                      {currentMetrics?.ttfb > thresholds.ttfb.good && (
                        <div className="text-gray-300 text-xs bg-gray-800/50 p-2 rounded">
                          Server response time could be improved
                        </div>
                      )}
                      {currentMetrics?.cls > thresholds.cls.good && (
                        <div className="text-gray-300 text-xs bg-gray-800/50 p-2 rounded">
                          Layout shifts detected - consider fixing element dimensions
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceMonitor;