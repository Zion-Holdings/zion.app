
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  // Normalize hrefs to ensure they start with /
  const normalizeHref = (href: string): string => {
    return href.startsWith('/') ? href : `/${href}`;
  };

  const navigationItems: NavigationItem[] = [
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'AI & Automation', href: '/services' },
        { label: 'IT Infrastructure', href: '/services' },
        { label: 'Cloud Solutions', href: '/services' },
        { label: 'Cybersecurity', href: '/services' },
        { label: 'Quantum Computing', href: '/services' },
        { label: 'Micro SAAS', href: '/services' },
        { label: 'Edge Computing', href: '/services' },
        { label: 'Blockchain', href: '/services' }
      ]
    },
    {
      label: 'Showcase',
      href: '/showcase',
      children: [
        { label: 'Case Studies', href: '/showcase' },
        { label: 'Success Stories', href: '/showcase' },
        { label: 'Innovation Lab', href: '/showcase' },
        { label: '2025 Services', href: '/comprehensive-2025-services-showcase' },
        { label: '2026 Services', href: '/ultimate-2026-services-showcase' },
        { label: '2027 Services', href: '/revolutionary-2027-services-showcase' },
        { label: '2028 Services', href: '/revolutionary-2028-pricing' },
        { label: '2029 Services', href: '/revolutionary-2029-services' }
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      children: [
        { label: 'Documentation', href: '/resources' },
        { label: 'Blog', href: '/resources' },
        { label: 'Research', href: '/resources' },
        { label: 'Training', href: '/training' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Events', href: '/events' }
      ]
    },
    {
      label: 'Company',
      href: '/about',
      children: [
        { label: 'About Us', href: '/about' },
        { label: 'Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
        { label: 'Get Started', href: '/get-started' },
        { label: 'Quote Request', href: '/quote' }
      ]
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.navigation-dropdown')) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">Z</span>
            </motion.div>
            <span className="text-white font-bold text-xl hidden sm:block">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative navigation-dropdown">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown(item.label))}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                >
                  <span>{item.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.label && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl py-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={normalizeHref(child.href)}
                          onClick={closeDropdown}
                          className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/get-started">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                Get Started
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown(item.label))}
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    <span className="text-lg font-medium">{item.label}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.label && item.children && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 space-y-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={normalizeHref(child.href)}
                            onClick={() => {
                              setIsOpen(false);
                              closeDropdown();
                            }}
                            className="block py-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Link href="/get-started" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </motion.button>
                </Link>
                <Link href="/contact" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation;