import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Globe, MessageCircle, 
  Building, Users, Award, Shield, Zap, Brain, Rocket
} from 'lucide-react';
import Link from 'next/link';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business with <span className="text-cyan-400 font-semibold">revolutionary technology</span>? Let's discuss how Zion Tech Group can accelerate your success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Grid */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {/* Phone Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:bg-black/50 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Phone</h3>
                  <p className="text-cyan-400 text-xl mb-4">+1 302 464 0950</p>
                  <p className="text-gray-400 mb-6">Available Monday - Friday, 9 AM - 6 PM EST</p>
                  <Link href="tel:+13024640950">
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      Call Now
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* Email Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:bg-black/50 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
                  <p className="text-purple-400 text-xl mb-4">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400 mb-6">We respond within 2 hours during business hours</p>
                  <Link href="mailto:kleber@ziontechgroup.com">
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                      Send Email
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300 hover:bg-black/50 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Office</h3>
                  <p className="text-green-400 text-lg mb-4">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                  <p className="text-gray-400 mb-6">United States</p>
                  <Link href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" target="_blank">
                    <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                      Get Directions
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Business Hours & Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-cyan-400" />
                  Business Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white font-medium">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white font-medium">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white font-medium">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Emergency Support</span>
                    <span className="text-green-400 font-medium">24/7 Available</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-purple-400" />
                  Global Reach
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">500+ Active Customers Worldwide</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Industry Leader in AI & Quantum Tech</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Enterprise-Grade Security & Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">99.9% Uptime Guarantee</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 2 hours to discuss your project requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              
              <textarea
                placeholder="Tell us about your project and how we can help..."
                rows={4}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors mb-8"
              ></textarea>
              
              <button className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 text-lg">
                Send Message
              </button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-24 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another technology company - we're your strategic partner in digital transformation
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-white" />,
                  title: "AI-First Innovation",
                  description: "Leading-edge artificial intelligence solutions that adapt and evolve with your business needs",
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  icon: <Rocket className="w-12 h-12 text-white" />,
                  title: "Space Technology",
                  description: "Revolutionary space resource optimization and management solutions for the future",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  icon: <Shield className="w-12 h-12 text-white" />,
                  title: "Quantum Security",
                  description: "Future-proof cybersecurity with quantum-resistant algorithms and autonomous threat response",
                  color: "from-green-500 to-emerald-600"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-8 group hover:bg-white/10 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`w-24 h-24 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                Join hundreds of companies already leveraging our revolutionary technology solutions to accelerate their growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/services">
                  <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 text-lg">
                    Explore Our Services
                  </button>
                </Link>
                <Link href="/innovative-2025-new-micro-saas-services">
                  <button className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg">
                    View 2025 Services
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
