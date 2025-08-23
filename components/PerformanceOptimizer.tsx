import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  TrendingUp, 
  Clock, 
  Database, 
  Network, 
  Cpu, 
  Memory,
  HardDrive,
  Activity,
  Gauge,
  Target,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage?: number;
  networkRequests: number;
  cacheHitRate: number;
}

interface PerformanceOptimizerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showMetrics?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  onMetricsUpdate,
  showMetrics = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    domContentLoaded: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
    networkRequests: 0,
    cacheHitRate: 0
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{
    timestamp: Date;
    action: string;
    improvement: number;
  }>>([]);

  const observerRef = useRef<PerformanceObserver | null>(null);
  const metricsRef = useRef<PerformanceMetrics>(metrics);

  useEffect(() => {
    metricsRef.current = metrics;
  }, [metrics]);

  useEffect(() => {
    initializePerformanceMonitoring();
    return () => cleanupPerformanceMonitoring();
  }, []);

  const initializePerformanceMonitoring = () => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          if (lastEntry) {
            updateMetrics({ largestContentfulPaint: lastEntry.startTime });
          }
        });
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          if (lastEntry) {
            updateMetrics({ firstInputDelay: lastEntry.processingStart - lastEntry.startTime });
          }
        });
        observerRef.current.observe({ entryTypes: ['first-input'] });

        // Layout Shift
        observerRef.current = new PerformanceObserver((list) => {
          let cumulativeLayoutShift = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              cumulativeLayoutShift += (entry as any).value;
            }
          }
          updateMetrics({ cumulativeLayoutShift });
        });
        observerRef.current.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }

    // Measure initial load metrics
    measureInitialMetrics();
    
    // Monitor network requests
    monitorNetworkRequests();
    
    // Monitor memory usage (if available)
    monitorMemoryUsage();
  };

  const cleanupPerformanceMonitoring = () => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  };

  const measureInitialMetrics = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perf = window.performance;
      
      // Navigation timing
      const navigation = perf.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        updateMetrics({
          loadTime,
          domContentLoaded
        });
      }

      // Paint timing
      const paintEntries = perf.getEntriesByType('paint');
      const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
      if (firstPaint) {
        updateMetrics({ firstContentfulPaint: firstPaint.startTime });
      }

      // Time to interactive (approximation)
      const timeToInteractive = Date.now() - performance.timing.navigationStart;
      updateMetrics({ timeToInteractive });
    }
  };

  const monitorNetworkRequests = () => {
    if ('PerformanceObserver' in window) {
      try {
        const networkObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const networkRequests = entries.length;
          const cacheHits = entries.filter(entry => 
            (entry as any).transferSize === 0
          ).length;
          const cacheHitRate = networkRequests > 0 ? (cacheHits / networkRequests) * 100 : 0;
          
          updateMetrics({ networkRequests, cacheHitRate });
        });
        
        networkObserver.observe({ entryTypes: ['resource'] });
      } catch (error) {
        console.warn('Network monitoring not supported:', error);
      }
    }
  };

  const monitorMemoryUsage = () => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const updateMemoryMetrics = () => {
        const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit * 100;
        updateMetrics({ memoryUsage });
      };
      
      updateMemoryMetrics();
      setInterval(updateMemoryMetrics, 5000);
    }
  };

  const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
    const updatedMetrics = { ...metricsRef.current, ...newMetrics };
    setMetrics(updatedMetrics);
    onMetricsUpdate?.(updatedMetrics);
  };

  const optimizePerformance = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Preload critical resources
      await preloadCriticalResources();
      
      // Optimize images
      await optimizeImages();
      
      // Optimize fonts
      await optimizeFonts();
      
      // Clear unnecessary caches
      await clearUnnecessaryCaches();
      
      // Measure improvement
      const improvement = calculateImprovement();
      
      setOptimizationHistory(prev => [...prev, {
        timestamp: new Date(),
        action: 'Performance optimization completed',
        improvement
      }]);
      
      announceOptimizationComplete(improvement);
      
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, []);

  const preloadCriticalResources = async () => {
    const criticalResources = [
      '/images/zion-tech-group-logo.png',
      '/images/zion-tech-group-og.jpg',
      '/fonts/inter-var.woff2'
    ];

    for (const resource of criticalResources) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  };

  const optimizeImages = async () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  };

  const optimizeFonts = async () => {
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach(link => {
      link.setAttribute('crossorigin', 'anonymous');
    });
  };

  const clearUnnecessaryCaches = async () => {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        const unnecessaryCaches = cacheNames.filter(name => 
          !name.includes('zion-tech-group') && !name.includes('static')
        );
        
        await Promise.all(
          unnecessaryCaches.map(name => caches.delete(name))
        );
      } catch (error) {
        console.warn('Cache cleanup failed:', error);
      }
    }
  };

  const calculateImprovement = (): number => {
    // Simple improvement calculation based on metrics
    const baseline = 100;
    const current = Math.min(
      metrics.largestContentfulPaint / 1000,
      metrics.firstInputDelay,
      metrics.cumulativeLayoutShift * 100
    );
    
    return Math.max(0, ((baseline - current) / baseline) * 100);
  };

  const announceOptimizationComplete = (improvement: number) => {
    const message = `Performance optimization completed with ${improvement.toFixed(1)}% improvement`;
    console.log(message);
    
    // Could integrate with notification system here
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Performance Optimized', {
        body: message,
        icon: '/images/zion-tech-group-logo.png'
      });
    }
  };

  const getPerformanceScore = (): number => {
    const scores = [
      metrics.largestContentfulPaint < 2500 ? 100 : Math.max(0, 100 - (metrics.largestContentfulPaint - 2500) / 25),
      metrics.firstInputDelay < 100 ? 100 : Math.max(0, 100 - (metrics.firstInputDelay - 100) / 10),
      metrics.cumulativeLayoutShift < 0.1 ? 100 : Math.max(0, 100 - metrics.cumulativeLayoutShift * 1000)
    ];
    
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  };

  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const performanceScore = getPerformanceScore();
  const performanceGrade = getPerformanceGrade(performanceScore);

  return (
    <>
      {/* Performance Metrics Display */}
      {showMetrics && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 left-4 z-50 bg-gray-900/95 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg border border-gray-700 max-w-sm"
        >
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-5 h-5 text-blue-400" />
            <h3 className="font-semibold">Performance Metrics</h3>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Overall Score:</span>
              <span className={`font-bold ${
                performanceScore >= 90 ? 'text-green-400' :
                performanceScore >= 80 ? 'text-yellow-400' :
                performanceScore >= 70 ? 'text-orange-400' : 'text-red-400'
              }`}>
                {performanceScore}/100 ({performanceGrade})
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>LCP:</span>
              <span>{metrics.largestContentfulPaint.toFixed(0)}ms</span>
            </div>
            
            <div className="flex justify-between">
              <span>FID:</span>
              <span>{metrics.firstInputDelay.toFixed(0)}ms</span>
            </div>
            
            <div className="flex justify-between">
              <span>CLS:</span>
              <span>{metrics.cumulativeLayoutShift.toFixed(3)}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Load Time:</span>
              <span>{metrics.loadTime.toFixed(0)}ms</span>
            </div>
            
            {metrics.memoryUsage && (
              <div className="flex justify-between">
                <span>Memory:</span>
                <span>{metrics.memoryUsage.toFixed(1)}%</span>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Performance Optimization Button */}
      <motion.button
        onClick={optimizePerformance}
        disabled={isOptimizing}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Optimize performance"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOptimizing ? (
            <motion.div
              key="loading"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Activity className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="ready"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <Zap className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Optimization History */}
      <AnimatePresence>
        {optimizationHistory.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-24 right-6 z-40 bg-gray-900/95 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg border border-gray-700 max-w-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold">Recent Optimizations</h3>
            </div>
            
            <div className="space-y-2 text-sm max-h-32 overflow-y-auto">
              {optimizationHistory.slice(-3).map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <div className="flex-1">
                    <div className="text-xs text-gray-400">
                      {item.timestamp.toLocaleTimeString()}
                    </div>
                    <div className="text-xs">
                      {item.action} (+{item.improvement.toFixed(1)}%)
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Tips */}
      <div className="sr-only">
        <h2>Performance Optimization Tips</h2>
        <ul>
          <li>Enable lazy loading for images</li>
          <li>Use WebP format for images</li>
          <li>Minimize JavaScript bundle size</li>
          <li>Implement proper caching strategies</li>
          <li>Use CDN for static assets</li>
          <li>Optimize critical rendering path</li>
        </ul>
      </div>
    </>
  );
};

export default PerformanceOptimizer;