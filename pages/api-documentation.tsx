import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const APIDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>API Documentation - Zion App</title>
        <meta name="description" content="Comprehensive API documentation for Zion App services and integrations" />
        <meta name="keywords" content="API, documentation, Zion App, integration, services" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              API Documentation
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive guide to integrating with Zion App services
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Getting Started</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Authentication</h3>
                <p className="text-gray-600 mb-3">
                  All API requests require authentication using API keys. Include your API key in the Authorization header:
                </p>
                <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Base URL</h3>
                <p className="text-gray-600 mb-3">
                  All API endpoints are relative to our base URL:
                </p>
                <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                  https://api.zion.app/v1
                </code>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Rate Limiting</h3>
                <p className="text-gray-600 mb-3">
                  API requests are limited to 1000 requests per hour per API key.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Core Endpoints</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Content Management</h3>
                <div className="space-y-2 text-sm">
                  <div><code className="bg-gray-100 px-2 py-1 rounded">GET /content</code> - Retrieve content</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">POST /content</code> - Create content</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">PUT /content/{'{id}'}</code> - Update content</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">DELETE /content/{'{id}'}</code> - Delete content</div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">User Management</h3>
                <div className="space-y-2 text-sm">
                  <div><code className="bg-gray-100 px-2 py-1 rounded">GET /users</code> - List users</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">POST /users</code> - Create user</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">GET /users/{'{id}'}</code> - Get user details</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">PUT /users/{'{id}'}</code> - Update user</div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Analytics</h3>
                <div className="space-y-2 text-sm">
                  <div><code className="bg-gray-100 px-2 py-1 rounded">GET /analytics/overview</code> - Get analytics overview</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">GET /analytics/reports</code> - Generate reports</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">POST /analytics/export</code> - Export data</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Code Examples</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">JavaScript/Node.js</h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.zion.app/v1',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

// Get content
const getContent = async () => {
  try {
    const response = await api.get('/content');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Python</h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import requests

api_key = 'YOUR_API_KEY'
base_url = 'https://api.zion.app/v1'

headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

# Get content
response = requests.get(f'{base_url}/content', headers=headers)
if response.status_code == 200:
    print(response.json())
else:
    print(f'Error: {response.status_code}')`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Error Codes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-medium text-red-800">4xx Client Errors</h3>
                <div className="text-sm text-red-700 space-y-1 mt-2">
                  <div><strong>400:</strong> Bad Request</div>
                  <div><strong>401:</strong> Unauthorized</div>
                  <div><strong>403:</strong> Forbidden</div>
                  <div><strong>404:</strong> Not Found</div>
                  <div><strong>429:</strong> Too Many Requests</div>
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-medium text-orange-800">5xx Server Errors</h3>
                <div className="text-sm text-orange-700 space-y-1 mt-2">
                  <div><strong>500:</strong> Internal Server Error</div>
                  <div><strong>502:</strong> Bad Gateway</div>
                  <div><strong>503:</strong> Service Unavailable</div>
                  <div><strong>504:</strong> Gateway Timeout</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Need Help?</h3>
            <p className="text-blue-600 mb-4">
              Our developer support team is here to help you integrate successfully.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;