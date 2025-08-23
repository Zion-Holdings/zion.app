import React, { useEffect, useCallback } from 'react';

interface AnalyticsTrackerProps {
  enablePerformanceMonitoring?: boolean;
  enableUserEngagement?: boolean;
  enableConversionTracking?: boolean;
}

// Safe gtag function that checks if it exists
const safeGtag = (command: string, targetId: string, config?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(command, targetId, config);
  }
};

// Type definitions for performance entries
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  target?: EventTarget;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  enablePerformanceMonitoring = true,
  enableUserEngagement = true,
  enableConversionTracking = true
}) => {
  // Performance monitoring
  const trackPerformance = useCallback(() => {
    if (!enablePerformanceMonitoring) return;

    if ('performance' in window) {
      // Track Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // Send to analytics
            safeGtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(entry.startTime)
            });
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Track First Input Delay
      const firstInputObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as FirstInputEntry;
            const fid = firstInputEntry.processingStart - entry.startTime;
            safeGtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(fid)
            });
          }
        }
      });

      firstInputObserver.observe({ entryTypes: ['first-input'] });

      // Track Cumulative Layout Shift
      let cumulativeLayoutShift = 0;
      const layoutShiftObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift') {
            const layoutShiftEntry = entry as LayoutShiftEntry;
            if (!layoutShiftEntry.hadRecentInput) {
              cumulativeLayoutShift += layoutShiftEntry.value;
              safeGtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(cumulativeLayoutShift * 1000) / 1000
              });
            }
          }
        }
      });

      layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });

      // Track First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-contentful-paint') {
            safeGtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FCP',
              value: Math.round(entry.startTime)
            });
          }
        }
      });

      fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

      // Track page load metrics
      window.addEventListener('load', () => {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const loadTime = navigationEntry.loadEventEnd - navigationEntry.loadEventStart;
          
          safeGtag('event', 'timing_complete', {
            name: 'load',
            value: Math.round(loadTime)
          });
        }
      });

      return () => {
        observer.disconnect();
        firstInputObserver.disconnect();
        layoutShiftObserver.disconnect();
        fcpObserver.disconnect();
      };
    }
  }, [enablePerformanceMonitoring]);

  // User engagement tracking
  const trackUserEngagement = useCallback(() => {
    if (!enableUserEngagement) return;

    let startTime = Date.now();
    let isActive = true;
    let lastActivity = Date.now();

    const updateActivity = () => {
      lastActivity = Date.now();
      if (!isActive) {
        isActive = true;
        startTime = Date.now();
      }
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, updateActivity, true);
    });

    // Track time on page
    const trackTimeOnPage = () => {
      if (isActive) {
        const timeOnPage = Date.now() - startTime;
        if (timeOnPage > 10000) { // Only track if user spent more than 10 seconds
          safeGtag('event', 'engagement_time_msec', {
            value: timeOnPage
          });
        }
      }
    };

    // Track engagement every 30 seconds
    const engagementInterval = setInterval(trackTimeOnPage, 30000);

    // Track when user becomes inactive
    const checkInactivity = () => {
      const now = Date.now();
      if (now - lastActivity > 60000) { // 1 minute of inactivity
        if (isActive) {
          isActive = false;
          const sessionTime = now - startTime;
          safeGtag('event', 'session_end', {
            session_duration: sessionTime
          });
        }
      }
    };

    const inactivityInterval = setInterval(checkInactivity, 10000);

    // Track scroll depth
    let maxScrollDepth = 0;
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        if (maxScrollDepth >= 25 && maxScrollDepth < 50) {
          safeGtag('event', 'scroll_depth', { value: 25 });
        } else if (maxScrollDepth >= 50 && maxScrollDepth < 75) {
          safeGtag('event', 'scroll_depth', { value: 50 });
        } else if (maxScrollDepth >= 75 && maxScrollDepth < 90) {
          safeGtag('event', 'scroll_depth', { value: 75 });
        } else if (maxScrollDepth >= 90) {
          safeGtag('event', 'scroll_depth', { value: 90 });
        }
      }
    };

    window.addEventListener('scroll', trackScrollDepth, { passive: true });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, updateActivity, true);
      });
      clearInterval(engagementInterval);
      clearInterval(inactivityInterval);
      window.removeEventListener('scroll', trackScrollDepth);
    };
  }, [enableUserEngagement]);

  // Conversion tracking
  const trackConversions = useCallback(() => {
    if (!enableConversionTracking) return;

    // Track form submissions
    const trackFormSubmission = (event: Event) => {
      const form = event.target as HTMLFormElement;
      if (form) {
        safeGtag('event', 'form_submit', {
          form_name: form.name || form.id || 'unknown',
          form_action: form.action
        });
      }
    };

    // Track button clicks
    const trackButtonClick = (event: Event) => {
      const button = event.target as HTMLButtonElement;
      if (button && button.textContent) {
        const buttonText = button.textContent.trim();
        if (buttonText.toLowerCase().includes('get started') || 
            buttonText.toLowerCase().includes('contact') ||
            buttonText.toLowerCase().includes('demo') ||
            buttonText.toLowerCase().includes('quote')) {
          safeGtag('event', 'button_click', {
            button_text: buttonText,
            button_location: button.closest('section')?.className || 'unknown'
          });
        }
      }
    };

    // Track phone number clicks
    const trackPhoneClick = (event: Event) => {
      const element = event.target as HTMLElement;
      if (element.textContent && /\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/.test(element.textContent)) {
        safeGtag('event', 'phone_click', {
          phone_number: element.textContent.trim()
        });
      }
    };

    // Track email clicks
    const trackEmailClick = (event: Event) => {
      const element = event.target as HTMLElement;
      if (element.textContent && element.textContent.includes('@')) {
        safeGtag('event', 'email_click', {
          email: element.textContent.trim()
        });
      }
    };

    // Track external link clicks
    const trackExternalLinkClick = (event: Event) => {
      const link = event.target as HTMLAnchorElement;
      if (link && link.href && link.hostname !== window.location.hostname) {
        safeGtag('event', 'external_link_click', {
          link_url: link.href,
          link_text: link.textContent?.trim() || 'unknown'
        });
      }
    };

    // Add event listeners
    document.addEventListener('submit', trackFormSubmission);
    document.addEventListener('click', trackButtonClick);
    document.addEventListener('click', trackPhoneClick);
    document.addEventListener('click', trackEmailClick);
    document.addEventListener('click', trackExternalLinkClick);

    return () => {
      document.removeEventListener('submit', trackFormSubmission);
      document.removeEventListener('click', trackButtonClick);
      document.removeEventListener('click', trackPhoneClick);
      document.removeEventListener('click', trackEmailClick);
      document.removeEventListener('click', trackExternalLinkClick);
    };
  }, [enableConversionTracking]);

  // Enhanced Google Analytics initialization
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && !window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'page_category',
          'custom_parameter_2': 'user_type'
        }
      });
    }

    // Track page views
    const trackPageView = () => {
      if (window.gtag) {
        safeGtag('config', 'G-XXXXXXXXXX', {
          page_path: window.location.pathname + window.location.search,
          page_title: document.title
        });
      }
    };

    // Track initial page view
    trackPageView();

    // Performance monitoring
    const performanceCleanup = trackPerformance();

    // User engagement tracking
    const engagementCleanup = trackUserEngagement();

    // Conversion tracking
    const conversionCleanup = trackConversions();

    // Cleanup function
    return () => {
      if (performanceCleanup) performanceCleanup();
      if (engagementCleanup) engagementCleanup();
      if (conversionCleanup) conversionCleanup();
    };
  }, [trackPerformance, trackUserEngagement, trackConversions]);

  // Track errors
  useEffect(() => {
    const trackError = (event: ErrorEvent) => {
      if (window.gtag) {
        safeGtag('event', 'exception', {
          description: event.error?.message || 'Unknown error',
          fatal: false
        });
      }
    };

    const trackUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (window.gtag) {
        safeGtag('event', 'exception', {
          description: event.reason?.message || 'Unhandled promise rejection',
          fatal: false
        });
      }
    };

    window.addEventListener('error', trackError);
    window.addEventListener('unhandledrejection', trackUnhandledRejection);

    return () => {
      window.removeEventListener('error', trackError);
      window.removeEventListener('unhandledrejection', trackUnhandledRejection);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AnalyticsTracker;