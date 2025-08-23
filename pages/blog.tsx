import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  TrendingUp,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Star
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: <Star className="w-4 h-4" />, count: 25 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" />, count: 8 },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-4 h-4" />, count: 6 },
    { id: 'space-tech', name: 'Space Technology', icon: <Rocket className="w-4 h-4" />, count: 4 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" />, count: 5 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-4 h-4" />, count: 3 },
    { id: 'trends', name: 'Industry Trends', icon: <TrendingUp className="w-4 h-4" />, count: 4 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Explore how Zion Tech Group is pushing the boundaries of artificial consciousness, creating AI systems that understand, learn, and evolve in ways previously thought impossible.',
      category: 'ai-ml',
      author: 'AI Research Team',
      date: '2025-01-15',
      readTime: '8 min read',
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: Solving Previously Impossible Problems',
      excerpt: 'Discover our latest quantum computing innovations that are revolutionizing industries from finance to pharmaceuticals, and learn how quantum supremacy is becoming a reality.',
      category: 'quantum',
      author: 'Quantum Team',
      date: '2025-01-12',
      readTime: '10 min read',
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Space Resource Intelligence: The Next Frontier of Exploration',
      excerpt: 'Learn about our cutting-edge space technology platforms that are enabling sustainable resource extraction and exploration beyond Earth\'s atmosphere.',
      category: 'space-tech',
      author: 'Space Technology Team',
      date: '2025-01-10',
      readTime: '6 min read',
      featured: true,
      image: '/api/placeholder/600/400'
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Zero Trust Security Architecture: Building Unbreachable Systems',
      excerpt: 'Implementing zero trust security principles in modern enterprise environments to protect against evolving cyber threats.',
      category: 'cybersecurity',
      author: 'Security Team',
      date: '2025-01-08',
      readTime: '7 min read',
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Multi-Cloud Management: Orchestrating the Future of Infrastructure',
      excerpt: 'Strategies for managing complex multi-cloud environments while maintaining performance, security, and cost efficiency.',
      category: 'cloud',
      author: 'Cloud Team',
      date: '2025-01-05',
      readTime: '9 min read',
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'AI Ethics and Governance: Responsible Development in the Age of Consciousness',
      excerpt: 'Examining the ethical implications of AI consciousness and establishing frameworks for responsible AI development.',
      category: 'ai-ml',
      author: 'AI Ethics Team',
      date: '2025-01-03',
      readTime: '11 min read',
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 7,
      title: 'Quantum Cybersecurity: Preparing for the Post-Quantum Era',
      excerpt: 'Understanding the threats and opportunities presented by quantum computing in cybersecurity and implementing quantum-resistant solutions.',
      category: 'quantum',
      author: 'Quantum Security Team',
      date: '2025-01-01',
      readTime: '8 min read',
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 8,
      title: 'Edge Computing Revolution: Bringing Intelligence Closer to Data',
      excerpt: 'How edge computing is transforming industries by processing data closer to its source, reducing latency and improving real-time decision making.',
      category: 'cloud',
      author: 'Edge Computing Team',
      date: '2024-12-30',
      readTime: '6 min read',
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 9,
      title: 'Autonomous Systems: The Future of Intelligent Automation',
      excerpt: 'Exploring the development of fully autonomous systems that can operate independently while maintaining safety and ethical standards.',
      category: 'ai-ml',
      author: 'Autonomous Systems Team',
      date: '2024-12-28',
      readTime: '10 min read',
      featured: false,
      image: '/api/placeholder/400/250'
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : <Star className="w-4 h-4" />;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Uncategorized';
  };

  return (
    <Layout>
      <SEO 
        title="Blog | Zion Tech Group" 
        description="Stay updated with the latest insights on AI consciousness, quantum computing, space technology, and cybersecurity from Zion Tech Group."
        canonical="https://ziontechgroup.com/blog/"
      />
      
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
                Zion Tech Group <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Insights, innovations, and industry perspectives on the future of technology. 
                Stay ahead with expert analysis from our research teams.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-400/20 border-cyan-400/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-400'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Featured Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep insights and breakthrough research from our leading technology teams
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gray-700 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <div className="w-16 h-16 bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          {getCategoryIcon(post.category)}
                        </div>
                        <p>Featured Article</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                        {getCategoryName(post.category)}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
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
                    
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Latest Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our latest research, insights, and technology developments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.slice(3).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gray-700 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <div className="w-12 h-12 bg-gray-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          {getCategoryIcon(post.category)}
                        </div>
                        <p className="text-sm">Article</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                        {getCategoryName(post.category)}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                      <span>{post.author}</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 px-6 py-2 bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/30 transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 p-8 rounded-xl border border-cyan-400/20"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Get notified about new articles, research breakthroughs, and technology insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300">
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