import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, AlertTriangle, CheckCircle, Info, X, TrendingUp, Clock, Gauge } from 'lucide-react';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  autoHide?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

const defaultThresholds = {
  fcp: 1800, // 1.8 seconds
  lcp: 2500, // 2.5 seconds
  fid: 100,  // 100ms
  cls: 0.1,  // 0.1
  ttfb: 600  // 600ms
};

export default function PerformanceMonitor({ 
  showDetails = false, 
  autoHide = true,
  threshold = defaultThresholds 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    domLoad: null,
    windowLoad: null
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(showDetails);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  // Calculate performance score based on Core Web Vitals
  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    let totalWeight = 0;
    let weightedScore = 0;

    // FCP weight: 25%
    if (metrics.fcp !== null) {
      const fcpScore = metrics.fcp <= threshold.fcp ? 100 : Math.max(0, 100 - ((metrics.fcp - threshold.fcp) / 100) * 20);
      weightedScore += fcpScore * 0.25;
      totalWeight += 0.25;
    }

    // LCP weight: 25%
    if (metrics.lcp !== null) {
      const lcpScore = metrics.lcp <= threshold.lcp ? 100 : Math.max(0, 100 - ((metrics.lcp - threshold.lcp) / 100) * 20);
      weightedScore += lcpScore * 0.25;
      totalWeight += 0.25;
    }

    // FID weight: 25%
    if (metrics.fid !== null) {
      const fidScore = metrics.fid <= threshold.fid ? 100 : Math.max(0, 100 - ((metrics.fid - threshold.fid) / 10) * 20);
      weightedScore += fidScore * 0.25;
      totalWeight += 0.25;
    }

    // CLS weight: 15%
    if (metrics.cls !== null) {
      const clsScore = metrics.cls <= threshold.cls ? 100 : Math.max(0, 100 - (metrics.cls / 0.01) * 20);
      weightedScore += clsScore * 0.15;
      totalWeight += 0.15;
    }

    // TTFB weight: 10%
    if (metrics.ttfb !== null) {
      const ttfbScore = metrics.ttfb <= threshold.ttfb ? 100 : Math.max(0, 100 - ((metrics.ttfb - threshold.ttfb) / 10) * 20);
      weightedScore += ttfbScore * 0.10;
      totalWeight += 0.10;
    }

    return totalWeight > 0 ? Math.round(weightedScore / totalWeight) : 0;
  }, [threshold]);

  // Get performance rating
  const getPerformanceRating = (score: number): { label: string; color: string; icon: React.ReactNode } => {
    if (score >= 90) {
      return { label: 'Excellent', color: 'text-green-400', icon: <CheckCircle className="w-4 h-4" /> };
    } else if (score >= 70) {
      return { label: 'Good', color: 'text-yellow-400', icon: <TrendingUp className="w-4 h-4" /> };
    } else if (score >= 50) {
      return { label: 'Fair', color: 'text-orange-400', icon: <AlertTriangle className="w-4 h-4" /> };
    } else {
      return { label: 'Poor', color: 'text-red-400', icon: <AlertTriangle className="w-4 h-4" /> };
    }
  };

  // Get metric status
  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number | null): { status: 'good' | 'needs-improvement' | 'poor'; color: string } => {
    if (value === null) return { status: 'good', color: 'text-gray-400' };
    
    const thresholds = {
      fcp: { good: threshold.fcp, poor: threshold.fcp * 1.5 },
      lcp: { good: threshold.lcp, poor: threshold.lcp * 1.5 },
      fid: { good: threshold.fid, poor: threshold.fid * 1.5 },
      cls: { good: threshold.cls, poor: threshold.cls * 1.5 },
      ttfb: { good: threshold.ttfb, poor: threshold.ttfb * 1.5 }
    };

    const metricThresholds = thresholds[metric as keyof typeof thresholds];
    if (!metricThresholds) return { status: 'good', color: 'text-gray-400' };

    if (value <= metricThresholds.good) {
      return { status: 'good', color: 'text-green-400' };
    } else if (value <= metricThresholds.poor) {
      return { status: 'needs-improvement', color: 'text-yellow-400' };
    } else {
      return { status: 'poor', color: 'text-red-400' };
    }
  };

  // Format metric value
  const formatMetric = (metric: keyof PerformanceMetrics, value: number | null): string => {
    if (value === null) return 'N/A';
    
    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'ttfb':
      case 'fmp':
      case 'domLoad':
      case 'windowLoad':
        return `${value.toFixed(0)}ms`;
      case 'fid':
        return `${value.toFixed(1)}ms`;
      case 'cls':
        return value.toFixed(3);
      default:
        return value.toString();
    }
  };

  // Monitor performance metrics
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
        }
      });
    });

    // Observe different performance entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.warn('PerformanceObserver not supported');
    }

    // Measure TTFB
    if ('performance' in window) {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
          domLoad: navigationEntry.domContentLoadedEventEnd - (navigationEntry as any).navigationStart || 0,
          windowLoad: navigationEntry.loadEventEnd - (navigationEntry as any).navigationStart || 0
        }));
      }
    }

    // Measure First Meaningful Paint (FMP) approximation
    const measureFMP = () => {
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fmp: fcpEntry.startTime }));
      }
    };

    // Wait for page to load
    if (document.readyState === 'complete') {
      measureFMP();
    } else {
      window.addEventListener('load', measureFMP);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('load', measureFMP);
    };
  }, []);

  // Update performance score when metrics change
  useEffect(() => {
    const score = calculateScore(metrics);
    setPerformanceScore(score);
    
    if (score > 0) {
      setIsVisible(true);
      
      if (autoHide && score >= 90) {
        const timer = setTimeout(() => setIsVisible(false), 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [metrics, calculateScore, autoHide]);

  // Send metrics to analytics
  useEffect(() => {
    if (performanceScore > 0 && typeof window !== 'undefined') {
      // Send to Google Analytics if available
      if (window.gtag) {
        window.gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          value: performanceScore,
          custom_parameters: {
            fcp: metrics.fcp,
            lcp: metrics.lcp,
            fid: metrics.fid,
            cls: metrics.cls,
            ttfb: metrics.ttfb
          }
        });
      }

      // Send to custom analytics endpoint
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          score: performanceScore,
          metrics,
          url: window.location.href,
          timestamp: new Date().toISOString()
        })
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    }
  }, [performanceScore, metrics]);

  if (!isVisible) return null;

  const rating = getPerformanceRating(performanceScore);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="fixed bottom-4 right-4 z-50 max-w-sm w-full"
      >
        <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                <Gauge className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Performance Monitor</h3>
                <div className="flex items-center space-x-2">
                  {rating.icon}
                  <span className={`text-sm font-medium ${rating.color}`}>
                    {rating.label} ({performanceScore}/100)
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
              aria-label="Close performance monitor"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Metrics */}
          <div className="p-4 space-y-3">
            {Object.entries(metrics).map(([key, value]) => {
              if (value === null) return null;
              
              const metricKey = key as keyof PerformanceMetrics;
              const status = getMetricStatus(metricKey, value);
              const formattedValue = formatMetric(metricKey, value);
              
              return (
                <div key={key} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-300 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    {status.status === 'good' && <CheckCircle className="w-3 h-3 text-green-400" />}
                    {status.status === 'needs-improvement' && <AlertTriangle className="w-3 h-3 text-yellow-400" />}
                    {status.status === 'poor' && <AlertTriangle className="w-3 h-3 text-red-400" />}
                  </div>
                  <span className={`text-sm font-mono ${status.color}`}>
                    {formattedValue}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="p-4 border-t border-gray-700/50 bg-gray-800/30">
            <div className="flex space-x-2">
              <button
                onClick={() => setShowFullDetails(!showFullDetails)}
                className="flex-1 px-3 py-2 text-sm bg-gray-700/50 hover:bg-gray-700/70 text-gray-300 hover:text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Info className="w-4 h-4" />
                <span>{showFullDetails ? 'Hide Details' : 'Show Details'}</span>
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-3 py-2 text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 flex items-center space-x-2"
              >
                <Zap className="w-4 h-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>

          {/* Detailed Information */}
          <AnimatePresence>
            {showFullDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-gray-700/50 bg-gray-800/20"
              >
                <div className="p-4 space-y-3 text-sm text-gray-300">
                  <div>
                    <h4 className="font-medium text-white mb-2">Core Web Vitals</h4>
                    <p className="text-xs leading-relaxed">
                      These metrics measure the user experience of your website. 
                      Aim for scores above 90 for optimal performance.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="font-medium text-cyan-400">FCP</div>
                      <div className="text-gray-400">First Contentful Paint</div>
                      <div className="text-gray-500">Target: &lt;{threshold.fcp}ms</div>
                    </div>
                    <div>
                      <div className="font-medium text-cyan-400">LCP</div>
                      <div className="text-gray-400">Largest Contentful Paint</div>
                      <div className="text-gray-500">Target: &lt;{threshold.lcp}ms</div>
                    </div>
                    <div>
                      <div className="font-medium text-cyan-400">FID</div>
                      <div className="text-gray-400">First Input Delay</div>
                      <div className="text-gray-500">Target: &lt;{threshold.fid}ms</div>
                    </div>
                    <div>
                      <div className="font-medium text-cyan-400">CLS</div>
                      <div className="text-gray-400">Cumulative Layout Shift</div>
                      <div className="text-gray-500">Target: &lt;{threshold.cls}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}