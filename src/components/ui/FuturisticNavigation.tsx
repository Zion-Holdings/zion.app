import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Home, Briefcase, Users, Phone, Globe, 
  Zap, Brain, Shield, Rocket, Star, ChevronDown
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: <Home className="w-5 h-5" />,
    description: 'Welcome to the future'
  },
  {
    name: 'Services',
    href: '/services',
    icon: <Briefcase className="w-5 h-5" />,
    description: 'Our revolutionary solutions',
    children: [
      { name: 'AI & Automation', href: '/services/ai-automation', icon: <Brain className="w-4 h-4" /> },
      { name: 'Micro SaaS', href: '/services/micro-saas', icon: <Zap className="w-4 h-4" /> },
      { name: 'Cloud & Infrastructure', href: '/services/cloud-infrastructure', icon: <Globe className="w-4 h-4" /> },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: <Shield className="w-4 h-4" /> },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: <Rocket className="w-4 h-4" /> }
    ]
  },
  {
    name: 'About',
    href: '/about',
    icon: <Users className="w-5 h-5" />,
    description: 'Our mission and vision'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Phone className="w-5 h-5" />,
    description: 'Get in touch with us'
  }
];

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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-blue-900/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-25 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-400">Future Technology Solutions</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group-hover:text-cyan-400"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </motion.button>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10"
                  >
                    <div className="p-4 space-y-2">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
                        >
                          {child.icon}
                          <span>{child.name}</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              Get Started
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 p-3 rounded-lg hover:bg-cyan-500/10"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                  {item.children && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={closeMenu}
                          className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-lg hover:bg-cyan-500/10"
                        >
                          {child.icon}
                          <span className="text-sm">{child.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-cyan-500/20">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}