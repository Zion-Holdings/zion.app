import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, AlertTriangle, X, Settings, RefreshCw, BarChart3, Gauge,
  Wifi, WifiOff, HardDrive, Cpu
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

interface SystemMetrics {
  memory: {
    used: number;
    total: number;
    percentage: number;
  };
  cpu: {
    usage: number;
    cores: number;
  };
  network: {
    status: 'online' | 'offline';
    latency: number;
    bandwidth: number;
  };
  storage: {
    used: number;
    total: number;
    percentage: number;
  };
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb: 0, fmp: 0, si: 0, tti: 0
  });
  const [systemMetrics, setSystemMetrics] = useState<SystemMetrics>({
    memory: { used: 0, total: 0, percentage: 0 },
    cpu: { usage: 0, cores: 0 },
    network: { status: 'online', latency: 0, bandwidth: 0 },
    storage: { used: 0, total: 0, percentage: 0 }
  });
  const [alerts, setAlerts] = useState<string[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      initializePerformanceMonitoring();
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Initialize performance monitoring
  const initializePerformanceMonitoring = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch {
        // FCP monitoring not supported
      }

      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch {
        // LCP monitoring not supported
      }

      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            const firstInputEntry = entry as PerformanceEntry & { processingStart?: number };
            if (firstInputEntry.processingStart && firstInputEntry.startTime) {
              const fid = firstInputEntry.processingStart - firstInputEntry.startTime;
              setMetrics(prev => ({ ...prev, fid }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch {
        // FID monitoring not supported
      }

      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
            if (!entry.hadRecentInput && entry.value) {
              clsValue += entry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch {
        // CLS monitoring not supported
      }
    }
    getInitialMetrics();
  }, []);

  // Get initial performance metrics
  const getInitialMetrics = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigation.responseStart - navigation.requestStart,
          fmp: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          tti: navigation.domInteractive - navigation.fetchStart
        }));
      }
    }
  }, []);

  // Start continuous monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      updateSystemMetrics();
      checkPerformanceAlerts();
    }, 5000); // Fixed refresh interval
  }, []);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Update system metrics
  const updateSystemMetrics = useCallback(() => {
    // Simulate system metrics (in real app, these would come from actual system APIs)
    const mockMemory = {
      used: Math.random() * 8 + 2, // 2-10 GB
      total: 16,
      percentage: Math.random() * 60 + 20 // 20-80%
    };

    const mockCpu = {
      usage: Math.random() * 40 + 10, // 10-50%
      cores: navigator.hardwareConcurrency || 8
    };

    const mockNetwork = {
      status: (navigator.onLine ? 'online' : 'offline') as 'online' | 'offline',
      latency: Math.random() * 100 + 20, // 20-120ms
      bandwidth: Math.random() * 100 + 50 // 50-150 Mbps
    };

    const mockStorage = {
      used: Math.random() * 500 + 100, // 100-600 GB
      total: 1000,
      percentage: Math.random() * 60 + 20 // 20-80%
    };

    setSystemMetrics({
      memory: mockMemory,
      cpu: mockCpu,
      network: mockNetwork,
      storage: mockStorage
    });
  }, []);

  // Check for performance alerts
  const checkPerformanceAlerts = useCallback(() => {
    const newAlerts: string[] = [];

    if (metrics.fcp > 2000) {
      newAlerts.push('First Contentful Paint is slow (>2s)');
    }
    if (metrics.lcp > 4000) {
      newAlerts.push('Largest Contentful Paint is slow (>4s)');
    }
    if (metrics.fid > 100) {
      newAlerts.push('First Input Delay is high (>100ms)');
    }
    if (metrics.cls > 0.1) {
      newAlerts.push('Cumulative Layout Shift is poor (>0.1)');
    }
    if (metrics.ttfb > 600) {
      newAlerts.push('Time to First Byte is slow (>600ms)');
    }

    if (systemMetrics.memory.percentage > 80) {
      newAlerts.push('Memory usage is high (>80%)');
    }
    if (systemMetrics.cpu.usage > 80) {
      newAlerts.push('CPU usage is high (>80%)');
    }
    if (systemMetrics.network.latency > 100) {
      newAlerts.push('Network latency is high (>100ms)');
    }

    setAlerts(newAlerts);
  }, [metrics, systemMetrics]);

  // Get performance score
  const getPerformanceScore = useCallback(() => {
    let score = 100;
    
    if (metrics.fcp > 2000) score -= 20;
    if (metrics.lcp > 4000) score -= 25;
    if (metrics.fid > 100) score -= 15;
    if (metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb > 600) score -= 20;
    
    return Math.max(0, score);
  }, [metrics]);

  // Get performance grade
  const getPerformanceGrade = useCallback((score: number) => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400', bg: 'bg-green-500/20' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-400', bg: 'bg-yellow-500/20' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-400', bg: 'bg-orange-500/20' };
    if (score >= 60) return { grade: 'D', color: 'text-red-400', bg: 'bg-red-500/20' };
    return { grade: 'F', color: 'text-red-500', bg: 'bg-red-500/20' };
  }, []);

  // Refresh metrics
  const refreshMetrics = useCallback(() => {
    getInitialMetrics();
    updateSystemMetrics();
    checkPerformanceAlerts();
  }, [getInitialMetrics, updateSystemMetrics, checkPerformanceAlerts]);

  // Toggle monitoring
  useEffect(() => {
    if (isMonitoring) {
      startMonitoring();
    } else {
      stopMonitoring();
    }
  }, [isMonitoring, startMonitoring, stopMonitoring]);

  const performanceScore = getPerformanceScore();
  const performanceGrade = getPerformanceGrade(performanceScore);

  return (
    <>
      {/* Performance Monitor Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Performance monitor"
        aria-expanded={isOpen}
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 left-6 z-40 w-96 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-purple-400" />
                  Performance Monitor
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                    aria-label={isMinimized ? 'Expand' : 'Minimize'}
                  >
                    <BarChart3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={refreshMetrics}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                    aria-label="Refresh metrics"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                    aria-label="Close performance monitor"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {!isMinimized && (
                <div className="space-y-6">
                  {/* Performance Score */}
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${performanceGrade.bg} mb-3`}>
                      <span className={`text-3xl font-bold ${performanceGrade.color}`}>
                        {performanceGrade.grade}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{performanceScore}</div>
                    <div className="text-sm text-gray-400">Performance Score</div>
                  </div>

                  {/* Core Web Vitals */}
                  <div>
                    <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      Core Web Vitals
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-1">FCP</div>
                        <div className="text-lg font-semibold text-white">
                          {metrics.fcp > 0 ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
                        </div>
                        <div className={`text-xs ${metrics.fcp > 0 && metrics.fcp <= 2000 ? 'text-green-400' : 'text-red-400'}`}>
                          {metrics.fcp > 0 && metrics.fcp <= 2000 ? 'Good' : 'Needs improvement'}
                        </div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-1">LCP</div>
                        <div className="text-lg font-semibold text-white">
                          {metrics.lcp > 0 ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                        </div>
                        <div className={`text-xs ${metrics.lcp > 0 && metrics.lcp <= 4000 ? 'text-green-400' : 'text-red-400'}`}>
                          {metrics.lcp > 0 && metrics.lcp <= 4000 ? 'Good' : 'Needs improvement'}
                        </div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-1">FID</div>
                        <div className="text-lg font-semibold text-white">
                          {metrics.fid > 0 ? `${Math.round(metrics.fid)}ms` : 'N/A'}
                        </div>
                        <div className={`text-xs ${metrics.fid > 0 && metrics.fid <= 100 ? 'text-green-400' : 'text-red-400'}`}>
                          {metrics.fid > 0 && metrics.fid <= 100 ? 'Good' : 'Needs improvement'}
                        </div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-1">CLS</div>
                        <div className="text-lg font-semibold text-white">
                          {metrics.cls > 0 ? metrics.cls.toFixed(3) : 'N/A'}
                        </div>
                        <div className={`text-xs ${metrics.cls > 0 && metrics.cls <= 0.1 ? 'text-green-400' : 'text-red-400'}`}>
                          {metrics.cls > 0 && metrics.cls <= 0.1 ? 'Good' : 'Needs improvement'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* System Metrics */}
                  <div>
                    <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-blue-400" />
                      System Metrics
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300 flex items-center gap-2">
                          <HardDrive className="w-4 h-4" />
                          Memory
                        </span>
                        <span className="text-sm text-white">
                          {systemMetrics.memory.percentage.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            systemMetrics.memory.percentage > 80 ? 'bg-red-500' : 
                            systemMetrics.memory.percentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${systemMetrics.memory.percentage}%` }}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300 flex items-center gap-2">
                          <Cpu className="w-4 h-4" />
                          CPU
                        </span>
                        <span className="text-sm text-white">
                          {systemMetrics.cpu.usage.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            systemMetrics.cpu.usage > 80 ? 'bg-red-500' : 
                            systemMetrics.cpu.usage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${systemMetrics.cpu.usage}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300 flex items-center gap-2">
                          {systemMetrics.network.status === 'online' ? 
                            <Wifi className="w-4 h-4 text-green-400" /> : 
                            <WifiOff className="w-4 h-4 text-red-400" />
                          }
                          Network
                        </span>
                        <span className="text-sm text-white">
                          {systemMetrics.network.latency.toFixed(0)}ms
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Monitoring Controls */}
                  <div>
                    <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                      <Settings className="w-4 h-4 text-gray-400" />
                      Monitoring
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Continuous Monitoring</span>
                      <button
                        onClick={() => setIsMonitoring(!isMonitoring)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          isMonitoring ? 'bg-green-500' : 'bg-gray-600'
                        }`}
                        aria-label={`${isMonitoring ? 'Stop' : 'Start'} monitoring`}
                      >
                        <motion.div
                          className="w-5 h-5 bg-white rounded-full shadow-md"
                          animate={{ x: isMonitoring ? 24 : 2 }}
                          transition={{ duration: 0.2 }}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Alerts */}
                  {alerts.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-400" />
                        Performance Alerts
                      </h4>
                      <div className="space-y-2">
                        {alerts.map((alert, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                            <span className="text-sm text-yellow-300">{alert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedPerformanceMonitor;