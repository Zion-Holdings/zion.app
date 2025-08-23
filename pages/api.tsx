import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Zap, Copy, Check, ExternalLink } from 'lucide-react';

const apiEndpoints = [
  {
    method: 'GET',
    endpoint: '/api/analytics',
    description: 'Retrieve website analytics data',
    parameters: [
      { name: 'timeframe', type: 'string', required: true, description: '7d, 30d, 90d, or 1y' },
      { name: 'metric', type: 'string', required: false, description: 'views, conversions, or users' }
    ],
    example: `curl -X GET "https://api.ziontechgroup.com/analytics?timeframe=30d&metric=views" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
  },
  {
    method: 'POST',
    endpoint: '/api/error-reporting',
    description: 'Submit error reports and logs',
    parameters: [
      { name: 'level', type: 'string', required: true, description: 'error, warning, or info' },
      { name: 'message', type: 'string', required: true, description: 'Error message' },
      { name: 'stack', type: 'string', required: false, description: 'Stack trace' }
    ],
    example: `curl -X POST "https://api.ziontechgroup.com/error-reporting" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"level": "error", "message": "Database connection failed"}'`
  },
  {
    method: 'GET',
    endpoint: '/api/services',
    description: 'List all available services',
    parameters: [
      { name: 'category', type: 'string', required: false, description: 'Filter by service category' },
      { name: 'limit', type: 'number', required: false, description: 'Number of results to return' }
    ],
    example: `curl -X GET "https://api.ziontechgroup.com/services?category=ai&limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
  },
  {
    method: 'POST',
    endpoint: '/api/contact',
    description: 'Submit contact form data',
    parameters: [
      { name: 'name', type: 'string', required: true, description: 'Contact name' },
      { name: 'email', type: 'string', required: true, description: 'Contact email' },
      { name: 'message', type: 'string', required: true, description: 'Contact message' }
    ],
    example: `curl -X POST "https://api.ziontechgroup.com/contact" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John Doe", "email": "john@example.com", "message": "Hello!"}'`
  }
];

const SDKs = [
  {
    name: 'JavaScript/Node.js',
    installation: 'npm install @ziontechgroup/api-client',
    example: `import { ZionAPI } from '@ziontechgroup/api-client';

const client = new ZionAPI('YOUR_API_KEY');
const analytics = await client.analytics.get('30d');`
  },
  {
    name: 'Python',
    installation: 'pip install zion-api-client',
    example: `from zion_api import ZionAPI

client = ZionAPI('YOUR_API_KEY')
analytics = client.analytics.get('30d')`
  },
  {
    name: 'Go',
    installation: 'go get github.com/ziontechgroup/go-api-client',
    example: `import "github.com/ziontechgroup/go-api-client"

client := zionapi.NewClient("YOUR_API_KEY")
analytics, err := client.Analytics.Get("30d")`
  }
];

const APIPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const seoConfig = {
    title: "API Documentation | Zion Tech Group",
    description: "Comprehensive API documentation for Zion Tech Group services. Learn how to integrate our analytics, reporting, and service APIs into your applications.",
    keywords: "API documentation, REST API, developer tools, API integration, Zion Tech Group API, analytics API, reporting API",
    image: "/og-image.svg",
    url: "https://ziontechgroup.com/api",
    type: "website"
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 text-white py-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Powerful APIs to integrate Zion Tech Group services into your applications. Built for developers, by developers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Quick Start
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
              >
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-4">1. Get API Key</h3>
                <p className="text-gray-300">
                  Sign up for a free account and generate your API key from the developer dashboard.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
              >
                <Code className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-4">2. Install SDK</h3>
                <p className="text-gray-300">
                  Use our official SDKs for JavaScript, Python, Go, or make direct HTTP requests.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
              >
                <Zap className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-4">3. Start Building</h3>
                <p className="text-gray-300">
                  Make your first API call and start integrating our services into your application.
                </p>
              </motion.div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Your first API call</h3>
                <button
                  onClick={() => copyToClipboard('curl -X GET "https://api.ziontechgroup.com/services" \\\n  -H "Authorization: Bearer YOUR_API_KEY"', 'quickstart')}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300"
                >
                  {copiedCode === 'quickstart' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="text-sm">{copiedCode === 'quickstart' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400 text-sm">
{`curl -X GET "https://api.ziontechgroup.com/services" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              API Endpoints
            </h2>
            
            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-300' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-purple-500/20 text-purple-300'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-cyan-400">{endpoint.endpoint}</code>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{endpoint.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-4">Parameters</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-2 text-gray-400">Name</th>
                            <th className="text-left py-2 text-gray-400">Type</th>
                            <th className="text-left py-2 text-gray-400">Required</th>
                            <th className="text-left py-2 text-gray-400">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {endpoint.parameters.map((param, paramIndex) => (
                            <tr key={paramIndex} className="border-b border-gray-800">
                              <td className="py-2 font-mono text-cyan-400">{param.name}</td>
                              <td className="py-2 text-gray-300">{param.type}</td>
                              <td className="py-2">
                                <span className={`px-2 py-1 rounded text-xs ${
                                  param.required ? 'bg-red-500/20 text-red-300' : 'bg-gray-500/20 text-gray-300'
                                }`}>
                                  {param.required ? 'Required' : 'Optional'}
                                </span>
                              </td>
                              <td className="py-2 text-gray-300">{param.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">Example</h4>
                      <button
                        onClick={() => copyToClipboard(endpoint.example, `example-${index}`)}
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300"
                      >
                        {copiedCode === `example-${index}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        <span className="text-sm">{copiedCode === `example-${index}` ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <code className="text-green-400 text-sm">{endpoint.example}</code>
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Official SDKs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SDKs.map((sdk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
                >
                  <h3 className="text-xl font-bold mb-4">{sdk.name}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-gray-400">Installation</h4>
                    <pre className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                      <code className="text-green-400 text-sm">{sdk.installation}</code>
                    </pre>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-gray-400">Example Usage</h4>
                    <pre className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                      <code className="text-cyan-400 text-sm">{sdk.example}</code>
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our developer support team is here to help you integrate and succeed with our APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Support
              </a>
              <a
                href="/docs"
                className="border border-cyan-500 text-cyan-400 py-3 px-8 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                View Full Docs
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default APIPage;