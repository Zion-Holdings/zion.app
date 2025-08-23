import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Headphones, MessageCircle, BookOpen, Video, FileText, 
  Search, Clock, Star, Users, Globe, Zap, Shield 
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportChannels = [
    {
      title: "24/7 Live Chat",
      description: "Get instant help from our support team",
      icon: <MessageCircle className="w-8 h-8" />,
      availability: "Available 24/7",
      responseTime: "Instant",
      priority: "High"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: <Headphones className="w-8 h-8" />,
      availability: "Mon-Fri 8AM-8PM EST",
      responseTime: "< 5 minutes",
      priority: "High"
    },
    {
      title: "Email Support",
      description: "Detailed technical assistance via email",
      icon: <FileText className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "< 4 hours",
      priority: "Medium"
    },
    {
      title: "Video Call",
      description: "Screen sharing and visual troubleshooting",
      icon: <Video className="w-8 h-8" />,
      availability: "By appointment",
      responseTime: "Scheduled",
      priority: "High"
    }
  ];

  const helpCategories = [
    {
      title: "Getting Started",
      description: "Quick start guides and onboarding",
      icon: <Zap className="w-6 h-6" />,
      articles: 15,
      popular: true
    },
    {
      title: "Technical Documentation",
      description: "Comprehensive API and integration guides",
      icon: <BookOpen className="w-6 h-6" />,
      articles: 45,
      popular: true
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      icon: <Search className="w-6 h-6" />,
      articles: 32,
      popular: false
    },
    {
      title: "Best Practices",
      description: "Optimization and performance tips",
      icon: <Star className="w-6 h-6" />,
      articles: 28,
      popular: true
    },
    {
      title: "Security & Compliance",
      description: "Security guidelines and compliance info",
      icon: <Shield className="w-6 h-6" />,
      articles: 18,
      popular: false
    },
    {
      title: "Integration Guides",
      description: "Step-by-step integration tutorials",
      icon: <Globe className="w-6 h-6" />,
      articles: 25,
      popular: false
    }
  ];

  const faqItems = [
    {
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and create a customized implementation plan."
    },
    {
      question: "What kind of support do you provide during implementation?",
      answer: "We provide comprehensive support throughout the entire implementation process, including dedicated project managers, technical consultants, training sessions, and ongoing support to ensure successful deployment."
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes! We provide comprehensive training programs for your team, including hands-on workshops, documentation, video tutorials, and ongoing support to ensure your team is confident using our solutions."
    },
    {
      question: "What are your response times for support requests?",
      answer: "Our response times vary by priority: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), and Low priority (48 hours). We're committed to resolving issues quickly."
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes, we offer 24/7 support for critical issues and enterprise customers. Our support team is available around the clock to ensure your systems remain operational and secure."
    }
  ];

  const supportStats = [
    { metric: "99.9%", label: "Uptime Guarantee" },
    { metric: "< 4hrs", label: "Average Response Time" },
    { metric: "24/7", label: "Support Availability" },
    { metric: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <Layout 
      title="Support - Zion Tech Group"
      description="Get comprehensive support for all Zion Tech Group services. 24/7 assistance, documentation, and expert guidance to ensure your success."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Support Center
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Expert support and guidance for all your Zion Tech Group needs. Our dedicated team is here 
                to ensure your success with our revolutionary technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Support Now
                </a>
                <a
                  href="#documentation"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Browse Documentation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {supportStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Multiple Support Channels</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the support method that works best for you. We're here to help through 
                multiple channels, ensuring you get the assistance you need when you need it.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                      {channel.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{channel.title}</h3>
                      <p className="text-gray-400">{channel.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-1">Availability</div>
                      <div className="text-sm font-medium">{channel.availability}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-1">Response</div>
                      <div className="text-sm font-medium">{channel.responseTime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-1">Priority</div>
                      <div className="text-sm font-medium">{channel.priority}</div>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Get {channel.title}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" id="documentation">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Help & Documentation</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive resources to help you succeed with our technology solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg mr-3">
                      <div className="text-cyan-400">
                        {category.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      {category.popular && (
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.articles} articles</span>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                      Browse →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-400">
                Quick answers to common questions about our services and support
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                    {item.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Still Need Help?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Our support team is ready to assist you with any questions or technical issues. 
                Don't hesitate to reach out—we're here to help you succeed.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                  <p className="text-gray-400">Round-the-clock support for critical issues</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-400">Certified professionals ready to help</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Secure Support</h3>
                  <p className="text-gray-400">Safe and confidential assistance</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support Team
                </a>
                <a
                  href="tel:+1-800-ZION-TECH"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SupportPage;