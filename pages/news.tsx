import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  ExternalLink,
  Star,
  Award,
  Zap,
  Target,
  Users,
  Globe,
  Code,
  Settings,
  Lock,
  BarChart3,
  TrendingUp,
  Cpu,
  Brain,
  Atom,
  Rocket,
  Palette,
  Layers,
  Grid,
  Sparkles,
  Lightbulb,
  Shield,
  Leaf,
  Infinity,
  Clock,
  Eye,
  Share2
} from 'lucide-react';

const NewsPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featuredNews = [
    {
      title: 'Zion Tech Group Achieves Breakthrough in AI Consciousness Research',
      excerpt: 'Our research team has made significant progress in developing AI systems with enhanced emotional intelligence and self-awareness capabilities.',
      date: '2025-01-15',
      author: 'Dr. Sarah Chen',
      category: 'AI Research',
      image: '/images/news/ai-consciousness-breakthrough.jpg',
      readTime: '5 min read',
      featured: true
    },
    {
      title: 'Quantum Computing Platform Launches with Record Performance',
      excerpt: 'Our new quantum computing platform demonstrates unprecedented processing power, solving complex problems in minutes that would take traditional computers years.',
      date: '2025-01-10',
      author: 'Dr. Michael Rodriguez',
      category: 'Quantum Computing',
      image: '/images/news/quantum-platform-launch.jpg',
      readTime: '4 min read',
      featured: true
    },
    {
      title: 'Partnership with NASA for Space Technology Development',
      excerpt: 'Zion Tech Group announces strategic partnership with NASA to develop next-generation space computing and resource intelligence systems.',
      date: '2025-01-05',
      author: 'Jennifer Williams',
      category: 'Partnerships',
      image: '/images/news/nasa-partnership.jpg',
      readTime: '3 min read',
      featured: true
    }
  ];

  const recentNews = [
    {
      title: 'Autonomous Business Intelligence Platform Release',
      excerpt: 'New platform enables businesses to automate complex decision-making processes using advanced AI algorithms.',
      date: '2025-01-12',
      author: 'Alex Thompson',
      category: 'Product Launch',
      readTime: '3 min read'
    },
    {
      title: 'Cybersecurity Innovation Award Recognition',
      excerpt: 'Zion Tech Group receives prestigious award for breakthrough quantum-resistant security solutions.',
      date: '2025-01-08',
      author: 'Maria Garcia',
      category: 'Awards',
      readTime: '2 min read'
    },
    {
      title: 'Edge Computing Expansion in Asia-Pacific',
      excerpt: 'Strategic expansion brings our edge computing solutions to new markets across the Asia-Pacific region.',
      date: '2025-01-03',
      author: 'David Kim',
      category: 'Business',
      readTime: '4 min read'
    },
    {
      title: 'AI Ethics Framework Implementation',
      excerpt: 'Company-wide implementation of comprehensive AI ethics framework ensures responsible technology development.',
      date: '2024-12-28',
      author: 'Dr. Emily Watson',
      category: 'AI Ethics',
      readTime: '5 min read'
    },
    {
      title: 'Quantum Neural Network Breakthrough',
      excerpt: 'Research team achieves significant milestone in quantum neural network development and training.',
      date: '2024-12-20',
      author: 'Dr. James Chen',
      category: 'Research',
      readTime: '6 min read'
    },
    {
      title: 'Sustainability Initiative Launch',
      excerpt: 'New sustainability program focuses on green computing and energy-efficient technology solutions.',
      date: '2024-12-15',
      author: 'Lisa Park',
      category: 'Sustainability',
      readTime: '3 min read'
    }
  ];

  const newsCategories = [
    'All News',
    'AI Research',
    'Quantum Computing',
    'Product Launch',
    'Partnerships',
    'Awards',
    'Business',
    'AI Ethics',
    'Research',
    'Sustainability'
  ];

  const pressReleases = [
    {
      title: 'Zion Tech Group Announces Q4 2024 Financial Results',
      date: '2025-01-20',
      type: 'Financial Results'
    },
    {
      title: 'New Board Member Appointment',
      date: '2025-01-18',
      type: 'Corporate'
    },
    {
      title: 'Strategic Acquisition of Quantum Startup',
      date: '2025-01-15',
      type: 'M&A'
    }
  ];

  return (
    <Layout 
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, press releases, and company updates from Zion Tech Group. Discover our breakthroughs in AI, quantum computing, and space technology."
      keywords="news, press releases, company updates, AI research, quantum computing, space technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6"
                variants={fadeInUp}
              >
                News & Updates
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
                variants={fadeInUp}
              >
                Stay informed about our latest breakthroughs, product launches, partnerships, and company developments as we pioneer the future of technology.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
              >
                <a 
                  href="/press" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center"
                >
                  Press Kit <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border border-blue-500/40 text-blue-300 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  Media Inquiries
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most significant announcements and breakthrough developments.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {featuredNews.map((article, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-blue-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{article.author}</span>
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <a 
                      href={`/news/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* News Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find news and updates in your areas of interest.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {newsCategories.map((category, index) => (
                <motion.button
                  key={index}
                  className="px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                  variants={fadeInUp}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Recent News
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay current with our latest company updates and industry developments.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {recentNews.map((article, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{article.author}</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <a 
                    href={`/news/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Press Releases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Official company announcements and press releases.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
                          {release.type}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {new Date(release.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{release.title}</h3>
                    </div>
                    <a 
                      href={`/press-releases/${release.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-all duration-300"
                    >
                      Read Release
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Connected
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Never miss an update. Subscribe to our newsletter and follow us on social media for the latest news and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                >
                  Subscribe to Newsletter
                </a>
                <a 
                  href="/press" 
                  className="px-8 py-4 border border-blue-500/40 text-blue-300 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
                >
                  Media Resources
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