import React, { useEffect, useRef } from 'react';

// Global type declarations for browser APIs
declare global {
  interface PerformanceEventTiming extends PerformanceEntry {
    processingStart: number;
    startTime: number;
    target?: EventTarget;
  }

  interface LayoutShift extends PerformanceEntry {
    value: number;
    hadRecentInput: boolean;
  }

  interface NetworkInformation extends EventTarget {
    effectiveType: string;
    downlink: number;
    rtt: number;
  }

  interface BatteryManager extends EventTarget {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
  }

  interface Window {
    gtag?: (...args: unknown[]) => void;
  }

  // Add missing global types
  var EventTarget: {
    prototype: EventTarget;
    new(): EventTarget;
  };

  var Performance: {
    prototype: Performance;
    new(): Performance;
  };

  var Navigator: {
    prototype: Navigator;
    new(): Navigator;
  };

  var Node: {
    prototype: Node;
    new(): Node;
  };

  // Extend existing interfaces
  interface Performance {
    memory?: {
      totalJSHeapSize: number;
      usedJSHeapSize: number;
      jsHeapSizeLimit: number;
    };
  }

  interface Navigator {
    getBattery(): Promise<BatteryManager>;
    connection?: NetworkInformation;
    hardwareConcurrency?: number;
  }
}

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  domContentLoaded: number;
  fullPageLoad: number;
}

interface DeviceCapabilities {
  memory: {
    totalJSHeapSize: number;
    usedJSHeapSize: number;
    jsHeapSizeLimit: number;
  } | null;
  hardwareConcurrency: number;
  networkInfo: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  } | null;
  battery: {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
  } | null;
  viewport: {
    width: number;
    height: number;
    devicePixelRatio: number;
  };
}

interface UserInteraction {
  clicks: number;
  scrolls: number;
  inputs: number;
  focus: number;
  blur: number;
  submit: number;
  scrollDepth: number;
  sessionStart: number;
  timeOnPage: number;
}

const AnalyticsTracker: React.FC = () => {
  const performanceMetrics = useRef<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
    domContentLoaded: 0,
    fullPageLoad: 0
  });

  const deviceCapabilities = useRef<DeviceCapabilities>({
    memory: null,
    hardwareConcurrency: navigator.hardwareConcurrency || 0,
    networkInfo: null,
    battery: null,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1
    }
  });

  const userInteraction = useRef<UserInteraction>({
    clicks: 0,
    scrolls: 0,
    inputs: 0,
    focus: 0,
    blur: 0,
    submit: 0,
    scrollDepth: 0,
    sessionStart: Date.now(),
    timeOnPage: 0
  });

  const sendAnalytics = (event: string, data: unknown) => {
    // In development, log to console
    if (process.env.NODE_ENV === 'development') {
      // Development logging
    }

    // In production, send to analytics service
    if (process.env.NODE_ENV === 'production') {
      try {
        // Send to Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', event, {
            value: data,
            timestamp: Date.now()
          });
        }

        // Send to custom analytics endpoint
        // fetch('/api/analytics', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ event, data, timestamp: Date.now() })
        // });
      } catch {
        // Silently handle errors in production
      }
    }
  };

  useEffect(() => {
    // Track Core Web Vitals
    const trackLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            performanceMetrics.current.lcp = lastEntry.startTime;
            sendAnalytics('lcp', performanceMetrics.current.lcp);
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }
    };

    const trackFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const firstInputEntry = entry as PerformanceEventTiming;
            performanceMetrics.current.fid = firstInputEntry.processingStart - firstInputEntry.startTime;
            sendAnalytics('fid', performanceMetrics.current.fid);
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      }
    };

    const trackCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const layoutShiftEntry = entry as LayoutShift;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
              performanceMetrics.current.cls = clsValue;
              sendAnalytics('cls', performanceMetrics.current.cls);
            }
          });
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    const trackFCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            performanceMetrics.current.fcp = entry.startTime;
            sendAnalytics('fcp', performanceMetrics.current.fcp);
          });
        });
        observer.observe({ entryTypes: ['first-contentful-paint'] });
      }
    };

    const trackTTFB = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              performanceMetrics.current.ttfb = navEntry.responseStart - navEntry.requestStart;
              sendAnalytics('ttfb', performanceMetrics.current.ttfb);
            }
          });
        });
        observer.observe({ entryTypes: ['navigation'] });
      }
    };

    const trackLoadTimes = () => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          performanceMetrics.current.domContentLoaded = performance.now();
          sendAnalytics('dom_content_loaded', performanceMetrics.current.domContentLoaded);
        });
      } else {
        performanceMetrics.current.domContentLoaded = performance.now();
        sendAnalytics('dom_content_loaded', performanceMetrics.current.domContentLoaded);
      }

      window.addEventListener('load', () => {
        performanceMetrics.current.fullPageLoad = performance.now();
        sendAnalytics('full_page_load', performanceMetrics.current.fullPageLoad);
      });
    };

    // Track device capabilities
    const trackDeviceCapabilities = () => {
      // Memory info
      if ('memory' in performance) {
        const memory = (performance as Performance & { memory: DeviceCapabilities['memory'] }).memory;
        deviceCapabilities.current.memory = memory;
        sendAnalytics('device_memory', memory);
      }

      // Network info
      if ('connection' in navigator) {
        const connection = (navigator as Navigator & { connection: NetworkInformation }).connection;
        deviceCapabilities.current.networkInfo = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt
        };
        sendAnalytics('network_info', deviceCapabilities.current.networkInfo);
      }

      // Battery info
      if ('getBattery' in navigator) {
        navigator.getBattery().then((battery) => {
          deviceCapabilities.current.battery = {
            charging: battery.charging,
            chargingTime: battery.chargingTime,
            dischargingTime: battery.dischargingTime,
            level: battery.level
          };
          sendAnalytics('battery_info', deviceCapabilities.current.battery);
        });
      }
    };

    // Track user interactions
    const trackUserInteractions = () => {
      const trackClick = () => {
        userInteraction.current.clicks++;
        sendAnalytics('user_click', userInteraction.current.clicks);
      };

      const trackScroll = () => {
        userInteraction.current.scrolls++;
        const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        userInteraction.current.scrollDepth = Math.max(userInteraction.current.scrollDepth, scrollDepth);
        sendAnalytics('user_scroll', { count: userInteraction.current.scrolls, depth: userInteraction.current.scrollDepth });
      };

      const trackInput = () => {
        userInteraction.current.inputs++;
        sendAnalytics('user_input', userInteraction.current.inputs);
      };

      const trackFocus = () => {
        userInteraction.current.focus++;
        sendAnalytics('user_focus', userInteraction.current.focus);
      };

      const trackBlur = () => {
        userInteraction.current.blur++;
        sendAnalytics('user_blur', userInteraction.current.blur);
      };

      const trackSubmit = () => {
        userInteraction.current.submit++;
        sendAnalytics('user_submit', userInteraction.current.submit);
      };

      document.addEventListener('click', trackClick);
      document.addEventListener('scroll', trackScroll);
      document.addEventListener('input', trackInput);
      document.addEventListener('focus', trackFocus, true);
      document.addEventListener('blur', trackBlur, true);
      document.addEventListener('submit', trackSubmit, true);

      return () => {
        document.removeEventListener('click', trackClick);
        document.removeEventListener('scroll', trackScroll);
        document.removeEventListener('input', trackInput);
        document.removeEventListener('focus', trackFocus, true);
        document.removeEventListener('blur', trackBlur, true);
        document.removeEventListener('submit', trackSubmit, true);
      };
    };

    // Track session duration
    const trackSessionDuration = () => {
      const updateTimeOnPage = () => {
        userInteraction.current.timeOnPage = Date.now() - userInteraction.current.sessionStart;
        sendAnalytics('time_on_page', userInteraction.current.timeOnPage);
      };

      const interval = setInterval(updateTimeOnPage, 30000); // Update every 30 seconds

      return () => clearInterval(interval);
    };

    // Initialize tracking
    trackLCP();
    trackFID();
    trackCLS();
    trackFCP();
    trackTTFB();
    trackLoadTimes();
    trackDeviceCapabilities();
    const cleanupInteractions = trackUserInteractions();
    const cleanupSession = trackSessionDuration();

    // Cleanup
    return () => {
      cleanupInteractions();
      cleanupSession();
    };
  }, []);

  return null;
};

export default AnalyticsTracker;