import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, User, 
  Zap, Brain, Cpu, Shield, Rocket, 
  Globe, Phone, Mail, MapPin
} from 'lucide-react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
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
        { name: 'AI & Machine Learning', href: '/ai-services', icon: Brain, description: 'Advanced AI solutions for business' },
        { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Next-generation computing power' },
        { name: 'Cybersecurity', href: '/security', icon: Shield, description: 'Advanced security solutions' },
        { name: 'DevOps & Automation', href: '/devops', icon: Zap, description: 'Streamline your operations' },
        { name: 'Space Technology', href: '/space-technology', icon: Rocket, description: 'Innovative space solutions' },
        { name: 'Healthcare Tech', href: '/ai-healthcare', icon: Brain, description: 'AI-powered healthcare solutions' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'Business Intelligence', href: '/ai-business-intelligence', icon: Brain, description: 'Data-driven insights' },
        { name: 'Supply Chain', href: '/autonomous-supply-chain', icon: Zap, description: 'AI-powered optimization' },
        { name: 'Financial Trading', href: '/quantum-financial-trading', icon: Cpu, description: 'Quantum trading platforms' },
        { name: 'Legal Tech', href: '/ai-legal-assistant', icon: Shield, description: 'AI legal assistance' },
        { name: 'Metaverse', href: '/metaverse-platform', icon: Globe, description: '3D world building' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-bold text-white">Zion Tech</div>
                <div className="text-xs lg:text-sm text-blue-400 font-medium">Group</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <dropdownItem.icon className="w-4 h-4 text-blue-400" />
                              </div>
                              <div>
                                <div className="text-white font-medium group-hover:text-blue-400 transition-colors duration-200">
                                  {dropdownItem.name}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {dropdownItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>

              {/* Contact Info */}
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="hidden xl:inline">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="hidden xl:inline">{contactInfo.email}</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Zion Tech</div>
                    <div className="text-xs text-blue-400 font-medium">Group</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <div className="text-lg font-semibold text-white mb-3">{item.name}</div>
                          <div className="space-y-2 ml-4">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                                    <dropdownItem.icon className="w-4 h-4 text-blue-400" />
                                  </div>
                                  <div>
                                    <div className="text-white font-medium">{dropdownItem.name}</div>
                                    <div className="text-sm text-gray-400">{dropdownItem.description}</div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block text-lg font-semibold text-white hover:text-blue-400 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-800/50">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span>{contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="w-5 h-5 text-purple-400" />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <MapPin className="w-5 h-5 text-green-400" />
                      <span className="text-sm">{contactInfo.address}</span>
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <Link
                    href="/contact"
                    className="block w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
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
    </>
  );
};

export default EnhancedNavigation;