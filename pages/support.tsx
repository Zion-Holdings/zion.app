import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  HelpCircle, 
  BookOpen,
  Video,
  Users,
  FileText,
  Zap,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Download,
  Calendar,
  Star,
  MessageSquare,
  Headphones,
  Settings,
  Shield,
  Rocket,
  Brain,
  Atom
} from 'lucide-react';
import Link from 'next/link';

export default function Support() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', count: 45, icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & Consciousness', count: 12, icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', count: 8, icon: <Atom className="w-5 h-5" /> },
    { id: 'security', name: 'Cybersecurity', count: 10, icon: <Shield className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud & DevOps', count: 8, icon: <Rocket className="w-5 h-5" /> },
    { id: 'general', name: 'General Support', count: 7, icon: <Settings className="w-5 h-5" /> }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with AI consciousness development?',
      answer: 'Start with our AI Consciousness Fundamentals course and follow the learning path. Our team can also provide personalized guidance based on your specific needs.',
      category: 'ai',
      tags: ['getting-started', 'ai', 'consciousness']
    },
    {
      id: 2,
      question: 'What quantum computing resources are available for beginners?',
      answer: 'We offer quantum computing workshops, online courses, and hands-on lab access. Contact our quantum team for a customized learning plan.',
      category: 'quantum',
      tags: ['quantum', 'beginners', 'learning']
    },
    {
      id: 3,
      question: 'How can I implement zero trust security in my organization?',
      answer: 'Our cybersecurity team provides assessment, planning, and implementation services. We offer both consulting and hands-on support.',
      category: 'security',
      tags: ['security', 'zero-trust', 'implementation']
    },
    {
      id: 4,
      question: 'What cloud migration support do you provide?',
      answer: 'We offer end-to-end cloud migration services including assessment, planning, migration, and optimization across all major cloud providers.',
      category: 'cloud',
      tags: ['cloud', 'migration', 'aws', 'azure', 'gcp']
    },
    {
      id: 5,
      question: 'How do I schedule a consultation with your team?',
      answer: 'You can schedule a consultation through our contact form, by calling +1 302 464 0950, or by emailing us at support@ziontechgroup.com.',
      category: 'general',
      tags: ['consultation', 'scheduling', 'contact']
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w-8 h-8" />,
      availability: '24/7',
      responseTime: '< 2 minutes',
      priority: 'high'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: <Phone className="w-8 h-8" />,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      priority: 'high'
    },
    {
      name: 'Email Support',
      description: 'Detailed technical assistance',
      icon: <Mail className="w-8 h-8" />,
      availability: '24/7',
      responseTime: '< 4 hours',
      priority: 'medium'
    },
    {
      name: 'Documentation',
      description: 'Self-service resources and guides',
      icon: <BookOpen className="w-8 h-8" />,
      availability: '24/7',
      responseTime: 'Instant',
      priority: 'low'
    }
  ];

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Complete setup and configuration guide',
      type: 'PDF Guide',
      category: 'Documentation',
      downloadUrl: '/docs/getting-started.pdf'
    },
    {
      title: 'API Reference',
      description: 'Comprehensive API documentation',
      type: 'Interactive Docs',
      category: 'Technical',
      downloadUrl: '/docs/api-reference'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      type: 'Video Series',
      category: 'Learning',
      downloadUrl: '/tutorials'
    },
    {
      title: 'Best Practices',
      description: 'Industry best practices and guidelines',
      type: 'Whitepaper',
      category: 'Guidance',
      downloadUrl: '/docs/best-practices.pdf'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Support Center
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Get the help you need with our comprehensive support resources, 
              expert assistance, and self-service tools.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="text-white/70 text-sm">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">How Can We Help?</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose the support channel that works best for you. Our team is here to help 24/7.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{channel.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{channel.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/60">Availability:</span>
                      <span className="text-white">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Response:</span>
                      <span className="text-white">{channel.responseTime}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    {channel.name === 'Live Chat' && (
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                        Start Chat
                      </button>
                    )}
                    {channel.name === 'Phone Support' && (
                      <a href="tel:+13024640950" className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 inline-block text-center">
                        Call Now
                      </a>
                    )}
                    {channel.name === 'Email Support' && (
                      <a href="mailto:support@ziontechgroup.com" className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 inline-block text-center">
                        Send Email
                      </a>
                    )}
                    {channel.name === 'Documentation' && (
                      <Link href="/docs" className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 inline-block text-center">
                        Browse Docs
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Find quick answers to common questions about our services and solutions.
            </p>
          </motion.div>

          {filteredFaqs.length > 0 ? (
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70 mb-4">{faq.answer}</p>
                  <div className="flex flex-wrap gap-2">
                    {faq.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-12"
            >
              <p className="text-white/70 text-lg">No FAQs found matching your search.</p>
              <p className="text-white/50 text-sm mt-2">Try adjusting your search terms or contact us directly.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Support Resources</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Access comprehensive documentation, guides, and learning materials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">{resource.category}</span>
                    <a
                      href={resource.downloadUrl}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <Download className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Our support team is ready to assist you with any questions or technical issues.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-white/70 mb-2">+1 302 464 0950</p>
                <p className="text-white/50 text-sm">Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div className="text-center">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-white/70 mb-2">support@ziontechgroup.com</p>
                <p className="text-white/50 text-sm">Response within 4 hours</p>
              </div>
              
              <div className="text-center">
                <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Office Location</h3>
                <p className="text-white/70 mb-2">Wilmington, DE</p>
                <p className="text-white/50 text-sm">Available for in-person meetings</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Contact Support Team
              </Link>
              <Link href="/docs" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                Browse Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}