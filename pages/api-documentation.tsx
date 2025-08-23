import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, 
  Search, 
  Filter,
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  Star,
  Clock,
  Copy,
  Check,
  AlertCircle,
  Info,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Database,
  Terminal,
  GitBranch,
  Zap,
  CheckCircle,
  BookOpen,
  FileText,
  Settings,
  Key,
  Lock,
  Globe,
  Server
} from 'lucide-react';

const APIDocumentationPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAPI, setSelectedAPI] = useState('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const apis = [
    { id: 'all', label: 'All APIs', icon: Code, count: 12 },
    { id: 'ai-consciousness', label: 'AI Consciousness', icon: Brain, count: 4 },
    { id: 'quantum-computing', label: 'Quantum Computing', icon: Atom, count: 3 },
    { id: 'space-technology', label: 'Space Technology', icon: Rocket, count: 2 },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield, count: 2 },
    { id: 'cloud-infrastructure', label: 'Cloud Infrastructure', icon: Cloud, count: 1 }
  ];

  const apiEndpoints = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness API',
      description: 'Build intelligent applications with our advanced AI consciousness platform',
      baseUrl: 'https://api.ziontechgroup.com/v1/ai-consciousness',
      version: 'v1.0.0',
      status: 'stable',
      endpoints: [
        {
          method: 'POST',
          path: '/chat',
          description: 'Send a message to the AI consciousness system',
          parameters: [
            { name: 'message', type: 'string', required: true, description: 'The message to send' },
            { name: 'context', type: 'object', required: false, description: 'Additional context for the conversation' },
            { name: 'personality', type: 'string', required: false, description: 'AI personality to use' }
          ],
          response: {
            type: 'object',
            properties: {
              response: { type: 'string', description: 'AI response message' },
              confidence: { type: 'number', description: 'Confidence score (0-1)' },
              context: { type: 'object', description: 'Updated conversation context' }
            }
          },
          example: {
            request: {
              message: 'Hello, how are you today?',
              personality: 'friendly'
            },
            response: {
              response: 'Hello! I\'m doing well, thank you for asking. How can I assist you today?',
              confidence: 0.95,
              context: { conversation_id: 'conv_123', turn: 1 }
            }
          }
        },
        {
          method: 'GET',
          path: '/personalities',
          description: 'Get available AI personalities',
          parameters: [],
          response: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string', description: 'Personality ID' },
                name: { type: 'string', description: 'Personality name' },
                description: { type: 'string', description: 'Personality description' }
              }
            }
          },
          example: {
            response: [
              { id: 'friendly', name: 'Friendly', description: 'Warm and approachable personality' },
              { id: 'professional', name: 'Professional', description: 'Formal and business-focused' }
            ]
          }
        }
      ]
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing API',
      description: 'Access quantum computing power for complex computational problems',
      baseUrl: 'https://api.ziontechgroup.com/v1/quantum',
      version: 'v1.2.0',
      status: 'beta',
      endpoints: [
        {
          method: 'POST',
          path: '/execute',
          description: 'Execute a quantum algorithm',
          parameters: [
            { name: 'algorithm', type: 'string', required: true, description: 'Algorithm to execute' },
            { name: 'qubits', type: 'number', required: true, description: 'Number of qubits' },
            { name: 'iterations', type: 'number', required: false, description: 'Number of iterations' }
          ],
          response: {
            type: 'object',
            properties: {
              result: { type: 'object', description: 'Algorithm execution result' },
              execution_time: { type: 'number', description: 'Execution time in milliseconds' },
              qubits_used: { type: 'number', description: 'Number of qubits used' }
            }
          },
          example: {
            request: {
              algorithm: 'grover',
              qubits: 4,
              iterations: 100
            },
            response: {
              result: { solution: '1010', probability: 0.85 },
              execution_time: 1500,
              qubits_used: 4
            }
          }
        }
      ]
    },
    {
      id: 'space-technology',
      name: 'Space Technology API',
      description: 'Access space resource intelligence and satellite data',
      baseUrl: 'https://api.ziontechgroup.com/v1/space',
      version: 'v1.1.0',
      status: 'stable',
      endpoints: [
        {
          method: 'GET',
          path: '/asteroids',
          description: 'Get information about near-Earth asteroids',
          parameters: [
            { name: 'limit', type: 'number', required: false, description: 'Maximum number of results' },
            { name: 'hazardous', type: 'boolean', required: false, description: 'Filter hazardous asteroids' }
          ],
          response: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string', description: 'Asteroid ID' },
                name: { type: 'string', description: 'Asteroid name' },
                distance: { type: 'number', description: 'Distance from Earth (km)' },
                size: { type: 'number', description: 'Estimated size (m)' }
              }
            }
          },
          example: {
            response: [
              { id: 'asteroid_001', name: '2024 ABC', distance: 1500000, size: 50 },
              { id: 'asteroid_002', name: '2024 DEF', distance: 2300000, size: 120 }
            ]
          }
        }
      ]
    }
  ];

  const filteredAPIs = selectedAPI === 'all' 
    ? apiEndpoints 
    : apiEndpoints.filter(api => api.id === selectedAPI);

  const searchResults = searchQuery 
    ? apiEndpoints.flatMap(api => 
        api.endpoints.filter(endpoint => 
          endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
          endpoint.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : [];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'bg-green-900/20 text-green-400 border-green-400/30';
      case 'beta': return 'bg-yellow-900/20 text-yellow-400 border-yellow-400/30';
      case 'alpha': return 'bg-red-900/20 text-red-400 border-red-400/30';
      default: return 'bg-gray-900/20 text-gray-400 border-gray-400/30';
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-900/20 text-green-400 border-green-400/30';
      case 'POST': return 'bg-blue-900/20 text-blue-400 border-blue-400/30';
      case 'PUT': return 'bg-yellow-900/20 text-yellow-400 border-yellow-400/30';
      case 'DELETE': return 'bg-red-900/20 text-red-400 border-red-400/30';
      default: return 'bg-gray-900/20 text-gray-400 border-gray-400/30';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                API Documentation
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Comprehensive API references, code examples, and integration guides for all our 
                technology platforms and services.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search APIs, endpoints, or methods..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-12 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">12</div>
                  <div className="text-gray-400">APIs</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400">Endpoints</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5</div>
                  <div className="text-gray-400">Platforms</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Results */}
        {searchQuery && (
          <section className="py-16 bg-gradient-to-br from-gray-900/50 to-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-white">
                    Search Results for "{searchQuery}"
                  </h2>
                  <span className="text-gray-400">{searchResults.length} endpoints found</span>
                </div>

                {searchResults.length > 0 ? (
                  <div className="space-y-6">
                    {searchResults.map((endpoint, index) => (
                      <motion.div
                        key={`${endpoint.method}-${endpoint.path}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getMethodColor(endpoint.method)}`}>
                            {endpoint.method}
                          </span>
                          <code className="text-lg font-mono text-cyan-400">{endpoint.path}</code>
                        </div>
                        <p className="text-gray-300 mb-4">{endpoint.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Parameters: {endpoint.parameters.length}</span>
                          <span>Response: {endpoint.response.type}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Code className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl text-gray-400 mb-2">No endpoints found</h3>
                    <p className="text-gray-500">Try adjusting your search terms or browse our API categories below.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </section>
        )}

        {/* API Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">API Categories</h2>
              <p className="text-gray-300">Filter APIs by technology platform</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {apis.map((api, index) => (
                <motion.button
                  key={api.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedAPI(api.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-center group ${
                    selectedAPI === api.id
                      ? 'border-cyan-400 bg-cyan-900/20'
                      : 'border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 hover:bg-gray-800/50'
                  }`}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    selectedAPI === api.id
                      ? 'bg-cyan-400 text-black'
                      : 'bg-gray-700 text-gray-300 group-hover:bg-cyan-400 group-hover:text-black'
                  }`}>
                    <api.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{api.label}</h3>
                  <span className="text-sm text-gray-400">{api.count} APIs</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* API Documentation */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">API Reference</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Detailed documentation for each API with examples, parameters, and responses
              </p>
            </motion.div>

            <div className="space-y-16">
              {filteredAPIs.map((api, apiIndex) => (
                <motion.div
                  key={api.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: apiIndex * 0.2 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50"
                >
                  {/* API Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-3xl font-bold text-white">{api.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(api.status)}`}>
                        {api.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-lg mb-4">{api.description}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Base URL: <code className="text-cyan-400">{api.baseUrl}</code>
                      </span>
                      <span className="flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Version: {api.version}
                      </span>
                    </div>
                  </div>

                  {/* Endpoints */}
                  <div className="space-y-8">
                    {api.endpoints.map((endpoint, endpointIndex) => (
                      <motion.div
                        key={`${endpoint.method}-${endpoint.path}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: endpointIndex * 0.1 }}
                        className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl p-6 border border-gray-600/30"
                      >
                        {/* Endpoint Header */}
                        <div className="flex items-center gap-4 mb-6">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getMethodColor(endpoint.method)}`}>
                            {endpoint.method}
                          </span>
                          <code className="text-xl font-mono text-cyan-400">{endpoint.path}</code>
                        </div>

                        <p className="text-gray-300 mb-6">{endpoint.description}</p>

                        {/* Parameters */}
                        {endpoint.parameters.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-white mb-4">Parameters</h4>
                            <div className="bg-gray-800/50 rounded-xl p-4">
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                                <div className="font-semibold text-gray-300">Name</div>
                                <div className="font-semibold text-gray-300">Type</div>
                                <div className="font-semibold text-gray-300">Required</div>
                                <div className="font-semibold text-gray-300">Description</div>
                                {endpoint.parameters.map((param, paramIndex) => (
                                  <React.Fragment key={paramIndex}>
                                    <div className="text-cyan-400 font-mono">{param.name}</div>
                                    <div className="text-gray-300">{param.type}</div>
                                    <div className={param.required ? 'text-green-400' : 'text-gray-400'}>
                                      {param.required ? 'Yes' : 'No'}
                                    </div>
                                    <div className="text-gray-300">{param.description}</div>
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Response */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Response</h4>
                          <div className="bg-gray-800/50 rounded-xl p-4">
                            <div className="text-sm text-gray-300">
                              <div className="mb-2">
                                <span className="text-cyan-400">Type:</span> {endpoint.response.type}
                              </div>
                              {endpoint.response.properties && (
                                <div className="space-y-2">
                                  {Object.entries(endpoint.response.properties).map(([key, prop]: [string, any]) => (
                                    <div key={key} className="ml-4">
                                      <span className="text-cyan-400">{key}:</span> {prop.type} - {prop.description}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Example */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4">Example</h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Request */}
                            <div>
                              <h5 className="text-md font-semibold text-gray-300 mb-3">Request</h5>
                              <div className="bg-gray-800/50 rounded-xl p-4 relative">
                                <button
                                  onClick={() => copyToClipboard(JSON.stringify(endpoint.example.request, null, 2), `request-${endpoint.method}-${endpoint.path}`)}
                                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                  {copiedCode === `request-${endpoint.method}-${endpoint.path}` ? (
                                    <Check className="w-4 h-4 text-green-400" />
                                  ) : (
                                    <Copy className="w-4 h-4" />
                                  )}
                                </button>
                                <pre className="text-sm text-gray-300 overflow-x-auto">
                                  <code>{JSON.stringify(endpoint.example.request, null, 2)}</code>
                                </pre>
                              </div>
                            </div>

                            {/* Response */}
                            <div>
                              <h5 className="text-md font-semibold text-gray-300 mb-3">Response</h5>
                              <div className="bg-gray-800/50 rounded-xl p-4 relative">
                                <button
                                  onClick={() => copyToClipboard(JSON.stringify(endpoint.example.response, null, 2), `response-${endpoint.method}-${endpoint.path}`)}
                                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                  {copiedCode === `response-${endpoint.method}-${endpoint.path}` ? (
                                    <Check className="w-4 h-4 text-green-400" />
                                  ) : (
                                    <Copy className="w-4 h-4" />
                                  )}
                                </button>
                                <pre className="text-sm text-gray-300 overflow-x-auto">
                                  <code>{JSON.stringify(endpoint.example.response, null, 2)}</code>
                                </pre>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Quick Start Guide</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running with our APIs in minutes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Authentication */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Key className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Get Your API Key</h3>
                <p className="text-gray-300 mb-6">
                  Sign up for an account and generate your API key from the dashboard.
                </p>
                <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  Get API Key →
                </a>
              </motion.div>

              {/* Installation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <Terminal className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Install SDK</h3>
                <p className="text-gray-300 mb-6">
                  Install our official SDKs for your preferred programming language.
                </p>
                <div className="space-y-2 text-sm">
                  <code className="block text-cyan-400">npm install @ziontechgroup/sdk</code>
                  <code className="block text-cyan-400">pip install ziontechgroup</code>
                  <code className="block text-cyan-400">gem install ziontechgroup</code>
                </div>
              </motion.div>

              {/* First Request */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Make Your First Request</h3>
                <p className="text-gray-300 mb-6">
                  Test the API with a simple request to verify everything is working.
                </p>
                <div className="bg-gray-800/50 rounded-xl p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`curl -X POST ${apiEndpoints[0].baseUrl}/chat \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Hello!"}'`}</code>
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start building with our powerful APIs today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get API Access
                </a>
                <a
                  href="/docs"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  View Full Documentation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default APIDocumentationPage;