import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Rocket } from 'lucide-react';

export default function UltraAdvancedNavigation2026V4() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Services',
      href: '#',
      dropdown: [
        { name: 'AI & Machine Learning', href: '/ai-services', icon: Brain, description: 'Advanced AI solutions for modern businesses' },
        { name: 'Quantum Technology', href: '/quantum-services', icon: Zap, description: 'Next-generation quantum computing services' },
        { name: 'Enterprise IT', href: '/enterprise-it', icon: Rocket, description: 'Comprehensive enterprise solutions' },
        { name: 'Micro SAAS', href: '/micro-saas', description: 'Innovative micro software solutions' },
        { name: 'All Services', href: '/enhanced-2026-services-showcase-v4', description: 'Complete service catalog' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'Cybersecurity', href: '/cybersecurity', description: 'Advanced security solutions' },
        { name: 'Cloud Migration', href: '/cloud-platform', description: 'Seamless cloud transformation' },
        { name: 'Digital Transformation', href: '/automation', description: 'Complete digital overhaul' },
        { name: 'Data Analytics', href: '/analytics', description: 'Insights-driven decisions' }
      ]
    },
    {
      name: 'Company',
      href: '#',
      dropdown: [
        { name: 'About Us', href: '/about', description: 'Learn about our mission' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'News', href: '/news', description: 'Latest updates' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        { name: 'Documentation', href: '/docs', description: 'Technical guides' },
        { name: 'Blog', href: '/blog', description: 'Industry insights' },
        { name: 'Support', href: '/support', description: 'Get help' },
        { name: 'Contact', href: '/contact', description: 'Reach out to us' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech
              </Link>
              <div className="text-xs text-gray-400 -mt-1">2026 Technology</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                >
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        {item.dropdown?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                          >
                            {dropdownItem.icon && (
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <dropdownItem.icon className="w-4 h-4 text-purple-400" />
                              </div>
                            )}
                            <div className="flex-1">
                              <div className="font-medium text-white group-hover:text-purple-400 transition-colors">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-gray-400 mt-1">
                                {dropdownItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Contact and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-1 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-1 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.email}</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
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
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-6">
                {/* Mobile Navigation Items */}
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <div className="text-lg font-semibold text-white mb-3">{item.name}</div>
                    <div className="space-y-2 ml-4">
                      {item.dropdown?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-gray-300 hover:text-white transition-colors py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Mobile Contact Info */}
                <div className="pt-6 border-t border-white/10">
                  <div className="space-y-3 text-gray-300">
                    <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                      <span>{contactInfo.phone}</span>
                    </a>
                    <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>{contactInfo.email}</span>
                    </a>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 mt-0.5" />
                      <span className="text-sm">{contactInfo.address}</span>
                    </div>
                  </div>
                  
                  {/* Mobile CTA */}
                  <Link
                    href="/contact"
                    className="block w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg text-center transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}