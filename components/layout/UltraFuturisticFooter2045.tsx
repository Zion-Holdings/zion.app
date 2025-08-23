import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ArrowRight, Globe, Shield, Rocket, Brain, Atom, Cpu,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Heart, Star,
  Users, Lock, Cloud, Code, Server, Database, Network, Settings, Target, Play,
  ArrowUpRight, Sparkles
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const footerSections = [
    {
      title: 'Revolutionary Services 2045',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045' },
        { name: 'Quantum Neural Networks 2045', href: '/quantum-neural-network-platform-2045' },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045' },
        { name: 'Quantum Cybersecurity 2045', href: '/quantum-cybersecurity-platform-2045' },
        { name: 'Space Resource Intelligence 2045', href: '/space-resource-intelligence-2045' },
        { name: 'Autonomous Customer Success 2045', href: '/autonomous-customer-success-2045' }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'Quantum Cloud Infrastructure 2045', href: '/quantum-cloud-infrastructure-2045' },
        { name: 'Autonomous DevOps Platform 2045', href: '/autonomous-devops-platform-2045' },
        { name: 'Quantum Data Center Management 2045', href: '/quantum-data-center-management-2045' },
        { name: 'Autonomous Network Management 2045', href: '/autonomous-network-management-2045' },
        { name: 'Autonomous IT Service Management 2045', href: '/autonomous-it-service-management-2045' },
        { name: 'Autonomous Security Operations Center 2045', href: '/autonomous-security-operations-center-2045' }
      ]
    },
    {
      title: 'AI & Consciousness',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045' },
        { name: 'Quantum AI Cognitive 2045', href: '/quantum-ai-cognitive-2045' },
        { name: 'Autonomous AI Research 2045', href: '/autonomous-ai-research-2045' },
        { name: 'Emotional AI Intelligence 2045', href: '/emotional-ai-intelligence-2045' },
        { name: 'Quantum AI Metaverse 2045', href: '/quantum-ai-metaverse-2045' },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/mission' },
        { name: 'Leadership Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Press Kit', href: '/press' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'from-blue-500 to-blue-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'from-cyan-400 to-blue-500' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'from-blue-600 to-blue-700' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'from-purple-500 to-pink-500' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ziontechgroup', color: 'from-red-500 to-red-600' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'from-gray-600 to-gray-700' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-purple-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/10 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech
                </span>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                Leading the revolution in futuristic technology solutions. Experience the next generation of AI consciousness, 
                quantum computing, and autonomous business intelligence.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-sm">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-sm">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-300">
                  Get the latest insights on revolutionary technology and AI consciousness evolution.
                </p>
              </div>
              
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our privacy policy and terms of service.
              </p>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-purple-300 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform duration-200 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-800/50">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                © {currentYear} Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="hover:text-purple-300 transition-colors duration-200 ml-2">
                  Privacy Policy
                </Link> | 
                <Link href="/terms" className="hover:text-purple-300 transition-colors duration-200 ml-2">
                  Terms of Service
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
        </motion.button>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;