import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, ExternalLink,
  Brain, Atom, Shield, Rocket, Cpu, Target, Sparkles,
  Zap, Star, TrendingUp, Award, Clock, CheckCircle,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github,
  Heart, Shield as ShieldIcon, Lock, Eye, Code, Server,
  Cloud, Network, Settings, Users, Handshake, HelpCircle
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Revolutionary Services 2045',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', icon: <Brain className="w-5 h-5" /> },
        { name: 'Quantum Neural Networks 2045', href: '/quantum-neural-network-platform-2045', icon: <Atom className="w-5 h-5" /> },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045', icon: <Target className="w-5 h-5" /> },
        { name: 'Quantum Cybersecurity 2045', href: '/quantum-cybersecurity-platform-2045', icon: <Shield className="w-5 h-5" /> },
        { name: 'Space Resource Intelligence 2045', href: '/space-resource-intelligence-2045', icon: <Rocket className="w-5 h-5" /> },
        { name: 'Autonomous Customer Success 2045', href: '/autonomous-customer-success-2045', icon: <Users className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'Quantum Cloud Infrastructure 2045', href: '/quantum-cloud-infrastructure-2045', icon: <Cloud className="w-5 h-5" /> },
        { name: 'Autonomous DevOps Platform 2045', href: '/autonomous-devops-platform-2045', icon: <Code className="w-5 h-5" /> },
        { name: 'Quantum Data Center Management 2045', href: '/quantum-data-center-management-2045', icon: <Server className="w-5 h-5" /> },
        { name: 'Autonomous Network Management 2045', href: '/autonomous-network-management-2045', icon: <Network className="w-5 h-5" /> },
        { name: 'Autonomous IT Service Management 2045', href: '/autonomous-it-service-management-2045', icon: <Settings className="w-5 h-5" /> },
        { name: 'Autonomous Security Operations Center 2045', href: '/autonomous-security-operations-center-2045', icon: <Lock className="w-5 h-5" /> }
      ]
    },
    {
      title: 'AI & Consciousness',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', icon: <Brain className="w-5 h-5" /> },
        { name: 'Quantum AI Cognitive 2045', href: '/quantum-ai-cognitive-2045', icon: <Atom className="w-5 h-5" /> },
        { name: 'Autonomous AI Research 2045', href: '/autonomous-ai-research-2045', icon: <Zap className="w-5 h-5" /> },
        { name: 'Emotional AI Intelligence 2045', href: '/emotional-ai-intelligence-2045', icon: <Heart className="w-5 h-5" /> },
        { name: 'Quantum AI Metaverse 2045', href: '/quantum-ai-metaverse-2045', icon: <Globe className="w-5 h-5" /> },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045', icon: <Target className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: <Users className="w-5 h-5" /> },
        { name: 'Our Mission', href: '/mission', icon: <Target className="w-5 h-5" /> },
        { name: 'Leadership Team', href: '/team', icon: <Star className="w-5 h-5" /> },
        { name: 'Careers', href: '/careers', icon: <Zap className="w-5 h-5" /> },
        { name: 'News & Updates', href: '/news', icon: <Globe className="w-5 h-5" /> },
        { name: 'Press Kit', href: '/press', icon: <Globe className="w-5 h-5" /> }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
  ];

  const quickLinks = [
    { name: 'Get Started', href: '/get-started', icon: <ArrowRight className="w-4 h-4" /> },
    { name: 'Contact Sales', href: '/contact', icon: <Phone className="w-4 h-4" /> },
    { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { name: 'Documentation', href: '/docs', icon: <Code className="w-4 h-4" /> }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-blue-900/10 to-purple-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
          >
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-300 font-medium">Innovation 2045</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading the future of technology with cutting-edge AI, quantum computing, and innovative micro SAAS solutions that transform businesses and industries.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={fadeInUp} className="lg:col-span-1">
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                  <span className="w-1 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-200 group hover:translate-x-1"
                      >
                        <div className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <span className="text-sm group-hover:text-cyan-400 transition-colors duration-200">
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
            className="mt-16 pt-12 border-t border-cyan-500/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Ahead with Innovation
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Get the latest insights on AI, quantum computing, and cutting-edge technology solutions delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-500/20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
                <p className="mt-1">Pioneering the future of technology since 2025</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-gray-900/50 border border-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110 hover:border-cyan-500/50"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>

              {/* Additional Links */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/status" className="hover:text-cyan-400 transition-colors duration-200">
                  System Status
                </Link>
                <Link href="/sitemap" className="hover:text-cyan-400 transition-colors duration-200">
                  Sitemap
                </Link>
                <Link href="/accessibility" className="hover:text-cyan-400 transition-colors duration-200">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Top Section - Company Info */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Zion Tech Group
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Experience the future of technology with our cutting-edge AI, quantum computing, and autonomous solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={fadeInUp} className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6 border-b border-cyan-500/30 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-200 group hover:translate-x-1"
                    >
                      <div className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200">
                        {link.icon}
                      </div>
                      <span className="text-sm group-hover:text-cyan-400 transition-colors duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Links */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
              >
                {link.icon}
                <span className="text-sm group-hover:text-cyan-400">{link.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section - Divider & Copyright */}
      <div className="border-t border-gray-800/50 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-sm">© {currentYear} Zion Tech Group. All rights reserved.</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-cyan-400 transition-colors duration-200">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;