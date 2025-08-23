import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

const PerformanceOptimizer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    // Check if IntersectionObserver is available
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      // Observe the component
      const element = document.querySelector('[data-performance-optimizer]');
      if (element) {
        observer.observe(element);
      }

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new (window as any).PerformanceObserver((list: any) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, fcp: entry.startTime } : { fcp: entry.startTime, lcp: 0, fid: 0, cls: 0, ttfb: 0 });
          }
        });
      });

      // Largest Contentful Paint
      const lcpObserver = new (window as any).PerformanceObserver((list: any) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.name === 'largest-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : { fcp: 0, lcp: entry.startTime, fid: 0, cls: 0, ttfb: 0 });
          }
        });
      });

      // First Input Delay
      const fidObserver = new (window as any).PerformanceObserver((list: any) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.name === 'first-input') {
            const firstInputEntry = entry as any;
            setMetrics(prev => prev ? { ...prev, fid: firstInputEntry.processingStart - firstInputEntry.startTime } : { fcp: 0, lcp: 0, fid: firstInputEntry.processingStart - firstInputEntry.startTime, cls: 0, ttfb: 0 });
          }
        });
      });

      // Cumulative Layout Shift
      const clsObserver = new (window as any).PerformanceObserver((list: any) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.name === 'layout-shift') {
            const layoutShiftEntry = entry as any;
            setMetrics(prev => prev ? { ...prev, cls: layoutShiftEntry.value } : { fcp: 0, lcp: 0, fid: 0, cls: layoutShiftEntry.value, ttfb: 0 });
          }
        });
      });

      try {
        fcpObserver.observe({ entryTypes: ['paint'] });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        fidObserver.observe({ entryTypes: ['first-input'] });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch {
        // Silently handle errors for unsupported browsers
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // Performance monitoring component (only shown in development)
  const PerformanceMonitor = () => {
    if (process.env.NODE_ENV !== 'development' || !metrics) return null;

    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
        <div className="mb-2 font-bold">Performance Metrics</div>
        <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
        <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
        <div>FID: {metrics.fid.toFixed(0)}ms</div>
        <div>CLS: {metrics.cls.toFixed(3)}</div>
        <div>TTFB: {metrics.ttfb.toFixed(0)}ms</div>
      </div>
    );
  };

  return (
    <>
      <div data-performance-optimizer>
        {children}
      </div>
      <PerformanceMonitor />
      
      {/* Global CSS optimizations */}
      <style jsx global>{`
        /* Performance optimizations */
        * {
          contain: layout style paint;
        }
        
        img {
          loading: lazy;
          decoding: async;
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default PerformanceOptimizer;