export default function APIPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">API Reference</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Integrate Zion OS into your applications with our comprehensive REST API and SDKs.
          </p>
        </div>

        {/* Quick Start */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              Get started with Zion OS API in just a few steps:
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">1. Get your API key</div>
              <code className="text-blue-400">GET /api/v1/auth/key</code>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">2. Make your first request</div>
              <code className="text-blue-400">curl -H "Authorization: Bearer YOUR_API_KEY" https://api.ziontechgroup.com/v1/economies</code>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">3. Explore our SDKs</div>
              <code className="text-blue-400">npm install @zion-os/sdk</code>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">API Endpoints</h2>
          
          <div className="space-y-6">
            {/* Authentication */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-green-400">🔐 Authentication</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-white">POST /api/v1/auth/login</div>
                    <div className="text-gray-400">User authentication</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">POST /api/v1/auth/refresh</div>
                    <div className="text-gray-400">Refresh access token</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">POST /api/v1/auth/logout</div>
                    <div className="text-gray-400">User logout</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Economies */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">🌍 Digital Economies</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-white">GET /api/v1/economies</div>
                    <div className="text-gray-400">List all economies</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">POST /api/v1/economies</div>
                    <div className="text-gray-400">Create new economy</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">GET /api/v1/economies/{'{id}'}</div>
                    <div className="text-gray-400">Get economy details</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-white">PUT /api/v1/economies/{'{id}'}</div>
                    <div className="text-gray-400">Update economy</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">DELETE /api/v1/economies/{'{id}'}</div>
                    <div className="text-gray-400">Delete economy</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">POST /api/v1/economies/{'{id}'}/deploy</div>
                    <div className="text-gray-400">Deploy economy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Governance */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">🏛️ AI Governance</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-white">GET /api/v1/governance/proposals</div>
                    <div className="text-gray-400">List proposals</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">POST /api/v1/governance/proposals</div>
                    <div className="text-gray-400">Create proposal</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">POST /api/v1/governance/vote</div>
                    <div className="text-gray-400">Cast vote</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketplace */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">🛒 Marketplace</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-white">GET /api/v1/marketplace/jobs</div>
                    <div className="text-gray-400">List job postings</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">POST /api/v1/marketplace/jobs</div>
                    <div className="text-gray-400">Create job posting</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">GET /api/v1/marketplace/services</div>
                    <div className="text-gray-400">List services</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Identity & KYC */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-red-400">🆔 Identity & KYC</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-white">POST /api/v1/identity/verify</div>
                    <div className="text-gray-400">Verify identity</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">GET /api/v1/identity/status</div>
                    <div className="text-gray-400">Check verification status</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">POST /api/v1/identity/kyc</div>
                    <div className="text-gray-400">Submit KYC documents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SDKs and Libraries */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">SDKs & Libraries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Node.js SDK</h3>
              <p className="text-gray-400 mb-4">Official Node.js client library for Zion OS API</p>
              <div className="space-y-2">
                <code className="text-sm text-blue-400 block">npm install @zion-os/sdk</code>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">View Documentation →</a>
              </div>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Python SDK</h3>
              <p className="text-gray-400 mb-4">Python client library with async support</p>
              <div className="space-y-2">
                <code className="text-sm text-blue-400 block">pip install zion-os-sdk</code>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">View Documentation →</a>
              </div>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">PHP SDK</h3>
              <p className="text-gray-400 mb-4">PHP client library for web applications</p>
              <div className="space-y-2">
                <code className="text-sm text-blue-400 block">composer require zion-os/sdk</code>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">View Documentation →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Code Examples</h2>
          
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Create a Digital Economy</h3>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-2">Node.js</div>
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`const { ZionOS } = require('@zion-os/sdk');

const client = new ZionOS('YOUR_API_KEY');

const economy = await client.economies.create({
  name: 'My Digital Economy',
  description: 'A sovereign digital economy',
  features: ['marketplace', 'governance', 'tokens'],
  blockchain: 'ethereum'
});

console.log('Economy created:', economy.id);`}
                </pre>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Deploy an Economy</h3>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-2">Python</div>
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`from zion_os import ZionOS

client = ZionOS('YOUR_API_KEY')

# Deploy the economy
deployment = client.economies.deploy('economy_id')

# Wait for deployment to complete
deployment.wait_for_completion()

print(f"Economy deployed at: {deployment.url}")`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Rate Limits & Authentication */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Rate Limits & Authentication</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Rate Limits</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong>Free Tier:</strong> 1,000 requests/hour</p>
                <p><strong>Pro Tier:</strong> 10,000 requests/hour</p>
                <p><strong>Enterprise:</strong> Custom limits</p>
                <p className="text-sm text-gray-400">Rate limits are applied per API key</p>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Authentication</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong>API Key:</strong> Include in Authorization header</p>
                <p><strong>JWT Tokens:</strong> For user-specific operations</p>
                <p><strong>Webhooks:</strong> HMAC signature verification</p>
                <p className="text-sm text-gray-400">All requests must be authenticated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support & Resources */}
        <div className="text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help you integrate Zion OS into your applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary text-lg px-8 py-4">
                Contact Support
              </a>
              <a href="/community" className="btn-secondary text-lg px-8 py-4">
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}