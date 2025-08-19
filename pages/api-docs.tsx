import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const APIDocumentationPage: React.FC = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/health',
      description: 'Get system health status',
      response: {
        status: 'healthy',
        timestamp: '2025-01-18T12:00:00Z',
        uptime: '99.9%'
      }
    },
    {
      method: 'GET',
      path: '/api/automations',
      description: 'List all active automations',
      response: {
        count: 227,
        automations: ['sync-branches', 'health-check', 'content-generation']
      }
    },
    {
      method: 'GET',
      path: '/api/automations/{id}/status',
      description: 'Get status of specific automation',
      response: {
        id: 'sync-branches',
        status: 'running',
        lastRun: '2025-01-18T11:55:00Z',
        nextRun: '2025-01-18T12:00:00Z'
      }
    },
    {
      method: 'POST',
      path: '/api/automations/{id}/trigger',
      description: 'Manually trigger an automation',
      response: {
        success: true,
        message: 'Automation triggered successfully',
        runId: 'run_12345'
      }
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      code: `// Check system health
fetch('/api/health')
  .then(response => response.json())
  .then(data => console.log(data));

// List automations
fetch('/api/automations')
  .then(response => response.json())
  .then(data => console.log(\`Active automations: \${data.count}\`));`
    },
    {
      language: 'Python',
      code: `import requests

# Check system health
response = requests.get('https://bolt.new.zion.app/api/health')
health_data = response.json()
print(f"Status: {health_data['status']}")

# List automations
response = requests.get('https://bolt.new.zion.app/api/automations')
automations = response.json()
print(f"Active automations: {automations['count']}")`
    },
    {
      language: 'cURL',
      code: `# Check system health
curl -X GET https://bolt.new.zion.app/api/health

# List automations
curl -X GET https://bolt.new.zion.app/api/automations

# Trigger automation
curl -X POST https://bolt.new.zion.app/api/automations/sync-branches/trigger`
    }
  ];

  return (
    <>
      <Head>
        <title>API Documentation - Zion App</title>
        <meta name="description" content="Comprehensive API documentation for Zion App's autonomous automation system" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="relative">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-fuchsia-500/10" />
          
          {/* Header */}
          <header className="relative pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-6">
              <nav className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
                  Zion App
                </Link>
                <div className="flex items-center gap-6">
                  <Link href="/docs" className="text-white/70 hover:text-white transition-colors">
                    Docs
                  </Link>
                  <Link href="/features" className="text-white/70 hover:text-white transition-colors">
                    Features
                  </Link>
                  <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                    Contact
                  </Link>
                </div>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="relative">
            {/* Hero Section */}
            <section className="mx-auto max-w-7xl px-6 pb-14">
              <div className="text-center">
                <h1 className="text-5xl font-bold tracking-tight text-white mb-6">
                  API Documentation
                </h1>
                <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                  Integrate with Zion App's autonomous automation system through our comprehensive REST API. 
                  Monitor, control, and extend the capabilities of your autonomous workflows.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#endpoints" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold transition-colors">
                    View Endpoints
                  </a>
                  <a href="#examples" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                    Code Examples
                  </a>
                </div>
              </div>
            </section>

            {/* API Endpoints */}
            <section id="endpoints" className="mx-auto max-w-7xl px-6 pb-14">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-wide text-white/90 mb-4">API Endpoints</h2>
                <p className="text-lg text-white/70">
                  Explore all available API endpoints for interacting with Zion App
                </p>
              </div>
              
              <div className="space-y-6">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                    <div className="flex items-start gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <div className="flex-1">
                        <code className="text-lg font-mono text-cyan-400">{endpoint.path}</code>
                        <p className="text-white/70 mt-2">{endpoint.description}</p>
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-white/90 mb-2">Response Example:</h4>
                          <pre className="bg-black/30 rounded-lg p-4 overflow-x-auto">
                            <code className="text-sm text-green-400">
                              {JSON.stringify(endpoint.response, null, 2)}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Code Examples */}
            <section id="examples" className="mx-auto max-w-7xl px-6 pb-14">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-wide text-white/90 mb-4">Code Examples</h2>
                <p className="text-lg text-white/70">
                  Get started quickly with these code examples in multiple languages
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {codeExamples.map((example, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-4">{example.language}</h3>
                    <pre className="bg-black/30 rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm text-green-400">{example.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </section>

            {/* Authentication & Rate Limits */}
            <section className="mx-auto max-w-7xl px-6 pb-14">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Authentication</h3>
                    <p className="text-white/70 mb-4">
                      Currently, our API is open for public use. In the future, we'll implement 
                      API key authentication for enhanced security and rate limiting.
                    </p>
                    <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                      <p className="text-yellow-400 text-sm">
                        <strong>Note:</strong> API is currently in public beta. Authentication will be required in future versions.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Rate Limits</h3>
                    <p className="text-white/70 mb-4">
                      To ensure fair usage and system stability, we implement the following rate limits:
                    </p>
                    <ul className="text-white/70 space-y-2">
                      <li>• <strong>Health checks:</strong> 100 requests per minute</li>
                      <li>• <strong>Automation status:</strong> 60 requests per minute</li>
                      <li>• <strong>Automation triggers:</strong> 10 requests per minute</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Support Section */}
            <section className="mx-auto max-w-7xl px-6 pb-14">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-wide text-white/90 mb-4">Need Help?</h2>
                <p className="text-lg text-white/70 mb-8">
                  Can't find what you're looking for? Our team is here to help.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/docs" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                    View Full Documentation
                  </Link>
                  <Link href="/contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold transition-colors">
                    Contact Support
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default APIDocumentationPage;