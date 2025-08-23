import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const AnalyticsTracker: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // User interaction tracking
    let interactionCount = 0;
    const trackInteraction = () => {
      interactionCount++;
      if (interactionCount === 1) {
        trackMetric('FirstInteraction', Date.now() - (performance.timing?.navigationStart || Date.now()));
      }
    };

    // Viewport tracking
    const trackViewport = () => {
      trackMetric('ViewportWidth', window.innerWidth);
      trackMetric('ViewportHeight', window.innerHeight);
      trackMetric('PixelRatio', window.devicePixelRatio || 1);
    };

    // Helper function to track metrics
    const trackMetric = (name: string, value: number | string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'custom_metric', {
          metric_name: name,
          metric_value: value,
          timestamp: Date.now()
        });
      }

      // Send to custom analytics endpoint
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/metrics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            value,
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent
          })
        }).catch(() => {
          // Silently handle fetch errors
        });
      }
    };

    // Helper function to track events
    const trackEvent = (action: string, parameters: Record<string, unknown>) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
          ...parameters,
          timestamp: Date.now(),
          page_url: window.location.href
        });
      }

      // Send to custom analytics endpoint
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action,
            parameters,
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent
          })
        }).catch(() => {
          // Silently handle fetch errors
        });
      }
    };

    // Initialize analytics and performance monitoring
    const initAnalytics = () => {
      // Google Analytics 4 initialization
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {
            dimension1: 'user_type',
            dimension2: 'service_category',
            dimension3: 'page_performance'
          }
        });
      }

      // Performance monitoring
      if ('performance' in window) {
        // Core Web Vitals monitoring
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              // Track LCP
              trackMetric('LCP', entry.startTime);
            } else if (entry.entryType === 'first-input') {
              // Track FID - cast to proper type
              const firstInputEntry = entry as PerformanceEventTiming;
              trackMetric('FID', firstInputEntry.processingStart - firstInputEntry.startTime);
            } else if (entry.entryType === 'layout-shift') {
              // Track CLS - cast to proper type
              const layoutShiftEntry = entry as LayoutShift;
              trackMetric('CLS', layoutShiftEntry.value);
            }
          }
        });

        try {
          observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        } catch {
          // Fallback for older browsers
        }

        // Track page load performance
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            if (navigation) {
              trackMetric('TTFB', navigation.responseStart - navigation.requestStart);
              trackMetric('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
              trackMetric('LoadComplete', navigation.loadEventEnd - navigation.loadEventStart);
            }

            // Track resource loading performance
            const resources = performance.getEntriesByType('resource');
            const slowResources = resources.filter((resource) => (resource as PerformanceResourceTiming).duration > 1000);
            if (slowResources.length > 0) {
              trackMetric('SlowResources', slowResources.length);
            }
          }, 0);
        });
      }

      // Add event listeners
      document.addEventListener('click', trackInteraction);
      document.addEventListener('scroll', trackInteraction);
      document.addEventListener('keydown', trackInteraction);

      // Error tracking
      window.addEventListener('error', (event) => {
        trackEvent('Error', {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          error: event.error?.stack
        });
      });

      // Unhandled promise rejection tracking
      window.addEventListener('unhandledrejection', (event) => {
        trackEvent('UnhandledRejection', {
          reason: event.reason,
          promise: event.promise
        });
      });

      // Network status monitoring
      if ('navigator' in window && 'connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          trackMetric('ConnectionType', connection.effectiveType || 'unknown');
          trackMetric('ConnectionDownlink', connection.downlink || 0);
          trackMetric('ConnectionRTT', connection.rtt || 0);
        }
      }

      // Memory usage monitoring (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory) {
          setInterval(() => {
            trackMetric('MemoryUsage', memory.usedJSHeapSize / 1024 / 1024); // MB
            trackMetric('MemoryLimit', memory.jsHeapSizeLimit / 1024 / 1024); // MB
          }, 30000); // Every 30 seconds
        }
      }

      // Battery status monitoring (if available)
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          trackMetric('BatteryLevel', battery.level * 100);
          trackMetric('BatteryCharging', battery.charging ? 1 : 0);
        });
      }

      // Device capabilities tracking
      trackMetric('DeviceMemory', (navigator as any).deviceMemory || 0);
      trackMetric('HardwareConcurrency', navigator.hardwareConcurrency || 0);
      trackMetric('MaxTouchPoints', navigator.maxTouchPoints || 0);
      trackMetric('UserAgent', navigator.userAgent.length);

      // Viewport tracking
      trackViewport();
      window.addEventListener('resize', trackViewport);

      // Page visibility tracking
      let hiddenTime = 0;
      let startTime = Date.now();
      
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          hiddenTime = Date.now();
        } else {
          const visibleTime = Date.now() - hiddenTime;
          if (hiddenTime > 0) {
            trackMetric('PageHiddenDuration', visibleTime);
          }
          startTime = Date.now();
        }
      });

      // Session duration tracking
      setInterval(() => {
        const sessionDuration = Date.now() - startTime;
        trackMetric('SessionDuration', sessionDuration);
      }, 60000); // Every minute
    };

    // Initialize when component mounts
    initAnalytics();

    // Cleanup function
    return () => {
      // Remove event listeners if needed
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('scroll', trackInteraction);
      document.removeEventListener('keydown', trackInteraction);
      window.removeEventListener('resize', trackViewport);
    };
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: router.asPath,
        page_title: document.title,
        page_location: window.location.href
      });
    }

    // Track custom page view event
    trackEvent('PageView', {
      path: router.asPath,
      title: document.title,
      referrer: document.referrer,
      timestamp: Date.now()
    });

    // Track page performance metrics
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const startTime = navigation.startTime || 0;
        trackMetric('PageLoadTime', navigation.loadEventEnd - startTime);
        trackMetric('DOMReadyTime', navigation.domContentLoadedEventEnd - startTime);
      }
    }
  }, [router.asPath]);

  // Helper function to track metrics
  const trackMetric = (name: string, value: number | string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'custom_metric', {
        metric_name: name,
        metric_value: value,
        timestamp: Date.now()
      });
    }

    // Send to custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/metrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          value,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(() => {
        // Silently handle fetch errors
      });
    }
  };

  // Helper function to track events
  const trackEvent = (action: string, parameters: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        ...parameters,
        timestamp: Date.now(),
        page_url: window.location.href
      });
    }

    // Send to custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action,
          parameters,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(() => {
        // Silently handle fetch errors
      });
    }
  };

  // Component doesn't render anything
  return null;
};

// Performance entry types
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: EventTarget;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  sources?: LayoutShiftSource[];
}

interface LayoutShiftSource {
  node?: Node;
  currentRect?: DOMRectReadOnly;
  previousRect?: DOMRectReadOnly;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default AnalyticsTracker;