import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsTrackerProps {
  trackingId?: string;
  enableDebug?: boolean;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ 
  trackingId = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
  enableDebug = false 
}) => {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && trackingId !== 'G-XXXXXXXXXX') {
      // Google Analytics 4
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      // Track page views on route changes
      const handleRouteChange = (url: string) => {
        gtag('config', trackingId, {
          page_title: document.title,
          page_location: url,
        });
        
        if (enableDebug) {
          console.log('Analytics: Page view tracked:', url);
        }
      };

      router.events.on('routeChangeComplete', handleRouteChange);
      
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [trackingId, router, enableDebug]);

  useEffect(() => {
    // Track user engagement metrics
    if (typeof window !== 'undefined') {
      let startTime = Date.now();
      let isActive = true;

      const trackEngagement = () => {
        if (isActive) {
          const timeSpent = Date.now() - startTime;
          
          // Track time spent on page
          if (timeSpent > 30000) { // 30 seconds
            if (enableDebug) {
              console.log('Analytics: User engaged for', Math.round(timeSpent / 1000), 'seconds');
            }
          }
        }
      };

      const handleVisibilityChange = () => {
        if (document.hidden) {
          isActive = false;
        } else {
          isActive = true;
          startTime = Date.now();
        }
      };

      const handleBeforeUnload = () => {
        const timeSpent = Date.now() - startTime;
        if (enableDebug) {
          console.log('Analytics: Session duration:', Math.round(timeSpent / 1000), 'seconds');
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('beforeunload', handleBeforeUnload);
      
      const interval = setInterval(trackEngagement, 10000); // Check every 10 seconds

      return () => {
        clearInterval(interval);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [enableDebug]);

  // Return null as this is a utility component
  return null;
};

export default AnalyticsTracker;