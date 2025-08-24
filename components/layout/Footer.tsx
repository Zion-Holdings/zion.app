import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Smartphone, 
  Building, 
  Globe, 
  Zap, 
  Shield, 
  Users, 
  MapPin, 
  ExternalLink,
  ArrowUp,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Github
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Revolutionary Services',
      links: [
        { name: 'Quantum AI Platform', href: '/quantum-ai-cognitive' },
        { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'Biotech AI', href: '/biotech-ai' },
        { name: 'Quantum Trading', href: '/quantum-financial-trading' }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning' },
        { name: 'Blockchain & DeFi', href: '/services?category=Blockchain%20%26%20DeFi' },
        { name: 'IoT & Smart Cities', href: '/services?category=IoT%20%26%20Smart%20Cities' },
        { name: 'Cybersecurity', href: '/services?category=Cybersecurity' },
        { name: 'Cloud Infrastructure', href: '/services?category=Cloud%20Infrastructure' },
        { name: 'Digital Transformation', href: '/solutions' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Financial Services', href: '/solutions#financial' },
        { name: 'Healthcare', href: '/solutions#healthcare' },
        { name: 'Manufacturing', href: '/solutions#manufacturing' },
        { name: 'Government', href: '/solutions#government' },
        { name: 'Education', href: '/solutions#education' },
        { name: 'Retail & E-commerce', href: '/solutions#retail' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Research', href: '/research' },
        { name: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ziontechgroup' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8 relative">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-8 right-8 p-3 bg-zion-purple hover:bg-zion-purple-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-cyan rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-zion-cyan/25">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-zion-cyan group-hover:to-zion-purple transition-all duration-300">
                  Zion Tech
                </span>
                <span className="text-zion-slate-light text-sm">Revolutionary Technology Solutions</span>
              </div>
            </Link>
            
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Pioneering the future of technology with revolutionary AI consciousness, 
              quantum computing, and autonomous solutions that transform businesses worldwide.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                <Smartphone className="w-5 h-5 text-zion-cyan" />
                <a href={`tel:${contactInfo.mobile}`} className="text-white hover:text-zion-cyan">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                <Mail className="w-5 h-5 text-zion-cyan" />
                <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-zion-cyan">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-zion-slate-light">
                <MapPin className="w-5 h-5 mt-0.5 text-zion-cyan" />
                <span className="text-white">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                <Globe className="w-5 h-5 text-zion-cyan" />
                <a href={contactInfo.website} className="text-white hover:text-zion-cyan flex items-center space-x-2">
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                {section.title === 'Company' && <Users className="w-5 h-5 mr-2 text-zion-cyan" />}
                {section.title === 'Resources' && <Globe className="w-5 h-5 mr-2 text-zion-cyan" />}
                {section.title === 'Legal' && <Shield className="w-5 h-5 mr-2 text-zion-cyan" />}
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-zion-slate-light hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zion-slate-light text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-zion-cyan" />
                <span>75+ Micro SaaS Services</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-zion-cyan" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-zion-cyan" />
                <span>ziontechgroup.com</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-zion-cyan/20 border border-white/10 hover:border-zion-cyan/50 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
