import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, TrendingUp, TrendingDown, CheckCircle, X, Gauge, Wifi, 
  Smartphone, Tablet, Laptop, AlertTriangle
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

interface DeviceInfo {
  userAgent: string;
  platform: string;
  language: string;
  cookieEnabled: boolean;
  onLine: boolean;
  hardwareConcurrency?: number;
  deviceMemory?: number;
  maxTouchPoints: number;
  deviceType: string;
}

interface NetworkInfo {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
}

interface PerformanceMonitorProps {
  showUI?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
  enableReporting?: boolean;
  apiEndpoint?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showUI = false,
  autoRefresh = false,
  refreshInterval = 30000, // 30 seconds
  enableReporting = false,
  apiEndpoint = '/api/performance'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo | null>(null);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const observerRef = useRef<PerformanceObserver | null>(null);
  const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
  }, []);

  // Get device information
  useEffect(() => {
    const getDeviceInfo = () => {
      const userAgent = navigator.userAgent;
      const platform = navigator.platform;
      const language = navigator.language;
      const cookieEnabled = navigator.cookieEnabled;
      const onLine = navigator.onLine;
      const hardwareConcurrency = (navigator as any).hardwareConcurrency;
      const deviceMemory = (navigator as any).deviceMemory;
      const maxTouchPoints = navigator.maxTouchPoints;

      // Detect device type
      let deviceType = 'desktop';
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        deviceType = 'mobile';
      } else if (/iPad|Android/i.test(userAgent)) {
        deviceType = 'tablet';
      }

      setDeviceInfo({
        userAgent,
        platform,
        language,
        cookieEnabled,
        onLine,
        hardwareConcurrency,
        deviceMemory,
        maxTouchPoints,
        deviceType
      });
    };

    getDeviceInfo();
  }, []);

  // Get network information
  useEffect(() => {
    const getNetworkInfo = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setNetworkInfo({
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        });
      }
    };

    getNetworkInfo();
  }, []);

  // Calculate performance score
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    const weights = {
      fcp: 0.15,
      lcp: 0.25,
      fid: 0.25,
      cls: 0.25,
      ttfb: 0.10
    };

    let score = 0;
    
    // FCP scoring (0-100)
    if (metrics.fcp <= 1800) score += weights.fcp * 100;
    else if (metrics.fcp <= 3000) score += weights.fcp * 75;
    else if (metrics.fcp <= 4000) score += weights.fcp * 50;
    else score += weights.fcp * 25;

    // LCP scoring (0-100)
    if (metrics.lcp <= 2500) score += weights.lcp * 100;
    else if (metrics.lcp <= 4000) score += weights.lcp * 75;
    else if (metrics.lcp <= 6000) score += weights.lcp * 50;
    else score += weights.lcp * 25;

    // FID scoring (0-100)
    if (metrics.fid <= 100) score += weights.fid * 100;
    else if (metrics.fid <= 300) score += weights.fid * 75;
    else if (metrics.fid <= 500) score += weights.fid * 50;
    else score += weights.fid * 25;

    // CLS scoring (0-100)
    if (metrics.cls <= 0.1) score += weights.cls * 100;
    else if (metrics.cls <= 0.25) score += weights.cls * 75;
    else if (metrics.cls <= 0.4) score += weights.cls * 50;
    else score += weights.cls * 25;

    // TTFB scoring (0-100)
    if (metrics.ttfb <= 800) score += weights.ttfb * 100;
    else if (metrics.ttfb <= 1800) score += weights.ttfb * 75;
    else if (metrics.ttfb <= 3000) score += weights.ttfb * 50;
    else score += weights.ttfb * 25;

    return Math.round(score);
  }, []);

  // Collect performance metrics
  const collectMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      // Wait for page to be fully loaded
      if (document.readyState === 'complete') {
        resolveMetrics();
      } else {
        window.addEventListener('load', resolveMetrics);
      }

      function resolveMetrics() {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        const measureEntries = performance.getEntriesByType('measure');

        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        const lcp = (performance as any).getEntriesByType('largest-contentful-paint')?.[0]?.startTime || 0;
        const ttfb = navigation.responseStart - navigation.requestStart;
        const fmp = measureEntries.find(entry => entry.name === 'first-meaningful-paint')?.startTime || 0;

        // Estimate other metrics if not available
        const estimatedLcp = lcp || fcp * 1.5;
        const estimatedFid = 50; // Conservative estimate
        const estimatedCls = 0.05; // Conservative estimate
        const estimatedTti = Math.max(fcp, estimatedLcp) + 1000; // Estimate TTI
        const estimatedSi = fcp * 1.2; // Estimate Speed Index

        const metrics: PerformanceMetrics = {
          fcp,
          lcp: estimatedLcp,
          fid: estimatedFid,
          cls: estimatedCls,
          ttfb,
          fmp,
          si: estimatedSi,
          tti: estimatedTti
        };

        resolve(metrics);
      }
    });
  }, []);

  // Update metrics
  const updateMetrics = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const newMetrics = await collectMetrics();
      setMetrics(newMetrics);
      
      const score = calculatePerformanceScore(newMetrics);
      setPerformanceScore(score);
      
      setLastUpdate(new Date());

      // Report metrics if enabled
      if (enableReporting && apiEndpoint) {
        try {
          await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              metrics: newMetrics,
              score,
              deviceInfo,
              networkInfo,
              timestamp: new Date().toISOString(),
              url: window.location.href
            })
          });
        } catch {
          // Silently handle reporting errors
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to collect metrics');
    } finally {
      setIsLoading(false);
    }
  }, [collectMetrics, calculatePerformanceScore, enableReporting, apiEndpoint, deviceInfo, networkInfo]);

  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Observe LCP
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => prev ? { ...prev, lcp: lastEntry.startTime } : null);
          }
        });
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch {
        // Silently handle observer errors
      }
    }

    // Initial metrics collection
    updateMetrics();

    // Set up auto-refresh if enabled
    if (autoRefresh) {
      refreshIntervalRef.current = setInterval(updateMetrics, refreshInterval);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current);
      }
    };
  }, [updateMetrics, autoRefresh, refreshInterval]);

  // Get performance status
  const getPerformanceStatus = (score: number) => {
    if (score >= 90) return { status: 'Excellent', color: 'text-green-400', icon: CheckCircle };
    if (score >= 70) return { status: 'Good', color: 'text-yellow-400', icon: TrendingUp };
    if (score >= 50) return { status: 'Fair', color: 'text-orange-400', icon: AlertTriangle };
    return { status: 'Poor', color: 'text-red-400', icon: TrendingDown };
  };

  // Format time in milliseconds
  const formatTime = (ms: number) => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  // Get device icon
  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case 'mobile': return Smartphone;
      case 'tablet': return Tablet;
      default: return Laptop;
    }
  };

  if (!showUI) return null;

  const performanceStatus = metrics ? getPerformanceStatus(performanceScore) : null;
  const StatusIcon = performanceStatus?.icon || Activity;

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={!isReducedMotion ? { scale: 1.1 } : {}}
        whileTap={!isReducedMotion ? { scale: 0.9 } : {}}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
        aria-label="Toggle performance monitor"
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.9 }}
            transition={{ duration: isReducedMotion ? 0.1 : 0.3 }}
            className="fixed bottom-6 right-20 z-40 w-96 max-h-[80vh] bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-3">
                <Gauge className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Close performance monitor"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[calc(80vh-80px)] overflow-y-auto">
              {/* Performance Score */}
              {metrics && (
                <div className="text-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
                  <div className="text-3xl font-bold text-white mb-2">{performanceScore}</div>
                  <div className={`flex items-center justify-center space-x-2 ${performanceStatus?.color}`}>
                    <StatusIcon className="w-5 h-5" />
                    <span className="font-medium">{performanceStatus?.status}</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-2">Performance Score</div>
                </div>
              )}

              {/* Core Web Vitals */}
              {metrics && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Core Web Vitals</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                      <div className="text-xs text-gray-400 mb-1">LCP</div>
                      <div className="text-lg font-semibold text-white">{formatTime(metrics.lcp)}</div>
                      <div className="text-xs text-gray-500">Largest Contentful Paint</div>
                    </div>
                    <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                      <div className="text-xs text-gray-400 mb-1">FID</div>
                      <div className="text-lg font-semibold text-white">{formatTime(metrics.fid)}</div>
                      <div className="text-xs text-gray-500">First Input Delay</div>
                    </div>
                    <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                      <div className="text-xs text-gray-400 mb-1">CLS</div>
                      <div className="text-lg font-semibold text-white">{metrics.cls.toFixed(3)}</div>
                      <div className="text-xs text-gray-500">Cumulative Layout Shift</div>
                    </div>
                    <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                      <div className="text-xs text-gray-400 mb-1">FCP</div>
                      <div className="text-lg font-semibold text-white">{formatTime(metrics.fcp)}</div>
                      <div className="text-xs text-gray-500">First Contentful Paint</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Metrics */}
              {metrics && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Additional Metrics</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-800/20 rounded-lg">
                      <span className="text-sm text-gray-400">TTFB</span>
                      <span className="text-sm font-medium text-white">{formatTime(metrics.ttfb)}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-800/20 rounded-lg">
                      <span className="text-sm text-gray-400">Speed Index</span>
                      <span className="text-sm font-medium text-white">{formatTime(metrics.si)}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-800/20 rounded-lg">
                      <span className="text-sm text-gray-400">TTI</span>
                      <span className="text-sm font-medium text-white">{formatTime(metrics.tti)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Device & Network Info */}
              {(deviceInfo || networkInfo) && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">System Info</h4>
                  
                  {deviceInfo && (
                    <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                      <div className="flex items-center space-x-2 mb-2">
                        {React.createElement(getDeviceIcon(deviceInfo.deviceType), { className: "w-4 h-4 text-cyan-400" })}
                        <span className="text-sm font-medium text-white capitalize">{deviceInfo.deviceType}</span>
                      </div>
                      <div className="text-xs text-gray-400 space-y-1">
                        <div>Platform: {deviceInfo.platform}</div>
                        <div>CPU Cores: {deviceInfo.hardwareConcurrency || 'Unknown'}</div>
                        <div>Memory: {deviceInfo.deviceMemory ? `${deviceInfo.deviceMemory}GB` : 'Unknown'}</div>
                      </div>
                    </div>
                  )}

                  {networkInfo && (
                    <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <Wifi className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-white">{networkInfo.effectiveType || 'Unknown'}</span>
                      </div>
                      <div className="text-xs text-gray-400 space-y-1">
                        <div>Downlink: {networkInfo.downlink ? `${networkInfo.downlink}Mbps` : 'Unknown'}</div>
                        <div>RTT: {networkInfo.rtt ? `${networkInfo.rtt}ms` : 'Unknown'}</div>
                        <div>Save Data: {networkInfo.saveData ? 'Yes' : 'No'}</div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Last Update */}
              {lastUpdate && (
                <div className="text-center text-xs text-gray-500">
                  Last updated: {lastUpdate.toLocaleTimeString()}
                </div>
              )}

              {/* Error Display */}
              {error && (
                <div className="p-3 bg-red-600/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                </div>
              )}

              {/* Refresh Button */}
              <button
                onClick={updateMetrics}
                disabled={isLoading}
                className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <Activity className="w-4 h-4" />
                    <span>Refresh Metrics</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;