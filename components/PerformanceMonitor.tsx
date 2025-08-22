import React, { useEffect, useState, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showUI?: boolean;
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  showUI = false,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: 0,
    windowLoad: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);

  // Measure First Contentful Paint (FCP)
  const measureFCP = useCallback(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
            if (onMetricsUpdate) {
              onMetricsUpdate({ ...metrics, fcp: fcpEntry.startTime });
            }
          }
        });
        observer.observe({ entryTypes: ['paint'] });
        observerRef.current = observer;
      } catch {
        // Silently handle PerformanceObserver errors
      }
    }
  }, [onMetricsUpdate, metrics]);

  // Measure Largest Contentful Paint (LCP)
  const measureLCP = useCallback(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
            if (onMetricsUpdate) {
              onMetricsUpdate({ ...metrics, lcp: lcpEntry.startTime });
            }
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        observerRef.current = observer;
      } catch {
        // Silently handle PerformanceObserver errors
      }
    }
  }, [onMetricsUpdate, metrics]);

  // Measure First Input Delay (FID)
  const measureFID = useCallback(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            if (onMetricsUpdate) {
              onMetricsUpdate({ ...metrics, fid: entry.processingStart - entry.startTime });
            }
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
        observerRef.current = observer;
      } catch {
        // Silently handle PerformanceObserver errors
      }
    }
  }, [onMetricsUpdate, metrics]);

  // Measure Cumulative Layout Shift (CLS)
  const measureCLS = useCallback(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
            if (!entry.hadRecentInput && entry.value) {
              clsValue += entry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: clsValue }));
          if (onMetricsUpdate) {
            onMetricsUpdate({ ...metrics, cls: clsValue });
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        observerRef.current = observer;
      } catch {
        // Silently handle PerformanceObserver errors
      }
    }
  }, [onMetricsUpdate, metrics]);

  // Measure Time to First Byte (TTFB)
  const measureTTFB = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          setMetrics(prev => ({ ...prev, ttfb }));
          if (onMetricsUpdate) {
            onMetricsUpdate({ ...metrics, ttfb });
          }
        }
      } catch {
        // Silently handle performance measurement errors
      }
    }
  }, [onMetricsUpdate, metrics]);

  // Measure DOM and Window load times
  const measureLoadTimes = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const domLoad = navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart;
          const windowLoad = navigationEntry.loadEventEnd - navigationEntry.loadEventStart;
          
          setMetrics(prev => ({ ...prev, domLoad, windowLoad }));
          if (onMetricsUpdate) {
            onMetricsUpdate({ ...metrics, domLoad, windowLoad });
          }
        }
      } catch {
        // Silently handle performance measurement errors
      }
    }
  }, [onMetricsUpdate, metrics]);

  // Initialize performance monitoring
  useEffect(() => {
    // Wait for page to load before measuring
    if (document.readyState === 'complete') {
      measureFCP();
      measureLCP();
      measureFID();
      measureCLS();
      measureTTFB();
      measureLoadTimes();
    } else {
      window.addEventListener('load', () => {
        measureFCP();
        measureLCP();
        measureFID();
        measureCLS();
        measureTTFB();
        measureLoadTimes();
      });
    }

    // Cleanup observers
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [measureFCP, measureLCP, measureFID, measureCLS, measureTTFB, measureLoadTimes]);

  // Toggle UI visibility
  const toggleVisibility = () => setIsVisible(!isVisible);

  // Get performance grade
  const getPerformanceGrade = (metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    switch (metric) {
      case 'fcp':
        return value < 1800 ? 'A' : value < 3000 ? 'B' : value < 4000 ? 'C' : 'D';
      case 'lcp':
        return value < 2500 ? 'A' : value < 4000 ? 'B' : value < 6000 ? 'C' : 'D';
      case 'fid':
        return value < 100 ? 'A' : value < 300 ? 'B' : value < 500 ? 'C' : 'D';
      case 'cls':
        return value < 0.1 ? 'A' : value < 0.25 ? 'B' : value < 0.4 ? 'C' : 'D';
      case 'ttfb':
        return value < 800 ? 'A' : value < 1800 ? 'B' : value < 3000 ? 'C' : 'D';
      default:
        return 'N/A';
    }
  };

  // Get grade color
  const getGradeColor = (grade: string): string => {
    switch (grade) {
      case 'A': return 'text-green-400';
      case 'B': return 'text-yellow-400';
      case 'C': return 'text-orange-400';
      case 'D': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  if (!showUI) {
    return null;
  }

  return (
    <div className={`fixed top-32 right-4 z-50 ${className}`}>
      {/* Toggle Button */}
      <button
        onClick={toggleVisibility}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Performance metrics"
        aria-expanded={isVisible}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="absolute right-0 top-16 w-80 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-4">Performance Metrics</h3>
          
          <div className="space-y-4">
            {/* FCP */}
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">FCP:</span>
              <div className="flex items-center space-x-2">
                <span className="text-white font-mono text-sm">
                  {metrics.fcp > 0 ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
                </span>
                <span className={`text-xs font-bold ${getGradeColor(getPerformanceGrade('fcp'))}`}>
                  {getPerformanceGrade('fcp')}
                </span>
              </div>
            </div>

            {/* LCP */}
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">LCP:</span>
              <div className="flex items-center space-x-2">
                <span className="text-white font-mono text-sm">
                  {metrics.lcp > 0 ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                </span>
                <span className={`text-xs font-bold ${getGradeColor(getPerformanceGrade('lcp'))}`}>
                  {getPerformanceGrade('lcp')}
                </span>
              </div>
            </div>

            {/* FID */}
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">FID:</span>
              <div className="flex items-center space-x-2">
                <span className="text-white font-mono text-sm">
                  {metrics.fid > 0 ? `${Math.round(metrics.fid)}ms` : 'N/A'}
                </span>
                <span className={`text-xs font-bold ${getGradeColor(getPerformanceGrade('fid'))}`}>
                  {getPerformanceGrade('fid')}
                </span>
              </div>
            </div>

            {/* CLS */}
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">CLS:</span>
              <div className="flex items-center space-x-2">
                <span className="text-white font-mono text-sm">
                  {metrics.cls > 0 ? metrics.cls.toFixed(3) : 'N/A'}
                </span>
                <span className={`text-xs font-bold ${getGradeColor(getPerformanceGrade('cls'))}`}>
                  {getPerformanceGrade('cls')}
                </span>
              </div>
            </div>

            {/* TTFB */}
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">TTFB:</span>
              <div className="flex items-center space-x-2">
                <span className="text-white font-mono text-sm">
                  {metrics.ttfb > 0 ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
                </span>
                <span className={`text-xs font-bold ${getGradeColor(getPerformanceGrade('ttfb'))}`}>
                  {getPerformanceGrade('ttfb')}
                </span>
              </div>
            </div>

            {/* Load Times */}
            <div className="pt-2 border-t border-white/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 text-sm">DOM Load:</span>
                <span className="text-white font-mono text-sm">
                  {metrics.domLoad > 0 ? `${Math.round(metrics.domLoad)}ms` : 'N/A'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm">Window Load:</span>
                <span className="text-white font-mono text-sm">
                  {metrics.windowLoad > 0 ? `${Math.round(metrics.windowLoad)}ms` : 'N/A'}
                </span>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={toggleVisibility}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 rounded"
            aria-label="Close performance metrics"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;