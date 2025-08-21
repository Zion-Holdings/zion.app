import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, 
  Rocket, Brain, Atom, Shield, Target, Zap,
  Twitter, Linkedin, Facebook, Instagram, Youtube,
  Github, MessageCircle, Twitch, MessageSquare, BookOpen
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Cutting-Edge',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform' },
      { name: 'Quantum Time Manipulation', href: '/quantum-time-manipulation' },
      { name: 'Autonomous AI Civilization', href: '/autonomous-ai-civilization-platform' },
      { name: 'Quantum Neural Interface', href: '/quantum-neural-interface-platform' }
    ]
  },
  {
    title: '🎯 Business Solutions',
    services: [
      { name: 'AI Customer Success', href: '/ai-customer-success-automation' },
      { name: 'AI Content Marketing', href: '/ai-content-marketing-automation' },
      { name: 'Smart Inventory Management', href: '/smart-inventory-management-system' },
      { name: 'AI Sales Automation', href: '/ai-sales-automation' }
    ]
  },
  {
    title: '⚛️ Quantum & Space',
    services: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway' },
      { name: 'Space Debris Management', href: '/space-debris-management-ai-platform' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-algorithm-platform' },
      { name: 'Quantum Neural Interface', href: '/quantum-neural-interface-platform' }
    ]
  },
  {
    title: '🤖 AI & Machine Learning',
    services: [
      { name: 'AI Consciousness Simulation', href: '/ai-consciousness-simulation-platform' },
      { name: 'Autonomous AI Agents', href: '/autonomous-ai-agents-platform-2026' },
      { name: 'AI Healthcare Companion', href: '/ai-healthcare-companion-2026' },
      { name: 'AI Legal Assistant', href: '/ai-legal-assistant' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'News', href: '/news' },
  { name: 'Press', href: '/press' }
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
  { name: 'Training', href: '/training' },
  { name: 'Support', href: '/support' },
  { name: 'Community', href: '/community' },
  { name: 'Partners', href: '/partners' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Security', href: '/security' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'GDPR', href: '/gdpr' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
  { name: 'Discord', href: 'https://discord.gg/ziontechgroup', icon: MessageCircle, color: 'hover:text-indigo-500' },
  { name: 'Medium', href: 'https://medium.com/@ziontechgroup', icon: BookOpen, color: 'hover:text-gray-600' }
];

export default function UltraFuturisticFooter2028() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-cyan-500/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05),transparent_50%)] animate-spin-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-400/70 font-mono">2028 Future Technology</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with revolutionary AI, quantum computing, and space technology solutions. 
                Transforming businesses with cutting-edge innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">🏢 Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">📚 Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">⚖️ Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead with{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                2028 Technology
              </span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest updates on cutting-edge AI, quantum computing, and space technology innovations. 
              Be the first to know about our revolutionary new services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 border border-cyan-400/50 hover:border-cyan-300 flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-cyan-500/30 pt-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 bg-gray-800/50 border border-cyan-500/30 rounded-xl flex items-center justify-center text-gray-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 ${social.color}`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2028 Zion Tech Group. All rights reserved. Building the future, one innovation at a time.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Accessibility
              </Link>
              <Link href="/status" className="text-gray-400 hover:text-cyan-400 transition-colors">
                System Status
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-30" />
    </footer>
  );
}