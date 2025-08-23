import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, Calendar, User, Tag, ArrowRight, Clock, 
  Eye, Heart, Share2, Filter, BookOpen, TrendingUp
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'ai-consciousness', name: 'AI Consciousness', count: 8 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 5 },
    { id: 'space-technology', name: 'Space Technology', count: 3 },
    { id: 'business-intelligence', name: 'Business Intelligence', count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Evolution of AI Consciousness: From Machine Learning to Self-Awareness",
      excerpt: "Explore the groundbreaking developments in AI consciousness evolution and how we're moving beyond traditional machine learning towards truly self-aware artificial intelligence systems.",
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "ai-consciousness",
      image: "/blog/ai-consciousness-evolution.jpg",
      views: 1247,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: Solving Previously Impossible Problems",
      excerpt: "Discover how quantum computing is revolutionizing problem-solving across industries, from cryptography to drug discovery and optimization challenges.",
      author: "Prof. Michael Rodriguez",
      date: "2025-01-12",
      readTime: "12 min read",
      category: "quantum-computing",
      image: "/blog/quantum-computing-breakthroughs.jpg",
      views: 892,
      likes: 67,
      featured: true
    },
    {
      id: 3,
      title: "Next-Generation Cybersecurity: AI-Powered Threat Detection",
      excerpt: "Learn about the latest advancements in AI-driven cybersecurity systems that can predict and prevent threats before they materialize.",
      author: "Alex Thompson",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "cybersecurity",
      image: "/blog/ai-cybersecurity.jpg",
      views: 756,
      likes: 54,
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Space Resource Intelligence: Mining the Final Frontier",
      excerpt: "How AI and advanced robotics are enabling sustainable resource extraction from asteroids and other celestial bodies.",
      author: "Dr. Elena Petrova",
      date: "2025-01-08",
      readTime: "10 min read",
      category: "space-technology",
      image: "/blog/space-mining.jpg",
      views: 634,
      likes: 42
    },
    {
      id: 5,
      title: "Autonomous Business Intelligence: The Future of Decision Making",
      excerpt: "Exploring how autonomous AI systems are transforming business intelligence and strategic decision-making processes.",
      author: "James Wilson",
      date: "2025-01-05",
      readTime: "7 min read",
      category: "business-intelligence",
      image: "/blog/autonomous-bi.jpg",
      views: 521,
      likes: 38
    },
    {
      id: 6,
      title: "Quantum Neural Networks: Merging Quantum Computing with AI",
      excerpt: "Understanding the intersection of quantum computing and neural networks, and the potential for exponential performance improvements.",
      author: "Dr. Sarah Chen",
      date: "2025-01-03",
      readTime: "9 min read",
      category: "quantum-computing",
      image: "/blog/quantum-neural.jpg",
      views: 478,
      likes: 35
    },
    {
      id: 7,
      title: "Emotional Intelligence in AI: Building Machines That Understand Feelings",
      excerpt: "The latest developments in creating AI systems that can recognize, understand, and respond to human emotions.",
      author: "Dr. Marcus Johnson",
      date: "2025-01-01",
      readTime: "11 min read",
      category: "ai-consciousness",
      image: "/blog/emotional-ai.jpg",
      views: 445,
      likes: 31
    },
    {
      id: 8,
      title: "Zero-Trust Security Architecture: Beyond Traditional Perimeter Defense",
      excerpt: "Implementing zero-trust security principles in modern enterprise environments for enhanced protection.",
      author: "Alex Thompson",
      date: "2024-12-30",
      readTime: "8 min read",
      category: "cybersecurity",
      image: "/blog/zero-trust.jpg",
      views: 398,
      likes: 28
    },
    {
      id: 9,
      title: "Predictive Analytics in Healthcare: AI's Role in Preventive Medicine",
      excerpt: "How AI-powered predictive analytics is revolutionizing healthcare and enabling proactive patient care.",
      author: "Dr. Lisa Park",
      date: "2024-12-28",
      readTime: "13 min read",
      category: "business-intelligence",
      image: "/blog/healthcare-ai.jpg",
      views: 367,
      likes: 25
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchQuery.toLowerCase());
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
    <Layout 
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights on AI consciousness, quantum computing, cybersecurity, and space technology from Zion Tech Group's expert team."
      keywords="Zion Tech Group blog, AI consciousness, quantum computing, cybersecurity, space technology, technology insights, AI blog"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Insights, breakthroughs, and thought leadership on the future of technology. 
                Stay ahead with expert analysis from our revolutionary team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12">
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
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Articles</h2>
              <p className="text-xl text-gray-400">Our most popular and insightful content</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-gray-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </span>
                      </div>
                      
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1 group-hover:gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-400">Stay updated with our newest insights and discoveries</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(3).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-gray-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </span>
                      </div>
                      
                      <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-1 group-hover:gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-all duration-300" />
                      </button>
                    </div>
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
                <p className="text-xl text-gray-400 mb-4">No articles match your current search criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8 rounded-2xl border border-cyan-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-gray-400 mb-6">
                Get the latest insights on AI consciousness, quantum computing, and revolutionary technology 
                delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Explore More?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Discover our revolutionary services and see how we can transform your business 
                with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/services"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Services
                </a>
                <a
                  href="/contact"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;