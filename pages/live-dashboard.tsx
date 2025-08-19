import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const LiveDashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState('operational');
  const [activeUsers, setActiveUsers] = useState(1247);
  const [responseTime, setResponseTime] = useState(45);
  const [uptime, setUptime] = useState(99.97);

  // Simulate real-time updates
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setActiveUsers(prev => prev + Math.floor(Math.random() * 10) - 5);
      setResponseTime(prev => Math.max(20, Math.min(80, prev + (Math.random() * 10) - 5)));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const metrics = [
    {
      title: 'Active Users',
      value: activeUsers.toLocaleString(),
      change: '+12%',
      changeType: 'positive',
      icon: '👥'
    },
    {
      title: 'Response Time',
      value: `${responseTime}ms`,
      change: '-8%',
      changeType: 'positive',
      icon: '⚡'
    },
    {
      title: 'System Uptime',
      value: `${uptime}%`,
      change: '+0.02%',
      changeType: 'positive',
      icon: '🟢'
    },
    {
      title: 'API Calls/min',
      value: '2,847',
      change: '+15%',
      changeType: 'positive',
      icon: '📡'
    }
  ];

  const recentEvents = [
    {
      id: 1,
      type: 'info',
      message: 'System backup completed successfully',
      timestamp: '2 minutes ago',
      icon: '💾'
    },
    {
      id: 2,
      type: 'success',
      message: 'New user registration milestone: 10,000 users',
      timestamp: '5 minutes ago',
      icon: '🎉'
    },
    {
      id: 3,
      type: 'warning',
      message: 'High memory usage detected on server-03',
      timestamp: '8 minutes ago',
      icon: '⚠️'
    },
    {
      id: 4,
      type: 'info',
      message: 'Scheduled maintenance completed',
      timestamp: '15 minutes ago',
      icon: '🔧'
    },
    {
      id: 5,
      type: 'success',
      message: 'Performance optimization deployed',
      timestamp: '1 hour ago',
      icon: '🚀'
    }
  ];

  const systemHealth = [
    { service: 'Web Server', status: 'healthy', uptime: '99.99%', response: '12ms' },
    { service: 'Database', status: 'healthy', uptime: '99.97%', response: '45ms' },
    { service: 'Cache Layer', status: 'healthy', uptime: '99.98%', response: '3ms' },
    { service: 'API Gateway', status: 'healthy', uptime: '99.96%', response: '28ms' },
    { service: 'File Storage', status: 'healthy', uptime: '99.95%', response: '67ms' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Live Dashboard - Zion App</title>
        <meta name="description" content="Real-time system monitoring and performance dashboard" />
        <meta name="keywords" content="dashboard, monitoring, system status, performance, Zion App" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Live Dashboard</h1>
              <p className="text-gray-400">
                Real-time monitoring and system performance metrics
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-2xl font-mono text-blue-400">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="text-gray-400 text-sm">
                {currentTime.toLocaleDateString()}
              </div>
            </div>
          </div>

          {/* System Status Banner */}
          <div className={`rounded-lg p-4 mb-8 ${
            systemStatus === 'operational' ? 'bg-green-900 border border-green-700' : 'bg-red-900 border border-red-700'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${
                systemStatus === 'operational' ? 'bg-green-400' : 'bg-red-400'
              } animate-pulse`}></div>
              <span className="font-semibold">
                System Status: {systemStatus === 'operational' ? 'All Systems Operational' : 'System Issues Detected'}
              </span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{metric.icon}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    metric.changeType === 'positive' ? 'text-green-400 bg-green-900' : 'text-red-400 bg-red-900'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-gray-400 text-sm">{metric.title}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* System Health */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-6">System Health</h2>
                <div className="space-y-4">
                  {systemHealth.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          service.status === 'healthy' ? 'bg-green-400' : 'bg-red-400'
                        }`}></div>
                        <span className="font-medium">{service.service}</span>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="text-gray-400">Uptime: {service.uptime}</span>
                        <span className="text-gray-400">Response: {service.response}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Events */}
            <div>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-6">Recent Events</h2>
                <div className="space-y-4">
                  {recentEvents.map((event) => (
                    <div key={event.id} className="flex items-start gap-3 p-3 bg-gray-700 rounded-lg">
                      <span className="text-xl">{event.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-1 rounded-full text-xs ${getEventTypeColor(event.type)}`}>
                            {event.type}
                          </span>
                          <span className="text-gray-400 text-xs">{event.timestamp}</span>
                        </div>
                        <p className="text-sm">{event.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <button className="text-blue-400 hover:text-blue-300 text-sm">
                    View All Events
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Charts Placeholder */}
          <div className="mt-8 bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-6">Performance Trends</h2>
            <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">📊</div>
                <div>Performance charts and analytics</div>
                <div className="text-sm mt-2">Real-time data visualization coming soon</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button className="p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center">
                <div className="text-2xl mb-2">🔍</div>
                <div className="text-sm">Run Diagnostics</div>
              </button>
              <button className="p-4 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-center">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-sm">Generate Report</div>
              </button>
              <button className="p-4 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="text-sm">System Settings</div>
              </button>
              <button className="p-4 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors text-center">
                <div className="text-2xl mb-2">📧</div>
                <div className="text-sm">Send Alert</div>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-gray-400">
            <p>Dashboard updates every 5 seconds • Last updated: {currentTime.toLocaleTimeString()}</p>
            <div className="mt-4">
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 mr-4">
                Support
              </Link>
              <Link href="/documentation" className="text-blue-400 hover:text-blue-300">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDashboard;