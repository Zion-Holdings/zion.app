import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles, Zap, Bot, Cloud, Shield, Globe, Cpu, Database, Brain, Atom, Rocket, Star } from 'lucide-react';
import Button from '../ui/Button';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning', icon: <Brain className="w-4 h-4" /> },
        { name: 'Cloud & Infrastructure', href: '/services?category=Cloud%20%26%20Infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/services?category=Cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'Emerging Technologies', href: '/services?category=Emerging%20Technologies', icon: <Atom className="w-4 h-4" /> },
        { name: 'IoT & Smart Cities', href: '/services?category=IoT%20%26%20Smart%20Cities', icon: <Globe className="w-4 h-4" /> },
        { name: 'Business Automation', href: '/services?category=Business%20Automation', icon: <Bot className="w-4 h-4" /> }
      ]
    },
    { name: 'Solutions', href: '/solutions', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Resources', href: '/resources', icon: <Database className="w-4 h-4" /> },
    { name: 'About', href: '/about', icon: <Star className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <Rocket className="w-4 h-4" /> }
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </span>
                <span className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">
                  Future Technology Solutions
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div variants={itemVariants} className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 group"
                            >
                              <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                                {dropdownItem.icon}
                              </div>
                              <span className="font-medium">{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="hidden lg:flex items-center space-x-4">
            <Button href="/contact" variant="secondary" size="sm">
              Get Started
            </Button>
            <Button href="/pricing" variant="primary" size="sm">
              View Pricing
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div variants={itemVariants} className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                        >
                          <div className="flex items-center space-x-2">
                            {item.icon}
                            <span>{item.name}</span>
                          </div>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="ml-4 space-y-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.icon}
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="px-4 pt-4 space-y-3">
                  <Button href="/contact" variant="secondary" size="sm" className="w-full">
                    Get Started
                  </Button>
                  <Button href="/pricing" variant="primary" size="sm" className="w-full">
                    View Pricing
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default EnhancedNavigation;