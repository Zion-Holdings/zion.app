import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Clock, MessageSquare, 
  Send, CheckCircle, AlertCircle, ArrowRight,
  Brain, Atom, Rocket, Shield, Star
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
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitStatus('idle');
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

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST'
  };

  const services = [
    'Quantum AI Brain-Computer Interface Platform 2046',
    'Space Resource Intelligence Platform 2046',
    'Quantum Financial Trading Intelligence Platform 2046',
    'Quantum Cybersecurity Future Platform 2046',
    'AI-Powered Healthcare Diagnostics Platform 2046',
    'Quantum Energy Optimization Platform 2046',
    'Quantum Supply Chain Intelligence Platform 2046',
    'Quantum Manufacturing Intelligence Platform 2046',
    'Quantum Education Intelligence Platform 2046',
    'Quantum Retail Intelligence Platform 2046',
    'Quantum Cloud Infrastructure Platform 2046',
    'Quantum AI DevOps Automation Platform 2046',
    'Quantum Database Intelligence Platform 2046',
    'Quantum Network Intelligence Platform 2046',
    'Quantum Storage Intelligence Platform 2046',
    'Quantum AI Monitoring Platform 2046',
    'Quantum AI Testing Platform 2046',
    'Quantum AI Security Platform 2046',
    'Quantum AI Backup & Recovery Platform 2046',
    'Quantum AI Cognitive Computing Platform 2046',
    'Quantum AI Computer Vision Platform 2046',
    'Quantum AI Natural Language Processing Platform 2046',
    'Quantum AI Predictive Analytics Platform 2046',
    'Quantum AI Automated Machine Learning Platform 2046',
    'Quantum AI Reinforcement Learning Platform 2046',
    'Quantum AI Federated Learning Platform 2046',
    'Quantum AI Explainable AI Platform 2046',
    'Quantum AI Ethics Platform 2046',
    'Quantum AI AIOps Platform 2046'
  ];

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Let's Build the <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Future</span> Together
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Ready to transform your business with revolutionary 2046 technology? 
                Connect with our team of experts and discover how our cutting-edge solutions 
                can accelerate your digital transformation journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">
                  Get in <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <p className="text-cyan-400 text-lg">{contactInfo.phone}</p>
                      <p className="text-gray-400 text-sm">Available during business hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-purple-400 text-lg">{contactInfo.email}</p>
                      <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                      <p className="text-emerald-400 text-lg">{contactInfo.address}</p>
                      <p className="text-gray-400 text-sm">Headquarters location</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                      <p className="text-orange-400 text-lg">{contactInfo.hours}</p>
                      <p className="text-gray-400 text-sm">Eastern Standard Time</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Website</h3>
                      <a 
                        href={contactInfo.website} 
                        className="text-indigo-400 text-lg hover:text-indigo-300 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contactInfo.website}
                      </a>
                      <p className="text-gray-400 text-sm">Visit our main site</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Advanced AI Solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Atom className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Quantum Computing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Rocket className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">Space Technology</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Cybersecurity</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">Innovation Leader</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-pink-400" />
                      <span className="text-gray-300">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Send us a <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Message</span>
                </h2>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400">Something went wrong. Please try again.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-gray-800 text-white">
                          {service}
                        </option>
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
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Start Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transformation?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of organizations already leveraging our revolutionary 2046 
                technology solutions to stay ahead of the competition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={`tel:${contactInfo.phone}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </motion.button>
                </a>
                
                <a href={`mailto:${contactInfo.email}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
