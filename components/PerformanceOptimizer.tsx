import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, AlertTriangle, CheckCircle, X, Settings, RefreshCw } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  score: string;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [showMetrics, setShowMetrics] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [serviceWorkerStatus, setServiceWorkerStatus] = useState<'installing' | 'installed' | 'error' | 'not-supported'>('not-supported');

  // Register service worker for PWA capabilities
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          setServiceWorkerStatus('installing');
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed') {
                  setServiceWorkerStatus('installed');
                }
              });
            }
          });
        })
        .catch(() => setServiceWorkerStatus('error'));
    }
  }, []);

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    if ('PerformanceObserver' in window) {
      try {
        // Measure First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => prev ? { ...prev, fcp: fcpEntry.startTime } : null);
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Measure Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => prev ? { ...prev, lcp: lastEntry.startTime } : null);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Measure First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries.find(entry => entry.entryType === 'first-input');
          if (fidEntry) {
            setMetrics(prev => prev ? { ...prev, fid: fidEntry.processingStart - fidEntry.startTime } : null);
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Measure Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Measure Time to First Byte
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          setMetrics(prev => prev ? { ...prev, ttfb } : null);
        }

        // Calculate performance score
        setTimeout(() => {
          calculatePerformanceScore();
        }, 2000);

      } catch (error) {
        console.error('Performance measurement error:', error);
      }
    }
  }, []);

  const calculatePerformanceScore = useCallback(() => {
    if (!metrics) return;

    let score = 0;
    let grade: 'A' | 'B' | 'C' | 'D' | 'F' = 'F';

    // FCP scoring (0-100)
    if (metrics.fcp < 1800) score += 25;
    else if (metrics.fcp < 3000) score += 15;
    else if (metrics.fcp < 4000) score += 5;

    // LCP scoring (0-100)
    if (metrics.lcp < 2500) score += 25;
    else if (metrics.lcp < 4000) score += 15;
    else if (metrics.lcp < 6000) score += 5;

    // FID scoring (0-100)
    if (metrics.fid < 100) score += 25;
    else if (metrics.fid < 300) score += 15;
    else if (metrics.fid < 500) score += 5;

    // CLS scoring (0-100)
    if (metrics.cls < 0.1) score += 25;
    else if (metrics.cls < 0.25) score += 15;
    else if (metrics.cls < 0.4) score += 5;

    // Grade assignment
    if (score >= 90) grade = 'A';
    else if (score >= 80) grade = 'B';
    else if (score >= 70) grade = 'C';
    else if (score >= 60) grade = 'D';

    setMetrics(prev => prev ? { ...prev, score: score.toString(), grade } : null);
  }, [metrics]);

  // Performance optimizations
  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    try {
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
        link.as = resource.includes('.woff2') ? 'font' : resource.includes('.jpg') ? 'image' : 'fetch';
        document.head.appendChild(link);
        newOptimizations.push(`Preloaded critical resource: ${resource}`);
      });

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
          img.decoding = 'async';
          newOptimizations.push('Added lazy loading to images');
        }
      });

      // Add resource hints
      const resourceHints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'preconnect', href: '//fonts.googleapis.com' },
        { rel: 'preconnect', href: '//api.ziontechgroup.com' }
      ];

      resourceHints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        document.head.appendChild(link);
        newOptimizations.push(`Added resource hint: ${hint.rel} ${hint.href}`);
      });

      // Optimize CSS delivery
      const criticalCSS = document.querySelector('style[data-critical]');
      if (criticalCSS) {
        newOptimizations.push('Critical CSS inlined');
      }

      setOptimizations(newOptimizations);
    } catch (error) {
      console.error('Optimization error:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, []);

  useEffect(() => {
    measurePerformance();
    
    // Re-measure performance on route changes
    const handleRouteChange = () => {
      setTimeout(measurePerformance, 1000);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [measurePerformance]);

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-400';
      case 'B': return 'text-blue-400';
      case 'C': return 'text-yellow-400';
      case 'D': return 'text-orange-400';
      case 'F': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <>
      {children}
      
      {/* Performance Metrics Panel */}
      <AnimatePresence>
        {showMetrics && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-20 right-4 w-80 bg-black/90 backdrop-blur-lg border border-cyan-400/30 rounded-lg p-4 z-50 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                Performance Monitor
              </h3>
              <button
                onClick={() => setShowMetrics(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {metrics && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Performance Score:</span>
                  <span className={`text-lg font-bold ${getGradeColor(metrics.grade)}`}>
                    {metrics.score}/100 ({metrics.grade})
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-gray-800/50 p-2 rounded">
                    <div className="text-gray-400">FCP</div>
                    <div className="text-white">{metrics.fcp?.toFixed(0)}ms</div>
                  </div>
                  <div className="bg-gray-800/50 p-2 rounded">
                    <div className="text-gray-400">LCP</div>
                    <div className="text-white">{metrics.lcp?.toFixed(0)}ms</div>
                  </div>
                  <div className="bg-gray-800/50 p-2 rounded">
                    <div className="text-gray-400">FID</div>
                    <div className="text-white">{metrics.fid?.toFixed(0)}ms</div>
                  </div>
                  <div className="bg-gray-800/50 p-2 rounded">
                    <div className="text-gray-400">CLS</div>
                    <div className="text-white">{metrics.cls?.toFixed(3)}</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-700">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Service Worker:</span>
                    <span className={`${
                      serviceWorkerStatus === 'installed' ? 'text-green-400' :
                      serviceWorkerStatus === 'installing' ? 'text-yellow-400' :
                      serviceWorkerStatus === 'error' ? 'text-red-400' :
                      'text-gray-400'
                    }`}>
                      {serviceWorkerStatus}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4 space-y-2">
              <button
                onClick={runOptimizations}
                disabled={isOptimizing}
                className="w-full px-3 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 text-white text-sm rounded transition-colors flex items-center justify-center gap-2"
              >
                {isOptimizing ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <TrendingUp className="w-4 h-4" />
                )}
                {isOptimizing ? 'Optimizing...' : 'Run Optimizations'}
              </button>

              {optimizations.length > 0 && (
                <div className="max-h-32 overflow-y-auto">
                  {optimizations.map((opt, index) => (
                    <div key={index} className="text-xs text-green-400 bg-green-400/10 p-2 rounded">
                      ✓ {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowMetrics(!showMetrics)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/25 flex items-center justify-center text-white z-40 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
        title="Performance Monitor"
      >
        <Zap className="w-6 h-6" />
      </motion.button>
    </>
  );
};

export default PerformanceOptimizer;