import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Network, Server, Shield, Brain, Atom, Rocket, 
  Cloud, Zap, Target, ArrowRight, ExternalLink, Search, Copy,
  CheckCircle, AlertCircle, Info, Terminal, Globe, Lock, Key
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

const apiCategories = [
  {
    id: 'ai-consciousness',
    title: 'AI Consciousness API',
    description: 'APIs for conscious AI systems and emotional intelligence',
    icon: <Brain className="w-8 h-8" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    apis: [
      {
        name: 'Consciousness Status',
        endpoint: '/api/v1/ai/consciousness/status',
        method: 'GET',
        description: 'Check the consciousness status of an AI system',
        parameters: [
          { name: 'ai_id', type: 'string', required: true, description: 'Unique AI system identifier' },
          { name: 'include_metrics', type: 'boolean', required: false, description: 'Include consciousness metrics' }
        ],
        response: {
          status: 'success',
          data: {
            ai_id: 'ai_12345',
            consciousness_level: 0.87,
            emotional_state: 'curious',
            self_awareness: true,
            last_updated: '2025-01-23T10:30:00Z'
          }
        }
      },
      {
        name: 'Emotional Response',
        endpoint: '/api/v1/ai/consciousness/emotion',
        method: 'POST',
        description: 'Generate emotional response based on input',
        parameters: [
          { name: 'ai_id', type: 'string', required: true, description: 'AI system identifier' },
          { name: 'input_text', type: 'string', required: true, description: 'Input text to process' },
          { name: 'emotion_context', type: 'string', required: false, description: 'Context for emotional response' }
        ],
        response: {
          status: 'success',
          data: {
            response: 'I understand your concern and I\'m here to help.',
            emotional_tone: 'empathetic',
            confidence: 0.92,
            processing_time: 0.15
          }
        }
      }
    ]
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing API',
    description: 'APIs for quantum computing operations and algorithms',
    icon: <Atom className="w-8 h-8" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    apis: [
      {
        name: 'Quantum Circuit Execution',
        endpoint: '/api/v1/quantum/execute',
        method: 'POST',
        description: 'Execute a quantum circuit on quantum hardware',
        parameters: [
          { name: 'circuit', type: 'object', required: true, description: 'Quantum circuit definition' },
          { name: 'shots', type: 'integer', required: false, description: 'Number of execution shots' },
          { name: 'backend', type: 'string', required: false, description: 'Quantum backend to use' }
        ],
        response: {
          status: 'success',
          data: {
            job_id: 'qjob_67890',
            results: { '00': 512, '01': 488 },
            execution_time: 2.34,
            backend_used: 'ibmq_manila'
          }
        }
      },
      {
        name: 'Quantum State Measurement',
        endpoint: '/api/v1/quantum/measure',
        method: 'POST',
        description: 'Measure quantum state and return classical results',
        parameters: [
          { name: 'state_vector', type: 'array', required: true, description: 'Quantum state vector' },
          { name: 'basis', type: 'string', required: false, description: 'Measurement basis' }
        ],
        response: {
          status: 'success',
          data: {
            measurement: '1',
            probability: 0.75,
            collapsed_state: [0, 1]
          }
        }
      }
    ]
  },
  {
    id: 'space-technology',
    title: 'Space Technology API',
    description: 'APIs for space resource intelligence and exploration',
    icon: <Rocket className="w-8 h-8" />,
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10',
    apis: [
      {
        name: 'Resource Detection',
        endpoint: '/api/v1/space/resources/detect',
        method: 'POST',
        description: 'Detect resources in a specified space region',
        parameters: [
          { name: 'coordinates', type: 'object', required: true, description: 'Spatial coordinates' },
          { name: 'scan_radius', type: 'number', required: false, description: 'Scan radius in kilometers' },
          { name: 'resource_types', type: 'array', required: false, description: 'Types of resources to detect' }
        ],
        response: {
          status: 'success',
          data: {
            resources_found: [
              {
                type: 'rare_metals',
                quantity: 'high',
                coordinates: { x: 123.45, y: 67.89, z: 456.78 },
                confidence: 0.94
              }
            ],
            scan_completion: 1.0,
            processing_time: 5.67
          }
        }
      }
    ]
  }
];

const authenticationMethods = [
  {
    name: 'API Key Authentication',
    description: 'Use your API key in the Authorization header',
    example: 'Authorization: Bearer YOUR_API_KEY',
    security: 'High'
  },
  {
    name: 'OAuth 2.0',
    description: 'Use OAuth 2.0 for secure authentication',
    example: 'Authorization: Bearer ACCESS_TOKEN',
    security: 'Very High'
  },
  {
    name: 'JWT Tokens',
    description: 'Use JWT tokens for stateless authentication',
    example: 'Authorization: Bearer JWT_TOKEN',
    security: 'High'
  }
];

const rateLimits = [
  {
    plan: 'Free',
    requests_per_minute: 60,
    requests_per_hour: 1000,
    requests_per_day: 10000
  },
  {
    plan: 'Professional',
    requests_per_minute: 300,
    requests_per_hour: 10000,
    requests_per_day: 100000
  },
  {
    plan: 'Enterprise',
    requests_per_minute: 1000,
    requests_per_hour: 50000,
    requests_per_day: 1000000
  }
];

const ApiDocumentationPage: React.FC = () => {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(text);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  return (
    <Layout seo={{
      title: "API Documentation - Zion Tech Group | Complete API Reference",
      description: "Comprehensive API documentation for Zion Tech Group services. Get started with AI consciousness, quantum computing, and space technology APIs.",
      keywords: "API documentation, API reference, REST API, Zion Tech Group, AI API, quantum API, space technology API",
      url: "https://ziontechgroup.com/api-documentation"
    }}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500/20 rounded-full">
                <Code className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              API Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Complete API reference for Zion Tech Group services. Build powerful applications 
              with our AI consciousness, quantum computing, and space technology APIs.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search APIs..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quick Start
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running with our APIs in minutes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Get Your API Key',
                description: 'Sign up and get your API key from the dashboard',
                icon: <Key className="w-8 h-8" />,
                color: 'text-green-400'
              },
              {
                step: '2',
                title: 'Choose Your SDK',
                description: 'Use our official SDKs for Python, JavaScript, or Go',
                icon: <Code className="w-8 h-8" />,
                color: 'text-blue-400'
              },
              {
                step: '3',
                title: 'Make Your First Call',
                description: 'Start building with our comprehensive APIs',
                icon: <Rocket className="w-8 h-8" />,
                color: 'text-purple-400'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`p-4 bg-gray-800/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${item.color}`}>
                  {item.icon}
                </div>
                <div className="bg-gray-800/30 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Authentication
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure your API calls with our authentication methods
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {authenticationMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{method.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    method.security === 'Very High' ? 'bg-green-500/20 text-green-300' :
                    method.security === 'High' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {method.security}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm text-gray-300">
                  {method.example}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rate Limits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understand our rate limiting policies for different subscription plans
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rateLimits.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Per Minute:</span>
                    <span className="text-white font-semibold">{plan.requests_per_minute}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Per Hour:</span>
                    <span className="text-white font-semibold">{plan.requests_per_hour}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Per Day:</span>
                    <span className="text-white font-semibold">{plan.requests_per_day}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Categories */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              API Reference
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints organized by service category
            </p>
          </motion.div>

          <div className="space-y-12">
            {apiCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${category.bgColor} rounded-2xl p-8 border border-gray-800`}
              >
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gray-800/50 rounded-xl mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className={`text-3xl font-bold ${category.color} mb-2`}>
                      {category.title}
                    </h3>
                    <p className="text-gray-300 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {category.apis.map((api, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-white">{api.name}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          api.method === 'GET' ? 'bg-green-500/20 text-green-300' :
                          api.method === 'POST' ? 'bg-blue-500/20 text-blue-300' :
                          api.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-red-500/20 text-red-300'
                        }`}>
                          {api.method}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{api.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-white mb-2">Endpoint:</h5>
                        <div className="flex items-center space-x-2">
                          <div className="bg-gray-800/50 rounded-lg p-3 font-mono text-sm text-gray-300 flex-1">
                            {api.endpoint}
                          </div>
                          <button
                            onClick={() => copyToClipboard(api.endpoint)}
                            className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors"
                          >
                            {copiedEndpoint === api.endpoint ? (
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-sm font-semibold text-white mb-2">Parameters:</h5>
                          <div className="space-y-2">
                            {api.parameters.map((param, paramIdx) => (
                              <div key={paramIdx} className="bg-gray-800/50 rounded-lg p-3">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="font-mono text-sm text-cyan-400">{param.name}</span>
                                  <span className={`px-2 py-1 rounded text-xs ${
                                    param.required ? 'bg-red-500/20 text-red-300' : 'bg-gray-500/20 text-gray-300'
                                  }`}>
                                    {param.required ? 'Required' : 'Optional'}
                                  </span>
                                </div>
                                <div className="text-xs text-gray-400 mb-1">Type: {param.type}</div>
                                <div className="text-xs text-gray-300">{param.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-semibold text-white mb-2">Response Example:</h5>
                          <div className="bg-gray-800/50 rounded-lg p-3">
                            <pre className="text-xs text-gray-300 overflow-x-auto">
                              {JSON.stringify(api.response, null, 2)}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs and Libraries */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              SDKs & Libraries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started quickly with our official client libraries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Python SDK',
                description: 'Official Python client with async support',
                link: 'https://github.com/ziontechgroup/python-sdk',
                icon: <Code className="w-8 h-8" />,
                color: 'text-blue-400'
              },
              {
                name: 'JavaScript SDK',
                description: 'Node.js and browser JavaScript library',
                link: 'https://github.com/ziontechgroup/javascript-sdk',
                icon: <Code className="w-8 h-8" />,
                color: 'text-yellow-400'
              },
              {
                name: 'Go SDK',
                description: 'High-performance Go client library',
                link: 'https://github.com/ziontechgroup/go-sdk',
                icon: <Code className="w-8 h-8" />,
                color: 'text-cyan-400'
              }
            ].map((sdk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className={`p-3 bg-gray-700/50 rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${sdk.color}`}>
                  {sdk.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{sdk.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{sdk.description}</p>
                <a 
                  href={sdk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View on GitHub <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start building with our APIs today and unlock the power of AI consciousness, 
              quantum computing, and space technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get API Access
              </Link>
              <Link 
                href="/docs"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
              >
                View Full Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ApiDocumentationPage;