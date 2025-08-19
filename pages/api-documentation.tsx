import React from 'react';
import Head from 'next/head';

export default function ApiDocumentationPage() {
  return (
    <>
      <Head>
        <title>API Documentation | Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's autonomous systems and automation services." />
        <meta property="og:title" content="API Documentation - Zion Tech Group" />
        <meta property="og:description" content="Complete API reference and integration guides." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              API Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Integrate with Zion Tech Group's autonomous systems and automation services
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Home
              </a>
              <a href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Automation
              </a>
              <a href="/live-dashboard" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Live Dashboard
              </a>
              <a href="/component-library" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Components
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Getting Started</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Authentication</h3>
                  <p className="text-white/70 mb-4">
                    All API requests require authentication using API keys or OAuth 2.0 tokens.
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <code className="text-cyan-300">
                      Authorization: Bearer YOUR_API_KEY
                    </code>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Base URL</h3>
                  <p className="text-white/70 mb-4">
                    All API endpoints are relative to our base URL.
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <code className="text-cyan-300">
                      https://api.zion.tech/v1
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Core Endpoints</h2>
              <div className="space-y-6">
                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Automation Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="inline-block bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-mono mb-2">GET</span>
                      <code className="text-white/90">/automations</code>
                      <p className="text-white/70 text-sm mt-1">List all active automations</p>
                    </div>
                    <div>
                      <span className="inline-block bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm font-mono mb-2">POST</span>
                      <code className="text-white/90">/automations</code>
                      <p className="text-white/70 text-sm mt-1">Create new automation</p>
                    </div>
                    <div>
                      <span className="inline-block bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-sm font-mono mb-2">PUT</span>
                      <code className="text-white/90">/automations/{'{id}'}</code>
                      <p className="text-white/70 text-sm mt-1">Update automation</p>
                    </div>
                    <div>
                      <span className="inline-block bg-red-500/20 text-red-400 px-2 py-1 rounded text-sm font-mono mb-2">DELETE</span>
                      <code className="text-white/90">/automations/{'{id}'}</code>
                      <p className="text-white/70 text-sm mt-1">Delete automation</p>
                    </div>
                  </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">System Health</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="inline-block bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-mono mb-2">GET</span>
                      <code className="text-white/90">/health</code>
                      <p className="text-white/70 text-sm mt-1">System health status</p>
                    </div>
                    <div>
                      <span className="inline-block bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-mono mb-2">GET</span>
                      <code className="text-white/90">/health/automations</code>
                      <p className="text-white/70 text-sm mt-1">Automation health check</p>
                    </div>
                    <div>
                      <span className="inline-block bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-mono mb-2">GET</span>
                      <code className="text-white/90">/health/redundancy</code>
                      <p className="text-white/70 text-sm mt-1">Redundancy system status</p>
                    </div>
                    <div>
                      <span className="inline-block bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-mono mb-2">GET</span>
                      <code className="text-white/90">/health/monitoring</code>
                      <p className="text-white/70 text-sm mt-1">Monitoring system status</p>
                    </div>
                  </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Content Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="inline-block bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-mono mb-2">GET</span>
                      <code className="text-white/90">/content</code>
                      <p className="text-white/70 text-sm mt-1">List all content</p>
                    </div>
                    <div>
                      <span className="inline-block bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm font-mono mb-2">POST</span>
                      <code className="text-white/90">/content</code>
                      <p className="text-white/70 text-sm mt-1">Create new content</p>
                    </div>
                    <div>
                      <span className="inline-block bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-mono mb-2">GET</span>
                      <code className="text-white/90">/content/{'{id}'}</code>
                      <p className="text-white/70 text-sm mt-1">Get specific content</p>
                    </div>
                    <div>
                      <span className="inline-block bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-sm font-mono mb-2">PATCH</span>
                      <code className="text-white/90">/content/{'{id}'}</code>
                      <p className="text-white/70 text-sm mt-1">Update content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Response Format</h2>
              <div className="bg-slate-800 rounded-lg p-4">
                <pre className="text-cyan-300 text-sm overflow-x-auto">
{`{
  "success": true,
  "data": {
    "id": "automation_123",
    "name": "Content Generator",
    "status": "active",
    "created_at": "2025-01-17T10:00:00Z"
  },
  "meta": {
    "timestamp": "2025-01-17T10:00:00Z",
    "version": "1.0.0"
  }
}`}
                </pre>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Rate Limits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">1000</div>
                  <div className="text-sm text-white/70">Requests per hour</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fuchsia-400">100</div>
                  <div className="text-sm text-white/70">Requests per minute</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">10</div>
                  <div className="text-sm text-white/70">Concurrent requests</div>
                </div>
              </div>
              <p className="text-white/70 text-center mt-4">
                Rate limits are applied per API key and reset every hour.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}