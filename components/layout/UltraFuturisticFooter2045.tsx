import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ArrowRight, Globe, Shield, Rocket, Brain, Atom, Cpu,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Heart, Star,
  Users, Lock, Cloud, Code, Server, Database, Network, Settings, Target, Play, FileText, ArrowUp, HelpCircle,
  DollarSign, Truck, Eye
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
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-platform', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum AI Neural Networks 2045', href: '/quantum-ai-neural-network-platform', icon: <Atom className="w-4 h-4" /> },
        { name: 'Autonomous AI Research 2045', href: '/autonomous-ai-research-assistant', icon: <Eye className="w-4 h-4" /> },
        { name: 'Emotional AI Intelligence 2045', href: '/emotional-ai-intelligence-platform', icon: <Heart className="w-4 h-4" /> },
        { name: 'Quantum AI Metaverse 2045', href: '/quantum-ai-metaverse-platform', icon: <Globe className="w-4 h-4" /> },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence', icon: <Target className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Autonomous DevOps Intelligence', href: '/autonomous-devops-intelligence-platform', icon: <Code className="w-4 h-4" /> },
        { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', icon: <Network className="w-4 h-4" /> },
        { name: 'Zero-Trust Network Architecture', href: '/zero-trust-network-architecture-platform', icon: <Shield className="w-4 h-4" /> },
        { name: 'Intelligent Data Pipeline', href: '/intelligent-data-pipeline-orchestration', icon: <Database className="w-4 h-4" /> },
        { name: 'Autonomous Infrastructure Management', href: '/autonomous-infrastructure-management', icon: <Settings className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      links: [
        { name: 'AI Financial Intelligence Platform', href: '/ai-financial-intelligence-platform', icon: <DollarSign className="w-4 h-4" /> },
        { name: 'Autonomous Supply Chain Optimization', href: '/autonomous-supply-chain-optimization', icon: <Truck className="w-4 h-4" /> },
        { name: 'Quantum-Secure Communication Platform', href: '/quantum-secure-communication-platform', icon: <Lock className="w-4 h-4" /> },
        { name: 'AI Healthcare Diagnostics Platform', href: '/ai-healthcare-diagnostics-platform', icon: <Heart className="w-4 h-4" /> },
        { name: 'Autonomous Energy Management System', href: '/autonomous-energy-management-system', icon: <Zap className="w-4 h-4" /> },
        { name: 'Quantum AI Research Assistant', href: '/quantum-ai-research-assistant', icon: <Brain className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
        { name: 'Our Mission', href: '/mission', icon: <Target className="w-4 h-4" /> },
        { name: 'Leadership Team', href: '/team', icon: <Users className="w-4 h-4" /> },
        { name: 'Careers', href: '/careers', icon: <Target className="w-4 h-4" /> },
        { name: 'News & Blog', href: '/blog', icon: <Star className="w-4 h-4" /> },
        { name: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" /> }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github }
  ];

  const quickLinks = [
    { name: 'Get Started', href: '/contact', icon: <ArrowRight className="w-4 h-4" /> },
    { name: 'Contact Sales', href: '/contact', icon: <Phone className="w-4 h-4" /> },
    { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { name: 'Documentation', href: '/docs', icon: <Code className="w-4 h-4" /> }
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 relative overflow-hidden" role="contentinfo">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16"
          >
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-cyan-400 text-sm">Revolutionary Technology 2045</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:underline">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <address className="not-italic">
                    {contactInfo.address}
                  </address>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={fadeInUp} className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                      >
                        <span className="group-hover:scale-110 transition-transform duration-200">
                          {link.icon}
                        </span>
                        <span className="hover:underline">{link.name}</span>
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
                Get the latest insights on AI consciousness, quantum computing, and cutting-edge technology solutions delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  aria-label="Email address for newsletter"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-cyan-500/20"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. Revolutionary Technology 2045.
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-600/50 hover:border-cyan-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Quick Links */}
              <div className="flex items-center space-x-6">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full shadow-2xl shadow-cyan-500/25 flex items-center justify-center text-white hover:shadow-cyan-500/40 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default UltraFuturisticFooter2045;