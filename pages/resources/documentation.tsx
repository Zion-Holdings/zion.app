import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  BookOpen, FileText, Code, Database, Server, Shield,
  Brain, Atom, Rocket, Cloud, Cpu, Globe, ArrowRight,
  Download, ExternalLink, Search, Filter, Star, Clock,
  Users, Eye, Bookmark, Share2, MessageCircle
} from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const documentationCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Comprehensive guides for AI consciousness, neural networks, and machine learning systems',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      count: 25,
      featured: true,
      docs: [
        {
          title: 'AI Consciousness Evolution 2045 - User Guide',
          description: 'Complete guide to implementing and using our revolutionary AI consciousness platform',
          type: 'User Guide',
          difficulty: 'Intermediate',
          duration: '2-3 hours',
          lastUpdated: '2024-12-15',
          downloads: 1247,
          rating: 4.9,
          href: '/docs/ai-consciousness-evolution-2045-guide'
        },
        {
          title: 'Neural Network Architecture Deep Dive',
          description: 'Technical deep dive into our quantum neural network architecture and optimization',
          type: 'Technical Guide',
          difficulty: 'Advanced',
          duration: '4-5 hours',
          lastUpdated: '2024-12-10',
          downloads: 892,
          rating: 4.8,
          href: '/docs/neural-network-architecture'
        }
      ]
    },
    {
      title: 'Quantum Computing',
      description: 'Documentation for quantum computing platforms, algorithms, and applications',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      count: 18,
      featured: true,
      docs: [
        {
          title: 'Quantum Cybersecurity Implementation Guide',
          description: 'Step-by-step guide to implementing quantum-resistant security solutions',
          type: 'Implementation Guide',
          difficulty: 'Advanced',
          duration: '3-4 hours',
          lastUpdated: '2024-12-12',
          downloads: 756,
          rating: 4.7,
          href: '/docs/quantum-cybersecurity-implementation'
        }
      ]
    },
    {
      title: 'Space Technology',
      description: 'Guides for space resource intelligence, satellite technology, and orbital computing',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      count: 12,
      featured: false,
      docs: [
        {
          title: 'Space Resource Intelligence Platform Setup',
          description: 'Complete setup and configuration guide for our space resource intelligence platform',
          type: 'Setup Guide',
          difficulty: 'Intermediate',
          duration: '1-2 hours',
          lastUpdated: '2024-12-08',
          downloads: 445,
          rating: 4.6,
          href: '/docs/space-resource-intelligence-setup'
        }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Documentation for cloud platforms, deployment, and infrastructure management',
      icon: Cloud,
      color: 'from-emerald-500 to-teal-500',
      count: 32,
      featured: false,
      docs: [
        {
          title: 'Zero Trust Security Architecture Guide',
          description: 'Comprehensive guide to implementing zero trust security in cloud environments',
          type: 'Architecture Guide',
          difficulty: 'Advanced',
          duration: '3-4 hours',
          lastUpdated: '2024-12-14',
          downloads: 678,
          rating: 4.8,
          href: '/docs/zero-trust-security-architecture'
        }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation, SDKs, and integration guides',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      count: 45,
      featured: false,
      docs: [
        {
          title: 'REST API Reference v2.1',
          description: 'Complete REST API reference with examples, authentication, and error handling',
          type: 'API Reference',
          difficulty: 'Beginner',
          duration: '1 hour',
          lastUpdated: '2024-12-16',
          downloads: 2156,
          rating: 4.9,
          href: '/docs/api-reference-v2-1'
        }
      ]
    },
    {
      title: 'DevOps & Automation',
      description: 'Guides for CI/CD, automation, monitoring, and deployment strategies',
      icon: Server,
      color: 'from-yellow-500 to-orange-500',
      count: 28,
      featured: false,
      docs: [
        {
          title: 'Autonomous DevOps Platform Guide',
          description: 'Complete guide to using our autonomous DevOps platform for continuous deployment',
          type: 'Platform Guide',
          difficulty: 'Intermediate',
          duration: '2-3 hours',
          lastUpdated: '2024-12-11',
          downloads: 567,
          rating: 4.7,
          href: '/docs/autonomous-devops-platform'
        }
      ]
    }
  ];

  const quickStartGuides = [
    {
      title: 'Getting Started with Zion Tech Group',
      description: 'Quick start guide for new users',
      duration: '15 minutes',
      href: '/docs/quick-start'
    },
    {
      title: 'First AI Project Setup',
      description: 'Set up your first AI consciousness project',
      duration: '30 minutes',
      href: '/docs/first-ai-project'
    },
    {
      title: 'Quantum Security Basics',
      description: 'Introduction to quantum cybersecurity',
      duration: '45 minutes',
      href: '/docs/quantum-security-basics'
    }
  ];

  const searchFilters = [
    { label: 'All Types', value: 'all', count: 180 },
    { label: 'User Guides', value: 'user-guide', count: 45 },
    { label: 'Technical Guides', value: 'technical', count: 38 },
    { label: 'API Reference', value: 'api', count: 25 },
    { label: 'Setup Guides', value: 'setup', count: 32 },
    { label: 'Implementation', value: 'implementation', count: 28 },
    { label: 'Architecture', value: 'architecture', count: 16 }
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
                <BookOpen className="w-4 h-4 mr-2" />
                Technical Documentation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive guides, tutorials, and reference materials to help you master 
                our revolutionary technology solutions and achieve extraordinary results.
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
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Quick Start Guides</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                New to Zion Tech Group? Start here with these essential guides to get up and running quickly.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickStartGuides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                    <BookOpen className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{guide.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.duration}</span>
                    <Link
                      href={guide.href}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Documentation Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation organized by technology area and expertise level.
              </p>
            </motion.div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {searchFilters.map((filter, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    filter.value === 'all'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                  }`}
                >
                  {filter.label}
                  <span className="ml-2 text-sm opacity-75">({filter.count})</span>
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {documentationCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">{category.count} documents</span>
                          {category.featured && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="space-y-4">
                    {category.docs.map((doc, docIndex) => (
                      <div key={docIndex} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-medium">{doc.title}</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">{doc.rating}</span>
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">{doc.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-4">
                            <span>{doc.type}</span>
                            <span>{doc.difficulty}</span>
                            <span>{doc.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Download className="w-3 h-3" />
                            {doc.downloads}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <Link
                      href={`/resources/documentation/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      View All {category.title} Documentation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Our Documentation?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our documentation to be comprehensive, accessible, and always up-to-date.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  title: 'Always Current',
                  description: 'Updated regularly with the latest features and best practices'
                },
                {
                  icon: Users,
                  title: 'Community Driven',
                  description: 'Feedback and contributions from our global user community'
                },
                {
                  icon: Eye,
                  title: 'Visual Learning',
                  description: 'Rich diagrams, screenshots, and interactive examples'
                },
                {
                  icon: MessageCircle,
                  title: 'Expert Support',
                  description: 'Direct access to our technical team for complex questions'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Help with Documentation?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Can't find what you're looking for? Our technical team is here to help you 
                get the most out of our documentation and technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </Link>
                <Link
                  href="/resources/api"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Code className="w-5 h-5 mr-2" />
                  View API Docs
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocumentationPage;