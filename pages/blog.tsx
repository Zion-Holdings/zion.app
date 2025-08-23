import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Tag,
  BookOpen,
  TrendingUp,
  Star,
  Eye,
  MessageCircle
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 45 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 18 },
    { id: 'quantum', name: 'Quantum Computing', count: 12 },
    { id: 'space-tech', name: 'Space Technology', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 7 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Explore how AI consciousness is evolving beyond traditional machine learning paradigms, creating systems that can truly understand and reason like humans.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'ai-ml',
      featured: true,
      image: '/api/placeholder/600/400',
      views: 12450,
      comments: 23
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: What\'s Next for 2025',
      excerpt: 'Discover the latest quantum computing advancements and how they\'re reshaping industries from finance to pharmaceuticals.',
      author: 'Prof. Michael Rodriguez',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'quantum',
      featured: true,
      image: '/api/placeholder/600/400',
      views: 9870,
      comments: 18
    },
    {
      id: 3,
      title: 'Space Resource Intelligence: Mining the Final Frontier',
      excerpt: 'Learn about the revolutionary space resource intelligence platforms that are making asteroid mining a reality.',
      author: 'Dr. Emily Watson',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'space-tech',
      featured: true,
      image: '/api/placeholder/600/400',
      views: 7560,
      comments: 15
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Zero Trust Security Architecture: The New Standard',
      excerpt: 'Understanding the principles and implementation of zero trust security in modern enterprise environments.',
      author: 'Alex Thompson',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'cybersecurity',
      image: '/api/placeholder/400/250',
      views: 5430,
      comments: 12
    },
    {
      id: 5,
      title: 'AI Autonomous Research: Accelerating Scientific Discovery',
      excerpt: 'How autonomous AI systems are revolutionizing research across multiple scientific disciplines.',
      author: 'Dr. James Wilson',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'ai-ml',
      image: '/api/placeholder/400/250',
      views: 4320,
      comments: 8
    },
    {
      id: 6,
      title: 'Quantum Neural Networks: The Next Evolution',
      excerpt: 'Exploring the intersection of quantum computing and neural networks for unprecedented computational power.',
      author: 'Dr. Lisa Park',
      date: '2025-01-03',
      readTime: '11 min read',
      category: 'quantum',
      image: '/api/placeholder/400/250',
      views: 3890,
      comments: 14
    },
    {
      id: 7,
      title: 'Edge Computing in Space: Processing Data Beyond Earth',
      excerpt: 'The challenges and opportunities of edge computing in space environments.',
      author: 'Mark Johnson',
      date: '2024-12-30',
      readTime: '7 min read',
      category: 'space-tech',
      image: '/api/placeholder/400/250',
      views: 3210,
      comments: 6
    },
    {
      id: 8,
      title: 'AI Ethics and Governance: Building Responsible AI Systems',
      excerpt: 'Essential considerations for developing AI systems that are ethical, transparent, and accountable.',
      author: 'Dr. Rachel Green',
      date: '2024-12-28',
      readTime: '10 min read',
      category: 'ai-ml',
      image: '/api/placeholder/400/250',
      views: 2980,
      comments: 19
    },
    {
      id: 9,
      title: 'Quantum Cryptography: Unbreakable Security for the Future',
      excerpt: 'How quantum cryptography is creating unbreakable security protocols for the digital age.',
      author: 'Dr. David Kim',
      date: '2024-12-25',
      readTime: '8 min read',
      category: 'quantum',
      image: '/api/placeholder/400/250',
      views: 2670,
      comments: 11
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

  const getCategoryColor = (category: string) => {
    const colors = {
      'ai-ml': 'from-purple-500 to-pink-500',
      'quantum': 'from-blue-500 to-cyan-500',
      'space-tech': 'from-indigo-500 to-purple-500',
      'cybersecurity': 'from-red-500 to-orange-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
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
                Our Blog
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Insights, updates, and deep dives into the cutting-edge technologies that are shaping 
                the future of business and society.
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
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
                Our most popular and insightful articles on cutting-edge technology trends
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
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-cyan-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-medium rounded-full`}>
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                        <div className="flex items-center space-x-3 text-gray-400 text-sm">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.views.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(post.date)}
                        </span>
                      </div>

                      {/* Read Time */}
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-cyan-400 text-sm">
                          <Clock className="w-4 h-4 mr-2" />
                          {post.readTime}
                        </span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
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
                Stay updated with our latest insights and technology trends
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
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-cyan-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-medium rounded-full`}>
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                        <div className="flex items-center space-x-3 text-gray-400 text-sm">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.views.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(post.date)}
                        </span>
                      </div>

                      {/* Read Time */}
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-cyan-400 text-sm">
                          <Clock className="w-4 h-4 mr-2" />
                          {post.readTime}
                        </span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
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
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Load More Articles
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
                Get the latest insights on AI, quantum computing, and space technology delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
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