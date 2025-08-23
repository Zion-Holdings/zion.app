import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
  domContentLoaded: number;
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const startMonitoring = () => {
      
      // Declare observers
      let fcpObserver: PerformanceObserver | undefined;
      let lcpObserver: PerformanceObserver | undefined;
      let fidObserver: PerformanceObserver | undefined;
      let clsObserver: PerformanceObserver | undefined;
      let navigationObserver: PerformanceObserver | undefined;
      let resourceObserver: PerformanceObserver | undefined;
      let longTaskObserver: PerformanceObserver | undefined;
      
      // Monitor Core Web Vitals
      if ('PerformanceObserver' in window) {
        // First Contentful Paint (FCP)
        fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'first-input') {
              const firstInputEntry = entry as any;
              setMetrics(prev => ({ ...prev, fid: firstInputEntry.processingStart - firstInputEntry.startTime }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'layout-shift') {
              const layoutShiftEntry = entry as any;
              if (!layoutShiftEntry.hadRecentInput) {
                clsValue += layoutShiftEntry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte (TTFB)
        navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as any;
              setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
            }
          });
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });
      }

      // Monitor page load performance
      const handleLoad = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as any;
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
          }));
        }
      };

      window.addEventListener('load', handleLoad);

      // Monitor resource loading
      resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as any;
            // Log slow resources
            if (resourceEntry.duration > 3000) {
              console.warn('Slow resource detected:', {
                name: resourceEntry.name,
                duration: resourceEntry.duration,
                size: resourceEntry.transferSize
              });
            }
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });

      // Monitor long tasks
      longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'longtask') {
            console.warn('Long task detected:', {
              duration: entry.duration,
              startTime: entry.startTime
            });
          }
        });
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });

      // Monitor memory usage
      if ('memory' in performance) {
        const memoryInfo = (performance as any).memory;
        const checkMemory = () => {
          const usedMB = Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024);
          const totalMB = Math.round(memoryInfo.totalJSHeapSize / 1024 / 1024);
          
          if (usedMB > totalMB * 0.8) {
            console.warn('High memory usage detected:', {
              used: `${usedMB}MB`,
              total: `${totalMB}MB`,
              percentage: Math.round((usedMB / totalMB) * 100) + '%'
            });
          }
        };
        
        setInterval(checkMemory, 10000); // Check every 10 seconds
      }

      // Monitor frame rate
      let frameCount = 0;
      let lastTime = performance.now();
      
      const measureFPS = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
          const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          
          if (fps < 30) {
            console.warn('Low frame rate detected:', fps + ' FPS');
          }
          
          frameCount = 0;
          lastTime = currentTime;
        }
        
        requestAnimationFrame(measureFPS);
      };
      
      requestAnimationFrame(measureFPS);

      // Monitor network conditions
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          console.log('Network conditions:', {
            effectiveType: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt
          });
        }
      }

      // Monitor battery status
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          const checkBattery = () => {
            if (battery.level < 0.2) {
              console.warn('Low battery detected:', Math.round(battery.level * 100) + '%');
            }
          };
          
          battery.addEventListener('levelchange', checkBattery);
          checkBattery();
        });
      }

      // Performance budget monitoring
      const performanceBudget = {
        fcp: 1800, // 1.8 seconds
        lcp: 2500, // 2.5 seconds
        fid: 100,  // 100 milliseconds
        cls: 0.1,  // 0.1
        ttfb: 600  // 600 milliseconds
      };

      const checkPerformanceBudget = () => {
        if (metrics) {
          Object.entries(performanceBudget).forEach(([metric, threshold]) => {
            const value = metrics[metric as keyof PerformanceMetrics];
            if (value && value > threshold) {
              console.warn(`Performance budget exceeded for ${metric.toUpperCase()}:`, {
                current: value,
                threshold: threshold,
                difference: value - threshold
              });
            }
          });
        }
      };

      // Check budget every 5 seconds
      setInterval(checkPerformanceBudget, 5000);

      // Send performance data to analytics (if configured)
      const sendToAnalytics = () => {
        if (metrics && process.env.NODE_ENV === 'production') {
          // Example: Send to Google Analytics
          if ('gtag' in window) {
            (window as any).gtag('event', 'performance_metrics', {
              event_category: 'Performance',
              event_label: 'Core Web Vitals',
              value: Math.round(metrics.lcp || 0),
              custom_map: {
                fcp: metrics.fcp,
                lcp: metrics.lcp,
                fid: metrics.fid,
                cls: metrics.cls,
                ttfb: metrics.ttfb
              }
            });
          }
        }
      };

      // Send data after 5 seconds
      setTimeout(sendToAnalytics, 5000);

      return () => {
        window.removeEventListener('load', handleLoad);
        fcpObserver?.disconnect();
        lcpObserver?.disconnect();
        fidObserver?.disconnect();
        clsObserver?.disconnect();
        navigationObserver?.disconnect();
        resourceObserver?.disconnect();
        longTaskObserver?.disconnect();
      };
    };

    const cleanup = startMonitoring();
    return cleanup;
  }, []);

  // Performance optimization suggestions
  useEffect(() => {
    if (metrics) {
      const suggestions: string[] = [];

      if (metrics.fcp > 1800) {
        suggestions.push('Optimize First Contentful Paint: Consider reducing server response time and optimizing critical resources');
      }

      if (metrics.lcp > 2500) {
        suggestions.push('Optimize Largest Contentful Paint: Optimize images, implement lazy loading, and reduce render-blocking resources');
      }

      if (metrics.fid > 100) {
        suggestions.push('Optimize First Input Delay: Reduce JavaScript execution time and break up long tasks');
      }

      if (metrics.cls > 0.1) {
        suggestions.push('Optimize Cumulative Layout Shift: Set explicit dimensions for images and avoid inserting content above existing content');
      }

      if (metrics.ttfb > 600) {
        suggestions.push('Optimize Time to First Byte: Improve server response time and implement caching strategies');
      }

      if (suggestions.length > 0) {
        console.log('Performance optimization suggestions:', suggestions);
      }
    }
  }, [metrics]);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.jpg',
        '/api/critical-data'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('.woff2') ? 'font' : 
                  resource.includes('.jpg') ? 'image' : 'fetch';
        link.crossOrigin = resource.includes('.woff2') ? 'anonymous' : undefined;
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, []);

  // Implement service worker for offline support
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  // Implement resource hints
  useEffect(() => {
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const externalDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'www.google-analytics.com'
      ];

      externalDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical domains
      const criticalDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com'
      ];

      criticalDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = `https://${domain}`;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  }, []);

  return null; // This component doesn't render anything visible
};

export default EnhancedPerformanceMonitor;