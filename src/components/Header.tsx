import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button, { PrimaryButton, SecondaryButton } from '@/components/ui/Button';
import { Menu, X, ChevronDown, Globe, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navigationItems = [
    { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
    { 
      name: 'Services', 
      path: '#services',
      description: 'Our comprehensive tech solutions',
      submenu: [
        { name: 'AI & Machine Learning', path: '/ai-services', description: 'Cutting-edge AI solutions' },
        { name: 'Micro SAAS Services', path: '/micro-saas-services', description: 'Scalable software solutions' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', description: 'Large-scale implementations' },
        { name: 'Cloud & DevOps', path: '/cloud-devops-solutions', description: 'Infrastructure optimization' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'IT Onsite Services', path: '/it-onsite-services', description: 'On-premise support' }
      ]
    },
    { name: 'Talent', path: '/talent', description: 'Find top tech professionals' },
    { name: 'Equipment', path: '/equipment', description: 'High-tech equipment marketplace' },
    { name: 'About', path: '/about', description: 'Learn about our mission' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with us' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group" onClick={closeMenu}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-zion-slate-light">Innovation • Technology • Future</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button className="flex items-center space-x-1 px-4 py-2 text-zion-slate-light hover:text-white transition-colors rounded-lg hover:bg-zion-blue-light/10 group-hover:bg-zion-blue-light/20">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block p-3 rounded-xl hover:bg-zion-blue-light/10 transition-all duration-200 group/sub"
                            >
                              <div className="font-medium text-white group-hover/sub:text-zion-cyan transition-colors">
                                {subItem.name}
                              </div>
                              <div className="text-sm text-zion-slate-light mt-1">
                                {subItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-white bg-zion-cyan/20 border border-zion-cyan/30'
                        : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-zion-blue-light/10 hover:bg-zion-blue-light/20 transition-colors border border-zion-cyan/20 hover:border-zion-cyan/40"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-zion-cyan" /> : <Moon className="w-5 h-5 text-zion-cyan" />}
            </Button>

            {/* Language Selector */}
            <Button
              variant="ghost"
              size="icon"
              className="p-2 rounded-lg bg-zion-blue-light/10 hover:bg-zion-blue-light/20 transition-colors border border-zion-cyan/20 hover:border-zion-cyan/40"
            >
              <Globe className="w-5 h-5 text-zion-cyan" />
            </Button>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <SecondaryButton size="sm">
                Sign In
              </SecondaryButton>
              <PrimaryButton size="sm">
                Get Started
              </PrimaryButton>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg bg-zion-blue-light/10 hover:bg-zion-blue-light/20 transition-colors border border-zion-cyan/20 hover:border-zion-cyan/40"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-zion-cyan" /> : <Menu className="w-5 h-5 text-zion-cyan" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-cyan/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="space-y-2">
                      <div className="text-zion-cyan font-medium text-sm uppercase tracking-wider">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={closeMenu}
                            className="block py-2 text-zion-slate-light hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`block py-2 transition-colors ${
                        isActive(item.path)
                          ? 'text-zion-cyan'
                          : 'text-zion-slate-light hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-zion-cyan/20">
                <div className="space-y-3">
                  <SecondaryButton size="sm" className="w-full">
                    Sign In
                  </SecondaryButton>
                  <PrimaryButton size="sm" className="w-full">
                    Get Started
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};