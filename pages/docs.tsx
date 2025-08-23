import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Code, Database, 
  Search, Filter, ArrowRight, ExternalLink,
  Brain, Rocket, Shield, Zap, Target, Atom,
  Users, Globe, Building, Cpu, Server,
  CheckCircle, Clock, Star, Download
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const docCategories = [
    { id: 'all', name: 'All Documentation', icon: <BookOpen className="w-5 h-5" />, count: 85 },
    { id: 'api', name: 'API Reference', icon: <Code className="w-5 h-5" />, count: 25 },
    { id: 'ai', name: 'AI & ML', icon: <Brain className="w-5 h-5" />, count: 18 },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" />, count: 12 },
    { id: 'infrastructure', name: 'Infrastructure', icon: <Server className="w-5 h-5" />, count: 15 },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" />, count: 15 }
  ];

  const documentationItems = [
    {
      title: 'Getting Started with Zion Tech Group Platform',
      description: 'Complete beginner guide to setting up and using our platform',
      category: 'getting-started',
      type: 'Guide',
      difficulty: 'Beginner',
      readTime: '15 min',
      lastUpdated: '2025-01-15',
      tags: ['Setup', 'Configuration', 'First Steps'],
      link: '/docs/getting-started'
    },
    {
      title: 'AI Services API Reference',
      description: 'Comprehensive API documentation for all AI and machine learning services',
      category: 'api',
      type: 'API Reference',
      difficulty: 'Advanced',
      readTime: '45 min',
      lastUpdated: '2025-01-14',
      tags: ['API', 'AI', 'Machine Learning', 'Endpoints'],
      link: '/docs/api/ai-services'
    },
    {
      title: 'Quantum Computing Integration Guide',
      description: 'Step-by-step guide to integrating quantum computing solutions',
      category: 'quantum',
      type: 'Integration Guide',
      difficulty: 'Intermediate',
      readTime: '30 min',
      lastUpdated: '2025-01-13',
      tags: ['Quantum', 'Integration', 'Setup'],
      link: '/docs/quantum/integration'
    },
    {
      title: 'Security Best Practices',
      description: 'Security guidelines and best practices for enterprise deployments',
      category: 'security',
      type: 'Best Practices',
      difficulty: 'Intermediate',
      readTime: '25 min',
      lastUpdated: '2025-01-12',
      tags: ['Security', 'Compliance', 'Enterprise'],
      link: '/docs/security/best-practices'
    },
    {
      title: 'Infrastructure Deployment Guide',
      description: 'Complete infrastructure setup and deployment instructions',
      category: 'infrastructure',
      type: 'Deployment Guide',
      difficulty: 'Advanced',
      readTime: '60 min',
      lastUpdated: '2025-01-11',
      tags: ['Deployment', 'Infrastructure', 'Cloud'],
      link: '/docs/infrastructure/deployment'
    },
    {
      title: 'Business Automation Workflows',
      description: 'Creating and managing automated business processes',
      category: 'automation',
      type: 'User Guide',
      difficulty: 'Intermediate',
      readTime: '35 min',
      lastUpdated: '2025-01-10',
      tags: ['Automation', 'Workflows', 'Business Processes'],
      link: '/docs/automation/workflows'
    }
  ];

  const quickStartGuides = [
    {
      title: '5-Minute Setup',
      description: 'Get up and running in under 5 minutes',
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      link: '/docs/quick-start'
    },
    {
      title: 'First AI Model',
      description: 'Deploy your first AI model in 10 minutes',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      link: '/docs/ai/first-model'
    },
    {
      title: 'API Authentication',
      description: 'Set up API keys and authentication',
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      link: '/docs/api/authentication'
    },
    {
      title: 'Sample Projects',
      description: 'Ready-to-use code examples and templates',
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      link: '/docs/samples'
    }
  ];

  const filteredDocs = documentationItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <main className="relative z-10 pt-8">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive guides, API references, and technical documentation to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#quick-start"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#api-reference"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  View API Docs
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Guides */}
        <section id="quick-start" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Quick Start Guides
              </h2>
              <p className="text-xl text-gray-300">
                Get up and running quickly with our step-by-step guides
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStartGuides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {guide.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{guide.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{guide.description}</p>
                  <a
                    href={guide.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation, guides, or API references..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {docCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                    <span className="text-sm text-gray-400">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Documentation List */}
        <section id="api-reference" className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Documentation Library
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive guides and references for all our services
              </p>
            </motion.div>

            {filteredDocs.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">No documentation found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredDocs.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                            {doc.type}
                          </span>
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                            {doc.difficulty}
                          </span>
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                            {doc.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors cursor-pointer">
                          {doc.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{doc.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {doc.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            Last updated: {new Date(doc.lastUpdated).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <a
                          href={doc.link}
                          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                        >
                          Read Guide
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                        <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-all duration-300 inline-flex items-center justify-center">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-300">
                More tools and resources to help you succeed
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Video Tutorials',
                  description: 'Step-by-step video guides for all major features',
                  icon: <FileText className="w-12 h-12 text-blue-400" />,
                  link: '/tutorials',
                  features: ['HD Quality', 'Step-by-step', 'Downloadable']
                },
                {
                  title: 'Code Examples',
                  description: 'Ready-to-use code snippets and sample projects',
                  icon: <Code className="w-12 h-12 text-green-400" />,
                  link: '/examples',
                  features: ['Multiple Languages', 'Production Ready', 'Open Source']
                },
                {
                  title: 'Community Forum',
                  description: 'Connect with other developers and get help',
                  icon: <Users className="w-12 h-12 text-purple-400" />,
                  link: '/community',
                  features: ['Expert Support', 'Active Community', 'Knowledge Sharing']
                },
                {
                  title: 'API Playground',
                  description: 'Interactive API testing and exploration tool',
                  icon: <Database className="w-12 h-12 text-cyan-400" />,
                  link: '/playground',
                  features: ['Interactive Testing', 'Real-time Results', 'Code Generation']
                },
                {
                  title: 'SDK Downloads',
                  description: 'Official SDKs for popular programming languages',
                  icon: <Download className="w-12 h-12 text-orange-400" />,
                  link: '/sdk',
                  features: ['Multiple Languages', 'Official Support', 'Regular Updates']
                },
                {
                  title: 'Release Notes',
                  description: 'Stay updated with latest features and changes',
                  icon: <Star className="w-12 h-12 text-yellow-400" />,
                  link: '/releases',
                  features: ['Version History', 'Change Logs', 'Migration Guides']
                }
              ].map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <ul className="space-y-2 mb-6">
                    {resource.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={resource.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Access Resource
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Need More Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/support"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Request Documentation
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