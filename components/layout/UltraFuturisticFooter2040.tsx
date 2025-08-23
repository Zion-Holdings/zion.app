import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Cpu, Database, Target, Sparkles,
  Phone, Mail, MapPin, Globe, Linkedin, Twitter, Github, Youtube,
  ArrowRight, ExternalLink, Star, TrendingUp, Award, Clock, CheckCircle,
  Users, Briefcase, FileText, Video, Code, BookOpen, Zap
} from 'lucide-react';

const UltraFuturisticFooter2040: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/ziontechgroup', 
      icon: Linkedin, 
      color: 'hover:text-blue-400' 
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/ziontechgroup', 
      icon: Twitter, 
      color: 'hover:text-sky-400' 
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/ziontechgroup', 
      icon: Github, 
      color: 'hover:text-gray-300' 
    },
    { 
      name: 'YouTube', 
      href: 'https://youtube.com/ziontechgroup', 
      icon: Youtube, 
      color: 'hover:text-red-400' 
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Consciousness',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform' },
        { name: 'AI Consciousness Simulation', href: '/ai-consciousness-simulation-platform' },
        { name: 'AI Consciousness Evolution 2044', href: '/ai-consciousness-evolution-2044' },
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045' }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: Atom,
      color: 'from-cyan-500 to-blue-500',
      services: [
        { name: 'Quantum AI Hybrid Computing', href: '/quantum-ai-hybrid-computing' },
        { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
        { name: 'Quantum Neural Networks', href: '/quantum-neural-networks-platform' },
        { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'Zero-Trust Security', href: '/zero-trust-security-platform' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
        { name: 'Vulnerability Assessment', href: '/vulnerability-assessment-penetration-testing' },
        { name: 'Security Services', href: '/security' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      services: [
        { name: 'Business Solutions', href: '/solutions' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SAAS', href: '/micro-saas' },
        { name: 'Services Overview', href: '/services' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' }
  ];

  const industrySolutions = [
    { name: 'Healthcare & Biotech', href: '/solutions' },
    { name: 'Financial Services', href: '/solutions' },
    { name: 'Manufacturing', href: '/solutions' },
    { name: 'Retail & E-commerce', href: '/solutions' },
    { name: 'Education', href: '/solutions' },
    { name: 'Government', href: '/solutions' },
    { name: 'Energy & Utilities', href: '/solutions' },
    { name: 'Transportation', href: '/solutions' }
  ];

  const stats = [
    { number: '3000+', label: 'Revolutionary Services', icon: Star },
    { number: '99.99%', label: 'Uptime Guarantee', icon: TrendingUp },
    { number: '24/7', label: 'AI Support Available', icon: Clock },
    { number: '250+', label: 'Countries Served', icon: Globe }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-cyan-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section - Stats and CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Stats */}
            <div>
              <motion.h3 
                className="text-2xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Transforming Technology Since 2024
              </motion.h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/70">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center lg:text-left">
              <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Business?
              </motion.h3>
              <motion.p 
                className="text-white/70 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Join the future of technology with our revolutionary AI consciousness, quantum computing, and autonomous systems.
              </motion.p>
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="text-sm text-white/50">
                  <p>Contact: {contactInfo.email}</p>
                  <p>Phone: {contactInfo.phone}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-bold text-white text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Revolutionary Service Categories
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div 
                  key={category.title}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="text-sm text-white/70 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group/item"
                        >
                          <ArrowRight className="w-3 h-3 group-hover/item:translate-x-1 transition-transform duration-300" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-white">
                  Zion Tech Group
                </div>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous systems that transform businesses and propel humanity forward.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors duration-300">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors duration-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industry Solutions */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Industry Solutions</h4>
              <ul className="space-y-3">
                {industrySolutions.map((solution) => (
                  <li key={solution.name}>
                    <Link
                      href={solution.href}
                      className="text-white/70 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      {solution.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="text-white/70 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                    <FileText className="w-4 h-4" />
                    Blog & Insights
                  </Link>
                </li>
                <li>
                  <Link href="/webinars" className="text-white/70 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                    <Video className="w-4 h-4" />
                    Webinars & Events
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-white/70 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                    <Code className="w-4 h-4" />
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-white/70 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                    <BookOpen className="w-4 h-4" />
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-white/70 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                    <Zap className="w-4 h-4" />
                    Support Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links and Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 hover:scale-110 hover:border-cyan-400/50`}
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
              <p className="text-white/70 mb-4">
                Get the latest insights on AI consciousness, quantum computing, and revolutionary technology solutions.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/70 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="ml-2 hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link> | 
                <Link href="/terms" className="ml-2 hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
              <div className="text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  Made with revolutionary AI technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2040;