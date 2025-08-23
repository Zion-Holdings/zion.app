import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Brain, Atom, Shield, Rocket, 
  Star, TrendingUp, CheckCircle, Phone, Mail, MapPin,
  ArrowRight, Zap, Cpu, Database, Cloud, Palette,
  BookOpen, Calendar, User, Tag, Search, Filter,
  ExternalLink, Video, Podcast, FileText, Clock,
  Eye, Heart, MessageCircle, Share2, Newspaper
} from 'lucide-react';
import Link from 'next/link';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'All Posts', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" /> },
    { id: 'tutorials', name: 'Tutorials & Guides', icon: <FileText className="w-5 h-5" /> },
    { id: 'industry', name: 'Industry Analysis', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'research', name: 'Research & Development', icon: <Cpu className="w-5 h-5" /> }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Building AI Consciousness: A Technical Deep Dive',
      excerpt: 'Explore the technical architecture behind our AI consciousness platform, including neural network design, emotional intelligence algorithms, and ethical safeguards.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '12 min read',
      views: 15420,
      likes: 892,
      comments: 156,
      tags: ['AI Consciousness', 'Neural Networks', 'Technical Deep Dive', 'Ethics'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Quantum Error Correction: Practical Implementation Guide',
      excerpt: 'A comprehensive guide to implementing quantum error correction in real-world quantum computing applications, with code examples and best practices.',
      category: 'quantum',
      author: 'Dr. Marcus Rodriguez',
      date: '2025-01-12',
      readTime: '18 min read',
      views: 12850,
      likes: 745,
      comments: 89,
      tags: ['Quantum Computing', 'Error Correction', 'Implementation', 'Tutorial'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Space Resource Mining: Technologies and Challenges',
      excerpt: 'An in-depth analysis of current space resource mining technologies, challenges, and future prospects for sustainable space exploration.',
      category: 'space',
      author: 'Dr. Elena Petrova',
      date: '2025-01-10',
      readTime: '15 min read',
      views: 9870,
      likes: 623,
      comments: 78,
      tags: ['Space Technology', 'Resource Mining', 'Exploration', 'Sustainability'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Getting Started with AI-Powered DevOps',
      excerpt: 'Learn how to implement AI-powered DevOps practices to automate infrastructure management, deployment, and monitoring.',
      category: 'tutorials',
      author: 'Engineering Users',
      date: '2025-01-08',
      readTime: '20 min read',
      views: 11200,
      likes: 678,
      comments: 92,
      tags: ['DevOps', 'AI Automation', 'Infrastructure', 'Tutorial'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'The Future of Cybersecurity in the Quantum Era',
      excerpt: 'How quantum computing is reshaping cybersecurity and what organizations need to do to prepare for quantum-resistant security.',
      category: 'research',
      author: 'Security Users',
      date: '2025-01-05',
      readTime: '14 min read',
      views: 13450,
      likes: 789,
      comments: 112,
      tags: ['Cybersecurity', 'Quantum Computing', 'Security', 'Future'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'AI in Healthcare: Revolutionizing Patient Care',
      excerpt: 'Exploring the transformative impact of AI on healthcare, from diagnosis to treatment planning and patient monitoring.',
      category: 'industry',
      author: 'Healthcare AI Users',
      date: '2025-01-03',
      readTime: '16 min read',
      views: 15680,
      likes: 945,
      comments: 134,
      tags: ['Healthcare', 'AI', 'Patient Care', 'Innovation'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 7,
      title: 'Building Scalable Microservices with AI Orchestration',
      excerpt: 'A practical guide to building and managing microservices architecture with AI-powered orchestration and monitoring.',
      category: 'tutorials',
      author: 'Architecture Users',
      date: '2024-12-30',
      readTime: '22 min read',
      views: 8920,
      likes: 567,
      comments: 76,
      tags: ['Microservices', 'AI Orchestration', 'Architecture', 'Scalability'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 8,
      title: 'Quantum Machine Learning: Algorithms and Applications',
      excerpt: 'Deep dive into quantum machine learning algorithms and their practical applications in solving complex optimization problems.',
      category: 'quantum',
      author: 'Quantum ML Users',
      date: '2024-12-28',
      readTime: '19 min read',
      views: 10230,
      likes: 634,
      comments: 88,
      tags: ['Quantum ML', 'Algorithms', 'Optimization', 'Applications'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 9,
      title: 'Edge Computing and AI: The Perfect Partnership',
      excerpt: 'How edge computing and AI are working together to enable real-time decision making in IoT and mobile applications.',
      category: 'technology',
      author: 'Edge Computing Users',
      date: '2024-12-25',
      readTime: '13 min read',
      views: 11890,
      likes: 712,
      comments: 95,
      tags: ['Edge Computing', 'AI', 'IoT', 'Real-time'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 10,
      title: 'Sustainable Technology: Green AI and Quantum Computing',
      excerpt: 'Exploring how AI and quantum computing can contribute to sustainability goals and environmental protection.',
      category: 'research',
      author: 'Sustainability Users',
      date: '2024-12-22',
      readTime: '17 min read',
      views: 9450,
      likes: 589,
      comments: 67,
      tags: ['Sustainability', 'Green AI', 'Environmental', 'Technology'],
      featured: false,
      image: '/api/placeholder/600/400'
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'popular':
        return b.views - a.views;
      case 'likes':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Technology Blog
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Deep insights, practical tutorials, and cutting-edge analysis on AI, quantum computing, 
                space technology, and the future of enterprise technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#featured" className="btn-primary">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Read Featured Post
                </Link>
                <Link href="/news" className="btn-secondary">
                  View News
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section id="featured" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-cyan-400 mb-2">Featured Post</h2>
                <p className="text-gray-400">Our most comprehensive and insightful article</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        {categories.find(c => c.id === featuredPost.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-6 text-gray-400">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.date)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        {formatNumber(featuredPost.views)} views
                      </span>
                      <span className="flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        {formatNumber(featuredPost.likes)} likes
                      </span>
                      <span className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        {formatNumber(featuredPost.comments)} comments
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="btn-primary">
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center p-8">
                    <div className="text-center">
                      <BookOpen className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-400">Featured Post</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Filters and Search */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                  </button>
                ))}
              </div>
              
              {/* Search and Sort */}
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 w-64"
                  />
                </div>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Most Popular</option>
                  <option value="likes">Most Liked</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Latest Posts
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Explore our comprehensive collection of technology insights and tutorials
              </p>
            </motion.div>
            
            {sortedPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {formatNumber(post.views)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {formatNumber(post.likes)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {formatNumber(post.comments)}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <button className="w-full btn-primary text-sm">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
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
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-400 mb-4">No posts match your current filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Never Miss a Post
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest blog posts, tutorials, and 
                technology insights delivered directly to your inbox.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                  <button className="btn-primary whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                More Content
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Explore additional resources and content from Zion Tech Group
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
              >
                <Newspaper className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">News</h3>
                <p className="text-gray-300 mb-6">
                  Latest company updates, breakthroughs, and industry announcements.
                </p>
                <Link href="/news" className="btn-secondary">
                  Read News
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
              >
                <Video className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Webinars</h3>
                <p className="text-gray-300 mb-6">
                  Live and recorded webinars on cutting-edge technology topics.
                </p>
                <Link href="/webinars" className="btn-secondary">
                  View Webinars
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
              >
                <FileText className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Documentation</h3>
                <p className="text-gray-300 mb-6">
                  Technical documentation and API references for our platforms.
                </p>
                <Link href="/docs" className="btn-secondary">
                  View Docs
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;