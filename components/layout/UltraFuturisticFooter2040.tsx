import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Cpu, Database, Target, Sparkles,
  Phone, Mail, MapPin, Globe, Linkedin, Twitter, Github, Youtube,
  ArrowRight, ExternalLink, Star, TrendingUp, Award, Clock, CheckCircle,
  Users, Briefcase, FileText, Video, Code, BookOpen, Zap, Heart,
  GraduationCap, Building, Palette, BarChart3, Cloud, Lock
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
      href: 'https://youtube.com/@ziontechgroup', 
      icon: Video, 
      color: 'hover:text-red-400' 
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Consciousness',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2044' },
        { name: 'Emotional Intelligence AI', href: '/ai-emotional-intelligence-platform' },
        { name: 'Autonomous Decision Making', href: '/ai-autonomous-decision-engine' },
        { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: Atom,
      color: 'from-cyan-500 to-blue-500',
      services: [
        { name: 'Quantum AI Hybrid Computing', href: '/quantum-ai-fusion-platform' },
        { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-2044' },
        { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform-2044' },
        { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'Quantum Cybersecurity Intelligence', href: '/quantum-cybersecurity-platform-2044' },
        { name: 'AI Threat Detection', href: '/ai-powered-cybersecurity' },
        { name: 'Zero-Trust Security', href: '/zero-trust-security-platform' },
        { name: 'Quantum Encryption', href: '/quantum-encryption-gateway' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      services: [
        { name: 'Autonomous AI Business Intelligence', href: '/ai-autonomous-business-intelligence-2044' },
        { name: 'AI Content Intelligence', href: '/ai-content-personalization-engine' },
        { name: 'Predictive Analytics Platform', href: '/ai-predictive-maintenance-platform' },
        { name: 'Business Process Automation', href: '/ai-autonomous-business-process-automation' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Partners', href: '/partners' },
    { name: 'News & Press', href: '/news' },
    { name: 'Contact', href: '/contact' }
  ];

  const resourceLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Training', href: '/training' },
    { name: 'Support', href: '/support' },
    { name: 'Status', href: '/status' },
    { name: 'Privacy Policy', href: '/privacy' }
  ];

  const solutionLinks = [
    { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
    { name: 'Financial Services', href: '/solutions/financial' },
    { name: 'Manufacturing', href: '/solutions/manufacturing' },
    { name: 'Retail & E-commerce', href: '/solutions/retail' },
    { name: 'Education Technology', href: '/solutions/education' },
    { name: 'Government Technology', href: '/solutions/government' },
    { name: 'Entertainment & Media', href: '/entertainment-media-solutions' },
    { name: 'Energy & Utilities', href: '/energy-utilities-solutions' }
  ];

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-white/10 relative z-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-cyan-400 text-sm">Pioneering the Future of Technology</p>
              </div>
            </div>
            
            <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-md">
              Revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. 
              We're building the technology of tomorrow, today.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors duration-300">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors duration-300">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Briefcase className="w-5 h-5 text-cyan-400 mr-2" />
              Our Services
            </h4>
            <div className="space-y-4">
              {serviceCategories.map((category) => (
                <div key={category.title} className="mb-6">
                  <h5 className="text-white font-medium mb-3 flex items-center">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-2`}></div>
                    {category.title}
                  </h5>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
              Quick Links
            </h4>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h5 className="text-white font-medium mb-3">Company</h5>
                <ul className="space-y-2">
                  {quickLinks.slice(0, 4).map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-white font-medium mb-3">Resources</h5>
                <ul className="space-y-2">
                  {resourceLinks.slice(0, 4).map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2">
                Privacy Policy
              </Link> | 
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300 ml-2">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                System Status: Operational
              </span>
              <Link href="/status" className="hover:text-cyan-400 transition-colors duration-300">
                View Status
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Ahead of the Curve</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI consciousness, quantum computing, and emerging technologies 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2040;