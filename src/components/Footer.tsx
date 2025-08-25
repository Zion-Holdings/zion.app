import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronUp, Twitter, Linkedin, Github, Globe, Zap, ExternalLink } from "lucide-react";
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Memoize footer data to prevent unnecessary re-renders
  const footerData = useMemo(() => ({
    marketplace: [
      { name: 'Products', href: '/marketplace', description: 'Browse our product catalog' },
      { name: 'Services', href: '/services', description: 'Explore our service offerings' },
      { name: 'Micro SAAS', href: '/micro-saas-services', description: 'Custom software solutions' },
      { name: 'Pricing', href: '/pricing', description: 'View our pricing plans' },
      { name: 'Talent', href: '/talent', description: 'Find skilled professionals' },
      { name: 'Equipment', href: '/equipment', description: 'Browse available equipment' }
    ],
    company: [
      { name: 'About Us', href: '/about', description: 'Learn about our company' },
      { name: 'Blog', href: '/blog', description: 'Read our latest insights' },
      { name: 'Partners', href: '/partners', description: 'Meet our partners' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' }
    ],
    social: [
      { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, description: 'Follow us on Twitter' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, description: 'Connect on LinkedIn' },
      { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, description: 'View our projects on GitHub' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy', description: 'Read our privacy policy' },
      { name: 'Terms of Service', href: '/terms', description: 'View our terms of service' },
      { name: 'Cookie Policy', href: '/cookies', description: 'Learn about our cookie usage' }
    ]
  }), []);

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-cyan/20 relative overflow-hidden" role="contentinfo">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue-light"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                  ZION
                </span>
              </div>
              <p className="text-zion-slate-light leading-relaxed">
                Transforming businesses through innovative micro SAAS solutions, 
                cutting-edge IT services, and advanced AI technologies.
              </p>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="space-y-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-zion-slate-light group">
                <Mail className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="hover:text-zion-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark rounded"
                  aria-label="Send us an email"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light group">
                <Phone className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <a 
                  href="tel:+13024640950" 
                  className="hover:text-zion-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark rounded"
                  aria-label="Call us at +1 (302) 464-0950"
                >
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-start gap-3 text-zion-slate-light group">
                <MapPin className="w-4 h-4 text-zion-cyan mt-0.5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <address className="max-w-xs not-italic">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </address>
              </div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {footerData.social.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark"
                    aria-label={social.description}
                  >
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Marketplace Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg" id="marketplace-links">Marketplace</h3>
            <nav aria-labelledby="marketplace-links">
              <ul className="space-y-3">
                {footerData.marketplace.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark rounded"
                      aria-label={item.description}
                    >
                      <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" aria-hidden="true"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Company Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg" id="company-links">Company</h3>
            <nav aria-labelledby="company-links">
              <ul className="space-y-3">
                {footerData.company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark rounded"
                      aria-label={item.description}
                    >
                      <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" aria-hidden="true"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg" id="newsletter-section">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights on technology trends, AI breakthroughs, and marketplace opportunities delivered to your inbox.
            </p>
            <FooterNewsletter />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-16 pt-12 border-t border-zion-cyan/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-zion-slate-light text-sm">
              &copy; {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-6 md:space-x-8" aria-label="Legal links">
              {footerData.legal.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark rounded"
                  aria-label={item.description}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/25 hover:shadow-zion-cyan/40 transition-all duration-300 hover:scale-110 z-50 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark"
        aria-label="Scroll to top of page"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp className="w-5 h-5" aria-hidden="true" />
      </motion.button>
    </footer>
  );
};

export default Footer;