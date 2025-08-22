import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, Zap, Shield, 
  Brain, Rocket, Target, Atom, Sparkles, DollarSign, 
  BookOpen, Building, Users, Star, TrendingUp, Award,
  Facebook, Twitter, Linkedin, Instagram, Youtube, 
  Github, Mail as EmailIcon, MessageCircle, HelpCircle,
  FileText, Shield as SecurityIcon, Lock, Eye, Heart
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
    title: 'Services',
    icon: <Rocket className="w-5 h-5" />,
    color: 'from-emerald-500 to-teal-500',
    links: [
      { name: 'All Services', href: '/comprehensive-services-showcase-2025' },
      { name: 'Micro SAAS', href: '/ultimate-real-micro-saas-showcase-2025' },
      { name: 'AI & Consciousness', href: '/ai-services' },
      { name: 'Quantum & Emerging Tech', href: '/quantum-services' },
      { name: 'Enterprise IT', href: '/enterprise-it' },
      { name: 'Business Solutions', href: '/business-solutions' },
      { name: 'Innovations', href: '/innovations' }
    ]
  },
  {
    title: 'Solutions',
    icon: <Target className="w-5 h-5" />,
    color: 'from-blue-500 to-indigo-500',
    links: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite' },
      { name: 'AI Content Marketing', href: '/ai-content-marketing-platform' },
      { name: 'AI Customer Success', href: '/ai-customer-success-platform' },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-suite' },
      { name: 'AI HR & Recruitment', href: '/ai-hr-recruitment-platform' },
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform' },
      { name: 'AI Supply Chain', href: '/ai-supply-chain-optimization' }
    ]
  },
  {
    title: 'Industries',
    icon: <Building className="w-5 h-5" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'Healthcare & Biotech', href: '/ai-healthcare-analytics-platform' },
      { name: 'Legal Technology', href: '/ai-legal-document-analysis' },
      { name: 'Real Estate', href: '/ai-real-estate-analytics' },
      { name: 'Education', href: '/ai-education-technology-platform' },
      { name: 'Financial Services', href: '/ai-financial-analytics-platform' },
      { name: 'Manufacturing', href: '/ai-supply-chain-optimization' },
      { name: 'Retail & E-commerce', href: '/ai-content-marketing-platform' }
    ]
  },
  {
    title: 'Company',
    icon: <Users className="w-5 h-5" />,
    color: 'from-cyan-500 to-blue-500',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Updates', href: '/news' },
      { name: 'Partnerships', href: '/partnerships' },
      { name: 'Investor Relations', href: '/investors' },
      { name: 'Press Kit', href: '/press' }
    ]
  },
  {
    title: 'Resources',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'Documentation', href: '/api-documentation-generator' },
      { name: 'API Reference', href: '/api-reference' },
      { name: 'Developer Tools', href: '/developer-tools' },
      { name: 'Learning Center', href: '/learning-center' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/white-papers' }
    ]
  },
  {
    title: 'Support',
    icon: <HelpCircle className="w-5 h-5" />,
    color: 'from-green-500 to-emerald-500',
    links: [
      { name: 'Help Center', href: '/support' },
      { name: 'Contact Support', href: '/contact' },
      { name: 'Status Page', href: '/status' },
      { name: 'System Requirements', href: '/system-requirements' },
      { name: 'Training & Onboarding', href: '/training' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Feedback', href: '/feedback' }
    ]
  }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-sky-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-400' }
];

const stats = [
  { number: '500+', label: 'Services Delivered', icon: <Star className="w-5 h-5" />, color: 'text-cyan-400' },
  { number: '1000+', label: 'Happy Clients', icon: <Users className="w-5 h-5" />, color: 'text-purple-400' },
  { number: '99.9%', label: 'Uptime', icon: <Shield className="w-5 h-5" />, color: 'text-green-400' },
  { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-5 h-5" />, color: 'text-pink-400' }
];

export default function UltraFuturisticFooter2036() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-10"
            animate={{
              x: [0, Math.random() * 800 - 400],
              y: [0, Math.random() * 600 - 300],
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-16">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color}`}>
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform duration-200 flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 text-transparent group-hover:text-purple-400 transition-all duration-200" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact & Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-gray-400">Innovation • Technology • Future</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-purple-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <a href={contactInfo.website} className="hover:text-purple-400 transition-colors">
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-400">Get the latest insights on AI, technology, and business innovation.</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                    Subscribe
                  </button>
                </div>
                
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our{' '}
                  <Link href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Privacy Policy
                  </Link>
                  {' '}and{' '}
                  <Link href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Terms of Service
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8"
          >
            {/* Social Links */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">Follow us:</span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Terms
                </Link>
                <Link href="/security" className="hover:text-white transition-colors flex items-center gap-2">
                  <SecurityIcon className="w-4 h-4" />
                  Security
                </Link>
                <Link href="/support" className="hover:text-white transition-colors flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Support
                </Link>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm">
              <p>
                © {new Date().getFullYear()} Zion Tech Group. All rights reserved. 
                Made with <Heart className="w-4 h-4 inline text-red-500" /> for the future of technology.
              </p>
              <p className="mt-2">
                Empowering businesses with AI-powered solutions since 2024.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}