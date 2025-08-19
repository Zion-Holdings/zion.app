import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const LiveDashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState({
    overall: 'healthy',
    automations: { active: 227, total: 250, status: 'operational' },
    performance: { score: 95, status: 'excellent' },
    uptime: { current: '99.9%', status: 'stable' },
    lastSync: '2 minutes ago'
  });

  const [automationMetrics, setAutomationMetrics] = useState([
    { name: 'Content Generation', status: 'running', progress: 75, lastRun: '1 min ago' },
    { name: 'SEO Optimization', status: 'completed', progress: 100, lastRun: '5 min ago' },
    { name: 'Security Scan', status: 'running', progress: 45, lastRun: '2 min ago' },
    { name: 'Performance Test', status: 'queued', progress: 0, lastRun: '15 min ago' },
    { name: 'Backup Sync', status: 'completed', progress: 100, lastRun: '10 min ago' }
  ]);

  const [recentActivities, setRecentActivities] = useState([
    { action: 'Content updated', timestamp: '2 min ago', status: 'success' },
    { action: 'Security scan completed', timestamp: '5 min ago', status: 'success' },
    { action: 'Performance test started', timestamp: '7 min ago', status: 'info' },
    { action: 'Backup completed', timestamp: '10 min ago', status: 'success' },
    { action: 'SEO optimization', timestamp: '12 min ago', status: 'success' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'operational':
      case 'excellent':
      case 'stable':
      case 'completed':
      case 'success':
        return 'text-green-600 bg-green-100';
      case 'running':
      case 'info':
        return 'text-blue-600 bg-blue-100';
      case 'queued':
        return 'text-yellow-600 bg-yellow-100';
      case 'warning':
        return 'text-orange-600 bg-orange-100';
      case 'error':
      case 'failed':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'operational':
      case 'excellent':
      case 'stable':
      case 'completed':
      case 'success':
        return '✅';
      case 'running':
        return '🔄';
      case 'queued':
        return '⏳';
      case 'warning':
        return '⚠️';
      case 'error':
      case 'failed':
        return '❌';
      default:
        return 'ℹ️';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Live Dashboard - bolt.new.zion.app</title>
        <meta name="description" content="Real-time system monitoring and automation status dashboard" />
        <meta name="keywords" content="dashboard, monitoring, automation, status, real-time" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Live Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Real-time monitoring of bolt.new.zion.app automation systems
            </p>
            <div className="text-lg text-gray-500 mt-2">
              Last updated: {currentTime.toLocaleTimeString()}
            </div>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/automation" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Automation
              </Link>
              <Link href="/automation-health" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Health Check
              </Link>
            </div>
          </nav>

          {/* System Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Overall Status</p>
                  <p className="text-2xl font-bold text-gray-900">{systemStatus.overall}</p>
                </div>
                <div className={`text-2xl ${getStatusColor(systemStatus.overall)} p-3 rounded-full`}>
                  {getStatusIcon(systemStatus.overall)}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Active Automations</p>
                  <p className="text-2xl font-bold text-gray-900">{systemStatus.automations.active}</p>
                  <p className="text-sm text-gray-500">of {systemStatus.automations.total}</p>
                </div>
                <div className={`text-2xl ${getStatusColor(systemStatus.automations.status)} p-3 rounded-full`}>
                  {getStatusIcon(systemStatus.automations.status)}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Performance Score</p>
                  <p className="text-2xl font-bold text-gray-900">{systemStatus.performance.score}%</p>
                </div>
                <div className={`text-2xl ${getStatusColor(systemStatus.performance.status)} p-3 rounded-full`}>
                  {getStatusIcon(systemStatus.performance.status)}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Uptime</p>
                  <p className="text-2xl font-bold text-gray-900">{systemStatus.uptime.current}</p>
                </div>
                <div className={`text-2xl ${getStatusColor(systemStatus.uptime.status)} p-3 rounded-full`}>
                  {getStatusIcon(systemStatus.uptime.status)}
                </div>
              </div>
            </div>
          </div>

          {/* Automation Status */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Automation Status</h2>
            <div className="space-y-4">
              {automationMetrics.map((automation, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getStatusIcon(automation.status)}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{automation.name}</h3>
                        <p className="text-sm text-gray-500">Last run: {automation.lastRun}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(automation.status)}`}>
                        {automation.status}
                      </div>
                    </div>
                  </div>
                  {automation.progress > 0 && (
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${automation.progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                  <span className="text-2xl">{getStatusIcon(activity.status)}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.timestamp}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(activity.status)}`}>
                    {activity.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Metrics */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Resources</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>CPU Usage</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Memory Usage</span>
                    <span>62%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Disk Usage</span>
                    <span>28%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Network Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold">45ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Throughput</span>
                  <span className="font-semibold">2.1 GB/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Connections</span>
                  <span className="font-semibold">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Sync</span>
                  <span className="font-semibold">{systemStatus.lastSync}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Quick Actions</h2>
            <p className="text-blue-700 mb-6">
              Manage your automation systems and monitor performance in real-time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/automation" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Manage Automations
              </Link>
              <Link href="/reports" className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                View Reports
              </Link>
              <Link href="/automation-health" className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                Health Check
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDashboard;