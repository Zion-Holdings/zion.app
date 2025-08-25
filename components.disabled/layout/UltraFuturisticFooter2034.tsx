import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Globe, Phone, Mail, MapPin, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, BookOpen, Users,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github, MessageCircle, MessageSquare,
  TrendingUp, FileText, HelpCircle, Palette, GraduationCap, Hospital, Coins, Leaf, Scale
} from 'lucide-react';

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    services: [
      { name: 'AI Consciousness Platform', href: '/ai-services/consciousness-platform' },
      { name: 'Emotional Intelligence AI', href: '/ai-services/emotional-intelligence' },
      { name: 'Self-Aware AI Systems', href: '/ai-services/self-aware-ai' },
      { name: 'AI Ethics & Governance', href: '/ai-services/ai-ethics' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: [
      { name: 'Quantum Computing Platform', href: '/quantum-services/quantum-computing' },
      { name: 'Space Mining Technology', href: '/quantum-services/space-mining' },
      { name: 'Brain-Computer Interface', href: '/quantum-services/brain-computer-interface' },
      { name: 'Quantum Cryptography', href: '/quantum-services/quantum-cryptography' }
    ]
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: [
      { name: 'Zero Trust Security', href: '/enterprise-it/zero-trust-security' },
      { name: 'Quantum Cloud Platform', href: '/enterprise-it/quantum-cloud' },
      { name: 'Autonomous Operations', href: '/enterprise-it/autonomous-operations' },
      { name: 'Enterprise Security Suite', href: '/enterprise-it/security-suite' }
    ]
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: [
      { name: 'Content Automation Platform', href: '/micro-saas/content-automation' },
      { name: 'CRM Intelligence Suite', href: '/micro-saas/crm-intelligence' },
      { name: 'Decision Engine Platform', href: '/micro-saas/decision-engine' },
      { name: 'Business Process Automation', href: '/micro-saas/process-automation' }
    ]
  },
  {
    title: 'Advanced AI Automation',
    description: 'Revolutionary AI automation for development, testing, DevOps, and security',
    services: [
      { name: 'AI Code Review Copilot', href: '/advanced-ai-automation-services/ai-code-review' },
      { name: 'AI Testing Automation', href: '/advanced-ai-automation-services/ai-testing' },
      { name: 'AI DevOps Intelligence', href: '/advanced-ai-automation-services/ai-devops' },
      { name: 'AI Security Automation', href: '/advanced-ai-automation-services/ai-security' }
    ]
  },
  {
    title: 'Advanced IT Infrastructure',
    description: 'Next-generation infrastructure with quantum computing and edge computing',
    services: [
      { name: 'Quantum Cloud Platform', href: '/advanced-it-infrastructure-services/quantum-cloud' },
      { name: 'Edge Computing Platform', href: '/advanced-it-infrastructure-services/edge-computing' },
      { name: 'Zero Trust Security', href: '/advanced-it-infrastructure-services/zero-trust' },
      { name: 'Autonomous Infrastructure', href: '/advanced-it-infrastructure-services/autonomous' }
    ]
  },
  {
    title: 'Innovative Business Solutions',
    description: 'AI-powered business intelligence, marketing, sales, and HR solutions',
    services: [
      { name: 'Business Intelligence Platform', href: '/innovative-business-solutions/business-intelligence' },
      { name: 'Marketing Automation Suite', href: '/innovative-business-solutions/marketing-automation' },
      { name: 'Sales Intelligence Platform', href: '/innovative-business-solutions/sales-intelligence' },
      { name: 'HR Automation Suite', href: '/innovative-business-solutions/hr-automation' }
    ]
  },
  {
    title: 'Blockchain & Web3',
    description: 'Advanced blockchain, DeFi, NFT, and Web3 infrastructure solutions',
    services: [
      { name: 'DeFi Yield Optimization', href: '/blockchain-web3-services/defi-yield' },
      { name: 'NFT Marketplace Platform', href: '/blockchain-web3-services/nft-marketplace' },
      { name: 'DAO Governance Platform', href: '/blockchain-web3-services/dao-governance' },
      { name: 'Cross-Chain Bridge Platform', href: '/blockchain-web3-services/cross-chain-bridge' }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Enterprise-grade cloud management, edge computing, and infrastructure solutions',
    services: [
      { name: 'Multi-Cloud Management', href: '/cloud-infrastructure-services/multi-cloud' },
      { name: 'Edge Computing Platform', href: '/cloud-infrastructure-services/edge-computing' },
      { name: 'Container Orchestration', href: '/cloud-infrastructure-services/container-orchestration' },
      { name: 'Cloud Security Platform', href: '/cloud-infrastructure-services/cloud-security' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Leadership Team', href: '/leadership' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Press', href: '/news' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Locations', href: '/locations' }
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-documentation' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog & News', href: '/blog' },
  { name: 'Support Center', href: '/support' },
  { name: 'Training & Certification', href: '/training' },
  { name: 'Community Forum', href: '/community' },
  { name: 'Developer Resources', href: '/developer-resources' }
];

const legalLinks = [
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'GDPR Compliance', href: '/gdpr' },
  { name: 'Data Processing Agreement', href: '/dpa' },
  { name: 'Service Level Agreement', href: '/sla' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
];

const quickLinks = [
  { name: 'All Services', href: '/comprehensive-services-showcase-2025' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
  { name: 'Support', href: '/support' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-docs' }
];

const supportLinks = [
  { name: 'Help Center', href: '/help' },
  { name: 'Contact Support', href: '/support/contact' },
  { name: 'Knowledge Base', href: '/kb' },
  { name: 'Video Tutorials', href: '/tutorials' },
  { name: 'Community Forum', href: '/community' },
  { name: 'Status Page', href: '/status' }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const stats = [
  { number: '100+', label: 'Services', icon: Star, color: 'text-cyan-400' },
  { number: '2000+', label: 'Companies Served', icon: Users, color: 'text-purple-400' },
  { number: '99.9%', label: 'Uptime', icon: Award, color: 'text-green-400' },
  { number: '400%', label: 'Average ROI', icon: TrendingUp, color: 'text-pink-400' }
];

export default function UltraFuturisticFooter2034() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">Zion Tech Group</div>
                <div className="text-sm text-cyan-400">Future Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions. 
              Transform your business with our innovative services and accelerate innovation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.slice(0, 4).map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.services.slice(0, 5).map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                {category.services.length > 5 && (
                  <li>
                    <Link 
                      href={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm flex items-center"
                    >
                      View All
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <div className="space-y-2">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates on new services and technology trends.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="ml-2 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 text-sm">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>150+ Countries Supported</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
