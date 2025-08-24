import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search,
  Zap, 
  Globe, 
  Shield,
  Building,
  Users,
  Code,
  Cloud,
  Database,
  Lock,
  Smartphone,
  BarChart3
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const services = [
    { 
      name: 'AI Development', 
      href: '/services/ai-development', 
      description: 'Custom AI solutions and ML models',
      icon: Code
    },
    { 
      name: 'Cloud Architecture', 
      href: '/services/cloud-services', 
      description: 'Scalable cloud infrastructure',
      icon: Cloud
    },
    { 
      name: 'Data Analytics', 
      href: '/services/data-analytics', 
      description: 'Business intelligence & insights',
      icon: BarChart3
    },
    { 
      name: 'Blockchain Solutions', 
      href: '/services/blockchain', 
      description: 'Decentralized applications',
      icon: Shield
    },
    { 
      name: 'IoT Platforms', 
      href: '/services/iot-platforms', 
      description: 'Connected device solutions',
      icon: Smartphone
    },
    { 
      name: 'Web Development', 
      href: '/services/web-development', 
      description: 'Modern web applications',
      icon: Globe
    },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Micro SaaS', href: '/micro-saas-services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns when pressing Escape
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  const generateSearchSuggestions = (query: string) => {
    if (!query.trim()) return [];
    
    const allServices = services.map(s => s.name);
    const allPages = navigation.map(n => n.name);
    const allItems = [...allServices, ...allPages];
    
    return allItems.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
  };

  const searchSuggestions = generateSearchSuggestions(searchQuery);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-zion-blue-dark/95 backdrop-blur-2xl border-b border-zion-blue-light shadow-2xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      {/* Futuristic Background Glow */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-zion-purple/5 to-zion-cyan/5" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-cyan rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-zion-cyan/25">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-zion-cyan group-hover:to-zion-purple transition-all duration-300">
                Zion Tech
              </span>
              <span className="text-xs text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-300">
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-zion-cyan'
                    : 'text-white hover:text-zion-cyan'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-white hover:text-zion-cyan transition-colors duration-300"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-blue-light rounded-xl shadow-2xl shadow-black/50 backdrop-blur-xl"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-3">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-blue-light/20 transition-all duration-300 group"
                          >
                            <div className="w-10 h-10 bg-zion-cyan/10 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/20 transition-colors duration-300">
                              <service.icon className="w-5 h-5 text-zion-cyan" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                                {service.name}
                              </p>
                              <p className="text-xs text-zion-slate-light mt-1">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark"
              aria-label="Get started with your project"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark rounded-md p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-zion-blue-dark border-t border-zion-blue-light py-4 overflow-hidden"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href} 
                    className={`px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                      isActive(item.href)
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-white hover:bg-zion-blue-light/20'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="px-4 py-2">
                  <div className="text-zion-cyan font-medium mb-2">Services</div>
                  <div className="pl-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20 px-2 py-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Mobile CTA */}
                <div className="px-4 pt-2">
                  <Link 
                    to="/contact" 
                    className="block bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center px-6 py-3 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Get started with your project"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
