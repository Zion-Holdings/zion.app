import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Brain, Atom, Shield, Rocket, Globe, Phone, Mail, MapPin, 
  ArrowRight, Twitter, Linkedin, Github, Facebook, Instagram, Youtube,
  Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock,
  Heart, Lightbulb
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
    title: 'Revolutionary Services',
    description: 'Cutting-edge technology solutions that transform businesses',
    items: [
      { name: 'AI & Consciousness', href: '/ai-services', icon: Brain },
      { name: 'Quantum Computing', href: '/quantum-services', icon: Atom },
      { name: 'Enterprise IT', href: '/enterprise-it', icon: Shield },
      { name: 'Micro SAAS', href: '/micro-saas', icon: Rocket },
      { name: 'Space Technology', href: '/space-tech', icon: Globe },
      { name: 'Emerging Tech', href: '/emerging-tech', icon: Sparkles }
    ]
  },
  {
    title: 'Featured Solutions',
    description: 'Our most innovative and transformative services',
    items: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution', icon: Brain },
      { name: 'Space Mining Platform', href: '/space-mining-platform', icon: Rocket },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', icon: Cloud },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface', icon: Cpu },
      { name: 'AI Content Factory', href: '/ai-content-factory', icon: Lightbulb },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', icon: Lock }
    ]
  },
  {
    title: 'Industry Solutions',
    description: 'Specialized solutions for different industries',
    items: [
      { name: 'Healthcare AI', href: '/ai-healthcare-diagnostics', icon: Heart },
      { name: 'Financial Intelligence', href: '/ai-financial-intelligence', icon: BarChart3 },
      { name: 'Manufacturing', href: '/manufacturing-solutions', icon: Settings },
      { name: 'Retail Optimization', href: '/ecommerce-optimization-platform', icon: Eye },
      { name: 'Government & Defense', href: '/government-solutions', icon: Shield },
      { name: 'Education Technology', href: '/ai-education-platform', icon: Award }
    ]
  },
  {
    title: 'Company & Resources',
    description: 'Learn more about Zion Tech Group',
    items: [
      { name: 'About Us', href: '/about', icon: Globe },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { name: 'Documentation', href: '/docs', icon: Settings },
      { name: 'Blog & News', href: '/blog', icon: Lightbulb },
      { name: 'Careers', href: '/careers', icon: Heart },
      { name: 'Support Center', href: '/support', icon: Eye }
    ]
  }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'hover:text-red-500' }
];

const quickLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Security', href: '/security' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'Accessibility', href: '/accessibility' }
];

export default function UltraFuturisticFooter2034() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {section.description}
                </p>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                      <item.icon className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800/50 my-12"></div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-gray-400 text-sm">Revolutionary Technology Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Leading provider of revolutionary AI consciousness, quantum computing, space technology, and emerging tech solutions that transform businesses and accelerate human progress.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white mb-4">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-400">{contactInfo.mobile}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-400 text-sm">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-300 text-sm">
                Get the latest insights on revolutionary technology, AI consciousness, and quantum computing breakthroughs.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                />
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800/50 my-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-gray-400 text-sm">
                © 2025 Zion Tech Group. All rights reserved. Revolutionary technology solutions for the future.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                <span>Revolutionary Technology Solutions</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>ISO 27001 Certified</span>
                <span>•</span>
                <span>SOC 2 Type II</span>
                <span>•</span>
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
