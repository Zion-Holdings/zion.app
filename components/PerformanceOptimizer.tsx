import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Gauge, Clock, 
  AlertTriangle, CheckCircle, X, Settings
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
  si: number; // Speed Index
}

interface PerformanceOptimization {
  type: 'image' | 'script' | 'css' | 'font' | 'resource';
  description: string;
  impact: 'high' | 'medium' | 'low';
  status: 'pending' | 'applied' | 'failed';
}

const PerformanceOptimizer: React.FC<{
  showMetrics?: boolean;
  autoOptimize?: boolean;
}> = ({ showMetrics = false, autoOptimize = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb: 0, fmp: 0, si: 0
  });
  
  const [optimizations, setOptimizations] = useState<PerformanceOptimization[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoOptimizationEnabled, setAutoOptimizationEnabled] = useState(autoOptimize);

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: Math.round(fcp.startTime) }));
        }
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: Math.round(lcp.startTime) }));
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as any;
            if (firstInputEntry.processingStart && firstInputEntry.startTime) {
              setMetrics(prev => ({ ...prev, fid: Math.round(firstInputEntry.processingStart - firstInputEntry.startTime) }));
            }
          }
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((entryList) => {
        let cls = 0;
        entryList.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            cls += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: Math.round(cls * 1000) / 1000 }));
      }).observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: Math.round(navigationEntry.responseStart - navigationEntry.requestStart) }));
      }
    }
  }, []);

  // Generate optimization suggestions
  const generateOptimizations = useCallback(() => {
    const newOptimizations: PerformanceOptimization[] = [];

    if (metrics.fcp > 1800) {
      newOptimizations.push({
        type: 'resource',
        description: 'Optimize critical rendering path - reduce blocking resources',
        impact: 'high',
        status: 'pending'
      });
    }

    if (metrics.lcp > 2500) {
      newOptimizations.push({
        type: 'image',
        description: 'Optimize largest contentful paint - compress and lazy load images',
        impact: 'high',
        status: 'pending'
      });
    }

    if (metrics.fid > 100) {
      newOptimizations.push({
        type: 'script',
        description: 'Reduce JavaScript execution time - split and defer non-critical scripts',
        impact: 'high',
        status: 'pending'
      });
    }

    if (metrics.cls > 0.1) {
      newOptimizations.push({
        type: 'css',
        description: 'Prevent layout shifts - set explicit dimensions for images and ads',
        impact: 'medium',
        status: 'pending'
      });
    }

    if (metrics.ttfb > 600) {
      newOptimizations.push({
        type: 'resource',
        description: 'Improve server response time - optimize database queries and caching',
        impact: 'medium',
        status: 'pending'
      });
    }

    setOptimizations(newOptimizations);
  }, [metrics]);

  // Apply optimizations automatically
  const applyOptimizations = useCallback(async () => {
    const updatedOptimizations = [...optimizations];
    
    for (let i = 0; i < updatedOptimizations.length; i++) {
      const opt = updatedOptimizations[i];
      
      try {
        switch (opt.type) {
          case 'image': {
            // Optimize images
            const images = document.querySelectorAll('img');
            images.forEach(img => {
              if (!img.loading) img.loading = 'lazy';
              if (!img.decoding) img.decoding = 'async';
            });
            break;
          }
            
          case 'script': {
            // Defer non-critical scripts
            const scripts = document.querySelectorAll('script:not([data-critical])');
            scripts.forEach(script => {
              const scriptElement = script as any;
              if (!scriptElement.async && !scriptElement.defer) {
                scriptElement.defer = true;
              }
            });
            break;
          }
            
          case 'css': {
            // Optimize CSS delivery
            const criticalCSS = document.querySelector('style[data-critical]');
            if (!criticalCSS) {
              const style = document.createElement('style');
              style.setAttribute('data-critical', 'true');
              style.textContent = `
                /* Critical CSS for above-the-fold content */
                .hero-section { min-height: 100vh; }
                .navigation { position: fixed; top: 0; width: 100%; }
              `;
              document.head.appendChild(style);
            }
            break;
          }
            
          case 'resource': {
            // Preload critical resources
            const preloadLinks = document.querySelectorAll('link[rel="preload"]');
            if (preloadLinks.length === 0) {
              const criticalFonts = document.querySelectorAll('link[rel="stylesheet"][href*="font"]');
              criticalFonts.forEach(font => {
                const preload = document.createElement('link');
                preload.rel = 'preload';
                preload.href = font.getAttribute('href') || '';
                preload.as = 'font';
                preload.crossOrigin = 'anonymous';
                document.head.appendChild(preload);
              });
            }
            break;
          }
        }
        
        updatedOptimizations[i].status = 'applied';
      } catch (error) {
        updatedOptimizations[i].status = 'failed';
        console.error('Failed to apply optimization:', error);
      }
    }
    
    setOptimizations(updatedOptimizations);
  }, [optimizations]);

  // Auto-optimization effect
  useEffect(() => {
    if (autoOptimizationEnabled && optimizations.length > 0) {
      const timer = setTimeout(() => {
        applyOptimizations();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [autoOptimizationEnabled, optimizations, applyOptimizations]);

  // Performance monitoring effect
  useEffect(() => {
    if (showMetrics) {
      setIsVisible(true);
      measurePerformance();
      
      // Re-measure every 30 seconds
      const interval = setInterval(measurePerformance, 30000);
      return () => clearInterval(interval);
    }
  }, [showMetrics, measurePerformance]);

  // Generate optimizations when metrics change
  useEffect(() => {
    if (Object.values(metrics).some(m => m > 0)) {
      generateOptimizations();
    }
  }, [metrics, generateOptimizations]);

  const getPerformanceScore = () => {
    const scores = [
      metrics.fcp <= 1800 ? 100 : Math.max(0, 100 - (metrics.fcp - 1800) / 10),
      metrics.lcp <= 2500 ? 100 : Math.max(0, 100 - (metrics.lcp - 2500) / 25),
      metrics.fid <= 100 ? 100 : Math.max(0, 100 - (metrics.fid - 100) / 2),
      metrics.cls <= 0.1 ? 100 : Math.max(0, 100 - metrics.cls * 1000),
      metrics.ttfb <= 600 ? 100 : Math.max(0, 100 - (metrics.ttfb - 600) / 10)
    ];
    
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="bg-black/95 backdrop-blur-lg border border-cyan-400/30 rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-4 border-b border-cyan-400/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <h3 className="text-sm font-semibold text-white">Performance</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setAutoOptimizationEnabled(!autoOptimizationEnabled)}
                className={`p-1 rounded ${autoOptimizationEnabled ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-600/20 text-gray-400'}`}
                title="Auto-optimization"
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 rounded bg-gray-600/20 text-gray-400 hover:bg-gray-500/20"
              >
                {isExpanded ? <X className="w-4 h-4" /> : <Gauge className="w-4 h-4" />}
              </button>
            </div>
          </div>
          
          {/* Performance Score */}
          <div className="mt-3 text-center">
            <div className={`text-2xl font-bold ${getScoreColor(getPerformanceScore())}`}>
              {getPerformanceScore()}
            </div>
            <div className="text-xs text-gray-400">Performance Score</div>
          </div>
        </div>

        {/* Metrics */}
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-800/50 rounded p-2">
              <div className="text-cyan-400 font-medium">{metrics.fcp}ms</div>
              <div className="text-gray-400">FCP</div>
            </div>
            <div className="bg-gray-800/50 rounded p-2">
              <div className="text-purple-400 font-medium">{metrics.lcp}ms</div>
              <div className="text-gray-400">LCP</div>
            </div>
            <div className="bg-gray-800/50 rounded p-2">
              <div className="text-emerald-400 font-medium">{metrics.fid}ms</div>
              <div className="text-gray-400">FID</div>
            </div>
            <div className="bg-gray-800/50 rounded p-2">
              <div className="text-orange-400 font-medium">{metrics.cls}</div>
              <div className="text-gray-400">CLS</div>
            </div>
          </div>

          {/* Optimizations */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <div className="text-xs font-medium text-gray-300">Optimizations</div>
                {optimizations.map((opt, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`p-2 rounded text-xs border ${
                      opt.status === 'applied' ? 'border-emerald-500/30 bg-emerald-500/10' :
                      opt.status === 'failed' ? 'border-red-500/30 bg-red-500/10' :
                      'border-yellow-500/30 bg-yellow-500/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {opt.status === 'applied' ? <CheckCircle className="w-3 h-3 text-emerald-400" /> :
                       opt.status === 'failed' ? <AlertTriangle className="w-3 h-3 text-red-400" /> :
                       <Clock className="w-3 h-3 text-yellow-400" />}
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        opt.impact === 'high' ? 'bg-red-500/20 text-red-400' :
                        opt.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {opt.impact}
                      </span>
                    </div>
                    <div className="text-gray-300">{opt.description}</div>
                  </motion.div>
                ))}
                
                {optimizations.length > 0 && (
                  <button
                    onClick={applyOptimizations}
                    className="w-full mt-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                  >
                    Apply All Optimizations
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceOptimizer;