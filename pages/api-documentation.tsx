import React from 'react';
import Head from 'next/head';

export default function ApiDocumentation() {
  return (
    <>
      <Head>
        <title>API Documentation — Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's autonomous systems and automation services." />
        <meta property="og:title" content="API Documentation — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive API documentation for Zion Tech Group's autonomous systems and automation services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              API Documentation
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive API reference for Zion Tech Group's autonomous systems, automation services, and intelligent infrastructure.
            </p>
          </section>

          {/* Navigation */}
          <nav className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                ← Back to Home
              </a>
              <a href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Services
              </a>
              <a href="/automation" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Automation
              </a>
            </div>
          </nav>

          {/* API Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">API Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Authentication</h3>
                <p className="text-white/80 mb-4">
                  Secure API access using JWT tokens and OAuth 2.0 for enterprise clients.
                </p>
                <code className="text-sm text-cyan-200 bg-black/30 px-2 py-1 rounded">
                  Authorization: Bearer &lt;token&gt;
                </code>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Rate Limiting</h3>
                <p className="text-white/80 mb-4">
                  Intelligent rate limiting with dynamic thresholds based on usage patterns.
                </p>
                <code className="text-sm text-fuchsia-200 bg-black/30 px-2 py-1 rounded">
                  X-RateLimit-Remaining: 999
                </code>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-green-300">Webhooks</h3>
                <p className="text-white/80 mb-4">
                  Real-time event notifications for automation triggers and system updates.
                </p>
                <code className="text-sm text-green-200 bg-black/30 px-2 py-1 rounded">
                  POST /webhooks/events
                </code>
              </div>
            </div>
          </section>

          {/* Core Endpoints */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Core Endpoints</h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-mono">GET</span>
                  <code className="text-lg text-white font-mono">/api/v1/automations</code>
                </div>
                <p className="text-white/80 mb-4">
                  Retrieve all active automation workflows and their current status.
                </p>
                <div className="bg-black/30 rounded-lg p-4">
                  <pre className="text-sm text-green-200">
{`{
  "automations": [
    {
      "id": "auto_001",
      "name": "Content Generation",
      "status": "active",
      "last_run": "2025-01-17T10:30:00Z"
    }
  ]
}`}
                  </pre>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-mono">POST</span>
                  <code className="text-lg text-white font-mono">/api/v1/automations/trigger</code>
                </div>
                <p className="text-white/80 mb-4">
                  Manually trigger an automation workflow with custom parameters.
                </p>
                <div className="bg-black/30 rounded-lg p-4">
                  <pre className="text-sm text-blue-200">
{`{
  "automation_id": "auto_001",
  "parameters": {
    "content_type": "blog_post",
    "topic": "AI automation trends"
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-mono">GET</span>
                  <code className="text-lg text-white font-mono">/api/v1/health</code>
                </div>
                <p className="text-white/80 mb-4">
                  System health check and performance metrics.
                </p>
                <div className="bg-black/30 rounded-lg p-4">
                  <pre className="text-sm text-purple-200">
{`{
  "status": "healthy",
  "uptime": "99.9%",
  "automations_active": 227,
  "pages_generated": 2960
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* SDKs and Libraries */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">SDKs & Libraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-yellow-300">JavaScript/Node.js</h3>
                <p className="text-white/80 mb-4">
                  Official SDK for Node.js and browser environments.
                </p>
                <code className="text-sm text-yellow-200 bg-black/30 px-2 py-1 rounded block mb-2">
                  npm install @zion-tech/api-client
                </code>
                <div className="bg-black/30 rounded-lg p-4">
                  <pre className="text-sm text-yellow-200">
{`import { ZionAPI } from '@zion-tech/api-client';

const api = new ZionAPI('your-api-key');
const automations = await api.automations.list();`}
                  </pre>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-orange-300">Python</h3>
                <p className="text-white/80 mb-4">
                  Python client library for automation and content generation.
                </p>
                <code className="text-sm text-orange-200 bg-black/30 px-2 py-1 rounded block mb-2">
                  pip install zion-tech-api
                </code>
                <div className="bg-black/30 rounded-lg p-4">
                  <pre className="text-sm text-orange-200">
{`from zion_tech import ZionAPI

api = ZionAPI('your-api-key')
automations = api.automations.list()`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Getting Started</h2>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6 text-white">Quick Start Guide</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-300 mb-2">Get Your API Key</h4>
                    <p className="text-white/80">Sign up for a Zion Tech Group account and generate your API key from the dashboard.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</span>
                  <div>
                    <h4 className="text-lg font-semibold text-fuchsia-300 mb-2">Install SDK</h4>
                    <p className="text-white/80">Install the appropriate SDK for your programming language and environment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</span>
                  <div>
                    <h4 className="text-lg font-semibold text-green-300 mb-2">Make Your First Call</h4>
                    <p className="text-white/80">Test the API with a simple health check or automation listing request.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white/90">Need Help?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you integrate with our APIs and get the most out of our automation services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white font-semibold transition-all duration-200">
                Contact Support
              </a>
              <a href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Learn About Automation
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}