import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, Phone, Mail, Clock, Search, BookOpen, FileText, Video, Users, Ticket, ArrowRight, CheckCircle, AlertCircle, Info } from 'lucide-react';
import Layout from '../components/layout/Layout';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

interface SupportTicket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: string;
  createdAt: string;
  updatedAt: string;
}

interface KnowledgeArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  readTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const faqData: FAQ[] = [
  {
    id: '1',
    question: 'How do I get started with Zion Tech Group services?',
    answer: 'Getting started is easy! Simply contact our team through our contact form, email us directly, or call us. We\'ll schedule a consultation to understand your needs and provide a customized solution.',
    category: 'Getting Started',
    tags: ['onboarding', 'consultation', 'setup']
  },
  {
    id: '2',
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in AI & Machine Learning, Quantum Computing, Space Technology, Cybersecurity, Cloud Infrastructure, and Micro SAAS platforms. Our expertise covers both cutting-edge research and practical enterprise implementation.',
    category: 'Services',
    tags: ['AI', 'quantum', 'space', 'cybersecurity', 'cloud', 'saas']
  },
  {
    id: '3',
    question: 'Do you provide 24/7 support?',
    answer: 'Yes, we offer 24/7 support for critical issues and enterprise clients. Our support team is available around the clock to ensure your systems remain operational and secure.',
    category: 'Support',
    tags: ['24/7', 'enterprise', 'critical', 'availability']
  },
  {
    id: '4',
    question: 'How do you handle data security and privacy?',
    answer: 'We implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with international data protection regulations.',
    category: 'Security',
    tags: ['encryption', 'authentication', 'compliance', 'audits']
  },
  {
    id: '5',
    question: 'What is your pricing structure?',
    answer: 'Our pricing is customized based on your specific requirements, project scope, and service level. We offer flexible engagement models including project-based, retainer, and managed services.',
    category: 'Pricing',
    tags: ['custom', 'flexible', 'project-based', 'retainer']
  },
  {
    id: '6',
    question: 'Do you provide training and documentation?',
    answer: 'Absolutely! We provide comprehensive training programs, detailed documentation, video tutorials, and ongoing support to ensure your team can effectively use our solutions.',
    category: 'Training',
    tags: ['training', 'documentation', 'tutorials', 'support']
  }
];

const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: '1',
    title: 'Getting Started with AI Implementation',
    description: 'A comprehensive guide to implementing AI solutions in your organization, from initial assessment to full deployment.',
    category: 'AI & Machine Learning',
    tags: ['AI', 'implementation', 'guide', 'deployment'],
    readTime: '15 min',
    difficulty: 'beginner'
  },
  {
    id: '2',
    title: 'Quantum Computing Fundamentals',
    description: 'Learn the basics of quantum computing, including qubits, superposition, and quantum algorithms.',
    category: 'Quantum Computing',
    tags: ['quantum', 'fundamentals', 'qubits', 'algorithms'],
    readTime: '20 min',
    difficulty: 'intermediate'
  },
  {
    id: '3',
    title: 'Cybersecurity Best Practices',
    description: 'Essential cybersecurity practices to protect your organization from modern threats.',
    category: 'Cybersecurity',
    tags: ['security', 'best practices', 'threats', 'protection'],
    readTime: '12 min',
    difficulty: 'beginner'
  },
  {
    id: '4',
    title: 'Cloud Migration Strategies',
    description: 'Strategic approaches to migrating your infrastructure to the cloud with minimal disruption.',
    category: 'Cloud Infrastructure',
    tags: ['cloud', 'migration', 'strategy', 'infrastructure'],
    readTime: '18 min',
    difficulty: 'intermediate'
  }
];

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState<'help' | 'contact' | 'faq' | 'knowledge'>('help');

  const categories = ['All', 'Getting Started', 'Services', 'Support', 'Security', 'Pricing', 'Training'];

  const filteredFAQ = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const filteredKnowledge = knowledgeArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Support Center
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're here to help you succeed. Get the support you need 
                through our comprehensive help center and expert team.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5 text-cyan-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <span>Knowledge Base</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-pink-400" />
                  <span>Expert Team</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Get Help Fast
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Multiple ways to reach our support team and get the assistance you need
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Phone Support</h3>
                  <p className="text-gray-300 mb-6">
                    Speak directly with our technical experts for immediate assistance
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>24/7 Available</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">
                      +1 (555) 123-4567
                    </div>
                  </div>
                  <button className="w-full bg-cyan-400 text-black font-semibold py-3 px-6 rounded-xl hover:bg-cyan-300 transition-all duration-300">
                    Call Now
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/20"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Email Support</h3>
                  <p className="text-gray-300 mb-6">
                    Send us detailed information and get comprehensive responses
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Response within 4 hours</span>
                    </div>
                    <div className="text-lg font-bold text-purple-400">
                      support@ziontechgroup.com
                    </div>
                  </div>
                  <button className="w-full bg-purple-400 text-black font-semibold py-3 px-6 rounded-xl hover:bg-purple-300 transition-all duration-300">
                    Send Email
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-pink-900/50 to-pink-800/50 rounded-2xl p-8 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-400/20"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Live Chat</h3>
                  <p className="text-gray-300 mb-6">
                    Chat with our support team in real-time for quick questions
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Business Hours</span>
                    </div>
                    <div className="text-lg font-bold text-pink-400">
                      Available Now
                    </div>
                  </div>
                  <button className="w-full bg-pink-400 text-black font-semibold py-3 px-6 rounded-xl hover:bg-pink-300 transition-all duration-300">
                    Start Chat
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support Tabs */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-800/50 rounded-2xl p-2 border border-gray-700/50">
                <button
                  onClick={() => setActiveTab('help')}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'help'
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Help Center
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'contact'
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Contact
                </button>
                <button
                  onClick={() => setActiveTab('faq')}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'faq'
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  FAQ
                </button>
                <button
                  onClick={() => setActiveTab('knowledge')}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'knowledge'
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Knowledge Base
                </button>
              </div>
            </div>

            {/* Help Center Tab */}
            {activeTab === 'help' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">How can we help you?</h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Search our knowledge base, browse common questions, or create a support ticket for personalized assistance.
                </p>
                
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for help articles, FAQs, or solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Documentation</h4>
                    <p className="text-sm text-gray-400">Comprehensive guides and technical documentation</p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-purple-400/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Video className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Video Tutorials</h4>
                    <p className="text-sm text-gray-400">Step-by-step video guides and walkthroughs</p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-pink-400/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-pink-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Ticket className="w-6 h-6 text-pink-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Support Tickets</h4>
                    <p className="text-sm text-gray-400">Create and track support requests</p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-green-400/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-green-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Community</h4>
                    <p className="text-sm text-gray-400">Connect with other users and experts</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-white">Contact Our Support Team</h3>
                <p className="text-gray-400 mb-8 text-center">
                  Need personalized assistance? Our expert team is ready to help you succeed.
                </p>
                
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone (Optional)</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                        placeholder="Brief description of your issue"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                        placeholder="Please describe your issue or question in detail..."
                      ></textarea>
                    </div>
                    
                    <div className="text-center">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold py-4 px-8 rounded-xl hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Frequently Asked Questions</h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Find quick answers to common questions. Can't find what you're looking for? Contact our support team.
                  </p>
                </div>

                <div className="max-w-4xl mx-auto mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Search FAQ</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search questions..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                      >
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 max-w-4xl mx-auto">
                  {filteredFAQ.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/40 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <HelpCircle className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-2">{faq.question}</h4>
                          <p className="text-gray-300">{faq.answer}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {faq.tags.map(tag => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Knowledge Base Tab */}
            {activeTab === 'knowledge' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Knowledge Base</h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Comprehensive guides, tutorials, and resources to help you master our technologies.
                  </p>
                </div>

                <div className="max-w-4xl mx-auto mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Search Articles</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search knowledge base..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                      >
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {filteredKnowledge.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10"
                    >
                      <div className="mb-4">
                        <span className="inline-block bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          {article.category}
                        </span>
                        <h4 className="font-semibold text-white mb-2">{article.title}</h4>
                        <p className="text-gray-300 text-sm mb-4">{article.description}</p>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          article.difficulty === 'beginner' ? 'bg-green-400/20 text-green-400' :
                          article.difficulty === 'intermediate' ? 'bg-yellow-400/20 text-yellow-400' :
                          'bg-red-400/20 text-red-400'
                        }`}>
                          {article.difficulty}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold py-2 px-4 rounded-xl hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 flex items-center justify-center">
                        <FileText className="w-4 h-4 mr-2" />
                        Read Article
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Still Need Help?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our support team is ready to assist you with any questions or technical challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold rounded-xl hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Create Ticket
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SupportPage;