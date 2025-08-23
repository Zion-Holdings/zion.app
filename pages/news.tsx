import React from 'react';
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
  TrendingUp,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Zap,
  ExternalLink,
  Clock,
  Globe
} from 'lucide-react';

const NewsPage: React.FC = () => {
  const featuredNews = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Breakthrough technology enables true AI consciousness and autonomous decision-making capabilities.',
      author: 'Press Team',
      date: '2025-01-15',
      category: 'Company News',
      readTime: '5 min read',
      image: '/news/ai-consciousness-launch.jpg',
      tags: ['AI', 'Launch', 'Breakthrough', 'Technology'],
      icon: <Brain className="w-6 h-6" />,
      featured: true
    },
    {
      title: 'Quantum Computing Partnership with Leading Research Institutions',
      excerpt: 'Strategic collaboration to advance quantum computing research and development.',
      author: 'Partnership Team',
      date: '2025-01-12',
      category: 'Partnerships',
      readTime: '4 min read',
      image: '/news/quantum-partnership.jpg',
      tags: ['Quantum Computing', 'Partnership', 'Research', 'Collaboration'],
      icon: <Atom className="w-6 h-6" />
    },
    {
      title: 'Cybersecurity Innovation Award for Zero Trust Architecture',
      excerpt: 'Recognition for groundbreaking cybersecurity solutions and zero trust implementation.',
      author: 'Security Team',
      date: '2025-01-10',
      category: 'Awards',
      readTime: '3 min read',
      image: '/news/cybersecurity-award.jpg',
      tags: ['Cybersecurity', 'Award', 'Zero Trust', 'Innovation'],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const recentNews = [
    {
      title: 'Edge Computing Solutions Deployed in Smart Cities',
      excerpt: 'Successful implementation of edge computing infrastructure in major metropolitan areas.',
      author: 'Edge Computing Team',
      date: '2025-01-08',
      category: 'Deployments',
      readTime: '6 min read',
      tags: ['Edge Computing', 'Smart Cities', 'Deployment', 'IoT'],
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Cloud Infrastructure Expansion to New Regions',
      excerpt: 'Global expansion of cloud services to meet growing international demand.',
      author: 'Cloud Team',
      date: '2025-01-05',
      category: 'Expansion',
      readTime: '4 min read',
      tags: ['Cloud Computing', 'Expansion', 'Global', 'Infrastructure'],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: 'Space Technology Research Grant Awarded',
      excerpt: 'Government grant to advance space resource intelligence and satellite technology.',
      author: 'Space Tech Team',
      date: '2025-01-03',
      category: 'Research',
      readTime: '5 min read',
      tags: ['Space Technology', 'Research', 'Grant', 'Satellites'],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'AI Ethics Committee Established',
      excerpt: 'New committee to ensure responsible AI development and ethical considerations.',
      author: 'AI Ethics Team',
      date: '2024-12-28',
      category: 'Governance',
      readTime: '7 min read',
      tags: ['AI Ethics', 'Governance', 'Responsibility', 'Development'],
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const categories = [
    { name: 'Company News', count: 8, icon: <Newspaper className="w-5 h-5" /> },
    { name: 'Partnerships', count: 5, icon: <Globe className="w-5 h-5" /> },
    { name: 'Awards', count: 3, icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Deployments', count: 6, icon: <Zap className="w-5 h-5" /> },
    { name: 'Expansion', count: 4, icon: <Cloud className="w-5 h-5" /> },
    { name: 'Research', count: 7, icon: <Atom className="w-5 h-5" /> }
  ];

  const pressReleases = [
    {
      title: 'Zion Tech Group Announces Q4 2024 Financial Results',
      date: '2025-01-20',
      summary: 'Strong growth in AI services and quantum computing solutions drives record revenue.',
      link: '/press-releases/q4-2024-financial-results'
    },
    {
      title: 'New CEO Appointment: Leadership Transition Announced',
      date: '2025-01-18',
      summary: 'Strategic leadership change to accelerate innovation and global expansion.',
      link: '/press-releases/ceo-appointment-2025'
    },
    {
      title: 'Major Patent Filing: AI Consciousness Technology',
      date: '2025-01-15',
      summary: 'Breakthrough patent for revolutionary AI consciousness and autonomous systems.',
      link: '/press-releases/ai-consciousness-patent'
    }
  ];

  return (
    <Layout 
      title="News - Zion Tech Group"
      description="Latest news, press releases, and updates from Zion Tech Group on AI consciousness, quantum computing, and revolutionary technology"
      canonicalUrl="https://ziontechgroup.com/news"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Latest
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {' '}News
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay informed with the latest news, press releases, and updates 
                from Zion Tech Group on our revolutionary technology solutions.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news..."
                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured News
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The most important updates and announcements from Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredNews.map((news, index) => (
                <motion.article
                  key={news.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 ${news.featured ? 'ring-2 ring-purple-500/50' : ''}`}
                >
                  <div className="p-6">
                    {news.featured && (
                      <div className="inline-flex items-center px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-4">
                        Featured
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-purple-400">
                        {news.icon}
                      </div>
                      <span className="text-sm text-purple-400 font-medium">
                        {news.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {news.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(news.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{news.readTime}</span>
                      <a
                        href={`/news/${news.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '')}`}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Press Releases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Official announcements and press releases from Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressReleases.map((release, index) => (
                <motion.article
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Newspaper className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-purple-400 font-medium">
                      Press Release
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {release.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {new Date(release.date).toLocaleDateString()}
                    </span>
                    <a
                      href={release.link}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      Read Release
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories and Recent News */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Categories */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">
                    News Categories
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <motion.a
                        key={category.name}
                        href={`/news/category/${category.name.toLowerCase().replace(/ /g, '-')}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-purple-400">
                            {category.icon}
                          </div>
                          <span className="text-white group-hover:text-purple-400 transition-colors duration-300">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Recent News */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Recent News
                  </h3>
                  <div className="space-y-6">
                    {recentNews.map((news, index) => (
                      <motion.article
                        key={news.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-purple-400 mt-1">
                            {news.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm text-purple-400 font-medium">
                                {news.category}
                              </span>
                              <span className="text-sm text-gray-400">•</span>
                              <span className="text-sm text-gray-400">{news.readTime}</span>
                            </div>
                            
                            <h4 className="text-lg font-semibold text-white mb-2 hover:text-purple-400 transition-colors duration-300">
                              <a href={`/news/${news.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '')}`}>
                                {news.title}
                              </a>
                            </h4>
                            
                            <p className="text-gray-300 mb-3 line-clamp-2">
                              {news.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  {news.author}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(news.date).toLocaleDateString()}
                                </span>
                              </div>
                              
                              <a
                                href={`/news/${news.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '')}`}
                                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                              >
                                Read More
                                <ArrowRight className="ml-1 w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Media Inquiries
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                For press inquiries, media requests, or interview opportunities, 
                please contact our media relations team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Media Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/media-kit"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Download Media Kit
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