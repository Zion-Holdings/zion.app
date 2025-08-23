import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Search, 
  Filter,
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  Star,
  Clock,
  Users,
  TrendingUp,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Database,
  Terminal,
  GitBranch,
  Zap,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Documentation', icon: BookOpen, count: 45 },
    { id: 'getting-started', label: 'Getting Started', icon: Play, count: 8 },
    { id: 'api-reference', label: 'API Reference', icon: Code, count: 12 },
    { id: 'tutorials', label: 'Tutorials', icon: Code, count: 15 },
    { id: 'guides', label: 'Guides', icon: FileText, count: 10 }
  ];

  const technologies = [
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'quantum', label: 'Quantum Computing', icon: Atom, count: 12 },
    { id: 'space-tech', label: 'Space Technology', icon: Rocket, count: 8 },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield, count: 10 },
    { id: 'cloud', label: 'Cloud Infrastructure', icon: Cloud, count: 15 }
  ];

  const featuredDocs = [
    {
      id: 1,
      title: 'Getting Started with AI Consciousness Platform',
      description: 'Complete guide to setting up and using our AI consciousness platform for building intelligent applications.',
      category: 'getting-started',
      technology: 'ai-ml',
      difficulty: 'Beginner',
      readTime: '15 min',
      lastUpdated: '2024-01-15',
      featured: true,
      tags: ['AI', 'Consciousness', 'Setup', 'Tutorial']
    },
    {
      id: 2,
      title: 'Quantum Computing API Reference',
      description: 'Comprehensive API documentation for our quantum computing platform, including all endpoints and examples.',
      category: 'api-reference',
      technology: 'quantum',
      difficulty: 'Advanced',
      readTime: '45 min',
      lastUpdated: '2024-01-12',
      featured: true,
      tags: ['API', 'Quantum', 'Reference', 'Examples']
    },
    {
      id: 3,
      title: 'Space Resource Intelligence SDK',
      description: 'Developer guide for integrating our space resource intelligence capabilities into your applications.',
      category: 'guides',
      technology: 'space-tech',
      difficulty: 'Intermediate',
      readTime: '25 min',
      lastUpdated: '2024-01-10',
      featured: true,
      tags: ['SDK', 'Space', 'Integration', 'Guide']
    }
  ];

  const documentationSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions for all our platforms',
      items: [
        { title: 'AI Consciousness Platform Setup', href: '/docs/ai-consciousness-setup', difficulty: 'Beginner', readTime: '10 min' },
        { title: 'Quantum Computing Environment', href: '/docs/quantum-setup', difficulty: 'Intermediate', readTime: '20 min' },
        { title: 'Space Technology SDK Installation', href: '/docs/space-sdk-setup', difficulty: 'Beginner', readTime: '15 min' },
        { title: 'Cybersecurity Platform Configuration', href: '/docs/cybersecurity-setup', difficulty: 'Intermediate', readTime: '25 min' },
        { title: 'Cloud Infrastructure Deployment', href: '/docs/cloud-deployment', difficulty: 'Advanced', readTime: '30 min' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples and code snippets',
      items: [
        { title: 'AI Consciousness API', href: '/docs/api/ai-consciousness', difficulty: 'Advanced', readTime: '45 min' },
        { title: 'Quantum Computing API', href: '/docs/api/quantum-computing', difficulty: 'Advanced', readTime: '60 min' },
        { title: 'Space Technology API', href: '/docs/api/space-technology', difficulty: 'Intermediate', readTime: '35 min' },
        { title: 'Cybersecurity API', href: '/docs/api/cybersecurity', difficulty: 'Advanced', readTime: '40 min' },
        { title: 'Cloud Infrastructure API', href: '/docs/api/cloud-infrastructure', difficulty: 'Advanced', readTime: '50 min' }
      ]
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step tutorials for building applications with our platforms',
      items: [
        { title: 'Building Your First AI Chatbot', href: '/docs/tutorials/ai-chatbot', difficulty: 'Beginner', readTime: '30 min' },
        { title: 'Quantum Algorithm Implementation', href: '/docs/tutorials/quantum-algorithms', difficulty: 'Advanced', readTime: '45 min' },
        { title: 'Space Data Visualization', href: '/docs/tutorials/space-visualization', difficulty: 'Intermediate', readTime: '25 min' },
        { title: 'Zero-Trust Security Implementation', href: '/docs/tutorials/zero-trust', difficulty: 'Advanced', readTime: '40 min' },
        { title: 'Multi-Cloud Deployment', href: '/docs/tutorials/multi-cloud', difficulty: 'Advanced', readTime: '35 min' }
      ]
    },
    {
      title: 'Guides',
      description: 'Comprehensive guides for advanced use cases and best practices',
      items: [
        { title: 'AI Ethics and Governance', href: '/docs/guides/ai-ethics', difficulty: 'Intermediate', readTime: '20 min' },
        { title: 'Quantum Error Correction', href: '/docs/guides/quantum-error-correction', difficulty: 'Advanced', readTime: '50 min' },
        { title: 'Space Mission Planning', href: '/docs/guides/space-mission-planning', difficulty: 'Advanced', readTime: '40 min' },
        { title: 'Security Compliance Frameworks', href: '/docs/guides/security-compliance', difficulty: 'Intermediate', readTime: '30 min' },
        { title: 'Performance Optimization', href: '/docs/guides/performance-optimization', difficulty: 'Advanced', readTime: '35 min' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Status', href: '/status', icon: CheckCircle, color: 'text-green-400' },
    { title: 'GitHub Repositories', href: 'https://github.com/ziontechgroup', icon: GitBranch, color: 'text-blue-400' },
    { title: 'Developer Community', href: '/community', icon: Users, color: 'text-purple-400' },
    { title: 'Support Portal', href: '/support', icon: AlertCircle, color: 'text-orange-400' }
  ];

  const filteredDocs = selectedCategory === 'all' 
    ? [...featuredDocs]
    : featuredDocs.filter(doc => doc.category === selectedCategory);

  const searchResults = searchQuery 
    ? [...featuredDocs, ...documentationSections.flatMap(section => section.items)].filter(doc => 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ('description' in doc && doc.description?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        ('tags' in doc && doc.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      )
    : [];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                Documentation
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Comprehensive guides, tutorials, and API references for building with our 
                AI consciousness, quantum computing, and space technology platforms.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation, APIs, or tutorials..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-12 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">45+</div>
                  <div className="text-gray-400">Documents</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5</div>
                  <div className="text-gray-400">Technologies</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">15</div>
                  <div className="text-gray-400">Tutorials</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">12</div>
                  <div className="text-gray-400">APIs</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Results */}
        {searchQuery && (
          <section className="py-16 bg-gradient-to-br from-gray-900/50 to-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-white">
                    Search Results for "{searchQuery}"
                  </h2>
                  <span className="text-gray-400">{searchResults.length} results found</span>
                </div>

                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {searchResults.map((doc, index) => (
                      <motion.div
                        key={'id' in doc ? doc.id : index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        <div className="w-full h-48 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-xl mb-4 flex items-center justify-center">
                          <FileText className="w-12 h-12 text-cyan-400" />
                        </div>
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-cyan-900/20 text-cyan-400 text-sm rounded-full mb-3">
                            {doc.difficulty}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                            {doc.title}
                          </h3>
                          <p className="text-gray-400 line-clamp-3 mb-4">
                            {'description' in doc ? doc.description : 'Documentation and reference material'}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>{doc.readTime}</span>
                          <span>{'lastUpdated' in doc ? doc.lastUpdated : 'Available'}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {'tags' in doc && doc.tags?.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl text-gray-400 mb-2">No results found</h3>
                    <p className="text-gray-500">Try adjusting your search terms or browse our documentation sections below.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </section>
        )}

        {/* Quick Links */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Quick Links</h2>
              <p className="text-gray-300">Essential resources for developers and users</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className={`w-6 h-6 ${link.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {link.title}
                  </h3>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Documentation */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Featured Documentation
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Essential Guides</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start here with our most important and frequently referenced documentation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredDocs.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-cyan-400" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-cyan-900/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                        {categories.find(cat => cat.id === doc.category)?.label}
                      </span>
                      <span className="px-3 py-1 bg-purple-900/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                        {technologies.find(tech => tech.id === doc.technology)?.label}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {doc.title}
                    </h3>
                    <p className="text-gray-400 mb-6 line-clamp-3">
                      {doc.description}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {doc.readTime}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {doc.difficulty}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {doc.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                      Read Documentation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Documentation Sections</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Organized documentation covering all aspects of our technology platforms
              </p>
            </motion.div>

            <div className="space-y-12">
              {documentationSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50"
                >
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-4">{section.title}</h3>
                    <p className="text-gray-300 text-lg">{section.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <motion.a
                        key={item.title}
                        href={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: itemIndex * 0.05 }}
                        className="p-6 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl border border-gray-600/30 hover:border-cyan-400/50 hover:bg-gray-700/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.difficulty === 'Beginner' ? 'bg-green-900/20 text-green-400 border border-green-400/30' :
                            item.difficulty === 'Intermediate' ? 'bg-yellow-900/20 text-yellow-400 border border-yellow-400/30' :
                            'bg-red-900/20 text-red-400 border border-red-400/30'
                          }`}>
                            {item.difficulty}
                          </span>
                          <span className="text-sm text-gray-400">{item.readTime}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                          <span className="text-sm">Read more</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology-Specific Documentation */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Technology Platforms</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore documentation for each of our core technology platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{tech.label}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tech.count} documents</p>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 text-sm">
                    Browse Docs
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Need Help with Documentation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our team is here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/support"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Support
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Contact Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocumentationPage;