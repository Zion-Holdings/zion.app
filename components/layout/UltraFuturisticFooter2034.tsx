import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Atom, 
  Shield, 
  Rocket, 
  Target, 
  Globe, 
  Cloud,
  Phone, 
  Mail, 
  MapPin, 
  Globe as GlobeIcon,
  Star,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github
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
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'GitHub', href: '#', icon: Github }
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
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section - Company Info & Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-25"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-gray-400">Innovation Beyond Limits</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Leading the future of technology with revolutionary AI, quantum computing, blockchain, and cloud solutions. 
                Empowering businesses to achieve unprecedented growth and innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <MapPin className="w-5 h-5" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <GlobeIcon className="w-5 h-5" />
                  <span>{contactInfo.website}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-white/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:bg-white/10"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Service Categories Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Comprehensive Service Portfolio
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:bg-white/10 group"
                >
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {category.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 transform"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href={category.services[0]?.href.split('/').slice(0, -1).join('/') || '#'}
                    className="inline-flex items-center mt-4 text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transform transition-all duration-200"
                  >
                    View All Services
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Section - Links & Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <div className="space-y-2">
                {companyLinks.map((link) => (
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

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <div className="space-y-2">
                {legalLinks.map((link) => (
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

            {/* Social & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
              <div className="flex space-x-3 mb-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 border border-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
              
              <div>
                <h5 className="text-sm font-medium text-white mb-3">Stay Updated</h5>
                <p className="text-gray-400 text-sm mb-3">
                  Get the latest insights on AI, quantum computing, and emerging technologies.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-white/5 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/40 focus:bg-white/10 transition-all duration-200"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-cyan-500/20 mb-8"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | Innovation Beyond Limits
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/sitemap" className="hover:text-cyan-400 transition-colors duration-200">
                Sitemap
              </Link>
              <Link href="/accessibility" className="hover:text-cyan-400 transition-colors duration-200">
                Accessibility
              </Link>
              <Link href="/security" className="hover:text-cyan-400 transition-colors duration-200">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
