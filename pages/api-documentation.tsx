import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, 
  Key, 
  Database, 
  Globe, 
  Zap, 
  Shield, 
  BookOpen,
  Copy,
  CheckCircle,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const APIDocumentationPage: React.FC = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/users',
      description: 'Retrieve a list of users',
      auth: 'Bearer Token',
      parameters: [
        { name: 'page', type: 'integer', required: false, description: 'Page number for pagination' },
        { name: 'limit', type: 'integer', required: false, description: 'Number of items per page' },
        { name: 'search', type: 'string', required: false, description: 'Search query for filtering users' }
      ]
    },
    {
      method: 'POST',
      path: '/api/v1/users',
      description: 'Create a new user',
      auth: 'Bearer Token',
      parameters: [
        { name: 'email', type: 'string', required: true, description: 'User email address' },
        { name: 'name', type: 'string', required: true, description: 'User full name' },
        { name: 'role', type: 'string', required: false, description: 'User role (default: user)' }
      ]
    },
    {
      method: 'PUT',
      path: '/api/v1/users/{id}',
      description: 'Update an existing user',
      auth: 'Bearer Token',
      parameters: [
        { name: 'id', type: 'string', required: true, description: 'User ID' },
        { name: 'email', type: 'string', required: false, description: 'User email address' },
        { name: 'name', type: 'string', required: false, description: 'User full name' },
        { name: 'role', type: 'string', required: false, description: 'User role' }
      ]
    },
    {
      method: 'DELETE',
      path: '/api/v1/users/{id}',
      description: 'Delete a user',
      auth: 'Bearer Token',
      parameters: [
        { name: 'id', type: 'string', required: true, description: 'User ID' }
      ]
    }
  ];

  const sdkExamples = [
    {
      language: 'JavaScript',
      code: `import { ZionAPI } from '@ziontechgroup/sdk';

const api = new ZionAPI({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Get users
const users = await api.users.list({
  page: 1,
  limit: 10
});

// Create user
const newUser = await api.users.create({
  email: 'user@example.com',
  name: 'John Doe'
});`
    },
    {
      language: 'Python',
      code: `from ziontechgroup import ZionAPI

api = ZionAPI(
    api_key="your-api-key",
    environment="production"
)

# Get users
users = api.users.list(page=1, limit=10)

# Create user
new_user = api.users.create(
    email="user@example.com",
    name="John Doe"
)`
    },
    {
      language: 'cURL',
      code: `# Get users
curl -X GET "https://api.ziontechgroup.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"

# Create user
curl -X POST "https://api.ziontechgroup.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "name": "John Doe"
  }'`
    }
  ];

  const features = [
    {
      icon: <Key className="w-8 h-8 text-blue-400" />,
      title: 'Authentication',
      description: 'Secure API key and OAuth 2.0 authentication methods'
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: 'Real-time Data',
      description: 'WebSocket support for real-time data streaming'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Rate Limiting',
      description: 'Intelligent rate limiting with detailed quota information'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Global CDN',
      description: 'Worldwide content delivery network for optimal performance'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <Code className="w-16 h-16 text-blue-400" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                API Documentation
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive API reference with examples, SDKs, and integration guides to help you 
                build powerful applications with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center">
                  Get API Key
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300">
                  View SDKs
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                API Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our API is designed for developers, with powerful features that make integration simple and efficient.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Endpoints Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                API Endpoints
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints with detailed documentation and examples.
              </p>
            </motion.div>

            <div className="space-y-6">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded text-sm font-semibold mr-4 ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                      endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-white">{endpoint.path}</code>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{endpoint.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Authentication</h4>
                      <p className="text-gray-400">{endpoint.auth}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Parameters</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="text-sm">
                            <span className="text-white font-mono">{param.name}</span>
                            <span className="text-gray-400"> ({param.type})</span>
                            {param.required && <span className="text-red-400 ml-2">*</span>}
                            <p className="text-gray-500 text-xs mt-1">{param.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDK Examples Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                SDK Examples
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started quickly with our official SDKs and code examples in multiple programming languages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {sdkExamples.map((sdk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{sdk.language}</h3>
                  <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap">{sdk.code}</pre>
                  </div>
                  <button className="mt-4 w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Code
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 to-green-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get your API key and start building amazing applications with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-green-700 transition-all duration-300">
                  Get API Key
                </button>
                <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300">
                  View Examples
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default APIDocumentationPage;