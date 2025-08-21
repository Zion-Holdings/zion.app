import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Rocket, Phone, Mail, MapPin,
  Brain, Cpu, Shield, Zap, Star, Users, TrendingUp,
  Globe, Database, Cloud, Lock, Palette, Target,
  Layers, Sparkles, Atom, Microscope, Satellite,
  Search, Bell, User, Settings, LogOut
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

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">2026 Innovation</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Service Categories */}
            {serviceCategories.map((category) => (
              <div key={category.title} className="relative group">
                <button
                  onClick={() => toggleDropdown(category.title)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-slate-800/50"
                >
                  <category.icon className="w-4 h-4" />
                  <span className="font-medium">{category.title.split(' ')[0]}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === category.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === category.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white mb-4 bg-gradient-to-r ${category.color}`}>
                          <category.icon className="w-4 h-4 mr-2" />
                          {category.title}
                        </div>
                        <div className="space-y-3">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={closeDropdowns}
                              className="block p-3 rounded-xl hover:bg-slate-800/50 transition-colors duration-200 group"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">
                                    {service.name}
                                  </h4>
                                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                                    {service.description}
                                  </p>
                                </div>
                                <div className="text-purple-400 font-semibold text-sm ml-3">
                                  {service.price}
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

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
              />
            </div>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-200">
              <Bell className="w-5 h-5" />
            </button>

            {/* User Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-200">
                <User className="w-5 h-5" />
              </button>
            </div>

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50"
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
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
                />
              </div>

              {/* Mobile Service Categories */}
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-3">
                  <h3 className={`text-lg font-semibold text-white px-3 py-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    {category.title}
                  </h3>
                  <div className="space-y-2 pl-4">
                    {category.services.slice(0, 3).map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
                      >
                        <div className="text-white font-medium">{service.name}</div>
                        <div className="text-gray-400 text-sm">{service.description}</div>
                        <div className="text-purple-400 font-semibold text-sm mt-1">{service.price}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile Company Links */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white px-3 py-2 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700">
                  Company
                </h3>
                <div className="space-y-2 pl-4">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block p-3 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-slate-800/50"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-slate-700/50">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation2026;