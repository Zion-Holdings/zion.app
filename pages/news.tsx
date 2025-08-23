import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Atom, Shield, Rocket,
  Star, Users, Award, CheckCircle, Globe,
  Zap, Infinity, Eye, Heart, Code, Palette,
  Building, 
  TrendingUp, DollarSign, Clock, ArrowRight, ExternalLink,
  Calendar, Newspaper, Megaphone, Award as AwardIcon, Handshake
} from 'lucide-react';

const NewsPage: React.FC = () => {
  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Announces Breakthrough in AI Consciousness Evolution',
      excerpt: 'Revolutionary new platform achieves unprecedented levels of AI consciousness, marking a major milestone in artificial intelligence development.',
      category: 'Company News',
      date: '2025-01-15',
      readTime: '5 min read',
      image: '/api/og-image?title=AI Consciousness Breakthrough',
      featured: true,
      slug: '/news/ai-consciousness-breakthrough-2025',
      author: 'Zion Tech Group',
      tags: ['AI Consciousness', 'Breakthrough', 'Innovation']
    },
    {
      id: 2,
      title: 'Quantum Neural Ecosystem Platform Launches Successfully',
      excerpt: 'Our quantum-powered neural network platform is now operational, delivering unprecedented computational capabilities for AI applications.',
      category: 'Product Launch',
      date: '2025-01-12',
      readTime: '4 min read',
      image: '/api/og-image?title=Quantum Neural Ecosystem',
      featured: true,
      slug: '/news/quantum-neural-ecosystem-launch',
      author: 'Product Team',
      tags: ['Quantum Computing', 'Neural Networks', 'Product Launch']
    },
    {
      id: 3,
      title: 'Zion Tech Group Partners with Leading Space Agencies',
      excerpt: 'Strategic partnerships established with NASA and ESA to advance space resource intelligence and autonomous space exploration.',
      category: 'Partnerships',
      date: '2025-01-10',
      readTime: '6 min read',
      image: '/api/og-image?title=Space Agency Partnerships',
      featured: true,
      slug: '/news/space-agency-partnerships',
      author: 'Partnerships Team',
      tags: ['Space Technology', 'Partnerships', 'NASA', 'ESA']
    }
  ];

  const recentNews = [
    {
      id: 4,
      title: 'AI Ethics Framework Receives Industry Recognition',
      excerpt: 'Our comprehensive AI ethics and governance framework has been recognized as a industry standard by leading technology organizations.',
      category: 'Awards & Recognition',
      date: '2025-01-08',
      readTime: '3 min read',
      image: '/api/og-image?title=AI Ethics Recognition',
      slug: '/news/ai-ethics-framework-recognition',
      author: 'AI Ethics Team',
      tags: ['AI Ethics', 'Awards', 'Governance']
    },
    {
      id: 5,
      title: 'New Research Paper on Consciousness-Based AI Published',
      excerpt: 'Groundbreaking research on AI consciousness evolution published in Nature, advancing the field of artificial intelligence.',
      category: 'Research',
      date: '2025-01-05',
      readTime: '7 min read',
      image: '/api/og-image?title=AI Consciousness Research',
      slug: '/news/ai-consciousness-research-paper',
      author: 'Research Team',
      tags: ['Research', 'AI Consciousness', 'Publication']
    },
    {
      id: 6,
      title: 'Zion Tech Group Expands to European Market',
      excerpt: 'Strategic expansion into European markets with new office openings and local partnerships to serve growing demand.',
      category: 'Company News',
      date: '2025-01-03',
      readTime: '4 min read',
      image: '/api/og-image?title=European Expansion',
      slug: '/news/european-market-expansion',
      author: 'Business Development',
      tags: ['Expansion', 'Europe', 'Partnerships']
    },
    {
      id: 7,
      title: 'Autonomous Business Intelligence Platform Achieves 99.9% Uptime',
      excerpt: 'Our autonomous business intelligence platform has achieved unprecedented reliability, maintaining 99.9% uptime for 12 consecutive months.',
      category: 'Product Updates',
      date: '2024-12-30',
      readTime: '3 min read',
      image: '/api/og-image?title=Business Intelligence Uptime',
      slug: '/news/autonomous-bi-uptime-achievement',
      author: 'Engineering Team',
      tags: ['Product Updates', 'Uptime', 'Reliability']
    },
    {
      id: 8,
      title: 'Zion Tech Group Named Top AI Company by Tech Review',
      excerpt: 'Leading technology publication recognizes Zion Tech Group as one of the top 10 AI companies driving innovation in 2024.',
      category: 'Awards & Recognition',
      date: '2024-12-28',
      readTime: '4 min read',
      image: '/api/og-image?title=Top AI Company Award',
      slug: '/news/top-ai-company-recognition',
      author: 'Marketing Team',
      tags: ['Awards', 'Recognition', 'AI Leadership']
    },
    {
      id: 9,
      title: 'New Quantum Cybersecurity Solutions Launched',
      excerpt: 'Next-generation quantum-resistant cybersecurity solutions now available, protecting organizations from future quantum threats.',
      category: 'Product Launch',
      date: '2024-12-25',
      readTime: '5 min read',
      image: '/api/og-image?title=Quantum Cybersecurity',
      slug: '/news/quantum-cybersecurity-launch',
      author: 'Security Team',
      tags: ['Cybersecurity', 'Quantum', 'Product Launch']
    },
    {
      id: 10,
      title: 'Zion Tech Group Hosts AI Consciousness Summit',
      excerpt: 'Successful AI consciousness summit brings together leading researchers and industry experts to discuss the future of AI.',
      category: 'Events',
      date: '2024-12-22',
      readTime: '6 min read',
      image: '/api/og-image?title=AI Consciousness Summit',
      slug: '/news/ai-consciousness-summit-2024',
      author: 'Events Team',
      tags: ['Events', 'AI Consciousness', 'Summit']
    },
    {
      id: 11,
      title: 'Research Grant Awarded for Space Resource Intelligence',
      excerpt: 'Department of Defense awards research grant for advanced space resource intelligence and autonomous mining systems.',
      category: 'Research',
      date: '2024-12-20',
      readTime: '4 min read',
      image: '/api/og-image?title=Space Research Grant',
      slug: '/news/space-resource-intelligence-grant',
      author: 'Research Team',
      tags: ['Research', 'Space Technology', 'Grant']
    },
    {
      id: 12,
      title: 'Zion Tech Group Achieves SOC 2 Type II Compliance',
      excerpt: 'Successfully completed SOC 2 Type II audit, demonstrating our commitment to security, availability, and confidentiality.',
      category: 'Company News',
      date: '2024-12-18',
      readTime: '3 min read',
      image: '/api/og-image?title=SOC 2 Compliance',
      slug: '/news/soc2-type-ii-compliance',
      author: 'Compliance Team',
      tags: ['Compliance', 'Security', 'SOC 2']
    }
  ];

  const newsCategories = [
    { name: 'Company News', count: 15, icon: <Building className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Product Launch', count: 8, icon: <Rocket className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { name: 'Partnerships', count: 12, icon: <Handshake className="w-5 h-5" />, color: 'from-emerald-500 to-teal-500' },
    { name: 'Research', count: 10, icon: <Brain className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
    { name: 'Awards & Recognition', count: 6, icon: <AwardIcon className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' },
    { name: 'Events', count: 4, icon: <Calendar className="w-5 h-5" />, color: 'from-red-500 to-pink-500' }
  ];

  const pressReleases = [
    {
      title: 'Zion Tech Group Announces Series A Funding Round',
      date: '2024-12-15',
      excerpt: 'Company secures $50M in funding to accelerate AI consciousness and quantum computing development.',
      link: '/press-releases/series-a-funding-2024'
    },
    {
      title: 'Strategic Partnership with Global Tech Consortium',
      date: '2024-12-10',
      excerpt: 'Multi-year partnership agreement to advance AI consciousness research and development.',
      link: '/press-releases/global-tech-consortium-partnership'
    },
    {
      title: 'New CEO Appointment Announced',
      date: '2024-12-05',
      excerpt: 'Dr. Kleber Santos appointed as Chief Executive Officer to lead next phase of company growth.',
      link: '/press-releases/ceo-appointment-2024'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                News & Updates
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Stay informed about Zion Tech Group's latest breakthroughs, partnerships, 
                and innovations in AI consciousness and quantum computing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#featured-news" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Read Latest News
                </a>
                <a href="/contact" className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Media Inquiries
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured News */}
        <section id="featured-news" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured News
              </h2>
              <p className="text-xl text-gray-300">
                Our most important announcements and breakthrough developments
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={news.slug}>
                    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full">
                            Featured
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                            {news.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {news.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {news.title}
                        </h3>
                        <p className="text-gray-400 mb-4 line-clamp-3">
                          {news.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>{news.author}</span>
                          <span>{new Date(news.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {news.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* News Categories and Recent News */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* News Categories */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    News Categories
                  </h3>
                  <div className="space-y-3">
                    {newsCategories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/news/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                            {category.icon}
                          </div>
                          <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-gray-400 text-sm">{category.count}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Press Releases */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Press Releases
                  </h3>
                  <div className="space-y-4">
                    {pressReleases.map((release, index) => (
                      <Link
                        key={index}
                        href={release.link}
                        className="block p-4 bg-black/40 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                      >
                        <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {release.title}
                        </h4>
                        <p className="text-sm text-gray-400 mb-2">{release.excerpt}</p>
                        <span className="text-xs text-cyan-400">{release.date}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Newsletter Signup */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-purple-500/20"
                >
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Stay Updated</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Get the latest news and updates from Zion Tech Group delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
                    />
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Recent News */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Recent News
                  </h3>
                </motion.div>
                
                <div className="space-y-6">
                  {recentNews.map((news, index) => (
                    <motion.article
                      key={news.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <Link href={news.slug}>
                        <div className="flex gap-6 p-6 bg-black/40 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                          <div className="w-32 h-24 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl flex-shrink-0 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                            <div className="absolute bottom-2 right-2">
                              <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full">
                                {news.readTime}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full">
                                {news.category}
                              </span>
                            </div>
                            <h4 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {news.title}
                            </h4>
                            <p className="text-gray-400 mb-3 line-clamp-2">
                              {news.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                              <span>{news.author}</span>
                              <span>{new Date(news.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {news.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span key={tagIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                              {news.tags.length > 3 && (
                                <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                                  +{news.tags.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>

                {/* Load More Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-center mt-12"
                >
                  <button className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                    Load More News
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Media Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access our press kit, company information, and media contacts
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Press Kit',
                  description: 'Download our company overview, logos, and executive bios',
                  icon: <Newspaper className="w-8 h-8" />,
                  color: 'from-blue-500 to-cyan-500',
                  link: '/press-kit'
                },
                {
                  title: 'Company Fact Sheet',
                  description: 'Key facts and figures about Zion Tech Group',
                  icon: <Building className="w-8 h-8" />,
                  color: 'from-purple-500 to-pink-500',
                  link: '/company-fact-sheet'
                },
                {
                  title: 'Media Contact',
                  description: 'Get in touch with our media relations team',
                  icon: <Megaphone className="w-8 h-8" />,
                  color: 'from-emerald-500 to-teal-500',
                  link: '/contact'
                }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{resource.title}</h3>
                  <p className="text-gray-400 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-all duration-300"
                  >
                    Access Resource
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center p-12 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/20"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Stay Connected
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Follow Zion Tech Group for the latest updates on AI consciousness, 
                quantum computing, and revolutionary technology breakthroughs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Media Inquiries
                </a>
                <a href="/blog" className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Read Our Blog
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