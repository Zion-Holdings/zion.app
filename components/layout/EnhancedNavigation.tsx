import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, 
  Brain, Rocket, Zap, Globe, 
  Shield, Users, Star, Cpu
} from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: <Cpu className="w-4 h-4" />,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Computing', href: '/services?category=quantum', icon: <Zap className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/services?category=space', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Emerging Tech', href: '/services?category=emerging', icon: <Star className="w-4 h-4" /> },
        { name: 'IT Solutions', href: '/services?category=it', icon: <Shield className="w-4 h-4" /> },
        { name: 'All Services', href: '/services', icon: <Globe className="w-4 h-4" /> }
      ]
    },
    { name: 'Solutions', href: '/solutions', icon: <Star className="w-4 h-4" /> },
    { name: 'About', href: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Resources', href: '/resources', icon: <Brain className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <Globe className="w-4 h-4" /> }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/30' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white font-bold text-lg lg:text-xl">Z</span>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Revolutionary Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-200"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-xl shadow-2xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-4 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-200"
                        >
                          {dropdownItem.icon}
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* Contact Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 p-3 rounded-lg hover:bg-purple-500/20"
                      >
                        <span className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.name}</span>
                        </span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <motion.div
                          className="ml-6 mt-2 space-y-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.icon}
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 p-3 rounded-lg hover:bg-purple-500/20"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Contact Button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-purple-500/30">
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">📱</span>
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">✉️</span>
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-pink-400">📍</span>
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default EnhancedNavigation;