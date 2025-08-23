import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Code, FileText, Search, ArrowRight, 
  Download, Github, Terminal, Database, 
  Server, Shield, Zap, Brain, Atom, Rocket
} from 'lucide-react';
import Link from 'next/link';

export default function Docs() {
  const quickStartGuides = [
    {
      title: 'AI Consciousness Platform',
      description: 'Get started with our revolutionary AI consciousness platform in minutes',
      icon: <Brain className="w-8 h-8" />,
      time: '5 min read',
      difficulty: 'Beginner',
      href: '/docs/ai-consciousness-platform'
    },
    {
      title: 'Quantum Computing API',
      description: 'Learn to use our quantum computing APIs for complex problem solving',
      icon: <Atom className="w-8 h-8" />,
      time: '10 min read',
      difficulty: 'Intermediate',
      href: '/docs/quantum-computing-api'
    },
    {
      title: 'Autonomous Systems SDK',
      description: 'Build autonomous business systems with our comprehensive SDK',
      icon: <Rocket className="w-8 h-8" />,
      time: '15 min read',
      difficulty: 'Advanced',
      href: '/docs/autonomous-systems-sdk'
    }
  ];

  const apiCategories = [
    {
      title: 'AI & Consciousness APIs',
      description: 'APIs for AI consciousness, emotional intelligence, and autonomous decision making',
      icon: <Brain className="w-8 h-8" />,
      apis: [
        { name: 'Consciousness Simulation', endpoint: '/api/v1/consciousness/simulate', version: 'v1.2' },
        { name: 'Emotional Intelligence', endpoint: '/api/v1/emotion/analyze', version: 'v1.1' },
        { name: 'Autonomous Decision Engine', endpoint: '/api/v1/decision/process', version: 'v1.3' },
        { name: 'Neural Network Training', endpoint: '/api/v1/neural/train', version: 'v1.0' }
      ]
    },
    {
      title: 'Quantum Computing APIs',
      description: 'Quantum algorithms, cryptography, and computational APIs',
      icon: <Atom className="w-8 h-8" />,
      apis: [
        { name: 'Quantum Algorithm Execution', endpoint: '/api/v1/quantum/execute', version: 'v1.1' },
        { name: 'Quantum Cryptography', endpoint: '/api/v1/quantum/crypto', version: 'v1.0' },
        { name: 'Quantum State Management', endpoint: '/api/v1/quantum/state', version: 'v1.2' },
        { name: 'Quantum Error Correction', endpoint: '/api/v1/quantum/error-correction', version: 'v1.0' }
      ]
    },
    {
      title: 'Autonomous Systems APIs',
      description: 'APIs for building self-managing and autonomous business systems',
      icon: <Rocket className="w-8 h-8" />,
      apis: [
        { name: 'Process Automation', endpoint: '/api/v1/autonomous/automate', version: 'v1.1' },
        { name: 'System Monitoring', endpoint: '/api/v1/autonomous/monitor', version: 'v1.2' },
        { name: 'Self-Healing Infrastructure', endpoint: '/api/v1/autonomous/heal', version: 'v1.0' },
        { name: 'Resource Optimization', endpoint: '/api/v1/autonomous/optimize', version: 'v1.1' }
      ]
    }
  ];

  const sdks = [
    {
      name: 'Python SDK',
      description: 'Comprehensive Python library for all Zion Tech Group services',
      version: 'v2.1.0',
      downloads: '50K+',
      icon: '🐍',
      features: ['Full API coverage', 'Async support', 'Type hints', 'Comprehensive examples'],
      href: '/docs/python-sdk'
    },
    {
      name: 'JavaScript SDK',
      description: 'Modern JavaScript/TypeScript SDK for web and Node.js applications',
      version: 'v1.8.0',
      downloads: '75K+',
      icon: '⚡',
      features: ['Browser & Node.js', 'TypeScript support', 'Promise-based', 'Middleware support'],
      href: '/docs/javascript-sdk'
    },
    {
      name: 'Go SDK',
      description: 'High-performance Go SDK for enterprise applications',
      version: 'v1.5.0',
      downloads: '25K+',
      icon: '🚀',
      features: ['High performance', 'Concurrent operations', 'Minimal dependencies', 'Enterprise ready'],
      href: '/docs/go-sdk'
    },
    {
      name: 'Java SDK',
      description: 'Enterprise-grade Java SDK with Spring Boot integration',
      version: 'v1.3.0',
      downloads: '40K+',
      icon: '☕',
      features: ['Spring Boot integration', 'Enterprise patterns', 'Comprehensive testing', 'Maven/Gradle'],
      href: '/docs/java-sdk'
    }
  ];

  const resources = [
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples and code samples',
              icon: <Code className="w-6 h-6" />,
      href: '/api-documentation'
    },
    {
      title: 'Developer Portal',
      description: 'Access to development tools, sandbox environments, and testing',
      icon: <Terminal className="w-6 h-6" />,
      href: '/developer'
    },
    {
      title: 'Support Center',
      description: 'Technical support, troubleshooting guides, and community forums',
      icon: <Shield className="w-6 h-6" />,
      href: '/support'
    },
    {
      title: 'Resources',
      description: 'Whitepapers, case studies, and technical resources',
      icon: <FileText className="w-6 h-6" />,
      href: '/resources'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Developer Documentation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Everything you need to build with Zion Tech Group's AI consciousness, 
            quantum computing, and autonomous systems platforms.
          </motion.p>
          
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Guides Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Quick Start Guides
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={guide.href}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/10">
                    <div className="flex items-center gap-4 mb-4 text-cyan-400">
                      {guide.icon}
                      <div>
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                          {guide.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {guide.time}
                      </span>
                      <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            API Reference
          </motion.h2>
          
          <div className="space-y-8">
            {apiCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-cyan-400">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {category.title}
                    </h3>
                    <p className="text-gray-300">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {category.apis.map((api, apiIndex) => (
                    <div key={apiIndex} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-cyan-400">
                          {api.name}
                        </h4>
                        <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                          {api.version}
                        </span>
                      </div>
                      <code className="text-sm text-gray-300 bg-black/30 px-2 py-1 rounded">
                        {api.endpoint}
                      </code>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Software Development Kits
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sdks.map((sdk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={sdk.href}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">
                        {sdk.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                          {sdk.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {sdk.version} • {sdk.downloads} downloads
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {sdk.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {sdk.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        View Documentation
                      </span>
                      <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Developer Resources
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={resource.href}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/10 text-center">
                    <div className="flex justify-center mb-4 text-cyan-400">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {resource.description}
                    </p>
                  </div>
                </Link>
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
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start building with our AI consciousness and quantum computing platforms today. 
              Join thousands of developers already creating revolutionary applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get API Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a 
                href="https://github.com/Zion-Holdings"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                <Github className="w-5 h-5 inline mr-2" />
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}