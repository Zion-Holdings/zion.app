import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  AlertCircle,
  Globe,
  Star,
  Users,
  Building
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: '',
          budget: '',
          timeline: ''
        });
      }, 3000);
    }, 2000);
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    responseTime: 'Within 2 hours during business hours'
  };

  const services = [
    'AI & Machine Learning Solutions',
    'Quantum Computing Services',
    'Space Technology Solutions',
    'Enterprise IT Solutions',
    'Cybersecurity Services',
    'Cloud Infrastructure',
    'Digital Transformation',
    'Custom Software Development',
    'Consulting Services',
    'Other'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000 - $1,000,000',
    'Over $1,000,000'
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Extended (6-12 months)',
    'Long-term (1+ years)'
  ];

  const stats = [
    { label: 'Response Time', value: '< 2 hours', icon: <Clock className="w-6 h-6" /> },
    { label: 'Client Satisfaction', value: '99.9%', icon: <Star className="w-6 h-6" /> },
    { label: 'Global Reach', value: '50+ Countries', icon: <Globe className="w-6 h-6" /> },
    { label: 'Expert Team', value: '100+ Specialists', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI, quantum computing, and space technology solutions. Get expert consultation, quotes, and support from our team." />
        <meta name="keywords" content="contact Zion Tech Group, AI consultation, quantum computing services, space technology solutions, get quote" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Contact Zion Tech Group for AI, quantum computing, and space technology solutions. Get expert consultation and support." />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Zion Tech Group" />
        <meta name="twitter:description" content="Contact Zion Tech Group for AI, quantum computing, and space technology solutions." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Ready to transform your business with cutting-edge technology? Let's discuss how our AI, quantum computing, and space technology solutions can drive your success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#contact-form" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </a>
                <a href="tel:+1 302 464 0950" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20" id="contact-form">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Whether you have a specific project in mind or just want to explore possibilities, our team is here to help. We'll respond within 2 hours during business hours.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        {contactInfo.phone}
                      </a>
                      <p className="text-gray-400 text-sm mt-1">{contactInfo.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        {contactInfo.email}
                      </a>
                      <p className="text-gray-400 text-sm mt-1">{contactInfo.responseTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Office</h3>
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        {contactInfo.address}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Website</h3>
                      <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        {contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-500/30">
                  <h3 className="text-xl font-semibold mb-4 text-white">Why Choose Zion Tech Group?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">15+ years of technology expertise</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">500+ successful client projects</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Cutting-edge AI & quantum solutions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">24/7 support and monitoring</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 text-white">Start Your Project</h3>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400">Thank you! We'll get back to you within 2 hours.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <span className="text-red-400">Something went wrong. Please try again.</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          {budgets.map((budget) => (
                            <option key={budget} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                          Project Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Contact Methods */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Other Ways to Connect
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Prefer a different approach? We offer multiple ways to get in touch and start your technology transformation journey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Live Chat</h3>
                <p className="text-gray-300 mb-6">
                  Get instant answers to your questions with our AI-powered live chat system.
                </p>
                <a href="/support" className="inline-flex items-center px-6 py-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors">
                  Start Chat
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Partnership</h3>
                <p className="text-gray-300 mb-6">
                  Explore strategic partnerships and collaboration opportunities with our team.
                </p>
                <a href="/partners" className="inline-flex items-center px-6 py-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors">
                  Learn More
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Careers</h3>
                <p className="text-gray-300 mb-6">
                  Join our team of innovators and help shape the future of technology.
                </p>
                <a href="/careers" className="inline-flex items-center px-6 py-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors">
                  View Openings
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't wait to start your technology transformation. Our team is ready to help you leverage the power of AI, quantum computing, and space technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#contact-form" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </a>
                <a href="/services" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Explore Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
