import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, 
  Star, Globe, Users, Award, ArrowRight,
  CheckCircle, Shield, Zap, Brain
} from 'lucide-react';
import Link from 'next/link';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Contact Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business with cutting-edge technology? Let's discuss how our innovative solutions can drive your success.
              </p>
              
              {/* Quick Contact Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">1hr</div>
                  <div className="text-gray-300 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-gray-300 text-sm">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">Global</div>
                  <div className="text-gray-300 text-sm">Reach</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to connect with our team of technology experts
              </p>
            </motion.div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 rounded-3xl hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Phone</h3>
                <div className="text-center space-y-3">
                  <div className="text-2xl font-bold text-cyan-400">+1 302 464 0950</div>
                  <div className="text-gray-300">Available 24/7 for urgent inquiries</div>
                  <div className="text-sm text-gray-400">International calls welcome</div>
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="tel:+13024640950"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
                  >
                    <span>Call Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 rounded-3xl hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Email</h3>
                <div className="text-center space-y-3">
                  <div className="text-xl font-bold text-purple-400">kleber@ziontechgroup.com</div>
                  <div className="text-gray-300">Professional inquiries and support</div>
                  <div className="text-sm text-gray-400">Response within 1 hour</div>
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="mailto:kleber@ziontechgroup.com"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
                  >
                    <span>Send Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 rounded-3xl hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Office</h3>
                <div className="text-center space-y-3">
                  <div className="text-lg font-bold text-green-400">364 E Main St STE 1008</div>
                  <div className="text-lg font-bold text-green-400">Middletown, DE 19709</div>
                  <div className="text-gray-300">United States</div>
                  <div className="text-sm text-gray-400">Business hours: 9 AM - 6 PM EST</div>
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
                  >
                    <span>View on Map</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900/30 to-black/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tell us about your project and we'll get back to you with a customized solution
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300">
                  <option value="">Select a service category</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="quantum">Quantum Technology</option>
                  <option value="space">Space Technology</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="automation">Business Automation</option>
                  <option value="metaverse">Metaverse Development</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message *</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, requirements, or questions..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'AI-First Approach',
                  description: 'Leading-edge artificial intelligence solutions that adapt and evolve',
                  color: 'from-cyan-500 to-blue-600'
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Military-grade security and compliance solutions',
                  color: 'from-green-500 to-emerald-600'
                },
                {
                  icon: Zap,
                  title: 'Rapid Deployment',
                  description: 'Fast implementation and continuous optimization',
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  icon: Star,
                  title: 'Innovation Leader',
                  description: 'Pioneering the future of technology',
                  color: 'from-yellow-500 to-orange-600'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/innovative-2036-services-showcase">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    Explore Our Services
                  </button>
                </Link>
                <Link href="/demo">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Request Demo
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ContactPage;
