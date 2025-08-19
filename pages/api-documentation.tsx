import React, { useState } from 'react';
import Head from 'next/head';

export default function APIDocumentationPage() {
  const [selectedEndpoint, setSelectedEndpoint] = useState('authentication');

  const apiEndpoints = [
    {
      id: 'authentication',
      name: 'Authentication',
      description: 'Secure API access and token management',
      methods: [
        {
          method: 'POST',
          path: '/api/auth/login',
          description: 'Authenticate user and get access token',
          parameters: [
            { name: 'email', type: 'string', required: true, description: 'User email address' },
            { name: 'password', type: 'string', required: true, description: 'User password' }
          ],
          responses: [
            { code: 200, description: 'Authentication successful', example: '{ "token": "jwt_token", "user": {...} }' },
            { code: 401, description: 'Invalid credentials', example: '{ "error": "Invalid credentials" }' }
          ]
        },
        {
          method: 'POST',
          path: '/api/auth/refresh',
          description: 'Refresh access token',
          parameters: [
            { name: 'refresh_token', type: 'string', required: true, description: 'Refresh token' }
          ],
          responses: [
            { code: 200, description: 'Token refreshed', example: '{ "token": "new_jwt_token" }' },
            { code: 401, description: 'Invalid refresh token', example: '{ "error": "Invalid refresh token" }' }
          ]
        }
      ]
    },
    {
      id: 'automation',
      name: 'Automation Management',
      description: 'Manage autonomous automation systems',
      methods: [
        {
          method: 'GET',
          path: '/api/automation/systems',
          description: 'Get list of automation systems',
          parameters: [
            { name: 'status', type: 'string', required: false, description: 'Filter by status (active, idle, error)' },
            { name: 'limit', type: 'number', required: false, description: 'Number of results to return' }
          ],
          responses: [
            { code: 200, description: 'List of automation systems', example: '{ "systems": [...], "total": 227 }' },
            { code: 400, description: 'Invalid parameters', example: '{ "error": "Invalid status parameter" }' }
          ]
        },
        {
          method: 'POST',
          path: '/api/automation/systems',
          description: 'Create new automation system',
          parameters: [
            { name: 'name', type: 'string', required: true, description: 'System name' },
            { name: 'type', type: 'string', required: true, description: 'Automation type' },
            { name: 'config', type: 'object', required: true, description: 'System configuration' }
          ],
          responses: [
            { code: 201, description: 'System created', example: '{ "id": "sys_123", "name": "Content Generator", "status": "active" }' },
            { code: 400, description: 'Invalid configuration', example: '{ "error": "Missing required fields" }' }
          ]
        }
      ]
    },
    {
      id: 'content',
      name: 'Content Generation',
      description: 'AI-powered content creation and management',
      methods: [
        {
          method: 'POST',
          path: '/api/content/generate',
          description: 'Generate AI content',
          parameters: [
            { name: 'prompt', type: 'string', required: true, description: 'Content generation prompt' },
            { name: 'type', type: 'string', required: true, description: 'Content type (article, blog, social)' },
            { name: 'length', type: 'number', required: false, description: 'Target word count' }
          ],
          responses: [
            { code: 200, description: 'Content generated', example: '{ "content": "Generated text...", "word_count": 500 }' },
            { code: 400, description: 'Invalid prompt', example: '{ "error": "Prompt too short" }' }
          ]
        },
        {
          method: 'GET',
          path: '/api/content/history',
          description: 'Get content generation history',
          parameters: [
            { name: 'user_id', type: 'string', required: true, description: 'User identifier' },
            { name: 'limit', type: 'number', required: false, description: 'Number of results to return' }
          ],
          responses: [
            { code: 200, description: 'Content history', example: '{ "history": [...], "total": 45 }' },
            { code: 401, description: 'Unauthorized', example: '{ "error": "Invalid token" }' }
          ]
        }
      ]
    },
    {
      id: 'monitoring',
      name: 'System Monitoring',
      description: 'Real-time system metrics and health checks',
      methods: [
        {
          method: 'GET',
          path: '/api/monitoring/health',
          description: 'Get system health status',
          parameters: [],
          responses: [
            { code: 200, description: 'System health', example: '{ "status": "healthy", "uptime": "99.9%", "last_check": "2025-01-17T10:00:00Z" }' },
            { code: 503, description: 'Service unavailable', example: '{ "status": "unhealthy", "errors": [...] }' }
          ]
        },
        {
          method: 'GET',
          path: '/api/monitoring/metrics',
          description: 'Get system performance metrics',
          parameters: [
            { name: 'metric', type: 'string', required: false, description: 'Specific metric to retrieve' },
            { name: 'timeframe', type: 'string', required: false, description: 'Time range (1h, 24h, 7d)' }
          ],
          responses: [
            { code: 200, description: 'System metrics', example: '{ "cpu": "45%", "memory": "67%", "response_time": "45ms" }' },
            { code: 400, description: 'Invalid timeframe', example: '{ "error": "Invalid timeframe parameter" }' }
          ]
        }
      ]
    }
  ];

  const selectedEndpointData = apiEndpoints.find(ep => ep.id === selectedEndpoint);

  return (
    <>
      <Head>
        <title>API Documentation | Zion - Developer Resources</title>
        <meta name="description" content="Complete API documentation for Zion's autonomous automation platform. Learn how to integrate with our systems." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              API Documentation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Complete API reference for integrating with Zion's autonomous automation platform
            </p>
          </div>
        </div>

        {/* API Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">API Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Authentication</h3>
                <p className="text-gray-600 text-sm">
                  JWT-based authentication with refresh tokens for secure API access
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rate Limiting</h3>
                <p className="text-gray-600 text-sm">
                  Intelligent rate limiting based on your plan and usage patterns
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">RESTful Design</h3>
                <p className="text-gray-600 text-sm">
                  Standard REST API with consistent response formats and error handling
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">API Endpoints</h2>
          
          {/* Endpoint Navigation */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {apiEndpoints.map((endpoint) => (
              <button
                key={endpoint.id}
                onClick={() => setSelectedEndpoint(endpoint.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedEndpoint === endpoint.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {endpoint.name}
              </button>
            ))}
          </div>

          {/* Selected Endpoint Details */}
          {selectedEndpointData && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedEndpointData.name}</h3>
                <p className="text-gray-600">{selectedEndpointData.description}</p>
              </div>

              <div className="space-y-8">
                {selectedEndpointData.methods.map((method, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        method.method === 'GET' ? 'bg-green-100 text-green-800' :
                        method.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        method.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {method.method}
                      </span>
                      <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">
                        {method.path}
                      </code>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    
                    {/* Parameters */}
                    {method.parameters.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Parameters</h4>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-2">Name</th>
                                <th className="text-left py-2">Type</th>
                                <th className="text-left py-2">Required</th>
                                <th className="text-left py-2">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {method.parameters.map((param, paramIndex) => (
                                <tr key={paramIndex} className="border-b border-gray-100">
                                  <td className="py-2 font-mono">{param.name}</td>
                                  <td className="py-2">{param.type}</td>
                                  <td className="py-2">{param.required ? 'Yes' : 'No'}</td>
                                  <td className="py-2">{param.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                    
                    {/* Responses */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Responses</h4>
                      <div className="space-y-3">
                        {method.responses.map((response, responseIndex) => (
                          <div key={responseIndex} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                response.code >= 200 && response.code < 300 ? 'bg-green-100 text-green-800' :
                                response.code >= 400 && response.code < 500 ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {response.code}
                              </span>
                              <span className="font-medium">{response.description}</span>
                            </div>
                            <pre className="text-sm text-gray-600 bg-white p-3 rounded border overflow-x-auto">
                              {response.example}
                            </pre>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Code Examples */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Code Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">JavaScript/Node.js</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`const axios = require('axios');

// Authenticate and get token
const login = async (email, password) => {
  try {
    const response = await axios.post('/api/auth/login', {
      email,
      password
    });
    return response.data.token;
  } catch (error) {
    console.error('Login failed:', error.response.data);
  }
};

// Generate content
const generateContent = async (token, prompt) => {
  try {
    const response = await axios.post('/api/content/generate', {
      prompt,
      type: 'article',
      length: 500
    }, {
      headers: { Authorization: \`Bearer \${token}\` }
    });
    return response.data.content;
  } catch (error) {
    console.error('Content generation failed:', error.response.data);
  }
};`}
              </pre>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Python</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import requests

class ZionAPI:
    def __init__(self, base_url, token=None):
        self.base_url = base_url
        self.token = token
    
    def authenticate(self, email, password):
        response = requests.post(f"{self.base_url}/api/auth/login", {
            "email": email,
            "password": password
        })
        if response.status_code == 200:
            self.token = response.json()["token"]
            return self.token
        else:
            raise Exception("Authentication failed")
    
    def generate_content(self, prompt, content_type="article"):
        headers = {"Authorization": f"Bearer {self.token}"}
        response = requests.post(f"{self.base_url}/api/content/generate", {
            "prompt": prompt,
            "type": content_type
        }, headers=headers)
        return response.json()["content"]`}
              </pre>
            </div>
          </div>
        </div>

        {/* SDKs and Libraries */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">SDKs and Libraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Node.js SDK</h3>
                <p className="text-gray-600 text-sm mb-4">Official Node.js client library</p>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">npm install @zion/sdk</code>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🐍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Python SDK</h3>
                <p className="text-gray-600 text-sm mb-4">Official Python client library</p>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">pip install zion-sdk</code>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Java SDK</h3>
                <p className="text-gray-600 text-sm mb-4">Official Java client library</p>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">mvn install zion-sdk</code>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Help with Integration?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you integrate with Zion's API successfully.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors">
                Contact Developer Support
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
                Join Developer Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}