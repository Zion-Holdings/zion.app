import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Rocket, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  Brain,
  Atom,
  Shield,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Globe,
  Users,
  Briefcase,
  Target,
  Building,
  Code,
  FileText,
  Video,
  Shield as ShieldIcon,
  Cloud,
  Zap
} from 'lucide-react';

// Memoized footer data for better performance
const footerData = {
  company: {
    name: 'Zion Tech Group',
    description: 'Pioneering the future of technology with innovative AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    founded: '2024'
  },
  quickLinks: [
    { label: 'About Us', href: '/about', icon: Users },
    { label: 'Services', href: '/services', icon: Briefcase },
    { label: 'Solutions', href: '/solutions', icon: Target },
    { label: 'Case Studies', href: '/case-studies', icon: Building },
    { label: 'Blog', href: '/blog', icon: FileText },
    { label: 'Careers', href: '/careers', icon: Users }
  ],
  services: [
    { label: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: Brain },
    { label: 'Quantum Computing', href: '/services?category=quantum', icon: Atom },
    { label: 'Space Technology', href: '/services?category=space-tech', icon: Rocket },
    { label: 'Cybersecurity', href: '/services?category=cybersecurity', icon: ShieldIcon },
    { label: 'Cloud Infrastructure', href: '/services?category=cloud', icon: Cloud },
    { label: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building }
  ],
  resources: [
    { label: 'Documentation', href: '/docs', icon: Code },
    { label: 'API Reference', href: '/api-documentation', icon: Code },
    { label: 'Webinars', href: '/webinars', icon: Video },
    { label: 'White Papers', href: '/white-papers', icon: FileText },
    { label: 'Support', href: '/support', icon: Zap },
    { label: 'Status', href: '/status', icon: Globe }
  ],
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { label: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { label: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Accessibility', href: '/accessibility' }
  ]
};

const UltraFuturisticFooter2040: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '/services?category=ai-data' },
        { name: 'IT Infrastructure', href: '/services?category=cloud-finops' },
        { name: 'Micro SAAS Solutions', href: '/services?category=developer-tools' },
        { name: 'Cybersecurity', href: '/services?category=cybersecurity' },
        { name: 'Observability', href: '/services?category=observability' },
        { name: 'View All Services', href: '/services' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions' },
        { name: 'AI Content Intelligence', href: '/services/ai-content-intelligence-platform' },
        { name: 'Cloud Cost Optimization', href: '/services/cloud-cost-optimization-platform' },
        { name: 'No-Code Automation', href: '/services/no-code-automation-platform' },
        { name: 'DevOps Automation', href: '/services/devops-automation-platform' },
        { name: 'Custom Development', href: '/contact' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/mission' },
        { name: 'Leadership Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press & Media', href: '/press' },
        { name: 'Contact Us', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Support Center', href: '/support' }
      ]
    }
  ], []);

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-cyan-400/20" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Information */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future of technology with innovative AI, IT infrastructure, and micro SAAS solutions that drive business transformation and accelerate human progress.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a 
                    href={`tel:${footerData.company.phone}`}
                    className="hover:underline"
                    aria-label={`Call us at ${footerData.company.phone}`}
                  >
                    {footerData.company.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a 
                    href={`mailto:${footerData.company.email}`}
                    className="hover:underline"
                    aria-label={`Email us at ${footerData.company.email}`}
                  >
                    {footerData.company.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* Company Stats */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <span>Founded {footerData.company.founded}</span>
                  <span>•</span>
                  <span>Global Reach</span>
                  <span>•</span>
                  <span>24/7 Support</span>
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
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Rocket className="w-5 h-5 mr-2 text-cyan-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <link.icon className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                      <span className="hover:underline">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-cyan-400" />
                Services
              </h3>
              <ul className="space-y-3">
                {footerData.services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <service.icon className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                      <span className="hover:underline">{service.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
                Resources
              </h3>
              <ul className="space-y-3">
                {footerData.resources.map((resource) => (
                  <li key={resource.label}>
                    <Link
                      href={resource.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <resource.icon className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                      <span className="hover:underline">{resource.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 pt-12 border-t border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Revolutionary Tech
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on AI consciousness, quantum computing, and space technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                aria-label="Email address for newsletter"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright and Legal */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                {footerData.legal.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {footerData.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  aria-label={`Visit our ${social.label} page`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2040;