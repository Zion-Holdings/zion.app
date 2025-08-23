import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, CheckCircle } from 'lucide-react';

/* eslint-disable no-undef */
interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fcpScore: 'good' | 'needs-improvement' | 'poor';
  lcpScore: 'good' | 'needs-improvement' | 'poor';
  fidScore: 'good' | 'needs-improvement' | 'poor';
  clsScore: 'good' | 'needs-improvement' | 'poor';
}

interface PerformanceOptimization {
  type: 'warning' | 'error' | 'info' | 'success';
  message: string;
  priority: 'high' | 'medium' | 'low';
  action?: string;
}

// Extended interfaces for performance entries
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  target?: EventTarget;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fcpScore: 'good',
    lcpScore: 'good',
    fidScore: 'good',
    clsScore: 'good'
  });

  const [optimizations, setOptimizations] = useState<PerformanceOptimization[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Performance optimization: Memoized score calculation
  const calculateScore = useCallback((metric: number, thresholds: { good: number; poor: number }): 'good' | 'needs-improvement' | 'poor' => {
    if (metric <= thresholds.good) return 'good';
    if (metric <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  }, []);

  // Performance optimization: Memoized optimization suggestions
  const generateOptimizations = useCallback((currentMetrics: PerformanceMetrics): PerformanceOptimization[] => {
    const suggestions: PerformanceOptimization[] = [];

    // FCP optimizations
    if (currentMetrics.fcp && currentMetrics.fcp > 1800) {
      suggestions.push({
        type: 'warning',
        message: 'First Contentful Paint is slow. Consider optimizing critical rendering path.',
        priority: 'high',
        action: 'Optimize CSS delivery and reduce render-blocking resources'
      });
    }

    // LCP optimizations
    if (currentMetrics.lcp && currentMetrics.lcp > 2500) {
      suggestions.push({
        type: 'error',
        message: 'Largest Contentful Paint is very slow. This affects user experience significantly.',
        priority: 'high',
        action: 'Optimize images, implement lazy loading, and reduce server response time'
      });
    }

    // FID optimizations
    if (currentMetrics.fid && currentMetrics.fid > 100) {
      suggestions.push({
        type: 'warning',
        message: 'First Input Delay indicates slow interactivity.',
        priority: 'medium',
        action: 'Break up long tasks and optimize JavaScript execution'
      });
    }

    // CLS optimizations
    if (currentMetrics.cls && currentMetrics.cls > 0.1) {
      suggestions.push({
        type: 'warning',
        message: 'Cumulative Layout Shift is affecting visual stability.',
        priority: 'medium',
        action: 'Set explicit dimensions for images and avoid inserting content above existing content'
      });
    }

    // TTFB optimizations
    if (currentMetrics.ttfb && currentMetrics.ttfb > 600) {
      suggestions.push({
        type: 'info',
        message: 'Time to First Byte could be improved.',
        priority: 'low',
        action: 'Optimize server response time and consider CDN implementation'
      });
    }

    return suggestions;
  }, []);

  // Performance optimization: Core Web Vitals monitoring
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    setIsMonitoring(true);

    // FCP Observer
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          const fcp = fcpEntry.startTime;
          const fcpScore = calculateScore(fcp, { good: 1800, poor: 3000 });
          setMetrics(prev => ({ ...prev, fcp, fcpScore }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (error) {
      console.warn('FCP observer not supported:', error);
    }

    // LCP Observer
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          const lcp = lcpEntry.startTime;
          const lcpScore = calculateScore(lcp, { good: 2500, poor: 4000 });
          setMetrics(prev => ({ ...prev, lcp, lcpScore }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP observer not supported:', error);
    }

    // FID Observer
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries.find(entry => entry.name === 'first-input') as FirstInputEntry;
        if (fidEntry && 'processingStart' in fidEntry) {
          const fid = fidEntry.processingStart - fidEntry.startTime;
          const fidScore = calculateScore(fid, { good: 100, poor: 300 });
          setMetrics(prev => ({ ...prev, fid, fidScore }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('FID observer not supported:', error);
    }

    // CLS Observer
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
            const clsScore = calculateScore(clsValue, { good: 0.1, poor: 0.25 });
            setMetrics(prev => ({ ...prev, cls: clsValue, clsScore }));
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('CLS observer not supported:', error);
    }

    // TTFB measurement
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }
    } catch (error) {
      console.warn('TTFB measurement not supported:', error);
    }

    // Cleanup
    return () => {
      setIsMonitoring(false);
    };
  }, [calculateScore]);

  // Performance optimization: Update optimizations when metrics change
  useEffect(() => {
    const newOptimizations = generateOptimizations(metrics);
    setOptimizations(newOptimizations);
  }, [metrics, generateOptimizations]);

  // Performance optimization: Memoized score colors
  const getScoreColor = useCallback((score: 'good' | 'needs-improvement' | 'poor') => {
    switch (score) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  }, []);

  // Performance optimization: Memoized metric display
  const formatMetric = useCallback((value: number | null, unit: string) => {
    if (value === null) return 'Measuring...';
    return `${Math.round(value)}${unit}`;
  }, []);

  // Performance optimization: Memoized overall score
  const overallScore = useMemo(() => {
    const scores = [metrics.fcpScore, metrics.lcpScore, metrics.fidScore, metrics.clsScore];
    const goodCount = scores.filter(score => score === 'good').length;
    const poorCount = scores.filter(score => score === 'poor').length;
    
    if (poorCount > 0) return 'poor';
    if (goodCount === scores.length) return 'excellent';
    return 'needs-improvement';
  }, [metrics]);

  // Performance optimization: Memoized score icon
  const getScoreIcon = useCallback((score: 'good' | 'needs-improvement' | 'poor') => {
    switch (score) {
      case 'good': return '✓';
      case 'needs-improvement': return '⚠';
      case 'poor': return '✗';
      default: return '?';
    }
  }, []);

  // Performance optimization: Memoized optimization count by priority
  const optimizationCounts = useMemo(() => {
    return optimizations.reduce((acc, opt) => {
      acc[opt.priority] = (acc[opt.priority] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [optimizations]);

  if (!isMonitoring) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-40">
      {/* Performance Indicator */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className={`relative p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black ${
          overallScore === 'excellent' ? 'bg-green-600 hover:bg-green-700' :
          overallScore === 'good' ? 'bg-blue-600 hover:bg-blue-700' :
          overallScore === 'needs-improvement' ? 'bg-yellow-600 hover:bg-yellow-700' :
          'bg-red-600 hover:bg-red-700'
        }`}
        aria-label={`Performance: ${overallScore}. Click to view details.`}
        aria-expanded={showDetails}
      >
        <div className="w-6 h-6 text-white font-bold text-sm">
          {overallScore === 'excellent' ? '★' : 
           overallScore === 'good' ? '✓' : 
           overallScore === 'needs-improvement' ? '⚠' : '✗'}
        </div>
        
        {/* Optimization Badge */}
        {Object.values(optimizationCounts).some(count => count > 0) && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">
              {Object.values(optimizationCounts).reduce((sum, count) => sum + count, 0)}
            </span>
          </div>
        )}
      </button>

      {/* Detailed Performance Panel */}
      {showDetails && (
        <div className="absolute bottom-full left-0 mb-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
            <button
              onClick={() => setShowDetails(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close performance details"
            >
              ✕
            </button>
          </div>

          {/* Core Web Vitals */}
          <div className="space-y-3 mb-4">
            <h4 className="text-sm font-medium text-gray-300">Core Web Vitals</h4>
            
            {/* FCP */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">FCP</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${getScoreColor(metrics.fcpScore)}`}>
                  {formatMetric(metrics.fcp, 'ms')}
                </span>
                <span className={`text-xs ${getScoreColor(metrics.fcpScore)}`}>
                  {getScoreIcon(metrics.fcpScore)}
                </span>
              </div>
            </div>

            {/* LCP */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">LCP</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${getScoreColor(metrics.lcpScore)}`}>
                  {formatMetric(metrics.lcp, 'ms')}
                </span>
                <span className={`text-xs ${getScoreColor(metrics.lcpScore)}`}>
                  {getScoreIcon(metrics.lcpScore)}
                </span>
              </div>
            </div>

            {/* FID */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">FID</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${getScoreColor(metrics.fidScore)}`}>
                  {formatMetric(metrics.fid, 'ms')}
                </span>
                <span className={`text-xs ${getScoreColor(metrics.fidScore)}`}>
                  {getScoreIcon(metrics.fidScore)}
                </span>
              </div>
            </div>

            {/* CLS */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">CLS</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${getScoreColor(metrics.clsScore)}`}>
                  {formatMetric(metrics.cls, '')}
                </span>
                <span className={`text-xs ${getScoreColor(metrics.clsScore)}`}>
                  {getScoreIcon(metrics.clsScore)}
                </span>
              </div>
            </div>

            {/* TTFB */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">TTFB</span>
              <span className="text-sm text-gray-300">
                {formatMetric(metrics.ttfb, 'ms')}
              </span>
            </div>
          </div>

          {/* Optimization Suggestions */}
          {optimizations.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-300">Optimizations</h4>
              {optimizations.slice(0, 3).map((optimization, index) => (
                <div
                  key={index}
                  className={`p-2 rounded text-xs ${
                    optimization.type === 'error' ? 'bg-red-900/50 border border-red-700/50' :
                    optimization.type === 'warning' ? 'bg-yellow-900/50 border border-yellow-700/50' :
                    optimization.type === 'info' ? 'bg-blue-900/50 border border-blue-700/50' :
                    'bg-green-900/50 border border-green-700/50'
                  }`}
                >
                  <div className="font-medium text-white mb-1">
                    {optimization.message}
                  </div>
                  {optimization.action && (
                    <div className="text-gray-300">
                      {optimization.action}
                    </div>
                  )}
                </div>
              ))}
              {optimizations.length > 3 && (
                <div className="text-xs text-gray-400 text-center">
                  +{optimizations.length - 3} more optimizations
                </div>
              )}
            </div>
          )}

          {/* Performance Score */}
          <div className="mt-4 pt-3 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Overall Score</span>
              <span className={`text-lg font-bold ${getScoreColor(overallScore)}`}>
                {overallScore.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;