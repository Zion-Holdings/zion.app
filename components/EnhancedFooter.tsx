import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github
} from 'lucide-react';

const EnhancedFooter: React.FC = () => {
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
        { label: 'DevOps & Infrastructure', href: '/devops-infrastructure' },
        { label: 'Data & Analytics', href: '/data-analytics' },
        { label: 'View All Services', href: '/services' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
        { label: 'SMB Solutions', href: '/smb-solutions' },
        { label: 'Industry Solutions', href: '/industry-solutions' },
        { label: 'Custom Development', href: '/custom-development' },
        { label: 'Digital Transformation', href: '/digital-transformation' },
        { label: 'Innovation Consulting', href: '/innovation-consulting' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Blog & Insights', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Training & Certification', href: '/training' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Partners', href: '/partners' },
        { label: 'News & Updates', href: '/news' },
        { label: 'Contact', href: '/contact' },
        { label: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-gray-400 text-sm">Leading-edge technology solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with cutting-edge AI, quantum computing, cybersecurity, 
              and digital transformation solutions that drive innovation and growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-2xl">
            <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest insights on AI, quantum computing, and technology innovation.
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center space-x-6 mt-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
              Cookie Policy
            </a>
            <a href="/accessibility" className="hover:text-cyan-400 transition-colors duration-200">
              Accessibility
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-20"
        />
      </div>
    </footer>
  );
};

export default EnhancedFooter;