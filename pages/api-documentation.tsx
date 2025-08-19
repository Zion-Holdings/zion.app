import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function APIDocumentationPage() {
  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/health',
      description: 'Get system health status',
      parameters: [],
      response: 'Health status object'
    },
    {
      method: 'GET',
      endpoint: '/api/reports',
      description: 'Retrieve system reports',
      parameters: ['limit', 'type', 'date'],
      response: 'Array of report objects'
    },
    {
      method: 'POST',
      endpoint: '/api/webhooks',
      description: 'Register webhook endpoint',
      parameters: ['url', 'events', 'secret'],
      response: 'Webhook configuration object'
    },
    {
      method: 'GET',
      endpoint: '/api/metrics',
      description: 'Get performance metrics',
      parameters: ['timeframe', 'metric'],
      response: 'Metrics data object'
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      title: 'Health Check',
      code: `fetch('/api/health')
  .then(response => response.json())
  .then(data => console.log(data));`
    },
    {
      language: 'Python',
      title: 'Get Reports',
      code: `import requests

response = requests.get('/api/reports', params={
    'limit': 10,
    'type': 'performance'
})
reports = response.json()`
    },
    {
      language: 'cURL',
      title: 'Webhook Registration',
      code: `curl -X POST /api/webhooks \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://example.com/webhook", "events": ["report.created"]}'`
    }
  ];

  return (
    <>
      <Head>
        <title>API Documentation — Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's autonomous systems and services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                API Documentation
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Integrate with Zion Tech Group's autonomous systems through our comprehensive 
                REST API and webhook services.
              </p>
            </section>

            {/* Quick Start */}
            <section className="mb-16">
              <div className="bg-white/10 rounded-3xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Quick Start</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔑</div>
                    <h3 className="text-xl font-bold mb-2">1. Get API Key</h3>
                    <p className="text-white/70">
                      Sign up and generate your API key from the dashboard
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">📚</div>
                    <h3 className="text-xl font-bold mb-2">2. Read Docs</h3>
                    <p className="text-white/70">
                      Explore our endpoints and integration examples
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-bold mb-2">3. Start Building</h3>
                    <p className="text-white/70">
                      Integrate autonomous systems into your applications
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* API Endpoints */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-400">API Endpoints</h2>
              
              <div className="space-y-4">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded text-sm font-bold ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-cyan-400 font-mono">{endpoint.endpoint}</code>
                    </div>
                    
                    <p className="text-white/80 mb-4">{endpoint.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-white/90 mb-2">Parameters:</h4>
                        {endpoint.parameters.length > 0 ? (
                          <ul className="space-y-1">
                            {endpoint.parameters.map((param, idx) => (
                              <li key={idx} className="text-white/70 text-sm">• {param}</li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-white/50 text-sm">None</span>
                        )}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white/90 mb-2">Response:</h4>
                        <span className="text-white/70 text-sm">{endpoint.response}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Code Examples */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Code Examples</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {codeExamples.map((example, index) => (
                  <div key={index} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-cyan-400">{example.title}</h3>
                      <span className="px-3 py-1 bg-white/10 text-white/70 rounded text-sm">
                        {example.language}
                      </span>
                    </div>
                    
                    <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                      <code className="text-white text-sm">{example.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </section>

            {/* Authentication */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Authentication</h2>
              
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">API Key Authentication</h3>
                <p className="text-white/80 mb-6">
                  All API requests require authentication using an API key. Include your API key 
                  in the request headers.
                </p>
                
                <div className="bg-slate-900 rounded-lg p-4 mb-6">
                  <code className="text-white text-sm">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white/90 mb-2">Getting Your API Key</h4>
                    <ol className="space-y-2 text-white/70">
                      <li>1. Sign up for a Zion Tech Group account</li>
                      <li>2. Navigate to the API section in your dashboard</li>
                      <li>3. Generate a new API key</li>
                      <li>4. Copy and securely store your key</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white/90 mb-2">Security Best Practices</h4>
                    <ul className="space-y-2 text-white/70">
                      <li>• Keep your API key secure and private</li>
                      <li>• Rotate keys regularly</li>
                      <li>• Use environment variables in production</li>
                      <li>• Monitor API usage for anomalies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Rate Limiting */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Rate Limiting</h2>
              
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">1000</div>
                    <div className="text-white/70">Requests per hour</div>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-fuchsia-400 mb-2">100</div>
                    <div className="text-white/70">Requests per minute</div>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">10</div>
                    <div className="text-white/70">Requests per second</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/5 rounded-lg">
                  <h4 className="font-semibold text-white/90 mb-2">Rate Limit Headers</h4>
                  <p className="text-white/70 text-sm">
                    Response headers include rate limit information: X-RateLimit-Limit, 
                    X-RateLimit-Remaining, and X-RateLimit-Reset.
                  </p>
                </div>
              </div>
            </section>

            {/* Webhooks */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Webhooks</h2>
              
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Real-time Notifications</h3>
                <p className="text-white/80 mb-6">
                  Set up webhooks to receive real-time notifications about system events, 
                  performance updates, and security alerts.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white/90 mb-3">Available Events</h4>
                    <ul className="space-y-2 text-white/70">
                      <li>• report.created</li>
                      <li>• system.alert</li>
                      <li>• performance.threshold</li>
                      <li>• security.incident</li>
                      <li>• automation.completed</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white/90 mb-3">Webhook Payload</h4>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <code className="text-white text-sm">
                        {`{
  "event": "report.created",
  "timestamp": "2025-01-15T10:30:00Z",
  "data": { ... }
}`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SDKs and Libraries */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">SDKs & Libraries</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-3">JavaScript/Node.js</h3>
                  <p className="text-white/70 mb-4">
                    Official SDK for Node.js and browser environments
                  </p>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    View on npm →
                  </a>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🐍</div>
                  <h3 className="text-xl font-bold mb-3">Python</h3>
                  <p className="text-white/70 mb-4">
                    Python client library for easy integration
                  </p>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    View on PyPI →
                  </a>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">☕</div>
                  <h3 className="text-xl font-bold mb-3">Java</h3>
                  <p className="text-white/70 mb-4">
                    Java client for enterprise applications
                  </p>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    View on Maven →
                  </a>
                </div>
              </div>
            </section>

            {/* Support and Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-400">Support & Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Documentation</h3>
                  <ul className="space-y-3 text-white/70">
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">API Reference</a></li>
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">Integration Guides</a></li>
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">Best Practices</a></li>
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">Tutorials</a></li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Community</h3>
                  <ul className="space-y-3 text-white/70">
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">Developer Forum</a></li>
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">GitHub Repository</a></li>
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">Discord Community</a></li>
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">Stack Overflow</a></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Ready to Get Started?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Start integrating with our autonomous systems today and experience 
                the future of technology automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                  Get API Key
                </Link>
                <Link href="/reports" className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  View Live Demo
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}