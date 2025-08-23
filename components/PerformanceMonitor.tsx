import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, AlertTriangle, 
  CheckCircle, Clock, Zap
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcpScore: string;
  lcpScore: string;
  fidScore: string;
  clsScore: string;
  ttfbScore: string;
  overallScore: string;
}

interface PerformanceMonitorProps {
  showUI?: boolean;
  autoHide?: boolean;
  hideDelay?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showUI = false,
  autoHide = true,
  hideDelay = 5000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcpScore: 'Good',
    lcpScore: 'Good',
    fidScore: 'Good',
    clsScore: 'Good',
    ttfbScore: 'Good',
    overallScore: 'Good'
  });

  const [showMonitor, setShowMonitor] = useState(showUI);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries[entries.length - 1];
      if (fcpEntry) {
        updateMetrics('fcp', fcpEntry.startTime);
      }
    });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        updateMetrics('lcp', lcpEntry.startTime);
      }
    });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fidEntry = entries[entries.length - 1] as PerformanceEntry & { processingStart?: number };
      if (fidEntry && 'processingStart' in fidEntry) {
        updateMetrics('fid', fidEntry.processingStart - fidEntry.startTime);
      }
    });

    // Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value || 0;
        }
      }
      updateMetrics('cls', clsValue);
    });

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      updateMetrics('ttfb', navigationEntry.responseStart - navigationEntry.requestStart);
    }

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      // Performance monitoring not fully supported
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  const updateMetrics = (key: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => {
      const newMetrics = { ...prev, [key]: value };
      
      // Calculate scores
      const scores = {
        fcp: getScore(value, key === 'fcp' ? 1800 : key === 'lcp' ? 2500 : key === 'fid' ? 100 : key === 'cls' ? 0.1 : 600),
        lcp: getScore(newMetrics.lcp, 2500),
        fid: getScore(newMetrics.fid, 100),
        cls: getScore(newMetrics.cls, 0.1),
        ttfb: getScore(newMetrics.ttfb, 600)
      };

      const overallScore = getOverallScore(scores);

      return {
        ...newMetrics,
        fcpScore: scores.fcp,
        lcpScore: scores.lcp,
        fidScore: scores.fid,
        clsScore: scores.cls,
        ttfbScore: scores.ttfb,
        overallScore
      };
    });
  };

  const getScore = (value: number, threshold: number): string => {
    if (value <= threshold) return 'Good';
    if (value <= threshold * 1.5) return 'Needs Improvement';
    return 'Poor';
  };

  const getOverallScore = (scores: Record<string, string>): string => {
    const scoreCounts = Object.values(scores).reduce((acc, score) => {
      acc[score] = (acc[score] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    if (scoreCounts['Good'] >= 4) return 'Excellent';
    if (scoreCounts['Good'] >= 3) return 'Good';
    if (scoreCounts['Poor'] >= 2) return 'Poor';
    return 'Needs Improvement';
  };

  const getScoreColor = (score: string): string => {
    switch (score) {
      case 'Good':
      case 'Excellent':
        return 'text-green-500';
      case 'Needs Improvement':
        return 'text-yellow-500';
      case 'Poor':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getScoreIcon = (score: string) => {
    switch (score) {
      case 'Good':
      case 'Excellent':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Needs Improvement':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'Poor':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  useEffect(() => {
    if (autoHide && showUI) {
      const timer = setTimeout(() => setShowMonitor(false), hideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, hideDelay, showUI]);

  if (!showMonitor) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-4 right-4 z-50 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-xl p-4 max-w-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-blue-600" />
          <h3 className="text-sm font-semibold text-gray-900">Performance Monitor</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">Overall Score:</span>
          <span className={`font-semibold ${getScoreColor(metrics.overallScore)}`}>
            {metrics.overallScore}
          </span>
        </div>

        {isExpanded && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2 pt-2 border-t border-gray-100"
            >
              {[
                { key: 'fcp', label: 'FCP', value: metrics.fcp, score: metrics.fcpScore },
                { key: 'lcp', label: 'LCP', value: metrics.lcp, score: metrics.lcpScore },
                { key: 'fid', label: 'FID', value: metrics.fid, score: metrics.fidScore },
                { key: 'cls', label: 'CLS', value: metrics.cls, score: metrics.clsScore },
                { key: 'ttfb', label: 'TTFB', value: metrics.ttfb, score: metrics.ttfbScore }
              ].map(({ key, label, value, score }) => (
                <div key={key} className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">{label}:</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-gray-800">
                      {key === 'cls' ? value.toFixed(3) : `${Math.round(value)}ms`}
                    </span>
                    {getScoreIcon(score)}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <div className="mt-3 pt-2 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Core Web Vitals</span>
          <span className="flex items-center space-x-1">
            <Zap className="w-3 h-3" />
            <span>Real-time</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;