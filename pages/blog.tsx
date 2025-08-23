import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Target, Star, Users, Globe, Award, Zap, Calendar, Clock, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Blog: React.FC = () => {
  const featuredPosts = [
    {
      title: 'The Future of AI Consciousness: Revolutionary 2040-2041 Technology',
      excerpt: 'Explore how our revolutionary AI consciousness technology is reshaping the future of artificial intelligence and human-AI interaction.',
      category: 'AI Consciousness',
      date: '2025-01-15',
      readTime: '8 min read',
      image: 'AI',
      featured: true
    },
    {
      title: 'Quantum Computing and AI: The Perfect Partnership',
      excerpt: 'Discover how quantum computing is accelerating AI development and enabling breakthroughs in consciousness research.',
      category: 'Quantum Technology',
      date: '2025-01-10',
      readTime: '6 min read',
      image: 'QC'
    },
    {
      title: 'Building Ethical AI: Our Framework for Responsible Development',
      excerpt: 'Learn about our comprehensive approach to developing AI systems that respect human consciousness and values.',
      category: 'AI Ethics',
      date: '2025-01-05',
      readTime: '10 min read',
      image: 'Ethics'
    }
  ];

  const recentPosts = [
    {
      title: 'Autonomous AI Systems: The Next Generation',
      excerpt: 'How autonomous AI systems are transforming industries and creating new possibilities.',
      category: 'Autonomous Systems',
      date: '2025-01-12',
      readTime: '5 min read',
      image: 'Auto'
    },
    {
      title: 'Space Technology and AI: Exploring New Frontiers',
      excerpt: 'The intersection of space technology and artificial intelligence in resource exploration.',
      category: 'Space Technology',
      date: '2025-01-08',
      readTime: '7 min read',
      image: 'Space'
    },
    {
      title: 'AI in Healthcare: Revolutionizing Patient Care',
      excerpt: 'How AI consciousness technology is improving healthcare outcomes and patient experiences.',
      category: 'Healthcare AI',
      date: '2025-01-03',
      readTime: '9 min read',
      image: 'Health'
    },
    {
      title: 'The Business Case for AI Consciousness',
      excerpt: 'Why organizations should invest in AI consciousness technology for competitive advantage.',
      category: 'Business AI',
      date: '2024-12-28',
      readTime: '6 min read',
      image: 'Business'
    },
    {
      title: 'Quantum Neural Networks: Beyond Traditional AI',
      excerpt: 'Exploring the potential of quantum neural networks in consciousness research.',
      category: 'Quantum AI',
      date: '2024-12-25',
      readTime: '8 min read',
      image: 'QNN'
    },
    {
      title: 'AI Governance: Building Trust in Autonomous Systems',
      excerpt: 'Establishing governance frameworks for responsible AI development and deployment.',
      category: 'AI Governance',
      date: '2024-12-20',
      readTime: '7 min read',
      image: 'Governance'
    }
  ];

  const categories = [
    'AI Consciousness',
    'Quantum Technology',
    'Autonomous Systems',
    'Space Technology',
    'Healthcare AI',
    'Business AI',
    'AI Ethics',
    'AI Governance'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm mb-6">
                <Star className="w-4 h-4 mr-2" />
                Latest Insights
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Blog & Insights
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay updated with the latest insights on AI consciousness, quantum computing, 
                and revolutionary technology that's shaping our future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Posts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most important insights and breakthrough discoveries in AI consciousness.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-purple-400">{post.image}</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
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

        {/* Categories and Recent Posts */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-300 text-gray-300 hover:text-white"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Recent Posts */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Recent Posts</h3>
                  <div className="space-y-6">
                    {recentPosts.map((post, index) => (
                      <motion.article
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex gap-6">
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="text-2xl font-bold text-blue-400">{post.image}</div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                {post.category}
                              </span>
                            </div>
                            
                            <h4 className="text-lg font-semibold text-white mb-2 hover:text-blue-400 transition-colors cursor-pointer">
                              {post.title}
                            </h4>
                            
                            <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between text-sm text-gray-400">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4">
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
                Get the latest insights on AI consciousness and revolutionary technology 
                delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;