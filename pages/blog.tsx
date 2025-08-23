import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Rocket,
  Brain,
  Shield
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 25 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'quantum', name: 'Quantum Computing', icon: Rocket, count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 7 },
    { id: 'space-tech', name: 'Space Technology', icon: Rocket, count: 4 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Explore how AI consciousness is evolving beyond traditional machine learning paradigms, creating systems that can think, feel, and reason like humans.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      views: '2.4k',
      category: 'ai-ml',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['AI Consciousness', 'Machine Learning', 'Future Tech']
    },
    {
      id: 2,
      title: 'Quantum Cybersecurity: Preparing for the Post-Quantum Era',
      excerpt: 'Discover how quantum computing will revolutionize cybersecurity and what organizations need to do to prepare for this paradigm shift.',
      author: 'Marcus Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      views: '1.8k',
      category: 'quantum',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Quantum Computing', 'Cybersecurity', 'Post-Quantum']
    },
    {
      id: 3,
      title: 'Space Resource Intelligence: Mining the Final Frontier',
      excerpt: 'Learn about the latest developments in space resource intelligence and how AI is helping us identify and extract valuable resources from space.',
      author: 'Dr. Kleber Santos',
      date: '2024-01-10',
      readTime: '10 min read',
      views: '1.5k',
      category: 'space-tech',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Space Technology', 'Resource Intelligence', 'AI Mining']
    },
    {
      id: 4,
      title: 'Zero Trust Architecture: The Future of Enterprise Security',
      excerpt: 'Understand the principles of zero trust architecture and how it\'s becoming the standard for modern enterprise cybersecurity.',
      author: 'Marcus Rodriguez',
      date: '2024-01-08',
      readTime: '9 min read',
      views: '1.2k',
      category: 'cybersecurity',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Zero Trust', 'Cybersecurity', 'Enterprise Security']
    },
    {
      id: 5,
      title: 'AI-Powered Predictive Maintenance: Revolutionizing Industry 4.0',
      excerpt: 'See how AI is transforming predictive maintenance in manufacturing and industrial applications, reducing downtime and costs.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-05',
      readTime: '7 min read',
      views: '1.1k',
      category: 'ai-ml',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Predictive Maintenance', 'Industry 4.0', 'AI Manufacturing']
    },
    {
      id: 6,
      title: 'Quantum Neural Networks: The Next Generation of AI',
      excerpt: 'Explore how quantum neural networks are combining the power of quantum computing with artificial intelligence to solve previously impossible problems.',
      author: 'Dr. Kleber Santos',
      date: '2024-01-03',
      readTime: '11 min read',
      views: '980',
      category: 'quantum',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Quantum Neural Networks', 'AI', 'Quantum Computing']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion Tech <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Insights, updates, and thought leadership on the latest in AI consciousness, 
                quantum computing, and emerging technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {filteredPosts.filter(post => post.featured).length > 0 && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Featured Article
                </h2>
                <p className="text-lg text-gray-400">
                  Our latest insights and discoveries
                </p>
              </motion.div>

              {filteredPosts.filter(post => post.featured).map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-400/30">
                          Featured
                        </span>
                        <span className="text-gray-400 text-sm">{post.category.toUpperCase()}</span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold group"
                      >
                        Read Full Article
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-400">
                Stay updated with our latest insights and discoveries
              </p>
            </motion.div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter(post => !post.featured).map((post, index) => {
                  const CategoryIcon = getCategoryIcon(post.category);
                  return (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CategoryIcon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-medium rounded-full">
                            {post.category.toUpperCase()}
                          </span>
                          <span className="text-gray-400 text-sm">{formatDate(post.date)}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <a
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or browse all categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get the latest insights on AI consciousness, quantum computing, and emerging technologies 
                delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
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