import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Twitter, Linkedin, 
  Facebook, Instagram, Youtube, Github, Zap, 
  Shield, Rocket, Brain, Cpu, Atom, CpuIcon,
  ArrowUp, ExternalLink, Sparkles
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Revolutionary Services',
      links: [
        { name: 'Quantum AI Platform', href: '/quantum-ai-cognitive' },
        { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'Biotech AI', href: '/biotech-ai' },
        { name: 'Quantum Trading', href: '/quantum-financial-trading' }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning' },
        { name: 'Blockchain & DeFi', href: '/services?category=Blockchain%20%26%20DeFi' },
        { name: 'IoT & Smart Cities', href: '/services?category=IoT%20%26%20Smart%20Cities' },
        { name: 'Cybersecurity', href: '/services?category=Cybersecurity' },
        { name: 'Cloud Infrastructure', href: '/services?category=Cloud%20Infrastructure' },
        { name: 'Digital Transformation', href: '/solutions' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Financial Services', href: '/solutions#financial' },
        { name: 'Healthcare', href: '/solutions#healthcare' },
        { name: 'Manufacturing', href: '/solutions#manufacturing' },
        { name: 'Government', href: '/solutions#government' },
        { name: 'Education', href: '/solutions#education' },
        { name: 'Retail & E-commerce', href: '/solutions#retail' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Research', href: '/research' },
        { name: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ziontechgroup' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Holographic background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60" />
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Top section with logo and contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company info */}
          <div className="space-y-6">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <CpuIcon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-50" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-cyan-400 font-medium">Future Technology Solutions</p>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-300 text-lg leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Leading the future of technology with revolutionary AI, quantum computing, and innovative solutions that transform industries and drive human progress.
            </motion.p>

            {/* Contact information */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                <Phone className="w-5 h-5" />
                <a href={`tel:${contactInfo.mobile}`} className="text-white hover:text-cyan-300">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                <Mail className="w-5 h-5" />
                <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-cyan-300">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-cyan-400">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="text-white">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                <Globe className="w-5 h-5" />
                <a href={contactInfo.website} className="text-white hover:text-cyan-300 flex items-center space-x-2">
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">150+</div>
              <div className="text-cyan-400 text-sm">Revolutionary Services</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">99.99%</div>
              <div className="text-cyan-400 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">500%+</div>
              <div className="text-cyan-400 text-sm">Average ROI</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-cyan-400 text-sm">AI Support</div>
            </div>
          </motion.div>
        </div>

        {/* Footer links grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>{section.title}</span>
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-cyan-300 transition-colors duration-200 ml-2">
                Privacy Policy
              </Link> | 
              <Link href="/terms" className="hover:text-cyan-300 transition-colors duration-200 ml-2">
                Terms of Service
              </Link>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-300 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${10 + i * 12}%`,
              bottom: `${20 + i * 8}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;