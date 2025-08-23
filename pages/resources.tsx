import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Target, Star, 
  Users, Award, Globe, Zap, CheckCircle,
  ArrowRight, Building, Heart, Eye, Code,
  BookOpen, FileText, Video, Download, ExternalLink,
  Search, Filter, Calendar, Clock, Tag
} from 'lucide-react';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Documentation',
      description: 'Comprehensive technical documentation, API references, and implementation guides',
      count: 150,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Whitepapers',
      description: 'In-depth research papers on AI consciousness, quantum computing, and space technology',
      count: 25,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Resources',
      description: 'Tutorial videos, webinars, and presentations from our experts',
      count: 80,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Code Examples',
      description: 'Sample code, SDKs, and implementation examples for all platforms',
      count: 120,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const featuredResources = [
    {
      title: 'AI Consciousness Framework v2.0',
      type: 'Technical Documentation',
      description: 'Complete guide to implementing AI consciousness in your applications with code examples and best practices.',
      author: 'AI Research Team',
      date: '2025-01-15',
      downloads: 2500,
      size: '2.4 MB',
      tags: ['AI Consciousness', 'Framework', 'Implementation'],
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing Security Whitepaper',
      type: 'Research Paper',
      description: 'Comprehensive analysis of quantum-resistant cryptography and security measures for the quantum era.',
      author: 'Quantum Security Team',
      date: '2025-01-10',
      downloads: 1800,
      size: '1.8 MB',
      tags: ['Quantum Security', 'Cryptography', 'Research'],
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Space Resource Intelligence API Guide',
      type: 'API Documentation',
      description: 'Complete API reference for our space resource intelligence platform with integration examples.',
      author: 'Space Technology Team',
      date: '2025-01-08',
      downloads: 1200,
      size: '3.1 MB',
      tags: ['Space Technology', 'API', 'Integration'],
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const recentResources = [
    {
      title: 'Autonomous Systems Implementation Guide',
      type: 'Technical Guide',
      description: 'Step-by-step guide to building consciousness-aware autonomous systems for enterprise applications.',
      author: 'Autonomous Systems Team',
      date: '2025-01-05',
      downloads: 950,
      size: '2.8 MB',
      tags: ['Autonomous Systems', 'Enterprise', 'Guide']
    },
    {
      title: 'AI Ethics & Governance Framework',
      type: 'Policy Document',
      description: 'Comprehensive framework for developing ethical AI systems and responsible technology practices.',
      author: 'Ethics & Governance Team',
      date: '2025-01-03',
      downloads: 2100,
      size: '1.5 MB',
      tags: ['AI Ethics', 'Governance', 'Policy']
    },
    {
      title: 'Quantum Neural Networks Tutorial',
      type: 'Video Series',
      description: 'Complete video tutorial series on implementing quantum neural networks with practical examples.',
      author: 'Quantum AI Team',
      date: '2024-12-30',
      downloads: 3200,
      size: 'Video Series',
      tags: ['Quantum AI', 'Neural Networks', 'Tutorial']
    },
    {
      title: 'Brain-Computer Interface SDK',
      type: 'Development Kit',
      description: 'Software development kit for building neural interface applications with consciousness integration.',
      author: 'Neural Interface Team',
      date: '2024-12-28',
      downloads: 750,
      size: '15.2 MB',
      tags: ['Neural Interface', 'SDK', 'Development']
    },
    {
      title: 'Space Exploration Data Analysis',
      type: 'Research Report',
      description: 'Analysis of AI-powered space exploration data and insights for resource discovery.',
      author: 'Space Research Team',
      date: '2024-12-25',
      downloads: 680,
      size: '4.2 MB',
      tags: ['Space Research', 'Data Analysis', 'AI']
    },
    {
      title: 'Enterprise AI Deployment Checklist',
      type: 'Implementation Guide',
      description: 'Comprehensive checklist for deploying AI consciousness systems in enterprise environments.',
      author: 'Enterprise Solutions Team',
      date: '2024-12-22',
      downloads: 1400,
      size: '0.8 MB',
      tags: ['Enterprise', 'Deployment', 'Checklist']
    }
  ];

  const tags = [
    'AI Consciousness', 'Quantum Computing', 'Space Technology', 'Enterprise', 'Security',
    'Neural Networks', 'Autonomous Systems', 'API', 'SDK', 'Tutorial', 'Research',
    'Implementation', 'Best Practices', 'Framework', 'Documentation'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Resources Center
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Access comprehensive documentation, whitepapers, code examples, and learning materials 
              for AI consciousness, quantum computing, and space technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative max-w-md mx-auto sm:mx-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of technical resources and learning materials
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400">{category.count} resources</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and essential resources for technology professionals
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${resource.color} flex items-center justify-center`}>
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {resource.type}
                      </span>
                      {resource.featured && (
                        <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{resource.description}</p>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span>{resource.author}</span>
                      <span>{resource.date}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">{resource.downloads} downloads</span>
                      <span className="text-sm text-gray-400">{resource.size}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Download Resource
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Recent Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with our latest technical resources and research materials
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {resource.type}
                      </span>
                      <span className="text-xs text-gray-400">{resource.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3 text-sm">{resource.description}</p>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                      <span>{resource.author}</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Popular Tags
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse resources by topic and technology area
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag, index) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-800/50 to-black/50 text-gray-300 rounded-xl border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
              >
                {tag}
              </motion.button>
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
              Need More Resources?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our team is here to help you access the right resources 
              for your specific needs and use cases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Request Resources
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/support"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Support
              </a>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Resource Updates</h3>
              <p className="text-gray-300 mb-4">
                Stay informed about new resources, updates, and research publications.
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