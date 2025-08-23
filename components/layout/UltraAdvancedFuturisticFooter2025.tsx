import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Globe, 
  Twitter, Linkedin, Github, 
  ArrowUp, Crown, Zap, Brain, Rocket,
  Shield, Users, BookOpen, Briefcase, Atom
} from 'lucide-react';
import Link from 'next/link';

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Services',
      items: [
        { label: 'AI & Machine Learning', href: '/ai-services' },
        { label: 'Quantum Computing', href: '/quantum-computing' },
        { label: 'Space Technology', href: '/space-tech' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: '2040 Services', href: '/innovative-2040-services-showcase' }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
        { label: 'Micro SAAS', href: '/micro-saas' },
        { label: 'IT Services', href: '/it-services' },
        { label: 'Innovation Lab', href: '/innovation-lab' },
        { label: 'Research & Development', href: '/research-development' }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Investors', href: '/investors' },
        { label: 'Press & Media', href: '/press' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Zion-Holdings', label: 'GitHub' },
    { icon: Globe, href: 'https://ziontechgroup.com', label: 'Website' }
  ];

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
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            animate={{
              x: [0, Math.random() * 1000, 0],
              y: [0, Math.random() * 1000, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: -1,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-purple-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future with revolutionary AI consciousness, quantum computing, 
                and autonomous systems. Transforming businesses through next-generation technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <a href="https://ziontechgroup.com" className="hover:text-white transition-colors duration-200">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                  {section.title === 'Services' && <Briefcase className="w-5 h-5 text-cyan-400" />}
                  {section.title === 'Solutions' && <Zap className="w-5 h-5 text-purple-400" />}
                  {section.title === 'Company' && <Users className="w-5 h-5 text-pink-400" />}
                  {section.title === 'Resources' && <BookOpen className="w-5 h-5 text-blue-400" />}
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-800/50"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 font-medium">Follow Us:</span>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="flex-1 max-w-md">
                <h5 className="text-lg font-semibold text-white mb-3">Stay Updated</h5>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest insights on AI consciousness, quantum computing, and future technology.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="hover:text-white transition-colors duration-200 ml-2">
                  Privacy Policy
                </Link> | 
                <Link href="/terms" className="hover:text-white transition-colors duration-200 ml-2">
                  Terms of Service
                </Link>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span>Powered by</span>
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-cyan-400" />
                  <span>AI Consciousness</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <Atom className="w-4 h-4 text-purple-400" />
                  <span>Quantum Computing</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <Rocket className="w-4 h-4 text-pink-400" />
                  <span>Space Technology</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default UltraAdvancedFuturisticFooter2025;