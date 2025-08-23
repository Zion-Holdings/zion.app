import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, AlertTriangle, 
  CheckCircle, X, Settings, BarChart3, Gauge,
  Wifi, WifiOff, Battery, BatteryCharging, Monitor,
  Smartphone, Tablet, Laptop, HardDrive, Memory
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

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  screenSize: string;
  userAgent: string;
  connection: string;
  memory?: number;
  cores?: number;
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info' | 'success';
  message: string;
  metric: keyof PerformanceMetrics;
  value: number;
  threshold: number;
  timestamp: Date;
}

const PerformanceMonitor: React.FC<{ showUI?: boolean }> = ({ showUI = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fmp: 0,
    si: 0,
    tti: 0,
    tbt: 0
  });
  
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    type: 'desktop',
    screenSize: '0x0',
    userAgent: '',
    connection: 'unknown'
  });
  
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoOptimize, setAutoOptimize] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<string[]>([]);

  // Performance thresholds for different metrics
  const thresholds = useMemo(() => ({
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 },
    fmp: { good: 2000, poor: 4000 },
    si: { good: 3400, poor: 5800 },
    tti: { good: 3800, poor: 7300 },
    tbt: { good: 300, poor: 600 }
  }), []);

  // Get performance grade based on metric value
  const getGrade = useCallback((metric: keyof PerformanceMetrics, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const threshold = thresholds[metric];
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }, [thresholds]);

  // Get grade color
  const getGradeColor = useCallback((grade: string): string => {
    switch (grade) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  }, []);

  // Get grade icon
  const getGradeIcon = useCallback((grade: string) => {
    switch (grade) {
      case 'good': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'poor': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  }, []);

  // Detect device type and capabilities
  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      
      let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
      if (screenWidth < 768) type = 'mobile';
      else if (screenWidth < 1024) type = 'tablet';
      
      const connection = (navigator as any).connection?.effectiveType || 'unknown';
      const memory = (navigator as any).deviceMemory;
      const cores = (navigator as any).hardwareConcurrency;
      
      setDeviceInfo({
        type,
        screenSize: `${screenWidth}x${screenHeight}`,
        userAgent,
        connection,
        memory,
        cores
      });
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  // Monitor performance metrics
  useEffect(() => {
    if (!showUI) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          const paintEntry = entry as PerformancePaintTiming;
          if (paintEntry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: paintEntry.startTime }));
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          const lcpEntry = entry as any;
          setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
        } else if (entry.entryType === 'first-input') {
          const fidEntry = entry as any;
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as any;
          setMetrics(prev => ({ ...prev, cls: prev.cls + clsEntry.value }));
        }
      });
    });

    // Observe different performance entry types
    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Measure TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Measure other metrics
    const measureSpeedIndex = () => {
      const images = document.querySelectorAll('img');
      let totalLoadTime = 0;
      let loadedImages = 0;
      
      images.forEach(img => {
        if (img.complete) {
          totalLoadTime += performance.now();
          loadedImages++;
        }
      });
      
      if (loadedImages > 0) {
        const speedIndex = totalLoadTime / loadedImages;
        setMetrics(prev => ({ ...prev, si: speedIndex }));
      }
    };

    // Measure after images load
    if (document.readyState === 'complete') {
      measureSpeedIndex();
    } else {
      window.addEventListener('load', measureSpeedIndex);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('load', measureSpeedIndex);
    };
  }, [showUI]);

  // Generate performance alerts
  useEffect(() => {
    const newAlerts: PerformanceAlert[] = [];
    
    Object.entries(metrics).forEach(([metric, value]) => {
      if (value > 0) {
        const grade = getGrade(metric as keyof PerformanceMetrics, value);
        if (grade !== 'good') {
          const threshold = thresholds[metric as keyof PerformanceMetrics];
          const alert: PerformanceAlert = {
            id: `${metric}-${Date.now()}`,
            type: grade === 'poor' ? 'error' : 'warning',
            message: `${metric.toUpperCase()} is ${grade === 'poor' ? 'poor' : 'needs improvement'} (${value.toFixed(2)}ms)`,
            metric: metric as keyof PerformanceMetrics,
            value,
            threshold: grade === 'poor' ? threshold.poor : threshold.good,
            timestamp: new Date()
          };
          newAlerts.push(alert);
        }
      }
    });

    setAlerts(prev => {
      const existingAlertIds = prev.map(a => a.metric);
      const filteredNewAlerts = newAlerts.filter(alert => !existingAlertIds.includes(alert.alert.metric));
      return [...prev, ...filteredNewAlerts];
    });
  }, [metrics, getGrade, thresholds]);

  // Auto-optimization suggestions
  useEffect(() => {
    if (!autoOptimize) return;

    const suggestions: string[] = [];
    
    if (metrics.fcp > thresholds.fcp.needs-improvement) {
      suggestions.push('Optimize critical rendering path');
    }
    if (metrics.lcp > thresholds.lcp.needs-improvement) {
      suggestions.push('Optimize largest contentful paint');
    }
    if (metrics.cls > thresholds.cls.needs-improvement) {
      suggestions.push('Fix layout shifts');
    }
    if (metrics.ttfb > thresholds.ttfb.needs-improvement) {
      suggestions.push('Optimize server response time');
    }

    if (suggestions.length > 0) {
      setOptimizationHistory(prev => [...prev, ...suggestions]);
    }
  }, [metrics, thresholds, autoOptimize]);

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
    setOptimizationHistory(prev => [...prev, 'Images optimized with lazy loading']);
  }, []);

  const optimizeFonts = useCallback(() => {
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach(link => {
      link.setAttribute('crossorigin', 'anonymous');
    });
    setOptimizationHistory(prev => [...prev, 'Fonts optimized with proper crossorigin']);
  }, []);

  const clearOptimizationHistory = useCallback(() => {
    setOptimizationHistory([]);
  }, []);

  // Calculate overall performance score
  const overallScore = useMemo(() => {
    const scores = Object.entries(metrics).map(([metric, value]) => {
      if (value === 0) return 100;
      const grade = getGrade(metric as keyof PerformanceMetrics, value);
      switch (grade) {
        case 'good': return 100;
        case 'needs-improvement': return 60;
        case 'poor': return 20;
        default: return 0;
      }
    }).filter(score => score > 0);
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }, [metrics, getGrade]);

  // Get score color
  const getScoreColor = useCallback((score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  }, []);

  if (!showUI) return null;

  return (
    <>
      {/* Floating Performance Button */}
      <motion.div
        className="fixed bottom-8 left-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={`p-4 rounded-full shadow-lg transition-all duration-200 ${
            isVisible 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-cyan-500 hover:bg-cyan-600 text-white'
          }`}
          aria-label="Toggle performance monitor"
        >
          <Activity className="w-6 h-6" />
        </button>
      </motion.div>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-24 left-8 z-50 w-96 max-h-[80vh] overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-cyan-500/30">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white font-semibold">Performance Monitor</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                    aria-label="Toggle expanded view"
                  >
                    <BarChart3 className="w-4 h-4" />
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

              {/* Content */}
              <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
                {/* Overall Score */}
                <div className="text-center p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/30">
                  <div className="text-3xl font-bold text-white mb-2">
                    <span className={getScoreColor(overallScore)}>{overallScore}</span>
                    <span className="text-gray-400">/100</span>
                  </div>
                  <div className="text-sm text-gray-400">Performance Score</div>
                </div>

                {/* Device Info */}
                <div className="bg-black/30 rounded-xl p-3 border border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Monitor className="w-4 h-4 text-cyan-400" />
                    <span className="text-white text-sm font-medium">Device Info</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                    <div>Type: <span className="text-white">{deviceInfo.type}</span></div>
                    <div>Screen: <span className="text-white">{deviceInfo.screenSize}</span></div>
                    <div>Connection: <span className="text-white">{deviceInfo.connection}</span></div>
                    {deviceInfo.memory && <div>Memory: <span className="text-white">{deviceInfo.memory}GB</span></div>}
                    {deviceInfo.cores && <div>Cores: <span className="text-white">{deviceInfo.cores}</span></div>}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-cyan-400" />
                    <span className="text-white text-sm font-medium">Metrics</span>
                  </div>
                  
                  {Object.entries(metrics).map(([metric, value]) => {
                    if (value === 0) return null;
                    const grade = getGrade(metric as keyof PerformanceMetrics, value);
                    const color = getGradeColor(grade);
                    
                    return (
                      <div key={metric} className="flex items-center justify-between p-2 bg-black/20 rounded-lg">
                        <div className="flex items-center gap-2">
                          {getGradeIcon(grade)}
                          <span className="text-gray-300 text-xs uppercase">{metric}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-mono ${color}`}>
                            {value.toFixed(2)}ms
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            grade === 'good' ? 'bg-green-500/20 text-green-400' :
                            grade === 'needs-improvement' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {grade}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Alerts */}
                {alerts.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                      <span className="text-white text-sm font-medium">Alerts</span>
                    </div>
                    {alerts.slice(0, 3).map(alert => (
                      <div key={alert.id} className={`p-2 rounded-lg text-xs border ${
                        alert.type === 'error' ? 'bg-red-500/20 border-red-500/30 text-red-400' :
                        alert.type === 'warning' ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' :
                        'bg-blue-500/20 border-blue-500/30 text-blue-400'
                      }`}>
                        {alert.message}
                      </div>
                    ))}
                  </div>
                )}

                {/* Optimization Controls */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-cyan-400" />
                    <span className="text-white text-sm font-medium">Optimization</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="autoOptimize"
                      checked={autoOptimize}
                      onChange={(e) => setAutoOptimize(e.target.checked)}
                      className="rounded border-cyan-500/30 text-cyan-500 focus:ring-cyan-500"
                    />
                    <label htmlFor="autoOptimize" className="text-gray-300 text-sm">
                      Auto-optimize
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={optimizeImages}
                      className="px-3 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors text-xs"
                    >
                      Optimize Images
                    </button>
                    <button
                      onClick={optimizeFonts}
                      className="px-3 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors text-xs"
                    >
                      Optimize Fonts
                    </button>
                  </div>
                </div>

                {/* Optimization History */}
                {optimizationHistory.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">History</span>
                      <button
                        onClick={clearOptimizationHistory}
                        className="text-xs text-gray-400 hover:text-white transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                    <div className="max-h-32 overflow-y-auto space-y-1">
                      {optimizationHistory.slice(-5).map((item, index) => (
                        <div key={index} className="text-xs text-gray-400 bg-black/20 p-2 rounded">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;