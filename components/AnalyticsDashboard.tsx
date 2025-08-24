import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ path: string; views: number }>;
  performance: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
  userBehavior: {
    deviceType: { mobile: number; desktop: number; tablet: number };
    browser: { [key: string]: number };
    country: { [key: string]: number };
  };
}

export default function AnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d' | '90d'>('7d');

  useEffect(() => {
    // Simulate fetching analytics data
    const fetchAnalytics = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock data - in production, this would come from your analytics service
      setAnalyticsData({
        pageViews: 15420,
        uniqueVisitors: 8234,
        bounceRate: 32.5,
        avgSessionDuration: 245,
        topPages: [
          { path: '/', views: 6540 },
          { path: '/about', views: 2340 },
          { path: '/contact', views: 1890 },
          { path: '/services', views: 1560 },
          { path: '/technologies', views: 890 }
        ],
        performance: {
          fcp: 1200,
          lcp: 2800,
          fid: 45,
          cls: 0.08,
          ttfb: 180
        },
        userBehavior: {
          deviceType: { mobile: 45, desktop: 48, tablet: 7 },
          browser: { Chrome: 65, Safari: 20, Firefox: 10, Edge: 5 },
          country: { 'United States': 60, 'Canada': 15, 'United Kingdom': 10, 'Germany': 8, 'Other': 7 }
        }
      });
      setIsLoading(false);
    };

    fetchAnalytics();
  }, [timeRange]);

  const getPerformanceScore = (metrics: AnalyticsData['performance']) => {
    const scores = {
      fcp: metrics.fcp < 1800 ? 100 : Math.max(0, 100 - ((metrics.fcp - 1800) / 100)),
      lcp: metrics.lcp < 2500 ? 100 : Math.max(0, 100 - ((metrics.lcp - 2500) / 100)),
      fid: metrics.fid < 100 ? 100 : Math.max(0, 100 - ((metrics.fid - 100) / 10)),
      cls: metrics.cls < 0.1 ? 100 : Math.max(0, 100 - (metrics.cls * 1000))
    };
    
    return Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 4);
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-red-400">
          <p>Failed to load analytics data</p>
        </div>
      </div>
    );
  }

  const performanceScore = getPerformanceScore(analyticsData.performance);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Analytics Dashboard</h1>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="bg-gray-800 border border-gray-600 rounded px-3 py-2"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            <span className="text-gray-400">Data updated in real-time</span>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-2">Page Views</h3>
            <p className="text-3xl font-bold">{analyticsData.pageViews.toLocaleString()}</p>
            <span className="text-green-400 text-sm">+12.5% from last period</span>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-2">Unique Visitors</h3>
            <p className="text-3xl font-bold">{analyticsData.uniqueVisitors.toLocaleString()}</p>
            <span className="text-green-400 text-sm">+8.3% from last period</span>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-2">Bounce Rate</h3>
            <p className="text-3xl font-bold">{analyticsData.bounceRate}%</p>
            <span className="text-red-400 text-sm">+2.1% from last period</span>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-2">Avg Session Duration</h3>
            <p className="text-3xl font-bold">{Math.round(analyticsData.avgSessionDuration / 60)}m {analyticsData.avgSessionDuration % 60}s</p>
            <span className="text-green-400 text-sm">+5.7% from last period</span>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
        >
          {/* Core Web Vitals */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Core Web Vitals</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Performance Score</span>
                <span className={`text-2xl font-bold ${getPerformanceColor(performanceScore)}`}>
                  {performanceScore}/100
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>First Contentful Paint</span>
                  <span className={analyticsData.performance.fcp < 1800 ? 'text-green-400' : 'text-red-400'}>
                    {analyticsData.performance.fcp}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Largest Contentful Paint</span>
                  <span className={analyticsData.performance.lcp < 2500 ? 'text-green-400' : 'text-red-400'}>
                    {analyticsData.performance.lcp}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>First Input Delay</span>
                  <span className={analyticsData.performance.fid < 100 ? 'text-green-400' : 'text-red-400'}>
                    {analyticsData.performance.fid}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Cumulative Layout Shift</span>
                  <span className={analyticsData.performance.cls < 0.1 ? 'text-green-400' : 'text-red-400'}>
                    {analyticsData.performance.cls}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Pages */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Top Pages</h3>
            <div className="space-y-3">
              {analyticsData.topPages.map((page, index) => (
                <div key={page.path} className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400 text-sm">#{index + 1}</span>
                    <span className="font-medium">{page.path}</span>
                  </div>
                  <span className="text-blue-400 font-semibold">
                    {page.views.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* User Behavior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Device Types */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Device Types</h3>
            <div className="space-y-3">
              {Object.entries(analyticsData.userBehavior.deviceType).map(([device, percentage]) => (
                <div key={device} className="flex justify-between items-center">
                  <span className="capitalize">{device}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400">{percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Browsers */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Browsers</h3>
            <div className="space-y-3">
              {Object.entries(analyticsData.userBehavior.browser).map(([browser, percentage]) => (
                <div key={browser} className="flex justify-between items-center">
                  <span>{browser}</span>
                  <span className="text-blue-400">{percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Countries */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Top Countries</h3>
            <div className="space-y-3">
              {Object.entries(analyticsData.userBehavior.country).map(([country, percentage]) => (
                <div key={country} className="flex justify-between items-center">
                  <span>{country}</span>
                  <span className="text-blue-400">{percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}