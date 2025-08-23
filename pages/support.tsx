import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, MessageCircle, BookOpen, Video, Phone, Mail, Clock, Star, Zap, Shield, Users, Globe } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Support: React.FC = () => {
  const supportChannels = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our AI-powered support team',
      icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
      availability: '24/7',
      responseTime: '< 2 minutes',
      priority: 'high'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: <Phone className="w-8 h-8 text-green-400" />,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      priority: 'high'
    },
    {
      title: 'Email Support',
      description: 'Send detailed inquiries for complex issues',
      icon: <Mail className="w-8 h-8 text-purple-400" />,
      availability: '24/7',
      responseTime: '< 4 hours',
      priority: 'medium'
    },
    {
      title: 'Video Call Support',
      description: 'Screen sharing and visual troubleshooting',
      icon: <Video className="w-8 h-8 text-yellow-400" />,
      availability: 'By appointment',
      responseTime: 'Scheduled',
      priority: 'medium'
    }
  ];

  const helpCategories = [
    {
      title: 'Getting Started',
      description: 'New user guides and setup instructions',
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      articles: 15,
      popular: ['First Steps', 'Account Setup', 'Quick Tour']
    },
    {
      title: 'AI Consciousness',
      description: 'Understanding and using AI consciousness features',
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      articles: 23,
      popular: ['Consciousness Training', 'Ethics Guidelines', 'Best Practices']
    },
    {
      title: 'Quantum Technology',
      description: 'Quantum computing and integration guides',
      icon: <Globe className="w-6 h-6 text-green-400" />,
      articles: 18,
      popular: ['Quantum Basics', 'Integration', 'Performance']
    },
    {
      title: 'Technical Issues',
      description: 'Troubleshooting and technical support',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      articles: 31,
      popular: ['Error Codes', 'Performance Issues', 'API Problems']
    },
    {
      title: 'Account & Billing',
      description: 'Account management and billing support',
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      articles: 12,
      popular: ['Billing Questions', 'Account Settings', 'Subscription']
    },
    {
      title: 'API & Integration',
      description: 'Developer resources and API documentation',
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
      articles: 27,
      popular: ['API Reference', 'SDK Downloads', 'Examples']
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with AI consciousness training?',
      answer: 'Start with our AI Consciousness Fundamentals course, which covers the basics of consciousness training, ethical principles, and hands-on exercises. You can enroll through our training portal or contact our support team for personalized guidance.'
    },
    {
      question: 'What are the system requirements for quantum AI integration?',
      answer: 'Our quantum AI services require a minimum of 16GB RAM, multi-core processor, and stable internet connection. For optimal performance, we recommend 32GB RAM and dedicated GPU support. Check our technical specifications page for detailed requirements.'
    },
    {
      question: 'How can I report a bug or technical issue?',
      answer: 'You can report issues through our support portal, live chat, or email support. Please include detailed information about the problem, steps to reproduce, and any error messages. Our technical team typically responds within 4 hours.'
    },
    {
      question: 'What security measures protect my data?',
      answer: 'We implement enterprise-grade security including end-to-end encryption, SOC 2 compliance, regular security audits, and strict access controls. All data is encrypted both in transit and at rest, with regular backups and disaster recovery procedures.'
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'We offer a 30-day money-back guarantee for all our services. If you\'re not completely satisfied within the first 30 days, contact our support team for a full refund. Enterprise contracts may have different terms outlined in the agreement.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm mb-6">
                <Headphones className="w-4 h-4 mr-2" />
                24/7 Support Available
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Support Center
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Get expert help whenever you need it. Our AI-powered support team 
                and comprehensive resources are here to assist you 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Live Chat
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Contact Support
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Channels Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How Can We Help You?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from multiple support channels based on your needs and urgency.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="mb-4">{channel.icon}</div>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      channel.priority === 'high' 
                        ? 'bg-red-500/20 text-red-300' 
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {channel.priority === 'high' ? 'Priority' : 'Standard'}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 mb-6">{channel.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 text-sm">
                        <span className="text-gray-400">Availability:</span> {channel.availability}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 text-sm">
                        <span className="text-gray-400">Response:</span> {channel.responseTime}
                      </span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Help Now
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Help & Documentation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive guides, tutorials, and resources to help you succeed.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">
                      {category.articles} articles available
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Popular Topics:</h4>
                    <div className="space-y-1">
                      {category.popular.map((topic, topicIndex) => (
                        <div key={topicIndex} className="text-xs text-gray-400">
                          • {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-sm"
                  >
                    Browse Articles
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Quick answers to common questions about our services and support.
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our support team is ready to assist you with any questions or issues.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 text-sm">+1 302 464 0950</p>
                  <p className="text-gray-400 text-xs">Mon-Fri 9AM-6PM EST</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400 text-xs">Response within 4 hours</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                  <p className="text-gray-300 text-sm">Available 24/7</p>
                  <p className="text-gray-400 text-xs">Instant response</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Support Now
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Support;