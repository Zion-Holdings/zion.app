import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ArrowRight, Globe, Shield, Rocket, Brain, Atom, Cpu,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Heart, Star,
  Users, Lock, Cloud, Code, Server, Database, Network, Settings, Target, Play,
  Sparkles, Truck, DollarSign, BarChart3, Palette, Eye, Infinity
} from 'lucide-react';

const UltraFuturisticFooter2046: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Revolutionary Services 2046',
      links: [
        { name: 'AI Consciousness Evolution 2046', href: '/ai-consciousness-evolution-platform-2046', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum AI Neural Networks 2046', href: '/quantum-ai-neural-network-platform-2046', icon: <Atom className="w-4 h-4" /> },
        { name: 'AI Autonomous Business Intelligence 2046', href: '/autonomous-ai-business-intelligence-platform-2046', icon: <Target className="w-4 h-4" /> },
        { name: 'Quantum Cybersecurity Intelligence 2046', href: '/quantum-cybersecurity-intelligence-platform-2046', icon: <Shield className="w-4 h-4" /> },
        { name: 'Autonomous Healthcare AI 2046', href: '/autonomous-healthcare-ai-platform-2046', icon: <Heart className="w-4 h-4" /> },
        { name: 'Quantum AI Metaverse 2046', href: '/quantum-ai-metaverse-platform-2046', icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'Quantum Cloud Infrastructure 2046', href: '/quantum-cloud-infrastructure-platform-2046', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Autonomous DevOps Intelligence 2046', href: '/autonomous-devops-intelligence-platform-2046', icon: <Code className="w-4 h-4" /> },
        { name: 'Autonomous Data Center Management 2046', href: '/autonomous-data-center-management-platform-2046', icon: <Server className="w-4 h-4" /> },
        { name: 'Autonomous Network Management 2046', href: '/autonomous-network-management-platform-2046', icon: <Network className="w-4 h-4" /> },
        { name: 'Autonomous IT Service Management 2046', href: '/autonomous-it-service-management-platform-2046', icon: <Settings className="w-4 h-4" /> },
        { name: 'Quantum Storage Solutions 2046', href: '/quantum-storage-solutions-platform-2046', icon: <Database className="w-4 h-4" /> }
      ]
    },
    {
      title: 'AI & Consciousness',
      links: [
        { name: 'AI Consciousness Evolution 2046', href: '/ai-consciousness-evolution-platform-2046', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum AI Neural Networks 2046', href: '/quantum-ai-neural-network-platform-2046', icon: <Atom className="w-4 h-4" /> },
        { name: 'AI Emotional Intelligence 2046', href: '/ai-emotional-intelligence-platform-2046', icon: <Heart className="w-4 h-4" /> },
        { name: 'Quantum AI Creativity Studio 2046', href: '/quantum-ai-creativity-studio-2046', icon: <Palette className="w-4 h-4" /> },
        { name: 'Autonomous AI Research 2046', href: '/autonomous-ai-research-platform-2046', icon: <Zap className="w-4 h-4" /> },
        { name: 'AI Ethics & Governance 2046', href: '/ai-ethics-governance-platform-2046', icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Business Solutions',
      links: [
        { name: 'AI Autonomous Business Intelligence 2046', href: '/autonomous-ai-business-intelligence-platform-2046', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'AI Quantum Financial Intelligence 2046', href: '/ai-quantum-financial-intelligence-platform-2046', icon: <DollarSign className="w-4 h-4" /> },
        { name: 'Autonomous Supply Chain Intelligence 2046', href: '/autonomous-supply-chain-intelligence-platform-2046', icon: <Truck className="w-4 h-4" /> },
        { name: 'Autonomous Manufacturing Intelligence 2046', href: '/autonomous-manufacturing-intelligence-platform-2046', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Autonomous Energy Management 2046', href: '/autonomous-energy-management-platform-2046', icon: <Zap className="w-4 h-4" /> },
        { name: 'Quantum AI Education 2046', href: '/quantum-ai-education-platform-2046', icon: <Users className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
        { name: 'Our Mission', href: '/mission', icon: <Star className="w-4 h-4" /> },
        { name: 'Leadership Team', href: '/team', icon: <Users className="w-4 h-4" /> },
        { name: 'Careers', href: '/careers', icon: <Target className="w-4 h-4" /> },
        { name: 'News & Updates', href: '/news', icon: <Globe className="w-4 h-4" /> },
        { name: 'Press Kit', href: '/press', icon: <Star className="w-4 h-4" /> }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup', color: 'from-blue-500 to-blue-600' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', color: 'from-cyan-400 to-blue-500' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', color: 'from-blue-600 to-blue-700' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/ziontechgroup', color: 'from-purple-500 to-pink-500' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/@ziontechgroup', color: 'from-red-500 to-red-600' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup', color: 'from-gray-600 to-gray-700' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="bg-black/95 backdrop-blur-xl border-t border-cyan-500/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/15 via-blue-900/15 to-purple-900/15"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12"
          >
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.4)]">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-sm text-cyan-400 font-medium">2046 Technology</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide in 2046.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg">{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span className="text-lg leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={fadeInUp} className="lg:col-span-1">
                <h4 className="text-xl font-semibold text-white mb-8 flex items-center space-x-2">
                  <span className="w-1 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 group hover:translate-x-2"
                      >
                        <div className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-200">
                          {link.icon}
                        </div>
                        <span className="text-base group-hover:text-cyan-400 transition-colors duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-20 pt-16 border-t border-cyan-500/30"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Stay Ahead with Innovation
              </h3>
              <p className="text-gray-400 mb-10 max-w-3xl mx-auto text-lg">
                Get the latest insights on AI consciousness, quantum computing, and cutting-edge technology solutions delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-900/50 border border-cyan-500/30 rounded-2xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200 text-lg"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-2xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-500/30 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-base">
                <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
                <p className="mt-2">Pioneering the future of technology since 2025</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={`p-3 rounded-2xl bg-gray-900/50 border border-cyan-500/30 text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 hover:border-cyan-500/50`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>

              {/* Additional Links */}
              <div className="flex items-center space-x-8 text-base text-gray-400">
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2046;