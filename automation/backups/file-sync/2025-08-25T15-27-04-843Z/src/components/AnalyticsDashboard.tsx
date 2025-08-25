import { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Eye, 
  Clock, 
  Target,
  RefreshCw
} from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

interface AnalyticsDashboardProps {
  className?: string;
  showRealTime?: boolean;
  refreshInterval?: number;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  className = '',
  showRealTime = true,
  refreshInterval = 5000
}) => {
  const { 
    isTracking, 
    currentSession, 
    performanceMetrics, 
    events, 
    getAnalyticsSummary,
    trackEvent,
    trackConversion
  } = useAnalytics({
    enableTracking: true,
    enablePerformanceTracking: true,
    enableUserBehaviorTracking: true,
    enableHeatmapTracking: false
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [analyticsSummary, setAnalyticsSummary] = useState<any>(null);

  // Auto-refresh analytics data
  useEffect(() => {
    if (!showRealTime) return;

    const interval = setInterval(() => {
      updateAnalyticsSummary();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [showRealTime, refreshInterval]);

  // Update analytics summary
  const updateAnalyticsSummary = () => {
    const summary = getAnalyticsSummary();
    if (summary) {
      setAnalyticsSummary(summary);
    }
  };

  // Update summary when events change
  useEffect(() => {
    updateAnalyticsSummary();
  }, [events, currentSession]);

  // Track dashboard interactions
  const handleDashboardInteraction = (action: string, metadata?: any) => {
    trackEvent('dashboard', action, 'dashboard_interaction', undefined, metadata);
  };

  // Track conversion goal
  const handleTrackConversion = () => {
    trackConversion('dashboard_engagement', 1, { timeRange: selectedTimeRange });
  };

  // Get events by category for chart
  const getEventsByCategory = () => {
    if (!analyticsSummary?.eventsByCategory) return [];
    
    return Object.entries(analyticsSummary.eventsByCategory).map(([category, count]) => ({
      category,
      count: count as number
    }));
  };

  // Get performance score
  const getPerformanceScore = () => {
    if (!performanceMetrics) return 0;
    
    let score = 100;
    
    // Deduct points for poor performance
    if (performanceMetrics.pageLoadTime > 3000) score -= 20;
    else if (performanceMetrics.pageLoadTime > 1000) score -= 10;
    
    if (performanceMetrics.firstContentfulPaint > 2000) score -= 15;
    else if (performanceMetrics.firstContentfulPaint > 1000) score -= 5;
    
    if (performanceMetrics.cumulativeLayoutShift > 0.1) score -= 25;
    else if (performanceMetrics.cumulativeLayoutShift > 0.05) score -= 10;
    
    return Math.max(0, score);
  };

  // Format duration
  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  // Format number with K/M suffix
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Analytics Dashboard
          </h3>
          <div className="flex items-center gap-2">
            {/* Tracking Status */}
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
              isTracking ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'
            }`}>
              <div className={`w-2 h-2 rounded-full ${isTracking ? 'bg-green-400' : 'bg-red-400'}`}></div>
              {isTracking ? 'Tracking' : 'Stopped'}
            </div>
            
            {/* Time Range Selector */}
            <select
              value={selectedTimeRange}
              onChange={(e) => {
                setSelectedTimeRange(e.target.value as any);
                handleDashboardInteraction('time_range_changed', { timeRange: e.target.value });
              }}
              className="px-2 py-1 bg-white/20 rounded text-xs focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <option value="1h">1 Hour</option>
              <option value="24h">24 Hours</option>
              <option value="7d">7 Days</option>
              <option value="30d">30 Days</option>
            </select>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label={isExpanded ? 'Collapse dashboard' : 'Expand dashboard'}
            >
              {isExpanded ? '−' : '+'}
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Session Duration */}
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsSummary ? formatDuration(analyticsSummary.sessionDuration) : 'N/A'}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Session Duration</div>
          </div>

          {/* Page Views */}
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Eye className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsSummary?.pageViews || 0}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Page Views</div>
          </div>

          {/* Total Events */}
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Activity className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatNumber(events.length)}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Total Events</div>
          </div>

          {/* Performance Score */}
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {getPerformanceScore()}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Performance</div>
          </div>
        </div>
      </div>

      {/* Real-time Events Feed */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <Activity className="w-4 h-4" />
          Real-time Events
          {showRealTime && (
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          )}
        </h4>
        
        <div className="space-y-2 max-h-32 overflow-y-auto">
          {events.slice(-5).reverse().map((event) => (
            <div key={event.id} className="flex items-center justify-between text-sm p-2 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${
                  event.category === 'interaction' ? 'bg-blue-500' :
                  event.category === 'performance' ? 'bg-green-500' :
                  event.category === 'error' ? 'bg-red-500' :
                  'bg-gray-500'
                }`}></span>
                <span className="text-gray-600 dark:text-gray-400">{event.category}</span>
                <span className="text-gray-800 dark:text-gray-200">{event.action}</span>
              </div>
              <span className="text-xs text-gray-500">
                {new Date(event.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
          
          {events.length === 0 && (
            <div className="text-center text-gray-500 text-sm py-4">
              No events tracked yet
            </div>
          )}
        </div>
      </div>

      {/* Detailed Analytics */}
      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800">
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Detailed Analytics</h4>
          
          {/* Performance Metrics */}
          {performanceMetrics && (
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Performance Metrics</h5>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300">Page Load:</span>
                  <span className="font-medium">{performanceMetrics.pageLoadTime.toFixed(0)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300">Time to Interactive:</span>
                  <span className="font-medium">{performanceMetrics.timeToInteractive.toFixed(0)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300">First Paint:</span>
                  <span className="font-medium">{performanceMetrics.firstContentfulPaint.toFixed(0)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300">Layout Shift:</span>
                  <span className="font-medium">{performanceMetrics.cumulativeLayoutShift.toFixed(3)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Events by Category */}
          <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Events by Category</h5>
            <div className="space-y-2">
              {getEventsByCategory().map((item) => (
                <div key={item.category} className="flex items-center justify-between">
                  <span className="text-green-700 dark:text-green-300 text-sm capitalize">
                    {item.category.replace('_', ' ')}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-green-200 dark:bg-green-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(item.count / Math.max(...getEventsByCategory().map(e => e.count))) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-green-700 dark:text-green-300 text-sm font-medium w-8 text-right">
                      {item.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Session Information */}
          {currentSession && (
            <div className="mb-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Session Details</h5>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Session ID:</span>
                  <span className="font-medium font-mono text-xs">{currentSession.id.slice(-8)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Device Type:</span>
                  <span className="font-medium capitalize">{currentSession.deviceInfo.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Screen:</span>
                  <span className="font-medium">{currentSession.deviceInfo.screen.width}×{currentSession.deviceInfo.screen.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Referrer:</span>
                  <span className="font-medium text-xs max-w-32 truncate">
                    {currentSession.referrer || 'Direct'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Controls */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex gap-2">
          <button
            onClick={() => {
              handleDashboardInteraction('refresh_clicked');
              updateAnalyticsSummary();
            }}
            className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh Data
          </button>
          
          <button
            onClick={() => {
              handleTrackConversion();
              handleDashboardInteraction('conversion_tracked');
            }}
            className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Target className="w-4 h-4" />
            Track Goal
          </button>
        </div>
      </div>
    </div>
  );
};