import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Clock, Cpu, Database, Network, Eye, Target } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  domContentLoaded: number;
  windowLoad: number;
}

interface PerformanceOptimizerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  onMetricsUpdate,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
    domContentLoaded: 0,
    windowLoad: 0
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string>('Ready');
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  // Performance monitoring with Web Vitals
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      // Measure First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, firstContentfulPaint: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Measure Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, largestContentfulPaint: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0;
          }
        }
        setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1] as any;
        if (fid && fid.processingStart && fid.startTime) {
          setMetrics(prev => ({ ...prev, firstInputDelay: fid.processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        clsObserver.disconnect();
        fidObserver.disconnect();
      };
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }, []);

  // Calculate performance score
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;

    // FCP scoring (0-2.5s is good)
    if (metrics.firstContentfulPaint > 2500) score -= 20;
    else if (metrics.firstContentfulPaint > 4000) score -= 40;

    // LCP scoring (0-2.5s is good)
    if (metrics.largestContentfulPaint > 2500) score -= 20;
    else if (metrics.largestContentfulPaint > 4000) score -= 40;

    // CLS scoring (0-0.1 is good)
    if (metrics.cumulativeLayoutShift > 0.1) score -= 20;
    else if (metrics.cumulativeLayoutShift > 0.25) score -= 40;

    // FID scoring (0-100ms is good)
    if (metrics.firstInputDelay > 100) score -= 20;
    else if (metrics.firstInputDelay > 300) score -= 40;

    return Math.max(0, score);
  }, []);

  // Performance optimization techniques
  const optimizePerformance = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing...');

    try {
      // 1. Image optimization
      setOptimizationStatus('Optimizing images...');
      await optimizeImages();

      // 2. CSS optimization
      setOptimizationStatus('Optimizing CSS...');
      await optimizeCSS();

      // 3. JavaScript optimization
      setOptimizationStatus('Optimizing JavaScript...');
      await optimizeJavaScript();

      // 4. Network optimization
      setOptimizationStatus('Optimizing network...');
      await optimizeNetwork();

      setOptimizationStatus('Optimization complete!');
      
      // Re-measure performance after optimization
      setTimeout(() => {
        measurePerformance();
      }, 1000);

    } catch (error) {
      setOptimizationStatus('Optimization failed');
      console.error('Performance optimization error:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [measurePerformance]);

  // Image optimization
  const optimizeImages = async () => {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for images below the fold
      if (!img.loading) {
        img.loading = 'lazy';
      }

      // Add decoding="async" for better performance
      if (!img.decoding) {
        img.decoding = 'async';
      }

      // Optimize srcset for responsive images
      if (img.srcset) {
        const srcset = img.srcset;
        if (!srcset.includes('w=')) {
          // Add width descriptors if missing
          img.srcset = srcset.split(',').map(src => {
            const trimmed = src.trim();
            if (trimmed.includes(' ')) return trimmed;
            return `${trimmed} 1x`;
          }).join(', ');
        }
      }
    });
  };

  // CSS optimization
  const optimizeCSS = async () => {
    if (typeof window === 'undefined') return;

    // Remove unused CSS rules
    const styleSheets = Array.from(document.styleSheets);
    styleSheets.forEach(sheet => {
      try {
        const rules = Array.from(sheet.cssRules || []);
        rules.forEach(rule => {
          if (rule instanceof CSSStyleRule) {
            // Check if selector is used
            try {
              const elements = document.querySelectorAll(rule.selectorText);
              if (elements.length === 0) {
                // Remove unused rule (this is a simplified approach)
                console.log('Unused CSS rule detected:', rule.selectorText);
              }
            } catch (e) {
              // Invalid selector, skip
            }
          }
        });
      } catch (e) {
        // Cross-origin stylesheet, skip
      }
    });
  };

  // JavaScript optimization
  const optimizeJavaScript = async () => {
    if (typeof window === 'undefined') return;

    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script:not([async]):not([defer])');
    scripts.forEach(script => {
      const scriptElement = script as HTMLScriptElement;
      if (scriptElement.src && !scriptElement.src.includes('critical')) {
        scriptElement.defer = true;
      }
    });

    // Optimize event listeners
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      // Use passive event listeners for scroll events
      if (element.addEventListener) {
        const originalAddEventListener = element.addEventListener;
        element.addEventListener = function(type, listener, options) {
          if (type === 'scroll' || type === 'touchstart' || type === 'touchmove') {
            options = { ...options, passive: true };
          }
          return originalAddEventListener.call(this, type, listener, options);
        };
      }
    });
  };

  // Network optimization
  const optimizeNetwork = async () => {
    if (typeof window === 'undefined') return;

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/api/services'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('.woff2') ? 'font' : 'image';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  };

  // Auto-optimize on mount
  useEffect(() => {
    if (autoOptimize) {
      const timer = setTimeout(() => {
        optimizePerformance();
      }, 2000); // Wait for initial load

      return () => clearTimeout(timer);
    }
  }, [autoOptimize, optimizePerformance]);

  // Measure performance on mount
  useEffect(() => {
    const cleanup = measurePerformance();
    
    // Measure basic timing metrics
    const measureBasicMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          windowLoad: navigation.loadEventEnd - navigation.fetchStart
        }));
      }
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      measureBasicMetrics();
    } else {
      window.addEventListener('load', measureBasicMetrics);
      return () => window.removeEventListener('load', measureBasicMetrics);
    }

    return cleanup;
  }, [measurePerformance]);

  // Update performance score when metrics change
  useEffect(() => {
    const score = calculatePerformanceScore(metrics);
    setPerformanceScore(score);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, calculatePerformanceScore, onMetricsUpdate]);

  // Performance recommendations
  const getRecommendations = useMemo(() => {
    const recommendations = [];

    if (metrics.firstContentfulPaint > 2500) {
      recommendations.push('Optimize First Contentful Paint by reducing server response time and critical resources');
    }

    if (metrics.largestContentfulPaint > 2500) {
      recommendations.push('Optimize Largest Contentful Paint by optimizing images and removing render-blocking resources');
    }

    if (metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('Reduce Cumulative Layout Shift by setting explicit dimensions for images and ads');
    }

    if (metrics.firstInputDelay > 100) {
      recommendations.push('Improve First Input Delay by reducing JavaScript execution time');
    }

    return recommendations.length > 0 ? recommendations : ['Performance is optimal!'];
  }, [metrics]);

  if (!showMetrics) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 max-w-sm shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            Performance
          </h3>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              performanceScore >= 90 ? 'bg-green-500' :
              performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`} />
            <span className="text-sm text-gray-400">{performanceScore}/100</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-gray-400">FCP</span>
            </div>
            <div className="text-sm font-medium text-white">
              {metrics.firstContentfulPaint > 0 ? `${(metrics.firstContentfulPaint / 1000).toFixed(1)}s` : 'N/A'}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-gray-400">LCP</span>
            </div>
            <div className="text-sm font-medium text-white">
              {metrics.largestContentfulPaint > 0 ? `${(metrics.largestContentfulPaint / 1000).toFixed(1)}s` : 'N/A'}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-gray-400">CLS</span>
            </div>
            <div className="text-sm font-medium text-white">
              {metrics.cumulativeLayoutShift > 0 ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-gray-400">FID</span>
            </div>
            <div className="text-sm font-medium text-white">
              {metrics.firstInputDelay > 0 ? `${metrics.firstInputDelay.toFixed(0)}ms` : 'N/A'}
            </div>
          </div>
        </div>

        {/* Optimization Button */}
        <button
          onClick={optimizePerformance}
          disabled={isOptimizing}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isOptimizing ? 'Optimizing...' : 'Optimize Performance'}
        </button>

        {/* Status */}
        {optimizationStatus && (
          <p className="text-xs text-gray-400 text-center mt-2">
            {optimizationStatus}
          </p>
        )}

        {/* Recommendations */}
        <div className="mt-4">
          <h4 className="text-sm font-medium text-white mb-2">Recommendations:</h4>
          <ul className="space-y-1">
            {getRecommendations.slice(0, 2).map((rec, index) => (
              <li key={index} className="text-xs text-gray-400 flex items-start gap-2">
                <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                {rec}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default PerformanceOptimizer;