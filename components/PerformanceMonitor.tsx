import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: EventTarget;
}

interface PerformanceNavigationTiming extends PerformanceEntry {
  responseStart: number;
  requestStart: number;
  entryType: string;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Measure First Contentful Paint (FCP)
    const measureFCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: Math.round(entry.startTime) }));
            }
          });
        });
        observer.observe({ entryTypes: ['paint'] });
      }
    };

    // Measure Largest Contentful Paint (LCP)
    const measureLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: Math.round(lastEntry.startTime) }));
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }
    };

    // Measure First Input Delay (FID)
    const measureFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const eventEntry = entry as PerformanceEventTiming;
            if (eventEntry.processingStart) {
              setMetrics(prev => ({ ...prev, fid: Math.round(eventEntry.processingStart - eventEntry.startTime) }));
            }
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      }
    };

    // Measure Cumulative Layout Shift (CLS)
    const measureCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const layoutEntry = entry as LayoutShiftEntry;
            if (!layoutEntry.hadRecentInput) {
              clsValue += layoutEntry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }));
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Measure Time to First Byte (TTFB)
    const measureTTFB = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const navEntry = entry as PerformanceNavigationTiming;
            if (navEntry.entryType === 'navigation') {
              setMetrics(prev => ({ ...prev, ttfb: Math.round(navEntry.responseStart - navEntry.requestStart) }));
            }
          });
        });
        observer.observe({ entryTypes: ['navigation'] });
      }
    };

    // Initialize measurements
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();

    // Fallback for browsers without PerformanceObserver
    if (!('PerformanceObserver' in window)) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: Math.round(navigation.responseStart - navigation.requestStart) 
        }));
      }
    }
  }, []);

  const getMetricStatus = (metric: keyof PerformanceMetrics) => {
    const value = metrics[metric];
    if (value === null) return 'pending';
    
    switch (metric) {
      case 'fcp':
        return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
      case 'lcp':
        return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
      case 'fid':
        return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
      case 'cls':
        return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
      case 'ttfb':
        return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
      default:
        return 'pending';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <TrendingUp className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <AlertTriangle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl p-4 shadow-2xl z-50 max-w-sm"
    >
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-5 h-5 text-cyan-400" />
        <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
      </div>
      
      <div className="space-y-2">
        {Object.entries(metrics).map(([key, value]) => {
          const status = getMetricStatus(key as keyof PerformanceMetrics);
          const statusColor = getStatusColor(status);
          const statusIcon = getStatusIcon(status);
          
          return (
            <div key={key} className="flex items-center justify-between text-xs">
              <span className="text-gray-300 uppercase tracking-wide">{key}</span>
              <div className="flex items-center gap-2">
                <span className={`font-mono ${statusColor}`}>
                  {value !== null ? `${value}${key === 'cls' ? '' : 'ms'}` : '...'}
                </span>
                <span className={statusColor}>{statusIcon}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-700">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Zap className="w-3 h-3" />
          <span>Real-time monitoring</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;