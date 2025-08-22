import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Star, 
  Brain, 
  Atom, 
  Shield, 
  Rocket, 
  Target, 
  Globe, 
  Cloud, 
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react';

const navigationItems = [
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: Brain,
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    children: [
      { name: 'AI Consciousness Platform', href: '/ai-services/consciousness-platform' },
      { name: 'Emotional Intelligence AI', href: '/ai-services/emotional-intelligence' },
      { name: 'Self-Aware AI Systems', href: '/ai-services/self-aware-ai' },
      { name: 'AI Ethics & Governance', href: '/ai-services/ai-ethics' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: Atom,
    description: 'Breakthrough quantum computing and space technology solutions',
    children: [
      { name: 'Quantum Computing Platform', href: '/quantum-services/quantum-computing' },
      { name: 'Space Mining Technology', href: '/quantum-services/space-mining' },
      { name: 'Brain-Computer Interface', href: '/quantum-services/brain-computer-interface' },
      { name: 'Quantum Cryptography', href: '/quantum-services/quantum-cryptography' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: Shield,
    description: 'Advanced enterprise infrastructure and security solutions',
    children: [
      { name: 'Zero Trust Security', href: '/enterprise-it/zero-trust-security' },
      { name: 'Quantum Cloud Platform', href: '/enterprise-it/quantum-cloud' },
      { name: 'Autonomous Operations', href: '/enterprise-it/autonomous-operations' },
      { name: 'Enterprise Security Suite', href: '/enterprise-it/security-suite' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: Rocket,
    description: 'Innovative business solutions for modern enterprises',
    children: [
      { name: 'Content Automation Platform', href: '/micro-saas/content-automation' },
      { name: 'CRM Intelligence Suite', href: '/micro-saas/crm-intelligence' },
      { name: 'Decision Engine Platform', href: '/micro-saas/decision-engine' },
      { name: 'Business Process Automation', href: '/micro-saas/process-automation' }
    ]
  },
  {
    name: 'Advanced AI Automation',
    href: '/advanced-ai-automation-services',
    icon: Brain,
    description: 'Revolutionary AI automation for development, testing, DevOps, and security',
    children: [
      { name: 'AI Code Review Copilot', href: '/advanced-ai-automation-services/ai-code-review' },
      { name: 'AI Testing Automation', href: '/advanced-ai-automation-services/ai-testing' },
      { name: 'AI DevOps Intelligence', href: '/advanced-ai-automation-services/ai-devops' },
      { name: 'AI Security Automation', href: '/advanced-ai-automation-services/ai-security' }
    ]
  },
  {
    name: 'Advanced IT Infrastructure',
    href: '/advanced-it-infrastructure-services',
    icon: Cloud,
    description: 'Next-generation infrastructure with quantum computing and edge computing',
    children: [
      { name: 'Quantum Cloud Platform', href: '/advanced-it-infrastructure-services/quantum-cloud' },
      { name: 'Edge Computing Platform', href: '/advanced-it-infrastructure-services/edge-computing' },
      { name: 'Zero Trust Security', href: '/advanced-it-infrastructure-services/zero-trust' },
      { name: 'Autonomous Infrastructure', href: '/advanced-it-infrastructure-services/autonomous' }
    ]
  },
  {
    name: 'Innovative Business Solutions',
    href: '/innovative-business-solutions',
    icon: Target,
    description: 'AI-powered business intelligence, marketing, sales, and HR solutions',
    children: [
      { name: 'Business Intelligence Platform', href: '/innovative-business-solutions/business-intelligence' },
      { name: 'Marketing Automation Suite', href: '/innovative-business-solutions/marketing-automation' },
      { name: 'Sales Intelligence Platform', href: '/innovative-business-solutions/sales-intelligence' },
      { name: 'HR Automation Suite', href: '/innovative-business-solutions/hr-automation' }
    ]
  },
  {
    name: 'Blockchain & Web3',
    href: '/blockchain-web3-services',
    icon: Globe,
    description: 'Advanced blockchain, DeFi, NFT, and Web3 infrastructure solutions',
    children: [
      { name: 'DeFi Yield Optimization', href: '/blockchain-web3-services/defi-yield' },
      { name: 'NFT Marketplace Platform', href: '/blockchain-web3-services/nft-marketplace' },
      { name: 'DAO Governance Platform', href: '/blockchain-web3-services/dao-governance' },
      { name: 'Cross-Chain Bridge Platform', href: '/blockchain-web3-services/cross-chain-bridge' }
    ]
  },
  {
    name: 'Cloud & Infrastructure',
    href: '/cloud-infrastructure-services',
    icon: Cloud,
    description: 'Enterprise-grade cloud management, edge computing, and infrastructure solutions',
    children: [
      { name: 'Multi-Cloud Management', href: '/cloud-infrastructure-services/multi-cloud' },
      { name: 'Edge Computing Platform', href: '/cloud-infrastructure-services/edge-computing' },
      { name: 'Container Orchestration', href: '/cloud-infrastructure-services/container-orchestration' },
      { name: 'Cloud Security Platform', href: '/cloud-infrastructure-services/cloud-security' }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function EnhancedNavigation2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeAllDropdowns}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-gray-400">Innovation Beyond Limits</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold text-cyan-400 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={closeAllDropdowns}
                              className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-200">
                                  {child.name}
                                </span>
                                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200 rotate-[-90deg]" />
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-700">
                          <Link
                            href={item.href}
                            onClick={closeAllDropdowns}
                            className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
                          >
                            View All {item.name} Services
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{contactInfo.mobile}</span>
            </div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full text-left p-3 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-8 space-y-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={closeAllDropdowns}
                            className="block p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors duration-200"
                          >
                            {child.name}
                          </Link>
                        ))}
                        <Link
                          href={item.href}
                          onClick={closeAllDropdowns}
                          className="block p-2 text-cyan-400 hover:text-cyan-300 font-medium"
                        >
                          View All {item.name} Services →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}