import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Atom, Globe, Users, Award, 
  Target, Lightbulb, Zap, Star, Building, MapPin, Phone, Mail,
  Calendar, Clock, User, Tag, ArrowRight, ExternalLink, Search,
  Filter, TrendingUp, BookOpen, Video, Headphones, Eye, Heart
} from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const blogCategories = [
    { id: 'all', name: 'All Articles', count: 67 },
    { id: 'ai', name: 'AI & Machine Learning', count: 25 },
    { id: 'quantum', name: 'Quantum Computing', count: 18 },
    { id: 'technology', name: 'Technology Trends', count: 15 },
    { id: 'industry', name: 'Industry Insights', count: 9 }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Exploring the revolutionary developments in AI consciousness technology and what it means for the future of human-AI collaboration.',
      category: 'ai',
      date: '2025-01-15',
      author: 'Dr. Sarah Chen',
      readTime: '8 min read',
      views: '12.5K',
      likes: '847',
      featured: true,
      image: '/images/blog/ai-consciousness-future.jpg',
      tags: ['AI Consciousness', 'Machine Learning', 'Future Technology', 'Research']
    },
    {
      id: 2,
      title: 'Quantum Computing in 2025: Breaking Down the Hype vs. Reality',
      excerpt: 'A comprehensive analysis of current quantum computing capabilities and realistic expectations for enterprise applications.',
      category: 'quantum',
      date: '2025-01-12',
      author: 'Prof. Michael Rodriguez',
      readTime: '12 min read',
      views: '8.9K',
      likes: '623',
      featured: true,
      image: '/images/blog/quantum-computing-2025.jpg',
      tags: ['Quantum Computing', 'Enterprise', 'Technology Analysis', '2025 Trends']
    },
    {
      id: 3,
      title: 'Building Autonomous Business Operations: Lessons from Early Adopters',
      excerpt: 'Real-world case studies of companies successfully implementing AI-driven autonomous business operations.',
      category: 'technology',
      date: '2025-01-08',
      author: 'Zion Tech Group',
      readTime: '10 min read',
      views: '15.2K',
      likes: '1.2K',
      featured: true,
      image: '/images/blog/autonomous-business-operations.jpg',
      tags: ['AI Automation', 'Business Operations', 'Case Studies', 'Digital Transformation']
    }
  ];

  const latestArticles = [
    {
      id: 4,
      title: 'The Ethics of AI Decision Making: Balancing Automation with Human Oversight',
      excerpt: 'Critical examination of ethical considerations in AI-powered decision making systems and frameworks for responsible AI deployment.',
      category: 'ai',
      date: '2025-01-10',
      author: 'Dr. Emily Watson',
      readTime: '15 min read',
      views: '6.7K',
      likes: '445',
      featured: false,
      image: '/images/blog/ai-ethics-decision-making.jpg',
      tags: ['AI Ethics', 'Decision Making', 'Responsible AI', 'Governance']
    },
    {
      id: 5,
      title: 'Quantum Cryptography: The Unbreakable Security Solution',
      excerpt: 'Deep dive into quantum cryptography principles and how they are revolutionizing cybersecurity for the quantum era.',
      category: 'quantum',
      date: '2025-01-07',
      author: 'Dr. James Chen',
      readTime: '14 min read',
      views: '9.1K',
      likes: '678',
      featured: false,
      image: '/images/blog/quantum-cryptography.jpg',
      tags: ['Quantum Cryptography', 'Cybersecurity', 'Quantum Security', 'Encryption']
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Processing Data Where It Matters',
      excerpt: 'Exploring the growing importance of edge computing in IoT, autonomous vehicles, and real-time applications.',
      category: 'technology',
      date: '2025-01-05',
      author: 'Alex Thompson',
      readTime: '11 min read',
      views: '7.8K',
      likes: '534',
      featured: false,
      image: '/images/blog/edge-computing-rise.jpg',
      tags: ['Edge Computing', 'IoT', 'Real-time Processing', 'Technology Trends']
    },
    {
      id: 7,
      title: 'AI in Healthcare: Transforming Patient Care and Medical Research',
      excerpt: 'Comprehensive overview of AI applications in healthcare, from diagnostic tools to drug discovery and personalized medicine.',
      category: 'industry',
      date: '2025-01-03',
      author: 'Dr. Lisa Park',
      readTime: '16 min read',
      views: '11.3K',
      likes: '892',
      featured: false,
      image: '/images/blog/ai-healthcare-transformation.jpg',
      tags: ['AI Healthcare', 'Medical AI', 'Patient Care', 'Drug Discovery']
    },
    {
      id: 8,
      title: 'The Future of Work: How AI is Reshaping Professional Roles',
      excerpt: 'Analysis of how AI automation is transforming job markets and creating new opportunities for human workers.',
      category: 'industry',
      date: '2024-12-30',
      author: 'Zion Tech Group',
      readTime: '13 min read',
      views: '8.4K',
      likes: '567',
      featured: false,
      image: '/images/blog/future-work-ai.jpg',
      tags: ['Future of Work', 'AI Automation', 'Job Market', 'Professional Development']
    },
    {
      id: 9,
      title: 'Building Scalable AI Infrastructure: Best Practices for Enterprises',
      excerpt: 'Practical guide to designing and implementing scalable AI infrastructure that can grow with your business needs.',
      category: 'technology',
      date: '2024-12-28',
      author: 'Mark Johnson',
      readTime: '18 min read',
      views: '6.2K',
      likes: '423',
      featured: false,
      image: '/images/blog/scalable-ai-infrastructure.jpg',
      tags: ['AI Infrastructure', 'Enterprise', 'Scalability', 'Best Practices']
    }
  ];

  const popularTopics = [
    { name: 'AI Consciousness', count: 15, color: 'cyan' },
    { name: 'Quantum Computing', count: 12, color: 'purple' },
    { name: 'AI Ethics', count: 8, color: 'green' },
    { name: 'Edge Computing', count: 6, color: 'blue' },
    { name: 'AI in Healthcare', count: 5, color: 'pink' },
    { name: 'Future of Work', count: 4, color: 'yellow' }
  ];

  const filteredArticles = [...featuredArticles, ...latestArticles].filter(article => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const searchMatch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'cyan',
      quantum: 'purple',
      technology: 'blue',
      industry: 'green'
    };
    return colors[category as keyof typeof colors] || 'gray';
  };

  return (
    <Layout>
      <SEO 
        title="Blog - Zion Tech Group"
        description="Insights, analysis, and thought leadership on AI consciousness, quantum computing, and emerging technologies. Stay ahead with expert perspectives from Zion Tech Group."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Insights & Analysis
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Expert perspectives on AI consciousness, quantum computing, and the future of technology. Stay ahead with our thought leadership content.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Expert Insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Industry Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>Thought Leadership</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles and insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {blogCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-400">
                In-depth analysis and breakthrough insights
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 bg-${getCategoryColor(article.category)}-500/20 text-${getCategoryColor(article.category)}-400 rounded-full text-sm border border-${getCategoryColor(article.category)}-500/30`}>
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{formatDate(article.date)}</span>
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/blog/${article.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Popular Topics
              </h2>
              <p className="text-xl text-gray-400">
                Explore trending subjects and insights
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {popularTopics.map((topic, index) => (
                <motion.div
                  key={topic.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-2xl font-bold text-white mb-2">
                    {topic.count}
                  </div>
                  <div className="text-sm text-gray-400">
                    {topic.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-400">
                Fresh insights and analysis
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredArticles.filter(article => !article.featured).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 bg-${getCategoryColor(article.category)}-500/20 text-${getCategoryColor(article.category)}-400 rounded text-xs border border-${getCategoryColor(article.category)}-500/30`}>
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                      <span>{formatDate(article.date)}</span>
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredArticles.filter(article => !article.featured).length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">
                  No articles match your current filters. Try adjusting your search or category selection.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Never Miss an Insight
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter and get the latest articles, research insights, and technology analysis delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Join 10,000+ technology professionals and enthusiasts
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}