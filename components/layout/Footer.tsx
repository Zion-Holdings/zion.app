'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Development', href: '/services/ai-development' },
        { name: 'Cloud Architecture', href: '/services/cloud-architecture' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IoT Platforms', href: '/services/iot-platforms' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-solutions' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Careers', href: '/talent' },
        { name: 'News & Updates', href: '/blog' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/resources' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Support', href: '/support' },
        { name: 'Privacy Policy', href: '/privacy' }
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'AI Platform', href: '/products/ai-platform' },
        { name: 'Cloud Suite', href: '/products/cloud-suite' },
        { name: 'IoT Dashboard', href: '/products/iot-dashboard' },
        { name: 'Analytics Tools', href: '/products/analytics' },
        { name: 'Security Solutions', href: '/products/security' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontech', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontech', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontech', color: 'hover:text-gray-400' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontech', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontech', color: 'hover:text-pink-400' }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Zion Tech Group</h3>
                <p className="text-gray-400">Leading Technology Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with cutting-edge technology solutions. From AI development to cloud architecture, 
              we help companies transform their digital presence and achieve sustainable growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>123 Tech Street, Innovation City, IC 12345</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest insights on technology trends and company updates</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors duration-200 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;