import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronUp, Twitter, Linkedin, Github, Globe, Zap, ArrowRight, Shield, Users, Cpu, Brain } from "lucide-react";
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Marketplace",
      links: [
        { name: "Products", href: "/marketplace" },
        { name: "Services", href: "/services" },
        { name: "Micro SAAS", href: "/micro-saas-services" },
        { name: "Pricing", href: "/pricing" },
        { name: "Talent", href: "/talent" },
        { name: "Equipment", href: "/equipment" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Partners", href: "/partners" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Press Kit", href: "/press" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "AI & Machine Learning", href: "/ai-services" },
        { name: "Cloud & DevOps", href: "/cloud-devops" },
        { name: "Enterprise Security", href: "/enterprise-security" },
        { name: "Digital Transformation", href: "/digital-transformation" },
        { name: "Micro SAAS", href: "/micro-saas-services" },
        { name: "Consulting", href: "/consulting" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Webinars", href: "/webinars" },
        { name: "Support Center", href: "/support" }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/ziontechgroup",
      icon: Twitter,
      color: "hover:bg-blue-500/20 hover:border-blue-500/50"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/ziontechgroup",
      icon: Linkedin,
      color: "hover:bg-blue-600/20 hover:border-blue-600/50"
    },
    {
      name: "GitHub",
      href: "https://github.com/ziontechgroup",
      icon: Github,
      color: "hover:bg-gray-600/20 hover:border-gray-600/50"
    },
    {
      name: "Website",
      href: "https://ziontechgroup.com",
      icon: Globe,
      color: "hover:bg-green-500/20 hover:border-green-500/50"
    }
  ];

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-cyan/20 relative overflow-hidden" role="contentinfo">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue-light"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Section with Company Info and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
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
              
              {/* Company Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-xs text-zion-slate-light">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-xs text-zion-slate-light">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-xs text-zion-slate-light">Success Rate</div>
                </div>
              </div>
            </div>
            
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
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights on technology trends, AI breakthroughs, and marketplace opportunities delivered to your inbox.
            </p>
            <FooterNewsletter />
            
            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  to="/request-quote" 
                  className="flex items-center gap-2 text-zion-cyan hover:text-white transition-colors text-sm group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Get Quote
                </Link>
                <Link 
                  to="/contact" 
                  className="flex items-center gap-2 text-zion-cyan hover:text-white transition-colors text-sm group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Contact Sales
                </Link>
                <Link 
                  to="/support" 
                  className="flex items-center gap-2 text-zion-cyan hover:text-white transition-colors text-sm group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Get Support
                </Link>
                <Link 
                  to="/demo" 
                  className="flex items-center gap-2 text-zion-cyan hover:text-white transition-colors text-sm group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Book Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {footerSections.map((section, sectionIndex) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-6 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="pt-12 border-t border-zion-cyan/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-zion-slate-light">
                <Shield className="w-4 h-4" />
                <span className="text-xs">SOC 2 Type II Certified</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Terms of Service</Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Cookie Policy</Link>
              <Link to="/security" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Security</Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Accessibility</Link>
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