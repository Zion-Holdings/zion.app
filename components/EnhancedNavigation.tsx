import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Menu, X, ChevronDown, Search, User, ShoppingCart,
  Brain, Shield, Rocket, Cpu, Database, Atom
} from 'lucide-react';

const EnhancedNavigation = () => {
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

  const services = [
    { name: 'AI Solutions', icon: Brain, href: '/ai-solutions' },
    { name: 'Quantum Security', icon: Shield, href: '/quantum-security' },
    { name: 'Space Tech', icon: Rocket, href: '/space-technology' },
    { name: 'DevOps', icon: Cpu, href: '/devops' },
    { name: 'Edge Computing', icon: Database, href: '/edge-computing' },
    { name: 'Neural Networks', icon: Atom, href: '/neural-networks' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors duration-200 py-2"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-2xl"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                          >
                            <service.icon className="w-5 h-5 text-blue-400" />
                            <span className="text-white/90 text-sm">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors duration-200 py-2"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-2xl"
                    onMouseEnter={() => setActiveDropdown('company')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-2">
                      {company.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-white/90 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors duration-200 text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors duration-200 py-2"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-2xl"
                    onMouseEnter={() => setActiveDropdown('resources')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-2">
                      {resources.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-white/90 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors duration-200 text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/pricing" className="text-white/80 hover:text-white transition-colors duration-200">
              Pricing
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-white/80 hover:text-white transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/login"
              className="px-4 py-2 text-white/80 hover:text-white transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
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
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Services */}
              <div>
                <h3 className="text-white/60 text-sm font-medium mb-2">Services</h3>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-2 p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4 text-blue-400" />
                      <span className="text-white/90 text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Company */}
              <div>
                <h3 className="text-white/60 text-sm font-medium mb-2">Company</h3>
                <div className="space-y-1">
                  {company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-white/90 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-200 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Resources */}
              <div>
                <h3 className="text-white/60 text-sm font-medium mb-2">Resources</h3>
                <div className="space-y-1">
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-white/90 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-200 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-slate-700/50">
                <div className="flex flex-col space-y-3">
                  <Link
                    href="/pricing"
                    className="px-4 py-2 text-white/80 hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 text-white/80 hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/login"
                    className="px-4 py-2 text-white/80 hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/get-started"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full text-white font-medium text-center transition-all duration-300"
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
};

export default EnhancedNavigation;