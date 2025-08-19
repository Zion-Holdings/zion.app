import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ApiDocumentationPage() {
  return (
    <>
      <Head>
        <title>API Documentation — Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." />
        <meta property="og:title" content="API Documentation — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive API documentation for Zion Tech Group services and integrations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Navigation */}
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </nav>

          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              API Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive API reference for Zion Tech Group services, integrations, and automation systems
            </p>
          </header>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Quick Start */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">Quick Start</h2>
              <div className="space-y-4">
                <p className="text-white/90">
                  Get started with our APIs in minutes. All endpoints use RESTful conventions and return JSON responses.
                </p>
                <div className="bg-slate-900 rounded-lg p-4">
                  <div className="text-sm text-cyan-300 mb-2">Base URL</div>
                  <code className="text-white text-sm">https://api.zion.tech/v1</code>
                </div>
                <div className="bg-slate-900 rounded-lg p-4">
                  <div className="text-sm text-cyan-300 mb-2">Authentication</div>
                  <code className="text-white text-sm">Authorization: Bearer YOUR_API_KEY</code>
                </div>
              </div>
            </section>

            {/* Authentication */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-300">Authentication</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">API Keys</h3>
                  <p className="text-white/80 mb-4">
                    All API requests require authentication using API keys. You can generate API keys from your dashboard.
                  </p>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="text-sm text-cyan-300 mb-2">Example Request</div>
                    <code className="text-white text-sm">
                      curl -H "Authorization: Bearer YOUR_API_KEY" \<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;https://api.zion.tech/v1/automations
                    </code>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">Rate Limits</h3>
                  <ul className="text-white/80 space-y-1 text-sm">
                    <li>• Free Tier: 1,000 requests per hour</li>
                    <li>• Pro Tier: 10,000 requests per hour</li>
                    <li>• Enterprise: Custom limits</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Core APIs */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-green-300">Core APIs</h2>
              <div className="space-y-6">
                
                {/* Automations API */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Automations API</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-cyan-300 mb-1">GET /automations</div>
                      <p className="text-white/80 text-sm">List all automations</p>
                    </div>
                    <div>
                      <div className="text-sm text-cyan-300 mb-1">POST /automations</div>
                      <p className="text-white/80 text-sm">Create a new automation</p>
                    </div>
                    <div>
                      <div className="text-sm text-cyan-300 mb-1">GET /automations/{'{id}'}</div>
                      <p className="text-white/80 text-sm">Get automation details</p>
                    </div>
                    <div>
                      <div className="text-sm text-cyan-300 mb-1">PUT /automations/{'{id}'}</div>
                      <p className="text-white/80 text-sm">Update automation</p>
                    </div>
                    <div>
                      <div className="text-sm text-cyan-300 mb-1">DELETE /automations/{'{id}'}</div>
                      <p className="text-white/80 text-sm">Delete automation</p>
                    </div>
                  </div>
                </div>

                {/* Reports API */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Reports API</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-cyan-300 mb-1">GET /reports</div>
                      <p className="text-white/80 text-sm">List all reports</p>
                    </div>
                    <div>
                      <div className="text-sm text-cyan-300 mb-1">GET /reports/updates</div>
                      <p className="text-white/80 text-sm">Get system updates</p>
                    </div>
                    <div>
                      <div className="text-sm text-cyan-300 mb-1">GET /reports/blueprints</div>
                      <p className="text-white/80 text-sm">List blueprint reports</p>
                    </div>
                  </div>
                </div>

                {/* Health API */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Health API</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-cyan-300 mb-1">GET /health</div>
                      <p className="text-white/80 text-sm">System health status</p>
                    </div>
                    <div>
                      <div className="text-sm text-cyan-300 mb-1">GET /health/automation</div>
                      <p className="text-white/80 text-sm">Automation system health</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Code Examples */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">Code Examples</h2>
              <div className="space-y-6">
                
                {/* JavaScript/Node.js */}
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-3">JavaScript/Node.js</h3>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <pre className="text-white text-sm overflow-x-auto">
{`const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://api.zion.tech/v1',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

// List automations
const getAutomations = async () => {
  try {
    const response = await apiClient.get('/automations');
    return response.data;
  } catch (error) {
    console.error('Error fetching automations:', error);
  }
};

// Create automation
const createAutomation = async (automationData) => {
  try {
    const response = await apiClient.post('/automations', automationData);
    return response.data;
  } catch (error) {
    console.error('Error creating automation:', error);
  }
};`}
                    </pre>
                  </div>
                </div>

                {/* Python */}
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Python</h3>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <pre className="text-white text-sm overflow-x-auto">
{`import requests

class ZionAPI:
    def __init__(self, api_key):
        self.base_url = 'https://api.zion.tech/v1'
        self.headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }
    
    def get_automations(self):
        response = requests.get(f'{self.base_url}/automations', headers=self.headers)
        return response.json()
    
    def create_automation(self, automation_data):
        response = requests.post(
            f'{self.base_url}/automations', 
            json=automation_data, 
            headers=self.headers
        )
        return response.json()

# Usage
api = ZionAPI('YOUR_API_KEY')
automations = api.get_automations()`}
                    </pre>
                  </div>
                </div>

                {/* cURL */}
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-3">cURL Examples</h3>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <pre className="text-white text-sm overflow-x-auto">
{`# List automations
curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.zion.tech/v1/automations

# Create automation
curl -X POST \\
     -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     -d '{"name": "My Automation", "type": "scheduled"}' \\
     https://api.zion.tech/v1/automations

# Get automation by ID
curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.zion.tech/v1/automations/123`}
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Error Handling */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Error Handling</h2>
              <div className="space-y-4">
                <p className="text-white/90">
                  All API endpoints return appropriate HTTP status codes and error messages in JSON format.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white/90 mb-2">HTTP Status Codes</h3>
                    <ul className="text-white/80 space-y-1 text-sm">
                      <li>• 200: Success</li>
                      <li>• 201: Created</li>
                      <li>• 400: Bad Request</li>
                      <li>• 401: Unauthorized</li>
                      <li>• 403: Forbidden</li>
                      <li>• 404: Not Found</li>
                      <li>• 429: Rate Limited</li>
                      <li>• 500: Server Error</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/90 mb-2">Error Response Format</h3>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <pre className="text-white text-sm">
{`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": ["name is required"]
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SDKs & Libraries */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">SDKs & Libraries</h2>
              <div className="space-y-4">
                <p className="text-white/90">
                  We provide official SDKs and libraries for popular programming languages to simplify integration.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">Node.js</div>
                    <div className="text-white/80 text-sm">npm install @zion-tech/api</div>
                    <div className="text-white/60 text-xs mt-2">Official Node.js SDK</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-fuchsia-400 mb-2">Python</div>
                    <div className="text-white/80 text-sm">pip install zion-tech-api</div>
                    <div className="text-white/60 text-xs mt-2">Official Python SDK</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-2">Go</div>
                    <div className="text-white/80 text-sm">go get github.com/zion-tech/api</div>
                    <div className="text-white/60 text-xs mt-2">Official Go SDK</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Support & Resources */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-indigo-300">Support & Resources</h2>
              <div className="space-y-4">
                <p className="text-white/90">
                  Need help integrating with our APIs? We provide comprehensive support and resources.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white transition-colors">
                    Get Support
                  </Link>
                  <Link href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                    View Automation Systems
                  </Link>
                  <a href="https://github.com/zion-tech/api-examples" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                    GitHub Examples
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}