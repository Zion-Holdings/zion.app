import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Globe,
  Zap,
  Brain,
  Shield
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const HelpCenterPage: React.FC = () => {
  const helpCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: <Zap className="w-8 h-8" />,
      articles: ['First Steps', 'Account Setup', 'Basic Configuration', 'Quick Tour'],
      href: '/support/help/getting-started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Platform',
      description: 'Help with AI consciousness and machine learning features',
      icon: <Brain className="w-8 h-8" />,
      articles: ['AI Training', 'Model Configuration', 'Data Management', 'Performance Optimization'],
      href: '/support/help/ai-platform',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing',
      description: 'Support for quantum computing solutions',
      icon: <Shield className="w-8 h-8" />,
      articles: ['Quantum Setup', 'Algorithm Implementation', 'Hardware Requirements', 'Troubleshooting'],
      href: '/support/help/quantum-computing',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'API & Integration',
      description: 'Developer support and integration guides',
      icon: <BookOpen className="w-8 h-8" />,
      articles: ['API Reference', 'SDK Documentation', 'Webhook Setup', 'Authentication'],
      href: '/support/help/api-integration',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Billing & Account',
      description: 'Account management and billing support',
      icon: <Users className="w-8 h-8" />,
      articles: ['Payment Methods', 'Subscription Plans', 'Usage Billing', 'Account Settings'],
      href: '/support/help/billing-account',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: <HelpCircle className="w-8 h-8" />,
      articles: ['Error Messages', 'Performance Issues', 'Connection Problems', 'Data Issues'],
      href: '/support/help/troubleshooting',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const supportOptions = [
    {
      title: 'Knowledge Base',
      description: 'Search our comprehensive documentation',
      icon: <BookOpen className="w-6 h-6" />,
      href: '/resources/documentation'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w-6 h-6" />,
      href: '/support/chat'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: <Phone className="w-6 h-6" />,
      href: '/support/phone'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: <MessageCircle className="w-6 h-6" />,
      href: '/support/email'
    }
  ];

  const stats = [
    { label: 'Help Articles', value: '500+', icon: <BookOpen className="w-6 h-6" /> },
    { label: 'Support Team', value: '50+', icon: <Users className="w-6 h-6" /> },
    { label: 'Response Time', value: '< 2h', icon: <Clock className="w-6 h-6" /> },
    { label: 'Satisfaction', value: '98%', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Help Center - Zion Tech Group | Get Support and Find Answers" 
          description="Get help and support for Zion Tech Group's technology solutions. Access our knowledge base, contact support, and find answers to common questions." 
          canonical="https://ziontechgroup.com/support/help/" 
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
              Help Center
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find answers, get support, and learn how to make the most of our technology solutions.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, and more..."
                  className="w-full px-12 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </motion.div>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">How Can We Help?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support option that works best for you. We're here to help 24/7.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {supportOptions.map((option, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                  <p className="text-gray-400 mb-4">{option.description}</p>
                  <a
                    href={option.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Help Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse our help articles organized by category to find the information you need quickly.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {helpCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className={`flex justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{category.title}</h3>
                  <p className="text-gray-400 text-center mb-6">{category.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Popular Articles:</h4>
                    {category.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {article}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <a
                      href={category.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Browse Articles <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 mb-8">
                Quick answers to the most common questions.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">How do I get started with Zion Tech Group's solutions?</h3>
                <p className="text-gray-400">Getting started is easy! Simply sign up for an account, choose your plan, and follow our step-by-step setup guide. Our team is also available to help with onboarding.</p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">What kind of support do you offer?</h3>
                <p className="text-gray-400">We offer comprehensive support including 24/7 live chat, phone support, email support, extensive documentation, and dedicated account managers for enterprise clients.</p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">How quickly do you respond to support requests?</h3>
                <p className="text-gray-400">We typically respond to support requests within 2 hours. Critical issues are addressed immediately, and we provide regular updates until resolution.</p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">Do you offer training for your solutions?</h3>
                <p className="text-gray-400">Yes! We offer comprehensive training programs including webinars, documentation, video tutorials, and personalized training sessions for enterprise clients.</p>
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
              <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help you get the answers you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="/support/chat"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Start Live Chat
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default HelpCenterPage;