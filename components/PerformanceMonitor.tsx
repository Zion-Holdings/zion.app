import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

interface PerformanceMonitorProps {
  className?: string;
  enabled?: boolean;
  showMetrics?: boolean;
}

// Extended interface for First Input Delay
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  target?: any;
}

interface PerformanceMonitorProps {
  showUI?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  className = '', 
  enabled = true, 
  showMetrics = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [optimizationTips, setOptimizationTips] = useState<string[]>([]);

  // Performance monitoring
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
      }
    }
  }, []);

  // Get grade icon
  const getGradeIcon = useCallback((grade: string) => {
    switch (grade) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needsImprovement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <X className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  }, []);

  const measureDOMSize = useCallback(() => {
    if (typeof document !== 'undefined') {
      return document.getElementsByTagName('*').length;
    }
    return 0;
  }, []);

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fidEntry = entries[0] as PerformanceEventTiming;
      if (fidEntry && 'processingStart' in fidEntry) {
        setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
      }
    });

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
        }
      }
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }
  }, [measureLoadTime, measureMemoryUsage, measureNetworkLatency, measureDOMSize, measureResourceCount, metrics.fps, metrics.lcp, metrics.fid, metrics.cls, metrics.ttfb, metrics.fcp]);

    // DOM and Window load times
    const domLoadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    const windowLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    
    setMetrics(prev => ({ 
      ...prev, 
      domLoad: domLoadTime > 0 ? domLoadTime : null,
      windowLoad: windowLoadTime > 0 ? windowLoadTime : null
    }));

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [enabled]);

  // Generate optimization tips based on metrics
  useEffect(() => {
    const tips: string[] = [];
    
    if (metrics.fcp && metrics.fcp > 1800) {
      tips.push('First Contentful Paint is slow. Consider optimizing critical rendering path.');
    }
    
    if (metrics.lcp && metrics.lcp > 2500) {
      tips.push('Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.');
    }
    
    if (metrics.fid && metrics.fid > 100) {
      tips.push('First Input Delay is high. Consider code splitting and reducing JavaScript execution time.');
    }
    
    if (metrics.cls && metrics.cls > 0.1) {
      tips.push('Cumulative Layout Shift is high. Ensure stable layouts and avoid content jumping.');
    }
    
    if (metrics.ttfb && metrics.ttfb > 600) {
      tips.push('Time to First Byte is slow. Optimize server response time and reduce blocking requests.');
    }

    setOptimizationTips(tips);
  }, [metrics]);

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

  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  const enableResourceHints = useCallback(() => {
    // DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdn.jsdelivr.net'
    ];
    
    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });
  }, []);

  // Apply optimizations on mount
  useEffect(() => {
    if (enabled) {
      optimizeImages();
      preloadCriticalResources();
      enableResourceHints();
    }
  }, [enabled, optimizeImages, preloadCriticalResources, enableResourceHints]);

  // Memory usage monitoring
  useEffect(() => {
    if (!enabled || !('memory' in performance)) return;

    const checkMemoryUsage = () => {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        console.warn('High memory usage detected. Consider optimizing memory usage.');
      }
    };

    const interval = setInterval(checkMemoryUsage, 10000);
    return () => clearInterval(interval);
  }, [enabled]);

  // Network monitoring
  useEffect(() => {
    if (!enabled || !('connection' in navigator)) return;

    const connection = (navigator as any).connection;
    if (connection) {
      const updateNetworkInfo = () => {
        const effectiveType = connection.effectiveType;
        const downlink = connection.downlink;
        
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          console.warn('Slow network detected. Consider enabling low-bandwidth mode.');
        }
        
        if (downlink < 1) {
          console.warn('Very slow connection detected. Optimizing for low bandwidth.');
        }
      };

      connection.addEventListener('change', updateNetworkInfo);
      updateNetworkInfo();

      return () => connection.removeEventListener('change', updateNetworkInfo);
    }
  }, [enabled]);

  // Calculate performance scores
  const getPerformanceScore = (metric: keyof PerformanceMetrics): number => {
    const value = metrics[metric];
    if (value === null) return 0;

    switch (metric) {
      case 'fcp':
        return value <= 1800 ? 100 : value <= 3000 ? 50 : 0;
      case 'lcp':
        return value <= 2500 ? 100 : value <= 4000 ? 50 : 0;
      case 'fid':
        return value <= 100 ? 100 : value <= 300 ? 50 : 0;
      case 'cls':
        return value <= 0.1 ? 100 : value <= 0.25 ? 50 : 0;
      case 'ttfb':
        return value <= 800 ? 100 : value <= 1800 ? 50 : 0;
      default:
        return 0;
    }
  }, [isMonitoring, startMonitoring, stopMonitoring]);

  // Clear alerts
  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  // Get performance score (0-100)
  const getPerformanceScore = useCallback(() => {
    let score = 100;
    
    // Deduct points for poor performance
    if (metrics.lcp > 2500) score -= 20;
    if (metrics.memoryUsage > 80) score -= 25;
    if (metrics.fps < 30) score -= 15;
    if (metrics.loadTime > 3000) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  // Get performance status
  const getPerformanceStatus = useCallback(() => {
    const score = getPerformanceScore();
    if (score >= 90) return { status: 'Excellent', color: 'text-green-400', bgColor: 'bg-green-500/20' };
    if (score >= 70) return { status: 'Good', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20' };
    if (score >= 50) return { status: 'Fair', color: 'text-orange-400', bgColor: 'bg-orange-500/20' };
    return { status: 'Poor', color: 'text-red-400', bgColor: 'bg-red-500/20' };
  }, [getPerformanceScore]);

  // Initialize monitoring
  useEffect(() => {
    if (showUI) {
      measureCoreWebVitals();
      startMonitoring();
    }

    return () => {
      stopMonitoring();
    };
  }, [showUI, measureCoreWebVitals, startMonitoring, stopMonitoring]);

  const overallScore = getOverallScore();
  const overallStatus = getPerformanceStatus(overallScore);

  if (!enabled || !showMetrics) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black ${className}`}
        onClick={() => setIsVisible(true)}
        aria-label="Open performance monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <>
      {/* Performance Monitor Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-40 p-3 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        aria-label="Toggle performance monitor"
      >
        <Activity className="w-5 h-5 text-cyan-400" />
        {alerts.length > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {alerts.length}
          </span>
        )}
      </button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            transition={{ duration: 0.3 }}
            className="fixed left-4 bottom-20 z-50 w-96 bg-black/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <ChartColumn className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">Performance Monitor</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={updateMetrics}
                  disabled={isRefreshing}
                  className="p-1 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
                  aria-label="Refresh metrics"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close performance monitor"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Performance Score */}
            <div className="p-4 border-b border-white/20">
              <div className="text-center">
                <div className={`inline-flex items-center px-3 py-1 rounded-full ${performanceStatus.bgColor} mb-2`}>
                  <span className={`text-sm font-medium ${performanceStatus.color}`}>
                    {performanceStatus.status}
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{score}</div>
                <div className="text-sm text-gray-400">Performance Score</div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-400">Load Time</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {metrics.loadTime > 0 ? `${metrics.loadTime}ms` : 'N/A'}
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <HardDrive className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-400">Memory</span>
                  </div>
                  <div className="text-lg font-semibold text-white">{metrics.memoryUsage}%</div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">FPS</span>
                  </div>
                  <div className="text-lg font-semibold text-white">{metrics.fps}</div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Wifi className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-400">Latency</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {metrics.networkLatency > 0 ? `${metrics.networkLatency}ms` : 'N/A'}
                  </div>
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="bg-white/5 rounded-lg p-3">
                <h4 className="text-sm font-medium text-white mb-3">Core Web Vitals</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">LCP:</span>
                    <span className={`font-medium ${metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.lcp > 0 ? `${metrics.lcp}ms` : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">FID:</span>
                    <span className={`font-medium ${metrics.fid > 100 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.lcp > 0 ? `${metrics.fid}ms` : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">CLS:</span>
                    <span className={`font-medium ${metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.cls > 0 ? metrics.cls.toFixed(3) : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => window.location.reload()}
          className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
          aria-label="Refresh page to measure performance"
        >
          <Zap className="w-4 h-4 inline mr-1" />
          Refresh
        </button>
        <button
          onClick={() => {
            setMetrics({
              fcp: null,
              lcp: null,
              fid: null,
              cls: null,
              ttfb: null,
              domLoad: null,
              windowLoad: null
            });
          }}
          className="flex-1 px-3 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-lg transition-colors"
          aria-label="Reset performance metrics"
        >
          <Clock className="w-4 h-4 inline mr-1" />
          Reset
        </button>
      </div>

      {/* Optimization Tips */}
      {optimizationTips.length > 0 && (
        <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
          <div className="text-sm font-medium mb-2">Optimization Tips:</div>
          <ul className="space-y-1 text-xs text-gray-300">
            {optimizationTips.slice(0, 2).map((tip, index) => (
              <li key={index}>• {tip}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

              {/* Monitoring Controls */}
              <div className="flex items-center justify-between">
                <button
                  onClick={toggleMonitoring}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isMonitoring
                      ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                      : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                  }`}
                >
                  {isMonitoring ? 'Stop' : 'Start'} Monitoring
                </button>
                <button
                  onClick={clearAlerts}
                  className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Clear Alerts
                </button>
              </div>
            </div>

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="border-t border-white/20">
                <div className="p-4">
                  <h4 className="text-sm font-medium text-white mb-3 flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <span>Performance Alerts ({alerts.length})</span>
                  </h4>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {alerts.slice(-5).map((alert) => (
                      <div
                        key={alert.id}
                        className={`p-2 rounded-lg text-xs ${
                          alert.type === 'error' ? 'bg-red-500/20 text-red-400' :
                          alert.type === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        <div className="font-medium">{alert.metric}: {alert.value}</div>
                        <div className="text-gray-300">{alert.message}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}