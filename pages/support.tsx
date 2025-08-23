import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  HelpCircle, MessageCircle, Phone, Mail, 
  BookOpen, Video, FileText, ArrowRight, 
  Search, Filter, CheckCircle, Clock, Star,
  Brain, Rocket, Shield, Zap, Target, Atom,
  Users, Globe, Building, Cpu, Database
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', name: 'All Topics', icon: <HelpCircle className="w-5 h-5" />, count: 45 },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 12 },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" />, count: 8 },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: <Cpu className="w-5 h-5" />, count: 10 },
    { id: 'automation', name: 'Business Automation', icon: <Zap className="w-5 h-5" />, count: 7 },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 8 }
  ];

  const faqItems = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is simple! Contact our team through the contact form or call us directly. We\'ll schedule a consultation to understand your needs and create a customized implementation plan.',
      category: 'ai',
      tags: ['Getting Started', 'AI Services', 'Implementation']
    },
    {
      question: 'What is the typical implementation timeline for quantum computing solutions?',
      answer: 'Implementation timelines vary based on complexity and scope. Simple integrations can take 2-4 weeks, while comprehensive enterprise solutions typically require 3-6 months. We provide detailed project timelines during the planning phase.',
      category: 'quantum',
      tags: ['Timeline', 'Quantum Computing', 'Implementation']
    },
    {
      question: 'Do you provide 24/7 support for enterprise clients?',
      answer: 'Yes! Enterprise clients receive 24/7 support with dedicated account managers, priority response times, and round-the-clock technical assistance. We also offer custom SLA agreements to meet your specific requirements.',
      category: 'infrastructure',
      tags: ['Enterprise', '24/7 Support', 'SLA']
    },
    {
      question: 'How do you ensure data security and compliance?',
      answer: 'We implement enterprise-grade security measures including end-to-end encryption, SOC2 compliance, GDPR adherence, and regular security audits. All data is processed in secure, compliant environments with strict access controls.',
      category: 'security',
      tags: ['Security', 'Compliance', 'Data Protection']
    },
    {
      question: 'Can I integrate your solutions with existing systems?',
      answer: 'Absolutely! Our solutions are designed for seamless integration with existing enterprise systems. We provide comprehensive API documentation, integration guides, and dedicated support to ensure smooth deployment.',
      category: 'automation',
      tags: ['Integration', 'API', 'Enterprise Systems']
    },
    {
      question: 'What training and documentation do you provide?',
      answer: 'We offer comprehensive training programs, detailed documentation, video tutorials, and hands-on workshops. Our team ensures your staff is fully equipped to maximize the value of our solutions.',
      category: 'ai',
      tags: ['Training', 'Documentation', 'Workshops']
    }
  ];

  const supportChannels = [
    {
      icon: <MessageCircle className="w-12 h-12 text-cyan-400" />,
      title: 'Live Chat Support',
      description: 'Get instant help from our technical experts',
      availability: '24/7',
      responseTime: 'Immediate',
      priority: 'High'
    },
    {
      icon: <Phone className="w-12 h-12 text-green-400" />,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      availability: '9 AM - 6 PM EST',
      responseTime: '< 5 minutes',
      priority: 'High'
    },
    {
      icon: <Mail className="w-12 h-12 text-purple-400" />,
      title: 'Email Support',
      description: 'Detailed technical assistance via email',
      availability: '24/7',
      responseTime: '< 4 hours',
      priority: 'Medium'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-orange-400" />,
      title: 'Knowledge Base',
      description: 'Self-service documentation and guides',
      availability: '24/7',
      responseTime: 'Immediate',
      priority: 'Self-Service'
    }
  ];

  const resources = [
    {
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      title: 'API Documentation',
      description: 'Comprehensive API reference and integration guides',
      category: 'Technical',
      link: '/docs/api'
    },
    {
      icon: <Video className="w-8 h-8 text-purple-400" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      category: 'Learning',
      link: '/tutorials'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
      title: 'User Manuals',
      description: 'Detailed user guides and best practices',
      category: 'Reference',
      link: '/manuals'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'Community Forum',
      description: 'Connect with other users and share experiences',
      category: 'Community',
      link: '/community'
    }
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <main className="relative z-10 pt-8">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Support Center
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the help you need with our comprehensive support resources and expert assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact-support"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Get Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#knowledge-base"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Browse Resources
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-300">
                Multiple support channels to meet your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-cyan-400">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-green-400">{channel.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Priority:</span>
                      <span className="text-purple-400">{channel.priority}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help topics, questions, or solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {supportCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                    <span className="text-sm text-gray-400">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="knowledge-base" className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Quick answers to common questions and solutions
              </p>
            </motion.div>

            {filteredFAQs.length === 0 ? (
              <div className="text-center py-20">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">No results found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 mb-4">{faq.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Support Resources */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Support Resources
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive documentation and learning materials
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                      {resource.category}
                    </span>
                    <a
                      href={resource.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Access
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section id="contact-support" className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our expert support team is ready to assist you with any questions or technical issues
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Emergency Support</h3>
                <p className="text-gray-300 mb-4">
                  For critical issues affecting production systems, contact our emergency support line:
                </p>
                <div className="text-2xl font-bold text-cyan-400">+1 (302) 464-0950</div>
                <p className="text-sm text-gray-400 mt-2">Available 24/7 for enterprise clients</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default SupportPage;