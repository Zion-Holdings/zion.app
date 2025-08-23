import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, Calendar, User, Clock, Tag, 
  ArrowRight, BookOpen, TrendingUp, Star,
  Filter, ChevronDown
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'space', name: 'Space Technology' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'cloud', name: 'Cloud & Infrastructure' },
    { id: 'industry', name: 'Industry Insights' },
    { id: 'company', name: 'Company News' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Exploring the next frontier of artificial intelligence where machines develop genuine consciousness and emotional intelligence.',
      content: 'Artificial Intelligence has evolved dramatically from simple rule-based systems to complex neural networks. But what lies beyond? In this comprehensive exploration, we delve into the emerging field of AI consciousness...',
      author: 'Dr. Kleber Santos',
      authorAvatar: 'KS',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI Consciousness', 'Machine Learning', 'Future Tech'],
      featured: true,
      image: '/api/placeholder/600/400',
      views: 15420,
      likes: 892
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: Solving Previously Impossible Problems',
      excerpt: 'Discover how quantum computing is revolutionizing cryptography, drug discovery, and optimization problems.',
      content: 'Quantum computing represents a paradigm shift in computational power. Unlike classical computers that process bits as 0s and 1s, quantum computers use quantum bits or qubits...',
      author: 'Quantum Research Team',
      authorAvatar: 'QR',
      publishDate: '2025-01-12',
      readTime: '12 min read',
      category: 'quantum',
      tags: ['Quantum Computing', 'Cryptography', 'Optimization'],
      featured: true,
      image: '/api/placeholder/600/400',
      views: 12850,
      likes: 756
    },
    {
      id: 3,
      title: 'Space Resource Intelligence: The Next Frontier of Space Exploration',
      excerpt: 'How AI-powered platforms are revolutionizing our ability to identify and extract valuable resources from space.',
      content: 'Space mining represents humanity\'s next great frontier. With finite resources on Earth and growing demand for rare minerals, the ability to extract resources from asteroids and other celestial bodies...',
      author: 'Space Technology Team',
      authorAvatar: 'ST',
      publishDate: '2025-01-10',
      readTime: '10 min read',
      category: 'space',
      tags: ['Space Mining', 'AI', 'Resource Intelligence'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 9870,
      likes: 543
    },
    {
      id: 4,
      title: 'Zero-Trust Security Architecture: The Future of Enterprise Cybersecurity',
      excerpt: 'Implementing a zero-trust security model to protect against modern cyber threats and data breaches.',
      content: 'Traditional security models rely on perimeter-based defenses, assuming that once inside the network, users and devices can be trusted. However, this approach is increasingly inadequate...',
      author: 'Cybersecurity Team',
      authorAvatar: 'CT',
      publishDate: '2025-01-08',
      readTime: '15 min read',
      category: 'cybersecurity',
      tags: ['Zero Trust', 'Cybersecurity', 'Enterprise Security'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 11230,
      likes: 678
    },
    {
      id: 5,
      title: 'The Rise of Autonomous Business Intelligence: AI That Runs Your Business',
      excerpt: 'How autonomous AI systems are transforming business operations and decision-making processes.',
      content: 'Business intelligence has traditionally required human analysts to interpret data and make recommendations. But what if AI could not only analyze data but also make decisions and take actions...',
      author: 'AI Business Team',
      authorAvatar: 'AB',
      publishDate: '2025-01-05',
      readTime: '11 min read',
      category: 'ai',
      tags: ['Business Intelligence', 'Autonomous AI', 'Decision Making'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 8760,
      likes: 432
    },
    {
      id: 6,
      title: 'Cloud-Native Quantum Computing: Bridging Classical and Quantum Worlds',
      excerpt: 'Exploring the integration of quantum computing capabilities into cloud infrastructure.',
      content: 'As quantum computing matures, the need for accessible, scalable quantum computing resources grows. Cloud-native quantum computing represents the convergence of two revolutionary technologies...',
      author: 'Quantum Cloud Team',
      authorAvatar: 'QC',
      publishDate: '2025-01-03',
      readTime: '9 min read',
      category: 'quantum',
      tags: ['Quantum Cloud', 'Cloud Computing', 'Hybrid Systems'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 6540,
      likes: 321
    }
  ];

  const filteredPosts = blogPosts
    .filter(post => 
      selectedCategory === 'all' || post.category === selectedCategory
    )
    .filter(post =>
      searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      } else if (sortBy === 'popular') {
        return b.views - a.views;
      } else if (sortBy === 'trending') {
        return b.likes - a.likes;
      }
      return 0;
    });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <Layout seo={{
      title: 'Blog - Zion Tech Group | Technology Insights & Innovation',
      description: 'Stay updated with the latest insights on AI, quantum computing, space technology, and cybersecurity from Zion Tech Group experts.',
      keywords: 'blog, technology insights, AI, quantum computing, space technology, cybersecurity',
      url: 'https://ziontechgroup.com/blog'
    }}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                Technology Insights & Innovation
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Stay ahead of the curve with expert insights on AI, quantum computing, space technology, 
                and the future of cybersecurity from our world-class research team.
              </p>
              
              {/* Search and Filters */}
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 pr-10"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 pr-10"
                    >
                      <option value="latest">Latest</option>
                      <option value="popular">Most Popular</option>
                      <option value="trending">Trending</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Featured Articles
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Our most popular and insightful articles on cutting-edge technology and innovation.
                </p>
              </motion.div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-blue-400" />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                            {categories.find(c => c.id === post.category)?.name}
                          </span>
                          <span className="px-3 py-1 bg-yellow-600/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30">
                            Featured
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="w-4 h-4" />
                              <span>{post.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our latest insights, research findings, and industry analysis.
              </p>
            </motion.div>
            
            {regularPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-purple-400" />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                            {categories.find(c => c.id === post.category)?.name}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 1).map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-1 text-sm text-gray-400">
                            <TrendingUp className="w-4 h-4" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
                <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Stay Updated with Our Insights
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the latest technology insights, research updates, and industry analysis 
                delivered directly to your inbox.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;