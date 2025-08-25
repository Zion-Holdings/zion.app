import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Home, Rocket, Brain, Globe, Shield, 
  Users, FileText, Phone, ChevronDown, Sparkles,
  Cpu, Database, Lock, Smartphone, Palette
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
    icon: <Rocket className="w-5 h-5" />,
    description: 'Our revolutionary solutions',
    children: [
      { name: 'AI Services', href: '/services#ai', icon: <Brain className="w-4 h-4" /> },
      { name: 'Quantum Tech', href: '/services#quantum', icon: <Cpu className="w-4 h-4" /> },
      { name: 'Space Technology', href: '/services#space', icon: <Globe className="w-4 h-4" /> },
      { name: 'Cybersecurity', href: '/services#security', icon: <Shield className="w-4 h-4" /> },
      { name: 'Biomedical AI', href: '/services#biomedical', icon: <Database className="w-4 h-4" /> },
      { name: 'Metaverse', href: '/services#metaverse', icon: <Palette className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Cpu className="w-5 h-5" />,
    description: '150+ revolutionary services'
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Globe className="w-5 h-5" />,
    description: 'Industry solutions'
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <FileText className="w-5 h-5" />,
    description: 'Knowledge & tools'
  },
  {
    name: 'About',
    href: '/about',
    icon: <Users className="w-5 h-5" />,
    description: 'Our story'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Phone className="w-5 h-5" />,
    description: 'Get in touch'
  }
];

const QuantumNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-cyan-400/70">Future Technology Solutions</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <motion.div
                  className="flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setActiveDropdown(item.name)}
                  onHoverEnd={() => setActiveDropdown(null)}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </motion.div>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-lg shadow-2xl shadow-cyan-500/20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                          onClick={closeMenu}
                        >
                          <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                            {child.icon}
                          </div>
                          <div>
                            <div className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-200">
                              {child.name}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 text-gray-300 hover:text-cyan-400"
                    onClick={closeMenu}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.children && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 text-gray-400 hover:text-cyan-400"
                          onClick={closeMenu}
                        >
                          {child.icon}
                          <span className="text-sm">{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200"
                  onClick={closeMenu}
                >
                  <Rocket className="w-5 h-5 inline mr-2" />
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default QuantumNavigation;