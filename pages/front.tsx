import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FrontPage() {
  const quickActions = [
    {
      title: "Live Dashboard",
      description: "Monitor system status in real-time",
      icon: "📊",
      link: "/live-dashboard",
      color: "blue"
    },
    {
      title: "Automation Hub",
      description: "Manage your autonomous systems",
      icon: "🤖",
      link: "/automation",
      color: "purple"
    },
    {
      title: "Content Generator",
      description: "Create AI-powered content",
      icon: "✍️",
      link: "/playground",
      color: "green"
    },
    {
      title: "System Reports",
      description: "View analytics and insights",
      icon: "📈",
      link: "/reports",
      color: "orange"
    }
  ];

  const recentActivity = [
    {
      action: "Content generation completed",
      time: "2 minutes ago",
      status: "success"
    },
    {
      action: "Cloud scaling triggered",
      time: "5 minutes ago",
      status: "info"
    },
    {
      action: "Security scan completed",
      time: "8 minutes ago",
      status: "success"
    },
    {
      action: "Backup process started",
      time: "12 minutes ago",
      status: "warning"
    }
  ];

  return (
    <>
      <Head>
        <title>Front | Zion - Control Center</title>
        <meta name="description" content="Access Zion's control center for managing autonomous systems and monitoring operations." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Zion Control Center</h1>
                <p className="text-gray-600">Manage your autonomous systems</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-500">All Systems Operational</span>
                </div>
                <span className="text-sm text-gray-500">
                  Last updated: {new Date().toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link 
                key={index}
                href={action.link}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{action.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm">{action.description}</p>
                <div className="mt-4">
                  <span className={`text-${action.color}-600 hover:text-${action.color}-800 font-semibold text-sm`}>
                    Access →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* System Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* System Status */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">System Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-semibold">Content Generation</span>
                    </div>
                    <span className="text-sm text-green-600">Running</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-semibold">Security Monitoring</span>
                    </div>
                    <span className="text-sm text-blue-600">Active</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      <span className="font-semibold">Performance Optimization</span>
                    </div>
                    <span className="text-sm text-gray-600">Idle</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-semibold">Data Backup</span>
                    </div>
                    <span className="text-sm text-yellow-600">Running</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-sm text-gray-600">{activity.time}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          activity.status === 'success' ? 'bg-green-100 text-green-800' :
                          activity.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{activity.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Metrics */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">System Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">227</div>
                <div className="text-gray-600">Active Automations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">45ms</div>
                <div className="text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">0.02%</div>
                <div className="text-gray-600">Error Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                href="/blog"
                className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h4 className="font-semibold text-blue-900 mb-1">Blog & Updates</h4>
                <p className="text-sm text-blue-700">Latest insights and announcements</p>
              </Link>
              
              <Link 
                href="/content-hub"
                className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <h4 className="font-semibold text-green-900 mb-1">Content Hub</h4>
                <p className="text-sm text-green-700">Tutorials and resources</p>
              </Link>
              
              <Link 
                href="/events"
                className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <h4 className="font-semibold text-purple-900 mb-1">Events</h4>
                <p className="text-sm text-purple-700">Workshops and conferences</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-blue-100 mb-6">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            <div className="space-x-4">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Contact Support
              </Link>
              <Link 
                href="/content-hub"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}