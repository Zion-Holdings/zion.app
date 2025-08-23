import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  Wifi,
  RefreshCw,
  Minimize2,
  Maximize2
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
  lastInputTime: number;
  sources: Array<{
    node: Node;
    currentRect: DOMRectReadOnly;
    previousRect: DOMRectReadOnly;
  }>;
}

interface LargestContentfulPaintEntry extends PerformanceEntry {
  size: number;
  id: string;
  url: string;
  element: Element;
}

interface PerformanceMonitorProps {
  onToggle?: (visible: boolean) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onToggle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [score, setScore] = useState<PerformanceScore | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [optimizationTips, setOptimizationTips] = useState<string[]>([]);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
    
    if (score.fcp < 70) tips.push('Optimize First Contentful Paint by reducing render-blocking resources');
    if (score.lcp < 70) tips.push('Improve Largest Contentful Paint with image optimization and lazy loading');
    if (score.fid < 70) tips.push('Reduce First Input Delay by optimizing JavaScript execution');
    if (score.cls < 70) tips.push('Fix Cumulative Layout Shift by setting explicit dimensions');
    if (score.ttfb < 70) tips.push('Improve Time to First Byte with server optimization');
    
    return tips.slice(0, 3);
  }, []);

  // Measure performance metrics
  const measurePerformance = useCallback(async () => {
    setIsMonitoring(true);
    
    try {
      // Get FCP
      const fcp = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;
      
      // Get LCP
      const lcp = performance.getEntriesByName('largest-contentful-paint')[0]?.startTime || 0;
      
      // Get FID
      const fid = await getFID();
      
      // Get CLS
      const cls = await getCLS();
      
      // Get TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry?.responseStart || 0;
      
      const newMetrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        fmp: 0,
        si: 0,
        tti: 0
      };
      
      setMetrics(newMetrics);
    } catch (error) {
      console.error('Error measuring performance:', error);
    } finally {
      setIsMonitoring(false);
    }
  }, []);

  // Get First Input Delay
  const getFID = async (): Promise<number> => {
    if ('PerformanceObserver' in window) {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const firstEntry = entries[0] as any;
          resolve(firstEntry.processingStart - firstEntry.startTime);
        });
        observer.observe({ entryTypes: ['first-input'] });
        
        // Fallback timeout
        setTimeout(() => resolve(0), 5000);
      });
    }
    return 0;
  };

  // Get Cumulative Layout Shift
  const getCLS = async (): Promise<number> => {
    if ('PerformanceObserver' in window) {
      return new Promise((resolve) => {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        
        // Fallback timeout
        setTimeout(() => resolve(clsValue), 5000);
      });
    }
    return 0;
  };

  // Monitor performance continuously
  const monitorPerformance = useCallback(() => {
    if (!('PerformanceObserver' in window)) return;

    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      setMetrics(prev => ({
        ...prev!,
        lcp: lastEntry.startTime
      }));
    });

    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const firstEntry = entries[0] as any;
      setMetrics(prev => ({
        ...prev!,
        fid: firstEntry.processingStart - firstEntry.startTime
      }));
    });

    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      setMetrics(prev => ({
        ...prev!,
        cls: clsValue
      }));
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.error('Error setting up performance observers:', error);
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

  // Auto-refresh functionality
  useEffect(() => {
    if (autoRefresh && isVisible) {
      intervalRef.current = setInterval(measurePerformance, 30000); // Every 30 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRefresh, isVisible, measurePerformance]);

  // Initial measurement
  useEffect(() => {
    if (isVisible) {
      measurePerformance();
    }
  }, [isVisible, measurePerformance]);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleAutoRefresh = () => setAutoRefresh(!autoRefresh);

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

          {/* Action Buttons */}
          <div className="flex items-center gap-2 p-4 border-b border-gray-700/50">
            <button
              onClick={toggleAutoRefresh}
              className={`p-1.5 rounded-lg transition-colors ${
                autoRefresh 
                  ? 'bg-cyan-500/20 text-cyan-400' 
                  : 'bg-white/10 text-white/60 hover:bg-white/20'
              }`}
              title={autoRefresh ? 'Disable auto-refresh' : 'Enable auto-refresh'}
            >
              <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={toggleExpanded}
              className="p-1.5 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition-colors"
              title={isExpanded ? 'Minimize' : 'Expand'}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => onToggle?.(false)}
              className="p-1.5 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
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

          {/* Footer Actions */}
          <div className="p-3 border-t border-cyan-500/20 bg-white/5">
            <button
              onClick={measurePerformance}
              disabled={isMonitoring}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isMonitoring ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Measuring...
                </>
              ) : (
                <>
                  <Activity className="w-4 h-4" />
                  Measure Performance
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceMonitor;