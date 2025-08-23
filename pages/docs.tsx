import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import {
  BookOpen, Code, FileText, ArrowRight, Search, Filter,
  Star, Download, ExternalLink, Github, Terminal, Database,
  Cpu, Brain, Atom, Shield, Rocket, Globe, Zap, Clock
} from 'lucide-react';
import Link from 'next/link';

const Docs: React.FC = () => {
  const documentationCategories = [
    {
      title: "AI Consciousness Platform",
      description: "Complete documentation for our revolutionary AI consciousness evolution platform.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      docs: [
        { name: "Getting Started", description: "Quick start guide for AI consciousness platform", status: "Complete" },
        { name: "API Reference", description: "Complete API documentation and examples", status: "Complete" },
        { name: "Integration Guide", description: "Step-by-step integration instructions", status: "Complete" },
        { name: "Best Practices", description: "Recommended practices and patterns", status: "Complete" }
      ]
    },
    {
      title: "Quantum Computing SDK",
      description: "Documentation for our quantum computing development kit and APIs.",
      icon: <Atom className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      docs: [
        { name: "Installation", description: "Setup and installation instructions", status: "Complete" },
        { name: "Core Concepts", description: "Understanding quantum computing basics", status: "Complete" },
        { name: "API Reference", description: "Complete SDK API documentation", status: "Complete" },
        { name: "Examples", description: "Practical examples and tutorials", status: "Complete" }
      ]
    },
    {
      title: "Cybersecurity Framework",
      description: "Comprehensive security documentation and implementation guides.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      docs: [
        { name: "Security Overview", description: "Framework architecture and principles", status: "Complete" },
        { name: "Implementation Guide", description: "Step-by-step security setup", status: "Complete" },
        { name: "API Security", description: "Security best practices for APIs", status: "Complete" },
        { name: "Compliance", description: "Security compliance and certifications", status: "Complete" }
      ]
    },
    {
      title: "Space Technology APIs",
      description: "Documentation for autonomous space exploration and resource intelligence.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      docs: [
        { name: "API Overview", description: "Space technology API introduction", status: "Complete" },
        { name: "Authentication", description: "API authentication and authorization", status: "Complete" },
        { name: "Endpoints", description: "Complete API endpoint reference", status: "Complete" },
        { name: "Webhooks", description: "Real-time data streaming setup", status: "Complete" }
      ]
    }
  ];

  const quickStartGuides = [
    {
      title: "AI Consciousness Platform",
      description: "Get started with our AI consciousness evolution platform in under 10 minutes.",
      difficulty: "Beginner",
      time: "10 min",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Quantum Computing SDK",
      description: "Set up and run your first quantum algorithm with our SDK.",
      difficulty: "Intermediate",
      time: "15 min",
      icon: <Atom className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Cybersecurity Implementation",
      description: "Implement our zero-trust security framework in your application.",
      difficulty: "Intermediate",
      time: "20 min",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Space Technology APIs",
      description: "Integrate space resource intelligence into your applications.",
      difficulty: "Advanced",
      time: "25 min",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  const apiReferences = [
    {
      name: "AI Consciousness API",
      version: "v2.1.0",
      status: "Stable",
      endpoints: 47,
      documentation: "Complete",
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: "Quantum Computing API",
      version: "v1.8.0",
      status: "Beta",
      endpoints: 23,
      documentation: "Complete",
      icon: <Atom className="w-6 h-6" />
    },
    {
      name: "Security Framework API",
      version: "v3.0.0",
      status: "Stable",
      endpoints: 34,
      documentation: "Complete",
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "Space Technology API",
      version: "v1.2.0",
      status: "Alpha",
      endpoints: 18,
      documentation: "In Progress",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const developerResources = [
    {
      title: "GitHub Repositories",
      description: "Open source projects and code examples",
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/ziontechgroup",
      external: true
    },
    {
      title: "Code Examples",
      description: "Practical implementation examples and snippets",
      icon: <Code className="w-6 h-6" />,
      link: "/docs/examples",
      external: false
    },
    {
      title: "SDK Downloads",
      description: "Download our official SDKs and tools",
      icon: <Download className="w-6 h-6" />,
      link: "/downloads",
      external: false
    },
    {
      title: "Developer Forum",
      description: "Community support and discussions",
      icon: <Globe className="w-6 h-6" />,
      link: "/community",
      external: false
    }
  ];

  return (
    <Layout
      title="Documentation - Zion Tech Group"
      description="Comprehensive technical documentation, API references, and developer resources for Zion Tech Group's revolutionary technologies."
      keywords="documentation, API reference, developer resources, AI consciousness, quantum computing, cybersecurity, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Documentation
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                  Technical resources and developer guides
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Everything you need to integrate and build with our revolutionary AI consciousness, 
                quantum computing, and cybersecurity technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-400" />
                <select className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="all">All Categories</option>
                  <option value="ai-consciousness">AI Consciousness</option>
                  <option value="quantum-computing">Quantum Computing</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="space-technology">Space Technology</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Guides */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Quick Start Guides
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get up and running with our technologies in minutes
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStartGuides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${guide.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {guide.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full">
                      {guide.difficulty}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {guide.time}
                    </span>
                  </div>
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive guides for each of our technology platforms
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {documentationCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4`}>
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{category.description}</p>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.docs.map((doc, docIndex) => (
                          <div key={docIndex} className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-4 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-lg font-bold text-white">{doc.name}</h4>
                              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                                {doc.status}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm mb-3">{doc.description}</p>
                            <div className="flex items-center text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors duration-300 cursor-pointer">
                              Read Docs
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                          </div>
                        ))}
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                API References
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Complete API documentation for all our services
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {apiReferences.map((api, index) => (
                <motion.div
                  key={api.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      {api.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{api.name}</h3>
                      <div className="text-blue-400 text-sm font-semibold">v{api.version}</div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        api.status === 'Stable' ? 'bg-green-500/20 text-green-400' :
                        api.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {api.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-gray-400">Endpoints:</div>
                      <div className="text-white font-semibold">{api.endpoints}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Documentation:</div>
                      <div className="text-white font-semibold">{api.documentation}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                      View API Docs
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                    <div className="flex items-center text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                      <Terminal className="w-4 h-4 mr-2" />
                      Try API
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Developer Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Additional tools and resources to help you build amazing applications
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developerResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors duration-300">
                    {resource.external ? 'Visit Resource' : 'Explore'}
                    {resource.external ? <ExternalLink className="w-4 h-4 ml-2" /> : <ArrowRight className="w-4 h-4 ml-2" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Get notified about new documentation, API updates, and developer resources.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Need Help with Integration?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Our developer support team is here to help you succeed with our technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Developer Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/community"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Join Community
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Docs;