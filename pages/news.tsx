import React from 'react';
import { Layout } from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
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
=======
  Newspaper, Calendar, User, Tag, ArrowRight, 
  Star, Zap, Brain, Atom, Rocket, Globe
} from 'lucide-react';
import Link from 'next/link';

const News: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.',
      author: 'Press Team',
      date: '2025-01-15',
      category: 'Product Launch',
      readTime: '5 min read',
      image: '/news/ai-consciousness-launch.jpg',
      tags: ['AI', 'Consciousness', 'Product Launch', 'Innovation'],
      icon: <Brain className="w-6 h-6" />,
      featured: true
    },
    {
      title: 'Quantum Computing Breakthrough: Solving Complex Optimization Problems',
      excerpt: 'Our quantum team achieves significant milestone in solving previously impossible computational challenges.',
      author: 'Research Team',
      date: '2025-01-12',
      category: 'Research',
      readTime: '6 min read',
      image: '/news/quantum-breakthrough.jpg',
      tags: ['Quantum Computing', 'Research', 'Breakthrough'],
      icon: <Atom className="w-6 h-6" />,
      featured: true
    },
    {
      title: 'Cybersecurity Partnership with Global Tech Leaders',
      excerpt: 'Strategic collaboration to advance AI-powered threat detection and response systems.',
      author: 'Partnerships Team',
      date: '2025-01-10',
      category: 'Partnerships',
      readTime: '4 min read',
      image: '/news/cybersecurity-partnership.jpg',
      tags: ['Cybersecurity', 'Partnerships', 'AI Security'],
      icon: <Shield className="w-6 h-6" />,
      featured: true
    }
  ];

  const pressReleases = [
    {
      title: 'Zion Tech Group Announces Series A Funding Round',
      excerpt: 'Company secures $25M in funding to accelerate AI consciousness research and development.',
      date: '2025-01-08',
      category: 'Funding',
      readTime: '3 min read'
    },
    {
      title: 'New Research Center Opening in Silicon Valley',
      excerpt: 'Expansion to accelerate innovation in AI and quantum computing technologies.',
      date: '2025-01-05',
      category: 'Expansion',
      readTime: '4 min read'
    },
    {
      title: 'Partnership with Leading Universities Announced',
      excerpt: 'Collaborative research initiatives with MIT, Stanford, and Oxford.',
      date: '2025-01-03',
      category: 'Partnerships',
      readTime: '3 min read'
    }
  ];

  const newsCategories = [
    { name: 'Product Updates', icon: <Rocket className="w-5 h-5" />, count: 8 },
    { name: 'Research & Development', icon: <Brain className="w-5 h-5" />, count: 15 },
    { name: 'Partnerships', icon: <Globe className="w-5 h-5" />, count: 12 },
    { name: 'Company News', icon: <Newspaper className="w-5 h-5" />, count: 20 },
    { name: 'Industry Insights', icon: <TrendingUp className="w-5 h-5" />, count: 18 },
    { name: 'Awards & Recognition', icon: <Award className="w-5 h-5" />, count: 6 }
  ];

  const recentNews = [
    {
      title: 'Edge Computing Platform Achieves Industry Recognition',
      excerpt: 'Our edge computing orchestration platform receives top honors at Tech Innovation Awards.',
      author: 'Product Team',
      date: '2025-01-14',
      category: 'Awards',
      readTime: '4 min read'
    },
    {
      title: 'AI Ethics Framework Implementation Success',
      excerpt: 'Successful deployment of ethical AI guidelines across all client implementations.',
      author: 'AI Ethics Team',
      date: '2025-01-13',
      category: 'Implementation',
      readTime: '5 min read'
    },
    {
      title: 'Quantum Security Solutions for Financial Sector',
      excerpt: 'Launch of quantum-resistant cryptography solutions for banking and finance.',
      author: 'Quantum Team',
      date: '2025-01-11',
      category: 'Product Launch',
      readTime: '6 min read'
    },
    {
      title: 'Space Technology Division Expansion',
      excerpt: 'New team members join our space exploration and resource intelligence initiatives.',
      author: 'Space Team',
      date: '2025-01-09',
      category: 'Team',
      readTime: '3 min read'
    }
  ];

  return (
    <Layout 
      title="News - Zion Tech Group"
      description="Latest news, press releases, and company updates from Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/news"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
=======
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
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Our breakthrough AI consciousness platform is now available, marking a new era in artificial intelligence with emotional intelligence and ethical reasoning capabilities.',
      category: 'AI Innovation',
      date: '2025-01-15',
      author: 'Dr. Kleber',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['AI Consciousness', 'Breakthrough', 'Innovation']
    },
    {
      id: 2,
      title: 'Quantum Computing Integration Achieves Major Milestone',
      excerpt: 'Successfully integrated quantum computing capabilities into our AI platforms, opening unprecedented possibilities for problem-solving and data analysis.',
      category: 'Quantum Computing',
      date: '2025-01-10',
      author: 'Quantum Team',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Quantum Computing', 'AI Integration', 'Technology']
    },
    {
      id: 3,
      title: 'Global Expansion: Zion Tech Group Opens New Offices',
      excerpt: 'Expanding our global presence with new offices in key technology hubs, bringing our revolutionary solutions closer to clients worldwide.',
      category: 'Company News',
      date: '2025-01-05',
      author: 'Operations Team',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Global Expansion', 'Growth', 'Operations']
    },
    {
      id: 4,
      title: 'Partnership with Leading Research Institutions Announced',
      excerpt: 'Strategic partnerships with top-tier research institutions to advance AI consciousness research and quantum computing applications.',
      category: 'Partnerships',
      date: '2024-12-28',
      author: 'Partnership Team',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Partnerships', 'Research', 'Collaboration']
    },
    {
      id: 5,
      title: 'New AI Ethics Framework Released',
      excerpt: 'Introducing our comprehensive AI ethics framework, ensuring responsible development and deployment of conscious AI systems.',
      category: 'AI Ethics',
      date: '2024-12-20',
      author: 'Ethics Committee',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['AI Ethics', 'Responsible AI', 'Framework']
    },
    {
      id: 6,
      title: 'Space Technology Division Achieves Breakthrough',
      excerpt: 'Our space technology division has achieved a major breakthrough in autonomous space systems and resource intelligence platforms.',
      category: 'Space Technology',
      date: '2024-12-15',
      author: 'Space Team',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Space Technology', 'Autonomous Systems', 'Innovation']
    }
  ];

  const categories = [
    { name: 'All News', count: newsArticles.length, active: true },
    { name: 'AI Innovation', count: 2, active: false },
    { name: 'Quantum Computing', count: 1, active: false },
    { name: 'Company News', count: 1, active: false },
    { name: 'Partnerships', count: 1, active: false },
    { name: 'AI Ethics', count: 1, active: false },
    { name: 'Space Technology', count: 1, active: false }
  ];

  const featuredArticle = newsArticles.find(article => article.featured);

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
    <Layout
      title="Latest News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, breakthroughs, and announcements from Zion Tech Group. Discover our latest innovations in AI consciousness and quantum computing."
      keywords="Zion Tech Group news, AI consciousness updates, quantum computing news, technology breakthroughs, company announcements"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Newspaper className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Latest News & Updates
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Stay informed about our latest breakthroughs and innovations
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Discover the latest developments in AI consciousness, quantum computing, 
                and revolutionary technology solutions from Zion Tech Group.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news..."
                    className="w-full px-12 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
=======
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
=======
        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Featured Story
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl border border-purple-500/20 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {featuredArticle.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {new Date(featuredArticle.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">{featuredArticle.author}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredArticle.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-800/50 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/news/${featuredArticle.id}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                  <div className="relative h-64 lg:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                      <Newspaper className="w-24 h-24 text-purple-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-12 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* News Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Updates
              </h2>
              <p className="text-xl text-gray-400">
                Recent news, announcements, and developments
              </p>
            </motion.div>

            <div className="space-y-6">
              {regularNews.map((article, index) => (
=======
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Latest News
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our latest developments and breakthroughs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-purple-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-gray-800/50 text-purple-400 text-xs font-semibold px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{article.author}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-800/30 text-gray-400 text-xs px-2 py-1 rounded-full border border-gray-700/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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
=======
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter for the latest news, insights, and breakthroughs in AI consciousness and quantum computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Have questions about our latest developments? Want to learn more about our revolutionary technology solutions?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NewsPage;
=======
export default News;
