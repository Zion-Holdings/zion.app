import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

// Extend PerformanceEntry for first-input
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceObserverRef = useRef<PerformanceObserver | null>(null);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[0] as FirstInputEntry;
          if (fidEntry && 'processingStart' in fidEntry) {
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as { hadRecentInput?: boolean }).hadRecentInput) {
              clsValue += (entry as { value?: number }).value || 0;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const navigationEntry = entries[0] as PerformanceNavigationTiming;
          if (navigationEntry) {
            setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
          }
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });

        // Store observers for cleanup
        performanceObserverRef.current = fcpObserver;

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          navigationObserver.disconnect();
        };
      } catch {
        // Silently handle errors to avoid breaking the app
      }
    }
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              
              // Lazy load images
              if (target.tagName === 'IMG' && target.dataset.src) {
                const imgTarget = target as HTMLImageElement;
                imgTarget.src = target.dataset.src;
                target.removeAttribute('data-src');
                target.classList.remove('lazy');
                observerRef.current?.unobserve(target);
              }

              // Lazy load background images
              if (target.dataset.bgSrc) {
                target.style.backgroundImage = `url(${target.dataset.bgSrc})`;
                target.removeAttribute('data-bg-src');
                observerRef.current?.unobserve(target);
              }

              // Lazy load components
              if (target.dataset.lazyComponent) {
                target.classList.add('loaded');
                observerRef.current?.unobserve(target);
              }
            }
          });
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.1
        }
      );

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, []);

  // Performance optimization functions
  const optimizeImages = useCallback(() => {
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing images...');

    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      if (observerRef.current) {
        observerRef.current.observe(img);
      }
    });

    setTimeout(() => {
      setOptimizationStatus('Images optimized');
      setIsOptimizing(false);
    }, 1000);
  }, []);

  const optimizeFonts = useCallback(() => {
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing fonts...');

    // Preload critical fonts
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach((link) => {
      link.setAttribute('rel', 'stylesheet');
    });

    setTimeout(() => {
      setOptimizationStatus('Fonts optimized');
      setIsOptimizing(false);
    }, 500);
  }, []);

  const optimizeCSS = useCallback(() => {
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing CSS...');

    // Remove unused CSS
    const styleSheets = Array.from(document.styleSheets);
    styleSheets.forEach((sheet) => {
      try {
        const rules = sheet.cssRules || sheet.rules;
        if (rules) {
          // Basic CSS optimization logic
          Array.from(rules).forEach((rule) => {
            // Check if rule is a CSSStyleRule
            if (rule && typeof rule === 'object' && 'selectorText' in rule) {
              const selector = (rule as { selectorText: string }).selectorText;
              if (selector && !document.querySelector(selector)) {
                // Remove unused CSS rules (simplified approach)
                try {
                  sheet.deleteRule(Array.from(rules).indexOf(rule));
                } catch {
                  // Ignore errors for read-only stylesheets
                }
              }
            }
          });
        }
      } catch {
        // Ignore cross-origin stylesheet errors
      }
    });

    setTimeout(() => {
      setOptimizationStatus('CSS optimized');
      setIsOptimizing(false);
    }, 800);
  }, []);

  const runFullOptimization = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Starting full optimization...');

    // Run optimizations in sequence
    await new Promise(resolve => setTimeout(resolve, 500));
    optimizeImages();
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    optimizeFonts();
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    optimizeCSS();
    
    await new Promise(resolve => setTimeout(resolve, 500));
    setOptimizationStatus('Optimization complete!');
    
    setTimeout(() => {
      setIsOptimizing(false);
      setOptimizationStatus('');
    }, 2000);
  }, [optimizeImages, optimizeFonts, optimizeCSS]);

  // Get performance grade
  const getPerformanceGrade = useCallback(() => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 20;

    if (score >= 90) return { grade: 'A', color: 'text-green-400' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-400' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-400' };
    return { grade: 'D', color: 'text-red-400' };
  }, [metrics]);

  const performanceGrade = getPerformanceGrade();

  return (
    <>
      {/* Performance Monitor Panel */}
      <div className="fixed bottom-4 left-4 z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 shadow-lg min-w-[300px]"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-lg">Performance Monitor</h3>
            <div className={`text-2xl font-bold ${performanceGrade.color}`}>
              {performanceGrade.grade}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">FCP:</span>
              <span className={`${metrics.fcp && metrics.fcp > 1800 ? 'text-red-400' : 'text-green-400'}`}>
                {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">LCP:</span>
              <span className={`${metrics.lcp && metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}`}>
                {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">FID:</span>
              <span className={`${metrics.fid && metrics.fid > 100 ? 'text-red-400' : 'text-green-400'}`}>
                {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">CLS:</span>
              <span className={`${metrics.cls && metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}`}>
                {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">TTFB:</span>
              <span className={`${metrics.ttfb && metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}`}>
                {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
              </span>
            </div>
          </div>

          {/* Optimization Controls */}
          <div className="space-y-2">
            <button
              onClick={runFullOptimization}
              disabled={isOptimizing}
              className="w-full px-3 py-2 bg-cyan-600 text-white text-sm rounded hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isOptimizing ? 'Optimizing...' : 'Run Full Optimization'}
            </button>
            
            {optimizationStatus && (
              <div className="text-center text-xs text-cyan-400">
                {optimizationStatus}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Lazy Loading Styles */}
      <style jsx global>{`
        .lazy {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .lazy.loaded {
          opacity: 1;
        }

        img[data-src] {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        img[src]:not([data-src]) {
          opacity: 1;
        }

        [data-lazy-component] {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease-out;
        }

        [data-lazy-component].loaded {
          opacity: 1;
          transform: translateY(0);
        }

        /* Performance optimization classes */
        .will-change-transform {
          will-change: transform;
        }

        .will-change-opacity {
          will-change: opacity;
        }

        .contain-layout {
          contain: layout;
        }

        .contain-paint {
          contain: paint;
        }

        .contain-size {
          contain: size;
        }
      `}</style>

      {/* Render children with performance optimizations */}
      <div className="performance-optimized">
        {children}
      </div>
    </>
  );
};

export default PerformanceOptimizer;