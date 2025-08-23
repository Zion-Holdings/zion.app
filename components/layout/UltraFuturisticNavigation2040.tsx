import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Search, User, Lock, Zap
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
    name: 'Revolutionary Services 2043',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: 'New 2043',
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
        name: 'AI Consciousness Evolution 2043', 
        href: '/ai-consciousness-evolution-2043', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum AI Neural Network 2043', 
        href: '/quantum-ai-neural-2043', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'AI Business Intelligence 2043', 
        href: '/ai-business-intelligence-2043', 
        description: 'AI-powered business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cybersecurity 2043', 
        href: '/quantum-cybersecurity-2043', 
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Autonomous Customer Success 2043', 
        href: '/autonomous-customer-success-2043', 
        description: 'AI-powered customer success',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500'
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
        name: 'AI Consciousness Evolution 2043', 
        href: '/ai-consciousness-evolution-2043', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum AI Neural Network 2043', 
        href: '/quantum-ai-neural-2043', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous AI Research 2043', 
        href: '/autonomous-ai-research-2043', 
        description: 'Fully autonomous AI research',
        icon: <Cpu className="w-4 h-4" />
      },
      { 
        name: 'AI Content Personalization 2043', 
        href: '/ai-content-personalization-2043', 
        description: 'Intelligent content personalization',
        icon: <Palette className="w-4 h-4" />
      },
      { 
        name: 'AI Ethics & Governance 2043', 
        href: '/ai-ethics-governance-2043', 
        description: 'AI ethics and governance',
        icon: <Shield className="w-4 h-4" />
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
    color: 'from-blue-500 to-cyan-500',
    children: [
      { 
        name: 'Quantum Cloud Infrastructure 2043', 
        href: '/quantum-cloud-infrastructure-2043', 
        description: 'Quantum-powered cloud infrastructure',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Database Platform 2043', 
        href: '/quantum-database-2043', 
        description: 'Quantum-powered database',
        icon: <Database className="w-4 h-4" />
      },
      { 
        name: 'Quantum Edge Computing 2043', 
        href: '/quantum-edge-computing-2043', 
        description: 'Quantum-powered edge computing',
        icon: <Cpu className="w-4 h-4" />
      },
      { 
        name: 'Quantum API Gateway 2043', 
        href: '/quantum-api-gateway-2043', 
        description: 'Quantum-powered API gateway',
        icon: <Network className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Cybersecurity',
    href: '/cybersecurity',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced security solutions',
    badge: 'Secure',
    category: 'security',
    color: 'from-red-500 to-orange-500',
    children: [
      { 
        name: 'Quantum Cybersecurity 2043', 
        href: '/quantum-cybersecurity-2043', 
        description: 'Quantum-resistant cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Network Security 2043', 
        href: '/ai-network-security-2043', 
        description: 'AI-powered network security',
        icon: <Network className="w-4 h-4" />
      },
      { 
        name: 'Quantum Internet Security 2043', 
        href: '/quantum-internet-security-2043', 
        description: 'Quantum internet security',
        icon: <Globe className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Revolutionary space solutions',
    badge: 'Space',
    category: 'space',
    color: 'from-indigo-500 to-purple-500',
    children: [
      { 
        name: 'Space Resource Intelligence 2043', 
        href: '/space-resource-intelligence-2043', 
        description: 'AI-powered space resource management',
        icon: <Globe className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous Space Operations 2043', 
        href: '/autonomous-space-operations-2043', 
        description: 'Fully autonomous space operations',
        icon: <Rocket className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Transparent pricing plans',
    category: 'pricing',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'About',
    href: '/about',
    icon: <Target className="w-5 h-5" />,
    description: 'Learn about Zion Tech Group',
    category: 'about',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Mail className="w-5 h-5" />,
    description: 'Get in touch with our team',
    category: 'contact',
    color: 'from-pink-500 to-purple-500'
  }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  const handleDropdownToggle = useCallback((itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  }, [activeDropdown]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      // Implement search functionality
      console.log('Searching for:', query);
    }
  }, []);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      // Handle search submission
      console.log('Search submitted:', searchQuery);
      setIsSearchOpen(false);
    }
  }, [searchQuery]);

  return (
    <>
      {/* Enhanced Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
            : 'bg-transparent'
        }`}
        ref={mobileMenuRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.children ? (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={normalizeHref(item.href)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}

                  {/* Enhanced Dropdown Menu */}
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        
                        <div className="space-y-3">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              className={`flex items-start space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20' 
                                  : 'hover:bg-white/5'
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${
                                child.color || 'from-gray-500 to-gray-600'
                              } p-2 flex-shrink-0`}>
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {child.name}
                                  </span>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-400 line-clamp-2">{child.description}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </motion.button>

              {/* Contact Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                onClick={() => window.location.href = '/contact'}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              ref={searchRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-white/10 bg-black/95 backdrop-blur-xl"
            >
              <div className="max-w-4xl mx-auto px-4 py-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search revolutionary services, technologies, and solutions..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, type: 'tween' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, type: 'tween' }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-white/20 shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Zion
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => handleDropdownToggle(item.name)}
                            className="w-full flex items-center justify-between p-4 text-left text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                          >
                            <div className="flex items-center space-x-3">
                              {item.icon}
                              <span className="font-medium">{item.name}</span>
                              {item.badge && (
                                <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-6 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={normalizeHref(child.href)}
                                  onClick={() => setIsOpen(false)}
                                  className="block p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${
                                      child.color || 'from-gray-500 to-gray-600'
                                    } p-1`}>
                                      {child.icon}
                                    </div>
                                    <span className="text-sm">{child.name}</span>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={normalizeHref(item.href)}
                          onClick={() => setIsOpen(false)}
                          className="block p-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <span className="font-medium">{item.name}</span>
                            {item.badge && (
                              <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{contactInfo.email}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      window.location.href = '/contact';
                    }}
                    className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraFuturisticNavigation2040;