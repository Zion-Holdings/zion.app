import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Clock, 
  Eye, 
  ArrowRight,
  Tag,
  BookOpen,
  Brain,
  Atom,
  Shield,
  Rocket,
  TrendingUp,
  Lightbulb,
  Code,
  Database,
  Network,
  Server,
  Monitor,
  Smartphone,
  Camera,
  Gamepad2,
  Palette,
  Music,
  Film,
  BookOpenCheck,
  Building,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 25, icon: <BookOpen className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & Machine Learning', count: 8, icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', count: 6, icon: <Atom className="w-5 h-5" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 5, icon: <Shield className="w-5 h-5" /> },
    { id: 'emerging-tech', name: 'Emerging Tech', count: 4, icon: <Rocket className="w-5 h-5" /> },
    { id: 'industry', name: 'Industry Insights', count: 2, icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Exploring the next frontier in artificial intelligence where machines develop genuine consciousness and emotional intelligence.',
      content: 'In this comprehensive exploration, we delve into the cutting-edge research on AI consciousness evolution...',
      author: 'Dr. Sarah Chen',
      authorRole: 'CTO & Chief AI Officer',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      views: '2.4K',
      category: 'ai',
      tags: ['AI Consciousness', 'Machine Learning', 'Neural Networks', 'Future Tech'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: Solving Previously Impossible Problems',
      excerpt: 'Discover how quantum computing is revolutionizing industries and solving complex problems that classical computers cannot handle.',
      content: 'Quantum computing represents a paradigm shift in computational power...',
      author: 'Dr. James Kim',
      authorRole: 'Head of Quantum Research',
      publishDate: '2025-01-12',
      readTime: '12 min read',
      views: '1.8K',
      category: 'quantum',
      tags: ['Quantum Computing', 'Quantum Algorithms', 'Computational Power', 'Innovation'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Zero Trust Security: The New Paradigm for Enterprise Protection',
      excerpt: 'Learn about the revolutionary zero trust security model that\'s transforming how organizations protect their digital assets.',
      content: 'Traditional security models rely on perimeter defense, but zero trust assumes breach...',
      author: 'Marcus Rodriguez',
      authorRole: 'VP of Engineering',
      publishDate: '2025-01-10',
      readTime: '6 min read',
      views: '1.2K',
      category: 'cybersecurity',
      tags: ['Zero Trust', 'Cybersecurity', 'Enterprise Security', 'Digital Protection'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Space Technology Revolution: Mining Resources Beyond Earth',
      excerpt: 'Exploring the future of space resource mining and how it will transform our economy and technological capabilities.',
      content: 'As we look beyond Earth for resources, space technology is advancing rapidly...',
      author: 'Kleber Oliveira',
      authorRole: 'CEO & Founder',
      publishDate: '2025-01-08',
      readTime: '10 min read',
      views: '956',
      category: 'emerging-tech',
      tags: ['Space Technology', 'Resource Mining', 'Innovation', 'Future Economy'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'AI-Powered DevOps: Automating the Future of Software Development',
      excerpt: 'How artificial intelligence is revolutionizing DevOps practices and accelerating software delivery.',
      content: 'The integration of AI into DevOps workflows is creating unprecedented efficiency...',
      author: 'Dr. Sarah Chen',
      authorRole: 'CTO & Chief AI Officer',
      publishDate: '2025-01-05',
      readTime: '7 min read',
      views: '1.1K',
      category: 'ai',
      tags: ['AI DevOps', 'Software Development', 'Automation', 'CI/CD'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'Quantum Internet: The Secure Communication Network of Tomorrow',
      excerpt: 'Building the quantum internet infrastructure that will provide unhackable communication networks.',
      content: 'Quantum internet represents the next generation of secure communication...',
      author: 'Dr. James Kim',
      authorRole: 'Head of Quantum Research',
      publishDate: '2025-01-03',
      readTime: '9 min read',
      views: '892',
      category: 'quantum',
      tags: ['Quantum Internet', 'Secure Communication', 'Quantum Networks', 'Infrastructure'],
      featured: false,
      image: '/api/placeholder/600/400'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Insights & Innovation
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Discover the latest insights, breakthroughs, and thought leadership in AI, quantum computing, 
              and emerging technologies from our team of experts and researchers.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
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
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our most popular and insightful articles on cutting-edge technology and innovation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-white/60">
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
                      <div className="flex items-center space-x-2 text-sm text-white/60">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
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
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay updated with our latest insights, research findings, and industry analysis.
            </p>
          </motion.div>

          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-semibold rounded-full">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/70 mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-white/60">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-white/60">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-12"
            >
              <p className="text-white/70 text-lg">No articles found matching your criteria.</p>
              <p className="text-white/50 text-sm mt-2">Try adjusting your search or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Get the latest insights, research updates, and industry analysis delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-white/50 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}