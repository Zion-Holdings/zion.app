import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';

export default function UltraAdvancedNavigation2026V2() {
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
      name: 'Home',
      href: '/',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum & Space Tech', href: '/services?category=quantum', icon: <Atom className="w-4 h-4" /> },
        { name: 'Emerging Technologies', href: '/services?category=emerging', icon: <Microscope className="w-4 h-4" /> },
        { name: 'Micro SaaS', href: '/services?category=micro-saas', icon: <Code className="w-4 h-4" /> },
        { name: 'Metaverse & VR', href: '/services?category=metaverse', icon: <Gamepad2 className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/services?category=cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/services?category=space', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Biotech & Healthcare', href: '/services?category=biotech', icon: <TestTube className="w-4 h-4" /> },
        { name: 'Blockchain & Web3', href: '/services?category=blockchain', icon: <Database className="w-4 h-4" /> },
        { name: 'Autonomous Vehicles', href: '/services?category=transportation', icon: <Car className="w-4 h-4" /> },
        { name: 'Cloud & Infrastructure', href: '/services?category=cloud', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Edge Computing', href: '/services?category=edge', icon: <Server className="w-4 h-4" /> },
        { name: 'IoT & Connectivity', href: '/services?category=iot', icon: <Network className="w-4 h-4" /> },
        { name: 'Semiconductor Tech', href: '/services?category=semiconductor', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Creative & Design', href: '/services?category=creative', icon: <Palette className="w-4 h-4" /> },
        { name: 'Global Solutions', href: '/services?category=global', icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Showcase',
      href: '/enhanced-services-showcase-2026-v2',
      icon: <Rocket className="w-4 h-4" />
    },
    {
      name: 'Pricing',
      href: '/pricing-enhanced-2026',
      icon: <Database className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/enhanced-services-showcase-2026-v2" className="text-purple-400 hover:text-purple-300 transition-colors">
                🚀 New 2026 Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  Z
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white">Zion Tech Group</div>
                <div className="text-xs text-gray-400">Innovation 2026</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4"
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 group"
                          >
                            <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                              {dropdownItem.icon}
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors">
                              {dropdownItem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="text-xl font-bold text-white">Menu</div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                              className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3"
                            >
                              <div className="flex items-center space-x-3">
                                {item.icon}
                                <span>{item.name}</span>
                              </div>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`} />
                            </button>
                            {activeDropdown === item.name && (
                              <div className="ml-6 mt-2 space-y-2">
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white"
                                  >
                                    {dropdownItem.icon}
                                    <span>{dropdownItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3"
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-6 border-t border-white/10">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                      Get Started
                    </button>
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="pt-6 border-t border-white/10 space-y-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-xs">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Spacer for fixed navigation */}
      <div className="h-32"></div>
    </>
  );
}