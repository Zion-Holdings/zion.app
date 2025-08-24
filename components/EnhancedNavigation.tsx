<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Globe, Brain, Shield, Rocket, 
  Cpu, Users, Award, BookOpen, Phone
=======
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Cloud,
  Code,
  Shield,
  Globe,
  Zap
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
} from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
<<<<<<< HEAD
=======
  const dropdownRef = useRef<HTMLDivElement>(null);
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
  const services = [
    { name: '2026 Services Showcase', href: '/comprehensive-2026-services-showcase', icon: Globe, description: 'Complete collection of 2026 innovative services' },
    { name: '2025 Services Showcase', href: '/comprehensive-2025-services-showcase', icon: Globe, description: 'Complete collection of 2025 innovative services' },
    { name: 'AI Business Intelligence', href: 'https://ziontechgroup.com/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics and insights' },
    { name: 'AI Content Intelligence', href: 'https://ziontechgroup.com/ai-content-intelligence', icon: Brain, description: 'AI-powered content creation and optimization' },
    { name: 'AI Supply Chain Optimization', href: 'https://ziontechgroup.com/ai-supply-chain', icon: Cpu, description: 'Intelligent supply chain management' },
    { name: 'AI Customer Success Automation', href: 'https://ziontechgroup.com/ai-customer-success', icon: Users, description: 'Customer success automation and retention' },
    { name: 'Quantum Financial Modeling', href: 'https://ziontechgroup.com/quantum-financial-modeling', icon: Atom, description: 'Quantum-powered financial analysis' },
    { name: 'Quantum Cybersecurity', href: 'https://ziontechgroup.com/quantum-cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions' },
    { name: 'Edge Computing', href: 'https://ziontechgroup.com/edge-computing-orchestration', icon: Cpu, description: 'Edge orchestration and IoT management' },
    { name: 'Space Technology', href: 'https://ziontechgroup.com/space-technology', icon: Rocket, description: 'Space exploration and satellite tech' },
    { name: 'Pricing', href: '/pricing-2025', icon: Award, description: 'Transparent pricing for all services' }
  ];

  const company = [
    { name: 'About Us', href: '/about', icon: Users, description: 'Learn about our mission and team' },
    { name: 'Our Work', href: '/portfolio', icon: Award, description: 'See our latest projects and achievements' },
    { name: 'Blog & Insights', href: '/blog', icon: BookOpen, description: 'Stay updated with industry trends' },
    { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch with our experts' }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeAllDropdowns}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                  >
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                        Our Services
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={closeAllDropdowns}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-2 flex items-center justify-center">
                              <service.icon className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-200">
                                {service.name}
                              </div>
                              <div className="text-sm text-white/60 mt-1">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'company' ? 'rotate-180' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                  >
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                        About Zion Tech
                      </h3>
                      <div className="space-y-2">
                        {company.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={closeAllDropdowns}
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-2 flex items-center justify-center">
                              <item.icon className="w-4 h-4 text-purple-400" />
                            </div>
                            <div>
                              <div className="text-white font-medium group-hover:text-purple-300 transition-colors duration-200">
                                {item.name}
                              </div>
                              <div className="text-sm text-white/60">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blog" className="text-white/80 hover:text-white transition-colors duration-200">
              Blog
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-6 space-y-6">
              {/* Services Section */}
              <div>
                <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                  Services
                </h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={closeAllDropdowns}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-2 flex items-center justify-center">
                        <service.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{service.name}</div>
                        <div className="text-sm text-white/60">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company Section */}
              <div>
                <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                  Company
                </h3>
                <div className="space-y-2">
                  {company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeAllDropdowns}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-2 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{item.name}</div>
                        <div className="text-sm text-white/60">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </nav>
  );
};

export default EnhancedNavigation;
=======
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    { name: 'AI Development', icon: Brain, href: '/services/ai-development', color: 'from-purple-500 to-pink-500' },
    { name: 'Cloud Architecture', icon: Cloud, href: '/services/cloud-services', color: 'from-blue-500 to-cyan-500' },
    { name: 'Web Development', icon: Code, href: '/services/web-development', color: 'from-green-500 to-emerald-500' },
    { name: 'Cybersecurity', icon: Shield, href: '/services/cybersecurity', color: 'from-red-500 to-orange-500' },
    { name: 'IoT Platforms', icon: Globe, href: '/services/iot-platforms', color: 'from-indigo-500 to-purple-500' },
    { name: 'Digital Transformation', icon: Zap, href: '/services/digital-transformation', color: 'from-yellow-500 to-orange-500' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-300" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-300" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span>Middletown, DE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-500">Innovation & Technology</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                  aria-expanded={activeDropdown === 'services'}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200/50 backdrop-blur-md overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-4">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="group p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                {service.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                About
              </Link>
              
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                Contact
              </Link>

              {/* Search Button */}
              <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300">
                <Search className="w-5 h-5" />
              </button>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">Z</span>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">Zion Tech Group</div>
                      <div className="text-xs text-gray-500">Innovation & Technology</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-6">
                  <Link
                    href="/"
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>

                  {/* Mobile Services */}
                  <div>
                    <div className="text-lg font-medium text-gray-900 mb-4">Services</div>
                    <div className="space-y-3 pl-4">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>

                  <Link
                    href="/contact"
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>

                  {/* Mobile CTA */}
                  <div className="pt-6 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-center rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started Today
                    </Link>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-6 border-t border-gray-200 space-y-3">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Phone className="w-5 h-5 text-blue-500" />
                      <span>+1 (302) 464-0950</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span>Middletown, DE</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
};

export default EnhancedNavigation;
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
