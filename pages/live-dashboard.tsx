import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const LiveDashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState('healthy');
  const [uptime, setUptime] = useState('99.9%');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const systemMetrics = [
    { name: 'CPU Usage', value: '23%', status: 'normal', trend: 'down' },
    { name: 'Memory Usage', value: '67%', status: 'normal', trend: 'stable' },
    { name: 'Disk Usage', value: '45%', status: 'normal', trend: 'up' },
    { name: 'Network Load', value: '12%', status: 'normal', trend: 'down' }
  ];

  const automationStatus = [
    { name: 'Content Generation', status: 'active', lastRun: '2 min ago', nextRun: '8 min' },
    { name: 'Health Monitoring', status: 'active', lastRun: '1 min ago', nextRun: '4 min' },
    { name: 'Security Scanning', status: 'active', lastRun: '5 min ago', nextRun: '10 min' },
    { name: 'Performance Testing', status: 'active', lastRun: '3 min ago', nextRun: '7 min' },
    { name: 'Backup System', status: 'active', lastRun: '1 hour ago', nextRun: '23 hours' }
  ];

  const recentActivities = [
    { time: '2 min ago', action: 'Content generated for /blog', status: 'success' },
    { time: '3 min ago', action: 'Security scan completed', status: 'success' },
    { time: '5 min ago', action: 'Performance test finished', status: 'success' },
    { time: '7 min ago', action: 'Health check passed', status: 'success' },
    { time: '10 min ago', action: 'Backup completed', status: 'success' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'active':
      case 'success':
        return 'text-green-600';
      case 'warning':
        return 'text-yellow-600';
      case 'error':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'active':
      case 'success':
        return 'bg-green-100';
      case 'warning':
        return 'bg-yellow-100';
      case 'error':
        return 'bg-red-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Live Dashboard - bolt.new.zion.app</title>
        <meta name="description" content="Real-time system monitoring and automation status dashboard" />
        <meta name="keywords" content="dashboard, monitoring, live, status, automation, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Live System Dashboard
              </h1>
              <p className="text-gray-400">
                Real-time monitoring and automation status
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-mono text-green-400">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="text-sm text-gray-400">
                {currentTime.toLocaleDateString()}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
              ← Back to Home
            </Link>
          </div>

          {/* System Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">System Status</p>
                  <p className={`text-2xl font-bold ${getStatusColor(systemStatus)}`}>
                    {systemStatus.toUpperCase()}
                  </p>
                </div>
                <div className={`w-4 h-4 rounded-full ${getStatusBg(systemStatus)}`}></div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div>
                <p className="text-gray-400 text-sm">Uptime</p>
                <p className="text-2xl font-bold text-green-400">{uptime}</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div>
                <p className="text-gray-400 text-sm">Active Automations</p>
                <p className="text-2xl font-bold text-blue-400">227</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div>
                <p className="text-gray-400 text-sm">Total Pages</p>
                <p className="text-2xl font-bold text-purple-400">2,960</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* System Metrics */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-6">System Metrics</h2>
              <div className="space-y-4">
                {systemMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300">{metric.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-medium">{metric.value}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusBg(metric.status)} ${getStatusColor(metric.status)}`}>
                        {metric.status}
                      </span>
                      <span className={`text-xs ${metric.trend === 'up' ? 'text-green-400' : metric.trend === 'down' ? 'text-red-400' : 'text-gray-400'}`}>
                        {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Automation Status */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Automation Status</h2>
              <div className="space-y-4">
                {automationStatus.map((automation, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-300">{automation.name}</span>
                      <div className="text-xs text-gray-500">
                        Last: {automation.lastRun} | Next: {automation.nextRun}
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusBg(automation.status)} ${getStatusColor(automation.status)}`}>
                      {automation.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-white mb-6">Recent Activities</h2>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${getStatusBg(activity.status)}`}></div>
                    <span className="text-gray-300">{activity.action}</span>
                  </div>
                  <span className="text-sm text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Charts */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-white mb-6">Performance Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">98.7%</div>
                <p className="text-gray-400 text-sm">Performance Score</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1.2s</div>
                <p className="text-gray-400 text-sm">Average Response Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <p className="text-gray-400 text-sm">Reliability Score</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Run Health Check
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Generate Report
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                View Logs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDashboard;