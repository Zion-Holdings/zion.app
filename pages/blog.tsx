import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowRight,
  TrendingUp,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Star,
  BookOpen,
  Filter
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts', icon: BookOpen, count: 45 },
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'quantum', label: 'Quantum Computing', icon: Atom, count: 12 },
    { id: 'space-tech', label: 'Space Technology', icon: Rocket, count: 8 },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield, count: 10 },
    { id: 'cloud', label: 'Cloud & Infrastructure', icon: Cloud, count: 7 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Explore how AI consciousness is evolving beyond traditional machine learning paradigms, creating systems that can truly understand and reason like humans.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai-ml',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['AI Consciousness', 'Machine Learning', 'Future Tech']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: Solving Previously Impossible Problems',
      excerpt: 'Discover the latest breakthroughs in quantum computing and how they\'re enabling solutions to problems that were once considered computationally impossible.',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'quantum',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['Quantum Computing', 'Breakthroughs', 'Innovation']
    },
    {
      id: 3,
      title: 'Space Resource Intelligence: The Next Frontier of Exploration',
      excerpt: 'Learn about our innovative approach to space resource intelligence and how it\'s revolutionizing our understanding of celestial bodies and their potential.',
      author: 'Dr. Emily Watson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'space-tech',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['Space Technology', 'Resource Intelligence', 'Exploration']
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Zero Trust Security Architecture: Building Unbreachable Systems',
      excerpt: 'Implementing zero trust security principles to create systems that are virtually impossible to breach.',
      author: 'Alex Thompson',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'cybersecurity',
      image: '/api/placeholder/400/250',
      tags: ['Cybersecurity', 'Zero Trust', 'Security Architecture']
    },
    {
      id: 5,
      title: 'Cloud-Native AI Platforms: Scaling Intelligence Globally',
      excerpt: 'How cloud-native AI platforms are enabling organizations to scale their artificial intelligence capabilities globally.',
      author: 'Maria Garcia',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'cloud',
      image: '/api/placeholder/400/250',
      tags: ['Cloud Computing', 'AI Platforms', 'Scalability']
    },
    {
      id: 6,
      title: 'Quantum Neural Networks: The Intersection of Two Revolutionary Technologies',
      excerpt: 'Exploring how quantum computing and neural networks are combining to create unprecedented computational power.',
      author: 'Dr. James Wilson',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'quantum',
      image: '/api/placeholder/400/250',
      tags: ['Quantum Computing', 'Neural Networks', 'AI']
    },
    {
      id: 7,
      title: 'AI Ethics and Governance: Ensuring Responsible Development',
      excerpt: 'The critical importance of ethical frameworks and governance in AI development and deployment.',
      author: 'Dr. Lisa Park',
      date: '2024-01-01',
      readTime: '11 min read',
      category: 'ai-ml',
      image: '/api/placeholder/400/250',
      tags: ['AI Ethics', 'Governance', 'Responsible AI']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? recentPosts 
    : recentPosts.filter(post => post.category === selectedCategory);

  const searchResults = searchQuery 
    ? [...featuredPosts, ...recentPosts].filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

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
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Insights, innovations, and thought leadership in AI consciousness, quantum computing, 
                and space technology from our team of experts.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-12 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Results */}
        {searchQuery && (
          <section className="py-16 bg-gradient-to-br from-gray-900/50 to-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-white">
                    Search Results for "{searchQuery}"
                  </h2>
                  <span className="text-gray-400">{searchResults.length} results found</span>
                </div>

                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {searchResults.map((post) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        <div className="w-full h-48 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-xl mb-4 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-cyan-400" />
                        </div>
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-cyan-900/20 text-cyan-400 text-sm rounded-full mb-3">
                            {categories.find(cat => cat.id === post.category)?.label}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-400 line-clamp-3 mb-4">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>{post.author}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl text-gray-400 mb-2">No results found</h3>
                    <p className="text-gray-500">Try adjusting your search terms or browse our categories below.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Explore by Category</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover insights and innovations across our key technology domains
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-center group ${
                    selectedCategory === category.id
                      ? 'border-cyan-400 bg-cyan-900/20'
                      : 'border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 hover:bg-gray-800/50'
                  }`}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-black'
                      : 'bg-gray-700 text-gray-300 group-hover:bg-cyan-400 group-hover:text-black'
                  }`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{category.label}</h3>
                  <span className="text-sm text-gray-400">{category.count} posts</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Featured Articles
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Must-Read Insights</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and impactful articles on cutting-edge technology trends
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
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="w-full h-64 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-900/20 text-cyan-400 text-sm rounded-full">
                        {categories.find(cat => cat.id === post.category)?.label}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.article>
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
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Latest Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our most recent insights and discoveries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-2 py-1 bg-cyan-900/20 text-cyan-400 text-xs rounded-full">
                        {categories.find(cat => cat.id === post.category)?.label}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 text-sm">
                      Read More
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get notified about new articles, research breakthroughs, and technology trends
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
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