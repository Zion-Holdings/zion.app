import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Sparkles, Zap, Brain, 
  Rocket, Globe, Shield, Cpu, Star, Home,
  Briefcase, Users, BookOpen, Phone, Mail
} from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
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

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Services',
      href: '/services',
      icon: Briefcase,
      dropdown: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'AI-powered solutions' },
        { name: 'IT Services', href: '/it-services', icon: Cpu, description: 'Enterprise IT solutions' },
        { name: 'Quantum Services', href: '/quantum-services', icon: Zap, description: 'Quantum computing' },
        { name: 'Space Technology', href: '/space-technology', icon: Rocket, description: 'Space solutions' },
        { name: 'Biotech AI', href: '/biotech-ai', icon: Shield, description: 'Healthcare AI' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Globe,
      dropdown: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Briefcase, description: 'Large scale solutions' },
        { name: 'Startups', href: '/solutions/startups', icon: Rocket, description: 'Growth solutions' },
        { name: 'Government', href: '/solutions/government', icon: Shield, description: 'Public sector' },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Brain, description: 'Medical solutions' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: BookOpen,
      dropdown: [
        { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical guides' },
        { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Latest insights' },
        { name: 'Case Studies', href: '/case-studies', icon: Star, description: 'Success stories' },
        { name: 'API Reference', href: '/api', icon: Cpu, description: 'Developer tools' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
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
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-500/20' 
            : 'bg-transparent'
        }`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 animate-pulse" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">Innovation at Light Speed</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 group"
                          >
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                              <dropdownItem.icon className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div>
                              <p className="text-white font-medium">{dropdownItem.name}</p>
                              <p className="text-xs text-gray-400">{dropdownItem.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+13024640950"
                className="px-4 py-2 text-cyan-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Call Now</span>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Get Started
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-lg font-bold text-white">Zion Tech Group</h2>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3 p-3 text-gray-300">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <div className="ml-8 space-y-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center space-x-3 p-2 text-gray-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
                              >
                                <dropdownItem.icon className="w-4 h-4" />
                                <span className="text-sm">{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg">
                  <h3 className="text-sm font-semibold text-cyan-400 mb-3">Contact Information</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors duration-300">
                        {contactInfo.mobile}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors duration-300">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="mt-6">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 text-center block shadow-lg shadow-cyan-500/25"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Contact Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed bottom-6 right-6 z-40 lg:hidden"
      >
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:+13024640950"
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
        >
          <Phone className="w-6 h-6 text-white" />
        </motion.a>
      </motion.div>
    </>
  );
};

export default EnhancedNavigation;