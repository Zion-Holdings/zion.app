import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Globe, 
  Brain, Rocket, Shield, Zap, Cpu,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

interface UltraFuturisticNavigationProps {
  className?: string;
}

const UltraFuturisticNavigation: React.FC<UltraFuturisticNavigationProps> = ({ className = '' }) => {
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
      name: 'Services',
      href: '/services',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { name: 'Innovative Services', href: '/innovative-services', icon: <Rocket className="w-4 h-4" /> },
        { name: 'AI Services', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
        { name: 'IT Services', href: '/it-services', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Quantum Services', href: '/quantum-services', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Security Services', href: '/security-services', icon: <Shield className="w-4 h-4" /> },
        { name: 'All Services', href: '/services', icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: <Rocket className="w-4 h-4" />,
      dropdown: [
        { name: 'Enterprise Solutions', href: '/enterprise-solutions', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Startup Solutions', href: '/startup-solutions', icon: <Zap className="w-4 h-4" /> },
        { name: 'Government Solutions', href: '/government-solutions', icon: <Shield className="w-4 h-4" /> },
        { name: 'Healthcare Solutions', href: '/healthcare-solutions', icon: <Brain className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'Documentation', href: '/docs', icon: <Globe className="w-4 h-4" /> },
        { name: 'API Reference', href: '/api', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Blog', href: '/blog', icon: <Brain className="w-4 h-4" /> },
        { name: 'Case Studies', href: '/case-studies', icon: <Rocket className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { name: 'About Us', href: '/about', icon: <Globe className="w-4 h-4" /> },
        { name: 'Careers', href: '/careers', icon: <Brain className="w-4 h-4" /> },
        { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
        { name: 'Support', href: '/support', icon: <Shield className="w-4 h-4" /> }
      ]
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,0.1)]' 
          : 'bg-transparent'
      } ${className}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">Zion Tech Group</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <motion.button
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  whileHover={{ y: -2 }}
                  onHoverStart={() => setActiveDropdown(item.name)}
                  onHoverEnd={() => setActiveDropdown(null)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </motion.button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.2)] overflow-hidden"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2">
                        {item.dropdown?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group"
                          >
                            <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                              {dropdownItem.icon}
                            </div>
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side - Search and Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Contact Info */}
            <motion.div
              className="flex items-center space-x-4 text-sm text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center space-x-2 hover:text-cyan-400 transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:block">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-cyan-400 transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:block">{contactInfo.email}</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
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
                    className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                  
                  {/* Mobile dropdown */}
                  {item.dropdown && (
                    <div className="ml-6 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.icon}
                          <span className="text-sm">{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile contact info */}
              <div className="pt-4 border-t border-gray-700/50">
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs">{contactInfo.address}</span>
                  </div>
                </div>
                
                <motion.button
                  className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating contact bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20 backdrop-blur-sm"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-xs text-cyan-300">
            <div className="flex items-center space-x-4">
              <span>📱 {contactInfo.mobile}</span>
              <span>✉️ {contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📍 {contactInfo.address}</span>
              <a 
                href={contactInfo.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-white transition-colors"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default UltraFuturisticNavigation;