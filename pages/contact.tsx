import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  Globe, Building, Users, ArrowRight, Send,
  CheckCircle, Star, Shield, Zap
} from 'lucide-react';
import UltraFuturisticNavigation2030 from '../components/layout/UltraFuturisticNavigation2030';
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030';
import UltraFuturisticBackground2030 from '../components/backgrounds/UltraFuturisticBackground2030';

export default function ContactPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST'
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technology experts',
      value: contactInfo.mobile,
      color: 'from-blue-500 to-cyan-500',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your inquiries',
      value: contactInfo.email,
      color: 'from-purple-500 to-pink-500',
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      description: 'Visit our headquarters in Delaware',
      value: contactInfo.address,
      color: 'from-green-500 to-emerald-500',
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'We\'re available during these times',
      value: contactInfo.hours,
      color: 'from-orange-500 to-red-500',
      action: 'Schedule Meeting'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: '24/7 AI Support',
      description: 'Round-the-clock assistance from our intelligent AI systems'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Get immediate answers to your technology questions'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Access to world-class technology professionals'
    },
    {
      icon: Star,
      title: 'Premium Service',
      description: 'White-glove treatment for enterprise clients'
    }
  ];

  return (
    <UltraFuturisticBackground2030>
      <Head>
        <title>Contact Zion Tech Group - Get in Touch with Technology Experts | AI, Quantum Computing, Space Tech</title>
        <meta name="description" content="Contact Zion Tech Group for revolutionary 2029 technology services. Speak with our AI, quantum computing, and space technology experts. Get support and consultation." />
        <meta name="keywords" content="contact Zion Tech Group, AI technology support, quantum computing consultation, space technology experts, technology consultation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Zion Tech Group - Get in Touch with Technology Experts" />
        <meta property="og:description" content="Contact Zion Tech Group for revolutionary 2029 technology services. Speak with our AI, quantum computing, and space technology experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Zion Tech Group - Get in Touch with Technology Experts" />
        <meta name="twitter:description" content="Contact Zion Tech Group for revolutionary 2029 technology services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>

      <UltraFuturisticNavigation2030 />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              Ready to transform your business with revolutionary 2029 technology? Our team of experts is here to help you navigate the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{method.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{method.description}</p>
                  <div className="text-cyan-400 font-semibold mb-4">{method.value}</div>
                  <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center group">
                    {method.action}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Send Us a Message
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a specific question or need a custom solution? Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200">
                  <option value="">Select a service category</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="quantum">Quantum Computing</option>
                  <option value="biotech">Biotechnology</option>
                  <option value="enterprise">Enterprise IT</option>
                  <option value="space">Space Technology</option>
                  <option value="micro-saas">Micro SAAS Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message *</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project, requirements, or questions..."
                ></textarea>
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center mx-auto"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Our Support?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide exceptional support and consultation services to ensure your success with our revolutionary technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Technology Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait to transform your business. Contact us today and discover how our revolutionary 2029 technology services can propel you into the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                View Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2030 />
    </UltraFuturisticBackground2030>
  );
}
