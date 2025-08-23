import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, MessageCircle, Clock, Globe, 
  Send, CheckCircle, AlertCircle, Building, Users, 
  Target, Brain, Atom, Rocket, Shield
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const contactInfo = {
    phone: '+1-302-464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    website: 'https://ziontechgroup.com'
  };

  const services = [
    { value: 'ai-consciousness', label: 'AI Consciousness Evolution', icon: Brain },
    { value: 'quantum-computing', label: 'Quantum Computing Solutions', icon: Atom },
    { value: 'space-technology', label: 'Space Technology & Intelligence', icon: Rocket },
    { value: 'cybersecurity', label: 'Cybersecurity & Zero Trust', icon: Shield },
    { value: 'enterprise-it', label: 'Enterprise IT Solutions', icon: Building },
    { value: 'consulting', label: 'Technology Consulting', icon: Users },
    { value: 'other', label: 'Other Services', icon: Target }
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
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout 
      title="Contact Us - Zion Tech Group"
      description="Get in touch with Zion Tech Group for revolutionary AI consciousness, quantum computing, and space technology solutions."
      canonicalUrl="https://ziontechgroup.com/contact"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-green-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get in Touch
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Let's Build the Future
                </span>
                <br />
                <span className="text-white">Together</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                Ready to revolutionize your business with AI consciousness, quantum computing, or space technology? 
                Our team of experts is here to help you transform your vision into reality.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Phone</h3>
                <p className="text-gray-300 mb-2">{contactInfo.phone}</p>
                <p className="text-sm text-gray-400">{contactInfo.hours}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
                <p className="text-gray-300 mb-2">{contactInfo.email}</p>
                <p className="text-sm text-gray-400">24/7 Support Available</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Address</h3>
                <p className="text-gray-300 mb-2">{contactInfo.address}</p>
                <p className="text-sm text-gray-400">Headquarters</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Website</h3>
                <p className="text-gray-300 mb-2">{contactInfo.website}</p>
                <p className="text-sm text-gray-400">Always Online</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
            >
              {/* Contact Form */}
              <motion.div variants={fadeInUp}>
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Send Us a Message</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Tell us about your project, and our team will get back to you within 24 hours 
                    with a personalized solution tailored to your needs.
                  </p>
                </div>

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
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
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
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
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
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
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
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="Enter phone number"
                      />
                    </div>
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
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
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-3 p-4 bg-green-900/20 border border-green-500/30 rounded-xl text-green-300">
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! We'll get back to you within 24 hours.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-3 p-4 bg-red-900/20 border border-red-500/30 rounded-xl text-red-300">
                      <AlertCircle className="w-5 h-5" />
                      <span>Something went wrong. Please try again or contact us directly.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Contact Details & Map */}
              <motion.div variants={fadeInUp}>
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get in Touch</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Whether you have a specific project in mind or just want to explore possibilities, 
                    we're here to help you navigate the future of technology.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Cutting-edge AI consciousness technology</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Quantum computing expertise</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Space technology innovation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">24/7 expert support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Response Time</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Initial Response</span>
                        <span className="text-cyan-400 font-semibold">Within 24 hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Project Proposal</span>
                        <span className="text-cyan-400 font-semibold">Within 3-5 days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Project Start</span>
                        <span className="text-cyan-400 font-semibold">Within 1-2 weeks</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Emergency Support</h3>
                    <p className="text-gray-300 mb-3">
                      For urgent technical issues or critical support needs:
                    </p>
                    <div className="flex items-center space-x-3 text-green-400">
                      <Phone className="w-5 h-5" />
                      <span className="font-semibold">{contactInfo.phone}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Join the revolution and discover how our cutting-edge technology solutions 
                can accelerate your success and future-proof your organization.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Explore Our Services
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Request Demo
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
