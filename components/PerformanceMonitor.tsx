import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, AlertTriangle, 
  CheckCircle, X, Info, Gauge, Database, Network
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

interface PerformanceMonitorProps {
  showUI?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  };
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showUI = false, 
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
    
    // Measure FID (First Input Delay) - simplified version
    let fid = 0;
    if (performance.getEntriesByType) {
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        fid = (fidEntries[0] as any).processingStart - (fidEntries[0] as any).startTime;
      }
    }

    // Measure CLS (Cumulative Layout Shift) - simplified version
    let cls = 0;
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift') {
              cls += (entry as any).value;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS measurement not supported');
      }
    }

    const newMetrics: PerformanceMetrics = {
      fcp,
      lcp,
      fid,
      cls,
      ttfb: navigation.responseStart - navigation.requestStart,
      domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      windowLoad: navigation.loadEventEnd - navigation.loadEventStart
    };

    setMetrics(newMetrics);
    
    // Check for performance alerts
    const newAlerts: string[] = [];
    if (fcp > threshold.fcp) newAlerts.push(`FCP (${fcp.toFixed(0)}ms) exceeds threshold (${threshold.fcp}ms)`);
    if (lcp > threshold.lcp) newAlerts.push(`LCP (${lcp.toFixed(0)}ms) exceeds threshold (${threshold.lcp}ms)`);
    if (fid > threshold.fid) newAlerts.push(`FID (${fid.toFixed(0)}ms) exceeds threshold (${threshold.fid}ms)`);
    if (cls > threshold.cls) newAlerts.push(`CLS (${cls.toFixed(3)}) exceeds threshold (${threshold.cls})`);
    
    setAlerts(newAlerts);
  }, [threshold]);

  useEffect(() => {
    if (!showUI) return;

    // Initial measurement
    measurePerformance();

    // Set up performance observer for Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              measurePerformance();
            }
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('PerformanceObserver not supported');
      }
    }

    // Periodic measurement
    const interval = setInterval(measurePerformance, 10000);
    
    return () => {
      clearInterval(interval);
    };
  }, [showUI, measurePerformance]);

  useEffect(() => {
    if (showUI && metrics) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showUI, metrics]);

  if (!showUI || !metrics) return null;

  const getScore = (value: number, threshold: number, isLowerBetter = true) => {
    const ratio = isLowerBetter ? threshold / value : value / threshold;
    if (ratio >= 0.9) return 'excellent';
    if (ratio >= 0.7) return 'good';
    if (ratio >= 0.5) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'excellent': return 'text-green-400';
      case 'good': return 'text-yellow-400';
      case 'needs-improvement': return 'text-orange-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getScoreIcon = (score: string) => {
    switch (score) {
      case 'excellent': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'good': return <CheckCircle className="w-4 h-4 text-yellow-400" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4 text-orange-400" />;
      case 'poor': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <Info className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-black/90 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-4 shadow-2xl shadow-cyan-500/20">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-semibold text-white">Performance Monitor</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {isExpanded ? <X className="w-4 h-4" /> : <Info className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-cyan-500/10 rounded-lg border border-cyan-400/20">
                  <div className="text-xs text-cyan-400 mb-1">FCP</div>
                  <div className="text-lg font-bold text-white">{metrics.fcp.toFixed(0)}ms</div>
                  <div className="text-xs text-gray-400">
                    {getScoreIcon(getScore(metrics.fcp, threshold.fcp))}
                  </div>
                </div>
                <div className="text-center p-2 bg-blue-500/10 rounded-lg border border-blue-400/20">
                  <div className="text-xs text-blue-400 mb-1">LCP</div>
                  <div className="text-lg font-bold text-white">{metrics.lcp.toFixed(0)}ms</div>
                  <div className="text-xs text-gray-400">
                    {getScoreIcon(getScore(metrics.lcp, threshold.lcp))}
                  </div>
                </div>
              </div>

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-purple-500/10 rounded-lg border border-purple-400/20">
                      <div className="text-xs text-purple-400 mb-1">FID</div>
                      <div className="text-lg font-bold text-white">{metrics.fid.toFixed(0)}ms</div>
                      <div className="text-xs text-gray-400">
                        {getScoreIcon(getScore(metrics.fid, threshold.fid))}
                      </div>
                    </div>
                    <div className="text-center p-2 bg-green-500/10 rounded-lg border border-green-400/20">
                      <div className="text-xs text-green-400 mb-1">CLS</div>
                      <div className="text-lg font-bold text-white">{metrics.cls.toFixed(3)}</div>
                      <div className="text-xs text-gray-400">
                        {getScoreIcon(getScore(metrics.cls, threshold.cls))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-orange-500/10 rounded-lg border border-orange-400/20">
                      <div className="text-xs text-orange-400 mb-1">TTFB</div>
                      <div className="text-lg font-bold text-white">{metrics.ttfb.toFixed(0)}ms</div>
                    </div>
                    <div className="text-center p-2 bg-pink-500/10 rounded-lg border border-pink-400/20">
                      <div className="text-xs text-pink-400 mb-1">DOM Load</div>
                      <div className="text-lg font-bold text-white">{metrics.domLoad.toFixed(0)}ms</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Alerts */}
              {alerts.length > 0 && (
                <div className="mt-3 p-2 bg-red-500/10 border border-red-400/20 rounded-lg">
                  <div className="text-xs text-red-400 mb-1 flex items-center space-x-1">
                    <AlertTriangle className="w-3 h-3" />
                    <span>Performance Alerts</span>
                  </div>
                  <div className="text-xs text-gray-300 space-y-1">
                    {alerts.map((alert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                        <span>{alert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Refresh Button */}
              <button
                onClick={measurePerformance}
                className="w-full mt-3 px-3 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 text-xs font-medium rounded-lg border border-cyan-400/30 transition-all duration-200 hover:border-cyan-400/50"
              >
                <RefreshCw className="w-3 h-3 inline mr-1" />
                Refresh Metrics
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Missing icon component
const RefreshCw: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

export default PerformanceMonitor;