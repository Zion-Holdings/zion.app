import React from 'react';
import Head from 'next/head';

export default function LiveDashboard() {
  const metrics = [
    { name: 'System Uptime', value: '99.99%', change: '+0.01%', status: 'positive' },
    { name: 'Active Automations', value: '227', change: '+12', status: 'positive' },
    { name: 'Content Pages', value: '2,960', change: '+45', status: 'positive' },
    { name: 'API Response Time', value: '45ms', change: '-5ms', status: 'positive' },
    { name: 'Error Rate', value: '0.02%', change: '-0.01%', status: 'positive' },
    { name: 'Active Users', value: '1,847', change: '+23', status: 'positive' }
  ];

  const recentActivities = [
    { time: '2 min ago', action: 'Content generation completed', status: 'success' },
    { time: '5 min ago', action: 'Automation workflow triggered', status: 'info' },
    { time: '8 min ago', action: 'Security scan completed', status: 'success' },
    { time: '12 min ago', action: 'Performance optimization applied', status: 'success' },
    { time: '15 min ago', action: 'Backup verification completed', status: 'success' }
  ];

  const systemStatus = {
    overall: 'Healthy',
    services: [
      { name: 'Web Server', status: 'Operational', uptime: '99.99%' },
      { name: 'Database', status: 'Operational', uptime: '99.98%' },
      { name: 'Cache Layer', status: 'Operational', uptime: '99.97%' },
      { name: 'CDN', status: 'Operational', uptime: '99.96%' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Live Dashboard - Zion App</title>
        <meta name="description" content="Real-time monitoring and analytics dashboard" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white">Live Dashboard</h1>
              <p className="text-gray-300">Real-time system monitoring and analytics</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Live</span>
              </div>
              <span className="text-gray-400 text-sm">
                Last updated: {new Date().toLocaleTimeString()}
              </span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {metrics.map((metric) => (
              <div key={metric.name} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <h3 className="text-gray-400 text-sm font-medium mb-2">{metric.name}</h3>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-white">{metric.value}</span>
                  <span className={`text-sm font-medium ${
                    metric.status === 'positive' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* System Status */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white">System Status</h2>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                  {systemStatus.overall}
                </span>
              </div>
              <div className="space-y-4">
                {systemStatus.services.map((service) => (
                  <div key={service.name} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <h4 className="text-white font-medium">{service.name}</h4>
                      <p className="text-gray-400 text-sm">Uptime: {service.uptime}</p>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                      {service.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.action}</p>
                      <p className="text-gray-400 text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Chart Placeholder */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-6">Performance Trends</h2>
            <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-400">Performance charts and analytics</p>
                <p className="text-gray-500 text-sm">Real-time data visualization coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}