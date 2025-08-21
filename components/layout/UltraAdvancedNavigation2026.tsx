import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Star, Brain, Zap, Shield, Globe, Cpu } from 'lucide-react';
import { cuttingEdgeInnovationServices } from '../../data/2026-cutting-edge-innovations';
import { enterpriseSolutions2026 } from '../../data/2026-enterprise-solutions';
import { specializedSolutions2026 } from '../../data/2026-specialized-solutions';

const UltraAdvancedNavigation2026: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Combine all services for navigation
  const allServices = [
    ...cuttingEdgeInnovationServices,
    ...enterpriseSolutions2026,
    ...specializedSolutions2026
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIconComponent = (icon: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      '🧠⚛️': Brain,
      '🧠☁️': Cpu,
      '🧬💻': Cpu,
      '🛰️⚛️': Globe,
      '🛰️🚨': Shield,
      '🔒⚛️': Shield,
      '🤖🧠': Zap,
      '🌐🥽': Globe,
      '🌐⚡': Cpu,
      '😊🧠': Brain,
      '🎨✍️🎵': Star,
      '🔒🛡️': Shield,
      '🧬🔬': Cpu,
      '🛰️📡': Globe,
      '🚨🔍': Shield,
      '🧠💙': Brain
    };
    return iconMap[icon] || Star;
  };

  const navigationItems = [
    {
      name: 'AI Services',
      href: '/ai-services',
      dropdown: allServices.filter(service => service.category.includes('AI')),
      icon: Brain
    },
    {
      name: 'Quantum Tech',
      href: '/quantum-services',
      dropdown: allServices.filter(service => service.category.includes('Quantum')),
      icon: Zap
    },
    {
      name: 'Emerging Tech',
      href: '/emerging-tech',
      dropdown: allServices.filter(service => service.category.includes('Emerging')),
      icon: Globe
    },
    {
      name: 'IT Solutions',
      href: '/it-solutions',
      dropdown: allServices.filter(service => service.category.includes('IT')),
      icon: Cpu
    },
    {
      name: 'Space Tech',
      href: '/space-tech',
      dropdown: allServices.filter(service => service.category.includes('Space')),
      icon: Globe
    }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-gray-700/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Star className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">2026 Revolutionary Technology</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-4">
                        <div className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          {item.name}
                        </div>
                        <div className="space-y-2">
                          {item.dropdown.slice(0, 6).map((service) => {
                            const IconComponent = getIconComponent(service.icon);
                            return (
                              <a
                                key={service.id}
                                href={service.link}
                                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 group"
                              >
                                <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200 truncate">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-400 truncate">
                                    {service.tagline}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-bold text-cyan-400">
                                    {service.price}
                                  </div>
                                  {service.popular && (
                                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-semibold rounded-full mt-1">
                                      <Star className="w-2 h-2" />
                                      Popular
                                    </div>
                                  )}
                                </div>
                              </a>
                            );
                          })}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700/50">
                          <a
                            href={item.href}
                            className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 text-sm font-medium"
                          >
                            View All {item.name}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <a
              href="/pricing"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Pricing
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              About
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <motion.button
              className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Contact Button */}
            <motion.a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-700/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center space-x-3 text-gray-300 font-medium mb-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </div>
                  <div className="ml-8 space-y-2">
                    {item.dropdown.slice(0, 3).map((service) => (
                      <a
                        key={service.id}
                        href={service.link}
                        className="block p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <div className="text-sm font-medium text-white">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.tagline}</div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-700/50 space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-6">
                <a
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default UltraAdvancedNavigation2026;