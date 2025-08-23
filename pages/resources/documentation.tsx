import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, Code, BookOpen, Search, Filter, ArrowRight,
  Download, ExternalLink, Clock, User, Star, TrendingUp,
  Brain, Rocket, Shield, Cloud, Database, Network, Settings,
  Zap, Globe, Lock, Server, Cpu, Atom, Target, Users
} from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Documentation', icon: FileText, color: 'from-gray-500 to-gray-600' },
    { id: 'api', name: 'API Reference', icon: Code, color: 'from-blue-500 to-blue-600' },
    { id: 'guides', name: 'User Guides', icon: BookOpen, color: 'from-green-500 to-green-600' },
    { id: 'tutorials', name: 'Tutorials', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
    { id: 'ai', name: 'AI & ML', icon: Brain, color: 'from-cyan-500 to-cyan-600' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-red-500 to-red-600' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-indigo-500 to-indigo-600' }
  ];

  const documentationItems = [
    {
      id: 1,
      title: 'Getting Started with Zion Tech Platform',
      description: 'Complete beginner guide to setting up and using our comprehensive technology platform',
      category: 'guides',
      type: 'User Guide',
      author: 'Technical Team',
      lastUpdated: '2025-01-15',
      readTime: '15 min',
      difficulty: 'Beginner',
      featured: true,
      tags: ['Getting Started', 'Setup', 'Platform', 'Beginner'],
      downloadUrl: '/docs/getting-started.pdf',
      onlineUrl: '/docs/getting-started'
    },
    {
      id: 2,
      title: 'API Reference v2.1',
      description: 'Complete API documentation with examples, endpoints, and authentication methods',
      category: 'api',
      type: 'API Reference',
      author: 'Developer Team',
      lastUpdated: '2025-01-12',
      readTime: '45 min',
      difficulty: 'Advanced',
      featured: true,
      tags: ['API', 'Reference', 'Endpoints', 'Authentication'],
      downloadUrl: '/docs/api-reference-v2.1.pdf',
      onlineUrl: '/docs/api-reference'
    },
    {
      id: 3,
      title: 'AI Consciousness Platform Integration',
      description: 'Step-by-step guide to integrating our AI consciousness platform into your applications',
      category: 'ai',
      type: 'Integration Guide',
      author: 'AI Research Team',
      lastUpdated: '2025-01-10',
      readTime: '30 min',
      difficulty: 'Intermediate',
      featured: false,
      tags: ['AI', 'Integration', 'Consciousness', 'Platform'],
      downloadUrl: '/docs/ai-consciousness-integration.pdf',
      onlineUrl: '/docs/ai-consciousness-integration'
    },
    {
      id: 4,
      title: 'Quantum Computing SDK Tutorial',
      description: 'Learn to use our quantum computing SDK with practical examples and use cases',
      category: 'tutorials',
      type: 'Tutorial',
      author: 'Quantum Team',
      lastUpdated: '2025-01-08',
      readTime: '25 min',
      difficulty: 'Intermediate',
      featured: false,
      tags: ['Quantum Computing', 'SDK', 'Tutorial', 'Examples'],
      downloadUrl: '/docs/quantum-sdk-tutorial.pdf',
      onlineUrl: '/docs/quantum-sdk-tutorial'
    },
    {
      id: 5,
      title: 'Security Best Practices Guide',
      description: 'Comprehensive security guidelines for implementing our solutions in enterprise environments',
      category: 'security',
      type: 'Security Guide',
      author: 'Security Team',
      lastUpdated: '2025-01-05',
      readTime: '35 min',
      difficulty: 'Intermediate',
      featured: false,
      tags: ['Security', 'Best Practices', 'Enterprise', 'Guidelines'],
      downloadUrl: '/docs/security-best-practices.pdf',
      onlineUrl: '/docs/security-best-practices'
    },
    {
      id: 6,
      title: 'Cloud Infrastructure Deployment',
      description: 'Complete guide to deploying our cloud solutions across multiple cloud providers',
      category: 'cloud',
      type: 'Deployment Guide',
      author: 'DevOps Team',
      lastUpdated: '2025-01-03',
      readTime: '40 min',
      difficulty: 'Advanced',
      featured: false,
      tags: ['Cloud', 'Deployment', 'Infrastructure', 'DevOps'],
      downloadUrl: '/docs/cloud-deployment.pdf',
      onlineUrl: '/docs/cloud-deployment'
    },
    {
      id: 7,
      title: 'Performance Optimization Techniques',
      description: 'Advanced techniques for optimizing performance of our AI and quantum solutions',
      category: 'tutorials',
      type: 'Performance Guide',
      author: 'Performance Team',
      lastUpdated: '2024-12-28',
      readTime: '50 min',
      difficulty: 'Advanced',
      featured: false,
      tags: ['Performance', 'Optimization', 'AI', 'Quantum'],
      downloadUrl: '/docs/performance-optimization.pdf',
      onlineUrl: '/docs/performance-optimization'
    },
    {
      id: 8,
      title: 'Mobile SDK Integration Guide',
      description: 'Complete guide to integrating our mobile SDKs for iOS and Android applications',
      category: 'guides',
      type: 'Mobile Guide',
      author: 'Mobile Team',
      lastUpdated: '2024-12-25',
      readTime: '20 min',
      difficulty: 'Intermediate',
      featured: false,
      tags: ['Mobile', 'SDK', 'iOS', 'Android', 'Integration'],
      downloadUrl: '/docs/mobile-sdk-integration.pdf',
      onlineUrl: '/docs/mobile-sdk-integration'
    }
  ];

  const filteredDocs = documentationItems.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredDocs = documentationItems.filter(doc => doc.featured);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'from-green-500 to-green-600';
      case 'intermediate': return 'from-yellow-500 to-yellow-600';
      case 'advanced': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <>
      <Head>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Access comprehensive documentation, guides, and tutorials for Zion Tech Group's revolutionary technology solutions. Find API references, integration guides, and best practices." />
        <meta name="keywords" content="Zion Tech Group documentation, API reference, user guides, tutorials, technical documentation" />
        <link rel="canonical" href="https://ziontechgroup.com/resources/documentation" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Documentation
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Comprehensive guides, tutorials, and technical documentation to help you master our revolutionary technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Documentation */}
        {featuredDocs.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Featured Documentation</h2>
                <p className="text-gray-400">Essential guides to get you started</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredDocs.map((doc, index) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                          {categories.find(c => c.id === doc.category)?.name}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm rounded-full">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {doc.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{doc.description}</p>
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {doc.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {doc.author}
                        </span>
                        <span className={`px-2 py-1 bg-gradient-to-r ${getDifficultyColor(doc.difficulty)} text-white text-xs rounded`}>
                          {doc.difficulty}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Link href={doc.onlineUrl} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                          <BookOpen className="w-4 h-4" />
                          Read Online
                        </Link>
                        <a href={doc.downloadUrl} className="flex items-center justify-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Documentation */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">All Documentation</h2>
              <p className="text-gray-400">Browse our complete collection of technical resources</p>
            </motion.div>

            {filteredDocs.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No documentation found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDocs.map((doc, index) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                          {categories.find(c => c.id === doc.category)?.name}
                        </span>
                        <span className="px-3 py-1 bg-gray-600 text-white text-sm rounded-full">
                          {doc.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {doc.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-3">{doc.description}</p>
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {doc.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {doc.author}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Link href={doc.onlineUrl} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm">
                          <BookOpen className="w-4 h-4" />
                          Read
                        </Link>
                        <a href={doc.downloadUrl} className="flex items-center justify-center gap-2 px-3 py-2 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-sm">
                          <Download className="w-4 h-4" />
                          PDF
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need More Help?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore additional resources and get support for your implementation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Video Tutorials',
                  description: 'Step-by-step video guides',
                  href: '/resources/video-tutorials',
                  icon: TrendingUp,
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  title: 'Community Forum',
                  description: 'Connect with other developers',
                  href: '/community',
                  icon: Users,
                  color: 'from-green-500 to-green-600'
                },
                {
                  title: 'Support Center',
                  description: 'Get help when you need it',
                  href: '/support',
                  icon: Shield,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  title: 'API Playground',
                  description: 'Test our APIs interactively',
                  href: '/api-playground',
                  icon: Code,
                  color: 'from-cyan-500 to-cyan-600'
                }
              ].map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href} className="block p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{link.description}</p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      Explore
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocumentationPage;