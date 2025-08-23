import React, { useEffect } from 'react';

interface AnalyticsTrackerProps {
  trackingId?: string;
  enableTracking?: boolean;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ 
  trackingId = 'zion-tech-group',
  enableTracking = true 
}) => {
  useEffect(() => {
    if (!enableTracking) return;

    // Basic page view tracking
    const trackPageView = () => {
      // Send page view to analytics service
      console.log(`[Analytics] Page view: ${window.location.pathname}`);
      
      // You can integrate with Google Analytics, Mixpanel, or other services here
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', trackingId, {
          page_path: window.location.pathname,
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

export default AnalyticsTracker;