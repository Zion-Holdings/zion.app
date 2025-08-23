import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, Zap, Globe, Lock, 
  Phone, Mail, MapPin, ArrowRight, Star, Users, Award,
  Brain, Atom, Rocket, Shield
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
  icon?: React.ReactNode;
  description?: string;
  badge?: string;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Zap className="w-4 h-4" />
  },
  {
    label: 'Services',
    children: [
      {
        label: 'AI & Machine Learning',
        href: '/ai-services',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        badge: 'Hot'
      },
      {
        label: 'Innovative 2040 Services',
        href: '/innovative-2040-futuristic-services-showcase',
        icon: <Star className="w-4 h-4" />,
        description: 'Cutting-edge futuristic technology solutions',
        badge: 'New'
      },
      {
        label: 'Quantum Computing',
        href: '/quantum-computing',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        badge: 'Trending'
      },
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space solutions',
        badge: 'Future'
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise security solutions',
        badge: 'Secure'
      },
      {
        label: 'Cloud Solutions',
        href: '/cloud-platform',
        icon: <Globe className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure',
        badge: 'Scalable'
      },
      {
        label: 'View All Services',
        href: '/services',
        icon: <ArrowRight className="w-4 h-4" />,
        description: 'Complete service portfolio'
      }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: <Users className="w-4 h-4" />
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />
  }
];

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search with debouncing
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    // Add search logic here
  }, []);

  // Keyboard navigation support
  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  // Focus management for accessibility
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" aria-label="Zion Tech Group Home">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown(item.label))}
                    className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-md"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} aria-hidden="true" />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-md"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <div className="p-4">
                          <div className="grid gap-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href || '#'}
                                className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                                role="menuitem"
                              >
                                <div className="flex-shrink-0 mt-1">
                                  {child.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                      {child.label}
                                    </p>
                                    {child.badge && (
                                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                        {child.badge}
                                      </span>
                                    )}
                                  </div>
                                  {child.description && (
                                    <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">
                                      {child.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={toggleSearch}
                onKeyDown={(e) => handleKeyDown(e, toggleSearch)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-md"
                aria-label="Search"
                aria-expanded={isSearchOpen}
              >
                <Search className="w-5 h-5" aria-hidden="true" />
              </button>

              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl shadow-black/50 p-4"
                  >
                    <div className="relative">
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search services, solutions..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        aria-label="Search input"
                      />
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                    </div>
                    
                    {/* Search suggestions */}
                    {searchQuery && (
                      <div className="mt-4 space-y-2">
                        <div className="text-sm text-gray-400 px-2">Quick suggestions:</div>
                        <div className="space-y-1">
                          {['AI Services', 'Quantum Computing', 'Cybersecurity', 'Cloud Solutions'].map((suggestion) => (
                            <button
                              key={suggestion}
                              className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                              onClick={() => {
                                setSearchQuery(suggestion);
                                setIsSearchOpen(false);
                              }}
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/contact" aria-label="Get started with Zion Tech Group">
              <button className="hidden lg:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                Get Started
              </button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              onKeyDown={(e) => handleKeyDown(e, toggleMobileMenu)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-md"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Contact Info */}
              <div className="space-y-3 text-sm text-gray-400 border-b border-gray-800 pb-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown(item.label))}
                        className="w-full flex items-center justify-between px-3 py-3 text-left text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
                        aria-expanded={activeDropdown === item.label}
                        aria-haspopup="true"
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} aria-hidden="true" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-6 mt-2 space-y-2"
                          >
                            {item.children?.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href || '#'}
                                className="block px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
                              >
                                <div className="flex items-center justify-between">
                                  <span>{child.label}</span>
                                  {child.badge && (
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                {child.description && (
                                  <p className="text-xs text-gray-500 mt-1">{child.description}</p>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="flex items-center space-x-2 px-3 py-3 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-800">
                <Link href="/contact" aria-label="Contact Zion Tech Group">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-gray-900">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2040;