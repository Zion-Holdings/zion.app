import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function APIDocumentationPage() {
  const apiEndpoints = [
    {
      method: 'GET',
      path: '/api/automation/status',
      description: 'Get the current status of all automation systems',
      parameters: [],
      response: 'Automation status object with health metrics'
    },
    {
      method: 'GET',
      path: '/api/automation/health',
      description: 'Retrieve detailed health information for automation systems',
      parameters: ['system_id (optional)'],
      response: 'Detailed health metrics and system information'
    },
    {
      method: 'POST',
      path: '/api/automation/trigger',
      description: 'Trigger a specific automation workflow',
      parameters: ['workflow_id', 'parameters'],
      response: 'Workflow execution status and results'
    },
    {
      method: 'GET',
      path: '/api/content/latest',
      description: 'Get the latest autonomous content updates',
      parameters: ['limit (optional)', 'category (optional)'],
      response: 'Array of content updates with metadata'
    },
    {
      method: 'POST',
      path: '/api/content/generate',
      description: 'Request generation of new autonomous content',
      parameters: ['content_type', 'parameters', 'style_preferences'],
      response: 'Content generation job status and ID'
    },
    {
      method: 'GET',
      path: '/api/analytics/overview',
      description: 'Retrieve analytics overview and key metrics',
      parameters: ['date_range (optional)', 'metrics (optional)'],
      response: 'Analytics data with performance metrics'
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      title: 'Check Automation Status',
      code: `fetch('/api/automation/status')
  .then(response => response.json())
  .then(data => {
    console.log('Automation Status:', data);
  });`
    },
    {
      language: 'Python',
      title: 'Trigger Automation Workflow',
      code: `import requests

response = requests.post('/api/automation/trigger', json={
    'workflow_id': 'content_generation',
    'parameters': {
        'topic': 'AI trends',
        'length': 'medium'
    }
})

print(response.json())`
    },
    {
      language: 'cURL',
      title: 'Get Latest Content',
      code: `curl -X GET "https://zion.tech/api/content/latest?limit=5" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
    }
  ];

  return (
    <>
      <Head>
        <title>API Documentation | Zion Tech Group - Developer Resources</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's autonomous automation systems, content generation, and analytics services." />
        <meta property="og:title" content="API Documentation - Zion Tech Group" />
        <meta property="og:description" content="Developer resources and API reference." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              API Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Integrate with Zion Tech Group's autonomous automation systems, content generation, and analytics services
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href="#authentication" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Authentication
              </a>
              <a href="#endpoints" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Endpoints
              </a>
              <a href="#examples" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Code Examples
              </a>
            </div>
          </section>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Quick Start */}
            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Quick Start</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Getting Started</h3>
                  <ol className="text-white/70 space-y-2 ml-4">
                    <li>1. <strong>Get API Key:</strong> Contact us to obtain your API credentials</li>
                    <li>2. <strong>Choose SDK:</strong> Use our official SDKs or make direct HTTP requests</li>
                    <li>3. <strong>Test Integration:</strong> Start with our sandbox environment</li>
                    <li>4. <strong>Go Live:</strong> Switch to production when ready</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Base URL</h3>
                  <div className="bg-slate-800 p-4 rounded-lg border border-white/20">
                    <code className="text-cyan-400">https://api.zion.tech/v1</code>
                  </div>
                  <p className="text-white/60 text-sm mt-2">
                    All API endpoints are relative to this base URL
                  </p>
                </div>
              </div>
            </section>

            {/* Authentication */}
            <section id="authentication" className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Authentication</h2>
              <p className="text-white/80 mb-6">
                All API requests require authentication using API keys. Include your API key in the Authorization header.
              </p>
              <div className="bg-slate-800 p-4 rounded-lg border border-white/20 mb-6">
                <code className="text-green-400">Authorization: Bearer YOUR_API_KEY</code>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">API Key Security</h3>
                  <ul className="text-white/70 space-y-1 ml-4">
                    <li>• Keep your API key secure and private</li>
                    <li>• Never expose keys in client-side code</li>
                    <li>• Use environment variables for storage</li>
                    <li>• Rotate keys regularly for security</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Rate Limiting</h3>
                  <ul className="text-white/70 space-y-1 ml-4">
                    <li>• 1000 requests per hour per API key</li>
                    <li>• 100 requests per minute per endpoint</li>
                    <li>• Rate limit headers included in responses</li>
                    <li>• Contact us for higher limits</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* API Endpoints */}
            <section id="endpoints" className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-green-400">API Endpoints</h2>
              <div className="space-y-6">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400 border border-green-400/30' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30' :
                        'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                    </div>
                    <p className="text-white/80 mb-3">{endpoint.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-white/60">Parameters: </span>
                        <span className="text-white/80">
                          {endpoint.parameters.length > 0 ? endpoint.parameters.join(', ') : 'None'}
                        </span>
                      </div>
                      <div>
                        <span className="text-white/60">Response: </span>
                        <span className="text-white/80">{endpoint.response}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Code Examples */}
            <section id="examples" className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Code Examples</h2>
              <div className="space-y-8">
                {codeExamples.map((example, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-white/20 text-white/80 text-sm rounded-full">
                        {example.language}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                    </div>
                    <pre className="bg-slate-900 p-4 rounded-lg border border-white/20 overflow-x-auto">
                      <code className="text-green-400 text-sm">{example.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </section>

            {/* SDKs and Libraries */}
            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">SDKs and Libraries</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-lg border border-white/20 text-center">
                  <div className="text-4xl mb-4">📦</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">JavaScript/Node.js</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Official SDK for Node.js and browser environments
                  </p>
                  <div className="bg-slate-700 p-2 rounded text-xs text-cyan-400 font-mono">
                    npm install @zion-tech/api
                  </div>
                </div>
                
                <div className="bg-slate-800/50 p-6 rounded-lg border border-white/20 text-center">
                  <div className="text-4xl mb-4">🐍</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Python</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Python client library with async support
                  </p>
                  <div className="bg-slate-700 p-2 rounded text-xs text-cyan-400 font-mono">
                    pip install zion-tech-api
                  </div>
                </div>
                
                <div className="bg-slate-800/50 p-6 rounded-lg border border-white/20 text-center">
                  <div className="text-4xl mb-4">☕</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Java</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Java client with Spring Boot integration
                  </p>
                  <div className="bg-slate-700 p-2 rounded text-xs text-cyan-400 font-mono">
                    mvn install zion-tech-api
                  </div>
                </div>
              </div>
            </section>

            {/* Support and Resources */}
            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Support and Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Developer Resources</h3>
                  <ul className="text-white/70 space-y-2">
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">API Reference Guide</a></li>
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">Integration Tutorials</a></li>
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">Best Practices</a></li>
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">Changelog</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Get Help</h3>
                  <ul className="text-white/70 space-y-2">
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">Developer Forum</a></li>
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">Documentation Issues</a></li>
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">API Support</a></li>
                    <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">Feature Requests</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200 transform hover:scale-105">
                  Contact Developer Support
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}