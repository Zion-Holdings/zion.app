import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, Zap, Globe, Lock, 
  Phone, ArrowRight, Star, Users, Bell, User
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
        icon: <Star className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        badge: 'Hot'
      },
      {
        label: 'Quantum Computing',
        href: '/quantum-services',
        icon: <Zap className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        badge: 'New'
      },
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Star className="w-4 h-4" />,
        description: 'Innovative space solutions',
        badge: 'Trending'
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Lock className="w-4 h-4" />,
        description: 'Enterprise security solutions',
        badge: 'Popular'
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
    label: 'Resources',
    children: [
      {
        label: 'API Documentation',
        href: '/api',
        icon: <Globe className="w-4 h-4" />,
        description: 'Developer APIs and documentation'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Star className="w-4 h-4" />,
        description: 'Technology webinars and events'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <Star className="w-4 h-4" />,
        description: 'Customer success stories'
      },
      {
        label: 'Blog',
        href: '/blog',
        icon: <Star className="w-4 h-4" />,
        description: 'Technology insights and trends'
      },
      {
        label: 'Documentation',
        href: '/docs',
        icon: <Star className="w-4 h-4" />,
        description: 'Technical documentation'
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
        description: 'Our story and mission'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Users className="w-4 h-4" />,
        description: 'Join our team'
      },
      {
        label: 'News',
        href: '/news',
        icon: <Star className="w-4 h-4" />,
        description: 'Latest company news'
      },
      {
        label: 'Partners',
        href: '/partners',
        icon: <Star className="w-4 h-4" />,
        description: 'Technology partners'
      }
    ]
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
  const [searchResults, setSearchResults] = useState<NavigationItem[]>([]);
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search functionality
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as HTMLElement)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + K for search
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      
      // Escape to close search
      if (event.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    const results: NavigationItem[] = [];
    const searchInItems = (items: NavigationItem[]) => {
      items.forEach(item => {
        if (item.label.toLowerCase().includes(query.toLowerCase()) ||
            item.description?.toLowerCase().includes(query.toLowerCase())) {
          results.push(item);
        }
        if (item.children) {
          searchInItems(item.children);
        }
      });
    };

    searchInItems(navigationItems);
    setSearchResults(results.slice(0, 8)); // Limit results
  };

  const handleSearchResultClick = (item: NavigationItem) => {
    if (item.href) {
      router.push(item.href);
      setIsSearchOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2" aria-label="Zion Tech Group Home">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/10"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === item.label ? null : item.label);
                      }
                    }}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
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
                        className="absolute left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-50"
                        role="menu"
                      >
                        <div className="p-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href || '#'}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                              role="menuitem"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {child.label}
                                  </p>
                                  {child.badge && (
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                {child.description && (
                                  <p className="text-sm text-gray-400 mt-1">{child.description}</p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300">
              <User className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Link href="/get-started">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
            ref={mobileMenuRef}
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.label && item.children && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href || '#'}
                              className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/20">
                <Link href="/get-started" className="block">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          >
            <div className="flex items-start justify-center pt-20 px-4">
              <motion.div
                initial={{ scale: 0.95, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: -20 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-2xl"
                ref={searchRef}
              >
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search for services, solutions, or resources..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
                    autoFocus
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <kbd className="px-2 py-1 text-xs bg-white/20 text-gray-300 rounded">⌘K</kbd>
                  </div>
                </div>

                {/* Search Results */}
                {searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 bg-black/90 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden"
                  >
                    {searchResults.map((result, index) => (
                      <button
                        key={`${result.label}-${index}`}
                        onClick={() => handleSearchResultClick(result)}
                        className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors focus:outline-none focus:bg-white/10"
                      >
                        <div className="flex items-center space-x-3">
                          {result.icon && (
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                              {result.icon}
                            </div>
                          )}
                          <div>
                            <p className="text-white font-medium">{result.label}</p>
                            {result.description && (
                              <p className="text-sm text-gray-400">{result.description}</p>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* No Results */}
                {searchQuery.length >= 2 && searchResults.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-center text-gray-400"
                  >
                    No results found for "{searchQuery}"
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2040;