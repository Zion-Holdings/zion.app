import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, ChevronRight, 
  Home, Briefcase, Users, BookOpen, Phone, 
  Zap, Shield, Brain, Rocket, Globe, Lock, Cpu, Database, Cloud
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
        label: 'Innovative 2040 Services',
        href: '/innovative-2040-futuristic-services-showcase',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Cutting-edge futuristic technology solutions'
      },
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
      },
      {
        label: 'Cloud & Infrastructure',
        href: '/cloud-platform',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Cpu className="w-4 h-4" />,
    description: 'Industry-specific technology solutions',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/enterprise-solutions',
        icon: <Database className="w-4 h-4" />,
        description: 'Large-scale enterprise technology'
      },
      {
        label: 'Startup Solutions',
        href: '/startup-solutions',
        icon: <Zap className="w-4 h-4" />,
        description: 'Rapid growth technology solutions'
      },
      {
        label: 'Government Solutions',
        href: '/government-solutions',
        icon: <Shield className="w-4 h-4" />,
        description: 'Secure government technology'
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

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as HTMLElement)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as HTMLElement)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <div className="text-xs text-gray-400">2040</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isActive(item.href)
                          ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
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
                                  key={child.label}
                                  href={child.href}
                                  className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                    {child.icon}
                                  </div>
                                  <div>
                                    <div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                      {child.label}
                                    </div>
                                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                                      {child.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Contact Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-2xl"
            ref={searchRef}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for services, solutions, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Search
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 overflow-hidden"
            ref={mobileMenuRef}
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-90' : ''
                        }`} />
                      </button>
                      
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
                                className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.icon}
                                <span>{child.label}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Button */}
              <div className="pt-4 border-t border-gray-800">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
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