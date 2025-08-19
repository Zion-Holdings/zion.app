import React from 'react';
import Head from 'next/head';

const ApiDocumentation = () => {
  return (
    <>
      <Head>
        <title>API Documentation - Zion.app</title>
        <meta name="description" content="Complete API documentation for Zion.app services and integrations" />
        <meta name="keywords" content="API, documentation, Zion, integration, developer" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                API Documentation
              </h1>
              <p className="text-xl text-gray-300">
                Comprehensive API reference for Zion.app platform
              </p>
            </header>

            <div className="grid gap-8">
              {/* Authentication Section */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Authentication</h2>
                <div className="space-y-4">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-2">Bearer Token</h3>
                    <p className="text-gray-300 mb-2">All API requests require a valid Bearer token in the Authorization header.</p>
                    <code className="bg-gray-900 p-2 rounded text-sm block">
                      Authorization: Bearer YOUR_API_TOKEN
                    </code>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-2">Rate Limiting</h3>
                    <p className="text-gray-300">100 requests per minute per API key</p>
                  </div>
                </div>
              </section>

              {/* Core Endpoints */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Core Endpoints</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-medium text-green-400 mb-2">Users</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-yellow-400">GET</span> <code>/api/users</code> - List all users</div>
                      <div><span className="text-yellow-400">GET</span> <code>/api/users/{id}</code> - Get user by ID</div>
                      <div><span className="text-yellow-400">POST</span> <code>/api/users</code> - Create new user</div>
                      <div><span className="text-yellow-400">PUT</span> <code>/api/users/{id}</code> - Update user</div>
                      <div><span className="text-yellow-400">DELETE</span> <code>/api/users/{id}</code> - Delete user</div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-medium text-green-400 mb-2">Services</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-yellow-400">GET</span> <code>/api/services</code> - List all services</div>
                      <div><span className="text-yellow-400">GET</span> <code>/api/services/{id}</code> - Get service by ID</div>
                      <div><span className="text-yellow-400">POST</span> <code>/api/services</code> - Create new service</div>
                      <div><span className="text-yellow-400">PUT</span> <code>/api/services/{id}</code> - Update service</div>
                      <div><span className="text-yellow-400">DELETE</span> <code>/api/services/{id}</code> - Delete service</div>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-medium text-green-400 mb-2">Projects</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-yellow-400">GET</span> <code>/api/projects</code> - List all projects</div>
                      <div><span className="text-yellow-400">GET</span> <code>/api/projects/{id}</code> - Get project by ID</div>
                      <div><span className="text-yellow-400">POST</span> <code>/api/projects</code> - Create new project</div>
                      <div><span className="text-yellow-400">PUT</span> <code>/api/projects/{id}</code> - Update project</div>
                      <div><span className="text-yellow-400">DELETE</span> <code>/api/projects/{id}</code> - Delete project</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Webhooks */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Webhooks</h2>
                <div className="space-y-4">
                  <p className="text-gray-300">Configure webhooks to receive real-time updates for various events.</p>
                  
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-2">Available Events</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• <code>user.created</code> - New user registration</li>
                      <li>• <code>service.created</code> - New service added</li>
                      <li>• <code>project.started</code> - Project begins</li>
                      <li>• <code>project.completed</code> - Project finished</li>
                      <li>• <code>payment.received</code> - Payment processed</li>
                    </ul>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-2">Webhook Setup</h3>
                    <code className="bg-gray-900 p-2 rounded text-sm block">
                      POST /api/webhooks
                      {"\n"}
                      {"\n"}
                      {"{"}
                      {"\n"}
                      {"  "}"url": "https://your-domain.com/webhook",
                      {"\n"}
                      {"  "}"events": ["user.created", "project.completed"]
                      {"\n"}
                      {"}"}
                    </code>
                  </div>
                </div>
              </section>

              {/* SDKs & Libraries */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">SDKs & Libraries</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-2">JavaScript/Node.js</h3>
                    <code className="bg-gray-900 p-2 rounded text-sm block">
                      npm install @zion/sdk
                    </code>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-2">Python</h3>
                    <code className="bg-gray-900 p-2 rounded text-sm block">
                      pip install zion-sdk
                    </code>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-2">PHP</h3>
                    <code className="bg-gray-900 p-2 rounded text-sm block">
                      composer require zion/sdk
                    </code>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-2">Ruby</h3>
                    <code className="bg-gray-900 p-2 rounded text-sm block">
                      gem install zion-sdk
                    </code>
                  </div>
                </div>
              </section>

              {/* Error Codes */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Error Codes</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left p-2">Code</th>
                        <th className="text-left p-2">Message</th>
                        <th className="text-left p-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="p-2 text-red-400">400</td>
                        <td className="p-2">Bad Request</td>
                        <td className="p-2">Invalid request parameters</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-2 text-red-400">401</td>
                        <td className="p-2">Unauthorized</td>
                        <td className="p-2">Invalid or missing API key</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-2 text-red-400">403</td>
                        <td className="p-2">Forbidden</td>
                        <td className="p-2">Insufficient permissions</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-2 text-red-400">404</td>
                        <td className="p-2">Not Found</td>
                        <td className="p-2">Resource doesn't exist</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-2 text-red-400">429</td>
                        <td className="p-2">Too Many Requests</td>
                        <td className="p-2">Rate limit exceeded</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-2 text-red-400">500</td>
                        <td className="p-2">Internal Server Error</td>
                        <td className="p-2">Server error, contact support</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Support */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Need Help?</h2>
                <p className="text-gray-300 mb-4">
                  Can't find what you're looking for? Our developer support team is here to help.
                </p>
                <div className="space-x-4">
                  <a 
                    href="/contact" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="https://github.com/Zion-Holdings/zion.app/issues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    GitHub Issues
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiDocumentation;