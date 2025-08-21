import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin,
  Brain, Rocket, Dna, Globe, Shield, Wifi, Package,
  Bot, Car, Building2, DollarSign, Monitor, Users
} from 'lucide-react';
import Link from 'next/link';

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

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: null
    },
    {
      name: 'Services',
      href: '#',
      icon: null,
      dropdown: [
        {
          name: 'Quantum AI & Neuroscience',
          href: '/quantum-ai-brain-computer-interface',
          icon: Brain,
          description: 'Direct neural interface with quantum AI'
        },
        {
          name: 'Space Technology',
          href: '/space-technology',
          icon: Rocket,
          description: 'Complete space mission management'
        },
        {
          name: 'Biotech AI',
          href: '/biotech-ai',
          icon: Dna,
          description: 'AI-powered drug discovery platform'
        },
        {
          name: 'Metaverse AI',
          href: '/metaverse-ai-development-platform',
          icon: Globe,
          description: 'AI-powered metaverse creation'
        },
        {
          name: 'Quantum Finance',
          href: '/quantum-financial-trading-platform',
          icon: DollarSign,
          description: 'Quantum AI-powered trading'
        },
        {
          name: 'Quantum Cybersecurity',
          href: '/quantum-cybersecurity-platform',
          icon: Shield,
          description: 'Quantum-resistant security'
        },
        {
          name: 'Quantum IoT',
          href: '/quantum-iot-platform',
          icon: Wifi,
          description: 'Quantum-secured IoT platform'
        },
        {
          name: 'Quantum Logistics',
          href: '/quantum-logistics-platform',
          icon: Package,
          description: 'AI-optimized logistics'
        },
        {
          name: 'Quantum Robotics',
          href: '/quantum-robotics-platform',
          icon: Bot,
          description: 'AI-powered robotics'
        },
        {
          name: 'Autonomous Vehicles',
          href: '/autonomous-vehicle-ai-platform',
          icon: Car,
          description: 'AI-powered autonomous driving'
        },
        {
          name: 'Autonomous Manufacturing',
          href: '/autonomous-manufacturing-platform',
          icon: Building2,
          description: 'AI-powered manufacturing'
        },
        {
          name: 'AI Services',
          href: '/ai-services',
          icon: Brain,
          description: 'LLM, RAG, MLOps solutions'
        },
        {
          name: 'IT Services',
          href: '/it-services',
          icon: Monitor,
          description: 'Cloud, DevOps, SRE'
        },
        {
          name: 'HR & Legal AI',
          href: '/ai-hr-recruitment-platform',
          icon: Users,
          description: 'AI-powered HR and legal'
        }
      ]
    },
    {
      name: 'Innovative Services',
      href: '/innovative-services-showcase',
      icon: null
    },
    {
      name: 'About',
      href: '/about',
      icon: null
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: null
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">Z</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-xl lg:text-2xl">Zion Tech Group</div>
                <div className="text-cyan-400 text-xs lg:text-sm">Revolutionary Innovation</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <div className="relative">
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
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
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => {
                                const Icon = dropdownItem.icon;
                                return (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 group"
                                  >
                                    {Icon && (
                                      <Icon className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:text-purple-400 transition-colors" />
                                    )}
                                    <div>
                                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                        {dropdownItem.name}
                                      </div>
                                      <div className="text-gray-400 text-sm">
                                        {dropdownItem.description}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{contactInfo.mobile}</span>
            </div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-gray-400 text-sm font-medium mb-2">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.slice(0, 6).map((dropdownItem) => {
                          const Icon = dropdownItem.icon;
                          return (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {Icon && <Icon className="w-4 h-4 text-cyan-400" />}
                              <span className="text-sm">{dropdownItem.name}</span>
                            </Link>
                          );
                        })}
                        <Link
                          href="/innovative-services-showcase"
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700/50">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm text-xs">{contactInfo.address}</span>
                  </div>
                </div>
                
                <Link
                  href="/contact"
                  className="mt-4 block w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation;