import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, MessageCircle,
  Clock, Shield, CheckCircle, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

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
  const [isSubmitted, setIsSubmitted] = useState(false);

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
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 302 464 0950',
      link: 'tel:+13024640950',
      color: 'text-cyan-400'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      color: 'text-purple-400'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      value: '364 E Main St STE 1008 Middletown DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'text-blue-400'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Website',
      value: 'https://ziontechgroup.com',
      link: 'https://ziontechgroup.com',
      color: 'text-green-400'
    }
  ];

  const services = [
    'AI & Automation Services',
    'IT Infrastructure Solutions',
    'Cloud & DevOps Services',
    'Quantum Computing Solutions',
    'Cybersecurity Services',
    'Edge Computing Platform',
    'Blockchain Infrastructure',
    'Data Governance & Analytics',
    'Custom Development',
    'Consulting & Strategy'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Contact Zion Tech Group - Get in Touch for Innovative Technology Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Group for innovative technology solutions. Contact our experts for AI, quantum computing, space technology, and IT services." />
        <meta name="keywords" content="contact, Zion Tech Group, AI services, quantum computing, IT solutions, technology consulting" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? Let's discuss how our innovative solutions can drive your success.
            </p>
          </motion.div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className={`${info.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <a 
                  href={info.link}
                  target={info.title === 'Website' ? '_blank' : '_self'}
                  rel={info.title === 'Website' ? 'noopener noreferrer' : ''}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {info.value}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                <p className="text-gray-300">
                  Tell us about your project and we'll get back to you within 24 hours with a personalized solution.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-green-500/10 border border-green-400/30 rounded-xl text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-300 mb-4">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
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
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, challenges, or how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-gray-300 mb-6">
                  We combine cutting-edge technology with proven business strategies to deliver exceptional results.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
                    <p className="text-gray-300 text-sm">
                      Bank-level security with quantum-resistant encryption and AI-powered threat detection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-300 text-sm">
                      Round-the-clock technical support and monitoring for your critical systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                    <p className="text-gray-300 text-sm">
                      Track record of successful implementations with measurable ROI and business impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-400/20">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link 
                    href="/get-started"
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">Get Started Guide</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href="/quote"
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">Request Quote</span>
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href="/services"
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">Explore Services</span>
                    <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black/40 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Get Started Today
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Explore Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
