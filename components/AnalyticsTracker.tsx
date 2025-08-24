import React, { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

interface AnalyticsTrackerProps {
  trackingId?: string;
  enableTracking?: boolean;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  trackingId = 'G-XXXXXXXXXX',
  enableTracking = true
}) => {
  const router = useRouter();

  // Track page view
  const trackPageView = useCallback(() => {
    if (typeof window !== 'undefined' && enableTracking) {
      // Google Analytics 4
      if ((window as any).gtag) {
        (window as any).gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }

      // Google Tag Manager
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'page_view',
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
          timestamp: Date.now()
        });
      }

      // Custom analytics
      if (process.env.NODE_ENV === 'development') {
        console.log('Page View:', { 
          title: document.title, 
          path: window.location.pathname, 
          url: window.location.href 
        });
      }
    }
  }, [trackingId, enableTracking]);

  // Track custom events
  const trackCustomEvent = useCallback((eventName: string, parameters: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && enableTracking) {
      // Google Analytics 4
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, {
          ...parameters,
          timestamp: Date.now(),
          page_url: window.location.href
        });
      }

      // Google Tag Manager
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: eventName,
          ...parameters,
          timestamp: Date.now(),
          page_url: window.location.href
        });
      }

      // Custom analytics
      if (process.env.NODE_ENV === 'development') {
        console.log('Custom Event:', eventName, parameters);
      }
    }
  }, [enableTracking]);

  // Track user interactions
  const trackUserInteraction = useCallback((event: string, data?: any) => {
    if (typeof window !== 'undefined' && enableTracking) {
      console.log(`[Analytics] User interaction: ${event}`, data);
      
      if ((window as any).gtag) {
        (window as any).gtag('event', event, data);
      }
    }
  }, [enableTracking]);

  // Initialize tracking
  useEffect(() => {
    if (!enableTracking) return;

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

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [trackingId, enableTracking, trackPageView, trackUserInteraction]);

  // This component doesn't render anything
  return null;
};

export default AnalyticsTracker;