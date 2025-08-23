import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Menu, X, ChevronDown, Globe, Brain, Atom, Shield, Rocket, 
  Users, Building, Cloud, Code, Target, Star, ArrowRight
} from 'lucide-react';

const UltraFuturisticNavigation2045: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'AI & Autonomous Services', href: '/services/ai-autonomous', icon: Brain, description: 'Revolutionary AI autonomous solutions' },
        { name: 'Quantum Technology', href: '/services/quantum-technology', icon: Atom, description: 'Quantum computing and quantum AI' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced security and threat protection' },
        { name: 'Space Technology', href: '/services/space-technology', icon: Rocket, description: 'Space resource intelligence and mining' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Cloud, description: 'Modern cloud and infrastructure solutions' },
        { name: 'Micro SAAS Solutions', href: '/services/micro-saas', icon: Target, description: 'Innovative micro SAAS platforms' },
        { name: 'Business Intelligence', href: '/services/business-intelligence', icon: Target, description: 'AI-powered business transformation' }
      ]
    },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeMobileMenu}>
            <motion.div 
              className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </motion.div>
            <div>
              <span className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech
              </span>
              <div className="text-xs lg:text-sm text-cyan-400 font-medium">
                Revolutionary Technology 2045
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                                >
                                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-200">
                                    <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                      {dropdownItem.name}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
                                </Link>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-700/50">
                              <Link
                                href={item.href}
                                className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                              >
                                View All Services
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/demo"
              className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            >
              Watch Demo
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-6">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-3"
                        aria-expanded={activeDropdown === item.name}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={closeMobileMenu}
                                className="flex items-center space-x-3 p-2 text-gray-400 hover:text-cyan-400 transition-colors rounded-lg"
                              >
                                <dropdownItem.icon className="w-4 h-4 text-cyan-400" />
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors py-3"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-6 border-t border-gray-700/50 space-y-4">
                <Link
                  href="/demo"
                  onClick={closeMobileMenu}
                  className="block text-center px-6 py-3 border border-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Watch Demo
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
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

export default UltraFuturisticNavigation2045;