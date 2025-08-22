import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Clock, MessageCircle,
  Send, CheckCircle, AlertCircle, Building, Users,
  Award, Star, Zap, Brain, Rocket, Shield, Atom
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
  responseTime: 'Within 2 hours during business hours'
};

const contactMethods = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Call Us',
    description: 'Speak directly with our technology experts',
    value: contactInfo.mobile,
    action: `tel:${contactInfo.mobile}`,
    color: 'from-cyan-500 to-blue-500',
    popular: true
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'Email Us',
    description: 'Send us a detailed message about your needs',
    value: contactInfo.email,
    action: `mailto:${contactInfo.email}`,
    color: 'from-purple-500 to-pink-500',
    popular: false
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Visit Us',
    description: 'Our headquarters in Middletown, Delaware',
    value: contactInfo.address,
    action: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`,
    color: 'from-green-500 to-emerald-500',
    popular: false
  }
];

const services = [
  {
    icon: <Brain className="w-6 h-6" />,
    name: 'AI & Machine Learning',
    description: 'Revolutionary AI consciousness and emotional intelligence'
  },
  {
    icon: <Atom className="w-6 h-6" />,
    name: 'Quantum Computing',
    description: 'Breakthrough quantum solutions for complex problems'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    name: 'IT Infrastructure',
    description: 'Advanced enterprise security and infrastructure'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    name: 'Micro SAAS',
    description: 'Innovative business automation solutions'
  }
];

const Contact: React.FC = () => {
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
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group | Revolutionary Technology Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Contact our experts for AI, quantum computing, and micro SAAS solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact, Zion Tech Group, AI services, quantum computing, micro SAAS, technology consulting" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Let's{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                Your Business Together
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to revolutionize your business with cutting-edge AI, quantum computing, and innovative micro SAAS solutions? 
                Our team of experts is here to help you succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {contactInfo.mobile}</span>
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to connect with our technology experts. 
                We're here to help you find the perfect solution for your business needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  {method.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`${method.color} p-1 rounded-2xl`}>
                    <div className="bg-gray-900 rounded-2xl p-8 h-full hover:bg-gray-800 transition-colors duration-300">
                      <div className="text-center">
                        <div className={`${method.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-white">{method.icon}</div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{method.description}</p>
                        
                        <div className="mb-6">
                          <div className="text-lg font-medium text-white">{method.value}</div>
                        </div>
                        
                        <a
                          href={method.action}
                          target={method.action.startsWith('http') ? '_blank' : '_self'}
                          rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                          className={`inline-flex items-center gap-2 ${method.color} text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity duration-200`}
                        >
                          <span>Get Started</span>
                          <Send className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-300">
                    Tell us about your project and we'll get back to you within 2 hours during business hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-white/5 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
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
                        className="w-full px-4 py-3 bg-white/5 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-white/5 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
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
                        className="w-full px-4 py-3 bg-white/5 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
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
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="quantum">Quantum Computing</option>
                      <option value="it-infrastructure">IT Infrastructure</option>
                      <option value="micro-saas">Micro SAAS Solutions</option>
                      <option value="consulting">Technology Consulting</option>
                      <option value="other">Other</option>
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
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none inline-flex items-center justify-center gap-3"
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

                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400">
                      <AlertCircle className="w-5 h-5" />
                      <span>There was an error sending your message. Please try again.</span>
                    </div>
                  )}
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Contact Information
                  </h2>
                  <p className="text-gray-300">
                    Get in touch with our team of technology experts. We're here to help you succeed.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white/5 border border-gray-700/50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                      <p className="text-gray-300 mb-2">{contactInfo.mobile}</p>
                      <p className="text-sm text-gray-400">{contactInfo.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white/5 border border-gray-700/50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <p className="text-gray-300 mb-2">{contactInfo.email}</p>
                      <p className="text-sm text-gray-400">Response time: {contactInfo.responseTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white/5 border border-gray-700/50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                      <p className="text-gray-300">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white/5 border border-gray-700/50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                      <a 
                        href={contactInfo.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        {contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Services Overview */}
                <div className="p-6 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
                  <div className="space-y-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                          <div className="text-cyan-400">{service.icon}</div>
                        </div>
                        <div>
                          <div className="font-medium text-white">{service.name}</div>
                          <div className="text-sm text-gray-400">{service.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Transformation?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Don't wait to revolutionize your business. Contact us today and discover how our 
                cutting-edge technology solutions can drive unprecedented growth and success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;