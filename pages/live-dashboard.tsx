import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const LiveDashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState('healthy');
  const [activeWorkflows, setActiveWorkflows] = useState(15);
  const [uptime, setUptime] = useState('99.8%');
  const [responseTime, setResponseTime] = useState('120ms');

  // Simulate real-time updates
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate changing metrics
      setActiveWorkflows(prev => Math.max(10, Math.min(20, prev + (Math.random() > 0.5 ? 1 : -1)));
      setResponseTime(prev => {
        const base = parseInt(prev);
        return `${Math.max(80, Math.min(200, base + (Math.random() > 0.5 ? 5 : -5))}ms`;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const metrics = [
    { name: 'CPU Usage', value: '23%', status: 'normal', color: 'text-green-600' },
    { name: 'Memory Usage', value: '67%', status: 'warning', color: 'text-yellow-600' },
    { name: 'Disk Usage', value: '45%', status: 'normal', color: 'text-green-600' },
    { name: 'Network', value: '1.2 Gbps', status: 'normal', color: 'text-green-600' },
  ];

  const recentActivities = [
    { time: '2 minutes ago', action: 'Workflow completed: Data Sync', status: 'success' },
    { time: '5 minutes ago', action: 'New automation triggered', status: 'info' },
    { time: '8 minutes ago', action: 'System backup completed', status: 'success' },
    { time: '12 minutes ago', action: 'Performance optimization applied', status: 'success' },
    { time: '15 minutes ago', action: 'Security scan completed', status: 'success' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      case 'info': return 'ℹ️';
      default: return '•';
    }
  };

  return (
    <>
      <Head>
        <title>Live Dashboard - Zion App</title>
        <meta name="description" content="Real-time monitoring dashboard for Zion App with live metrics and system status." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  Zion App
                </Link>
                <nav className="hidden md:flex space-x-8">
                  <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
                  <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
                  <Link href="/reports" className="text-gray-600 hover:text-blue-600 transition-colors">Reports</Link>
                  <Link href="/live-dashboard" className="text-blue-600 font-medium">Live Dashboard</Link>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-500">
                  Last updated: {currentTime.toLocaleTimeString()}
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  systemStatus === 'healthy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {systemStatus === 'healthy' ? '🟢' : '🔴'} {systemStatus}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Dashboard</h1>
            <p className="text-xl text-gray-600">
              Real-time monitoring and analytics for Zion App systems
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Workflows</p>
                  <p className="text-3xl font-bold text-gray-900">{activeWorkflows}</p>
                </div>
                <div className="text-blue-500 text-3xl">⚡</div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500">↗</span>
                  <span className="ml-1">+2.5% from last hour</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">System Uptime</p>
                  <p className="text-3xl font-bold text-gray-900">{uptime}</p>
                </div>
                <div className="text-green-500 text-3xl">🕐</div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500">✓</span>
                  <span className="ml-1">All systems operational</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Response Time</p>
                  <p className="text-3xl font-bold text-gray-900">{responseTime}</p>
                </div>
                <div className="text-purple-500 text-3xl">🚀</div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500">↘</span>
                  <span className="ml-1">-15ms from yesterday</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Automations Today</p>
                  <p className="text-3xl font-bold text-gray-900">1,247</p>
                </div>
                <div className="text-orange-500 text-3xl">🤖</div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-green-500">↗</span>
                  <span className="ml-1">+8.3% from yesterday</span>
                </div>
              </div>
            </div>
          </div>

          {/* System Status and Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* System Status */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">System Status</h2>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                    <span className={`text-lg font-semibold ${metric.color}`}>{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activities</h2>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-lg">{getStatusIcon(activity.status)}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 truncate">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* CPU Usage Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">CPU Usage (Last 24h)</h2>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-blue-500 mb-2">📊</div>
                  <p className="text-gray-500">Interactive chart would be rendered here</p>
                  <p className="text-sm text-gray-400">Showing CPU usage trends over time</p>
                </div>
              </div>
            </div>

            {/* Memory Usage Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Memory Usage (Last 24h)</h2>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-green-500 mb-2">📈</div>
                  <p className="text-gray-500">Interactive chart would be rendered here</p>
                  <p className="text-sm text-gray-400">Showing memory consumption patterns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Automation Workflows */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Active Automation Workflows</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Workflow</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Started</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Data Sync Pipeline</div>
                      <div className="text-sm text-gray-500">Automated data synchronization</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Running
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-sm text-gray-500">75%</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 minutes ago</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">View Details</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Backup Process</div>
                      <div className="text-sm text-gray-500">System backup automation</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                      <span className="text-sm text-gray-500">0%</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Scheduled</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">View Details</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <p className="text-gray-600 mb-6">Manage your systems and automations directly from the dashboard</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Create New Workflow
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Run System Check
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Generate Report
              </button>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Logs
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Zion App</h3>
                <p className="text-gray-400">Autonomous, cloud-native app with self-running automations.</p>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/reports" className="hover:text-white transition-colors">Reports</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/live-dashboard" className="hover:text-white transition-colors">Live Dashboard</Link></li>
                  <li><Link href="/api-documentation" className="hover:text-white transition-colors">API Documentation</Link></li>
                  <li><Link href="/automation" className="hover:text-white transition-colors">Automation</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/contact" className="hover:text-white transition-colors">Get in Touch</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion App. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LiveDashboard;