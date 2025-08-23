import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Code, Database, Server, Shield, Brain, Atom, Rocket,
  ArrowRight, ExternalLink, Search, Filter, Star, Clock,
  Users, Eye, Bookmark, Share2, MessageCircle, Download,
  Play, Terminal, Key, Lock, Globe, Zap, Cpu
} from 'lucide-react';

const APIPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const apiCategories = [
    { value: 'all', label: 'All APIs', count: 25, color: 'from-blue-500 to-cyan-500' },
    { value: 'ai', label: 'AI & ML APIs', count: 8, color: 'from-purple-500 to-pink-500' },
    { value: 'quantum', label: 'Quantum APIs', count: 6, color: 'from-blue-500 to-indigo-500' },
    { value: 'space', label: 'Space Tech APIs', count: 4, color: 'from-indigo-500 to-purple-500' },
    { value: 'security', label: 'Security APIs', count: 7, color: 'from-red-500 to-orange-500' }
  ];

  const apis = [
    {
      id: 1,
      name: 'AI Consciousness API',
      category: 'ai',
      description: 'Advanced AI consciousness and emotional intelligence API for building conscious AI systems',
      version: 'v2.1.0',
      status: 'stable',
      popularity: 4.9,
      endpointCount: 45,
      documentation: 'Complete',
      sdk: 'JavaScript, Python, Java',
      pricing: 'Usage-based',
      featured: true,
      endpoints: [
        { method: 'POST', path: '/v2/consciousness/analyze', description: 'Analyze emotional state and consciousness level' },
        { method: 'GET', path: '/v2/consciousness/status', description: 'Get current consciousness status' },
        { method: 'POST', path: '/v2/consciousness/evolve', description: 'Trigger consciousness evolution process' }
      ]
    },
    {
      id: 2,
      name: 'Quantum Neural Network API',
      category: 'quantum',
      description: 'Quantum computing API for neural network operations and quantum machine learning',
      version: 'v1.8.0',
      status: 'beta',
      popularity: 4.7,
      endpointCount: 32,
      documentation: 'Complete',
      sdk: 'Python, C++, Rust',
      pricing: 'Enterprise',
      featured: true,
      endpoints: [
        { method: 'POST', path: '/v1/quantum/neural/create', description: 'Create quantum neural network' },
        { method: 'GET', path: '/v1/quantum/neural/{id}/status', description: 'Get network status' },
        { method: 'POST', path: '/v1/quantum/neural/{id}/train', description: 'Train quantum network' }
      ]
    },
    {
      id: 3,
      name: 'Space Resource Intelligence API',
      category: 'space',
      description: 'API for space resource mapping, analysis, and intelligence gathering',
      version: 'v1.5.0',
      status: 'stable',
      popularity: 4.6,
      endpointCount: 28,
      documentation: 'Complete',
      sdk: 'Python, Go, JavaScript',
      pricing: 'Usage-based',
      featured: false,
      endpoints: [
        { method: 'GET', path: '/v1/space/resources/map', description: 'Get resource mapping data' },
        { method: 'POST', path: '/v1/space/resources/analyze', description: 'Analyze resource composition' },
        { method: 'GET', path: '/v1/space/resources/forecast', description: 'Get resource availability forecast' }
      ]
    },
    {
      id: 4,
      name: 'Quantum Cybersecurity API',
      category: 'security',
      description: 'Quantum-resistant cybersecurity API for encryption and security operations',
      version: 'v2.0.0',
      status: 'stable',
      popularity: 4.8,
      endpointCount: 38,
      documentation: 'Complete',
      sdk: 'JavaScript, Python, Java, Go',
      pricing: 'Enterprise',
      featured: true,
      endpoints: [
        { method: 'POST', path: '/v2/security/encrypt', description: 'Quantum-resistant encryption' },
        { method: 'POST', path: '/v2/security/decrypt', description: 'Decrypt quantum-encrypted data' },
        { method: 'GET', path: '/v2/security/keys/generate', description: 'Generate quantum keys' }
      ]
    },
    {
      id: 5,
      name: 'Autonomous Business Intelligence API',
      category: 'ai',
      description: 'AI-powered business intelligence and analytics API for autonomous insights',
      version: 'v1.9.0',
      status: 'stable',
      popularity: 4.7,
      endpointCount: 42,
      documentation: 'Complete',
      sdk: 'JavaScript, Python, R',
      pricing: 'Usage-based',
      featured: false,
      endpoints: [
        { method: 'POST', path: '/v1/intelligence/analyze', description: 'Analyze business data' },
        { method: 'GET', path: '/v1/intelligence/insights', description: 'Get business insights' },
        { method: 'POST', path: '/v1/intelligence/predict', description: 'Generate predictions' }
      ]
    },
    {
      id: 6,
      name: 'Zero Trust Security API',
      category: 'security',
      description: 'Zero trust security architecture API for modern security implementations',
      version: 'v1.6.0',
      status: 'stable',
      popularity: 4.5,
      endpointCount: 35,
      documentation: 'Complete',
      sdk: 'JavaScript, Python, Java',
      pricing: 'Enterprise',
      featured: false,
      endpoints: [
        { method: 'POST', path: '/v1/zerotrust/authenticate', description: 'Authenticate user/device' },
        { method: 'GET', path: '/v1/zerotrust/authorize', description: 'Authorize access' },
        { method: 'POST', path: '/v1/zerotrust/monitor', description: 'Monitor security events' }
      ]
    }
  ];

  const filteredAPIs = apis.filter(api => {
    if (selectedCategory !== 'all' && api.category !== selectedCategory) return false;
    if (searchQuery && !api.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !api.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const quickStartCode = `# Quick Start with Zion Tech Group APIs

import requests
import json

# Initialize API client
API_BASE = "https://api.ziontechgroup.com"
API_KEY = "your_api_key_here"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Example: AI Consciousness Analysis
def analyze_consciousness(text):
    response = requests.post(
        f"{API_BASE}/v2/consciousness/analyze",
        headers=headers,
        json={"text": text}
    )
    return response.json()

# Example: Quantum Neural Network Creation
def create_quantum_network(config):
    response = requests.post(
        f"{API_BASE}/v1/quantum/neural/create",
        headers=headers,
        json=config
    )
    return response.json()

# Test the APIs
if __name__ == "__main__":
    # Analyze consciousness
    result = analyze_consciousness("Hello, I am an AI system.")
    print("Consciousness Analysis:", result)
    
    # Create quantum network
    network_config = {
        "layers": [10, 20, 10],
        "qubits": 32,
        "optimizer": "quantum_adam"
    }
    network = create_quantum_network(network_config)
    print("Quantum Network:", network)`;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Code className="w-4 h-4 mr-2" />
                Developer API Reference
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                API Reference
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive API documentation for integrating with our revolutionary technology solutions. 
                Build the future with our powerful, well-documented APIs.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search APIs, endpoints, or documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">API Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of APIs organized by technology area and use case.
              </p>
            </motion.div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {apiCategories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredAPIs.map((api, index) => (
                <motion.div
                  key={api.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${apiCategories.find(c => c.value === api.category)?.color} mr-4`}>
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{api.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">v{api.version}</span>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            api.status === 'stable' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {api.status}
                          </span>
                          {api.featured && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">{api.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{api.endpointCount}</div>
                      <div className="text-xs text-gray-500">Endpoints</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-400">{api.popularity}</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Documentation:</span>
                      <span className="text-white">{api.documentation}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">SDK Support:</span>
                      <span className="text-white">{api.sdk}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Pricing:</span>
                      <span className="text-white">{api.pricing}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Endpoints:</h4>
                    {api.endpoints.slice(0, 3).map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="bg-gray-800/50 rounded-lg p-3 text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-1 rounded text-xs font-mono ${
                            endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {endpoint.method}
                          </span>
                          <span className="text-gray-300 font-mono">{endpoint.path}</span>
                        </div>
                        <p className="text-gray-400">{endpoint.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      href={`/docs/api/${api.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Docs
                    </Link>
                    <Link
                      href={`/docs/api/${api.name.toLowerCase().replace(/\s+/g, '-')}/playground`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-blue-500/50 text-blue-400 font-medium hover:bg-blue-500/10 transition-all duration-200"
                    >
                      <Play className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Quick Start Guide</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running with our APIs in minutes. Follow this quick start guide to begin integrating 
                with our revolutionary technology solutions.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Getting Started</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Get Your API Key</h4>
                      <p className="text-sm">Sign up for a Zion Tech Group account and generate your API key from the dashboard.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Choose Your SDK</h4>
                      <p className="text-sm">Select from our supported programming languages and install the appropriate SDK.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Make Your First API Call</h4>
                      <p className="text-sm">Use the code examples below to make your first API request and start building.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-white font-semibold mb-3">Supported Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'Python', 'Java', 'Go', 'Rust', 'C++', 'C#', 'PHP'].map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-lg text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold">Python Example</h4>
                  <button className="text-blue-400 hover:text-blue-300 text-sm">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
                <pre className="bg-gray-800/50 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">{quickStartCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Our APIs?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our APIs to be powerful, reliable, and developer-friendly.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'High Performance',
                  description: 'Optimized for speed and efficiency with sub-100ms response times'
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Bank-level security with quantum-resistant encryption and zero trust'
                },
                {
                  icon: Globe,
                  title: 'Global Infrastructure',
                  description: 'Distributed across 200+ locations for 99.99% uptime'
                },
                {
                  icon: Users,
                  title: 'Developer First',
                  description: 'Comprehensive documentation, SDKs, and developer support'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of developers who are already building the future with our revolutionary APIs. 
                Get started today and transform your applications with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get API Access
                </Link>
                <Link
                  href="/resources/documentation"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Bookmark className="w-5 h-5 mr-2" />
                  View Full Docs
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default APIPage;