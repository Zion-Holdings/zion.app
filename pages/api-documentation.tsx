import React from 'react';
import Head from 'next/head';

export default function ApiDocumentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>API Documentation - Zion App</title>
        <meta name="description" content="Comprehensive API documentation for Zion App services and integrations" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive guides and references for integrating with Zion App's powerful automation and cloud services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Authentication</h3>
              <p className="text-gray-300 mb-4">
                Secure your API requests with JWT tokens and OAuth 2.0 integration
              </p>
              <div className="bg-slate-800 rounded-lg p-4">
                <code className="text-green-400">
                  Authorization: Bearer YOUR_JWT_TOKEN
                </code>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Rate Limiting</h3>
              <p className="text-gray-300 mb-4">
                Understand our rate limiting policies and best practices
              </p>
              <div className="bg-slate-800 rounded-lg p-4">
                <code className="text-yellow-400">
                  Rate Limit: 1000 requests/hour
                </code>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Core Endpoints</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Automation Management</h4>
                <div className="bg-slate-800 rounded-lg p-4 mb-2">
                  <code className="text-cyan-400">POST /api/automations</code>
                </div>
                <p className="text-gray-300 text-sm">Create and manage cloud automation workflows</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">Content Generation</h4>
                <div className="bg-slate-800 rounded-lg p-4 mb-2">
                  <code className="text-cyan-400">POST /api/content/generate</code>
                </div>
                <p className="text-gray-300 text-sm">Generate AI-powered content and reports</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">System Monitoring</h4>
                <div className="bg-slate-800 rounded-lg p-4 mb-2">
                  <code className="text-cyan-400">GET /api/health/status</code>
                </div>
                <p className="text-gray-300 text-sm">Monitor system health and performance metrics</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Getting Started</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                To get started with our API, you'll need to:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Register for an API key in your dashboard</li>
                <li>Review our authentication documentation</li>
                <li>Explore our interactive API playground</li>
                <li>Check out our SDKs and examples</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}