import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Database, Shield, Cloud, Brain, ArrowRight, Search, Download, Bookmark } from 'lucide-react';
import Link from 'next/link';
import Button from '../components/ui/Button';

export default function Documentation() {
  const docCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and basic setup instructions',
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
      color: 'from-cyan-500 to-blue-600',
      docs: [
        { title: 'Installation Guide', href: '/docs/installation', difficulty: 'Beginner' },
        { title: 'Quick Start Tutorial', href: '/docs/quickstart', difficulty: 'Beginner' },
        { title: 'Configuration Basics', href: '/docs/configuration', difficulty: 'Beginner' },
        { title: 'First Project Setup', href: '/docs/first-project', difficulty: 'Beginner' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      description: 'AI platform documentation and API references',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      color: 'from-purple-500 to-pink-600',
      docs: [
        { title: 'AI Model Integration', href: '/docs/ai-integration', difficulty: 'Intermediate' },
        { title: 'Machine Learning APIs', href: '/docs/ml-apis', difficulty: 'Advanced' },
        { title: 'AI Training Workflows', href: '/docs/ai-training', difficulty: 'Advanced' },
        { title: 'Model Deployment Guide', href: '/docs/model-deployment', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'Quantum Computing',
      description: 'Quantum computing platform documentation',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      color: 'from-green-500 to-emerald-600',
      docs: [
        { title: 'Quantum Circuit Design', href: '/docs/quantum-circuits', difficulty: 'Advanced' },
        { title: 'Quantum Algorithms', href: '/docs/quantum-algorithms', difficulty: 'Advanced' },
        { title: 'Quantum Simulator API', href: '/docs/quantum-simulator', difficulty: 'Intermediate' },
        { title: 'Quantum Error Correction', href: '/docs/quantum-error-correction', difficulty: 'Expert' }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Cloud deployment and infrastructure guides',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      color: 'from-blue-500 to-indigo-600',
      docs: [
        { title: 'Cloud Deployment', href: '/docs/cloud-deployment', difficulty: 'Intermediate' },
        { title: 'Infrastructure as Code', href: '/docs/infrastructure-as-code', difficulty: 'Intermediate' },
        { title: 'Scaling Strategies', href: '/docs/scaling', difficulty: 'Advanced' },
        { title: 'Monitoring & Logging', href: '/docs/monitoring', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: <Code className="w-8 h-8 text-orange-400" />,
      color: 'from-orange-500 to-red-600',
      docs: [
        { title: 'REST API Reference', href: '/docs/rest-api', difficulty: 'Intermediate' },
        { title: 'GraphQL API', href: '/docs/graphql-api', difficulty: 'Intermediate' },
        { title: 'WebSocket APIs', href: '/docs/websocket-apis', difficulty: 'Advanced' },
        { title: 'SDK Documentation', href: '/docs/sdk', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'Database & Storage',
      description: 'Database setup and data management guides',
      icon: <Database className="w-8 h-8 text-yellow-400" />,
      color: 'from-yellow-500 to-amber-600',
      docs: [
        { title: 'Database Setup', href: '/docs/database-setup', difficulty: 'Intermediate' },
        { title: 'Data Migration', href: '/docs/data-migration', difficulty: 'Advanced' },
        { title: 'Backup & Recovery', href: '/docs/backup-recovery', difficulty: 'Intermediate' },
        { title: 'Performance Optimization', href: '/docs/db-performance', difficulty: 'Advanced' }
      ]
    }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', href: '/docs/quickstart', views: '15.2k' },
    { title: 'API Authentication', href: '/docs/auth', views: '12.8k' },
    { title: 'Deployment Checklist', href: '/docs/deployment-checklist', views: '10.5k' },
    { title: 'Troubleshooting Guide', href: '/docs/troubleshooting', views: '9.3k' },
    { title: 'Security Best Practices', href: '/docs/security', views: '8.7k' },
    { title: 'Performance Tuning', href: '/docs/performance', views: '7.9k' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <BookOpen className="w-16 h-16 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive guides, tutorials, and API references to help you build with our technology
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-12 py-4 bg-gray-900/50 border border-gray-800 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/docs/quickstart" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 text-lg">
                Get Started
              </Button>
              <Button href="/docs/api" variant="outline" className="border-blue-500 text-blue-400 px-8 py-4 text-lg">
                View API Docs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Popular Documentation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Most viewed guides and tutorials to help you get started quickly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDocs.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <Bookmark className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-gray-400">{doc.views} views</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{doc.title}</h3>
                <Link 
                  href={doc.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  Read Guide <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Organized documentation to help you find exactly what you need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-400 mb-6">{category.description}</p>
                
                <div className="space-y-3 mb-6">
                  {category.docs.map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <Link 
                        href={doc.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {doc.title}
                      </Link>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        doc.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        doc.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        doc.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {doc.difficulty}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  href={`/docs/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`w-full bg-gradient-to-r ${category.color} text-white`}
                >
                  View All {category.title} Docs
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Extra tools and resources to enhance your development experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl"
            >
              <Download className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">SDK Downloads</h3>
              <p className="text-gray-400 text-sm mb-4">Get the latest SDKs and tools</p>
              <Button href="/downloads" variant="outline" className="border-blue-500 text-blue-400">
                Download SDKs
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl"
            >
              <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Code Examples</h3>
              <p className="text-gray-400 text-sm mb-4">Ready-to-use code samples</p>
              <Button href="/examples" variant="outline" className="border-purple-500 text-purple-400">
                View Examples
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl"
            >
              <BookOpen className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Tutorials</h3>
              <p className="text-gray-400 text-sm mb-4">Step-by-step learning guides</p>
              <Button href="/tutorials" variant="outline" className="border-green-500 text-green-400">
                Start Learning
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl"
            >
              <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Security Guide</h3>
              <p className="text-gray-400 text-sm mb-4">Security best practices</p>
              <Button href="/docs/security" variant="outline" className="border-orange-500 text-orange-400">
                Security Guide
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Help with Documentation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our technical team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 text-lg">
                Contact Support
              </Button>
              <Button href="/support" variant="outline" className="border-blue-500 text-blue-400 px-8 py-4 text-lg">
                Get Help
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}