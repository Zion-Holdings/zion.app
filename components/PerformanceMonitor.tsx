import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, CheckCircle } from 'lucide-react';

/* eslint-disable no-undef */
interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

interface PerformanceMonitorProps {
  className?: string;
  enabled?: boolean;
  showMetrics?: boolean;
}

// Extended interface for First Input Delay
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  target?: any;
}

// Extended interface for Layout Shift
interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  className = '', 
  enabled = true, 
  showMetrics = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [optimizationTips, setOptimizationTips] = useState<string[]>([]);

  // Performance monitoring
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
      }
    });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fidEntry = entries[0] as PerformanceEventTiming;
      if (fidEntry && 'processingStart' in fidEntry) {
        setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
      }
    });

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
        }
      }
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // DOM and Window load times
    const domLoadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    const windowLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    
    setMetrics(prev => ({ 
      ...prev, 
      domLoad: domLoadTime > 0 ? domLoadTime : null,
      windowLoad: windowLoadTime > 0 ? windowLoadTime : null
    }));

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [enabled]);

  // Generate optimization tips based on metrics
  useEffect(() => {
    const tips: string[] = [];
    
    if (metrics.fcp && metrics.fcp > 1800) {
      tips.push('First Contentful Paint is slow. Consider optimizing critical rendering path.');
    }
    
    if (metrics.lcp && metrics.lcp > 2500) {
      tips.push('Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.');
    }
    
    if (metrics.fid && metrics.fid > 100) {
      tips.push('First Input Delay is high. Consider code splitting and reducing JavaScript execution time.');
    }
    
    if (metrics.cls && metrics.cls > 0.1) {
      tips.push('Cumulative Layout Shift is high. Ensure stable layouts and avoid content jumping.');
    }
    
    if (metrics.ttfb && metrics.ttfb > 600) {
      tips.push('Time to First Byte is slow. Optimize server response time and reduce blocking requests.');
    }

    setOptimizationTips(tips);
  }, [metrics]);

  // Performance optimization functions
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  const enableResourceHints = useCallback(() => {
    // DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdn.jsdelivr.net'
    ];
    
    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });
  }, []);

  // Apply optimizations on mount
  useEffect(() => {
    if (enabled) {
      optimizeImages();
      preloadCriticalResources();
      enableResourceHints();
    }
  }, [enabled, optimizeImages, preloadCriticalResources, enableResourceHints]);

  // Memory usage monitoring
  useEffect(() => {
    if (!enabled || !('memory' in performance)) return;

    const checkMemoryUsage = () => {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        console.warn('High memory usage detected. Consider optimizing memory usage.');
      }
    };

    const interval = setInterval(checkMemoryUsage, 10000);
    return () => clearInterval(interval);
  }, [enabled]);

  // Network monitoring
  useEffect(() => {
    if (!enabled || !('connection' in navigator)) return;

    const connection = (navigator as any).connection;
    if (connection) {
      const updateNetworkInfo = () => {
        const effectiveType = connection.effectiveType;
        const downlink = connection.downlink;
        
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          console.warn('Slow network detected. Consider enabling low-bandwidth mode.');
        }
        
        if (downlink < 1) {
          console.warn('Very slow connection detected. Optimizing for low bandwidth.');
        }
      };

      connection.addEventListener('change', updateNetworkInfo);
      updateNetworkInfo();

      return () => connection.removeEventListener('change', updateNetworkInfo);
    }
  }, [enabled]);

  // Calculate performance scores
  const getPerformanceScore = (metric: keyof PerformanceMetrics): number => {
    const value = metrics[metric];
    if (value === null) return 0;

    switch (metric) {
      case 'fcp':
        return value <= 1800 ? 100 : value <= 3000 ? 50 : 0;
      case 'lcp':
        return value <= 2500 ? 100 : value <= 4000 ? 50 : 0;
      case 'fid':
        return value <= 100 ? 100 : value <= 300 ? 50 : 0;
      case 'cls':
        return value <= 0.1 ? 100 : value <= 0.25 ? 50 : 0;
      case 'ttfb':
        return value <= 800 ? 100 : value <= 1800 ? 50 : 0;
      default:
        return 0;
    }
  };

  const getOverallScore = (): number => {
    const scores = ['fcp', 'lcp', 'fid', 'cls', 'ttfb'].map(metric => 
      getPerformanceScore(metric as keyof PerformanceMetrics)
    );
    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  };

  const getPerformanceStatus = (score: number): 'good' | 'needs-improvement' | 'poor' => {
    if (score >= 90) return 'good';
    if (score >= 70) return 'needs-improvement';
    return 'poor';
  };

  const getPerformanceIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <TrendingUp className="w-5 h-5 text-yellow-400" />;
    return <CheckCircle className="w-5 h-5 text-red-400" />;
  };

  const getStatusIcon = (status: 'good' | 'needs-improvement' | 'poor') => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <TrendingUp className="w-4 h-4" />;
      case 'poor': return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    if (unit === 'ms') return `${Math.round(value)}ms`;
    return `${value.toFixed(3)}`;
  };

  const overallScore = getOverallScore();
  const overallStatus = getPerformanceStatus(overallScore);

  if (!enabled || !showMetrics) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black ${className}`}
        onClick={() => setIsVisible(true)}
        aria-label="Open performance monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed bottom-4 right-4 bg-gray-900/95 backdrop-blur-md border border-gray-600 rounded-lg p-4 text-white max-w-sm z-50 shadow-2xl ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-400" />
          Performance
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} performance monitor`}
          >
            {isExpanded ? '−' : '+'}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close performance monitor"
          >
            ×
          </button>
        </div>
      </div>

      {/* Overall Score */}
      <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Overall Score</span>
          {getPerformanceIcon(overallScore)}
        </div>
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">{overallScore}</div>
          <div className="text-sm text-gray-400">/ 100</div>
          <div className={`ml-auto px-2 py-1 rounded text-xs font-medium ${
            overallStatus === 'good' ? 'bg-green-600/20 text-green-400' :
            overallStatus === 'needs-improvement' ? 'bg-yellow-600/20 text-yellow-400' :
            'bg-red-600/20 text-red-400'
          }`}>
            {overallStatus.replace('-', ' ')}
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      {isExpanded && (
        <div className="space-y-3">
          {[
            { key: 'fcp', label: 'First Contentful Paint', unit: 'ms' },
            { key: 'lcp', label: 'Largest Contentful Paint', unit: 'ms' },
            { key: 'fid', label: 'First Input Delay', unit: 'ms' },
            { key: 'cls', label: 'Cumulative Layout Shift', unit: '' },
            { key: 'ttfb', label: 'Time to First Byte', unit: 'ms' }
          ].map(({ key, label, unit }) => {
            const value = metrics[key as keyof PerformanceMetrics];
            const score = getPerformanceScore(key as keyof PerformanceMetrics);
            const status = getPerformanceStatus(score);
            
            return (
              <div key={key} className="p-3 bg-gray-800/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{label}</span>
                  {getStatusIcon(status)}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">
                    {formatMetric(value, unit)}
                  </div>
                  <div className="text-sm text-gray-400">
                    Score: {score}
                  </div>
                </div>
                <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      score >= 90 ? 'bg-green-500' :
                      score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => window.location.reload()}
          className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
          aria-label="Refresh page to measure performance"
        >
          <Zap className="w-4 h-4 inline mr-1" />
          Refresh
        </button>
        <button
          onClick={() => {
            setMetrics({
              fcp: null,
              lcp: null,
              fid: null,
              cls: null,
              ttfb: null,
              domLoad: null,
              windowLoad: null
            });
          }}
          className="flex-1 px-3 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-lg transition-colors"
          aria-label="Reset performance metrics"
        >
          <Clock className="w-4 h-4 inline mr-1" />
          Reset
        </button>
      </div>

      {/* Optimization Tips */}
      {optimizationTips.length > 0 && (
        <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
          <div className="text-sm font-medium mb-2">Optimization Tips:</div>
          <ul className="space-y-1 text-xs text-gray-300">
            {optimizationTips.slice(0, 2).map((tip, index) => (
              <li key={index}>• {tip}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default PerformanceMonitor;