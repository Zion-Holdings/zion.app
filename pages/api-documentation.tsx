import React from 'react';
import Head from 'next/head';

export default function ApiDocumentationPage() {
  return (
    <>
      <Head>
        <title>API Documentation — Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." />
        <meta property="og:title" content="API Documentation — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive API documentation for Zion Tech Group services and integrations." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                API Documentation
              </h1>
              <p className="text-xl text-white/80">
                Comprehensive guides and references for integrating with Zion Tech Group services
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">🚀 REST APIs</h3>
                <p className="text-white/80">
                  RESTful APIs for core services including AI, automation, and infrastructure management.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">🔌 Webhooks</h3>
                <p className="text-white/80">
                  Real-time event notifications and webhook integrations for automated workflows.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-green-400">📚 SDKs & Libraries</h3>
                <p className="text-white/80">
                  Official SDKs for popular programming languages and frameworks.
                </p>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Getting Started</h2>
                <p className="text-white/80 mb-4">
                  Welcome to the Zion Tech Group API! This documentation will help you integrate our services into your applications.
                </p>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2 text-fuchsia-400">Quick Start</h4>
                  <ol className="list-decimal list-inside text-white/80 ml-6">
                    <li>Get your API key from the dashboard</li>
                    <li>Choose your preferred SDK or use REST directly</li>
                    <li>Make your first API call</li>
                    <li>Explore advanced features and integrations</li>
                  </ol>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-fuchsia-400">Authentication</h2>
                <p className="text-white/80 mb-4">
                  All API requests require authentication using API keys or OAuth 2.0 tokens.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-green-400">API Key Authentication</h4>
                    <div className="bg-black/30 p-3 rounded font-mono text-sm text-cyan-300">
                      Authorization: Bearer YOUR_API_KEY
                    </div>
                    <p className="text-white/80 text-sm mt-2">
                      Include your API key in the Authorization header for all requests.
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">OAuth 2.0</h4>
                    <div className="bg-black/30 p-3 rounded font-mono text-sm text-cyan-300">
                      Authorization: Bearer ACCESS_TOKEN
                    </div>
                    <p className="text-white/80 text-sm mt-2">
                      Use OAuth 2.0 for user-specific access and enhanced security.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-green-400">Core APIs</h2>
                <p className="text-white/80 mb-4">
                  Explore our core service APIs for AI, automation, and infrastructure management.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-cyan-400">AI Services API</h4>
                    <p className="text-white/80 text-sm mb-2">Access to AI models, training, and inference services.</p>
                    <div className="bg-black/30 p-2 rounded font-mono text-xs text-cyan-300">
                      POST /api/v1/ai/inference
                    </div>
                    <div className="bg-black/30 p-2 rounded font-mono text-xs text-cyan-300 mt-1">
                      POST /api/v1/ai/train
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-fuchsia-400">Automation API</h4>
                    <p className="text-white/80 text-sm mb-2">Manage automated workflows and processes.</p>
                    <div className="bg-black/30 p-2 rounded font-mono text-xs text-cyan-300">
                      GET /api/v1/automation/workflows
                    </div>
                    <div className="bg-black/30 p-2 rounded font-mono text-xs text-cyan-300 mt-1">
                      POST /api/v1/automation/trigger
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-green-400">Infrastructure API</h4>
                    <p className="text-white/80 text-sm mb-2">Cloud infrastructure management and monitoring.</p>
                    <div className="bg-black/30 p-2 rounded font-mono text-xs text-cyan-300">
                      GET /api/v1/infrastructure/status
                    </div>
                    <div className="bg-black/30 p-2 rounded font-mono text-xs text-cyan-300 mt-1">
                      POST /api/v1/infrastructure/deploy
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Analytics API</h4>
                    <p className="text-white/80 text-sm mb-2">Real-time analytics and reporting data.</p>
                    <div className="bg-black/30 p-2 rounded font-mono text-xs text-cyan-300">
                      GET /api/v1/analytics/metrics
                    </div>
                    <div className="bg-black/30 p-2 rounded font-mono text-xs text-cyan-300 mt-1">
                      GET /api/v1/analytics/reports
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Code Examples</h2>
                <p className="text-white/80 mb-4">
                  Get started quickly with these code examples in popular programming languages.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-yellow-400">JavaScript/Node.js</h4>
                    <div className="bg-black/30 p-3 rounded font-mono text-sm text-cyan-300">
                      {`const response = await fetch('https://api.zion.tech/v1/ai/inference', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4',
    prompt: 'Hello, world!'
  })
});`}
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-purple-400">Python</h4>
                    <div className="bg-black/30 p-3 rounded font-mono text-sm text-cyan-300">
                      {`import requests

response = requests.post(
    'https://api.zion.tech/v1/ai/inference',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'model': 'gpt-4',
        'prompt': 'Hello, world!'
    }
)`}
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Webhooks</h2>
                <p className="text-white/80 mb-4">
                  Set up webhooks to receive real-time notifications about events in your account.
                </p>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2 text-cyan-400">Webhook Events</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-fuchsia-400 mb-2">System Events</h5>
                      <ul className="list-disc list-inside text-white/80 ml-6 text-sm">
                        <li>workflow.completed</li>
                        <li>automation.triggered</li>
                        <li>infrastructure.deployed</li>
                        <li>ai.model.trained</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-400 mb-2">User Events</h5>
                      <ul className="list-disc list-inside text-white/80 ml-6 text-sm">
                        <li>user.registered</li>
                        <li>project.created</li>
                        <li>payment.succeeded</li>
                        <li>support.ticket.opened</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">SDKs & Libraries</h2>
                <p className="text-white/80 mb-4">
                  Use our official SDKs to integrate Zion Tech Group services into your applications quickly and easily.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                    <div className="text-3xl mb-2">⚡</div>
                    <h4 className="font-semibold text-cyan-400">JavaScript/Node.js</h4>
                    <p className="text-white/80 text-sm">npm install @zion-tech/sdk</p>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">View Documentation →</a>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                    <div className="text-3xl mb-2">🐍</div>
                    <h4 className="font-semibold text-fuchsia-400">Python</h4>
                    <p className="text-white/80 text-sm">pip install zion-tech</p>
                    <a href="#" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm">View Documentation →</a>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                    <div className="text-3xl mb-2">☕</div>
                    <h4 className="font-semibold text-green-400">Java</h4>
                    <p className="text-white/80 text-sm">Maven dependency</p>
                    <a href="#" className="text-green-400 hover:text-green-300 text-sm">View Documentation →</a>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Rate Limits & Quotas</h2>
                <p className="text-white/80 mb-4">
                  Understand our rate limiting policies and how to optimize your API usage.
                </p>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <h4 className="font-semibold text-cyan-400 mb-2">Free Tier</h4>
                      <p className="text-white/80 text-sm">1,000 requests/day</p>
                      <p className="text-white/80 text-sm">100 requests/minute</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-fuchsia-400 mb-2">Pro Tier</h4>
                      <p className="text-white/80 text-sm">100,000 requests/day</p>
                      <p className="text-white/80 text-sm">1,000 requests/minute</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-green-400 mb-2">Enterprise</h4>
                      <p className="text-white/80 text-sm">Unlimited requests</p>
                      <p className="text-white/80 text-sm">Custom rate limits</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-red-400">Error Handling</h2>
                <p className="text-white/80 mb-4">
                  Learn how to handle API errors gracefully and implement proper error handling in your applications.
                </p>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2 text-yellow-400">Common HTTP Status Codes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-cyan-400 mb-2">Client Errors (4xx)</h5>
                      <ul className="list-disc list-inside text-white/80 ml-6 text-sm">
                        <li>400 - Bad Request</li>
                        <li>401 - Unauthorized</li>
                        <li>403 - Forbidden</li>
                        <li>429 - Too Many Requests</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-fuchsia-400 mb-2">Server Errors (5xx)</h5>
                      <ul className="list-disc list-inside text-white/80 ml-6 text-sm">
                        <li>500 - Internal Server Error</li>
                        <li>502 - Bad Gateway</li>
                        <li>503 - Service Unavailable</li>
                        <li>504 - Gateway Timeout</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-teal-400">Support & Resources</h2>
                <p className="text-white/80 mb-4">
                  Get help with API integration and access additional resources for developers.
                </p>
                <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Developer Support</h4>
                      <p className="text-white/90">
                        <strong>Email:</strong> api-support@zion.tech<br />
                        <strong>Documentation:</strong> docs.zion.tech<br />
                        <strong>Community:</strong> community.zion.tech
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-fuchsia-400">Additional Resources</h4>
                      <ul className="list-disc list-inside text-white/90">
                        <li>API Reference</li>
                        <li>Code Samples</li>
                        <li>Integration Guides</li>
                        <li>Best Practices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="text-center mt-12">
              <a href="/" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                Return to Homepage
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}