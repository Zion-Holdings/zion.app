import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Twitter, Linkedin, 
  Facebook, Instagram, Youtube, Github, Zap, 
  Brain, Rocket, Shield, Globe as GlobeIcon,
  ArrowUp, ExternalLink, Cpu
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
];

const serviceCategories = [
  {
    title: 'AI & Machine Learning',
    services: [
      { name: 'AI Content Generator', href: '/services?category=AI & Content Creation' },
      { name: 'AI Customer Service', href: '/services?category=AI & Customer Service' },
      { name: 'AI Sales Automation', href: '/services?category=AI & Sales Automation' },
      { name: 'AI Data Analytics', href: '/services?category=AI & Data Analytics' }
    ]
  },
  {
    title: 'Quantum Computing',
    services: [
      { name: 'Quantum Finance Platform', href: '/services?category=Quantum Computing & AI' },
      { name: 'Quantum Cybersecurity', href: '/services?category=Cybersecurity' },
      { name: 'Quantum Logistics', href: '/services?category=Logistics & Supply Chain' },
      { name: 'Quantum Energy', href: '/services?category=Energy & Sustainability' }
    ]
  },
  {
    title: 'Industry Solutions',
    services: [
      { name: 'Autonomous Manufacturing', href: '/services?category=Manufacturing & Industry 4.0' },
      { name: 'Space Technology', href: '/services?category=Space Technology & Aerospace' },
      { name: 'Biomedical AI', href: '/services?category=Healthcare & Biotechnology' },
      { name: 'Metaverse Platform', href: '/services?category=Metaverse & VR/AR' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Leadership Team', href: '/about#team' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Updates', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Support', href: '/support' }
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/docs/api' },
  { name: 'Tutorials', href: '/resources#tutorials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Webinars', href: '/resources#webinars' },
  { name: 'Community', href: '/resources#community' }
];

export default function FuturisticFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-cyan-500/20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl blur opacity-30" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Revolutionary Micro SAAS</p>
              </div>
            </motion.div>

            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Leading the future with cutting-edge micro SAAS solutions powered by AI, quantum computing, and innovative technology.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`}>{contactInfo.mobile}</a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
              <div className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Globe className="w-4 h-4 text-cyan-400" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-cyan-400">{category.title}</h4>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Company & Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-cyan-400">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-cyan-400">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Links */}
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-gray-400">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:from-cyan-500/40 hover:to-purple-500/40 hover:border-cyan-400/50 transition-all duration-200 transform hover:scale-110"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400/50 transition-all duration-200 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to top</span>
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cyan-500/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-sm text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              © 2024 Zion Tech Group. All rights reserved. Revolutionizing the future with micro SAAS solutions.
            </motion.p>
            
            <motion.div 
              className="flex items-center space-x-6 text-sm text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}