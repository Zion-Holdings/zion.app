import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  page: string;
  userAgent: string;
  referrer: string;
}

interface ConversionGoal {
  id: string;
  name: string;
  type: 'page_view' | 'click' | 'form_submit' | 'scroll' | 'time_on_page';
  target: string;
  value: number;
  achieved: boolean;
}

const AnalyticsTracker: React.FC = () => {
  const router = useRouter();
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [conversionGoals, setConversionGoals] = useState<ConversionGoal[]>([
    {
      id: 'homepage_visit',
      name: 'Homepage Visit',
      type: 'page_view',
      target: '/',
      value: 1,
      achieved: false
    },
    {
      id: 'services_view',
      name: 'Services Page View',
      type: 'page_view',
      target: '/services',
      value: 5,
      achieved: false
    },
    {
      id: 'contact_click',
      name: 'Contact Button Click',
      type: 'click',
      target: 'contact-button',
      value: 10,
      achieved: false
    },
    {
      id: 'form_submit',
      name: 'Contact Form Submit',
      type: 'form_submit',
      target: 'contact-form',
      value: 25,
      achieved: false
    },
    {
      id: 'scroll_depth',
      name: 'Scroll Depth 75%',
      type: 'scroll',
      target: '75%',
      value: 15,
      achieved: false
    },
    {
      id: 'time_on_page',
      name: 'Time on Page 2min',
      type: 'time_on_page',
      target: '120',
      value: 20,
      achieved: false
    }
  ]);
  const [sessionStart, setSessionStart] = useState<number>(Date.now());
  const [pageViews, setPageViews] = useState<number>(0);
  const [uniquePages, setUniquePages] = useState<Set<string>>(new Set());
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Initialize analytics
    initializeAnalytics();
    
    // Track page views
    trackPageView();
    
    // Track user engagement
    trackUserEngagement();
    
    // Track conversions
    trackConversions();
    
    // Track performance
    trackPerformance();
    
    // Track errors
    trackErrors();
    
    return () => {
      // Cleanup
      cleanupAnalytics();
    };
  }, [router.asPath]);

  const initializeAnalytics = () => {
    // Set session start time
    const sessionId = sessionStorage.getItem('zion_analytics_session');
    if (!sessionId) {
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('zion_analytics_session', newSessionId);
      setSessionStart(Date.now());
    } else {
      const sessionData = JSON.parse(sessionId);
      setSessionStart(sessionData.startTime);
    }
    
    // Track user agent and referrer
    trackUserInfo();
  };

  const trackPageView = () => {
    const event: AnalyticsEvent = {
      event: 'page_view',
      category: 'engagement',
      action: 'page_view',
      label: router.asPath,
      value: 1,
      timestamp: Date.now(),
      page: router.asPath,
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };
    
    addEvent(event);
    setPageViews(prev => prev + 1);
    setUniquePages(prev => new Set([...prev, router.asPath]));
    
    // Track to Google Analytics if available
            if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as { gtag: Function }).gtag('config', 'GA_MEASUREMENT_ID', {
            page_path: router.asPath,
            page_title: document.title
          });
        }
  };

  const trackUserEngagement = () => {
    // Track scroll depth
    let maxScroll = 0;
    const trackScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track scroll milestones
        if (scrollPercent >= 25 && maxScroll < 50) {
          trackEvent('engagement', 'scroll', '25%');
        } else if (scrollPercent >= 50 && maxScroll < 75) {
          trackEvent('engagement', 'scroll', '50%');
        } else if (scrollPercent >= 75 && maxScroll < 100) {
          trackEvent('engagement', 'scroll', '75%');
          checkConversionGoal('scroll_depth');
        } else if (scrollPercent >= 100) {
          trackEvent('engagement', 'scroll', '100%');
        }
      }
    };
    
    window.addEventListener('scroll', trackScroll);
    
    // Track time on page
    const startTime = Date.now();
    const trackTime = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      
      // Track time milestones
      if (timeOnPage >= 30) {
        trackEvent('engagement', 'time_on_page', '30s');
      }
      if (timeOnPage >= 60) {
        trackEvent('engagement', 'time_on_page', '1min');
      }
      if (timeOnPage >= 120) {
        trackEvent('engagement', 'time_on_page', '2min');
        checkConversionGoal('time_on_page');
      }
      if (timeOnPage >= 300) {
        trackEvent('engagement', 'time_on_page', '5min');
      }
    };
    
    const timeInterval = setInterval(trackTime, 1000);
    
    // Track clicks
    const trackClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const className = target.className || '';
      const id = target.id || '';
      const text = target.textContent?.trim().substring(0, 50) || '';
      
      if (tagName === 'button' || tagName === 'a' || className.includes('btn') || className.includes('button')) {
        trackEvent('engagement', 'click', `${tagName}:${id || className || text}`);
        
        // Check for specific conversion goals
        if (id === 'contact-button' || className.includes('contact') || text.toLowerCase().includes('contact')) {
          checkConversionGoal('contact_click');
        }
      }
    };
    
    document.addEventListener('click', trackClicks);
    
    // Track form submissions
    const trackForms = (e: Event) => {
      const form = e.target as HTMLFormElement;
      trackEvent('conversion', 'form_submit', form.id || form.className || 'unknown_form');
      checkConversionGoal('form_submit');
    };
    
    document.addEventListener('submit', trackForms);
    
    // Track visibility changes
    const trackVisibility = () => {
      if (document.hidden) {
        trackEvent('engagement', 'page_hide', 'user_left_page');
      } else {
        trackEvent('engagement', 'page_show', 'user_returned');
      }
    };
    
    document.addEventListener('visibilitychange', trackVisibility);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', trackScroll);
      clearInterval(timeInterval);
      document.removeEventListener('click', trackClicks);
      document.removeEventListener('submit', trackForms);
      document.removeEventListener('visibilitychange', trackVisibility);
    };
  };

  const trackConversions = () => {
    // Check for conversion goals on page load
    checkConversionGoal('homepage_visit');
    if (router.asPath === '/services') {
      checkConversionGoal('services_view');
    }
  };

  const checkConversionGoal = (goalId: string) => {
    setConversionGoals(prev => prev.map(goal => {
      if (goal.id === goalId && !goal.achieved) {
        trackEvent('conversion', 'goal_achieved', goal.name, goal.value);
        return { ...goal, achieved: true };
      }
      return goal;
    }));
  };

  const trackPerformance = () => {
    if ('PerformanceObserver' in window) {
      // Track Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            trackEvent('performance', 'lcp', `${Math.round(entry.startTime)}ms`);
          } else if (entry.entryType === 'first-input') {
            const fid = (entry as any).processingStart - (entry as any).startTime;
            trackEvent('performance', 'fid', `${Math.round(fid)}ms`);
          }
        });
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
      
      // Track navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        trackEvent('performance', 'page_load', `${Math.round(navigation.loadEventEnd - navigation.fetchStart)}ms`);
        trackEvent('performance', 'dom_content_loaded', `${Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart)}ms`);
      }
    }
  };

  const trackErrors = () => {
          // Track JavaScript errors
      const trackError = (e: Event) => {
        const errorEvent = e as { message: string };
        trackEvent('error', 'javascript_error', errorEvent.message, 1);
      };
      
      // Track unhandled promise rejections
      const trackRejection = (e: Event) => {
        const rejectionEvent = e as { reason?: { message?: string } };
        trackEvent('error', 'promise_rejection', rejectionEvent.reason?.message || 'Unknown rejection', 1);
      };
    
    window.addEventListener('error', trackError);
    window.addEventListener('unhandledrejection', trackRejection);
    
    return () => {
      window.removeEventListener('error', trackError);
      window.removeEventListener('unhandledrejection', trackRejection);
    };
  };

  const trackUserInfo = () => {
    const userInfo = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      referrer: document.referrer,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
    
    trackEvent('user', 'info', JSON.stringify(userInfo));
  };

  const trackEvent = (category: string, action: string, label?: string, value?: number) => {
    const event: AnalyticsEvent = {
      event: 'custom_event',
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      page: router.asPath,
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };
    
    addEvent(event);
    
    // Track to Google Analytics if available
            if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as { gtag: Function }).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
          });
        }
  };

  const addEvent = (event: AnalyticsEvent) => {
    setEvents(prev => [...prev, event]);
    
    // Store in localStorage for persistence
    const storedEvents = JSON.parse(localStorage.getItem('zion_analytics_events') || '[]');
    storedEvents.push(event);
    
    // Keep only last 100 events
    if (storedEvents.length > 100) {
      storedEvents.splice(0, storedEvents.length - 100);
    }
    
    localStorage.setItem('zion_analytics_events', JSON.stringify(storedEvents));
  };

  const cleanupAnalytics = () => {
    // Save session data
    const sessionData = {
      sessionId: sessionStorage.getItem('zion_analytics_session'),
      startTime: sessionStart,
      pageViews,
      uniquePages: Array.from(uniquePages),
      duration: Date.now() - sessionStart
    };
    
    sessionStorage.setItem('zion_analytics_session', JSON.stringify(sessionData));
  };

  const getSessionDuration = () => {
    const duration = Date.now() - sessionStart;
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getConversionRate = () => {
    const achieved = conversionGoals.filter(goal => goal.achieved).length;
    const total = conversionGoals.length;
    return total > 0 ? Math.round((achieved / total) * 100) : 0;
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-black/90 backdrop-blur-xl border border-cyan-400/30 rounded-lg p-3 text-white shadow-2xl hover:bg-black/95 transition-all duration-300"
      >
        <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
      </button>
      
      {isVisible && (
        <div className="absolute top-16 left-0 bg-black/95 backdrop-blur-xl border border-cyan-400/30 rounded-lg p-6 text-white shadow-2xl min-w-80">
          <h3 className="text-lg font-bold mb-4 text-cyan-400">Analytics Dashboard</h3>
          
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-gray-400">Session Duration</div>
                <div className="text-white font-semibold">{getSessionDuration()}</div>
              </div>
              <div>
                <div className="text-gray-400">Page Views</div>
                <div className="text-white font-semibold">{pageViews}</div>
              </div>
              <div>
                <div className="text-gray-400">Unique Pages</div>
                <div className="text-white font-semibold">{uniquePages.size}</div>
              </div>
              <div>
                <div className="text-gray-400">Conversion Rate</div>
                <div className="text-white font-semibold">{getConversionRate()}%</div>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-4">
              <div className="text-gray-400 mb-2">Conversion Goals</div>
              <div className="space-y-2">
                {conversionGoals.map(goal => (
                  <div key={goal.id} className="flex items-center justify-between">
                    <span className="text-xs">{goal.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400">{goal.value}pts</span>
                      <div className={`w-3 h-3 rounded-full ${goal.achieved ? 'bg-green-400' : 'bg-gray-600'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-4">
              <div className="text-gray-400 mb-2">Recent Events</div>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {events.slice(-5).reverse().map((event, index) => (
                  <div key={index} className="text-xs">
                    <span className="text-cyan-400">{event.category}:</span> {event.action}
                    {event.label && <span className="text-gray-400"> - {event.label}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsTracker;