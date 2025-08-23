import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, Search, ChevronDown, Zap, Globe, Lock, 
  Phone, Mail, MapPin, ArrowRight, Star, Users, Award,
  Command, Filter, TrendingUp
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  subItems?: NavigationItem[];
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
        icon: <Star className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise'
      },
      {
        label: 'Quantum Computing',
        href: '/quantum-services',
        icon: <Zap className="w-4 h-4" />,
        description: 'Next-generation quantum solutions'
      },
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Star className="w-4 h-4" />,
        description: 'Innovative space solutions'
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Lock className="w-4 h-4" />,
        description: 'Enterprise security solutions'
      },
      {
        label: 'Cloud Solutions',
        href: '/cloud-platform',
        icon: <Globe className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure'
      },
      {
        label: 'Micro SaaS',
        href: '/micro-saas',
        icon: <Star className="w-4 h-4" />,
        description: 'Rapid deployment SaaS solutions'
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
    label: 'Solutions',
    children: [
      {
        label: 'Enterprise IT',
        href: '/enterprise-solutions-showcase',
        icon: <Globe className="w-4 h-4" />,
        description: 'Complete enterprise IT solutions'
      },
      {
        label: 'Healthcare',
        href: '/healthcare-solutions',
        icon: <Star className="w-4 h-4" />,
        description: 'Healthcare technology solutions'
      },
      {
        label: 'Financial Services',
        href: '/financial-solutions',
        icon: <Star className="w-4 h-4" />,
        description: 'Fintech and banking solutions'
      },
      {
        label: 'Manufacturing',
        href: '/manufacturing-ai-solutions',
        icon: <Star className="w-4 h-4" />,
        description: 'Smart manufacturing solutions'
      }
    ]
  },
  {
    label: 'Company',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Learn about our mission and team'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Award className="w-4 h-4" />,
        description: 'Join our innovative team'
      },
      {
        label: 'News',
        href: '/news',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Latest company updates'
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: <Mail className="w-4 h-4" />,
        description: 'Get in touch with us'
      }
    ]
  }
];

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  // Memoized search handler
  const handleSearch = useCallback(async (query: string) => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    try {
      // Simulate search delay
      await new Promise(resolve => setTimeout(resolve, 500));
      router.push(`/search?q=${encodeURIComponent(query)}`);
    } catch {
      // Search error handled silently
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  // Handle search submission
  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  }, [searchQuery, handleSearch]);

  // Handle dropdown toggle
  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  }, []);

  // Scroll effect
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Focus search input when search opens
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setShowSearch(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      if (event.key === 'Escape') {
        setShowSearch(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Search functionality
  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  // Memoized navigation classes
  const navClasses = useMemo(() => {
    return `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`;
  }, [isScrolled]);

  return (
    <nav ref={navRef} className={navClasses} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              aria-label="Zion Tech Group - Home"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
                  onClick={() => item.children && toggleDropdown(item.label)}
                  onKeyDown={(e) => handleKeyDown(e, () => item.children && toggleDropdown(item.label))}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup={!!item.children}
                  aria-label={item.description || item.label}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        ref={(el) => {
                          dropdownRefs.current[item.label] = el;
                        }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        role="menu"
                        aria-label={`${item.label} submenu`}
                      >
                        <div className="p-4">
                          <div className="grid gap-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 ${
                                  child.featured ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20' : ''
                                }`}
                                role="menuitem"
                                aria-label={child.description || child.label}
                              >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                  child.featured 
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                                    : 'bg-gray-700/50'
                                }`}>
                                  {child.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                      {child.label}
                                    </span>
                                    {child.featured && (
                                      <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  {child.description && (
                                    <p className="text-sm text-gray-400 mt-1">
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
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <form onSubmit={handleSearchSubmit} className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, solutions, or resources..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                  aria-label="Search query"
                />
                <button
                  type="submit"
                  disabled={isLoading || !searchQuery.trim()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  aria-label="Submit search"
                >
                  {isLoading ? 'Searching...' : 'Search'}
                </button>
              </form>
            </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
                    onClick={() => item.children && toggleDropdown(item.label)}
                    onKeyDown={(e) => handleKeyDown(e, () => item.children && toggleDropdown(item.label))}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup={!!item.children}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      className="ml-8 mt-2 space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block p-3 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center space-x-3">
                            {child.icon}
                            <span>{child.label}</span>
                            {child.featured && (
                              <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          {child.description && (
                            <p className="text-sm text-gray-500 mt-1 ml-6">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Button */}
              <div className="pt-4 border-t border-gray-700/50">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default UltraFuturisticNavigation2040;