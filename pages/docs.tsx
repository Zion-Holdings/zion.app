import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Code, Globe, Target, Star, ArrowRight,
  CheckCircle, Play, MessageCircle, Phone, Search,
  Building, Award, Zap, Shield, Brain, Rocket, Users
} from 'lucide-react';

const Documentation: React.FC = () => {
  const docCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'API Reference',
      description: 'Complete API documentation with examples and integration guides.',
      docs: [
        'Authentication & Authorization',
        'REST API Endpoints',
        'GraphQL Schema',
        'Webhook Integration',
        'Rate Limiting'
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI & Machine Learning',
      description: 'Comprehensive guides for AI model integration and customization.',
      docs: [
        'Model Training Guide',
        'API Integration',
        'Custom Model Development',
        'Performance Optimization',
        'Ethics & Compliance'
      ]
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Space Technology',
      description: 'Documentation for satellite data and space technology platforms.',
      docs: [
        'Data Access APIs',
        'Satellite Integration',
        'Geospatial Analysis',
        'Real-time Monitoring',
        'Data Processing'
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'Security best practices and compliance documentation.',
      docs: [
        'Security Architecture',
        'Data Protection',
        'Compliance Standards',
        'Audit Procedures',
        'Incident Response'
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Blockchain & Web3',
      description: 'Blockchain integration and smart contract development guides.',
      docs: [
        'Smart Contract Development',
        'Blockchain Integration',
        'DeFi Protocols',
        'NFT Standards',
        'Governance Systems'
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Edge Computing',
      description: 'Edge computing deployment and optimization guides.',
      docs: [
        'Edge Node Setup',
        'Load Balancing',
        'Performance Tuning',
        'Monitoring & Alerting',
        'Security Configuration'
      ]
    }
  ];

  const quickStartGuides = [
    {
      title: 'Getting Started with AI Services',
      description: 'Quick setup guide for integrating our AI services into your applications.',
      time: '15 min',
      difficulty: 'Beginner'
    },
    {
      title: 'Quantum Computing Basics',
      description: 'Introduction to quantum computing concepts and our platform.',
      time: '30 min',
      difficulty: 'Intermediate'
    },
    {
      title: 'Space Data Integration',
      description: 'Step-by-step guide to accessing and processing satellite data.',
      time: '20 min',
      difficulty: 'Beginner'
    },
    {
      title: 'Blockchain Development',
      description: 'Build your first decentralized application with our tools.',
      time: '45 min',
      difficulty: 'Intermediate'
    }
  ];

  const supportResources = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Community Forum',
      description: 'Connect with developers and get help from the community.',
      link: '/community'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Technical Support',
      description: 'Get direct support from our technical experts.',
      link: '/support'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Knowledge Base',
      description: 'Searchable database of common questions and solutions.',
      link: '/knowledge-base'
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for complex integrations.',
      link: '/tutorials'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Technical Documentation
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Developer Documentation
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive technical documentation, API references, and integration guides 
                to help you build with Zion Tech Group's cutting-edge technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="relative max-w-md mx-auto sm:mx-0">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                  Search
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Tutorials
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Guides Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Start Guides
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Get up and running quickly with our step-by-step guides
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {quickStartGuides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-400">⏱ {guide.time}</span>
                      <span className="text-gray-400">📊 {guide.difficulty}</span>
                    </div>
                    <button className="px-4 py-2 border border-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                      Start Guide
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Explore comprehensive documentation for all our technology platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {category.docs.slice(0, 3).map((doc, docIndex) => (
                      <li key={docIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                    View Documentation
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Resources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Help?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Get support and connect with our developer community
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {resource.description}
                  </p>
                  <button className="px-4 py-2 border border-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                    Access Resource
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start integrating our technologies into your applications today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Get Started Now
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Contact Developer Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Documentation;