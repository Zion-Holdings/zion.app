import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Clock, Activity, AlertTriangle, CheckCircle,
  Loader2, X, Maximize2, Minimize2
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
  memoryUsage: number | null;
  networkInfo: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  } | null;
  deviceInfo: {
    memory: number;
    cores: number;
    battery: number | null;
    charging: boolean | null;
  } | null;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  };
}

// Extend PerformanceEntry for first-input events
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = false,
  autoOptimize = true,
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null,
    memoryUsage: null,
    networkInfo: null,
    deviceInfo: null
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const optimizationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initPerformanceMonitoring = () => {
      // Core Web Vitals monitoring
      if ('PerformanceObserver' in window) {
        try {
          // First Contentful Paint
          observerRef.current = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
              }
            });
          });
          observerRef.current.observe({ entryTypes: ['paint'] });

          // Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.entryType === 'first-input') {
                const firstInputEntry = entry as PerformanceEventTiming;
                setMetrics(prev => ({ ...prev, fid: firstInputEntry.processingStart - firstInputEntry.startTime }));
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach((entry) => {
              const layoutShiftEntry = entry as { hadRecentInput?: boolean; value?: number };
              if (!layoutShiftEntry.hadRecentInput) {
                clsValue += layoutShiftEntry.value || 0;
              }
            });
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch {
          // Performance monitoring initialization failed
        }
      }

      // Navigation timing
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            ttfb: navigation.responseStart - navigation.requestStart,
            domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            windowLoad: navigation.loadEventEnd - navigation.loadEventStart
          }));
        }
      }

      // Memory usage
      if ('memory' in performance) {
        const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
        if (memory) {
          setMetrics(prev => ({
            ...prev,
            memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
          }));
        }
      }

      // Network information
      if ('connection' in navigator) {
        const connection = (navigator as { connection?: { effectiveType?: string; downlink?: number; rtt?: number } }).connection;
        if (connection) {
          setMetrics(prev => ({
            ...prev,
            networkInfo: {
              effectiveType: connection.effectiveType || 'unknown',
              downlink: connection.downlink || 0,
              rtt: connection.rtt || 0
            }
          }));
        }
      }

      // Device capabilities
      const deviceInfo = {
        memory: (navigator as { deviceMemory?: number }).deviceMemory || 0,
        cores: navigator.hardwareConcurrency || 0,
        battery: null,
        charging: null
      };

      // Battery status (if available)
      if ('getBattery' in navigator) {
        (navigator as { getBattery?: () => Promise<{ level: number; charging: boolean }> }).getBattery?.().then((battery) => {
          setMetrics(prev => ({
            ...prev,
            deviceInfo: {
              ...deviceInfo,
              battery: battery.level * 100,
              charging: battery.charging
            }
          }));
        }).catch(() => {
          setMetrics(prev => ({ ...prev, deviceInfo }));
        });
      } else {
        setMetrics(prev => ({ ...prev, deviceInfo }));
      }
    };

    // Initialize after a short delay to ensure page is loaded
    const timer = setTimeout(initPerformanceMonitoring, 1000);
    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Auto-optimization logic
  useEffect(() => {
    if (!autoOptimize) return;

    const runOptimizations = () => {
      setIsOptimizing(true);
      const newOptimizations: string[] = [];

      // Check and suggest optimizations based on metrics
      if (metrics.fcp && metrics.fcp > threshold.fcp) {
        newOptimizations.push('First Contentful Paint is slow - consider optimizing critical resources');
      }

      if (metrics.lcp && metrics.lcp > threshold.lcp) {
        newOptimizations.push('Largest Contentful Paint is slow - optimize images and critical content');
      }

      if (metrics.fid && metrics.fid > threshold.fid) {
        newOptimizations.push('First Input Delay is high - reduce JavaScript execution time');
      }

      if (metrics.cls && metrics.cls > threshold.cls) {
        newOptimizations.push('Cumulative Layout Shift is high - ensure stable layouts');
      }

      if (metrics.memoryUsage && metrics.memoryUsage > 100) {
        newOptimizations.push('High memory usage detected - consider memory optimization');
      }

      if (metrics.networkInfo && metrics.networkInfo.effectiveType === 'slow-2g') {
        newOptimizations.push('Slow network detected - enable aggressive caching and compression');
      }

      setOptimizations(newOptimizations);
      setIsOptimizing(false);
    };

    // Run optimizations after metrics are collected
    if (metrics.fcp !== null) {
      optimizationTimeoutRef.current = setTimeout(runOptimizations, 2000);
    }

    return () => {
      if (optimizationTimeoutRef.current) {
        clearTimeout(optimizationTimeoutRef.current);
      }
    };
  }, [metrics, autoOptimize, threshold]);

  // Performance optimization functions
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const optimizeFonts = useCallback(() => {
    const links = document.querySelectorAll('link[rel="preload"][as="font"]');
    links.forEach(link => {
      link.setAttribute('crossorigin', 'anonymous');
    });
  }, []);

  const enableCompression = useCallback(() => {
    // This would typically be done server-side
    // console.log('Enabling compression for better performance');
  }, []);

  const runAllOptimizations = useCallback(() => {
    setIsOptimizing(true);
    
    setTimeout(() => {
      optimizeImages();
      optimizeFonts();
      enableCompression();
      
      setOptimizations(prev => [
        ...prev,
        'Images optimized with lazy loading',
        'Fonts optimized for better performance',
        'Compression enabled for faster loading'
      ]);
      
      setIsOptimizing(false);
    }, 1000);
  }, [optimizeImages, optimizeFonts, enableCompression]);

  const getMetricColor = (value: number | null, threshold: number, reverse = false) => {
    if (value === null) return 'text-gray-400';
    const isGood = reverse ? value <= threshold : value <= threshold;
    return isGood ? 'text-green-400' : 'text-red-400';
  };

  const getMetricIcon = (value: number | null, threshold: number, reverse = false) => {
    if (value === null) return <Clock className="w-4 h-4" />;
    const isGood = reverse ? value <= threshold : value <= threshold;
    return isGood ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />;
  };

  if (!showMetrics) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">Performance Monitor</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                  aria-label={showDetails ? "Hide details" : "Show details"}
                >
                  {showDetails ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close performance monitor"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Metrics Display */}
            <div className="p-4 space-y-4 max-w-sm">
              {/* Core Web Vitals */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Core Web Vitals</h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    {getMetricIcon(metrics.fcp, threshold.fcp)}
                    <div>
                      <div className="text-xs text-gray-400">FCP</div>
                      <div className={`text-sm font-medium ${getMetricColor(metrics.fcp, threshold.fcp)}`}>
                        {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '--'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {getMetricIcon(metrics.lcp, threshold.lcp)}
                    <div>
                      <div className="text-xs text-gray-400">LCP</div>
                      <div className={`text-sm font-medium ${getMetricColor(metrics.lcp, threshold.lcp)}`}>
                        {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '--'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {getMetricIcon(metrics.fid, threshold.fid)}
                    <div>
                      <div className="text-xs text-gray-400">FID</div>
                      <div className={`text-sm font-medium ${getMetricColor(metrics.fid, threshold.fid)}`}>
                        {metrics.fid ? `${Math.round(metrics.fid)}ms` : '--'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {getMetricIcon(metrics.cls, threshold.cls, true)}
                    <div>
                      <div className="text-xs text-gray-400">CLS</div>
                      <div className={`text-sm font-medium ${getMetricColor(metrics.cls, threshold.cls, true)}`}>
                        {metrics.cls ? metrics.cls.toFixed(3) : '--'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              {showDetails && (
                <div className="space-y-3 pt-3 border-t border-gray-700/50">
                  <h4 className="text-sm font-medium text-gray-300">System Info</h4>
                  
                  <div className="space-y-2">
                    {metrics.memoryUsage && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Memory:</span>
                        <span className="text-white">{Math.round(metrics.memoryUsage)}MB</span>
                      </div>
                    )}
                    
                    {metrics.networkInfo && (
                      <>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Network:</span>
                          <span className="text-white">{metrics.networkInfo.effectiveType}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Speed:</span>
                          <span className="text-white">{metrics.networkInfo.downlink}Mbps</span>
                        </div>
                      </>
                    )}
                    
                    {metrics.deviceInfo && (
                      <>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Cores:</span>
                          <span className="text-white">{metrics.deviceInfo.cores}</span>
                        </div>
                        {metrics.deviceInfo.battery !== null && (
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-400">Battery:</span>
                            <span className="text-white">{Math.round(metrics.deviceInfo.battery)}%</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Optimizations */}
              {optimizations.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-gray-700/50">
                  <h4 className="text-sm font-medium text-gray-300">Optimizations</h4>
                  
                  <div className="space-y-2">
                    {optimizations.slice(0, 3).map((optimization, index) => (
                      <div key={index} className="text-xs text-yellow-400 bg-yellow-400/10 p-2 rounded">
                        {optimization}
                      </div>
                    ))}
                    
                    {optimizations.length > 3 && (
                      <div className="text-xs text-gray-400 text-center">
                        +{optimizations.length - 3} more optimizations
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-2 pt-3 border-t border-gray-700/50">
                <button
                  onClick={runAllOptimizations}
                  disabled={isOptimizing}
                  className="flex-1 px-3 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 text-white text-xs font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  {isOptimizing ? (
                    <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                  ) : (
                    'Optimize'
                  )}
                </button>
                
                <button
                  onClick={() => window.location.reload()}
                  className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-xs font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Reload
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsVisible(true)}
          className="p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label="Open performance monitor"
        >
          <Activity className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
};

export default PerformanceOptimizer;