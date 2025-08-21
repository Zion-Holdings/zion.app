import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  TrendingUp,
  BarChart3,
  Brain,
  Atom,
  Globe,
  Shield,
  Zap,
  Eye,
  Clock,
  Award
} from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

const ReportsPage: React.FC = () => {
  const reports = [
    {
      title: 'The Future of Quantum Computing in Enterprise: 2024-2030',
      excerpt: 'Comprehensive analysis of quantum computing adoption trends, market opportunities, and strategic implications for businesses across industries.',
      date: '2024-01-15',
      author: 'Dr. Sarah Chen & Quantum Research Team',
      category: 'Technology Trends',
      tags: ['Quantum Computing', 'Enterprise', 'Market Analysis', 'Future Tech'],
      pages: 45,
      downloads: 1247,
      views: 5678,
      featured: true,
      icon: <Atom className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Adoption in Fortune 500 Companies: ROI Analysis & Best Practices',
      excerpt: 'In-depth study of artificial intelligence implementation success stories, return on investment metrics, and strategic recommendations.',
      date: '2024-01-10',
      author: 'AI Research Division',
      category: 'Business Intelligence',
      tags: ['AI', 'ROI', 'Fortune 500', 'Best Practices'],
      pages: 38,
      downloads: 892,
      views: 3456,
      featured: false,
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Threats in the Age of AI: 2024 Threat Landscape',
      excerpt: 'Analysis of emerging cybersecurity challenges, AI-powered threats, and defense strategies for modern organizations.',
      date: '2024-01-08',
      author: 'Cybersecurity Research Team',
      category: 'Security',
      tags: ['Cybersecurity', 'AI Threats', 'Threat Landscape', 'Defense'],
      pages: 52,
      downloads: 1567,
      views: 6789,
      featured: false,
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Global Tech Investment Trends: Venture Capital & Innovation Funding',
      excerpt: 'Comprehensive overview of technology investment patterns, emerging sectors, and funding opportunities worldwide.',
      date: '2024-01-05',
      author: 'Market Research Team',
      category: 'Market Analysis',
      tags: ['Venture Capital', 'Investment', 'Innovation', 'Global Markets'],
      pages: 41,
      downloads: 734,
      views: 2890,
      featured: false,
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Edge Computing & IoT: Transforming Industries in Real-Time',
      excerpt: 'Research on edge computing adoption, Internet of Things integration, and industry transformation opportunities.',
      date: '2024-01-03',
      author: 'IoT Research Division',
      category: 'Emerging Tech',
      tags: ['Edge Computing', 'IoT', 'Industry 4.0', 'Real-time'],
      pages: 36,
      downloads: 623,
      views: 2345,
      featured: false,
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Sustainable Technology: Green Computing & Environmental Impact',
      excerpt: 'Analysis of sustainable technology practices, environmental impact assessment, and green computing solutions.',
      date: '2024-01-01',
      author: 'Sustainability Research Team',
      category: 'Sustainability',
      tags: ['Green Computing', 'Sustainability', 'Environmental Impact', 'Clean Tech'],
      pages: 43,
      downloads: 445,
      views: 1789,
      featured: false,
      icon: <Globe className="w-8 h-8" />,
      color: 'from-teal-500 to-green-500'
    }
  ];

  const categories = [
    { name: 'All Reports', count: reports.length, active: true },
    { name: 'Technology Trends', count: 1, active: false },
    { name: 'Business Intelligence', count: 1, active: false },
    { name: 'Security', count: 1, active: false },
    { name: 'Market Analysis', count: 1, active: false },
    { name: 'Emerging Tech', count: 1, active: false },
    { name: 'Sustainability', count: 1, active: false }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <UltraFuturisticBackground >
      <div className="min-h-screen">
        <Head>
          <title>Research Reports - Zion Tech Group | Industry Analysis & Technology Insights</title>
          <meta name="description" content="Access Zion Tech Group's comprehensive research reports, whitepapers, and industry analysis covering AI, quantum computing, cybersecurity, and emerging technologies." />
        </Head>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Research Reports
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making.
            </motion.p>
            
            <motion.div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>{reports.length} Reports Available</span>
              </span>
              <span className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>{formatNumber(reports.reduce((sum, r) => sum + r.downloads, 0))} Downloads</span>
              </span>
              <span className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>{formatNumber(reports.reduce((sum, r) => sum + r.views, 0))} Views</span>
              </span>
            </motion.div>
          </div>
        </section>

        {/* Featured Report */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Report
              </h2>
            </motion.div>

            {reports.filter(report => report.featured).map((report, index) => (
              <motion.div
                key={index} className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12 hover:border-cyan-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${report.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
                    {report.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {report.category}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(report.date)}</span>
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{report.title}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">{report.excerpt}</p>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-6">
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{report.author}</span>
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{report.pages} pages</span>
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{formatNumber(report.downloads)} downloads</span>
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{formatNumber(report.views)} views</span>
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {report.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Full Report</span>
                  </button>
                  <button className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>Preview Report</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All Reports
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive research across different technology domains
              </p>
            </motion.div>

            {/* Category Pills */}
            <motion.div className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category.active
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reports.filter(report => !report.featured).map((report, index) => (
                <motion.article
                  key={index} className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${report.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                    {report.icon}
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {report.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(report.date)}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-3">{report.title}</h3>
                  <p className="text-gray-300 mb-6 line-clamp-4">{report.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <FileText className="w-4 h-4" />
                      <span>{report.pages} pages</span>
                    </span>
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{formatNumber(report.downloads)}</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{report.author.split('&')[0].trim()}</span>
                    </span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 inline-flex items-center space-x-1">
                      <span>Download</span>
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our research team can conduct custom studies and analysis tailored to your specific industry needs and challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2">
                  <span>Request Custom Research</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services" className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200">
                  View Research Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default ReportsPage;