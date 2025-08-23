import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Tag,
  Filter,
  TrendingUp,
  Star,
  BookOpen,
  Brain,
  Atom,
  Rocket,
  Shield
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 45 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 12 },
    { id: 'space-tech', name: 'Space Technology', icon: Rocket, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 7 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Explore how AI consciousness is evolving beyond traditional machine learning paradigms, creating systems that can think, feel, and reason like humans.',
      author: 'Dr. Kleber Santos',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'ai-ml',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['AI Consciousness', 'Machine Learning', 'Future Tech']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: What\'s Next for Enterprise',
      excerpt: 'Discover the latest quantum computing breakthroughs and how they\'re reshaping enterprise technology landscapes worldwide.',
      author: 'Quantum Research Team',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'quantum',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['Quantum Computing', 'Enterprise', 'Innovation']
    },
    {
      id: 3,
      title: 'Space Technology Revolution: Mining Resources Beyond Earth',
      excerpt: 'Learn about the revolutionary space technology that\'s enabling resource mining and exploration beyond our planet.',
      author: 'Space Tech Division',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'space-tech',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['Space Technology', 'Resource Mining', 'Exploration']
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Zero Trust Security: The New Standard for Enterprise Protection',
      excerpt: 'Understanding the principles of zero trust security and how to implement them in modern enterprise environments.',
      author: 'Security Team',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'cybersecurity',
      image: '/api/placeholder/400/250',
      tags: ['Cybersecurity', 'Zero Trust', 'Enterprise']
    },
    {
      id: 5,
      title: 'AI-Powered Customer Success: Revolutionizing Client Relationships',
      excerpt: 'How AI is transforming customer success strategies and creating more meaningful client relationships.',
      author: 'AI Solutions Team',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'ai-ml',
      image: '/api/placeholder/400/250',
      tags: ['AI', 'Customer Success', 'Client Relations']
    },
    {
      id: 6,
      title: 'Quantum Neural Networks: The Next Frontier of AI',
      excerpt: 'Exploring the intersection of quantum computing and neural networks for unprecedented AI capabilities.',
      author: 'Quantum AI Team',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'quantum',
      image: '/api/placeholder/400/250',
      tags: ['Quantum AI', 'Neural Networks', 'Innovation']
    },
    {
      id: 7,
      title: 'Edge Computing in Space: Processing Data Where It\'s Generated',
      excerpt: 'The future of space computing: processing data at the edge for faster, more efficient space missions.',
      author: 'Space Computing Team',
      date: '2025-01-01',
      readTime: '5 min read',
      category: 'space-tech',
      image: '/api/placeholder/400/250',
      tags: ['Edge Computing', 'Space Missions', 'Data Processing']
    },
    {
      id: 8,
      title: 'AI Ethics and Governance: Building Responsible AI Systems',
      excerpt: 'Essential considerations for developing AI systems that are ethical, transparent, and beneficial to society.',
      author: 'AI Ethics Team',
      date: '2024-12-28',
      readTime: '11 min read',
      category: 'ai-ml',
      image: '/api/placeholder/400/250',
      tags: ['AI Ethics', 'Governance', 'Responsible AI']
    },
    {
      id: 9,
      title: 'Quantum Cryptography: Unbreakable Security for the Digital Age',
      excerpt: 'How quantum cryptography is providing unbreakable security solutions for the modern digital landscape.',
      author: 'Quantum Security Team',
      date: '2024-12-25',
      readTime: '8 min read',
      category: 'quantum',
      image: '/api/placeholder/400/250',
      tags: ['Quantum Cryptography', 'Security', 'Digital Age']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? recentPosts 
    : recentPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                Zion Tech Blog
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Insights, innovations, and industry perspectives from the forefront of technology. 
                Stay ahead with our expert analysis and cutting-edge research.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">Filter by:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
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

        {/* Featured Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Featured Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and insightful articles on cutting-edge technology trends and innovations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    {/* Image Placeholder */}
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-cyan-400" />
                    </div>
                    
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                        {post.featured && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-700/50 text-gray-300">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.date)}
                          </span>
                        </div>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Read More */}
                      <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Latest Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our latest insights, research findings, and industry analysis.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    {/* Image Placeholder */}
                    <div className="w-full h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-purple-400" />
                    </div>
                    
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Date */}
                      <div className="text-sm text-gray-400 mb-4">
                        {formatDate(post.date)}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Load More Articles
                <TrendingUp className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700/50"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest insights, research findings, and industry updates delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
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