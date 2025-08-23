import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Mail, Phone, MapPin, Twitter, Linkedin, 
  Github, Youtube, Facebook, Instagram, ArrowUp, 
  Shield, Award, Users, Rocket
} from 'lucide-react';

const UltraFuturisticFooter2037: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '/services#ai-services' },
        { name: 'Quantum Computing', href: '/services#quantum-services' },
        { name: 'Cloud Infrastructure', href: '/services#cloud-services' },
        { name: 'Cybersecurity', href: '/services#security-services' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'Holographic & Metaverse', href: '/services#metaverse-services' },
        { name: 'Biotechnology', href: '/services#biotech-services' },
        { name: 'All Services', href: '/services' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions#enterprise' },
        { name: 'Healthcare Technology', href: '/solutions#healthcare' },
        { name: 'Financial Services', href: '/solutions#financial' },
        { name: 'Manufacturing & IoT', href: '/solutions#manufacturing' },
        { name: 'Education & Training', href: '/solutions#education' },
        { name: 'Government & Defense', href: '/solutions#government' },
        { name: 'Research & Development', href: '/research' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership Team', href: '/about#leadership' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Press Releases', href: '/press' },
        { name: 'Investor Relations', href: '/investors' },
        { name: 'Partnerships', href: '/partners' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Developer Portal', href: '/developers' },
        { name: 'Support Center', href: '/support' },
        { name: 'Training & Certification', href: '/training' },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Global Clients' },
    { icon: Rocket, value: '50+', label: 'Countries Served' },
    { icon: Award, value: '99.9%', label: 'Uptime SLA' },
    { icon: Shield, value: '100%', label: 'Security Compliance' }
  ];

  return (
    <footer className="relative bg-black/95 border-t border-cyan-500/30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
              
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation 
                and unlock human potential through cutting-edge AI, quantum computing, and space technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links & Newsletter */}
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-center py-8 border-t border-cyan-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Social Links */}
          <div className="flex items-center space-x-4 mb-6 lg:mb-0">
            <span className="text-gray-400 mr-4">Follow Us:</span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 transform hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cyan-500/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <span>&copy; 2027 Zion Tech Group. All rights reserved.</span>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-10 w-24 h-24 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2037;