import React, { useEffect, useState } from 'react';

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
  enableRealTimeMonitoring?: boolean;
  enablePerformanceBudget?: boolean;
  performanceBudget?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = true,
  enablePerformanceBudget = true,
  performanceBudget = {
    fcp: 1800, // 1.8s
    lcp: 2500, // 2.5s
    fid: 100,  // 100ms
    cls: 0.1,  // 0.1
    ttfb: 800  // 800ms
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    // Performance Observer for Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime } as PerformanceMetrics));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
              } catch (e) {
          // Silently handle performance monitoring errors
        }

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime } as PerformanceMetrics));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
              } catch (e) {
          // Silently handle performance monitoring errors
        }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'first-input') {
              const fidEntry = entry as any;
              if (fidEntry.processingStart && fidEntry.startTime) {
                setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime } as PerformanceMetrics));
              }
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // Silently handle performance monitoring errors
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
          setMetrics(prev => ({ ...prev, cls: clsValue } as PerformanceMetrics));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
              } catch (e) {
          // Silently handle performance monitoring errors
        }
    }

    // Navigation Timing API
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({
        ...prev,
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
        domLoad: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
        windowLoad: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
      } as PerformanceMetrics));
    }

    // DOM Content Loaded
    const handleDOMContentLoaded = () => {
      const domLoadTime = performance.now();
      setMetrics(prev => ({ ...prev, domLoad: domLoadTime } as PerformanceMetrics));
    };

    // Window Load
    const handleWindowLoad = () => {
      const windowLoadTime = performance.now();
      setMetrics(prev => ({ ...prev, windowLoad: windowLoadTime } as PerformanceMetrics));
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    } else {
      handleDOMContentLoaded();
    }

    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      window.removeEventListener('load', handleWindowLoad);
    };
  }, [enableRealTimeMonitoring]);

  // Calculate performance score
  useEffect(() => {
    if (!metrics || !enablePerformanceBudget) return;

    let score = 100;

    // FCP weight: 25%
    const fcpWeight = 25;
    if (metrics.fcp > performanceBudget.fcp) {
      score -= (fcpWeight * (metrics.fcp - performanceBudget.fcp) / performanceBudget.fcp);
    }

    // LCP weight: 25%
    const lcpWeight = 25;
    if (metrics.lcp > performanceBudget.lcp) {
      score -= (lcpWeight * (metrics.lcp - performanceBudget.lcp) / performanceBudget.lcp);
    }

    // FID weight: 20%
    const fidWeight = 20;
    if (metrics.fid > performanceBudget.fid) {
      score -= (fidWeight * (metrics.fid - performanceBudget.fid) / performanceBudget.fid);
    }

    // CLS weight: 20%
    const clsWeight = 20;
    if (metrics.cls > performanceBudget.cls) {
      score -= (clsWeight * (metrics.cls - performanceBudget.cls) / performanceBudget.cls);
    }

    // TTFB weight: 10%
    const ttfbWeight = 10;
    if (metrics.ttfb > performanceBudget.ttfb) {
      score -= (ttfbWeight * (metrics.ttfb - performanceBudget.ttfb) / performanceBudget.ttfb);
    }

    const finalScore = Math.max(0, Math.round(score));
    setPerformanceScore(finalScore);
  }, [metrics, enablePerformanceBudget, performanceBudget]);

  // Performance optimization suggestions
  const getPerformanceSuggestions = () => {
    if (!metrics) return [];

    const suggestions = [];

    if (metrics.fcp > performanceBudget.fcp) {
      suggestions.push('Optimize First Contentful Paint: Consider reducing render-blocking resources');
    }

    if (metrics.lcp > performanceBudget.lcp) {
      suggestions.push('Optimize Largest Contentful Paint: Optimize images and critical resources');
    }

    if (metrics.fid > performanceBudget.fid) {
      suggestions.push('Reduce First Input Delay: Minimize JavaScript execution time');
    }

    if (metrics.cls > performanceBudget.cls) {
      suggestions.push('Reduce Cumulative Layout Shift: Set explicit dimensions for images and elements');
    }

    if (metrics.ttfb > performanceBudget.ttfb) {
      suggestions.push('Optimize Time to First Byte: Improve server response time');
    }

    return suggestions;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  if (!enableRealTimeMonitoring) return null;

  return (
    <>
      {/* Performance Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Toggle performance monitor"
        aria-expanded={isVisible}
      >
        <div className="w-6 h-6 flex items-center justify-center">
          {performanceScore > 0 && (
            <div className={`text-xs font-bold ${getScoreColor(performanceScore)}`}>
              {performanceScore}
            </div>
          )}
        </div>
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-50 bg-gray-900 border border-gray-700 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close performance monitor"
            >
              ×
            </button>
          </div>

          {/* Performance Score */}
          {performanceScore > 0 && (
            <div className="mb-4 p-3 bg-gray-800 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-xs">Performance Score</span>
                <span className={`text-lg font-bold ${getScoreColor(performanceScore)}`}>
                  {performanceScore}/100
                </span>
              </div>
              <div className="text-xs text-gray-400">{getScoreLabel(performanceScore)}</div>
            </div>
          )}

          {/* Metrics */}
          {metrics && (
            <div className="space-y-3">
              <h4 className="text-white font-medium text-xs mb-2">Core Web Vitals</h4>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">FCP</div>
                  <div className={`font-mono ${metrics.fcp > performanceBudget.fcp ? 'text-red-400' : 'text-green-400'}`}>
                    {Math.round(metrics.fcp)}ms
                  </div>
                </div>
                
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">LCP</div>
                  <div className={`font-mono ${metrics.lcp > performanceBudget.lcp ? 'text-red-400' : 'text-green-400'}`}>
                    {Math.round(metrics.lcp)}ms
                  </div>
                </div>
                
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">FID</div>
                  <div className={`font-mono ${metrics.fid > performanceBudget.fid ? 'text-red-400' : 'text-green-400'}`}>
                    {Math.round(metrics.fid)}ms
                  </div>
                </div>
                
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">CLS</div>
                  <div className={`font-mono ${metrics.cls > performanceBudget.cls ? 'text-red-400' : 'text-green-400'}`}>
                    {metrics.cls.toFixed(3)}
                  </div>
                </div>
                
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">TTFB</div>
                  <div className={`font-mono ${metrics.ttfb > performanceBudget.ttfb ? 'text-red-400' : 'text-green-400'}`}>
                    {Math.round(metrics.ttfb)}ms
                  </div>
                </div>
                
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">DOM Load</div>
                  <div className="font-mono text-green-400">
                    {Math.round(metrics.domLoad)}ms
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Performance Suggestions */}
          {getPerformanceSuggestions().length > 0 && (
            <div className="mt-4">
              <h4 className="text-white font-medium text-xs mb-2">Optimization Suggestions</h4>
              <div className="space-y-2">
                {getPerformanceSuggestions().map((suggestion, index) => (
                  <div key={index} className="text-xs text-yellow-400 bg-yellow-400/10 p-2 rounded">
                    {suggestion}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance Budget Info */}
          <div className="mt-4 pt-3 border-t border-gray-700">
            <div className="text-xs text-gray-400">
              <div>Performance budgets are based on Core Web Vitals thresholds</div>
              <div className="mt-1">
                FCP: &lt;1.8s | LCP: &lt;2.5s | FID: &lt;100ms | CLS: &lt;0.1
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;