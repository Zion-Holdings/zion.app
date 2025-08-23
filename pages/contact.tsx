import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Users, MessageSquare, Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      title: 'Email Us',
      description: 'Send us a message and we\'ll get back to you within 24 hours',
      icon: <Mail className="w-6 h-6" />,
      value: 'kleber@ziontechgroup.com',
      action: 'mailto:kleber@ziontechgroup.com'
    },
    {
      title: 'Call Us',
      description: 'Speak directly with our team for immediate assistance',
      icon: <Phone className="w-6 h-6" />,
      value: '+1 302 464 0950',
      action: 'tel:+13024640950'
    },
    {
      title: 'Visit Us',
      description: 'Our headquarters in Middletown, Delaware',
      icon: <MapPin className="w-6 h-6" />,
      value: '364 E Main St STE 1008 Middletown DE 19709',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      title: 'Business Hours',
      description: 'We\'re available Monday through Friday',
      icon: <Clock className="w-6 h-6" />,
      value: '9:00 AM - 6:00 PM EST',
      action: null
    }
  ];

  const services = [
    'AI & Machine Learning Solutions',
    'Quantum Computing Services',
    'Space Technology Platforms',
    'Cybersecurity Solutions',
    'Cloud Infrastructure',
    'Data Analytics',
    'DevOps Automation',
    'Custom Development'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Ready to transform your business with cutting-edge technology? Let's discuss how our solutions can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index + 0.2 }}
              className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white w-fit mx-auto mb-4">
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{method.description}</p>
              {method.action ? (
                <a
                  href={method.action}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                >
                  {method.value}
                </a>
              ) : (
                <span className="text-gray-300 font-medium">{method.value}</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
                    placeholder="Enter your last name"
                  />
                </div>
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
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
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
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
                  placeholder="Tell us about your project or how we can help you"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Let's Start a Conversation</h2>
              <p className="text-gray-300 text-lg mb-6">
                Whether you have a specific project in mind or just want to explore how our technology solutions can benefit your business, we're here to help.
              </p>
              <p className="text-gray-300 text-lg">
                Our team of experts will work closely with you to understand your needs and develop customized solutions that drive real results.
              </p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What to Expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Response within 24 hours</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Free consultation and assessment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Customized solution proposal</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Ongoing support and partnership</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Ready to Get Started?</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Schedule a consultation with our team to discuss your project requirements and explore potential solutions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
              >
                <span>Schedule Consultation</span>
                <MessageSquare className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative technology solutions can help you achieve your goals and stay ahead of the competition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-cyan-500/25"
            >
              Explore Our Services
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-200 font-medium text-lg"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
