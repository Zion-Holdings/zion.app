import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, TrendingDown, 
  AlertTriangle, CheckCircle, X, Settings, RefreshCw,
  BarChart3, Gauge, HardDrive, Wifi, Cpu
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage?: number;
  networkLatency?: number;
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
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0
  });
  const [isVisible, setIsVisible] = useState(showUI);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const getPerformanceMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Wait for page to be fully loaded
        if (document.readyState === 'complete') {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paintEntries = performance.getEntriesByType('paint');
          
          const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
          const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
          
          const metrics: PerformanceMetrics = {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            firstContentfulPaint: fcp ? fcp.startTime : 0,
            largestContentfulPaint: lcp ? lcp.startTime : 0,
            cumulativeLayoutShift: 0, // Would need to be calculated from LayoutShift API
            firstInputDelay: 0, // Would need to be calculated from FirstInput API
            timeToInteractive: navigation.domInteractive - navigation.fetchStart
          };

          // Add memory usage if available
          if ('memory' in performance) {
            const memory = (performance as any).memory;
            metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
          }

          resolve(metrics);
        } else {
          // Wait for page to load
          window.addEventListener('load', () => {
            setTimeout(() => getPerformanceMetrics().then(resolve), 100);
          });
        }
      } else {
        resolve({
          loadTime: 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          cumulativeLayoutShift: 0,
          firstInputDelay: 0,
          timeToInteractive: 0
        });
      }
    });
  }, []);

  const refreshMetrics = useCallback(async () => {
    setIsLoading(true);
    try {
      const newMetrics = await getPerformanceMetrics();
      setMetrics(newMetrics);
      setLastUpdate(new Date());
      
      // Check for performance issues and add alerts
      const newAlerts: string[] = [];
      if (newMetrics.loadTime > 3000) {
        newAlerts.push('Page load time is slow (>3s)');
      }
      if (newMetrics.firstContentfulPaint > 2000) {
        newAlerts.push('First contentful paint is slow (>2s)');
      }
      if (newMetrics.largestContentfulPaint > 4000) {
        newAlerts.push('Largest contentful paint is slow (>4s)');
      }
      
      setAlerts(newAlerts);
    } catch (error) {
      console.error('Failed to get performance metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, [getPerformanceMetrics]);

  useEffect(() => {
    if (showUI) {
      refreshMetrics();
    }
  }, [showUI, refreshMetrics]);

  useEffect(() => {
    if (autoRefresh && showUI) {
      const interval = setInterval(refreshMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, showUI, refreshInterval, refreshMetrics]);

  const getPerformanceScore = (): number => {
    let score = 100;
    
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstContentfulPaint > 2000) score -= 15;
    if (metrics.largestContentfulPaint > 4000) score -= 15;
    if (metrics.timeToInteractive > 5000) score -= 20;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return <AlertTriangle className="w-5 h-5 text-red-400" />;
  };

  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  if (!showUI) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-4 left-4 z-50"
        >
          {/* Performance Monitor Panel */}
          <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-semibold">Performance Monitor</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={refreshMetrics}
                  disabled={isLoading}
                  className="p-1 text-gray-400 hover:text-white transition-colors duration-200 disabled:opacity-50"
                  aria-label="Refresh metrics"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={isExpanded ? 'Collapse' : 'Expand'}
                >
                  <BarChart3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Performance Score */}
            <div className="p-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Performance Score</span>
                {getScoreIcon(getPerformanceScore())}
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-2xl font-bold text-white">
                  {getPerformanceScore()}
                </div>
                <div className="text-sm text-gray-400">/ 100</div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    getPerformanceScore() >= 90 ? 'bg-green-500' :
                    getPerformanceScore() >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${getPerformanceScore()}%` }}
                />
              </div>
            </div>

            {/* Key Metrics */}
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Load Time</div>
                  <div className="text-sm font-semibold text-white">
                    {formatTime(metrics.loadTime)}
                  </div>
                </div>
                <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">FCP</div>
                  <div className="text-sm font-semibold text-white">
                    {formatTime(metrics.firstContentfulPaint)}
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-gray-400 text-center">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </div>
            </div>

            {/* Expanded View */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-700/50"
                >
                  <div className="p-4 space-y-4">
                    {/* Detailed Metrics */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-white">Detailed Metrics</h4>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Largest Contentful Paint:</span>
                          <span className="text-white">{formatTime(metrics.largestContentfulPaint)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Time to Interactive:</span>
                          <span className="text-white">{formatTime(metrics.timeToInteractive)}</span>
                        </div>
                        {metrics.memoryUsage && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Memory Usage:</span>
                            <span className="text-white">{metrics.memoryUsage.toFixed(1)} MB</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Alerts */}
                    {alerts.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Performance Alerts</h4>
                        <div className="space-y-1">
                          {alerts.map((alert, index) => (
                            <div key={index} className="flex items-center space-x-2 text-xs text-yellow-400">
                              <AlertTriangle className="w-3 h-3" />
                              <span>{alert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Recommendations */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Recommendations</h4>
                      <div className="text-xs text-gray-400 space-y-1">
                        {getPerformanceScore() < 90 && (
                          <>
                            <div>• Optimize images and assets</div>
                            <div>• Minimize JavaScript bundles</div>
                            <div>• Enable compression and caching</div>
                          </>
                        )}
                        {getPerformanceScore() >= 90 && (
                          <div>• Excellent performance! Keep monitoring for any regressions.</div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PerformanceMonitor;