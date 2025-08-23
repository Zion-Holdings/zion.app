import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, Zap, Globe, Lock, 
  Phone, Mail, MapPin, ArrowRight, Star, Users, Award,
  Command, Filter, TrendingUp
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
  icon?: React.ReactNode;
  description?: string;
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
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcuts for search
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

    // Simulate search results - in production, this would call an API
    const mockResults = [
      { title: 'AI Consciousness Evolution', url: '/ai-consciousness-evolution', category: 'AI Services' },
      { title: 'Quantum Cybersecurity', url: '/quantum-cybersecurity', category: 'Quantum Services' },
      { title: 'Space Resource Intelligence', url: '/space-resource-intelligence', category: 'Space Tech' },
      { title: 'Autonomous Business Intelligence', url: '/autonomous-business-intelligence', category: 'AI Services' },
    ].filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.category.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(mockResults);
  };

  const handleSearchResultClick = (url: string) => {
    router.push(url);
    setShowSearch(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <>
      {/* Search Modal */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              ref={searchRef}
              className="w-full max-w-2xl mx-4"
            >
              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search services, solutions, or resources..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-900/90 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-xs text-gray-400">
                    <kbd className="px-2 py-1 bg-gray-800 rounded">⌘K</kbd>
                  </div>
                </div>
                
                {/* Search Results */}
                {searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 bg-gray-900/90 border border-gray-700 rounded-xl overflow-hidden"
                  >
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchResultClick(result.url)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-800/50 transition-colors border-b border-gray-700 last:border-b-0"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium">{result.title}</div>
                            <div className="text-sm text-gray-400">{result.category}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" onClick={closeAllDropdowns}>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="px-3 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                      onClick={closeAllDropdowns}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl"
                    >
                      <div className="p-4 space-y-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href || '#'}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                            onClick={closeAllDropdowns}
                          >
                            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                              {child.icon}
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                {child.label}
                              </div>
                              <div className="text-sm text-gray-400 mt-1">
                                {child.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                onClick={closeAllDropdowns}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                {/* Mobile Menu Items */}
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="w-full flex items-center justify-between px-3 py-3 text-left text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === item.label && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href || '#'}
                                className="block px-3 py-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                                onClick={closeAllDropdowns}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        className="block px-3 py-3 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                        onClick={closeAllDropdowns}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Contact Button */}
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={closeAllDropdowns}
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