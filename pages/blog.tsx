import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  User, 
  Clock, 
  Search,
  Filter,
  ArrowRight,
  Tag,
  Eye,
  Heart
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 15 },
    { id: 'ai', name: 'AI & Consciousness', count: 6 },
    { id: 'quantum', name: 'Quantum Computing', count: 4 },
    { id: 'space', name: 'Space Technology', count: 3 },
    { id: 'business', name: 'Business Insights', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Exploring how AI consciousness evolution platforms are reshaping our understanding of artificial intelligence and human-machine interaction.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      views: 1247,
      likes: 89,
      tags: ['AI Consciousness', 'Machine Learning', 'Future Tech'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: Solving Previously Impossible Problems',
      excerpt: 'Discover how quantum computing is revolutionizing industries from cryptography to drug discovery, and what this means for the future.',
      category: 'quantum',
      author: 'Marcus Rodriguez',
      date: '2025-01-12',
      readTime: '6 min read',
      views: 892,
      likes: 67,
      tags: ['Quantum Computing', 'Cryptography', 'Innovation']
    },
    {
      id: 3,
      title: 'Space Resource Mining: The Next Frontier of Human Exploration',
      excerpt: 'How autonomous space systems and AI are enabling the extraction of valuable resources from asteroids and other celestial bodies.',
      category: 'space',
      author: 'Kleber Santos',
      date: '2025-01-10',
      readTime: '10 min read',
      views: 1563,
      likes: 112,
      tags: ['Space Technology', 'Resource Mining', 'Autonomous Systems']
    },
    {
      id: 4,
      title: 'Autonomous Business Operations: The Future of Enterprise Management',
      excerpt: 'How AI-powered autonomous systems are transforming business operations and creating unprecedented efficiency gains.',
      category: 'business',
      author: 'Dr. Sarah Chen',
      date: '2025-01-08',
      readTime: '7 min read',
      views: 734,
      likes: 45,
      tags: ['Business Automation', 'AI Operations', 'Enterprise']
    },
    {
      id: 5,
      title: 'Quantum Cybersecurity: Protecting Data in the Post-Quantum Era',
      excerpt: 'Understanding the threats and solutions for cybersecurity as quantum computers become more powerful and accessible.',
      category: 'quantum',
      author: 'Marcus Rodriguez',
      date: '2025-01-05',
      readTime: '9 min read',
      views: 1102,
      likes: 78,
      tags: ['Cybersecurity', 'Quantum Threats', 'Data Protection']
    },
    {
      id: 6,
      title: 'AI Ethics and Governance: Building Responsible Technology',
      excerpt: 'The importance of ethical frameworks and governance in AI development, and how we can ensure technology serves humanity.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-03',
      readTime: '11 min read',
      views: 1345,
      likes: 95,
      tags: ['AI Ethics', 'Governance', 'Responsible AI']
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

  return (
    <Layout>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent"
            >
              Insights & Innovation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Explore the latest insights in AI consciousness, quantum computing, space technology, and the future of business.
            </motion.p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {filteredPosts.filter(post => post.featured).length > 0 && (
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-2">Featured Article</h2>
                <p className="text-gray-400">Our most popular and insightful content</p>
              </motion.div>

              {filteredPosts.filter(post => post.featured).map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-orange-900/30 text-orange-300 text-sm rounded-full border border-orange-500/30">
                          {post.category.toUpperCase()}
                        </span>
                        <span className="px-3 py-1 bg-red-900/30 text-red-300 text-sm rounded-full border border-red-500/30">
                          FEATURED
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">{post.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {post.views} views
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          {post.likes} likes
                        </div>
                      </div>
                      
                      <a
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30 flex items-center justify-center">
                        <BookOpen className="w-24 h-24 text-orange-400" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Latest Articles</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with the latest insights and innovations in technology
              </p>
            </motion.div>
            
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter(post => !post.featured).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-orange-900/30 text-orange-300 text-sm rounded-full border border-orange-500/30">
                        {post.category.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {post.likes}
                        </div>
                      </div>
                      
                      <a
                        href={`/blog/${post.id}`}
                        className="text-orange-400 hover:text-orange-300 transition-colors duration-300 flex items-center gap-1"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3" />
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
                className="text-center py-12"
              >
                <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights and innovations delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
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