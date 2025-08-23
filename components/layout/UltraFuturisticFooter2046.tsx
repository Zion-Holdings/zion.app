import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ArrowRight, Globe, Shield, Rocket, Brain, Atom, Cpu,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Heart, Star,
  Users, Lock, Cloud, Code, Server, Database, Network, Settings, Target, Play,
  FileText, TrendingUp
} from 'lucide-react';

const UltraFuturisticFooter2046: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const footerSections = [
    {
      title: 'AI & Consciousness 2046',
      links: [
        { name: 'AI Consciousness Evolution 2046', href: '/ai-consciousness-evolution-platform-2046', icon: Brain },
        { name: 'Quantum AI Neural Network 2046', href: '/quantum-ai-neural-network-platform-2046', icon: Brain },
        { name: 'Autonomous AI Research 2046', href: '/autonomous-ai-research-platform-2046', icon: Brain },
        { name: 'Emotional AI Intelligence 2046', href: '/emotional-ai-intelligence-platform-2046', icon: Heart },
        { name: 'Quantum AI Metaverse 2046', href: '/quantum-ai-metaverse-platform-2046', icon: Brain },
        { name: 'Autonomous Quantum Business Intelligence 2046', href: '/autonomous-quantum-business-intelligence-suite-2046', icon: Brain }
      ]
    },
    {
      title: 'Quantum Technology 2046',
      links: [
        { name: 'Quantum Cloud Infrastructure 2046', href: '/quantum-cloud-infrastructure-platform-2046', icon: Cloud },
        { name: 'Quantum Cybersecurity Intelligence 2046', href: '/quantum-cybersecurity-intelligence-platform-2046', icon: Shield },
        { name: 'Quantum Space Resource Intelligence 2046', href: '/quantum-space-resource-intelligence-platform-2046', icon: Brain },
        { name: 'Autonomous Quantum DevOps Intelligence 2046', href: '/autonomous-quantum-devops-intelligence-2046', icon: Code },
        { name: 'Autonomous Quantum Data Center Management 2046', href: '/autonomous-quantum-data-center-management-2046', icon: Server },
        { name: 'Quantum Security Operations Center 2046', href: '/quantum-security-operations-center-2046', icon: Shield }
      ]
    },
    {
      title: 'Business Solutions 2046',
      links: [
        { name: 'AI Quantum Content Intelligence 2046', href: '/ai-quantum-content-intelligence-platform-2046', icon: Brain },
        { name: 'Autonomous Quantum Business Intelligence 2046', href: '/autonomous-quantum-business-intelligence-suite-2046', icon: Brain },
        { name: 'Quantum Customer Success Automation 2046', href: '/quantum-customer-success-automation-2046', icon: Heart },
        { name: 'Quantum Network Management Intelligence 2046', href: '/quantum-network-management-intelligence-2046', icon: Network },
        { name: 'Autonomous Quantum IT Service Management 2046', href: '/autonomous-quantum-it-service-management-2046', icon: Settings },
        { name: 'All Revolutionary Services', href: '/services', icon: Rocket }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Mission', href: '/mission', icon: Target },
        { name: 'Leadership Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Users },
        { name: 'News & Updates', href: '/news', icon: Star },
        { name: 'Press Kit', href: '/press', icon: FileText }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:text-gray-400' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-3 h-3 bg-cyan-400/40 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity as any,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-4 h-4 bg-purple-400/40 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity as any,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-2 h-2 bg-blue-400/30 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity as any,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-green-400/20 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity as any,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="border-b border-cyan-400/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-9 h-9 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient">Zion Tech Group</h3>
                    <p className="text-cyan-400 font-medium">Revolutionary Technology 2046</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Experience the future with our revolutionary quantum-powered AI consciousness, 
                  autonomous business intelligence, and next-generation cybersecurity solutions.
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-cyan-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Quantum Mode Active</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">AI Consciousness</span>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                
                <div className="space-y-4">
                  <a 
                    href={`tel:${contactInfo.mobile}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium">{contactInfo.mobile}</p>
                    </div>
                  </a>
                  
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium">{contactInfo.email}</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="font-medium">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Services Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-white border-b border-cyan-400/30 pb-2">
                  {section.title}
                </h3>
                
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-cyan-300 transition-colors group"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <link.icon className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyan-400/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <p className="text-gray-400">
                  © {currentYear} Zion Tech Group. All rights reserved. 
                  <span className="text-cyan-400 font-medium"> Revolutionary Technology 2046</span>
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
    </footer>
  );
};

export default UltraFuturisticFooter2046;