import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, X, TrendingUp, TrendingDown, AlertTriangle, 
  CheckCircle, Clock, Zap, Gauge, Target, Info
} from 'lucide-react';

// Custom interfaces for Performance API types
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target: EventTarget | null;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  lastInputTime: number;
  value: number;
}

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  si: number;
  tti: number;
}

interface PerformanceScore {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  color: string;
}

const PerformanceMonitor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
    si: 0,
    tti: 0
  });
  const [score, setScore] = useState<PerformanceScore>({
    score: 0,
    grade: 'A',
    color: 'text-green-400'
  });
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [criticalIssues, setCriticalIssues] = useState<string[]>([]);

  // Calculate performance score based on Core Web Vitals
  const calculateScore = useCallback((metrics: PerformanceMetrics): PerformanceScore => {
    let totalScore = 0;
    let maxScore = 0;

    // LCP scoring (0-100)
    if (metrics.lcp > 0) {
      maxScore += 100;
      if (metrics.lcp <= 2500) totalScore += 100;
      else if (metrics.lcp <= 4000) totalScore += 50;
      else totalScore += 25;
    }

    // FID scoring (0-100)
    if (metrics.fid > 0) {
      maxScore += 100;
      if (metrics.fid <= 100) totalScore += 100;
      else if (metrics.fid <= 300) totalScore += 50;
      else totalScore += 25;
    }

    // CLS scoring (0-100)
    if (metrics.cls > 0) {
      maxScore += 100;
      if (metrics.cls <= 0.1) totalScore += 100;
      else if (metrics.cls <= 0.25) totalScore += 50;
      else totalScore += 25;
    }

    // FCP scoring (0-100)
    if (metrics.fcp > 0) {
      maxScore += 100;
      if (metrics.fcp <= 1800) totalScore += 100;
      else if (metrics.fcp <= 3000) totalScore += 50;
      else totalScore += 25;
    }

    // TTFB scoring (0-100)
    if (metrics.ttfb > 0) {
      maxScore += 100;
      if (metrics.ttfb <= 800) totalScore += 100;
      else if (metrics.ttfb <= 1800) totalScore += 50;
      else totalScore += 25;
    }

    // Speed Index scoring (0-100)
    if (metrics.si > 0) {
      maxScore += 100;
      if (metrics.si <= 3400) totalScore += 100;
      else if (metrics.si <= 5800) totalScore += 50;
      else totalScore += 25;
    }

    // TTI scoring (0-100)
    if (metrics.tti > 0) {
      maxScore += 100;
      if (metrics.tti <= 3800) totalScore += 100;
      else if (metrics.tti <= 7300) totalScore += 50;
      else totalScore += 25;
    }

    const finalScore = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
    
    let grade: 'A' | 'B' | 'C' | 'D' | 'F';
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
  }, []);

  // Generate recommendations based on metrics
  const generateRecommendations = useCallback((metrics: PerformanceMetrics): string[] => {
    const recs: string[] = [];
    
    if (metrics.lcp > 4000) {
      recs.push('Optimize Largest Contentful Paint: Compress images, use WebP format, implement lazy loading');
    }
    if (metrics.fid > 300) {
      recs.push('Improve First Input Delay: Reduce JavaScript execution time, split code bundles');
    }
    if (metrics.cls > 0.25) {
      recs.push('Fix Cumulative Layout Shift: Set explicit dimensions for images and media elements');
    }
    if (metrics.fcp > 3000) {
      recs.push('Optimize First Contentful Paint: Minimize critical resources, optimize server response');
    }
    if (metrics.ttfb > 1800) {
      recs.push('Improve Time to First Byte: Optimize server performance, use CDN, enable compression');
    }
    if (metrics.si > 5800) {
      recs.push('Optimize Speed Index: Reduce render-blocking resources, optimize critical rendering path');
    }
    if (metrics.tti > 7300) {
      recs.push('Improve Time to Interactive: Reduce JavaScript bundle size, implement code splitting');
    }
    
    return recs;
  }, []);

  // Check for critical performance issues
  const checkCriticalIssues = useCallback((metrics: PerformanceMetrics): string[] => {
    const issues: string[] = [];
    
    if (metrics.lcp > 6000) {
      issues.push('Critical: LCP is extremely slow (>6s) - immediate action required');
    }
    if (metrics.fid > 500) {
      issues.push('Critical: FID is very poor (>500ms) - user experience severely impacted');
    }
    if (metrics.cls > 0.5) {
      issues.push('Critical: CLS is very poor (>0.5) - layout stability issues');
    }
    if (metrics.ttfb > 3000) {
      issues.push('Critical: TTFB is very slow (>3s) - server performance issues');
    }
    
    return issues;
  }, []);

  // Monitor performance metrics
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          const eventEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({ ...prev, fid: eventEntry.processingStart - eventEntry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const layoutEntry = entry as LayoutShiftEntry;
          if (!layoutEntry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: prev.cls + layoutEntry.value }));
          }
        } else if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      });
    });

    // Observe different performance entry types
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    } catch (error) {
      console.warn('PerformanceObserver not supported for all entry types:', error);
    }

    // Measure TTFB
    if (performance.timing) {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }
    }

    // Measure Speed Index and TTI (simplified)
    const measureSpeedIndex = () => {
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        setMetrics(prev => ({ ...prev, si: fcp.startTime * 0.8 })); // Simplified calculation
      }
    };

    const measureTTI = () => {
      // Simplified TTI measurement
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, tti: loadTime * 0.8 })); // Simplified calculation
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measureSpeedIndex();
      measureTTI();
    } else {
      window.addEventListener('load', () => {
        measureSpeedIndex();
        measureTTI();
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Update score, recommendations, and critical issues when metrics change
  useEffect(() => {
    const newScore = calculateScore(metrics);
    setScore(newScore);
    
    const newRecommendations = generateRecommendations(metrics);
    setRecommendations(newRecommendations);
    
    const newCriticalIssues = checkCriticalIssues(metrics);
    setCriticalIssues(newCriticalIssues);
  }, [metrics, calculateScore, generateRecommendations, checkCriticalIssues]);

  // Format metric values for display
  const formatMetric = (value: number, type: string): string => {
    if (value === 0) return 'N/A';
    
    switch (type) {
      case 'lcp':
      case 'fcp':
      case 'ttfb':
      case 'si':
      case 'tti':
        return `${Math.round(value)}ms`;
      case 'cls':
        return value.toFixed(3);
      case 'fid':
        return `${Math.round(value)}ms`;
      default:
        return value.toString();
    }
  };

  // Get metric status color
  const getMetricStatus = (value: number, type: string): string => {
    if (value === 0) return 'text-gray-400';
    
    switch (type) {
      case 'lcp':
        return value <= 2500 ? 'text-green-400' : value <= 4000 ? 'text-yellow-400' : 'text-red-400';
      case 'fid':
        return value <= 100 ? 'text-green-400' : value <= 300 ? 'text-yellow-400' : 'text-red-400';
      case 'cls':
        return value <= 0.1 ? 'text-green-400' : value <= 0.25 ? 'text-yellow-400' : 'text-red-400';
      case 'fcp':
        return value <= 1800 ? 'text-green-400' : value <= 3000 ? 'text-yellow-400' : 'text-red-400';
      case 'ttfb':
        return value <= 800 ? 'text-green-400' : value <= 1800 ? 'text-yellow-400' : 'text-red-400';
      case 'si':
        return value <= 3400 ? 'text-green-400' : value <= 5800 ? 'text-yellow-400' : 'text-red-400';
      case 'tti':
        return value <= 3800 ? 'text-green-400' : value <= 7300 ? 'text-yellow-400' : 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open performance monitor"
        aria-expanded={isOpen}
      >
        <Activity className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-gray-900 border border-gray-700 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white flex items-center">
                  <Activity className="w-8 h-8 mr-3 text-purple-400" />
                  Performance Monitor
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close performance monitor"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Performance Score */}
              <div className="mb-8 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl border border-gray-600">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Overall Performance Score</h3>
                    <p className="text-gray-400">Based on Core Web Vitals and performance metrics</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-6xl font-bold ${score.color}`}>{score.score}</div>
                    <div className={`text-2xl font-semibold ${score.color}`}>Grade {score.grade}</div>
                  </div>
                </div>
              </div>

              {/* Critical Issues Alert */}
              {criticalIssues.length > 0 && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                    <h4 className="text-red-400 font-semibold">Critical Performance Issues</h4>
                  </div>
                  <ul className="space-y-1">
                    {criticalIssues.map((issue, index) => (
                      <li key={index} className="text-red-300 text-sm">• {issue}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Performance Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  { key: 'lcp', label: 'Largest Contentful Paint', icon: Target, description: 'Loading performance' },
                  { key: 'fid', label: 'First Input Delay', icon: Zap, description: 'Interactivity' },
                  { key: 'cls', label: 'Cumulative Layout Shift', icon: TrendingUp, description: 'Visual stability' },
                  { key: 'fcp', label: 'First Contentful Paint', icon: Gauge, description: 'First paint' },
                  { key: 'ttfb', label: 'Time to First Byte', icon: Clock, description: 'Server response' },
                  { key: 'si', label: 'Speed Index', icon: TrendingDown, description: 'Loading speed' },
                  { key: 'tti', label: 'Time to Interactive', icon: Activity, description: 'Interactivity' }
                ].map((metric) => (
                  <div key={metric.key} className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="flex items-center mb-3">
                      <metric.icon className="w-5 h-5 text-purple-400 mr-2" />
                      <h4 className="text-white font-medium text-sm">{metric.label}</h4>
                    </div>
                    <div className={`text-2xl font-bold ${getMetricStatus(metrics[metric.key as keyof PerformanceMetrics], metric.key)}`}>
                      {formatMetric(metrics[metric.key as keyof PerformanceMetrics], metric.key)}
                    </div>
                    <p className="text-gray-400 text-xs mt-1">{metric.description}</p>
                  </div>
                ))}
              </div>

              {/* Recommendations */}
              {recommendations.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                    Performance Recommendations
                  </h3>
                  <div className="space-y-3">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                        <p className="text-gray-300 text-sm">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Info Section */}
              <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                <div className="flex items-center mb-2">
                  <Info className="w-5 h-5 text-blue-400 mr-2" />
                  <h4 className="text-blue-400 font-semibold">About Core Web Vitals</h4>
                </div>
                <p className="text-blue-300 text-sm">
                  Core Web Vitals are essential metrics that measure real-world user experience. 
                  LCP measures loading performance, FID measures interactivity, and CLS measures visual stability.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;