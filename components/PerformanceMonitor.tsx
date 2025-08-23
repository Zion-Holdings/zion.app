import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, AlertTriangle, CheckCircle, RefreshCw,
  BarChart3
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
  tbt: number; // Total Blocking Time
}

interface PerformanceEntryExtended {
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

  // Calculate performance score (0-100)
  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring
    if (metrics.fcp > thresholds.fcp.poor) score -= 20;
    else if (metrics.fcp > thresholds.fcp.good) score -= 10;
    
    // LCP scoring
    if (metrics.lcp > thresholds.lcp.poor) score -= 20;
    else if (metrics.lcp > thresholds.lcp.good) score -= 10;
    
    // FID scoring
    if (metrics.fid > thresholds.fid.poor) score -= 15;
    else if (metrics.fid > thresholds.fid.good) score -= 7;
    
    // CLS scoring
    if (metrics.cls > thresholds.cls.poor) score -= 15;
    else if (metrics.cls > thresholds.cls.good) score -= 7;
    
    // TTFB scoring
    if (metrics.ttfb > thresholds.ttfb.poor) score -= 10;
    else if (metrics.ttfb > thresholds.ttfb.good) score -= 5;
    
    // TBT scoring
    if (metrics.tbt > thresholds.tbt.poor) score -= 10;
    else if (metrics.tbt > thresholds.tbt.good) score -= 5;
    
    return Math.max(0, score);
  }, []);

  // Get grade from score
  const getGrade = useCallback((score: number): 'A' | 'B' | 'C' | 'D' | 'F' => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, []);

  // Get grade color
  const getGradeColor = useCallback((grade: 'A' | 'B' | 'C' | 'D' | 'F'): string => {
    switch (grade) {
      case 'A': return 'text-green-400';
      case 'B': return 'text-blue-400';
      case 'C': return 'text-yellow-400';
      case 'D': return 'text-orange-400';
      case 'F': return 'text-red-400';
      default: return 'text-gray-400';
    }
  }, []);

  // Get metric status
  const getMetricStatus = useCallback((metric: keyof PerformanceMetrics, value: number) => {
    const threshold = thresholds[metric];
    if (value <= threshold.good) return { status: 'good', color: 'text-green-400', icon: CheckCircle };
    if (value <= threshold.poor) return { status: 'needs-improvement', color: 'text-yellow-400', icon: AlertTriangle };
    return { status: 'poor', color: 'text-red-400', icon: AlertTriangle };
  }, []);

  // Measure performance metrics
  const measurePerformance = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const metrics: Partial<PerformanceMetrics> = {};
        let metricsCount = 0;
        const totalMetrics = 10;

        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint') {
              const paintEntry = entry as PerformanceEntryExtended;
              if (paintEntry.name === 'first-contentful-paint') {
                metrics.fcp = paintEntry.startTime || 0;
                metricsCount++;
              }
            } else if (entry.entryType === 'largest-contentful-paint') {
              const lcpEntry = entry as PerformanceEntryExtended;
              metrics.lcp = lcpEntry.startTime || 0;
              metricsCount++;
            } else if (entry.entryType === 'first-input') {
              const fidEntry = entry as PerformanceEntryExtended;
              metrics.fid = (fidEntry.processingStart || 0) - (fidEntry.startTime || 0);
              metricsCount++;
            } else if (entry.entryType === 'layout-shift') {
              const clsEntry = entry as PerformanceEntryExtended;
              metrics.cls = clsEntry.value || 0;
              metricsCount++;
            }
          }

          if (metricsCount >= totalMetrics) {
            observer.disconnect();
            resolve(metrics as PerformanceMetrics);
          }
        });

        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

        // Fallback measurements
        setTimeout(() => {
          if (metricsCount < totalMetrics) {
            observer.disconnect();
            
            // Use Navigation Timing API as fallback
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            if (navigation) {
              metrics.ttfb = navigation.responseStart - navigation.requestStart;
              metrics.fmp = navigation.domContentLoadedEventEnd - navigation.fetchStart;
              metrics.tti = navigation.loadEventEnd - navigation.fetchStart;
            }
            
            // Estimate other metrics
            metrics.fcp = metrics.fcp || (metrics.ttfb || 0) + 500;
            metrics.lcp = metrics.lcp || (metrics.fcp || 0) + 1000;
            metrics.fid = metrics.fid || 50;
            metrics.cls = metrics.cls || 0.05;
            metrics.si = metrics.si || (metrics.lcp || 0) * 1.5;
            metrics.tbt = metrics.tbt || 100;
            
            resolve(metrics as PerformanceMetrics);
          }
        }, 5000);
      } else {
        // Fallback for older browsers
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const fallbackMetrics: PerformanceMetrics = {
          fcp: navigation ? navigation.domContentLoadedEventEnd - navigation.fetchStart : 1000,
          lcp: navigation ? navigation.loadEventEnd - navigation.fetchStart : 2000,
          fid: 50,
          cls: 0.05,
          ttfb: navigation ? navigation.responseStart - navigation.requestStart : 500,
          fmp: navigation ? navigation.domContentLoadedEventEnd - navigation.fetchStart : 1500,
          si: 2500,
          tti: navigation ? navigation.loadEventEnd - navigation.fetchStart : 3000,
          tbt: 100
        };
        resolve(fallbackMetrics);
      }
    });
  }, []);

  // Refresh performance data
  const refreshPerformance = useCallback(async () => {
    setIsLoading(true);
    try {
      const metrics = await measurePerformance();
      const score = calculateScore(metrics);
      const grade = getGrade(score);
      
      setCurrentMetrics(metrics);
      setLastRefresh(new Date());
    } catch {
      // Error handling without console output
    } finally {
      setIsLoading(false);
    }
  }, [measurePerformance, calculateScore, getGrade]);

  // Auto-refresh setup
  useEffect(() => {
    if (autoRefreshEnabled && refreshInterval > 0) {
      refreshIntervalRef.current = setInterval(refreshPerformance, refreshInterval);
      return () => {
        if (refreshIntervalRef.current) {
          clearInterval(refreshIntervalRef.current);
        }
      };
    }
  }, [autoRefreshEnabled, refreshInterval, refreshPerformance]);

  // Initial measurement
  useEffect(() => {
    refreshPerformance();
  }, [refreshPerformance]);

  // Show monitor after page load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Format metric value
  const formatMetric = useCallback((metric: keyof PerformanceMetrics, value: number): string => {
    if (metric === 'cls') return value.toFixed(3);
    if (metric === 'fid' || metric === 'tbt') return `${Math.round(value)}ms`;
    return `${Math.round(value)}ms`;
  }, []);

  // Get metric label
  const getMetricLabel = useCallback((metric: keyof PerformanceMetrics): string => {
    const labels: Record<keyof PerformanceMetrics, string> = {
      fcp: 'First Contentful Paint',
      lcp: 'Largest Contentful Paint',
      fid: 'First Input Delay',
      cls: 'Cumulative Layout Shift',
      ttfb: 'Time to First Byte',
      fmp: 'First Meaningful Paint',
      si: 'Speed Index',
      tti: 'Time to Interactive',
      tbt: 'Total Blocking Time'
    };
    return labels[metric];
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 left-6 z-50 ${className}`}>
      {/* Performance Monitor Toggle */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
              <p className="text-xs text-gray-400">Real-time metrics</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoRefreshEnabled(!autoRefreshEnabled)}
              className={`p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                autoRefreshEnabled ? 'text-green-400 bg-green-500/20' : 'text-gray-400 bg-gray-700/50'
              }`}
              aria-label={`${autoRefreshEnabled ? 'Disable' : 'Enable'} auto-refresh`}
            >
              <RefreshCw className={`w-4 h-4 ${autoRefreshEnabled ? 'animate-spin' : ''}`} />
            </button>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
              aria-label={`${isExpanded ? 'Collapse' : 'Expand'} performance details`}
            >
              <BarChart3 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Performance Score */}
        {currentMetrics && (
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className={`text-3xl font-bold ${getGradeColor(getGrade(calculateScore(currentMetrics)))}`}>
                  {getGrade(calculateScore(currentMetrics))}
                </div>
                <div className="text-sm text-gray-400">Grade</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {calculateScore(currentMetrics)}
                </div>
                <div className="text-sm text-gray-400">Score</div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gray-400">Last Updated</div>
                <div className="text-xs text-gray-500">
                  {lastRefresh.toLocaleTimeString()}
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">FCP</span>
                  <span className={`text-sm font-medium ${
                    getMetricStatus('fcp', currentMetrics.fcp).color
                  }`}>
                    {formatMetric('fcp', currentMetrics.fcp)}
                  </span>
                </div>
              </div>
              
              <div className="p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">LCP</span>
                  <span className={`text-sm font-medium ${
                    getMetricStatus('lcp', currentMetrics.lcp).color
                  }`}>
                    {formatMetric('lcp', currentMetrics.lcp)}
                  </span>
                </div>
              </div>
            </div>

            {/* Refresh Button */}
            <button
              onClick={refreshPerformance}
              disabled={isLoading}
              className="w-full p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              aria-label="Refresh performance metrics"
            >
              {isLoading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4" />
              )}
              {isLoading ? 'Measuring...' : 'Refresh Metrics'}
            </button>
          </div>
        )}

        {/* Detailed Metrics */}
        <AnimatePresence>
          {isExpanded && currentMetrics && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-t border-gray-700/50"
            >
              <div className="p-4 space-y-3">
                <h4 className="text-sm font-semibold text-white mb-3">Detailed Metrics</h4>
                
                {Object.entries(currentMetrics).map(([key, value]) => {
                  const metricKey = key as keyof PerformanceMetrics;
                  const status = getMetricStatus(metricKey, value);
                  const StatusIcon = status.icon;
                  
                  return (
                    <div key={key} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <StatusIcon className={`w-4 h-4 ${status.color}`} />
                        <div>
                          <div className="text-sm text-white">{getMetricLabel(metricKey)}</div>
                          <div className="text-xs text-gray-400">{key.toUpperCase()}</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className={`text-sm font-medium ${status.color}`}>
                          {formatMetric(metricKey, value)}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {status.status.replace('-', ' ')}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PerformanceMonitor;