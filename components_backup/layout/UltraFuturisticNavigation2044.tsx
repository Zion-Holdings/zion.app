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

const navigationItems: NavigationItem[] = [
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
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Neural Networks', 
        href: '/quantum-neural-network-platform-2044', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />
      },
      { 
        name: 'Autonomous Business Intelligence', 
        href: '/ai-autonomous-business-intelligence-2044', 
        description: 'AI-powered business intelligence',
        icon: <BarChart3 className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and technology',
    badge: '2044',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      { 
        name: 'Quantum Cloud Infrastructure', 
        href: '/quantum-cloud-infrastructure-2044', 
        description: 'Quantum-powered cloud solutions',
        icon: <Cloud className="w-4 h-4" />
      },
      { 
        name: 'Quantum Cybersecurity', 
        href: '/quantum-cybersecurity-platform-2044', 
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />
      },
      { 
        name: 'Quantum Neural Networks', 
        href: '/quantum-neural-network-platform-2044', 
        description: 'Quantum-powered AI neural networks',
        icon: <Brain className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-tech',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration and technology',
    badge: '2044',
    category: 'space',
    color: 'from-indigo-500 to-purple-500',
    children: [
      { 
        name: 'Space Resource Intelligence', 
        href: '/space-resource-intelligence-2044', 
        description: 'AI-powered space exploration',
        icon: <Globe className="w-4 h-4" />
      },
      { 
        name: 'Quantum Space Computing', 
        href: '/quantum-space-computing-2044', 
        description: 'Quantum computing in space',
        icon: <Cpu className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Enterprise Solutions',
    href: '/enterprise-solutions',
    icon: <Building className="w-5 h-5" />,
    description: 'Enterprise-grade solutions',
    category: 'enterprise',
    color: 'from-emerald-500 to-teal-500',
    children: [
      { 
        name: 'IT Services', 
        href: '/it-services', 
        description: 'Comprehensive IT solutions',
        icon: <Monitor className="w-4 h-4" />
      },
      { 
        name: 'Cybersecurity', 
        href: '/security', 
        description: 'Advanced security solutions',
        icon: <Shield className="w-4 h-4" />
      },
      { 
        name: 'Cloud Solutions', 
        href: '/cloud-platform', 
        description: 'Cloud infrastructure and services',
        icon: <Cloud className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <Database className="w-5 h-5" />,
    description: 'Knowledge and resources',
    category: 'resources',
    color: 'from-yellow-500 to-orange-500',
    children: [
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Latest insights and updates',
        icon: <Eye className="w-4 h-4" />
      },
      { 
        name: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories and implementations',
        icon: <TrendingUp className="w-4 h-4" />
      },
      { 
        name: 'Documentation', 
        href: '/docs', 
        description: 'Technical documentation and guides',
        icon: <Settings className="w-4 h-4" />
      }
    ]
  }
];

const UltraFuturisticNavigation2044: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [notifications, setNotifications] = useState(3);

  // Memoize navigation items for better performance
  const memoizedNavigationItems = useMemo(() => navigationItems, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dropdown interactions
  const handleDropdownToggle = useCallback((itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  }, [activeDropdown]);

  // Handle search
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Add analytics tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'search', { search_term: searchQuery });
      }
      // Navigate to search results or services page
      window.location.href = `/services?search=${encodeURIComponent(searchQuery)}`;
    }
  }, [searchQuery]);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              onClick={closeMobileMenu}
              aria-label="Zion Tech Group - Home"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary 2044</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {memoizedNavigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    onKeyDown={(e) => handleKeyDown(e, () => handleDropdownToggle(item.name))}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
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
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl p-4 z-50"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby={`${item.name}-button`}
                      >
                        <div className="space-y-3">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              className={`block p-3 rounded-xl transition-all duration-200 group/item ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20' 
                                  : 'hover:bg-gray-800/50'
                              }`}
                              onClick={closeMobileMenu}
                              role="menuitem"
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                  child.color 
                                    ? `bg-gradient-to-br ${child.color}` 
                                    : 'bg-gray-700'
                                }`}>
                                  {child.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium text-white group-hover/item:text-cyan-400 transition-colors duration-200">
                                      {child.name}
                                    </span>
                                    {child.featured && (
                                      <span className="px-2 py-1 text-xs font-medium bg-cyan-500 text-white rounded-full">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-400 mt-1">
                                    {child.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        {item.href !== '#' && (
                          <div className="mt-4 pt-4 border-t border-gray-700/50">
                            <Link
                              href={normalizeHref(item.href)}
                              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 rounded-lg hover:bg-cyan-500/10"
                              onClick={closeMobileMenu}
                            >
                              View All {item.name}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button
              className="relative p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+1-800-ZION-TECH"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Call us at 1-800-ZION-TECH"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">1-800-ZION-TECH</span>
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Email us at info@ziontechgroup.com"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@ziontechgroup.com</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              onClick={closeMobileMenu}
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
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
              transition={{ duration: 0.3 }}
              className="pb-4"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search for revolutionary services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm"
                  aria-label="Search services"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  aria-label="Submit search"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
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
            <div className="px-4 py-6 space-y-4">
              {memoizedNavigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    onKeyDown={(e) => handleKeyDown(e, () => handleDropdownToggle(item.name))}
                    className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
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
                        className="ml-8 mt-2 space-y-2"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            className="block px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                            onClick={closeMobileMenu}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                                child.color 
                                  ? `bg-gradient-to-br ${child.color}` 
                                  : 'bg-gray-700'
                              }`}>
                                {child.icon}
                              </div>
                              <span className="text-sm">{child.name}</span>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700/50 space-y-3">
                <a
                  href="tel:+1-800-ZION-TECH"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                >
                  <Phone className="w-5 h-5" />
                  <span>1-800-ZION-TECH</span>
                </a>
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@ziontechgroup.com</span>
                </a>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  onClick={closeMobileMenu}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
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