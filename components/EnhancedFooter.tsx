import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, 
  Mail, Phone, MapPin, Linkedin, Twitter, Github, 
  Youtube, Facebook, Instagram, ArrowUp
} from 'lucide-react';

const EnhancedFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
    { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
    { name: 'AI Customer Experience', href: '/ai-customer-experience' },
    { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
    { name: 'Space Technology Innovation', href: '/space-technology' },
    { name: 'Neural Interface Development', href: '/neural-interface' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Partnerships', href: '/partnerships' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Blog', href: '/blog' },
    { name: 'Research Papers', href: '/research' }
  ];

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Status Page', href: '/status' },
    { name: 'Community Forum', href: '/community' },
    { name: 'Training & Certification', href: '/training' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Zion-Holdings' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ziontechgroup' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-md">
                Leading-edge technology solutions and autonomous innovation platform. 
                Empowering businesses with cutting-edge AI, quantum computing, and cybersecurity.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact & Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-12 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a
                    href="tel:+13024640950"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-400">
                    Delaware, United States
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-6">Stay Updated</h3>
              <p className="text-slate-400 mb-4">
                Get the latest insights on AI, quantum computing, and technology trends.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-400">
              <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
              <div className="flex space-x-6">
                <a href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="/cookies" className="hover:text-white transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
