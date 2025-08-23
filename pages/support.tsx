import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Headphones, MessageCircle, Book, Video, 
  ArrowRight, Clock, Users, CheckCircle,
  Phone, Mail, MapPin, Globe, Zap
} from 'lucide-react';
import Link from 'next/link';

const Support: React.FC = () => {
  const supportChannels = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Live Support',
      description: 'Get immediate assistance from our expert support team',
      availability: '24/7',
      responseTime: '< 5 minutes',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Real-time chat support for quick questions and issues',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Detailed support requests and documentation',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Direct phone support for urgent issues',
      availability: 'Business Hours',
      responseTime: '< 15 minutes',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const supportCategories = [
    {
      title: 'Technical Support',
      icon: <Zap className="w-6 h-6" />,
      description: 'Help with technical issues and troubleshooting',
      topics: ['Installation', 'Configuration', 'Integration', 'Performance', 'Debugging']
    },
    {
      title: 'Account & Billing',
      icon: <Users className="w-6 h-6" />,
      description: 'Account management and billing inquiries',
      topics: ['Account Setup', 'Billing Questions', 'Subscription Changes', 'Payment Issues']
    },
    {
      title: 'Product Features',
      icon: <Book className="w-6 h-6" />,
      description: 'Learn about product features and capabilities',
      topics: ['Feature Guides', 'Best Practices', 'Use Cases', 'Advanced Features']
    },
    {
      title: 'Training & Onboarding',
      icon: <Video className="w-6 h-6" />,
      description: 'Training resources and onboarding assistance',
      topics: ['Video Tutorials', 'Documentation', 'Webinars', 'Custom Training']
    }
  ];

  const faqs = [
    {
      question: 'How do I get technical support?',
      answer: 'You can reach our technical support team through live chat, email, or phone. For urgent issues, we recommend using live chat or calling our support line.'
    },
    {
      question: 'What are your support hours?',
      answer: 'We provide 24/7 support through live chat and email. Phone support is available during business hours (9 AM - 6 PM EST, Monday-Friday).'
    },
    {
      question: 'How quickly will I get a response?',
      answer: 'Live chat responses are typically under 2 minutes, email responses within 4 hours, and phone support within 15 minutes during business hours.'
    },
    {
      question: 'Do you offer training for new users?',
      answer: 'Yes, we provide comprehensive training including video tutorials, documentation, webinars, and custom training sessions for enterprise clients.'
    },
    {
      question: 'Can I get help with custom integrations?',
      answer: 'Absolutely! Our support team includes integration specialists who can help with custom integrations and API implementations.'
    },
    {
      question: 'What if I need emergency support?',
      answer: 'For emergency issues, use our live chat or call our emergency support line. We have dedicated emergency response procedures for critical issues.'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'support@ziontechgroup.com',
    emergencyEmail: 'emergency@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <Layout
      title="Support - Zion Tech Group"
      description="Get comprehensive support for all Zion Tech Group services. 24/7 assistance, documentation, and expert help."
      keywords="support, technical support, customer service, help desk, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Support
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                24/7 expert support for all your technology needs
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our dedicated support team is here to help you succeed. Get immediate assistance, 
                comprehensive documentation, and expert guidance whenever you need it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Multiple Support Channels
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the support method that works best for you
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mb-4`}>
                    {channel.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-green-400 font-semibold">{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-blue-400 font-semibold">{channel.responseTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Categories */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Support Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive support for all aspects of our services
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {category.topics.map((topic) => (
                      <div key={topic} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{topic}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400">
                Quick answers to common support questions
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Multiple ways to reach our support team
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-3xl border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">General Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">Phone Support</div>
                      <a href={`tel:${contactInfo.phone}`} className="text-purple-400 hover:text-purple-300">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">Email Support</div>
                      <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <span className="text-gray-300 text-sm">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-3xl border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Emergency Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">24/7 Emergency Line</div>
                      <a href={`tel:${contactInfo.phone}`} className="text-blue-400 hover:text-blue-300">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">Emergency Email</div>
                      <a href={`mailto:${contactInfo.emergencyEmail}`} className="text-blue-400 hover:text-blue-300">
                        {contactInfo.emergencyEmail}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">Website</div>
                      <a href={contactInfo.website} className="text-blue-400 hover:text-blue-300">
                        {contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Need Help Right Now?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Our support team is ready to assist you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Call Support Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Contact Form
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Support;