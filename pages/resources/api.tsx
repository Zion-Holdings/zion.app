import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Brain, 
  Rocket, 
  Search, 
  Download, 
  ExternalLink, 
  CheckCircle,
  Star,
  Clock,
  ArrowRight,
  Copy,
  Play,
  BookOpen
} from 'lucide-react';

const APIPage: React.FC = () => {
  const apis = [
    {
      title: 'REST API',
      description: 'Comprehensive REST API for all Zion Tech Group services',
      version: 'v2.1',
      status: 'Stable',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500',
      features: [
        'HTTP/HTTPS support',
        'JSON request/response',
        'Rate limiting',
        'Authentication & authorization'
      ],
      endpoints: [
        { method: 'GET', path: '/api/v2/services', description: 'List all services' },
        { method: 'POST', path: '/api/v2/projects', description: 'Create new project' },
        { method: 'PUT', path: '/api/v2/projects/{id}', description: 'Update project' },
        { method: 'DELETE', path: '/api/v2/projects/{id}', description: 'Delete project' }
      ]
    },
    {
      title: 'GraphQL API',
      description: 'Flexible GraphQL API for complex data queries',
      version: 'v1.0',
      status: 'Beta',
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      features: [
        'Single endpoint',
        'Real-time subscriptions',
        'Schema introspection',
        'Query optimization'
      ],
      endpoints: [
        { method: 'POST', path: '/graphql', description: 'GraphQL endpoint' },
        { method: 'GET', path: '/graphql', description: 'GraphiQL interface' }
      ]
    },
    {
      title: 'WebSocket API',
      description: 'Real-time communication and streaming API',
      version: 'v1.0',
      status: 'Stable',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Real-time updates',
        'Bi-directional communication',
        'Event streaming',
        'Connection management'
      ],
      endpoints: [
        { method: 'WS', path: '/ws/v1/events', description: 'Event streaming' },
        { method: 'WS', path: '/ws/v1/chat', description: 'Real-time chat' }
      ]
    },
    {
      title: 'AI/ML API',
      description: 'Advanced AI and machine learning capabilities',
      version: 'v2.0',
      status: 'Stable',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      features: [
        'Model inference',
        'Training endpoints',
        'Data preprocessing',
        'Model management'
      ],
      endpoints: [
        { method: 'POST', path: '/api/v2/ai/predict', description: 'AI prediction' },
        { method: 'POST', path: '/api/v2/ai/train', description: 'Model training' },
        { method: 'GET', path: '/api/v2/ai/models', description: 'List models' }
      ]
    },
    {
      title: 'Security API',
      description: 'Security and compliance management API',
      version: 'v1.5',
      status: 'Stable',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      features: [
        'Threat detection',
        'Compliance reporting',
        'Access control',
        'Audit logging'
      ],
      endpoints: [
        { method: 'GET', path: '/api/v1/security/threats', description: 'Get threats' },
        { method: 'POST', path: '/api/v1/security/scan', description: 'Security scan' },
        { method: 'GET', path: '/api/v1/security/compliance', description: 'Compliance status' }
      ]
    },
    {
      title: 'Analytics API',
      description: 'Data analytics and reporting API',
      version: 'v1.2',
      status: 'Stable',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Real-time analytics',
        'Custom dashboards',
        'Data export',
        'Performance metrics'
      ],
      endpoints: [
        { method: 'GET', path: '/api/v1/analytics/metrics', description: 'Get metrics' },
        { method: 'POST', path: '/api/v1/analytics/reports', description: 'Generate reports' },
        { method: 'GET', path: '/api/v1/analytics/dashboards', description: 'List dashboards' }
      ]
    }
  ];

  const sdks = [
    { name: 'JavaScript/Node.js', version: 'v2.1.0', downloads: '15.2k', icon: 'JS' },
    { name: 'Python', version: 'v2.0.5', downloads: '12.8k', icon: 'PY' },
    { name: 'Java', version: 'v1.9.2', downloads: '8.5k', icon: 'JV' },
    { name: 'C#/.NET', version: 'v1.8.1', downloads: '6.3k', icon: 'C#' },
    { name: 'Go', version: 'v1.7.0', downloads: '4.2k', icon: 'GO' },
    { name: 'PHP', version: 'v1.6.3', downloads: '3.8k', icon: 'PHP' }
  ];

  const quickStart = [
    { step: 1, title: 'Get API Key', description: 'Sign up and get your API key from the dashboard' },
    { step: 2, title: 'Install SDK', description: 'Install your preferred SDK or use REST directly' },
    { step: 3, title: 'Make First Call', description: 'Test the API with a simple authentication call' },
    { step: 4, title: 'Build Integration', description: 'Integrate the API into your application' }
  ];

  return (
    <Layout 
      title="API Reference - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. REST, GraphQL, WebSocket, and AI/ML APIs with SDKs and examples."
      keywords="API reference, REST API, GraphQL, WebSocket, AI API, SDK, Zion Tech Group, developer documentation"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Code className="w-16 h-16 text-indigo-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                  API Reference
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Comprehensive API documentation for all Zion Tech Group services. 
                Build powerful integrations with our REST, GraphQL, WebSocket, and AI APIs.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search API endpoints..."
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Download SDKs
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Started in 4 Steps
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow these simple steps to integrate with our APIs and start building amazing applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quickStart.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Overview */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Available APIs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the right API for your use case. Each API is designed for specific functionality and performance requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apis.map((api, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${api.color} rounded-xl flex items-center justify-center`}>
                      {api.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-400">v{api.version}</span>
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${api.status === 'Stable' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                        <span className="text-sm text-gray-300">{api.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{api.title}</h3>
                  <p className="text-gray-300 mb-6">{api.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                    <ul className="space-y-2">
                      {api.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Endpoints</h4>
                    <div className="space-y-2">
                      {api.endpoints.slice(0, 3).map((endpoint, endpointIndex) => (
                        <div key={endpointIndex} className="bg-gray-800/30 rounded p-2">
                          <div className="flex items-center justify-between">
                            <span className={`px-2 py-1 rounded text-xs font-mono ${
                              endpoint.method === 'GET' ? 'bg-green-500/20 text-green-300' :
                              endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-300' :
                              endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-300' :
                              endpoint.method === 'DELETE' ? 'bg-red-500/20 text-red-300' :
                              'bg-purple-500/20 text-purple-300'
                            }`}>
                              {endpoint.method}
                            </span>
                            <span className="text-xs text-gray-400 font-mono">{endpoint.path}</span>
                          </div>
                          <p className="text-xs text-gray-300 mt-1">{endpoint.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    View Full API Docs
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Official SDKs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started quickly with our official SDKs for popular programming languages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {sdk.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-400">{sdk.version}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {sdk.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <Download className="w-4 h-4 mr-1" />
                    {sdk.downloads} downloads
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build with Our APIs?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Start integrating with Zion Tech Group APIs today and unlock the power 
                of our technology platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Get API Key
                </button>
                <button className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
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

export default APIPage;