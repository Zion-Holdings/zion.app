import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, CheckCircle } from 'lucide-react';

/* eslint-disable no-undef */
interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  timestamp: number;
}

interface PerformanceMonitorProps {
  className?: string;
}

// Extended interface for First Input Delay
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  target?: any;
}

// Extended interface for Layout Shift
interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  className = '' 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    timestamp: Date.now()
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Measure Core Web Vitals
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
      }
    });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as FirstInputEntry;
        if (fidEntry.processingStart && fidEntry.startTime) {
          const fid = fidEntry.processingStart - fidEntry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        }
      });
    });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    });

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));
    }

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch {
      // Silently handle performance monitoring errors
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  // Calculate performance scores
  const getPerformanceScore = (metric: keyof PerformanceMetrics): number => {
    const value = metrics[metric];
    if (value === null) return 0;

    switch (metric) {
      case 'fcp':
        return value <= 1800 ? 100 : value <= 3000 ? 50 : 0;
      case 'lcp':
        return value <= 2500 ? 100 : value <= 4000 ? 50 : 0;
      case 'fid':
        return value <= 100 ? 100 : value <= 300 ? 50 : 0;
      case 'cls':
        return value <= 0.1 ? 100 : value <= 0.25 ? 50 : 0;
      case 'ttfb':
        return value <= 800 ? 100 : value <= 1800 ? 50 : 0;
      default:
        return 0;
    }
  };

  const getOverallScore = (): number => {
    const scores = ['fcp', 'lcp', 'fid', 'cls', 'ttfb'].map(metric => 
      getPerformanceScore(metric as keyof PerformanceMetrics)
    );
    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  };

  const getPerformanceStatus = (score: number): 'good' | 'needs-improvement' | 'poor' => {
    if (score >= 90) return 'good';
    if (score >= 70) return 'needs-improvement';
    return 'poor';
  };

  const getPerformanceIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <TrendingUp className="w-5 h-5 text-yellow-400" />;
    return <CheckCircle className="w-5 h-5 text-red-400" />;
  };

  const getStatusIcon = (status: 'good' | 'needs-improvement' | 'poor') => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <TrendingUp className="w-4 h-4" />;
      case 'poor': return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    if (unit === 'ms') return `${Math.round(value)}ms`;
    return `${value.toFixed(3)}`;
  };

  const overallScore = getOverallScore();
  const overallStatus = getPerformanceStatus(overallScore);

  if (!isVisible) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black ${className}`}
        onClick={() => setIsVisible(true)}
        aria-label="Open performance monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed bottom-4 right-4 bg-gray-900/95 backdrop-blur-md border border-gray-600 rounded-lg p-4 text-white max-w-sm z-50 shadow-2xl ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-400" />
          Performance
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} performance monitor`}
          >
            {isExpanded ? '−' : '+'}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close performance monitor"
          >
            ×
          </button>
        </div>
      </div>

      {/* Overall Score */}
      <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Overall Score</span>
          {getPerformanceIcon(overallScore)}
        </div>
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">{overallScore}</div>
          <div className="text-sm text-gray-400">/ 100</div>
          <div className={`ml-auto px-2 py-1 rounded text-xs font-medium ${
            overallStatus === 'good' ? 'bg-green-600/20 text-green-400' :
            overallStatus === 'needs-improvement' ? 'bg-yellow-600/20 text-yellow-400' :
            'bg-red-600/20 text-red-400'
          }`}>
            {overallStatus.replace('-', ' ')}
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      {isExpanded && (
        <div className="space-y-3">
          {[
            { key: 'fcp', label: 'First Contentful Paint', unit: 'ms' },
            { key: 'lcp', label: 'Largest Contentful Paint', unit: 'ms' },
            { key: 'fid', label: 'First Input Delay', unit: 'ms' },
            { key: 'cls', label: 'Cumulative Layout Shift', unit: '' },
            { key: 'ttfb', label: 'Time to First Byte', unit: 'ms' }
          ].map(({ key, label, unit }) => {
            const value = metrics[key as keyof PerformanceMetrics];
            const score = getPerformanceScore(key as keyof PerformanceMetrics);
            const status = getPerformanceStatus(score);
            
            return (
              <div key={key} className="p-3 bg-gray-800/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{label}</span>
                  {getStatusIcon(status)}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">
                    {formatMetric(value, unit)}
                  </div>
                  <div className="text-sm text-gray-400">
                    Score: {score}
                  </div>
                </div>
                <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      score >= 90 ? 'bg-green-500' :
                      score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => window.location.reload()}
          className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
          aria-label="Refresh page to measure performance"
        >
          <Zap className="w-4 h-4 inline mr-1" />
          Refresh
        </button>
        <button
          onClick={() => {
            setMetrics({
              fcp: null,
              lcp: null,
              fid: null,
              cls: null,
              ttfb: null,
              timestamp: Date.now()
            });
          }}
          className="flex-1 px-3 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-lg transition-colors"
          aria-label="Reset performance metrics"
        >
          <Clock className="w-4 h-4 inline mr-1" />
          Reset
        </button>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;