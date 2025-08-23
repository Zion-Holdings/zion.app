import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Shield
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ path: string; views: number }>;
  deviceTypes: Array<{ type: string; percentage: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
}

interface EnhancedAnalyticsProps {
  showUI?: boolean;
  enableTracking?: boolean;
  privacyMode?: boolean;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  showUI = false,
  enableTracking = true,
  privacyMode = true
}) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    deviceTypes: [],
    trafficSources: []
  });

  const [isTracking, setIsTracking] = useState(enableTracking);
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(false);

  useEffect(() => {
    if (!enableTracking || !isTracking) return;

    // Initialize analytics
    initializeAnalytics();
    
    // Track page view
    trackPageView();
    
    // Track user behavior
    trackUserBehavior();
    
    // Set up event listeners
    setupEventListeners();
    
    return () => {
      cleanupEventListeners();
    };
  }, [enableTracking, isTracking]);

  const initializeAnalytics = () => {
    if (typeof window === 'undefined') return;
    
    // Initialize with privacy-first approach
    if (privacyMode) {
      // Use localStorage to respect user preferences
      const userConsent = localStorage.getItem('analytics-consent');
      if (userConsent === 'false') {
        setIsTracking(false);
        return;
      }
    }
    
    // Set up basic tracking
    // Analytics initialized with privacy mode
  };

  const trackPageView = () => {
    if (!isTracking) return;
    
    const currentPath = window.location.pathname;
    const timestamp = Date.now();
    
    // Store in localStorage for privacy-first analytics
    const pageViews = JSON.parse(localStorage.getItem('page-views') || '[]');
    pageViews.push({ path: currentPath, timestamp });
    
    // Keep only last 100 page views for privacy
    if (pageViews.length > 100) {
      pageViews.splice(0, pageViews.length - 100);
    }
    
    localStorage.setItem('page-views', JSON.stringify(pageViews));
    
    // Update analytics data
    updateAnalyticsData();
  };

  const trackUserBehavior = () => {
    if (!isTracking) return;
    
    // Track scroll depth
    let maxScrollDepth = 0;
    const trackScroll = () => {
      const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);
    };
    
    window.addEventListener('scroll', trackScroll);
    
    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Date.now() - startTime;
      localStorage.setItem('time-on-page', timeOnPage.toString());
    };
    
    window.addEventListener('beforeunload', trackTimeOnPage);
    
    // Track clicks
    const trackClicks = (e: Event) => {
      const target = e.target as HTMLElement;
      const clickData = {
        element: target.tagName.toLowerCase(),
        text: target.textContent?.slice(0, 50) || '',
        timestamp: Date.now()
      };
      
      const clicks = JSON.parse(localStorage.getItem('user-clicks') || '[]');
      clicks.push(clickData);
      
      if (clicks.length > 50) {
        clicks.splice(0, clicks.length - 50);
      }
      
      localStorage.setItem('user-clicks', JSON.stringify(clicks));
    };
    
    document.addEventListener('click', trackClicks);
  };

  const setupEventListeners = () => {
    if (typeof window === 'undefined') return;
    
    // Track performance metrics
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
            
            localStorage.setItem('page-load-time', loadTime.toString());
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
    }
  };

  const cleanupEventListeners = () => {
    // Cleanup would go here if needed
  };

  const updateAnalyticsData = () => {
    if (typeof window === 'undefined') return;
    
    try {
      const pageViews = JSON.parse(localStorage.getItem('page-views') || '[]');
      const timeOnPage = parseInt(localStorage.getItem('time-on-page') || '0');
      
      // Calculate analytics from stored data
      const uniquePaths = [...new Set(pageViews.map((pv: { path: string; timestamp: number }) => pv.path))];
      const totalViews = pageViews.length;
      
      // Calculate bounce rate (single page sessions)
      const singlePageSessions = pageViews.filter((pv: { path: string; timestamp: number }, index: number) => {
        if (index === 0) return false;
        const timeDiff = pv.timestamp - pageViews[index - 1].timestamp;
        return timeDiff > 300000; // 5 minutes
      }).length;
      
      const bounceRate = totalViews > 0 ? (singlePageSessions / totalViews) * 100 : 0;
      
      // Get top pages
      const pageCounts = pageViews.reduce((acc: Record<string, number>, pv: { path: string; timestamp: number }) => {
        acc[pv.path] = (acc[pv.path] || 0) + 1;
        return acc;
      }, {});
      
      const topPages = Object.entries(pageCounts)
        .map(([path, views]) => ({ path, views: views as number }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 5);
      
      // Device type detection
      const deviceType = getDeviceType();
      const deviceTypes = [
        { type: 'Desktop', percentage: deviceType === 'desktop' ? 60 : 20 },
        { type: 'Mobile', percentage: deviceType === 'mobile' ? 60 : 20 },
        { type: 'Tablet', percentage: deviceType === 'tablet' ? 60 : 20 }
      ];
      
      // Traffic sources (simulated for privacy)
      const trafficSources = [
        { source: 'Direct', percentage: 40 },
        { source: 'Organic Search', percentage: 35 },
        { source: 'Social Media', percentage: 15 },
        { source: 'Referral', percentage: 10 }
      ];
      
      setAnalyticsData({
        pageViews: totalViews,
        uniqueVisitors: uniquePaths.length,
        bounceRate: Math.round(bounceRate),
        avgSessionDuration: Math.round(timeOnPage / 1000),
        topPages,
        deviceTypes,
        trafficSources
      });
    } catch (error) {
      // Error updating analytics data
    }
  };

  const getDeviceType = (): string => {
    if (typeof window === 'undefined') return 'desktop';
    
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
      return /ipad/i.test(userAgent) ? 'tablet' : 'mobile';
    }
    return 'desktop';
  };

  const toggleTracking = () => {
    const newTrackingState = !isTracking;
    setIsTracking(newTrackingState);
    
    if (newTrackingState) {
      localStorage.setItem('analytics-consent', 'true');
      initializeAnalytics();
    } else {
      localStorage.setItem('analytics-consent', 'false');
      // Clear stored data
      localStorage.removeItem('page-views');
      localStorage.removeItem('user-clicks');
      localStorage.removeItem('time-on-page');
      localStorage.removeItem('page-load-time');
    }
  };

  const exportAnalytics = () => {
    const dataStr = JSON.stringify(analyticsData, null, 2);
    const dataBlob = new window.Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'analytics-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!showUI) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 z-50 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-xl p-4 max-w-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          <h3 className="text-sm font-semibold text-gray-900">Analytics</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleTracking}
            className={`w-3 h-3 rounded-full transition-colors ${
              isTracking ? 'bg-green-500' : 'bg-red-500'
            }`}
            title={isTracking ? 'Tracking enabled' : 'Tracking disabled'}
          />
          <button
            onClick={() => setShowPrivacyNotice(!showPrivacyNotice)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Shield className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-2 bg-blue-50 rounded">
            <div className="text-lg font-bold text-blue-600">{analyticsData.pageViews}</div>
            <div className="text-xs text-gray-600">Page Views</div>
          </div>
          <div className="text-center p-2 bg-green-50 rounded">
            <div className="text-lg font-bold text-green-600">{analyticsData.uniqueVisitors}</div>
            <div className="text-xs text-gray-600">Unique Visitors</div>
          </div>
        </div>

        {/* Top Pages */}
        {analyticsData.topPages.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-gray-700 mb-2">Top Pages</h4>
            <div className="space-y-1">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="flex justify-between text-xs">
                  <span className="text-gray-600 truncate">{page.path}</span>
                  <span className="font-medium text-gray-800">{page.views}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Device Types */}
        <div>
          <h4 className="text-xs font-semibold text-gray-700 mb-2">Device Types</h4>
          <div className="space-y-1">
            {analyticsData.deviceTypes.map((device, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <span className="text-gray-600">{device.type}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${device.percentage}%` }}
                    />
                  </div>
                  <span className="text-gray-800 w-8 text-right">{device.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2 pt-2 border-t border-gray-100">
          <button
            onClick={exportAnalytics}
            className="flex-1 px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Export Data
          </button>
          <button
            onClick={updateAnalyticsData}
            className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Privacy Notice */}
      <AnimatePresence>
        {showPrivacyNotice && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800"
          >
            <div className="flex items-start space-x-2">
              <Shield className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Privacy-First Analytics</p>
                <p>All data is stored locally in your browser. No personal information is sent to external servers.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EnhancedAnalytics;