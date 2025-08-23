import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  Database, 
  Shield, 
  Cloud, 
  Brain, 
  Atom,
  Rocket,
  Search,
  Download,
  ExternalLink,
  ChevronRight,
  FileText,
  Video,
  Users,
  Globe,
  Zap,
  Lightbulb,
  Star,
  ArrowRight
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: BookOpen },
    { id: 'api', label: 'API Reference', icon: Code },
    { id: 'ai', label: 'AI & ML', icon: Brain },
    { id: 'quantum', label: 'Quantum', icon: Atom },
    { id: 'space', label: 'Space Tech', icon: Rocket },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'data', label: 'Data', icon: Database }
  ];

  const documentation = [
    {
      title: 'Getting Started Guide',
      description: 'Complete setup and configuration guide for Zion Tech Group services',
      category: 'all',
      icon: BookOpen,
      difficulty: 'Beginner',
      time: '15 min read',
      link: '/docs/getting-started',
      featured: true
    },
    {
      title: 'API Authentication',
      description: 'Learn how to authenticate and authorize API requests',
      category: 'api',
      icon: Code,
      difficulty: 'Intermediate',
      time: '10 min read',
      link: '/docs/api/auth'
    },
    {
      title: 'AI Model Integration',
      description: 'Integrate our AI models into your applications',
      category: 'ai',
      icon: Brain,
      difficulty: 'Advanced',
      time: '25 min read',
      link: '/docs/ai/integration'
    },
    {
      title: 'Quantum Computing Basics',
      description: 'Introduction to quantum computing concepts and our platform',
      category: 'quantum',
      icon: Atom,
      difficulty: 'Intermediate',
      time: '20 min read',
      link: '/docs/quantum/basics'
    },
    {
      title: 'Space Data APIs',
      description: 'Access satellite data and space intelligence through our APIs',
      category: 'space',
      icon: Rocket,
      difficulty: 'Intermediate',
      time: '18 min read',
      link: '/docs/space/apis'
    },
    {
      title: 'Security Best Practices',
      description: 'Security guidelines and best practices for our services',
      category: 'security',
      icon: Shield,
      difficulty: 'Intermediate',
      time: '12 min read',
      link: '/docs/security/best-practices'
    },
    {
      title: 'Cloud Deployment',
      description: 'Deploy and manage applications on our cloud infrastructure',
      category: 'cloud',
      icon: Cloud,
      difficulty: 'Advanced',
      time: '30 min read',
      link: '/docs/cloud/deployment'
    },
    {
      title: 'Data Pipeline Setup',
      description: 'Set up data pipelines and analytics workflows',
      category: 'data',
      icon: Database,
      difficulty: 'Advanced',
      time: '22 min read',
      link: '/docs/data/pipelines'
    }
  ];

  const quickStartGuides = [
    {
      title: 'AI Chatbot Setup',
      description: 'Build and deploy an AI chatbot in 10 minutes',
      icon: Brain,
      time: '10 min',
      link: '/docs/quickstart/ai-chatbot'
    },
    {
      title: 'Quantum Algorithm',
      description: 'Run your first quantum algorithm on our platform',
      icon: Atom,
      time: '15 min',
      link: '/docs/quickstart/quantum-algorithm'
    },
    {
      title: 'Space Data Analysis',
      description: 'Analyze satellite data with our tools',
      icon: Rocket,
      time: '12 min',
      link: '/docs/quickstart/space-data'
    },
    {
      title: 'API Integration',
      description: 'Integrate our APIs into your application',
      icon: Code,
      time: '8 min',
      link: '/docs/quickstart/api-integration'
    }
  ];

  const apiReferences = [
    {
      name: 'Core API',
      version: 'v2.1',
      description: 'Main API for all Zion Tech Group services',
      endpoints: 150,
      link: '/docs/api/core'
    },
    {
      name: 'AI Services API',
      version: 'v1.8',
      description: 'API for AI and machine learning services',
      endpoints: 75,
      link: '/docs/api/ai'
    },
    {
      name: 'Quantum API',
      version: 'v1.2',
      description: 'API for quantum computing services',
      endpoints: 45,
      link: '/docs/api/quantum'
    },
    {
      name: 'Space Tech API',
      version: 'v1.5',
      description: 'API for space technology and satellite data',
      endpoints: 60,
      link: '/docs/api/space'
    }
  ];

  const filteredDocs = documentation.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Documentation
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Comprehensive guides, API references, and developer resources to help you 
                build amazing applications with Zion Tech Group services.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Guides */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Quick Start Guides
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running quickly with our step-by-step guides for common use cases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quickStartGuides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <guide.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">{guide.time}</span>
                    <a
                      href={guide.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Documentation */}
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Complete Documentation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation library organized by category and difficulty level.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDocs.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border transition-all duration-300 hover:border-cyan-500/50 group ${
                    doc.featured ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' : 'border-gray-700/50'
                  }`}
                >
                  {doc.featured && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-medium mb-4">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
                  
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <doc.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{doc.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{doc.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      doc.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      doc.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {doc.difficulty}
                    </span>
                    <span className="text-gray-400 text-sm">{doc.time}</span>
                  </div>
                  
                  <a
                    href={doc.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Read Guide
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API References */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                API References
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive API documentation with examples, endpoints, and integration guides.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {apiReferences.map((api, index) => (
                <motion.div
                  key={api.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white">{api.name}</h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                      {api.version}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{api.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400 text-sm">
                      {api.endpoints} endpoints available
                    </span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={api.link}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                    >
                      View API Docs
                    </a>
                    <a
                      href={`${api.link}/examples`}
                      className="px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      Examples
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Developer Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Additional resources to help you build and deploy applications successfully.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">SDKs & Libraries</h3>
                <p className="text-gray-300 mb-6">
                  Official SDKs for Python, JavaScript, Java, and more to accelerate your development.
                </p>
                <a
                  href="/docs/sdks"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Explore SDKs
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Video Tutorials</h3>
                <p className="text-gray-300 mb-6">
                  Step-by-step video guides covering common use cases and advanced features.
                </p>
                <a
                  href="/docs/tutorials"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Watch Tutorials
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
                <p className="text-gray-300 mb-6">
                  Join our developer community for support, discussions, and collaboration.
                </p>
                <a
                  href="/community"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Join Community
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Need Help Getting Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our developer support team is here to help you succeed with our platform. 
                Get in touch for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/docs/getting-started"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View Getting Started
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