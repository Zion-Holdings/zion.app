import React from 'react';
import Head from 'next/head';

export default function ApiDocumentation() {
  return (
    <>
      <Head>
        <title>API Documentation — Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's autonomous systems and services." />
        <meta property="og:title" content="API Documentation — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive API documentation for Zion Tech Group's autonomous systems and services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              API Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive API reference for Zion Tech Group's autonomous systems, automation services, and cloud infrastructure.
            </p>
          </section>

          <div className="max-w-6xl mx-auto">
            {/* Authentication */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Authentication</h2>
              <div className="bg-slate-900 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-white">API Keys</h3>
                <p className="text-white/80 mb-4">All API requests require authentication using your API key in the header:</p>
                <code className="block bg-slate-800 p-4 rounded text-green-400 font-mono">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
              
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">Rate Limiting</h3>
                <p className="text-white/80">Standard tier: 1000 requests/hour, Enterprise tier: 10000 requests/hour</p>
              </div>
            </section>

            {/* Core APIs */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Core APIs</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">Automation Engine API</h3>
                  <p className="text-white/80 mb-4">Manage autonomous automation workflows and systems</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-mono">POST</span>
                      <code className="text-cyan-400 font-mono">/api/v1/automation/workflows</code>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm font-mono">GET</span>
                      <code className="text-cyan-400 font-mono">/api/v1/automation/status</code>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded text-sm font-mono">PUT</span>
                      <code className="text-cyan-400 font-mono">/api/v1/automation/configure</code>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">Content Generation API</h3>
                  <p className="text-white/80 mb-4">AI-powered content creation and management</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-mono">POST</span>
                      <code className="text-cyan-400 font-mono">/api/v1/content/generate</code>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm font-mono">GET</span>
                      <code className="text-cyan-400 font-mono">/api/v1/content/templates</code>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">Monitoring & Analytics API</h3>
                  <p className="text-white/80 mb-4">Real-time system monitoring and performance metrics</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm font-mono">GET</span>
                      <code className="text-cyan-400 font-mono">/api/v1/monitoring/health</code>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm font-mono">GET</span>
                      <code className="text-cyan-400 font-mono">/api/v1/analytics/performance</code>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SDKs & Libraries */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-green-400">SDKs & Libraries</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">JavaScript/Node.js</h3>
                  <p className="text-white/80 mb-4">Official SDK for Node.js and browser environments</p>
                  <code className="block bg-slate-800 p-3 rounded text-green-400 font-mono text-sm">
                    npm install @zion-tech/api-client
                  </code>
                </div>

                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">Python</h3>
                  <p className="text-white/80 mb-4">Python client library with async support</p>
                  <code className="block bg-slate-800 p-3 rounded text-green-400 font-mono text-sm">
                    pip install zion-tech-api
                  </code>
                </div>

                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">Go</h3>
                  <p className="text-white/80 mb-4">High-performance Go client</p>
                  <code className="block bg-slate-800 p-3 rounded text-green-400 font-mono text-sm">
                    go get github.com/zion-tech/go-api-client
                  </code>
                </div>

                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">REST API</h3>
                  <p className="text-white/80 mb-4">Standard REST endpoints for all platforms</p>
                  <code className="block bg-slate-800 p-3 rounded text-green-400 font-mono text-sm">
                    Base URL: https://api.zion.tech/v1
                  </code>
                </div>
              </div>
            </section>

            {/* Webhooks */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Webhooks</h2>
              
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">Event Notifications</h3>
                <p className="text-white/80 mb-4">Receive real-time notifications for system events:</p>
                <ul className="space-y-2 text-white/80">
                  <li>• Automation workflow completion</li>
                  <li>• System health alerts</li>
                  <li>• Content generation updates</li>
                  <li>• Security incident notifications</li>
                </ul>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Webhook Configuration</h4>
                  <code className="block bg-slate-800 p-4 rounded text-green-400 font-mono">
                    POST /api/v1/webhooks/configure<br/>
                    {<br/>
                    &nbsp;&nbsp;"url": "https://your-domain.com/webhook",<br/>
                    &nbsp;&nbsp;"events": ["workflow.completed", "alert.triggered"],<br/>
                    &nbsp;&nbsp;"secret": "your_webhook_secret"<br/>
                    }
                  </code>
                </div>
              </div>
            </section>

            {/* Error Handling */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Error Handling</h2>
              
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">Standard Error Responses</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">400 Bad Request</h4>
                    <code className="block bg-slate-800 p-3 rounded text-red-400 font-mono text-sm">
                      {<br/>
                      &nbsp;&nbsp;"error": "validation_failed",<br/>
                      &nbsp;&nbsp;"message": "Invalid parameters provided",<br/>
                      &nbsp;&nbsp;"details": {...}<br/>
                      }
                    </code>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">401 Unauthorized</h4>
                    <code className="block bg-slate-800 p-3 rounded text-red-400 font-mono text-sm">
                      {<br/>
                      &nbsp;&nbsp;"error": "authentication_failed",<br/>
                      &nbsp;&nbsp;"message": "Invalid or expired API key"<br/>
                      }
                    </code>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">429 Rate Limited</h4>
                    <code className="block bg-slate-800 p-3 rounded text-red-400 font-mono text-sm">
                      {<br/>
                      &nbsp;&nbsp;"error": "rate_limit_exceeded",<br/>
                      &nbsp;&nbsp;"message": "Rate limit exceeded",<br/>
                      &nbsp;&nbsp;"retry_after": 3600<br/>
                      }
                    </code>
                  </div>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section className="p-8 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl border border-cyan-500/20">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Getting Started</h2>
              <p className="text-white/80 mb-6">Ready to integrate with Zion Tech Group's autonomous systems?</p>
              
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                  Get API Access
                </a>
                <a href="/reports" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                  View System Status
                </a>
                <a href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                  Explore Automation
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}