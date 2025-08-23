import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Newspaper, Calendar, User, Tag, ExternalLink, Search,
  Filter, Globe, Brain, Atom, Rocket, Shield, Cloud,
  TrendingUp, Award, Users, Lightbulb, Star, ArrowRight, Download, BookOpen
} from 'lucide-react';

const News: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Consciousness Platform",
      excerpt: "Breakthrough technology enables AI systems to develop genuine emotional intelligence and consciousness, marking a new era in artificial intelligence.",
      content: "Zion Tech Group today announced the launch of its revolutionary AI Consciousness Platform, a breakthrough technology that enables artificial intelligence systems to develop genuine emotional intelligence and consciousness. This platform represents a significant leap forward in AI capabilities, allowing machines to understand, process, and respond to human emotions in ways previously thought impossible.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      category: "AI & Technology",
      tags: ["AI Consciousness", "Emotional Intelligence", "Breakthrough"],
      image: "/api/placeholder/800/400",
      featured: true,
      readTime: "5 min read",
      externalLink: "https://techcrunch.com/zion-ai-consciousness"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Zion Tech Group Achieves 1000+ Qubit Operations",
      excerpt: "Company reaches unprecedented milestone in quantum computing, enabling complex calculations that were previously impossible.",
      content: "Zion Tech Group has achieved a major breakthrough in quantum computing, successfully operating a system with over 1000 qubits. This milestone enables complex calculations and simulations that were previously impossible, opening new possibilities in drug discovery, materials science, and cryptography.",
      author: "Dr. Sarah Chen",
      date: "2024-01-10",
      category: "Quantum Computing",
      tags: ["Quantum Computing", "1000 Qubits", "Breakthrough"],
      image: "/api/placeholder/800/400",
      featured: false,
      readTime: "4 min read",
      externalLink: "https://quantum-journal.org/zion-1000-qubits"
    },
    {
      id: 3,
      title: "Space Resource Intelligence Platform Revolutionizes Asteroid Mining",
      excerpt: "New platform provides unprecedented insights into space resources, enabling efficient and sustainable asteroid mining operations.",
      content: "Zion Tech Group's Space Resource Intelligence Platform is revolutionizing the field of asteroid mining by providing unprecedented insights into space resources. The platform combines advanced AI algorithms with satellite data to identify and analyze valuable resources in near-Earth asteroids.",
      author: "Marcus Rodriguez",
      date: "2024-01-08",
      category: "Space Technology",
      tags: ["Space Mining", "Asteroid Resources", "AI Analysis"],
      image: "/api/placeholder/800/400",
      featured: false,
      readTime: "6 min read",
      externalLink: "https://spacenews.com/zion-asteroid-mining"
    },
    {
      id: 4,
      title: "Zero Trust Security Architecture Sets New Industry Standard",
      excerpt: "Zion Tech Group's zero trust implementation becomes the benchmark for enterprise security, achieving 99.99% threat detection rate.",
      content: "Zion Tech Group's zero trust security architecture has set a new industry standard, achieving a 99.99% threat detection rate. The implementation combines advanced AI threat detection with comprehensive access controls, providing unprecedented protection against cyber threats.",
      author: "James Thompson",
      date: "2024-01-05",
      category: "Cybersecurity",
      tags: ["Zero Trust", "Cybersecurity", "Threat Detection"],
      image: "/api/placeholder/800/400",
      featured: false,
      readTime: "3 min read",
      externalLink: "https://securityweekly.com/zion-zero-trust"
    },
    {
      id: 5,
      title: "Zion Tech Group Named 'Most Innovative Company' by Tech Innovators Association",
      excerpt: "Company recognized for groundbreaking work in AI consciousness, quantum computing, and space technology.",
      content: "Zion Tech Group has been named 'Most Innovative Company' by the prestigious Tech Innovators Association. The award recognizes the company's groundbreaking work in AI consciousness, quantum computing, and space technology, positioning it as a leader in next-generation technology development.",
      author: "Zion Tech Group",
      date: "2024-01-03",
      category: "Awards",
      tags: ["Innovation Award", "Recognition", "Leadership"],
      image: "/api/placeholder/800/400",
      featured: false,
      readTime: "2 min read",
      externalLink: "https://techinnovators.org/awards-2024"
    },
    {
      id: 6,
      title: "Partnership with Global Research Consortium Accelerates AI Development",
      excerpt: "Strategic partnership enables faster development of AI consciousness and emotional intelligence capabilities.",
      content: "Zion Tech Group has announced a strategic partnership with the Global Research Consortium, a collaboration that will accelerate the development of AI consciousness and emotional intelligence capabilities. This partnership brings together leading researchers and resources to advance the field of artificial intelligence.",
      author: "Zion Tech Group",
      date: "2023-12-28",
      category: "Partnerships",
      tags: ["Partnership", "Research", "AI Development"],
      image: "/api/placeholder/800/400",
      featured: false,
      readTime: "4 min read",
      externalLink: "https://research-consortium.org/zion-partnership"
    }
  ];

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: newsArticles.length },
    { id: 'ai', name: 'AI & Technology', icon: Brain, count: newsArticles.filter(article => article.category.toLowerCase().includes('ai')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: newsArticles.filter(article => article.category.toLowerCase().includes('quantum')).length },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: newsArticles.filter(article => article.category.toLowerCase().includes('space')).length },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: newsArticles.filter(article => article.category.toLowerCase().includes('cyber')).length },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: newsArticles.filter(article => article.category.toLowerCase().includes('award')).length },
    { id: 'partnerships', name: 'Partnerships', icon: Users, count: newsArticles.filter(article => article.category.toLowerCase().includes('partnership')).length }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           article.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl p-6">
                <Newspaper className="w-full h-full text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                News & Press
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Stay updated with the latest news, breakthroughs, and announcements from Zion Tech Group.
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-4xl mx-auto space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-cyan-400/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                      <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Featured Story</h2>
                <p className="text-gray-400">Our latest breakthrough and most important announcement</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-cyan-400/20 overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="w-full h-64 md:h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <Globe className="w-32 h-32 text-cyan-400" />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">{featuredArticle.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredArticle.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{featuredArticle.author}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredArticle.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={featuredArticle.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Read Full Article</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Latest News</h2>
              <p className="text-gray-400">Stay updated with our latest developments and announcements</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-cyan-400/20 overflow-hidden hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <Globe className="w-24 h-24 text-cyan-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={article.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            {regularArticles.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center py-16"
              >
                <Lightbulb className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Press Kit & Media */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Press Resources</h2>
              <p className="text-gray-400">Access our press kit, media assets, and contact information</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Press Kit',
                  description: 'Download our comprehensive press kit with company information, logos, and media assets',
                  icon: Download,
                  href: '/press-kit',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Media Contact',
                  description: 'Get in touch with our media relations team for interviews and press inquiries',
                  icon: Users,
                  href: '/contact',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Company Blog',
                  description: 'Read our latest insights, technical articles, and industry perspectives',
                  icon: BookOpen,
                  href: '/blog',
                  color: 'from-green-500 to-emerald-500'
                }
              ].map((resource, index) => (
                <motion.a
                  key={resource.title}
                  href={resource.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-xl p-4 mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <resource.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{resource.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-400 mb-8">
                Subscribe to our newsletter for the latest news, breakthroughs, and insights from Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-cyan-400/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
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

export default News;