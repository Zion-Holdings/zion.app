import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, Tag, Search, Filter,
  ArrowRight, BookOpen, TrendingUp, Sparkles
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'ai', name: 'AI & Machine Learning', count: 4 },
    { id: 'quantum', name: 'Quantum Computing', count: 3 },
    { id: 'space', name: 'Space Technology', count: 2 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 2 },
    { id: 'automation', name: 'Automation', count: 1 }
  ];

  const blogPosts = [
    {
      id: 'ai-automation-trends-2025',
      title: 'AI Automation Trends That Will Dominate 2025',
      excerpt: 'Discover the revolutionary AI automation trends that are reshaping industries and transforming business operations in 2025.',
      content: 'AI automation is evolving at an unprecedented pace, with new breakthroughs in consciousness evolution, autonomous decision-making, and predictive analytics...',
      author: 'Zion Tech Team',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Automation', 'Trends', '2025'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'quantum-cybersecurity-future',
      title: 'The Future of Quantum Cybersecurity: What to Expect',
      excerpt: 'Explore how quantum computing is revolutionizing cybersecurity and what this means for the future of digital security.',
      content: 'As quantum computers become more powerful, traditional encryption methods are becoming vulnerable. The future of cybersecurity lies in quantum-resistant algorithms...',
      author: 'Quantum Security Team',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'quantum',
      tags: ['Quantum Computing', 'Cybersecurity', 'Encryption', 'Future Tech'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'space-mining-automation',
      title: 'Automating Space Mining: The Next Frontier',
      excerpt: 'How autonomous systems and AI are revolutionizing space resource extraction and making interplanetary mining a reality.',
      content: 'Space mining represents the next great frontier in resource extraction. With advances in autonomous robotics and AI systems, we\'re on the verge of making this science fiction a reality...',
      author: 'Space Technology Team',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'space',
      tags: ['Space Mining', 'Automation', 'AI', 'Resources'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'consciousness-evolution-ai',
      title: 'AI Consciousness Evolution: Beyond Traditional Machine Learning',
      excerpt: 'Exploring the cutting-edge developments in AI consciousness and what it means for the future of artificial intelligence.',
      content: 'The evolution of AI consciousness represents a paradigm shift in artificial intelligence. We\'re moving beyond traditional machine learning to systems that can truly understand and reason...',
      author: 'AI Research Team',
      date: '2025-01-08',
      readTime: '15 min read',
      category: 'ai',
      tags: ['AI Consciousness', 'Machine Learning', 'Evolution', 'Research'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'autonomous-devops-revolution',
      title: 'The Autonomous DevOps Revolution: Self-Healing Infrastructure',
      excerpt: 'How autonomous DevOps systems are creating self-healing infrastructure that requires minimal human intervention.',
      content: 'The future of DevOps is autonomous. Self-healing infrastructure that can detect, diagnose, and resolve issues without human intervention is becoming a reality...',
      author: 'DevOps Team',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'automation',
      tags: ['DevOps', 'Automation', 'Infrastructure', 'Self-Healing'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'quantum-cloud-infrastructure',
      title: 'Building Quantum Cloud Infrastructure for the Future',
      excerpt: 'The challenges and opportunities in developing quantum cloud infrastructure that can scale with growing computational demands.',
      content: 'Quantum cloud infrastructure represents the next evolution in cloud computing. As quantum computers become more accessible, we need new architectures to support them...',
      author: 'Cloud Infrastructure Team',
      date: '2025-01-03',
      readTime: '11 min read',
      category: 'quantum',
      tags: ['Quantum Computing', 'Cloud Infrastructure', 'Scalability', 'Architecture'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'ai-ethics-automation',
      title: 'AI Ethics in Automation: Balancing Innovation with Responsibility',
      excerpt: 'Examining the ethical considerations in AI automation and how to ensure responsible development of autonomous systems.',
      content: 'As AI automation becomes more sophisticated, ethical considerations become increasingly important. We must balance innovation with responsibility...',
      author: 'AI Ethics Team',
      date: '2025-01-01',
      readTime: '13 min read',
      category: 'ai',
      tags: ['AI Ethics', 'Automation', 'Responsibility', 'Innovation'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'space-resource-intelligence',
      title: 'Space Resource Intelligence: AI-Powered Exploration',
      excerpt: 'How artificial intelligence is revolutionizing space exploration and resource discovery beyond Earth.',
      content: 'Space exploration is entering a new era with AI-powered resource intelligence. Autonomous systems can now analyze vast amounts of data to identify valuable resources...',
      author: 'Space Intelligence Team',
      date: '2024-12-30',
      readTime: '14 min read',
      category: 'space',
      tags: ['Space Exploration', 'AI', 'Resources', 'Intelligence'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'quantum-neural-networks',
      title: 'Quantum Neural Networks: The Future of AI Processing',
      excerpt: 'Exploring the intersection of quantum computing and neural networks for unprecedented AI capabilities.',
      content: 'Quantum neural networks represent the convergence of two revolutionary technologies. By combining quantum computing with neural network architectures...',
      author: 'Quantum AI Team',
      date: '2024-12-28',
      readTime: '16 min read',
      category: 'quantum',
      tags: ['Quantum Computing', 'Neural Networks', 'AI', 'Processing'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'cybersecurity-automation-2025',
      title: 'Cybersecurity Automation Trends for 2025',
      excerpt: 'The latest trends in cybersecurity automation and how they\'re reshaping threat detection and response.',
      content: 'Cybersecurity automation is evolving rapidly, with new tools and techniques that can detect and respond to threats faster than ever before...',
      author: 'Cybersecurity Team',
      date: '2024-12-25',
      readTime: '10 min read',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'Automation', 'Threat Detection', '2025'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'autonomous-business-intelligence',
      title: 'Autonomous Business Intelligence: The Future of Data Analytics',
      excerpt: 'How autonomous AI systems are transforming business intelligence and decision-making processes.',
      content: 'Business intelligence is becoming autonomous, with AI systems that can analyze data, identify patterns, and make recommendations without human intervention...',
      author: 'Business Intelligence Team',
      date: '2024-12-22',
      readTime: '12 min read',
      category: 'ai',
      tags: ['Business Intelligence', 'AI', 'Analytics', 'Automation'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'zero-trust-security-future',
      title: 'Zero Trust Security: The Future of Enterprise Protection',
      excerpt: 'Understanding zero trust security principles and how they\'re becoming essential for modern enterprise security.',
      content: 'Zero trust security represents a fundamental shift in how we approach enterprise security. Instead of trusting users and devices by default...',
      author: 'Security Architecture Team',
      date: '2024-12-20',
      readTime: '11 min read',
      category: 'cybersecurity',
      tags: ['Zero Trust', 'Security', 'Enterprise', 'Protection'],
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Updates</title>
        <meta name="description" content="Stay updated with the latest insights in AI, quantum computing, space technology, and cybersecurity from Zion Tech Group's expert team." />
        <meta name="keywords" content="Zion Tech Group blog, AI insights, quantum computing, space technology, cybersecurity, technology trends" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights and updates in revolutionary technology from Zion Tech Group." />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Technology Insights
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay ahead of the curve with expert insights on AI, quantum computing, space technology, and cybersecurity from our team of technology innovators.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors duration-300"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Featured Articles
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Our most popular and insightful articles on revolutionary technology trends
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    variants={fadeInUp}
                    className="group"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
                        <div className="aspect-video bg-gradient-to-br from-cyan-900/20 to-purple-900/20 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-cyan-400" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.author}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-gray-400 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-md border border-cyan-500/30"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive collection of technology insights and industry updates
              </p>
            </motion.div>

            {regularPosts.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    variants={fadeInUp}
                    className="group"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                        <div className="aspect-video bg-gradient-to-br from-cyan-900/20 to-purple-900/20 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-cyan-400" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-md border border-cyan-500/30"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated with Technology Trends
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest insights in AI, quantum computing, and revolutionary technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Subscribe to Newsletter
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-gray-600 text-gray-300 rounded-2xl font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;