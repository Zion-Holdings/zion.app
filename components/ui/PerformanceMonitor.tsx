import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

// Performance entry interfaces
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
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
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_PERF_MONITOR === 'true') {
      setIsVisible(true);
      measurePerformance();
    }
  }, []);

  const measurePerformance = () => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fid = entries[entries.length - 1] as FirstInputEntry;
        if (fid && 'processingStart' in fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((entryList) => {
        let cls = 0;
        for (const entry of entryList.getEntries()) {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          if (!layoutShiftEntry.hadRecentInput) {
            cls += layoutShiftEntry.value;
          }
        }
        setMetrics(prev => ({ ...prev, cls }));
      }).observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }
    }
  };

  const getScore = (metric: keyof PerformanceMetrics, value: number | null): { score: number; color: string; label: string } => {
    if (value === null) return { score: 0, color: 'text-gray-400', label: 'N/A' };
    
    let score = 0;
    let color = 'text-red-400';
    let label = 'Poor';

    switch (metric) {
      case 'fcp':
        if (value < 1800) { score = 100; color = 'text-green-400'; label = 'Good'; }
        else if (value < 3000) { score = 50; color = 'text-yellow-400'; label = 'Needs Improvement'; }
        break;
      case 'lcp':
        if (value < 2500) { score = 100; color = 'text-green-400'; label = 'Good'; }
        else if (value < 4000) { score = 50; color = 'text-yellow-400'; label = 'Needs Improvement'; }
        break;
      case 'fid':
        if (value < 100) { score = 100; color = 'text-green-400'; label = 'Good'; }
        else if (value < 300) { score = 50; color = 'text-yellow-400'; label = 'Needs Improvement'; }
        break;
      case 'cls':
        if (value < 0.1) { score = 100; color = 'text-green-400'; label = 'Good'; }
        else if (value < 0.25) { score = 50; color = 'text-yellow-400'; label = 'Needs Improvement'; }
        break;
      case 'ttfb':
        if (value < 800) { score = 100; color = 'text-green-400'; label = 'Good'; }
        else if (value < 1800) { score = 50; color = 'text-yellow-400'; label = 'Needs Improvement'; }
        break;
    }

    return { score, color, label };
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 bg-black/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 max-w-sm"
    >
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-5 h-5 text-cyan-400" />
        <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
      </div>
      
      <div className="space-y-2 text-xs">
        {Object.entries(metrics).map(([key, value]) => {
          const { score, color, label } = getScore(key as keyof PerformanceMetrics, value);
          const displayValue = value ? `${value.toFixed(2)}${key === 'cls' ? '' : 'ms'}` : 'N/A';
          
          return (
            <div key={key} className="flex items-center justify-between">
              <span className="text-gray-300 uppercase">{key}</span>
              <div className="flex items-center gap-2">
                <span className={color}>{displayValue}</span>
                <span className={`text-xs px-2 py-1 rounded ${color.replace('text-', 'bg-').replace('-400', '-400/20')}`}>
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-700">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Zap className="w-4 h-4" />
          <span>Core Web Vitals</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;