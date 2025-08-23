import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, 
  Globe, Shield, Cpu, Brain, Rocket, Zap, BarChart3,
  Home, Briefcase, Users, FileText, MessageCircle,
  ArrowRight
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
  badge?: string;
  external?: boolean;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: Home
  },
  {
    label: 'Services',
    href: '/services',
    icon: Briefcase,
    children: [
      { label: 'AI & Machine Learning', href: '/ai-services', icon: Brain, badge: 'Hot' },
      { label: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, badge: 'New' },
      { label: 'Cybersecurity', href: '/cybersecurity', icon: Shield, badge: 'Popular' },
      { label: 'Cloud Infrastructure', href: '/cloud-platform', icon: Globe },
      { label: 'Data Analytics', href: '/data-analytics', icon: BarChart3 },
      { label: 'Process Automation', href: '/process-automation', icon: Zap }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: Rocket,
    children: [
      { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
      { label: 'Startup Solutions', href: '/startup-solutions' },
      { label: 'Government Solutions', href: '/government-solutions' },
      { label: 'Healthcare Solutions', href: '/healthcare-solutions' }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: Users
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: FileText,
    children: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'White Papers', href: '/white-papers' },
      { label: 'Documentation', href: '/docs' }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: MessageCircle
  }
];

const EnhancedNavigation2025: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  // Handle dropdown toggle
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      // console.log('Searching for:', searchQuery);
      setSearchQuery('');
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setActiveDropdown(null);
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (activeDropdown && !(e.target as HTMLElement).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+1 (800) ZION-TECH</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>info@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>24/7 Support Available</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-label="Support status: Online" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-700/50' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Zion Tech Group Homepage">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white">Zion Tech Group</div>
                <div className="text-xs text-cyan-400">Pioneering the Future</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group dropdown-container">
                  {item.children ? (
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.icon && <item.icon className="w-4 h-4" aria-hidden="true" />}
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} aria-hidden="true" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
                    >
                      {item.icon && <item.icon className="w-4 h-4" aria-hidden="true" />}
                      {item.label}
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
                          className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl z-50"
                          role="menu"
                          aria-orientation="vertical"
                        >
                          <div className="p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 group/item"
                                role="menuitem"
                                onClick={closeMobileMenu}
                              >
                                <div className="flex items-center gap-3">
                                  {child.icon && <child.icon className="w-4 h-4" aria-hidden="true" />}
                                  <span>{child.label}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  {child.badge && (
                                    <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                                      {child.badge}
                                    </span>
                                  )}
                                  <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" aria-hidden="true" />
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

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className={`w-64 px-4 py-2 pl-10 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200 ${
                    isSearchFocused ? 'w-80' : ''
                  }`}
                  aria-label="Search for services and solutions"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
              </form>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  aria-label="Get a quote for our services"
                >
                  Get Quote
                </Link>
                <Link
                  href="/get-started"
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  aria-label="Get started with Zion Tech Group"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-10 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                    aria-label="Search for services and solutions"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                </form>

                {/* Mobile Navigation Items */}
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.label}>
                      {item.children ? (
                        <div>
                          <button
                            className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                            onClick={() => toggleDropdown(item.label)}
                            aria-expanded={activeDropdown === item.label}
                            aria-haspopup="true"
                          >
                            <div className="flex items-center gap-3">
                              {item.icon && <item.icon className="w-4 h-4" aria-hidden="true" />}
                              <span>{item.label}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`} aria-hidden="true" />
                          </button>
                          
                          {/* Mobile Dropdown */}
                          <AnimatePresence>
                            {activeDropdown === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-2 space-y-1"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    className="flex items-center justify-between px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                                    onClick={closeMobileMenu}
                                  >
                                    <div className="flex items-center gap-3">
                                      {child.icon && <child.icon className="w-4 h-4" aria-hidden="true" />}
                                      <span>{child.label}</span>
                                    </div>
                                    {child.badge && (
                                      <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                                        {child.badge}
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                          onClick={closeMobileMenu}
                        >
                          {item.icon && <item.icon className="w-4 h-4" aria-hidden="true" />}
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="pt-4 border-t border-gray-700/50 space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-200 font-medium text-center focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    onClick={closeMobileMenu}
                  >
                    Get Quote
                  </Link>
                  <Link
                    href="/get-started"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium text-center focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    onClick={closeMobileMenu}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default EnhancedNavigation2025;