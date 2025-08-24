import React, { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

// Global type declarations
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

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
  }, []);

  // Track custom events
  const trackCustomEvent = useCallback((eventName: string, parameters?: Record<string, unknown>) => {
    trackEvent(eventName, parameters || {});
  }, [trackEvent]);

  // Track interaction events
  const trackInteraction = useCallback((event: Event) => {
    const target = event.target as HTMLElement;
    if (target) {
      const tagName = target.tagName.toLowerCase();
      const text = target.textContent?.trim() || '';
      const href = (target as HTMLAnchorElement).href;
      
      trackEvent('Interaction', {
        element: tagName,
        text: text.substring(0, 50),
        href: href || undefined,
        timestamp: Date.now()
      });
    }
  }, [trackEvent]);

  // Track viewport changes
  const trackViewport = useCallback(() => {
    trackEvent('ViewportChange', {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    });
  }, [trackEvent]);

  // Track performance metrics
  const trackMetric = useCallback((name: string, value: number) => {
    trackEvent('Performance', {
      metric: name,
      value: Math.round(value * 100) / 100,
      timestamp: Date.now()
    });
  }, [trackEvent]);

  // Initialize analytics
  useEffect(() => {
    if (pageTitle && pagePath) {
      trackPageView(pageTitle, pagePath);
    }

    // Track custom events
    customEvents.forEach(event => {
      trackCustomEvent(event.action, event.parameters);
    });

    // Add event listeners
    document.addEventListener('click', trackInteraction);
    document.addEventListener('scroll', trackInteraction);
    document.addEventListener('keydown', trackInteraction);

    // Track viewport
    trackViewport();
    window.addEventListener('resize', trackViewport);

    // Cleanup function
    return () => {
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('scroll', trackInteraction);
      document.removeEventListener('keydown', trackInteraction);
      window.removeEventListener('resize', trackViewport);
    };
  }, [pageTitle, pagePath, customEvents, trackPageView, trackCustomEvent, trackInteraction, trackViewport]);

  // Track route changes
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      trackEvent('RouteChange', {
        from: router.asPath,
        to: url,
        timestamp: Date.now()
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router, trackEvent]);

  // This component doesn't render anything
  return null;
};

export default AnalyticsTracker;