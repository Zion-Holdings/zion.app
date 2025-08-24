import React, { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

// Browser API types are declared globally in PerformanceOptimizer.tsx

interface AnalyticsTrackerProps {
  pageTitle?: string;
  pagePath?: string;
  customEvents?: Array<{ action: string; parameters: Record<string, unknown> }>;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  pageTitle,
  pagePath,
  customEvents = []
}) => {
  const router = useRouter();

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
    }
  }, []);

  // Helper function to track events
  const trackEvent = useCallback((action: string, parameters: Record<string, unknown>) => {
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
  }, []);

  // Initialize analytics and performance monitoring
  const initAnalytics = useCallback(() => {
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
            trackEvent('largest_contentful_paint', {
              value: entry.startTime,
              metric: 'lcp'
            });
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }, [trackEvent]);

  // Track page views on route changes
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const title = pageTitle || document.title;
      const path = pagePath || url;
      trackPageView(title, path);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router, pageTitle, pagePath, trackPageView]);

  // Initialize analytics on mount
  useEffect(() => {
    initAnalytics();
  }, [initAnalytics]);

  // Track custom events
  useEffect(() => {
    customEvents.forEach(({ action, parameters }) => {
      trackEvent(action, parameters);
    });
  }, [customEvents, trackEvent]);

  // This component doesn't render anything
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