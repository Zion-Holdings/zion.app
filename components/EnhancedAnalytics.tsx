import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, TrendingDown, Users, Eye, MousePointer, 
  Clock, Target, Zap, Settings, X, Maximize2, Minimize2, 
  RefreshCw, Download, Share2, Filter, Search, AlertTriangle,
  CheckCircle, Info, Activity, Globe, Smartphone, Monitor
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{ path: string; views: number; conversion: number }>;
  userBehavior: Array<{ action: string; count: number; trend: 'up' | 'down' | 'stable' }>;
  deviceBreakdown: Array<{ device: string; percentage: number; trend: 'up' | 'down' | 'stable' }>;
  geographicData: Array<{ country: string; visitors: number; conversion: number }>;
  realTimeUsers: number;
  currentPage: string;
  userJourney: Array<{ step: string; users: number; dropoff: number }>;
}

interface ConversionFunnel {
  stage: string;
  users: number;
  conversion: number;
  dropoff: number;
  improvement: string;
}

interface ABTest {
  id: string;
  name: string;
  variant: 'A' | 'B';
  conversion: number;
  confidence: number;
  status: 'running' | 'completed' | 'paused';
}

interface EnhancedAnalyticsProps {
  isVisible?: boolean;
  onToggle?: (visible: boolean) => void;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({ 
  isVisible = false, 
  onToggle 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [autoRefresh, setAutoRefresh] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Mock data generation for demonstration
  const generateMockData = useCallback(() => {
    const mockData: AnalyticsData = {
      pageViews: Math.floor(Math.random() * 10000) + 5000,
      uniqueVisitors: Math.floor(Math.random() * 5000) + 2000,
      bounceRate: Math.random() * 30 + 20,
      avgSessionDuration: Math.floor(Math.random() * 300) + 120,
      conversionRate: Math.random() * 5 + 2,
      topPages: [
        { path: '/', views: 2500, conversion: 3.2 },
        { path: '/services', views: 1800, conversion: 4.1 },
        { path: '/about', views: 1200, conversion: 2.8 },
        { path: '/contact', views: 900, conversion: 5.5 },
        { path: '/pricing', views: 800, conversion: 6.2 }
      ],
      userBehavior: [
        { action: 'Page View', count: 8500, trend: 'up' },
        { action: 'Button Click', count: 3200, trend: 'up' },
        { action: 'Form Start', count: 1800, trend: 'stable' },
        { action: 'Form Complete', count: 1200, trend: 'down' },
        { action: 'Scroll Depth', count: 6500, trend: 'up' }
      ],
      deviceBreakdown: [
        { device: 'Desktop', percentage: 45, trend: 'stable' },
        { device: 'Mobile', percentage: 40, trend: 'up' },
        { device: 'Tablet', percentage: 15, trend: 'down' }
      ],
      geographicData: [
        { country: 'United States', visitors: 3500, conversion: 3.8 },
        { country: 'Canada', visitors: 800, conversion: 4.2 },
        { country: 'United Kingdom', visitors: 600, conversion: 3.5 },
        { country: 'Germany', visitors: 400, conversion: 4.8 },
        { country: 'Australia', visitors: 300, conversion: 3.9 }
      ],
      realTimeUsers: Math.floor(Math.random() * 100) + 20,
      currentPage: window.location.pathname,
      userJourney: [
        { step: 'Landing Page', users: 1000, dropoff: 0 },
        { step: 'Service Browse', users: 750, dropoff: 250 },
        { step: 'Pricing View', users: 500, dropoff: 250 },
        { step: 'Contact Form', users: 300, dropoff: 200 },
        { step: 'Form Submit', users: 180, dropoff: 120 }
      ]
    };

    setAnalyticsData(mockData);
    setLastUpdate(new Date());
  }, []);





  // Load analytics data
  const loadAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      generateMockData();

    } catch (error) {
      console.error('Failed to load analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [generateMockData]);

  // Auto-refresh functionality
  useEffect(() => {
    if (autoRefresh && isVisible) {
      intervalRef.current = setInterval(loadAnalyticsData, 30000); // Every 30 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRefresh, isVisible, loadAnalyticsData]);

  // Initial data load
  useEffect(() => {
    if (isVisible) {
      loadAnalyticsData();
    }
  }, [isVisible, loadAnalyticsData]);

  // Export analytics data
  const exportData = useCallback((format: 'csv' | 'json' | 'pdf') => {
    if (!analyticsData) return;

    let data: string;
    let filename: string;
    let mimeType: string;

    switch (format) {
      case 'csv':
        data = convertToCSV(analyticsData);
        filename = `analytics-${selectedTimeframe}-${new Date().toISOString().split('T')[0]}.csv`;
        mimeType = 'text/csv';
        break;
      case 'json':
        data = JSON.stringify(analyticsData, null, 2);
        filename = `analytics-${selectedTimeframe}-${new Date().toISOString().split('T')[0]}.json`;
        mimeType = 'application/json';
        break;
      case 'pdf':
        // In a real implementation, you'd generate a PDF
        data = 'PDF generation would be implemented here';
        filename = `analytics-${selectedTimeframe}-${new Date().toISOString().split('T')[0]}.pdf`;
        mimeType = 'application/pdf';
        break;
    }

    const blob = new (window as any).Blob([data], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [analyticsData, selectedTimeframe]);

  // Convert data to CSV
  const convertToCSV = (data: AnalyticsData): string => {
    const headers = ['Metric', 'Value'];
    const rows = [
      ['Page Views', data.pageViews],
      ['Unique Visitors', data.uniqueVisitors],
      ['Bounce Rate', `${data.bounceRate.toFixed(2)}%`],
      ['Avg Session Duration', `${data.avgSessionDuration}s`],
      ['Conversion Rate', `${data.conversionRate.toFixed(2)}%`]
    ];

    return [headers, ...rows].map(row => row.join(',')).join('\n');
  };



  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleAutoRefresh = () => setAutoRefresh(!autoRefresh);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 left-4 z-50"
    >
      <div className="bg-black/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl shadow-blue-500/25 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-blue-500/20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse" />
            <h3 className="text-white font-semibold text-sm">Analytics</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleAutoRefresh}
              className={`p-1.5 rounded-lg transition-colors ${
                autoRefresh 
                  ? 'bg-blue-500/20 text-blue-400' 
                  : 'bg-white/10 text-white/60 hover:bg-white/20'
              }`}
              title={autoRefresh ? 'Disable auto-refresh' : 'Enable auto-refresh'}
            >
              <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={toggleExpanded}
              className="p-1.5 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition-colors"
              title={isExpanded ? 'Minimize' : 'Expand'}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => onToggle?.(false)}
              className="p-1.5 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-64'}`}>
          <div className="p-4 space-y-4">
            {/* Timeframe and Metric Selection */}
            <div className="flex gap-2">
              {(['1h', '24h', '7d', '30d'] as const).map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setSelectedTimeframe(timeframe)}
                  className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                    selectedTimeframe === timeframe
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  {timeframe}
                </button>
              ))}
            </div>

            {/* Key Metrics */}
            {analyticsData && (
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-white/60">Page Views</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {analyticsData.pageViews.toLocaleString()}
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-white/60">Unique Visitors</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {analyticsData.uniqueVisitors.toLocaleString()}
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-white/60">Conversion Rate</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {analyticsData.conversionRate.toFixed(2)}%
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-white/60">Avg Session</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {Math.floor(analyticsData.avgSessionDuration / 60)}m {analyticsData.avgSessionDuration % 60}s
                  </div>
                </div>
              </div>
            )}

            {/* Real-time Users */}
            {analyticsData && (
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-3 border border-blue-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
                    <span className="text-white/80 text-sm">Real-time Users</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {analyticsData.realTimeUsers}
                  </div>
                </div>
                <div className="text-xs text-white/60 mt-1">
                  Currently on: {analyticsData.currentPage}
                </div>
              </div>
            )}

            {/* Top Pages */}
            {analyticsData && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white">Top Pages</h4>
                <div className="space-y-2 max-h-24 overflow-y-auto">
                  {analyticsData.topPages.slice(0, 3).map((page, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-white/80 truncate flex-1">{page.path}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-white/60">{page.views.toLocaleString()}</span>
                        <span className="text-green-400">{page.conversion}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Last Update */}
            <div className="text-center text-xs text-white/40">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-3 border-t border-blue-500/20 bg-white/5">
          <div className="flex gap-2">
            <button
              onClick={() => exportData('csv')}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-600"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
            
            <button
              onClick={loadAnalyticsData}
              disabled={isLoading}
              className="px-3 py-2 bg-white/10 text-white/60 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
              title="Refresh Data"
            >
              {isLoading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedAnalytics;