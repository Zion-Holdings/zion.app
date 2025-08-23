import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

interface ErrorData {
  message: string;
  stack?: string;
  timestamp: number;
  url: string;
  userAgent: string;
  errorId: string;
}

interface UserInteraction {
  type: string;
  timestamp: number;
  element: string;
  path: string;
}

const AnalyticsTracker: React.FC = () => {
  const router = useRouter();
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [errors, setErrors] = useState<ErrorData[]>([]);
  const [interactions, setInteractions] = useState<UserInteraction[]>([]);
  const [isOnline, setIsOnline] = useState(true);
  const [connectionInfo, setConnectionInfo] = useState<any>(null);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const errorCount = useRef(0);

  // Generate unique error ID
  const generateErrorId = () => `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Track Core Web Vitals
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // LCP (Largest Contentful Paint)
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({
              ...prev,
              lcp: Math.round(lastEntry.startTime)
            } as PerformanceMetrics));
          }
        });
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID (First Input Delay)
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({
              ...prev,
              fid: Math.round(entry.processingStart - entry.startTime)
            } as PerformanceMetrics));
          });
        });
        observerRef.current.observe({ entryTypes: ['first-input'] });

        // CLS (Cumulative Layout Shift)
        let clsValue = 0;
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          setMetrics(prev => ({
            ...prev,
            cls: Math.round(clsValue * 1000) / 1000
          } as PerformanceMetrics));
        });
        observerRef.current.observe({ entryTypes: ['layout-shift'] });

        // FCP (First Contentful Paint)
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const firstEntry = entries[0];
          if (firstEntry) {
            setMetrics(prev => ({
              ...prev,
              fcp: Math.round(firstEntry.startTime)
            } as PerformanceMetrics));
          }
        });
        observerRef.current.observe({ entryTypes: ['first-contentful-paint'] });

      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Track additional performance metrics
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const trackPerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            ttfb: Math.round(navigation.responseStart - navigation.requestStart),
            domLoad: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
            windowLoad: Math.round(navigation.loadEventEnd - navigation.fetchStart)
          } as PerformanceMetrics));
        }
      };

      if (document.readyState === 'complete') {
        trackPerformance();
      } else {
        window.addEventListener('load', trackPerformance);
        return () => window.removeEventListener('load', trackPerformance);
      }
    }
  }, []);

  // Track network information
  useEffect(() => {
    if (typeof window !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        setConnectionInfo({
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        });
      }
    }
  }, []);

  // Track online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Track user interactions
  useEffect(() => {
    const trackInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target) {
        const interaction: UserInteraction = {
          type: event.type,
          timestamp: Date.now(),
          element: target.tagName.toLowerCase(),
          path: window.location.pathname
        };
        setInteractions(prev => [...prev.slice(-99), interaction]); // Keep last 100 interactions
      }
    };

    const events = ['click', 'input', 'scroll', 'focus', 'blur'];
    events.forEach(eventType => {
      document.addEventListener(eventType, trackInteraction, { passive: true });
    });

    return () => {
      events.forEach(eventType => {
        document.removeEventListener(eventType, trackInteraction);
      });
    };
  }, []);

  // Track errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      const errorData: ErrorData = {
        message: event.message,
        stack: event.error?.stack,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        errorId: generateErrorId()
      };
      
      setErrors(prev => [...prev.slice(-49), errorData]); // Keep last 50 errors
      errorCount.current++;

      // Send error to analytics (if configured)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: errorData.message,
          fatal: false,
          custom_map: {
            error_id: errorData.errorId
          }
        });
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const errorData: ErrorData = {
        message: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        errorId: generateErrorId()
      };
      
      setErrors(prev => [...prev.slice(-49), errorData]);
      errorCount.current++;

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: errorData.message,
          fatal: false,
          custom_map: {
            error_id: errorData.errorId
          }
        });
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  // Track memory usage (if available)
  useEffect(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const trackMemory = () => {
        const memory = (performance as any).memory;
        if (memory) {
          // Log memory usage for debugging
          console.debug('Memory Usage:', {
            usedJSHeapSize: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
            totalJSHeapSize: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
            jsHeapSizeLimit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
          });
        }
      };

      const interval = setInterval(trackMemory, 30000); // Every 30 seconds
      return () => clearInterval(interval);
    }
  }, []);

  // Track battery status (if available)
  useEffect(() => {
    if (typeof window !== 'undefined' && 'getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const trackBattery = () => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'battery_status', {
            level: Math.round(battery.level * 100),
            charging: battery.charging,
            charging_time: battery.chargingTime,
            discharging_time: battery.dischargingTime
          });
        }
        };

        battery.addEventListener('levelchange', trackBattery);
        battery.addEventListener('chargingchange', trackBattery);
        trackBattery(); // Initial tracking

        return () => {
          battery.removeEventListener('levelchange', trackBattery);
          battery.removeEventListener('chargingchange', trackBattery);
        };
      });
    }
  }, []);

  // Send metrics to analytics when they're available
  useEffect(() => {
    if (metrics && typeof window !== 'undefined' && (window as any).gtag) {
      // Send Core Web Vitals
      if (metrics.lcp) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: metrics.lcp
        });
      }
      if (metrics.fid) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FID',
          value: metrics.fid
        });
      }
      if (metrics.cls) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: metrics.cls
        });
      }

      // Send performance metrics
      (window as any).gtag('event', 'performance_metrics', {
        fcp: metrics.fcp,
        ttfb: metrics.ttfb,
        dom_load: metrics.domLoad,
        window_load: metrics.windowLoad
      });
    }
  }, [metrics]);

  // Track page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'page_visibility', {
          visible: !document.hidden,
          timestamp: Date.now()
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Track device capabilities
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const deviceInfo = {
        screen_width: screen.width,
        screen_height: screen.height,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,
        device_pixel_ratio: window.devicePixelRatio,
        hardware_concurrency: navigator.hardwareConcurrency,
        max_touch_points: navigator.maxTouchPoints,
        platform: navigator.platform,
        language: navigator.language,
        cookie_enabled: navigator.cookieEnabled,
        do_not_track: navigator.doNotTrack
      };

      (window as any).gtag('event', 'device_capabilities', deviceInfo);
    }
  }, []);

  // Track network status changes
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'network_status', {
        online: isOnline,
        connection_info: connectionInfo,
        timestamp: Date.now()
      });
    }
  }, [isOnline, connectionInfo]);

  // Track user engagement
  useEffect(() => {
    let startTime = Date.now();
    let isActive = true;

    const trackEngagement = () => {
      if (isActive && typeof window !== 'undefined' && (window as any).gtag) {
        const sessionDuration = Date.now() - startTime;
        (window as any).gtag('event', 'user_engagement', {
          session_duration: Math.round(sessionDuration / 1000),
          page_path: window.location.pathname
        });
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isActive = false;
        trackEngagement();
      } else {
        isActive = true;
        startTime = Date.now();
      }
    };

    const handleBeforeUnload = () => {
      trackEngagement();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      trackEngagement();
    };
  }, []);

  // Debug logging in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.group('🔍 Analytics Tracker Debug Info');
      console.log('Metrics:', metrics);
      console.log('Errors Count:', errorCount.current);
      console.log('Online Status:', isOnline);
      console.log('Connection Info:', connectionInfo);
      console.log('Recent Interactions:', interactions.slice(-5));
      console.groupEnd();
    }
  }, [metrics, errors, interactions, isOnline, connectionInfo]);

  return null; // This component doesn't render anything
};

export default AnalyticsTracker;