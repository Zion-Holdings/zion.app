import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Shield, Rocket, Brain, Atom,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Heart, Star,
  Users, Lock, Cloud, Code, Server, Database, Network, Settings, Target, Play,
  ArrowRight, HelpCircle
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const footerSections = [
    {
      title: 'Revolutionary Services 2045',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', icon: Brain },
        { name: 'Quantum Neural Networks 2045', href: '/quantum-neural-network-platform-2045', icon: Atom },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045', icon: Target },
        { name: 'Quantum Cybersecurity 2045', href: '/quantum-cybersecurity-platform-2045', icon: Shield },
        { name: 'Space Resource Intelligence 2045', href: '/space-resource-intelligence-2045', icon: Rocket },
        { name: 'Autonomous Customer Success 2045', href: '/autonomous-customer-success-2045', icon: Users }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'Quantum Cloud Infrastructure 2045', href: '/quantum-cloud-infrastructure-2045', icon: Cloud },
        { name: 'Autonomous DevOps Platform 2045', href: '/autonomous-devops-platform-2045', icon: Code },
        { name: 'Quantum Data Center Management 2045', href: '/quantum-data-center-management-2045', icon: Server },
        { name: 'Autonomous Network Management 2045', href: '/autonomous-network-management-2045', icon: Network },
        { name: 'Autonomous IT Service Management 2045', href: '/autonomous-it-service-management-2045', icon: Settings },
        { name: 'Autonomous Security Operations Center 2045', href: '/autonomous-security-operations-center-2045', icon: Lock }
      ]
    },
    {
      title: 'AI & Consciousness',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', icon: Brain },
        { name: 'Quantum AI Cognitive 2045', href: '/quantum-ai-cognitive-2045', icon: Atom },
        { name: 'Autonomous AI Research 2045', href: '/autonomous-ai-research-2045', icon: Zap },
        { name: 'Emotional AI Intelligence 2045', href: '/emotional-ai-intelligence-2045', icon: Heart },
        { name: 'Quantum AI Metaverse 2045', href: '/quantum-ai-metaverse-2045', icon: Globe },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045', icon: Target }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Mission', href: '/mission', icon: Star },
        { name: 'Leadership Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Target },
        { name: 'News & Updates', href: '/news', icon: Play },
        { name: 'Press Kit', href: '/press', icon: Database }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://www.youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
  ];

  const quickLinks = [
    { name: 'Get Started', href: '/get-started', icon: <ArrowRight className="w-4 h-4" /> },
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
            {footerSections.map((section, sectionIndex) => (
              <motion.div key={section.title} variants={fadeInUp} className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-200 group hover:translate-x-1"
                      >
                        <div className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200">
                          <link.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm group-hover:text-cyan-400 transition-colors duration-200">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                © {currentYear} Zion Tech Group. All rights reserved. Revolutionary Technology 2045.
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-900/50 border border-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110 hover:border-cyan-500/50"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;