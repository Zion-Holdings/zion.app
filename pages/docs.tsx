import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  FileText, Brain, Rocket, Shield, Zap, Target, Atom, 
  Lock, Cloud, Settings, Eye, Award, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Download, BookOpen
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const docCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      description: 'Quick start guides and basic setup instructions',
      count: '10+ guides',
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 'api-reference',
      name: 'API Reference',
      description: 'Complete API documentation and endpoints',
      count: '50+ endpoints',
      icon: <Code className="w-8 h-8" />
    },
    {
      id: 'sdk-libraries',
      name: 'SDKs & Libraries',
      description: 'Client libraries and development tools',
      count: '8+ languages',
      icon: <Download className="w-8 h-8" />
    },
    {
      id: 'tutorials',
      name: 'Tutorials',
      description: 'Step-by-step implementation guides',
      count: '25+ tutorials',
      icon: <BookOpenCheck className="w-8 h-8" />
    },
    {
      id: 'best-practices',
      name: 'Best Practices',
      description: 'Recommended implementation patterns',
      count: '15+ guides',
      icon: <Star className="w-8 h-8" />
    },
    {
      id: 'examples',
      name: 'Examples',
      description: 'Code examples and sample implementations',
      count: '30+ examples',
      icon: <FileText className="w-8 h-8" />
    }
  ];

  const featuredDocs = [
    {
      id: 'quick-start',
      title: 'Quick Start Guide',
      description: 'Get up and running with Zion Tech Group services in minutes',
      category: 'Getting Started',
      difficulty: 'Beginner',
      readTime: '5 min read',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      id: 'ai-api-basics',
      title: 'AI API Basics',
      description: 'Learn the fundamentals of our AI and machine learning APIs',
      category: 'API Reference',
      difficulty: 'Beginner',
      readTime: '10 min read',
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 'quantum-setup',
      title: 'Quantum Computing Setup',
      description: 'Set up your quantum computing environment and first quantum program',
      category: 'Tutorials',
      difficulty: 'Intermediate',
      readTime: '15 min read',
      icon: <Atom className="w-8 h-8" />
    }
  ];

  const popularDocs = [
    {
      id: 'authentication',
      title: 'Authentication & Security',
      description: 'Secure your API calls with proper authentication',
      category: 'Best Practices',
      difficulty: 'Intermediate'
    },
    {
      id: 'error-handling',
      title: 'Error Handling',
      description: 'Best practices for handling API errors and edge cases',
      category: 'Best Practices',
      difficulty: 'Intermediate'
    },
    {
      id: 'rate-limiting',
      title: 'Rate Limiting',
      description: 'Understanding and working with API rate limits',
      category: 'API Reference',
      difficulty: 'Beginner'
    },
    {
      id: 'webhooks',
      title: 'Webhooks',
      description: 'Set up and manage webhook notifications',
      category: 'Tutorials',
      difficulty: 'Intermediate'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation, API references, and guides for Zion Tech Group services."
        keywords="documentation, API reference, SDK, tutorials, best practices, getting started, developer guides"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive guides, API references, and tutorials to help you build with our technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#featured" 
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-teal-400 text-teal-400 font-semibold rounded-lg hover:bg-teal-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Get Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the documentation you need across different areas
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-teal-500/20 rounded-full mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-300 mb-4">{category.description}</p>
                    <div className="text-teal-400 font-semibold">{category.count}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Documentation */}
        <section id="featured" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Featured Documentation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start here with our most essential guides and tutorials
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDocs.map((doc, index) => (
                <motion.article
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex p-3 bg-teal-500/20 rounded-full">
                        {doc.icon}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        doc.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        doc.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {doc.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {doc.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {doc.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{doc.category}</span>
                      <span>{doc.readTime}</span>
                    </div>
                    <a 
                      href={`/docs/${doc.id}`}
                      className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      Read Guide
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Documentation */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Popular Documentation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Most frequently accessed guides and references
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularDocs.map((doc, index) => (
                <motion.article
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-teal-400 font-semibold">{doc.category}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      doc.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      doc.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {doc.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {doc.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {doc.description}
                  </p>
                  <a 
                    href={`/docs/${doc.id}`}
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.article>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Need More Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our developer support team is here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-teal-400 text-teal-400 font-semibold rounded-lg hover:bg-teal-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default DocsPage;