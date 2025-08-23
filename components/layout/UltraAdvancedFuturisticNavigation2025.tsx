import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, ChevronRight, 
  Home, Briefcase, Users, BookOpen, Phone, 
  Globe, Zap, Shield, Brain, Rocket, Building,
  Target, Heart, Cpu, Cloud
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Define Node type for DOM event handling
type Node = HTMLElement | null;

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
        href: '/services?category=ai-ml',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise'
      },
      {
        label: 'Quantum Computing',
        href: '/services?category=quantum',
        icon: <Zap className="w-4 h-4" />,
        description: 'Next-generation quantum solutions'
      },
      {
        label: 'Space Technology',
        href: '/services?category=space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise-grade security solutions'
      },
      {
        label: 'Enterprise IT',
        href: '/services?category=enterprise-it',
        icon: <Building className="w-4 h-4" />,
        description: 'Enterprise infrastructure solutions'
      },
      {
        label: 'Micro SAAS',
        href: '/services?category=micro-saas',
        icon: <Target className="w-4 h-4" />,
        description: 'Innovative business solutions'
      },
      {
        label: 'DevOps & Automation',
        href: '/services?category=devops',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Development and operations automation'
      },
      {
        label: 'Cloud & Infrastructure',
        href: '/services?category=cloud',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Cloud computing and infrastructure'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific technology solutions',
    children: [
      {
        label: 'Healthcare & Biotech',
        href: '/solutions/healthcare',
        icon: <Heart className="w-4 h-4" />,
        description: 'Advanced healthcare solutions'
      },
      {
        label: 'Financial Services',
        href: '/solutions/financial',
        icon: <Zap className="w-4 h-4" />,
        description: 'Financial technology solutions'
      },
      {
        label: 'Government & Defense',
        href: '/solutions/government',
        icon: <Shield className="w-4 h-4" />,
        description: 'Secure government solutions'
      },
      {
        label: 'Retail & E-commerce',
        href: '/solutions/retail',
        icon: <Globe className="w-4 h-4" />,
        description: 'Digital commerce solutions'
      }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: <Users className="w-4 h-4" />,
    description: 'Learn about our company and mission'
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
    description: 'Get in touch with our team'
  }
];

const UltraAdvancedFuturisticNavigation2025: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsSearchOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  // Handle navigation item click
  const handleNavItemClick = (item: NavigationItem) => {
    if (item.children) {
      setActiveDropdown(activeDropdown === item.label ? null : item.label);
    } else {
      setIsOpen(false);
      setActiveDropdown(null);
      router.push(item.href);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, item: NavigationItem) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNavItemClick(item);
    } else if (event.key === 'Escape') {
      setActiveDropdown(null);
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50' 
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
              className="flex items-center space-x-2 group"
              aria-label="Zion Tech Group - Home"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300">
                <Zap className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300">
                Zion Tech
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => handleNavItemClick(item)}
                  onKeyDown={(e) => handleKeyDown(e, item)}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    router.pathname === item.href ? 'text-cyan-400 bg-gray-800/50' : ''
                  }`}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup={item.children ? 'true' : 'false'}
                  aria-label={item.description ? `${item.label} - ${item.description}` : item.label}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} aria-hidden="true" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md rounded-xl border border-gray-700/50 shadow-2xl shadow-black/50 overflow-hidden"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby={`menu-${item.label}`}
                      >
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            {item.icon}
                            {item.label}
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-start gap-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 group/item"
                                onClick={() => setActiveDropdown(null)}
                                onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setActiveDropdown(null);
                      }
                    }}
                                role="menuitem"
                              >
                                <div className="flex-shrink-0 w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover/item:bg-cyan-500/20 transition-colors">
                                  {child.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-white group-hover/item:text-cyan-400 transition-colors">
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <div className="text-sm text-gray-400 mt-1">
                                      {child.description}
                                    </div>
                                  )}
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-500 group-hover/item:text-cyan-400 transition-colors flex-shrink-0" aria-hidden="true" />
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

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Open search"
                aria-expanded={isSearchOpen}
              >
                <Search className="w-5 h-5" aria-hidden="true" />
              </button>

              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md rounded-xl border border-gray-700/50 shadow-2xl shadow-black/50 overflow-hidden"
                  >
                    <form onSubmit={handleSearch} className="p-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search services, solutions..."
                          className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                          aria-label="Search query"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        Search
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              href="/get-started"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50"
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, solutions..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  aria-label="Search query"
                />
              </form>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => handleNavItemClick(item)}
                    onKeyDown={(e) => handleKeyDown(e, item)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                      router.pathname === item.href ? 'text-cyan-400 bg-gray-800/50' : ''
                    }`}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup={item.children ? 'true' : 'false'}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} aria-hidden="true" />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-8 mt-2 space-y-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                              onClick={() => {
                                setIsOpen(false);
                                setActiveDropdown(null);
                              }}
                              onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setIsOpen(false);
                      }
                    }}
                            >
                              {child.icon}
                              <span>{child.label}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700/50">
                <Link
                  href="/get-started"
                  className="w-full block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  onClick={() => setIsOpen(false)}
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

export default UltraAdvancedFuturisticNavigation2025;