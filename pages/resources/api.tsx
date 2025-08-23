import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, Search, Filter, ArrowRight, Copy, Check,
  BookOpen, Download, ExternalLink, Clock, User, Star,
  Brain, Rocket, Shield, Cloud, Database, Network, Settings,
  Zap, Globe, Lock, Server, Cpu, Atom, Target, Users,
  Terminal, Database as DatabaseIcon, Key, Eye, EyeOff
} from 'lucide-react';

const APIPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All APIs', icon: Code, color: 'from-gray-500 to-gray-600' },
    { id: 'ai', name: 'AI & ML APIs', icon: Brain, color: 'from-cyan-500 to-cyan-600' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-purple-500 to-purple-600' },
    { id: 'security', name: 'Security APIs', icon: Shield, color: 'from-red-500 to-red-600' },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, color: 'from-blue-500 to-blue-600' },
    { id: 'data', name: 'Data & Analytics', icon: Database, color: 'from-green-500 to-green-600' },
    { id: 'iot', name: 'IoT & Edge', icon: Cpu, color: 'from-orange-500 to-orange-600' }
  ];

  const apiEndpoints = [
    {
      id: 1,
      name: 'AI Consciousness API',
      description: 'Advanced AI consciousness and emotional intelligence capabilities',
      category: 'ai',
      baseUrl: 'https://api.ziontechgroup.com/v2/ai/consciousness',
      version: 'v2.1',
      status: 'stable',
      featured: true,
      endpoints: [
        {
          method: 'POST',
          path: '/analyze',
          description: 'Analyze emotional content and consciousness patterns',
          parameters: ['text', 'context', 'language'],
          response: 'JSON',
          rateLimit: '1000/hour'
        },
        {
          method: 'GET',
          path: '/insights',
          description: 'Get consciousness insights and patterns',
          parameters: ['session_id', 'timeframe'],
          response: 'JSON',
          rateLimit: '5000/hour'
        }
      ],
      documentation: '/docs/api/ai-consciousness',
      sdk: 'JavaScript, Python, Java, Go'
    },
    {
      id: 2,
      name: 'Quantum Neural Network API',
      description: 'Quantum-enhanced neural network operations and training',
      category: 'quantum',
      baseUrl: 'https://api.ziontechgroup.com/v2/quantum/nn',
      version: 'v2.0',
      status: 'beta',
      featured: true,
      endpoints: [
        {
          method: 'POST',
          path: '/train',
          description: 'Train quantum neural network models',
          parameters: ['model_config', 'training_data', 'hyperparameters'],
          response: 'JSON',
          rateLimit: '100/hour'
        },
        {
          method: 'POST',
          path: '/predict',
          description: 'Make predictions using trained quantum models',
          parameters: ['model_id', 'input_data'],
          response: 'JSON',
          rateLimit: '1000/hour'
        }
      ],
      documentation: '/docs/api/quantum-nn',
      sdk: 'Python, C++, Rust'
    },
    {
      id: 3,
      name: 'Quantum Cybersecurity API',
      description: 'Quantum-resistant encryption and security operations',
      category: 'security',
      baseUrl: 'https://api.ziontechgroup.com/v2/security/quantum',
      version: 'v1.5',
      status: 'stable',
      featured: false,
      endpoints: [
        {
          method: 'POST',
          path: '/encrypt',
          description: 'Encrypt data using quantum-resistant algorithms',
          parameters: ['data', 'algorithm', 'key_size'],
          response: 'JSON',
          rateLimit: '2000/hour'
        },
        {
          method: 'POST',
          path: '/decrypt',
          description: 'Decrypt quantum-encrypted data',
          parameters: ['encrypted_data', 'private_key'],
          response: 'JSON',
          rateLimit: '2000/hour'
        }
      ],
      documentation: '/docs/api/quantum-security',
      sdk: 'JavaScript, Python, Java, C#'
    },
    {
      id: 4,
      name: 'Space Resource Intelligence API',
      description: 'AI-powered space resource mapping and analysis',
      category: 'ai',
      baseUrl: 'https://api.ziontechgroup.com/v2/space/intelligence',
      version: 'v1.8',
      status: 'stable',
      featured: false,
      endpoints: [
        {
          method: 'GET',
          path: '/resources',
          description: 'Get space resource intelligence data',
          parameters: ['location', 'resource_type', 'timeframe'],
          response: 'JSON',
          rateLimit: '500/hour'
        },
        {
          method: 'POST',
          path: '/analyze',
          description: 'Analyze space resource patterns and trends',
          parameters: ['coordinates', 'analysis_type', 'parameters'],
          response: 'JSON',
          rateLimit: '200/hour'
        }
      ],
      documentation: '/docs/api/space-intelligence',
      sdk: 'Python, JavaScript, MATLAB'
    },
    {
      id: 5,
      name: 'Autonomous DevOps API',
      description: 'AI-powered DevOps automation and orchestration',
      category: 'cloud',
      baseUrl: 'https://api.ziontechgroup.com/v2/devops/autonomous',
      version: 'v1.3',
      status: 'stable',
      featured: false,
      endpoints: [
        {
          method: 'POST',
          path: '/deploy',
          description: 'Automated deployment orchestration',
          parameters: ['application', 'environment', 'config'],
          response: 'JSON',
          rateLimit: '100/hour'
        },
        {
          method: 'GET',
          path: '/status',
          description: 'Get deployment and system status',
          parameters: ['deployment_id', 'include_logs'],
          response: 'JSON',
          rateLimit: '1000/hour'
        }
      ],
      documentation: '/docs/api/autonomous-devops',
      sdk: 'Python, Go, Terraform'
    },
    {
      id: 6,
      name: 'Edge Computing API',
      description: 'Edge computing orchestration and management',
      category: 'iot',
      baseUrl: 'https://api.ziontechgroup.com/v2/edge/compute',
      version: 'v1.2',
      status: 'beta',
      featured: false,
      endpoints: [
        {
          method: 'POST',
          path: '/deploy',
          description: 'Deploy applications to edge nodes',
          parameters: ['application', 'edge_nodes', 'config'],
          response: 'JSON',
          rateLimit: '50/hour'
        },
        {
          method: 'GET',
          path: '/nodes',
          description: 'Get edge node status and capabilities',
          parameters: ['region', 'node_type'],
          response: 'JSON',
          rateLimit: '500/hour'
        }
      ],
      documentation: '/docs/api/edge-computing',
      sdk: 'Python, Go, C++'
    }
  ];

  const filteredAPIs = apiEndpoints.filter(api => {
    const matchesCategory = selectedCategory === 'all' || api.category === selectedCategory;
    const matchesSearch = api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         api.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredAPIs = apiEndpoints.filter(api => api.featured);

  const copyToClipboard = async (text: string, endpointId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEndpoint(endpointId);
      setTimeout(() => setCopiedEndpoint(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'stable': return 'from-green-500 to-green-600';
      case 'beta': return 'from-yellow-500 to-yellow-600';
      case 'alpha': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <>
      <Head>
        <title>API Reference - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API reference for Zion Tech Group's revolutionary technology solutions. Explore endpoints, documentation, and SDKs for AI, quantum computing, and more." />
        <meta name="keywords" content="Zion Tech Group API, API reference, endpoints, documentation, SDKs, AI API, quantum computing API" />
        <link rel="canonical" href="https://ziontechgroup.com/resources/api" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                API Reference
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Comprehensive API documentation for our revolutionary technology solutions. Build powerful applications with AI, quantum computing, and autonomous systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/docs/api/quickstart" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Quick Start Guide
                </a>
                <a href="/docs/api/sdks" className="inline-flex items-center px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download SDKs
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search APIs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured APIs */}
        {featuredAPIs.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Featured APIs</h2>
                <p className="text-gray-400">Our most popular and powerful APIs</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredAPIs.map((api, index) => (
                  <motion.div
                    key={api.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                          {categories.find(c => c.id === api.category)?.name}
                        </span>
                        <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(api.status)} text-white text-sm rounded-full`}>
                          {api.status}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm rounded-full">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {api.name}
                      </h3>
                      <p className="text-gray-400 mb-4">{api.description}</p>
                      <div className="bg-gray-800/50 rounded-lg p-3 mb-4 font-mono text-sm text-cyan-300">
                        {api.baseUrl}
                      </div>
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Code className="w-4 h-4" />
                          v{api.version}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {api.sdk.split(', ').slice(0, 2).join(', ')}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Link href={api.documentation} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                          <BookOpen className="w-4 h-4" />
                          View Docs
                        </Link>
                        <button 
                          onClick={() => copyToClipboard(api.baseUrl, `base-${api.id}`)}
                          className="flex items-center justify-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                        >
                          {copiedEndpoint === `base-${api.id}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          {copiedEndpoint === `base-${api.id}` ? 'Copied!' : 'Copy URL'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All APIs */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">All APIs</h2>
              <p className="text-gray-400">Complete collection of our technology APIs</p>
            </motion.div>

            {filteredAPIs.length === 0 ? (
              <div className="text-center py-12">
                <Code className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No APIs found matching your criteria.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredAPIs.map((api, index) => (
                  <motion.div
                    key={api.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                              {categories.find(c => c.id === api.category)?.name}
                            </span>
                            <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(api.status)} text-white text-sm rounded-full`}>
                              {api.status}
                            </span>
                            <span className="px-3 py-1 bg-gray-600 text-white text-sm rounded-full">
                              v{api.version}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2">{api.name}</h3>
                          <p className="text-gray-400 mb-4">{api.description}</p>
                          <div className="bg-gray-800/50 rounded-lg p-3 mb-4 font-mono text-sm text-cyan-300">
                            {api.baseUrl}
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button 
                            onClick={() => copyToClipboard(api.baseUrl, `base-${api.id}`)}
                            className="p-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                            title="Copy base URL"
                          >
                            {copiedEndpoint === `base-${api.id}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                          <Link href={api.documentation} className="p-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300" title="View documentation">
                            <BookOpen className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                      {/* Endpoints */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white mb-3">Endpoints</h4>
                        {api.endpoints.map((endpoint, endpointIndex) => (
                          <div key={endpointIndex} className="bg-gray-800/30 rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-2 py-1 rounded text-xs font-mono font-semibold ${
                                endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                                endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                                endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                                endpoint.method === 'DELETE' ? 'bg-red-500/20 text-red-400' :
                                'bg-gray-500/20 text-gray-400'
                              }`}>
                                {endpoint.method}
                              </span>
                              <code className="text-cyan-300 font-mono text-sm">{endpoint.path}</code>
                              <button 
                                onClick={() => copyToClipboard(`${api.baseUrl}${endpoint.path}`, `endpoint-${api.id}-${endpointIndex}`)}
                                className="p-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                                title="Copy endpoint"
                              >
                                {copiedEndpoint === `endpoint-${api.id}-${endpointIndex}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                              </button>
                            </div>
                            <p className="text-gray-300 text-sm mb-2">{endpoint.description}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span>Parameters: {endpoint.parameters.join(', ')}</span>
                              <span>Response: {endpoint.response}</span>
                              <span>Rate Limit: {endpoint.rateLimit}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-400">
                            <span className="mr-4">SDKs: {api.sdk}</span>
                          </div>
                          <Link href={api.documentation} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                            View Full Documentation
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore additional resources and tools to help you integrate our APIs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'API Playground',
                  description: 'Test APIs interactively',
                  href: '/api-playground',
                  icon: Terminal,
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  title: 'SDK Downloads',
                  description: 'Get official SDKs',
                  href: '/docs/api/sdks',
                  icon: Download,
                  color: 'from-green-500 to-green-600'
                },
                {
                  title: 'Code Examples',
                  description: 'Sample implementations',
                  href: '/docs/api/examples',
                  icon: Code,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  title: 'API Status',
                  description: 'Monitor API health',
                  href: '/status',
                  icon: Server,
                  color: 'from-cyan-500 to-cyan-600'
                }
              ].map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href} className="block p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{link.description}</p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      Explore
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default APIPage;