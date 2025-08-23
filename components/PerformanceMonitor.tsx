import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  X,
  BarChart3,
  Wifi
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
  si: number; // Speed Index
  tti: number; // Time to Interactive
}

interface PerformanceScore {
  overall: number;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

// Extended interfaces for Performance API
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: EventTarget;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [score, setScore] = useState<PerformanceScore | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [optimizationTips, setOptimizationTips] = useState<string[]>([]);

  // Calculate performance scores
  const calculateScores = useCallback((metrics: PerformanceMetrics): PerformanceScore => {
    const fcpScore = Math.max(0, 100 - (metrics.fcp - 1800) / 20);
    const lcpScore = Math.max(0, 100 - (metrics.lcp - 2500) / 25);
    const fidScore = Math.max(0, 100 - (metrics.fid - 100) / 2);
    const clsScore = Math.max(0, 100 - (metrics.cls * 1000));
    const ttfbScore = Math.max(0, 100 - (metrics.ttfb - 600) / 10);

    const overall = Math.round((fcpScore + lcpScore + fidScore + clsScore + ttfbScore) / 5);

    return {
      overall: Math.max(0, Math.min(100, overall)),
      fcp: Math.max(0, Math.min(100, fcpScore)),
      lcp: Math.max(0, Math.min(100, lcpScore)),
      fid: Math.max(0, Math.min(100, fidScore)),
      cls: Math.max(0, Math.min(100, clsScore)),
      ttfb: Math.max(0, Math.min(100, ttfbScore))
    };
  }, []);

  // Get optimization tips based on performance scores
  const getOptimizationTips = useCallback((score: PerformanceScore): string[] => {
    const tips: string[] = [];

    if (score.fcp < 70) {
      tips.push('Optimize critical rendering path and reduce server response time');
    }
    if (score.lcp < 70) {
      tips.push('Optimize images and implement lazy loading for better LCP');
    }
    if (score.fid < 70) {
      tips.push('Reduce JavaScript execution time and optimize event handlers');
    }
    if (score.cls < 70) {
      tips.push('Set explicit dimensions for images and avoid layout shifts');
    }
    if (score.ttfb < 70) {
      tips.push('Optimize server response time and implement caching strategies');
    }

    if (tips.length === 0) {
      tips.push('Great performance! Keep monitoring for any regressions');
    }

    return tips;
  }, []);

  // Monitor Core Web Vitals
  const monitorPerformance = useCallback(() => {
    if (!('PerformanceObserver' in window)) return;

    // Monitor Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        setMetrics(prev => prev ? { ...prev, lcp: lastEntry.startTime } : null);
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor First Input Delay
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        if (entry.entryType === 'first-input') {
          const eventEntry = entry as PerformanceEventTiming;
          setMetrics(prev => prev ? { ...prev, fid: eventEntry.processingStart - eventEntry.startTime } : null);
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Monitor Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((entryList) => {
      let clsValue = 0;
      entryList.getEntries().forEach((entry) => {
        const layoutEntry = entry as LayoutShiftEntry;
        if (!layoutEntry.hadRecentInput) {
          clsValue += layoutEntry.value;
        }
      });
      setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Get other metrics
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const fcp = navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart;
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      
      setMetrics(prev => ({
        fcp: prev?.fcp || fcp,
        lcp: prev?.lcp || 0,
        fid: prev?.fid || 0,
        cls: prev?.cls || 0,
        ttfb: prev?.ttfb || ttfb,
        fmp: prev?.fmp || 0,
        si: prev?.si || 0,
        tti: prev?.tti || 0
      }));
    }

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  // Start monitoring when component mounts
  useEffect(() => {
    const cleanup = monitorPerformance();
    
    // Show monitor after a delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    
    return () => {
      cleanup?.();
      clearTimeout(timer);
    };
  }, [monitorPerformance]);

  // Calculate scores when metrics change
  useEffect(() => {
    if (metrics) {
      const newScore = calculateScores(metrics);
      setScore(newScore);
      setOptimizationTips(getOptimizationTips(newScore));
    }
  }, [metrics, calculateScores, getOptimizationTips]);

  // Get score color
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  // Get score icon
  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return <AlertTriangle className="w-5 h-5 text-red-400" />;
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-4 left-4 z-50"
      >
        <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl max-w-sm">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Performance Monitor</h3>
                <p className="text-xs text-gray-400">Core Web Vitals</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Overall Score */}
          {score && (
            <div className="p-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-300">Overall Score</span>
                {getScoreIcon(score.overall)}
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${score.overall}, 100`}
                      className={`${getScoreColor(score.overall)} transition-all duration-1000`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-lg font-bold ${getScoreColor(score.overall)}`}>
                      {score.overall}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-white mb-1">{score.overall}/100</div>
                  <div className="text-xs text-gray-400">
                    {score.overall >= 90 ? 'Excellent' : score.overall >= 70 ? 'Good' : 'Needs Improvement'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Metrics */}
          {metrics && (
            <div className="p-4 border-b border-gray-700/50">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-300">FCP</span>
                  </div>
                  <span className="text-sm font-mono text-white">
                    {Math.round(metrics.fcp)}ms
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">LCP</span>
                  </div>
                  <span className="text-sm font-mono text-white">
                    {Math.round(metrics.lcp)}ms
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-300">FID</span>
                  </div>
                  <span className="text-sm font-mono text-white">
                    {Math.round(metrics.fid)}ms
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">CLS</span>
                  </div>
                  <span className="text-sm font-mono text-white">
                    {metrics.cls.toFixed(3)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">TTFB</span>
                  </div>
                  <span className="text-sm font-mono text-white">
                    {Math.round(metrics.ttfb)}ms
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Optimization Tips */}
          {optimizationTips.length > 0 && (
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-gray-300">Optimization Tips</span>
              </div>
              <div className="space-y-2">
                {optimizationTips.map((tip, index) => (
                  <div key={index} className="text-xs text-gray-400 leading-relaxed">
                    • {tip}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="p-4">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
          </div>

          {/* Detailed Metrics */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-700/50"
              >
                <div className="p-4 space-y-3">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Detailed Performance Data</h4>
                  
                  {metrics && (
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-gray-800/50 p-2 rounded">
                        <div className="text-gray-400">DOM Load</div>
                        <div className="text-white font-mono">
                          {Math.round(metrics.fcp)}ms
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/50 p-2 rounded">
                        <div className="text-gray-400">Interactive</div>
                        <div className="text-white font-mono">
                          {Math.round(metrics.fid)}ms
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/50 p-2 rounded">
                        <div className="text-gray-400">Server Response</div>
                        <div className="text-white font-mono">
                          {Math.round(metrics.ttfb)}ms
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/50 p-2 rounded">
                        <div className="text-gray-400">Layout Stability</div>
                        <div className="text-white font-mono">
                          {metrics.cls.toFixed(3)}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs text-gray-400 text-center pt-2">
                    Monitoring in real-time
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceMonitor;