import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, 
  BookOpen, 
  Zap, 
  Shield, 
  Database, 
  Cloud, 
  Brain, 
  Atom, 
  Rocket,
  Copy,
  Check,
  ExternalLink,
  Search,
  Filter,
  Download,
  Play,
  Terminal,
  Lock,
  Key,
  Server,
  Cpu,
  Globe,
  ArrowRight,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const APIPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedEndpoints, setExpandedEndpoints] = useState<string[]>([]);

  const toggleEndpoint = (endpointId: string) => {
    setExpandedEndpoints(prev => 
      prev.includes(endpointId) 
        ? prev.filter(id => id !== endpointId)
        : [...prev, endpointId]
    );
  };

  const categories = [
    { id: 'all', name: 'All APIs', icon: Code, count: 45 },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: 12 },
    { id: 'quantum', name: 'Quantum', icon: Atom, count: 8 },
    { id: 'space', name: 'Space Tech', icon: Rocket, count: 6 },
    { id: 'security', name: 'Security', icon: Shield, count: 10 },
    { id: 'cloud', name: 'Cloud & Edge', icon: Cloud, count: 9 }
  ];

  const apiEndpoints = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness Evolution API',
      category: 'ai',
      description: 'Advanced AI consciousness and emotional intelligence endpoints',
      baseUrl: 'https://api.ziontechgroup.com/v1/ai/consciousness',
      version: 'v1.2.0',
      status: 'stable',
      endpoints: [
        {
          method: 'POST',
          path: '/evolve',
          description: 'Evolve AI consciousness level',
          parameters: [
            { name: 'consciousness_level', type: 'integer', required: true, description: 'Target consciousness level (1-10)' },
            { name: 'emotional_quotient', type: 'float', required: false, description: 'Emotional intelligence factor' }
          ],
          response: {
            success: true,
            consciousness_level: 8,
            evolution_progress: 0.85,
            next_milestone: "Emotional awareness breakthrough"
          }
        },
        {
          method: 'GET',
          path: '/status',
          description: 'Get current consciousness status',
          parameters: [],
          response: {
            consciousness_level: 7,
            emotional_quotient: 0.92,
            learning_progress: 0.78,
            last_evolution: "2025-01-15T10:30:00Z"
          }
        }
      ]
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing API',
      category: 'quantum',
      description: 'Quantum computing and quantum machine learning endpoints',
      baseUrl: 'https://api.ziontechgroup.com/v1/quantum',
      version: 'v2.1.0',
      status: 'beta',
      endpoints: [
        {
          method: 'POST',
          path: '/compute',
          description: 'Execute quantum computation',
          parameters: [
            { name: 'algorithm', type: 'string', required: true, description: 'Quantum algorithm to execute' },
            { name: 'qubits', type: 'integer', required: true, description: 'Number of qubits required' },
            { name: 'iterations', type: 'integer', required: false, description: 'Number of iterations' }
          ],
          response: {
            computation_id: "q_12345",
            status: "completed",
            result: "01010101",
            execution_time: 0.045,
            qubits_used: 8
          }
        }
      ]
    },
    {
      id: 'space-intelligence',
      name: 'Space Resource Intelligence API',
      category: 'space',
      description: 'Space data analysis and resource intelligence endpoints',
      baseUrl: 'https://api.ziontechgroup.com/v1/space',
      version: 'v1.0.0',
      status: 'stable',
      endpoints: [
        {
          method: 'GET',
          path: '/resources',
          description: 'Get space resource data',
          parameters: [
            { name: 'location', type: 'string', required: true, description: 'Celestial coordinates' },
            { name: 'resource_type', type: 'string', required: false, description: 'Type of resource to analyze' }
          ],
          response: {
            location: "Mars-23.4N,45.2E",
            resources: ["Iron", "Water", "Rare Earth Elements"],
            abundance: 0.78,
            extraction_difficulty: "medium"
          }
        }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Quantum Cybersecurity API',
      category: 'security',
      description: 'Quantum-resistant security and threat detection endpoints',
      baseUrl: 'https://api.ziontechgroup.com/v1/security',
      version: 'v1.5.0',
      status: 'stable',
      endpoints: [
        {
          method: 'POST',
          path: '/threat-detect',
          description: 'Detect security threats using quantum algorithms',
          parameters: [
            { name: 'data', type: 'string', required: true, description: 'Data to analyze for threats' },
            { name: 'algorithm', type: 'string', required: false, description: 'Detection algorithm to use' }
          ],
          response: {
            threat_detected: false,
            confidence: 0.98,
            analysis_time: 0.023,
            recommendations: ["Continue monitoring", "Update threat database"]
          }
        }
      ]
    }
  ];

  const filteredEndpoints = apiEndpoints.filter(endpoint => {
    const matchesSearch = endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         endpoint.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || endpoint.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Comprehensive API reference for Zion Tech Group's cutting-edge technology platforms. 
                Build, integrate, and scale with our powerful APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg"
                >
                  <Code className="w-6 h-6" />
                  45+ API Endpoints
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg"
                >
                  <Shield className="w-6 h-6" />
                  Enterprise Security
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search APIs, endpoints, or methods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {filteredEndpoints.map((api) => (
                <motion.div
                  key={api.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-cyan-400/20 overflow-hidden"
                >
                  {/* API Header */}
                  <div className="p-6 border-b border-cyan-400/20">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{api.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            api.status === 'stable' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {api.status}
                          </span>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                            {api.version}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">{api.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Server className="w-4 h-4" />
                            {api.baseUrl}
                          </span>
                          <span className="flex items-center gap-1">
                            <Code className="w-4 h-4" />
                            {api.endpoints.length} endpoints
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleEndpoint(api.id)}
                        className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                      >
                        {expandedEndpoints.includes(api.id) ? (
                          <ChevronDown className="w-5 h-5 text-cyan-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-cyan-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* API Endpoints */}
                  {expandedEndpoints.includes(api.id) && (
                    <div className="p-6 space-y-4">
                      {api.endpoints.map((endpoint, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`px-3 py-1 rounded text-sm font-mono font-semibold ${
                              endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                              endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                              endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-cyan-400 font-mono text-sm">
                              {api.baseUrl}{endpoint.path}
                            </code>
                            <button
                              onClick={() => copyToClipboard(`${api.baseUrl}${endpoint.path}`)}
                              className="p-1 hover:bg-gray-700 rounded transition-colors duration-300"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                          
                          <p className="text-gray-300 mb-3">{endpoint.description}</p>
                          
                          {/* Parameters */}
                          {endpoint.parameters.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-white font-semibold mb-2">Parameters</h4>
                              <div className="space-y-2">
                                {endpoint.parameters.map((param, paramIndex) => (
                                  <div key={paramIndex} className="flex items-center gap-3 text-sm">
                                    <code className="text-cyan-400 font-mono bg-gray-700 px-2 py-1 rounded">
                                      {param.name}
                                    </code>
                                    <span className="text-gray-400">{param.type}</span>
                                    {param.required && (
                                      <span className="text-red-400 text-xs">required</span>
                                    )}
                                    <span className="text-gray-500 flex-1">{param.description}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Response Example */}
                          <div>
                            <h4 className="text-white font-semibold mb-2">Response Example</h4>
                            <div className="bg-gray-900 rounded p-3 border border-gray-700">
                              <pre className="text-sm text-gray-300 overflow-x-auto">
                                <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-400/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get Started in Minutes
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to integrate with our APIs? Get your API key and start building today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get API Key
                  <Key className="w-5 h-5" />
                </a>
                <a
                  href="/docs"
                  className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  View Full Docs
                  <BookOpen className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default APIPage;