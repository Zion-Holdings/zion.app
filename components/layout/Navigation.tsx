import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Globe, Brain, Rocket, FlaskConical, 
  DollarSign, Factory, Shield, Users, BarChart3, BookOpen,
  Phone, Mail, MapPin, ExternalLink, Atom
} from 'lucide-react';

const Navigation: React.FC = () => {
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

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=AI', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Computing', href: '/services?category=Quantum', icon: <Atom className="w-4 h-4" /> },
        { name: 'Autonomous Systems', href: '/services?category=Autonomous', icon: <Factory className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/services?category=Space', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Healthcare & Biotech', href: '/services?category=Healthcare', icon: <FlaskConical className="w-4 h-4" /> },
        { name: 'Quantum Finance', href: '/services?category=Finance', icon: <DollarSign className="w-4 h-4" /> },
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas',
      icon: <BarChart3 className="w-4 h-4" />,
      dropdown: [
        { name: 'All Services', href: '/micro-saas', icon: <Globe className="w-4 h-4" /> },
        { name: 'Popular Services', href: '/micro-saas?sort=popularity', icon: <Users className="w-4 h-4" /> },
        { name: 'New Launches', href: '/micro-saas?sort=date', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Enterprise Solutions', href: '/micro-saas?category=Enterprise', icon: <Shield className="w-4 h-4" /> },
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: <BookOpen className="w-4 h-4" />,
      dropdown: [
        { name: 'Documentation', href: '/docs', icon: <BookOpen className="w-4 h-4" /> },
        { name: 'Case Studies', href: '/case-studies', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'Blog', href: '/blog', icon: <BookOpen className="w-4 h-4" /> },
        { name: 'News', href: '/news', icon: <Globe className="w-4 h-4" /> },
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />,
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Phone className="w-4 h-4" />,
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <motion.button
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  whileHover={{ y: -2 }}
                  onHoverStart={() => setActiveDropdown(item.name)}
                  onHoverEnd={() => setActiveDropdown(null)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </motion.button>

                {/* Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-all duration-200 group/item"
                            >
                              <div className="text-cyan-400 group-hover/item:text-cyan-300">
                                {dropdownItem.icon}
                              </div>
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href={`tel:${contactInfo.mobile}`}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{contactInfo.mobile}</span>
            </motion.a>
            
            <motion.a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">{contactInfo.email}</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
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
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                  
                  {item.dropdown && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 text-gray-400 hover:text-gray-200 transition-colors duration-200 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.icon}
                          <span className="text-sm">{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-3">
                <div className="flex items-center space-x-3 text-cyan-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-purple-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-400">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.website}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;