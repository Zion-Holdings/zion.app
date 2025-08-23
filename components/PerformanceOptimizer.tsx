import React, { useEffect, useState, useCallback } from 'react';
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

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  children, 
  onMetricsUpdate 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

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
      {children}
      <PerformanceWarning />
      
      {/* Performance Debug Panel (only in development) */}
      {process.env.NODE_ENV === 'development' && metrics && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs"
        >
          <div className="text-sm font-bold mb-2">Performance Metrics</div>
          <div className="text-xs space-y-1">
            <div>Load Time: {Math.round(metrics.loadTime)}ms</div>
            <div>DOM Ready: {Math.round(metrics.domContentLoaded)}ms</div>
            <div>FCP: {Math.round(metrics.firstContentfulPaint)}ms</div>
            <div>LCP: {Math.round(metrics.largestContentfulPaint)}ms</div>
            <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
          </div>
          {isOptimizing && (
            <div className="text-cyan-400 text-xs mt-2">Optimizing resources...</div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default PerformanceOptimizer;