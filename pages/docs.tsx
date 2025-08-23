import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Code, 
  FileText, 
  Play, 
  Download,
  ArrowRight,
  ExternalLink,
  Github,
  Globe,
  Terminal,
  Database,
  Shield,
  Rocket,
  Brain,
  Atom,
  Cloud,
  Users,
  CheckCircle,
  Star,
  Clock
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 8 },
    { id: 'api', name: 'API Reference', count: 15 },
    { id: 'sdks', name: 'SDKs & Libraries', count: 6 },
    { id: 'tutorials', name: 'Tutorials', count: 12 },
    { id: 'examples', name: 'Code Examples', count: 4 }
  ];

  const documentation = [
    {
      id: 1,
      title: 'Quick Start Guide',
      category: 'getting-started',
      description: 'Get up and running with Zion Tech Group platforms in under 10 minutes.',
      difficulty: 'Beginner',
      readTime: '10 min',
      tags: ['Setup', 'Installation', 'First Steps'],
      featured: true,
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'AI Consciousness API Reference',
      category: 'api',
      description: 'Complete API documentation for our AI consciousness and neural network platforms.',
      difficulty: 'Advanced',
      readTime: '45 min',
      tags: ['API', 'AI', 'Neural Networks'],
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Quantum Computing SDK',
      category: 'sdks',
      description: 'Python and JavaScript SDKs for quantum computing operations and algorithms.',
      difficulty: 'Intermediate',
      readTime: '30 min',
      tags: ['SDK', 'Quantum', 'Python', 'JavaScript'],
      featured: false,
      icon: Atom,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Zero Trust Security Implementation',
      category: 'tutorials',
      description: 'Step-by-step guide to implementing zero-trust security architecture.',
      difficulty: 'Intermediate',
      readTime: '25 min',
      tags: ['Security', 'Zero Trust', 'Implementation'],
      featured: false,
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Setup',
      category: 'getting-started',
      description: 'Deploy and configure our cloud infrastructure solutions.',
      difficulty: 'Beginner',
      readTime: '20 min',
      tags: ['Cloud', 'Infrastructure', 'Deployment'],
      featured: false,
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Space Resource Intelligence API',
      category: 'api',
      description: 'API documentation for space resource intelligence and mining platforms.',
      difficulty: 'Advanced',
      readTime: '40 min',
      tags: ['API', 'Space', 'Resources', 'Mining'],
      featured: false,
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 7,
      title: 'Building AI Chatbots',
      category: 'tutorials',
      description: 'Create intelligent chatbots using our AI consciousness platform.',
      difficulty: 'Intermediate',
      readTime: '35 min',
      tags: ['AI', 'Chatbots', 'Tutorial'],
      featured: false,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 8,
      title: 'Quantum Neural Networks Guide',
      category: 'tutorials',
      description: 'Implement quantum neural networks for advanced machine learning.',
      difficulty: 'Advanced',
      readTime: '50 min',
      tags: ['Quantum', 'Neural Networks', 'ML'],
      featured: false,
      icon: Atom,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const filteredDocs = documentation.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const quickLinks = [
    {
      title: 'API Playground',
      description: 'Test our APIs in real-time',
      icon: Play,
      href: '/api-playground',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'GitHub Repositories',
      description: 'Open source code and examples',
      icon: Github,
      href: 'https://github.com/ziontechgroup',
      color: 'from-gray-700 to-gray-900'
    },
    {
      title: 'Community Forum',
      description: 'Get help from the community',
      icon: Users,
      href: '/community',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Support Center',
      description: 'Technical support and help',
      icon: CheckCircle,
      href: '/support',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'getting-started': return Rocket;
      case 'api': return Code;
      case 'sdks': return Download;
      case 'tutorials': return Play;
      case 'examples': return FileText;
      default: return BookOpen;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'from-green-500 to-emerald-500';
      case 'Intermediate': return 'from-yellow-500 to-orange-500';
      case 'Advanced': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Developer <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to build with our AI consciousness, quantum computing, 
                and autonomous systems platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Access
              </h2>
              <p className="text-lg text-gray-400">
                Essential tools and resources for developers
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {link.description}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <BookOpen className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Documentation */}
        {filteredDocs.filter(doc => doc.featured).length > 0 && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Featured Documentation
                </h2>
                <p className="text-lg text-gray-400">
                  Start here to get up and running quickly
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredDocs.filter(doc => doc.featured).map((doc, index) => {
                  const IconComponent = doc.icon;
                  return (
                    <motion.article
                      key={doc.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <div className="p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-400/30">
                            Featured
                          </span>
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                            {doc.category.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="flex items-start space-x-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${doc.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors duration-300">
                              {doc.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                              {doc.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{doc.readTime}</span>
                            </div>
                            <div className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(doc.difficulty)} text-white text-xs rounded-full`}>
                              {doc.difficulty}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {doc.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <a
                          href={`/docs/${doc.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold group"
                        >
                          Read Documentation
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* All Documentation */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Documentation
              </h2>
              <p className="text-lg text-gray-400">
                Comprehensive guides, tutorials, and references
              </p>
            </motion.div>

            {filteredDocs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDocs.filter(doc => !doc.featured).map((doc, index) => {
                  const IconComponent = doc.icon;
                  const CategoryIcon = getCategoryIcon(doc.category);
                  return (
                    <motion.article
                      key={doc.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full capitalize">
                            {doc.category.replace('-', ' ')}
                          </span>
                          <div className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(doc.difficulty)} text-white text-xs rounded-full`}>
                            {doc.difficulty}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${doc.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                              {doc.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 mb-4 line-clamp-3">
                          {doc.description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <CategoryIcon className="w-4 h-4" />
                            <span className="capitalize">{doc.category.replace('-', ' ')}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{doc.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {doc.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <a
                          href={`/docs/${doc.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No documentation found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or browse all categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Additional Resources
              </h2>
              <p className="text-lg text-gray-400">
                More tools and resources to help you succeed
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Video Tutorials',
                  description: 'Step-by-step video guides for complex topics',
                  icon: Play,
                  color: 'from-red-500 to-pink-500',
                  href: '/tutorials'
                },
                {
                  title: 'Sample Projects',
                  description: 'Complete, working examples to learn from',
                  icon: Code,
                  color: 'from-blue-500 to-cyan-500',
                  href: '/examples'
                },
                {
                  title: 'Best Practices',
                  description: 'Guidelines and recommendations for optimal usage',
                  icon: Star,
                  color: 'from-yellow-500 to-orange-500',
                  href: '/best-practices'
                },
                {
                  title: 'Troubleshooting',
                  description: 'Common issues and their solutions',
                  icon: CheckCircle,
                  color: 'from-green-500 to-emerald-500',
                  href: '/troubleshooting'
                },
                {
                  title: 'Performance Guide',
                  description: 'Optimize your implementations for best performance',
                  icon: Rocket,
                  color: 'from-purple-500 to-indigo-500',
                  href: '/performance'
                },
                {
                  title: 'Security Guidelines',
                  description: 'Security best practices and recommendations',
                  icon: Shield,
                  color: 'from-red-500 to-orange-500',
                  href: '/security'
                }
              ].map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <motion.a
                    key={resource.title}
                    href={resource.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {resource.description}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Help Getting Started?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our team is here to help you succeed with our platforms. 
                Get in touch for personalized support and guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="/community"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Join Community
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