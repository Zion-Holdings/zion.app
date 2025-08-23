import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsTrackerProps {
  trackingId?: string;
  enableDebug?: boolean;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ 
  trackingId = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
  enableDebug = false 
}) => {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && trackingId !== 'G-XXXXXXXXXX') {
      // Google Analytics 4
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      // Track page views on route changes
      const handleRouteChange = (url: string) => {
        gtag('config', trackingId, {
          page_title: document.title,
          page_location: url,
        });
        
        if (enableDebug) {
          console.log('Analytics: Page view tracked:', url);
        }
      };

      router.events.on('routeChangeComplete', handleRouteChange);
      
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [trackingId, router, enableDebug]);

            // Track resource loading performance
            const resources = performance.getEntriesByType('resource');
            const slowResources = resources.filter((resource) => (resource as any).duration > 1000);
            if (slowResources.length > 0) {
              trackMetric('SlowResources', slowResources.length);
            }
          }
        }
      };

      const handleVisibilityChange = () => {
        if (document.hidden) {
          isActive = false;
        } else {
          isActive = true;
          startTime = Date.now();
        }
      };

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
        const navigation = performance.getEntriesByType('navigation')[0] as any;
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

      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('beforeunload', handleBeforeUnload);
      
      const interval = setInterval(trackEngagement, 10000); // Check every 10 seconds

      return () => {
        clearInterval(interval);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [enableDebug]);

  // Return null as this is a utility component
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

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default AnalyticsTracker;