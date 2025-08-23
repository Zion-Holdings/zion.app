import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ArrowRight, Star, Sparkles,
  Brain, Atom, Shield, Cpu, Code, Rocket, Users,
  Globe, Lock, Database, Server, Zap, TrendingUp,
  MessageCircle, HelpCircle, BookOpen, FileText, 
  GraduationCap, Building, Handshake, Heart
} from 'lucide-react';

const UltraFuturisticFooter2040: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Revolutionary Services',
      links: [
        { name: 'AI & Consciousness', href: '/ai-services' },
        { name: 'Quantum Technology', href: '/quantum-services' },
        { name: 'Enterprise Solutions', href: '/it-services' },
        { name: 'Micro SAAS Solutions', href: '/micro-saas' },
        { name: 'Space Technology', href: '/space-tech' },
        { name: 'All Services', href: '/services' }
      ]
    },
    {
      title: 'AI Autonomous Services',
      links: [
        { name: 'AI Research Assistant', href: '/ai-autonomous-research-assistant' },
        { name: 'AI Content Factory', href: '/ai-autonomous-content-factory' },
        { name: 'AI Customer Success', href: '/ai-autonomous-customer-success' },
        { name: 'AI Sales Intelligence', href: '/ai-autonomous-sales-intelligence' },
        { name: 'AI Product Management', href: '/ai-autonomous-product-management' }
      ]
    },
    {
      title: 'IT Infrastructure',
      links: [
        { name: 'Quantum Cloud Infrastructure', href: '/quantum-ready-cloud-infrastructure' },
        { name: 'AI DevOps Automation', href: '/ai-powered-devops-automation' },
        { name: 'Zero-Trust Security', href: '/zero-trust-network-architecture' },
        { name: 'Edge Computing', href: '/edge-computing-orchestration' },
        { name: 'Blockchain Platform', href: '/blockchain-infrastructure-platform' }
      ]
    },
    {
      title: 'Resources & Support',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Support Center', href: '/support' },
        { name: 'Training & Certification', href: '/training' },
        { name: 'Community Forum', href: '/community' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: '💻' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: '📺' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black border-t border-cyan-500/20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 border border-cyan-400/10 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 border border-purple-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-16 h-16 border border-blue-400/10 transform rotate-12 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Innovation Leader 2025</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Pioneering the future of technology with revolutionary AI, quantum computing, and autonomous solutions that transform businesses and drive innovation.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+1 302 464 0950" className="hover:underline">+1 302 464 0950</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-black">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
            <p className="mt-1">Pioneering the future of technology.</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-lg hover:border-cyan-400/60 hover:scale-110 transition-all duration-300"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-3 lg:items-end"
          >
            <Link href="/contact">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/support">
              <button className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Get Support
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link href="/security" className="hover:text-cyan-400 transition-colors">Security</Link>
              <Link href="/compliance" className="hover:text-cyan-400 transition-colors">Compliance</Link>
              <Link href="/accessibility" className="hover:text-cyan-400 transition-colors">Accessibility</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Built with innovation and care</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-4 left-4 w-8 h-8 border border-cyan-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-6 h-6 border border-purple-400/20 rounded-lg animate-pulse delay-1000"></div>
    </footer>
  );
};

export default UltraFuturisticFooter2040;