import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Phone, Mail, MapPin,
  Brain, Rocket, Shield, Atom, Cpu, Cloud, Star
} from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
}

interface ServiceCategory {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  services: string[];
}

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/', icon: <Star className="w-4 h-4" /> },
  { id: 'services', label: 'Services', href: '/services', icon: <Rocket className="w-4 h-4" /> },
  { id: 'about', label: 'About', href: '/about', icon: <Brain className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },
];

const serviceCategories: ServiceCategory[] = [
  {
    id: 'ai-automation',
    label: 'AI & Automation',
    href: '/services/ai-automation',
    icon: <Brain className="w-4 h-4" />,
    description: 'Intelligent automation solutions',
    services: ['AI Business Operations', 'Process Automation', 'Machine Learning']
  },
  {
    id: 'quantum-security',
    label: 'Quantum Security',
    href: '/services/quantum-security',
    icon: <Shield className="w-4 h-4" />,
    description: 'Next-generation cybersecurity',
    services: ['Quantum Encryption', 'Zero-Trust Architecture', 'Threat Intelligence']
  },
  {
    id: 'micro-saas',
    label: 'Micro SAAS',
    href: '/services/micro-saas',
    icon: <Rocket className="w-4 h-4" />,
    description: 'Rapid deployment solutions',
    services: ['Template Library', 'One-Click Deploy', 'Scalable Infrastructure']
  },
  {
    id: 'it-solutions',
    label: 'IT Solutions',
    href: '/services/it-solutions',
    icon: <Cpu className="w-4 h-4" />,
    description: 'Enterprise IT services',
    services: ['Cloud Migration', 'DevOps Automation', 'Infrastructure Management']
  }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const EnhancedNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3 group" aria-label="Zion Tech Group Home">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <span className="text-white font-bold text-xl lg:text-2xl">ZionTech Group</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  aria-label={`Navigate to ${item.label}`}
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  aria-expanded={isServicesDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Services menu"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 gap-4">
                          {serviceCategories.map((category) => (
                            <Link
                              key={category.id}
                              href={category.href}
                              className="group p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                  {category.icon}
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {category.label}
                                  </h3>
                                  <p className="text-sm text-gray-400 mt-1">{category.description}</p>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {category.services.slice(0, 2).map((service, index) => (
                                      <span
                                        key={index}
                                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
                                      >
                                        {service}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700/50">
                          <Link
                            href="/services"
                            className="flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
                          >
                            View All Services
                            <Rocket className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
                aria-label="Contact us"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Menu Content */}
            <div className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-gray-900/95 backdrop-blur-xl border-l border-gray-700/50 overflow-y-auto">
              <div className="p-6">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-bold text-xl">ZionTech Group</span>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-4 mb-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 text-gray-300 hover:text-white"
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* Mobile Services */}
                <div className="mb-8">
                  <h3 className="text-white font-semibold mb-4 px-3">Services</h3>
                  <div className="space-y-2">
                    {serviceCategories.map((category) => (
                      <Link
                        key={category.id}
                        href={category.href}
                        onClick={closeMobileMenu}
                        className="block p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                            {category.icon}
                          </div>
                          <div>
                            <div className="text-white font-medium">{category.label}</div>
                            <div className="text-sm text-gray-400">{category.description}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Contact Info */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-white font-semibold px-3">Contact</h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 text-gray-300 hover:text-white"
                    >
                      <Phone className="w-5 h-5" />
                      <span>{contactInfo.phone}</span>
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 text-gray-300 hover:text-white"
                    >
                      <Mail className="w-5 h-5" />
                      <span>{contactInfo.email}</span>
                    </a>
                    <div className="flex items-start space-x-3 p-3 text-gray-300">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl text-center transition-all duration-200 hover:scale-105"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedNavigation;