import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ArrowRight, Globe, Shield, Rocket, Brain, Atom, Cpu,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Heart, Star,
  Users, Lock, Cloud, Code, Server, Database, Network, Settings, Target, Play
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();

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

  const quickActions = [
    { name: 'Get Started', href: '/contact', icon: Rocket, color: 'from-cyan-500 to-blue-500' },
    { name: 'Request Demo', href: '/demo', icon: Play, color: 'from-purple-500 to-pink-500' },
    { name: 'Support', href: '/support', icon: Heart, color: 'from-emerald-500 to-teal-500' },
    { name: 'Documentation', href: '/docs', icon: Code, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <footer className="relative bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-blue-900/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-300">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Actions Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                href={action.href}
                className="group p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                    {action.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            Connect With Us
          </h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:transform hover:scale-110`}
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-8">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              Stay Updated with Future Technology
            </h3>
            <p className="text-gray-400 mb-4">
              Get the latest insights on AI consciousness, quantum computing, and revolutionary technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. Pioneering the future of technology.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-cyan-400/40 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400/40 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity as any,
            ease: "easeInOut"
          }}
        />
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;