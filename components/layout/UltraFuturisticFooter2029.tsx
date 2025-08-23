import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, 
  Rocket, Brain, Atom, Zap, Crown, Gem,
  Twitter, Linkedin, Facebook, Instagram, Youtube,
  Github, ExternalLink
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2029 Cutting-Edge Innovations',
    services: [
      { name: 'AI Neuromorphic Computing', href: '/ai-neuromorphic-computing-platform' },
      { name: 'Quantum Internet Protocol v2.0', href: '/quantum-internet-protocol-v2' },
      { name: 'Autonomous Space Mining', href: '/autonomous-space-mining-platform' },
      { name: 'Biotech AI Drug Discovery', href: '/biotech-ai-drug-discovery' }
    ]
  },
  {
    title: '⚡ Emerging Technology Solutions',
    services: [
      { name: 'Smart City IoT Management', href: '/smart-city-iot-management' },
      { name: 'Edge AI Computing Network', href: '/edge-ai-computing-network' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai' },
      { name: '6G Network Infrastructure', href: '/6g-network-infrastructure' }
    ]
  },
  {
    title: '💎 Micro SAAS Innovations',
    services: [
      { name: 'AI Content Marketing Suite', href: '/ai-content-marketing-suite' },
      { name: 'Smart Invoice & Expense Manager', href: '/smart-invoice-expense-manager' },
      { name: 'AI Customer Support Automation', href: '/ai-customer-support-automation' },
      { name: 'Smart Project Management Platform', href: '/smart-project-management-platform' }
    ]
  }
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'Blog', href: '/blog' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
];

export default function UltraFuturisticFooter2029() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-black border-t border-purple-500/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-cyan-400 font-medium">Future Technology Solutions</p>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading the future of technology with cutting-edge AI, Quantum Computing, and Emerging Tech solutions. 
              Transform your business with innovative micro SAAS services and enterprise-grade infrastructure.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <a href={`tel:${contactInfo.mobile}`} className="text-sm">{contactInfo.mobile}</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm">{contactInfo.email}</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={category.title}>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <span className="text-2xl">{category.title.split(' ')[0]}</span>
                <span className="text-sm text-gray-400">{category.title.split(' ').slice(1).join(' ')}</span>
              </h4>
              <ul className="space-y-3">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center space-x-2"
                    >
                      <span>{service.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-cyan-600 hover:to-purple-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-64 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2029 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2">
                Privacy Policy
              </Link> | 
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300 ml-2">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse" />
              <span>in Delaware, USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-20 left-20 w-16 h-16 border border-cyan-500/20 rounded-lg opacity-30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-20 w-12 h-12 border border-purple-500/20 rounded-full opacity-30"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Neon Glow Effects */}
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-purple-500/5 via-transparent to-transparent rounded-full blur-3xl" />
    </footer>
  );
}