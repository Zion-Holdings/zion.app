import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, User, ShoppingCart, 
  Zap, Brain, Rocket, Shield, Globe, Cpu, Sparkles,
  Phone, Mail, MapPin, ExternalLink
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
    description: 'Explore our revolutionary micro SAAS solutions',
    icon: <Zap className="w-4 h-4" />,
    children: [
      { name: 'AI & Machine Learning', href: '/services?category=AI & Machine Learning' },
      { name: 'Quantum Computing', href: '/services?category=Quantum Computing & AI' },
      { name: 'Cybersecurity', href: '/services?category=Cybersecurity' },
      { name: 'Manufacturing', href: '/services?category=Manufacturing & Industry 4.0' },
      { name: 'Healthcare', href: '/services?category=Healthcare & Biotechnology' },
      { name: 'Space Technology', href: '/services?category=Space Technology & Aerospace' },
      { name: 'Metaverse', href: '/services?category=Metaverse & VR/AR' },
      { name: 'View All Services', href: '/services' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    description: 'Industry-specific solutions and use cases',
    icon: <Brain className="w-4 h-4" />,
    children: [
      { name: 'Enterprise Solutions', href: '/solutions?type=enterprise' },
      { name: 'Startup Solutions', href: '/solutions?type=startup' },
      { name: 'Government Solutions', href: '/solutions?type=government' },
      { name: 'Healthcare Solutions', href: '/solutions?type=healthcare' },
      { name: 'Financial Solutions', href: '/solutions?type=financial' },
      { name: 'Manufacturing Solutions', href: '/solutions?type=manufacturing' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    description: 'Revolutionary micro SAAS platform',
    icon: <Rocket className="w-4 h-4" />,
    children: [
      { name: 'Platform Overview', href: '/micro-saas' },
      { name: 'Service Categories', href: '/micro-saas#categories' },
      { name: 'Pricing Plans', href: '/pricing' },
      { name: 'Success Stories', href: '/case-studies' },
      { name: 'API Documentation', href: '/docs' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    description: 'Knowledge base and learning materials',
    icon: <Globe className="w-4 h-4" />,
    children: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/docs/api' },
      { name: 'Tutorials', href: '/resources#tutorials' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Webinars', href: '/resources#webinars' }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    description: 'Learn about Zion Tech Group',
    icon: <Shield className="w-4 h-4" />,
    children: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Updates', href: '/news' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Support', href: '/support' }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function FuturisticNavigation() {
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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg blur opacity-30 animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Revolutionary Micro SAAS</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-sm font-semibold text-cyan-400">{item.name}</h3>
                          <p className="text-xs text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200" />
                              <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors duration-200">
                                {child.name}
                              </span>
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
            <Link
              href="/pricing"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full text-left p-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 mt-2 space-y-2"
                    >
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block p-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-cyan-500/20">
                <Link
                  href="/pricing"
                  className="block p-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="block mt-2 p-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}