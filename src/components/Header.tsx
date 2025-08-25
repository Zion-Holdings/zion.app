import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Globe, Zap, Shield, Cpu, Cloud, Brain, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions for business transformation',
      icon: Brain,
      link: '/ai-services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automation',
      icon: Cloud,
      link: '/cloud-devops',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive business technology solutions',
      icon: Shield,
      link: '/enterprise-solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Micro SAAS Services',
      description: 'Custom software solutions for modern businesses',
      icon: Cpu,
      link: '/micro-saas-services',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end business modernization',
      icon: Rocket,
      link: '/digital-transformation',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Emerging Tech',
      description: 'Next-generation technology solutions',
      icon: Zap,
      link: '/emerging-tech',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
          : 'bg-transparent'
      }`}
      role="banner"
      aria-label="Main navigation"
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
            <Link to="/" className="flex-shrink-0 group" aria-label="Zion Tech Group Home">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" aria-hidden="true" />
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
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main menu">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 hover:text-zion-cyan ${
                isActive('/') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
                aria-expanded={activeDropdown === 'services'}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-4 shadow-2xl shadow-zion-cyan/20"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                    role="menu"
                    aria-label="Services menu"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <Link
                            key={service.title}
                            to={service.link}
                            className="group p-3 rounded-xl hover:bg-zion-blue-light/20 transition-all duration-200"
                            role="menuitem"
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                                <IconComponent className="w-5 h-5 text-white" aria-hidden="true" />
                              </div>
                              <div>
                                <h3 className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                  {service.title}
                                </h3>
                                <p className="text-xs text-zion-slate-light mt-1 line-clamp-2">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/talent"
              className={`text-sm font-medium transition-colors duration-200 hover:text-zion-cyan ${
                isActive('/talent') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
              aria-current={isActive('/talent') ? 'page' : undefined}
            >
              Talent
            </Link>
            
            <Link
              to="/marketplace"
              className={`text-sm font-medium transition-colors duration-200 hover:text-zion-cyan ${
                isActive('/marketplace') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
              aria-current={isActive('/marketplace') ? 'page' : undefined}
            >
              Marketplace
            </Link>
            
            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors duration-200 hover:text-zion-cyan ${
                isActive('/pricing') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
              aria-current={isActive('/pricing') ? 'page' : undefined}
            >
              Pricing
            </Link>
            
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors duration-200 hover:text-zion-cyan ${
                isActive('/contact') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
              aria-current={isActive('/contact') ? 'page' : undefined}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20 rounded-lg transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-cyan/20"
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block py-2 text-lg font-medium text-white hover:text-zion-cyan transition-colors"
                onClick={() => setIsOpen(false)}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
              </Link>
              
              {/* Mobile Services Accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-lg font-medium text-white hover:text-zion-cyan transition-colors"
                  onClick={() => toggleDropdown('mobile-services')}
                  aria-expanded={activeDropdown === 'mobile-services'}
                  aria-controls="mobile-services-content"
                >
                  <span>Services</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-200 ${
                      activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'mobile-services' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-2 mt-2"
                      id="mobile-services-content"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          to={service.link}
                          className="block py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/talent"
                className="block py-2 text-lg font-medium text-white hover:text-zion-cyan transition-colors"
                onClick={() => setIsOpen(false)}
                aria-current={isActive('/talent') ? 'page' : undefined}
              >
                Talent
              </Link>
              
              <Link
                to="/marketplace"
                className="block py-2 text-lg font-medium text-white hover:text-zion-cyan transition-colors"
                onClick={() => setIsOpen(false)}
                aria-current={isActive('/marketplace') ? 'page' : undefined}
              >
                Marketplace
              </Link>
              
              <Link
                to="/pricing"
                className="block py-2 text-lg font-medium text-white hover:text-zion-cyan transition-colors"
                onClick={() => setIsOpen(false)}
                aria-current={isActive('/pricing') ? 'page' : undefined}
              >
                Pricing
              </Link>
              
              <Link
                to="/contact"
                className="block py-2 text-lg font-medium text-white hover:text-zion-cyan transition-colors"
                onClick={() => setIsOpen(false)}
                aria-current={isActive('/contact') ? 'page' : undefined}
              >
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Link to="/login" className="block w-full">
                  <Button variant="ghost" className="w-full text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" className="block w-full">
                  <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};