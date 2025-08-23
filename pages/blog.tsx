import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Calendar, User, Clock, ArrowRight,
  Brain, Atom, Rocket, Shield, TrendingUp,
  Filter, BookOpen, Tag
} from 'lucide-react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: <BookOpen className="w-5 h-5" />, count: 25 },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 8 },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" />, count: 6 },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" />, count: 4 },
    { id: 'enterprise', name: 'Enterprise IT', icon: <Shield className="w-5 h-5" />, count: 7 }
  ];

  const featuredPosts = [
    {
      id: 'ai-consciousness-evolution',
      title: 'The Evolution of AI Consciousness: From Automation to Self-Awareness',
      excerpt: 'Explore the groundbreaking developments in AI consciousness research and how we\'re moving beyond simple automation to create truly self-aware systems.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'ai',
      image: '/images/blog/ai-consciousness.jpg',
      featured: true
    },
    {
      id: 'quantum-financial-trading',
      title: 'Quantum Computing in Financial Markets: The Future of Trading',
      excerpt: 'Discover how quantum algorithms are revolutionizing financial trading, enabling faster analysis and more accurate predictions than ever before.',
      author: 'Marcus Rodriguez',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'quantum',
      image: '/images/blog/quantum-trading.jpg',
      featured: true
    },
    {
      id: 'space-mining-automation',
      title: 'Automating Space Resource Mining: The Next Frontier',
      excerpt: 'Learn about our autonomous systems for space resource mining and how they\'re paving the way for sustainable space exploration.',
      author: 'Dr. Elena Petrova',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'space',
      image: '/images/blog/space-mining.jpg',
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 'ai-ethics-framework',
      title: 'Building Ethical AI: A Comprehensive Framework for Responsible Development',
      excerpt: 'Understanding the importance of ethical AI development and implementing frameworks that ensure responsible innovation.',
      author: 'Dr. James Wilson',
      date: '2025-01-08',
      readTime: '5 min read',
      category: 'ai',
      image: '/images/blog/ai-ethics.jpg'
    },
    {
      id: 'quantum-cybersecurity',
      title: 'Quantum-Resistant Cryptography: Preparing for the Post-Quantum Era',
      excerpt: 'As quantum computers advance, we need new cryptographic methods to protect our digital infrastructure.',
      author: 'Dr. Lisa Thompson',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'quantum',
      image: '/images/blog/quantum-security.jpg'
    },
    {
      id: 'enterprise-automation',
      title: 'The Future of Enterprise Automation: AI-Powered Business Processes',
      excerpt: 'How AI is transforming enterprise operations and creating more efficient, intelligent business processes.',
      author: 'Michael Chang',
      date: '2025-01-03',
      readTime: '4 min read',
      category: 'enterprise',
      image: '/images/blog/enterprise-ai.jpg'
    },
    {
      id: 'space-colonization',
      title: 'Space Colonization Technologies: Building Sustainable Human Habitats',
      excerpt: 'Exploring the technologies needed to establish permanent human settlements in space.',
      author: 'Dr. Robert Kim',
      date: '2024-12-30',
      readTime: '7 min read',
      category: 'space',
      image: '/images/blog/space-colonization.jpg'
    },
    {
      id: 'ai-healthcare-diagnostics',
      title: 'AI in Healthcare: Revolutionizing Medical Diagnostics',
      excerpt: 'How artificial intelligence is improving medical diagnosis accuracy and patient outcomes.',
      author: 'Dr. Amanda Foster',
      date: '2024-12-28',
      readTime: '5 min read',
      category: 'ai',
      image: '/images/blog/ai-healthcare.jpg'
    },
    {
      id: 'quantum-materials',
      title: 'Quantum Materials Discovery: Accelerating Innovation Through AI',
      excerpt: 'Combining quantum computing and AI to discover new materials with revolutionary properties.',
      author: 'Dr. Carlos Mendez',
      date: '2024-12-25',
      readTime: '6 min read',
      category: 'quantum',
      image: '/images/blog/quantum-materials.jpg'
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
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.icon || <BookOpen className="w-5 h-5" />;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.name || 'General';
  };

  return (
    <Layout>
      <SEO 
        title="Blog | Zion Tech Group"
        description="Stay updated with the latest insights on AI, quantum computing, space technology, and enterprise solutions. Expert analysis and industry trends from Zion Tech Group."
        keywords={["blog", "AI insights", "quantum computing", "space technology", "enterprise IT", "technology trends", "Zion Tech Group"]}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Zion Tech Group Blog
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
                Insights, analysis, and expert perspectives on the future of technology. Stay ahead with our latest thoughts on AI, quantum computing, and space innovation.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-white/30'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Featured Articles</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our most popular and insightful articles on cutting-edge technology trends and innovations.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-white/20">
                      {getCategoryIcon(post.category)}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        {getCategoryName(post.category)}
                      </span>
                      <span className="text-white/50 text-sm">•</span>
                      <span className="text-white/50 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/70 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-white/50 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Latest Articles</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Stay current with our latest insights and analysis on emerging technologies and industry trends.
              </p>
            </motion.div>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <div className="text-4xl text-white/20">
                        {getCategoryIcon(post.category)}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                          {getCategoryName(post.category)}
                        </span>
                        <span className="text-white/50 text-sm">•</span>
                        <span className="text-white/50 text-sm">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-white/70 mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-white/50 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                      
                      <a
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center py-16"
              >
                <BookOpen className="w-16 h-16 text-white/20 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-white/70">
                  Try adjusting your search terms or category filter to find what you're looking for.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
              <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
                Get the latest insights on AI, quantum computing, and space technology delivered to your inbox. Never miss an important development.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-white/50 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;