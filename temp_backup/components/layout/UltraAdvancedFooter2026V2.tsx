import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Zap, Brain, Atom, Bot, Heart, Shield, Rocket, Star, TrendingUp, Users, CheckCircle, Code, Database, Cloud, Lock, Eye, Target, BarChart3, Lightbulb, TestTube, Leaf, Car, Microscope, BrainCircuit, ArrowRight, ExternalLink, Github, Twitter, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function UltraAdvancedFooter2026V2() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      services: [
        { name: 'AI Consciousness Platform', href: '/services/ai-consciousness-platform' },
        { name: 'AI Healthcare Diagnostics', href: '/services/ai-healthcare-diagnostics-v2' },
        { name: 'AI Content Creation Studio', href: '/services/ai-content-creation-studio-v2' },
        { name: 'AI Autonomous Robotics', href: '/services/ai-autonomous-robotics-platform' }
      ]
    },
    {
      title: 'Quantum Computing',
      icon: <Atom className="w-5 h-5" />,
      services: [
        { name: 'Quantum Financial Trading', href: '/services/ai-quantum-financial-trading-v2' },
        { name: 'Quantum Space Technology', href: '/services/quantum-space-tech-platform-v2' },
        { name: 'Quantum Drug Discovery', href: '/services/ai-quantum-drug-discovery-platform' },
        { name: 'Quantum Climate Modeling', href: '/services/ai-quantum-climate-modeling-platform' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: <Rocket className="w-5 h-5" />,
      services: [
        { name: 'Metaverse Platform', href: '/services/metaverse-digital-reality-platform-v2' },
        { name: 'Autonomous Vehicles', href: '/services/ai-autonomous-vehicle-platform-v2' },
        { name: 'Biotech AI Research', href: '/services/biotech-ai-research-platform-v2' },
        { name: 'Brain-Computer Interface', href: '/services/quantum-ai-brain-computer-interface' }
      ]
    },
    {
      title: 'Enterprise IT',
      icon: <Database className="w-5 h-5" />,
      services: [
        { name: 'Cybersecurity Platform', href: '/services/ai-cybersecurity-threat-intelligence-v2' },
        { name: 'Autonomous Manufacturing', href: '/services/ai-autonomous-manufacturing-v2' },
        { name: 'Financial Risk Management', href: '/services/ai-quantum-financial-risk-management' },
        { name: 'Cloud Infrastructure', href: '/services/cloud-platform' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: '2026 Showcase', href: '/revolutionary-2026-services-showcase-v2' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const companyInfo = [
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Support', href: '/support' },
    { name: 'Documentation', href: '/docs' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/90 backdrop-blur-sm border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur opacity-25"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                  <div className="text-sm text-purple-400">Revolutionary 2026</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Leading the future of technology with revolutionary AI consciousness platforms, 
                quantum computing solutions, and cutting-edge micro SAAS services that transform 
                businesses and accelerate innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-xl transition-all duration-300 group"
                  >
                    <div className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-gray-300 mb-6">
                  Join the revolution with our cutting-edge 2026 services and experience 
                  unprecedented growth and innovation.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/revolutionary-2026-services-showcase-v2"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Explore 2026 Services
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                </div>
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {companyInfo.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Stay updated with our latest revolutionary services and AI breakthroughs.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-purple-400 transition-colors duration-200 ml-1">
                Privacy Policy
              </Link>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 text-purple-400/20">
        <Brain className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 left-20 text-blue-400/20">
        <Atom className="w-16 h-16" />
      </div>
      <div className="absolute top-1/2 right-10 text-pink-400/20">
        <Bot className="w-12 h-12" />
      </div>
    </footer>
  );
}