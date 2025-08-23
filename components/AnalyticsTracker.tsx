import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';

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
      // Google Analytics tracking
      if ((window as any).gtag) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }

      // Custom analytics tracking
      const trackPageView = () => {
        const pageData = {
          url: window.location.href,
          title: document.title,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        };

        // Send to analytics endpoint (if configured)
        if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
          fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pageData),
          }).catch(console.error);
        }

        // Store in localStorage for offline analytics
        const analytics = JSON.parse(localStorage.getItem('zionAnalytics') || '[]');
        analytics.push(pageData);
        if (analytics.length > 100) analytics.shift();
        localStorage.setItem('zionAnalytics', JSON.stringify(analytics));
      };

      trackPageView();
      window.addEventListener('popstate', trackPageView);
      return () => window.removeEventListener('popstate', trackPageView);
    }
  }, []);

  // Track user interactions
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const trackInteraction = (event: Event) => {
        const target = event.target as HTMLElement;
        const interactionData = {
          type: event.type,
          element: target.tagName.toLowerCase(),
          text: target.textContent?.slice(0, 100),
          timestamp: new Date().toISOString(),
          url: window.location.href,
        };

        // Send interaction data
        if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
          fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(interactionData),
          }).catch(console.error);
        }
      };

      // Track clicks, form submissions, and scroll depth
      document.addEventListener('click', trackInteraction);
      document.addEventListener('submit', trackInteraction);
      
      let scrollDepth = 0;
      const trackScroll = () => {
        const newScrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        if (newScrollDepth > scrollDepth && newScrollDepth % 25 === 0) {
          scrollDepth = newScrollDepth;
          trackInteraction(new Event('scroll') as any);
        }
      };

      window.addEventListener('scroll', trackScroll);
      
      return () => {
        document.removeEventListener('click', trackInteraction);
        document.removeEventListener('submit', trackInteraction);
        window.removeEventListener('scroll', trackScroll);
      };
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-black/90 backdrop-blur-lg border border-cyan-400/30 rounded-lg p-4 shadow-2xl max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Analytics
          </h3>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            onClick={() => setIsVisible(false)}
          >
            ×
          </motion.button>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-gray-800/50 rounded p-2">
              <div className="text-cyan-400 font-medium">{analyticsData.pageViews.toLocaleString()}</div>
              <div className="text-gray-400">Page Views</div>
            </div>
            <div className="bg-gray-800/50 rounded p-2">
              <div className="text-purple-400 font-medium">{analyticsData.uniqueVisitors.toLocaleString()}</div>
              <div className="text-gray-400">Visitors</div>
            </div>
            <div className="bg-gray-800/50 rounded p-2">
              <div className="text-emerald-400 font-medium">{analyticsData.sessionDuration}s</div>
              <div className="text-gray-400">Avg Session</div>
            </div>
            <div className="bg-gray-800/50 rounded p-2">
              <div className="text-orange-400 font-medium">{analyticsData.conversionRate}%</div>
              <div className="text-gray-400">Conversion</div>
            </div>
          </div>

          <div className="text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-400">Bounce Rate</span>
              <span className="text-cyan-400">{analyticsData.bounceRate}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${analyticsData.bounceRate}%` }}
              ></div>
            </div>
          </div>

          <div className="text-xs">
            <div className="text-gray-400 mb-2">Top Pages</div>
            <div className="space-y-1">
              {analyticsData.topPages.slice(0, 3).map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300 truncate">{page.page}</span>
                  <span className="text-cyan-400">{page.views.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
export default AnalyticsTracker;