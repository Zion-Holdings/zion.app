import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, ExternalLink,
  Brain, Atom, Shield, Rocket, Cpu, Target, Sparkles,
  Zap, Star, TrendingUp, Award, Clock, CheckCircle,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github,
  Heart, Shield as ShieldIcon, Lock, Eye, Code, Server,
  Cloud, Network, Settings, Users, Handshake, HelpCircle,
  Database, Cpu as CpuIcon, Brain as BrainIcon, Atom as AtomIcon,
  Rocket as RocketIcon, Target as TargetIcon, DollarSign,
  ShoppingCart, FileText, Monitor, GraduationCap, Info
} from 'lucide-react';

const UltraFuturisticFooter2046: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const footerSections = [
    {
      title: 'Revolutionary Services 2046',
      description: 'Cutting-edge technology solutions for the future',
      links: [
        { name: 'AI Consciousness Evolution Platform', href: '/services/ai-consciousness-evolution-platform', icon: <Brain className="w-5 h-5" />, price: '$2,499/month' },
        { name: 'Quantum Neural Network Platform', href: '/services/quantum-neural-network-platform', icon: <Atom className="w-5 h-5" />, price: '$1,899/month' },
        { name: 'Quantum Cloud Infrastructure Platform', href: '/services/quantum-cloud-infrastructure-platform', icon: <Cloud className="w-5 h-5" />, price: '$1,499/month' },
        { name: 'Space Resource Mining Intelligence', href: '/services/space-resource-mining-intelligence', icon: <Rocket className="w-5 h-5" />, price: '$1,299/month' },
        { name: 'Autonomous DevOps Intelligence Platform', href: '/services/autonomous-devops-intelligence-platform', icon: <Cpu className="w-5 h-5" />, price: '$699/month' },
        { name: 'Quantum Cybersecurity Threat Intelligence', href: '/services/quantum-cybersecurity-threat-intelligence', icon: <Shield className="w-5 h-5" />, price: '$799/month' }
      ]
    },
    {
      title: 'Innovative Solutions',
      description: 'Industry-specific technology solutions',
      links: [
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation', icon: <FileText className="w-5 h-5" />, price: '$299/month' },
        { name: 'Quantum Financial Trading Intelligence', href: '/services/quantum-financial-trading-intelligence', icon: <DollarSign className="w-5 h-5" />, price: '$899/month' },
        { name: 'Autonomous Healthcare Analytics', href: '/services/autonomous-healthcare-analytics', icon: <Heart className="w-5 h-5" />, price: '$599/month' },
        { name: 'Autonomous Supply Chain Optimization', href: '/services/autonomous-supply-chain-optimization', icon: <ShoppingCart className="w-5 h-5" />, price: '$449/month' },
        { name: 'Emotional AI Intelligence Platform', href: '/services/emotional-ai-intelligence-platform', icon: <Heart className="w-5 h-5" />, price: '$999/month' },
        { name: 'Quantum AI Metaverse Platform', href: '/services/quantum-ai-metaverse-platform', icon: <Globe className="w-5 h-5" />, price: '$1,599/month' }
      ]
    },
    {
      title: 'Technology Categories',
      description: 'Explore our technology expertise areas',
      links: [
        { name: 'AI & Machine Learning', href: '/services/ai-machine-learning', icon: <Brain className="w-5 h-5" />, description: 'AI consciousness and neural networks' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: <Atom className="w-5 h-5" />, description: 'Quantum algorithms and optimization' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: <Shield className="w-5 h-5" />, description: 'Advanced threat detection and response' },
        { name: 'Space Technology', href: '/services/space-technology', icon: <Rocket className="w-5 h-5" />, description: 'Space exploration and resource mining' },
        { name: 'Cloud Infrastructure', href: '/services/cloud-infrastructure', icon: <Cloud className="w-5 h-5" />, description: 'Quantum-ready cloud solutions' },
        { name: 'DevOps & Automation', href: '/services/devops-automation', icon: <Cpu className="w-5 h-5" />, description: 'Autonomous development operations' }
      ]
    },
    {
      title: 'Company & Resources',
      description: 'Learn more about Zion Tech Group',
      links: [
        { name: 'About Us', href: '/about', icon: <Info className="w-5 h-5" />, description: 'Our mission and vision' },
        { name: 'Our Team', href: '/team', icon: <Users className="w-5 h-5" />, description: 'Meet our experts' },
        { name: 'Documentation', href: '/docs', icon: <Code className="w-5 h-5" />, description: 'Technical resources' },
        { name: 'Blog & News', href: '/blog', icon: <Globe className="w-5 h-5" />, description: 'Latest insights' },
        { name: 'Case Studies', href: '/case-studies', icon: <TrendingUp className="w-5 h-5" />, description: 'Success stories' },
        { name: 'Support Center', href: '/support', icon: <HelpCircle className="w-5 h-5" />, description: 'Get help and support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-sky-400' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-500' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-400' }
  ];

  const quickLinks = [
    { name: 'Get Started', href: '/get-started', icon: <ArrowRight className="w-4 h-4" />, color: 'from-cyan-500 to-blue-500' },
    { name: 'Contact Sales', href: '/contact', icon: <Phone className="w-4 h-4" />, color: 'from-green-500 to-emerald-500' },
    { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' },
    { name: 'Documentation', href: '/docs', icon: <Code className="w-4 h-4" />, color: 'from-orange-500 to-red-500' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{section.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{section.description}</p>
                </div>
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + linkIndex * 0.05 }}
                      className="group"
                    >
                      <Link
                        href={link.href}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                      >
                        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                          {link.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">
                              {link.name}
                            </p>
                            {link.price && (
                              <span className="text-xs text-cyan-400 font-medium">
                                {link.price}
                              </span>
                            )}
                          </div>
                          {link.description && (
                            <p className="text-xs text-gray-500 mt-1">
                              {link.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-cyan-500/20 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${link.color} text-white text-sm font-medium hover:scale-105 transition-all duration-200 shadow-lg text-center`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {link.icon}
                      <span>{link.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 ${social.color} transition-all duration-200 hover:border-cyan-500/50 hover:bg-cyan-500/10 flex items-center justify-center`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">Zion Tech Group</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2046;