import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Cpu, Database, Cloud, Code, 
  Phone, Mail, MapPin, Globe, Twitter, Linkedin, 
  Facebook, Instagram, Youtube, ArrowRight, Sparkles,
  Users, Award, TrendingUp, Star, Zap, Lock, Server,
  Network, ShieldCheck, BrainCircuit, Atom, Satellite
} from 'lucide-react';

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'AI & Machine Learning', href: '/ai-services' },
        { label: 'Quantum Computing', href: '/quantum-computing' },
        { label: 'Space Technology', href: '/space-tech' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: 'Cloud Solutions', href: '/cloud-platform' },
        { label: 'Micro SAAS', href: '/micro-saas' },
        { label: 'Innovative 2045 Services', href: '/innovative-2045-futuristic-services-showcase' },
        { label: 'View All Services', href: '/services' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
        { label: 'Startup Solutions', href: '/startup-solutions' },
        { label: 'Government Solutions', href: '/government-solutions' },
        { label: 'Healthcare Solutions', href: '/healthcare-solutions' },
        { label: 'Financial Solutions', href: '/financial-solutions' },
        { label: 'Education Solutions', href: '/education-solutions' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'News & Updates', href: '/news' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' },
        { label: 'Developer Tools', href: '/dev-tools' },
        { label: 'Blog', href: '/blog' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Support Center', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/ziontechgroup', label: 'YouTube' }
  ];

  const stats = [
    { icon: Users, value: '2,500+', label: 'Enterprise Clients' },
    { icon: Award, value: '99.9%', label: 'Uptime SLA' },
    { icon: TrendingUp, value: '500%', label: 'Performance Boost' },
    { icon: Star, value: '4.9/5', label: 'Customer Rating' }
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-cyan-400/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
        
        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 border border-cyan-400/10 rounded-lg"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Link href="/" className="flex items-center space-x-3 group mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </motion.div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Pioneering the Future</div>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the digital transformation revolution with cutting-edge AI, quantum computing, 
                and space technology solutions that define tomorrow's possibilities.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-3 rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10"
                  >
                    <div className="inline-block p-2 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 mb-2">
                      <stat.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-12 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-cyan-400">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-cyan-400">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Newsletter */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                Connect With Us
              </h3>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-blue-500/30 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest insights on AI, quantum computing, and space technology.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. Pioneering the future of technology.
            </div>
            <div className="flex space-x-6 text-sm">
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
        </motion.div>
      </div>

      {/* Floating CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute bottom-8 right-8 z-20"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/50 flex items-center justify-center text-white hover:shadow-cyan-500/75 transition-all duration-300"
        >
          <Rocket className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default UltraAdvancedFuturisticFooter2025;