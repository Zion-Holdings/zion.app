import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = false,
  autoOptimize = true,
  children
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [showOptimizationPanel, setShowOptimizationPanel] = useState(false);

  // Performance monitoring with throttling
  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        largestContentfulPaint: 0, // Will be measured separately
        cumulativeLayoutShift: 0, // Will be measured separately
        firstInputDelay: 0, // Will be measured separately
        timeToInteractive: navigation.domInteractive - navigation.fetchStart
      };

      setMetrics(newMetrics);
      
      // Auto-optimize if enabled
      if (autoOptimize) {
        analyzeAndOptimize(newMetrics);
      }
    }
  }, [autoOptimize]);

  // Analyze performance and suggest optimizations
  const analyzeAndOptimize = useCallback((currentMetrics: PerformanceMetrics) => {
    const newOptimizations: string[] = [];
    
    if (currentMetrics.loadTime > 3000) {
      newOptimizations.push('Consider implementing lazy loading for images and components');
    }
    
    if (currentMetrics.firstContentfulPaint > 1500) {
      newOptimizations.push('Optimize critical rendering path and reduce render-blocking resources');
    }
    
    if (currentMetrics.timeToInteractive > 5000) {
      newOptimizations.push('Reduce JavaScript bundle size and implement code splitting');
    }

    if (newOptimizations.length > 0) {
      setOptimizations(newOptimizations);
      setShowOptimizationPanel(true);
    }
  }, []);

  // Apply performance optimizations
  const applyOptimizations = useCallback(() => {
    // Simulate applying optimizations
    setIsOptimizing(true);
    
    // Preload critical resources
    const criticalResources = [
      '/api/analytics',
      '/api/performance',
      '/api/health'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'fetch';
      document.head.appendChild(link);
    });

    // Lazy load non-critical images
    if (typeof window !== 'undefined' && window.IntersectionObserver) {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        const observer = new window.IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const imgElement = entry.target as any;
              imgElement.src = imgElement.dataset.src || '';
              imgElement.classList.remove('loading-skeleton');
              observer.unobserve(imgElement);
            }
          });
        });
        observer.observe(img);
      });
    }

    setIsOptimizing(false);
  }, []);

  // Monitor performance metrics
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initial measurement
      measurePerformance();
      
      // Monitor for performance changes
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => prev ? {
              ...prev,
              largestContentfulPaint: entry.startTime
            } : null);
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Fallback for older browsers
        console.log('PerformanceObserver not supported');
      }
      
      // Measure performance on route changes
      const handleRouteChange = () => {
        setTimeout(measurePerformance, 100);
      };
      
      window.addEventListener('popstate', handleRouteChange);
      
      return () => {
        observer.disconnect();
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, [measurePerformance]);

  // Performance score calculation
  const calculatePerformanceScore = useCallback((currentMetrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (currentMetrics.loadTime > 3000) score -= 20;
    if (currentMetrics.firstContentfulPaint > 1500) score -= 15;
    if (currentMetrics.timeToInteractive > 5000) score -= 25;
    
    return Math.max(0, score);
  }, []);

  return (
    <>
      {children}
      
      {/* Performance Metrics Panel */}
      {showMetrics && metrics && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed bottom-4 right-4 bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-xl p-4 w-80 shadow-2xl z-50"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Activity className="w-5 h-5 mr-2 text-cyan-400" />
              Performance
            </h3>
            <button
              onClick={() => setShowOptimizationPanel(!showOptimizationPanel)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Zap className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Load Time:</span>
              <span className={`text-sm font-medium ${
                metrics.loadTime < 2000 ? 'text-green-400' : 
                metrics.loadTime < 4000 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">FCP:</span>
              <span className={`text-sm font-medium ${
                metrics.firstContentfulPaint < 1000 ? 'text-green-400' : 
                metrics.firstContentfulPaint < 2000 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {metrics.firstContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">TTI:</span>
              <span className={`text-sm font-medium ${
                metrics.timeToInteractive < 3000 ? 'text-green-400' : 
                metrics.timeToInteractive < 5000 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {metrics.timeToInteractive.toFixed(0)}ms
              </span>
            </div>
            
            <div className="pt-2 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Score:</span>
                <span className={`text-lg font-bold ${
                  calculatePerformanceScore(metrics) >= 90 ? 'text-green-400' :
                  calculatePerformanceScore(metrics) >= 70 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {calculatePerformanceScore(metrics)}/100
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Optimization Panel */}
      {showOptimizationPanel && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 left-4 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl p-4 w-96 shadow-2xl z-50"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              Performance Optimizations
            </h3>
            <button
              onClick={() => setShowOptimizationPanel(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-3 mb-4">
            {optimizations.map((optimization, index) => (
              <div key={index} className="flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">{optimization}</span>
              </div>
            ))}
          </div>
          
          <button
            onClick={applyOptimizations}
            disabled={isOptimizing}
            className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isOptimizing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Optimizing...
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Apply Optimizations
              </>
            )}
          </button>
        </motion.div>
      )}
    </>
  );
};

export default PerformanceOptimizer;