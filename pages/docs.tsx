import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, Code, FileText, Search, ArrowRight, 
  Download, ExternalLink, ChevronRight, CheckCircle
} from 'lucide-react';

export default function Documentation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 8 },
    { id: 'api-reference', name: 'API Reference', count: 15 },
    { id: 'tutorials', name: 'Tutorials', count: 12 },
    { id: 'deployment', name: 'Deployment', count: 6 },
    { id: 'troubleshooting', name: 'Troubleshooting', count: 4 }
  ];

  const documentationItems = [
    {
      id: 1,
      title: 'Quick Start Guide',
      category: 'getting-started',
      description: 'Get up and running with Zion Tech Group services in under 10 minutes',
      difficulty: 'Beginner',
      readTime: '10 min',
      lastUpdated: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'AI Services API Reference',
      category: 'api-reference',
      description: 'Complete API documentation for AI and machine learning services',
      difficulty: 'Intermediate',
      readTime: '45 min',
      lastUpdated: '2024-01-12',
      featured: true
    },
    {
      id: 3,
      title: 'Quantum Computing Setup',
      category: 'tutorials',
      description: 'Step-by-step guide to setting up quantum computing environments',
      difficulty: 'Advanced',
      readTime: '30 min',
      lastUpdated: '2024-01-10',
      featured: true
    },
    {
      id: 4,
      title: 'Authentication & Security',
      category: 'getting-started',
      description: 'Learn about our security protocols and authentication methods',
      difficulty: 'Beginner',
      readTime: '20 min',
      lastUpdated: '2024-01-08',
      featured: false
    },
    {
      id: 5,
      title: 'Cloud Deployment Guide',
      category: 'deployment',
      description: 'Deploy your applications to major cloud platforms',
      difficulty: 'Intermediate',
      readTime: '25 min',
      lastUpdated: '2024-01-05',
      featured: false
    },
    {
      id: 6,
      title: 'Performance Optimization',
      category: 'tutorials',
      description: 'Best practices for optimizing your applications and services',
      difficulty: 'Advanced',
      readTime: '35 min',
      lastUpdated: '2024-01-03',
      featured: false
    },
    {
      id: 7,
      title: 'Error Handling & Debugging',
      category: 'troubleshooting',
      description: 'Common issues and how to resolve them effectively',
      difficulty: 'Intermediate',
      readTime: '15 min',
      lastUpdated: '2024-01-01',
      featured: false
    },
    {
      id: 8,
      title: 'Integration Examples',
      category: 'tutorials',
      description: 'Real-world examples of integrating our services',
      difficulty: 'Intermediate',
      readTime: '40 min',
      lastUpdated: '2023-12-28',
      featured: false
    }
  ];

  const quickLinks = [
    {
      title: 'API Status',
      description: 'Check service availability and performance',
      icon: <CheckCircle className="w-6 h-6" />,
      href: '/status',
      color: 'text-green-400'
    },
    {
      title: 'SDK Downloads',
      description: 'Get the latest SDKs and client libraries',
      icon: <Download className="w-6 h-6" />,
      href: '/downloads',
      color: 'text-blue-400'
    },
    {
      title: 'Support Portal',
      description: 'Get help from our technical support team',
      icon: <ExternalLink className="w-6 h-6" />,
      href: '/support',
      color: 'text-purple-400'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and users',
      icon: <ExternalLink className="w-6 h-6" />,
      href: '/community',
      color: 'text-yellow-400'
    }
  ];

  const filteredDocs = documentationItems.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <Head>
        <title>Documentation - Zion Tech Group | Technical Guides & API Reference</title>
        <meta name="description" content="Comprehensive documentation, API references, and technical guides for Zion Tech Group services. Get started quickly with our detailed guides and tutorials." />
        <meta name="keywords" content="documentation, API reference, technical guides, tutorials, Zion Tech Group, developer resources" />
        <meta property="og:title" content="Documentation - Zion Tech Group" />
        <meta property="og:description" content="Technical guides and API references for developers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/docs" />
      </Head>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive guides, API references, and tutorials to help you integrate 
            and optimize Zion Tech Group services in your applications.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-6 rounded-2xl border border-gray-600/20 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 ${link.color}`}>
                  {link.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {link.title}
                </h3>
                <p className="text-gray-300 text-sm">{link.description}</p>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category.name}
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Documentation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Guides</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {documentationItems.filter(doc => doc.featured).map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/40 to-blue-900/20 rounded-2xl border border-gray-600/20 overflow-hidden hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(doc.difficulty)}`}>
                      {doc.difficulty}
                    </span>
                    <span className="text-gray-400 text-sm">{doc.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {doc.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">{doc.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Updated {formatDate(doc.lastUpdated)}</span>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                      {categories.find(c => c.id === doc.category)?.name}
                    </span>
                  </div>

                  <a 
                    href={`/docs/${doc.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Read Guide
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Documentation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">All Documentation</h2>
          
          {filteredDocs.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No Documentation Found</h3>
              <p className="text-gray-500">
                Try adjusting your search terms or category filter to find relevant documentation.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredDocs.filter(doc => !doc.featured).map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/40 to-purple-900/20 rounded-2xl border border-gray-600/20 overflow-hidden hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(doc.difficulty)}`}>
                        {doc.difficulty}
                      </span>
                      <span className="text-gray-400 text-sm">{doc.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {doc.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-2">{doc.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>Updated {formatDate(doc.lastUpdated)}</span>
                      <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs">
                        {categories.find(c => c.id === doc.category)?.name}
                      </span>
                    </div>

                    <a 
                      href={`/docs/${doc.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      Read Guide
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Additional Resources */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900/40 to-green-900/20 p-8 rounded-2xl border border-gray-600/20">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Code Examples</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Browse our collection of code examples and sample implementations 
                to get started quickly with our services.
              </p>
              <a 
                href="/examples"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                View Examples
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-900/40 to-yellow-900/20 p-8 rounded-2xl border border-gray-600/20">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Best Practices</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Learn industry best practices and optimization techniques 
                to maximize the performance of your applications.
              </p>
              <a 
                href="/best-practices"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help Getting Started?</h2>
            <p className="text-gray-300 mb-6">
              Our technical support team is here to help you succeed with our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/support" 
                className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Support Portal
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}