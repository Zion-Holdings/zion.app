import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronUp, Twitter, Linkedin, Github, Globe, Zap, Brain, Cpu, Shield, Cloud } from "lucide-react";
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI & Machine Learning", href: "/ai-services" },
        { name: "Cloud & DevOps", href: "/cloud-devops" },
        { name: "Enterprise Solutions", href: "/enterprise-solutions" },
        { name: "Micro SAAS Services", href: "/micro-saas-services" },
        { name: "Digital Transformation", href: "/digital-transformation" }
      ]
    },
    {
      title: "AI Solutions",
      links: [
        { name: "AI Business Manager", href: "/ai-autonomous-business-manager" },
        { name: "AI Business Platform", href: "/ai-autonomous-business-platform" },
        { name: "AI Code Review", href: "/ai-autonomous-code-review" },
        { name: "AI Creative Director", href: "/ai-autonomous-creative-director" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        { name: "Partners", href: "/partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Support", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Sitemap", href: "/sitemap" }
      ]
    }
  ];

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-cyan/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue-light"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
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
              <p className="text-zion-slate-light leading-relaxed mb-6">
                Transforming businesses through innovative micro SAAS solutions, 
                cutting-edge IT services, and advanced AI technologies.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
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
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-6 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FooterNewsletter />
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div 
              className="text-zion-slate-light text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              © {currentYear} Zion Tech Group. All rights reserved.
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="https://twitter.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110"
                aria-label="Check out our GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-zion-cyan/20 hover:bg-zion-cyan/30 border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-full flex items-center justify-center text-zion-cyan hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;