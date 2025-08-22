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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Contact Zion Tech Group - Get Started with Revolutionary Technology Solutions</title>
        <meta name="description" content="Contact Zion Tech Group for cutting-edge AI, quantum computing, and micro SAAS solutions. Transform your business with our revolutionary technology." />
        <meta name="keywords" content="contact, Zion Tech Group, AI services, quantum computing, micro SAAS, technology consulting" />
        <meta property="og:title" content="Contact Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Get started with cutting-edge AI, quantum computing, and micro SAAS solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
            
            {/* Animated grid */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '200px 200px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '200px 200px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Let's Build the{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future
                </span>
                <br />
                <span className="text-white">Together</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Ready to transform your business with revolutionary AI, quantum computing, and micro SAAS solutions? 
                Let's discuss how we can accelerate your success and drive unprecedented growth.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Phone className="w-5 h-5" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Mail className="w-5 h-5" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-pink-400">
                  <MapPin className="w-5 h-5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get in{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to connect with our technology experts and start your transformation journey
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative group ${method.popular ? 'scale-105' : ''}`}
                >
                  {method.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <a
                    href={method.action}
                    className={`block p-8 rounded-2xl border transition-all duration-300 group-hover:scale-105 ${
                      method.popular 
                        ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-cyan-500/50 shadow-2xl shadow-cyan-500/25' 
                        : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-gray-600/50'
                    }`}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{method.description}</p>
                    
                    <div className="text-lg font-semibold text-cyan-400 mb-2">{method.value}</div>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                      <span className="text-sm font-medium">Get Started</span>
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Tell Us About Your{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Project
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Share your vision and requirements, and we'll create a customized solution that transforms your business
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12"
              >
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for reaching out. Our team will get back to you within 2 hours during business hours.
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Response within 2 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>Expert consultation</span>
                      </div>
                    </div>
                  </div>
                ) : (
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
                          Company Name
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
                        <option value="">Select a service category</option>
                        <option value="ai-ml">AI & Machine Learning</option>
                        <option value="quantum">Quantum Computing</option>
                        <option value="it-infrastructure">IT Infrastructure</option>
                        <option value="micro-saas">Micro SAAS Solutions</option>
                        <option value="consulting">Technology Consulting</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200 resize-none"
                        placeholder="Describe your project, goals, and how we can help transform your business..."
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-2xl shadow-cyan-500/25"
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
                    </div>

                    <div className="text-center text-sm text-gray-400">
                      <p>By submitting this form, you agree to our privacy policy and terms of service.</p>
                      <p className="mt-2">
                        Need immediate assistance? Call us at{' '}
                        <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          {contactInfo.mobile}
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Core{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the revolutionary technology solutions that are transforming businesses worldwide
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Start Your{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Transformation?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join the future of technology with Zion Tech Group. Our revolutionary solutions are ready to accelerate your success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-cyan-500/25"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {contactInfo.mobile}</span>
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-purple-500/25"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>

              <div className="mt-8 p-6 bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl inline-block">
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.responseTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;