import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Eye,
  BookOpen,
  TrendingUp,
  Brain,
  Atom,
  Rocket,
  Shield
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: <BookOpen className="w-5 h-5" />, count: 25 },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 8 },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" />, count: 6 },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" />, count: 4 },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 4 },
    { id: 'trends', name: 'Industry Trends', icon: <TrendingUp className="w-5 h-5" />, count: 3 }
  ];

  const blogPosts = [
    {
      id: 'ai-automation-trends-2025',
      title: 'AI Automation Trends That Will Dominate 2025',
      excerpt: 'Discover the top AI automation trends that will reshape industries and transform business operations in 2025 and beyond.',
      category: 'ai',
      author: 'Zion Tech Team',
      date: '2025-01-15',
      readTime: '8 min read',
      views: '2.4k',
      tags: ['AI', 'Automation', 'Trends', '2025'],
      featured: true
    },
    {
      id: 'quantum-computing-breakthroughs',
      title: 'Breakthrough Quantum Computing Applications in 2025',
      excerpt: 'Explore the latest quantum computing breakthroughs and their real-world applications across industries.',
      category: 'quantum',
      author: 'Dr. Quantum Researcher',
      date: '2025-01-12',
      readTime: '12 min read',
      views: '1.8k',
      tags: ['Quantum Computing', 'Breakthroughs', 'Applications'],
      featured: true
    },
    {
      id: 'space-resource-mining-future',
      title: 'The Future of Space Resource Mining: 2025 and Beyond',
      excerpt: 'How space resource mining will revolutionize resource acquisition and create new economic opportunities.',
      category: 'space',
      author: 'Space Tech Expert',
      date: '2025-01-10',
      readTime: '10 min read',
      views: '1.6k',
      tags: ['Space Technology', 'Resource Mining', 'Future'],
      featured: false
    },
    {
      id: 'ai-ethics-automation',
      title: 'AI Ethics in Automation: Balancing Innovation and Responsibility',
      excerpt: 'Critical insights into maintaining ethical standards while advancing AI automation technologies.',
      category: 'ai',
      author: 'AI Ethics Specialist',
      date: '2025-01-08',
      readTime: '9 min read',
      views: '1.9k',
      tags: ['AI Ethics', 'Automation', 'Responsibility'],
      featured: false
    },
    {
      id: 'quantum-cybersecurity-threats',
      title: 'Quantum Cybersecurity: Preparing for Future Threats',
      excerpt: 'Understanding quantum threats and implementing quantum-safe security measures for your organization.',
      category: 'security',
      author: 'Cybersecurity Expert',
      date: '2025-01-05',
      readTime: '11 min read',
      views: '1.7k',
      tags: ['Quantum Security', 'Cybersecurity', 'Threats'],
      featured: false
    },
    {
      id: 'future-of-work-ai',
      title: 'The Future of Work: How AI Will Transform Employment',
      excerpt: 'Comprehensive analysis of how AI will reshape the workforce and create new opportunities.',
      category: 'trends',
      author: 'Future of Work Analyst',
      date: '2025-01-03',
      readTime: '7 min read',
      views: '2.1k',
      tags: ['Future of Work', 'AI', 'Employment', 'Transformation'],
      featured: false
    },
    {
      id: 'cloud-native-automation',
      title: 'Cloud-Native Automation: Best Practices for 2025',
      excerpt: 'Essential strategies and best practices for implementing cloud-native automation solutions.',
      category: 'trends',
      author: 'Cloud Architecture Expert',
      date: '2024-12-30',
      readTime: '8 min read',
      views: '1.5k',
      tags: ['Cloud Native', 'Automation', 'Best Practices'],
      featured: false
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization Strategies for AI Systems',
      excerpt: 'Advanced techniques for optimizing AI system performance and efficiency.',
      category: 'ai',
      author: 'Performance Engineer',
      date: '2024-12-28',
      readTime: '10 min read',
      views: '1.3k',
      tags: ['Performance', 'AI Systems', 'Optimization'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Trends</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, space technology, and emerging tech trends from Zion Tech Group's expert team." />
        <meta name="keywords" content="blog Zion Tech Group, AI insights, quantum computing blog, space technology news, tech trends" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Stay updated with the latest insights on AI, quantum computing, space technology, and emerging tech trends." />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Zion Tech Group" />
        <meta name="twitter:description" content="Stay updated with the latest insights on AI, quantum computing, space technology, and emerging tech trends." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technology Insights
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay ahead of the curve with expert insights on AI, quantum computing, space technology, and the latest trends shaping the future of technology.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or insights..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-white/5 border-white/20 text-gray-300 hover:border-cyan-500/30 hover:text-cyan-400'
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

        {/* Featured Posts Section */}
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
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  Featured Articles
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Our most popular and insightful articles on cutting-edge technology trends and innovations.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                            Featured
                          </span>
                          <span className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
                            {post.category.toUpperCase()}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.views}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                All Articles
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore our complete collection of technology insights, research, and industry analysis.
              </p>
            </motion.div>

            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden h-full">
                      <div className="p-6 h-full flex flex-col">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
                            {post.category.toUpperCase()}
                          </span>
                          {post.featured && (
                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                          >
                            <span>Read</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
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
                <p className="text-gray-400 text-lg">
                  No articles match your current search criteria. Try adjusting your search or category selection.
                </p>
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest technology insights, research updates, and industry trends delivered directly to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-sm text-gray-400 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}