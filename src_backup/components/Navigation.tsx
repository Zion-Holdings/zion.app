import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, 
  Home, Users, Code, Shield, 
  Brain, Rocket, Globe, Phone
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { 
      name: 'Services', 
      href: '#',
      icon: Code,
      submenu: [
        { name: 'AI Solutions', href: '/services/ai-solutions' },
        { name: 'Quantum Security', href: '/services/quantum-security' },
        { name: 'DevOps Platform', href: '/services/devops-platform' },
        { name: 'Emerging Tech', href: '/services/emerging-tech' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '#',
      icon: Brain,
      submenu: [
        { name: 'Business Intelligence', href: '/solutions/business-intelligence' },
        { name: 'Cybersecurity', href: '/solutions/cybersecurity' },
        { name: 'Automation', href: '/solutions/automation' },
        { name: 'Research & Development', href: '/solutions/research-development' }
      ]
    },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>
            <span className="text-white font-bold text-xl">ZionTech Group</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-gray-300 font-medium">
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </div>
                      <div className="ml-6 space-y-2">
                        {item.submenu.map((subitem) => (
                          <a
                            key={subitem.name}
                            href={subitem.href}
                            className="block text-sm text-gray-400 hover:text-white transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4">
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
};

export default Navigation;