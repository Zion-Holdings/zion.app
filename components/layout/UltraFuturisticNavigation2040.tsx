import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Search, Globe, Brain, Rocket, Shield, 
  Cpu, Database, Atom, Target, Star, Sparkles, Zap, Eye, Heart
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  subItems?: NavigationItem[];
}

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Navigation items with enhanced structure
  const navigationItems: NavigationItem[] = [
    {
      name: 'AI & Consciousness',
      href: '/ai-consciousness',
      icon: Brain,
      description: 'Revolutionary AI consciousness evolution',
      subItems: [
        { name: 'AI Consciousness 2044', href: '/ai-consciousness-evolution-2044', icon: Brain, description: 'Next-generation AI consciousness' },
        { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform-2044', icon: Atom, description: 'Quantum-powered AI networks' },
        { name: 'Autonomous Intelligence', href: '/ai-autonomous-business-intelligence-2044', icon: Cpu, description: 'Fully autonomous AI systems' }
      ]
    },
    {
      name: 'Quantum Technology',
      href: '/quantum-technology',
      icon: Atom,
      description: 'Quantum computing and cryptography',
      subItems: [
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform-2044', icon: Shield, description: 'Quantum-resistant security' },
        { name: 'Quantum Cloud', href: '/quantum-cloud-infrastructure-2044', icon: Database, description: 'Quantum-powered cloud infrastructure' },
        { name: 'Quantum Networks', href: '/quantum-network-platform-2044', icon: Globe, description: 'Quantum communication networks' }
      ]
    },
    {
      name: 'Space Technology',
      href: '/space-technology',
      icon: Rocket,
      description: 'Space exploration and resource intelligence',
      subItems: [
        { name: 'Space Resource Intelligence', href: '/space-resource-intelligence-2044', icon: Target, description: 'AI-powered space exploration' },
        { name: 'Satellite Networks', href: '/satellite-network-platform-2044', icon: Globe, description: 'Advanced satellite systems' },
        { name: 'Space Analytics', href: '/space-analytics-platform-2044', icon: Star, description: 'Space data analysis' }
      ]
    },
    {
      name: 'Business Solutions',
      href: '/business-solutions',
      icon: Target,
      description: 'Enterprise transformation solutions',
      subItems: [
        { name: 'Business Intelligence', href: '/business-intelligence-platform-2044', icon: Cpu, description: 'AI-powered business insights' },
        { name: 'Digital Transformation', href: '/digital-transformation-2044', icon: Zap, description: 'Complete business transformation' },
        { name: 'Innovation Labs', href: '/innovation-labs-2044', icon: Sparkles, description: 'R&D and innovation centers' }
      ]
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside clicks for mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle dropdown interactions
  const handleDropdownToggle = useCallback((itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  }, [activeDropdown]);

  // Handle search functionality
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    // Implement search logic here
    console.log('Searching for:', query);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  }, []);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-[0_0_50px_rgba(0,0,0,0.5)]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  onKeyDown={(e) => handleKeyDown(e, () => handleDropdownToggle(item.name))}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group-hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup="true"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] p-4"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby={`${item.name}-button`}
                    >
                      <div className="space-y-3">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-300 group"
                            onClick={() => setActiveDropdown(null)}
                            role="menuitem"
                          >
                            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                              <subItem.icon className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                                {subItem.name}
                              </div>
                              <div className="text-gray-400 text-sm mt-1">
                                {subItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <div className={`flex items-center space-x-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl transition-all duration-300 ${
                isSearchFocused ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)]' : ''
              }`}>
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search revolutionary services..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="bg-transparent text-white placeholder-gray-400 focus:outline-none min-w-[200px]"
                  aria-label="Search services"
                />
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/get-started"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <div className="flex items-center space-x-2 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="bg-transparent text-white placeholder-gray-400 focus:outline-none flex-1"
                    aria-label="Search services"
                  />
                </div>
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      onKeyDown={(e) => handleKeyDown(e, () => handleDropdownToggle(item.name))}
                      className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-300 rounded-xl"
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-6 mt-2 space-y-2"
                        >
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block p-3 text-gray-400 hover:text-white hover:bg-gray-800/30 transition-colors duration-300 rounded-lg"
                              onClick={closeMobileMenu}
                            >
                              <div className="flex items-center space-x-3">
                                <subItem.icon className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm">{subItem.name}</span>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700/50">
                <Link
                  href="/get-started"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
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
  );
};

export default UltraFuturisticNavigation2040;