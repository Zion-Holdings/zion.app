import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ExternalLink, 
  Search, 
  Filter,
  ArrowRight,
  Clock,
  TrendingUp,
  Award,
  Globe,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Zap
} from 'lucide-react';

const NewsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 45 },
    { id: 'ai', name: 'AI & Technology', icon: Brain, count: 18 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 12 },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: 8 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 7 }
  ];

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2025', name: '2025' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Consciousness Platform",
      excerpt: "Breakthrough technology enables AI systems to develop genuine emotional intelligence and self-awareness, marking a new era in artificial intelligence.",
      category: 'ai',
      date: '2025-01-15',
      author: 'Dr. Sarah Chen',
      readTime: '5 min read',
      featured: true,
      image: '/images/news/ai-consciousness-launch.jpg',
      tags: ['AI', 'Consciousness', 'Breakthrough', 'Technology'],
      url: '/press/ai-consciousness-platform-launch'
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Zion Achieves 1000+ Qubit Processing",
      excerpt: "Our quantum computing division has successfully demonstrated stable processing with over 1000 qubits, setting new industry standards.",
      category: 'quantum',
      date: '2025-01-10',
      author: 'Dr. Elena Petrov',
      readTime: '4 min read',
      featured: true,
      image: '/images/news/quantum-breakthrough.jpg',
      tags: ['Quantum Computing', 'Qubits', 'Breakthrough', 'Research'],
      url: '/press/quantum-computing-breakthrough'
    },
    {
      id: 3,
      title: "Space Resource Intelligence Platform Deployed for Mars Mission",
      excerpt: "Zion's advanced space technology platform is now operational, providing real-time resource analysis for upcoming Mars exploration missions.",
      category: 'space',
      date: '2025-01-08',
      author: 'Marcus Rodriguez',
      readTime: '6 min read',
      featured: false,
      image: '/images/news/space-resource-platform.jpg',
      tags: ['Space Technology', 'Mars', 'Resource Intelligence', 'Deployment'],
      url: '/press/space-resource-platform-mars'
    },
    {
      id: 4,
      title: "New Quantum Cybersecurity Framework Protects Against Future Threats",
      excerpt: "Advanced quantum-resistant security protocols ensure data protection even against quantum computing attacks.",
      category: 'security',
      date: '2025-01-05',
      author: 'Dr. Maya Patel',
      readTime: '7 min read',
      featured: false,
      image: '/images/news/quantum-cybersecurity.jpg',
      tags: ['Cybersecurity', 'Quantum Security', 'Data Protection', 'Innovation'],
      url: '/press/quantum-cybersecurity-framework'
    },
    {
      id: 5,
      title: "Zion Tech Group Named Top 10 Most Innovative Companies 2025",
      excerpt: "Recognition for groundbreaking work in AI consciousness, quantum computing, and space technology innovation.",
      category: 'ai',
      date: '2025-01-03',
      author: 'Press Team',
      readTime: '3 min read',
      featured: false,
      image: '/images/news/innovation-award.jpg',
      tags: ['Award', 'Innovation', 'Recognition', 'Technology'],
      url: '/press/innovation-award-2025'
    },
    {
      id: 6,
      title: "Edge Computing Orchestration Platform Achieves 99.99% Uptime",
      excerpt: "Our distributed computing solution demonstrates exceptional reliability and performance in enterprise environments.",
      category: 'ai',
      date: '2024-12-28',
      author: 'James Thompson',
      readTime: '5 min read',
      featured: false,
      image: '/images/news/edge-computing-uptime.jpg',
      tags: ['Edge Computing', 'Uptime', 'Enterprise', 'Performance'],
      url: '/press/edge-computing-uptime-achievement'
    },
    {
      id: 7,
      title: "AI Autonomous Research Platform Discovers New Materials",
      excerpt: "Machine learning algorithms identify promising compounds for quantum computing and energy storage applications.",
      category: 'ai',
      date: '2024-12-25',
      author: 'Dr. Sarah Chen',
      readTime: '6 min read',
      featured: false,
      image: '/images/news/ai-research-discovery.jpg',
      tags: ['AI Research', 'Materials Discovery', 'Quantum Computing', 'Innovation'],
      url: '/press/ai-materials-discovery'
    },
    {
      id: 8,
      title: "Global Expansion: Zion Opens New Research Centers in Asia and Europe",
      excerpt: "Strategic expansion brings cutting-edge technology closer to global markets and talent pools.",
      category: 'ai',
      date: '2024-12-20',
      author: 'Press Team',
      readTime: '4 min read',
      featured: false,
      image: '/images/news/global-expansion.jpg',
      tags: ['Expansion', 'Global', 'Research Centers', 'Strategy'],
      url: '/press/global-expansion-asia-europe'
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || article.date.startsWith(selectedYear);
    return matchesSearch && matchesCategory && matchesYear;
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'quantum': return Atom;
      case 'space': return Rocket;
      case 'security': return Shield;
      default: return Newspaper;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai': return 'from-purple-500 to-pink-500';
      case 'quantum': return 'from-blue-500 to-cyan-500';
      case 'space': return 'from-indigo-500 to-purple-500';
      case 'security': return 'from-red-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Latest News & Updates
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Stay informed about the latest breakthroughs, innovations, and developments 
                from Zion Tech Group's cutting-edge technology research.
              </p>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg"
                >
                  <Newspaper className="w-6 h-6" />
                  Stay Updated
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news, articles, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Year Filter */}
              <div className="flex gap-2">
                {years.map((year) => (
                  <button
                    key={year.id}
                    onClick={() => setSelectedYear(year.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedYear === year.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {year.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="py-12 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Featured Stories
                </h2>
                <p className="text-xl text-gray-400">
                  Top headlines and breakthrough announcements
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredNews.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group"
                  >
                    <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${getCategoryColor(article.category)} rounded-full flex items-center justify-center`}>
                        {React.createElement(getCategoryIcon(article.category), { className: "w-10 h-10 text-white" })}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                          {categories.find(c => c.id === article.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="text-sm text-gray-400">
                          {formatDate(article.date)}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs border border-cyan-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <a
                          href={article.url}
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:gap-3"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular News */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Updates
              </h2>
              <p className="text-xl text-gray-400">
                Recent news, announcements, and developments
              </p>
            </motion.div>

            <div className="space-y-6">
              {regularNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/4">
                      <div className={`w-full h-32 bg-gradient-to-br ${getCategoryColor(article.category)} rounded-lg flex items-center justify-center`}>
                        {React.createElement(getCategoryIcon(article.category), { className: "w-12 h-12 text-white" })}
                      </div>
                    </div>
                    
                    <div className="lg:flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                          {categories.find(c => c.id === article.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(article.date)}
                          </span>
                        </div>
                        
                        <a
                          href={article.url}
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:gap-3"
                        >
                          Read More
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

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-400/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Connected
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Never miss an update. Subscribe to our newsletter and follow us on social media 
                for the latest news and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/press"
                  className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  View Press Releases
                  <Newspaper className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NewsPage;