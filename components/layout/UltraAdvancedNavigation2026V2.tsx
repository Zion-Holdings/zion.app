import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const UltraAdvancedNavigation2026V2: React.FC = () => {
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

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Advanced AI solutions' },
        { name: 'IT Services', href: '/it-services', icon: Cloud, description: 'Comprehensive IT solutions' },
        { name: 'Cybersecurity', href: '/security', icon: Shield, description: 'Enterprise security' },
        { name: 'Quantum Computing', href: '/quantum-services', icon: Zap, description: 'Next-gen computing' },
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'Enterprise Solutions', href: '/enterprise-it', icon: Shield, description: 'Large-scale deployments' },
        { name: 'SaaS Platforms', href: '/micro-saas', icon: Cloud, description: 'Micro SaaS solutions' },
        { name: 'Space Technology', href: '/space-tech', icon: Rocket, description: 'Space innovation' },
        { name: 'Biotech AI', href: '/biotech-ai', icon: Brain, description: 'Healthcare AI' },
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/20' 
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
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Zion Tech Group
                </div>
                <div className="text-xs text-purple-300">Revolutionary Technology</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4 shadow-2xl"
                        >
                          <div className="grid grid-cols-1 gap-3">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-purple-500/10 transition-all duration-200 group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-200">
                                  <dropdownItem.icon className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                  <div className="text-white font-medium group-hover:text-purple-300 transition-colors">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-sm text-gray-400">
                                    {dropdownItem.description}
                                  </div>
                                </div>
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
                    className="text-gray-300 hover:text-white transition-colors py-2 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors p-2"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-3"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
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
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block text-gray-400 hover:text-white transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-300 hover:text-white transition-colors py-3"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-purple-500/20">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full space-x-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-purple-500/20 space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default UltraAdvancedNavigation2026V2;