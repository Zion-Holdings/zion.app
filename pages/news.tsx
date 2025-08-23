import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Newspaper, Target, TrendingUp, Users, Globe, 
  ArrowRight, Star, Shield, CheckCircle, Zap,
  Infinity, Eye, Sparkles, Clock, Brain, Atom,
  Rocket, Cpu, Database, Cloud, BarChart3, Calendar,
  Award, Lightbulb, Code, Server, Lock, ExternalLink
} from 'lucide-react';

const NewsPage: React.FC = () => {
  const featuredNews = [
    {
      title: "Zion Tech Group Launches Revolutionary AI Consciousness Platform",
      excerpt: "Breakthrough technology that enables AI systems to develop genuine consciousness and emotional intelligence, revolutionizing human-AI interaction.",
      category: "Product Launch",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "/api/placeholder/600/300",
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing Breakthrough: Zion Tech Achieves 1000+ Qubit System",
      excerpt: "Our quantum research team has successfully developed a stable 1000+ qubit quantum computer, marking a major milestone in quantum computing.",
      category: "Research & Development",
      date: "2025-01-10",
      readTime: "4 min read",
      image: "/api/placeholder/600/300",
      featured: true,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const recentNews = [
    {
      title: "Zion Tech Group Named Top AI Company by Tech Innovation Awards",
      excerpt: "Recognition for our groundbreaking work in artificial intelligence and autonomous systems development.",
      category: "Awards & Recognition",
      date: "2025-01-08",
      readTime: "3 min read",
      image: "/api/placeholder/400/250",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Partnership Announcement: Zion Tech and Microsoft Azure",
      excerpt: "Strategic collaboration to accelerate AI development and cloud infrastructure optimization.",
      category: "Partnerships",
      date: "2025-01-05",
      readTime: "3 min read",
      image: "/api/placeholder/400/250",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Space Resource Intelligence Platform Successfully Deployed",
      excerpt: "Our space technology division has successfully deployed the first commercial space resource mapping satellite.",
      category: "Space Technology",
      date: "2025-01-03",
      readTime: "4 min read",
      image: "/api/placeholder/400/250",
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Zion Tech Group Expands to European Markets",
      excerpt: "Strategic expansion into European markets with new offices in London, Berlin, and Paris.",
      category: "Company News",
      date: "2024-12-28",
      readTime: "3 min read",
      image: "/api/placeholder/400/250",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "New AI Ethics Framework Released",
      excerpt: "Comprehensive framework for responsible AI development and deployment in enterprise environments.",
      category: "AI Ethics",
      date: "2024-12-25",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Quantum Cybersecurity Solution Achieves Military Certification",
      excerpt: "Our quantum-resistant encryption platform receives military-grade security certification.",
      category: "Cybersecurity",
      date: "2024-12-20",
      readTime: "4 min read",
      image: "/api/placeholder/400/250",
      color: "from-red-500 to-pink-500"
    }
  ];

  const pressReleases = [
    {
      title: "Zion Tech Group Announces Q4 2024 Financial Results",
      date: "2025-01-20",
      category: "Financial",
      summary: "Strong revenue growth driven by AI and quantum computing solutions"
    },
    {
      title: "New Board Member Appointment: Dr. Sarah Chen",
      date: "2025-01-18",
      category: "Leadership",
      summary: "Renowned AI researcher joins Zion Tech Group board of directors"
    },
    {
      title: "Zion Tech Group Acquires Quantum Computing Startup",
      date: "2025-01-12",
      category: "Acquisition",
      summary: "Strategic acquisition to accelerate quantum computing development"
    }
  ];

  const categories = [
    { name: "All News", count: 25, active: true },
    { name: "Product Launch", count: 8, active: false },
    { name: "Research & Development", count: 6, active: false },
    { name: "Partnerships", count: 5, active: false },
    { name: "Company News", count: 4, active: false },
    { name: "Awards & Recognition", count: 2, active: false }
  ];

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
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Newspaper className="w-4 h-4 mr-2" />
                Latest News & Updates
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                News & Press
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest news, announcements, and insights 
                from Zion Tech Group and the technology industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
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
                Our most important announcements and breakthrough developments 
                that are shaping the future of technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredNews.map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="relative h-64 bg-gradient-to-r from-gray-700 to-gray-800">
                    <div className={`absolute inset-0 bg-gradient-to-r ${news.color} opacity-20`} />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {news.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(news.date)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {news.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {news.excerpt}
                    </p>
                    
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* News Categories */}
        <section className="py-12 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Recent News Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
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
                Stay current with our latest developments, partnerships, 
                and industry insights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentNews.map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="relative h-48 bg-gradient-to-r from-gray-700 to-gray-800">
                    <div className={`absolute inset-0 bg-gradient-to-r ${news.color} opacity-20`} />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(news.date)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {news.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Press Releases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Official announcements and press releases from Zion Tech Group 
                for media and stakeholders.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                      {release.category}
                    </span>
                    <span className="text-sm text-gray-400">{formatDate(release.date)}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {release.summary}
                  </p>
                  
                  <button className="w-full px-4 py-2 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Press Release
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-3xl p-12 border border-blue-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Media Inquiries
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Journalists and media representatives can contact our press team 
                for interviews, quotes, and additional information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Newspaper className="w-5 h-5 mr-2" />
                  Contact Press Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Media Kit
                  <ArrowRight className="w-5 h-5 ml-2" />
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