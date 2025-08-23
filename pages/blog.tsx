import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Calendar, User, ArrowRight, Search, 
  Filter, Tag, Clock, Eye, Heart, Share2
} from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const featuredPosts = [
    {
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Exploring the next evolution of artificial intelligence and how consciousness simulation is reshaping our understanding of AI capabilities.',
      author: 'AI Research Team',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Consciousness',
      image: '🧠',
      featured: true
    },
    {
      title: 'Quantum Computing in Cybersecurity: The Next Generation of Protection',
      excerpt: 'How quantum computing is revolutionizing cybersecurity and creating unbreakable encryption methods for the digital age.',
      author: 'Quantum Engineering Team',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Quantum Technology',
      image: '🔐',
      featured: true
    },
    {
      title: 'Autonomous Business Systems: The Future of Enterprise Operations',
      excerpt: 'Discover how autonomous AI systems are transforming business operations and creating self-managing organizations.',
      author: 'Enterprise Solutions Team',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Enterprise AI',
      image: '🏢',
      featured: true
    }
  ];

  const recentPosts = [
    {
      title: 'AI Ethics and Governance: Building Responsible AI Systems',
      excerpt: 'Essential guidelines for developing AI systems that are not only powerful but also ethical and beneficial to humanity.',
      author: 'AI Ethics Team',
      date: '2025-01-08',
      readTime: '5 min read',
      category: 'AI Ethics',
      image: '⚖️'
    },
    {
      title: 'Space Resource Mining: The Next Frontier of Resource Extraction',
      excerpt: 'Exploring the potential of autonomous space systems for mining valuable resources from asteroids and other celestial bodies.',
      author: 'Space Technology Team',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'Space Technology',
      image: '🚀'
    },
    {
      title: 'Quantum Neural Networks: Merging Quantum Computing with AI',
      excerpt: 'How quantum computing is enhancing neural network capabilities and opening new possibilities in artificial intelligence.',
      author: 'Quantum AI Team',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Quantum AI',
      image: '🧬'
    },
    {
      title: 'Autonomous DevOps: Self-Healing Infrastructure Systems',
      excerpt: 'The future of DevOps with AI-powered autonomous systems that can detect, diagnose, and fix infrastructure issues automatically.',
      author: 'DevOps Team',
      date: '2025-01-01',
      readTime: '7 min read',
      category: 'DevOps',
      image: '⚙️'
    },
    {
      title: 'AI-Powered Financial Risk Management',
      excerpt: 'How artificial intelligence is revolutionizing financial risk assessment and creating more accurate prediction models.',
      author: 'Financial AI Team',
      date: '2024-12-28',
      readTime: '8 min read',
      category: 'Financial AI',
      image: '💰'
    },
    {
      title: 'The Evolution of Autonomous Vehicles: Beyond Self-Driving Cars',
      excerpt: 'Exploring the future of autonomous transportation and how AI is enabling new forms of mobility.',
      author: 'Autonomous Systems Team',
      date: '2024-12-25',
      readTime: '6 min read',
      category: 'Autonomous Systems',
      image: '🚗'
    }
  ];

  const categories = [
    { name: 'AI & Consciousness', count: 15, icon: '🧠' },
    { name: 'Quantum Technology', count: 12, icon: '⚛️' },
    { name: 'Enterprise AI', count: 18, icon: '🏢' },
    { name: 'Space Technology', count: 8, icon: '🚀' },
    { name: 'Autonomous Systems', count: 14, icon: '🤖' },
    { name: 'AI Ethics', count: 6, icon: '⚖️' },
    { name: 'Financial AI', count: 9, icon: '💰' },
    { name: 'DevOps', count: 11, icon: '⚙️' }
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
            Zion Tech Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Insights, research, and perspectives on the future of AI consciousness, 
            quantum computing, and autonomous systems.
          </motion.p>
          
          {/* Search and Filter */}
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
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Featured Articles
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/10">
                    <div className="text-6xl mb-4 text-center">
                      {post.image}
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
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
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Explore by Category
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
                <Link href={`/blog/category/${category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/10 text-center">
                    <div className="text-4xl mb-3">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {category.count} articles
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Latest Articles
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/10">
                    <div className="text-4xl mb-4 text-center">
                      {post.image}
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <div className="flex items-center gap-4 text-gray-400">
                        <button className="hover:text-cyan-400 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="hover:text-cyan-400 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights on AI consciousness, quantum computing, and autonomous systems 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}