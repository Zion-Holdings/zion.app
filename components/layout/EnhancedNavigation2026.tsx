import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin } from 'lucide-react';

export default function EnhancedNavigation2026() {
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
      dropdown: [
        { name: 'AI Services', href: '/ai-services', icon: '🤖' },
        { name: 'IT Solutions', href: '/it-services', icon: '💻' },
        { name: 'Micro SAAS', href: '/micro-saas', icon: '🚀' },
        { name: 'Quantum Tech', href: '/quantum-services', icon: '⚛️' },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: '🛡️' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'Enterprise', href: '/enterprise-solutions', icon: '🏢' },
        { name: 'Startups', href: '/startup-solutions', icon: '🚀' },
        { name: 'Healthcare', href: '/healthcare-solutions', icon: '🏥' },
        { name: 'Finance', href: '/finance-solutions', icon: '💰' },
        { name: 'Education', href: '/education-solutions', icon: '🎓' }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      {/* Enhanced Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl font-bold">Z</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Zion Tech Group
                  </div>
                  <div className="text-xs text-slate-400">Innovation 2026</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="relative"
                    >
                      <button className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors duration-200 py-2">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden"
                          >
                            <div className="p-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 group/item"
                                >
                                  <span className="text-lg">{dropdownItem.icon}</span>
                                  <span className="group-hover/item:text-cyan-400 transition-colors">
                                    {dropdownItem.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-white transition-colors duration-200 py-2 relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 shadow-2xl"
            >
              <div className="p-6">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl font-bold">Z</span>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">Zion Tech Group</div>
                      <div className="text-xs text-slate-400">Innovation 2026</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile navigation items */}
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className="space-y-1">
                          <div className="px-3 py-2 text-slate-400 text-sm font-medium uppercase tracking-wider">
                            {item.name}
                          </div>
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 px-6 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                            >
                              <span className="text-lg">{dropdownItem.icon}</span>
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg"
                  >
                    Get Started
                  </motion.button>
                </div>

                {/* Contact info */}
                <div className="mt-6 pt-6 border-t border-slate-700/50 space-y-3">
                  <div className="flex items-center space-x-3 text-slate-400 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-400 text-sm">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-start space-x-3 text-slate-400 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
}