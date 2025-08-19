import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const MainFront: React.FC = () => {
  const mainFeatures = [
    {
      icon: '🏗️',
      title: 'Main Development Hub',
      description: 'Centralized development environment with all tools and resources'
    },
    {
      icon: '🔧',
      title: 'Integrated Tooling',
      description: 'Seamlessly integrated development tools and automation systems'
    },
    {
      icon: '📊',
      title: 'Project Management',
      description: 'Comprehensive project tracking and development analytics'
    },
    {
      icon: '🚀',
      title: 'Deployment Pipeline',
      description: 'Automated deployment and continuous integration workflows'
    }
  ];

  const developmentTools = [
    { name: 'Code Editor', status: 'Active', description: 'Advanced code editing with AI assistance' },
    { name: 'Version Control', status: 'Active', description: 'Git integration with automated workflows' },
    { name: 'Testing Suite', status: 'Active', description: 'Comprehensive testing and quality assurance' },
    { name: 'Build System', status: 'Active', description: 'Automated build and compilation processes' }
  ];

  const projectStats = [
    { metric: 'Active Projects', value: '45', trend: 'up' },
    { metric: 'Team Members', value: '12', trend: 'stable' },
    { metric: 'Deployments', value: '156', trend: 'up' },
    { metric: 'Success Rate', value: '99.8%', trend: 'stable' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Head>
        <title>Main Front - bolt.new.zion.app</title>
        <meta name="description" content="Main development hub and project management center" />
        <meta name="keywords" content="main, development, hub, project management, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Main Development Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Welcome to the central command center for all your development projects. 
              Manage, build, and deploy with unprecedented efficiency.
            </p>
            <div className="mt-8">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          {/* Main Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Project Statistics */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Project Overview
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectStats.map((stat, index) => (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 mb-2">{stat.metric}</div>
                  <div className={`text-sm ${
                    stat.trend === 'up' ? 'text-green-500' : 
                    stat.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                  }`}>
                    {stat.trend === 'up' ? '↗ Trending Up' : 
                     stat.trend === 'down' ? '↘ Trending Down' : '→ Stable'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Development Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {developmentTools.map((tool, index) => (
                <div key={index} className="flex items-center justify-between p-6 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {tool.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Quick Actions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link 
                href="/playground" 
                className="bg-blue-600 text-white p-6 rounded-lg text-center hover:bg-blue-700 transition-colors"
              >
                <div className="text-4xl mb-3">🎮</div>
                <h3 className="text-lg font-semibold">Start Development</h3>
                <p className="text-blue-100 text-sm mt-2">Begin coding in our playground</p>
              </Link>
              <Link 
                href="/live-dashboard" 
                className="bg-green-600 text-white p-6 rounded-lg text-center hover:bg-green-700 transition-colors"
              >
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-lg font-semibold">View Dashboard</h3>
                <p className="text-green-100 text-sm mt-2">Monitor system status</p>
              </Link>
              <Link 
                href="/automation" 
                className="bg-purple-600 text-white p-6 rounded-lg text-center hover:bg-purple-700 transition-colors"
              >
                <div className="text-4xl mb-3">⚙️</div>
                <h3 className="text-lg font-semibold">Manage Automation</h3>
                <p className="text-purple-100 text-sm mt-2">Configure workflows</p>
              </Link>
            </div>
          </div>

          {/* Project Management */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Project Management
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Active Projects</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">E-commerce Platform</span>
                    <span className="text-sm text-green-600">In Progress</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Mobile App</span>
                    <span className="text-sm text-blue-600">Planning</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">API Gateway</span>
                    <span className="text-sm text-purple-600">Testing</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Team Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Sarah committed to main branch</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Mike deployed to staging</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Alex ran performance tests</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFront;