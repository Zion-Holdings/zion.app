import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, 
  Brain, Rocket, Shield, Cloud, 
  Zap, Atom, Globe, Building2,
  Phone, Mail, MapPin
} from 'lucide-react';

export default function EnhancedNavigation() {
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

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: '🏠'
    },
    {
      name: 'Revolutionary Services',
      href: '/revolutionary-services-showcase',
      icon: '🚀',
      highlight: true
    },
    {
      name: 'All Services',
      href: '/services',
      icon: '⚡'
    },
    {
      name: 'Market Pricing',
      href: '/comprehensive-market-pricing',
      icon: '💰'
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: '💡'
    },
    {
      name: 'About',
      href: '/about',
      icon: 'ℹ️'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: '📞'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      href: '/services?category=ai',
      icon: Brain,
      description: 'Advanced AI services and solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Quantum Computing',
      href: '/services?category=quantum',
      icon: Atom,
      description: 'Quantum-powered solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Cybersecurity',
      href: '/services?category=security',
      icon: Shield,
      description: 'Next-gen security solutions',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Cloud & Infrastructure',
      href: '/services?category=cloud',
      icon: Cloud,
      description: 'Scalable cloud solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Emerging Tech',
      href: '/services?category=emerging',
      icon: Rocket,
      description: 'Cutting-edge innovations',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Enterprise IT',
      href: '/services?category=enterprise',
      icon: Building2,
      description: 'Enterprise-grade solutions',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                Z
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg transition-all duration-200 ${
                  item.highlight
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-purple-400" />
              <span className="text-sm">{contactInfo.email}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                    item.highlight
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Categories Dropdown */}
      <AnimatePresence>
        {activeDropdown === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="group p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:scale-105"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}