import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Clock, MessageSquare, 
  Send, CheckCircle, Star, ArrowRight, Building, Users
} from 'lucide-react';
import UltraFuturisticBackground2034 from '../components/ui/UltraFuturisticBackground2034';
import UltraFuturisticNavigation2034 from '../components/layout/UltraFuturisticNavigation2034';
import UltraFuturisticFooter2034 from '../components/layout/UltraFuturisticFooter2034';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const serviceOptions = [
    'AI Consciousness Development Platform',
    'Multimodal AI Fusion Platform',
    'AI-Powered Autonomous Decision Engine',
    'AI Emotional Intelligence Platform',
    'AI Quantum Hybrid Computing Platform',
    'Zero-Trust Network Security Platform',
    'Edge Computing Orchestration Platform',
    'AI-Powered DevOps Automation Suite',
    'Quantum-Ready Cloud Infrastructure',
    'Intelligent Data Center Management',
    'AI Customer Success Automation',
    'Intelligent Document Processing Hub',
    'Smart Inventory Management System',
    'AI HR Recruitment Suite',
    'Intelligent Project Management Hub',
    'Other - Please specify'
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group | Revolutionary AI, IT & Micro SAAS Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Group for revolutionary AI innovations, cutting-edge IT solutions, and innovative micro SAAS services. Transform your business today." />
        <meta name="keywords" content="contact, Zion Tech Group, AI services, IT solutions, micro SAAS, customer support" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get in touch for revolutionary AI, IT & Micro SAAS solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Zion Tech Group" />
        <meta name="twitter:description" content="Get in touch for revolutionary AI, IT & Micro SAAS solutions." />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>

      <UltraFuturisticBackground2034 
        intensity="high" 
        colorScheme="quantum-fusion"
        particleCount={600}
        animationSpeed={2.0}
        enableHolographic={true}
        enableQuantumEffects={true}
        enableNeonEffects={true}
        enableSpaceEffects={true}
      >
        <UltraFuturisticNavigation2034 />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-lg font-medium mb-8"
            >
              <MessageSquare className="w-5 h-5 mr-2 text-cyan-400" />
              Get In Touch
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Let's Build
              </span>
              <br />
              <span className="text-white">The Future</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Ready to transform your business with revolutionary AI, cutting-edge IT solutions, and innovative micro SAAS services? 
              Let's discuss how we can accelerate your growth and innovation.
            </motion.p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Get in <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-12">
                  Our team of experts is ready to help you navigate the future of technology and transform your business with our revolutionary solutions.
                </p>

                {/* Contact Details */}
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                      <a 
                        href={`tel:${contactInfo.mobile}`}
                        className="text-cyan-300 hover:text-cyan-200 transition-colors text-lg"
                      >
                        {contactInfo.mobile}
                      </a>
                      <p className="text-gray-400 text-sm mt-1">Available 24/7 for urgent inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-cyan-300 hover:text-cyan-200 transition-colors text-lg"
                      >
                        {contactInfo.email}
                      </a>
                      <p className="text-gray-400 text-sm mt-1">We respond within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                      <p className="text-gray-300 text-lg">{contactInfo.address}</p>
                      <p className="text-gray-400 text-sm mt-1">Headquarters location</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                      <a 
                        href={contactInfo.website}
                        className="text-cyan-300 hover:text-cyan-200 transition-colors text-lg"
                      >
                        {contactInfo.website}
                      </a>
                      <p className="text-gray-400 text-sm mt-1">Explore our services portfolio</p>
                    </div>
                  </div>
                </div>

                {/* Company Stats */}
                <div className="mt-12 p-6 bg-black/30 border border-cyan-500/20 rounded-2xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">500+</div>
                      <div className="text-gray-400 text-sm">Revolutionary Services</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">95%+</div>
                      <div className="text-gray-400 text-sm">Customer Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400">24/7</div>
                      <div className="text-gray-400 text-sm">Expert Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">$50B+</div>
                      <div className="text-gray-400 text-sm">Market Opportunity</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8"
              >
                <h3 className="text-3xl font-bold text-white mb-6">Send us a Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-300">Thank you for contacting us. We'll get back to you within 2 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                          placeholder="Enter company name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
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
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-3xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have already transformed their operations with our revolutionary technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/comprehensive-services-showcase-2025"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
                
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <UltraFuturisticFooter2034 />
      </UltraFuturisticBackground2034>
    </>
  );
}