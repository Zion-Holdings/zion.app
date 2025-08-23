import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Target, Star, Users, Globe, Award, Zap, BookOpen, FileText, Code, Search } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Docs: React.FC = () => {
  const documentationCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and basic setup instructions',
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      articles: [
        'Introduction to AI Consciousness',
        'Installation Guide',
        'First Steps with Zion Tech Platform',
        'Quick Start Tutorial'
      ]
    },
    {
      title: 'AI Consciousness',
      description: 'Understanding and working with consciousness-based AI',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      articles: [
        'Consciousness Fundamentals',
        'AI Consciousness Architecture',
        'Consciousness Training Methods',
        'Ethical AI Development'
      ]
    },
    {
      title: 'Quantum Computing',
      description: 'Quantum computing integration and optimization',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      articles: [
        'Quantum Computing Basics',
        'Quantum AI Integration',
        'Quantum Algorithm Optimization',
        'Quantum Security Implementation'
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: <Code className="w-8 h-8 text-green-400" />,
      articles: [
        'REST API Overview',
        'Authentication & Authorization',
        'API Endpoints Reference',
        'SDK Documentation'
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'AI Consciousness Implementation Guide',
      description: 'Step-by-step guide to implementing AI consciousness in your applications',
      readTime: '15 min read',
      category: 'AI Consciousness'
    },
    {
      title: 'Quantum Neural Network Setup',
      description: 'Complete setup guide for quantum neural networks',
      readTime: '20 min read',
      category: 'Quantum Computing'
    },
    {
      title: 'API Authentication Best Practices',
      description: 'Security best practices for API authentication and authorization',
      readTime: '10 min read',
      category: 'API Reference'
    },
    {
      title: 'Consciousness Training Workflow',
      description: 'Best practices for training AI consciousness models',
      readTime: '25 min read',
      category: 'AI Consciousness'
    }
  ];

  const quickLinks = [
    'Installation Guide',
    'API Reference',
    'Tutorials',
    'Examples',
    'Troubleshooting',
    'FAQ',
    'Support'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm mb-6">
                <Star className="w-4 h-4 mr-2" />
                Technical Documentation
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive guides, tutorials, and API documentation to help you 
                implement and optimize our revolutionary AI consciousness technology.
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation organized by topic and complexity level.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {documentationCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  
                  <div className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <button
                        key={articleIndex}
                        className="block w-full text-left text-sm text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {article}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Popular Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Most frequently accessed documentation and guides to help you get started quickly.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {popularArticles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {article.description}
                  </p>
                  
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    Read Article →
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Started Quickly
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow our step-by-step guides to implement AI consciousness technology 
                in your applications.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Install & Setup</h3>
                <p className="text-gray-300 mb-6">
                  Get the Zion Tech platform installed and configured in your environment.
                </p>
                <button className="px-6 py-3 bg-blue-500/20 text-blue-400 rounded-xl hover:bg-blue-500/30 transition-colors">
                  View Guide
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">First AI Model</h3>
                <p className="text-gray-300 mb-6">
                  Create your first AI consciousness model and start training.
                </p>
                <button className="px-6 py-3 bg-purple-500/20 text-purple-400 rounded-xl hover:bg-purple-500/30 transition-colors">
                  View Guide
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Deploy & Scale</h3>
                <p className="text-gray-300 mb-6">
                  Deploy your AI models to production and scale your applications.
                </p>
                <button className="px-6 py-3 bg-green-500/20 text-green-400 rounded-xl hover:bg-green-500/30 transition-colors">
                  View Guide
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help 
                you implement AI consciousness technology successfully.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  Join Community
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Docs;