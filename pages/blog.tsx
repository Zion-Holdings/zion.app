import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, Calendar, User, Tag, ArrowRight, 
  Search, Filter, Clock, Eye, Heart
} from 'lucide-react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 25 },
    { id: 'ai', name: 'Artificial Intelligence', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 6 },
    { id: 'space-tech', name: 'Space Technology', count: 5 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4 },
    { id: 'industry-insights', name: 'Industry Insights', count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI: From Automation to Consciousness',
      excerpt: 'Exploring how artificial intelligence is evolving beyond simple automation to develop genuine consciousness and understanding.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      image: '/api/placeholder/600/400',
      views: 1247,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: What\'s Next?',
      excerpt: 'Recent developments in quantum computing and their implications for cryptography, drug discovery, and complex problem solving.',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'quantum',
      image: '/api/placeholder/600/400',
      views: 892,
      likes: 67,
      featured: true
    },
    {
      id: 3,
      title: 'Space Mining: The Next Frontier of Resource Extraction',
      excerpt: 'How space technology is revolutionizing resource extraction and what it means for Earth\'s future sustainability.',
      author: 'Dr. Emily Watson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'space-tech',
      image: '/api/placeholder/600/400',
      views: 756,
      likes: 54,
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding how AI is both creating new security challenges and providing innovative solutions to protect digital assets.',
      author: 'Alex Thompson',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'cybersecurity',
      image: '/api/placeholder/400/250',
      views: 634,
      likes: 42,
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Autonomous Systems in Enterprise IT',
      excerpt: 'How self-managing IT infrastructure is transforming business operations and reducing operational overhead.',
      author: 'Maria Garcia',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'ai',
      image: '/api/placeholder/400/250',
      views: 521,
      likes: 38,
      featured: false
    },
    {
      id: 6,
      title: 'Quantum Cryptography: The Future of Secure Communication',
      excerpt: 'Exploring quantum key distribution and its potential to revolutionize cybersecurity and data protection.',
      author: 'Dr. James Wilson',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'quantum',
      image: '/api/placeholder/400/250',
      views: 445,
      likes: 31,
      featured: false
    },
    {
      id: 7,
      title: 'Sustainable Technology: Green Solutions for a Better Future',
      excerpt: 'How technology companies are embracing sustainability and developing eco-friendly solutions.',
      author: 'Lisa Chen',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'industry-insights',
      image: '/api/placeholder/400/250',
      views: 398,
      likes: 28,
      featured: false
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];
  
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Updates</title>
        <meta name="description" content="Stay updated with the latest insights in AI, quantum computing, space technology, and cybersecurity from Zion Tech Group experts." />
        <meta name="keywords" content="blog, technology insights, AI, quantum computing, space technology, cybersecurity, Zion Tech Group" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights and updates in technology from our experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
      </Head>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Technology Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights on AI, quantum computing, space technology, 
            and the latest trends shaping the future of technology.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category.name}
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Posts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Articles</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/40 to-blue-900/20 rounded-2xl border border-gray-600/20 overflow-hidden hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-blue-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{post.author}</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                    </div>
                    <a 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Recent Posts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Latest Articles</h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No Articles Found</h3>
              <p className="text-gray-500">
                Try adjusting your search terms or category filter to find relevant articles.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/40 to-purple-900/20 rounded-2xl border border-gray-600/20 overflow-hidden hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-purple-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{post.author}</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </span>
                      </div>
                      <a 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Get the latest technology insights and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}