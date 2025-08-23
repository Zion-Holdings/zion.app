import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Brain, Atom, Shield, Rocket, 
  Star, TrendingUp, CheckCircle, Phone, Mail, MapPin,
  ArrowRight, Zap, Cpu, Database, Cloud, Palette,
  Newspaper, Calendar, User, Tag, Search, Filter,
  ExternalLink, BookOpen, Video, Podcast, FileText, Building
} from 'lucide-react';
import Link from 'next/link';

const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', icon: <Newspaper className="w-5 h-5" /> },
    { id: 'company', name: 'Company Updates', icon: <Building className="w-5 h-5" /> },
    { id: 'technology', name: 'Technology', icon: <Cpu className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & ML', icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" /> },
    { id: 'industry', name: 'Industry Insights', icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Our latest breakthrough in artificial consciousness technology promises to revolutionize how AI systems understand and interact with human emotions and intentions.',
      category: 'company',
      author: 'Kleber Santos',
      date: '2025-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Consciousness', 'Breakthrough', 'Innovation'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Achieving 1000+ Qubit Operations',
      excerpt: 'Our quantum research team has achieved a major milestone in quantum computing, enabling complex operations across 1000+ qubits with unprecedented stability.',
      category: 'quantum',
      author: 'Dr. Marcus Rodriguez',
      date: '2025-01-12',
      readTime: '7 min read',
      image: '/api/placeholder/600/400',
      tags: ['Quantum Computing', 'Research', 'Breakthrough', 'Qubits']
    },
    {
      id: 3,
      title: 'Space Resource Intelligence: New Satellite Constellation Launched',
      excerpt: 'Zion Tech Group successfully deploys advanced satellite constellation for space resource intelligence and autonomous space exploration.',
      category: 'space',
      author: 'Dr. Elena Petrova',
      date: '2025-01-10',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      tags: ['Space Technology', 'Satellites', 'Resource Intelligence', 'Exploration']
    },
    {
      id: 4,
      title: 'Partnership with MIT: Advancing AI Ethics and Governance',
      excerpt: 'Strategic collaboration with MIT to develop comprehensive frameworks for ethical AI development and responsible artificial intelligence governance.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-08',
      readTime: '4 min read',
      image: '/api/placeholder/600/400',
      tags: ['AI Ethics', 'Partnership', 'MIT', 'Governance']
    },
    {
      id: 5,
      title: 'Enterprise AI Solutions: Record Customer Adoption in Q4 2024',
      excerpt: 'Q4 2024 sees unprecedented adoption of Zion Tech Group\'s enterprise AI solutions, with 500+ new enterprise customers onboarded.',
      category: 'company',
      author: 'Marketing Team',
      date: '2025-01-05',
      readTime: '3 min read',
      image: '/api/placeholder/600/400',
      tags: ['Enterprise', 'AI Solutions', 'Growth', 'Customers']
    },
    {
      id: 6,
      title: 'The Future of Quantum-Secure Cloud Infrastructure',
      excerpt: 'Exploring how quantum-resistant cryptography and quantum computing are reshaping cloud security and infrastructure design.',
      category: 'technology',
      author: 'Engineering Team',
      date: '2025-01-03',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      tags: ['Quantum Security', 'Cloud Infrastructure', 'Cryptography', 'Security']
    },
    {
      id: 7,
      title: 'Industry Report: AI Adoption in Manufacturing 2025',
      excerpt: 'Comprehensive analysis of AI adoption trends in manufacturing, featuring Zion Tech Group\'s innovative solutions and case studies.',
      category: 'industry',
      author: 'Research Team',
      date: '2024-12-30',
      readTime: '10 min read',
      image: '/api/placeholder/600/400',
      tags: ['Manufacturing', 'AI Adoption', 'Industry Report', 'Case Studies']
    },
    {
      id: 8,
      title: 'New Research: Neural Interface Technology Breakthrough',
      excerpt: 'Groundbreaking research in brain-computer interfaces, bringing us closer to seamless human-AI interaction and enhanced cognitive capabilities.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2024-12-28',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      tags: ['Neural Interfaces', 'Brain-Computer Interface', 'Research', 'Innovation']
    },
    {
      id: 9,
      title: 'Cybersecurity in the Age of Quantum Computing',
      excerpt: 'How quantum computing is transforming cybersecurity and what organizations need to know to prepare for the quantum future.',
      category: 'technology',
      author: 'Security Team',
      date: '2024-12-25',
      readTime: '7 min read',
      image: '/api/placeholder/600/400',
      tags: ['Cybersecurity', 'Quantum Computing', 'Security', 'Future']
    },
    {
      id: 10,
      title: 'Zion Tech Group Named Top AI Company by TechCrunch',
      excerpt: 'Recognition as one of the top 10 AI companies to watch in 2025, highlighting our innovative approach to artificial intelligence.',
      category: 'company',
      author: 'PR Team',
      date: '2024-12-22',
      readTime: '2 min read',
      image: '/api/placeholder/600/400',
      tags: ['Award', 'Recognition', 'TechCrunch', 'AI Leadership']
    }
  ];

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  const filteredArticles = regularArticles.filter(article => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const searchMatch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

  return (
    <Layout seo={{
      title: 'News - Zion Tech Group | Latest Updates & Industry Insights',
      description: 'Stay updated with the latest news, breakthroughs, and insights from Zion Tech Group. AI, quantum computing, and space technology updates.',
      keywords: 'news, updates, Zion Tech Group, AI news, quantum computing news, space technology news',
      url: 'https://ziontechgroup.com/news'
    }}>
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
                Latest News & Updates
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Stay informed about our latest breakthroughs, industry insights, and the future of 
                AI, quantum computing, and space technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#featured" className="btn-primary">
                  <Newspaper className="w-5 h-5 mr-2" />
                  Read Featured Story
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Subscribe to Updates
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section id="featured" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-cyan-400 mb-2">Featured Story</h2>
                <p className="text-gray-400">Our latest breakthrough and most important news</p>
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
                        {categories.find(c => c.id === featuredArticle.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">{featuredArticle.readTime}</span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-6 text-gray-400">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredArticle.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredArticle.date)}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredArticle.tags.map((tag, index) => (
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
                      <Newspaper className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-400">Featured Article</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* News Filters and Search */}
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
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 w-64"
                />
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
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
                Latest News
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Stay updated with our latest developments and industry insights
              </p>
            </motion.div>
            
            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                          {categories.find(c => c.id === article.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(article.date)}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50">
                            +{article.tags.length - 3}
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
                <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-400 mb-4">No articles match your current filters.</p>
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
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest news, insights, and breakthroughs delivered directly to your inbox. 
                Never miss an important update from Zion Tech Group.
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
                More Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Explore additional content and resources from Zion Tech Group
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
                <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Blog</h3>
                <p className="text-gray-300 mb-6">
                  Deep dives into technology trends, industry insights, and technical tutorials.
                </p>
                <Link href="/blog" className="btn-secondary">
                  Explore Blog
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
                  Live and recorded webinars on cutting-edge technology topics and solutions.
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
                <h3 className="text-2xl font-bold text-white mb-4">Case Studies</h3>
                <p className="text-gray-300 mb-6">
                  Real-world examples of how our solutions drive business transformation.
                </p>
                <Link href="/case-studies" className="btn-secondary">
                  Read Cases
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NewsPage;