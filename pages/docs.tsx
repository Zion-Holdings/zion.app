import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Search, FileText, Code, Database, Server, 
  Shield, Brain, Rocket, Globe, ArrowRight, ExternalLink,
  Download, Bookmark, Share2, Clock, User, Tag, Eye
} from 'lucide-react';
import Link from 'next/link';

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'api', name: 'API Reference', icon: <Code className="w-4 h-4" /> },
    { id: 'guides', name: 'Getting Started', icon: <FileText className="w-4 h-4" /> },
    { id: 'tutorials', name: 'Tutorials', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'examples', name: 'Code Examples', icon: <Code className="w-4 h-4" /> },
    { id: 'reference', name: 'Reference', icon: <Database className="w-4 h-4" /> }
  ];

  const documentationSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions for all our platforms',
      items: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', category: 'guides', link: '/docs/quickstart' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', category: 'guides', link: '/docs/installation' },
        { title: 'Configuration', description: 'Configure your environment and settings', category: 'guides', link: '/docs/configuration' },
        { title: 'First Project', description: 'Build your first project with our tools', category: 'guides', link: '/docs/first-project' }
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples and endpoints',
      items: [
        { title: 'Authentication', description: 'API keys, tokens, and security', category: 'api', link: '/docs/api/auth' },
        { title: 'Core Endpoints', description: 'Main API endpoints and methods', category: 'api', link: '/docs/api/endpoints' },
        { title: 'Webhooks', description: 'Real-time event notifications', category: 'api', link: '/docs/api/webhooks' },
        { title: 'Rate Limits', description: 'API usage limits and quotas', category: 'api', link: '/docs/api/rate-limits' }
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step tutorials for common use cases and scenarios',
      items: [
        { title: 'AI Model Training', description: 'Train custom AI models', category: 'tutorials', link: '/docs/tutorials/ai-training' },
        { title: 'Quantum Algorithm Implementation', description: 'Build quantum algorithms', category: 'tutorials', link: '/docs/tutorials/quantum' },
        { title: 'Space Data Analysis', description: 'Analyze satellite and space data', category: 'tutorials', link: '/docs/tutorials/space-data' },
        { title: 'Metaverse Development', description: 'Create virtual worlds and experiences', category: 'tutorials', link: '/docs/tutorials/metaverse' }
      ],
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Code Examples',
      description: 'Ready-to-use code samples and implementation examples',
      items: [
        { title: 'Python SDK', description: 'Python examples and snippets', category: 'examples', link: '/docs/examples/python' },
        { title: 'JavaScript SDK', description: 'JavaScript and Node.js examples', category: 'examples', link: '/docs/examples/javascript' },
        { title: 'REST API', description: 'HTTP API examples in multiple languages', category: 'examples', link: '/docs/examples/rest' },
        { title: 'CLI Tools', description: 'Command-line interface examples', category: 'examples', link: '/docs/examples/cli' }
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const popularDocs = [
    {
      title: 'AI Consciousness Platform API',
      description: 'Complete API reference for our AI consciousness platform',
      category: 'API Reference',
      views: '15.2k',
      lastUpdated: '2 days ago',
      link: '/docs/api/ai-consciousness'
    },
    {
      title: 'Quantum Computing Quick Start',
      description: 'Get started with quantum computing in under 10 minutes',
      category: 'Getting Started',
      views: '12.8k',
      lastUpdated: '1 week ago',
      link: '/docs/quickstart/quantum'
    },
    {
      title: 'Space Resource Intelligence Guide',
      description: 'Comprehensive guide to space data analysis and mining',
      category: 'Tutorials',
      views: '9.5k',
      lastUpdated: '3 days ago',
      link: '/docs/tutorials/space-intelligence'
    },
    {
      title: 'Metaverse Development Handbook',
      description: 'Complete guide to building immersive virtual experiences',
      category: 'Reference',
      views: '8.7k',
      lastUpdated: '5 days ago',
      link: '/docs/reference/metaverse'
    }
  ];

  const sdkDownloads = [
    {
      name: 'Python SDK',
      version: 'v2.1.0',
      description: 'Official Python client library',
      downloads: '45.2k',
      link: '/downloads/python-sdk',
      icon: <Code className="w-6 h-6" />
    },
    {
      name: 'JavaScript SDK',
      version: 'v1.8.3',
      description: 'Node.js and browser client library',
      downloads: '38.7k',
      link: '/downloads/javascript-sdk',
      icon: <Code className="w-6 h-6" />
    },
    {
      name: 'CLI Tools',
      version: 'v3.2.1',
      description: 'Command-line interface tools',
      downloads: '22.1k',
      link: '/downloads/cli-tools',
      icon: <Server className="w-6 h-6" />
    },
    {
      name: 'Mobile SDK',
      version: 'v1.5.2',
      description: 'iOS and Android libraries',
      downloads: '18.9k',
      link: '/downloads/mobile-sdk',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const filteredSections = documentationSections.filter(section => {
    if (selectedCategory === 'all') return true;
    return section.items.some(item => item.category === selectedCategory);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive guides, tutorials, and API references to help you build 
              with our cutting-edge AI, quantum, and space technology platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#getting-started" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/api-docs" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                API Reference
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <BookOpen className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 25, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <Code className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <FileText className="w-14 h-14" />
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
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
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-cyan-500/20 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section id="getting-started" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Documentation Sections
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive documentation organized by topic and complexity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center`}>
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{section.description}</p>
                  
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        className="block p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Popular Documentation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most viewed and frequently referenced documentation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularDocs.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                    {doc.category}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {doc.views}
                    </span>
                    <span>{doc.lastUpdated}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {doc.title}
                </h3>
                
                <p className="text-gray-300 mb-4">{doc.description}</p>
                
                <Link 
                  href={doc.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Read Documentation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Downloads */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SDK Downloads
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download our official SDKs and client libraries to get started quickly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdkDownloads.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {sdk.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{sdk.name}</h3>
                <p className="text-cyan-400 text-sm mb-2">{sdk.version}</p>
                <p className="text-gray-300 text-sm mb-4">{sdk.description}</p>
                
                <div className="text-gray-400 text-xs mb-4">
                  {sdk.downloads} downloads
                </div>
                
                <Link 
                  href={sdk.link}
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our documentation team is here to help. 
              Contact us for personalized assistance and guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
              </Link>
              <Link href="/api-docs" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View API Docs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;