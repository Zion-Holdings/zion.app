import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, ChevronRight, 
  Home, Briefcase, Users, BookOpen, Phone, 
  Zap, Shield, Brain, Rocket, Sparkles, Globe
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Type definitions for DOM elements
type Node = any;

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
}

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
        description: 'Advanced AI solutions for enterprise'
      },
      {
        label: 'Quantum Computing',
        href: '/quantum-computing',
        icon: <Zap className="w-4 h-4" />,
        description: 'Next-generation quantum solutions'
      },
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications'
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise-grade security solutions'
      }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: <Users className="w-4 h-4" />,
    description: 'Learn about our mission and team'
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
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
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  // Enhanced click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Enhanced search functionality
  const handleSearch = useCallback((query: string) => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }, [router]);

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  }, [handleSearch, searchQuery]);

  // Enhanced dropdown management
  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Enhanced mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  }, [isMobileMenuOpen]);

  // Enhanced navigation item click
  const handleNavigationClick = useCallback((href: string) => {
    router.push(href);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [router]);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Enhanced Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-3 group" aria-label="Zion Tech Group Home">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">Future Technology Solutions</p>
              </div>
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                    onClick={() => toggleDropdown(item.label)}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                    onClick={() => handleNavigationClick(item.href)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )}

                {/* Enhanced Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl z-50"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 group"
                            onClick={() => handleNavigationClick(child.href)}
                          >
                            <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-200">
                              {child.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                {child.label}
                              </p>
                              {child.description && (
                                <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                                  {child.description}
                                </p>
                              )}
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Search and CTA */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Search Button */}
            <motion.button
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Search Zion Tech Group"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Enhanced CTA Button */}
            <motion.button
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              onClick={() => handleNavigationClick('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact Zion Tech Group"
            >
              <Globe className="w-4 h-4" />
              <span>Get Started</span>
            </motion.button>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-2xl z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="max-w-4xl mx-auto px-4 py-6" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for services, solutions, or insights..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Search"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 shadow-2xl"
              ref={mobileMenuRef}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                  <h2 className="text-xl font-bold text-white">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                    aria-label="Close mobile menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 overflow-y-auto py-6">
                  <nav className="space-y-2 px-6">
                    {navigationItems.map((item, index) => (
                      <div key={item.label}>
                        {item.children ? (
                          <div>
                            <button
                              className="w-full flex items-center justify-between p-4 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                              onClick={() => toggleDropdown(item.label)}
                              aria-expanded={activeDropdown === item.label}
                            >
                              <div className="flex items-center space-x-3">
                                {item.icon}
                                <span className="font-medium">{item.label}</span>
                              </div>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.label ? 'rotate-180' : ''
                              }`} />
                            </button>
                            
                            <AnimatePresence>
                              {activeDropdown === item.label && (
                                <motion.div
                                  className="ml-6 mt-2 space-y-1"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className="block p-3 text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                                      onClick={() => handleNavigationClick(child.href)}
                                    >
                                      <div className="flex items-center space-x-3">
                                        {child.icon}
                                        <span>{child.label}</span>
                                      </div>
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block p-4 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                            onClick={() => handleNavigationClick(item.href)}
                          >
                            <div className="flex items-center space-x-3">
                              {item.icon}
                              <span className="font-medium">{item.label}</span>
                            </div>
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-gray-700/50">
                  <button
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                    onClick={() => handleNavigationClick('/contact')}
                    aria-label="Contact Zion Tech Group"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Get Started</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default UltraAdvancedFuturisticNavigation2025;