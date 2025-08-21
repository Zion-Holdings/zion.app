import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Zap, 
  Brain, 
  Globe, 
  Shield, 
  Cloud, 
  Bot,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Services',
    href: '/services',
    description: 'Explore our complete portfolio',
    icon: <Zap className="w-4 h-4" />,
    children: [
      { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning' },
      { name: 'Quantum Computing', href: '/services?category=Quantum%20Computing' },
      { name: 'Blockchain & Web3', href: '/services?category=Blockchain%20%26%20Web3' },
      { name: 'Cybersecurity', href: '/services?category=Cybersecurity' },
      { name: 'IoT & Smart Cities', href: '/services?category=IoT%20%26%20Smart%20Cities' },
      { name: 'Emerging Technologies', href: '/services?category=Emerging%20Technologies' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    description: 'Industry-specific solutions',
    icon: <Brain className="w-4 h-4" />,
    children: [
      { name: 'Enterprise AI', href: '/solutions/enterprise-ai' },
      { name: 'Healthcare Tech', href: '/solutions/healthcare' },
      { name: 'Financial Services', href: '/solutions/financial' },
      { name: 'Smart Cities', href: '/solutions/smart-cities' },
      { name: 'Manufacturing', href: '/solutions/manufacturing' }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    description: 'Learn about Zion Tech Group',
    icon: <Globe className="w-4 h-4" />,
    children: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership', href: '/about#leadership' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Media', href: '/news' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    description: 'Knowledge and tools',
    icon: <Cloud className="w-4 h-4" />,
    children: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Support', href: '/support' }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg blur-lg opacity-50 animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  {item.icon && <span className="text-cyan-400">{item.icon}</span>}
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-sm font-semibold text-cyan-400">{item.name}</h3>
                          {item.description && (
                            <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                              onClick={closeMenu}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="flex items-center space-x-2">
                      {item.icon && <span className="text-cyan-400">{item.icon}</span>}
                      <span>{item.name}</span>
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        className="ml-6 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-500/20">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs">{contactInfo.address}</span>
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