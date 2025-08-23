import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, 
  Send, CheckCircle, AlertCircle, Building,
  Globe, Users, Target, Award
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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      title: 'Phone',
      value: '+1 302 464 0950',
      icon: <Phone className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
      action: 'tel:+13024640950'
    },
    {
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      action: 'mailto:kleber@ziontechgroup.com'
    },
    {
      title: 'Address',
      value: '364 E Main St STE 1008 Middletown DE 19709',
      icon: <MapPin className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      action: null
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Quantum Computing',
    'IT Infrastructure',
    'Micro SAAS Solutions',
    'Business Automation',
    'Customer Success',
    'Marketing & Sales',
    'Finance & Legal',
    'Healthcare & Manufacturing',
    'Creative & Media',
    'Education & Training',
    'Other'
  ];

  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Get In Touch
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Ready to transform your business with cutting-edge technology? Let's start a conversation about your future.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Multiple Ways to Connect</h2>
                <p className="text-xl text-gray-300">Choose the method that works best for you</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    {method.action ? (
                      <a
                        href={method.action}
                        className="block group"
                        target={method.action.startsWith('http') ? '_blank' : undefined}
                        rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-white">
                            {method.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {method.title}
                        </h3>
                        <p className="text-gray-300 group-hover:text-cyan-300 transition-colors duration-300">
                          {method.value}
                        </p>
                      </a>
                    ) : (
                      <div className="block">
                        <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                          <div className="text-white">
                            {method.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                        <p className="text-gray-300">{method.value}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                  <p className="text-gray-300 mb-8">
                    Tell us about your project and how we can help transform your business with our technology solutions.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
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
                          placeholder="Your full name"
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
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
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
                          placeholder="Your company name"
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
                          placeholder="+1 (555) 123-4567"
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
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
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
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                    </div>
                    
                    {submitStatus === 'success' && (
                      <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                        <span className="text-red-400">Something went wrong. Please try again.</span>
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
                
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Proven Track Record</h4>
                          <p className="text-gray-300 text-sm">500+ successful projects delivered across various industries</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Expert Team</h4>
                          <p className="text-gray-300 text-sm">Specialists in AI, quantum computing, and enterprise solutions</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Client-Centric Approach</h4>
                          <p className="text-gray-300 text-sm">We prioritize your success and build lasting partnerships</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Globe className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Global Reach</h4>
                          <p className="text-gray-300 text-sm">Serving clients worldwide with local expertise and global standards</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-6 border border-cyan-500/30">
                    <h4 className="text-xl font-bold text-white mb-4">Response Time</h4>
                    <p className="text-gray-300 mb-4">
                      We typically respond to all inquiries within 2-4 business hours during business days.
                    </p>
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">Fast Response Guaranteed</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30">
                    <h4 className="text-xl font-bold text-white mb-4">Consultation</h4>
                    <p className="text-gray-300 mb-4">
                      Schedule a free consultation to discuss your project requirements and explore solutions.
                    </p>
                    <a
                      href="tel:+13024640950"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
                    >
                      <Phone className="w-5 h-5" />
                      Schedule Call
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Visit Our Headquarters</h2>
                <p className="text-xl text-gray-300">Located in the heart of Delaware's technology corridor</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Building className="w-8 h-8 text-cyan-400" />
                      <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                    </div>
                    <div className="space-y-3 text-gray-300">
                      <p className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                        364 E Main St STE 1008
                      </p>
                      <p className="ml-8">Middletown, DE 19709</p>
                      <p className="ml-8">United States</p>
                    </div>
                    <div className="mt-6">
                      <a
                        href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
                      >
                        <Globe className="w-5 h-5" />
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <MapPin className="w-16 h-16 mx-auto mb-4" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Click to view location</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>
  );
};

export default ContactPage;
