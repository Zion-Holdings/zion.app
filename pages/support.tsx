import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  HelpCircle, 
  Users, 
  Mail, 
  Phone, 
  MessageCircle, 
  Search, 
  ArrowRight,
  FileText,
  Video,
  Code,
  Shield,
  Zap,
  Clock,
  Star,
  CheckCircle
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Documentation',
      description: 'Comprehensive guides and API references for all our services.',
      href: '/docs',
      color: 'from-blue-500 to-cyan-500',
      features: ['API Reference', 'Integration Guides', 'Best Practices', 'Code Examples']
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'FAQ',
      description: 'Find answers to commonly asked questions about our platform.',
      href: '#faq',
      color: 'from-green-500 to-emerald-500',
      features: ['Common Questions', 'Troubleshooting', 'Platform Usage', 'Account Management']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Join our community forum to connect with other developers.',
      href: '/community',
      color: 'from-purple-500 to-pink-500',
      features: ['Developer Forum', 'Knowledge Sharing', 'Peer Support', 'Expert Discussions']
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Contact Support',
      description: 'Get in touch with our technical support team.',
      href: '/contact',
      color: 'from-orange-500 to-red-500',
      features: ['Technical Support', 'Priority Support', 'Custom Solutions', 'Emergency Response']
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our step-by-step onboarding guide. Our team is also available to help with custom implementations.',
      category: 'getting-started'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive technical support including documentation, tutorials, community forums, and direct support from our engineering team. Premium plans include priority support.',
      category: 'support'
    },
    {
      question: 'How secure is your platform?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, regular security audits, and compliance with industry standards.',
      category: 'security'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Yes! Our platform is designed for easy integration with existing systems through our comprehensive API and webhook system. We support most major platforms and technologies.',
      category: 'integration'
    },
    {
      question: 'What are your service level agreements (SLAs)?',
      answer: 'We offer competitive SLAs with 99.9% uptime guarantees for most services. Enterprise customers can access custom SLAs with higher availability guarantees.',
      category: 'sla'
    },
    {
      question: 'Do you provide training and certification?',
      answer: 'Yes, we offer comprehensive training programs and certifications for all our platforms. This includes instructor-led training, self-paced courses, and certification exams.',
      category: 'training'
    }
  ];

  const supportChannels = [
    {
      title: '24/7 Technical Support',
      description: 'Round-the-clock technical assistance for critical issues',
      icon: <Clock className="w-6 h-6" />,
      availability: '24/7',
      responseTime: '< 1 hour'
    },
    {
      title: 'Priority Support',
      description: 'Expedited support for enterprise customers',
      icon: <Star className="w-6 h-6" />,
      availability: 'Business Hours',
      responseTime: '< 4 hours'
    },
    {
      title: 'Community Support',
      description: 'Peer-to-peer support through our developer community',
      icon: <Users className="w-6 h-6" />,
      availability: 'Always',
      responseTime: 'Varies'
    },
    {
      title: 'Documentation & Self-Service',
      description: 'Comprehensive guides and resources for self-help',
      icon: <BookOpen className="w-6 h-6" />,
      availability: 'Always',
      responseTime: 'Immediate'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <SEO 
        title="Support Center - Zion Tech Group"
        description="Get comprehensive support for Zion Tech Group services including documentation, FAQ, community access, and technical support from our expert team."
        keywords={["support", "technical support", "documentation", "FAQ", "community", "help", "Zion Tech Group", "customer service"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Support Center
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Get the help you need to succeed with our cutting-edge technology platforms.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive support options to get the assistance you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={category.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Support Channels
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to get the support you need, when you need it.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-400">
                      <span className="font-semibold">Availability:</span> {channel.availability}
                    </div>
                    <div className="text-gray-400">
                      <span className="font-semibold">Response:</span> {channel.responseTime}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quick answers to common questions about our platform and services.
              </p>
            </motion.div>

            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
            
            {filteredFaqs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No results found</h3>
                <p className="text-gray-500">Try adjusting your search terms.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our expert support team is ready to assist you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Call +1 302 464 0950
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