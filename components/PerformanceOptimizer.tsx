import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if PerformanceObserver is supported
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries[entries.length - 1];
        if (fidEntry) {
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
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

      // Time to First Byte
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
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const getScore = (metric: keyof PerformanceMetrics, value: number | null): { score: number; color: string; label: string } => {
    if (value === null) return { score: 0, color: 'text-gray-400', label: 'N/A' };

    let score = 0;
    let color = 'text-red-400';
    let label = 'Poor';

    switch (metric) {
      case 'fcp':
        if (value <= 1800) { score = 100; color = 'text-green-400'; label = 'Good'; }
        else if (value <= 3000) { score = 80; color = 'text-yellow-400'; label = 'Needs Improvement'; }
        break;
      case 'lcp':
        if (value <= 2500) { score = 100; color = 'text-green-400'; label = 'Good'; }
        else if (value <= 4000) { score = 80; color = 'text-yellow-400'; label = 'Needs Improvement'; }
        break;
      case 'fid':
        if (value <= 100) { score = 100; color = 'text-green-400'; label = 'Good'; }
        else if (value <= 300) { score = 80; color = 'text-yellow-400'; label = 'Needs Improvement'; }
        break;
      case 'cls':
        if (value <= 0.1) { score = 100; color = 'text-green-400'; label = 'Good'; }
        else if (value <= 0.25) { score = 80; color = 'text-yellow-400'; label = 'Needs Improvement'; }
        break;
      case 'ttfb':
        if (value <= 800) { score = 100; color = 'text-green-400'; label = 'Good'; }
        else if (value <= 1800) { score = 80; color = 'text-yellow-400'; label = 'Needs Improvement'; }
        break;
    }

    return { score, color, label };
  };

  const formatMetric = (metric: keyof PerformanceMetrics, value: number | null): string => {
    if (value === null) return 'N/A';
    
    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'fid':
      case 'ttfb':
        return `${Math.round(value)}ms`;
      case 'cls':
        return value.toFixed(3);
      default:
        return value.toString();
    }
  };

  const getOverallScore = (): number => {
    const scores = Object.values(metrics).map(value => 
      value !== null ? getScore('fcp', value).score : 0
    );
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 shadow-2xl max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${getOverallScore() >= 90 ? 'bg-green-400' : getOverallScore() >= 70 ? 'bg-yellow-400' : 'bg-red-400'}`} />
            <span className="text-white text-xs font-bold">{getOverallScore()}</span>
          </div>
        </div>

        <div className="space-y-2">
          {Object.entries(metrics).map(([key, value]) => {
            const { score, color, label } = getScore(key as keyof PerformanceMetrics, value);
            return (
              <div key={key} className="flex items-center justify-between text-xs">
                <span className="text-gray-400 uppercase tracking-wide">{key}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-white">{formatMetric(key as keyof PerformanceMetrics, value)}</span>
                  <span className={color}>{label}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3 pt-3 border-t border-gray-700/50">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">Overall Score</span>
            <span className={`font-bold ${getOverallScore() >= 90 ? 'text-green-400' : getOverallScore() >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>
              {getOverallScore()}/100
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceOptimizer;