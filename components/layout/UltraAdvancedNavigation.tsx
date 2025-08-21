import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Rocket, Phone, Mail, MapPin,
  Brain, Cpu, Shield, Zap, Star, Users, TrendingUp,
  Globe, Database, Cloud, Lock, Palette, Target,
  Layers, Sparkles, Atom, Microscope, Satellite
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    services: [
      { name: 'AI Predictive Business Intelligence', href: '/ai-predictive-business-intelligence', description: 'Predict market trends with 95% accuracy', price: '$1,299/month' },
      { name: 'Autonomous AI Healthcare Diagnostics', href: '/autonomous-ai-healthcare-diagnostics', description: 'AI-powered medical diagnostics with 99.2% accuracy', price: '$3,999/month' },
      { name: 'AI Autonomous Manufacturing', href: '/ai-autonomous-manufacturing-platform', description: 'Fully autonomous manufacturing with AI optimization', price: '$4,999/month' },
      { name: 'AI Metaverse Development', href: '/ai-metaverse-development-platform', description: 'Create immersive metaverse experiences with AI', price: '$2,499/month' }
    ]
  },
  {
    title: 'Quantum Computing',
    icon: Atom,
    services: [
      { name: 'Quantum-Secure Financial Trading', href: '/quantum-secure-financial-trading', description: 'Unbreakable quantum encryption for trading', price: '$2,999/month' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform', description: 'Unbreakable quantum encryption for internet', price: '$1,999/month' },
      { name: 'Quantum Space Mining Platform', href: '/quantum-space-mining-platform', description: 'Revolutionary space resource exploration', price: '$8,999/month' },
      { name: 'Quantum Blockchain Infrastructure', href: '/quantum-blockchain-infrastructure', description: 'Quantum-secure blockchain for finance', price: '$1,799/month' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Sparkles,
    services: [
      { name: 'Neuromorphic Computing Platform', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing for next-generation AI', price: '$12,999/month' },
      { name: 'DNA Computing Platform', href: '/dna-computing-platform', description: 'Molecular computing for complex problem solving', price: '$25,999/month' },
      { name: 'Photonic Computing Platform', href: '/photonic-computing-platform', description: 'Light-speed computing with photonic processors', price: '$18,999/month' },
      { name: 'Holographic Display Platform', href: '/holographic-display-platform', description: 'Next-generation 3D holographic visualization', price: '$6,999/month' }
    ]
  },
  {
    title: 'Enterprise IT & Security',
    icon: Shield,
    services: [
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Never trust, always verify security', price: '$15,999/month' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed computing management', price: '$8,999/month' },
      { name: '5G Private Network Solutions', href: '/5g-private-network-solutions', description: 'High-speed private networks', price: '$12,999/month' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform', description: 'Intelligent automation for development', price: '$4,999/month' }
    ]
  },
  {
    title: 'Autonomous Systems',
    icon: Target,
    services: [
      { name: 'AI Autonomous Supply Chain', href: '/ai-autonomous-supply-chain', description: 'Fully autonomous supply chain optimization', price: '$3,299/month' },
      { name: 'Swarm Robotics Platform', href: '/swarm-robotics-platform', description: 'Coordinated multi-robot systems', price: '$9,999/month' },
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform', description: 'AI-powered autonomous vehicle control', price: '$11,999/month' },
      { name: 'Quantum Internet Platform', href: '/quantum-internet-platform', description: 'Next-generation quantum communication', price: '$5,999/month' }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    services: [
      { name: 'Cloud Migration & Optimization', href: '/cloud-migration-optimization', description: 'Seamless cloud migration with optimization', price: '$9,999/month' },
      { name: 'Data Center Modernization', href: '/data-center-modernization', description: 'Transform legacy data centers', price: '$18,999/month' },
      { name: 'API Management & Security', href: '/api-management-security', description: 'Comprehensive API management', price: '$3,999/month' },
      { name: 'Identity & Access Management', href: '/identity-access-management', description: 'Comprehensive identity management', price: '$5,999/month' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: '2026 Services', href: '/2026-services-showcase' },
  { name: 'All Services', href: '/services' },
  { name: 'Market Pricing', href: '/market-pricing-2026' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' }
];

export default function UltraAdvancedNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Enhanced Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-b border-gray-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{contactInfo.mobile}</span>
                <span className="sm:hidden">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">{contactInfo.email}</span>
                <span className="sm:hidden">kleber@ziontechgroup.com</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2 text-green-300 hover:text-green-200 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="/contact" 
                className="hidden sm:inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gray-900/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    Revolutionary AI & Quantum Solutions
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {serviceCategories.map((category) => (
                <div key={category.title} className="relative group">
                  <button
                    onClick={() => toggleDropdown(category.title)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="font-medium">{category.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === category.title ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === category.title && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 z-50"
                      >
                        <div className="p-4">
                          <div className="mb-3">
                            <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                          </div>
                          <div className="space-y-3">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                                onClick={closeMenu}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h4 className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                                      {service.name}
                                    </h4>
                                    <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                                  </div>
                                  <div className="ml-4 text-right">
                                    <span className="text-xs font-semibold text-cyan-400">{service.price}</span>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Company Links */}
              <div className="flex items-center space-x-6">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Service Categories */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-2">
                    <div className="flex items-center space-x-2 text-cyan-300">
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.title}</span>
                    </div>
                    <div className="ml-7 space-y-2">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                          onClick={closeMenu}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-white">{service.name}</h4>
                              <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                            </div>
                            <span className="text-xs font-semibold text-cyan-400 ml-4">{service.price}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Company Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <div className="grid grid-cols-2 gap-4">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 pt-4 border-t border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
