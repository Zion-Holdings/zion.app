import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, ChevronRight, 
  Home, Briefcase, Users, BookOpen, Phone, 
  Zap, Shield, Brain, Rocket, Crown
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
      },
      {
        label: '2040 Services',
        href: '/innovative-2040-services-showcase',
        icon: <Crown className="w-4 h-4" />,
        description: 'Revolutionary 2040 technology services'
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {isScrolled && (
          <>
            {/* Quantum Particle Field */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 8 + i * 0.5,
                  repeat: -1,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Future Technology Solutions</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.label} className="relative group">
                <motion.button
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-800/50"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => item.children ? setActiveDropdown(activeDropdown === item.label ? null : item.label) : router.push(item.href)}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </motion.button>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4">
                          <div className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                            {item.description}
                          </div>
                          <div className="space-y-2">
                            {item.children.map((child, childIndex) => (
                              <motion.div
                                key={child.label}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Link
                                  href={child.href}
                                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-700/50 transition-colors duration-200 group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-200">
                                    {child.icon}
                                  </div>
                                  <div>
                                    <div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                      {child.label}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                      {child.description}
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
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

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <motion.button
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>

            {/* CTA Button */}
            <motion.button
              className="hidden sm:block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            ref={searchRef}
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search our innovative services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  onKeyDown={handleKeyDown}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
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
            className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            ref={mobileMenuRef}
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-4">
                {navigationItems.map((item, index) => (
                  <div key={item.label}>
                    <motion.button
                      className="w-full flex items-center justify-between text-left text-gray-300 hover:text-white transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-800/50"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => item.children ? setActiveDropdown(activeDropdown === item.label ? null : item.label) : router.push(item.href)}
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.children && (
                        <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-90' : ''
                        }`} />
                      )}
                    </motion.button>

                    {/* Mobile Dropdown */}
                    {item.children && (
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            className="ml-8 mt-2 space-y-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.children.map((child, childIndex) => (
                              <motion.div
                                key={child.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: childIndex * 0.1 }}
                              >
                                <Link
                                  href={child.href}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <div className="w-6 h-6 bg-gray-700/50 rounded-lg flex items-center justify-center">
                                    {child.icon}
                                  </div>
                                  <div>
                                    <div className="font-medium text-white">{child.label}</div>
                                    <div className="text-sm text-gray-400">{child.description}</div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-gray-800/50">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default UltraAdvancedFuturisticNavigation2025;