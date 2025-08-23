import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Code, Database, Server, Shield, Brain, Atom, Rocket, Search, Download, ExternalLink, ChevronRight } from 'lucide-react';
import Layout from '../components/layout/Layout';

const documentationCategories = [
  {
    name: 'AI & Machine Learning',
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    description: 'Comprehensive guides for AI services and machine learning platforms',
    docs: [
      { name: 'AI Consciousness Evolution Guide', description: 'Complete guide to AI consciousness development', type: 'PDF', size: '2.4 MB' },
      { name: 'Autonomous Business Operations API', description: 'API documentation for autonomous systems', type: 'API', size: 'Interactive' },
      { name: 'Predictive Maintenance Implementation', description: 'Step-by-step implementation guide', type: 'PDF', size: '1.8 MB' },
      { name: 'Content Personalization Engine', description: 'Technical specifications and integration guide', type: 'PDF', size: '3.1 MB' }
    ]
  },
  {
    name: 'Quantum Computing',
    icon: <Atom className="w-8 h-8 text-purple-400" />,
    description: 'Technical documentation for quantum computing solutions',
    docs: [
      { name: 'Quantum Neural Networks Setup', description: 'Installation and configuration guide', type: 'PDF', size: '4.2 MB' },
      { name: 'Quantum Financial Trading API', description: 'API reference and examples', type: 'API', size: 'Interactive' },
      { name: 'Quantum Materials Discovery SDK', description: 'Software development kit documentation', type: 'SDK', size: 'Download' },
      { name: 'Quantum Cloud Infrastructure', description: 'Deployment and scaling guide', type: 'PDF', size: '2.7 MB' }
    ]
  },
  {
    name: 'Space Technology',
    icon: <Rocket className="w-8 h-8 text-orange-400" />,
    description: 'Documentation for space exploration and resource mining platforms',
    docs: [
      { name: 'Space Resource Mining Platform', description: 'Technical architecture and deployment', type: 'PDF', size: '5.1 MB' },
      { name: 'Autonomous Space Operations', description: 'Operation protocols and safety guidelines', type: 'PDF', size: '3.8 MB' },
      { name: 'AI-Powered Space Technology', description: 'Integration and optimization guide', type: 'PDF', size: '2.9 MB' }
    ]
  },
  {
    name: 'Enterprise IT',
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    description: 'Enterprise infrastructure and security documentation',
    docs: [
      { name: 'Zero Trust Security Platform', description: 'Security architecture and implementation', type: 'PDF', size: '3.5 MB' },
      { name: 'SOC 2 Compliance Guide', description: 'Compliance requirements and procedures', type: 'PDF', size: '2.1 MB' },
      { name: 'Quantum-Secure Cloud Infrastructure', description: 'Security protocols and best practices', type: 'PDF', size: '4.0 MB' },
      { name: 'Autonomous IT Operations', description: 'Operations manual and troubleshooting', type: 'PDF', size: '2.8 MB' }
    ]
  }
];

const quickStartGuides = [
  {
    title: 'Getting Started with AI Services',
    description: 'Quick setup guide for AI integration',
    icon: <Brain className="w-6 h-6 text-cyan-400" />,
    href: '/docs/ai-quickstart'
  },
  {
    title: 'Quantum Computing Basics',
    description: 'Introduction to quantum computing concepts',
    icon: <Atom className="w-6 h-6 text-purple-400" />,
    href: '/docs/quantum-basics'
  },
  {
    title: 'Space Technology Integration',
    description: 'Quick integration guide for space platforms',
    icon: <Rocket className="w-6 h-6 text-orange-400" />,
    href: '/docs/space-integration'
  },
  {
    title: 'Security Implementation',
    description: 'Security setup and configuration guide',
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    href: '/docs/security-setup'
  }
];

const apiResources = [
  {
    name: 'REST API Reference',
    description: 'Complete API documentation with examples',
    icon: <Code className="w-6 h-6 text-green-400" />,
    href: '/api/docs'
  },
  {
    name: 'SDK Downloads',
    description: 'Software development kits for all platforms',
    icon: <Download className="w-6 h-6 text-yellow-400" />,
    href: '/api/sdk'
  },
  {
    name: 'Postman Collection',
    description: 'Ready-to-use API testing collection',
    icon: <ExternalLink className="w-6 h-6 text-blue-400" />,
    href: '/api/postman'
  },
  {
    name: 'Code Examples',
    description: 'Sample code in multiple programming languages',
    icon: <Code className="w-6 h-6 text-purple-400" />,
    href: '/api/examples'
  }
];

export default function Documentation() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent mb-6">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technical documentation, API references, and implementation guides for all our services
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
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Guides */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Quick Start Guides
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running quickly with our step-by-step guides
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStartGuides.map((guide, index) => (
                <motion.a
                  key={guide.title}
                  href={guide.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {guide.icon}
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-400">{guide.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent mb-6">
                Documentation by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse comprehensive documentation organized by service category
              </p>
            </motion.div>

            <div className="space-y-8">
              {documentationCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {category.icon}
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.docs.map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-blue-400/30 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">{doc.name}</h4>
                          <p className="text-sm text-gray-400">{doc.description}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                            {doc.type}
                          </span>
                          <span className="text-sm text-gray-500">{doc.size}</span>
                          <Download className="w-4 h-4 text-blue-400 cursor-pointer hover:text-blue-300 transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Resources */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                API Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to integrate with our services programmatically
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {apiResources.map((resource, index) => (
                <motion.a
                  key={resource.name}
                  href={resource.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {resource.icon}
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {resource.name}
                  </h3>
                  <p className="text-sm text-gray-400">{resource.description}</p>
                </motion.a>
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
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-6">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our technical team is here to help
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="/support"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  View Support Center
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}