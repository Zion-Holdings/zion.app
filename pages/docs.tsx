import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Code, 
  Database, 
  Shield, 
  Cloud, 
  Brain, 
  Atom,
  Rocket,
  Users,
  Search,
  Download,
  ExternalLink,
  ChevronRight,
  Star,
  Clock,
  Tag
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const DocsPage: React.FC = () => {
  const documentationCategories = [
    {
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      description: 'Quick start guides and tutorials for new users',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', difficulty: 'Beginner', time: '5 min' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', difficulty: 'Beginner', time: '15 min' },
        { title: 'First Project', description: 'Build your first project with Zion Tech', difficulty: 'Beginner', time: '30 min' },
        { title: 'Best Practices', description: 'Recommended development practices', difficulty: 'Intermediate', time: '20 min' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Documentation for AI and machine learning services',
      docs: [
        { title: 'AI Model Development', description: 'Build and deploy AI models', difficulty: 'Advanced', time: '45 min' },
        { title: 'Machine Learning APIs', description: 'Integrate ML services into your apps', difficulty: 'Intermediate', time: '25 min' },
        { title: 'Natural Language Processing', description: 'Text analysis and language understanding', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Computer Vision', description: 'Image and video analysis services', difficulty: 'Intermediate', time: '35 min' }
      ]
    },
    {
      title: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      description: 'Quantum computing services and algorithms',
      docs: [
        { title: 'Quantum Basics', description: 'Introduction to quantum computing', difficulty: 'Intermediate', time: '40 min' },
        { title: 'Quantum Algorithms', description: 'Implement quantum algorithms', difficulty: 'Advanced', time: '60 min' },
        { title: 'Quantum APIs', description: 'Access quantum computing resources', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Quantum Security', description: 'Quantum-resistant cryptography', difficulty: 'Advanced', time: '50 min' }
      ]
    },
    {
      title: 'Space Technology',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      description: 'Space-based computing and satellite technology',
      docs: [
        { title: 'Satellite APIs', description: 'Access satellite data and services', difficulty: 'Intermediate', time: '25 min' },
        { title: 'Space Computing', description: 'Deploy applications in space', difficulty: 'Advanced', time: '45 min' },
        { title: 'Orbital Infrastructure', description: 'Space-based computing platforms', difficulty: 'Advanced', time: '55 min' },
        { title: 'Space Security', description: 'Secure space-based communications', difficulty: 'Advanced', time: '40 min' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      description: 'Security services and best practices',
      docs: [
        { title: 'Security Fundamentals', description: 'Core security concepts and practices', difficulty: 'Beginner', time: '30 min' },
        { title: 'Zero Trust Architecture', description: 'Implement zero trust security', difficulty: 'Advanced', time: '50 min' },
        { title: 'Threat Detection', description: 'AI-powered threat detection systems', difficulty: 'Intermediate', time: '35 min' },
        { title: 'Compliance Guide', description: 'Meet regulatory requirements', difficulty: 'Intermediate', time: '40 min' }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      description: 'Cloud computing and infrastructure services',
      docs: [
        { title: 'Cloud Deployment', description: 'Deploy applications to the cloud', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Container Orchestration', description: 'Manage containers with Kubernetes', difficulty: 'Advanced', time: '45 min' },
        { title: 'Serverless Computing', description: 'Build serverless applications', difficulty: 'Intermediate', time: '35 min' },
        { title: 'Multi-Cloud Strategy', description: 'Implement multi-cloud solutions', difficulty: 'Advanced', time: '50 min' }
      ]
    }
  ];

  const apiReference = [
    {
      name: 'REST API',
      description: 'RESTful API endpoints for all services',
      version: 'v2.1',
      status: 'Stable',
      docs: '/api/rest'
    },
    {
      name: 'GraphQL API',
      description: 'Flexible GraphQL API for complex queries',
      version: 'v1.8',
      status: 'Beta',
      docs: '/api/graphql'
    },
    {
      name: 'WebSocket API',
      description: 'Real-time communication and streaming',
      version: 'v1.5',
      status: 'Stable',
      docs: '/api/websocket'
    },
    {
      name: 'SDK Libraries',
      description: 'Client libraries for popular languages',
      version: 'v2.0',
      status: 'Stable',
      docs: '/api/sdk'
    }
  ];

  const tutorials = [
    {
      title: 'Building an AI-Powered Chatbot',
      description: 'Learn to create intelligent chatbots using our AI services',
      difficulty: 'Intermediate',
      time: '2 hours',
      tags: ['AI', 'NLP', 'Chatbot'],
      featured: true
    },
    {
      title: 'Quantum Computing for Beginners',
      description: 'Introduction to quantum computing concepts and applications',
      difficulty: 'Beginner',
      time: '3 hours',
      tags: ['Quantum', 'Basics', 'Tutorial'],
      featured: true
    },
    {
      title: 'Secure API Development',
      description: 'Build secure APIs with authentication and authorization',
      difficulty: 'Intermediate',
      time: '1.5 hours',
      tags: ['Security', 'API', 'Authentication'],
      featured: false
    },
    {
      title: 'Space-Based Computing',
      description: 'Deploy applications in space using our orbital infrastructure',
      difficulty: 'Advanced',
      time: '4 hours',
      tags: ['Space', 'Computing', 'Advanced'],
      featured: false
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Technical Documentation - Zion Tech Group"
        description="Comprehensive technical documentation, API references, and tutorials for Zion Tech Group's cutting-edge technology services."
        keywords={["technical documentation", "API reference", "tutorials", "developer guides", "Zion Tech Group"]}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-6">
                Technical Documentation
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Comprehensive guides, API references, and tutorials to help you build 
                with Zion Tech Group's cutting-edge technology services.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive documentation organized by technology area and complexity level.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {documentationCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Documentation List */}
                    <div className="space-y-4">
                      {category.docs.map((doc, docIndex) => (
                        <div key={docIndex} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">{doc.title}</h4>
                            <p className="text-sm text-gray-400">{doc.description}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                doc.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                doc.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {doc.difficulty}
                              </span>
                              <span className="flex items-center text-xs text-gray-400">
                                <Clock className="w-3 h-3 mr-1" />
                                {doc.time}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                API Reference
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive API documentation for integrating with our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {apiReference.map((api, index) => (
                <motion.div
                  key={api.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{api.name}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        api.status === 'Stable' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {api.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{api.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">v{api.version}</span>
                      <a
                        href={api.docs}
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center group-hover:underline"
                      >
                        View Docs
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Tutorials
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Step-by-step guides to help you build amazing applications with our technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tutorials.map((tutorial, index) => (
                <motion.div
                  key={tutorial.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="group relative"
                >
                  <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 ${
                    tutorial.featured ? 'ring-2 ring-blue-400/30' : ''
                  }`}>
                    {tutorial.featured && (
                      <div className="absolute -top-3 left-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 text-sm rounded-full ${
                          tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {tutorial.difficulty}
                        </span>
                        <span className="flex items-center text-sm text-gray-400">
                          <Clock className="w-4 h-4 mr-2" />
                          {tutorial.time}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tutorial.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                    >
                      Start Tutorial
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Need Help Getting Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Our developer support team is here to help you succeed with our technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="/blog"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  Read Our Blog
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