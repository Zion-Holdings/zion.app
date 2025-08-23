import React, { useEffect, useCallback } from 'react';

interface AnalyticsTrackerProps {
  pageTitle?: string;
  pagePath?: string;
  customEvents?: Array<{
    name: string;
    parameters?: Record<string, any>;
  }>;
}

// Performance entry types for Core Web Vitals
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: any | null;
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
      if ((window as any).gtag) {
        (window as any).gtag('config', 'G-XXXXXXXXXX', {
          page_title: title,
          page_location: window.location.href,
          page_path: path
        });
      }

      // Google Tag Manager
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
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

  // Track custom events
  const trackCustomEvent = useCallback((eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, {
          ...parameters,
          timestamp: Date.now(),
          page_location: window.location.href
        });
      }

      // Google Tag Manager
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
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

    // Track engagement every second
    const engagementInterval = setInterval(trackEngagement, 1000);

    // Track when user leaves the page
    const handleBeforeUnload = () => {
      const timeOnPage = Date.now() - startTime;
      trackCustomEvent('page_exit', {
        time_on_page_msec: timeOnPage,
        page_location: window.location.href
      });
    };

    // Track visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        trackCustomEvent('page_hidden', {
          page_location: window.location.href
        });
      } else {
        trackCustomEvent('page_visible', {
          page_location: window.location.href
        });
      }
    };

    // Track focus changes
    const handleFocus = () => {
      trackCustomEvent('page_focus', {
        page_location: window.location.href
      });
    };

    const handleBlur = () => {
      trackCustomEvent('page_blur', {
        page_location: window.location.href
      });
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      clearInterval(engagementInterval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, [trackCustomEvent]);

  // Track performance metrics
  const trackPerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Wait for performance metrics to be available
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            dns_lookup_time: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp_connection_time: navigation.connectEnd - navigation.connectStart,
            server_response_time: navigation.responseEnd - navigation.requestStart,
            dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            page_load_time: navigation.loadEventEnd - navigation.loadEventStart,
            total_time: navigation.loadEventEnd - navigation.fetchStart
          };

          trackCustomEvent('performance_metrics', metrics);

          // Track Core Web Vitals
          if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                  trackCustomEvent('core_web_vital', {
                    metric_name: 'LCP',
                    value: Math.round(entry.startTime),
                    rating: entry.startTime < 2500 ? 'good' : entry.startTime < 4000 ? 'needs_improvement' : 'poor'
                  });
                }
                if (entry.entryType === 'first-input') {
                  const firstInputEntry = entry as PerformanceEventTiming;
                  trackCustomEvent('core_web_vital', {
                    metric_name: 'FID',
                    value: Math.round(firstInputEntry.processingStart - firstInputEntry.startTime),
                    rating: firstInputEntry.processingStart - firstInputEntry.startTime < 100 ? 'good' : firstInputEntry.processingStart - firstInputEntry.startTime < 300 ? 'needs_improvement' : 'poor'
                  });
                }
              }
            });

            try {
              observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
            } catch {
              console.log('Performance monitoring not supported');
            }
          }
        }
      }, 1000);
    }
  }, [trackCustomEvent]);

  // Initialize analytics
  useEffect(() => {
    const title = pageTitle || document.title || 'Zion Tech Group';
    const path = pagePath || window.location.pathname;

    // Track initial page view
    trackPageView(title, path);

    // Track custom events
    customEvents.forEach(event => {
      trackCustomEvent(event.name, event.parameters);
    });

    // Start tracking user engagement
    const cleanupEngagement = trackUserEngagement();

    // Track performance metrics
    trackPerformance();

    return cleanupEngagement;
  }, [pageTitle, pagePath, customEvents, trackPageView, trackCustomEvent, trackUserEngagement, trackPerformance]);

  // Track clicks on important elements
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const button = target.closest('button');
      const link = target.closest('a');

      if (button || link) {
        const element = button || link;
        const text = element.textContent?.trim() || '';
        const href = (element as HTMLAnchorElement).href || '';
        const className = element.className || '';

        // Track CTA clicks
        if (text.toLowerCase().includes('get started') || 
            text.toLowerCase().includes('contact') || 
            text.toLowerCase().includes('learn more')) {
          trackCustomEvent('cta_click', {
            button_text: text,
            button_location: href || 'button',
            button_class: className
          });
        }

        // Track navigation clicks
        if (link && href.startsWith('/')) {
          trackCustomEvent('navigation_click', {
            link_text: text,
            link_destination: href,
            link_class: className
          });
        }
      }
    };

    document.addEventListener('click', trackClick);
    return () => document.removeEventListener('click', trackClick);
  }, [trackCustomEvent]);

  // Track form interactions
  useEffect(() => {
    const trackFormInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      const form = target.closest('form');

      if (form) {
        const formAction = (form as HTMLFormElement).action || 'unknown';
        const formMethod = (form as HTMLFormElement).method || 'unknown';

        if (event.type === 'submit') {
          trackCustomEvent('form_submit', {
            form_action: formAction,
            form_method: formMethod,
            form_id: form.id || 'unknown'
          });
        }

        if (event.type === 'focus') {
          trackCustomEvent('form_field_focus', {
            field_name: (target as HTMLInputElement).name || 'unknown',
            field_type: (target as HTMLInputElement).type || 'unknown',
            form_action: formAction
          });
        }
      }
    };

    document.addEventListener('submit', trackFormInteraction);
    document.addEventListener('focus', trackFormInteraction, true);

    return () => {
      document.removeEventListener('submit', trackFormInteraction);
      document.removeEventListener('focus', trackFormInteraction, true);
    };
  }, [trackCustomEvent]);

  return null; // This component doesn't render anything
};

export default AnalyticsTracker;