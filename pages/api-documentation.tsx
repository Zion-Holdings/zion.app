import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const APIDocumentation: React.FC = () => {
  const apiEndpoints = [
    {
      method: 'GET',
      path: '/api/health',
      description: 'Check system health status',
      response: '{ "status": "healthy", "timestamp": "2025-01-17T..." }'
    },
    {
      method: 'GET',
      path: '/api/automation/status',
      description: 'Get automation system status',
      response: '{ "automations": 227, "active": 45, "lastRun": "..." }'
    },
    {
      method: 'POST',
      path: '/api/content/generate',
      description: 'Generate new content using AI',
      response: '{ "content": "...", "generatedAt": "..." }'
    },
    {
      method: 'GET',
      path: '/api/reports/summary',
      description: 'Get system reports summary',
      response: '{ "reports": [...], "total": 156 }'
    },
    {
      method: 'GET',
      path: '/api/performance/metrics',
      description: 'Get performance metrics',
      response: '{ "lighthouse": {...}, "uptime": "99.9%" }'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>API Documentation - bolt.new.zion.app</title>
        <meta name="description" content="Complete API documentation for bolt.new.zion.app automation platform" />
        <meta name="keywords" content="API, documentation, automation, cloud-native, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              API Documentation
            </h1>
            <p className="text-xl text-gray-600">
              Complete reference for all available API endpoints and integrations
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Getting Started</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Base URL</h3>
                <code className="bg-gray-100 px-3 py-2 rounded text-sm font-mono">
                  https://bolt.new.zion.app
                </code>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Authentication</h3>
                <p className="text-gray-600">
                  Most endpoints are public and don't require authentication. For protected endpoints, 
                  include your API key in the Authorization header.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Rate Limiting</h3>
                <p className="text-gray-600">
                  API calls are limited to 1000 requests per hour per IP address.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">API Endpoints</h2>
            <div className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="text-gray-700 mb-3">{endpoint.description}</p>
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Response Example:</h4>
                    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                      <code>{endpoint.response}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Error Handling</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-medium text-gray-800">4xx Errors</h3>
                <p className="text-gray-600">Client errors - check your request format and parameters</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-medium text-gray-800">5xx Errors</h3>
                <p className="text-gray-600">Server errors - our team will be notified automatically</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">SDK & Libraries</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">JavaScript/Node.js</h3>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  npm install @zion/bolt-api
                </code>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Python</h3>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  pip install zion-bolt-api
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;