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
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: EventTarget;
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

  // Measure performance metrics
  const measurePerformance = useCallback(async () => {
    if (!('PerformanceObserver' in window)) return;

    try {
      setIsMonitoring(true);
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
    } catch (error) {
      console.error('Error measuring performance:', error);
    } finally {
      setIsMonitoring(false);
    }
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

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleAutoRefresh = () => setAutoRefresh(!autoRefresh);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
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

        {/* Controls */}
        <div className="flex items-center gap-2 p-2">
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
        </div>

        {/* Content */}
        <div className="p-4">
          {score && (
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-white">{score.overall}</div>
              <div className="text-sm text-gray-400">Performance Score</div>
            </div>
          )}

          {metrics && (
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">FCP:</span>
                <span className="text-white">{Math.round(metrics.fcp)}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">LCP:</span>
                <span className="text-white">{Math.round(metrics.lcp)}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">FID:</span>
                <span className="text-white">{Math.round(metrics.fid)}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">CLS:</span>
                <span className="text-white">{metrics.cls.toFixed(3)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">TTFB:</span>
                <span className="text-white">{Math.round(metrics.ttfb)}ms</span>
              </div>
            </div>
          )}

          {/* Optimization Tips */}
          {optimizationTips.length > 0 && (
            <div className="mt-4 p-3 bg-gray-800/30 rounded-lg">
              <div className="text-sm font-medium text-gray-300 mb-2">Tips:</div>
              <div className="space-y-1">
                {optimizationTips.slice(0, 2).map((tip, index) => (
                  <div key={index} className="text-xs text-gray-400">
                    • {tip}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-3 border-t border-gray-700/50">
          <button
            onClick={measurePerformance}
            disabled={isMonitoring}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
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
    </div>
  );
};

export default PerformanceMonitor;