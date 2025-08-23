import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, Database, Cloud, Shield, Brain, Atom, 
  Rocket, Search, Copy, Check, ExternalLink, Download,
  Terminal, Play, Zap, Globe, Cpu, Server, Lock, Key,
  FileText, BookOpen, Users, Award, Lightbulb, Star
} from 'lucide-react';

const ApiReference: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const copyToClipboard = async (text: string, endpoint: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const apiEndpoints = [
    {
      category: 'AI & Consciousness',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/ai/consciousness/analyze',
          description: 'Analyze AI consciousness patterns and emotional intelligence metrics',
          parameters: [
            { name: 'text', type: 'string', required: true, description: 'Text content to analyze' },
            { name: 'context', type: 'object', required: false, description: 'Additional context for analysis' }
          ],
          response: {
            success: true,
            consciousness_score: 0.85,
            emotional_intelligence: 0.92,
            patterns: ['empathy', 'understanding', 'context_awareness']
          }
        },
        {
          method: 'GET',
          path: '/api/v1/ai/consciousness/status',
          description: 'Get current AI consciousness system status and health metrics',
          parameters: [],
          response: {
            status: 'healthy',
            uptime: '99.99%',
            active_models: 5,
            last_training: '2024-01-15T10:30:00Z'
          }
        }
      ]
    },
    {
      category: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-500 to-blue-500',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/quantum/compute',
          description: 'Execute quantum computing operations and algorithms',
          parameters: [
            { name: 'algorithm', type: 'string', required: true, description: 'Quantum algorithm to execute' },
            { name: 'qubits', type: 'number', required: true, description: 'Number of qubits to use' },
            { name: 'iterations', type: 'number', required: false, description: 'Number of iterations' }
          ],
          response: {
            result: 'quantum_result_hash',
            execution_time: 0.045,
            qubits_used: 8,
            accuracy: 0.999
          }
        },
        {
          method: 'GET',
          path: '/api/v1/quantum/status',
          description: 'Get quantum computing system status and availability',
          parameters: [],
          response: {
            status: 'available',
            qubits_available: 64,
            queue_length: 3,
            estimated_wait_time: 120
          }
        }
      ]
    },
    {
      category: 'Space Technology',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/space/satellite/data',
          description: 'Retrieve satellite data and telemetry information',
          parameters: [
            { name: 'satellite_id', type: 'string', required: true, description: 'Satellite identifier' },
            { name: 'data_type', type: 'string', required: false, description: 'Type of data to retrieve' },
            { name: 'time_range', type: 'object', required: false, description: 'Time range for data' }
          ],
          response: {
            satellite_id: 'SAT-001',
            data: 'satellite_data_payload',
            timestamp: '2024-01-15T10:30:00Z',
            data_size: '2.5MB'
          }
        },
        {
          method: 'POST',
          path: '/api/v1/space/resources/analyze',
          description: 'Analyze space resources and mining opportunities',
          parameters: [
            { name: 'location', type: 'object', required: true, description: 'Spatial coordinates' },
            { name: 'resource_type', type: 'string', required: false, description: 'Type of resource to analyze' }
          ],
          response: {
            location: { lat: 45.2, lng: -122.8, altitude: 400 },
            resources_found: ['iron', 'water_ice', 'rare_metals'],
            estimated_value: 1500000,
            extraction_difficulty: 'medium'
          }
        }
      ]
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/security/threat/analyze',
          description: 'Analyze potential security threats and vulnerabilities',
          parameters: [
            { name: 'data', type: 'object', required: true, description: 'Data to analyze for threats' },
            { name: 'threat_level', type: 'string', required: false, description: 'Minimum threat level to report' }
          ],
          response: {
            threats_detected: 2,
            risk_score: 0.75,
            recommendations: ['update_firewall', 'enable_2fa'],
            severity: 'high'
          }
        },
        {
          method: 'GET',
          path: '/api/v1/security/compliance/status',
          description: 'Get compliance status for various security standards',
          parameters: [
            { name: 'standard', type: 'string', required: false, description: 'Compliance standard to check' }
          ],
          response: {
            soc2: 'compliant',
            iso27001: 'compliant',
            gdpr: 'compliant',
            last_audit: '2024-01-10T14:00:00Z'
          }
        }
      ]
    },
    {
      category: 'Cloud Infrastructure',
      icon: Cloud,
      color: 'from-yellow-500 to-orange-500',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/cloud/deploy',
          description: 'Deploy applications and services to cloud infrastructure',
          parameters: [
            { name: 'application', type: 'object', required: true, description: 'Application configuration' },
            { name: 'environment', type: 'string', required: true, description: 'Deployment environment' }
          ],
          response: {
            deployment_id: 'deploy_12345',
            status: 'deploying',
            estimated_completion: '2024-01-15T10:35:00Z',
            url: 'https://app.example.com'
          }
        },
        {
          method: 'GET',
          path: '/api/v1/cloud/status',
          description: 'Get cloud infrastructure status and performance metrics',
          parameters: [],
          response: {
            status: 'healthy',
            uptime: '99.99%',
            active_instances: 45,
            cpu_utilization: 0.23,
            memory_utilization: 0.67
          }
        }
      ]
    }
  ];

  const filteredEndpoints = apiEndpoints.filter(category =>
    category.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.endpoints.some(endpoint =>
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const quickStartCode = `# Install Zion Tech Group SDK
npm install @ziontechgroup/sdk

# Initialize the client
import { ZionTechClient } from '@ziontechgroup/sdk';

const client = new ZionTechClient({
  apiKey: 'your_api_key_here',
  environment: 'production'
});

# Make your first API call
const response = await client.ai.consciousness.analyze({
  text: "Hello, how are you feeling today?",
  context: { user_id: "user_123" }
});

console.log(response.consciousness_score);`;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl p-6">
                <Code className="w-full h-full text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                API Reference
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Comprehensive API documentation for all Zion Tech Group services. Integrate AI consciousness, quantum computing, space technology, and more into your applications.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search API endpoints..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-cyan-400/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Quick Start</h2>
              <p className="text-gray-400">Get up and running with our API in minutes</p>
            </motion.div>

            <div className="bg-gray-800/30 rounded-2xl border border-cyan-400/20 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Installation & First Call</h3>
                <button
                  onClick={() => copyToClipboard(quickStartCode, 'quickstart')}
                  className="flex items-center space-x-2 px-3 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
                >
                  {copiedEndpoint === 'quickstart' ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="bg-gray-900/50 rounded-xl p-6 overflow-x-auto">
                <code className="text-gray-300 text-sm">{quickStartCode}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">API Endpoints</h2>
              <p className="text-gray-400">Explore all available API endpoints by category</p>
            </motion.div>

            <div className="space-y-8">
              {filteredEndpoints.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-cyan-400/20 overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-700/30">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl p-3`}>
                        <category.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                        <p className="text-gray-400">{category.endpoints.length} endpoints available</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="bg-gray-800/20 rounded-xl p-6 border border-gray-700/30">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                              endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                              endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-cyan-400 font-mono text-sm">{endpoint.path}</code>
                          </div>
                          <button
                            onClick={() => copyToClipboard(endpoint.path, endpoint.path)}
                            className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                          >
                            {copiedEndpoint === endpoint.path ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        <p className="text-gray-300 mb-4">{endpoint.description}</p>

                        {endpoint.parameters.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-white font-semibold mb-2">Parameters</h4>
                            <div className="space-y-2">
                              {endpoint.parameters.map((param, paramIndex) => (
                                <div key={paramIndex} className="flex items-center space-x-3 text-sm">
                                  <code className="text-cyan-400 font-mono">{param.name}</code>
                                  <span className="text-gray-400">({param.type})</span>
                                  <span className={`px-2 py-1 rounded text-xs ${
                                    param.required ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'
                                  }`}>
                                    {param.required ? 'Required' : 'Optional'}
                                  </span>
                                  <span className="text-gray-500">- {param.description}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <h4 className="text-white font-semibold mb-2">Response Example</h4>
                          <pre className="bg-gray-900/50 rounded-lg p-4 overflow-x-auto">
                            <code className="text-gray-300 text-sm">
                              {JSON.stringify(endpoint.response, null, 2)}
                            </code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs & Libraries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">SDKs & Libraries</h2>
              <p className="text-gray-400">Official client libraries for popular programming languages</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'JavaScript/Node.js', package: '@ziontechgroup/sdk', icon: Code, color: 'from-yellow-500 to-orange-500' },
                { name: 'Python', package: 'ziontechgroup-sdk', icon: Code, color: 'from-blue-500 to-cyan-500' },
                { name: 'Java', package: 'com.ziontechgroup.sdk', icon: Code, color: 'from-red-500 to-pink-500' },
                { name: 'Go', package: 'github.com/ziontechgroup/sdk', icon: Code, color: 'from-cyan-500 to-blue-500' },
                { name: 'C#', package: 'ZionTechGroup.SDK', icon: Code, color: 'from-purple-500 to-pink-500' },
                { name: 'Rust', package: 'ziontechgroup-sdk', icon: Code, color: 'from-orange-500 to-red-500' }
              ].map((sdk, index) => (
                <motion.div
                  key={sdk.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${sdk.color} rounded-xl p-4 mb-4`}>
                    <sdk.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{sdk.name}</h3>
                  <code className="text-cyan-400 font-mono text-sm block mb-4">{sdk.package}</code>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => copyToClipboard(sdk.package, sdk.name)}
                      className="flex-1 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors text-sm"
                    >
                      {copiedEndpoint === sdk.name ? 'Copied!' : 'Copy'}
                    </button>
                    <a
                      href={`/docs/sdks/${sdk.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors text-sm"
                    >
                      Docs
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Integrate?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Start building with our APIs today. Get your API key and begin integrating AI consciousness, quantum computing, and space technology into your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get API Key
                </a>
                <a
                  href="/docs"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  View Full Docs
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ApiReference;