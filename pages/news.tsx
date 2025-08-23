import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search,
  Filter,
  Clock,
  TrendingUp,
  Star,
  Globe,
  Brain,
  Atom,
  Rocket,
  Shield
} from 'lucide-react';

const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const newsCategories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 6 },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: 5 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 3 },
    { id: 'company', name: 'Company Updates', icon: Globe, count: 2 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Our latest AI platform achieves unprecedented levels of machine consciousness, opening new possibilities for human-AI collaboration.',
      content: 'Zion Tech Group is proud to announce the launch of our revolutionary AI Consciousness Platform, marking a significant milestone in artificial intelligence development. This breakthrough platform demonstrates unprecedented levels of machine consciousness, enabling more natural and intuitive human-AI interactions.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '5 min read',
      featured: true,
      tags: ['AI', 'Machine Learning', 'Consciousness', 'Innovation'],
      image: '/images/news/ai-consciousness-platform.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: 1000x Speedup Achieved',
      excerpt: 'Our quantum neural network platform demonstrates unprecedented computational speed for complex scientific problems.',
      content: 'Zion Tech Group has achieved a major breakthrough in quantum computing, with our quantum neural network platform demonstrating a 1000x speedup for specific algorithms. This breakthrough has significant implications for scientific research, particularly in protein folding prediction and materials science.',
      category: 'quantum',
      author: 'Dr. Elena Petrova',
      date: '2025-01-12',
      readTime: '4 min read',
      featured: true,
      tags: ['Quantum Computing', 'Neural Networks', 'Scientific Research', 'Breakthrough'],
      image: '/images/news/quantum-breakthrough.jpg'
    },
    {
      id: 3,
      title: 'Space Resource Intelligence Platform Successfully Deployed',
      excerpt: 'Our AI-powered space resource intelligence platform is now operational, providing real-time analysis of valuable space resources.',
      content: 'Zion Tech Group has successfully deployed our Space Resource Intelligence Platform, marking a significant advancement in space technology. The platform combines satellite imagery, AI analysis, and predictive modeling to identify and analyze valuable resources in space with 85% accuracy.',
      category: 'space',
      author: 'Marcus Rodriguez',
      date: '2025-01-10',
      readTime: '6 min read',
      featured: false,
      tags: ['Space Technology', 'AI', 'Satellite Technology', 'Resource Intelligence'],
      image: '/images/news/space-resources.jpg'
    },
    {
      id: 4,
      title: 'Zero-Trust Security Architecture Implementation Success',
      excerpt: 'Enterprise client achieves 99.9% reduction in security incidents with our zero-trust security framework.',
      content: 'A Fortune 500 technology company has successfully implemented our zero-trust security architecture, achieving a 99.9% reduction in security incidents. The implementation demonstrates the effectiveness of our comprehensive security approach in protecting enterprise assets.',
      category: 'security',
      author: 'James Thompson',
      date: '2025-01-08',
      readTime: '4 min read',
      featured: false,
      tags: ['Cybersecurity', 'Zero Trust', 'Enterprise Security', 'Success Story'],
      image: '/images/news/zero-trust-success.jpg'
    },
    {
      id: 5,
      title: 'New Partnership with IBM Quantum Announced',
      excerpt: 'Strategic partnership with IBM Quantum to advance quantum computing research and development.',
      content: 'Zion Tech Group is excited to announce a strategic partnership with IBM Quantum, combining our expertise in quantum algorithms with IBM\'s quantum hardware infrastructure. This partnership will accelerate the development of practical quantum computing applications.',
      category: 'company',
      author: 'Partnership Team',
      date: '2025-01-05',
      readTime: '3 min read',
      featured: false,
      tags: ['Partnership', 'IBM Quantum', 'Quantum Computing', 'Collaboration'],
      image: '/images/news/ibm-partnership.jpg'
    },
    {
      id: 6,
      title: 'AI-Powered Healthcare Diagnosis Platform Launch',
      excerpt: 'Revolutionary healthcare AI platform achieves 99.2% diagnostic accuracy in medical imaging analysis.',
      content: 'Our AI-powered healthcare diagnosis platform has achieved remarkable success in medical imaging analysis, demonstrating 99.2% diagnostic accuracy. This breakthrough technology is helping healthcare providers improve patient outcomes and reduce diagnostic errors.',
      category: 'ai',
      author: 'Healthcare AI Team',
      date: '2025-01-03',
      readTime: '5 min read',
      featured: false,
      tags: ['Healthcare', 'AI', 'Medical Imaging', 'Diagnosis'],
      image: '/images/news/healthcare-ai.jpg'
    },
    {
      id: 7,
      title: 'Quantum Cybersecurity Research Grant Awarded',
      excerpt: 'National Science Foundation awards $5M grant for quantum-resistant encryption research.',
      content: 'Zion Tech Group has been awarded a $5 million grant from the National Science Foundation to advance research in quantum-resistant encryption. This funding will support our efforts to develop next-generation security solutions that can withstand quantum computing attacks.',
      category: 'quantum',
      author: 'Research Team',
      date: '2024-12-30',
      readTime: '3 min read',
      featured: false,
      tags: ['Research Grant', 'Quantum Security', 'Encryption', 'NSF'],
      image: '/images/news/quantum-security-grant.jpg'
    },
    {
      id: 8,
      title: 'Space Mining Technology Patent Approved',
      excerpt: 'Innovative space mining technology receives patent approval for autonomous resource extraction systems.',
      content: 'Our innovative space mining technology has received patent approval, covering autonomous resource extraction systems for asteroid mining operations. This patent represents a significant milestone in our space technology development efforts.',
      category: 'space',
      author: 'Space Technology Team',
      date: '2024-12-28',
      readTime: '4 min read',
      featured: false,
      tags: ['Patent', 'Space Mining', 'Autonomous Systems', 'Innovation'],
      image: '/images/news/space-mining-patent.jpg'
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const searchMatch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

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
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Latest News & Updates
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay informed about the latest developments in AI, quantum computing, space technology, 
                and company updates from Zion Tech Group.
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {newsCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent'
                        : 'border-cyan-400/30 text-cyan-400 hover:border-cyan-400/60'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Featured Stories
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our most important and impactful news stories that are shaping the future of technology.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredNews.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30 mb-3 inline-block">
                              {newsCategories.find(c => c.id === article.category)?.name}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                              {article.title}
                            </h3>
                          </div>
                          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                            <Star className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">{article.excerpt}</p>

                        <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(article.date)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {article.tags.slice(0, 3).map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-400/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href={`/news/${article.id}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular News Grid */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest News
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay up to date with all the latest developments, announcements, and insights from Zion Tech Group.
              </p>
            </motion.div>

            {regularNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularNews.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
                      
                      <div className="relative z-10">
                        <div className="mb-4">
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                            {newsCategories.find(c => c.id === article.category)?.name}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                        <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(article.date)}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {article.tags.slice(0, 2).map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-400/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href={`/news/${article.id}`}
                            className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                          >
                            Read
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-400 mb-4">No news articles match your current filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter to receive the latest news, insights, and updates 
                directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
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

export default NewsPage;