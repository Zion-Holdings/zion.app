import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, 
  Brain, Zap, Rocket, Dna, DollarSign, 
  Lock, Globe, Wifi, Truck, Gamepad2, 
  Bot, Factory, Car, Home, Users, 
  FileText, Phone, Mail
} from 'lucide-react';
import Link from 'next/link';

const UltraAdvancedNavigation: React.FC = () => {
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

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: <Home className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Computing', href: '/services?category=quantum', icon: <Zap className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/services?category=space', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Biotech & Healthcare', href: '/services?category=biotech', icon: <Dna className="w-4 h-4" /> },
        { name: 'Financial Services', href: '/services?category=finance', icon: <DollarSign className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/services?category=security', icon: <Lock className="w-4 h-4" /> },
        { name: 'Internet & Network', href: '/services?category=internet', icon: <Globe className="w-4 h-4" /> },
        { name: 'IoT & Smart Devices', href: '/services?category=iot', icon: <Wifi className="w-4 h-4" /> },
        { name: 'Logistics & Supply Chain', href: '/services?category=logistics', icon: <Truck className="w-4 h-4" /> },
        { name: 'Metaverse & Gaming', href: '/services?category=metaverse', icon: <Gamepad2 className="w-4 h-4" /> },
        { name: 'Robotics & Automation', href: '/services?category=robotics', icon: <Bot className="w-4 h-4" /> },
        { name: 'Manufacturing', href: '/services?category=manufacturing', icon: <Factory className="w-4 h-4" /> },
        { name: 'Autonomous Vehicles', href: '/services?category=vehicles', icon: <Car className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300 group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="flex items-center space-x-1">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-all duration-300 group"
                                >
                                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                                    {dropdownItem.icon}
                                  </div>
                                  <span className="font-medium">{dropdownItem.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="/contact"
              className="flex items-center space-x-2 px-4 py-2 text-cyan-400 hover:text-white border border-cyan-400 hover:bg-cyan-400 rounded-lg transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              <span>Get Started</span>
            </motion.a>
            
            <motion.a
              href="/services"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-lg hover:bg-cyan-500/10"
                      >
                        <span className="flex items-center space-x-2">
                          {item.icon}
                          <span className="font-medium">{item.name}</span>
                        </span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            className="ml-6 mt-2 space-y-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center space-x-3 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-cyan-500/10 transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.icon}
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-lg hover:bg-cyan-500/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Mail className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
                
                <Link
                  href="/services"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default UltraAdvancedNavigation;