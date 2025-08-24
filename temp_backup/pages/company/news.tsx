import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Globe,
  Clock,
  Target,
  Zap,
  Brain,
  Shield
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      date: 'August 15, 2025',
      category: 'Product Launch',
      excerpt: 'Our latest AI platform represents a breakthrough in artificial intelligence, featuring unprecedented levels of consciousness and learning capabilities.',
      readTime: '5 min read',
      image: '/images/news/ai-platform-launch.jpg',
      href: '/company/news/ai-consciousness-platform-launch',
      featured: true
    },
    {
      title: 'Company Expands to 50+ Countries, Reaching Global Markets',
      date: 'August 10, 2025',
      category: 'Company News',
      excerpt: 'Zion Tech Group announces major global expansion, bringing cutting-edge technology solutions to organizations worldwide.',
      readTime: '3 min read',
      image: '/images/news/global-expansion.jpg',
      href: '/company/news/global-expansion-announcement'
    },
    {
      title: 'New Partnership with Leading Research Institutions',
      date: 'August 5, 2025',
      category: 'Partnerships',
      excerpt: 'Strategic collaboration with top universities to advance quantum computing research and development.',
      readTime: '4 min read',
      image: '/images/news/research-partnership.jpg',
      href: '/company/news/research-institution-partnership'
    },
    {
      title: 'Record-Breaking Quarter: 300% Growth in AI Services',
      date: 'July 30, 2025',
      category: 'Business',
      excerpt: 'Q2 2025 results show unprecedented growth in AI services adoption across enterprise clients.',
      readTime: '4 min read',
      image: '/images/news/q2-results.jpg',
      href: '/company/news/q2-2025-results'
    },
    {
      title: 'Cybersecurity Division Receives Industry Recognition',
      date: 'July 25, 2025',
      category: 'Awards',
      excerpt: 'Our cybersecurity solutions recognized as industry-leading by independent security analysts.',
      readTime: '3 min read',
      image: '/images/news/cybersecurity-award.jpg',
      href: '/company/news/cybersecurity-recognition'
    },
    {
      title: 'Innovation Lab Opens in Silicon Valley',
      date: 'July 20, 2025',
      category: 'Company News',
      excerpt: 'New innovation center to focus on emerging technologies and breakthrough research.',
      readTime: '3 min read',
      image: '/images/news/innovation-lab.jpg',
      href: '/company/news/silicon-valley-innovation-lab'
    }
  ];

  const newsCategories = [
    { name: 'All News', count: newsArticles.length, active: true },
    { name: 'Product Updates', count: 15, active: false },
    { name: 'Company News', count: 25, active: false },
    { name: 'Partnerships', count: 12, active: false },
    { name: 'Industry Insights', count: 18, active: false },
    { name: 'Awards & Recognition', count: 8, active: false }
  ];

  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = newsArticles.filter(article => !article.featured);

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="News - Zion Tech Group | Latest Company Updates and Industry Insights" 
          description="Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our innovations and company developments." 
          canonical="https://ziontechgroup.com/company/news/" 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Latest News
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay updated with our latest innovations, company developments, and industry insights.
            </motion.p>
          </div>
        </section>

        {/* News Categories */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {newsCategories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    category.active
                      ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                      : 'border-gray-600 text-gray-400 hover:border-cyan-500 hover:text-cyan-400'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-4">Featured News</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our most important announcements and breakthrough developments.
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {featuredNews.map((article, index) => (
                  <motion.article
                    key={index}
                    className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-400 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <a
                        href={article.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Latest News Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Latest News</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay informed with our latest company updates, industry insights, and technological breakthroughs.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {regularNews.map((article, index) => (
                <motion.article
                  key={index}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <a
                      href={article.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter to receive the latest news, product updates, and industry insights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-300 mb-8">
                Have questions about our news or want to learn more about our company? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="/company/about"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default NewsPage;