import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  Shield, 
  Cloud, 
  Brain,
  Atom,
  Rocket,
  Search,
  FileText,
  Video,
  Download,
  ChevronRight,
  Clock,
  User,
  Users
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen, count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 6 },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud, count: 5 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 4 },
    { id: 'api', name: 'API Reference', icon: Code, count: 3 },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: 2 }
  ];

  const documentation = [
    {
      id: 1,
      title: 'Getting Started with AI Services',
      category: 'ai',
      description: 'Learn how to integrate and use our AI services in your applications. Includes setup guides, authentication, and basic usage examples.',
      difficulty: 'Beginner',
      readTime: '15 min',
      lastUpdated: '2025-01-15',
      tags: ['Setup', 'Authentication', 'Quick Start'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Fundamentals',
      category: 'quantum',
      description: 'Understanding the basics of quantum computing and how to leverage our quantum services for complex computational problems.',
      difficulty: 'Intermediate',
      readTime: '25 min',
      lastUpdated: '2025-01-10',
      tags: ['Quantum Theory', 'Qubits', 'Quantum Gates'],
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Deployment Guide',
      category: 'cloud',
      description: 'Step-by-step guide to deploying and managing your applications on our quantum-secure cloud infrastructure.',
      difficulty: 'Intermediate',
      readTime: '20 min',
      lastUpdated: '2025-01-08',
      tags: ['Deployment', 'Kubernetes', 'Monitoring'],
      featured: false
    },
    {
      id: 4,
      title: 'API Authentication & Security',
      category: 'api',
      description: 'Comprehensive guide to implementing secure authentication and authorization for our APIs using OAuth 2.0 and JWT tokens.',
      difficulty: 'Intermediate',
      readTime: '18 min',
      lastUpdated: '2025-01-12',
      tags: ['OAuth', 'JWT', 'Security'],
      featured: false
    },
    {
      id: 5,
      title: 'AI Model Training & Deployment',
      category: 'ai',
      description: 'Advanced guide to training custom AI models and deploying them in production environments with our platform.',
      difficulty: 'Advanced',
      readTime: '35 min',
      lastUpdated: '2025-01-05',
      tags: ['Training', 'Deployment', 'MLOps'],
      featured: false
    },
    {
      id: 6,
      title: 'Quantum Cryptography Implementation',
      category: 'quantum',
      description: 'Implement quantum-resistant cryptography in your applications to protect against future quantum attacks.',
      difficulty: 'Advanced',
      readTime: '30 min',
      lastUpdated: '2025-01-03',
      tags: ['Cryptography', 'Post-Quantum', 'Security'],
      featured: false
    },
    {
      id: 7,
      title: 'Space Technology Integration',
      category: 'space',
      description: 'Integrate satellite data and space-based services into your applications for global coverage and real-time insights.',
      difficulty: 'Intermediate',
      readTime: '22 min',
      lastUpdated: '2024-12-28',
      tags: ['Satellite', 'Real-time', 'Global Coverage'],
      featured: false
    },
    {
      id: 8,
      title: 'Cybersecurity Best Practices',
      category: 'security',
      description: 'Essential cybersecurity practices and how to implement them using our security services and tools.',
      difficulty: 'Beginner',
      readTime: '20 min',
      lastUpdated: '2024-12-25',
      tags: ['Best Practices', 'Threat Detection', 'Compliance'],
      featured: false
    }
  ];

  const filteredDocs = documentation.filter(doc => {
    const categoryMatch = selectedCategory === 'all' || doc.category === selectedCategory;
    const searchMatch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'Advanced': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <Layout>
      <Head>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technical documentation and guides for Zion Tech Group services including AI, quantum computing, and cloud infrastructure." />
        <meta name="keywords" content="documentation, technical guides, API reference, Zion Tech Group, AI services, quantum computing" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Documentation
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive guides, tutorials, and API references to help you integrate 
              and maximize the value of our cutting-edge technology solutions.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-xl border transition-all duration-200 flex flex-col items-center space-y-3 ${
                    selectedCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300'
                      : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-cyan-500/30 hover:bg-cyan-500/10'
                  }`}
                >
                  <category.icon className="w-6 h-6" />
                  <div className="text-center">
                    <div className="font-medium text-sm">{category.name}</div>
                    <div className="text-xs opacity-75">{category.count} docs</div>
                  </div>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Documentation Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {filteredDocs.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  className={`group relative ${
                    doc.featured ? 'lg:col-span-2' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(doc.difficulty)}`}>
                            {doc.difficulty}
                          </span>
                          {doc.featured && (
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                          {doc.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {doc.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {doc.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{doc.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{doc.difficulty}</span>
                        </div>
                      </div>
                      <div className="text-xs">
                        Updated {new Date(doc.lastUpdated).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group">
                          <FileText className="w-4 h-4" />
                          <span className="font-medium">Read Guide</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                        <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group">
                          <Video className="w-4 h-4" />
                          <span className="font-medium">Watch Video</span>
                        </button>
                      </div>
                      <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-200 group">
                        <Download className="w-4 h-4" />
                        <span className="font-medium">Download PDF</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredDocs.length === 0 && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No Documentation Found</h3>
                <p className="text-gray-400">
                  Try adjusting your search terms or category filters.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-300">
                Beyond documentation, we offer comprehensive resources to help you succeed
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Video className="w-8 h-8" />,
                  title: 'Video Tutorials',
                  description: 'Step-by-step video guides covering all major features and use cases.',
                  count: '50+ videos',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: 'Code Examples',
                  description: 'Ready-to-use code samples and templates for quick integration.',
                  count: '100+ examples',
                  color: 'from-green-500 to-green-600'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Community Forum',
                  description: 'Connect with other developers and get help from our experts.',
                  count: 'Active community',
                  color: 'from-purple-500 to-purple-600'
                }
              ].map((resource, index) => (
                <motion.div
                  key={resource.title}
                  className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <div className="text-cyan-400 font-medium">{resource.count}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Need More Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our team is here to help you 
                get the most out of our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Contact Support
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
                >
                  Support Portal
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