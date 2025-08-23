import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Users, Building, 
  Rocket, Brain, Atom, Shield, Zap, Target,
  ArrowRight, Star, Sparkles, Award, BookOpen,
  MessageCircle, HelpCircle, FileText, Video,
  Headphones, Code, Database, Network, Server,
  Monitor, Smartphone, Camera, Gamepad2, Palette,
  Music, Film, BookOpenCheck, TrendingUp, Lock,
  Cloud, Settings, Eye, Clock, Heart, Lightbulb,
  DollarSign, BarChart3
} from 'lucide-react';

const UltraFuturisticFooter2037: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-5 h-5" />,
      links: [
        { name: 'AI Content Orchestrator', href: '/ai-content-orchestrator' },
        { name: 'AI Legal Assistant', href: '/ai-legal-assistant' },
        { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
        { name: 'AI Creative Studio', href: '/ai-creative-studio' },
        { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer' }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: <Atom className="w-5 h-5" />,
      links: [
        { name: 'Quantum Cybersecurity Suite', href: '/quantum-cybersecurity-suite' },
        { name: 'Quantum Machine Learning', href: '/quantum-machine-learning-platform' },
        { name: 'Quantum Financial Modeling', href: '/quantum-financial-modeling' },
        { name: 'Quantum Optimization Engine', href: '/quantum-optimization-engine' },
        { name: 'Quantum Cryptography', href: '/quantum-cryptography-platform' }
      ]
    },
    {
      title: 'Space Technology',
      icon: <Rocket className="w-5 h-5" />,
      links: [
        { name: 'Space Data Analytics', href: '/space-data-analytics-platform' },
        { name: 'Space Mining Operations', href: '/space-mining-operations-platform' }
      ]
    },
    {
      title: 'Blockchain & Web3',
      icon: <Globe className="w-5 h-5" />,
      links: [
        { name: 'Blockchain Governance', href: '/blockchain-governance-platform' },
        { name: 'Blockchain Supply Chain', href: '/blockchain-supply-chain-tracking' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: <Sparkles className="w-5 h-5" />,
      links: [
        { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator' },
        { name: 'Metaverse Development Studio', href: '/metaverse-development-studio' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Partners', href: '/partners' },
    { name: 'Investors', href: '/investors' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' }
  ];

  const resourceLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Support', href: '/support' },
    { name: 'Training', href: '/training' },
    { name: 'API Reference', href: '/api-docs' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Pioneering the Future</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the transformation of business through cutting-edge AI, quantum computing, 
              space technology, and blockchain solutions. We're building the future, today.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="text-sm">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Services Sections */}
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <div className="flex items-center space-x-2 mb-4">
                {section.icon}
                <h4 className="font-semibold text-cyan-400">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-cyan-400 mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-cyan-400 mb-4">Resources</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Showcase */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-cyan-400 mb-4">Services Showcase</h4>
              <div className="space-y-3">
                <Link
                  href="/revolutionary-2037-services-showcase"
                  className="inline-flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <Star className="w-4 h-4" />
                  <span>2037 Services Portfolio</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <DollarSign className="w-4 h-4" />
                  <span>Pricing Plans</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
                <Link
                  href="/market-pricing"
                  className="inline-flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Market Pricing</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700/50 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the future of technology with our revolutionary 2037 services. 
            Contact our team to discuss how we can drive innovation and growth in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved. 
              <span className="ml-2 text-cyan-400">Pioneering the Future of Technology</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
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
    </footer>
  );
};

export default UltraFuturisticFooter2037;