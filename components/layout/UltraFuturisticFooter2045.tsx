import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  ArrowRight,
  Heart,
  Star,
  Shield,
  Brain,
  Atom,
  Rocket,
  Cloud,
  Target,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'AI & Consciousness', href: '/services?category=ai-consciousness' },
        { label: 'Quantum Technology', href: '/services?category=quantum' },
        { label: 'Space Technology', href: '/services?category=space-tech' },
        { label: 'Cybersecurity', href: '/services?category=cybersecurity' },
        { label: 'Cloud Infrastructure', href: '/services?category=cloud' },
        { label: 'Business Intelligence', href: '/services?category=business-intelligence' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Healthcare & Biotech', href: '/healthcare-ai-solutions' },
        { label: 'Financial Services', href: '/financial-solutions' },
        { label: 'Manufacturing', href: '/manufacturing-ai-solutions' },
        { label: 'Retail & E-commerce', href: '/retail-technology-solutions' },
        { label: 'Education', href: '/education-technology-solutions' },
        { label: 'Government', href: '/government-technology-solutions' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api-docs' },
        { label: 'Video Tutorials', href: '/video-tutorials' },
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'White Papers', href: '/white-papers' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Partners', href: '/partners' },
        { label: 'Contact', href: '/contact' },
        { label: 'News', href: '/news' },
        { label: 'Investors', href: '/investors' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/zion-tech-group', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/Zion-Holdings', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' }
  ];

  const contactInfo = [
    { icon: Phone, label: 'Mobile', value: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, label: 'Email', value: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, label: 'Address', value: '364 E Main St STE 1008 Middletown DE 19709', href: '#' },
    { icon: Globe, label: 'Website', value: 'https://ziontechgroup.com', href: 'https://ziontechgroup.com' }
  ];

  const features = [
    { icon: Brain, label: 'AI Consciousness Integration' },
    { icon: Atom, label: 'Quantum Computing Solutions' },
    { icon: Shield, label: 'Advanced Cybersecurity' },
    { icon: Rocket, label: 'Space Technology Innovation' },
    { icon: Cloud, label: 'Scalable Cloud Infrastructure' },
    { icon: Target, label: 'Business Intelligence' }
  ];

  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-cyan-400/20 mt-20">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 xl:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Logo and Company Name */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-400/25">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </div>
                    <div className="text-sm text-white/60 uppercase tracking-wider">
                      Revolutionary 2045
                    </div>
                  </div>
                </div>

                {/* Company Description */}
                <p className="text-white/70 leading-relaxed">
                  Pioneering the future with AI consciousness, quantum computing, and autonomous systems. 
                  Experience technology that thinks, feels, and evolves.
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 text-white/70 hover:text-cyan-400 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <contact.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-white/50 uppercase tracking-wider">{contact.label}</div>
                        <div className="text-sm font-medium">{contact.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center text-white/70 hover:text-cyan-400 hover:scale-110 transition-all duration-200 border border-white/10 hover:border-cyan-400/50"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-cyan-400 transition-colors duration-200 group flex items-center space-x-2"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 border-t border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose <span className="text-cyan-400">Zion Tech Group</span>?
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Experience the future of technology with our cutting-edge solutions and revolutionary innovations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 mb-4 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <p className="text-sm text-white/70 font-medium leading-tight">{feature.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 border-t border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with <span className="text-cyan-400">Revolutionary</span> Technology
            </h3>
            <p className="text-white/70 mb-6">
              Get the latest insights on AI consciousness, quantum computing, and space technology innovations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Revolutionary 2045 Technology Solutions</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-white/60 hover:text-cyan-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Made with Love */}
          <div className="text-center mt-6 text-white/40 text-sm">
            Made with <Heart className="inline w-4 h-4 text-red-400" /> and powered by{' '}
            <span className="text-cyan-400 font-medium">AI Consciousness</span> for a better future.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;