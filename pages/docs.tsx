import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Search, 
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Database,
  Zap,
  Star,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const documentationCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Comprehensive guides for AI consciousness, neural networks, and machine learning systems',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      docs: [
        { title: 'AI Consciousness Framework', description: 'Build conscious AI systems with emotional intelligence', difficulty: 'Advanced', time: '45 min' },
        { title: 'Neural Network Architecture', description: 'Design and implement custom neural networks', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Machine Learning Pipeline', description: 'End-to-end ML workflow from data to deployment', difficulty: 'Beginner', time: '20 min' }
      ]
    },
    {
      title: 'Quantum Computing',
      description: 'Quantum algorithms, cryptography, and quantum-safe infrastructure',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      docs: [
        { title: 'Quantum Algorithms Guide', description: 'Implement quantum algorithms for optimization', difficulty: 'Advanced', time: '60 min' },
        { title: 'Quantum Cryptography', description: 'Build quantum-resistant security systems', difficulty: 'Intermediate', time: '40 min' },
        { title: 'Quantum Error Correction', description: 'Handle quantum noise and errors', difficulty: 'Advanced', time: '50 min' }
      ]
    },
    {
      title: 'Space Technology',
      description: 'Satellite systems, space resource intelligence, and orbital mechanics',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      docs: [
        { title: 'Satellite Data Processing', description: 'Process and analyze satellite imagery', difficulty: 'Intermediate', time: '35 min' },
        { title: 'Space Resource Detection', description: 'Identify valuable resources in space', difficulty: 'Advanced', time: '45 min' },
        { title: 'Orbital Mechanics', description: 'Calculate orbits and trajectories', difficulty: 'Intermediate', time: '30 min' }
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'Security frameworks, threat detection, and zero-trust architecture',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      docs: [
        { title: 'Zero-Trust Security', description: 'Implement zero-trust security architecture', difficulty: 'Intermediate', time: '40 min' },
        { title: 'Threat Detection', description: 'Build AI-powered threat detection systems', difficulty: 'Advanced', time: '50 min' },
        { title: 'Security Automation', description: 'Automate security operations and response', difficulty: 'Intermediate', time: '35 min' }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Multi-cloud management, edge computing, and infrastructure automation',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      docs: [
        { title: 'Multi-Cloud Strategy', description: 'Manage multiple cloud providers efficiently', difficulty: 'Intermediate', time: '40 min' },
        { title: 'Edge Computing', description: 'Deploy applications at the edge', difficulty: 'Advanced', time: '45 min' },
        { title: 'Infrastructure as Code', description: 'Automate infrastructure deployment', difficulty: 'Beginner', time: '25 min' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation for all Zion Tech Group services',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      docs: [
        { title: 'REST API Guide', description: 'Complete REST API reference', difficulty: 'Beginner', time: '20 min' },
        { title: 'GraphQL API', description: 'GraphQL schema and queries', difficulty: 'Intermediate', time: '30 min' },
        { title: 'WebSocket API', description: 'Real-time communication APIs', difficulty: 'Intermediate', time: '25 min' }
      ]
    }
  ];

  const quickStartGuides = [
    {
      title: 'Getting Started with AI',
      description: 'Quick start guide for building your first AI application',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      time: '15 min',
      difficulty: 'Beginner'
    },
    {
      title: 'Quantum Computing Basics',
      description: 'Introduction to quantum computing concepts and tools',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      time: '20 min',
      difficulty: 'Beginner'
    },
    {
      title: 'Space Tech Primer',
      description: 'Essential concepts for space technology development',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      time: '25 min',
      difficulty: 'Beginner'
    }
  ];

  const apiExamples = [
    {
      title: 'AI Consciousness API',
      description: 'Integrate AI consciousness into your applications',
      code: `curl -X POST https://api.ziontechgroup.com/ai/consciousness \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"input": "Hello, how are you feeling today?"}'`,
      language: 'bash'
    },
    {
      title: 'Quantum Encryption API',
      description: 'Implement quantum-safe encryption',
      code: `import ziontechgroup as ztg

client = ztg.Client(api_key="YOUR_API_KEY")
encrypted = client.quantum.encrypt(
    data="sensitive information",
    algorithm="post_quantum_aes"
)`,
      language: 'python'
    },
    {
      title: 'Satellite Data API',
      description: 'Access satellite imagery and data',
      code: `const response = await fetch('https://api.ziontechgroup.com/space/satellite', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    coordinates: { lat: 40.7128, lng: -74.0060 },
    resolution: 'high'
  })
});`,
      language: 'javascript'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Documentation</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive guides, tutorials, and API references to help you build with 
                Zion Tech Group's cutting-edge technology platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-lg"
              />
            </div>
          </div>
        </section>

        {/* Quick Start Guides */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Quick Start Guides</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Get up and running quickly with our essential guides for beginners
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {quickStartGuides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${guide.color} rounded-xl mb-6`}>
                    <guide.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{guide.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{guide.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    <span>Start Learning</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Documentation Categories</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore comprehensive documentation organized by technology area
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {documentationCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex-shrink-0`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {category.docs.map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1">{doc.title}</h4>
                          <p className="text-gray-400 text-sm">{doc.description}</p>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-400">
                          <span className="px-2 py-1 bg-gray-600/50 rounded-full">{doc.difficulty}</span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{doc.time}</span>
                          </span>
                          <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Examples */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">API Examples</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                See how to integrate Zion Tech Group services into your applications
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {apiExamples.map((example, index) => (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{example.title}</h3>
                    <p className="text-gray-300">{example.description}</p>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-600">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400 font-mono">{example.language}</span>
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                  
                  <div className="mt-6 flex items-center space-x-4">
                    <button className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors duration-300">
                      <Play className="w-4 h-4" />
                      <span>Try it out</span>
                    </button>
                    <button className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      <span>View full docs</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Additional Resources</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                More tools and resources to help you succeed with Zion Tech Group
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Community Forum</h3>
                <p className="text-gray-300 mb-6">
                  Connect with other developers, ask questions, and share solutions
                </p>
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  <span>Join Community</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Live Workshops</h3>
                <p className="text-gray-300 mb-6">
                  Interactive sessions with our technical experts
                </p>
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  <span>View Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Sample Projects</h3>
                <p className="text-gray-300 mb-6">
                  Complete example projects and code samples
                </p>
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  <span>Browse Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Need Help Getting Started?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our technical support team is here to help you succeed with Zion Tech Group's platforms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="/webinars"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Watch Tutorials
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocsPage;