import { useState, useEffect, useCallback, useRef } from 'react';

interface AnalyticsEvent {
  id: string;
  type: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  userId?: string;
  metadata?: Record<string, any>;
}

interface UserSession {
  id: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  interactions: number;
  referrer: string;
  userAgent: string;
  deviceInfo: {
    type: 'desktop' | 'mobile' | 'tablet';
    screen: { width: number; height: number };
    viewport: { width: number; height: number };
  };
}

interface PerformanceMetrics {
  pageLoadTime: number;
  timeToInteractive: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface AnalyticsConfig {
  enableTracking: boolean;
  enablePerformanceTracking: boolean;
  enableUserBehaviorTracking: boolean;
  enableHeatmapTracking: boolean;
  sessionTimeout: number; // minutes
  batchSize: number;
  flushInterval: number; // milliseconds
}

export const useAnalytics = (config: Partial<AnalyticsConfig> = {}) => {
  const {
    enableTracking = true,
    enablePerformanceTracking = true,
    enableUserBehaviorTracking = true,
    enableHeatmapTracking = false,
    sessionTimeout = 30,
    batchSize = 10,
    flushInterval = 5000
  } = config;

  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [currentSession, setCurrentSession] = useState<UserSession | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics | null>(null);
  
  const sessionRef = useRef<string>('');
  const lastActivityRef = useRef<number>(Date.now());
  const flushTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize analytics
  useEffect(() => {
    if (!enableTracking) return;

    initializeSession();
    startTracking();
    
    return () => {
      stopTracking();
      flushEvents();
    };
  }, [enableTracking]);

  // Initialize user session
  const initializeSession = useCallback(() => {
    const sessionId = generateSessionId();
    sessionRef.current = sessionId;
    
    const session: UserSession = {
      id: sessionId,
      startTime: Date.now(),
      lastActivity: Date.now(),
      pageViews: 0,
      interactions: 0,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      deviceInfo: getDeviceInfo()
    };

    setCurrentSession(session);
    trackEvent('session', 'start', 'session_started');
  }, []);

  // Start tracking
  const startTracking = useCallback(() => {
    if (!enableTracking) return;

    setIsTracking(true);
    
    // Track page view
    trackPageView();
    
    // Performance tracking
    if (enablePerformanceTracking) {
      trackPerformanceMetrics();
    }
    
    // User behavior tracking
    if (enableUserBehaviorTracking) {
      setupUserBehaviorTracking();
    }
    
    // Heatmap tracking
    if (enableHeatmapTracking) {
      setupHeatmapTracking();
    }
    
    // Session monitoring
    setupSessionMonitoring();
    
    // Setup event batching
    setupEventBatching();
  }, [enableTracking, enablePerformanceTracking, enableUserBehaviorTracking, enableHeatmapTracking]);

  // Stop tracking
  const stopTracking = useCallback(() => {
    setIsTracking(false);
    
    if (flushTimerRef.current) {
      clearTimeout(flushTimerRef.current);
    }
  }, []);

  // Track custom event
  const trackEvent = useCallback((
    category: string,
    action: string,
    label?: string,
    value?: number,
    metadata?: Record<string, any>
  ) => {
    if (!isTracking || !currentSession) return;

    const event: AnalyticsEvent = {
      id: generateEventId(),
      type: 'custom',
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId: currentSession.id,
      metadata
    };

    setEvents(prev => [...prev, event]);
    updateSessionActivity();
  }, [isTracking, currentSession]);

  // Track page view
  const trackPageView = useCallback(() => {
    if (!isTracking || !currentSession) return;

    const event: AnalyticsEvent = {
      id: generateEventId(),
      type: 'pageview',
      category: 'navigation',
      action: 'page_view',
      label: window.location.pathname,
      timestamp: Date.now(),
      sessionId: currentSession.id,
      metadata: {
        url: window.location.href,
        title: document.title,
        referrer: document.referrer
      }
    };

    setEvents(prev => [...prev, event]);
    setCurrentSession(prev => prev ? { ...prev, pageViews: prev.pageViews + 1 } : null);
    updateSessionActivity();
  }, [isTracking, currentSession]);

  // Track performance metrics
  const trackPerformanceMetrics = useCallback(async () => {
    if (!enablePerformanceTracking) return;

    try {
      // Wait for performance metrics to be available
      await new Promise(resolve => setTimeout(resolve, 1000));

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const layoutShiftEntries = performance.getEntriesByType('layout-shift');

      const metrics: PerformanceMetrics = {
        pageLoadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
        timeToInteractive: navigation ? navigation.domInteractive - navigation.fetchStart : 0,
        firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        largestContentfulPaint: 0, // Will be updated by LCP observer
        cumulativeLayoutShift: layoutShiftEntries.reduce((sum, entry) => sum + (entry as any).value, 0),
        firstInputDelay: 0 // Will be updated by FID observer
      };

      setPerformanceMetrics(metrics);
      trackEvent('performance', 'metrics_captured', 'performance_tracking', undefined, { metrics });
    } catch (error) {
      console.error('Failed to track performance metrics:', error);
    }
  }, [enablePerformanceTracking]);

  // Setup user behavior tracking
  const setupUserBehaviorTracking = useCallback(() => {
    // Click tracking
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const className = target.className;
      const id = target.id;
      const text = target.textContent?.slice(0, 50);

      trackEvent('interaction', 'click', `${tagName}_clicked`, undefined, {
        tagName,
        className,
        id,
        text,
        x: event.clientX,
        y: event.clientY
      });
    };

    // Scroll tracking
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        trackEvent('interaction', 'scroll', 'scroll_depth', scrollDepth);
      }, 150);
    };

    // Form interaction tracking
    const handleFormInteraction = (event: Event) => {
      const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      trackEvent('interaction', 'form_input', 'form_field_interaction', undefined, {
        fieldType: target.type,
        fieldName: target.name,
        fieldValue: target.value?.slice(0, 100)
      });
    };

    // Add event listeners
    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('input', handleFormInteraction);
    document.addEventListener('change', handleFormInteraction);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('input', handleFormInteraction);
      document.removeEventListener('change', handleFormInteraction);
    };
  }, []);

  // Setup heatmap tracking
  const setupHeatmapTracking = useCallback(() => {
    if (!enableHeatmapTracking) return;

    // Track mouse movements for heatmap
    let moveTimeout: NodeJS.Timeout;
    const handleMouseMove = (event: MouseEvent) => {
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        trackEvent('heatmap', 'mouse_movement', 'mouse_position', undefined, {
          x: event.clientX,
          y: event.clientY,
          timestamp: Date.now()
        });
      }, 100);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enableHeatmapTracking]);

  // Setup session monitoring
  const setupSessionMonitoring = useCallback(() => {
    const checkSessionTimeout = () => {
      const now = Date.now();
      const timeoutMs = sessionTimeout * 60 * 1000;
      
      if (now - lastActivityRef.current > timeoutMs) {
        // Session expired
        trackEvent('session', 'timeout', 'session_expired');
        initializeSession();
      }
    };

    const interval = setInterval(checkSessionTimeout, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [sessionTimeout, initializeSession]);

  // Setup event batching
  const setupEventBatching = useCallback(() => {
    const flushEvents = () => {
      if (events.length >= batchSize) {
        sendEventsToServer(events);
        setEvents([]);
      }
    };

    flushTimerRef.current = setInterval(flushEvents, flushInterval);
  }, [events.length, batchSize, flushInterval]);

  // Update session activity
  const updateSessionActivity = useCallback(() => {
    lastActivityRef.current = Date.now();
    setCurrentSession(prev => prev ? { ...prev, lastActivity: Date.now() } : null);
  }, []);

  // Send events to server
  const sendEventsToServer = useCallback(async (eventsToSend: AnalyticsEvent[]) => {
    try {
      // In a real implementation, this would send to your analytics server
      console.log('Sending analytics events:', eventsToSend);
      
      // Simulate API call
      await fetch('/api/analytics/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventsToSend)
      });
    } catch (error) {
      console.error('Failed to send analytics events:', error);
    }
  }, []);

  // Flush events manually
  const flushEvents = useCallback(() => {
    if (events.length > 0) {
      sendEventsToServer(events);
      setEvents([]);
    }
  }, [events, sendEventsToServer]);

  // Get analytics summary
  const getAnalyticsSummary = useCallback(() => {
    if (!currentSession) return null;

    const sessionDuration = Date.now() - currentSession.startTime;
    const eventsByCategory = events.reduce((acc, event) => {
      acc[event.category] = (acc[event.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      sessionId: currentSession.id,
      sessionDuration: Math.round(sessionDuration / 1000), // seconds
      pageViews: currentSession.pageViews,
      totalEvents: events.length,
      eventsByCategory,
      performanceMetrics
    };
  }, [currentSession, events, performanceMetrics]);

  // Track conversion
  const trackConversion = useCallback((
    goal: string,
    value?: number,
    metadata?: Record<string, any>
  ) => {
    trackEvent('conversion', goal, 'goal_achieved', value, metadata);
  }, [trackEvent]);

  // Track error
  const trackError = useCallback((
    error: Error,
    context?: string,
    metadata?: Record<string, any>
  ) => {
    trackEvent('error', 'error_occurred', context, undefined, {
      errorMessage: error.message,
      errorStack: error.stack,
      ...metadata
    });
  }, [trackEvent]);

  return {
    // State
    isTracking,
    currentSession,
    performanceMetrics,
    events,
    
    // Actions
    trackEvent,
    trackPageView,
    trackConversion,
    trackError,
    flushEvents,
    
    // Analytics
    getAnalyticsSummary,
    
    // Session management
    initializeSession,
    startTracking,
    stopTracking
  };
};

// Utility functions
const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

const generateEventId = (): string => {
  return `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

const getDeviceInfo = () => {
  const userAgent = navigator.userAgent;
  let deviceType: 'desktop' | 'mobile' | 'tablet' = 'desktop';
  
  if (/Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    deviceType = /iPad|Android(?=.*\bMobile\b)|Tablet/i.test(userAgent) ? 'tablet' : 'mobile';
  }

  return {
    type: deviceType,
    screen: {
      width: window.screen.width,
      height: window.screen.height
    },
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  };
};