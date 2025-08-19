import React from 'react';
import Head from 'next/head';

export default function LiveDashboardPage() {
  const systemMetrics = [
    {
      name: "System Uptime",
      value: "99.9%",
      change: "+0.1%",
      trend: "up",
      color: "green"
    },
    {
      name: "Active Automations",
      value: "227",
      change: "+12",
      trend: "up",
      color: "blue"
    },
    {
      name: "Response Time",
      value: "45ms",
      change: "-5ms",
      trend: "down",
      color: "green"
    },
    {
      name: "Error Rate",
      value: "0.02%",
      change: "-0.01%",
      trend: "down",
      color: "green"
    }
  ];

  const recentActivities = [
    {
      time: "2 minutes ago",
      action: "Content generation completed",
      status: "success",
      details: "Generated 15 new articles for blog section"
    },
    {
      time: "5 minutes ago",
      action: "Cloud scaling triggered",
      status: "info",
      details: "Auto-scaled from 3 to 5 instances"
    },
    {
      time: "8 minutes ago",
      action: "Security scan completed",
      status: "success",
      details: "No vulnerabilities detected"
    },
    {
      time: "12 minutes ago",
      action: "Backup process started",
      status: "warning",
      details: "Scheduled backup initiated"
    }
  ];

  const automationStatus = [
    {
      name: "Content Generation",
      status: "Running",
      progress: 85,
      color: "green"
    },
    {
      name: "Security Monitoring",
      status: "Active",
      progress: 100,
      color: "blue"
    },
    {
      name: "Performance Optimization",
      status: "Idle",
      progress: 0,
      color: "gray"
    },
    {
      name: "Data Backup",
      status: "Running",
      progress: 45,
      color: "yellow"
    }
  ];

  return (
    <>
      <Head>
        <title>Live Dashboard | Zion - Real-time System Monitoring</title>
        <meta name="description" content="Monitor Zion's autonomous systems in real-time with live metrics and system status." />
      </Head>
      
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Live Dashboard</h1>
                <p className="text-gray-400">Real-time monitoring of autonomous systems</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Live</span>
                </div>
                <span className="text-sm text-gray-400">
                  Last updated: {new Date().toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* System Metrics */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-400 text-sm">{metric.name}</h3>
                  <span className={`text-sm ${
                    metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="mt-2">
                  <div className={`w-full h-1 bg-gray-700 rounded-full overflow-hidden`}>
                    <div 
                      className={`h-full bg-${metric.color}-500 rounded-full transition-all duration-300`}
                      style={{ width: `${Math.random() * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Automation Status */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-xl font-bold mb-6">Automation Status</h2>
                <div className="space-y-4">
                  {automationStatus.map((automation, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 bg-${automation.color}-500 rounded-full`}></div>
                        <div>
                          <h4 className="font-semibold">{automation.name}</h4>
                          <p className="text-sm text-gray-400">{automation.status}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-600 rounded-full h-2">
                          <div 
                            className={`bg-${automation.color}-500 h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${automation.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-400">{automation.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-xl font-bold mb-6">Recent Activities</h2>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="p-3 bg-gray-700 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs text-gray-400">{activity.time}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          activity.status === 'success' ? 'bg-green-900 text-green-300' :
                          activity.status === 'warning' ? 'bg-yellow-900 text-yellow-300' :
                          'bg-blue-900 text-blue-300'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{activity.action}</h4>
                      <p className="text-xs text-gray-400">{activity.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-6">System Health Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Excellent</div>
                <div className="text-sm text-gray-400">Overall Health Score</div>
                <div className="mt-4">
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <div className="w-4/5 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Continuous Operation</div>
                <div className="mt-4">
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <div className="w-full h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Reliability</div>
                <div className="mt-4">
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <div className="w-5/6 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Generate Report
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Run Health Check
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Backup Systems
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                View Logs
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}