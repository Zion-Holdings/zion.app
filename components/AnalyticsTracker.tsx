import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

interface AnalyticsTrackerProps {
  gaTrackingId?: string;
  enablePerformanceMonitoring?: boolean;
  enableUserBehaviorTracking?: boolean;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  gaTrackingId = process.env.NEXT_PUBLIC_GA_ID,
  enablePerformanceMonitoring = true,
  enableUserBehaviorTracking = true
}) => {
  const router = useRouter();

  useEffect(() => {
    // Google Analytics 4 Setup
    if (gaTrackingId && typeof window !== 'undefined') {
      // Load Google Analytics
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', gaTrackingId, {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'technology_category',
          'custom_parameter_2': 'service_type',
          'custom_parameter_3': 'user_engagement_level'
        }
      });

      // Track page views
      const handleRouteChange = (url: string) => {
        gtag('config', gaTrackingId, {
          page_path: url,
          page_title: document.title
        });
      };

      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [gaTrackingId, router]);

  useEffect(() => {
    if (enablePerformanceMonitoring && typeof window !== 'undefined') {
      // Performance Monitoring
      const trackPerformance = () => {
        if ('performance' in window) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paint = performance.getEntriesByType('paint');
          
          if (navigation) {
            const metrics = {
              dns_lookup: navigation.domainLookupEnd - navigation.domainLookupStart,
              tcp_connection: navigation.connectEnd - navigation.connectStart,
              server_response: navigation.responseEnd - navigation.requestStart,
              dom_loading: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              dom_complete: navigation.domComplete - navigation.domContentLoadedEventEnd,
              load_complete: navigation.loadEventEnd - navigation.loadEventStart,
              total_time: navigation.loadEventEnd - navigation.navigationStart
            };

            // Send performance metrics to analytics
            if (window.gtag) {
              window.gtag('event', 'performance_metrics', {
                event_category: 'Performance',
                event_label: 'Page Load',
                value: Math.round(metrics.total_time),
                custom_parameters: metrics
              });
            }

            // Log performance issues
            if (metrics.total_time > 3000) {
              console.warn('Slow page load detected:', metrics.total_time + 'ms');
            }
          }

          // Track Core Web Vitals
          if ('PerformanceObserver' in window) {
            try {
              const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (entry.entryType === 'largest-contentful-paint') {
                    const lcp = entry.startTime;
                    if (window.gtag) {
                      window.gtag('event', 'core_web_vitals', {
                        event_category: 'Performance',
                        event_label: 'LCP',
                        value: Math.round(lcp)
                      });
                    }
                  }
                }
              });
              observer.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
              console.warn('PerformanceObserver not supported');
            }
          }
        }
      };

      // Track after page load
      if (document.readyState === 'complete') {
        trackPerformance();
      } else {
        window.addEventListener('load', trackPerformance);
        return () => window.removeEventListener('load', trackPerformance);
      }
    }
  }, [enablePerformanceMonitoring]);

  useEffect(() => {
    if (enableUserBehaviorTracking && typeof window !== 'undefined') {
      // User Behavior Tracking
      let scrollDepth = 0;
      let timeOnPage = 0;
      let startTime = Date.now();

      const trackScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > scrollDepth) {
          scrollDepth = scrollPercent;
          
          // Track scroll milestones
          if ([25, 50, 75, 100].includes(scrollPercent)) {
            if (window.gtag) {
              window.gtag('event', 'scroll_depth', {
                event_category: 'Engagement',
                event_label: `${scrollPercent}%`,
                value: scrollPercent
              });
            }
          }
        }
      };

      const trackTimeOnPage = () => {
        timeOnPage = Math.round((Date.now() - startTime) / 1000);
        
        // Track time milestones
        if ([30, 60, 120, 300, 600].includes(timeOnPage)) {
          if (window.gtag) {
            window.gtag('event', 'time_on_page', {
              event_category: 'Engagement',
              event_label: `${timeOnPage}s`,
              value: timeOnPage
            });
          }
        }
      };

      const trackUserEngagement = () => {
        // Track clicks on important elements
        document.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          const button = target.closest('button');
          const link = target.closest('a');
          
          if (button || link) {
            const element = button || link;
            const text = element.textContent?.trim() || 'Unknown';
            const href = (element as HTMLAnchorElement).href || '';
            
            if (window.gtag) {
              window.gtag('event', 'element_click', {
                event_category: 'Engagement',
                event_label: text,
                custom_parameters: {
                  element_type: button ? 'button' : 'link',
                  element_text: text,
                  element_href: href
                }
              });
            }
          }
        });

        // Track form interactions
        document.addEventListener('submit', (e) => {
          const form = e.target as HTMLFormElement;
          if (window.gtag) {
            window.gtag('event', 'form_submit', {
              event_category: 'Engagement',
              event_label: form.action || 'Unknown Form',
              custom_parameters: {
                form_action: form.action,
                form_method: form.method
              }
            });
          }
        });
      };

      // Initialize tracking
      trackUserEngagement();
      window.addEventListener('scroll', trackScroll);
      const timeInterval = setInterval(trackTimeOnPage, 1000);

      return () => {
        window.removeEventListener('scroll', trackScroll);
        clearInterval(timeInterval);
      };
    }
  }, [enableUserBehaviorTracking]);

  useEffect(() => {
    // Error Tracking
    if (typeof window !== 'undefined') {
      const handleError = (event: ErrorEvent) => {
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: event.message,
            fatal: false,
            custom_parameters: {
              filename: event.filename,
              lineno: event.lineno,
              colno: event.colno
            }
          });
        }
      };

      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: event.reason?.toString() || 'Unhandled Promise Rejection',
            fatal: false
          });
        }
      };

      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleUnhandledRejection);

      return () => {
        window.removeEventListener('error', handleError);
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      };
    }
  }, []);

  // Return null as this is a utility component
  return null;
};

export default AnalyticsTracker;