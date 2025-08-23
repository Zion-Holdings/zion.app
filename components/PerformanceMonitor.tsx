import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  X,
  Zap
} from 'lucide-react';

// Add type definitions for PerformanceObserver entries
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: { addEventListener: (event: string, handler: () => void) => void; removeEventListener: (event: string, handler: () => void) => void };
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
}

interface PerformanceMonitorProps {
  showUI?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showUI = true,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fmp: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState(0);
  const [alerts, setAlerts] = useState<string[]>([]);

  // Performance thresholds
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 },
    fmp: { good: 2000, poor: 4000 }
  };

  // Calculate performance score
  const calculateScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.fcp > thresholds.fcp.poor) score -= 20;
    else if (metrics.fcp > thresholds.fcp.good) score -= 10;
    
    if (metrics.lcp > thresholds.lcp.poor) score -= 20;
    else if (metrics.lcp > thresholds.lcp.good) score -= 10;
    
    if (metrics.fid > thresholds.fid.poor) score -= 20;
    else if (metrics.fid > thresholds.fid.good) score -= 10;
    
    if (metrics.cls > thresholds.cls.poor) score -= 20;
    else if (metrics.cls > thresholds.cls.good) score -= 10;
    
    if (metrics.ttfb > thresholds.ttfb.poor) score -= 10;
    else if (metrics.ttfb > thresholds.ttfb.good) score -= 5;
    
    return Math.max(0, score);
  };

  // Get performance rating
  const getRating = (score: number): { label: string; color: string; icon: React.ReactNode } => {
    if (score >= 90) return { label: 'Excellent', color: 'text-green-400', icon: <CheckCircle className="w-4 h-4" /> };
    if (score >= 70) return { label: 'Good', color: 'text-yellow-400', icon: <TrendingUp className="w-4 h-4" /> };
    if (score >= 50) return { label: 'Fair', color: 'text-orange-400', icon: <AlertTriangle className="w-4 h-4" /> };
    return { label: 'Poor', color: 'text-red-400', icon: <AlertTriangle className="w-4 h-4" /> };
  };

  // Get metric status
  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number) => {
    const threshold = thresholds[metric];
    if (value <= threshold.good) return { status: 'good', color: 'text-green-400' };
    if (value <= threshold.poor) return { status: 'needs-improvement', color: 'text-yellow-400' };
    return { status: 'poor', color: 'text-red-400' };
  };

  // Measure performance metrics
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({
          ...prev,
          fcp: Math.round(fcpEntry.startTime)
        }));
      }
    });
    
    fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });
    
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        setMetrics(prev => ({
          ...prev,
          lcp: Math.round(lcpEntry.startTime)
        }));
      }
    });
    
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    
    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fidEntry = entries.find(entry => entry.entryType === 'first-input');
      if (fidEntry) {
        const eventTiming = fidEntry as PerformanceEventTiming;
        setMetrics(prev => ({
          ...prev,
          fid: Math.round(eventTiming.processingStart - eventTiming.startTime)
        }));
      }
    });
    
    fidObserver.observe({ entryTypes: ['first-input'] });
    
    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
        }
      }
      setMetrics(prev => ({
        ...prev,
        cls: Math.round(clsValue * 1000) / 1000
      }));
    });
    
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    
    // First Meaningful Paint
    const fmpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fmpEntry = entries.find(entry => entry.name === 'first-meaningful-paint');
      if (fmpEntry) {
        setMetrics(prev => ({
          ...prev,
          fmp: Math.round(fmpEntry.startTime)
        }));
      }
    });
    
    fmpObserver.observe({ entryTypes: ['first-meaningful-paint'] });
    
    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({
        ...prev,
        ttfb: Math.round(navigationEntry.responseStart - navigationEntry.requestStart)
      }));
    }
    
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fmpObserver.disconnect();
    };
  }, []);

  // Update performance score and generate alerts
  useEffect(() => {
    const score = calculateScore(metrics);
    setPerformanceScore(score);
    
    // Generate alerts for poor performance
    const newAlerts: string[] = [];
    Object.entries(metrics).forEach(([key, value]) => {
      const threshold = thresholds[key as keyof PerformanceMetrics];
      if (value > threshold.poor) {
        newAlerts.push(`${key.toUpperCase()} is ${value > threshold.poor * 1.5 ? 'critically' : ''} slow: ${value.toFixed(0)}ms`);
      }
    });
    setAlerts(newAlerts);

    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as { gtag: (event: string, action: string, params: Record<string, unknown>) => void }).gtag) {
      (window as { gtag: (event: string, action: string, params: Record<string, unknown>) => void }).gtag('event', 'performance_metrics', {
        event_category: 'performance',
        event_label: 'core_web_vitals',
        value: score,
        custom_parameters: metrics
      });
    }

    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  // Format metric value
  const formatMetric = (metric: keyof PerformanceMetrics, value: number): string => {
    if (metric === 'cls') return value.toFixed(3);
    return `${value.toFixed(0)}ms`;
  };

  if (!showUI) return null;

  const rating = getRating(performanceScore);

  return (
    <>
      {/* Performance Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full shadow-2xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300/50"
        aria-label="Performance Monitor"
        aria-expanded={isVisible}
      >
        <BarChart3 className="w-6 h-6" />
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-4 z-50 w-96 bg-black/95 backdrop-blur-xl border border-green-400/30 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 border-b border-green-400/30">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Performance Monitor
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close performance monitor"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            
            {/* Performance Score */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">{performanceScore}</span>
                <span className="text-sm text-gray-300">/ 100</span>
              </div>
              <div className={`flex items-center gap-2 ${rating.color}`}>
                {rating.icon}
                <span className="text-sm font-medium">{rating.label}</span>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="p-4 space-y-3">
            {Object.entries(metrics).map(([key, value]) => {
              const status = getMetricStatus(key as keyof PerformanceMetrics, value);
              return (
                <div key={key} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{key.toUpperCase()}</div>
                      <div className="text-gray-400 text-xs">
                        {key === 'fcp' && 'First Contentful Paint'}
                        {key === 'lcp' && 'Largest Contentful Paint'}
                        {key === 'fid' && 'First Input Delay'}
                        {key === 'cls' && 'Cumulative Layout Shift'}
                        {key === 'ttfb' && 'Time to First Byte'}
                        {key === 'fmp' && 'First Meaningful Paint'}
                      </div>
                    </div>
                  </div>
                  <div className={`text-right ${status.color}`}>
                    <div className="font-semibold">{formatMetric(key as keyof PerformanceMetrics, value)}</div>
                    <div className="text-xs capitalize">{status.status}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="p-4 border-t border-green-400/30">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                Performance Alerts
              </h4>
              <div className="space-y-2">
                {alerts.map((alert, index) => (
                  <div key={index} className="text-xs text-yellow-400 bg-yellow-400/10 p-2 rounded">
                    {alert}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default PerformanceMonitor;