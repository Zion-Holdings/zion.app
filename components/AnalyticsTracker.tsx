import React, { useEffect, useRef, useCallback } from 'react';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  page: string;
  userAgent: string;
  referrer: string;
  url: string;
}

interface PageViewEvent {
  page: string;
  title: string;
  url: string;
  referrer: string;
  timestamp: number;
  sessionId: string;
  userAgent: string;
  viewport: {
    width: number;
    height: number;
  };
  performance?: {
    loadTime: number;
    domContentLoaded: number;
    firstContentfulPaint?: number;
  };
}

interface UserEngagement {
  scrollDepth: number;
  timeOnPage: number;
  interactions: number;
  lastActivity: number;
}

interface AnalyticsTrackerProps {
  enableDebug?: boolean;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  enableDebug = false
}) => {
  const sessionId = useRef<string>('');
  const sessionStartTime = useRef<number>(0);
  const lastActivityTime = useRef<number>(0);
  const engagementData = useRef<UserEngagement>({
    scrollDepth: 0,
    timeOnPage: 0,
    interactions: 0,
    lastActivity: Date.now()
  });
  const isTracking = useRef<boolean>(false);

  // Generate unique session ID
  const generateSessionId = useCallback((): string => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  // Track custom events
  const trackEvent = useCallback((event: string, category: string, action: string, label?: string, value?: number) => {
    if (!isTracking.current) return;

    const analyticsEvent: AnalyticsEvent = {
      event,
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId: sessionId.current,
      page: window.location.pathname,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      url: window.location.href
    };

    // Send to analytics API
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(analyticsEvent)
    }).catch(() => {
      // Silently handle fetch errors
    });

    // Track engagement
    engagementData.current.interactions++;
    engagementData.current.lastActivity = Date.now();

    if (enableDebug) {
      // console.log('Analytics Event:', analyticsEvent);
    }
  }, [enableDebug]);

  // Track page views
  const trackPageView = useCallback(() => {
    if (!isTracking.current) return;

    const pageViewEvent: PageViewEvent = {
      page: window.location.pathname,
      title: document.title,
      url: window.location.href,
      referrer: document.referrer,
      timestamp: Date.now(),
      sessionId: sessionId.current,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      performance: {
        loadTime: performance.now(),
        domContentLoaded: performance.timing?.domContentLoadedEventEnd || 0
      }
    };

    // Send to analytics API
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: 'page_view',
        ...pageViewEvent
      })
    }).catch(() => {
      // Silently handle fetch errors
    });

    if (enableDebug) {
      // console.log('Page View:', pageViewEvent);
    }
  }, [enableDebug]);

  // Track scroll depth
  const trackScrollDepth = useCallback(() => {
    if (!isTracking.current) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    if (scrollPercent > engagementData.current.scrollDepth) {
      engagementData.current.scrollDepth = scrollPercent;
      
      // Track milestone scroll events
      if (scrollPercent >= 25 && scrollPercent < 50) {
        trackEvent('scroll', 'engagement', 'scroll_25', '25% scroll depth');
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        trackEvent('scroll', 'engagement', 'scroll_50', '50% scroll depth');
      } else if (scrollPercent >= 75 && scrollPercent < 90) {
        trackEvent('scroll', 'engagement', 'scroll_75', '75% scroll depth');
      } else if (scrollPercent >= 90) {
        trackEvent('scroll', 'engagement', 'scroll_90', '90% scroll depth');
      }
    }
  }, [trackEvent]);

  // Track user interactions
  const trackUserInteractions = useCallback(() => {
    if (!isTracking.current) return;

    engagementData.current.lastActivity = Date.now();
    engagementData.current.interactions++;
  }, []);

  // Track form submissions
  const trackFormSubmission = useCallback((form: HTMLFormElement) => {
    if (!isTracking.current) return;

    const formData = new FormData(form);
    const formFields = Array.from(formData.keys());
    
    trackEvent('form_submit', 'engagement', 'form_submission', form.action || 'unknown_form', formFields.length);
  }, [trackEvent]);

  // Track button clicks
  const trackButtonClick = useCallback((button: HTMLElement) => {
    if (!isTracking.current) return;

    const buttonText = button.textContent?.trim() || 'unknown_button';
    
    trackEvent('click', 'engagement', 'button_click', buttonText, 1);
  }, [trackEvent]);

  // Track service interactions
  const trackServiceInteraction = useCallback((serviceName: string, action: string) => {
    if (!isTracking.current) return;

    trackEvent('service_interaction', 'services', action, serviceName);
  }, [trackEvent]);

  // Track time on page
  const trackTimeOnPage = useCallback(() => {
    if (!isTracking.current) return;

    const currentTime = Date.now();
    const timeOnPage = currentTime - sessionStartTime.current;
    engagementData.current.timeOnPage = timeOnPage;

    // Track time milestones
    if (timeOnPage >= 30000 && timeOnPage < 60000) { // 30 seconds
      trackEvent('time_on_page', 'engagement', 'time_30s', '30 seconds on page');
    } else if (timeOnPage >= 60000 && timeOnPage < 120000) { // 1 minute
      trackEvent('time_on_page', 'engagement', 'time_1m', '1 minute on page');
    } else if (timeOnPage >= 120000 && timeOnPage < 300000) { // 2 minutes
      trackEvent('time_on_page', 'engagement', 'time_2m', '2 minutes on page');
    } else if (timeOnPage >= 300000) { // 5 minutes
      trackEvent('time_on_page', 'engagement', 'time_5m', '5 minutes on page');
    }
  }, [trackEvent]);

  // Initialize analytics tracking
  useEffect(() => {
    // Generate session ID
    sessionId.current = generateSessionId();
    sessionStartTime.current = Date.now();
    lastActivityTime.current = Date.now();
    isTracking.current = true;

    // Track initial page view
    trackPageView();

    // Set up scroll tracking
    const handleScroll = () => {
      trackScrollDepth();
      trackUserInteractions();
    };

    // Set up click tracking
    const handleClick = (event: Event) => {
      const target = event.target as HTMLElement;
      
      if (target.tagName === 'BUTTON') {
        trackButtonClick(target);
      } else if (target.closest('form')) {
        const form = target.closest('form') as HTMLFormElement;
        if (form) {
          trackFormSubmission(form);
        }
      }
      
      trackUserInteractions();
    };

    // Set up form submission tracking
    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      trackFormSubmission(form);
    };

    // Set up visibility change tracking
    const handleVisibilityChange = () => {
      if (document.hidden) {
        trackTimeOnPage();
      } else {
        lastActivityTime.current = Date.now();
      }
    };

    // Set up beforeunload tracking
    const handleBeforeUnload = () => {
      trackTimeOnPage();
      
      // Send final engagement data
      if (engagementData.current.interactions > 0) {
        fetch('/api/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            event: 'session_end',
            sessionId: sessionId.current,
            engagement: engagementData.current,
            timestamp: Date.now()
          })
        }).catch(() => {
          // Silently handle fetch errors
        });
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleFormSubmit);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Set up periodic tracking
    const timeTrackingInterval = setInterval(trackTimeOnPage, 30000); // Every 30 seconds
    const activityTrackingInterval = setInterval(() => {
      const currentTime = Date.now();
      if (currentTime - lastActivityTime.current > 300000) { // 5 minutes of inactivity
        trackEvent('inactivity', 'engagement', 'user_inactive', 'User inactive for 5+ minutes');
      }
    }, 60000); // Check every minute

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleFormSubmit);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      
      clearInterval(timeTrackingInterval);
      clearInterval(activityTrackingInterval);
      
      isTracking.current = false;
    };
  }, [generateSessionId, trackPageView, trackScrollDepth, trackUserInteractions, trackButtonClick, trackFormSubmission, trackTimeOnPage, trackEvent]);

  // Expose tracking functions globally for external use
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as Record<string, unknown>).ZionAnalytics = {
        trackEvent,
        trackPageView,
        trackServiceInteraction,
        getSessionId: () => sessionId.current,
        getEngagementData: () => ({ ...engagementData.current })
      };
    }
  }, [trackEvent, trackPageView, trackServiceInteraction]);

  // Return null as this is a tracking component
  return null;
};

export default AnalyticsTracker;