import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Download, Calendar, User, ArrowRight, 
  Search, Filter, Tag, Clock, Eye, Star, 
  Brain, Atom, Rocket, Shield, Globe, Zap
} from 'lucide-react';
import Link from 'next/link';

export default function WhitePapers() {
  const featuredPapers = [
    {
      title: 'AI Consciousness: The Next Evolution of Artificial Intelligence',
      description: 'A comprehensive analysis of consciousness simulation in AI systems, exploring the theoretical foundations and practical implications for the future of technology.',
      author: 'Dr. Kleber Vasconcelos',
      date: '2025-01-15',
      category: 'AI & Consciousness',
      pages: 45,
      downloads: '2.5K',
      image: '🧠',
      featured: true,
      downloadUrl: '/white-papers/ai-consciousness-evolution',
      abstract: 'This paper presents a groundbreaking framework for understanding and implementing artificial consciousness in AI systems...'
    },
    {
      title: 'Quantum Computing in Cybersecurity: Preparing for the Post-Quantum Era',
      description: 'An in-depth examination of quantum-resistant cryptography and security protocols that will protect digital infrastructure in the quantum computing age.',
      author: 'Quantum Security Team',
      date: '2025-01-10',
      category: 'Quantum Security',
      pages: 38,
      downloads: '1.8K',
      image: '🔐',
      featured: true,
      downloadUrl: '/white-papers/quantum-cybersecurity-post-quantum',
      abstract: 'As quantum computing advances, traditional cryptographic methods become vulnerable...'
    },
    {
      title: 'Autonomous Business Operations: The Future of Enterprise Management',
      description: 'Exploring how autonomous AI systems are transforming business operations, from decision-making to resource optimization and customer service.',
      author: 'Enterprise Solutions Team',
      date: '2025-01-05',
      category: 'Autonomous Systems',
      pages: 52,
      downloads: '1.2K',
      image: '🤖',
      featured: true,
      downloadUrl: '/white-papers/autonomous-business-operations',
      abstract: 'The integration of autonomous AI systems in business operations represents a paradigm shift...'
    }
  ];

  const whitePapers = [
    {
      title: 'Space Resource Mining: Autonomous Systems for Asteroid Exploration',
      description: 'Technical analysis of autonomous space systems for resource extraction and the economic implications of space mining.',
      author: 'Space Technology Team',
      date: '2024-12-20',
      category: 'Space Technology',
      pages: 41,
      downloads: '950',
      image: '🚀',
      downloadUrl: '/white-papers/space-resource-mining-autonomous',
      abstract: 'The development of autonomous space systems for resource extraction opens new frontiers...'
    },
    {
      title: 'AI Ethics and Governance: Framework for Responsible Development',
      description: 'Comprehensive guidelines for developing AI systems that are ethical, transparent, and beneficial to humanity.',
      author: 'AI Ethics Team',
      date: '2024-12-15',
      category: 'AI Ethics',
      pages: 35,
      downloads: '1.1K',
      image: '⚖️',
      downloadUrl: '/white-papers/ai-ethics-governance-framework',
      abstract: 'As AI systems become more sophisticated, ethical considerations become paramount...'
    },
    {
      title: 'Quantum Neural Networks: Merging Quantum Computing with AI',
      description: 'Technical exploration of quantum-enhanced neural networks and their applications in machine learning and pattern recognition.',
      author: 'Quantum AI Team',
      date: '2024-12-10',
      category: 'Quantum AI',
      pages: 48,
      downloads: '800',
      image: '🧬',
      downloadUrl: '/white-papers/quantum-neural-networks-merging',
      abstract: 'The convergence of quantum computing and artificial intelligence represents a revolutionary advancement...'
    },
    {
      title: 'Financial AI: Risk Assessment and Predictive Modeling',
      description: 'Advanced AI techniques for financial risk assessment, fraud detection, and market prediction in volatile economic environments.',
      author: 'Financial AI Team',
      date: '2024-12-05',
      category: 'Financial AI',
      pages: 39,
      downloads: '1.3K',
      image: '💰',
      downloadUrl: '/white-papers/financial-ai-risk-assessment',
      abstract: 'Artificial intelligence is transforming the financial industry through advanced risk modeling...'
    },
    {
      title: 'Edge Computing and AI: Distributed Intelligence for IoT',
      description: 'Architecture and implementation strategies for deploying AI at the edge, enabling real-time processing and decision-making.',
      author: 'Edge Computing Team',
      date: '2024-11-30',
      category: 'Edge Computing',
      pages: 43,
      downloads: '750',
      image: '⚡',
      downloadUrl: '/white-papers/edge-computing-ai-distributed',
      abstract: 'The proliferation of IoT devices and the need for real-time processing drive the adoption of edge AI...'
    },
    {
      title: 'Blockchain and AI: Decentralized Intelligence Systems',
      description: 'Exploring the convergence of blockchain technology and artificial intelligence for creating secure, transparent, and autonomous systems.',
      author: 'Blockchain AI Team',
      date: '2024-11-25',
      category: 'Blockchain AI',
      pages: 36,
      downloads: '600',
      image: '🔗',
      downloadUrl: '/white-papers/blockchain-ai-decentralized-intelligence',
      abstract: 'The combination of blockchain and AI technologies creates new possibilities for decentralized systems...'
    }
  ];

  const categories = [
    { name: 'AI & Consciousness', count: 12, icon: '🧠' },
    { name: 'Quantum Technology', count: 8, icon: '⚛️' },
    { name: 'Autonomous Systems', count: 10, icon: '🤖' },
    { name: 'Space Technology', count: 6, icon: '🚀' },
    { name: 'AI Ethics', count: 5, icon: '⚖️' },
    { name: 'Financial AI', count: 7, icon: '💰' },
    { name: 'Cybersecurity', count: 9, icon: '🔐' },
    { name: 'Edge Computing', count: 4, icon: '⚡' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            White Papers & Research
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            In-depth research and technical analysis on AI consciousness, quantum computing, 
            autonomous systems, and emerging technologies.
          </motion.p>
          
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search white papers..."
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Papers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Featured Research
          </motion.h2>
          
          <div className="space-y-8">
            {featuredPapers.map((paper, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/30"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="text-6xl mb-4 text-center">
                      {paper.image}
                    </div>
                    <div className="text-center lg:text-left">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30 mb-3">
                        Featured Research
                      </span>
                      <h3 className="text-2xl font-bold mb-2">
                        {paper.title}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-2">
                        {paper.category}
                      </p>
                      <div className="flex flex-col gap-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {paper.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(paper.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          {paper.pages} pages • {paper.downloads} downloads
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                      {paper.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-3 text-cyan-400">Abstract</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {paper.abstract}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        href={paper.downloadUrl}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center flex items-center justify-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        Download White Paper
                      </Link>
                      <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                        <Eye className="w-5 h-5" />
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Browse by Category
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/white-papers/category/${category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/10 text-center">
                    <div className="text-4xl mb-3">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {category.count} papers
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            All Research Papers
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={paper.downloadUrl}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/10">
                    <div className="text-4xl mb-4 text-center">
                      {paper.image}
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                        {paper.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {paper.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Abstract</h4>
                      <p className="text-gray-300 text-sm">
                        {paper.abstract}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {paper.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        {paper.pages} pages
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {new Date(paper.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      <div className="flex items-center gap-2 text-cyan-400">
                        <span className="text-sm">Download</span>
                        <Download className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Informed with Latest Research
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get access to cutting-edge research and technical insights on the future of AI consciousness, 
              quantum computing, and autonomous systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Research
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/resources"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}