import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  BarChart3, 
  X,
  Eye,
  EyeOff
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
}

interface PerformanceScore {
  score: number;
  grade: string;
  color: string;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fmp: 0
  });
  const [score, setScore] = useState<PerformanceScore>({
    score: 0,
    grade: 'N/A',
    color: 'text-gray-400'
  });

  const observerRef = useRef<PerformanceObserver | null>(null);
  const clsObserverRef = useRef<PerformanceObserver | null>(null);

  // Calculate performance score
  const calculateScore = (metrics: PerformanceMetrics): PerformanceScore => {
    let totalScore = 0;
    let maxScore = 0;

    // FCP scoring (0-100)
    if (metrics.fcp > 0) {
      const fcpScore = Math.max(0, 100 - (metrics.fcp - 1800) / 20);
      totalScore += fcpScore;
      maxScore += 100;
    }

    // LCP scoring (0-100)
    if (metrics.lcp > 0) {
      const lcpScore = Math.max(0, 100 - (metrics.lcp - 2500) / 25);
      totalScore += lcpScore;
      maxScore += 100;
    }

    // FID scoring (0-100)
    if (metrics.fid > 0) {
      const fidScore = Math.max(0, 100 - (metrics.fid - 100) / 2);
      totalScore += fidScore;
      maxScore += 100;
    }

    // CLS scoring (0-100)
    if (metrics.cls > 0) {
      const clsScore = Math.max(0, 100 - (metrics.cls * 1000));
      totalScore += clsScore;
      maxScore += 100;
    }

    // TTFB scoring (0-100)
    if (metrics.ttfb > 0) {
      const ttfbScore = Math.max(0, 100 - (metrics.ttfb - 800) / 8);
      totalScore += ttfbScore;
      maxScore += 100;
    }

    // FMP scoring (0-100)
    if (metrics.fmp > 0) {
      const fmpScore = Math.max(0, 100 - (metrics.fmp - 2000) / 20);
      totalScore += fmpScore;
      maxScore += 100;
    }

    if (maxScore === 0) {
      return { score: 0, grade: 'N/A', color: 'text-gray-400' };
    }

    const finalScore = Math.round((totalScore / maxScore) * 100);
    
    let grade: string;
    let color: string;

    if (finalScore >= 90) {
      grade = 'A';
      color = 'text-green-400';
    } else if (finalScore >= 80) {
      grade = 'B';
      color = 'text-blue-400';
    } else if (finalScore >= 70) {
      grade = 'C';
      color = 'text-yellow-400';
    } else if (finalScore >= 60) {
      grade = 'D';
      color = 'text-orange-400';
    } else {
      grade = 'F';
      color = 'text-red-400';
    }

    return { score: finalScore, grade, color };
  };

  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // FCP Observer
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: Math.round(entry.startTime) }));
            }
          });
        });

        // LCP Observer
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: Math.round(lastEntry.startTime) }));
          }
        });

        // FID Observer
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEntry & { processingStart?: number };
            if (fidEntry && 'processingStart' in fidEntry) {
              const fid = Math.round(fidEntry.processingStart! - fidEntry.startTime);
              setMetrics(prev => ({ ...prev, fid }));
            }
          });
        });

        // CLS Observer
        clsObserverRef.current = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry) => {
            const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
            if (clsEntry && !clsEntry.hadRecentInput && clsEntry.value !== undefined) {
              clsValue += clsEntry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }));
        });

        // TTFB (from navigation timing)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const ttfb = Math.round(navigationEntry.responseStart - navigationEntry.requestStart);
          setMetrics(prev => ({ ...prev, ttfb }));
        }

        // FMP (First Meaningful Paint approximation)
        const paintEntries = performance.getEntriesByType('paint');
        const fmpEntry = paintEntries.find(entry => entry.name === 'first-meaningful-paint');
        if (fmpEntry) {
          setMetrics(prev => ({ ...prev, fmp: Math.round(fmpEntry.startTime) }));
        }

        // Start observing
        observerRef.current.observe({ entryTypes: ['paint'] });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        fidObserver.observe({ entryTypes: ['first-input'] });
        clsObserverRef.current.observe({ entryTypes: ['layout-shift'] });

        // Cleanup
        return () => {
          observerRef.current?.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserverRef.current?.disconnect();
        };
      } catch (error) {
        // console.error('Performance monitoring error:', error);
      }
    }
  }, []);

  // Update score when metrics change
  useEffect(() => {
    const newScore = calculateScore(metrics);
    setScore(newScore);
  }, [metrics]);

  // Format metric value
  const formatMetric = (value: number, unit: string): string => {
    if (value === 0) return 'N/A';
    return `${value}${unit}`;
  };

  // Get metric status color
  const getMetricColor = (metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    if (value === 0) return 'text-gray-400';
    
    const thresholds: Record<string, { good: number; poor: number }> = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 },
      fmp: { good: 2000, poor: 4000 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'text-gray-400';

    const isCLS = metric === 'cls';
    const actualValue = isCLS ? value / 1000 : value;
    
    if (actualValue <= threshold.good) return 'text-green-400';
    if (actualValue <= threshold.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200 focus:ring-2 focus:ring-cyan-300 focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Show Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <span className="text-white font-semibold">Performance</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Score Display */}
      <div className="p-4 text-center">
        <div className="text-3xl font-bold text-white mb-2">
          {score.score}
        </div>
        <div className={`text-xl font-semibold ${score.color}`}>
          {score.grade}
        </div>
        <div className="text-xs text-gray-400 mt-1">
          Performance Score
        </div>
      </div>

      {/* Metrics */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-gray-700"
          >
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className={`text-lg font-semibold ${getMetricColor('fcp')}`}>
                    {formatMetric(metrics.fcp, 'ms')}
                  </div>
                  <div className="text-xs text-gray-400">FCP</div>
                </div>
                <div className="text-center">
                  <div className={`text-lg font-semibold ${getMetricColor('lcp')}`}>
                    {formatMetric(metrics.lcp, 'ms')}
                  </div>
                  <div className="text-xs text-gray-400">LCP</div>
                </div>
                <div className="text-center">
                  <div className={`text-lg font-semibold ${getMetricColor('fid')}`}>
                    {formatMetric(metrics.fid, 'ms')}
                  </div>
                  <div className="text-xs text-gray-400">FID</div>
                </div>
                <div className="text-center">
                  <div className={`text-lg font-semibold ${getMetricColor('cls')}`}>
                    {formatMetric(metrics.cls, '')}
                  </div>
                  <div className="text-xs text-gray-400">CLS</div>
                </div>
                <div className="text-center">
                  <div className={`text-lg font-semibold ${getMetricColor('ttfb')}`}>
                    {formatMetric(metrics.ttfb, 'ms')}
                  </div>
                  <div className="text-xs text-gray-400">TTFB</div>
                </div>
                <div className="text-center">
                  <div className={`text-lg font-semibold ${getMetricColor('fmp')}`}>
                    {formatMetric(metrics.fmp, 'ms')}
                  </div>
                  <div className="text-xs text-gray-400">FMP</div>
                </div>
              </div>

              {/* Legend */}
              <div className="text-xs text-gray-400 text-center pt-2 border-t border-gray-700">
                <div className="flex justify-center space-x-4">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                    Good
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
                    Needs Improvement
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-1"></div>
                    Poor
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PerformanceMonitor;