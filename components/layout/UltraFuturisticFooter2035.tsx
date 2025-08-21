import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, Brain, Atom, Shield, Rocket, Target,
  Users, Globe, Zap, TrendingUp, Award,
  Mail, Phone, MapPin, ArrowRight, ExternalLink,
  Github, Twitter, Linkedin, Facebook, Instagram,
  Youtube
} from 'lucide-react';

const footerSections = [
  {
    title: 'AI & Consciousness',
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },
      { name: 'Autonomous AI Ecosystem', href: '/autonomous-ai-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Content Generator Pro', href: '/ai-content-generator' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    links: [
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Networking Platform', href: '/quantum-networking-platform' },
      { name: 'Quantum Cybersecurity Suite', href: '/quantum-cybersecurity-suite' },
      { name: 'Quantum Data Analytics', href: '/quantum-data-analytics-platform' },
      { name: 'Space Mining Platform', href: '/space-mining-platform' }
    ]
  },
  {
    title: 'Enterprise IT',
    links: [
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-automation' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise-platform' },
      { name: 'Quantum Data Center', href: '/quantum-data-center' },
      { name: '5G Private Network Solutions', href: '/5g-private-network-solutions' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' }
    ]
  },
  {
    title: 'Micro SAAS',
    links: [
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform' },
      { name: 'AI Sales Automation', href: '/ai-powered-sales-automation' },
      { name: 'CyberShield Pro', href: '/cyber-shield-pro' },
      { name: 'DataVault Hub', href: '/data-vault-hub' },
      { name: 'DevOps Automation Studio', href: '/devops-automation-studio' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press & Media', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' }
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
  { name: 'Developer Tools', href: '/developer-tools' },
  { name: 'Blog & Insights', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'White Papers', href: '/white-papers' }
];

const supportLinks = [
  { name: 'Help Center', href: '/help' },
  { name: 'Contact Support', href: '/contact' },
  { name: 'Status Page', href: '/status' },
  { name: 'Community Forum', href: '/community' },
  { name: 'Training & Certification', href: '/training' },
  { name: 'Professional Services', href: '/professional-services' }
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
];

export default function UltraFuturisticFooter2035() {
  return (
    <footer className="relative bg-gray-900/80 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-green-400 rounded-full animate-bounce opacity-35"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-sm text-gray-400">Future Technology Solutions</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future with revolutionary AI, quantum computing, and emerging technologies. 
                Transform your business with our cutting-edge solutions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-8 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Ahead of the Future
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest insights on AI, quantum computing, and emerging technologies. 
                Be the first to know about our revolutionary new services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700/50">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-cyan-300 transition-colors duration-300 ml-2">
                Privacy Policy
              </Link> | 
              <Link href="/terms" className="hover:text-cyan-300 transition-colors duration-300 ml-2">
                Terms of Service
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </footer>
  );
}