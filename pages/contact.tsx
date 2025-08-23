import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Globe, Users, Sparkles } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message and we\'ll get back to you within 24 hours.',
      contact: 'info@ziontechgroup.com',
      href: 'mailto:info@ziontechgroup.com',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team during business hours.',
      contact: '+1 (302) 464-0950',
      href: 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant support through our live chat system.',
      contact: 'Available 24/7',
      href: '#chat',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters in Middletown, Delaware.',
      contact: '364 E Main St STE 1008, Middletown, DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008,+Middletown,+DE+19709',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const departments = [
    {
      name: 'General Inquiries',
      email: 'info@ziontechgroup.com',
      description: 'General questions about our services and company'
    },
    {
      name: 'Sales & Partnerships',
      email: 'sales@ziontechgroup.com',
      description: 'Business development and partnership opportunities'
    },
    {
      name: 'Technical Support',
      email: 'support@ziontechgroup.com',
      description: 'Technical assistance and troubleshooting'
    },
    {
      name: 'Careers & HR',
      email: 'careers@ziontechgroup.com',
      description: 'Job opportunities and human resources'
    },
    {
      name: 'Legal & Compliance',
      email: 'legal@ziontechgroup.com',
      description: 'Legal matters and compliance questions'
    },
    {
      name: 'Privacy & Security',
      email: 'privacy@ziontechgroup.com',
      description: 'Privacy concerns and security issues'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST', status: 'Open' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST', status: 'Limited' },
    { day: 'Sunday', hours: 'Closed', status: 'Closed' }
  ];

  return (
    <Layout 
      title="Contact Us - Zion Tech Group"
      description="Get in touch with Zion Tech Group. We're here to help with your AI consciousness, quantum computing, and space technology needs."
      keywords="contact us, Zion Tech Group, support, sales, partnerships, contact information"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Ready to revolutionize your business with AI consciousness, quantum computing, 
                or space technology? We're here to help you get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact-form"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                  <MessageSquare className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#contact-methods"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Contact Methods
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section id="contact-methods" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multiple Ways to Connect
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the method that works best for you. We're here to help 24/7.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a href={method.href}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className={`w-20 h-20 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{method.description}</p>
                      <div className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors duration-300">
                        {method.contact}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Tell us about your project or inquiry. We'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-white font-semibold mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="careers">Careers & HR</option>
                    <option value="legal">Legal & Compliance</option>
                    <option value="privacy">Privacy & Security</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, inquiry, or how we can help you..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                    <Sparkles className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact by Department
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get in touch with the right team for your specific needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a href={`mailto:${dept.email}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {dept.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">{dept.description}</p>
                      <div className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors duration-300">
                        {dept.email}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Hours Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Office Hours
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our team is available to help you during these hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
            >
              <div className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <div key={schedule.day} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-semibold">{schedule.day}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-300">{schedule.hours}</div>
                      <div className={`text-sm ${
                        schedule.status === 'Open' ? 'text-green-400' : 
                        schedule.status === 'Limited' ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {schedule.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">
                  Need urgent assistance outside of business hours?
                </p>
                <a 
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Emergency Support
                  <Globe className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our revolutionary technology can transform your business 
                and accelerate your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact-form"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <Sparkles className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Explore Our Services
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
