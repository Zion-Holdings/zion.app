import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Sparkles, ChevronDown, Globe, Cpu, Brain, Rocket, Shield, Database, Atom, Eye, Sparkles as SparklesIcon } from 'lucide-react';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      description: '100+ Real Micro SaaS Solutions',
      icon: <Zap className="w-5 h-5" />,
      children: [
        { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning', icon: <Brain className="w-4 h-4" /> },
        { name: 'Blockchain & Web3', href: '/services?category=Blockchain%20%26%20Web3', icon: <Globe className="w-4 h-4" /> },
        { name: 'AR/VR & Metaverse', href: '/services?category=AR%2FVR%20%26%20Metaverse', icon: <Eye className="w-4 h-4" /> },
        { name: 'IoT & Smart Cities', href: '/services?category=IoT%20%26%20Smart%20Cities', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Quantum Computing', href: '/services?category=Quantum%20Computing', icon: <Atom className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/services?category=Cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'Data Analytics', href: '/services?category=Data%20Analytics%20%26%20BI', icon: <Database className="w-4 h-4" /> },
        { name: 'View All Services', href: '/services', icon: <SparklesIcon className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Solutions',
      href: '/case-studies',
      description: 'Industry-Specific Solutions',
      icon: <Sparkles className="w-5 h-5" />,
      children: [
        { name: 'Case Studies', href: '/case-studies', icon: <Database className="w-4 h-4" /> },
        { name: 'Cloud Platform', href: '/cloud-platform', icon: <Globe className="w-4 h-4" /> },
        { name: 'AI Assistant', href: '/ai-assistant', icon: <Brain className="w-4 h-4" /> },
        { name: 'Analytics', href: '/analytics', icon: <Database className="w-4 h-4" /> },
        { name: 'Automation', href: '/automation', icon: <Cpu className="w-4 h-4" /> }
      ]
    },
    { name: 'Micro SaaS', href: '/micro-saas', icon: <Rocket className="w-5 h-5" /> },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com'
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Enhanced Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-7 h-7 text-white" />
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </motion.div>
            <div className="hidden sm:block">
              <motion.div 
                className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Zion Tech Group
              </motion.div>
              <motion.div 
                className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Revolutionary Technology Solutions
              </motion.div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <motion.div
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer py-2 relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    
                    {/* Enhanced Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="text-sm text-gray-400 mb-3">{item.description}</div>
                            <div className="space-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="flex items-center space-x-3 p-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                                >
                                  <div className="text-gray-500 group-hover:text-cyan-400 transition-colors">
                                    {child.icon}
                                  </div>
                                  <span className="font-medium">{child.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors py-2 font-medium relative group"
                  >
                    <span>{item.name}</span>
                    {/* Hover underline effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started
                <Rocket className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </motion.div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 mt-4 rounded-2xl overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <div className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        <div className="ml-6 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block p-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="flex items-center space-x-3">
                                <div className="text-gray-500">{child.icon}</div>
                                <span>{child.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-lg font-semibold text-gray-300 hover:text-white transition-colors py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-700/50">
                  <Button
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                    <Rocket className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;