import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Clock, Database, Wifi, Cpu, HardDrive, Gauge } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  showMetrics = false, 
  autoOptimize = true 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Enhanced performance monitoring
  const measurePerformance = useCallback(async () => {
    if (typeof window === 'undefined') return;

    try {
      // Wait for performance metrics to be available
      await new Promise(resolve => setTimeout(resolve, 1000));

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
      
      const newMetrics: PerformanceMetrics = {
        fcp: Math.round(fcp),
        lcp: Math.round(lcp),
        fid: 0, // Will be updated when interaction occurs
        cls: 0, // Will be updated when layout shifts occur
        ttfb: Math.round(navigation.responseStart - navigation.requestStart),
        domLoad: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
        windowLoad: Math.round(navigation.loadEventEnd - navigation.loadEventStart)
      };

      setMetrics(newMetrics);
      
      // Auto-optimize if enabled
      if (autoOptimize) {
        analyzeAndOptimize(newMetrics);
      }
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, [autoOptimize]);

  // Enhanced optimization analysis
  const analyzeAndOptimize = useCallback((currentMetrics: PerformanceMetrics) => {
    const newOptimizations: string[] = [];
    
    if (currentMetrics.fcp > 2000) {
      newOptimizations.push('First Contentful Paint is slow - consider image optimization');
    }
    
    if (currentMetrics.lcp > 4000) {
      newOptimizations.push('Largest Contentful Paint is slow - optimize hero images');
    }
    
    if (currentMetrics.ttfb > 600) {
      newOptimizations.push('Time to First Byte is slow - optimize server response');
    }
    
    if (currentMetrics.domLoad > 100) {
      newOptimizations.push('DOM load time is high - reduce JavaScript execution');
    }

    // Apply automatic optimizations
    if (newOptimizations.length > 0) {
      applyOptimizations(newOptimizations);
    }
    
    setOptimizations(newOptimizations);
  }, []);

  // Enhanced optimization application
  const applyOptimizations = useCallback((optimizationList: string[]) => {
    setIsOptimizing(true);
    
    // Apply image optimization
    if (optimizationList.some(opt => opt.includes('image'))) {
      optimizeImages();
    }
    
    // Apply JavaScript optimization
    if (optimizationList.some(opt => opt.includes('JavaScript'))) {
      optimizeJavaScript();
    }
    
    // Apply resource optimization
    if (optimizationList.some(opt => opt.includes('server'))) {
      optimizeResources();
    }
    
    setTimeout(() => setIsOptimizing(false), 2000);
  }, []);

  // Image optimization
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

  // JavaScript optimization
  const optimizeJavaScript = useCallback(() => {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach(script => {
      const scriptElement = script as HTMLScriptElement;
      if (!scriptElement.async) {
        scriptElement.async = true;
      }
    });
  }, []);

  // Resource optimization
  const optimizeResources = useCallback(() => {
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      if (!document.querySelector(`link[href="${resource}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        document.head.appendChild(link);
      }
    });
  }, []);

  // Manual optimization trigger
  const triggerOptimization = useCallback(() => {
    if (metrics) {
      analyzeAndOptimize(metrics);
    }
  }, [metrics, analyzeAndOptimize]);

  useEffect(() => {
    if (showMetrics) {
      setIsVisible(true);
      measurePerformance();
      
      // Set up continuous monitoring
      const interval = setInterval(measurePerformance, 30000); // Every 30 seconds
      
      return () => clearInterval(interval);
    }
  }, [showMetrics, measurePerformance]);

  // Enhanced CLS monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as any;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
          clsEntries.push(entry);
        }
      }
      
      if (metrics) {
        setMetrics(prev => prev ? { ...prev, cls: Math.round(clsValue * 1000) / 1000 } : null);
      }
    });

    observer.observe({ entryTypes: ['layout-shift'] });

    return () => observer.disconnect();
  }, [metrics]);

  // Enhanced FID monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let fidValue = 0;
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        fidValue = Math.max(fidValue, (entry as any).processingStart - (entry as any).startTime);
      }
      
      if (metrics) {
        setMetrics(prev => prev ? { ...prev, fid: Math.round(fidValue) } : null);
      }
    });

    observer.observe({ entryTypes: ['first-input'] });

    return () => observer.disconnect();
  }, [metrics]);

  if (!showMetrics || !isVisible) return null;

  const getPerformanceScore = (metric: keyof PerformanceMetrics) => {
    if (!metrics) return 0;
    
    const thresholds: Record<keyof PerformanceMetrics, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 600, needsImprovement: 1800 },
      domLoad: { good: 100, needsImprovement: 300 },
      windowLoad: { good: 200, needsImprovement: 600 }
    };
    
    const value = metrics[metric];
    const threshold = thresholds[metric];
    
    if (value <= threshold.good) return 100;
    if (value <= threshold.needsImprovement) return 50;
    return 25;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <TrendingUp className="w-4 h-4" />;
    if (score >= 50) return <Gauge className="w-4 h-4" />;
    return <Clock className="w-4 h-4" />;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>

          {metrics && (
            <div className="space-y-4">
              {/* Performance Score */}
              <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-400">
                  {Math.round(
                    Object.keys(metrics).reduce((acc, key) => 
                      acc + getPerformanceScore(key as keyof PerformanceMetrics), 0
                    ) / Object.keys(metrics).length
                  )}
                </div>
                <div className="text-sm text-gray-400">Overall Score</div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(metrics).map(([key, value]) => {
                  const score = getPerformanceScore(key as keyof PerformanceMetrics);
                  const color = getScoreColor(score);
                  const icon = getScoreIcon(score);
                  
                  return (
                    <div key={key} className="bg-gray-800/30 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400 uppercase tracking-wide">
                          {key.toUpperCase()}
                        </span>
                        <span className={color}>{icon}</span>
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {key === 'cls' ? value.toFixed(3) : `${value}ms`}
                      </div>
                      <div className="text-xs text-gray-500">
                        Score: {score}/100
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Optimizations */}
              {optimizations.length > 0 && (
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">Optimizations Applied</h4>
                  <ul className="text-xs text-yellow-300 space-y-1">
                    {optimizations.map((opt, index) => (
                      <li key={index}>• {opt}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={triggerOptimization}
                  disabled={isOptimizing}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors disabled:cursor-not-allowed"
                >
                  {isOptimizing ? 'Optimizing...' : 'Optimize Now'}
                </button>
                <button
                  onClick={measurePerformance}
                  className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
          )}

          {!metrics && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto mb-3"></div>
              <p className="text-gray-400 text-sm">Measuring performance...</p>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceOptimizer;