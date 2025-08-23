import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Code, Database, Shield, 
  Rocket, Brain, Globe, Zap, ArrowRight,
  Search, Filter, Calendar, Clock, Tag,
  Download, ExternalLink, Github, Terminal,
  Play, ChevronRight, ChevronDown, Star,
  Users, MessageCircle, HelpCircle, Bookmark
} from 'lucide-react';

export default function DocsPage() {
  const docCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Consciousness',
      description: 'Complete documentation for AI consciousness frameworks and services',
      count: 45,
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Quantum Computing',
      description: 'Quantum computing APIs, algorithms, and implementation guides',
      count: 32,
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Space Technology',
      description: 'Space resource intelligence and exploration technology docs',
      count: 28,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Privacy',
      description: 'Security best practices, encryption, and privacy frameworks',
      count: 38,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data & Analytics',
      description: 'Data processing, analytics, and machine learning APIs',
      count: 52,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'SDKs & Libraries',
      description: 'Client libraries, SDKs, and development tools',
      count: 25,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const quickStartGuides = [
    {
      title: 'Getting Started with AI Consciousness',
      description: 'Quick start guide to implement AI consciousness in your applications',
      difficulty: 'Beginner',
      time: '15 min',
      tags: ['AI Consciousness', 'Quick Start', 'Beginner'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing Fundamentals',
      description: 'Learn the basics of quantum computing and our quantum services',
      difficulty: 'Intermediate',
      time: '30 min',
      tags: ['Quantum Computing', 'Fundamentals', 'Intermediate'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Space Resource Intelligence API',
      description: 'Integrate space resource intelligence into your applications',
      difficulty: 'Beginner',
      time: '20 min',
      tags: ['Space Technology', 'API', 'Beginner'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Autonomous Systems Setup',
      description: 'Set up autonomous IT infrastructure with consciousness awareness',
      difficulty: 'Advanced',
      time: '45 min',
      tags: ['Autonomous Systems', 'Setup', 'Advanced'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const apiReferences = [
    {
      title: 'AI Consciousness API v2.0',
      version: '2.0.0',
      status: 'Stable',
      description: 'Complete API reference for AI consciousness services including emotional intelligence, self-awareness, and decision-making capabilities.',
      endpoints: 24,
      examples: 15,
      sdk: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing API',
      version: '1.5.2',
      status: 'Beta',
      description: 'Quantum computing APIs for algorithm execution, quantum state management, and hybrid classical-quantum workflows.',
      endpoints: 18,
      examples: 12,
      sdk: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Space Resource Intelligence API',
      version: '1.2.1',
      status: 'Stable',
      description: 'APIs for accessing space exploration data, resource mapping, and celestial body analysis.',
      endpoints: 16,
      examples: 8,
      sdk: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Autonomous Systems API',
      version: '1.0.0',
      status: 'Alpha',
      description: 'APIs for managing autonomous IT infrastructure, self-healing systems, and consciousness-aware automation.',
      endpoints: 12,
      examples: 6,
      sdk: false,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const codeExamples = [
    {
      title: 'AI Consciousness Implementation',
      language: 'Python',
      description: 'Complete example of implementing AI consciousness in a Python application',
      lines: 150,
      difficulty: 'Intermediate',
      tags: ['Python', 'AI Consciousness', 'Implementation'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Algorithm Execution',
      language: 'JavaScript',
      description: 'JavaScript example for executing quantum algorithms using our quantum computing API',
      lines: 89,
      difficulty: 'Advanced',
      tags: ['JavaScript', 'Quantum Computing', 'Algorithms'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Space Data Analysis',
      language: 'Python',
      description: 'Python script for analyzing space exploration data and resource mapping',
      lines: 120,
      difficulty: 'Intermediate',
      tags: ['Python', 'Space Technology', 'Data Analysis'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Autonomous System Monitoring',
      language: 'Go',
      description: 'Go application for monitoring and managing autonomous IT infrastructure',
      lines: 200,
      difficulty: 'Advanced',
      tags: ['Go', 'Autonomous Systems', 'Monitoring'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const sdkDownloads = [
    {
      name: 'Python SDK',
      version: '2.1.0',
      description: 'Official Python client library for Zion Tech Group services',
      downloads: '15.2k',
      size: '2.4 MB',
      platforms: ['Python 3.8+', 'pip'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'JavaScript SDK',
      version: '1.8.2',
      description: 'Node.js and browser JavaScript client library',
      downloads: '12.8k',
      size: '1.8 MB',
      platforms: ['Node.js 16+', 'npm'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Go SDK',
      version: '1.3.1',
      description: 'Go client library for high-performance applications',
      downloads: '8.5k',
      size: '3.1 MB',
      platforms: ['Go 1.19+', 'go mod'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'REST API Client',
      version: '1.0.0',
      description: 'Lightweight REST API client for any programming language',
      downloads: '22.1k',
      size: '0.5 MB',
      platforms: ['Universal', 'Direct Download'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive technical documentation, API references, and implementation guides 
              for AI consciousness, quantum computing, and space technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative max-w-md mx-auto sm:mx-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Quick Start Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running quickly with our step-by-step guides
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${guide.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                      {guide.difficulty}
                    </span>
                    <span className="text-xs text-gray-400">{guide.time}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {guide.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm">Read Guide</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive documentation organized by technology area
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      {category.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {category.featured && (
                        <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                          Featured
                        </span>
                      )}
                      <span className="text-cyan-400 text-sm">{category.count} docs</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 text-sm">Explore Docs</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API References */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              API References
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete API documentation with examples and SDK support
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {apiReferences.map((api, index) => (
              <motion.div
                key={api.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${api.color} flex items-center justify-center`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                        {api.title}
                      </h3>
                      <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        v{api.version}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{api.description}</p>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span>{api.endpoints} endpoints</span>
                      <span>{api.examples} examples</span>
                      <span className={api.sdk ? 'text-green-400' : 'text-gray-500'}>
                        {api.sdk ? 'SDK Available' : 'No SDK'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{api.status}</span>
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                        View API Docs
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Code Examples
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Practical code examples and implementation patterns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${example.color} flex items-center justify-center`}>
                      <Code className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {example.language}
                      </span>
                      <span className="text-xs text-gray-400">{example.lines} lines</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {example.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">{example.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50">
                        {example.difficulty}
                      </span>
                      <div className="flex gap-1">
                        {example.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      View Example
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Downloads */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SDKs & Libraries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download our official client libraries and development tools
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdkDownloads.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${sdk.color} flex items-center justify-center`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors duration-300">
                        {sdk.name}
                      </h3>
                      <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        v{sdk.version}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">{sdk.description}</p>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                      <span>{sdk.downloads} downloads</span>
                      <span>{sdk.size}</span>
                    </div>
                    <div className="mb-4">
                      {sdk.platforms.map((platform, platformIndex) => (
                        <span
                          key={platformIndex}
                          className="block text-xs text-gray-400 mb-1"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Download SDK
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Need Help with Documentation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our technical team is here to help you 
              navigate our documentation and get the most out of our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Technical Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Our Team
              </a>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Documentation Updates</h3>
              <p className="text-gray-300 mb-4">
                Stay informed about new documentation, API updates, and feature releases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}