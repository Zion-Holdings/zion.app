import React from 'react';
import Head from 'next/head';

const APIDocumentation: React.FC = () => {
  return (
    <>
      <Head>
        <title>API Documentation - Zion AI Marketplace</title>
        <meta name="description" content="Complete API documentation for Zion AI Marketplace services and integrations" />
        <meta name="keywords" content="API, documentation, Zion AI, marketplace, integration" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/30">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mt-4">
              Complete integration guide for Zion AI Marketplace
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          {/* Quick Start */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Quick Start</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Authentication</h3>
              <p className="text-gray-300 mb-4">
                All API requests require authentication using your API key in the Authorization header.
              </p>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm">
                <code className="text-green-400">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
            </div>
          </section>

          {/* Core Endpoints */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Core Endpoints</h2>
            
            {/* Services API */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Services API</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-blue-300">GET /api/services</h4>
                  <p className="text-gray-300 text-sm">Retrieve all available services</p>
                  <div className="bg-gray-900 rounded p-3 mt-2 font-mono text-sm">
                    <code className="text-green-400">
                      GET https://api.zion.ai/services
                    </code>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-blue-300">GET /api/services/{'{id}'}</h4>
                  <p className="text-gray-300 text-sm">Get service details by ID</p>
                  <div className="bg-gray-900 rounded p-3 mt-2 font-mono text-sm">
                    <code className="text-green-400">
                      GET https://api.zion.ai/services/123
                    </code>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-blue-300">POST /api/services</h4>
                  <p className="text-gray-300 text-sm">Create a new service</p>
                  <div className="bg-gray-900 rounded p-3 mt-2 font-mono text-sm">
                    <code className="text-green-400">
                      POST https://api.zion.ai/services
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Users API */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Users API</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-blue-300">GET /api/users/profile</h4>
                  <p className="text-gray-300 text-sm">Get current user profile</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-blue-300">PUT /api/users/profile</h4>
                  <p className="text-gray-300 text-sm">Update user profile</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-blue-300">GET /api/users/talents</h4>
                  <p className="text-gray-300 text-sm">Get available talents</p>
                </div>
              </div>
            </div>

            {/* Projects API */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Projects API</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-blue-300">GET /api/projects</h4>
                  <p className="text-gray-300 text-sm">List all projects</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-blue-300">POST /api/projects</h4>
                  <p className="text-gray-300 text-sm">Create new project</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-blue-300">GET /api/projects/{'{id}'}</h4>
                  <p className="text-gray-300 text-sm">Get project details</p>
                </div>
              </div>
            </div>
          </section>

          {/* Response Formats */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Response Formats</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Standard Response</h3>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-green-400">
{`{
  "success": true,
  "data": {
    // Response data here
  },
  "message": "Operation successful",
  "timestamp": "2025-01-17T10:30:00Z"
}`}
                </pre>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 mt-6">Error Response</h3>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-red-400">
{`{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": ["Field 'name' is required"]
  },
  "timestamp": "2025-01-17T10:30:00Z"
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Rate Limiting */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Rate Limiting</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
              <p className="text-gray-300 mb-4">
                API requests are limited to ensure fair usage and system stability.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">1000</div>
                  <div className="text-gray-300">requests per hour</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">100</div>
                  <div className="text-gray-300">requests per minute</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">10</div>
                  <div className="text-gray-300">requests per second</div>
                </div>
              </div>
            </div>
          </section>

          {/* SDKs & Libraries */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">SDKs & Libraries</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">JavaScript/Node.js</h3>
                <p className="text-gray-300 mb-4">Official SDK for Node.js and browser environments</p>
                <div className="bg-gray-900 rounded p-3 font-mono text-sm">
                  <code className="text-green-400">npm install @zion-ai/sdk</code>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Python</h3>
                <p className="text-gray-300 mb-4">Python client library for easy integration</p>
                <div className="bg-gray-900 rounded p-3 font-mono text-sm">
                  <code className="text-green-400">pip install zion-ai</code>
                </div>
              </div>
            </div>
          </section>

          {/* Webhooks */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Webhooks</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
              <p className="text-gray-300 mb-4">
                Configure webhooks to receive real-time notifications about events in your account.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-blue-300">Available Events</h4>
                  <ul className="text-gray-300 text-sm space-y-2 mt-2">
                    <li>• project.created - New project created</li>
                    <li>• project.updated - Project details updated</li>
                    <li>• service.completed - Service delivery completed</li>
                    <li>• payment.received - Payment received</li>
                    <li>• user.registered - New user registration</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-blue-300">Webhook Setup</h4>
                  <div className="bg-gray-900 rounded p-3 mt-2 font-mono text-sm">
                    <code className="text-green-400">
                      POST /api/webhooks
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Support & Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Documentation</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• <a href="/guides" className="text-blue-400 hover:text-blue-300">Integration Guides</a></li>
                  <li>• <a href="/examples" className="text-blue-400 hover:text-blue-300">Code Examples</a></li>
                  <li>• <a href="/tutorials" className="text-blue-400 hover:text-blue-300">Step-by-step Tutorials</a></li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Community</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• <a href="/discord" className="text-blue-400 hover:text-blue-300">Discord Server</a></li>
                  <li>• <a href="/github" className="text-blue-400 hover:text-blue-300">GitHub Discussions</a></li>
                  <li>• <a href="/contact" className="text-blue-400 hover:text-blue-300">Contact Support</a></li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-blue-500/30 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center text-gray-400">
              <p>Need help? Contact our developer support team</p>
              <p className="mt-2">
                <a href="/contact" className="text-blue-400 hover:text-blue-300">
                  Get Support →
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default APIDocumentation;