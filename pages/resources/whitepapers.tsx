import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Calendar, User, Tag, ArrowRight, Search, Filter } from 'lucide-react';

const WhitepapersPage: React.FC = () => {
  const whitepapers = [
    {
      title: 'AI Consciousness Evolution: The Future of Artificial Intelligence',
      description: 'A comprehensive analysis of AI consciousness development and its implications for the future of technology.',
      author: 'Dr. Sarah Chen',
      date: '2025',
      category: 'AI & Consciousness',
      downloads: 1247,
      views: 8923,
      tags: ['AI', 'Consciousness', 'Technology', 'Future'],
      pdfUrl: '/whitepapers/ai-consciousness-evolution-2025.pdf'
    },
    {
      title: 'Quantum Computing in Enterprise: Practical Applications and ROI',
      description: 'Real-world applications of quantum computing in business environments and measurable return on investment.',
      author: 'Dr. Michael Rodriguez',
      date: '2025',
      category: 'Quantum Technology',
      downloads: 892,
      views: 6541,
      tags: ['Quantum Computing', 'Enterprise', 'ROI', 'Applications'],
      pdfUrl: '/whitepapers/quantum-computing-enterprise-2025.pdf'
    },
    {
      title: 'Cybersecurity in the Age of AI: Threats and Defenses',
      description: 'Analysis of emerging AI-powered cyber threats and advanced defense strategies for modern organizations.',
      author: 'Dr. Emily Watson',
      date: '2025',
      category: 'Cybersecurity',
      downloads: 1567,
      views: 11234,
      tags: ['Cybersecurity', 'AI', 'Threats', 'Defense'],
      pdfUrl: '/whitepapers/cybersecurity-ai-age-2025.pdf'
    },
    {
      title: 'Space Technology Commercialization: Opportunities and Challenges',
      description: 'Comprehensive guide to commercial space technology opportunities and overcoming industry challenges.',
      author: 'Dr. James Thompson',
      date: '2025',
      category: 'Space Technology',
      downloads: 734,
      views: 5432,
      tags: ['Space Technology', 'Commercialization', 'Opportunities'],
      pdfUrl: '/whitepapers/space-technology-commercialization-2025.pdf'
    },
    {
      title: 'Business Process Automation: From Theory to Implementation',
      description: 'Practical guide to implementing business process automation with real-world case studies and best practices.',
      author: 'Dr. Lisa Park',
      date: '2025',
      category: 'Business Solutions',
      downloads: 1103,
      views: 7892,
      tags: ['Automation', 'Business Process', 'Implementation'],
      pdfUrl: '/whitepapers/business-process-automation-2025.pdf'
    },
    {
      title: 'IT Infrastructure Modernization: Cloud Migration Strategies',
      description: 'Strategic approaches to modernizing IT infrastructure with cloud migration and hybrid cloud solutions.',
      author: 'Dr. Robert Kim',
      date: '2025',
      category: 'IT Infrastructure',
      downloads: 945,
      views: 6789,
      tags: ['IT Infrastructure', 'Cloud Migration', 'Modernization'],
      pdfUrl: '/whitepapers/it-infrastructure-modernization-2025.pdf'
    }
  ];

  const categories = ['All', 'AI & Consciousness', 'Quantum Technology', 'Cybersecurity', 'Space Technology', 'Business Solutions', 'IT Infrastructure'];

  return (
    <Layout
      title="Technical Whitepapers - Zion Tech Group"
      description="Access our comprehensive collection of technical whitepapers covering AI consciousness, quantum computing, cybersecurity, and more cutting-edge technology topics."
      keywords="technical whitepapers, research papers, AI consciousness, quantum computing, cybersecurity, space technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Technical Resources
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Technical Whitepapers
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Access our comprehensive collection of technical whitepapers covering the latest advancements in AI consciousness, quantum computing, cybersecurity, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Download All Whitepapers
                </button>
                <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                  Subscribe to Updates
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search whitepapers..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-4">
                <Filter className="text-gray-400 w-5 h-5" />
                <select className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Whitepapers Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitepapers.map((whitepaper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/60 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                      {whitepaper.category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Eye className="w-4 h-4" />
                      <span>{whitepaper.views.toLocaleString()}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {whitepaper.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {whitepaper.description}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{whitepaper.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{whitepaper.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {whitepaper.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Download className="w-4 h-4" />
                      <span>{whitepaper.downloads.toLocaleString()} downloads</span>
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                      <span>Download</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated with Latest Research
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Get notified when we publish new whitepapers and technical research documents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WhitepapersPage;