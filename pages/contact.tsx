import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, MessageCircle, 
  Globe, Building, Users, ArrowRight, Send,
  CheckCircle, Shield, Zap, Star, Heart,
  Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon
} from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Get in touch with our technical team for support and inquiries',
      contact: 'support@ziontechgroup.com',
      response: 'Within 24 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Speak directly with our experts for urgent matters',
      contact: '+1 (555) 123-4567',
      response: 'Available 24/7',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Real-time chat support for immediate assistance',
      contact: 'Start Chat',
      response: 'Instant response',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const officeLocations = [
    {
      city: 'San Francisco',
      country: 'United States',
      address: '123 Innovation Drive, Suite 100',
      zip: 'San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '456 Tech Square, Floor 3',
      zip: 'London, EC2A 4BX',
      phone: '+44 20 7123 4567',
      email: 'london@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT',
      featured: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      address: '789 Future Avenue, Building A',
      zip: 'Tokyo, 100-0001',
      phone: '+81 3 1234 5678',
      email: 'tokyo@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM JST',
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      city: 'Sydney',
      country: 'Australia',
      address: '321 Innovation Street, Level 5',
      zip: 'Sydney, NSW 2000',
      phone: '+61 2 1234 5678',
      email: 'sydney@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM AEST',
      featured: false,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const supportCategories = [
    {
      title: 'Technical Support',
      description: 'Get help with API integration, SDK usage, and technical implementation',
      icon: <Zap className="w-6 h-6" />,
      response: '2-4 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Sales Inquiries',
      description: 'Learn about our services, pricing, and enterprise solutions',
      icon: <Building className="w-6 h-6" />,
      response: '1-2 hours',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Partnership',
      description: 'Explore collaboration opportunities and strategic partnerships',
      icon: <Users className="w-6 h-6" />,
      response: '24-48 hours',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'General Inquiries',
      description: 'Questions about our company, culture, and general information',
      icon: <MessageCircle className="w-6 h-6" />,
      response: '24 hours',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const faqItems = [
    {
      question: 'How quickly can I get started with your AI consciousness services?',
      answer: 'You can get started within 24 hours. We provide quick setup guides, API documentation, and dedicated onboarding support to ensure a smooth implementation process.'
    },
    {
      question: 'What kind of support do you offer for enterprise customers?',
      answer: 'Enterprise customers receive dedicated account management, 24/7 priority support, custom training programs, and SLA guarantees for uptime and response times.'
    },
    {
      question: 'Can I integrate your services with my existing infrastructure?',
      answer: 'Yes, our services are designed for seamless integration with existing systems. We provide comprehensive APIs, SDKs, and integration guides for all major platforms.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including end-to-end encryption, SOC 2 compliance, regular security audits, and secure data centers with redundant infrastructure.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Ready to transform your business with AI consciousness, quantum computing, 
              and space technology? Let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#support"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                  <div className="space-y-2">
                    <div className="text-cyan-400 font-semibold">{method.contact}</div>
                    <div className="text-xs text-gray-400">Response: {method.response}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Global Offices
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visit us at one of our offices around the world
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${office.color} flex items-center justify-center`}>
                      <Building className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                        {office.city}
                      </h3>
                      {office.featured && (
                        <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                          HQ
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{office.country}</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPinIcon className="w-4 h-4 text-cyan-400 mt-0.5" />
                        <div>
                          <div>{office.address}</div>
                          <div className="text-gray-400">{office.zip}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <PhoneIcon className="w-4 h-4 text-cyan-400" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MailIcon className="w-4 h-4 text-cyan-400" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Schedule Visit
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section id="support" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Support Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the right support for your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm">Response: {category.response}</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tell us about your project and how we can help you achieve your goals
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Inquiry Type *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                >
                  <option value="">Select an inquiry type</option>
                  <option value="technical">Technical Support</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                  placeholder="Tell us about your project, requirements, or how we can help you..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500 focus:ring-2"
                />
                <label className="text-sm text-gray-300">
                  I agree to the{' '}
                  <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="text-cyan-400 hover:text-cyan-300">
                    Terms of Service
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions about our services and support
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">
                  {item.question}
                </h3>
                <p className="text-gray-300">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is ready to help you implement the future of technology. 
              Let's discuss how we can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/support"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Support
              </a>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
              <p className="text-gray-300 mb-4">
                Get the latest news, product updates, and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
