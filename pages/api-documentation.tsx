import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ApiDocumentation = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const apiEndpoints = [
    {
      method: 'GET',
      path: '/api/health',
      description: 'Check system health status',
      response: { status: 'healthy', timestamp: '2025-01-17T10:00:00Z' }
    },
    {
      method: 'POST',
      path: '/api/auth/login',
      description: 'Authenticate user and get access token',
      request: { email: 'user@example.com', password: 'password' },
      response: { token: 'jwt_token_here', expires: '2025-01-18T10:00:00Z' }
    },
    {
      method: 'GET',
      path: '/api/users',
      description: 'Get list of users (requires authentication)',
      headers: { 'Authorization': 'Bearer <token>' },
      response: { users: [], total: 0, page: 1 }
    },
    {
      method: 'POST',
      path: '/api/users',
      description: 'Create a new user',
      request: { name: 'John Doe', email: 'john@example.com' },
      response: { id: 123, name: 'John Doe', email: 'john@example.com' }
    },
    {
      method: 'PUT',
      path: '/api/users/{id}',
      description: 'Update user information',
      request: { name: 'John Smith', email: 'johnsmith@example.com' },
      response: { id: 123, name: 'John Smith', email: 'johnsmith@example.com' }
    },
    {
      method: 'DELETE',
      path: '/api/users/{id}',
      description: 'Delete a user',
      response: { success: true, message: 'User deleted successfully' }
    }
  ];

  const codeExamples = {
    javascript: `// JavaScript/Node.js example
const response = await fetch('/api/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ${'${token}'}',
    'Content-Type': 'application/json'
  }
});

const users = await response.json();
console.log(users);`,
    
    python: `# Python example
import requests

headers = {
    'Authorization': f'Bearer {token}',
    'Content-Type': 'application/json'
}

response = requests.get('/api/users', headers=headers)
users = response.json()
print(users)`,
    
    curl: `# cURL example
curl -X GET "https://api.zion.app/users" \\
  -H "Authorization: Bearer ${token}" \\
  -H "Content-Type: application/json"`,
    
    postman: `// Postman example
// Set Authorization header:
// Key: Authorization
// Value: Bearer ${token}

// Set Content-Type header:
// Key: Content-Type
// Value: application/json`
  };

  return (
    <>
      <Head>
        <title>API Documentation - Zion App</title>
        <meta name="description" content="Comprehensive API documentation for Zion App, including endpoints, authentication, and code examples." />
        <meta name="keywords" content="API, documentation, endpoints, authentication, REST, Zion App" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">API Documentation</h1>
                <p className="text-gray-600 mt-2">Complete guide to Zion App API endpoints and usage</p>
              </div>
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                ← Back to Home
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:flex lg:gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 flex-shrink-0 mb-8 lg:mb-0">
              <nav className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
                <ul className="space-y-2">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'authentication', label: 'Authentication' },
                    { id: 'endpoints', label: 'API Endpoints' },
                    { id: 'examples', label: 'Code Examples' },
                    { id: 'errors', label: 'Error Handling' },
                    { id: 'rate-limiting', label: 'Rate Limiting' },
                    { id: 'webhooks', label: 'Webhooks' }
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          activeSection === item.id
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:flex-1">
              {/* Overview Section */}
              {activeSection === 'overview' && (
                <div className="bg-white rounded-lg shadow-sm border p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">API Overview</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-6">
                      The Zion App API provides a comprehensive set of endpoints for managing users, 
                      content, and system operations. Our API follows RESTful principles and provides 
                      consistent JSON responses across all endpoints.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Base URL</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-md text-sm font-mono mb-6">
                      https://api.zion.app/v1
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
                    <ul className="space-y-2 text-gray-600 mb-6">
                      <li>• RESTful API design</li>
                      <li>• JSON request/response format</li>
                      <li>• JWT-based authentication</li>
                      <li>• Comprehensive error handling</li>
                      <li>• Rate limiting and throttling</li>
                      <li>• Webhook support for real-time updates</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Response Format</h3>
                    <p className="text-gray-600 mb-4">
                      All API responses follow a consistent format:
                    </p>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-md text-sm font-mono">
                      <code>
{`{
  "success": true,
  "data": { ... },
  "message": "Operation completed successfully",
  "timestamp": "2025-01-17T10:00:00Z"
}`}
                      </code>
                    </div>
                  </div>
                </div>
              )}

              {/* Authentication Section */}
              {activeSection === 'authentication' && (
                <div className="bg-white rounded-lg shadow-sm border p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentication</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-6">
                      Zion App API uses JWT (JSON Web Tokens) for authentication. You'll need to 
                      include the token in the Authorization header for protected endpoints.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
                      <li>Obtain your API credentials from the Zion App dashboard</li>
                      <li>Make a POST request to <code className="bg-gray-100 px-2 py-1 rounded">/api/auth/login</code></li>
                      <li>Include the returned token in subsequent requests</li>
                    </ol>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Header Format</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-md text-sm font-mono mb-6">
                      <code>
                        Authorization: Bearer &lt;your_jwt_token&gt;
                      </code>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Token Expiration</h3>
                    <p className="text-gray-600 mb-4">
                      JWT tokens expire after 24 hours. You can refresh them using the refresh endpoint 
                      or request a new token by re-authenticating.
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            <strong>Security Note:</strong> Never expose your JWT token in client-side code 
                            or public repositories. Always use environment variables or secure storage.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* API Endpoints Section */}
              {activeSection === 'endpoints' && (
                <div className="bg-white rounded-lg shadow-sm border p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">API Endpoints</h2>
                  
                  <div className="space-y-6">
                    {apiEndpoints.map((endpoint, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                            endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                            endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                            {endpoint.path}
                          </code>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{endpoint.description}</p>
                        
                        {endpoint.headers && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Headers:</h4>
                            <div className="bg-gray-50 p-3 rounded text-sm">
                              <code>{endpoint.headers['Authorization']}</code>
                            </div>
                          </div>
                        )}
                        
                        {endpoint.request && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Request Body:</h4>
                            <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                              <code>{JSON.stringify(endpoint.request, null, 2)}</code>
                            </div>
                          </div>
                        )}
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Response:</h4>
                          <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                            <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Examples Section */}
              {activeSection === 'examples' && (
                <div className="bg-white rounded-lg shadow-sm border p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Code Examples</h2>
                  
                  <div className="space-y-6">
                    {Object.entries(codeExamples).map(([language, code]) => (
                      <div key={language} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                          {language} Example
                        </h3>
                        <div className="bg-gray-900 text-green-400 p-4 rounded-md text-sm font-mono overflow-x-auto">
                          <code>{code}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Error Handling Section */}
              {activeSection === 'errors' && (
                <div className="bg-white rounded-lg shadow-sm border p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Error Handling</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-6">
                      The API returns appropriate HTTP status codes and detailed error messages 
                      to help you identify and resolve issues.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Common HTTP Status Codes</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">400</span>
                        <span className="text-gray-700">Bad Request - Invalid request format or parameters</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">401</span>
                        <span className="text-gray-700">Unauthorized - Invalid or missing authentication</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">403</span>
                        <span className="text-gray-700">Forbidden - Insufficient permissions</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">404</span>
                        <span className="text-gray-700">Not Found - Resource doesn't exist</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">429</span>
                        <span className="text-gray-700">Too Many Requests - Rate limit exceeded</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">500</span>
                        <span className="text-gray-700">Internal Server Error - Server-side issue</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Error Response Format</h3>
                    <div className="bg-gray-900 text-red-400 p-4 rounded-md text-sm font-mono">
                      <code>
{`{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {
      "email": "Must be a valid email address"
    }
  },
  "timestamp": "2025-01-17T10:00:00Z"
}`}
                      </code>
                    </div>
                  </div>
                </div>
              )}

              {/* Rate Limiting Section */}
              {activeSection === 'rate-limiting' && (
                <div className="bg-white rounded-lg shadow-sm border p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Rate Limiting</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-6">
                      To ensure fair usage and system stability, the Zion App API implements rate limiting 
                      on all endpoints.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Rate Limits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Free Tier</h4>
                        <p className="text-blue-700">1,000 requests per hour</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Pro Tier</h4>
                        <p className="text-green-700">10,000 requests per hour</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Rate Limit Headers</h3>
                    <p className="text-gray-600 mb-4">
                      The API includes rate limit information in response headers:
                    </p>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-md text-sm font-mono mb-6">
                      <code>
{`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642413600`}
                      </code>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            When you exceed the rate limit, the API returns a 429 status code. 
                            Implement exponential backoff in your applications to handle this gracefully.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Webhooks Section */}
              {activeSection === 'webhooks' && (
                <div className="bg-white rounded-lg shadow-sm border p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Webhooks</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-6">
                      Webhooks allow you to receive real-time notifications when specific events 
                      occur in the Zion App system.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Supported Events</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-700">user.created - When a new user is created</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-700">user.updated - When user information is modified</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-700">content.published - When new content is published</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-700">system.maintenance - When system maintenance begins/ends</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Webhook Payload Format</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-md text-sm font-mono mb-6">
                      <code>
{`{
  "event": "user.created",
  "timestamp": "2025-01-17T10:00:00Z",
  "data": {
    "userId": 123,
    "email": "user@example.com",
    "name": "John Doe"
  }
}`}
                      </code>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Setting Up Webhooks</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
                      <li>Configure your webhook endpoint URL in the Zion App dashboard</li>
                      <li>Select the events you want to receive notifications for</li>
                      <li>Set up your endpoint to handle POST requests</li>
                      <li>Verify webhook delivery with the test endpoint</li>
                    </ol>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-blue-700">
                            <strong>Security:</strong> Webhook endpoints should implement signature verification 
                            to ensure requests are coming from Zion App. Check the documentation for signature details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help with Integration?</h2>
            <p className="text-blue-100 mb-6">
              Our team is here to help you integrate with the Zion App API successfully.
            </p>
            <div className="space-x-4">
              <Link href="/contact" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </Link>
              <Link href="/services" className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiDocumentation;