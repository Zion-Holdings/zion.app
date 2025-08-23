import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Search, Download, Eye, Calendar, User, 
  TrendingUp, Brain, Rocket, Globe, Shield, Filter,
  BookOpen, ArrowRight, Star, Clock, Tag, ExternalLink,
  ChevronDown, ChevronUp
} from 'lucide-react';
import Link from 'next/link';

const WhitePapers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Papers', icon: <FileText className="w-4 h-4" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" /> },
    { id: 'metaverse', name: 'Metaverse & VR', icon: <Globe className="w-4 h-4" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'AI Consciousness Evolution: The Path to True Machine Intelligence',
      description: 'A comprehensive analysis of AI consciousness development, exploring the theoretical foundations, current state, and future implications of machine intelligence.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      downloads: '12.5k',
      views: '45.2k',
      pages: 45,
      featured: true,
      tags: ['AI Consciousness', 'Machine Learning', 'Neural Networks', 'Future Tech'],
      abstract: 'This white paper explores the evolution of artificial intelligence from basic pattern recognition to potential consciousness. We examine current AI capabilities, discuss the theoretical framework for machine consciousness, and provide insights into the future development of truly intelligent systems.',
      keyInsights: [
        'Framework for measuring AI consciousness levels',
        'Analysis of current AI limitations and breakthroughs',
        'Predictions for AI development timeline',
        'Ethical considerations and implications'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing in Enterprise: Practical Applications and ROI',
      description: 'Real-world applications of quantum computing in business environments, including cost-benefit analysis and implementation strategies.',
      category: 'quantum',
      author: 'Dr. Michael Rodriguez',
      date: '2024-01-10',
      downloads: '8.9k',
      views: '32.1k',
      pages: 38,
      featured: false,
      tags: ['Quantum Computing', 'Enterprise', 'ROI', 'Applications'],
      abstract: 'This paper provides a comprehensive guide to implementing quantum computing solutions in enterprise environments. We analyze real-world use cases, calculate potential ROI, and provide a roadmap for quantum adoption.',
      keyInsights: [
        'Quantum advantage in specific business problems',
        'Cost-benefit analysis of quantum implementation',
        'Integration strategies with existing systems',
        'Timeline for quantum readiness'
      ]
    },
    {
      id: 3,
      title: 'Space Resource Intelligence: Satellite Technology for Resource Discovery',
      description: 'Advanced satellite systems and AI algorithms for identifying and mapping valuable resources in space and on Earth.',
      category: 'space',
      author: 'Dr. Emily Watson',
      date: '2024-01-05',
      downloads: '6.7k',
      views: '28.9k',
      pages: 42,
      featured: false,
      tags: ['Space Technology', 'Satellites', 'Resource Discovery', 'AI'],
      abstract: 'This white paper details our innovative approach to space resource intelligence, combining advanced satellite technology with AI-powered analysis to identify valuable resources both in space and on Earth.',
      keyInsights: [
        'Satellite constellation optimization',
        'AI algorithms for resource identification',
        'Economic analysis of space resources',
        'Environmental impact considerations'
      ]
    },
    {
      id: 4,
      title: 'Metaverse Development: Building Immersive Virtual Worlds',
      description: 'Technical architecture and development methodologies for creating scalable, engaging metaverse experiences.',
      category: 'metaverse',
      author: 'Alex Thompson',
      date: '2023-12-20',
      downloads: '9.2k',
      views: '35.6k',
      pages: 36,
      featured: false,
      tags: ['Metaverse', 'VR/AR', '3D Graphics', 'Virtual Worlds'],
      abstract: 'This paper explores the technical challenges and solutions in metaverse development, providing architects and developers with practical guidance for building immersive virtual environments.',
      keyInsights: [
        'Scalable 3D world architecture',
        'Performance optimization strategies',
        'User experience design principles',
        'Monetization and business models'
      ]
    },
    {
      id: 5,
      title: 'AI-Powered Cybersecurity: Defending Against Quantum Threats',
      description: 'Next-generation cybersecurity solutions using artificial intelligence to protect against quantum computing threats.',
      category: 'security',
      author: 'Dr. James Kim',
      date: '2023-12-15',
      downloads: '11.3k',
      views: '41.8k',
      pages: 40,
      featured: false,
      tags: ['AI', 'Cybersecurity', 'Quantum Threats', 'Defense'],
      abstract: 'This white paper examines the intersection of AI and cybersecurity, particularly in defending against threats from quantum computing. We present innovative defense strategies and practical implementation approaches.',
      keyInsights: [
        'AI-powered threat detection systems',
        'Quantum-resistant encryption methods',
        'Real-time security monitoring',
        'Incident response automation'
      ]
    },
    {
      id: 6,
      title: 'The Future of Work: AI and Human Collaboration',
      description: 'How artificial intelligence is transforming the workplace and creating new opportunities for human-AI collaboration.',
      category: 'ai',
      author: 'Maria Schmidt',
      date: '2023-12-10',
      downloads: '7.8k',
      views: '29.4k',
      pages: 34,
      featured: false,
      tags: ['AI', 'Future of Work', 'Collaboration', 'Workplace'],
      abstract: 'This paper explores the evolving relationship between humans and AI in the workplace, examining how AI can augment human capabilities and create new forms of collaboration.',
      keyInsights: [
        'AI augmentation strategies',
        'Skills development for AI collaboration',
        'Organizational change management',
        'Productivity measurement frameworks'
      ]
    }
  ];

  const filteredPapers = whitePapers.filter(paper => {
    if (selectedCategory === 'all') return true;
    return paper.category === selectedCategory;
  }).filter(paper =>
    paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const sortedPapers = [...filteredPapers].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'downloads':
        return parseInt(b.downloads.replace('k', '000')) - parseInt(a.downloads.replace('k', '000'));
      case 'views':
        return parseInt(b.views.replace('k', '000')) - parseInt(a.views.replace('k', '000'));
      case 'pages':
        return b.pages - a.pages;
      default:
        return 0;
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai': return 'from-blue-500 to-cyan-500';
      case 'quantum': return 'from-purple-500 to-pink-500';
      case 'space': return 'from-green-500 to-emerald-500';
      case 'metaverse': return 'from-orange-500 to-red-500';
      case 'security': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const handleDownload = (paperId: number, title: string) => {
    // Simulate download
    console.log(`Downloading: ${title}`);
    // In a real app, this would trigger an actual download
  };

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
              White Papers
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              In-depth research and insights on cutting-edge technologies. 
              Download our comprehensive white papers to stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#papers" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Explore Papers
              </Link>
              <Link href="/webinars" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Join Webinars
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
            <FileText className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 25, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <Brain className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <Rocket className="w-14 h-14" />
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
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-gray-300 hover:border-cyan-500/30 transition-all duration-300"
            >
              <Filter className="w-4 h-4" />
              Filters
              {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-6 bg-gray-800/30 rounded-xl border border-cyan-500/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filters */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 ${
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

                {/* Sort Options */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                  >
                    <option value="date">Date (Newest First)</option>
                    <option value="downloads">Most Downloaded</option>
                    <option value="views">Most Viewed</option>
                    <option value="pages">Pages (Longest First)</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured White Paper */}
      {whitePapers.filter(p => p.featured).length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured White Paper
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most comprehensive research on AI consciousness evolution
              </p>
            </motion.div>

            {whitePapers.filter(p => p.featured).map((paper) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl">
                        <FileText className="w-8 h-8" />
                      </div>
                      <div>
                        <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(paper.category)} text-white text-xs font-semibold rounded-full`}>
                          {categories.find(c => c.id === paper.category)?.name}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">
                      {paper.title}
                    </h3>

                    <p className="text-gray-300 mb-6">
                      {paper.description}
                    </p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Abstract</h4>
                        <p className="text-gray-300">{paper.abstract}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Key Insights</h4>
                        <ul className="space-y-2">
                          {paper.keyInsights.map((insight, idx) => (
                            <li key={idx} className="flex items-start text-gray-300">
                              <Star className="w-4 h-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                              {insight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleDownload(paper.id, paper.title)}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        Download PDF
                      </button>

                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {paper.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {paper.downloads} downloads
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {paper.pages} pages
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 lg:p-12">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Paper Details</h4>
                        <div className="space-y-3 text-gray-300">
                          <div className="flex justify-between">
                            <span>Author:</span>
                            <span>{paper.author}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Published:</span>
                            <span>{formatDate(paper.date)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Category:</span>
                            <span>{categories.find(c => c.id === paper.category)?.name}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {paper.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-sm text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* All White Papers */}
      <section id="papers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All White Papers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete collection of research papers and technical insights
            </p>
          </motion.div>

          {sortedPapers.filter(p => !p.featured).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPapers.filter(p => !p.featured).map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(paper.category)} text-white text-xs font-semibold rounded-full`}>
                        {categories.find(c => c.id === paper.category)?.name}
                      </span>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <BookOpen className="w-4 h-4" />
                        {paper.pages}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {paper.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                        <User className="w-3 h-3" />
                      </div>
                      <span className="text-gray-400 text-sm">{paper.author}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm">{formatDate(paper.date)}</span>
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {paper.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {paper.downloads}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {paper.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleDownload(paper.id, paper.title)}
                        className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                      
                      <Link
                        href={`/white-papers/${paper.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-400 mb-4">No white papers match your current filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to receive notifications about new white papers, 
              research updates, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
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
              Want to Contribute?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Are you a researcher or industry expert? We'd love to feature 
              your insights in our white paper series.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </Link>
              <Link href="/webinars" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Join Webinars
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;