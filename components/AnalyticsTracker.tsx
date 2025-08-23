import React, { useEffect } from 'react';

interface AnalyticsTrackerProps {
  trackingId?: string;
  enablePerformanceMonitoring?: boolean;
  enableUserBehaviorTracking?: boolean;
}

// Extend PerformanceEntry for FID measurement
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  target?: HTMLElement | null;
}

// Extend PerformanceEntry for CLS measurement
interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput?: boolean;
  value?: number;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  enablePerformanceMonitoring = true,
  enableUserBehaviorTracking = true
}) => {
  useEffect(() => {
    // Initialize analytics tracking
    if (typeof window !== 'undefined') {
      initializeAnalytics();
      
      if (enablePerformanceMonitoring) {
        initializePerformanceMonitoring();
      }
      
      if (enableUserBehaviorTracking) {
        initializeUserBehaviorTracking();
      }
    }
  }, [trackingId, enablePerformanceMonitoring, enableUserBehaviorTracking]);

  const initializeAnalytics = () => {
    // Google Analytics 4 initialization
    if (trackingId && typeof window !== 'undefined') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'user_type',
          'custom_parameter_2': 'page_category'
        }
      });

      // Track page views
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_category: getPageCategory()
      });
    }
  };

  const initializePerformanceMonitoring = () => {
    // Core Web Vitals monitoring
    if ('PerformanceObserver' in window) {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries[entries.length - 1] as PerformanceEntry;
        if (fcpEntry) {
          trackPerformanceMetric('FCP', fcpEntry.startTime);
        }
      });
      fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1] as PerformanceEntry;
        if (lcpEntry) {
          trackPerformanceMetric('LCP', lcpEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as FirstInputEntry;
          if (fidEntry.processingStart) {
            const fid = fidEntry.processingStart - fidEntry.startTime;
            trackPerformanceMetric('FID', fid);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const clsEntry = entry as LayoutShiftEntry;
          if (!clsEntry.hadRecentInput && clsEntry.value) {
            clsValue += clsEntry.value;
            trackPerformanceMetric('CLS', clsValue);
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Report CLS on page unload
      window.addEventListener('beforeunload', () => {
        if (clsValue > 0) {
          trackPerformanceMetric('CLS', clsValue);
        }
      });
    }

    // Navigation Timing API
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            trackPerformanceMetric('TTFB', navigation.responseStart - navigation.requestStart);
            trackPerformanceMetric('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
            trackPerformanceMetric('LoadComplete', navigation.loadEventEnd - navigation.loadEventStart);
            trackPerformanceMetric('FirstPaint', performance.getEntriesByName('first-paint')[0]?.startTime || 0);
            trackPerformanceMetric('FirstContentfulPaint', performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0);
          }
        }, 0);
      });
    }
  };

  const initializeUserBehaviorTracking = () => {
    // Track user interactions
    let sessionStartTime = Date.now();
    let scrollDepth = 0;

    // Track page views
    const trackPageView = () => {
      trackUserBehavior('page_view', {
        url: window.location.href,
        title: document.title,
        timestamp: Date.now(),
        session_duration: Date.now() - sessionStartTime
      });
    };

    // Track clicks
    const trackClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target) {
        trackUserBehavior('click', {
          element: target.tagName.toLowerCase(),
          text: target.textContent?.substring(0, 100) || '',
          url: (target as HTMLAnchorElement).href || '',
          timestamp: Date.now()
        });
      }
    };

    // Track scroll depth
    const trackScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > scrollDepth) {
        scrollDepth = scrollPercent;
        if (scrollPercent % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          trackUserBehavior('scroll_depth', {
            depth: scrollPercent,
            timestamp: Date.now()
          });
        }
      }
    };

    // Track form interactions
    const trackFormInteraction = (event: Event) => {
      const target = event.target as HTMLFormElement;
      if (target && target.tagName === 'FORM') {
        trackUserBehavior('form_interaction', {
          action: target.action,
          method: target.method,
          timestamp: Date.now()
        });
      }
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const timeOnPage = Date.now() - sessionStartTime;
      trackUserBehavior('time_on_page', {
        duration: timeOnPage,
        timestamp: Date.now()
      });
    };

    // Add event listeners
    document.addEventListener('click', trackClick);
    document.addEventListener('scroll', trackScroll);
    document.addEventListener('submit', trackFormInteraction);

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        trackTimeOnPage();
      } else {
        sessionStartTime = Date.now();
      }
    });

    // Track before unload
    window.addEventListener('beforeunload', trackTimeOnPage);

    // Initial page view
    trackPageView();

    // Cleanup function
    return () => {
      document.removeEventListener('click', trackClick);
      document.removeEventListener('scroll', trackScroll);
      document.removeEventListener('submit', trackFormInteraction);
      window.removeEventListener('beforeunload', trackTimeOnPage);
    };
  };

  const trackPerformanceMetric = (metric: string, value: number) => {
    if (trackingId && typeof window !== 'undefined') {
      // Send to Google Analytics
      if (window.gtag) {
        window.gtag('event', 'performance_metric', {
          metric_name: metric,
          metric_value: value,
          page_url: window.location.href,
          timestamp: Date.now()
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log(`Performance Metric - ${metric}:`, value);
      }
    }
  };

  const trackUserBehavior = (event: string, data: Record<string, unknown>) => {
    if (trackingId && typeof window !== 'undefined') {
      // Send to Google Analytics
      if (window.gtag) {
        window.gtag('event', event, {
          ...data,
          page_url: window.location.href,
          timestamp: Date.now()
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log(`User Behavior - ${event}:`, data);
      }
    }
  };

  const getPageCategory = (): string => {
    const path = window.location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/services')) return 'services';
    if (path.startsWith('/blog')) return 'blog';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/contact')) return 'contact';
    return 'other';
  };

  return null; // This component doesn't render anything
};

// Note: gtag and dataLayer are declared globally in PerformanceOptimizer.tsx

export default AnalyticsTracker;