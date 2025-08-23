import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
  targetLoadTime?: number;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = false,
  autoOptimize = true,
  targetLoadTime = 2000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure performance metrics
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
        
        const metrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0,
          largestContentfulPaint: lcp ? lcp.startTime : 0,
          cumulativeLayoutShift: 0, // Would need to be calculated with LayoutShift API
          timeToInteractive: navigation.domInteractive - navigation.fetchStart
        };

        setMetrics(metrics);
        
        if (autoOptimize) {
          suggestOptimizations(metrics);
        }
      }
    };

    // Wait for page to load completely
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [autoOptimize]);

  const suggestOptimizations = (metrics: PerformanceMetrics) => {
    const suggestions: string[] = [];

    if (metrics.loadTime > targetLoadTime) {
      suggestions.push('Consider implementing lazy loading for images and components');
      suggestions.push('Optimize bundle size with code splitting');
      suggestions.push('Enable compression and caching');
    }

    if (metrics.firstContentfulPaint > 1000) {
      suggestions.push('Optimize critical rendering path');
      suggestions.push('Reduce render-blocking resources');
    }

    if (metrics.largestContentfulPaint > 2500) {
      suggestions.push('Optimize images and media files');
      suggestions.push('Implement resource hints (preload, prefetch)');
    }

    setOptimizations(suggestions);
  };

  const runOptimizations = async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Apply some basic optimizations
    if (typeof window !== 'undefined') {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        const dataSrc = img.getAttribute('data-src');
        if (dataSrc) {
          img.setAttribute('src', dataSrc);
          img.removeAttribute('data-src');
        }
      });

      // Preload critical resources
      const criticalLinks = document.querySelectorAll('link[data-critical]');
      criticalLinks.forEach(link => {
        link.setAttribute('rel', 'preload');
        link.removeAttribute('data-critical');
      });
    }

    setIsOptimizing(false);
  };

  if (!showMetrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/90 backdrop-blur-lg border border-gray-700 rounded-lg p-4 max-w-sm shadow-2xl"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white flex items-center">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Performance Monitor
          </h3>
          <button
            onClick={runOptimizations}
            disabled={isOptimizing}
            className="text-xs px-2 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded text-white transition-colors"
          >
            {isOptimizing ? 'Optimizing...' : 'Optimize'}
          </button>
        </div>

        {metrics && (
          <div className="space-y-2 mb-3">
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Load Time:</span>
              <span className={metrics.loadTime > targetLoadTime ? 'text-red-400' : 'text-green-400'}>
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">FCP:</span>
              <span className={metrics.firstContentfulPaint > 1000 ? 'text-red-400' : 'text-green-400'}>
                {metrics.firstContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">LCP:</span>
              <span className={metrics.largestContentfulPaint > 2500 ? 'text-red-400' : 'text-green-400'}>
                {metrics.largestContentfulPaint.toFixed(0)}ms
              </span>
            </div>
          </div>
        )}

        {optimizations.length > 0 && (
          <div className="border-t border-gray-700 pt-3">
            <h4 className="text-xs font-medium text-gray-300 mb-2">Optimization Suggestions:</h4>
            <ul className="space-y-1">
              {optimizations.slice(0, 3).map((suggestion, index) => (
                <li key={index} className="text-xs text-gray-400 flex items-start">
                  <AlertTriangle className="w-3 h-3 mr-1 mt-0.5 text-yellow-400 flex-shrink-0" />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PerformanceOptimizer;