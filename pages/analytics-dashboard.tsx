import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ path: string; views: number; conversion: number }>;
  automationMetrics: {
    totalRuns: number;
    successRate: number;
    avgExecutionTime: number;
    errorRate: number;
  };
  performanceMetrics: {
    pageLoadTime: number;
    serverResponseTime: number;
    databaseQueryTime: number;
    cacheHitRate: number;
  };
  userEngagement: {
    timeOnSite: number;
    pagesPerSession: number;
    returnRate: number;
    mobileUsage: number;
  };
}

const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('overview');

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        // Simulate fetching analytics data
        const mockData: AnalyticsData = {
          pageViews: 15420,
          uniqueVisitors: 3247,
          bounceRate: 23.4,
          avgSessionDuration: 245,
          topPages: [
            { path: '/', views: 5234, conversion: 12.3 },
            { path: '/content-hub', views: 3120, conversion: 8.7 },
            { path: '/automation', views: 2890, conversion: 15.2 },
            { path: '/discover', views: 2156, conversion: 6.8 },
            { path: '/performance-dashboard', views: 1890, conversion: 22.1 }
          ],
          automationMetrics: {
            totalRuns: 1247,
            successRate: 94.2,
            avgExecutionTime: 2.3,
            errorRate: 5.8
          },
          performanceMetrics: {
            pageLoadTime: 1.2,
            serverResponseTime: 0.8,
            databaseQueryTime: 0.3,
            cacheHitRate: 87.5
          },
          userEngagement: {
            timeOnSite: 245,
            pagesPerSession: 4.2,
            returnRate: 34.7,
            mobileUsage: 42.3
          }
        };
        
        setData(mockData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching analytics:', error);
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  const getMetricColor = (value: number, threshold: number, reverse = false) => {
    const isGood = reverse ? value <= threshold : value >= threshold;
    return isGood ? 'text-green-600' : 'text-red-600';
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Analytics Data</h2>
          <p className="text-gray-600">Analytics data is not available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Analytics Dashboard - Zion App</title>
        <meta name="description" content="Comprehensive analytics and insights dashboard" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
                <p className="mt-2 text-gray-600">Comprehensive insights into system performance and user behavior</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white"
                >
                  <option value="1d">Last 24 hours</option>
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </select>
                
                <select
                  value={selectedMetric}
                  onChange={(e) => setSelectedMetric(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white"
                >
                  <option value="overview">Overview</option>
                  <option value="traffic">Traffic</option>
                  <option value="performance">Performance</option>
                  <option value="automation">Automation</option>
                  <option value="engagement">Engagement</option>
                </select>
              </div>
            </div>
          </div>

          {/* Key Metrics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Page Views</p>
                  <p className="text-2xl font-semibold text-gray-900">{formatNumber(data.pageViews)}</p>
                  <p className="text-sm text-green-600">+12.5% from last period</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Unique Visitors</p>
                  <p className="text-2xl font-semibold text-gray-900">{formatNumber(data.uniqueVisitors)}</p>
                  <p className="text-sm text-green-600">+8.3% from last period</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-100 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Avg Session Duration</p>
                  <p className="text-2xl font-semibold text-gray-900">{formatDuration(data.avgSessionDuration)}</p>
                  <p className="text-sm text-green-600">+5.2% from last period</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Bounce Rate</p>
                  <p className={`text-2xl font-semibold ${getMetricColor(data.bounceRate, 30, true)}`}>
                    {data.bounceRate}%
                  </p>
                  <p className="text-sm text-green-600">-2.1% from last period</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Pages Performance */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Top Performing Pages</h3>
              <p className="mt-1 text-sm text-gray-500">Pages with highest views and conversion rates</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Page
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Conversion Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Performance
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.topPages.map((page, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{page.path}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatNumber(page.views)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {page.conversion}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${Math.min(page.conversion * 5, 100)}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {page.conversion >= 15 ? 'Excellent' : 
                             page.conversion >= 10 ? 'Good' : 
                             page.conversion >= 5 ? 'Average' : 'Poor'}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Page Load Time</span>
                  <span className={`font-semibold ${getMetricColor(data.performanceMetrics.pageLoadTime, 2)}`}>
                    {data.performanceMetrics.pageLoadTime}s
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Server Response</span>
                  <span className={`font-semibold ${getMetricColor(data.performanceMetrics.serverResponseTime, 1)}`}>
                    {data.performanceMetrics.serverResponseTime}s
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Database Query</span>
                  <span className={`font-semibold ${getMetricColor(data.performanceMetrics.databaseQueryTime, 0.5)}`}>
                    {data.performanceMetrics.databaseQueryTime}s
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Cache Hit Rate</span>
                  <span className={`font-semibold ${getMetricColor(data.performanceMetrics.cacheHitRate, 80)}`}>
                    {data.performanceMetrics.cacheHitRate}%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Automation Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Runs</span>
                  <span className="font-semibold text-gray-900">
                    {formatNumber(data.automationMetrics.totalRuns)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Success Rate</span>
                  <span className={`font-semibold ${getMetricColor(data.automationMetrics.successRate, 90)}`}>
                    {data.automationMetrics.successRate}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Avg Execution Time</span>
                  <span className={`font-semibold ${getMetricColor(data.automationMetrics.avgExecutionTime, 3, true)}`}>
                    {data.automationMetrics.avgExecutionTime}s
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Error Rate</span>
                  <span className={`font-semibold ${getMetricColor(data.automationMetrics.errorRate, 5, true)}`}>
                    {data.automationMetrics.errorRate}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* User Engagement */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">User Engagement</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{formatDuration(data.userEngagement.timeOnSite)}</div>
                <div className="text-sm text-gray-600">Time on Site</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{data.userEngagement.pagesPerSession}</div>
                <div className="text-sm text-gray-600">Pages per Session</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{data.userEngagement.returnRate}%</div>
                <div className="text-sm text-gray-600">Return Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{data.userEngagement.mobileUsage}%</div>
                <div className="text-sm text-gray-600">Mobile Usage</div>
              </div>
            </div>
          </div>

          {/* Charts Placeholder */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Traffic Trends</h3>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Chart visualization coming soon</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Trends</h3>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Chart visualization coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsDashboard;