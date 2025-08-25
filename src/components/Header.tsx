import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Globe, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navigationItems = [
    { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
    { 
      name: 'Services', 
      path: '#services',
      description: 'Our comprehensive tech solutions',
      submenu: [
        { name: 'AI & Machine Learning', path: '/ai-services', description: 'Cutting-edge AI solutions' },
        { name: 'Micro SAAS Services', path: '/micro-saas-services', description: 'Scalable software solutions' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', description: 'Large-scale business solutions' },
        { name: 'Cloud & DevOps', path: '/cloud-devops-solutions', description: 'Infrastructure optimization' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'IT Onsite Services', path: '/it-onsite-services', description: 'On-premise technical support' }
      ]
    },
    { name: 'Talent', path: '/talent', description: 'Find top tech professionals' },
    { name: 'Equipment', path: '/equipment', description: 'Premium tech equipment' },
    { name: 'About', path: '/about', description: 'Learn about our company' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
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
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Zion Tech Group
                  </h1>
                  <p className="text-xs text-zion-slate-light -mt-1">Innovation • Technology • Future</p>
                </div>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button className="flex items-center space-x-1 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-zion-blue-light/10">
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block p-3 rounded-xl hover:bg-zion-cyan/10 hover:border-zion-cyan/30 border border-transparent transition-all duration-200 group/sub"
                            >
                              <div className="font-medium text-white group-hover/sub:text-zion-cyan transition-colors">
                                {subItem.name}
                              </div>
                              <div className="text-sm text-zion-slate-light group-hover/sub:text-zion-slate-light/80">
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
                    className={`py-2 px-3 rounded-lg transition-all duration-200 font-medium ${
                      isActive(item.path)
                        ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/30'
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zion-blue-light/10 border border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-200"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* Language Selector */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-zion-blue-light/10 border border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-200"
            >
              <Globe className="w-5 h-5" />
            </motion.button>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="outline" size="sm" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                Sign In
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:shadow-lg hover:shadow-zion-cyan/25">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg bg-zion-blue-light/10 border border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-cyan/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="space-y-2">
                      <div className="font-medium text-zion-cyan mb-2">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 transition-colors ${
                        isActive(item.path)
                          ? 'text-zion-cyan'
                          : 'text-zion-slate-light hover:text-zion-cyan'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-zion-cyan/20 space-y-3">
                <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};