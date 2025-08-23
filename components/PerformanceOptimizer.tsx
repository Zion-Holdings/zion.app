import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, TrendingUp, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Measure performance metrics
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
        const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        
        // Get Core Web Vitals
        let largestContentfulPaint = 0;
        let cumulativeLayoutShift = 0;
        
        if ('PerformanceObserver' in window) {
          // LCP measurement
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            largestContentfulPaint = lastEntry.startTime;
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
          
          // CLS measurement
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            for (const entry of list.getEntries()) {
              const layoutShiftEntry = entry as LayoutShiftEntry;
              if (!layoutShiftEntry.hadRecentInput) {
                clsValue += layoutShiftEntry.value;
              }
            }
            cumulativeLayoutShift = clsValue;
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        }
        
        const performanceMetrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstPaint: firstPaint?.startTime || 0,
          firstContentfulPaint: firstContentfulPaint?.startTime || 0,
          largestContentfulPaint,
          cumulativeLayoutShift
        };
        
        setMetrics(performanceMetrics);
        
        // Check if performance is optimized
        const isGoodPerformance = 
          performanceMetrics.firstContentfulPaint < 1800 &&
          performanceMetrics.largestContentfulPaint < 2500 &&
          performanceMetrics.cumulativeLayoutShift < 0.1;
        
        setIsOptimized(isGoodPerformance);
      }
    };

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical CSS and fonts
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/css/critical.css'
      ];
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        link.crossOrigin = resource.endsWith('.woff2') ? 'anonymous' : undefined;
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, []);

  // Lazy load images
  useEffect(() => {
    const lazyLoadImages = () => {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    };

    lazyLoadImages();
  }, []);

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`p-4 rounded-lg shadow-lg backdrop-blur-md border ${
          isOptimized 
            ? 'bg-green-500/20 border-green-500/30 text-green-300' 
            : 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300'
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          {isOptimized ? (
            <CheckCircle className="w-4 h-4 text-green-400" />
          ) : (
            <TrendingUp className="w-4 h-4 text-yellow-400" />
          )}
          <span className="text-sm font-medium">
            {isOptimized ? 'Performance Optimized' : 'Performance Monitor'}
          </span>
        </div>
        
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3" />
            <span>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-3 h-3" />
            <span>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PerformanceOptimizer;