import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  TrendingUp,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Zap
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPosts = [
    {
      title: 'The Future of AI Consciousness: What to Expect in 2045',
      excerpt: 'Explore the revolutionary developments in AI consciousness and how they will transform our understanding of intelligence.',
      author: 'AI Research Team',
      date: '2025-01-15',
      category: 'AI & Consciousness',
      readTime: '8 min read',
      image: '/blog/ai-consciousness-2045.jpg',
      tags: ['AI', 'Consciousness', 'Future Tech', '2045'],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Quantum Computing Breakthroughs: Solving Previously Impossible Problems',
      excerpt: 'Discover how quantum computing is revolutionizing industries and solving complex computational challenges.',
      author: 'Quantum Team',
      date: '2025-01-10',
      category: 'Quantum Computing',
      readTime: '12 min read',
      image: '/blog/quantum-breakthroughs.jpg',
      tags: ['Quantum Computing', 'Innovation', 'Technology'],
      icon: <Atom className="w-6 h-6" />
    },
    {
      title: 'Edge Computing: The Next Frontier in Distributed Intelligence',
      excerpt: 'Learn how edge computing is enabling real-time processing and transforming the way we handle data.',
      author: 'Edge Computing Team',
      date: '2025-01-05',
      category: 'Edge Computing',
      readTime: '6 min read',
      image: '/blog/edge-computing-future.jpg',
      tags: ['Edge Computing', 'IoT', 'Real-time Processing'],
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const recentPosts = [
    {
      title: 'Cybersecurity in the Age of Quantum Computing',
      excerpt: 'How quantum computing is changing the landscape of cybersecurity and what it means for businesses.',
      author: 'Security Team',
      date: '2025-01-12',
      category: 'Cybersecurity',
      readTime: '10 min read',
      tags: ['Cybersecurity', 'Quantum Computing', 'Security'],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Cloud Infrastructure Evolution: From Traditional to Quantum-Enhanced',
      excerpt: 'The evolution of cloud infrastructure and how quantum enhancements are reshaping the landscape.',
      author: 'Cloud Team',
      date: '2025-01-08',
      category: 'Cloud Computing',
      readTime: '7 min read',
      tags: ['Cloud Computing', 'Infrastructure', 'Quantum'],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: 'Space Technology: The Final Frontier of Innovation',
      excerpt: 'Exploring the latest developments in space technology and their applications on Earth.',
      author: 'Space Tech Team',
      date: '2025-01-03',
      category: 'Space Technology',
      readTime: '9 min read',
      tags: ['Space Technology', 'Innovation', 'Satellites'],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'AI-Powered Business Intelligence: Transforming Decision Making',
      excerpt: 'How AI is revolutionizing business intelligence and enabling data-driven decision making.',
      author: 'AI Business Team',
      date: '2024-12-28',
      category: 'AI & Business',
      readTime: '11 min read',
      tags: ['AI', 'Business Intelligence', 'Decision Making'],
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const categories = [
    { name: 'AI & Consciousness', count: 15, icon: <Brain className="w-5 h-5" /> },
    { name: 'Quantum Computing', count: 12, icon: <Atom className="w-5 h-5" /> },
    { name: 'Cybersecurity', count: 18, icon: <Shield className="w-5 h-5" /> },
    { name: 'Cloud Computing', count: 14, icon: <Cloud className="w-5 h-5" /> },
    { name: 'Edge Computing', count: 9, icon: <Zap className="w-5 h-5" /> },
    { name: 'Space Technology', count: 7, icon: <Rocket className="w-5 h-5" /> }
  ];

  return (
    <Layout 
      title="Blog - Zion Tech Group"
      description="Latest insights, updates, and thought leadership on AI consciousness, quantum computing, and revolutionary technology"
      canonicalUrl="https://ziontechgroup.com/blog"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Zion Tech Group
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {' '}Blog
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay updated with the latest insights, breakthroughs, and thought leadership 
                in AI consciousness, quantum computing, and revolutionary technology.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
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
                Featured Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and insightful articles on cutting-edge technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-purple-400">
                        {post.icon}
                      </div>
                      <span className="text-sm text-purple-400 font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{post.readTime}</span>
                      <a
                        href={`/blog/${post.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '')}`}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories and Recent Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Categories */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Categories
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <motion.a
                        key={category.name}
                        href={`/blog/category/${category.name.toLowerCase().replace(/ /g, '-')}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-purple-400">
                            {category.icon}
                          </div>
                          <span className="text-white group-hover:text-purple-400 transition-colors duration-300">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Recent Posts */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Recent Articles
                  </h3>
                  <div className="space-y-6">
                    {recentPosts.map((post, index) => (
                      <motion.article
                        key={post.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-purple-400 mt-1">
                            {post.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm text-purple-400 font-medium">
                                {post.category}
                              </span>
                              <span className="text-sm text-gray-400">•</span>
                              <span className="text-sm text-gray-400">{post.readTime}</span>
                            </div>
                            
                            <h4 className="text-lg font-semibold text-white mb-2 hover:text-purple-400 transition-colors duration-300">
                              <a href={`/blog/${post.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '')}`}>
                                {post.title}
                              </a>
                            </h4>
                            
                            <p className="text-gray-300 mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  {post.author}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(post.date).toLocaleDateString()}
                                </span>
                              </div>
                              
                              <a
                                href={`/blog/${post.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '')}`}
                                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                              >
                                Read More
                                <ArrowRight className="ml-1 w-4 h-4" />
                              </a>
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

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights and updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;