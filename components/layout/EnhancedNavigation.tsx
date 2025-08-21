import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, 
  Zap, Brain, Factory, FlaskConical, Rocket, Shield,
  Globe, Phone, Mail, MapPin
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
  badge?: string;
}

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const navigationItems: NavigationItem[] = [
    {
      name: 'Home',
      href: '/',
      description: 'Welcome to Zion Tech Group',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      description: 'Our comprehensive service portfolio',
      icon: <Zap className="w-4 h-4" />,
      children: [
        {
          name: 'Quantum AI & Computing',
          href: '/services#quantum',
          description: 'Revolutionary quantum computing solutions',
          icon: <Brain className="w-4 h-4" />,
          badge: 'New'
        },
        {
          name: 'Autonomous Systems',
          href: '/services#autonomous',
          description: 'AI-powered manufacturing & robotics',
          icon: <Factory className="w-4 h-4" />,
          badge: 'Hot'
        },
        {
          name: 'Healthcare & Biotech',
          href: '/services#healthcare',
          description: 'AI-driven biomedical research',
          icon: <FlaskConical className="w-4 h-4" />
        },
        {
          name: 'Space Technology',
          href: '/services#space',
          description: 'AI space exploration platforms',
          icon: <Rocket className="w-4 h-4" />
        },
        {
          name: 'Cybersecurity',
          href: '/services#cybersecurity',
          description: 'Quantum-resistant security solutions',
          icon: <Shield className="w-4 h-4" />
        }
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas',
      description: '500+ innovative micro services',
      icon: <Zap className="w-4 h-4" />,
      badge: '500+'
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      description: 'Success stories & implementations',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'Resources',
      href: '/resources',
      description: 'Documentation & learning materials',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      description: 'Learn about Zion Tech Group',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      description: 'Get in touch with our team',
      icon: <Globe className="w-4 h-4" />
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
                            if (navRef.current && !navRef.current.contains(event.target as any)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Enhanced background with quantum effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-cyan-900/20 to-purple-900/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/40" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-6 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full"
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-slate-400">Innovation at Quantum Speed</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-1 text-slate-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-700/50 transition-colors duration-200 group"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <p className="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors duration-200">
                                    {child.name}
                                  </p>
                                  {child.badge && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                {child.description && (
                                  <p className="text-xs text-slate-400 mt-1">
                                    {child.description}
                                  </p>
                                )}
                              </div>
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

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Contact info */}
            <div className="flex items-center space-x-4 text-sm text-slate-400">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.email}</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-800/95 backdrop-blur-xl border-t border-cyan-400/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left p-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="flex items-center space-x-2">
                                  {child.icon}
                                  <span>{child.name}</span>
                                  {child.badge && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block p-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center space-x-2">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile contact info */}
              <div className="pt-4 border-t border-slate-700 space-y-3">
                <div className="flex items-center space-x-2 text-slate-400">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation;