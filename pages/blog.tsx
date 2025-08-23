import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, Tag, ArrowRight, Search, 
  Filter, TrendingUp, BookOpen, Lightbulb, Zap 
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredArticle = {
    title: "The Future of AI Consciousness: Bridging Technology and Human Experience",
    excerpt: "Explore how artificial intelligence is evolving beyond mere computation to develop genuine consciousness, emotional intelligence, and the ability to understand and empathize with human experiences.",
    author: "Dr. Sarah Chen",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "AI & Consciousness",
    image: "/images/blog/ai-consciousness-future.jpg",
    featured: true
  };

  const blogCategories = [
    { name: "All", count: 45, active: true },
    { name: "AI & Consciousness", count: 18, active: false },
    { name: "Quantum Computing", count: 12, active: false },
    { name: "Cybersecurity", count: 8, active: false },
    { name: "Space Technology", count: 7, active: false }
  ];

  const recentArticles = [
    {
      title: "Quantum Supremacy in 2025: What It Means for the Future",
      excerpt: "Breaking down the latest quantum computing breakthroughs and their implications for cryptography, drug discovery, and climate modeling.",
      author: "Dr. Michael Rodriguez",
      date: "March 12, 2025",
      readTime: "6 min read",
      category: "Quantum Computing",
      image: "/images/blog/quantum-supremacy.jpg"
    },
    {
      title: "Cybersecurity in the Age of AI: New Threats and Defenses",
      excerpt: "How artificial intelligence is both creating new security challenges and providing innovative solutions to protect digital assets.",
      author: "Alex Thompson",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/images/blog/ai-cybersecurity.jpg"
    },
    {
      title: "Space Resource Intelligence: Mining the Final Frontier",
      excerpt: "The emerging field of space resource intelligence and how it's revolutionizing our approach to space exploration and resource utilization.",
      author: "Dr. Elena Petrova",
      date: "March 8, 2025",
      readTime: "9 min read",
      category: "Space Technology",
      image: "/images/blog/space-resources.jpg"
    },
    {
      title: "The Evolution of Neural Networks: From Perceptrons to Consciousness",
      excerpt: "A comprehensive journey through the development of neural networks and their progression toward artificial consciousness.",
      author: "Dr. James Wilson",
      date: "March 5, 2025",
      readTime: "10 min read",
      category: "AI & Consciousness",
      image: "/images/blog/neural-evolution.jpg"
    },
    {
      title: "Quantum-Classical Hybrid Computing: The Best of Both Worlds",
      excerpt: "Exploring how hybrid quantum-classical systems are solving real-world problems that neither approach could handle alone.",
      author: "Dr. Maria Santos",
      date: "March 3, 2025",
      readTime: "8 min read",
      category: "Quantum Computing",
      image: "/images/blog/hybrid-computing.jpg"
    },
    {
      title: "Ethical AI Development: Balancing Innovation with Responsibility",
      excerpt: "The critical importance of ethical considerations in AI development and how Zion Tech Group is leading the way.",
      author: "Dr. Sarah Chen",
      date: "March 1, 2025",
      readTime: "7 min read",
      category: "AI & Consciousness",
      image: "/images/blog/ethical-ai.jpg"
    }
  ];

  const popularTags = [
    "Artificial Intelligence", "Quantum Computing", "Cybersecurity", "Space Technology",
    "Machine Learning", "Neural Networks", "Consciousness", "Innovation",
    "Future Tech", "Research", "Technology Trends", "Digital Transformation"
  ];

  const newsletterStats = [
    { metric: "10K+", label: "Subscribers" },
    { metric: "45", label: "Articles" },
    { metric: "5", label: "Categories" },
    { metric: "Weekly", label: "Updates" }
  ];

  return (
    <Layout 
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights on AI consciousness, quantum computing, cybersecurity, and space technology. Expert analysis and cutting-edge research from Zion Tech Group."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Insights & Innovation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Explore cutting-edge research, breakthrough technologies, and expert insights 
                from the forefront of AI consciousness, quantum computing, and space technology.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {blogCategories.map((category, index) => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      category.active
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Article Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Featured Article</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our latest breakthrough research and insights
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      {featuredArticle.category}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl border border-cyan-500/30 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Articles Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay current with our latest research, insights, and technological breakthroughs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-b border-gray-700/50 flex items-center justify-center">
                    <Lightbulb className="w-12 h-12 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{article.date}</span>
                      <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Tags Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Explore by Topic</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover articles by your areas of interest
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {popularTags.map((tag, index) => (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-400 mb-8">
                Get the latest insights, research updates, and technological breakthroughs 
                delivered directly to your inbox.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {newsletterStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.metric}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-4xl font-bold mb-6">Contribute to Our Blog</h2>
              <p className="text-xl text-gray-400 mb-8">
                Are you a researcher, technologist, or thought leader? We welcome contributions 
                from experts in AI, quantum computing, cybersecurity, and space technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Submit an Article
                </a>
                <a
                  href="mailto:blog@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Contact Editorial Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;