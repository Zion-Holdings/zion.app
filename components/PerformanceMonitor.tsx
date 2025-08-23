import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, TrendingUp, TrendingDown, Clock, Zap, 
  AlertTriangle, CheckCircle, Info, X, BarChart3 
} from 'lucide-react';

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: EventTarget;
}

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
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
    fmp: null
  });
  const [scores, setScores] = useState<Record<string, PerformanceScore>>({});
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Performance thresholds
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  };

  const calculateScore = (metric: string, value: number): PerformanceScore => {
    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return { score: 0, grade: 'F', color: 'text-red-500' };

    let score: number;
    if (value <= threshold.good) {
      score = 100;
    } else if (value <= threshold.poor) {
      score = Math.max(0, 100 - ((value - threshold.good) / (threshold.poor - threshold.good)) * 60);
    } else {
      score = Math.max(0, 40 - ((value - threshold.poor) / threshold.poor) * 40);
    }

    let grade: 'A' | 'B' | 'C' | 'D' | 'F';
    let color: string;

    if (score >= 90) {
      grade = 'A';
      color = 'text-green-500';
    } else if (score >= 80) {
      grade = 'B';
      color = 'text-blue-500';
    } else if (score >= 70) {
      grade = 'C';
      color = 'text-yellow-500';
    } else if (score >= 60) {
      grade = 'D';
      color = 'text-orange-500';
    } else {
      grade = 'F';
      color = 'text-red-500';
    }

    return { score: Math.round(score), grade, color };
  };

  const getMetricStatus = (metric: string, value: number) => {
    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return { status: 'unknown', icon: Info, color: 'text-gray-500' };

    if (value <= threshold.good) {
      return { status: 'good', icon: CheckCircle, color: 'text-green-500' };
    } else if (value <= threshold.poor) {
      return { status: 'needs-improvement', icon: AlertTriangle, color: 'text-yellow-500' };
    } else {
      return { status: 'poor', icon: X, color: 'text-red-500' };
    }
  };

  const startMonitoring = () => {
    setIsMonitoring(true);
    
    // Monitor First Contentful Paint (FCP)
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Monitor Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[entries.length - 1] as PerformanceEventTiming;
          if (fidEntry && 'processingStart' in fidEntry) {
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Monitor Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Monitor Time to First Byte (TTFB)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
        }

        // Monitor First Meaningful Paint (FMP) - approximation
        const paintEntries = performance.getEntriesByType('paint');
        const fmpEntry = paintEntries.find(entry => entry.name === 'first-paint');
        if (fmpEntry) {
          setMetrics(prev => ({ ...prev, fmp: fmpEntry.startTime }));
        }

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        console.error('Performance monitoring failed:', error);
      }
    }
  };

  useEffect(() => {
    if (isVisible) {
      startMonitoring();
    }
  }, [isVisible]);

  useEffect(() => {
    // Calculate scores when metrics change
    const newScores: Record<string, PerformanceScore> = {};
    
    Object.entries(metrics).forEach(([metric, value]) => {
      if (value !== null) {
        newScores[metric] = calculateScore(metric, value);
      }
    });
    
    setScores(newScores);
  }, [metrics]);

  const formatMetricValue = (metric: string, value: number | null) => {
    if (value === null) return 'N/A';
    
    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'fid':
      case 'ttfb':
      case 'fmp':
        return `${Math.round(value)}ms`;
      case 'cls':
        return value.toFixed(3);
      default:
        return value.toString();
    }
  };

  const getMetricDescription = (metric: string) => {
    const descriptions = {
      fcp: 'First Contentful Paint - Time until first content is rendered',
      lcp: 'Largest Contentful Paint - Time until largest content is rendered',
      fid: 'First Input Delay - Time until first user interaction is processed',
      cls: 'Cumulative Layout Shift - Visual stability measure',
      ttfb: 'Time to First Byte - Server response time',
      fmp: 'First Meaningful Paint - Time until meaningful content is rendered'
    };
    return descriptions[metric as keyof typeof descriptions] || '';
  };

  const getOverallScore = () => {
    const validScores = Object.values(scores).filter(score => score.score > 0);
    if (validScores.length === 0) return { score: 0, grade: 'F', color: 'text-gray-500' };
    
    const averageScore = validScores.reduce((sum, score) => sum + score.score, 0) / validScores.length;
    
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

    return { score: Math.round(averageScore), grade, color };
  };

  const overallScore = getOverallScore();

  return (
    <>
      {/* Performance Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-20 right-4 z-50 w-96 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-cyan-400" />
                  Performance
                </h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close performance panel"
                >
                  ×
                </button>
              </div>

              {/* Overall Score */}
              <div className="mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="text-center">
                  <div className={`text-4xl font-bold ${overallScore.color}`}>
                    {overallScore.score}
                  </div>
                  <div className={`text-2xl font-semibold ${overallScore.color}`}>
                    {overallScore.grade}
                  </div>
                  <div className="text-gray-400 text-sm mt-2">
                    Overall Performance Score
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {Object.entries(metrics).map(([metric, value]) => {
                  if (value === null) return null;
                  
                  const status = getMetricStatus(metric, value);
                  const score = scores[metric];
                  
                  return (
                    <div key={metric} className="p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <status.icon className={`w-4 h-4 ${status.color}`} />
                          <span className="text-white font-medium text-sm uppercase">
                            {metric}
                          </span>
                        </div>
                        {score && (
                          <div className={`text-sm font-semibold ${score.color}`}>
                            {score.score}
                          </div>
                        )}
                      </div>
                      
                      <div className="text-2xl font-bold text-white mb-1">
                        {formatMetricValue(metric, value)}
                      </div>
                      
                      <div className="text-xs text-gray-400">
                        {getMetricDescription(metric)}
                      </div>
                      
                      {/* Progress bar */}
                      {score && (
                        <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-300 ${
                              score.grade === 'A' ? 'bg-green-500' :
                              score.grade === 'B' ? 'bg-blue-500' :
                              score.grade === 'C' ? 'bg-yellow-500' :
                              score.grade === 'D' ? 'bg-orange-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${score.score}%` }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Monitoring Status */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Monitoring Status</span>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className={isMonitoring ? 'text-green-400' : 'text-red-400'}>
                      {isMonitoring ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-20 right-4 z-40 p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus-ring-cyan"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open performance panel"
        aria-expanded={isVisible}
      >
        <Activity className="w-5 h-5" />
      </motion.button>
    </>
  );
};

export default PerformanceMonitor;