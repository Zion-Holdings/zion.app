import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, ArrowRight, Search, 
  Filter, Tag, BookOpen, TrendingUp, Star,
  Brain, Atom, Rocket, Shield, Zap, Globe
} from 'lucide-react';

export default function Blog() {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Exploring the next frontier in artificial intelligence where machines develop genuine self-awareness and emotional intelligence.',
      author: 'Kleber',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI Research',
      tags: ['AI Consciousness', 'Machine Learning', 'Future Tech'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Quantum Computing in 2025: Breaking the Classical Barrier',
      excerpt: 'How quantum computing is revolutionizing cryptography, drug discovery, and complex optimization problems.',
      author: 'Quantum Team',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Cryptography', 'Optimization'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Building Autonomous Business Systems: A Complete Guide',
      excerpt: 'Step-by-step approach to creating self-managing business operations that adapt and optimize automatically.',
      author: 'Automation Team',
      date: '2025-01-05',
      readTime: '12 min read',
      category: 'Automation',
      tags: ['Business Automation', 'AI', 'Operations'],
      featured: true,
      image: '/api/placeholder/600/400'
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'AI-Powered Customer Success: Predicting and Preventing Churn',
      excerpt: 'How machine learning algorithms can identify at-risk customers before they leave.',
      author: 'AI Team',
      date: '2025-01-12',
      readTime: '5 min read',
      category: 'AI Applications',
      tags: ['Customer Success', 'Predictive Analytics', 'Churn Prevention']
    },
    {
      id: 5,
      title: 'The Rise of Quantum-Secure Cloud Infrastructure',
      excerpt: 'Preparing for the quantum threat: building encryption that even quantum computers can\'t break.',
      author: 'Security Team',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'Cybersecurity',
      tags: ['Quantum Security', 'Cloud Infrastructure', 'Encryption']
    },
    {
      id: 6,
      title: 'Micro-SaaS Revolution: Building Profitable Business Tools',
      excerpt: 'How small, focused software solutions are disrupting traditional enterprise software markets.',
      author: 'Product Team',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'Business',
      tags: ['SaaS', 'Business Tools', 'Entrepreneurship']
    },
    {
      id: 7,
      title: 'Space Technology and AI: The Next Frontier',
      excerpt: 'Combining artificial intelligence with space exploration to unlock new possibilities.',
      author: 'Space Tech Team',
      date: '2024-12-28',
      readTime: '10 min read',
      category: 'Space Technology',
      tags: ['Space Tech', 'AI', 'Exploration']
    },
    {
      id: 8,
      title: 'DevOps Automation: From Manual to Autonomous Operations',
      excerpt: 'How AI and automation are transforming traditional DevOps practices.',
      author: 'DevOps Team',
      date: '2024-12-20',
      readTime: '11 min read',
      category: 'DevOps',
      tags: ['DevOps', 'Automation', 'AI Operations']
    }
  ];

  const categories = [
    { name: 'AI Research', icon: <Brain className="w-5 h-5" />, count: 15, color: 'text-cyan-400' },
    { name: 'Quantum Computing', icon: <Atom className="w-5 h-5" />, count: 12, color: 'text-purple-400' },
    { name: 'Automation', icon: <Rocket className="w-5 h-5" />, count: 18, color: 'text-green-400' },
    { name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 10, color: 'text-red-400' },
    { name: 'Business', icon: <TrendingUp className="w-5 h-5" />, count: 14, color: 'text-blue-400' },
    { name: 'Space Technology', icon: <Globe className="w-5 h-5" />, count: 8, color: 'text-yellow-400' }
  ];

  const popularTags = [
    'AI Consciousness', 'Machine Learning', 'Quantum Computing', 'Automation', 
    'Cybersecurity', 'Cloud Computing', 'DevOps', 'Business Intelligence',
    'Predictive Analytics', 'Neural Networks', 'Blockchain', 'IoT'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Zion Tech Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Insights, research, and perspectives on the future of AI consciousness, 
              quantum computing, and autonomous systems.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-800/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-400">Deep insights into cutting-edge technology and innovation</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors duration-300">
                        Read More
                      </span>
                      <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Recent Posts */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Recent Posts */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Recent Articles
                </h2>
                <p className="text-gray-400 mb-8">Stay updated with our latest insights and research</p>
              </motion.div>
              
              <div className="space-y-8">
                {recentPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300 p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-48 aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-12 h-12 text-cyan-400" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                              {post.category}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {post.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString()}
                              </span>
                            </div>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-cyan-400" />
                  Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between p-3 bg-gray-900/30 rounded-xl hover:bg-gray-800/50 transition-colors duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={category.color}>{category.icon}</div>
                        <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm">{category.count}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-cyan-400" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-cyan-500/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">Stay Updated</h3>
                <p className="text-gray-300 mb-4">
                  Get the latest insights on AI, quantum computing, and autonomous systems delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contribute to Our Blog
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have insights on AI, quantum computing, or emerging technologies? 
              We'd love to feature your expertise and research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Submit Article
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}