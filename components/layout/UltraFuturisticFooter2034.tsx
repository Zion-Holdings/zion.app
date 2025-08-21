import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Twitter, Linkedin, Github, 
  ArrowRight, Sparkles, Star,
  Shield, Zap, Brain, Atom,
  Rocket, Target, Microscope
} from 'lucide-react';

const UltraFuturisticFooter2034: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: '🧠 AI & Consciousness',
      icon: Brain,
      services: [
        { name: 'AI Consciousness Evolution 2026', href: '/ai-consciousness-evolution-2026' },
        { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion-platform' },
        { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator' },
        { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
        { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }
      ]
    },
    {
      title: '⚛️ Quantum & Emerging Tech',
      icon: Atom,
      services: [
        { name: 'Space Mining Platform 2026', href: '/space-mining-platform-2026' },
        { name: 'Quantum Bio-Computing 2026', href: '/quantum-bio-computing-2026' },
        { name: 'Brain-Computer Interface 2026', href: '/brain-computer-interface-2026' },
        { name: 'Quantum Energy Platform 2026', href: '/quantum-energy-platform-2026' },
        { name: 'Autonomous Vehicle AI 2026', href: '/autonomous-vehicle-ai-2026' }
      ]
    },
    {
      title: '🏙️ Enterprise IT',
      icon: Shield,
      services: [
        { name: 'Quantum Cloud Infrastructure 2026', href: '/quantum-cloud-infrastructure-2026' },
        { name: 'Edge Computing Orchestrator 2026', href: '/edge-computing-orchestrator-2026' },
        { name: 'Zero Trust Security Platform 2026', href: '/zero-trust-security-platform-2026' },
        { name: 'Blockchain Enterprise Platform 2026', href: '/blockchain-enterprise-platform-2026' },
        { name: 'AI-Powered DevOps 2026', href: '/ai-powered-devops-2026' }
      ]
    },
    {
      title: '🎯 Micro SAAS',
      icon: Target,
      services: [
        { name: 'LegalAI Contract Analyzer Pro', href: '/legal-ai-contract-analyzer-pro' },
        { name: 'QuantumRisk Financial Intelligence', href: '/quantum-risk-financial-platform' },
        { name: 'HealthAI Diagnostics Pro', href: '/ai-powered-healthcare-diagnostics-pro' },
        { name: 'QuantumChain Supply Optimizer', href: '/quantum-supply-chain-optimizer' },
        { name: 'CreativeAI Studio Pro', href: '/ai-powered-creative-studio-pro' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <footer className="relative bg-black border-t border-cyan-500/30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-75 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-300">Future Technology Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future with revolutionary AI consciousness, quantum computing, emerging technologies, and innovative micro SAAS solutions that transform businesses worldwide.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-300">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors duration-300">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href={contactInfo.website} className="hover:text-cyan-300">
                    {contactInfo.website}
                  </a>
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
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="xl:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-4">
                <category.icon className="w-5 h-5 text-cyan-400" />
                <h4 className="text-lg font-semibold text-white">{category.title}</h4>
              </div>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick Links & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pt-8 border-t border-cyan-500/20">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-cyan-400 mr-2" />
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-300 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Star className="w-5 h-5 text-cyan-400 mr-2" />
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Github, href: '#', label: 'GitHub' }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-300 hover:from-cyan-500/30 hover:to-purple-500/30 hover:text-cyan-200 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                Stay Updated
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Get the latest updates on revolutionary technologies and innovations.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. Leading the future of technology.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-6 text-sm"
            >
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                Cookie Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/25 flex items-center justify-center text-white hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
        >
          <ArrowRight className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default UltraFuturisticFooter2034;
