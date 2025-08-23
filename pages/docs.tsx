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
  Star,
  Clock,
  Users,
  Zap,
  Brain,
  Atom,
  Rocket,
  Shield,
  Database,
  Cloud,
  Terminal,
  GitBranch,
  Package,
  Globe,
  MessageCircle
} from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', count: 150 },
    { id: 'getting-started', name: 'Getting Started', count: 25 },
    { id: 'api-reference', name: 'API Reference', count: 45 },
    { id: 'tutorials', name: 'Tutorials & Guides', count: 35 },
    { id: 'sdks', name: 'SDKs & Libraries', count: 20 },
    { id: 'examples', name: 'Examples & Samples', count: 25 }
  ];

  const featuredDocs = [
    {
      id: 1,
      title: 'AI Consciousness Platform Quick Start',
      category: 'getting-started',
      description: 'Get up and running with our AI consciousness platform in under 10 minutes. Learn the basics of consciousness modeling and neural network integration.',
      difficulty: 'Beginner',
      readTime: '10 min',
      lastUpdated: '2025-01-15',
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Quantum Computing API Reference',
      category: 'api-reference',
      description: 'Complete API documentation for our quantum computing platform. Includes authentication, endpoints, and code examples in multiple languages.',
      difficulty: 'Advanced',
      readTime: '45 min',
      lastUpdated: '2025-01-12',
      featured: true,
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Space Resource Intelligence Tutorial',
      category: 'tutorials',
      description: 'Step-by-step guide to building space resource intelligence applications. Learn satellite data processing and asteroid mining analysis.',
      difficulty: 'Intermediate',
      readTime: '30 min',
      lastUpdated: '2025-01-10',
      featured: true,
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Play,
      color: 'from-green-500 to-emerald-500',
      description: 'New to Zion Tech Group? Start here to learn the basics.',
      items: [
        { title: 'Quick Start Guide', href: '/docs/quick-start', difficulty: 'Beginner', readTime: '5 min' },
        { title: 'Installation & Setup', href: '/docs/installation', difficulty: 'Beginner', readTime: '15 min' },
        { title: 'First Project', href: '/docs/first-project', difficulty: 'Beginner', readTime: '20 min' },
        { title: 'Core Concepts', href: '/docs/core-concepts', difficulty: 'Beginner', readTime: '30 min' },
        { title: 'Development Environment', href: '/docs/dev-environment', difficulty: 'Beginner', readTime: '25 min' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      description: 'Complete API documentation for all our platforms and services.',
      items: [
        { title: 'Authentication', href: '/docs/api/auth', difficulty: 'Intermediate', readTime: '20 min' },
        { title: 'AI Consciousness API', href: '/docs/api/ai-consciousness', difficulty: 'Advanced', readTime: '45 min' },
        { title: 'Quantum Computing API', href: '/docs/api/quantum', difficulty: 'Advanced', readTime: '60 min' },
        { title: 'Space Technology API', href: '/docs/api/space-tech', difficulty: 'Advanced', readTime: '40 min' },
        { title: 'Webhooks & Events', href: '/docs/api/webhooks', difficulty: 'Intermediate', readTime: '25 min' }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials & Guides',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      description: 'Step-by-step guides and practical examples for common use cases.',
      items: [
        { title: 'Building AI Chatbots', href: '/docs/tutorials/ai-chatbots', difficulty: 'Intermediate', readTime: '35 min' },
        { title: 'Quantum Algorithm Implementation', href: '/docs/tutorials/quantum-algorithms', difficulty: 'Advanced', readTime: '50 min' },
        { title: 'Space Data Analysis', href: '/docs/tutorials/space-data', difficulty: 'Intermediate', readTime: '40 min' },
        { title: 'Integration with Existing Apps', href: '/docs/tutorials/integration', difficulty: 'Intermediate', readTime: '30 min' },
        { title: 'Performance Optimization', href: '/docs/tutorials/optimization', difficulty: 'Advanced', readTime: '45 min' }
      ]
    },
    {
      id: 'sdks',
      title: 'SDKs & Libraries',
      icon: Package,
      color: 'from-orange-500 to-red-500',
      description: 'Client libraries and SDKs for popular programming languages.',
      items: [
        { title: 'Python SDK', href: '/docs/sdks/python', difficulty: 'Intermediate', readTime: '25 min' },
        { title: 'JavaScript/TypeScript SDK', href: '/docs/sdks/javascript', difficulty: 'Intermediate', readTime: '25 min' },
        { title: 'Go SDK', href: '/docs/sdks/go', difficulty: 'Intermediate', readTime: '25 min' },
        { title: 'Rust SDK', href: '/docs/sdks/rust', difficulty: 'Advanced', readTime: '30 min' },
        { title: 'Mobile SDKs', href: '/docs/sdks/mobile', difficulty: 'Intermediate', readTime: '35 min' }
      ]
    },
    {
      id: 'examples',
      title: 'Examples & Samples',
      icon: FileText,
      color: 'from-indigo-500 to-purple-500',
      description: 'Ready-to-use code examples and sample applications.',
      items: [
        { title: 'AI Content Generation', href: '/docs/examples/content-generation', difficulty: 'Intermediate', readTime: '20 min' },
        { title: 'Quantum Cryptography', href: '/docs/examples/quantum-crypto', difficulty: 'Advanced', readTime: '30 min' },
        { title: 'Satellite Data Processing', href: '/docs/examples/satellite-data', difficulty: 'Intermediate', readTime: '25 min' },
        { title: 'Real-time Analytics Dashboard', href: '/docs/examples/analytics-dashboard', difficulty: 'Intermediate', readTime: '35 min' },
        { title: 'Multi-language Chat Interface', href: '/docs/examples/multi-language-chat', difficulty: 'Advanced', readTime: '40 min' }
      ]
    }
  ];

  const filteredDocs = selectedCategory === 'all' 
    ? documentationSections 
    : documentationSections.filter(section => section.id === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Beginner': 'from-green-500 to-emerald-500',
      'Intermediate': 'from-yellow-500 to-orange-500',
      'Advanced': 'from-red-500 to-pink-500'
    };
    return colors[difficulty as keyof typeof colors] || 'from-gray-500 to-gray-600';
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
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive guides, API references, and tutorials to help you build 
                with our AI consciousness, quantum computing, and space technology platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-lg"
              />
            </div>
          </div>
        </section>

        {/* Featured Documentation */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Featured Documentation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with these essential guides to get up and running quickly
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredDocs.map((doc, index) => (
                <motion.article
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    </div>

                    {/* Header */}
                    <div className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${doc.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <doc.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Category */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                          {categories.find(c => c.id === doc.category)?.name}
                        </span>
                        <div className="flex items-center space-x-3 text-gray-400 text-sm">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {doc.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {doc.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {doc.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(doc.difficulty)} text-white rounded-full text-xs font-medium`}>
                          {doc.difficulty}
                        </span>
                        <span className="text-gray-400 text-sm">
                          Updated {formatDate(doc.lastUpdated)}
                        </span>
                      </div>

                      {/* Read More */}
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 text-sm font-medium">Read Guide</span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Documentation Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation organized by topic and skill level
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Documentation Sections */}
            <div className="space-y-12">
              {filteredDocs.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 overflow-hidden"
                >
                  <div className="p-8">
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center`}>
                        <section.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{section.title}</h3>
                        <p className="text-gray-300 text-lg">{section.description}</p>
                      </div>
                    </div>

                    {/* Section Items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                          className="group cursor-pointer"
                        >
                          <div className="p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                            <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                              {item.title}
                            </h4>
                            
                            <div className="flex items-center justify-between mb-4">
                              <span className={`px-2 py-1 bg-gradient-to-r ${getDifficultyColor(item.difficulty)} text-white rounded-full text-xs font-medium`}>
                                {item.difficulty}
                              </span>
                              <span className="text-gray-400 text-sm flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {item.readTime}
                              </span>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-cyan-400 text-sm font-medium">View Guide</span>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Developer Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Additional tools and resources to help you build amazing applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: GitBranch,
                  title: 'GitHub Repositories',
                  description: 'Open source libraries and example projects',
                  href: 'https://github.com/ziontechgroup',
                  color: 'from-gray-500 to-gray-600'
                },
                {
                  icon: Terminal,
                  title: 'CLI Tools',
                  description: 'Command-line interfaces for our platforms',
                  href: '/docs/cli',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Globe,
                  title: 'API Playground',
                  description: 'Interactive API testing and exploration',
                  href: '/docs/api-playground',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: MessageCircle,
                  title: 'Community Forum',
                  description: 'Connect with other developers',
                  href: '/community',
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="p-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <resource.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{resource.description}</p>
                      
                      <div className="flex items-center justify-center">
                        <span className="text-cyan-400 text-sm font-medium">Access Resource</span>
                        <ExternalLink className="w-4 h-4 text-gray-400 ml-2 group-hover:text-cyan-400 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700/50"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get notified about new documentation, API updates, and developer resources.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Need Help Getting Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our team is here to help you succeed with our technology platforms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="/community"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
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

export default DocumentationPage;