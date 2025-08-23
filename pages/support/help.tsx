import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  FileText,
  Code,
  Shield,
  Brain,
  Cloud,
  Rocket
} from 'lucide-react';

const HelpCenterPage: React.FC = () => {
  const categories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500',
      articles: [
        { title: 'Welcome to Zion Tech Group', views: '12.5k', time: '5 min read' },
        { title: 'First Steps Setup Guide', views: '8.9k', time: '10 min read' },
        { title: 'Account Configuration', views: '6.7k', time: '8 min read' }
      ]
    },
    {
      title: 'Account & Billing',
      description: 'Manage your account, billing, and subscription',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      articles: [
        { title: 'Managing Your Account', views: '15.2k', time: '7 min read' },
        { title: 'Billing & Payment Methods', views: '11.8k', time: '6 min read' },
        { title: 'Subscription Plans', views: '9.3k', time: '5 min read' }
      ]
    },
    {
      title: 'Technical Support',
      description: 'Technical issues and troubleshooting guides',
      icon: <Code className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      articles: [
        { title: 'Common Technical Issues', views: '18.7k', time: '12 min read' },
        { title: 'API Troubleshooting', views: '14.2k', time: '15 min read' },
        { title: 'Performance Optimization', views: '10.9k', time: '10 min read' }
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Security best practices and compliance information',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      articles: [
        { title: 'Security Best Practices', views: '16.3k', time: '8 min read' },
        { title: 'Compliance Guidelines', views: '13.1k', time: '10 min read' },
        { title: 'Data Protection', views: '11.5k', time: '7 min read' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      description: 'AI model development and deployment help',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      articles: [
        { title: 'AI Model Development', views: '9.8k', time: '20 min read' },
        { title: 'Model Deployment Guide', views: '7.6k', time: '15 min read' },
        { title: 'AI Ethics & Bias', views: '5.4k', time: '12 min read' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Cloud deployment and infrastructure management',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      articles: [
        { title: 'Cloud Deployment', views: '12.1k', time: '18 min read' },
        { title: 'Infrastructure Management', views: '8.9k', time: '14 min read' },
        { title: 'Monitoring & Logging', views: '6.7k', time: '11 min read' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'Getting Started with Zion Tech Group', category: 'Getting Started', views: '25.3k', rating: 4.9 },
    { title: 'API Authentication Guide', category: 'Technical Support', views: '22.1k', rating: 4.8 },
    { title: 'Security Best Practices', category: 'Security & Compliance', views: '19.8k', rating: 4.9 },
    { title: 'Cloud Deployment Tutorial', category: 'Cloud & Infrastructure', views: '17.5k', rating: 4.7 }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w-8 h-8" />,
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: <Mail className="w-8 h-8" />,
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: <Phone className="w-8 h-8" />,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const quickActions = [
    { title: 'Report a Bug', icon: <FileText className="w-6 h-6" />, href: '/support/report-bug' },
    { title: 'Request Feature', icon: <Star className="w-6 h-6" />, href: '/support/request-feature' },
    { title: 'Download SDKs', icon: <Code className="w-6 h-6" />, href: '/resources/sdk' },
    { title: 'View Status', icon: <Clock className="w-6 h-6" />, href: '/status' }
  ];

  return (
    <Layout 
      title="Help Center - Zion Tech Group"
      description="Comprehensive help center with guides, tutorials, and support resources. Get help with Zion Tech Group services and solutions."
      keywords="help center, support, tutorials, guides, Zion Tech Group, customer support"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-teal-900/20 to-blue-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <HelpCircle className="w-16 h-16 text-green-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                  Help Center
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Find answers to your questions, learn from our guides, and get the support you need 
                to succeed with Zion Tech Group solutions.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or solutions..."
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Browse Help Articles
                </button>
                <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Contact Support
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quick Actions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get help quickly with these common support actions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {action.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {action.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Popular Help Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Most viewed and highly-rated help articles to get you started quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-green-400">{article.category}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300 ml-1">{article.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.views} views
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Help Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse help articles organized by topic to find exactly what you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {category.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer group">
                        <div className="flex-1">
                          <h4 className="text-white font-medium group-hover:text-green-400 transition-colors">{article.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>{article.views} views</span>
                            <span>{article.time}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors" />
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    View All {category.title}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to get help when you need it most.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center hover:border-green-500/50 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    {channel.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{channel.title}</h3>
                  <p className="text-gray-300 mb-6">{channel.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-300">Available: {channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-gray-300">Response: {channel.responseTime}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Get Help
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Can't find what you're looking for? Our support team is here to help you 
                get the most out of Zion Tech Group solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Contact Support Team
                </button>
                <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HelpCenterPage;