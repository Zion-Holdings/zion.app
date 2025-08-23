import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Rocket, Phone, Mail, MapPin,
  Brain, Shield, Star,
  Target,
  Sparkles, Atom, Satellite, Search
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Machine Learning 2026',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    services: [
      { name: 'AI Business Intelligence Elite 2026', href: '/ai-business-intelligence-elite-2026', description: 'Next-generation AI-powered business analytics', price: '$299/month' },
      { name: 'Autonomous AI Agents Platform 2026', href: '/autonomous-ai-agents-platform-2026', description: 'Create and manage autonomous AI agents', price: '$199/month' },
      { name: 'AI Healthcare Companion 2026', href: '/ai-healthcare-companion-2026', description: 'Revolutionary AI-powered healthcare assistance', price: '$399/month' },
      { name: 'AI Creative Studio Platform', href: '/ai-creative-studio-platform', description: 'Unlimited AI-powered creativity', price: 'Custom pricing' }
    ]
  },
  {
    title: 'Quantum Computing & Security',
    icon: Atom,
    color: 'from-blue-600 to-cyan-600',
    services: [
      { name: 'Quantum Cybersecurity Suite 2026', href: '/quantum-cybersecurity-suite-2026', description: 'Quantum-resistant cybersecurity', price: '$599/month' },
      { name: 'Quantum Internet Security Platform 2026', href: '/quantum-internet-security-platform-2026', description: 'Secure the future of the internet', price: '$799/month' },
      { name: 'Quantum Financial Trading Platform 2026', href: '/quantum-financial-trading-platform-2026', description: 'Quantum-powered financial trading', price: '$1,299/month' },
      { name: 'Quantum-Secure Communication', href: '/quantum-secure-communication', description: 'Unbreakable encryption for the quantum era', price: '$599/month' }
    ]
  },
  {
    title: 'Emerging Technologies 2026',
    icon: Sparkles,
    color: 'from-green-600 to-emerald-600',
    services: [
      { name: 'Neuromorphic Computing Platform 2026', href: '/neuromorphic-computing-platform-2026', description: 'Brain-inspired computing for next-generation AI', price: '$2,499/month' },
      { name: 'DNA Computing Platform 2026', href: '/dna-computing-platform-2026', description: 'Molecular computing for complex problem solving', price: '$3,999/month' },
      { name: 'Photonic Computing Platform 2026', href: '/photonic-computing-platform-2026', description: 'Light-speed computing with photonic processors', price: '$1,999/month' },
      { name: 'Holographic Display Platform 2026', href: '/holographic-display-platform-2026', description: 'Next-generation 3D holographic visualization', price: '$899/month' }
    ]
  },
  {
    title: 'Enterprise IT Solutions 2026',
    icon: Shield,
    color: 'from-red-600 to-orange-600',
    services: [
      { name: 'Zero Trust Network Architecture 2026', href: '/zero-trust-network-architecture-2026', description: 'Next-generation network security', price: 'Custom pricing' },
      { name: 'Edge Computing Orchestration 2026', href: '/edge-computing-orchestration-2026', description: 'Intelligent edge computing management', price: 'Custom pricing' },
      { name: '5G Private Network Solutions 2026', href: '/5g-private-network-solutions-2026', description: 'Enterprise-grade 5G private networks', price: 'Custom pricing' },
      { name: 'Blockchain Infrastructure Platform 2026', href: '/blockchain-infrastructure-platform-2026', description: 'Enterprise blockchain infrastructure', price: 'Custom pricing' }
    ]
  },
  {
    title: 'Autonomous Systems & Robotics',
    icon: Target,
    color: 'from-indigo-600 to-purple-600',
    services: [
      { name: 'Swarm Robotics Platform 2026', href: '/swarm-robotics-platform-2026', description: 'Coordinated multi-robot systems', price: '$1,299/month' },
      { name: 'AI Autonomous Business Platform 2026', href: '/ai-autonomous-business-platform-2026', description: 'Run your business with autonomous AI', price: 'Custom pricing' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai', description: 'AI-powered manufacturing automation', price: '$599/month' },
      { name: 'Autonomous Supply Chain Optimization', href: '/autonomous-supply-chain-optimization', description: 'AI-powered supply chain management', price: '$399/month' }
    ]
  },
  {
    title: 'Space Technology & Innovation',
    icon: Satellite,
    color: 'from-yellow-600 to-orange-600',
    services: [
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI-powered space exploration', price: '$3,999/month' },
      { name: 'Quantum Space Mining Platform', href: '/quantum-space-mining-platform', description: 'Revolutionary space resource exploration', price: '$1,299/month' },
      { name: 'Satellite Operations AI', href: '/satellite-operations-ai', description: 'Intelligent satellite management', price: '$2,999/month' },
      { name: 'Space Debris Tracking System', href: '/space-debris-tracking-system', description: 'Advanced space debris monitoring', price: '$1,999/month' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: '2026 Services', href: '/2026-services-showcase' },
  { name: 'Enhanced 2026 Services', href: '/2026-services-showcase-enhanced' },
  { name: 'Enhanced 2026 Pricing', href: '/pricing-enhanced-2026' },
  { name: 'News & Updates', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog & Resources', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' }
];

const EnhancedNavigation2026 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/90 via-purple-900/90 to-pink-900/90 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-cyan-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span className="font-semibold">2026 Revolutionary Services</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl blur opacity-25"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-300 font-medium">Revolutionary 2026</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Service Categories */}
            {serviceCategories.map((category) => (
              <div key={category.title} className="relative group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => toggleDropdown(category.title)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white hover:text-cyan-300 transition-colors duration-200 group-hover:bg-white/10"
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.title}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === category.title ? 'rotate-180' : ''
                  }`} />
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === category.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                          <category.icon className="w-5 h-5" />
                          <span>{category.title}</span>
                        </h3>
                        <div className="space-y-3">
                          {category.services.map((service) => (
                            <motion.div
                              key={service.name}
                              whileHover={{ scale: 1.02, x: 5 }}
                              className="p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                            >
                              <Link href={service.href} onClick={closeDropdown}>
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h4 className="text-white font-medium text-sm">{service.name}</h4>
                                    <p className="text-gray-400 text-xs mt-1">{service.description}</p>
                                  </div>
                                  <div className="text-right">
                                    <span className="text-cyan-400 font-semibold text-sm">{service.price}</span>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Company Links */}
            {companyLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={link.href}
                  className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                                  className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </motion.div>

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Service Categories */}
              <div className="space-y-4">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="border-b border-cyan-500/20 pb-4">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                      <category.icon className="w-5 h-5" />
                      <span>{category.title}</span>
                    </h3>
                    <div className="space-y-2 ml-6">
                      {category.services.slice(0, 2).map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-300 hover:text-cyan-300 transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Company Links */}
              <div className="space-y-3">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-white hover:text-cyan-300 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close dropdown */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeDropdown}
        />
      )}
    </motion.nav>
  );
};

export default EnhancedNavigation2026;