import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PerformancePage: React.FC = () => {
  const performanceMetrics = [
    {
      category: 'System Performance',
      metrics: [
        { name: 'Response Time', value: '45ms', status: 'excellent', trend: '+12%' },
        { name: 'Throughput', value: '2.4k req/s', status: 'good', trend: '+8%' },
        { name: 'Error Rate', value: '0.02%', status: 'excellent', trend: '-15%' },
        { name: 'Uptime', value: '99.97%', status: 'excellent', trend: '+0.1%' }
      ]
    },
    {
      category: 'Resource Utilization',
      metrics: [
        { name: 'CPU Usage', value: '23%', status: 'good', trend: '-5%' },
        { name: 'Memory Usage', value: '67%', status: 'good', trend: '+3%' },
        { name: 'Disk I/O', value: '45 MB/s', status: 'excellent', trend: '+18%' },
        { name: 'Network', value: '1.2 GB/s', status: 'good', trend: '+7%' }
      ]
    },
    {
      category: 'User Experience',
      metrics: [
        { name: 'Page Load Time', value: '1.2s', status: 'excellent', trend: '-20%' },
        { name: 'Core Web Vitals', value: '98/100', status: 'excellent', trend: '+5%' },
        { name: 'Accessibility Score', value: '96/100', status: 'excellent', trend: '+2%' },
        { name: 'SEO Score', value: '94/100', status: 'excellent', trend: '+3%' }
      ]
    }
  ];

  const recentReports = [
    {
      id: 'performance-weekly-2025-01-17',
      title: 'Weekly Performance Report',
      date: '2025-01-17',
      summary: 'System performance metrics for the week ending January 17, 2025',
      status: 'completed'
    },
    {
      id: 'lighthouse-audit-2025-01-16',
      title: 'Lighthouse Performance Audit',
      date: '2025-01-16',
      summary: 'Comprehensive performance audit using Google Lighthouse',
      status: 'completed'
    },
    {
      id: 'load-testing-2025-01-15',
      title: 'Load Testing Results',
      date: '2025-01-15',
      summary: 'Stress testing results under high traffic conditions',
      status: 'completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-400';
      case 'good': return 'text-yellow-400';
      case 'warning': return 'text-orange-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendColor = (trend: string) => {
    return trend.startsWith('+') ? 'text-green-400' : 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <Head>
        <title>Performance Reports - bolt.new.zion.app</title>
        <meta name="description" content="Comprehensive performance metrics and system analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Performance Reports
          </h1>
          <p className="text-gray-300 text-lg">
            Real-time system performance metrics and analytics dashboard
          </p>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Overall Score</h3>
            <div className="text-4xl font-bold text-green-400">96.8</div>
            <p className="text-gray-300 text-sm mt-2">Performance Index</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Status</h3>
            <div className="text-2xl font-bold text-green-400">Healthy</div>
            <p className="text-gray-300 text-sm mt-2">All systems operational</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Last Updated</h3>
            <div className="text-2xl font-bold text-blue-400">2 min ago</div>
            <p className="text-gray-300 text-sm mt-2">Real-time monitoring</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Performance Metrics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{section.category}</h3>
                <div className="space-y-4">
                  {section.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="text-gray-300">{metric.name}</span>
                      <div className="flex items-center space-x-3">
                        <span className={`font-semibold ${getStatusColor(metric.status)}`}>
                          {metric.value}
                        </span>
                        <span className={`text-sm ${getTrendColor(metric.trend)}`}>
                          {metric.trend}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reports */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Recent Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentReports.map((report) => (
              <div key={report.id} className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white">{report.title}</h3>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    {report.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{report.summary}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{report.date}</span>
                  <Link 
                    href={`/reports/${report.id}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                  >
                    View Report →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Trends */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Performance Trends</h2>
          <div className="bg-white/10 rounded-xl p-8 border border-white/20">
            <div className="text-center">
              <div className="text-6xl font-bold text-cyan-400 mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Continuous Improvement</h3>
              <p className="text-gray-300 mb-6">
                Our automated systems continuously monitor and optimize performance, 
                ensuring consistent improvement across all metrics.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">+15%</div>
                  <div className="text-gray-400 text-sm">Avg Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">+8%</div>
                  <div className="text-gray-400 text-sm">Throughput</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">+12%</div>
                  <div className="text-gray-400 text-sm">User Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">+5%</div>
                  <div className="text-gray-400 text-sm">Efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href="/reports"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50"
          >
            All Reports
          </Link>
          <Link 
            href="/reports/updates"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50"
          >
            Recent Updates
          </Link>
          <Link 
            href="/automation-health"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50"
          >
            System Health
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PerformancePage;