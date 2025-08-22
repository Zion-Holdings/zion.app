import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, TrendingUp, TrendingDown, Clock, 
  Zap, AlertTriangle, CheckCircle, Info
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  timestamp: number;
}

interface PerformanceScore {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  color: string;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    timestamp: Date.now()
  });
  const [overallScore, setOverallScore] = useState<PerformanceScore>({
    score: 0,
    grade: 'F',
    color: 'text-red-500'
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      observePerformanceMetrics();
    }
  }, []);

  const observePerformanceMetrics = () => {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({
              ...prev,
              fcp: fcpEntry.startTime,
              timestamp: Date.now()
            }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('FCP observer failed:', e);
      }

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            setMetrics(prev => ({
              ...prev,
              lcp: lcpEntry.startTime,
              timestamp: Date.now()
            }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer failed:', e);
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[entries.length - 1];
          if (fidEntry) {
            setMetrics(prev => ({
              ...prev,
              fid: fidEntry.processingStart - fidEntry.startTime,
              timestamp: Date.now()
            }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer failed:', e);
      }

      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({
            ...prev,
            cls: clsValue,
            timestamp: Date.now()
          }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer failed:', e);
      }
    }

    // Time to First Byte (TTFB)
    if ('PerformanceObserver' in window) {
      try {
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const navigationEntry = entries.find(entry => entry.entryType === 'navigation');
          if (navigationEntry) {
            const navEntry = navigationEntry as PerformanceNavigationTiming;
            setMetrics(prev => ({
              ...prev,
              ttfb: navEntry.responseStart - navEntry.requestStart,
              timestamp: Date.now()
            }));
          }
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });
      } catch (e) {
        console.warn('Navigation observer failed:', e);
      }
    }
  };

  const calculateScore = (metrics: PerformanceMetrics): PerformanceScore => {
    let totalScore = 0;
    let metricCount = 0;

    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      if (metrics.fcp < 1800) totalScore += 100;
      else if (metrics.fcp < 3000) totalScore += 75;
      else if (metrics.fcp < 4000) totalScore += 50;
      else totalScore += 25;
      metricCount++;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp < 2500) totalScore += 100;
      else if (metrics.lcp < 4000) totalScore += 75;
      else if (metrics.lcp < 6000) totalScore += 50;
      else totalScore += 25;
      metricCount++;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid < 100) totalScore += 100;
      else if (metrics.fid < 300) totalScore += 75;
      else if (metrics.fid < 500) totalScore += 50;
      else totalScore += 25;
      metricCount++;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls < 0.1) totalScore += 100;
      else if (metrics.cls < 0.25) totalScore += 75;
      else if (metrics.cls < 0.4) totalScore += 50;
      else totalScore += 25;
      metricCount++;
    }

    // TTFB scoring (0-100)
    if (metrics.ttfb !== null) {
      if (metrics.ttfb < 800) totalScore += 100;
      else if (metrics.ttfb < 1800) totalScore += 75;
      else if (metrics.ttfb < 3000) totalScore += 50;
      else totalScore += 25;
      metricCount++;
    }

    const averageScore = metricCount > 0 ? Math.round(totalScore / metricCount) : 0;
    
    let grade: 'A' | 'B' | 'C' | 'D' | 'F';
    let color: string;

    if (averageScore >= 90) {
      grade = 'A';
      color = 'text-green-500';
    } else if (averageScore >= 80) {
      grade = 'B';
      color = 'text-blue-500';
    } else if (averageScore >= 70) {
      grade = 'C';
      color = 'text-yellow-500';
    } else if (averageScore >= 60) {
      grade = 'D';
      color = 'text-orange-500';
    } else {
      grade = 'F';
      color = 'text-red-500';
    }

    return { score: averageScore, grade, color };
  };

  useEffect(() => {
    const score = calculateScore(metrics);
    setOverallScore(score);
  }, [metrics]);

  const getMetricStatus = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return { status: 'pending', icon: <Info className="w-4 h-4" />, color: 'text-gray-400' };
    if (value <= thresholds.good) return { status: 'good', icon: <CheckCircle className="w-4 h-4" />, color: 'text-green-500' };
    if (value <= thresholds.needsImprovement) return { status: 'needs-improvement', icon: <AlertTriangle className="w-4 h-4" />, color: 'text-yellow-500' };
    return { status: 'poor', icon: <AlertTriangle className="w-4 h-4" />, color: 'text-red-500' };
  };

  const formatMetric = (value: number | null, unit: string) => {
    if (value === null) return 'Pending...';
    return `${value.toFixed(2)} ${unit}`;
  };

  return (
    <>
      {/* Performance Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-24 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Performance Monitor"
        aria-expanded={isVisible}
        aria-controls="performance-panel"
      >
        <Activity className="w-6 h-6" />
      </button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            id="performance-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-24 z-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-6 w-96 max-h-96 overflow-y-auto"
            role="dialog"
            aria-labelledby="performance-title"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 id="performance-title" className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Performance Monitor
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close performance panel"
              >
                <span className="sr-only">Close</span>
                ×
              </button>
            </div>

            {/* Overall Score */}
            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Score</span>
                <div className="flex items-center gap-2">
                  <span className={`text-2xl font-bold ${overallScore.color}`}>
                    {overallScore.score}
                  </span>
                  <span className={`text-xl font-bold ${overallScore.color}`}>
                    {overallScore.grade}
                  </span>
                </div>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    overallScore.score >= 90 ? 'bg-green-500' :
                    overallScore.score >= 80 ? 'bg-blue-500' :
                    overallScore.score >= 70 ? 'bg-yellow-500' :
                    overallScore.score >= 60 ? 'bg-orange-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${overallScore.score}%` }}
                />
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-4">
              {/* FCP */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center gap-2">
                  {getMetricStatus(metrics.fcp, { good: 1800, needsImprovement: 3000 }).icon}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">FCP</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {formatMetric(metrics.fcp, 'ms')}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">First Contentful Paint</div>
                </div>
              </div>

              {/* LCP */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center gap-2">
                  {getMetricStatus(metrics.lcp, { good: 2500, needsImprovement: 4000 }).icon}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">LCP</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {formatMetric(metrics.lcp, 'ms')}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Largest Contentful Paint</div>
                </div>
              </div>

              {/* FID */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center gap-2">
                  {getMetricStatus(metrics.fid, { good: 100, needsImprovement: 300 }).icon}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">FID</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {formatMetric(metrics.fid, 'ms')}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">First Input Delay</div>
                </div>
              </div>

              {/* CLS */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center gap-2">
                  {getMetricStatus(metrics.cls, { good: 0.1, needsImprovement: 0.25 }).icon}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">CLS</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {formatMetric(metrics.cls, '')}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Cumulative Layout Shift</div>
                </div>
              </div>

              {/* TTFB */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center gap-2">
                  {getMetricStatus(metrics.ttfb, { good: 800, needsImprovement: 1800 }).icon}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">TTFB</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {formatMetric(metrics.ttfb, 'ms')}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Time to First Byte</div>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Last updated: {new Date(metrics.timestamp).toLocaleTimeString()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;