import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, Calendar, Clock, User, ArrowRight, 
  Tag, Search, Filter, TrendingUp, Brain, Atom,
  Shield, Rocket, Star, Globe, Zap
} from 'lucide-react';
import Link from 'next/link';

const Blog: React.FC = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI Consciousness: Beyond Traditional Machine Learning",
      excerpt: "Explore how AI consciousness is revolutionizing the way machines think, learn, and interact with humans. Discover the ethical implications and breakthrough applications.",
      author: "Dr. Sarah Chen",
      authorRole: "AI Research Director",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "AI Consciousness",
      tags: ["AI", "Consciousness", "Machine Learning", "Ethics"],
      featured: true,
      image: "/api/placeholder/600/400",
      views: "12.5K",
      comments: 47
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: Solving Previously Impossible Problems",
      excerpt: "From cryptography to drug discovery, quantum computing is opening new frontiers. Learn about the latest breakthroughs and their real-world applications.",
      author: "Dr. Michael Rodriguez",
      authorRole: "Quantum Computing Lead",
      publishDate: "2024-01-10",
      readTime: "12 min read",
      category: "Quantum Computing",
      tags: ["Quantum Computing", "Cryptography", "Drug Discovery", "Research"],
      featured: true,
      image: "/api/placeholder/600/400",
      views: "8.9K",
      comments: 32
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: New Threats, New Defenses",
      excerpt: "As AI becomes more sophisticated, so do cyber threats. Discover how AI-powered security systems are staying ahead of evolving attack vectors.",
      author: "Jennifer Park",
      authorRole: "Cybersecurity Expert",
      publishDate: "2024-01-08",
      readTime: "10 min read",
      category: "Cybersecurity",
      tags: ["Cybersecurity", "AI Security", "Threat Detection", "Defense"],
      featured: true,
      image: "/api/placeholder/600/400",
      views: "15.2K",
      comments: 89
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Space Technology Revolution: AI-Powered Exploration Systems",
      excerpt: "How artificial intelligence is transforming space exploration, from autonomous rovers to intelligent satellite networks.",
      author: "Alex Thompson",
      authorRole: "Space Technology Specialist",
      publishDate: "2024-01-05",
      readTime: "6 min read",
      category: "Space Technology",
      tags: ["Space", "AI", "Exploration", "Satellites"],
      image: "/api/placeholder/400/250",
      views: "6.8K",
      comments: 23
    },
    {
      id: 5,
      title: "The Business Impact of AI Consciousness: Real ROI Stories",
      excerpt: "Real-world examples of how AI consciousness is driving business transformation and delivering measurable results.",
      author: "David Kim",
      authorRole: "Business Strategy Director",
      publishDate: "2024-01-03",
      readTime: "7 min read",
      category: "Business Intelligence",
      tags: ["Business", "ROI", "AI", "Transformation"],
      image: "/api/placeholder/400/250",
      views: "5.4K",
      comments: 18
    },
    {
      id: 6,
      title: "Ethical AI Development: Building Trust in Machine Intelligence",
      excerpt: "The importance of ethical considerations in AI development and how Zion Tech Group ensures responsible innovation.",
      author: "Dr. Emily Watson",
      authorRole: "AI Ethics Researcher",
      publishDate: "2024-01-01",
      readTime: "9 min read",
      category: "AI Ethics",
      tags: ["AI Ethics", "Responsible AI", "Trust", "Innovation"],
      image: "/api/placeholder/400/250",
      views: "7.1K",
      comments: 31
    }
  ];

  const categories = [
    { name: "AI Consciousness", count: 15, icon: Brain, color: "from-purple-500 to-pink-600" },
    { name: "Quantum Computing", count: 12, icon: Atom, color: "from-blue-500 to-cyan-600" },
    { name: "Cybersecurity", count: 18, icon: Shield, color: "from-green-500 to-emerald-600" },
    { name: "Space Technology", count: 8, icon: Rocket, color: "from-orange-500 to-red-600" },
    { name: "Business Intelligence", count: 10, icon: TrendingUp, color: "from-indigo-500 to-purple-600" },
    { name: "AI Ethics", count: 6, icon: Globe, color: "from-teal-500 to-blue-600" }
  ];

  const trendingTopics = [
    "AI Consciousness Evolution",
    "Quantum Supremacy",
    "Zero-Trust Security",
    "Autonomous Systems",
    "Ethical AI",
    "Space Mining",
    "Neural Networks",
    "Blockchain Security"
  ];

  return (
    <Layout
      title="Blog - Zion Tech Group"
      description="Insights, research, and thought leadership on AI consciousness, quantum computing, cybersecurity, and the future of technology."
      keywords="blog, AI consciousness, quantum computing, cybersecurity, space technology, business intelligence, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Blog & Insights
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Thought leadership in AI consciousness and quantum computing
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Stay ahead of the curve with expert insights, breakthrough research, 
                and industry analysis from Zion Tech Group's leading researchers and engineers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Categories */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-400" />
                <select className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Deep insights and breakthrough research from our experts
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-purple-400/50 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Featured Article</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{post.views} views</span>
                        <span>{post.comments} comments</span>
                      </div>
                      
                      <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-1 group-hover:gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Explore by Category
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Dive deep into specific areas of technology and innovation
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {category.count} articles
                  </p>
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                    Browse Articles
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our most recent insights and research
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-12 h-12 text-blue-400/50 mx-auto mb-2" />
                      <p className="text-gray-400 text-xs">Article</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{post.views} views</span>
                        <span>{post.comments} comments</span>
                      </div>
                      
                      <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-1 group-hover:gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Topics */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Trending Topics
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                What's hot in the world of AI consciousness and quantum computing
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {trendingTopics.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300 hover:from-purple-500/30 hover:to-blue-500/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    <span className="font-medium">{topic}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Get the latest insights, research updates, and industry analysis delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Dive Deeper?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Explore our comprehensive resources and discover how Zion Tech Group is shaping the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;