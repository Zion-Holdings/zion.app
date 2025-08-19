import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Dashboard = () => {
  const systemMetrics = [
    {
      title: 'Uptime',
      value: '99.97%',
      change: '+0.02%',
      status: 'excellent',
      icon: '🟢'
    },
    {
      title: 'Response Time',
      value: '127ms',
      change: '-12ms',
      status: 'good',
      icon: '🟡'
    },
    {
      title: 'Active Users',
      value: '2,847',
      change: '+156',
      status: 'excellent',
      icon: '🟢'
    },
    {
      title: 'Error Rate',
      value: '0.03%',
      change: '-0.01%',
      status: 'excellent',
      icon: '🟢'
    }
  ];

  const automationStatus = [
    {
      name: 'Content Generation',
      status: 'Running',
      lastRun: '2 min ago',
      nextRun: '5 min',
      health: 'excellent'
    },
    {
      name: 'SEO Optimization',
      status: 'Running',
      lastRun: '1 min ago',
      nextRun: '3 min',
      health: 'excellent'
    },
    {
      name: 'Performance Monitoring',
      status: 'Running',
      lastRun: '30 sec ago',
      nextRun: '1 min',
      health: 'excellent'
    },
    {
      name: 'Security Scanning',
      status: 'Running',
      lastRun: '5 min ago',
      nextRun: '10 min',
      health: 'good'
    }
  ];

  const recentActivities = [
    {
      type: 'Content Update',
      description: 'Automated content refresh completed',
      timestamp: '2 minutes ago',
      status: 'success'
    },
    {
      type: 'Performance Check',
      description: 'Lighthouse audit passed with 95/100 score',
      timestamp: '5 minutes ago',
      status: 'success'
    },
    {
      type: 'Security Scan',
      description: 'Vulnerability assessment completed - no issues found',
      timestamp: '8 minutes ago',
      status: 'success'
    },
    {
      type: 'SEO Update',
      description: 'Meta tags optimized for 12 pages',
      timestamp: '12 minutes ago',
      status: 'success'
    }
  ];

  const quickActions = [
    {
      title: 'View Reports',
      description: 'Access detailed performance and analytics reports',
      href: '/reports',
      icon: '📊',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Automation Health',
      description: 'Monitor automation system status and health',
      href: '/automation-health',
      icon: '🤖',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Services',
      description: 'Explore our comprehensive service offerings',
      href: '/services',
      icon: '🚀',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team',
      href: '/contact',
      icon: '📧',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <Head>
        <title>Dashboard - bolt.new.zion.app</title>
        <meta name="description" content="Real-time dashboard and system overview for bolt.new.zion.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            System Dashboard
          </h1>
          <p className="text-gray-300 mt-2 text-lg">
            Real-time monitoring and system overview
          </p>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemMetrics.map((metric, index) => (
            <div key={index} className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{metric.icon}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  metric.status === 'excellent' ? 'bg-green-500/20 text-green-300' :
                  metric.status === 'good' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-red-500/20 text-red-300'
                }`}>
                  {metric.status}
                </span>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-cyan-300 mb-2">{metric.title}</div>
              <div className="text-green-400 text-sm">{metric.change}</div>
            </div>
          ))}
        </div>

        {/* Automation Status */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-300">Automation Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automationStatus.map((automation, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white text-lg">{automation.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    automation.health === 'excellent' ? 'bg-green-500/20 text-green-300' :
                    automation.health === 'good' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {automation.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>Last Run: {automation.lastRun}</div>
                  <div>Next Run: {automation.nextRun}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-300">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center space-x-4">
                  <span className={`w-3 h-3 rounded-full ${
                    activity.status === 'success' ? 'bg-green-400' : 'bg-red-400'
                  }`}></span>
                  <div>
                    <div className="font-medium text-white">{activity.type}</div>
                    <div className="text-sm text-gray-400">{activity.description}</div>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{activity.timestamp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-300">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href} className="group">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{action.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-400">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* System Health Summary */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-300">System Health Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">All Systems Operational</div>
              <div className="text-green-300">No critical issues detected</div>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">227 Automations</div>
              <div className="text-blue-300">Running smoothly</div>
            </div>
            <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.97% Uptime</div>
              <div className="text-purple-300">Last 30 days</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/reports" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors">
            View Reports
          </Link>
          <Link href="/automation-health" className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-colors">
            Automation Health
          </Link>
          <Link href="/about" className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-semibold rounded-lg transition-colors">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;