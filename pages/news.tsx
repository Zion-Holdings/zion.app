import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, Tag, ArrowRight, Search, Filter,
  FileText, Star, TrendingUp, Lightbulb, Rocket, Brain,
  Shield, Globe, Award, Users, Building, Target
} from 'lucide-react';

const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', icon: FileText, color: 'from-gray-500 to-gray-600' },
    { id: 'company', name: 'Company Updates', icon: Building, color: 'from-blue-500 to-blue-600' },
    { id: 'technology', name: 'Technology', icon: Rocket, color: 'from-purple-500 to-purple-600' },
    { id: 'ai', name: 'AI & Innovation', icon: Brain, color: 'from-cyan-500 to-cyan-600' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-red-600' },
    { id: 'industry', name: 'Industry Insights', icon: TrendingUp, color: 'from-green-500 to-green-600' },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, color: 'from-yellow-500 to-yellow-600' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Our latest breakthrough in artificial intelligence brings human-like consciousness to enterprise applications, revolutionizing how businesses interact with AI systems.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '5 min read',
      featured: true,
      tags: ['AI', 'Innovation', 'Enterprise', 'Breakthrough'],
      image: '/images/news/ai-consciousness-launch.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: New Algorithm Achieves 99.9% Accuracy',
      excerpt: 'Our quantum research team has developed a groundbreaking algorithm that significantly improves quantum computing accuracy and reliability.',
      category: 'technology',
      author: 'Dr. Michael Rodriguez',
      date: '2025-01-12',
      readTime: '4 min read',
      featured: true,
      tags: ['Quantum Computing', 'Research', 'Algorithm', 'Breakthrough'],
      image: '/images/news/quantum-breakthrough.jpg'
    },
    {
      id: 3,
      title: 'Zion Tech Group Named Top 10 AI Companies of 2025',
      excerpt: 'We are proud to announce that Zion Tech Group has been recognized as one of the top 10 AI companies globally by TechInnovate Magazine.',
      category: 'awards',
      author: 'Marketing Team',
      date: '2025-01-10',
      readTime: '3 min read',
      featured: false,
      tags: ['Award', 'Recognition', 'AI', 'Global'],
      image: '/images/news/top-10-ai-award.jpg'
    },
    {
      id: 4,
      title: 'New Partnership with Global Tech Leaders Announced',
      excerpt: 'Strategic collaboration with leading technology companies to accelerate innovation in autonomous systems and quantum computing.',
      category: 'company',
      author: 'Partnership Team',
      date: '2025-01-08',
      readTime: '4 min read',
      featured: false,
      tags: ['Partnership', 'Collaboration', 'Innovation', 'Global'],
      image: '/images/news/partnership-announcement.jpg'
    },
    {
      id: 5,
      title: 'Cybersecurity Threat Intelligence Report Q4 2024',
      excerpt: 'Our latest cybersecurity report reveals emerging threats and provides actionable insights for enterprise security teams.',
      category: 'security',
      author: 'Security Team',
      date: '2025-01-05',
      readTime: '6 min read',
      featured: false,
      tags: ['Cybersecurity', 'Threat Intelligence', 'Report', 'Enterprise'],
      image: '/images/news/cybersecurity-report.jpg'
    },
    {
      id: 6,
      title: 'Space Technology Division Achieves Major Milestone',
      excerpt: 'Our space technology team successfully completed the first phase of the Mars resource mapping project, marking a significant achievement.',
      category: 'technology',
      author: 'Space Tech Team',
      date: '2025-01-03',
      readTime: '5 min read',
      featured: false,
      tags: ['Space Technology', 'Mars', 'Milestone', 'Innovation'],
      image: '/images/news/space-tech-milestone.jpg'
    },
    {
      id: 7,
      title: 'Employee Spotlight: Meet Our AI Research Lead',
      excerpt: 'Get to know Dr. Emily Watson, our AI Research Lead, and learn about her vision for the future of artificial intelligence.',
      category: 'company',
      author: 'HR Team',
      date: '2025-01-01',
      readTime: '4 min read',
      featured: false,
      tags: ['Employee Spotlight', 'AI Research', 'Leadership', 'Team'],
      image: '/images/news/employee-spotlight.jpg'
    },
    {
      id: 8,
      title: 'Industry Report: The Future of Autonomous Systems',
      excerpt: 'Comprehensive analysis of autonomous systems trends and their impact on various industries worldwide.',
      category: 'industry',
      author: 'Research Team',
      date: '2024-12-28',
      readTime: '7 min read',
      featured: false,
      tags: ['Autonomous Systems', 'Industry Report', 'Trends', 'Analysis'],
      image: '/images/news/autonomous-systems-report.jpg'
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsArticles.filter(article => article.featured);

  return (
    <>
      <Head>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, innovations, and developments from Zion Tech Group. Read about our breakthroughs, partnerships, and industry insights." />
        <meta name="keywords" content="Zion Tech Group news, technology updates, AI innovation, quantum computing, cybersecurity, company updates" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                News & Updates
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Stay informed about our latest innovations, breakthroughs, and industry insights that are shaping the future of technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Featured Stories</h2>
                <p className="text-gray-400">Our most important and impactful news</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredNews.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-cyan-900/50 to-blue-900/50 flex items-center justify-center">
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                        <p className="text-gray-400">Featured Article</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                          {categories.find(c => c.id === article.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm">{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(article.date).toLocaleDateString()}
                          </span>
                        </div>
                        <Link href={`/news/${article.id}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All News */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Latest News</h2>
              <p className="text-gray-400">Stay updated with all our latest developments</p>
            </motion.div>

              {filteredNews.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">No news articles found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNews.map((article, index) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                    >
                      <div className="aspect-video bg-gradient-to-br from-cyan-900/50 to-blue-900/50 flex items-center justify-center">
                        <div className="text-center">
                          <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                          <p className="text-gray-400 text-sm">Article</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                            {categories.find(c => c.id === article.category)?.name}
                          </span>
                          <span className="text-gray-400 text-sm">{article.readTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {article.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(article.date).toLocaleDateString()}
                            </span>
                          </div>
                          <Link href={`/news/${article.id}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest news, insights, and technology updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsPage;