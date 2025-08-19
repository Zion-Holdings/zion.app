import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function APIDocumentationPage() {
  return (
    <>
      <Head>
        <title>API Documentation — Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's autonomous automation and AI services." />
        <meta property="og:title" content="API Documentation — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive API documentation for Zion Tech Group's autonomous automation and AI services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              <span className="mr-2">←</span>
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
            <p className="text-xl text-white/80">Integrate with Zion Tech Group's autonomous automation and AI services</p>
          </div>

          {/* API Overview */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">API Overview</h2>
              <p className="text-white/80 mb-4">
                Our RESTful APIs provide programmatic access to Zion Tech Group's cutting-edge automation services, 
                AI capabilities, and cloud infrastructure management tools. Built with developer experience in mind, 
                our APIs feature comprehensive documentation, interactive examples, and robust error handling.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">99.9%</div>
                  <div className="text-white/70">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-white/70">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">1000+</div>
                  <div className="text-white/70">API Calls/sec</div>
                </div>
              </div>
            </div>
          </section>

          {/* API Categories */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">API Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-all">
                <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Automation APIs</h3>
                <p className="text-white/70">Manage cloud infrastructure, deploy applications, and orchestrate automated workflows.</p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-400/20 text-blue-400 text-xs px-2 py-1 rounded mr-2">REST</span>
                  <span className="inline-block bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded">v2.1</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-fuchsia-400/30 transition-all">
                <div className="w-12 h-12 bg-fuchsia-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI & ML APIs</h3>
                <p className="text-white/70">Access machine learning models, natural language processing, and predictive analytics.</p>
                <div className="mt-4">
                  <span className="inline-block bg-fuchsia-400/20 text-fuchsia-400 text-xs px-2 py-1 rounded mr-2">REST</span>
                  <span className="inline-block bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded">v1.8</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all">
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Analytics APIs</h3>
                <p className="text-white/70">Retrieve performance metrics, system health data, and business intelligence insights.</p>
                <div className="mt-4">
                  <span className="inline-block bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded mr-2">REST</span>
                  <span className="inline-block bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded">v2.0</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-400/30 transition-all">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Security APIs</h3>
                <p className="text-white/70">Manage authentication, authorization, and security policies for your applications.</p>
                <div className="mt-4">
                  <span className="inline-block bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded mr-2">REST</span>
                  <span className="inline-block bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded">v1.5</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-400/30 transition-all">
                <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Content APIs</h3>
                <p className="text-white/70">Generate, manage, and distribute content across multiple platforms and channels.</p>
                <div className="mt-4">
                  <span className="inline-block bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded mr-2">REST</span>
                  <span className="inline-block bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded">v1.2</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-400/30 transition-all">
                <div className="w-12 h-12 bg-red-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Webhook APIs</h3>
                <p className="text-white/70">Real-time event notifications and webhook management for system integrations.</p>
                <div className="mt-4">
                  <span className="inline-block bg-red-400/20 text-red-400 text-xs px-2 py-1 rounded mr-2">Webhook</span>
                  <span className="inline-block bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded">v1.0</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Start */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Quick Start</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">1. Get Your API Key</h3>
                  <p className="text-white/70 mb-4">
                    Sign up for a Zion Tech Group account and generate your API key from the dashboard.
                  </p>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <code className="text-cyan-400">curl -X POST https://api.zion.tech/v1/auth/login \</code><br/>
                    <code className="text-cyan-400 ml-4">-H "Content-Type: application/json" \</code><br/>
                    <code className="text-cyan-400 ml-4">-d '{"email": "your@email.com", "password": "yourpassword"}'</code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">2. Make Your First Request</h3>
                  <p className="text-white/70 mb-4">
                    Test the API with a simple request to verify your credentials and explore available endpoints.
                  </p>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <code className="text-fuchsia-400">curl -X GET https://api.zion.tech/v1/automation/status \</code><br/>
                    <code className="text-fuchsia-400 ml-4">-H "Authorization: Bearer YOUR_API_KEY"</code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Code Examples */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Code Examples</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Python</h3>
                <div className="bg-black/20 p-4 rounded-lg">
                  <pre className="text-sm text-white/80">
{`import requests

# Initialize client
base_url = "https://api.zion.tech/v1"
headers = {"Authorization": "Bearer YOUR_API_KEY"}

# Create automation workflow
response = requests.post(
    f"{base_url}/automation/workflows",
    headers=headers,
    json={
        "name": "Deploy App",
        "type": "deployment",
        "config": {"environment": "production"}
    }
)

print(response.json())`}
                  </pre>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">JavaScript</h3>
                <div className="bg-black/20 p-4 rounded-lg">
                  <pre className="text-sm text-white/80">
{`const axios = require('axios');

// Initialize client
const client = axios.create({
  baseURL: 'https://api.zion.tech/v1',
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
});

// Get system metrics
async function getMetrics() {
  try {
    const response = await client.get('/analytics/metrics');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

getMetrics();`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* SDKs and Libraries */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">SDKs and Libraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Python SDK</h3>
                <p className="text-white/70 mb-4">Official Python client library</p>
                <code className="text-cyan-400 text-sm">pip install zion-tech</code>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Node.js SDK</h3>
                <p className="text-white/70 mb-4">Official Node.js client library</p>
                <code className="text-green-400 text-sm">npm install zion-tech</code>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Go SDK</h3>
                <p className="text-white/70 mb-4">Official Go client library</p>
                <code className="text-blue-400 text-sm">go get zion.tech/api</code>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Java SDK</h3>
                <p className="text-white/70 mb-4">Official Java client library</p>
                <code className="text-orange-400 text-sm">mvn install zion-tech</code>
              </div>
            </div>
          </section>

          {/* Support and Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Support and Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Documentation</h3>
                <p className="text-white/70 mb-4">Comprehensive guides and reference materials</p>
                <Link href="/docs" className="text-cyan-400 hover:text-cyan-300">View Docs →</Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Community</h3>
                <p className="text-white/70 mb-4">Developer community and support forums</p>
                <Link href="/community" className="text-fuchsia-400 hover:text-fuchsia-300">Join Community →</Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-green-400">Support</h3>
                <p className="text-white/70 mb-4">24/7 technical support and assistance</p>
                <Link href="/contact" className="text-green-400 hover:text-green-300">Get Support →</Link>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link href="/contact" className="px-6 py-3 bg-blue-400 hover:bg-blue-300 text-black font-semibold rounded-lg transition-colors mr-4">
              Get API Access
            </Link>
            <Link href="/services" className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-semibold rounded-lg transition-colors">
              View Services
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}