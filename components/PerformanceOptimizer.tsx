import React, { useEffect, useState, useCallback } from 'react';
import { Zap, Gauge, Battery, Wifi, Monitor, Settings, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface PerformanceOptimizerProps {
  isVisible: boolean;
  onToggle: (visible: boolean) => void;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ isVisible, onToggle }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  // Calculate performance score
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // Load time scoring (target: < 2 seconds)
    if (metrics.loadTime > 3000) score -= 20;
    else if (metrics.loadTime > 2000) score -= 10;
    
    // First Contentful Paint scoring (target: < 1.5 seconds)
    if (metrics.firstContentfulPaint > 2000) score -= 20;
    else if (metrics.firstContentfulPaint > 1500) score -= 10;
    
    // Largest Contentful Paint scoring (target: < 2.5 seconds)
    if (metrics.largestContentfulPaint > 4000) score -= 20;
    else if (metrics.largestContentfulPaint > 2500) score -= 10;
    
    // Cumulative Layout Shift scoring (target: < 0.1)
    if (metrics.cumulativeLayoutShift > 0.25) score -= 15;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 5;
    
    // First Input Delay scoring (target: < 100ms)
    if (metrics.firstInputDelay > 300) score -= 15;
    else if (metrics.firstInputDelay > 100) score -= 5;
    
    return Math.max(0, score);
  }, []);

  // Collect performance metrics
  const collectMetrics = useCallback(async () => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      const layoutShift = performance.getEntriesByType('layout-shift');
      
      const metrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        largestContentfulPaint: 0, // Will be updated by LCP observer
        cumulativeLayoutShift: layoutShift.reduce((sum, entry: any) => sum + entry.value, 0),
        firstInputDelay: 0, // Will be updated by FID observer
        timeToInteractive: navigation.domInteractive - navigation.fetchStart
      };

      // Observe Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.largestContentfulPaint = lastEntry.startTime;
          setMetrics({ ...metrics });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Observe First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const firstEntry = entries[0] as any;
          if (firstEntry && 'processingStart' in firstEntry) {
            metrics.firstInputDelay = firstEntry.processingStart - firstEntry.startTime;
            setMetrics({ ...metrics });
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      setMetrics(metrics);
      const score = calculatePerformanceScore(metrics);
      setPerformanceScore(score);
      
      // Generate optimization suggestions
      generateOptimizations(metrics, score);
    }
  }, [calculatePerformanceScore]);

  // Generate optimization suggestions
  const generateOptimizations = useCallback((metrics: PerformanceMetrics, score: number) => {
    const suggestions: string[] = [];
    
    if (metrics.loadTime > 2000) {
      suggestions.push('Optimize image sizes and use WebP format');
      suggestions.push('Implement lazy loading for images and components');
      suggestions.push('Minimize JavaScript bundle size');
    }
    
    if (metrics.firstContentfulPaint > 1500) {
      suggestions.push('Optimize critical rendering path');
      suggestions.push('Reduce server response time');
      suggestions.push('Eliminate render-blocking resources');
    }
    
    if (metrics.largestContentfulPaint > 2500) {
      suggestions.push('Optimize largest content element');
      suggestions.push('Improve server response time');
      suggestions.push('Use resource hints (preload, prefetch)');
    }
    
    if (metrics.cumulativeLayoutShift > 0.1) {
      suggestions.push('Set explicit dimensions for images and videos');
      suggestions.push('Avoid inserting content above existing content');
      suggestions.push('Use CSS transforms for animations');
    }
    
    if (metrics.firstInputDelay > 100) {
      suggestions.push('Reduce JavaScript execution time');
      suggestions.push('Break up long tasks');
      suggestions.push('Use web workers for heavy computations');
    }
    
    if (score < 50) {
      suggestions.push('Consider implementing a CDN');
      suggestions.push('Enable compression (gzip/brotli)');
      suggestions.push('Optimize database queries');
    }
    
    setOptimizations(suggestions);
  }, []);

  // Apply performance optimizations
  const applyOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Image optimization
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });

      // Font optimization
      const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
      fontLinks.forEach(link => {
        link.setAttribute('crossorigin', 'anonymous');
      });

      // Resource hints
      const head = document.head;
      
      // Preload critical resources
      const criticalResources = [
        '/css/critical.css',
        '/js/critical.js'
      ];
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        head.appendChild(link);
      });

      // DNS prefetch for external domains
      const externalDomains = [
        'https://fonts.googleapis.com',
        'https://www.google-analytics.com'
      ];
      
      externalDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        head.appendChild(link);
      });

              // Service worker registration for caching
        if ('serviceWorker' in navigator) {
          try {
            const registration = await navigator.serviceWorker.register('/sw.js');
            // Service Worker registered successfully
          } catch (error) {
            // Service Worker registration failed
          }
        }

      // Collect updated metrics
      setTimeout(() => {
        collectMetrics();
        setIsOptimizing(false);
      }, 1000);

    } catch (error) {
      // Error applying optimizations
      setIsOptimizing(false);
    }
  }, [collectMetrics]);

  // Initialize performance monitoring
  useEffect(() => {
    if (isVisible) {
      // Wait for page to fully load
      if (document.readyState === 'complete') {
        collectMetrics();
      } else {
        window.addEventListener('load', collectMetrics);
        return () => window.removeEventListener('load', collectMetrics);
      }
    }
  }, [isVisible, collectMetrics]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-4 bg-black/95 backdrop-blur-md border border-cyan-500/50 rounded-2xl shadow-2xl z-50 overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Gauge className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Performance Optimizer</h2>
          </div>
          <button
            onClick={() => onToggle(false)}
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            aria-label="Close performance optimizer"
          >
            <Settings className="w-6 h-6" />
          </button>
        </div>

        {/* Performance Score */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">Performance Score</h3>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span className="text-sm text-gray-400">Real-time</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full bg-gray-800 rounded-full h-4">
              <div 
                className={`h-4 rounded-full transition-all duration-500 ${
                  performanceScore >= 90 ? 'bg-green-500' :
                  performanceScore >= 70 ? 'bg-yellow-500' :
                  performanceScore >= 50 ? 'bg-orange-500' : 'bg-red-500'
                }`}
                style={{ width: `${performanceScore}%` }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-white">
                {performanceScore}/100
              </span>
            </div>
          </div>
          
          <div className="mt-2 text-center">
            <span className={`text-sm font-medium ${
              performanceScore >= 90 ? 'text-green-400' :
              performanceScore >= 70 ? 'text-yellow-400' :
              performanceScore >= 50 ? 'text-orange-400' : 'text-red-400'
            }`}>
              {performanceScore >= 90 ? 'Excellent' :
               performanceScore >= 70 ? 'Good' :
               performanceScore >= 50 ? 'Fair' : 'Poor'}
            </span>
          </div>
        </div>

        {/* Performance Metrics */}
        {metrics && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Monitor className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium text-gray-300">Load Time</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {(metrics.loadTime / 1000).toFixed(2)}s
                </div>
                <div className="text-xs text-gray-400">
                  {metrics.loadTime < 2000 ? 'Good' : 'Needs optimization'}
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-300">First Paint</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {(metrics.firstContentfulPaint / 1000).toFixed(2)}s
                </div>
                <div className="text-xs text-gray-400">
                  {metrics.firstContentfulPaint < 1500 ? 'Good' : 'Needs optimization'}
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Battery className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-gray-300">Largest Paint</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {(metrics.largestContentfulPaint / 1000).toFixed(2)}s
                </div>
                <div className="text-xs text-gray-400">
                  {metrics.largestContentfulPaint < 2500 ? 'Good' : 'Needs optimization'}
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Wifi className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-gray-300">Layout Shift</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {metrics.cumulativeLayoutShift.toFixed(3)}
                </div>
                <div className="text-xs text-gray-400">
                  {metrics.cumulativeLayoutShift < 0.1 ? 'Good' : 'Needs optimization'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Optimization Suggestions */}
        {optimizations.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Optimization Suggestions</h3>
            <div className="space-y-3">
              {optimizations.map((suggestion, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{suggestion}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={applyOptimizations}
            disabled={isOptimizing}
            className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isOptimizing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Optimizing...</span>
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                <span>Apply Optimizations</span>
              </>
            )}
          </button>

          <button
            onClick={collectMetrics}
            className="px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-black"
          >
            Refresh Metrics
          </button>
        </div>

        {/* Performance Tips */}
        <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Performance Tips</h4>
          <ul className="text-xs text-gray-300 space-y-1">
            <li>• Use WebP images for better compression</li>
            <li>• Implement lazy loading for non-critical content</li>
            <li>• Minimize JavaScript bundle size</li>
            <li>• Use CDN for static assets</li>
            <li>• Enable compression (gzip/brotli)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;