import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Clock, 
  Gauge
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  tti: number;
  tbt: number;
}

interface ResourceMetrics {
  name: string;
  size: number;
  loadTime: number;
  type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [resourceMetrics, setResourceMetrics] = useState<ResourceMetrics[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);

  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            setMetrics(prev => prev ? { ...prev, lcp } : { 
              fcp: 0, lcp, fid: 0, cls: 0, ttfb: 0, tti: 0, tbt: 0 
            });
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        setMetrics(prev => prev ? { ...prev, fcp: fcpEntry.startTime } : { 
          fcp: fcpEntry.startTime, lcp: 0, fid: 0, cls: 0, ttfb: 0, tti: 0, tbt: 0 
        });
      }

      // Measure Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => prev ? { ...prev, ttfb } : { 
          fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb, tti: 0, tbt: 0 
        });
      }

      // Measure Time to Interactive
      const tti = navigationEntry ? navigationEntry.domInteractive - navigationEntry.fetchStart : 0;
      setMetrics(prev => prev ? { ...prev, tti } : { 
        fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb: 0, tti, tbt: 0 
      });

      return () => observer.disconnect();
    }
  }, []);

  const measureResources = useCallback(() => {
    const resources = performance.getEntriesByType('resource');
    const resourceData: ResourceMetrics[] = resources.map((resource) => ({
      name: resource.name.split('/').pop() || resource.name,
      size: resource.transferSize || 0,
      loadTime: resource.responseEnd - resource.fetchStart,
      type: resource.initiatorType as ResourceMetrics['type']
    }));

    setResourceMetrics(resourceData.slice(0, 10)); // Top 10 resources
  }, []);

  useEffect(() => {
    measurePerformance();
    measureResources();

    // Continuous monitoring
    const interval = setInterval(() => {
      measurePerformance();
      measureResources();
    }, 5000);

    return () => clearInterval(interval);
  }, [measurePerformance, measureResources]);

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    
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
    });

    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });

    // Prefetch critical routes
    const criticalRoutes = ['/services', '/about', '/contact'];
    criticalRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });

    // Optimize CSS delivery
    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    styleSheets.forEach(sheet => {
      if (sheet instanceof HTMLLinkElement) {
        sheet.media = 'print';
        sheet.onload = () => {
          sheet.media = 'all';
        };
      }
    });

    setIsOptimizing(false);
  };

  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 2500) score -= 25;
    else if (metrics.lcp > 1700) score -= 15;
    
    // TTFB scoring (0-100)
    if (metrics.ttfb > 600) score -= 15;
    else if (metrics.ttfb > 200) score -= 5;

    // TTI scoring (0-100)
    if (metrics.tti > 3800) score -= 20;
    else if (metrics.tti > 2000) score -= 10;
    
    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const getPerformanceColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 80) return 'text-yellow-500';
    if (score >= 70) return 'text-orange-500';
    return 'text-red-500';
  };

  if (!metrics) {
    return <>{children}</>;
  }

  const score = getPerformanceScore(metrics);
  const grade = getPerformanceGrade(score);
  const color = getPerformanceColor(score);

  return (
    <>
      {children}
      
      {/* Performance Metrics Panel */}
      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {showMetrics && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="bg-black/90 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 w-80 max-h-96 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
                  <Gauge className="w-5 h-5" />
                  Performance Metrics
                </h3>
                <button
                  onClick={() => setShowMetrics(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Performance Score */}
              <div className="mb-4 p-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Performance Score</span>
                  <span className={`text-2xl font-bold ${color}`}>{grade}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      score >= 90 ? 'bg-green-500' : 
                      score >= 80 ? 'bg-yellow-500' : 
                      score >= 70 ? 'bg-orange-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${score}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400">{score}/100</span>
              </div>

              {/* Key Metrics */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">First Contentful Paint</span>
                  <span className={`text-sm ${metrics.fcp > 1000 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {Math.round(metrics.fcp)}ms
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Largest Contentful Paint</span>
                  <span className={`text-sm ${metrics.lcp > 1700 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {Math.round(metrics.lcp)}ms
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Time to First Byte</span>
                  <span className={`text-sm ${metrics.ttfb > 200 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {Math.round(metrics.ttfb)}ms
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Time to Interactive</span>
                  <span className={`text-sm ${metrics.tti > 2000 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {Math.round(metrics.tti)}ms
                  </span>
                </div>
              </div>

              {/* Resource Metrics */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Top Resources</h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {resourceMetrics.map((resource, index) => (
                    <div key={index} className="flex justify-between items-center text-xs">
                      <span className="text-gray-400 truncate max-w-32">{resource.name}</span>
                      <span className="text-cyan-400">{Math.round(resource.loadTime)}ms</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimization Button */}
              <button
                onClick={optimizePerformance}
                disabled={isOptimizing}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isOptimizing ? (
                  <>
                    <Clock className="w-4 h-4 animate-spin" />
                    Optimizing...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    Optimize Performance
                  </>
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <button
          onClick={() => setShowMetrics(!showMetrics)}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          <Gauge className="w-5 h-5" />
          {showMetrics ? 'Hide' : 'Show'} Metrics
        </button>
      </div>
    </>
  );
};

export default EnhancedPerformanceOptimizer;