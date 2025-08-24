import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Clock, 
  TrendingUp, 
  Eye,
  Activity,
  X,
  Play,
  Pause,
  Download
} from 'lucide-react';

interface UserBehavior {
  pageViews: number;
  uniqueVisitors: number;
  averageSessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: Array<{ path: string; views: number }>;
  userJourney: Array<{ page: string; timestamp: Date; action: string }>;
}

interface AnalyticsEvent {
  type: 'pageview' | 'click' | 'scroll' | 'form_submit' | 'download' | 'share';
  timestamp: Date;
  data: Record<string, unknown>;
}

const EnhancedAnalyticsTracker: React.FC = () => {
  const [isTracking, setIsTracking] = useState(true);
  const [showPanel, setShowPanel] = useState(false);
  const [userBehavior, setUserBehavior] = useState<UserBehavior>({
    pageViews: 0,
    uniqueVisitors: 0,
    averageSessionDuration: 0,
    bounceRate: 0,
    conversionRate: 0,
    topPages: [],
    userJourney: []
  });
  
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [sessionStart] = useState<Date>(new Date());
  const [currentPage, setCurrentPage] = useState<string>('');

  // Initialize analytics tracking
  useEffect(() => {
    if (!isTracking) return;

    // Track page views
    const trackPageView = () => {
      const path = window.location.pathname;
      setCurrentPage(path);
      
      const event: AnalyticsEvent = {
        type: 'pageview',
        timestamp: new Date(),
        data: { path, referrer: document.referrer }
      };
      
      setEvents(prev => [...prev, event]);
      setUserBehavior(prev => ({
        ...prev,
        pageViews: prev.pageViews + 1,
        topPages: updateTopPages(prev.topPages, path)
      }));
    };

    // Track clicks
    const trackClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const text = target.textContent?.slice(0, 50) || '';
      const href = (target as HTMLAnchorElement).href || '';
      
      const clickEvent: AnalyticsEvent = {
        type: 'click',
        timestamp: new Date(),
        data: { tagName, text, href, x: event.clientX, y: event.clientY }
      };
      
      setEvents(prev => [...prev, clickEvent]);
    };

    // Track scroll depth
    let maxScrollDepth = 0;
    const trackScroll = () => {
      const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        if (scrollDepth % 25 === 0) { // Track every 25%
          const scrollEvent: AnalyticsEvent = {
            type: 'scroll',
            timestamp: new Date(),
            data: { depth: scrollDepth, page: currentPage }
          };
          setEvents(prev => [...prev, scrollEvent]);
        }
      }
    };

    // Track form submissions
    const trackFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const formEvent: AnalyticsEvent = {
        type: 'form_submit',
        timestamp: new Date(),
        data: { 
          formId: form.id || 'unknown',
          formAction: form.action,
          formMethod: form.method
        }
      };
      
      setEvents(prev => [...prev, formEvent]);
      setUserBehavior(prev => ({
        ...prev,
        conversionRate: prev.conversionRate + 0.1
      }));
    };

    // Track downloads
    const trackDownload = (event: Event) => {
      const link = event.target as HTMLAnchorElement;
      const downloadEvent: AnalyticsEvent = {
        type: 'download',
        timestamp: new Date(),
        data: { 
          filename: link.download || link.href.split('/').pop(),
          url: link.href
        }
      };
      
      setEvents(prev => [...prev, downloadEvent]);
    };

    // Track social shares
    const trackShare = (event: Event) => {
      const shareEvent: AnalyticsEvent = {
        type: 'share',
        timestamp: new Date(),
        data: { 
          platform: (event.target as HTMLElement).getAttribute('data-platform') || 'unknown',
          page: currentPage
        }
      };
      
      setEvents(prev => [...prev, shareEvent]);
    };

    // Add event listeners
    document.addEventListener('click', trackClick);
    window.addEventListener('scroll', trackScroll);
    document.addEventListener('submit', trackFormSubmit);
    
    // Track downloads and shares
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.hasAttribute('download')) {
        trackDownload(e);
      }
      if (target.hasAttribute('data-share')) {
        trackShare(e);
      }
    });

    // Initial page view
    trackPageView();

    // Cleanup
    return () => {
      document.removeEventListener('click', trackClick);
      window.removeEventListener('scroll', trackScroll);
      document.removeEventListener('submit', trackFormSubmit);
    };
  }, [isTracking, currentPage]);

  // Update top pages
  const updateTopPages = (topPages: Array<{ path: string; views: number }>, path: string) => {
    const existing = topPages.find(p => p.path === path);
    if (existing) {
      existing.views += 1;
    } else {
      topPages.push({ path, views: 1 });
    }
    
    return topPages
      .sort((a, b) => b.views - a.views)
      .slice(0, 5);
  };

  // Calculate session duration
  useEffect(() => {
    const interval = setInterval(() => {
      const duration = Math.floor((Date.now() - sessionStart.getTime()) / 1000);
      setUserBehavior(prev => ({
        ...prev,
        averageSessionDuration: duration
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [sessionStart]);

  // Simulate unique visitors
  useEffect(() => {
    const visitorId = localStorage.getItem('visitor_id');
    if (!visitorId) {
      const newId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('visitor_id', newId);
      setUserBehavior(prev => ({
        ...prev,
        uniqueVisitors: prev.uniqueVisitors + 1
      }));
    }
  }, []);

  // Toggle tracking
  const toggleTracking = () => {
    setIsTracking(!isTracking);
  };

  // Export analytics data
  const exportAnalytics = () => {
    const data = {
      userBehavior,
      events,
      sessionStart,
      currentPage
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Clear analytics data
  const clearAnalytics = () => {
    setEvents([]);
    setUserBehavior(prev => ({
      ...prev,
      pageViews: 0,
      topPages: [],
      userJourney: []
    }));
  };

  return (
    <>
      {/* Analytics Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-96 bg-black/95 backdrop-blur-xl border-l border-green-500/30 z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6" />
                  Analytics
                </h2>
                <button
                  onClick={() => setShowPanel(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                  aria-label="Close analytics panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tracking Status */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl border border-green-500/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-300">Tracking Status</span>
                  <button
                    onClick={toggleTracking}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isTracking 
                        ? 'bg-green-600 text-white' 
                        : 'bg-red-600 text-white'
                    }`}
                  >
                    {isTracking ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-xs text-gray-400">
                  {isTracking ? 'Analytics tracking is active' : 'Analytics tracking is paused'}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-2 mb-1">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-gray-300">Page Views</span>
                    </div>
                    <p className="text-xl font-bold text-white">{userBehavior.pageViews}</p>
                  </div>
                  
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">Unique Visitors</span>
                    </div>
                    <p className="text-xl font-bold text-white">{userBehavior.uniqueVisitors}</p>
                  </div>
                  
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-300">Session Duration</span>
                    </div>
                    <p className="text-xl font-bold text-white">{Math.floor(userBehavior.averageSessionDuration / 60)}m {userBehavior.averageSessionDuration % 60}s</p>
                  </div>
                  
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-300">Conversion Rate</span>
                    </div>
                    <p className="text-xl font-bold text-white">{userBehavior.conversionRate.toFixed(1)}%</p>
                  </div>
                </div>
              </div>

              {/* Top Pages */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Top Pages</h3>
                <div className="space-y-2">
                  {userBehavior.topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-800 rounded-lg">
                      <span className="text-sm text-gray-300 truncate max-w-32">{page.path}</span>
                      <span className="text-sm text-green-400 font-medium">{page.views}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Events */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Recent Events</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {events.slice(-10).reverse().map((event, index) => (
                    <div key={index} className="p-2 bg-gray-800 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center gap-2 mb-1">
                        <Activity className="w-3 h-3 text-blue-400" />
                        <span className="text-xs text-gray-400">{event.type}</span>
                        <span className="text-xs text-gray-500">
                          {event.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-xs text-gray-300">
                        {JSON.stringify(event.data).slice(0, 60)}...
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={exportAnalytics}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export Data
                </button>
                
                <button
                  onClick={clearAnalytics}
                  className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear Data
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed top-40 right-4 z-40 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        aria-label="Toggle analytics panel"
      >
        <BarChart3 className="w-5 h-5" />
        {showPanel ? 'Hide' : 'Show'} Analytics
      </button>
    </>
  );
};

export default EnhancedAnalyticsTracker;