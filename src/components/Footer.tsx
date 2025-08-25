import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronUp, Twitter, Linkedin, Github, Globe, Zap, Brain, Server, Cpu, Shield, BarChart3, Cloud, MessageSquare, Eye, TrendingUp, Code } from "lucide-react";
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      name: 'AI & Machine Learning',
      href: '/ai-services',
      icon: Brain,
      description: 'Cutting-edge AI solutions'
    },
    {
      name: 'IT Infrastructure',
      href: '/it-services',
      icon: Server,
      description: 'Enterprise IT solutions'
    },
    {
      name: 'Micro SAAS Services',
      href: '/micro-saas-services',
      icon: Cpu,
      description: 'Custom software solutions'
    },
    {
      name: 'Cloud & DevOps',
      href: '/cloud-devops',
      icon: Cloud,
      description: 'Scalable infrastructure'
    },
    {
      name: 'Data Analytics',
      href: '/analytics',
      icon: BarChart3,
      description: 'Business intelligence'
    },
    {
      name: 'Cybersecurity',
      href: '/security',
      icon: Shield,
      description: 'Security & compliance'
    }
  ];

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-cyan/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue-light"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center shadow-lg shadow-zion-cyan/25">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                  ZION
                </span>
              </div>
              <p className="text-zion-slate-light leading-relaxed text-lg">
                Transforming businesses through innovative micro SAAS solutions, 
                cutting-edge IT services, and advanced AI technologies.
              </p>
            </motion.div>
            
            {/* Enhanced Contact Info */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 text-zion-slate-light group">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors text-lg">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light group">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors text-lg">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-start gap-3 text-zion-slate-light group">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-blue-light to-zion-cyan rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="max-w-xs text-lg">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </motion.div>
            
            {/* Enhanced Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zion-blue-light/20 hover:bg-zion-cyan/20 border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-xl flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 shadow-lg">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zion-blue-light/20 hover:bg-zion-cyan/20 border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-xl flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 shadow-lg">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zion-blue-light/20 hover:bg-zion-cyan/20 border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-xl flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 shadow-lg">
                <Github className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Enhanced Services Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-8 text-xl flex items-center gap-2">
              <Zap className="w-5 h-5 text-zion-cyan" />
              Our Services
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Link 
                    key={service.name}
                    to={service.href} 
                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-zion-blue-light/10 transition-all duration-300 border border-transparent hover:border-zion-cyan/20"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-zion-slate-light group-hover:text-zion-cyan transition-colors font-medium">
                        {service.name}
                      </div>
                      <div className="text-xs text-zion-slate-light opacity-75">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Enhanced Company Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-8 text-xl flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-purple" />
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group text-lg">
                  <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group text-lg">
                  <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group text-lg">
                  <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group text-lg">
                  <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group text-lg">
                  <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group text-lg">
                  <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Request Quote
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Enhanced Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-8 text-xl flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-zion-purple" />
              Stay Updated
            </h3>
            <p className="text-zion-slate-light mb-8 text-lg leading-relaxed">
              Get the latest insights on technology trends, AI breakthroughs, and marketplace opportunities delivered to your inbox.
            </p>
            <FooterNewsletter />
            
            {/* Quick Links */}
            <div className="mt-8 pt-8 border-t border-zion-cyan/20">
              <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/pricing" className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Pricing
                </Link>
                <Link to="/talent" className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Talent
                </Link>
                <Link to="/equipment" className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Equipment
                </Link>
                <Link to="/marketplace" className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Marketplace
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div 
          className="mt-20 pt-12 border-t border-zion-cyan/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-zion-slate-light text-lg">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-sm mt-2">
                Transforming businesses through innovative technology solutions
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">Terms of Service</Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">Cookie Policy</Link>
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">Sitemap</Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-2xl shadow-2xl shadow-zion-cyan/25 hover:shadow-zion-cyan/40 transition-all duration-300 hover:scale-110 z-50 border border-zion-cyan/30"
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;