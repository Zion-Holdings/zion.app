import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, AlertTriangle, 
  CheckCircle, XCircle, Info, BarChart3, Gauge
} from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
  fmp: number;
  tti: number;
}

interface PerformanceMonitorProps {
  showUI?: boolean;
  autoHide?: boolean;
  threshold?: {
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

// Type definitions for PerformanceObserver entries
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: EventTarget;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceResourceTiming extends PerformanceEntry {
  initiatorType: string;
  duration: number;
  name: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showUI = false,
  autoHide = true,
  threshold = {
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 800
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
    fmp: 0,
    tti: 0
  });
  const [isVisible, setIsVisible] = useState(showUI);
  const [alerts, setAlerts] = useState<string[]>([]);
  const [overallScore, setOverallScore] = useState(0);

  const calculateScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;
    
    // LCP scoring (0-2500ms, lower is better)
    if (metrics.lcp > threshold.lcp) {
      score -= Math.min(30, (metrics.lcp - threshold.lcp) / 100);
    }
    
    // FID scoring (0-100ms, lower is better)
    if (metrics.fid > threshold.fid) {
      score -= Math.min(25, (metrics.fid - threshold.fid) / 10);
    }
    
    // CLS scoring (0-0.1, lower is better)
    if (metrics.cls > threshold.cls) {
      score -= Math.min(25, (metrics.cls / threshold.cls) * 25);
    }
    
    // TTFB scoring (0-800ms, lower is better)
    if (metrics.ttfb > threshold.ttfb) {
      score -= Math.min(20, (metrics.ttfb - threshold.ttfb) / 100);
    }
    
    return Math.max(0, Math.round(score));
  }, [threshold]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return <XCircle className="w-5 h-5 text-red-400" />;
  };

  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number) => {
    const thresholds = {
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 800, needsImprovement: 1800 }
    };
    
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm w-full"
        >
          <div className="bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold text-white">Performance Monitor</span>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <XCircle className="w-4 h-4" />
              </button>
            </div>

            {/* Overall Score */}
            <div className="p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Overall Score</span>
                {getScoreIcon(overallScore)}
              </div>
              <div className="flex items-center space-x-3">
                <div className={`text-3xl font-bold ${getScoreColor(overallScore)}`}>
                  {overallScore}
                </div>
                <div className="flex-1">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        overallScore >= 90 ? 'bg-green-500' : overallScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${overallScore}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="p-4 space-y-3">
              {Object.entries(metrics).map(([key, value]) => {
                if (key === 'fmp' || key === 'tti') return null; // Skip less important metrics
                
                const status = getMetricStatus(key as keyof PerformanceMetrics, value);
                const color = getMetricColor(status);
                const icon = getMetricIcon(status);
                
                return (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {icon}
                      <span className="text-sm text-gray-300 uppercase">{key}</span>
                    </div>
                    <div className={`text-sm font-mono ${color}`}>
                      {key === 'cls' ? value.toFixed(3) : `${Math.round(value)}ms`}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="p-4 border-t border-white/10 bg-red-500/10">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-medium text-red-400">Performance Issues</span>
                </div>
                <div className="space-y-1">
                  {alerts.slice(0, 3).map((alert, index) => (
                    <div key={index} className="text-xs text-red-300">
                      • {alert}
                    </div>
                  ))}
                  {alerts.length > 3 && (
                    <div className="text-xs text-red-400">
                      +{alerts.length - 3} more issues
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="p-3 bg-gray-900/50 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Real-time monitoring</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
  );
};

// Helper function to get score colors
const getScoreColor = (score: string): string => {
  switch (score) {
    case 'Good':
    case 'Excellent':
      return 'text-green-400';
    case 'Needs Improvement':
      return 'text-yellow-400';
    case 'Poor':
      return 'text-red-400';
    default:
      return 'text-white/60';
  }
};

export default PerformanceMonitor;