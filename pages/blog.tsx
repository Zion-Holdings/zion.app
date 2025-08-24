import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, 
  Award, ExternalLink, Github, Globe, Zap, Star, CheckCircle,
  TrendingUp, BarChart3, Cloud, Network, Calendar, Clock, User,
  Search, Filter, ArrowRight, BookOpen, FileText
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles', icon: Globe },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'space', name: 'Space Technology', icon: Rocket },
    { id: 'edge', name: 'Edge Computing', icon: Cpu },
    { id: 'insights', name: 'Industry Insights', icon: TrendingUp }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI: Autonomous Systems and Human-AI Collaboration',
      excerpt: 'Explore how autonomous AI systems are reshaping industries and creating new opportunities for human-AI collaboration in the workplace.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      authorRole: 'CTO',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      featured: true,
      tags: ['AI', 'Autonomous Systems', 'Future of Work', 'Human-AI Collaboration']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: What\'s Next for Enterprise',
      excerpt: 'Discover the latest developments in quantum computing and how businesses can prepare for the quantum revolution.',
      category: 'quantum',
      author: 'Dr. Elena Petrova',
      authorRole: 'Lead Quantum Researcher',
      publishDate: '2025-01-12',
      readTime: '12 min read',
      image: '/api/placeholder/600/400',
      featured: true,
      tags: ['Quantum Computing', 'Enterprise', 'Innovation', 'Technology Trends']
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of Quantum Threats',
      excerpt: 'Understanding the security challenges posed by quantum computing and implementing quantum-resistant solutions.',
      category: 'cybersecurity',
      author: 'Marcus Rodriguez',
      authorRole: 'Head of Cybersecurity',
      publishDate: '2025-01-10',
      readTime: '10 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Cybersecurity', 'Quantum Threats', 'Encryption', 'Security']
    },
    {
      id: 4,
      title: 'Edge Computing: The Next Frontier of Digital Transformation',
      excerpt: 'How edge computing is revolutionizing data processing and enabling real-time applications across industries.',
      category: 'edge',
      author: 'Alex Thompson',
      authorRole: 'VP of Engineering',
      publishDate: '2025-01-08',
      readTime: '7 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Edge Computing', 'Digital Transformation', 'IoT', 'Real-time Processing']
    },
    {
      id: 5,
      title: 'Space Technology Innovation: From Satellites to Interplanetary Missions',
      excerpt: 'Exploring the latest advancements in space technology and their applications for Earth-based industries.',
      category: 'space',
      author: 'Dr. James Kim',
      authorRole: 'Head of AI Research',
      publishDate: '2025-01-05',
      readTime: '9 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Space Technology', 'Satellites', 'Innovation', 'Space Exploration']
    },
    {
      id: 6,
      title: 'The Rise of Neural Interfaces: Bridging Human and Machine',
      excerpt: 'How neural interface technology is advancing and its potential applications in healthcare, gaming, and productivity.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      authorRole: 'CTO',
      publishDate: '2025-01-03',
      readTime: '11 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Neural Interfaces', 'BCI', 'Healthcare', 'Technology Innovation']
    },
    {
      id: 7,
      title: 'AI Ethics and Responsible Innovation: A Framework for the Future',
      excerpt: 'Building ethical AI systems and ensuring responsible innovation in the age of artificial intelligence.',
      category: 'insights',
      author: 'Kleber Oliveira',
      authorRole: 'Founder & CEO',
      publishDate: '2024-12-30',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['AI Ethics', 'Responsible Innovation', 'Technology Policy', 'Future of AI']
    },
    {
      id: 8,
      title: 'Micro SaaS Revolution: Building Scalable Business Solutions',
      excerpt: 'How micro SaaS platforms are transforming business operations and creating new opportunities for entrepreneurs.',
      category: 'insights',
      author: 'Alex Thompson',
      authorRole: 'VP of Engineering',
      publishDate: '2024-12-28',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Micro SaaS', 'Business Solutions', 'Entrepreneurship', 'Digital Business']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Blog - Zion Tech Group | Latest Insights on AI, Quantum Computing & Technology</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and technology innovation from Zion Tech Group experts." />
        <meta name="keywords" content="Zion Tech Group blog, AI insights, quantum computing articles, cybersecurity trends, technology innovation, industry insights" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI, quantum computing, and technology innovation." />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, 
              and the latest technology trends that are shaping our future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Articles</h2>
              <p className="text-white/70">Must-read insights from our technology experts</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  {/* Featured Badge */}
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-cyan-400 font-medium mb-3">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.publishDate)}</span>
                        </span>
                      </div>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters and Search */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">All Articles</h2>
            <p className="text-white/70">Explore our complete collection of insights and analysis</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  {/* Post Image */}
                  <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-cyan-400 font-medium mb-3">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-3">{post.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.publishDate)}</span>
                        </span>
                      </div>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                <Search className="w-8 h-8 text-white/50" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-white/70">Try adjusting your search criteria or category selection.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl border border-blue-500/30 p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, quantum computing, and technology trends 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
