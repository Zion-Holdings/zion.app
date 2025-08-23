import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Search, User, Bell
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

// Memoized navigation items for better performance
const useNavigationItems = () => useMemo(() => [
  {
    name: 'Revolutionary Services 2044',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: 'New 2044',
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
        name: 'AI Consciousness Evolution 2044', 
        href: '/ai-consciousness-evolution-2044', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum Neural Network 2044', 
        href: '/quantum-neural-network-platform-2044', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'AI Autonomous Business Intelligence 2044', 
        href: '/ai-autonomous-business-intelligence-2044', 
        description: 'AI-powered business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cybersecurity 2044', 
        href: '/quantum-cybersecurity-platform-2044', 
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Autonomous Customer Success 2044', 
        href: '/autonomous-customer-success-2044', 
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
    description: 'Advanced AI consciousness solutions',
    badge: '2044',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'AI Consciousness Evolution', 
        href: '/ai-consciousness-evolution-2044', 
        description: 'Next-generation AI consciousness platform',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum AI Cognitive Platform', 
        href: '/quantum-ai-cognitive-2044', 
        description: 'Quantum-powered AI cognition',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous Business Intelligence', 
        href: '/ai-autonomous-business-intelligence-2044', 
        description: 'Fully autonomous AI business intelligence',
        icon: <BarChart3 className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and technology solutions',
    badge: '2044',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      { 
        name: 'Quantum Neural Networks', 
        href: '/quantum-neural-network-platform-2044', 
        description: 'Quantum-powered neural networks',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Cybersecurity', 
        href: '/quantum-cybersecurity-platform-2044', 
        description: 'Quantum-resistant security solutions',
        icon: <Shield className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Cloud Infrastructure', 
        href: '/quantum-cloud-infrastructure-2044', 
        description: 'Quantum-powered cloud solutions',
        icon: <Cloud className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-tech',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration and technology solutions',
    badge: '2044',
    category: 'space',
    color: 'from-indigo-500 to-purple-500',
    children: [
      { 
        name: 'Space Resource Intelligence', 
        href: '/space-resource-intelligence-2044', 
        description: 'AI-powered space exploration',
        icon: <Rocket className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Space Mining Platform', 
        href: '/space-resource-mining-platform', 
        description: 'Automated space resource extraction',
        icon: <Target className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific technology solutions',
    category: 'solutions',
    color: 'from-emerald-500 to-teal-500',
    children: [
      { 
        name: 'Enterprise Solutions', 
        href: '/enterprise-solutions', 
        description: 'Large-scale enterprise technology solutions',
        icon: <Building className="w-4 h-4" />
      },
      { 
        name: 'Healthcare AI', 
        href: '/healthcare-ai-solutions', 
        description: 'AI-powered healthcare solutions',
        icon: <Heart className="w-4 h-4" />
      },
      { 
        name: 'Financial Technology', 
        href: '/financial-solutions', 
        description: 'Fintech and financial technology solutions',
        icon: <DollarSign className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Transparent pricing for all services',
    category: 'pricing',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'About',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'Learn about Zion Tech Group',
    category: 'about',
    color: 'from-gray-500 to-slate-500'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Mail className="w-5 h-5" />,
    description: 'Get in touch with our team',
    category: 'contact',
    color: 'from-blue-500 to-indigo-500'
  }
], []);

const UltraFuturisticNavigation2044: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const navigationItems = useNavigationItems();

  // Handle scroll effect for navigation styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  // Handle dropdown interactions
  const handleDropdownToggle = useCallback((itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  }, [activeDropdown]);

  // Handle search functionality
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  }, [searchQuery]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.navigation-dropdown')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative navigation-dropdown">
                {item.children ? (
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
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
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 group"
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              child.color ? `bg-gradient-to-r ${child.color}` : 'bg-gray-700'
                            }`}>
                              {child.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                  {child.name}
                                </p>
                                {child.featured && (
                                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                                    Featured
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-400 mt-1">
                                {child.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User menu */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="pb-4"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search our revolutionary 2044 services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white transition-colors duration-200"
                        aria-expanded={activeDropdown === item.name}
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.name}</span>
                          {item.badge && (
                            <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
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
                          className="ml-8 mt-2 space-y-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              className="block px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={normalizeHref(item.href)}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-800/50">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
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
};

export default UltraFuturisticNavigation2044;