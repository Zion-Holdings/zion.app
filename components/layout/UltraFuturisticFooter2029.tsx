import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, 
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Zap, Brain, Atom, Rocket, Shield, Briefcase,
  Users, BookOpen, MessageCircle, Star, TrendingUp, Target, DollarSign
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 Cutting-Edge Innovations',
    services: [
      { name: 'AI Neuromorphic Computing', href: '/ai-neuromorphic-computing-platform' },
      { name: 'Quantum Internet Protocol v2.0', href: '/quantum-internet-protocol-v2' },
      { name: 'Autonomous Space Mining', href: '/autonomous-space-mining-platform' },
      { name: 'Biotech AI Drug Discovery', href: '/biotech-ai-drug-discovery' }
    ]
  },
  {
    title: '⚡ Emerging Technology',
    services: [
      { name: 'Smart City IoT Management', href: '/smart-city-iot-management' },
      { name: 'Edge AI Computing Network', href: '/edge-ai-computing-network' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai' },
      { name: 'Digital Twin Platform', href: '/digital-twin-platform' }
    ]
  },
  {
    title: '💼 Micro SAAS Solutions',
    services: [
      { name: 'AI Content Marketing Suite', href: '/ai-content-marketing-suite' },
      { name: 'Smart Invoice & Expense Manager', href: '/smart-invoice-expense-manager' },
      { name: 'AI Customer Support Automation', href: '/ai-customer-support-automation' },
      { name: 'Smart Project Management Platform', href: '/smart-project-management-platform' }
    ]
  }
];

const quickLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Careers', href: '/careers', icon: Users }
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-sky-400' },
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' }
];

export default function UltraFuturisticFooter2029() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 border-t border-purple-500/30">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-purple-300">Future Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge technology solutions, from AI and quantum computing 
                to emerging technologies and micro SAAS platforms.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors duration-200">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors duration-200">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="lg:col-span-1"
              >
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                  {category.title}
                </h4>
                <ul className="space-y-3">
                  {category.services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-gray-300 hover:text-purple-300 transition-colors duration-200 text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-purple-500/30"
          >
            <h4 className="text-lg font-semibold text-white mb-6 text-center">Quick Navigation</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-purple-900/30 transition-all duration-200 group"
                >
                  <link.icon className="w-6 h-6 text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-200" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200 text-center">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-purple-500/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center text-gray-300 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest updates on emerging technologies and new services.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-200"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="py-6 border-t border-purple-500/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2029 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-purple-300 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-purple-300 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-purple-300 transition-colors duration-200">
                Support
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-20 left-10 text-purple-500/20"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Brain className="w-8 h-8" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 right-20 text-blue-500/20"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Atom className="w-6 h-6" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 right-10 text-green-500/20"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket className="w-10 h-10" />
        </motion.div>
      </div>
    </footer>
  );
}