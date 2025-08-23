import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  AlertCircle
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
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Call us directly for immediate assistance',
      action: 'tel:+13024640950',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us a detailed message',
      action: 'mailto:kleber@ziontechgroup.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      details: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Visit our headquarters',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008,+Middletown+DE+19709',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      description: 'Available during business hours',
      action: null,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Quantum Computing',
    'Space Technology',
    'Cybersecurity',
    'Cloud Infrastructure',
    'Enterprise Solutions',
    'Custom Development',
    'Consulting',
    'Other'
  ];

  return (
    <Layout>
      <SEO 
        title="Contact Us | Zion Tech Group" 
        description="Get in touch with Zion Tech Group. Contact our team for AI consciousness, quantum computing, and space technology solutions."
        canonical="https://ziontechgroup.com/contact/"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Get in <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business with cutting-edge technology? Let's discuss how our 
                AI consciousness, quantum computing, and space technology solutions can drive your success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Multiple Ways to Connect</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the method that works best for you. Our team is ready to help with your technology needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mb-4`}>
                    <div className="text-white">{method.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{method.details}</p>
                  <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                  {method.action && (
                    <a
                      href={method.action}
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${method.color} text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity duration-300`}
                    >
                      {method.title === 'Phone' ? 'Call Now' : method.title === 'Email' ? 'Send Email' : 'Get Directions'}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Send Us a Message</h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
            >
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-red-400">There was an error sending your message. Please try again.</span>
                </div>
              )}

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
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your email address"
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
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your company name"
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
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your phone number"
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
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
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
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Office Location Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Visit Our Office</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Located in the heart of Delaware, our headquarters is easily accessible and ready to welcome you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group Headquarters</h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p>364 E Main St STE 1008</p>
                        <p>Middletown, DE 19709</p>
                        <p>United States</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p>+1 302 464 0950</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-lg">
                  <div className="aspect-video bg-gray-600 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <MapPin className="w-16 h-16 mx-auto mb-4" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Click to view on Google Maps</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <a
                      href="https://maps.google.com/?q=364+E+Main+St+STE+1008,+Middletown+DE+19709"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait to transform your business. Contact us today and let's discuss how our 
                innovative technology solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Send Email
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
