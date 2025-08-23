import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, FileText, Search, Zap, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Rocket, Brain, Atom, Database, Key
} from 'lucide-react';

const ApiDocumentationPage: React.FC = () => {
  const apiCategories = [
    {
      title: "AI Consciousness API",
      description: "Integrate AI consciousness and emotional intelligence into your applications",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      endpoints: [
        { method: "POST", path: "/api/v1/consciousness/analyze", description: "Analyze emotional content" },
        { method: "GET", path: "/api/v1/consciousness/status", description: "Get consciousness status" },
        { method: "POST", path: "/api/v1/consciousness/learn", description: "Train consciousness model" }
      ],
      docs: "/docs/ai-consciousness-api"
    },
    {
      title: "Quantum Computing API",
      description: "Access quantum computing power and quantum-resistant security",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      endpoints: [
        { method: "POST", path: "/api/v1/quantum/execute", description: "Execute quantum algorithm" },
        { method: "GET", path: "/api/v1/quantum/status", description: "Get quantum system status" },
        { method: "POST", path: "/api/v1/quantum/encrypt", description: "Quantum-resistant encryption" }
      ],
      docs: "/docs/quantum-api"
    },
    {
      title: "Space Technology API",
      description: "Access space resource intelligence and satellite data",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      endpoints: [
        { method: "GET", path: "/api/v1/space/resources", description: "Get space resource data" },
        { method: "POST", path: "/api/v1/space/mission", description: "Create space mission" },
        { method: "GET", path: "/api/v1/space/satellites", description: "Get satellite status" }
      ],
      docs: "/docs/space-api"
    },
    {
      title: "Cybersecurity API",
      description: "Advanced security and threat detection capabilities",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      endpoints: [
        { method: "POST", path: "/api/v1/security/threats", description: "Analyze security threats" },
        { method: "GET", path: "/api/v1/security/status", description: "Get security status" },
        { method: "POST", path: "/api/v1/security/incident", description: "Report security incident" }
      ],
      docs: "/docs/security-api"
    }
  ];

  const quickStartExamples = [
    {
      language: "JavaScript",
      title: "AI Consciousness Analysis",
      description: "Analyze emotional content using our AI consciousness API",
      code: `const response = await fetch('/api/v1/consciousness/analyze', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    text: 'Hello, how are you feeling today?',
    context: 'customer_support'
  })
});

const result = await response.json();
console.log('Emotional analysis:', result.emotions);`
    },
    {
      language: "Python",
      title: "Quantum Algorithm Execution",
      description: "Execute quantum algorithms for optimization problems",
      code: `import requests

response = requests.post(
    'https://api.ziontechgroup.com/api/v1/quantum/execute',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'algorithm': 'grover_search',
        'qubits': 4,
        'iterations': 100
    }
)

result = response.json()
print(f"Quantum result: {result['result']}")`
    },
    {
      language: "cURL",
      title: "Space Resource Data",
      description: "Retrieve space resource intelligence data",
      code: `curl -X GET "https://api.ziontechgroup.com/api/v1/space/resources" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "location": "near_earth",
    "resource_type": "minerals"
  }'`
    }
  ];

  const authenticationMethods = [
    {
      type: "API Key",
      description: "Simple API key authentication for basic access",
      icon: Key,
      color: "from-green-500 to-emerald-500"
    },
    {
      type: "OAuth 2.0",
      description: "Secure OAuth 2.0 authentication for enterprise applications",
      icon: Shield,
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "JWT Tokens",
      description: "JSON Web Tokens for stateless authentication",
      icon: FileText,
      color: "from-purple-500 to-pink-500"
    }
  ];

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
                <Sparkles className="w-4 h-4 mr-2" />
                API Reference
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive API documentation for our AI consciousness, quantum computing, 
                space technology, and cybersecurity platforms.
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
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search API endpoints..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300"
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
              <h2 className="text-4xl font-bold text-white mb-6">API Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive API offerings across all technology platforms
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {apiCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Endpoints:</h4>
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 rounded text-xs font-mono ${
                            endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-gray-300 text-sm">{endpoint.path}</code>
                        </div>
                        <span className="text-gray-400 text-sm">{endpoint.description}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    View Full Documentation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Examples */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Quick Start Examples</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started quickly with these code examples in multiple programming languages
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {quickStartExamples.map((example, index) => (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{example.title}</h3>
                      <p className="text-gray-300">{example.description}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                      {example.language}
                    </span>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700/50">
                    <pre className="text-gray-300 text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Authentication</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Secure your API calls with our multiple authentication methods
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {authenticationMethods.map((method, index) => (
                <motion.div
                  key={method.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{method.type}</h3>
                  <p className="text-gray-300">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rate Limits & Pricing */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Rate Limits & Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understand our API usage limits and pricing structure
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  plan: "Free Tier",
                  requests: "1,000/month",
                  features: ["Basic API access", "Standard support", "Community forum"],
                  price: "$0",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  plan: "Professional",
                  requests: "100,000/month",
                  features: ["Priority API access", "Email support", "Advanced features"],
                  price: "$99/month",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  plan: "Enterprise",
                  requests: "Unlimited",
                  features: ["Dedicated support", "Custom rate limits", "SLA guarantee"],
                  price: "Custom",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((tier, index) => (
                <motion.div
                  key={tier.plan}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.plan}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{tier.price}</div>
                  <div className="text-gray-400 mb-6">{tier.requests}</div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get your API key and start integrating our revolutionary technology platforms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Get API Key
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  View SDKs
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ApiDocumentationPage;