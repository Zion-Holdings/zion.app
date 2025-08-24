'use client';

import React, { useEffect, useState } from 'react';
import { BarChart3, Users, Eye, MousePointer, TrendingUp, Clock } from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  averageSessionDuration: number;
  bounceRate: number;
  topPages: Array<{ page: string; views: number }>;
  userEngagement: number;
}

const Analytics: React.FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    averageSessionDuration: 0,
    bounceRate: 0,
    topPages: [],
    userEngagement: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('24h');

  useEffect(() => {
    // Simulate analytics data
    const mockData: AnalyticsData = {
      pageViews: Math.floor(Math.random() * 10000) + 5000,
      uniqueVisitors: Math.floor(Math.random() * 3000) + 1500,
      averageSessionDuration: Math.floor(Math.random() * 300) + 120,
      bounceRate: Math.random() * 40 + 20,
      topPages: [
        { page: '/', views: Math.floor(Math.random() * 5000) + 2000 },
        { page: '/about', views: Math.floor(Math.random() * 2000) + 1000 },
        { page: '/services', views: Math.floor(Math.random() * 1500) + 800 },
        { page: '/contact', views: Math.floor(Math.random() * 1000) + 500 },
      ],
      userEngagement: Math.random() * 100,
    };

    setAnalytics(mockData);
  }, [timeRange]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getMetricColor = (value: number, threshold: number, reverse: boolean = false) => {
    const isGood = reverse ? value <= threshold : value >= threshold;
    return isGood ? 'text-green-600' : 'text-yellow-600';
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Analytics Dashboard"
      >
        <BarChart3 className="w-5 h-5" />
      </button>

      {isVisible && (
        <div className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-96 border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Analytics Dashboard
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ×
            </button>
          </div>

          {/* Time Range Selector */}
          <div className="flex space-x-2 mb-6">
            {(['24h', '7d', '30d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 text-xs rounded-md transition-colors ${
                  timeRange === range
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Eye className="w-4 h-4 text-blue-500" />
                <span className="text-xs text-gray-600 dark:text-gray-400">Page Views</span>
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatNumber(analytics.pageViews)}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-4 h-4 text-green-500" />
                <span className="text-xs text-gray-600 dark:text-gray-400">Visitors</span>
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatNumber(analytics.uniqueVisitors)}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4 text-purple-500" />
                <span className="text-xs text-gray-600 dark:text-gray-400">Session</span>
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatDuration(analytics.averageSessionDuration)}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <MousePointer className="w-4 h-4 text-orange-500" />
                <span className="text-xs text-gray-600 dark:text-gray-400">Engagement</span>
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {analytics.userEngagement.toFixed(1)}%
              </p>
            </div>
          </div>

          {/* Bounce Rate */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Bounce Rate</span>
              <span className={`text-sm font-semibold ${getMetricColor(analytics.bounceRate, 30, true)}`}>
                {analytics.bounceRate.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  analytics.bounceRate <= 30 ? 'bg-green-500' : 'bg-yellow-500'
                }`}
                style={{ width: `${Math.min(analytics.bounceRate, 100)}%` }}
              />
            </div>
          </div>

          {/* Top Pages */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Top Pages</h4>
            <div className="space-y-2">
              {analytics.topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {page.page}
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {formatNumber(page.views)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
              <TrendingUp className="w-3 h-3" />
              <span>Real-time data</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;