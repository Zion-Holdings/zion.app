import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, Search, Calendar, User, Tag, ArrowRight, 
  Star, TrendingUp, Brain, Rocket, Globe, Shield,
  Filter, Clock, Eye, Share2, Bookmark
} from 'lucide-react';
import Link from 'next/link';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" /> },
    { id: 'metaverse', name: 'Metaverse & VR', icon: <Globe className="w-4 h-4" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Our latest AI platform achieves unprecedented levels of machine consciousness, opening new possibilities for human-AI collaboration.',
      content: 'Zion Tech Group has announced the launch of its groundbreaking AI Consciousness Platform, marking a significant milestone in artificial intelligence development. The platform demonstrates advanced cognitive capabilities previously thought impossible, including self-awareness, emotional intelligence, and creative problem-solving.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      featured: true,
      tags: ['AI', 'Machine Learning', 'Innovation'],
      image: 'AI-Consciousness'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: 1000-Qubit Processor Achieved',
      excerpt: 'Our quantum computing team has successfully developed a 1000-qubit processor, doubling previous industry records.',
      content: 'In a major breakthrough for quantum computing, Zion Tech Group\'s research team has successfully developed and tested a 1000-qubit quantum processor. This achievement represents a significant step forward in quantum computing capabilities and opens new possibilities for solving complex computational problems.',
      category: 'quantum',
      author: 'Dr. Michael Rodriguez',
      date: '2024-01-12',
      readTime: '4 min read',
      featured: false,
      tags: ['Quantum Computing', 'Research', 'Technology'],
      image: 'Quantum-Processor'
    },
    {
      id: 3,
      title: 'Space Resource Intelligence Platform Deployed in Orbit',
      excerpt: 'Our satellite network successfully deployed, providing real-time analysis of space resources and celestial bodies.',
      content: 'Zion Tech Group has successfully deployed its Space Resource Intelligence Platform into Earth orbit. The platform consists of a network of advanced satellites equipped with AI-powered sensors that can analyze asteroids, comets, and other celestial bodies for valuable resources.',
      category: 'space',
      author: 'Dr. Emily Watson',
      date: '2024-01-10',
      readTime: '6 min read',
      featured: false,
      tags: ['Space Technology', 'Satellites', 'Resources'],
      image: 'Space-Satellite'
    },
    {
      id: 4,
      title: 'Metaverse Development Studio Pro: Redefining Virtual Reality',
      excerpt: 'Our new metaverse development platform enables creators to build immersive virtual worlds with unprecedented ease.',
      content: 'Zion Tech Group has unveiled its Metaverse Development Studio Pro, a comprehensive platform that revolutionizes how virtual worlds are created and experienced. The platform features advanced 3D modeling tools, AI-powered content generation, and seamless integration with existing VR/AR hardware.',
      category: 'metaverse',
      author: 'Alex Thompson',
      date: '2024-01-08',
      readTime: '7 min read',
      featured: false,
      tags: ['Metaverse', 'VR/AR', 'Development'],
      image: 'Metaverse-Studio'
    },
    {
      id: 5,
      title: 'Quantum Cybersecurity: Post-Quantum Encryption Implemented',
      excerpt: 'We\'ve successfully implemented quantum-resistant encryption across our entire security infrastructure.',
      content: 'Zion Tech Group has completed the implementation of quantum-resistant encryption across its entire cybersecurity infrastructure. This milestone ensures that our systems remain secure even against future quantum computing attacks, providing clients with long-term security assurance.',
      category: 'security',
      author: 'Dr. James Kim',
      date: '2024-01-05',
      readTime: '5 min read',
      featured: false,
      tags: ['Cybersecurity', 'Quantum', 'Encryption'],
      image: 'Quantum-Security'
    },
    {
      id: 6,
      title: 'AI-Powered Healthcare Solutions: Transforming Patient Care',
      excerpt: 'Our AI healthcare platform is now deployed in 50+ hospitals, improving diagnosis accuracy by 95%.',
      content: 'Zion Tech Group\'s AI-powered healthcare platform has achieved remarkable success in clinical trials, with 95% improvement in diagnosis accuracy and 40% reduction in patient wait times. The platform is now deployed in over 50 hospitals across the United States.',
      category: 'ai',
      author: 'Dr. Lisa Park',
      date: '2024-01-03',
      readTime: '6 min read',
      featured: false,
      tags: ['Healthcare', 'AI', 'Diagnosis'],
      image: 'AI-Healthcare'
    },
    {
      id: 7,
      title: 'Global Expansion: Zion Tech Group Opens European Headquarters',
      excerpt: 'We\'ve established our European headquarters in Berlin, expanding our global presence and capabilities.',
      content: 'Zion Tech Group has officially opened its European headquarters in Berlin, Germany. This expansion represents our commitment to serving European markets and collaborating with leading European research institutions and technology companies.',
      category: 'all',
      author: 'Maria Schmidt',
      date: '2024-01-01',
      readTime: '3 min read',
      featured: false,
      tags: ['Expansion', 'Europe', 'Global'],
      image: 'European-HQ'
    },
    {
      id: 8,
      title: 'Partnership with NASA: Advancing Space Exploration Technology',
      excerpt: 'We\'ve signed a strategic partnership with NASA to develop next-generation space exploration technologies.',
      content: 'Zion Tech Group has entered into a strategic partnership with NASA to develop advanced space exploration technologies. This collaboration will focus on AI-powered autonomous systems, quantum computing for space applications, and innovative propulsion technologies.',
      category: 'space',
      author: 'Dr. Robert Chen',
      date: '2023-12-28',
      readTime: '5 min read',
      featured: false,
      tags: ['NASA', 'Partnership', 'Space Exploration'],
      image: 'NASA-Partnership'
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const searchMatch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Stay informed about the latest developments in AI, quantum computing, space technology, 
              and the metaverse. Discover how we're shaping the future of technology.
            </p>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <Newspaper className="w-16 h-16" />
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
                placeholder="Search news articles..."
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

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Story
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most important news and announcements
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full">
                      {categories.find(c => c.id === featuredArticle.category)?.name}
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 text-lg">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{featuredArticle.author}</p>
                        <p className="text-gray-400 text-sm">{formatDate(featuredArticle.date)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                        <Bookmark className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                        <Share2 className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticle.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/news/${featuredArticle.id}`}
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Newspaper className="w-16 h-16 text-cyan-400" />
                    </div>
                    <p className="text-gray-300 text-sm">Featured Article</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Latest News */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest News
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay up to date with our latest developments and announcements
            </p>
          </motion.div>

          {regularArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="flex items-center text-gray-400 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3" />
                        </div>
                        <span className="text-gray-400 text-xs">{article.author}</span>
                      </div>
                      <span className="text-gray-400 text-xs">{formatDate(article.date)}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-xs text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href={`/news/${article.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
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
              <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-400 mb-4">No articles match your current filters.</p>
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
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest news, updates, and insights 
              directly in your inbox.
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
    </div>
  );
};

export default News;