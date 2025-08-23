import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle, X, Settings, BarChart3, Gauge, Cpu, HardDrive, Wifi, Battery } from 'lucide-react';

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

interface SystemMetrics {
  memory: number;
  cpu: number;
  network: string;
  battery: number;
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

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fmp: 0,
    si: 0,
    tti: 0
  });
  const [systemMetrics, setSystemMetrics] = useState<SystemMetrics>({
    memory: 0,
    cpu: 0,
    network: 'unknown',
    battery: 0
  });
  const [alerts, setAlerts] = useState<string[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Performance monitoring setup
  const setupPerformanceMonitoring = useCallback(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: Math.round(entry.startTime) }));
            }
          });
        });
        observerRef.current.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: Math.round(lastEntry.startTime) }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'first-input') {
              const firstInputEntry = entry as FirstInputEntry;
              if (firstInputEntry.processingStart) {
                setMetrics(prev => ({ ...prev, fid: Math.round(firstInputEntry.processingStart - firstInputEntry.startTime) }));
              }
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry) => {
            const layoutShiftEntry = entry as LayoutShiftEntry;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Navigation timing
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({
            ...prev,
            ttfb: Math.round(navigationEntry.responseStart - navigationEntry.requestStart),
            fmp: Math.round(navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart),
            si: Math.round(navigationEntry.loadEventEnd - navigationEntry.fetchStart),
            tti: Math.round(navigationEntry.domInteractive - navigationEntry.fetchStart)
          }));
        }

      } catch (error) {
        console.warn('Performance monitoring setup failed:', error);
      }
    }
  }, []);

  // System metrics monitoring
  const updateSystemMetrics = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const usedMemory = ((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100);
        setSystemMetrics(prev => ({ ...prev, memory: Math.round(usedMemory) }));
      }

      // Network information (if available)
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setSystemMetrics(prev => ({ ...prev, network: connection.effectiveType || 'unknown' }));
      }

      // Battery information (if available)
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          setSystemMetrics(prev => ({ ...prev, battery: Math.round(battery.level * 100) }));
        });
      }
    }
  }, []);

  // Performance alerts
  const checkPerformanceAlerts = useCallback(() => {
    const newAlerts: string[] = [];
    
    if (metrics.lcp > 2500) {
      newAlerts.push('LCP is above recommended threshold (2.5s)');
    }
    if (metrics.fid > 100) {
      newAlerts.push('FID is above recommended threshold (100ms)');
    }
    if (metrics.cls > 0.1) {
      newAlerts.push('CLS is above recommended threshold (0.1)');
    }
    if (metrics.ttfb > 600) {
      newAlerts.push('TTFB is above recommended threshold (600ms)');
    }

    setAlerts(newAlerts);
  }, [metrics]);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    updateSystemMetrics();
    
    intervalRef.current = setInterval(() => {
      updateSystemMetrics();
      checkPerformanceAlerts();
    }, 5000);
  }, [updateSystemMetrics, checkPerformanceAlerts]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    setIsVisible(true);
    setupPerformanceMonitoring();
    startMonitoring();

    return () => {
      stopMonitoring();
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setupPerformanceMonitoring, startMonitoring, stopMonitoring]);

  const getPerformanceScore = (metric: keyof PerformanceMetrics): { score: number; color: string; label: string } => {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 600, needsImprovement: 1800 },
      fmp: { good: 2000, needsImprovement: 4000 },
      si: { good: 3400, needsImprovement: 5800 },
      tti: { good: 3800, needsImprovement: 7300 }
    };

    const value = metrics[metric];
    const threshold = thresholds[metric];
    
    if (!threshold) return { score: 0, color: 'text-gray-400', label: 'Unknown' };
    
    if (value <= threshold.good) {
      return { score: 100, color: 'text-green-400', label: 'Good' };
    } else if (value <= threshold.needsImprovement) {
      return { score: 50, color: 'text-yellow-400', label: 'Needs Improvement' };
    } else {
      return { score: 0, color: 'text-red-400', label: 'Poor' };
    }
  };

  const getMetricIcon = (metric: keyof PerformanceMetrics) => {
    const iconMap = {
      fcp: Clock,
      lcp: TrendingUp,
      fid: Zap,
      cls: AlertTriangle,
      ttfb: Activity,
      fmp: BarChart3,
      si: Gauge,
      tti: Cpu
    };
    return iconMap[metric] || Activity;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed bottom-4 right-4 z-50"
        >
          {/* Main Performance Widget */}
          <motion.div
            className="bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-4 min-w-[320px]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-semibold text-sm">Performance Monitor</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="p-1 hover:bg-gray-700/50 rounded transition-colors"
                >
                  <Settings className="w-4 h-4 text-gray-400" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-gray-700/50 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`} />
              <span className="text-xs text-gray-400">
                {isMonitoring ? 'Monitoring Active' : 'Monitoring Stopped'}
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                <div className="text-lg font-bold text-white">{metrics.lcp}ms</div>
                <div className="text-xs text-gray-400">LCP</div>
              </div>
              <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                <div className="text-lg font-bold text-white">{metrics.fid}ms</div>
                <div className="text-xs text-gray-400">FID</div>
              </div>
            </div>

            {/* System Metrics */}
            <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
              <div className="flex items-center gap-1">
                <HardDrive className="w-3 h-3" />
                <span>{systemMetrics.memory}%</span>
              </div>
              <div className="flex items-center gap-1">
                <Wifi className="w-3 h-3" />
                <span>{systemMetrics.network}</span>
              </div>
              <div className="flex items-center gap-1">
                <Battery className="w-3 h-3" />
                <span>{systemMetrics.battery}%</span>
              </div>
            </div>

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="mb-3">
                <div className="flex items-center gap-2 text-yellow-400 text-xs mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Performance Alerts</span>
                </div>
                {alerts.slice(0, 2).map((alert, index) => (
                  <div key={index} className="text-xs text-yellow-300 bg-yellow-400/10 p-2 rounded mb-1">
                    {alert}
                  </div>
                ))}
              </div>
            )}

            {/* Detailed Metrics */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-gray-700/50 pt-3 mt-3"
                >
                  <div className="space-y-2">
                    {Object.entries(metrics).map(([key, value]) => {
                      const Icon = getMetricIcon(key as keyof PerformanceMetrics);
                      const { score, color, label } = getPerformanceScore(key as keyof PerformanceMetrics);
                      
                      return (
                        <div key={key} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <Icon className="w-3 h-3 text-gray-400" />
                            <span className="text-gray-300 uppercase">{key}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-white">{value}{key === 'cls' ? '' : 'ms'}</span>
                            <span className={color}>{label}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={isMonitoring ? stopMonitoring : startMonitoring}
                className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  isMonitoring
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {isMonitoring ? 'Stop' : 'Start'} Monitoring
              </button>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-xs font-medium transition-colors"
              >
                {showDetails ? 'Hide' : 'Show'} Details
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PerformanceMonitor;