import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronUp, Twitter, Linkedin, Github, Globe, Zap } from "lucide-react";
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-cyan/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue-light"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
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
            >
              <div className="flex items-center gap-3 text-zion-slate-light group">
                <Mail className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light group">
                <Phone className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-start gap-3 text-zion-slate-light group">
                <MapPin className="w-4 h-4 text-zion-cyan mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="max-w-xs">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Services Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                AI & Machine Learning
              </Link></li>
              <li><Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Enterprise IT Services
              </Link></li>
              <li><Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Micro SAAS Services
              </Link></li>
              <li><Link to="/pricing" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Pricing
              </Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Get Quote
              </Link></li>
            </ul>
          </motion.div>

          {/* Marketplace Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Marketplace</h3>
            <ul className="space-y-3">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Products
              </Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Talent
              </Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Equipment
              </Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Blog
              </Link></li>
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                About Us
              </Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Partners
              </Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Careers
              </Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Contact
              </Link></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Stay Updated</h3>
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
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              &copy; {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">Terms of Service</Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">Cookie Policy</Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/25 hover:shadow-zion-cyan/40 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;