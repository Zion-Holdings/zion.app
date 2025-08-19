import React from 'react';
import Head from 'next/head';

export default function APIDocumentationPage() {
  const apiEndpoints = [
    {
      method: 'GET',
      path: '/api/health',
      description: 'System health check endpoint',
      response: '200 OK with system status'
    },
    {
      method: 'GET',
      path: '/api/automation/status',
      description: 'Get automation system status',
      response: 'JSON with automation metrics'
    },
    {
      method: 'POST',
      path: '/api/content/generate',
      description: 'Generate content using AI',
      response: 'Generated content in requested format'
    },
    {
      method: 'GET',
      path: '/api/reports/latest',
      description: 'Get latest autonomous reports',
      response: 'Array of recent reports'
    }
  ];

  return (
    <>
      <Head>
        <title>API Documentation | Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's autonomous systems and services." />
        <meta property="og:title" content="API Documentation | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive API documentation for Zion Tech Group's autonomous systems and services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <header className="mb-12">
              <nav className="mb-6">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ← Back to Home
                </a>
              </nav>
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                API Documentation
              </h1>
              <p className="text-xl text-white/80 max-w-3xl">
                Integrate with Zion Tech Group's autonomous systems and services through our comprehensive API.
              </p>
            </header>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Getting Started</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Authentication</h3>
                  <p className="text-white/80 mb-4">
                    All API requests require authentication using API keys. Include your API key in the request headers:
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                    <span className="text-cyan-400">Authorization:</span> Bearer YOUR_API_KEY
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Base URL</h3>
                  <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                    <span className="text-green-400">https://api.ziontech.group</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Rate Limits</h3>
                  <p className="text-white/80">
                    Free tier: 1,000 requests/hour<br />
                    Pro tier: 10,000 requests/hour<br />
                    Enterprise: Custom limits
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">API Endpoints</h2>
              <div className="space-y-6">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="border border-white/10 rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                        endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                    </div>
                    <p className="text-white/80 mb-3">{endpoint.description}</p>
                    <p className="text-white/60 text-sm"><strong>Response:</strong> {endpoint.response}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Code Examples</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">JavaScript/Node.js</h3>
                  <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                    <span className="text-purple-400">const</span> <span className="text-cyan-400">response</span> = <span className="text-yellow-400">await</span> <span className="text-green-400">fetch</span>(<span className="text-orange-400">'https://api.ziontech.group/api/health'</span>, {'{'}<br/>
                    &nbsp;&nbsp;headers: {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">'Authorization'</span>: <span className="text-orange-400">'Bearer YOUR_API_KEY'</span><br/>
                    &nbsp;&nbsp;{'}'}<br/>
                    {'}'});<br/>
                    <span className="text-purple-400">const</span> <span className="text-cyan-400">data</span> = <span className="text-yellow-400">await</span> response.<span className="text-green-400">json</span>();
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Python</h3>
                  <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                    <span className="text-purple-400">import</span> requests<br/><br/>
                    <span className="text-cyan-400">response</span> = requests.<span className="text-green-400">get</span>(<br/>
                    &nbsp;&nbsp;<span className="text-orange-400">'https://api.ziontech.group/api/health'</span>,<br/>
                    &nbsp;&nbsp;headers={<span className="text-orange-400">'Authorization'</span>: <span className="text-orange-400">'Bearer YOUR_API_KEY'</span>}<br/>
                    )<br/>
                    <span className="text-cyan-400">data</span> = response.<span className="text-green-400">json</span>()
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Need Help?</h2>
              <p className="text-white/80 mb-6">
                Our API support team is here to help you integrate with our services. 
                Get in touch for technical assistance, custom integrations, or enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center">
                  Contact Support
                </a>
                <a href="/blog" className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center">
                  Read Documentation
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}