import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, User, Phone, Mail, MapPin,
  Brain, Atom, Shield, Rocket, Cpu, Database, Target, Star
} from 'lucide-react';

const Navigation: React.FC = () => {
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const services = [
    {
      name: 'AI & Consciousness',
      icon: Brain,
      href: '/ai-services',
      description: 'Advanced AI consciousness and evolution platforms'
    },
    {
      name: 'Quantum Technology',
      icon: Atom,
      href: '/quantum-services',
      description: 'Quantum computing and quantum AI solutions'
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      href: '/cybersecurity',
      description: 'Quantum-resistant security and AI protection'
    },
    {
      name: 'Business Solutions',
      icon: Target,
      href: '/business-solutions',
      description: 'AI-powered business intelligence and automation'
    },
    {
      name: 'IT Infrastructure',
      icon: Cpu,
      href: '/it-infrastructure',
      description: 'Advanced cloud and infrastructure solutions'
    },
    {
      name: 'Space Technology',
      icon: Rocket,
      href: '/space-tech',
      description: 'Space resource intelligence and mining platforms'
    }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Contact', href: '/contact' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' }
  ];

  return (
    <>
      {/* Enhanced Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  Zion Tech Group
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setActiveDropdown('services')}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 w-96 bg-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl p-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="group p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-4 h-4 text-cyan-400" />
                              </div>
                              <div>
                                <div className="font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-400 mt-1">
                                  {service.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown('company')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                >
                  <span>Company</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'company' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setActiveDropdown('company')}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 w-48 bg-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl p-2"
                    >
                      {company.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                >
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setActiveDropdown('resources')}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 w-48 bg-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl p-2"
                    >
                      {resources.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Links */}
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-300">
                Pricing
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300">
                <Search className="w-5 h-5" />
              </button>

              {/* Contact Info */}
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/get-started"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">Zion Tech</span>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="space-y-6">
                  {/* Services Section */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Services
                    </h3>
                    <div className="space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={closeMenu}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                            <service.icon className="w-4 h-4 text-cyan-400" />
                          </div>
                          <div>
                            <div className="font-medium text-white">{service.name}</div>
                            <div className="text-sm text-gray-400">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Company Section */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Company
                    </h3>
                    <div className="space-y-2">
                      {company.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeMenu}
                          className="block p-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Resources Section */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Resources
                    </h3>
                    <div className="space-y-2">
                      {resources.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeMenu}
                          className="block p-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-6 border-t border-gray-700/50">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Contact
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Phone className="w-4 h-4" />
                        <span>+1 302 464 0950</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Mail className="w-4 h-4" />
                        <span>kleber@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span>364 E Main St STE 1008 Middletown DE 19709</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <Link
                      href="/get-started"
                      onClick={closeMenu}
                      className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navigation;