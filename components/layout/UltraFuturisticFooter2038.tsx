import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Phone, Mail, MapPin, 
  Brain, Atom, Shield, Rocket, Target, 
  Star, 
  Twitter, Linkedin, Youtube, Github, 
  ArrowUp, Zap, Users, FileText, ShieldCheck, Database, Server, Lock, Key, Eye, Search, Bell, User, Cog,
  Cpu, Cloud, Settings, Monitor, Palette, Network, Layers, Code, Heart, ShoppingCart, Clock, MessageCircle, HelpCircle, Building, DollarSign
} from 'lucide-react';

const footerSections = [
  {
    title: 'Featured Services',
    description: 'Our most popular and innovative solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'AI Emotional Intelligence Coach', href: '/ai-emotional-intelligence-coach', featured: true },
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant', featured: true },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure', featured: true },
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center', featured: true },
      { name: 'AI Legal Contract Analyzer Pro', href: '/ai-legal-contract-analyzer-pro', featured: true },
      { name: 'AI Healthcare Diagnostic Assistant', href: '/ai-healthcare-diagnostic-assistant', featured: true },
      { name: 'AI Financial Fraud Detection', href: '/ai-financial-fraud-detection', featured: true },
      { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization' },
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform' },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'AI Emotional Intelligence Coach', href: '/ai-emotional-intelligence-coach' },
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' },
      { name: 'AI Autonomous Business Operations', href: '/autonomous-business-operations-platform' },
      { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform' },
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
      { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework' },
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform' },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform' },
      { name: 'AI Legal Contract Analyzer Pro', href: '/ai-legal-contract-analyzer-pro' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    links: [
      { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery-platform' },
      { name: 'Quantum Bio-Computing Platform', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform' },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform' },
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform' }
    ]
  },
  {
    title: 'Enterprise IT Solutions',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
      { name: 'AI-Powered Cybersecurity Platform', href: '/ai-powered-cybersecurity' },
      { name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management' },
      { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation' },
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab' }
    ]
  },
  {
    title: 'Micro SAAS Solutions',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    color: 'from-emerald-500 to-cyan-500',
    links: [
      { name: 'AI Legal Contract Analyzer Pro', href: '/ai-legal-contract-analyzer-pro' },
      { name: 'AI Healthcare Diagnostic Assistant', href: '/ai-healthcare-diagnostic-assistant' },
      { name: 'AI Financial Fraud Detection', href: '/ai-financial-fraud-detection' },
      { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization' },
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform' },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform' },
      { name: 'AI Content Generator', href: '/ai-content-generator' },
      { name: 'AI Code Review', href: '/ai-code-review' },
      { name: 'AI HR Analytics Platform', href: '/intelligent-hr-analytics-platform' },
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform' }
    ]
  },
  {
    title: 'Industry Solutions',
    description: 'Specialized solutions for specific industries',
    icon: <Building className="w-5 h-5 text-green-400" />,
    color: 'from-green-500 to-emerald-500',
    links: [
      { name: 'Financial Services Solutions', href: '/financial-services-solutions' },
      { name: 'Healthcare Technology Solutions', href: '/healthcare-technology-solutions' },
      { name: 'Manufacturing AI Solutions', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology Solutions', href: '/retail-technology-solutions' },
      { name: 'Space Technology Solutions', href: '/space-technology' },
      { name: 'Quantum Computing Services', href: '/quantum-services' },
      { name: 'AI Automation Services', href: '/ai-automation-services' },
      { name: 'Enterprise Cloud Solutions', href: '/enterprise-cloud-solutions' },
      { name: 'Cybersecurity Services', href: '/security' },
      { name: 'DevOps & Development', href: '/devops-services' }
    ]
  }
];

const quickLinks = [
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Services', href: '/services', icon: <Rocket className="w-4 h-4" /> },
  { name: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
  { name: 'Documentation', href: '/api-documentation', icon: <FileText className="w-4 h-4" /> },
  { name: 'Status', href: '/status', icon: <Monitor className="w-4 h-4" /> },
  { name: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4" /> },
  { name: 'News', href: '/news', icon: <Bell className="w-4 h-4" /> },
  { name: 'Resources', href: '/resources', icon: <Database className="w-4 h-4" /> }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function UltraFuturisticFooter2038() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-lg opacity-50"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-white/60">Future Technology Today</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Pioneering the future of technology with AI, quantum computing, and space innovation. 
              We deliver cutting-edge solutions that transform businesses and drive innovation.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <a 
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.email}</span>
              </a>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-green-400" />
                <span>{contactInfo.address}</span>
              </a>
              <a 
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.website}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="xl:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors group"
                >
                  {link.icon}
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="xl:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 border border-white/10 hover:border-white/20 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 transform hover:scale-110"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                  {section.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                  <p className="text-sm text-white/60">{section.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {section.links.slice(0, 6).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center space-x-2 text-sm transition-colors ${
                      link.featured 
                        ? 'text-white hover:text-blue-400' 
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.featured && <Star className="w-3 h-3 text-yellow-400" />}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/security" className="hover:text-white transition-colors">Security</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live & Secure</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                title="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}