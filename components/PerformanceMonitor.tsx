import React, { useEffect, useState } from 'react';
import { Activity, Zap, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

interface PerformanceScore {
  overall: number;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
}

// Extend PerformanceEntry for FID measurement
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  target?: HTMLElement | null;
}

// Extend PerformanceEntry for CLS measurement
interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput?: boolean;
  value?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });
  const [score, setScore] = useState<PerformanceScore>({
    overall: 0,
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [optimizationTips, setOptimizationTips] = useState<string[]>([]);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      process.env.NEXT_PUBLIC_SHOW_PERFORMANCE_MONITOR === 'true';
    
    if (shouldShow) {
      setIsVisible(true);
      initializePerformanceMonitoring();
    }
  }, []);

  const initializePerformanceMonitoring = () => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries[entries.length - 1];
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });
    fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as FirstInputEntry;
        if (fidEntry.processingStart) {
          const fid = fidEntry.processingStart - fidEntry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const clsEntry = entry as LayoutShiftEntry;
        if (!clsEntry.hadRecentInput && clsEntry.value) {
          clsValue += clsEntry.value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Navigation Timing API
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            ttfb: navigation.responseStart - navigation.requestStart,
            domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            windowLoad: navigation.loadEventEnd - navigation.loadEventStart
          }));
        }
      }, 0);
    });

    // Cleanup
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  };

  useEffect(() => {
    calculateScore();
    generateOptimizationTips();
  }, [metrics]);

  const calculateScore = () => {
    let overallScore = 0;
    let metricCount = 0;

    // FCP Score (0-100)
    let fcpScore = 0;
    if (metrics.fcp !== null) {
      if (metrics.fcp < 1800) fcpScore = 100;
      else if (metrics.fcp < 3000) fcpScore = 75;
      else if (metrics.fcp < 4000) fcpScore = 50;
      else fcpScore = 25;
      overallScore += fcpScore;
      metricCount++;
    }

    // LCP Score (0-100)
    let lcpScore = 0;
    if (metrics.lcp !== null) {
      if (metrics.lcp < 2500) lcpScore = 100;
      else if (metrics.lcp < 4000) lcpScore = 75;
      else if (metrics.lcp < 6000) lcpScore = 50;
      else lcpScore = 25;
      overallScore += lcpScore;
      metricCount++;
    }

    // FID Score (0-100)
    let fidScore = 0;
    if (metrics.fid !== null) {
      if (metrics.fid < 100) fidScore = 100;
      else if (metrics.fid < 300) fidScore = 75;
      else if (metrics.fcp !== null && metrics.fcp < 500) fidScore = 50;
      else fidScore = 25;
      overallScore += fidScore;
      metricCount++;
    }

    // CLS Score (0-100)
    let clsScore = 0;
    if (metrics.cls !== null) {
      if (metrics.cls < 0.1) clsScore = 100;
      else if (metrics.cls < 0.25) clsScore = 75;
      else if (metrics.cls < 0.5) clsScore = 50;
      else clsScore = 25;
      overallScore += clsScore;
      metricCount++;
    }

    const finalOverallScore = metricCount > 0 ? Math.round(overallScore / metricCount) : 0;

    setScore({
      overall: finalOverallScore,
      fcp: fcpScore,
      lcp: lcpScore,
      fid: fidScore,
      cls: clsScore
    });
  };

  const generateOptimizationTips = () => {
    const tips: string[] = [];

    if (metrics.fcp !== null && metrics.fcp > 3000) {
      tips.push('Optimize First Contentful Paint by reducing server response time and critical resources');
    }

    if (metrics.lcp !== null && metrics.lcp > 4000) {
      tips.push('Improve Largest Contentful Paint by optimizing images and reducing render-blocking resources');
    }

    if (metrics.fid !== null && metrics.fid > 300) {
      tips.push('Reduce First Input Delay by minimizing main thread work and breaking up long tasks');
    }

    if (metrics.cls !== null && metrics.cls > 0.25) {
      tips.push('Minimize Cumulative Layout Shift by setting explicit dimensions for images and ads');
    }

    if (metrics.ttfb !== null && metrics.ttfb > 600) {
      tips.push('Improve Time to First Byte by optimizing server response and using CDN');
    }

    if (tips.length === 0) {
      tips.push('Great performance! Keep monitoring for any regressions');
    }

    setOptimizationTips(tips);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 75) return 'text-yellow-500';
    if (score >= 50) return 'text-orange-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= 75) return <TrendingUp className="w-5 h-5 text-yellow-500" />;
    if (score >= 50) return <AlertTriangle className="w-5 h-5 text-orange-500" />;
    return <AlertTriangle className="w-5 h-5 text-red-500" />;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-white shadow-2xl max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" />
            <h3 className="font-semibold text-sm">Performance Monitor</h3>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>

        {/* Overall Score */}
        <div className="mb-4 p-3 bg-white/5 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">Overall Score</span>
            {getScoreIcon(score.overall)}
          </div>
          <div className={`text-2xl font-bold ${getScoreColor(score.overall)}`}>
            {score.overall}/100
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center p-2 bg-white/5 rounded">
            <div className="text-xs text-gray-400">FCP</div>
            <div className="text-sm font-mono">
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
            </div>
            <div className={`text-xs ${getScoreColor(score.fcp)}`}>
              {score.fcp}/100
            </div>
          </div>
          
          <div className="text-center p-2 bg-white/5 rounded">
            <div className="text-xs text-gray-400">LCP</div>
            <div className="text-sm font-mono">
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
            </div>
            <div className={`text-xs ${getScoreColor(score.lcp)}`}>
              {score.lcp}/100
            </div>
          </div>
          
          <div className="text-center p-2 bg-white/5 rounded">
            <div className="text-xs text-gray-400">FID</div>
            <div className="text-sm font-mono">
              {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
            </div>
            <div className={`text-xs ${getScoreColor(score.fid)}`}>
              {score.fid}/100
            </div>
          </div>
          
          <div className="text-center p-2 bg-white/5 rounded">
            <div className="text-xs text-gray-400">CLS</div>
            <div className="text-sm font-mono">
              {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
            </div>
            <div className={`text-xs ${getScoreColor(score.cls)}`}>
              {score.cls}/100
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        {(metrics.ttfb !== null || metrics.domLoad !== null || metrics.windowLoad !== null) && (
          <div className="mb-4 p-3 bg-white/5 rounded-lg">
            <div className="text-xs text-gray-400 mb-2">Additional Metrics</div>
            <div className="space-y-1 text-xs">
              {metrics.ttfb !== null && (
                <div className="flex justify-between">
                  <span>TTFB:</span>
                  <span className="font-mono">{Math.round(metrics.ttfb)}ms</span>
                </div>
              )}
              {metrics.domLoad !== null && (
                <div className="flex justify-between">
                  <span>DOM Load:</span>
                  <span className="font-mono">{Math.round(metrics.domLoad)}ms</span>
                </div>
              )}
              {metrics.windowLoad !== null && (
                <div className="flex justify-between">
                  <span>Window Load:</span>
                  <span className="font-mono">{Math.round(metrics.windowLoad)}ms</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Optimization Tips */}
        {optimizationTips.length > 0 && (
          <div className="p-3 bg-white/5 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-xs text-gray-300">Optimization Tips</span>
            </div>
            <ul className="text-xs text-gray-400 space-y-1">
              {optimizationTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;