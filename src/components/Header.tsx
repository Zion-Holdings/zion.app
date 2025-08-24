
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail,
  MapPin,
  Globe
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Services', href: '/all-services', current: location.pathname === '/all-services' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' }
  ];

  const serviceCategories = [
    { name: 'AI Services', href: '/all-services?category=AI Services', description: 'Cutting-edge AI solutions' },
    { name: 'Micro SAAS', href: '/all-services?category=Micro SAAS', description: 'Scalable business tools' },
    { name: 'IT Solutions', href: '/all-services?category=IT Services', description: 'Enterprise infrastructure' },
    { name: 'Cybersecurity', href: '/all-services?category=Security', description: 'Advanced security solutions' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-zion-primary/10 border-b border-zion-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-zion-light/70">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 hover:text-zion-primary transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{contactInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 hover:text-zion-primary transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-zion-light/70">
              <Globe className="w-4 h-4" />
              <a 
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zion-primary transition-colors duration-300"
              >
                {contactInfo.website.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-dark/95 backdrop-blur-md border-b border-zion-primary/20 shadow-2xl shadow-zion-primary/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-primary to-zion-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-zion-primary transition-colors duration-300">
                  Zion Tech Group
                </div>
                <div className="text-xs text-zion-light/60">Innovation at Your Fingertips</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    item.current
                      ? 'text-zion-primary bg-zion-primary/10 border border-zion-primary/20'
                      : 'text-zion-light/70 hover:text-white hover:bg-zion-primary/10'
                  }`}
                >
                  {item.name}
                  {item.current && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-zion-primary/10 border border-zion-primary/20 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-zion-light/70 hover:text-white hover:bg-zion-primary/10 rounded-lg transition-all duration-300"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-zion-dark/95 backdrop-blur-md border border-zion-primary/20 rounded-2xl shadow-2xl shadow-zion-primary/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="text-sm font-semibold text-zion-primary mb-3">Our Services</div>
                        <div className="space-y-2">
                          {serviceCategories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.href}
                              onClick={closeMobileMenu}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-zion-primary/10 transition-all duration-300 group"
                            >
                              <div className="w-2 h-2 bg-zion-primary rounded-full mt-2 group-hover:scale-150 transition-transform duration-300" />
                              <div>
                                <div className="font-medium text-white group-hover:text-zion-primary transition-colors duration-300">
                                  {category.name}
                                </div>
                                <div className="text-sm text-zion-light/60">
                                  {category.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-zion-primary/20">
                          <Link
                            to="/all-services"
                            onClick={closeMobileMenu}
                            className="block w-full text-center py-2 px-4 bg-gradient-to-r from-zion-primary to-zion-secondary text-white font-medium rounded-lg hover:from-zion-primary/90 hover:to-zion-secondary/90 transition-all duration-300"
                          >
                            View All Services
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-primary to-zion-secondary hover:from-zion-primary/90 hover:to-zion-secondary/90 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-primary/25"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-zion-light/70 hover:text-white hover:bg-zion-primary/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-zion-dark/95 backdrop-blur-md border-t border-zion-primary/20"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      item.current
                        ? 'text-zion-primary bg-zion-primary/10 border border-zion-primary/20'
                        : 'text-zion-light/70 hover:text-white hover:bg-zion-primary/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Services Section */}
                <div className="px-4 py-3">
                  <div className="text-sm font-semibold text-zion-primary mb-3">Services</div>
                  <div className="space-y-2">
                    {serviceCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        onClick={closeMobileMenu}
                        className="block px-4 py-2 text-sm text-zion-light/70 hover:text-white hover:bg-zion-primary/10 rounded-lg transition-all duration-300"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="px-4 pt-4">
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="block w-full text-center py-3 px-6 bg-gradient-to-r from-zion-primary to-zion-secondary text-white font-medium rounded-lg hover:from-zion-primary/90 hover:to-zion-secondary/90 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="px-4 pt-4 border-t border-zion-primary/20">
                  <div className="space-y-2 text-sm text-zion-light/60">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${contactInfo.phone}`} className="hover:text-zion-primary transition-colors duration-300">
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-zion-primary transition-colors duration-300">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-32" />
    </>
  );
};

export default Header;
