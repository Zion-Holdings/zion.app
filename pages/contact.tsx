import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Globe, MessageSquare, 
  Send, CheckCircle, AlertCircle, Building, User, 
  Calendar, Star, Award, Shield, Zap
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import EnhancedNavigation2026 from '../components/layout/EnhancedNavigation2026';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
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

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    responseTime: 'Within 2 hours during business hours'
  };

  const services = [
    'AI & Machine Learning Services',
    'Quantum Computing Solutions',
    'Emerging Technologies',
    'Enterprise IT Solutions',
    'Micro SaaS Platforms',
    'Cybersecurity Services',
    'Cloud Migration',
    'Custom Development',
    'Consulting & Strategy',
    'Other'
  ];

  const budgetRanges = [
    'Under $1K/month',
    '$1K - $5K/month',
    '$5K - $20K/month',
    '$20K - $100K/month',
    '$100K+/month',
    'Custom pricing needed'
  ];

  const timelines = [
    'Immediate (This week)',
    'Within 1 month',
    'Within 3 months',
    'Within 6 months',
    'Planning phase',
    'No specific timeline'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
          name: '',
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

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="neural-network"
      particleCount={500}
      animationSpeed={2.5}
      enableHolographic={true}
      enableQuantumEffects={true}
      enableNeuralNetwork={true}
    >
      <div className="min-h-screen">
        <Head>
          <title>Contact Zion Tech Group - Get in Touch for Revolutionary AI, Quantum & IT Services</title>
          <meta name="description" content="Contact Zion Tech Group for revolutionary AI, quantum computing, and IT services. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
          <meta name="keywords" content="contact Zion Tech Group, AI services contact, quantum computing contact, IT services contact, Zion Tech Group phone, Zion Tech Group email" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Contact Zion Tech Group - Revolutionary AI, Quantum & IT Services" />
          <meta property="og:description" content="Get in touch for cutting-edge AI, quantum computing, and IT solutions" />
          <meta property="og:url" content="https://ziontechgroup.com/contact" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/contact" />
        </Head>

        {/* Enhanced Navigation */}
        <EnhancedNavigation2026 />

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Let's Transform Your Business
                </span>
              </h1>
              <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
                Ready to revolutionize your business with cutting-edge AI, quantum computing, and emerging technologies? 
                Get in touch with our team of experts today.
              </p>
              
              {/* Contact Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-400">{contactInfo.responseTime}</div>
                  <div className="text-gray-400 text-sm">Response Time</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-gray-400 text-sm">Support Available</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-400">1000%+</div>
                  <div className="text-gray-400 text-sm">ROI Guarantee</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our team of experts is ready to help you transform your business with revolutionary technology solutions. 
                    Reach out to us through any of the channels below.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Phone</h3>
                      <p className="text-gray-300">{contactInfo.mobile}</p>
                      <p className="text-gray-400 text-sm">{contactInfo.hours}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Email</h3>
                      <p className="text-gray-300">{contactInfo.email}</p>
                      <p className="text-gray-400 text-sm">{contactInfo.responseTime}</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Office</h3>
                      <p className="text-gray-300">{contactInfo.address}</p>
                      <p className="text-gray-400 text-sm">United States</p>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Website</h3>
                      <a 
                        href={contactInfo.website} 
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contactInfo.website}
                      </a>
                      <p className="text-gray-400 text-sm">Visit our online platform</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    Why Choose Zion Tech Group?
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>1000%+ ROI Guarantee</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Cutting-edge Technology</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Expert Team Support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Fast Implementation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>24/7 Customer Support</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-300">We'll get back to you within 2 hours during business hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/60 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/60 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Company and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-white font-medium mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/60 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-white font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/60 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Service and Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-white font-medium mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/60 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-white font-medium mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/60 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((budget, index) => (
                            <option key={index} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="timeline" className="block text-white font-medium mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/60 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-black/60 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
                        placeholder="Tell us about your project, requirements, or questions..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center ${
                        isFormValid && !isSubmitting
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-gray-400 text-sm text-center">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Contact Methods */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Other Ways to Connect</h2>
              <p className="text-gray-300 text-lg">
                Prefer a different communication method? We're here to help through multiple channels.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Emergency Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Emergency Support</h3>
                <p className="text-gray-300 mb-4">
                  Need immediate assistance? Our emergency support team is available 24/7 for critical issues.
                </p>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </motion.div>

              {/* Business Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Business Development</h3>
                <p className="text-gray-300 mb-4">
                  Looking for partnership opportunities or enterprise solutions? Let's discuss strategic collaboration.
                </p>
                <a
                  href={`mailto:${contactInfo.email}?subject=Business Development Inquiry`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </motion.div>

              {/* Technical Consultation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Technical Consultation</h3>
                <p className="text-gray-300 mb-4">
                  Need technical advice or architecture review? Our experts are ready to help with your technical challenges.
                </p>
                <a
                  href={`mailto:${contactInfo.email}?subject=Technical Consultation Request`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Schedule Call
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Your Transformation?
              </h2>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Don't wait to revolutionize your business. Contact us today and discover how our cutting-edge 
                technology solutions can accelerate your growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {contactInfo.mobile}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="bg-black/40 hover:bg-black/60 text-white font-semibold py-4 px-8 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-200 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </div>
              <div className="mt-8 text-gray-400 text-sm">
                <p>Visit us at: <a href={contactInfo.website} className="text-purple-400 hover:text-purple-300">{contactInfo.website}</a></p>
                <p className="mt-2">{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}