import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, MessageCircle, Phone, Mail, Clock, 
  BookOpen, Video, FileText, Search, Filter,
  CheckCircle, ArrowRight, Brain, Atom, Rocket, 
  Shield, Zap, Users, Star, TrendingUp, Code
} from 'lucide-react';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      description: 'Support for AI consciousness and autonomous systems',
      articles: 25
    },
    {
      id: 'quantum-solutions',
      name: 'Quantum Solutions',
      icon: <Atom className="w-8 h-8 text-purple-400" />,
      description: 'Help with quantum computing and cryptography',
      articles: 18
    },
    {
      id: 'autonomous-systems',
      name: 'Autonomous Systems',
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      description: 'Support for self-managing business operations',
      articles: 32
    },
    {
      id: 'enterprise-it',
      name: 'Enterprise IT',
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      description: 'Infrastructure and security support',
      articles: 28
    },
    {
      id: 'billing',
      name: 'Billing & Account',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      description: 'Payment, invoices, and account management',
      articles: 15
    },
    {
      id: 'technical',
      name: 'Technical Issues',
      icon: <Code className="w-8 h-8 text-orange-400" />,
      description: 'Bug reports and technical troubleshooting',
      articles: 42
    }
  ];

  const quickActions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
      action: 'Start Chat',
      color: 'from-cyan-500 to-blue-600',
      available: true
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: <Phone className="w-8 h-8 text-green-400" />,
      action: 'Call Now',
      color: 'from-green-500 to-emerald-600',
      available: true
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: <Mail className="w-8 h-8 text-purple-400" />,
      action: 'Send Email',
      color: 'from-purple-500 to-pink-600',
      available: true
    },
    {
      title: 'Video Call',
      description: 'Screen share and visual assistance',
      icon: <Video className="w-8 h-8 text-orange-400" />,
      action: 'Schedule Call',
      color: 'from-orange-500 to-red-600',
      available: true
    }
  ];

  const popularArticles = [
    {
      title: 'Getting Started with AI Consciousness Platform',
      category: 'AI Services',
      readTime: '5 min read',
      views: '2.4k',
      helpful: '98%'
    },
    {
      title: 'Setting Up Quantum-Secure Infrastructure',
      category: 'Quantum Solutions',
      readTime: '8 min read',
      views: '1.8k',
      helpful: '95%'
    },
    {
      title: 'Troubleshooting Autonomous System Errors',
      category: 'Autonomous Systems',
      readTime: '6 min read',
      views: '3.1k',
      helpful: '92%'
    },
    {
      title: 'API Integration Best Practices',
      category: 'Technical Issues',
      readTime: '7 min read',
      views: '4.2k',
      helpful: '96%'
    },
    {
      title: 'Understanding Your Invoice and Billing',
      category: 'Billing & Account',
      readTime: '3 min read',
      views: '1.5k',
      helpful: '89%'
    }
  ];

  const supportHours = [
    {
      day: 'Monday - Friday',
      hours: '9:00 AM - 8:00 PM EST',
      status: 'Available'
    },
    {
      day: 'Saturday',
      hours: '10:00 AM - 6:00 PM EST',
      status: 'Available'
    },
    {
      day: 'Sunday',
      hours: '12:00 PM - 6:00 PM EST',
      status: 'Limited'
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? supportCategories 
    : supportCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Get the support you need for our AI consciousness, quantum computing, 
              and autonomous systems. Our expert team is here to help 24/7.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <HelpCircle className="w-6 h-6" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Users className="w-6 h-6" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-6 h-6" />
                <span>Quick Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get Help Fast
            </h2>
            <p className="text-xl text-gray-400">Choose your preferred support method</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {action.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{action.title}</h3>
                  <p className="text-gray-300 mb-4 text-center leading-relaxed">{action.description}</p>
                  
                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${action.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>
                    {action.action}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Browse Help Categories
            </h2>
            <p className="text-xl text-gray-400">Find solutions organized by topic and service area</p>
          </motion.div>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                All Categories
              </button>
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <span className="text-sm text-gray-400">{category.articles} articles</span>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Browse</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-400">Most viewed and helpful support content</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {article.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {article.helpful} helpful
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Read</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours & Contact */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Support Hours & Availability
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our expert support team is available to help you succeed with our 
                revolutionary technology solutions.
              </p>
              
              <div className="space-y-4">
                {supportHours.map((schedule, index) => (
                  <div key={schedule.day} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                    <div>
                      <h3 className="font-semibold text-white">{schedule.day}</h3>
                      <p className="text-gray-400">{schedule.hours}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      schedule.status === 'Available' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {schedule.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Need Immediate Help?</h3>
                <p className="text-gray-300 mb-6">
                  For urgent technical issues or critical support needs, 
                  our team is available around the clock.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-white">support@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Live Chat Available</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-cyan-500/20">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    Contact Support
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is dedicated to ensuring your success with our 
              revolutionary technology solutions. Don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Get Support
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/resources"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Browse Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}