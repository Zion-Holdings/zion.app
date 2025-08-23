import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Calendar, User, Tag, ArrowRight,
  Search, Filter, TrendingUp, Lightbulb, Zap,
  Brain, Rocket, Shield, Globe, ChevronRight,
  CheckCircle, Star, Award, Target, Users,
  Code, FileText, Download, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const DocsPage: React.FC = () => {
  const quickStartGuides = [
    {
      title: 'Getting Started with AI Solutions',
      description: 'Quick setup guide for implementing AI and machine learning solutions',
      icon: <Brain className="w-6 h-6" />,
      category: 'AI & Machine Learning',
      difficulty: 'Beginner',
      timeToComplete: '15 min',
      link: '/docs/ai-getting-started'
    },
    {
      title: 'Quantum Computing Basics',
      description: 'Introduction to quantum computing concepts and implementation',
      icon: <Zap className="w-6 h-6" />,
      category: 'Quantum Computing',
      difficulty: 'Intermediate',
      timeToComplete: '30 min',
      link: '/docs/quantum-basics'
    },
    {
      title: 'Space Technology Integration',
      description: 'Guide to integrating space technology solutions',
      icon: <Rocket className="w-6 h-6" />,
      category: 'Space Technology',
      difficulty: 'Advanced',
      timeToComplete: '45 min',
      link: '/docs/space-tech-integration'
    },
    {
      title: 'Cybersecurity Implementation',
      description: 'Step-by-step security implementation guide',
      icon: <Shield className="w-6 h-6" />,
      category: 'Cybersecurity',
      difficulty: 'Intermediate',
      timeToComplete: '25 min',
      link: '/docs/cybersecurity-implementation'
    }
  ];

  const apiDocumentation = [
    {
      title: 'AI API Reference',
      description: 'Complete API documentation for AI and machine learning services',
      version: 'v2.1.0',
      lastUpdated: '2025-01-15',
      endpoints: 45,
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Quantum Computing API',
      description: 'API reference for quantum computing services and algorithms',
      version: 'v1.8.0',
      lastUpdated: '2025-01-10',
      endpoints: 28,
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Space Technology API',
      description: 'API documentation for space technology and satellite services',
      version: 'v1.5.0',
      lastUpdated: '2025-01-05',
      endpoints: 32,
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Security & Compliance API',
      description: 'API reference for security and compliance services',
      version: 'v2.0.0',
      lastUpdated: '2025-01-12',
      endpoints: 38,
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const tutorials = [
    {
      title: 'Building Your First AI Model',
      description: 'Learn to create and deploy machine learning models',
      duration: '2 hours',
      level: 'Beginner',
      category: 'AI & Machine Learning',
      tags: ['Python', 'TensorFlow', 'Machine Learning'],
      link: '/docs/tutorials/first-ai-model'
    },
    {
      title: 'Quantum Algorithm Implementation',
      description: 'Implement quantum algorithms using our platform',
      duration: '3 hours',
      level: 'Advanced',
      category: 'Quantum Computing',
      tags: ['Qiskit', 'Quantum Algorithms', 'Python'],
      link: '/docs/tutorials/quantum-algorithms'
    },
    {
      title: 'Satellite Data Processing',
      description: 'Process and analyze satellite data for insights',
      duration: '1.5 hours',
      level: 'Intermediate',
      category: 'Space Technology',
      tags: ['Python', 'Satellite Data', 'Data Analysis'],
      link: '/docs/tutorials/satellite-data'
    },
    {
      title: 'Zero Trust Security Setup',
      description: 'Implement zero trust security architecture',
      duration: '2.5 hours',
      level: 'Intermediate',
      category: 'Cybersecurity',
      tags: ['Security', 'Zero Trust', 'Architecture'],
      link: '/docs/tutorials/zero-trust-security'
    }
  ];

  const categories = [
    { name: 'AI & Machine Learning', count: 25, icon: <Brain className="w-5 h-5" /> },
    { name: 'Quantum Computing', count: 18, icon: <Zap className="w-5 h-5" /> },
    { name: 'Space Technology', count: 15, icon: <Rocket className="w-5 h-5" /> },
    { name: 'Cybersecurity', count: 22, icon: <Shield className="w-5 h-5" /> },
    { name: 'Enterprise IT', count: 30, icon: <Globe className="w-5 h-5" /> },
    { name: 'Micro SAAS', count: 12, icon: <Lightbulb className="w-5 h-5" /> }
  ];

  const resources = [
    {
      title: 'Developer SDKs',
      description: 'Download SDKs for various programming languages',
      icon: <Download className="w-6 h-6" />,
      items: ['Python SDK', 'JavaScript SDK', 'Java SDK', 'Go SDK']
    },
    {
      title: 'Code Examples',
      description: 'Ready-to-use code examples and snippets',
      icon: <Code className="w-6 h-6" />,
      items: ['Python Examples', 'JavaScript Examples', 'API Examples', 'Integration Examples']
    },
    {
      title: 'White Papers',
      description: 'In-depth technical documentation and research',
      icon: <FileText className="w-6 h-6" />,
      items: ['AI Research Papers', 'Quantum Computing Papers', 'Security Papers', 'Technology Papers']
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and demonstrations',
      icon: <ExternalLink className="w-6 h-6" />,
      items: ['Getting Started Videos', 'Advanced Tutorials', 'Case Study Videos', 'Expert Interviews']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600/20 rounded-full">
                  <BookOpen className="w-16 h-16 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Developer <span className="text-blue-400">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive guides, API references, and tutorials to help you build 
                with Zion Tech Group's cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full sm:w-80"
                  />
                </div>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Guides */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Quick Start Guides</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running quickly with our step-by-step guides
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStartGuides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center mb-4 text-blue-400">
                    {guide.icon}
                    <span className="ml-2 text-sm font-medium text-gray-400">{guide.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{guide.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>Difficulty: {guide.difficulty}</span>
                    <span>{guide.timeToComplete}</span>
                  </div>
                  <Link 
                    href={guide.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Documentation */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">API Documentation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive API references for all our services and platforms
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {apiDocumentation.map((api, index) => (
                <motion.div
                  key={api.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-blue-400 mr-3">{api.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{api.title}</h3>
                      <p className="text-sm text-gray-400">v{api.version}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{api.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Last updated: {api.lastUpdated}</span>
                    <span>{api.endpoints} endpoints</span>
                  </div>
                  <Link 
                    href={`/docs/api/${api.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
                  >
                    View API Docs
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {/* Categories */}
                  <div className="bg-gray-900/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Documentation Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <Link
                          key={category.name}
                          href={`/docs?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center justify-between text-gray-300 hover:text-white transition-colors"
                        >
                          <div className="flex items-center">
                            <span className="text-blue-400 mr-2">{category.icon}</span>
                            {category.name}
                          </div>
                          <span className="text-sm text-gray-500">({category.count})</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Resources */}
                  <div className="bg-gray-900/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Additional Resources</h3>
                    <div className="space-y-3">
                      {resources.map((resource, index) => (
                        <div key={resource.title} className="mb-4">
                          <div className="flex items-center text-blue-400 mb-2">
                            {resource.icon}
                            <span className="ml-2 text-sm font-medium text-white">{resource.title}</span>
                          </div>
                          <div className="space-y-1">
                            {resource.items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                href={`/docs/resources/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block text-xs text-gray-400 hover:text-blue-400 transition-colors"
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Support */}
                  <div className="bg-blue-600/20 rounded-lg p-6 border border-blue-500/30">
                    <h3 className="text-lg font-semibold text-white mb-3">Need Help?</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Can't find what you're looking for? Our team is here to help.
                    </p>
                    <Link 
                      href="/contact"
                      className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors inline-block text-center"
                    >
                      Contact Support
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Tutorials */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold text-white mb-6">Tutorials & Examples</h2>
                </motion.div>
                
                <div className="space-y-6">
                  {tutorials.map((tutorial, index) => (
                    <motion.article
                      key={tutorial.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{tutorial.title}</h3>
                          <p className="text-gray-300 mb-3">{tutorial.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                            <span>Duration: {tutorial.duration}</span>
                            <span>Level: {tutorial.level}</span>
                            <span>Category: {tutorial.category}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {tutorial.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Link 
                          href={tutorial.link}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
                        >
                          Start Tutorial
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Load More */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mt-12"
                >
                  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                    Load More Tutorials
                  </button>
                </motion.div>
              </div>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start building with our technology solutions today. Our documentation 
                and support team are here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Started
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocsPage;