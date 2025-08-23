import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Zap, 
  Shield, 
  Globe, 
  BookOpen, 
  Download,
  Play,
  Terminal,
  Cpu,
  Brain,
  Atom,
  Rocket,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Star,
  Users,
  Clock,
  TrendingUp,
  Key
} from 'lucide-react';

const APIPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const apiCategories = [
    { id: 'all', name: 'All APIs', icon: Code, count: 15 },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: 6 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 4 },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: 3 },
    { id: 'security', name: 'Security', icon: Shield, count: 2 }
  ];

  const apiEndpoints = [
    {
      id: 1,
      name: 'AI Consciousness API',
      category: 'ai',
      description: 'Access our advanced AI consciousness platform for natural language processing and understanding.',
      endpoint: '/api/v1/ai/consciousness',
      method: 'POST',
      rateLimit: '1000 requests/hour',
      authentication: 'Bearer Token',
      status: 'Production',
      documentation: '/docs/api/ai-consciousness',
      sdk: 'JavaScript, Python, Go',
      features: ['Natural Language Processing', 'Context Understanding', 'Emotional Intelligence', 'Multi-language Support']
    },
    {
      id: 2,
      name: 'Quantum Neural Network API',
      category: 'quantum',
      description: 'Leverage quantum computing power for complex neural network operations and optimization.',
      endpoint: '/api/v1/quantum/neural-network',
      method: 'POST',
      rateLimit: '100 requests/hour',
      authentication: 'Bearer Token',
      status: 'Beta',
      documentation: '/docs/api/quantum-neural',
      sdk: 'Python, C++',
      features: ['Quantum Algorithms', 'Neural Network Training', 'Optimization', 'Scientific Computing']
    },
    {
      id: 3,
      name: 'Space Resource Intelligence API',
      category: 'space',
      description: 'Access real-time space resource data and analysis for space exploration and mining.',
      endpoint: '/api/v1/space/resources',
      method: 'GET',
      rateLimit: '500 requests/hour',
      authentication: 'API Key',
      status: 'Production',
      documentation: '/docs/api/space-resources',
      sdk: 'JavaScript, Python, Rust',
      features: ['Satellite Data', 'Resource Analysis', 'Predictive Modeling', 'Real-time Updates']
    },
    {
      id: 4,
      name: 'Zero-Trust Security API',
      category: 'security',
      description: 'Implement zero-trust security architecture with our comprehensive security API.',
      endpoint: '/api/v1/security/zero-trust',
      method: 'POST',
      rateLimit: '2000 requests/hour',
      authentication: 'Bearer Token',
      status: 'Production',
      documentation: '/docs/api/zero-trust',
      sdk: 'JavaScript, Python, Java',
      features: ['Identity Verification', 'Access Control', 'Threat Detection', 'Compliance']
    },
    {
      id: 5,
      name: 'AI Content Generation API',
      category: 'ai',
      description: 'Generate high-quality content using our advanced AI content creation platform.',
      endpoint: '/api/v1/ai/content',
      method: 'POST',
      rateLimit: '2000 requests/hour',
      authentication: 'API Key',
      status: 'Production',
      documentation: '/docs/api/ai-content',
      sdk: 'JavaScript, Python, PHP',
      features: ['Text Generation', 'Image Creation', 'Content Optimization', 'Multi-format Support']
    },
    {
      id: 6,
      name: 'Quantum Cryptography API',
      category: 'quantum',
      description: 'Implement quantum-resistant encryption and secure communication protocols.',
      endpoint: '/api/v1/quantum/cryptography',
      method: 'POST',
      rateLimit: '500 requests/hour',
      authentication: 'Bearer Token',
      status: 'Beta',
      documentation: '/docs/api/quantum-crypto',
      sdk: 'Python, C++, Rust',
      features: ['Quantum Encryption', 'Key Distribution', 'Post-Quantum Algorithms', 'Secure Communication']
    },
    {
      id: 7,
      name: 'Space Communication API',
      category: 'space',
      description: 'Access interplanetary communication protocols and satellite network management.',
      endpoint: '/api/v1/space/communication',
      method: 'POST',
      rateLimit: '300 requests/hour',
      authentication: 'Bearer Token',
      status: 'Alpha',
      documentation: '/docs/api/space-communication',
      sdk: 'Python, Rust',
      features: ['Satellite Communication', 'Network Management', 'Protocol Optimization', 'Real-time Monitoring']
    },
    {
      id: 8,
      name: 'AI Predictive Analytics API',
      category: 'ai',
      description: 'Leverage machine learning for advanced predictive analytics and forecasting.',
      endpoint: '/api/v1/ai/predictive',
      method: 'POST',
      rateLimit: '1500 requests/hour',
      authentication: 'API Key',
      status: 'Production',
      documentation: '/docs/api/ai-predictive',
      sdk: 'JavaScript, Python, R',
      features: ['Time Series Analysis', 'Pattern Recognition', 'Forecasting', 'Statistical Modeling']
    }
  ];

  const filteredAPIs = selectedCategory === 'all' 
    ? apiEndpoints 
    : apiEndpoints.filter(api => api.category === selectedCategory);

  const sdkDownloads = [
    {
      name: 'JavaScript SDK',
      version: '2.1.0',
      size: '2.4 MB',
      downloads: '15.2K',
      icon: 'JS',
      color: 'from-yellow-500 to-orange-500',
      features: ['Browser & Node.js', 'TypeScript Support', 'Promise-based', 'Error Handling']
    },
    {
      name: 'Python SDK',
      version: '1.8.2',
      size: '3.1 MB',
      downloads: '12.8K',
      icon: 'PY',
      color: 'from-blue-500 to-indigo-500',
      features: ['Async Support', 'Data Classes', 'Type Hints', 'Pandas Integration']
    },
    {
      name: 'Go SDK',
      version: '1.5.1',
      size: '1.8 MB',
      downloads: '8.9K',
      icon: 'GO',
      color: 'from-cyan-500 to-blue-500',
      features: ['Goroutines', 'Context Support', 'Error Handling', 'Performance Optimized']
    },
    {
      name: 'Rust SDK',
      version: '0.9.3',
      size: '2.2 MB',
      downloads: '5.4K',
      icon: 'RS',
      color: 'from-orange-500 to-red-500',
      features: ['Memory Safe', 'Zero-cost Abstractions', 'Async Runtime', 'FFI Support']
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: 'Get Your API Key',
      description: 'Sign up for a free account and generate your API key from the dashboard.',
      icon: Key
    },
    {
      step: 2,
      title: 'Choose Your SDK',
      description: 'Download and install the SDK for your preferred programming language.',
      icon: Download
    },
    {
      step: 3,
      title: 'Make Your First Request',
      description: 'Use our code examples to make your first API call and see the results.',
      icon: Play
    },
    {
      step: 4,
      title: 'Explore Advanced Features',
      description: 'Dive into our comprehensive documentation to unlock advanced capabilities.',
      icon: BookOpen
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                API Reference
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Access the power of Zion Tech Group's cutting-edge technology through our comprehensive 
                API suite. Build the future with AI, quantum computing, and space technology.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#quick-start"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/docs"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  View Documentation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section id="quick-start" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Started in Minutes
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow these simple steps to start integrating our APIs into your applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quickStartSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white font-bold text-xl">{step.step}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDK Downloads */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Software Development Kits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive SDKs to integrate our APIs seamlessly into your applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sdkDownloads.map((sdk, index) => (
                <motion.div
                  key={sdk.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${sdk.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-xl">{sdk.icon}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 text-center">{sdk.name}</h3>
                      <p className="text-cyan-400 text-center mb-4">v{sdk.version}</p>
                      
                      <div className="space-y-2 mb-6 text-sm text-gray-400">
                        <div className="flex justify-between">
                          <span>Size:</span>
                          <span>{sdk.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Downloads:</span>
                          <span>{sdk.downloads}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Features</h4>
                        <ul className="space-y-1">
                          {sdk.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs">
                              <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                        Download SDK
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                API Endpoints
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive API suite covering AI, quantum computing, space technology, and security.
              </p>
            </motion.div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {apiCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent'
                      : 'border-cyan-400/30 text-cyan-400 hover:border-cyan-400/60'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {filteredAPIs.map((api, index) => (
                <motion.div
                  key={api.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30 mb-3 inline-block">
                            {apiCategories.find(c => c.id === api.category)?.name}
                          </span>
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            {api.name}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">{api.description}</p>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Code className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">API Details</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400">Endpoint:</span>
                              <code className="px-2 py-1 bg-gray-800 text-cyan-400 rounded text-sm">{api.endpoint}</code>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400">Method:</span>
                              <span className={`px-2 py-1 rounded text-sm font-mono ${
                                api.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                                api.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                                'bg-yellow-500/20 text-yellow-400'
                              }`}>
                                {api.method}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400">Rate Limit:</span>
                              <span className="text-white">{api.rateLimit}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400">Authentication:</span>
                              <span className="text-white">{api.authentication}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400">Status:</span>
                              <span className={`px-2 py-1 rounded text-xs ${
                                api.status === 'Production' ? 'bg-green-500/20 text-green-400' :
                                api.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {api.status}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Features</h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {api.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-400/20"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Supported SDKs</h4>
                          <div className="flex flex-wrap gap-2">
                            {api.sdk.split(', ').map((sdk, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded border border-cyan-400/20"
                              >
                                {sdk}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <a
                          href={api.documentation}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                        >
                          View Documentation
                          <BookOpen className="w-4 h-4" />
                        </a>
                        <a
                          href={`/docs/api/${api.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                        >
                          Try API
                          <Play className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Status & Performance */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                API Performance & Status
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monitor our API performance, uptime, and response times in real-time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Globe, number: '99.99%', label: 'Uptime', color: 'from-green-500 to-emerald-500' },
                { icon: Zap, number: '<50ms', label: 'Response Time', color: 'from-blue-500 to-cyan-500' },
                { icon: Users, number: '50K+', label: 'Active Users', color: 'from-purple-500 to-pink-500' },
                { icon: TrendingUp, number: '1B+', label: 'API Calls/Month', color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start integrating our cutting-edge APIs today and unlock the power of AI, 
                quantum computing, and space technology in your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get API Access
                </a>
                <a
                  href="/docs"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Explore Documentation
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