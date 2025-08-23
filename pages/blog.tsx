import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, Clock, ArrowRight, Search, Filter, Tag } from 'lucide-react';
import Layout from '../components/layout/Layout';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI Consciousness: A 2025 Perspective',
    excerpt: 'Exploring the latest developments in AI consciousness evolution and what it means for the future of technology and humanity.',
    author: 'Dr. Kleber M. Santos',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'AI & Consciousness',
    tags: ['AI', 'Consciousness', 'Future Tech', 'Research'],
    featured: true,
    image: '🧠'
  },
  {
    id: 2,
    title: 'Quantum Computing Breakthroughs: What\'s New in 2025',
    excerpt: 'Latest developments in quantum computing and how they\'re revolutionizing industries from finance to materials science.',
    author: 'Quantum Research Team',
    date: '2025-01-12',
    readTime: '6 min read',
    category: 'Quantum Computing',
    tags: ['Quantum', 'Computing', 'Innovation', 'Technology'],
    featured: true,
    image: '⚛️'
  },
  {
    id: 3,
    title: 'Space Resource Mining: The Next Frontier',
    excerpt: 'How AI-powered space technology is enabling resource extraction from asteroids and other celestial bodies.',
    author: 'Space Technology Division',
    date: '2025-01-10',
    readTime: '10 min read',
    category: 'Space Technology',
    tags: ['Space', 'Mining', 'AI', 'Resources'],
    featured: false,
    image: '🚀'
  },
  {
    id: 4,
    title: 'Autonomous Business Operations: A Complete Guide',
    excerpt: 'Comprehensive guide to implementing autonomous systems that can run your business operations 24/7.',
    author: 'Automation Experts',
    date: '2025-01-08',
    readTime: '12 min read',
    category: 'Business Automation',
    tags: ['Automation', 'Business', 'AI', 'Operations'],
    featured: false,
    image: '⚡'
  },
  {
    id: 5,
    title: 'Zero Trust Security in the Quantum Era',
    excerpt: 'Implementing quantum-resistant security protocols for the post-quantum computing world.',
    author: 'Security Team',
    date: '2025-01-05',
    readTime: '7 min read',
    category: 'Cybersecurity',
    tags: ['Security', 'Quantum', 'Zero Trust', 'Cybersecurity'],
    featured: false,
    image: '🛡️'
  },
  {
    id: 6,
    title: 'The Rise of Micro SAAS: 2025 Trends and Opportunities',
    excerpt: 'Exploring the growing trend of micro SAAS solutions and how they\'re transforming business operations.',
    author: 'Product Strategy Team',
    date: '2025-01-03',
    readTime: '9 min read',
    category: 'Business Strategy',
    tags: ['SAAS', 'Business', 'Strategy', 'Innovation'],
    featured: false,
    image: '💼'
  }
];

const categories = [
  'All Posts',
  'AI & Consciousness',
  'Quantum Computing',
  'Space Technology',
  'Business Automation',
  'Cybersecurity',
  'Business Strategy'
];

const featuredTags = [
  'AI', 'Quantum', 'Space', 'Automation', 'Security', 'Innovation', 'Technology', 'Research'
];

export default function Blog() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-600 bg-clip-text text-transparent mb-6">
                Blog & Insights
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest insights, research, and developments in AI, quantum computing, and emerging technologies
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20"
                  />
                </div>
                <button className="px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filter
                </button>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      index === 0
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {featuredTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700/50 hover:border-purple-400/50 hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and insightful articles on cutting-edge technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-6xl mb-6">{post.image}</div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                      {post.category}
                    </span>
                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent mb-6">
                All Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse our complete collection of articles and insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                      {post.category}
                    </span>
                    <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm group">
                      Read
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest insights and updates delivered directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
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