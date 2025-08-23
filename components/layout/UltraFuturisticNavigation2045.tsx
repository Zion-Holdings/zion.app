import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Search, User, Lock, Zap, Star, Sparkles, Layers, Code, ShieldCheck, Globe2, Clock, Calendar, MessageCircle, Satellite
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;
  color?: string;
}

function normalizeHref(href: string): string {
  if (!href) return href;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  if (!href.startsWith('/')) return href;
  const hasQueryOrHash = href.includes('?') || href.includes('#');
  if (hasQueryOrHash) return href;
  return href.endsWith('/') ? href : href + '/';
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Revolutionary Services 2025',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: 'New 2025',
    category: 'services',
    color: 'from-emerald-500 to-cyan-500',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete revolutionary services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Business Intelligence 2025', 
        href: '/ai-business-intelligence-platform-2025', 
        description: 'AI-powered business intelligence platform',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500',
        featured: true
      },
      { 
        name: 'AI Customer Success 2025', 
        href: '/ai-customer-success-automation-2025', 
        description: 'AI-driven customer success automation',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500',
        featured: true
      },
      { 
        name: 'Quantum-Secure Cloud 2025', 
        href: '/quantum-secure-cloud-infrastructure-2025', 
        description: 'Quantum-resistant cloud infrastructure',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500',
        featured: true
      },
      { 
        name: 'AI DevOps Automation 2025', 
        href: '/ai-powered-devops-automation-2025', 
        description: 'AI-powered DevOps automation platform',
        icon: <Code className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
      },
      { 
        name: 'Supply Chain Optimization 2025', 
        href: '/intelligent-supply-chain-optimization-2025', 
        description: 'AI-driven supply chain optimization',
        icon: <Network className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness platforms',
    badge: 'Featured',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'AI Business Intelligence', 
        href: '/ai-business-intelligence-platform-2025', 
        description: 'Transform data into actionable insights',
        icon: <BarChart3 className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Customer Success', 
        href: '/ai-customer-success-automation-2025', 
        description: 'Automate customer success with AI',
        icon: <Heart className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Cybersecurity', 
        href: '/ai-powered-cybersecurity-platform-2025', 
        description: 'AI-powered threat detection and response',
        icon: <ShieldCheck className="w-4 h-4" />
      },
      { 
        name: 'AI Content Generation', 
        href: '/ai-content-generation-platform-2025', 
        description: 'Create content at scale with AI',
        icon: <Palette className="w-4 h-4" />
      },
      { 
        name: 'AI HR Analytics', 
        href: '/intelligent-hr-analytics-platform-2025', 
        description: 'Transform HR with AI insights',
        icon: <User className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'IT Solutions',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Enterprise-grade IT infrastructure',
    badge: 'Enterprise',
    category: 'it',
    color: 'from-blue-500 to-indigo-500',
    children: [
      { 
        name: 'Quantum-Secure Cloud', 
        href: '/quantum-secure-cloud-infrastructure-2025', 
        description: 'Future-proof cloud infrastructure',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI DevOps Automation', 
        href: '/ai-powered-devops-automation-2025', 
        description: 'Intelligent DevOps automation',
        icon: <Code className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Edge Computing', 
        href: '/edge-computing-orchestration-platform', 
        description: 'Edge computing orchestration',
        icon: <Globe2 className="w-4 h-4" />
      },
      { 
        name: 'Blockchain Infrastructure', 
        href: '/blockchain-infrastructure-platform', 
        description: 'Enterprise blockchain solutions',
        icon: <Layers className="w-4 h-4" />
      },
      { 
        name: 'Zero Trust Security', 
        href: '/zero-trust-security-platform', 
        description: 'Zero trust security architecture',
        icon: <ShieldCheck className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Breakthrough quantum computing solutions',
    badge: 'Quantum',
    category: 'quantum',
    color: 'from-indigo-500 to-purple-500',
    children: [
      { 
        name: 'Quantum Neural Networks', 
        href: '/quantum-neural-network-platform-2025', 
        description: 'Quantum-powered AI neural networks',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Cybersecurity', 
        href: '/quantum-cybersecurity-future-2040', 
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />
      },
      { 
        name: 'Quantum Financial Trading', 
        href: '/quantum-financial-trading-platform', 
        description: 'Quantum financial trading platform',
        icon: <TrendingUp className="w-4 h-4" />
      },
      { 
        name: 'Quantum Materials Discovery', 
        href: '/quantum-materials-discovery-platform', 
        description: 'Quantum materials discovery',
        icon: <Atom className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-tech',
    icon: <Rocket className="w-5 h-5" />,
    description: 'AI-powered space resource intelligence',
    badge: 'Space',
    category: 'space',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'Space Resource Intelligence', 
        href: '/space-resource-intelligence-platform-2025', 
        description: 'AI-driven space resource analysis',
        icon: <Globe className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Space Resource Mining', 
        href: '/space-resource-mining-platform', 
        description: 'Space mining automation platform',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'Satellite Operations', 
        href: '/ai-powered-space-technology', 
        description: 'AI-powered satellite technology',
        icon: <Satellite className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    href: '/micro-saas',
    icon: <Grid className="w-5 h-5" />,
    description: 'Innovative business solutions',
    badge: 'Micro SAAS',
    category: 'micro-saas',
    color: 'from-emerald-500 to-teal-500',
    children: [
      { 
        name: 'Supply Chain Optimization', 
        href: '/intelligent-supply-chain-optimization-2025', 
        description: 'AI-driven supply chain optimization',
        icon: <Network className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Content Generation', 
        href: '/ai-content-generation-platform-2025', 
        description: 'AI content generation platform',
        icon: <Palette className="w-4 h-4" />
      },
      { 
        name: 'HR Analytics', 
        href: '/intelligent-hr-analytics-platform-2025', 
        description: 'Intelligent HR analytics platform',
        icon: <User className="w-4 h-4" />
      },
      { 
        name: 'CRM Intelligence', 
        href: '/smart-crm-intelligence-suite', 
        description: 'Smart CRM intelligence suite',
        icon: <Heart className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Showcase & Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Service showcases and pricing',
    badge: 'Showcase',
    category: 'pricing',
    color: 'from-yellow-500 to-orange-500',
    children: [
      { 
        name: '2025 Services Showcase', 
        href: '/ultimate-2025-micro-saas-showcase', 
        description: 'Complete 2025 services overview',
        icon: <Star className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Pricing Plans', 
        href: '/pricing', 
        description: 'Transparent pricing plans',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Market Pricing', 
        href: '/market-pricing', 
        description: 'Competitive market analysis',
        icon: <TrendingUp className="w-4 h-4" />
      }
    ]
  }
];

const UltraFuturisticNavigation2045: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search functionality
  };

  const filteredServices = navigationItems.flatMap(item => 
    item.children?.filter(child => 
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []
  );

  return (
    <>
      {/* Top Contact Bar */}
      <div className="relative z-40">
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                  <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <a href="tel:+1 302 464 0950" className="hover:text-cyan-400 transition-colors duration-200">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                  <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-200">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                  <Globe className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <span className="hover:text-cyan-400 transition-colors duration-200">
                    364 E Main St STE 1008 Middletown DE 19709
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                  <Globe2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.9/5 (200+ Reviews)</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-2">
                  <Link href="/contact" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                    <MessageCircle className="w-4 h-4" />
                    <span>Get Quote</span>
                  </Link>
                  <Link href="/contact" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                    <Calendar className="w-4 h-4" />
                    <span>Book Demo</span>
                  </Link>
                  <Link href="/support" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                    <MessageCircle className="w-4 h-4" />
                    <span>Live Chat</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-black/40 backdrop-blur-lg border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl shadow-lg shadow-cyan-500/25"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-500/50 rounded-xl animate-pulse"></div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ZionTech Group
                </span>
                <span className="text-xs text-white/60">Future Technology Solutions</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className={`px-2 py-1 text-xs bg-gradient-to-r ${item.color} text-white rounded-full`}>
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50"
                      >
                        <div className="p-4">
                          <div className="mb-4">
                            <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                          <div className="space-y-2">
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={normalizeHref(child.href)}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                              >
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-gray-600'} flex items-center justify-center`}>
                                  {child.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                      {child.name}
                                    </span>
                                    {child.featured && (
                                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-gray-400 text-sm">{child.description}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
                >
                  <Search className="w-5 h-5" />
                </button>

                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50"
                    >
                      <div className="p-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Search services..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                          />
                        </div>
                        
                        {searchQuery && (
                          <div className="mt-4 space-y-2 max-h-64 overflow-y-auto">
                            {filteredServices.map((service) => (
                              <Link
                                key={service.name}
                                href={normalizeHref(service.href)}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                                onClick={() => setIsSearchOpen(false)}
                              >
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                                  {service.icon}
                                </div>
                                <div>
                                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-gray-400 text-sm">{service.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Get Started Button */}
              <Link
                href="/contact"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center justify-between w-full p-3 text-left text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-6 mt-2 space-y-2"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              className="block p-3 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="flex items-center space-x-3">
                                {child.icon}
                                <div>
                                  <div className="font-medium">{child.name}</div>
                                  <div className="text-sm text-gray-400">{child.description}</div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default UltraFuturisticNavigation2045;