import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, ChevronRight, 
  Home, Briefcase, Phone, 
  Zap, Shield, Brain, Rocket, Globe, Building, Atom, Star, ArrowRight, Mail, Calendar
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Enhanced type definitions
interface NavigationItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  badgeColor?: string;
}

// Enhanced navigation items with better organization
const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />
  },
  {
    label: 'Services',
    href: '/services',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'Explore our comprehensive technology solutions',
    children: [
      {
        label: 'AI & Machine Learning',
        href: '/ai-services',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        badge: '42 Services',
        badgeColor: 'cyan'
      },
      {
        label: 'Quantum Computing',
        href: '/quantum-computing',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        badge: '19 Services',
        badgeColor: 'purple'
      },
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications',
        badge: '15 Services',
        badgeColor: 'pink'
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise-grade security solutions',
        badge: '22 Services',
        badgeColor: 'red'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Globe className="w-4 h-4" />,
    description: 'Industry-specific technology solutions',
    children: [
      {
        label: 'Healthcare',
        href: '/solutions/healthcare',
        icon: <Shield className="w-4 h-4" />,
        description: 'AI-powered healthcare solutions',
        badge: 'Hot',
        badgeColor: 'green'
      },
      {
        label: 'Finance',
        href: '/solutions/finance',
        icon: <Zap className="w-4 h-4" />,
        description: 'Quantum financial technology',
        badge: 'New',
        badgeColor: 'blue'
      },
      {
        label: 'Manufacturing',
        href: '/solutions/manufacturing',
        icon: <Building className="w-4 h-4" />,
        description: 'Industry 4.0 solutions',
        badge: 'Trending',
        badgeColor: 'orange'
      }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: <Building className="w-4 h-4" />,
    description: 'Learn about our mission and team'
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <Globe className="w-4 h-4" />,
    description: 'Whitepapers, case studies, and insights'
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />,
    description: 'Get in touch with our experts'
  }
];

const UltraAdvancedFuturisticNavigation2025: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [mobileMenuFocusedIndex, setMobileMenuFocusedIndex] = useState(-1);
  
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Enhanced scroll effect with throttling
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

  // Enhanced keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent, itemIndex: number, isMobile: boolean = false) => {
    const items = isMobile ? navigationItems : navigationItems;
    
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const nextIndex = (itemIndex + 1) % items.length;
        if (isMobile) {
          setMobileMenuFocusedIndex(nextIndex);
        } else {
          setFocusedIndex(nextIndex);
        }
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const prevIndex = itemIndex === 0 ? items.length - 1 : itemIndex - 1;
        if (isMobile) {
          setMobileMenuFocusedIndex(prevIndex);
        } else {
          setFocusedIndex(prevIndex);
        }
        break;
      }
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (items[itemIndex]?.href) {
          router.push(items[itemIndex].href);
          if (isMobile) {
            setIsMobileMenuOpen(false);
          }
        }
        break;
      case 'Escape':
        if (isMobile) {
          setIsMobileMenuOpen(false);
          mobileMenuButtonRef.current?.focus();
        }
        break;
    }
  }, [router]);

  // Enhanced search functionality
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      // Implement search logic here
      // TODO: Add actual search implementation
    }
  }, []);

  // Enhanced mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setMobileMenuFocusedIndex(0);
    } else {
      setMobileMenuFocusedIndex(-1);
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileMenuFocusedIndex(-1);
  }, [router.asPath]);

  // Enhanced dropdown management
  const handleDropdownToggle = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);



  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as HTMLElement)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Enhanced Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-200" aria-label="Call us at +1 302 464 0950">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Globe className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-200" aria-label="Email us at kleber@ziontechgroup.com">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Globe className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                <span className="hover:text-cyan-400 transition-colors duration-200">
                  364 E Main St STE 1008 Middletown DE 19709
                </span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Star className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                <span>4.9/5 (200+ Reviews)</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2">
                <Link href="/contact" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Get Quote</span>
                </Link>
                <Link href="/demo" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>Book Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <nav 
        aria-label="Primary navigation" 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-cyan-500/30' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
              aria-label="Zion Tech Group Homepage"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology</div>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item, index) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <button
                      className={`flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black rounded-lg ${
                        focusedIndex === index ? 'text-cyan-400 bg-cyan-500/10' : ''
                      }`}
                      onClick={() => handleDropdownToggle(item.label)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onFocus={() => setFocusedIndex(index)}
                      onBlur={() => setFocusedIndex(-1)}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                      aria-label={`${item.label} menu`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black rounded-lg ${
                        router.asPath === item.href ? 'text-cyan-400 bg-cyan-500/10' : ''
                      }`}
                      onFocus={() => setFocusedIndex(index)}
                      onBlur={() => setFocusedIndex(-1)}
                      aria-label={item.description || item.label}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  )}

                  {/* Enhanced Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 z-50"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby={`${item.label}-button`}
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                            {item.description}
                          </h3>
                        </div>
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
                              role="menuitem"
                              onFocus={() => setFocusedIndex(index)}
                            >
                              <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{child.label}</span>
                                  {child.badge && (
                                    <span className={`px-2 py-1 text-xs rounded-full bg-${child.badgeColor}-500/20 text-${child.badgeColor}-400 border border-${child.badgeColor}-500/30`}>
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-500 truncate">{child.description}</p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Enhanced Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Link 
                  href="/contact"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Get started with Zion Tech Group"
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  <span>Get Started</span>
                </Link>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200"
                  aria-label="Call us at +1 302 464 0950"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden xl:inline">+1 302 464 0950</span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
                  aria-label="Email us at kleber@ziontechgroup.com"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden xl:inline">kleber@ziontechgroup.com</span>
                </a>
              </div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              ref={mobileMenuButtonRef}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={toggleMobileMenu}
              aria-hidden="true"
            />
            
            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 shadow-2xl">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                  <h2 id="mobile-menu-title" className="text-lg font-semibold text-white">
                    Menu
                  </h2>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    aria-label="Close mobile menu"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 overflow-y-auto p-6 space-y-2">
                  {navigationItems.map((item, index) => (
                    <div key={item.label}>
                      {item.children ? (
                        <div>
                          <button
                            className={`w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                              mobileMenuFocusedIndex === index ? 'text-cyan-400 bg-cyan-500/10' : ''
                            }`}
                            onClick={() => handleDropdownToggle(item.label)}
                            onKeyDown={(e) => handleKeyDown(e, index, true)}
                            onFocus={() => setMobileMenuFocusedIndex(index)}
                            aria-expanded={activeDropdown === item.label}
                            aria-haspopup="true"
                          >
                            <div className="flex items-center gap-3">
                              {item.icon}
                              <span className="font-medium">{item.label}</span>
                            </div>
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.label ? 'rotate-180' : ''
                              }`} 
                              aria-hidden="true" 
                            />
                          </button>
                          
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-6 mt-2 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center gap-3 p-3 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                                  onClick={toggleMobileMenu}
                                >
                                  <div className="w-6 h-6 rounded bg-gray-800/50 flex items-center justify-center">
                                    {child.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm font-medium">{child.label}</span>
                                      {child.badge && (
                                        <span className={`px-2 py-1 text-xs rounded-full bg-${child.badgeColor}-500/20 text-${child.badgeColor}-400 border border-${child.badgeColor}-500/30`}>
                                          {child.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-gray-500">{child.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                            router.asPath === item.href ? 'text-cyan-400 bg-cyan-500/10' : ''
                          }`}
                          onClick={toggleMobileMenu}
                          onFocus={() => setMobileMenuFocusedIndex(index)}
                        >
                          {item.icon}
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-gray-700/50 space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">Ready to get started?</p>
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      Contact Us
                    </Link>
                  </div>
                  
                  <div className="text-center text-sm text-gray-500">
                    <p>+1 302 464 0950</p>
                    <p>kleber@ziontechgroup.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
          >
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsSearchOpen(false)}
              aria-hidden="true"
            />
            
            <motion.div
              ref={searchRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search services, solutions, or resources..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50"
                  aria-label="Search Zion Tech Group services and resources"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-colors rounded"
                  aria-label="Close search"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
              
              {/* Search Results Placeholder */}
              {searchQuery.length > 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl p-4"
                >
                  <p className="text-gray-400 text-sm">Search results for "{searchQuery}" will appear here...</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraAdvancedFuturisticNavigation2025;