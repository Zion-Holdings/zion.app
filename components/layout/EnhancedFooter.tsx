import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Brain, Factory, FlaskConical, Rocket, Shield,
  Globe, Phone, Mail, MapPin, Twitter, 
  Linkedin, Facebook, Instagram, Youtube, Github,
  ArrowRight, Star, Users, Award, TrendingUp
} from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Core Services',
      links: [
        { name: 'Quantum AI Platform', href: '/services#quantum-ai', icon: <Brain className="w-4 h-4" /> },
        { name: 'Autonomous Factory', href: '/services#autonomous-factory', icon: <Factory className="w-4 h-4" /> },
        { name: 'Biomedical AI', href: '/services#biomedical', icon: <FlaskConical className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/services#space', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Quantum Security', href: '/services#cybersecurity', icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      links: [
        { name: 'AI Content Generation', href: '/micro-saas#ai-content', icon: <Brain className="w-4 h-4" /> },
        { name: 'Business Intelligence', href: '/micro-saas#bi', icon: <TrendingUp className="w-4 h-4" /> },
        { name: 'Cloud Optimization', href: '/micro-saas#cloud', icon: <Globe className="w-4 h-4" /> },
        { name: 'Performance Monitoring', href: '/micro-saas#monitoring', icon: <TrendingUp className="w-4 h-4" /> },
        { name: 'SEO Automation', href: '/micro-saas#seo', icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
        { name: 'Case Studies', href: '/case-studies', icon: <Award className="w-4 h-4" /> },
        { name: 'Resources', href: '/resources', icon: <Globe className="w-4 h-4" /> },
        { name: 'Blog', href: '/blog', icon: <Globe className="w-4 h-4" /> },
        { name: 'Careers', href: '/careers', icon: <Users className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Documentation', href: '/docs', icon: <Globe className="w-4 h-4" /> },
        { name: 'API Reference', href: '/api', icon: <Globe className="w-4 h-4" /> },
        { name: 'Status Page', href: '/status', icon: <TrendingUp className="w-4 h-4" /> },
        { name: 'Contact Support', href: '/support', icon: <Mail className="w-4 h-4" /> },
        { name: 'Community', href: '/community', icon: <Users className="w-4 h-4" /> }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
  ];

  const stats = [
    { value: '500+', label: 'Micro SaaS Services', icon: <Zap className="w-5 h-5" /> },
    { value: '99.99%', label: 'Uptime Guarantee', icon: <Shield className="w-5 h-5" /> },
    { value: '30', label: 'Day Free Trials', icon: <Star className="w-5 h-5" /> },
    { value: '24/7', label: 'AI Support', icon: <Brain className="w-5 h-5" /> }
  ];

  return (
    <footer className="relative bg-slate-900 overflow-hidden">
      {/* Enhanced background with quantum effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-emerald-900/10" />
      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/10 rotate-45" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/10 rounded-full" />
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-emerald-400/10 transform rotate-12" />
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-blue-400/10 transform -rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div 
          className="py-16 border-b border-slate-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-cyan-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-slate-400">Innovation at Quantum Speed</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading the future with revolutionary quantum AI, autonomous systems, and cutting-edge micro SaaS solutions. 
                Empowering businesses to achieve unprecedented growth and innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${contactInfo.mobile}`}>{contactInfo.mobile}</a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
                <div className="flex items-start space-x-3 text-slate-300">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
                      >
                        <span className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors duration-200">
                          {link.icon}
                        </span>
                        <span className="text-sm">{link.name}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="py-12 border-t border-slate-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead with Quantum Innovation
            </h3>
            <p className="text-slate-400 mb-8">
              Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-200 transform hover:scale-110"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </footer>
  );
};

export default EnhancedFooter;