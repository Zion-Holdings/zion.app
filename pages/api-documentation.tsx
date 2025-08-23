import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Key, Webhook, Database, Shield, Zap, BookOpen, Download, Play, Search, Filter, ArrowRight, ExternalLink, Copy, CheckCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/v1/ai/analyze',
    description: 'Analyze text content using AI',
    category: 'AI Services',
    auth: 'Required',
    rateLimit: '1000/hour'
  },
  {
    method: 'POST',
    path: '/api/v1/quantum/encrypt',
    description: 'Quantum encryption for data',
    category: 'Quantum Services',
    auth: 'Required',
    rateLimit: '100/hour'
  },
  {
    method: 'GET',
    path: '/api/v1/space/resources',
    description: 'Get space resource data',
    category: 'Space Tech',
    auth: 'Required',
    rateLimit: '500/hour'
  },
  {
    method: 'POST',
    path: '/api/v1/security/audit',
    description: 'Security audit endpoint',
    category: 'Cybersecurity',
    auth: 'Required',
    rateLimit: '100/hour'
  },
  {
    method: 'GET',
    path: '/api/v1/status',
    description: 'Service status and health',
    category: 'System',
    auth: 'Optional',
    rateLimit: '10000/hour'
  },
  {
    method: 'POST',
    path: '/api/v1/webhooks/register',
    description: 'Register webhook endpoint',
    category: 'Webhooks',
    auth: 'Required',
    rateLimit: '100/hour'
  }
];

const sdkLanguages = [
  { name: 'JavaScript/Node.js', icon: '🔷', docs: '/docs/sdk/javascript', download: '/downloads/sdk-js.zip' },
  { name: 'Python', icon: '🐍', docs: '/docs/sdk/python', download: '/downloads/sdk-python.zip' },
  { name: 'Java', icon: '☕', docs: '/docs/sdk/java', download: '/downloads/sdk-java.zip' },
  { name: 'C#', icon: '🔷', docs: '/docs/sdk/csharp', download: '/downloads/sdk-csharp.zip' },
  { name: 'Go', icon: '🐹', docs: '/docs/sdk/go', download: '/downloads/sdk-go.zip' },
  { name: 'PHP', icon: '🐘', docs: '/docs/sdk/php', download: '/downloads/sdk-php.zip' }
];

export default function ApiDocsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedEndpoint, setCopiedEndpoint] = useState('');

  const categories = ['All', 'AI Services', 'Quantum Services', 'Space Tech', 'Cybersecurity', 'System', 'Webhooks'];

  const filteredEndpoints = apiEndpoints.filter(endpoint => {
    const matchesSearch = endpoint.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         endpoint.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || endpoint.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(text);
    setTimeout(() => setCopiedEndpoint(''), 2000);
  };

  return (
    <Layout>
      <SEO
        title="API Documentation | Zion Tech Group"
        description="Comprehensive API documentation for Zion Tech Group services including AI, Quantum, Space Tech, and Cybersecurity APIs."
        keywords={["API documentation", "REST API", "webhooks", "SDK", "Zion Tech Group", "AI API", "Quantum API"]}
        canonical="https://ziontechgroup.com/api-documentation"
      />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Integrate with our cutting-edge AI, Quantum, and Space Tech services through our comprehensive REST API and webhook system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                <BookOpen className="w-5 h-5" />
                View SDK Documentation
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Download className="w-5 h-5" />
                Download SDKs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search APIs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            API Endpoints
          </motion.h2>
          
          <div className="grid gap-4">
            {filteredEndpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-cyan-400 font-mono text-sm bg-black/30 px-3 py-1 rounded">
                      {endpoint.path}
                    </code>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-white font-medium mb-2">{endpoint.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        {endpoint.auth}
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        {endpoint.rateLimit}
                      </span>
                      <span className="flex items-center gap-1">
                        <Database className="w-4 h-4" />
                        {endpoint.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard(endpoint.path)}
                      className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                      title="Copy endpoint"
                    >
                      {copiedEndpoint === endpoint.path ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200" title="Try endpoint">
                      <Play className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            SDKs & Libraries
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdkLanguages.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{sdk.icon}</div>
                <h3 className="text-white font-semibold mb-3">{sdk.name}</h3>
                <div className="flex gap-2">
                  <a
                    href={sdk.docs}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all duration-300"
                  >
                    <BookOpen className="w-4 h-4" />
                    Docs
                  </a>
                  <a
                    href={sdk.download}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Authentication</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Secure your API calls with our robust authentication system using API keys and webhook signatures.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Key className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-white font-semibold">API Keys</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Include your API key in the Authorization header for all authenticated requests.
                </p>
                <code className="block bg-black/50 p-3 rounded text-cyan-400 font-mono text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Webhook className="w-6 h-6 text-blue-400" />
                  <h3 className="text-white font-semibold">Webhook Security</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Verify webhook authenticity using signature headers and retry mechanisms.
                </p>
                <code className="block bg-black/50 p-3 rounded text-blue-400 font-mono text-sm">
                  X-Webhook-Signature: sha256=...
                </code>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to get your API keys and start integrating with our cutting-edge technology services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold"
              >
                Get API Access
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/support"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold"
              >
                Get Support
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}