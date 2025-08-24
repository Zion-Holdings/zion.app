import React, { useEffect, useCallback } from 'react';

// Browser API types are declared globally in PerformanceOptimizer.tsx

// Performance entry types for Core Web Vitals
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: any | null;
}

interface AnalyticsTrackerProps {
  pageTitle?: string;
  pagePath?: string;
  customEvents?: Array<{
    name: string;
    parameters?: Record<string, unknown>;
  }>;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  pageTitle,
  pagePath,
  customEvents = []
}) => {
  // Track page view
  const trackPageView = useCallback((title: string, path: string) => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
          page_title: title,
          page_location: window.location.href,
          page_path: path
        });
      }

      // Google Tag Manager
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'page_view',
          page_title: title,
          page_location: window.location.href,
          page_path: path,
          timestamp: Date.now()
        });
      }

      // Custom analytics
      if (process.env.NODE_ENV === 'development') {
        console.log('Page View:', { title, path, url: window.location.href });
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

    // Helper function to track metrics
    const trackMetric = (name: string, value: number) => {
      trackEvent('Metric', { metric_name: name, metric_value: value });
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
            const slowResources = resources.filter((resource) => (resource as any).duration > 1000);
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

  // Track custom events
  const trackCustomEvent = useCallback((eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', eventName, {
          ...parameters,
          timestamp: Date.now(),
          page_location: window.location.href
        });
      }

      // Google Tag Manager
      if (window.dataLayer) {
        window.dataLayer.push({
          event: eventName,
          ...parameters,
          timestamp: Date.now(),
          page_location: window.location.href
        });
      }

      // Custom analytics
      if (process.env.NODE_ENV === 'development') {
        console.log('Custom Event:', { eventName, parameters });
      }
    }
  }, []);

  // Track user engagement
  const trackUserEngagement = useCallback(() => {
    let startTime = Date.now();
    let isEngaged = false;

    const trackEngagement = () => {
      const currentTime = Date.now();
      const timeOnPage = currentTime - startTime;

      // Track engagement after 10 seconds
      if (timeOnPage > 10000 && !isEngaged) {
        isEngaged = true;
        trackCustomEvent('user_engagement', {
          engagement_time_msec: timeOnPage,
          engagement_type: 'time_on_page'
        });
      }

      // Track scroll depth
      const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > 0 && scrollDepth % 25 === 0) {
        trackCustomEvent('scroll_depth', {
          scroll_percentage: scrollDepth,
          page_location: window.location.href
        });
      }
    };

    // Track user interactions
    const trackUserInteraction = (event: string, data?: any) => {
      console.log(`[Analytics] User interaction: ${event}`, data);
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', event, data);
      }
    };

    // Initialize tracking
    trackPageView();

    // Track route changes
    const handleRouteChange = () => {
      trackPageView();
    };

    // Add event listeners for user interactions
    const addTrackingListeners = () => {
      // Track button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          const buttonText = target.textContent || target.innerText || 'Unknown Button';
          trackUserInteraction('button_click', { button_text: buttonText });
        }
      });

      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        const formId = form.id || form.className || 'Unknown Form';
        trackUserInteraction('form_submit', { form_id: formId });
      });

      // Track link clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a');
        if (link) {
          const linkText = link.textContent || link.innerText || 'Unknown Link';
          const linkHref = link.href;
          trackUserInteraction('link_click', { 
            link_text: linkText, 
            link_href: linkHref 
          });
        }
      });
    };

    // Add tracking listeners after a short delay to ensure DOM is ready
    setTimeout(addTrackingListeners, 1000);

    // Cleanup
    return () => {
      // Remove event listeners if needed
    };
  }, [trackingId, enableTracking]);

  // This component doesn't render anything visible
  return null;
};

// Performance entry types
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: any;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  sources?: LayoutShiftSource[];
}

interface LayoutShiftSource {
  node?: any;
  currentRect?: any;
  previousRect?: any;
}

// gtag is declared globally in PerformanceOptimizer.tsx

export default AnalyticsTracker;