import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Globe, Brain, Shield, Rocket, 
  Cpu, Database, Atom, Users, Award, BookOpen, Phone,
  Search, Bell, User, Settings, LogOut, Sun, Moon
} from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsOpen(false);
        setShowSearch(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (showSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showSearch]);

  const services = [
    { name: 'All Services', href: '/comprehensive-2025-services-showcase', icon: Globe, description: 'Complete collection of innovative services', badge: 'New' },
    { name: 'AI Business Intelligence', href: 'https://ziontechgroup.com/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics and insights', badge: 'Popular' },
    { name: 'Quantum Cybersecurity', href: 'https://ziontechgroup.com/quantum-cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions', badge: 'Enterprise' },
    { name: 'Edge Computing', href: 'https://ziontechgroup.com/edge-computing-orchestration', icon: Cpu, description: 'Edge orchestration and IoT management', badge: 'Innovative' },
    { name: 'Space Technology', href: 'https://ziontechgroup.com/space-technology', icon: Rocket, description: 'Space exploration and satellite tech', badge: 'Premium' },
    { name: 'Pricing', href: '/pricing-2025', icon: Award, description: 'Transparent pricing for all services' }
  ];

  const company = [
    { name: 'About Us', href: '/about', icon: Users, description: 'Learn about our mission and team' },
    { name: 'Our Work', href: '/portfolio', icon: Award, description: 'See our latest projects and achievements' },
    { name: 'Blog & Insights', href: '/blog', icon: BookOpen, description: 'Stay updated with industry trends' },
    { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch with our experts' }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
    setShowSearch(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Here you would typically update the theme context or localStorage
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      setSearchQuery('');
      setShowSearch(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeAllDropdowns}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
                aria-expanded={activeDropdown === 'services'}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} aria-hidden="true" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                    role="menu"
                    aria-label="Services submenu"
                  >
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                        Our Services
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={closeAllDropdowns}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                            role="menuitem"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-2 flex items-center justify-center flex-shrink-0">
                              <service.icon className="w-5 h-5 text-white" aria-hidden="true" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-white font-medium truncate">{service.name}</span>
                                {service.badge && (
                                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                    service.badge === 'New' ? 'bg-green-500 text-white' :
                                    service.badge === 'Popular' ? 'bg-yellow-500 text-white' :
                                    service.badge === 'Enterprise' ? 'bg-purple-500 text-white' :
                                    service.badge === 'Innovative' ? 'bg-blue-500 text-white' :
                                    'bg-indigo-500 text-white'
                                  }`}>
                                    {service.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-white/60 truncate">{service.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
                aria-expanded={activeDropdown === 'company'}
                aria-haspopup="true"
                aria-label="Company menu"
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'company' ? 'rotate-180' : ''
                }`} aria-hidden="true" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                    role="menu"
                    aria-label="Company submenu"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {company.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={closeAllDropdowns}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                            role="menuitem"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 p-2 flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-5 h-5 text-white" aria-hidden="true" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-white font-medium truncate">{item.name}</span>
                              <p className="text-sm text-white/60 truncate">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Links */}
            <Link 
              href="/pricing-2025" 
              className="text-white/80 hover:text-white transition-colors duration-200 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
            >
              Pricing
            </Link>
            <Link 
              href="/blog" 
              className="text-white/80 hover:text-white transition-colors duration-200 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
            >
              Blog
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-full"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-full"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
            </button>

            {/* Notifications */}
            <button className="p-2 text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-full relative">
              <Bell className="w-5 h-5" aria-hidden="true" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* CTA Button */}
            <Link
              href="mailto:kleber@ziontechgroup.com"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-medium text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="pb-4"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, articles, or solutions..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
                  aria-label="Submit search"
                >
                  <Search className="w-5 h-5" aria-hidden="true" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/10"
            >
              <div className="py-6 space-y-4">
                {/* Mobile Services */}
                <div>
                  <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider px-4">
                    Services
                  </h3>
                  <div className="space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={closeAllDropdowns}
                        className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:bg-white/5"
                      >
                        <service.icon className="w-5 h-5" aria-hidden="true" />
                        <span>{service.name}</span>
                        {service.badge && (
                          <span className={`ml-auto px-2 py-1 text-xs font-semibold rounded-full ${
                            service.badge === 'New' ? 'bg-green-500 text-white' :
                            service.badge === 'Popular' ? 'bg-yellow-500 text-white' :
                            service.badge === 'Enterprise' ? 'bg-purple-500 text-white' :
                            service.badge === 'Innovative' ? 'bg-blue-500 text-white' :
                            'bg-indigo-500 text-white'
                          }`}>
                            {service.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Company */}
                <div>
                  <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider px-4">
                    Company
                  </h3>
                  <div className="space-y-2">
                    {company.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeAllDropdowns}
                        className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:bg-white/5"
                      >
                        <item.icon className="w-5 h-5" aria-hidden="true" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between px-4">
                    <button
                      onClick={toggleTheme}
                      className="p-2 text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
                      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                    >
                      {isDarkMode ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
                    </button>
                    <Link
                      href="mailto:kleber@ziontechgroup.com"
                      onClick={closeAllDropdowns}
                      className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-medium text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;