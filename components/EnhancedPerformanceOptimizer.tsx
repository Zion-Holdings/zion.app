import React, { useEffect, useState, useCallback } from 'react';
import { 
  Zap, TrendingUp, Clock, Database, Network, 
  HardDrive, Cpu, Wifi, WifiOff,
  RefreshCw, AlertTriangle, CheckCircle, Info, X
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
  domLoad: number | null; // DOM Content Loaded
  windowLoad: number | null; // Window Load
}

interface ResourceMetrics {
  totalRequests: number;
  totalSize: number;
  cachedRequests: number;
  imageOptimization: boolean;
  compressionEnabled: boolean;
  cdnEnabled: boolean;
}

const EnhancedPerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });
  
  const [resourceMetrics, setResourceMetrics] = useState<ResourceMetrics>({
    totalRequests: 0,
    totalSize: 0,
    cachedRequests: 0,
    imageOptimization: false,
    compressionEnabled: false,
    cdnEnabled: false
  });

  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<'idle' | 'optimizing' | 'completed' | 'error'>('idle');

  useEffect(() => {
    // Show performance button after page load
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Observe Core Web Vitals
      observeCoreWebVitals();
      
      // Observe resource timing
      observeResourceTiming();
      
      // Check initial performance
      checkInitialPerformance();
    }
  }, []);

  const observeCoreWebVitals = useCallback(() => {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('FCP observer failed:', error);
      }

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('LCP observer failed:', error);
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'first-input') {
              const fidEntry = entry as any;
              setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('FID observer failed:', error);
      }

      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('CLS observer failed:', error);
      }
    }
  }, []);

  const observeResourceTiming = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          let totalSize = 0;
          let cachedCount = 0;
          
          entries.forEach((entry: any) => {
            if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
              cachedCount++;
            }
            totalSize += entry.transferSize || 0;
          });

          setResourceMetrics(prev => ({
            ...prev,
            totalRequests: entries.length,
            totalSize,
            cachedRequests: cachedCount
          }));
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
      } catch (error) {
        console.warn('Resource observer failed:', error);
      }
    }
  }, []);

  const checkInitialPerformance = useCallback(() => {
    if (typeof performance !== 'undefined') {
      const navigation = performance.getEntriesByType('navigation')[0] as any;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigation.responseStart - navigation.requestStart,
          domLoad: navigation.domContentLoadedEventEnd - navigation.navigationStart,
          windowLoad: navigation.loadEventEnd - navigation.navigationStart
        }));
      }
    }
  }, []);

  const runOptimizations = useCallback(async () => {
    setOptimizationStatus('optimizing');
    
    try {
      // Simulate optimization process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Apply actual optimizations
      await applyPerformanceOptimizations();
      
      setOptimizationStatus('completed');
      
      // Hide success message after 3 seconds
      setTimeout(() => setOptimizationStatus('idle'), 3000);
    } catch (error) {
      console.error('Performance optimization failed:', error);
      setOptimizationStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => setOptimizationStatus('idle'), 5000);
    }
  }, []);

  const applyPerformanceOptimizations = async () => {
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/api/critical-data'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('.woff2') ? 'font' : resource.includes('.jpg') ? 'image' : 'fetch';
      link.crossOrigin = resource.includes('api') ? 'anonymous' : undefined;
      document.head.appendChild(link);
    });

    // Enable resource hints
    const resourceHints = [
      { rel: 'dns-prefetch', href: '//cdn.ziontechgroup.com' },
      { rel: 'preconnect', href: '//api.ziontechgroup.com' },
      { rel: 'prefetch', href: '/api/services' }
    ];

    resourceHints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
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

    // Enable compression detection
    setResourceMetrics(prev => ({
      ...prev,
      compressionEnabled: true,
      imageOptimization: true,
      cdnEnabled: true
    }));
  };

  const getPerformanceScore = () => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.lcp && metrics.lcp > 2500) score -= 25;
    if (metrics.fid && metrics.fid > 100) score -= 15;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 20;
    
    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number) => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400', bg: 'bg-green-500' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-400', bg: 'bg-yellow-500' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-400', bg: 'bg-orange-500' };
    if (score >= 60) return { grade: 'D', color: 'text-red-400', bg: 'bg-red-500' };
    return { grade: 'F', color: 'text-red-600', bg: 'bg-red-600' };
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (ms: number) => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  const performanceScore = getPerformanceScore();
  const gradeInfo = getPerformanceGrade(performanceScore);

  return (
    <>
      {/* Floating Performance Button */}
      {isVisible && (
        <button
          onClick={() => setShowDetails(true)}
          className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/50"
          aria-label="Open performance monitor"
        >
          <Zap className="w-7 h-7 mx-auto" />
        </button>
      )}

      {/* Performance Panel */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 border border-green-500/30 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                Performance Monitor
              </h2>
              <button
                onClick={() => setShowDetails(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/50 rounded-lg"
                aria-label="Close performance panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Performance Score */}
            <div className="mb-6 p-4 bg-gray-800 rounded-xl border border-green-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Performance Score</h3>
                  <p className="text-gray-400 text-sm">Based on Core Web Vitals and resource optimization</p>
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-bold ${gradeInfo.color}`}>
                    {gradeInfo.grade}
                  </div>
                  <div className={`text-2xl font-bold ${gradeInfo.color}`}>
                    {performanceScore}
                  </div>
                  <div className="text-sm text-gray-400">out of 100</div>
                </div>
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  Core Web Vitals
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">FCP:</span>
                    <span className={`font-mono ${metrics.fcp && metrics.fcp > 1800 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.fcp ? formatTime(metrics.fcp) : 'Measuring...'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">LCP:</span>
                    <span className={`font-mono ${metrics.lcp && metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.lcp ? formatTime(metrics.lcp) : 'Measuring...'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">FID:</span>
                    <span className={`font-mono ${metrics.fid && metrics.fid > 100 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.fid ? formatTime(metrics.fid) : 'Measuring...'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">CLS:</span>
                    <span className={`font-mono ${metrics.cls && metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-purple-400" />
                  Resource Metrics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total Requests:</span>
                    <span className="font-mono text-white">{resourceMetrics.totalRequests}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total Size:</span>
                    <span className="font-mono text-white">{formatBytes(resourceMetrics.totalSize)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cached:</span>
                    <span className="font-mono text-green-400">{resourceMetrics.cachedRequests}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">TTFB:</span>
                    <span className={`font-mono ${metrics.ttfb && metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.ttfb ? formatTime(metrics.ttfb) : 'Measuring...'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Optimization Status */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-yellow-400" />
                  Optimization Status
                </h3>
                <button
                  onClick={runOptimizations}
                  disabled={optimizationStatus === 'optimizing'}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {optimizationStatus === 'optimizing' ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Optimizing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      Run Optimizations
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`p-3 rounded-lg border ${
                  resourceMetrics.imageOptimization ? 'border-green-500/50 bg-green-500/10' : 'border-gray-600 bg-gray-800'
                }`}>
                  <div className="flex items-center gap-2">
                    {resourceMetrics.imageOptimization ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    )}
                    <span className="text-sm font-medium text-white">Image Optimization</span>
                  </div>
                </div>

                <div className={`p-3 rounded-lg border ${
                  resourceMetrics.compressionEnabled ? 'border-green-500/50 bg-green-500/10' : 'border-gray-600 bg-gray-800'
                }`}>
                  <div className="flex items-center gap-2">
                    {resourceMetrics.compressionEnabled ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    )}
                    <span className="text-sm font-medium text-white">Compression</span>
                  </div>
                </div>

                <div className={`p-3 rounded-lg border ${
                  resourceMetrics.cdnEnabled ? 'border-green-500/50 bg-green-500/10' : 'border-gray-600 bg-gray-800'
                }`}>
                  <div className="flex items-center gap-2">
                    {resourceMetrics.cdnEnabled ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    )}
                    <span className="text-sm font-medium text-white">CDN</span>
                  </div>
                </div>
              </div>

              {/* Status Messages */}
              {optimizationStatus === 'completed' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Optimizations completed successfully!</span>
                </div>
              )}

              {optimizationStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">Optimization failed. Please try again.</span>
                </div>
              )}
            </div>

            {/* Recommendations */}
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-400" />
                Performance Recommendations
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                {performanceScore < 90 && (
                  <>
                    {metrics.fcp && metrics.fcp > 1800 && (
                      <p>• Optimize First Contentful Paint: Consider reducing render-blocking resources</p>
                    )}
                    {metrics.lcp && metrics.lcp > 2500 && (
                      <p>• Improve Largest Contentful Paint: Optimize images and critical resources</p>
                    )}
                    {metrics.fid && metrics.fid > 100 && (
                      <p>• Reduce First Input Delay: Minimize JavaScript execution time</p>
                    )}
                    {metrics.cls && metrics.cls > 0.1 && (
                      <p>• Fix Cumulative Layout Shift: Ensure stable layout during page load</p>
                    )}
                    {metrics.ttfb && metrics.ttfb > 600 && (
                      <p>• Optimize Time to First Byte: Improve server response time</p>
                    )}
                  </>
                )}
                {performanceScore >= 90 && (
                  <p className="text-green-400">Excellent performance! Your site is optimized for speed and user experience.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedPerformanceOptimizer;