import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || localStorage.getItem('showPerformance') === 'true') {
      setIsVisible(true);
    }

    const measurePerformance = () => {
      if ('PerformanceObserver' in window) {
        // Measure First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          if (fcp) {
            setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Measure Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          if (lcp) {
            setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Measure First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fid = entries[entries.length - 1];
          if (fid) {
            setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Measure Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Measure Time to First Byte
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
        }

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      }
    };

    // Wait for page to load before measuring
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  const getScore = (metric: keyof PerformanceMetrics, value: number): { score: number; color: string; label: string } => {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 800, needsImprovement: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return { score: 0, color: 'text-gray-500', label: 'Unknown' };

    if (value <= threshold.good) {
      return { score: 100, color: 'text-green-500', label: 'Good' };
    } else if (value <= threshold.needsImprovement) {
      return { score: 50, color: 'text-yellow-500', label: 'Needs Improvement' };
    } else {
      return { score: 0, color: 'text-red-500', label: 'Poor' };
    }
  };

  const formatMetric = (metric: keyof PerformanceMetrics, value: number): string => {
    if (metric === 'cls') {
      return value.toFixed(3);
    }
    return `${Math.round(value)}ms`;
  };

  if (!isVisible || !metrics) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-4 shadow-2xl shadow-zion-cyan/20 z-50 max-w-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-sm flex items-center gap-2">
          <Activity className="w-4 h-4 text-zion-cyan" />
          Performance Metrics
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-zion-slate-light hover:text-zion-cyan transition-colors"
        >
          ×
        </button>
      </div>

      <div className="space-y-2">
        {Object.entries(metrics).map(([key, value]) => {
          const { score, color, label } = getScore(key as keyof PerformanceMetrics, value);
          return (
            <div key={key} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-zion-slate-light uppercase tracking-wide">
                  {key}
                </span>
                <span className={`${color} font-medium`}>
                  {label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-mono">
                  {formatMetric(key as keyof PerformanceMetrics, value)}
                </span>
                <div className="w-16 h-2 bg-zion-blue-light/20 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      score >= 80 ? 'bg-green-500' : score >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 pt-3 border-t border-zion-cyan/20">
        <div className="flex items-center justify-between text-xs">
          <span className="text-zion-slate-light">Overall Score</span>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-zion-cyan" />
            <span className="text-white font-semibold">
              {Math.round(
                Object.entries(metrics).reduce((acc, [key, value]) => {
                  return acc + getScore(key as keyof PerformanceMetrics, value).score;
                }, 0) / Object.keys(metrics).length
              )}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};