import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, FileText, Calendar, User, Tag, ArrowRight, 
  TrendingUp, Star, Clock, Eye, Heart, Share2
} from 'lucide-react';
import Link from 'next/link';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog data - in a real app, this would come from a CMS or API
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI Consciousness: What's Next in 2025",
      excerpt: "Exploring the latest breakthroughs in AI consciousness research and what it means for the future of human-AI collaboration.",
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "AI Research",
      featured: true,
      image: "/api/placeholder/600/400",
      tags: ["AI Consciousness", "Research", "Future Tech"]
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: Solving Impossible Problems",
      excerpt: "How our quantum computing platform is revolutionizing industries from finance to drug discovery.",
      author: "Dr. Michael Rodriguez",
      date: "2025-01-12",
      readTime: "12 min read",
      category: "Quantum Computing",
      featured: true,
      image: "/api/placeholder/600/400",
      tags: ["Quantum Computing", "Innovation", "Technology"]
    },
    {
      id: 3,
      title: "Space Technology Revolution: Mining Asteroids and Beyond",
      excerpt: "The future of space exploration and resource extraction through autonomous AI systems.",
      author: "Alex Thompson",
      date: "2025-01-10",
      readTime: "10 min read",
      category: "Space Technology",
      featured: true,
      image: "/api/placeholder/600/400",
      tags: ["Space Tech", "AI", "Exploration"]
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Cybersecurity in the Age of AI: New Threats and Solutions",
      excerpt: "Understanding how AI is changing the cybersecurity landscape and our innovative defense strategies.",
      author: "Jennifer Park",
      date: "2025-01-08",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250",
      tags: ["Cybersecurity", "AI", "Security"]
    },
    {
      id: 5,
      title: "Edge Computing: Bringing AI to the Edge of the Network",
      excerpt: "How edge computing is enabling real-time AI processing and transforming IoT applications.",
      author: "David Kim",
      date: "2025-01-06",
      readTime: "7 min read",
      category: "Edge Computing",
      image: "/api/placeholder/400/250",
      tags: ["Edge Computing", "IoT", "AI"]
    },
    {
      id: 6,
      title: "The Rise of Autonomous Business Systems",
      excerpt: "How autonomous AI systems are revolutionizing business operations and decision-making.",
      author: "Dr. Sarah Chen",
      date: "2025-01-04",
      readTime: "9 min read",
      category: "AI Business",
      image: "/api/placeholder/400/250",
      tags: ["Autonomous Systems", "Business", "AI"]
    },
    {
      id: 7,
      title: "Sustainable Technology: Green AI and Quantum Solutions",
      excerpt: "Our commitment to developing environmentally conscious technology solutions.",
      author: "Maria Garcia",
      date: "2025-01-02",
      readTime: "5 min read",
      category: "Sustainability",
      image: "/api/placeholder/400/250",
      tags: ["Sustainability", "Green Tech", "AI"]
    },
    {
      id: 8,
      title: "Digital Transformation: A Complete Guide for Enterprises",
      excerpt: "Comprehensive strategies for enterprises looking to embrace AI and digital transformation.",
      author: "Robert Chen",
      date: "2024-12-30",
      readTime: "15 min read",
      category: "Digital Transformation",
      image: "/api/placeholder/400/250",
      tags: ["Digital Transformation", "Enterprise", "Strategy"]
    },
    {
      id: 9,
      title: "The Future of Work: AI-Augmented Human Intelligence",
      excerpt: "How AI is enhancing human capabilities and creating new opportunities in the workplace.",
      author: "Lisa Wang",
      date: "2024-12-28",
      readTime: "11 min read",
      category: "Future of Work",
      image: "/api/placeholder/400/250",
      tags: ["Future of Work", "Human-AI", "Workplace"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: featuredPosts.length + recentPosts.length },
    { id: 'ai-research', name: 'AI Research', count: 12 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 8 },
    { id: 'space-technology', name: 'Space Technology', count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 10 },
    { id: 'edge-computing', name: 'Edge Computing', count: 7 },
    { id: 'business', name: 'Business & Strategy', count: 15 },
    { id: 'sustainability', name: 'Sustainability', count: 5 }
  ];

  const popularTags = [
    "AI Consciousness", "Quantum Computing", "Space Tech", "Cybersecurity", 
    "Edge Computing", "Digital Transformation", "Sustainability", "Innovation",
    "Research", "Technology", "Business", "Future"
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? [...featuredPosts, ...recentPosts]
    : [...featuredPosts, ...recentPosts].filter(post => 
        post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Hero Section */}
        <motion.section 
          className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-blue-900/5"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Zion Tech Blog
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Insights, breakthroughs, and the future of technology from our world-class research team
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, research, and insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Categories Filter */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Posts */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Articles
            </motion.h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/25">
                    <div className="relative h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                        <p className="text-gray-400">Featured Article</p>
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-xs">
                          {post.category}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Recent Posts Grid */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Latest Insights
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(3, 9).map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-cyan-500/25">
                    <div className="relative h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
                      <div className="text-center">
                        <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                        <p className="text-gray-400 text-sm">Article</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-xs">
                          {post.category}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Popular Tags */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-white mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Popular Topics
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-3">
              {popularTags.map((tag, index) => (
                <motion.button
                  key={tag}
                  className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-xl border border-gray-700/50 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  #{tag}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Newsletter Signup */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Stay Updated
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Get the latest insights, research breakthroughs, and technology updates delivered to your inbox.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Subscribe
              </button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default BlogPage;