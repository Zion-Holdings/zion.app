import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'Micro SAAS Services', path: '/micro-saas-services', description: 'Custom software solutions' },
    { name: 'AI & Machine Learning', path: '/ai-services', description: 'Intelligent automation' },
    { name: 'Enterprise Solutions', path: '/enterprise-solutions', description: 'Large-scale deployments' },
    { name: 'Cloud & DevOps', path: '/cloud-devops-solutions', description: 'Infrastructure & deployment' },
    { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
    { name: 'IT Onsite Services', path: '/it-onsite-services', description: 'On-premise support' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group" onClick={closeMenu}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Zion Tech Group
                  </h1>
                  <p className="text-xs text-zion-slate-light">Innovation • Technology • Growth</p>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive('/') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20' 
                  : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/10'
              }`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="px-3 py-2 text-sm font-medium text-zion-slate-light hover:text-white hover:bg-zion-blue-light/10 rounded-lg transition-all duration-200 flex items-center gap-2"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/10 transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-zion-cyan/10 hover:border-zion-cyan/20 border border-transparent transition-all duration-200 group"
                      >
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 group-hover:scale-150 transition-transform duration-200"></div>
                        <div>
                          <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                            {service.name}
                          </div>
                          <div className="text-sm text-zion-slate-light">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <Link 
              to="/pricing" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive('/pricing') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20' 
                  : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/10'
              }`}
            >
              Pricing
            </Link>
            
            <Link 
              to="/contact" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive('/contact') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20' 
                  : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/10'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Language Selector */}
            <button className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200">
              <Globe className="w-5 h-5" />
            </button>
            
            {/* Auth Buttons */}
            <Button variant="outline" size="sm" className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:shadow-lg hover:shadow-zion-cyan/25">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-cyan/20 px-4 py-6">
          <nav className="space-y-4">
            <Link 
              to="/" 
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                isActive('/') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20' 
                  : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/10'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            
            {/* Mobile Services */}
            <div className="space-y-2">
              <div className="px-3 py-2 text-base font-medium text-zion-slate-light">Services</div>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block px-6 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                  onClick={closeMenu}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            <Link 
              to="/pricing" 
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                isActive('/pricing') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20' 
                  : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/10'
              }`}
              onClick={closeMenu}
            >
              Pricing
            </Link>
            
            <Link 
              to="/contact" 
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                isActive('/contact') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20' 
                  : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/10'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile Actions */}
          <div className="mt-6 pt-6 border-t border-zion-cyan/20 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-zion-slate-light">Theme</span>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
            
            <div className="flex flex-col space-y-3">
              <Button variant="outline" size="sm" className="w-full border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white">
                Sign In
              </Button>
              <Button size="sm" className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:shadow-lg hover:shadow-zion-cyan/25">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};