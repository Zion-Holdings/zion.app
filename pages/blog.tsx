import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  ChevronRight,
  Filter,
  TrendingUp,
  Lightbulb,
  Zap,
  Brain,
  Atom,
  Rocket,
  Shield
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts', icon: BookOpen, count: 25 },
    { id: 'ai', label: 'AI & ML', icon: Brain, count: 8 },
    { id: 'quantum', label: 'Quantum', icon: Atom, count: 5 },
    { id: 'space', label: 'Space Tech', icon: Rocket, count: 4 },
    { id: 'security', label: 'Security', icon: Shield, count: 6 },
    { id: 'trends', label: 'Tech Trends', icon: TrendingUp, count: 7 },
    { id: 'insights', label: 'Insights', icon: Lightbulb, count: 10 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI: Consciousness and Autonomous Systems',
      excerpt: 'Exploring the next frontier of artificial intelligence and the development of truly conscious AI systems that can think, learn, and evolve independently.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      featured: true,
      tags: ['AI', 'Consciousness', 'Autonomous Systems', 'Future Tech'],
      image: '/blog/ai-consciousness.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: What\'s Next?',
      excerpt: 'Recent developments in quantum computing and how they\'re reshaping the landscape of computational power and problem-solving capabilities.',
      category: 'quantum',
      author: 'Prof. Michael Rodriguez',
      date: '2025-01-12',
      readTime: '6 min read',
      featured: false,
      tags: ['Quantum Computing', 'Technology', 'Innovation'],
      image: '/blog/quantum-breakthroughs.jpg'
    },
    {
      id: 3,
      title: 'Space Technology Revolution: Mining Asteroids and Beyond',
      excerpt: 'How space technology is enabling humanity to access resources beyond Earth and the economic implications of space resource extraction.',
      category: 'space',
      author: 'Dr. Emily Watson',
      date: '2025-01-10',
      readTime: '10 min read',
      featured: false,
      tags: ['Space Technology', 'Asteroid Mining', 'Space Economy'],
      image: '/blog/space-mining.jpg'
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of Quantum Threats',
      excerpt: 'Understanding the new security challenges posed by quantum computing and how to prepare for the post-quantum cryptography era.',
      category: 'security',
      author: 'Alex Thompson',
      date: '2025-01-08',
      readTime: '7 min read',
      featured: false,
      tags: ['Cybersecurity', 'Quantum Threats', 'Cryptography'],
      image: '/blog/quantum-security.jpg'
    },
    {
      id: 5,
      title: 'Edge Computing: The Future of Distributed Intelligence',
      excerpt: 'How edge computing is transforming the way we process data and deliver intelligent services closer to where they\'re needed.',
      category: 'trends',
      author: 'Lisa Park',
      date: '2025-01-05',
      readTime: '5 min read',
      featured: false,
      tags: ['Edge Computing', 'IoT', 'Distributed Systems'],
      image: '/blog/edge-computing.jpg'
    },
    {
      id: 6,
      title: 'AI Ethics and Responsible Development',
      excerpt: 'The importance of ethical considerations in AI development and how to build systems that benefit humanity while minimizing risks.',
      category: 'ai',
      author: 'Dr. James Wilson',
      date: '2025-01-03',
      readTime: '9 min read',
      featured: false,
      tags: ['AI Ethics', 'Responsible AI', 'Human-Centric Design'],
      image: '/blog/ai-ethics.jpg'
    },
    {
      id: 7,
      title: 'The Metaverse Revolution: Building Digital Worlds',
      excerpt: 'Exploring the development of immersive digital environments and the technologies powering the metaverse revolution.',
      category: 'trends',
      author: 'Maria Garcia',
      date: '2025-01-01',
      readTime: '6 min read',
      featured: false,
      tags: ['Metaverse', 'Virtual Reality', 'Digital Worlds'],
      image: '/blog/metaverse-revolution.jpg'
    },
    {
      id: 8,
      title: 'Sustainable Technology: Green Computing Solutions',
      excerpt: 'How technology can help solve environmental challenges and create a more sustainable future for our planet.',
      category: 'insights',
      author: 'David Kim',
      date: '2024-12-28',
      readTime: '7 min read',
      featured: false,
      tags: ['Sustainability', 'Green Tech', 'Environmental Impact'],
      image: '/blog/sustainable-tech.jpg'
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
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

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Blog & Insights
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Stay ahead of the curve with the latest insights, trends, and innovations 
                in AI, quantum computing, space technology, and beyond.
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
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.label}</span>
                  <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Featured Article
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 lg:p-12 border border-cyan-500/30 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium mb-4">
                      Featured
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(featuredPost.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-64 lg:h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                        <p className="text-gray-300">Featured Article</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover insights, tutorials, and thought leadership from our team of experts.
              </p>
            </motion.div>

            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">No articles found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                        <p className="text-gray-300 text-sm">Article</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                          {categories.find(cat => cat.id === post.category)?.label}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">
                          {formatDate(post.date)}
                        </span>
                        <a
                          href={`/blog/${post.id}`}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700/50"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest insights, articles, and updates delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              
              <p className="text-gray-400 text-sm mt-4">
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