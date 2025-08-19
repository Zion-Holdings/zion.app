import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PerformanceReports = () => {
  const performanceMetrics = [
    {
      id: 'lighthouse-scores',
      title: 'Lighthouse Performance Scores',
      description: 'Core Web Vitals and performance metrics',
      status: 'Excellent',
      score: 95,
      lastUpdated: '2025-01-17',
      category: 'Performance'
    },
    {
      id: 'page-load-times',
      title: 'Page Load Times',
      description: 'Average page load performance across the site',
      status: 'Good',
      score: 87,
      lastUpdated: '2025-01-17',
      category: 'Speed'
    },
    {
      id: 'core-web-vitals',
      title: 'Core Web Vitals',
      description: 'LCP, FID, and CLS measurements',
      status: 'Excellent',
      score: 92,
      lastUpdated: '2025-01-17',
      category: 'User Experience'
    },
    {
      id: 'mobile-performance',
      title: 'Mobile Performance',
      description: 'Mobile-specific performance metrics',
      status: 'Good',
      score: 89,
      lastUpdated: '2025-01-17',
      category: 'Mobile'
    }
  ];

  const recentOptimizations = [
    {
      date: '2025-01-17',
      change: 'Image optimization implemented',
      impact: '+8% performance improvement'
    },
    {
      date: '2025-01-16',
      change: 'Bundle size reduced',
      impact: '+5% performance improvement'
    },
    {
      date: '2025-01-15',
      change: 'CDN configuration optimized',
      impact: '+12% performance improvement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <Head>
        <title>Performance Reports - bolt.new.zion.app</title>
        <meta name="description" content="Performance metrics and optimization reports for bolt.new.zion.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Performance Reports
          </h1>
          <p className="text-gray-300 mt-2 text-lg">
            Real-time performance metrics and optimization insights
          </p>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {performanceMetrics.map((metric) => (
            <div key={metric.id} className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-cyan-300">{metric.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  metric.status === 'Excellent' ? 'bg-green-500/20 text-green-300' :
                  metric.status === 'Good' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-red-500/20 text-red-300'
                }`}>
                  {metric.status}
                </span>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.score}/100</div>
              <p className="text-gray-400 text-sm mb-2">{metric.description}</p>
              <div className="text-xs text-gray-500">Last updated: {metric.lastUpdated}</div>
            </div>
          ))}
        </div>

        {/* Recent Optimizations */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-300">Recent Optimizations</h2>
          <div className="space-y-4">
            {recentOptimizations.map((optimization, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div>
                  <div className="font-medium text-white">{optimization.change}</div>
                  <div className="text-sm text-gray-400">{optimization.date}</div>
                </div>
                <span className="text-green-400 font-semibold">{optimization.impact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-300">Performance Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">+15%</div>
              <div className="text-gray-400">Overall Performance</div>
              <div className="text-xs text-gray-500">Last 30 days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">-23%</div>
              <div className="text-gray-400">Load Time</div>
              <div className="text-xs text-gray-500">Last 30 days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">+8%</div>
              <div className="text-gray-400">User Satisfaction</div>
              <div className="text-xs text-gray-500">Last 30 days</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/reports" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors">
            All Reports
          </Link>
          <Link href="/reports/updates" className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-colors">
            Recent Updates
          </Link>
          <Link href="/automation-health" className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-semibold rounded-lg transition-colors">
            Automation Health
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PerformanceReports;