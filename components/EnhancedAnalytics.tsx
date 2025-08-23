import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Shield
} from 'lucide-react';

interface AnalyticsEvent {
  id: string;
  type: 'pageview' | 'click' | 'scroll' | 'form_submit' | 'conversion' | 'error' | 'performance';
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  userId?: string;
  metadata?: Record<string, any>;
}

interface UserBehavior {
  sessionId: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  clicks: number;
  scrollDepth: number;
  timeOnSite: number;
  referrer: string;
  userAgent: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  browser: string;
  os: string;
  country?: string;
  city?: string;
}

interface ConversionGoal {
  id: string;
  name: string;
  type: 'page_view' | 'click' | 'form_submit' | 'scroll' | 'time_on_site';
  target: string;
  value: number;
  achieved: boolean;
  timestamp?: number;
}

interface EnhancedAnalyticsProps {
  trackingId?: string;
  enableHeatmap?: boolean;
  enableSessionRecording?: boolean;
  enableAITracking?: boolean;
  showDebugPanel?: boolean;
  conversionGoals?: ConversionGoal[];
  children?: React.ReactNode;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  trackingId = 'G-XXXXXXXXXX',
  enableHeatmap = true,
  enableSessionRecording = true,
  enableAITracking = true,
  showDebugPanel = false,
  conversionGoals = [],
  children
}) => {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [currentSession, setCurrentSession] = useState<UserBehavior | null>(null);
  const [conversions, setConversions] = useState<ConversionGoal[]>(conversionGoals);
  const [showAnalyticsPanel, setShowAnalyticsPanel] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [heatmapData, setHeatmapData] = useState<{ x: number; y: number; intensity: number }[]>([]);
  
  const sessionRef = useRef<string>('');
  const lastScrollDepthRef = useRef<number>(0);
  const clickTrackerRef = useRef<Map<string, number>>(new Map());
  const scrollTrackerRef = useRef<Map<number, number>>(new Map());
  const formTrackerRef = useRef<Map<string, number>>(new Map());

  // Initialize analytics
  useEffect(() => {
    initializeAnalytics();
    setupEventListeners();
    startSession();
    
    return () => {
      cleanupEventListeners();
      endSession();
    };
  }, []);

  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && trackingId) {
      // Load Google Analytics
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).gtag = function() {
          (window as any).dataLayer.push(arguments);
        };
        (window as any).gtag('js', new Date());
        (window as any).gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {
            custom_dimension1: 'session_id',
            custom_dimension2: 'device_type',
            custom_dimension3: 'user_behavior'
          }
        });
      };
    }
  }, [trackingId]);

  const initializeAnalytics = () => {
    // Generate session ID
    sessionRef.current = generateSessionId();
    
    // Set up performance monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            trackPerformanceMetrics(entry as PerformanceNavigationTiming);
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['navigation'] });
      } catch (e) {
        console.log('PerformanceObserver not supported');
      }
    }
  };

  const setupEventListeners = () => {
    // Click tracking
    document.addEventListener('click', handleClick, { passive: true });
    
    // Scroll tracking
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    // Form tracking
    document.addEventListener('submit', handleFormSubmit, { passive: true });
    
    // Page visibility tracking
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Error tracking
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    // Before unload tracking
    window.addEventListener('beforeunload', handleBeforeUnload);
  };

  const cleanupEventListeners = () => {
    document.removeEventListener('click', handleClick);
    document.removeEventListener('scroll', handleScroll);
    document.removeEventListener('submit', handleFormSubmit);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('error', handleError);
    window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };

  const startSession = () => {
    const session: UserBehavior = {
      sessionId: sessionRef.current,
      startTime: Date.now(),
      lastActivity: Date.now(),
      pageViews: 1,
      clicks: 0,
      scrollDepth: 0,
      timeOnSite: 0,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      deviceType: getDeviceType(),
      browser: getBrowser(),
      os: getOS()
    };

    setCurrentSession(session);
    
    // Track session start
    trackEvent('session', 'start', 'session_started', undefined, {
      sessionId: session.sessionId,
      referrer: session.referrer,
      deviceType: session.deviceType
    });

    // Start session recording if enabled
    if (enableSessionRecording) {
      startSessionRecording();
    }

    // Start heatmap tracking if enabled
    if (enableHeatmap) {
      startHeatmapTracking();
    }
  };

  const endSession = () => {
    if (currentSession) {
      const endTime = Date.now();
      const timeOnSite = endTime - currentSession.startTime;
      
      // Update session with final metrics
      const finalSession = {
        ...currentSession,
        timeOnSite,
        lastActivity: endTime
      };

      // Track session end
      trackEvent('session', 'end', 'session_ended', timeOnSite, {
        sessionId: finalSession.sessionId,
        timeOnSite: finalSession.timeOnSite,
        pageViews: finalSession.pageViews,
        clicks: finalSession.clicks,
        scrollDepth: finalSession.scrollDepth
      });

      // Send session data to analytics
      sendToAnalytics('session_end', finalSession);
    }
  };

  const handleClick = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const tagName = target.tagName.toLowerCase();
    const className = target.className || '';
    const id = target.id || '';
    const text = target.textContent?.trim().substring(0, 50) || '';
    
    // Track click event
    trackEvent('interaction', 'click', `${tagName}_clicked`, undefined, {
      element: tagName,
      className,
      id,
      text,
      x: event.clientX,
      y: event.clientY,
      timestamp: Date.now()
    });

    // Update session metrics
    if (currentSession) {
      setCurrentSession(prev => prev ? {
        ...prev,
        clicks: prev.clicks + 1,
        lastActivity: Date.now()
      } : null);
    }

    // Check for conversion goals
    checkConversionGoals('click', target);
  }, [currentSession]);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollDepth = Math.round((scrollTop / scrollHeight) * 100);
    
    // Only track significant scroll changes
    if (Math.abs(scrollDepth - lastScrollDepthRef.current) >= 10) {
      lastScrollDepthRef.current = scrollDepth;
      
      trackEvent('interaction', 'scroll', 'page_scrolled', scrollDepth, {
        scrollDepth,
        scrollTop,
        scrollHeight,
        viewportHeight: window.innerHeight
      });

      // Update session metrics
      if (currentSession && scrollDepth > currentSession.scrollDepth) {
        setCurrentSession(prev => prev ? {
          ...prev,
          scrollDepth,
          lastActivity: Date.now()
        } : null);
      }

      // Check for conversion goals
      checkConversionGoals('scroll', undefined, scrollDepth);
    }
  }, [currentSession]);

  const handleFormSubmit = useCallback((event: Event) => {
    const form = event.target as HTMLFormElement;
    const formId = form.id || form.className || 'unknown_form';
    
    trackEvent('conversion', 'form_submit', 'form_submitted', undefined, {
      formId,
      formAction: form.action,
      formMethod: form.method,
      formElements: form.elements.length
    });

    // Check for conversion goals
    checkConversionGoals('form_submit', form);
  }, []);

  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      trackEvent('session', 'visibility', 'page_hidden');
    } else {
      trackEvent('session', 'visibility', 'page_visible');
    }
  }, []);

  const handleError = useCallback((event: ErrorEvent) => {
    trackEvent('error', 'javascript_error', 'js_error', undefined, {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      error: event.error?.stack
    });
  }, []);

  const handleUnhandledRejection = useCallback((event: PromiseRejectionEvent) => {
    trackEvent('error', 'unhandled_rejection', 'promise_rejection', undefined, {
      reason: event.reason,
      stack: event.reason?.stack
    });
  }, []);

  const handleBeforeUnload = useCallback(() => {
    endSession();
  }, []);

  const trackEvent = (
    category: string,
    action: string,
    label?: string,
    value?: number,
    metadata?: Record<string, any>
  ) => {
    const event: AnalyticsEvent = {
      id: generateEventId(),
      type: getEventType(category, action),
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId: sessionRef.current,
      metadata
    };

    setEvents(prev => [...prev.slice(-99), event]); // Keep last 100 events

    // Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        custom_dimension1: sessionRef.current,
        custom_dimension2: currentSession?.deviceType,
        ...metadata
      });
    }

    // Send to internal analytics
    sendToAnalytics('event', event);
  };

  const trackPerformanceMetrics = (entry: PerformanceNavigationTiming) => {
    const metrics = {
      dns: entry.domainLookupEnd - entry.domainLookupStart,
      tcp: entry.connectEnd - entry.connectStart,
      ttfb: entry.responseStart - entry.requestStart,
      domLoad: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
      windowLoad: entry.loadEventEnd - entry.loadEventStart,
      total: entry.loadEventEnd - (entry as any).navigationStart || entry.loadEventEnd
    };

    trackEvent('performance', 'navigation', 'page_load', metrics.total, metrics);
  };

  const checkConversionGoals = (action: string, element?: HTMLElement, value?: number) => {
    conversions.forEach(goal => {
      if (goal.achieved) return;

      let achieved = false;
      
      switch (goal.type) {
        case 'click':
          if (action === 'click' && element) {
            achieved = element.matches(goal.target) || 
                      element.closest(goal.target) !== null;
          }
          break;
        case 'form_submit':
          if (action === 'form_submit' && element) {
            achieved = element.matches(goal.target);
          }
          break;
        case 'scroll':
          if (action === 'scroll' && value !== undefined) {
            achieved = value >= parseInt(goal.target);
          }
          break;
        case 'time_on_site':
          if (currentSession) {
            const timeOnSite = Date.now() - currentSession.startTime;
            achieved = timeOnSite >= goal.value * 1000; // Convert to milliseconds
          }
          break;
      }

      if (achieved) {
        goal.achieved = true;
        goal.timestamp = Date.now();
        
        setConversions(prev => [...prev]);
        
        // Track conversion
        trackEvent('conversion', 'goal_achieved', goal.name, goal.value, {
          goalId: goal.id,
          goalType: goal.type,
          goalTarget: goal.target
        });

        // Send to analytics
        sendToAnalytics('conversion', goal);
      }
    });
  };

  const startSessionRecording = () => {
    if (!enableSessionRecording) return;
    
    setIsRecording(true);
    
    // Record user interactions
    const recordInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      const interaction = {
        type: event.type,
        target: target.tagName.toLowerCase(),
        className: target.className,
        id: target.id,
        text: target.textContent?.trim().substring(0, 100),
        timestamp: Date.now(),
        x: (event as MouseEvent).clientX,
        y: (event as MouseEvent).clientY
      };

      // Store interaction data
      sendToAnalytics('interaction', interaction);
    };

    // Record form inputs
    const recordFormInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const input = {
        type: target.type,
        name: target.name,
        value: target.value,
        timestamp: Date.now()
      };

      sendToAnalytics('form_input', input);
    };

    document.addEventListener('click', recordInteraction);
    document.addEventListener('input', recordFormInput);
    document.addEventListener('change', recordFormInput);
  };

  const startHeatmapTracking = () => {
    if (!enableHeatmap) return;

    // Track mouse movements and clicks for heatmap
    let mousePositions: { x: number; y: number; timestamp: number }[] = [];
    
    const trackMouse = (event: MouseEvent) => {
      mousePositions.push({
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now()
      });

      // Keep only recent positions
      if (mousePositions.length > 100) {
        mousePositions = mousePositions.slice(-100);
      }
    };

    const generateHeatmap = () => {
      const heatmapData = mousePositions.map(pos => ({
        x: pos.x,
        y: pos.y,
        intensity: 1
      }));

      setHeatmapData(heatmapData);
      sendToAnalytics('heatmap', heatmapData);
    };

    document.addEventListener('mousemove', trackMouse);
    
    // Generate heatmap every 30 seconds
    const heatmapInterval = setInterval(generateHeatmap, 30000);
    
    return () => {
      document.removeEventListener('mousemove', trackMouse);
      clearInterval(heatmapInterval);
    };
  };

  const sendToAnalytics = (type: string, data: any) => {
    // Send to internal analytics endpoint
    if (typeof window !== 'undefined') {
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          data,
          sessionId: sessionRef.current,
          timestamp: Date.now()
        })
      }).catch(error => {
        console.log('Analytics error:', error);
      });
    }
  };

  // Utility functions
  const generateSessionId = () => {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  };

  const generateEventId = () => {
    return 'event_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  };

  const getEventType = (category: string, action: string): AnalyticsEvent['type'] => {
    if (category === 'conversion') return 'conversion';
    if (category === 'error') return 'error';
    if (category === 'performance') return 'performance';
    if (action === 'click') return 'click';
    if (action === 'scroll') return 'scroll';
    if (action === 'form_submit') return 'form_submit';
    return 'pageview';
  };

  const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/g.test(userAgent)) {
      return /ipad|android(?!.*mobile)|tablet/g.test(userAgent) ? 'tablet' : 'mobile';
    }
    return 'desktop';
  };

  const getBrowser = (): string => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Unknown';
  };

  const getOS = (): string => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS')) return 'iOS';
    return 'Unknown';
  };

  if (!showDebugPanel) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Analytics Panel */}
      <AnimatePresence>
        {showAnalyticsPanel && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-96 bg-black/95 backdrop-blur-md border-l border-cyan-500/30 z-40 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Analytics Dashboard</h2>
                <button
                  onClick={() => setShowAnalyticsPanel(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Session Info */}
              {currentSession && (
                <div className="mb-6 p-4 bg-cyan-500/20 border border-cyan-500/30 rounded-lg">
                  <h3 className="text-sm font-medium text-cyan-400 mb-2">Current Session</h3>
                  <div className="space-y-1 text-xs text-gray-300">
                    <div>ID: {currentSession.sessionId.substring(0, 20)}...</div>
                    <div>Device: {currentSession.deviceType}</div>
                    <div>Browser: {currentSession.browser}</div>
                    <div>OS: {currentSession.os}</div>
                    <div>Page Views: {currentSession.pageViews}</div>
                    <div>Clicks: {currentSession.clicks}</div>
                    <div>Scroll Depth: {currentSession.scrollDepth}%</div>
                  </div>
                </div>
              )}

              {/* Conversion Goals */}
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <h3 className="text-sm font-medium text-green-400 mb-2">Conversion Goals</h3>
                <div className="space-y-2">
                  {conversions.map((goal) => (
                    <div key={goal.id} className="flex items-center justify-between">
                      <span className="text-xs text-gray-300">{goal.name}</span>
                      <div className={`w-3 h-3 rounded-full ${goal.achieved ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Events */}
              <div className="mb-6 p-4 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                <h3 className="text-sm font-medium text-purple-400 mb-2">Recent Events</h3>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {events.slice(-10).map((event) => (
                    <div key={event.id} className="text-xs text-gray-300">
                      {event.category}: {event.action} {event.label && `(${event.label})`}
                    </div>
                  ))}
                </div>
              </div>

              {/* Heatmap Preview */}
              {heatmapData.length > 0 && (
                <div className="mb-6 p-4 bg-orange-500/20 border border-orange-500/30 rounded-lg">
                  <h3 className="text-sm font-medium text-orange-400 mb-2">Heatmap Data</h3>
                  <div className="text-xs text-gray-300">
                    {heatmapData.length} data points collected
                  </div>
                </div>
              )}

              {/* Controls */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-white">Controls</h3>
                
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-300">Session Recording</label>
                  <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-300">Heatmap Tracking</label>
                  <div className={`w-3 h-3 rounded-full ${enableHeatmap ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-300">AI Tracking</label>
                  <div className={`w-3 h-3 rounded-full ${enableAITracking ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-sm font-medium text-white mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      const event = {
                        category: 'test',
                        action: 'button_click',
                        label: 'test_event'
                      };
                      trackEvent(event.category, event.action, event.label);
                    }}
                    className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition-colors"
                  >
                    Test Event
                  </button>
                  <button
                    onClick={() => {
                      setEvents([]);
                      setHeatmapData([]);
                    }}
                    className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded transition-colors"
                  >
                    Clear Data
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Analytics Toggle Button */}
      <button
        onClick={() => setShowAnalyticsPanel(!showAnalyticsPanel)}
        className="fixed top-4 right-20 z-50 p-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500/50"
        aria-label="Analytics dashboard"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>
    </>
  );
};

export default EnhancedAnalytics;