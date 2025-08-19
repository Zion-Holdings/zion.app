import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ApiDocumentation: React.FC = () => {
  const [activeEndpoint, setActiveEndpoint] = useState('overview');
  const [selectedMethod, setSelectedMethod] = useState('GET');

  const endpoints = {
    overview: {
      title: 'API Overview',
      description: 'Welcome to the Zion App API documentation. Our API provides access to automation data, system status, and operational metrics.',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Base URL:</strong> https://api.zion.app/v1
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Authentication</h3>
              <p className="text-gray-600">API key required for all endpoints</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rate Limiting</h3>
              <p className="text-gray-600">1000 requests per hour</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Format</h3>
              <p className="text-gray-600">JSON responses only</p>
            </div>
          </div>
        </div>
      )
    },
    automation: {
      title: 'Automation Endpoints',
      description: 'Manage and monitor automation systems, workflows, and processes.',
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedMethod === 'GET' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  GET
                </span>
                <span className="font-mono text-sm">/automation/status</span>
                <span className="text-sm text-gray-500">Get automation system status</span>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Response Example:</h4>
                <pre className="bg-gray-50 p-3 rounded text-sm overflow-x-auto">
{`{
  "status": "healthy",
  "active_workflows": 15,
  "last_updated": "2025-01-17T10:30:00Z",
  "uptime": "99.8%"
}`}
                </pre>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedMethod('GET')}
                  className={`px-3 py-1 rounded text-sm font-medium ${
                    selectedMethod === 'GET' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  GET
                </button>
                <button
                  onClick={() => setSelectedMethod('POST')}
                  className={`px-3 py-1 rounded text-sm font-medium ${
                    selectedMethod === 'POST' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  POST
                </button>
                <button
                  onClick={() => setSelectedMethod('PUT')}
                  className={`px-3 py-1 rounded text-sm font-medium ${
                    selectedMethod === 'PUT' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  PUT
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">POST</span>
                <span className="font-mono text-sm">/automation/workflow</span>
                <span className="text-sm text-gray-500">Create new automation workflow</span>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Request Body:</h4>
                <pre className="bg-gray-50 p-3 rounded text-sm overflow-x-auto">
{`{
  "name": "Data Sync Workflow",
  "type": "scheduled",
  "schedule": "0 */6 * * *",
  "steps": [
    {
      "action": "fetch_data",
      "source": "external_api"
    }
  ]
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )
    },
    monitoring: {
      title: 'Monitoring Endpoints',
      description: 'Real-time system monitoring, health checks, and performance metrics.',
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">GET</span>
                <span className="font-mono text-sm">/monitoring/health</span>
                <span className="text-sm text-gray-500">System health check</span>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Response Example:</h4>
                <pre className="bg-gray-50 p-3 rounded text-sm overflow-x-auto">
{`{
  "status": "healthy",
  "services": {
    "database": "operational",
    "cache": "operational",
    "queue": "operational"
  },
  "timestamp": "2025-01-17T10:30:00Z"
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">GET</span>
                <span className="font-mono text-sm">/monitoring/metrics</span>
                <span className="text-sm text-gray-500">Performance metrics</span>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Response Example:</h4>
                <pre className="bg-gray-50 p-3 rounded text-sm overflow-x-auto">
{`{
  "cpu_usage": "23%",
  "memory_usage": "67%",
  "disk_usage": "45%",
  "response_time": "120ms",
  "requests_per_minute": 150
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )
    },
    reports: {
      title: 'Reports Endpoints',
      description: 'Generate and retrieve various system reports and analytics.',
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">GET</span>
                <span className="font-mono text-sm">/reports/automation</span>
                <span className="text-sm text-gray-500">Automation performance report</span>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Query Parameters:</h4>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p><strong>start_date:</strong> Start date for report (YYYY-MM-DD)</p>
                  <p><strong>end_date:</strong> End date for report (YYYY-MM-DD)</p>
                  <p><strong>format:</strong> Report format (json, csv, pdf)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">POST</span>
                <span className="font-mono text-sm">/reports/generate</span>
                <span className="text-sm text-gray-500">Generate custom report</span>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Request Body:</h4>
                <pre className="bg-gray-50 p-3 rounded text-sm overflow-x-auto">
{`{
  "report_type": "performance_summary",
  "parameters": {
    "timeframe": "last_30_days",
    "include_graphs": true,
    "export_format": "pdf"
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <>
      <Head>
        <title>API Documentation - Zion App</title>
        <meta name="description" content="Comprehensive API documentation for Zion App with endpoints, examples, and interactive testing." />
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
                  <Link href="/api-documentation" className="text-blue-600 font-medium">API Docs</Link>
                </nav>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">API Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive API reference for Zion App. Explore endpoints, test requests, and integrate with our automation platform.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {Object.keys(endpoints).map((endpoint) => (
              <button
                key={endpoint}
                onClick={() => setActiveEndpoint(endpoint)}
                className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-all ${
                  activeEndpoint === endpoint
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {endpoints[endpoint as keyof typeof endpoints].title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {endpoints[activeEndpoint as keyof typeof endpoints].title}
            </h2>
            <p className="text-gray-600 mb-8">
              {endpoints[activeEndpoint as keyof typeof endpoints].description}
            </p>
            {endpoints[activeEndpoint as keyof typeof endpoints].content}
          </div>

          {/* Quick Start Guide */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Get Your API Key</h3>
                <p className="text-gray-700 mb-4">Contact our team to receive your unique API key for authentication.</p>
                <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                  Authorization: Bearer YOUR_API_KEY_HERE
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Make Your First Request</h3>
                <p className="text-gray-700 mb-4">Test the API with a simple health check request.</p>
                <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                  curl -H "Authorization: Bearer YOUR_API_KEY" https://api.zion.app/v1/monitoring/health
                </div>
              </div>
            </div>
          </div>

          {/* SDKs and Libraries */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">SDKs and Libraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">JavaScript/Node.js</h3>
                <p className="text-gray-600 mb-4">Official SDK for Node.js applications</p>
                <pre className="bg-gray-50 p-3 rounded text-sm">npm install zion-app-sdk</pre>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Python</h3>
                <p className="text-gray-600 mb-4">Python client library</p>
                <pre className="bg-gray-50 p-3 rounded text-sm">pip install zion-app</pre>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Postman Collection</h3>
                <p className="text-gray-600 mb-4">Import our Postman collection for testing</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                  Download Collection
                </button>
              </div>
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
                  <li><Link href="/api-documentation" className="hover:text-white transition-colors">API Documentation</Link></li>
                  <li><Link href="/component-library" className="hover:text-white transition-colors">Component Library</Link></li>
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

export default ApiDocumentation;