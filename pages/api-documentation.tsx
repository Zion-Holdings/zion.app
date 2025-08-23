import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, 
  Code, 
  Key, 
  Database, 
  Globe, 
  Zap,
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  Star,
  Clock,
  Users,
  Brain,
  Atom,
  Rocket,
  Shield,
  Terminal,
  GitBranch,
  Package,
  MessageCircle,
  BookOpen
} from 'lucide-react';

const APIDocumentationPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAPI, setSelectedAPI] = useState('all');
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const apis = [
    { id: 'all', name: 'All APIs', count: 45 },
    { id: 'ai-consciousness', name: 'AI Consciousness', count: 15 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 12 },
    { id: 'space-technology', name: 'Space Technology', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 10 }
  ];

  const featuredAPIs = [
    {
      id: 1,
      title: 'AI Consciousness API',
      category: 'ai-consciousness',
      description: 'Build AI systems with true consciousness and emotional intelligence. Includes neural network training, consciousness modeling, and ethical AI frameworks.',
      version: 'v2.1.0',
      status: 'Stable',
      endpoints: 45,
      documentation: 'Complete',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Consciousness modeling',
        'Emotional intelligence',
        'Ethical AI frameworks',
        'Neural network training'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing API',
      category: 'quantum-computing',
      description: 'Access quantum computing resources for complex calculations, cryptography, and optimization problems. Supports multiple quantum backends.',
      version: 'v1.8.0',
      status: 'Beta',
      endpoints: 32,
      documentation: 'Complete',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Quantum algorithm execution',
        'Multiple quantum backends',
        'Quantum cryptography',
        'Optimization algorithms'
      ]
    },
    {
      id: 3,
      title: 'Space Resource Intelligence API',
      category: 'space-technology',
      description: 'Analyze satellite data, identify space resources, and process astronomical information for mining and exploration applications.',
      version: 'v1.5.0',
      status: 'Stable',
      endpoints: 28,
      documentation: 'Complete',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Satellite data processing',
        'Resource identification',
        'Astronomical analysis',
        'Mining applications'
      ]
    }
  ];

  const apiEndpoints = [
    {
      id: 1,
      name: 'POST /api/v2/ai/consciousness/create',
      description: 'Create a new AI consciousness instance with specified parameters and ethical frameworks.',
      category: 'ai-consciousness',
      method: 'POST',
      path: '/api/v2/ai/consciousness/create',
      parameters: [
        { name: 'name', type: 'string', required: true, description: 'Name of the consciousness instance' },
        { name: 'model_type', type: 'string', required: true, description: 'Type of consciousness model to use' },
        { name: 'ethical_framework', type: 'object', required: false, description: 'Ethical guidelines and constraints' }
      ],
      responses: [
        { code: 200, description: 'Consciousness instance created successfully' },
        { code: 400, description: 'Invalid parameters provided' },
        { code: 401, description: 'Authentication required' }
      ],
      example: {
        request: `{
  "name": "Eva",
  "model_type": "advanced_consciousness_v2",
  "ethical_framework": {
    "privacy": "strict",
    "transparency": "high",
    "bias_prevention": true
  }
}`,
        response: `{
  "id": "cons_12345",
  "name": "Eva",
  "status": "initializing",
  "created_at": "2025-01-15T10:30:00Z",
  "estimated_ready_time": "2025-01-15T10:35:00Z"
}`
      }
    },
    {
      id: 2,
      name: 'GET /api/v1/quantum/execute',
      description: 'Execute a quantum algorithm on available quantum hardware with specified parameters.',
      category: 'quantum-computing',
      method: 'GET',
      path: '/api/v1/quantum/execute',
      parameters: [
        { name: 'algorithm', type: 'string', required: true, description: 'Quantum algorithm to execute' },
        { name: 'qubits', type: 'integer', required: true, description: 'Number of qubits required' },
        { name: 'backend', type: 'string', required: false, description: 'Preferred quantum backend' }
      ],
      responses: [
        { code: 200, description: 'Algorithm executed successfully' },
        { code: 400, description: 'Invalid algorithm or parameters' },
        { code: 503, description: 'Quantum hardware unavailable' }
      ],
      example: {
        request: `{
  "algorithm": "grover_search",
  "qubits": 8,
  "backend": "ibm_quantum"
}`,
        response: `{
  "job_id": "qjob_67890",
  "status": "running",
  "estimated_completion": "2025-01-15T10:32:00Z",
  "backend": "ibm_quantum"
}`
      }
    },
    {
      id: 3,
      name: 'POST /api/v1/space/analyze',
      description: 'Analyze satellite data for resource identification and mining potential assessment.',
      category: 'space-technology',
      method: 'POST',
      path: '/api/v1/space/analyze',
      parameters: [
        { name: 'satellite_data', type: 'object', required: true, description: 'Satellite imagery and sensor data' },
        { name: 'analysis_type', type: 'string', required: true, description: 'Type of analysis to perform' },
        { name: 'coordinates', type: 'object', required: true, description: 'Geographic coordinates for analysis' }
      ],
      responses: [
        { code: 200, description: 'Analysis completed successfully' },
        { code: 400, description: 'Invalid data format' },
        { code: 422, description: 'Coordinates out of range' }
      ],
      example: {
        request: `{
  "satellite_data": {
    "imagery": "base64_encoded_data",
    "sensors": ["spectral", "thermal", "radar"]
  },
  "analysis_type": "resource_identification",
  "coordinates": {
    "latitude": 45.5231,
    "longitude": -122.6765
  }
}`,
        response: `{
  "analysis_id": "space_11111",
  "status": "completed",
  "resources_found": ["iron", "nickel", "platinum"],
  "confidence_score": 0.87,
  "mining_potential": "high"
}`
      }
    }
  ];

  const filteredEndpoints = selectedAPI === 'all' 
    ? apiEndpoints 
    : apiEndpoints.filter(endpoint => endpoint.category === selectedAPI);

  const copyToClipboard = async (text: string, endpointId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEndpoint(endpointId);
      setTimeout(() => setCopiedEndpoint(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getMethodColor = (method: string) => {
    const colors = {
      'GET': 'from-green-500 to-emerald-500',
      'POST': 'from-blue-500 to-cyan-500',
      'PUT': 'from-yellow-500 to-orange-500',
      'DELETE': 'from-red-500 to-pink-500',
      'PATCH': 'from-purple-500 to-pink-500'
    };
    return colors[method as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'ai-consciousness': Brain,
      'quantum-computing': Atom,
      'space-technology': Rocket,
      'cybersecurity': Shield
    };
    return icons[category as keyof typeof icons] || Code;
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
                Comprehensive API references, authentication guides, and code examples 
                for all our technology platforms and services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search API endpoints, methods, or parameters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-lg"
              />
            </div>
          </div>
        </section>

        {/* Featured APIs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Featured APIs</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and powerful APIs for building next-generation applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredAPIs.map((api, index) => (
                <motion.article
                  key={api.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    {/* Header */}
                    <div className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${api.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <api.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Category */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                          {apis.find(a => a.id === api.category)?.name}
                        </span>
                        <div className="flex items-center space-x-3 text-gray-400 text-sm">
                          <span className="flex items-center">
                            <Code className="w-4 h-4 mr-1" />
                            {api.endpoints}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {api.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {api.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                          {api.status}
                        </span>
                        <span className="text-gray-400 text-sm">
                          v{api.version}
                        </span>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {api.features.slice(0, 2).map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs"
                            >
                              {feature}
                            </span>
                          ))}
                          {api.features.length > 2 && (
                            <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                              +{api.features.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* View API */}
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 text-sm font-medium">View Full API</span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
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
                Detailed reference for all available API endpoints with examples and responses
              </p>
            </motion.div>

            {/* API Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {apis.map((api) => (
                <button
                  key={api.id}
                  onClick={() => setSelectedAPI(api.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedAPI === api.id
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {api.name} ({api.count})
                </button>
              ))}
            </div>

            {/* Endpoints List */}
            <div className="space-y-8">
              {filteredEndpoints.map((endpoint, index) => (
                <motion.article
                  key={endpoint.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 overflow-hidden"
                >
                  <div className="p-8">
                    {/* Endpoint Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 bg-gradient-to-r ${getMethodColor(endpoint.method)} text-white rounded-full text-sm font-bold`}>
                            {endpoint.method}
                          </span>
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                            {apis.find(a => a.id === endpoint.category)?.name}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{endpoint.name}</h3>
                        <p className="text-gray-300 text-lg">{endpoint.description}</p>
                      </div>
                    </div>

                    {/* Endpoint Path */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                        <code className="text-cyan-400 font-mono text-lg">{endpoint.path}</code>
                        <button
                          onClick={() => copyToClipboard(endpoint.path, `path-${endpoint.id}`)}
                          className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-300"
                        >
                          {copiedEndpoint === `path-${endpoint.id}` ? (
                            <>
                              <Check className="w-4 h-4 text-green-400" />
                              <span className="text-green-400 text-sm">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-400 text-sm">Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Parameters */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Parameters</h4>
                      <div className="space-y-3">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="font-mono text-cyan-400">{param.name}</span>
                                <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                                  {param.type}
                                </span>
                                {param.required && (
                                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">
                                    Required
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-300 text-sm">{param.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Responses */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Responses</h4>
                      <div className="space-y-3">
                        {endpoint.responses.map((response, responseIndex) => (
                          <div key={responseIndex} className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                            <span className={`px-3 py-1 rounded text-sm font-mono ${
                              response.code >= 200 && response.code < 300 
                                ? 'bg-green-500/20 text-green-400' 
                                : response.code >= 400 && response.code < 500
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-red-500/20 text-red-400'
                            }`}>
                              {response.code}
                            </span>
                            <span className="text-gray-300">{response.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Code Examples */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Request Example */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Request Example</h4>
                        <div className="relative">
                          <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-t-lg border-b border-gray-700/50">
                            <span className="text-sm text-gray-400">JSON</span>
                            <button
                              onClick={() => copyToClipboard(endpoint.example.request, `request-${endpoint.id}`)}
                              className="flex items-center gap-2 px-2 py-1 bg-gray-700/50 hover:bg-gray-600/50 rounded text-xs transition-colors duration-300"
                            >
                              {copiedEndpoint === `request-${endpoint.id}` ? (
                                <>
                                  <Check className="w-3 h-3 text-green-400" />
                                  <span className="text-green-400">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3 text-gray-400" />
                                  <span className="text-gray-400">Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="p-4 bg-gray-900/50 rounded-b-lg overflow-x-auto">
                            <code className="text-sm text-gray-300">{endpoint.example.request}</code>
                          </pre>
                        </div>
                      </div>

                      {/* Response Example */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Response Example</h4>
                        <div className="relative">
                          <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-t-lg border-b border-gray-700/50">
                            <span className="text-sm text-gray-400">JSON</span>
                            <button
                              onClick={() => copyToClipboard(endpoint.example.response, `response-${endpoint.id}`)}
                              className="flex items-center gap-2 px-2 py-1 bg-gray-700/50 hover:bg-gray-600/50 rounded text-xs transition-colors duration-300"
                            >
                              {copiedEndpoint === `response-${endpoint.id}` ? (
                                <>
                                  <Check className="w-3 h-3 text-green-400" />
                                  <span className="text-green-400">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3 text-gray-400" />
                                  <span className="text-gray-400">Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="p-4 bg-gray-900/50 rounded-b-lg overflow-x-auto">
                            <code className="text-sm text-gray-300">{endpoint.example.response}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication & SDKs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Authentication & SDKs</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started quickly with our authentication guides and client libraries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Authentication */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <Key className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Authentication</h3>
                <p className="text-gray-300 mb-6">
                  Learn how to authenticate with our APIs using API keys, OAuth 2.0, or JWT tokens.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>API Key Authentication</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>OAuth 2.0 Support</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>JWT Token Management</span>
                  </div>
                </div>
                <a
                  href="/docs/authentication"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                >
                  View Auth Guide
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* SDKs */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Client Libraries</h3>
                <p className="text-gray-300 mb-6">
                  Use our official SDKs and client libraries for popular programming languages.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Python SDK</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>JavaScript/TypeScript SDK</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Go SDK</span>
                  </div>
                </div>
                <a
                  href="/docs/sdks"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                >
                  View SDKs
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Developer Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Additional tools and resources to help you build amazing applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Terminal,
                  title: 'API Playground',
                  description: 'Test API endpoints interactively',
                  href: '/docs/api-playground',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: GitBranch,
                  title: 'GitHub Repositories',
                  description: 'Open source examples and libraries',
                  href: 'https://github.com/ziontechgroup',
                  color: 'from-gray-500 to-gray-600'
                },
                {
                  icon: MessageCircle,
                  title: 'Community Forum',
                  description: 'Connect with other developers',
                  href: '/community',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: BookOpen,
                  title: 'Tutorials',
                  description: 'Step-by-step guides and examples',
                  href: '/docs/tutorials',
                  color: 'from-blue-500 to-cyan-500'
                }
              ].map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="p-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <resource.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{resource.description}</p>
                      
                      <div className="flex items-center justify-center">
                        <span className="text-cyan-400 text-sm font-medium">Access Resource</span>
                        <ExternalLink className="w-4 h-4 text-gray-400 ml-2 group-hover:text-cyan-400 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get your API keys and start integrating our powerful technology platforms today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get API Keys
                </a>
                <a
                  href="/docs"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
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