import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag, BookOpen } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: What to Expect in 2045',
      excerpt: 'Explore the revolutionary developments in AI consciousness and how they will transform our understanding of artificial intelligence.',
      author: 'Zion Tech Team',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Consciousness',
      tags: ['AI', 'Consciousness', 'Future Tech', 'Innovation'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: Reshaping Cybersecurity',
      excerpt: 'Discover how quantum computing is revolutionizing cybersecurity and what it means for the future of digital security.',
      author: 'Quantum Team',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Quantum Technology',
      tags: ['Quantum Computing', 'Cybersecurity', 'Technology'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Space Technology Innovations: Mining Beyond Earth',
      excerpt: 'Learn about the latest developments in space mining technology and how we\'re preparing for interplanetary resource extraction.',
      author: 'Space Tech Team',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Space Technology',
      tags: ['Space Tech', 'Mining', 'Innovation', 'Future'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Autonomous DevOps: The Future of Software Development',
      excerpt: 'Explore how autonomous DevOps platforms are transforming software development and deployment processes.',
      author: 'DevOps Team',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'IT Services',
      tags: ['DevOps', 'Automation', 'Software Development'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'AI-Powered Business Intelligence: Transforming Decision Making',
      excerpt: 'Discover how AI is revolutionizing business intelligence and enabling data-driven decision making at unprecedented levels.',
      author: 'AI Team',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'AI & Consciousness',
      tags: ['AI', 'Business Intelligence', 'Data Analytics'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'The Evolution of Micro SAAS Platforms in 2025',
      excerpt: 'Explore the growing trend of micro SAAS platforms and how they\'re changing the software industry landscape.',
      author: 'Product Team',
      date: '2025-01-03',
      readTime: '5 min read',
      category: 'Micro SAAS',
      tags: ['SAAS', 'Micro Platforms', 'Software Industry'],
      image: '/api/placeholder/600/400'
    }
  ];

  const categories = [
    'All Categories',
    'AI & Consciousness',
    'Quantum Technology',
    'Space Technology',
    'IT Services',
    'Micro SAAS',
    'Innovation'
  ];

  const popularTags = [
    'AI', 'Quantum Computing', 'Space Tech', 'Innovation', 'Technology', 'Future', 'Cybersecurity', 'DevOps'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Insights & Updates</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Stay updated with the latest insights, innovations, and developments 
                in AI consciousness, quantum computing, and space technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1 max-w-md"
              >
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                  />
                </div>
              </motion.div>

              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <Filter className="w-5 h-5 text-gray-400" />
                <select className="px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200">
                  {categories.map((category, index) => (
                    <option key={index} value={category.toLowerCase().replace(/\s+/g, '-')}>
                      {category}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Article
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our latest insights on the cutting edge of technology innovation.
              </p>
            </motion.div>

            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-purple-500/30">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-6 text-gray-400 mb-6">
                        <span className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="relative h-64 lg:h-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl"></div>
                      <div className="relative h-full flex items-center justify-center">
                        <BookOpen className="w-32 h-32 text-purple-400/50" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our collection of insights, tutorials, and thought leadership content.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-purple-500/30 h-full">
                    <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-purple-400/50" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full px-4 py-2 border border-purple-500/30 text-purple-300 font-medium rounded-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center space-x-2">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Tags Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Popular Topics
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {popularTags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-full hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 cursor-pointer"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated with Innovation
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Subscribe to our newsletter and never miss the latest insights 
                on AI, quantum computing, and space technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-purple-500/20 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}