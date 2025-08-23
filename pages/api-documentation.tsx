import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, 
  Code, 
  Key, 
  Database, 
  Zap,
  Copy,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Play,
  Download,
  BookOpen,
  Terminal,
  Shield,
  Brain,
  Atom,
  Rocket,
  Cloud,
  Users,
  Settings,
  HelpCircle,
  MessageCircle,
  Star,
  Clock,
  GitBranch
} from 'lucide-react';

const APIDocumentationPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAPI, setSelectedAPI] = useState('all');
  const [expandedEndpoints, setExpandedEndpoints] = useState<string[]>(['authentication']);

  const apis = [
    { id: 'all', name: 'All APIs', count: 80 },
    { id: 'ai-consciousness', name: 'AI Consciousness', count: 25 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 18 },
    { id: 'space-technology', name: 'Space Technology', count: 15 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 22 }
  ];

  const apiEndpoints = [
    {
      id: 'authentication',
      title: 'Authentication',
      description: 'Secure your API requests with authentication tokens',
      icon: Key,
      color: 'from-green-500 to-emerald-500',
      endpoints: [
        {
          method: 'POST',
          path: '/auth/login',
          description: 'Authenticate and receive access token',
          parameters: [
            { name: 'email', type: 'string', required: true, description: 'User email address' },
            { name: 'password', type: 'string', required: true, description: 'User password' }
          ],
          responses: [
            { code: 200, description: 'Authentication successful', example: '{ "token": "jwt_token", "expires": "2025-12-31T23:59:59Z" }' },
            { code: 401, description: 'Invalid credentials', example: '{ "error": "Invalid email or password" }' }
          ]
        },
        {
          method: 'POST',
          path: '/auth/refresh',
          description: 'Refresh expired access token',
          parameters: [
            { name: 'refresh_token', type: 'string', required: true, description: 'Valid refresh token' }
          ],
          responses: [
            { code: 200, description: 'Token refreshed successfully', example: '{ "token": "new_jwt_token", "expires": "2025-12-31T23:59:59Z" }' },
            { code: 401, description: 'Invalid refresh token', example: '{ "error": "Invalid refresh token" }' }
          ]
        }
      ]
    },
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness API',
      description: 'Build conscious AI systems with advanced neural networks',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      endpoints: [
        {
          method: 'POST',
          path: '/ai/consciousness/create',
          description: 'Create a new conscious AI agent',
          parameters: [
            { name: 'name', type: 'string', required: true, description: 'Agent name' },
            { name: 'personality', type: 'string', required: true, description: 'Agent personality traits' },
            { name: 'consciousness_level', type: 'string', required: true, description: 'Consciousness level (basic, advanced, expert)' },
            { name: 'memory_capacity', type: 'integer', required: false, description: 'Memory capacity in MB' }
          ],
          responses: [
            { code: 201, description: 'Agent created successfully', example: '{ "agent_id": "agent_123", "status": "active", "consciousness_score": 0.85 }' },
            { code: 400, description: 'Invalid parameters', example: '{ "error": "Invalid consciousness level" }' }
          ]
        },
        {
          method: 'POST',
          path: '/ai/consciousness/chat',
          description: 'Interact with a conscious AI agent',
          parameters: [
            { name: 'agent_id', type: 'string', required: true, description: 'Target agent ID' },
            { name: 'message', type: 'string', required: true, description: 'User message' },
            { name: 'context', type: 'object', required: false, description: 'Conversation context' }
          ],
          responses: [
            { code: 200, description: 'Response received', example: '{ "response": "Hello! How can I help you today?", "consciousness_state": "engaged", "memory_usage": 0.23 }' },
            { code: 404, description: 'Agent not found', example: '{ "error": "Agent not found" }' }
          ]
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing API',
      description: 'Execute quantum algorithms and quantum machine learning',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      endpoints: [
        {
          method: 'POST',
          path: '/quantum/execute',
          description: 'Execute a quantum algorithm',
          parameters: [
            { name: 'algorithm', type: 'string', required: true, description: 'Algorithm name (grover, shor, qft)' },
            { name: 'qubits', type: 'integer', required: true, description: 'Number of qubits' },
            { name: 'iterations', type: 'integer', required: false, description: 'Number of iterations' }
          ],
          responses: [
            { code: 200, description: 'Algorithm executed successfully', example: '{ "result": "0101", "probability": 0.85, "execution_time": "2.3s" }' },
            { code: 400, description: 'Invalid algorithm', example: '{ "error": "Algorithm not supported" }' }
          ]
        },
        {
          method: 'POST',
          path: '/quantum/ml/train',
          description: 'Train a quantum machine learning model',
          parameters: [
            { name: 'model_type', type: 'string', required: true, description: 'Model type (qnn, qsvm, qkmeans)' },
            { name: 'training_data', type: 'array', required: true, description: 'Training dataset' },
            { name: 'hyperparameters', type: 'object', required: false, description: 'Model hyperparameters' }
          ],
          responses: [
            { code: 200, description: 'Model trained successfully', example: '{ "model_id": "qml_456", "accuracy": 0.92, "training_time": "15.2s" }' },
            { code: 400, description: 'Invalid training data', example: '{ "error": "Invalid data format" }' }
          ]
        }
      ]
    },
    {
      id: 'space-technology',
      title: 'Space Technology API',
      description: 'Access space resource intelligence and satellite data',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      endpoints: [
        {
          method: 'GET',
          path: '/space/resources/analyze',
          description: 'Analyze space resources in a specific region',
          parameters: [
            { name: 'coordinates', type: 'object', required: true, description: 'Latitude and longitude' },
            { name: 'radius', type: 'integer', required: false, description: 'Analysis radius in km' },
            { name: 'resource_type', type: 'string', required: false, description: 'Type of resource to analyze' }
          ],
          responses: [
            { code: 200, description: 'Analysis completed', example: '{ "resources": [...], "abundance_score": 0.78, "mining_potential": "high" }' },
            { code: 400, description: 'Invalid coordinates', example: '{ "error": "Invalid coordinate format" }' }
          ]
        },
        {
          method: 'POST',
          path: '/space/satellite/command',
          description: 'Send commands to satellite systems',
          parameters: [
            { name: 'satellite_id', type: 'string', required: true, description: 'Target satellite ID' },
            { name: 'command', type: 'string', required: true, description: 'Command to execute' },
            { name: 'parameters', type: 'object', required: false, description: 'Command parameters' }
          ],
          responses: [
            { code: 200, description: 'Command executed successfully', example: '{ "status": "executed", "response_time": "1.2s", "confirmation": "command_ack" }' },
            { code: 404, description: 'Satellite not found', example: '{ "error": "Satellite not found" }' }
          ]
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity API',
      description: 'Implement zero trust security and threat detection',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      endpoints: [
        {
          method: 'POST',
          path: '/security/threat/detect',
          description: 'Detect security threats using AI',
          parameters: [
            { name: 'data', type: 'object', required: true, description: 'Data to analyze for threats' },
            { name: 'threat_level', type: 'string', required: false, description: 'Minimum threat level to report' }
          ],
          responses: [
            { code: 200, description: 'Threat analysis completed', example: '{ "threats": [...], "risk_score": 0.65, "recommendations": [...] }' },
            { code: 400, description: 'Invalid data format', example: '{ "error": "Invalid data format" }' }
          ]
        },
        {
          method: 'POST',
          path: '/security/zero-trust/verify',
          description: 'Verify identity and access using zero trust principles',
          parameters: [
            { name: 'user_id', type: 'string', required: true, description: 'User identifier' },
            { name: 'resource', type: 'string', required: true, description: 'Resource being accessed' },
            { name: 'context', type: 'object', required: false, description: 'Access context' }
          ],
          responses: [
            { code: 200, description: 'Access verified', example: '{ "access_granted": true, "permissions": [...], "session_duration": "3600s" }' },
            { code: 403, description: 'Access denied', example: '{ "error": "Access denied", "reason": "Insufficient permissions" }' }
          ]
        }
      ]
    }
  ];

  const filteredEndpoints = selectedAPI === 'all' 
    ? apiEndpoints 
    : apiEndpoints.filter(endpoint => 
        endpoint.id === selectedAPI ||
        endpoint.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        endpoint.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const toggleEndpoint = (endpointId: string) => {
    setExpandedEndpoints(prev => 
      prev.includes(endpointId) 
        ? prev.filter(id => id !== endpointId)
        : [...prev, endpointId]
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
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
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Complete API reference for Zion Tech Group's AI consciousness, quantum computing, 
                space technology, and cybersecurity platforms. Build powerful applications with our APIs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Quick Start</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running with our APIs in minutes. Follow these simple steps to start building.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Get Your API Key',
                  description: 'Sign up for a Zion Tech Group account and generate your API key from the dashboard.',
                  icon: Key,
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  step: '2',
                  title: 'Install SDK',
                  description: 'Install our official SDK for your preferred programming language.',
                  icon: Download,
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  step: '3',
                  title: 'Make Your First Request',
                  description: 'Use the code examples below to make your first API call.',
                  icon: Code,
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search API endpoints..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>

              {/* API Filter */}
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">API:</span>
                <select
                  value={selectedAPI}
                  onChange={(e) => setSelectedAPI(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                >
                  {apis.map((api) => (
                    <option key={api.id} value={api.id}>
                      {api.name} ({api.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">API Endpoints</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints with detailed documentation, parameters, and examples.
              </p>
            </motion.div>

            <div className="space-y-8">
              {filteredEndpoints.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden"
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleEndpoint(section.id)}
                    className="w-full p-6 text-left hover:bg-gray-700/30 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                          <p className="text-gray-400">{section.description}</p>
                        </div>
                      </div>
                      {expandedEndpoints.includes(section.id) ? (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Section Content */}
                  {expandedEndpoints.includes(section.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-700/50"
                    >
                      <div className="p-6">
                        <div className="space-y-6">
                          {section.endpoints.map((endpoint, endpointIndex) => (
                            <motion.div
                              key={`${section.id}-${endpointIndex}`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: endpointIndex * 0.1 }}
                              className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50"
                            >
                              {/* Endpoint Header */}
                              <div className="flex items-center space-x-4 mb-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                                  endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                                  endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                                  'bg-red-500/20 text-red-400 border border-red-500/30'
                                }`}>
                                  {endpoint.method}
                                </span>
                                <code className="text-lg font-mono text-white bg-gray-900/50 px-3 py-1 rounded-lg">
                                  {endpoint.path}
                                </code>
                              </div>

                              {/* Description */}
                              <p className="text-gray-300 mb-6">{endpoint.description}</p>

                              {/* Parameters */}
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-white mb-3">Parameters</h4>
                                <div className="bg-gray-900/50 rounded-lg overflow-hidden">
                                  <table className="w-full">
                                    <thead>
                                      <tr className="bg-gray-800/50">
                                        <th className="px-4 py-2 text-left text-gray-300 font-medium">Name</th>
                                        <th className="px-4 py-2 text-left text-gray-300 font-medium">Type</th>
                                        <th className="px-4 py-2 text-left text-gray-300 font-medium">Required</th>
                                        <th className="px-4 py-2 text-left text-gray-300 font-medium">Description</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {endpoint.parameters.map((param, paramIndex) => (
                                        <tr key={paramIndex} className="border-t border-gray-700/50">
                                          <td className="px-4 py-2 text-white font-mono">{param.name}</td>
                                          <td className="px-4 py-2 text-cyan-400">{param.type}</td>
                                          <td className="px-4 py-2">
                                            <span className={`px-2 py-1 rounded-full text-xs ${
                                              param.required 
                                                ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                                                : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                                            }`}>
                                              {param.required ? 'Yes' : 'No'}
                                            </span>
                                          </td>
                                          <td className="px-4 py-2 text-gray-300">{param.description}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                              {/* Responses */}
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-white mb-3">Responses</h4>
                                <div className="space-y-3">
                                  {endpoint.responses.map((response, responseIndex) => (
                                    <div key={responseIndex} className="bg-gray-900/50 rounded-lg p-4">
                                      <div className="flex items-center space-x-3 mb-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                          response.code >= 200 && response.code < 300 
                                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                        }`}>
                                          {response.code}
                                        </span>
                                        <span className="text-gray-300 text-sm">{response.description}</span>
                                      </div>
                                      <div className="bg-gray-800/50 rounded-lg p-3">
                                        <div className="flex items-center justify-between mb-2">
                                          <span className="text-sm text-gray-400">Example Response</span>
                                          <button
                                            onClick={() => copyToClipboard(response.example)}
                                            className="text-cyan-400 hover:text-cyan-300 text-sm"
                                          >
                                            <Copy className="w-4 h-4" />
                                          </button>
                                        </div>
                                        <pre className="text-sm text-gray-300 overflow-x-auto">
                                          <code>{response.example}</code>
                                        </pre>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Try It Out */}
                              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-4 border border-cyan-500/20">
                                <h4 className="text-lg font-semibold text-white mb-3">Try It Out</h4>
                                <p className="text-gray-300 text-sm mb-3">
                                  Test this endpoint with our interactive API playground.
                                </p>
                                <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300">
                                  <Play className="w-4 h-4 mr-2" />
                                  Open Playground
                                </button>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Code Examples</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started quickly with these code examples in popular programming languages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Python Example */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Python SDK</h3>
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">Python 3.8+</span>
                    <button 
                      onClick={() => copyToClipboard(`from zion import AIConsciousness, QuantumComputing, SpaceTechnology

# Initialize APIs
ai = AIConsciousness(api_key="your_api_key")
quantum = QuantumComputing(api_key="your_api_key")
space = SpaceTechnology(api_key="your_api_key")

# Create conscious AI agent
agent = ai.create_agent(
    name="Assistant",
    personality="helpful and friendly",
    consciousness_level="advanced"
)

# Execute quantum algorithm
result = quantum.execute(
    algorithm="grover",
    qubits=4,
    iterations=100
)

# Analyze space resources
resources = space.analyze_resources(
    coordinates={"lat": 40.7128, "lng": -74.0060},
    radius=100
)

print(f"AI Agent: {agent.name}")
print(f"Quantum Result: {result}")
print(f"Space Resources: {resources}")`)}
                      className="text-cyan-400 hover:text-cyan-300 text-sm"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`from zion import AIConsciousness, QuantumComputing, SpaceTechnology

# Initialize APIs
ai = AIConsciousness(api_key="your_api_key")
quantum = QuantumComputing(api_key="your_api_key")
space = SpaceTechnology(api_key="your_api_key")

# Create conscious AI agent
agent = ai.create_agent(
    name="Assistant",
    personality="helpful and friendly",
    consciousness_level="advanced"
)

# Execute quantum algorithm
result = quantum.execute(
    algorithm="grover",
    qubits=4,
    iterations=100
)

# Analyze space resources
resources = space.analyze_resources(
    coordinates={"lat": 40.7128, "lng": -74.0060},
    radius=100
)

print(f"AI Agent: {agent.name}")
print(f"Quantum Result: {result}")
print(f"Space Resources: {resources}")`}</code>
                  </pre>
                </div>
              </motion.div>

              {/* JavaScript Example */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">JavaScript SDK</h3>
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">Node.js / Browser</span>
                    <button 
                      onClick={() => copyToClipboard(`import { AIConsciousness, QuantumComputing, SpaceTechnology } from '@zion/sdk';

// Initialize APIs
const ai = new AIConsciousness({ apiKey: 'your_api_key' });
const quantum = new QuantumComputing({ apiKey: 'your_api_key' });
const space = new SpaceTechnology({ apiKey: 'your_api_key' });

// Create conscious AI agent
const agent = await ai.createAgent({
    name: 'Assistant',
    personality: 'helpful and friendly',
    consciousnessLevel: 'advanced'
});

// Execute quantum algorithm
const result = await quantum.execute({
    algorithm: 'grover',
    qubits: 4,
    iterations: 100
});

// Analyze space resources
const resources = await space.analyzeResources({
    coordinates: { lat: 40.7128, lng: -74.0060 },
    radius: 100
});

console.log('AI Agent:', agent.name);
console.log('Quantum Result:', result);
console.log('Space Resources:', resources);`)}
                      className="text-cyan-400 hover:text-cyan-300 text-sm"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`import { AIConsciousness, QuantumComputing, SpaceTechnology } from '@zion/sdk';

// Initialize APIs
const ai = new AIConsciousness({ apiKey: 'your_api_key' });
const quantum = new QuantumComputing({ apiKey: 'your_api_key' });
const space = new SpaceTechnology({ apiKey: 'your_api_key' });

// Create conscious AI agent
const agent = await ai.createAgent({
    name: 'Assistant',
    personality: 'helpful and friendly',
    consciousnessLevel: 'advanced'
});

// Execute quantum algorithm
const result = await quantum.execute({
    algorithm: 'grover',
    qubits: 4,
    iterations: 100
});

// Analyze space resources
const resources = await space.analyzeResources({
    coordinates: { lat: 40.7128, lng: -74.0060 },
    radius: 100
});

console.log('AI Agent:', agent.name);
console.log('Quantum Result:', result);
console.log('Space Resources:', resources);`}</code>
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SDKs and Libraries */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">SDKs & Libraries</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Official SDKs and libraries for popular programming languages and frameworks.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Python SDK', icon: Code, version: 'v2.1.0', downloads: '125K+', color: 'from-blue-500 to-cyan-500', docs: '/docs/python-sdk' },
                { name: 'JavaScript SDK', icon: Code, version: 'v1.8.5', downloads: '89K+', color: 'from-yellow-500 to-orange-500', docs: '/docs/javascript-sdk' },
                { name: 'Go SDK', icon: Code, version: 'v1.5.2', downloads: '45K+', color: 'from-purple-500 to-pink-500', docs: '/docs/go-sdk' },
                { name: 'Rust SDK', icon: Code, version: 'v1.2.0', downloads: '32K+', color: 'from-red-500 to-pink-500', docs: '/docs/rust-sdk' }
              ].map((sdk, index) => (
                <motion.div
                  key={sdk.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-br ${sdk.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <sdk.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 text-center">{sdk.name}</h3>
                    <div className="text-center space-y-2 mb-4">
                      <div className="text-sm text-gray-400">Version {sdk.version}</div>
                      <div className="text-sm text-cyan-400">{sdk.downloads} downloads</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-cyan-400 text-white text-sm font-medium rounded-lg hover:bg-cyan-500 transition-colors duration-300">
                        <Download className="w-4 h-4 mr-1 inline" />
                        Download
                      </button>
                      <button className="px-3 py-2 border border-gray-600 text-gray-300 text-sm font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300">
                        <BookOpen className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Help & Support */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Need Help?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'API Playground',
                  description: 'Test our APIs interactively with our online playground',
                  icon: Play,
                  color: 'from-blue-500 to-cyan-500',
                  action: 'Open Playground'
                },
                {
                  title: 'Support Tickets',
                  description: 'Submit a support ticket for technical assistance',
                  icon: HelpCircle,
                  color: 'from-purple-500 to-pink-500',
                  action: 'Submit Ticket'
                },
                {
                  title: 'Live Chat',
                  description: 'Chat with our support team in real-time',
                  icon: MessageCircle,
                  color: 'from-green-500 to-emerald-500',
                  action: 'Start Chat'
                }
              ].map((help, index) => (
                <motion.div
                  key={help.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${help.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <help.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{help.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{help.description}</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    {help.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default APIDocumentationPage;