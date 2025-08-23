import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Search, FileText, Database, Server, Shield, 
  Brain, Rocket, Globe, ArrowRight, Copy, Check,
  Download, Bookmark, Share2, Clock, User, Tag,
  Zap, Lock, Globe2, Cpu
} from 'lucide-react';
import Link from 'next/link';

const APIDocs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAPI, setSelectedAPI] = useState('all');
  const [copiedEndpoint, setCopiedEndpoint] = useState('');

  const apiCategories = [
    { id: 'all', name: 'All APIs', icon: <Code className="w-4 h-4" /> },
    { id: 'ai', name: 'AI & ML', icon: <Brain className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Cpu className="w-4 h-4" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" /> },
    { id: 'metaverse', name: 'Metaverse', icon: <Globe className="w-4 h-4" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-4 h-4" /> }
  ];

  const apis = [
    {
      name: 'AI Consciousness Platform',
      category: 'ai',
      description: 'Advanced AI consciousness and machine learning APIs',
      version: 'v2.1.0',
      status: 'Production',
      baseUrl: 'https://api.ziontechgroup.com/ai/v2',
      endpoints: [
        { method: 'POST', path: '/consciousness/analyze', description: 'Analyze consciousness level of AI models' },
        { method: 'GET', path: '/models', description: 'List available AI models' },
        { method: 'POST', path: '/training/start', description: 'Start AI model training' },
        { method: 'GET', path: '/training/status/{id}', description: 'Get training status' }
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Quantum Computing API',
      category: 'quantum',
      description: 'Quantum computing and quantum algorithm APIs',
      version: 'v1.8.0',
      status: 'Beta',
      baseUrl: 'https://api.ziontechgroup.com/quantum/v1',
      endpoints: [
        { method: 'POST', path: '/circuit/execute', description: 'Execute quantum circuit' },
        { method: 'GET', path: '/qubits/available', description: 'Get available qubits' },
        { method: 'POST', path: '/algorithm/run', description: 'Run quantum algorithm' },
        { method: 'GET', path: '/results/{id}', description: 'Get computation results' }
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Space Resource Intelligence',
      category: 'space',
      description: 'Satellite data and space resource analysis APIs',
      version: 'v1.5.0',
      status: 'Production',
      baseUrl: 'https://api.ziontechgroup.com/space/v1',
      endpoints: [
        { method: 'GET', path: '/satellites', description: 'List active satellites' },
        { method: 'POST', path: '/analysis/request', description: 'Request space data analysis' },
        { method: 'GET', path: '/resources/near-earth', description: 'Get near-Earth resources' },
        { method: 'POST', path: '/mining/calculate', description: 'Calculate mining feasibility' }
      ],
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Metaverse Development',
      category: 'metaverse',
      description: 'Virtual world creation and management APIs',
      version: 'v1.2.0',
      status: 'Alpha',
      baseUrl: 'https://api.ziontechgroup.com/metaverse/v1',
      endpoints: [
        { method: 'POST', path: '/worlds/create', description: 'Create new virtual world' },
        { method: 'GET', path: '/worlds/{id}', description: 'Get world details' },
        { method: 'PUT', path: '/worlds/{id}/update', description: 'Update world properties' },
        { method: 'POST', path: '/assets/upload', description: 'Upload 3D assets' }
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Quantum Cybersecurity',
      category: 'security',
      description: 'Quantum-resistant security and encryption APIs',
      version: 'v1.0.0',
      status: 'Production',
      baseUrl: 'https://api.ziontechgroup.com/security/v1',
      endpoints: [
        { method: 'POST', path: '/encrypt', description: 'Encrypt data with quantum-resistant algorithm' },
        { method: 'POST', path: '/decrypt', description: 'Decrypt quantum-encrypted data' },
        { method: 'GET', path: '/keys/generate', description: 'Generate quantum-resistant keys' },
        { method: 'POST', path: '/verify', description: 'Verify quantum signatures' }
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const authenticationMethods = [
    {
      name: 'API Key',
      description: 'Simple API key authentication for basic access',
      example: 'Authorization: Bearer YOUR_API_KEY',
      security: 'Basic'
    },
    {
      name: 'OAuth 2.0',
      description: 'Full OAuth 2.0 flow for secure applications',
      example: 'Authorization: Bearer ACCESS_TOKEN',
      security: 'High'
    },
    {
      name: 'JWT',
      description: 'JSON Web Token authentication for stateless APIs',
      example: 'Authorization: Bearer JWT_TOKEN',
      security: 'High'
    }
  ];

  const rateLimits = [
    {
      tier: 'Free',
      requests: '1,000/month',
      burst: '10/minute',
      description: 'Basic access for development and testing'
    },
    {
      tier: 'Professional',
      requests: '100,000/month',
      burst: '100/minute',
      description: 'Production applications and businesses'
    },
    {
      tier: 'Enterprise',
      requests: 'Unlimited',
      burst: 'Custom',
      description: 'High-volume enterprise applications'
    }
  ];

  const codeExamples = [
    {
      language: 'Python',
      title: 'AI Consciousness Analysis',
      code: `import requests

url = "https://api.ziontechgroup.com/ai/v2/consciousness/analyze"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "model_id": "gpt-4",
    "text": "Hello, how are you today?"
}

response = requests.post(url, json=data, headers=headers)
result = response.json()
print(f"Consciousness Level: {result['consciousness_score']}")`
    },
    {
      language: 'JavaScript',
      title: 'Quantum Circuit Execution',
      code: `const axios = require('axios');

const url = 'https://api.ziontechgroup.com/quantum/v1/circuit/execute';
const headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
};

const data = {
    qubits: 2,
    gates: ['H', 'CNOT', 'H'],
    measurements: [0, 1]
};

axios.post(url, data, { headers })
    .then(response => {
        console.log('Result:', response.data.result);
    })
    .catch(error => {
        console.error('Error:', error.response.data);
    });`
    },
    {
      language: 'cURL',
      title: 'Space Resource Analysis',
      code: `curl -X POST "https://api.ziontechgroup.com/space/v1/analysis/request" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "satellite_id": "sat_001",
    "coordinates": {
      "lat": 40.7128,
      "lng": -74.0060
    },
    "analysis_type": "mineral_detection"
  }'`
    }
  ];

  const filteredAPIs = apis.filter(api => {
    if (selectedAPI === 'all') return true;
    return api.category === selectedAPI;
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(text);
    setTimeout(() => setCopiedEndpoint(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              API Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive API reference for all our platforms. Build powerful applications 
              with AI, quantum computing, space technology, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#apis" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Explore APIs
              </Link>
              <Link href="/docs" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Docs
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <Code className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 25, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <Brain className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <Server className="w-14 h-14" />
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search APIs and endpoints..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>

            {/* API Category Filters */}
            <div className="flex flex-wrap gap-3">
              {apiCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedAPI(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedAPI === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-cyan-500/20 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API Listings */}
      <section id="apis" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Available APIs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of APIs for cutting-edge technologies
            </p>
          </motion.div>

          <div className="space-y-8">
            {filteredAPIs.map((api, index) => (
              <motion.div
                key={api.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${api.color} rounded-xl flex items-center justify-center`}>
                        {api.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{api.name}</h3>
                        <p className="text-gray-300">{api.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-3 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-sm text-gray-300">
                          {api.version}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          api.status === 'Production' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : api.status === 'Beta'
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {api.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 font-mono">{api.baseUrl}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Endpoints</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {api.endpoints.map((endpoint, idx) => (
                        <div key={idx} className="bg-gray-800/30 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                                endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                                endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {endpoint.method}
                              </span>
                              <span className="text-gray-300 font-mono text-sm">{endpoint.path}</span>
                            </div>
                            <button
                              onClick={() => copyToClipboard(`${api.baseUrl}${endpoint.path}`)}
                              className="p-1 hover:bg-gray-700/50 rounded transition-colors"
                            >
                              {copiedEndpoint === `${api.baseUrl}${endpoint.path}` ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                          <p className="text-gray-400 text-sm">{endpoint.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      href={`/api-docs/${api.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                    >
                      View Full API Documentation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    
                    <div className="flex items-center space-x-3">
                      <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                        <Bookmark className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                        <Share2 className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Authentication
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure your API calls with our multiple authentication methods
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {authenticationMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">{method.name}</h3>
                <p className="text-gray-300 text-center mb-4">{method.description}</p>
                
                <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                  <p className="text-cyan-400 font-mono text-sm break-all">{method.example}</p>
                </div>
                
                <div className="text-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    method.security === 'High' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {method.security} Security
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rate Limits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understand our rate limiting policies and choose the right tier for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rateLimits.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300 ${
                  tier.tier === 'Professional' 
                    ? 'border-cyan-500/50 scale-105' 
                    : 'border-cyan-500/20'
                }`}
              >
                {tier.tier === 'Professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.tier}</h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{tier.requests}</div>
                  <div className="text-gray-400 text-sm">requests per month</div>
                </div>
                
                <div className="mb-4">
                  <div className="text-lg font-semibold text-white mb-1">{tier.burst}</div>
                  <div className="text-gray-400 text-sm">burst limit</div>
                </div>
                
                <p className="text-gray-300 text-sm mb-6">{tier.description}</p>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Code Examples
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started quickly with our code examples in multiple programming languages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={example.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{example.title}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                      {example.language}
                    </span>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={() => copyToClipboard(example.code)}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
                    >
                      {copiedEndpoint === example.code ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Code
                        </>
                      )}
                    </button>
                    
                    <Link 
                      href={`/docs/examples/${example.language.toLowerCase()}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
                    >
                      View More Examples
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start integrating our APIs into your applications today. 
              Get your API key and begin building the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get API Key
              </Link>
              <Link href="/docs" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default APIDocs;