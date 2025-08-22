import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Gauge, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showDetails = false, 
  className = '' 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const getPerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring (0-2000ms is good)
    if (metrics.fcp > 2000) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP scoring (0-2500ms is good)
    if (metrics.lcp > 4000) score -= 25;
    else if (metrics.lcp > 2500) score -= 15;
    
    // FID scoring (0-100ms is good)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;
    
    // CLS scoring (0-0.1 is good)
    if (metrics.cls > 0.25) score -= 25;
    else if (metrics.cls > 0.1) score -= 15;
    
    return Math.max(0, score);
  }, []);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    if (score >= 50) return 'text-orange-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <TrendingUp className="w-4 h-4" />;
    if (score >= 70) return <Gauge className="w-4 h-4" />;
    if (score >= 50) return <Clock className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number): { color: string; status: string } => {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1000, needsImprovement: 2000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 800, needsImprovement: 1800 }
    };

    const threshold = thresholds[metric];
    if (value <= threshold.good) return { color: 'text-green-400', status: 'Good' };
    if (value <= threshold.needsImprovement) return { color: 'text-yellow-400', status: 'Needs Improvement' };
    return { color: 'text-red-400', status: 'Poor' };
  };

  useEffect(() => {
    // Check if Performance Observer is supported
    if (!('PerformanceObserver' in window)) {
      console.warn('Performance Observer not supported');
      return;
    }

    let fcpObserver: PerformanceObserver | null = null;
    let lcpObserver: PerformanceObserver | null = null;
    let fidObserver: PerformanceObserver | null = null;
    let clsObserver: PerformanceObserver | null = null;

    try {
      // First Contentful Paint
      fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => prev ? { ...prev, fcp: fcpEntry.startTime } : null);
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => prev ? { ...prev, lcp: lastEntry.startTime } : null);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries[0];
        if (fidEntry) {
          setMetrics(prev => prev ? { ...prev, fid: fidEntry.processingStart - fidEntry.startTime } : null);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte (from navigation timing)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => prev ? { ...prev, ttfb } : { fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb });
      }

    } catch (error) {
      console.error('Error setting up performance observers:', error);
    }

    // Cleanup
    return () => {
      fcpObserver?.disconnect();
      lcpObserver?.disconnect();
      fidObserver?.disconnect();
      clsObserver?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (metrics) {
      setIsVisible(true);
    }
  }, [metrics]);

  if (!metrics) {
    return (
      <div className={`flex items-center gap-2 text-sm text-gray-400 ${className}`}>
        <Zap className="w-4 h-4" />
        <span>Loading performance metrics...</span>
      </div>
    );
  }

  const score = getPerformanceScore(metrics);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-2 text-sm ${className}`}
    >
      <div className="flex items-center gap-2">
        <Zap className="w-4 h-4 text-cyan-400" />
        <span className="text-gray-300">Performance:</span>
        <span className={`font-semibold ${getScoreColor(score)} flex items-center gap-1`}>
          {getScoreIcon(score)}
          {score}
        </span>
      </div>

      {showDetails && (
        <div className="hidden md:flex items-center gap-4 ml-4 text-xs">
          <div className="flex items-center gap-1">
            <span className="text-gray-400">FCP:</span>
            <span className={getMetricStatus('fcp', metrics.fcp).color}>
              {Math.round(metrics.fcp)}ms
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-400">LCP:</span>
            <span className={getMetricStatus('lcp', metrics.lcp).color}>
              {Math.round(metrics.lcp)}ms
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-400">FID:</span>
            <span className={getMetricStatus('fid', metrics.fid).color}>
              {Math.round(metrics.fid)}ms
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-400">CLS:</span>
            <span className={getMetricStatus('cls', metrics.cls).color}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-400">TTFB:</span>
            <span className={getMetricStatus('ttfb', metrics.ttfb).color}>
              {Math.round(metrics.ttfb)}ms
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default PerformanceMonitor;