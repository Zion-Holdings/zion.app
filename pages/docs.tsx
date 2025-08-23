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
  Terminal,
  Settings,
  Zap,
  Star,
  CheckCircle,
  Clock
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const documentationCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: Play,
      color: 'from-green-500 to-emerald-500',
      items: [
        { title: 'Quick Start Guide', href: '/docs/getting-started', difficulty: 'Beginner' },
        { title: 'Installation Guide', href: '/docs/installation', difficulty: 'Beginner' },
        { title: 'First Project', href: '/docs/first-project', difficulty: 'Beginner' },
        { title: 'Configuration', href: '/docs/configuration', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      description: 'Documentation for AI consciousness and ML platforms',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        { title: 'AI Consciousness API', href: '/docs/ai-consciousness', difficulty: 'Advanced' },
        { title: 'Neural Network Guide', href: '/docs/neural-networks', difficulty: 'Intermediate' },
        { title: 'Training Models', href: '/docs/training', difficulty: 'Advanced' },
        { title: 'Model Deployment', href: '/docs/deployment', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'Quantum Computing',
      description: 'Quantum algorithms and quantum-safe solutions',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { title: 'Quantum Algorithms', href: '/docs/quantum-algorithms', difficulty: 'Advanced' },
        { title: 'Quantum Cryptography', href: '/docs/quantum-crypto', difficulty: 'Advanced' },
        { title: 'Qiskit Integration', href: '/docs/qiskit', difficulty: 'Intermediate' },
        { title: 'Error Correction', href: '/docs/error-correction', difficulty: 'Advanced' }
      ]
    },
    {
      title: 'Space Technology',
      description: 'Satellite systems and space resource intelligence',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      items: [
        { title: 'Satellite API', href: '/docs/satellite-api', difficulty: 'Intermediate' },
        { title: 'Data Processing', href: '/docs/data-processing', difficulty: 'Intermediate' },
        { title: 'Resource Detection', href: '/docs/resource-detection', difficulty: 'Advanced' },
        { title: 'Orbital Mechanics', href: '/docs/orbital-mechanics', difficulty: 'Advanced' }
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'Security protocols and threat protection',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      items: [
        { title: 'Security Protocols', href: '/docs/security-protocols', difficulty: 'Intermediate' },
        { title: 'Threat Detection', href: '/docs/threat-detection', difficulty: 'Advanced' },
        { title: 'Zero Trust Architecture', href: '/docs/zero-trust', difficulty: 'Advanced' },
        { title: 'Compliance Guide', href: '/docs/compliance', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Multi-cloud management and deployment',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      items: [
        { title: 'Multi-Cloud Setup', href: '/docs/multi-cloud', difficulty: 'Intermediate' },
        { title: 'Kubernetes Guide', href: '/docs/kubernetes', difficulty: 'Intermediate' },
        { title: 'Infrastructure as Code', href: '/docs/iac', difficulty: 'Advanced' },
        { title: 'Monitoring & Logging', href: '/docs/monitoring', difficulty: 'Intermediate' }
      ]
    }
  ];

  const apiReferences = [
    {
      name: 'AI Consciousness API',
      version: 'v2.1.0',
      description: 'RESTful API for AI consciousness and emotional intelligence',
      endpoints: 24,
      status: 'Stable',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Quantum Computing API',
      version: 'v1.8.0',
      description: 'Quantum algorithm execution and quantum-safe cryptography',
      endpoints: 18,
      status: 'Beta',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Space Intelligence API',
      version: 'v1.5.0',
      description: 'Satellite data processing and space resource detection',
      endpoints: 15,
      status: 'Stable',
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Security API',
      version: 'v2.0.0',
      description: 'Threat detection and security monitoring',
      endpoints: 22,
      status: 'Stable',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const tutorials = [
    {
      title: 'Building Your First AI Agent',
      description: 'Learn how to create an AI agent with consciousness capabilities',
      duration: '45 min',
      difficulty: 'Intermediate',
      category: 'AI & ML',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Cryptography Implementation',
      description: 'Implement quantum-resistant encryption in your applications',
      duration: '60 min',
      difficulty: 'Advanced',
      category: 'Quantum',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Satellite Data Analysis',
      description: 'Process and analyze satellite imagery for resource detection',
      duration: '30 min',
      difficulty: 'Intermediate',
      category: 'Space Tech',
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Zero Trust Security Setup',
      description: 'Implement zero trust architecture for your infrastructure',
      duration: '90 min',
      difficulty: 'Advanced',
      category: 'Security',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const quickLinks = [
    { title: 'API Status', href: '/status', icon: CheckCircle, color: 'text-green-400' },
    { title: 'Support Portal', href: '/support', icon: Settings, color: 'text-blue-400' },
    { title: 'GitHub Repositories', href: 'https://github.com/ziontechgroup', icon: Code, color: 'text-purple-400' },
    { title: 'Community Forum', href: '/community', icon: Star, color: 'text-yellow-400' }
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
                Comprehensive guides, tutorials, and API references for Zion Tech Group's 
                cutting-edge technology platforms.
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
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-lg"
              />
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <link.icon className={`w-5 h-5 ${link.color}`} />
                  <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {link.title}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20">
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
                Explore comprehensive guides organized by technology area and difficulty level
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.href}
                        className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                      >
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {item.title}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            item.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                            item.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {item.difficulty}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API References */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">API References</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive API documentation for all our technology platforms
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {apiReferences.map((api, index) => (
                <motion.div
                  key={api.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${api.color} rounded-lg`}>
                        <api.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{api.name}</h3>
                        <p className="text-gray-400 text-sm">v{api.version}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      api.status === 'Stable' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {api.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{api.description}</p>
                  
                                     <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center space-x-2 text-sm text-gray-400">
                       <Code className="w-4 h-4" />
                       <span>{api.endpoints} endpoints</span>
                     </div>
                   </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                      <FileText className="w-4 h-4" />
                      <span>View Docs</span>
                    </button>
                    <button className="inline-flex items-center justify-center px-4 py-2 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Featured Tutorials</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Step-by-step guides to help you master our technology platforms
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tutorials.map((tutorial, index) => (
                <motion.article
                  key={tutorial.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${tutorial.color} rounded-lg`}>
                        <tutorial.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-cyan-400 font-medium">{tutorial.category}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{tutorial.duration}</span>
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {tutorial.difficulty}
                      </span>
                    </div>
                    
                    <button className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                      <Play className="w-4 h-4" />
                      <span>Start Tutorial</span>
                    </button>
                  </div>
                </motion.article>
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
                Tools, examples, and community resources to help you succeed
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Code Examples</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Ready-to-use code snippets and examples for all our APIs and platforms
                </p>
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  <span>Browse Examples</span>
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Terminal className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">CLI Tools</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Command-line tools and utilities to streamline your development workflow
                </p>
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  <span>Download CLI</span>
                  <Download className="w-4 h-4" />
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Community</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Join our developer community for support, discussions, and collaboration
                </p>
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  <span>Join Community</span>
                  <ExternalLink className="w-4 h-4" />
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
                Need Help with Documentation?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Can't find what you're looking for? Our team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/support"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Contact Us
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