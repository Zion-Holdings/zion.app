import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MainFrontPage() {
  const systemOverview = [
    {
      name: "Content Generation",
      status: "Active",
      progress: 85,
      color: "green",
      description: "AI-powered content creation running smoothly"
    },
    {
      name: "Cloud Management",
      status: "Active",
      progress: 100,
      color: "blue",
      description: "Autonomous cloud infrastructure management"
    },
    {
      name: "Security Monitoring",
      status: "Active",
      progress: 100,
      color: "purple",
      description: "24/7 threat detection and response"
    },
    {
      name: "Performance Optimization",
      status: "Idle",
      progress: 0,
      color: "gray",
      description: "Standby mode, ready to activate"
    }
  ];

  const quickStats = [
    { label: "Total Automations", value: "227", change: "+12", trend: "up" },
    { label: "System Uptime", value: "99.9%", change: "+0.1%", trend: "up" },
    { label: "Response Time", value: "45ms", change: "-5ms", trend: "down" },
    { label: "Error Rate", value: "0.02%", change: "-0.01%", trend: "down" }
  ];

  return (
    <>
      <Head>
        <title>Main Front | Zion - System Overview</title>
        <meta name="description" content="Main control center for Zion's autonomous systems and operations." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Zion Main Control</h1>
                <p className="text-gray-600">Primary system overview and management</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-500">All Systems Operational</span>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-400 text-sm">{stat.label}</h3>
                  <span className={`text-sm ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="mt-2">
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-blue-500 rounded-full transition-all duration-300`}
                      style={{ width: `${Math.random() * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systemOverview.map((system, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{system.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    system.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {system.status}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{system.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-${system.color}-500 h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${system.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">{system.progress}%</span>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Manage →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/live-dashboard"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Live Dashboard</h3>
              <p className="text-gray-600 text-sm">Real-time system monitoring</p>
            </Link>
            
            <Link 
              href="/automation"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Automation Hub</h3>
              <p className="text-gray-600 text-sm">Manage autonomous systems</p>
            </Link>
            
            <Link 
              href="/reports"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Reports</h3>
              <p className="text-gray-600 text-sm">Analytics and insights</p>
            </Link>
            
            <Link 
              href="/playground"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Playground</h3>
              <p className="text-gray-600 text-sm">Test and experiment</p>
            </Link>
          </div>
        </div>

        {/* System Health */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">System Health Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">Excellent</div>
                <div className="text-sm text-gray-600">Overall Health Score</div>
                <div className="mt-4">
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="w-4/5 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Continuous Operation</div>
                <div className="mt-4">
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="w-full h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Reliability</div>
                <div className="mt-4">
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="w-5/6 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Navigation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Core Systems</h4>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/automation" className="text-blue-600 hover:text-blue-800">Automation</Link></li>
                  <li><Link href="/reports" className="text-blue-600 hover:text-blue-800">Reports</Link></li>
                  <li><Link href="/live-dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Content & Resources</h4>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/blog" className="text-blue-600 hover:text-blue-800">Blog</Link></li>
                  <li><Link href="/content-hub" className="text-blue-600 hover:text-blue-800">Content Hub</Link></li>
                  <li><Link href="/events" className="text-blue-600 hover:text-blue-800">Events</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link></li>
                  <li><Link href="/playground" className="text-blue-600 hover:text-blue-800">Playground</Link></li>
                  <li><Link href="/about" className="text-blue-600 hover:text-blue-800">About</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}