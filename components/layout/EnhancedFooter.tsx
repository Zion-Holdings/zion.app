import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Globe, 
  Twitter, Linkedin, Github, Star,
  ArrowRight, Shield, Rocket, Brain, Atom
} from 'lucide-react';

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { name: 'AI Automation', href: '/services/ai-automation' },
      { name: 'Quantum Security', href: '/services/quantum-security' },
      { name: 'Micro SAAS', href: '/services/micro-saas' },
      { name: 'IT Solutions', href: '/services/it-solutions' },
      { name: 'Space Technology', href: '/services/space-technology' },
      { name: 'Emerging Tech', href: '/services/emerging-tech' }
    ]
  },
  solutions: {
    title: 'Solutions',
    links: [
      { name: 'Enterprise AI', href: '/solutions/enterprise-ai' },
      { name: 'Cybersecurity', href: '/solutions/cybersecurity' },
      { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
      { name: 'DevOps Automation', href: '/solutions/devops' },
      { name: 'Data Analytics', href: '/solutions/data-analytics' },
      { name: 'Digital Transformation', href: '/solutions/digital-transformation' }
    ]
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Updates', href: '/news' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Partners', href: '/partners' },
      { name: 'Contact', href: '/contact' }
    ]
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Blog', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'Community', href: '/community' },
      { name: 'Status Page', href: '/status' }
    ]
  }
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-flex items-center space-x-3 mb-6" aria-label="Zion Tech Group Home">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">ZionTech Group</div>
                  <div className="text-sm text-gray-400">Revolutionary Technology Solutions</div>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Leading provider of cutting-edge AI automation, quantum cybersecurity, and micro SAAS solutions. 
                Transforming businesses with innovative technology that deploys in minutes, not months.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  aria-label={`Call us at ${contactInfo.phone}`}
                >
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  aria-label={`Email us at ${contactInfo.email}`}
                >
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Tech Trends
            </h3>
            <p className="text-gray-300 mb-6">
              Get insights on AI, quantum computing, and emerging technologies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                aria-label="Email address for newsletter"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:transform hover:scale-105">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Zion Tech Group. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-6"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 hover:bg-gray-800/50 rounded-lg"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center md:justify-start items-center space-x-6 mt-6 pt-6 border-t border-gray-800"
          >
            <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
              Terms of Service
            </Link>
            <Link href="/security" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
              Security
            </Link>
            <Link href="/accessibility" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
              Accessibility
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
              Sitemap
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;