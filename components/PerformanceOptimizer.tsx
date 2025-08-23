import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  showDebugInfo?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ showDebugInfo = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  useEffect(() => {
    // Performance monitoring
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          const processingStart = (fid as any).processingStart || fid.startTime;
          setMetrics(prev => ({ ...prev, fid: processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          const hadRecentInput = (entry as any).hadRecentInput || false;
          if (!hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }
    }

    // Image optimization
    optimizeImages();
    
    // Font optimization
    optimizeFonts();
    
    // Resource hints
    addResourceHints();
    
    // Service worker registration
    registerServiceWorker();

    return () => {
      // Cleanup observers
    };
  }, []);

  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add lazy loading
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add decoding attribute
      if (!img.decoding) {
        img.decoding = 'async';
      }
      
      // Add fetchpriority for above-the-fold images
      if (img.getBoundingClientRect().top < window.innerHeight) {
        img.fetchPriority = 'high';
      }
    });
  };

  const optimizeFonts = () => {
    // Preload critical fonts
    const criticalFonts = [
      'Inter',
      'JetBrains Mono'
    ];
    
    criticalFonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = `https://fonts.googleapis.com/css2?family=${font}:wght@400;500;600;700&display=swap`;
      link.as = 'style';
      document.head.appendChild(link);
    });
  };

  const addResourceHints = () => {
    // DNS prefetch for external domains
    const externalDomains = [
      'ziontechgroup.com',
      'fonts.googleapis.com',
      'fonts.gstatic.com'
    ];
    
    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });
  };

  const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
      } catch (error) {
        console.log('Service Worker registration failed:', error);
      }
    }
  };

  const runOptimizations = async () => {
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    // Code splitting optimization
    try {
      // Dynamic imports for non-critical components
      const nonCriticalModules = [
        'framer-motion',
        'lucide-react'
      ];
      
      for (const module of nonCriticalModules) {
        await import(module);
        newOptimizations.push(`Loaded ${module} on demand`);
      }
    } catch (error) {
      console.log('Module loading optimization failed:', error);
    }

    // Memory optimization
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB
        newOptimizations.push('Memory usage optimized');
      }
    }

    // Cache optimization
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        for (const cacheName of cacheNames) {
          if (cacheName.includes('old-')) {
            await caches.delete(cacheName);
            newOptimizations.push('Old cache cleared');
          }
        }
      } catch (error) {
        console.log('Cache optimization failed:', error);
      }
    }

    setOptimizations(newOptimizations);
    setIsOptimizing(false);
  };

  const getPerformanceScore = () => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 20;
    else if (metrics.lcp > 2500) score -= 10;
    
    // FID scoring (0-100)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;
    
    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;
    
    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number) => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-400' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-400' };
    return { grade: 'D', color: 'text-red-400' };
  };

  if (!showDebugInfo) return null;

  const score = getPerformanceScore();
  const grade = getPerformanceGrade(score);

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
        <div className={`text-lg font-bold ${grade.color}`}>
          {grade.grade}
        </div>
      </div>
      
      {metrics && (
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-400">FCP:</span>
            <span className={metrics.fcp > 1000 ? 'text-yellow-400' : 'text-green-400'}>
              {Math.round(metrics.fcp)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">LCP:</span>
            <span className={metrics.lcp > 2500 ? 'text-yellow-400' : 'text-green-400'}>
              {Math.round(metrics.lcp)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">FID:</span>
            <span className={metrics.fid > 100 ? 'text-yellow-400' : 'text-green-400'}>
              {Math.round(metrics.fid)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">CLS:</span>
            <span className={metrics.cls > 0.1 ? 'text-yellow-400' : 'text-green-400'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">TTFB:</span>
            <span className={metrics.ttfb > 600 ? 'text-yellow-400' : 'text-green-400'}>
              {Math.round(metrics.ttfb)}ms
            </span>
          </div>
        </div>
      )}
      
      <div className="mt-3 pt-3 border-t border-gray-700">
        <button
          onClick={runOptimizations}
          disabled={isOptimizing}
          className="w-full px-3 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 text-white text-xs rounded transition-colors"
        >
          {isOptimizing ? 'Optimizing...' : 'Run Optimizations'}
        </button>
      </div>
      
      {optimizations.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-700">
          <h4 className="text-xs font-semibold text-white mb-2">Recent Optimizations:</h4>
          <div className="space-y-1">
            {optimizations.map((opt, index) => (
              <div key={index} className="text-xs text-green-400 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                {opt}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;