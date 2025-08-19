import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ApiDocumentationPage() {
  return (
    <>
      <Head>
        <title>API Documentation — Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's services and integrations." />
        <meta property="og:title" content="API Documentation — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive API documentation for Zion Tech Group's services and integrations." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              API Documentation
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Integrate with Zion Tech Group's services using our comprehensive REST API and SDK documentation.
            </p>
          </div>

          {/* Navigation */}
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>

          {/* Quick Start */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Quick Start
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">1. Get Your API Key</h3>
                <p className="text-white/80 mb-4">
                  Sign up for a developer account and obtain your unique API key from the dashboard.
                </p>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <span className="text-cyan-400">GET</span> /api/v1/auth/key
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-3">2. Make Your First Request</h3>
                <p className="text-white/80 mb-4">
                  Test the API with a simple authentication request.
                </p>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <span className="text-green-400">curl</span> -H "Authorization: Bearer YOUR_API_KEY" \
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;https://api.zion.tech/v1/status
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">3. Explore Endpoints</h3>
                <p className="text-white/80">
                  Browse our comprehensive endpoint documentation below to discover all available features.
                </p>
              </div>
            </div>
          </div>

          {/* API Endpoints */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Authentication */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">🔐 Authentication</h3>
              <div className="space-y-3">
                <div className="bg-slate-800 rounded p-3">
                  <span className="text-green-400 font-mono">POST</span>
                  <span className="text-white/70 ml-2">/api/v1/auth/login</span>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <span className="text-blue-400 font-mono">POST</span>
                  <span className="text-white/70 ml-2">/api/v1/auth/refresh</span>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <span className="text-red-400 font-mono">POST</span>
                  <span className="text-white/70 ml-2">/api/v1/auth/logout</span>
                </div>
              </div>
            </div>

            {/* User Management */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">👥 User Management</h3>
              <div className="space-y-3">
                <div className="bg-slate-800 rounded p-3">
                  <span className="text-green-400 font-mono">GET</span>
                  <span className="text-white/70 ml-2">/api/v1/users/profile</span>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <span className="text-yellow-400 font-mono">PUT</span>
                  <span className="text-white/70 ml-2">/api/v1/users/profile</span>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <span className="text-blue-400 font-mono">GET</span>
                  <span className="text-white/70 ml-2">/api/v1/users/settings</span>
                </div>
              </div>
            </div>

            {/* Automation Services */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">🤖 Automation</h3>
              <div className="space-y-3">
                <div className="bg-slate-800 rounded p-3">
                  <span className="text-green-400 font-mono">GET</span>
                  <span className="text-white/70 ml-2">/api/v1/automation/status</span>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <span className="text-yellow-400 font-mono">POST</span>
                  <span className="text-white/70 ml-2">/api/v1/automation/trigger</span>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <span className="text-blue-400 font-mono">GET</span>
                  <span className="text-white/70 ml-2">/api/v1/automation/logs</span>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">📊 Analytics</h3>
              <div className="space-y-3">
                <div className="bg-slate-800 rounded p-3">
                  <span className="text-green-400 font-mono">GET</span>
                  <span className="text-white/70 ml-2">/api/v1/analytics/performance</span>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <span className="text-green-400 font-mono">GET</span>
                  <span className="text-white/70 ml-2">/api/v1/analytics/usage</span>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <span className="text-green-400 font-mono">GET</span>
                  <span className="text-white/70 ml-2">/api/v1/analytics/health</span>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Code Examples
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* JavaScript/Node.js */}
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">JavaScript/Node.js</h3>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <span className="text-purple-400">const</span> axios = <span className="text-green-400">require</span>(<span className="text-yellow-400">'axios'</span>);
                  <br /><br />
                  <span className="text-purple-400">const</span> api = axios.create({
                  <br />
                  &nbsp;&nbsp;baseURL: <span className="text-yellow-400">'https://api.zion.tech/v1'</span>,
                  <br />
                  &nbsp;&nbsp;headers: {
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Authorization: <span className="text-yellow-400">`Bearer ${process.env.ZION_API_KEY}`</span>
                  <br />
                  &nbsp;&nbsp;}
                  <br />});
                </div>
              </div>

              {/* Python */}
              <div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4">Python</h3>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <span className="text-purple-400">import</span> requests
                  <br /><br />
                  api_key = <span className="text-yellow-400">'your_api_key_here'</span>
                  <br />
                  headers = {
                  <br />
                  &nbsp;&nbsp;<span className="text-yellow-400">'Authorization'</span>: <span className="text-yellow-400">f'Bearer {api_key}'</span>
                  <br />}
                  <br /><br />
                  response = requests.get(
                  <br />
                  &nbsp;&nbsp;<span className="text-yellow-400">'https://api.zion.tech/v1/status'</span>,
                  <br />
                  &nbsp;&nbsp;headers=headers
                  <br />)
                </div>
              </div>
            </div>
          </div>

          {/* SDKs and Libraries */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              SDKs and Libraries
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-cyan-400 text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Node.js SDK</h3>
                <p className="text-white/70 mb-4">Official Node.js client library</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300">npm install zion-sdk</a>
              </div>
              
              <div className="text-center">
                <div className="text-fuchsia-400 text-4xl mb-4">🐍</div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-3">Python SDK</h3>
                <p className="text-white/70 mb-4">Official Python client library</p>
                <a href="#" className="text-fuchsia-400 hover:text-fuchsia-300">pip install zion-sdk</a>
              </div>
              
              <div className="text-center">
                <div className="text-purple-400 text-4xl mb-4">☕</div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Java SDK</h3>
                <p className="text-white/70 mb-4">Official Java client library</p>
                <a href="#" className="text-purple-400 hover:text-purple-300">Maven Central</a>
              </div>
            </div>
          </div>

          {/* Support and Resources */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-white">Need Help?</h2>
            <p className="text-white/70 mb-6">
              Explore our developer resources, join the community, or get in touch with our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                Contact Support
              </Link>
              <a href="mailto:api@zion.tech" className="px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-lg transition-colors">
                api@zion.tech
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}