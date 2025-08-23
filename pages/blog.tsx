import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
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
  Cloud
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Explore how Zion Tech Group is pioneering the next generation of AI systems that exhibit true consciousness and emotional intelligence.',
      author: 'Kleber Santos',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI Consciousness', 'Machine Learning', 'Future Tech'],
      image: '/api/placeholder/600/400',
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Quantum Computing Revolution: Breaking the Classical Barrier',
      excerpt: 'Discover how quantum computing is transforming industries and solving previously impossible problems in cryptography, optimization, and simulation.',
      author: 'Quantum Research Team',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Cryptography', 'Optimization'],
      image: '/api/placeholder/600/400',
      featured: true,
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Space Technology: The Next Frontier of Innovation',
      excerpt: 'From satellite technology to space resource intelligence, explore how space tech is creating new opportunities for businesses on Earth.',
      author: 'Space Technology Team',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Space Technology',
      tags: ['Space Tech', 'Satellites', 'Innovation'],
      image: '/api/placeholder/600/400',
      featured: false,
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'As AI becomes more sophisticated, so do cyber threats. Learn about the latest security challenges and how to protect your organization.',
      author: 'Cybersecurity Team',
      date: '2024-01-08',
      readTime: '15 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'AI Security', 'Threat Protection'],
      image: '/api/placeholder/600/400',
      featured: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Evolution: Multi-Cloud and Edge Computing',
      excerpt: 'Explore the latest trends in cloud computing, from multi-cloud strategies to edge computing solutions that bring processing closer to users.',
      author: 'Cloud Infrastructure Team',
      date: '2024-01-05',
      readTime: '11 min read',
      category: 'Cloud Infrastructure',
      tags: ['Cloud Computing', 'Multi-Cloud', 'Edge Computing'],
      image: '/api/placeholder/600/400',
      featured: false,
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Enterprise AI: Transforming Business Operations',
      excerpt: 'See how leading enterprises are implementing AI solutions to streamline operations, improve decision-making, and drive innovation.',
      author: 'Enterprise Solutions Team',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Enterprise Solutions',
      tags: ['Enterprise AI', 'Business Operations', 'Digital Transformation'],
      image: '/api/placeholder/600/400',
      featured: false,
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const categories = [
    { name: 'All', count: blogPosts.length, active: true },
    { name: 'AI & Machine Learning', count: 1, active: false },
    { name: 'Quantum Computing', count: 1, active: false },
    { name: 'Space Technology', count: 1, active: false },
    { name: 'Cybersecurity', count: 1, active: false },
    { name: 'Cloud Infrastructure', count: 1, active: false },
    { name: 'Enterprise Solutions', count: 1, active: false }
  ];

  const popularTags = [
    'AI Consciousness', 'Machine Learning', 'Quantum Computing', 'Cybersecurity',
    'Cloud Computing', 'Space Tech', 'Innovation', 'Digital Transformation'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Zion Tech <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Insights, innovations, and thought leadership from the forefront of AI consciousness, 
                quantum computing, and space technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      category.active
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Featured Articles</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our most popular and insightful articles on cutting-edge technology trends
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${post.color} rounded-lg`}>
                        <post.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-cyan-400 font-medium">{post.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group">
                        <span className="font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Blog Posts */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Latest Articles</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Stay updated with the latest insights and innovations in technology
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br ${post.color} rounded-lg`}>
                        <post.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-cyan-400 font-medium">{post.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 1).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Tags */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Popular Topics</h2>
              <p className="text-gray-300">Explore articles by topic</p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {popularTags.map((tag, index) => (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gray-800/50 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Get the latest articles, insights, and technology trends delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;