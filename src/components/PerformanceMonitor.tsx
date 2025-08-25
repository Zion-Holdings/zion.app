import React, { useEffect, useState, useCallback } from 'react';
import { Zap, Clock, HardDrive, Wifi, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
  memoryUsage: number | null;
  networkInfo: string | null;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

// Type definitions for Performance API
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = false,
  onMetricsUpdate
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
    networkInfo: null
  });

  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  // Get network information
  const getNetworkInfo = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        const effectiveType = connection.effectiveType || 'unknown';
        const downlink = connection.downlink || 'unknown';
        const rtt = connection.rtt || 'unknown';
        return `${effectiveType} (${downlink}Mbps, ${rtt}ms RTT)`;
      }
    }
    return 'unknown';
  }, []);

  // Get memory usage
  const getMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory) {
        return Math.round(memory.usedJSHeapSize / 1024 / 1024); // MB
      }
    }
    return null;
  }, []);

  // Measure Core Web Vitals
  const measureCoreWebVitals = useCallback(() => {
    // First Contentful Paint (FCP)
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: Math.round(fcpEntry.startTime) }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('FCP measurement failed:', error);
      }

      // Largest Contentful Paint (LCP)
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            setMetrics(prev => ({ ...prev, lcp: Math.round(lcpEntry.startTime) }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('LCP measurement failed:', error);
      }

      // First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'first-input') {
              const fidEntry = entry as FirstInputEntry;
              setMetrics(prev => ({ ...prev, fid: Math.round(fidEntry.processingStart - fidEntry.startTime) }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('FID measurement failed:', error);
      }

      // Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'layout-shift') {
              const clsEntry = entry as LayoutShiftEntry;
              if (!clsEntry.hadRecentInput) {
                clsValue += clsEntry.value;
                setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }));
              }
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('CLS measurement failed:', error);
      }
    }
  }, []);

  // Measure additional performance metrics
  const measureAdditionalMetrics = useCallback(() => {
    // Time to First Byte (TTFB) and other navigation metrics
    if ('PerformanceObserver' in window) {
      try {
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const navigationEntry = entries.find(entry => entry.entryType === 'navigation');
          if (navigationEntry) {
            const nav = navigationEntry as PerformanceNavigationTiming;
            setMetrics(prev => ({ 
              ...prev, 
              ttfb: Math.round(nav.responseStart - nav.requestStart),
              domLoad: Math.round(nav.domContentLoadedEventEnd - nav.fetchStart),
              windowLoad: Math.round(nav.loadEventEnd - nav.fetchStart)
            }));
          }
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });
      } catch (error) {
        console.warn('Navigation timing measurement failed:', error);
      }
    }

    // Memory usage
    const updateMemoryUsage = () => {
      const memory = getMemoryUsage();
      setMetrics(prev => ({ ...prev, memoryUsage: memory }));
    };

    // Update memory usage periodically
    const memoryInterval = setInterval(updateMemoryUsage, 5000);
    updateMemoryUsage(); // Initial measurement

    // Network information
    const updateNetworkInfo = () => {
      const networkInfo = getNetworkInfo();
      setMetrics(prev => ({ ...prev, networkInfo }));
    };

    updateNetworkInfo(); // Initial measurement
    window.addEventListener('online', updateNetworkInfo);
    window.addEventListener('offline', updateNetworkInfo);

    return () => {
      clearInterval(memoryInterval);
      window.removeEventListener('online', updateNetworkInfo);
      window.removeEventListener('offline', updateNetworkInfo);
    };
  }, [getMemoryUsage, getNetworkInfo]);

  // Check for performance issues and generate alerts
  const checkPerformanceIssues = useCallback((currentMetrics: PerformanceMetrics) => {
    const newAlerts: string[] = [];

    if (currentMetrics.fcp && currentMetrics.fcp > 2000) {
      newAlerts.push('First Contentful Paint is slow (>2s)');
    }

    if (currentMetrics.lcp && currentMetrics.lcp > 4000) {
      newAlerts.push('Largest Contentful Paint is slow (>4s)');
    }

    if (currentMetrics.fid && currentMetrics.fid > 100) {
      newAlerts.push('First Input Delay is high (>100ms)');
    }

    if (currentMetrics.cls && currentMetrics.cls > 0.1) {
      newAlerts.push('Cumulative Layout Shift is poor (>0.1)');
    }

    if (currentMetrics.memoryUsage && currentMetrics.memoryUsage > 100) {
      newAlerts.push('High memory usage detected (>100MB)');
    }

    setAlerts(newAlerts);
  }, []);

  // Initialize performance monitoring
  useEffect(() => {
    measureCoreWebVitals();
    const cleanup = measureAdditionalMetrics();

    // Update metrics periodically
    const updateInterval = setInterval(() => {
      setMetrics(prev => {
        const newMetrics = { ...prev };
        newMetrics.memoryUsage = getMemoryUsage();
        newMetrics.networkInfo = getNetworkInfo();
        return newMetrics;
      });
    }, 10000);

    return () => {
      cleanup();
      clearInterval(updateInterval);
    };
  }, [measureCoreWebVitals, measureAdditionalMetrics, getMemoryUsage, getNetworkInfo]);

  // Check for performance issues when metrics change
  useEffect(() => {
    checkPerformanceIssues(metrics);
    onMetricsUpdate?.(metrics);
  }, [metrics, checkPerformanceIssues, onMetricsUpdate]);

  // Performance score calculation
  const calculatePerformanceScore = () => {
    let score = 100;
    let factors = 0;

    if (metrics.fcp && metrics.fcp > 2000) {
      score -= Math.min(20, (metrics.fcp - 2000) / 100);
      factors++;
    }

    if (metrics.lcp && metrics.lcp > 4000) {
      score -= Math.min(25, (metrics.lcp - 4000) / 200);
      factors++;
    }

    if (metrics.fid && metrics.fid > 100) {
      score -= Math.min(15, (metrics.fid - 100) / 10);
      factors++;
    }

    if (metrics.cls && metrics.cls > 0.1) {
      score -= Math.min(20, metrics.cls * 200);
      factors++;
    }

    if (metrics.memoryUsage && metrics.memoryUsage > 100) {
      score -= Math.min(20, (metrics.memoryUsage - 100) / 10);
      factors++;
    }

    return Math.max(0, Math.round(score));
  };

  const performanceScore = calculatePerformanceScore();
  const scoreColor = performanceScore >= 90 ? 'text-green-400' : 
                     performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400';

  if (!showDetails) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-gray-900/90 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-gray-800/90 transition-all duration-200"
          aria-label="Toggle performance monitor"
        >
          <Zap className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <div className="bg-gray-900/95 backdrop-blur-sm text-white p-4 rounded-lg shadow-2xl border border-gray-700 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close performance monitor"
            >
              ×
            </button>
          </div>

          {/* Performance Score */}
          <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Performance Score</span>
              <span className={`text-2xl font-bold ${scoreColor}`}>
                {performanceScore}/100
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  performanceScore >= 90 ? 'bg-green-500' : 
                  performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${performanceScore}%` }}
              />
            </div>
          </div>

          {/* Core Web Vitals */}
          <div className="space-y-3 mb-4">
            <h4 className="text-sm font-medium text-gray-300">Core Web Vitals</h4>
            
            {metrics.fcp !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">FCP</span>
                <span className={metrics.fcp <= 2000 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.fcp}ms
                </span>
              </div>
            )}

            {metrics.lcp !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">LCP</span>
                <span className={metrics.lcp <= 4000 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.lcp}ms
                </span>
              </div>
            )}

            {metrics.fid !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">FID</span>
                <span className={metrics.fid <= 100 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.fid}ms
                </span>
              </div>
            )}

            {metrics.cls !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">CLS</span>
                <span className={metrics.cls <= 0.1 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.cls}
                </span>
              </div>
            )}
          </div>

          {/* Additional Metrics */}
          <div className="space-y-3 mb-4">
            <h4 className="text-sm font-medium text-gray-300">Additional Metrics</h4>
            
            {metrics.ttfb !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">TTFB</span>
                <span className={metrics.ttfb <= 600 ? 'text-green-400' : 'text-yellow-400'}>
                  {metrics.ttfb}ms
                </span>
              </div>
            )}

            {metrics.domLoad !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">DOM Load</span>
                <span className={metrics.domLoad <= 2000 ? 'text-green-400' : 'text-yellow-400'}>
                  {metrics.domLoad}ms
                </span>
              </div>
            )}

            {metrics.memoryUsage !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Memory</span>
                <span className={metrics.memoryUsage <= 100 ? 'text-green-400' : 'text-yellow-400'}>
                  {metrics.memoryUsage}MB
                </span>
              </div>
            )}

            {metrics.networkInfo && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Network</span>
                <span className="text-cyan-400">{metrics.networkInfo}</span>
              </div>
            )}
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="border-t border-gray-700 pt-3">
              <h4 className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-yellow-400" />
                Performance Alerts
              </h4>
              <div className="space-y-1">
                {alerts.map((alert, index) => (
                  <div key={index} className="text-xs text-yellow-400 bg-yellow-400/10 p-2 rounded">
                    {alert}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gray-900/90 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-gray-800/90 transition-all duration-200"
        aria-label="Toggle performance monitor"
      >
        <Zap className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PerformanceMonitor;