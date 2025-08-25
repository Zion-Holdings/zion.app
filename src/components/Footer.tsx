import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronUp, Twitter, Linkedin, Github, Youtube, Facebook, Instagram } from "lucide-react";
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ziontechgroup', color: 'hover:text-red-500' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-500' },
  ];

  const marketplaceLinks = [
    { name: 'Products', path: '/marketplace' },
    { name: 'Services', path: '/services' },
    { name: 'Micro SAAS', path: '/micro-saas-services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Talent', path: '/talent' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Categories', path: '/categories' },
    { name: 'Green IT', path: '/green-it' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Partners', path: '/partners' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
    { name: 'Sitemap', path: '/sitemap' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-cyan/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue-light"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">Z</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                      ZION
                    </h3>
                    <p className="text-xs text-zion-slate-light">Tech Group</p>
                  </div>
                </div>
                <p className="text-zion-slate-light leading-relaxed">
                  Transforming businesses through innovative micro SAAS solutions, 
                  cutting-edge IT services, and advanced AI technologies.
                </p>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-3 mb-6"
              >
                <div className="flex items-center gap-3 text-zion-slate-light group">
                  <Mail className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light group">
                  <Phone className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform" />
                  <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-start gap-3 text-zion-slate-light group">
                  <MapPin className="w-4 h-4 text-zion-cyan mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="max-w-xs">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </span>
                </div>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex space-x-3"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-zion-blue-light/10 hover:bg-zion-blue-light/20 border border-zion-cyan/20 hover:border-zion-cyan/40 rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Marketplace Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple mr-3"></span>
                Marketplace
              </h3>
              <ul className="space-y-3">
                {marketplaceLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple mr-3"></span>
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple mr-3"></span>
                Stay Updated
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Get the latest insights on tech trends, AI breakthroughs, and marketplace opportunities delivered to your inbox.
              </p>
              <FooterNewsletter />
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-12 border-t border-zion-cyan/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-zion-slate-light text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-8 mt-6 md:mt-0">
                <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Cookie Policy</Link>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Contact Us</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 z-50"
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;