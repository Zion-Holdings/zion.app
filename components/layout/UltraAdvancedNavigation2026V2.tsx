import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Globe, Zap, Brain, Atom, Bot, Heart, Shield, Rocket, Star, TrendingUp, Users, DollarSign, Code, Database, Cloud, Lock, Eye, Target, BarChart3, Lightbulb, TestTube, Leaf, Car, Microscope, BrainCircuit, Sparkles } from 'lucide-react';

export default function UltraAdvancedNavigation2026V2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

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
        {
          name: 'AI Services',
          href: '/services?category=ai',
          icon: <Brain className="w-4 h-4" />,
          description: 'Advanced AI solutions and platforms'
        },
        {
          name: 'Quantum Computing',
          href: '/services?category=quantum',
          icon: <Atom className="w-4 h-4" />,
          description: 'Quantum computing and quantum AI'
        },
        {
          name: 'Micro SaaS',
          href: '/services?category=micro-saas',
          icon: <Code className="w-4 h-4" />,
          description: 'Specialized software solutions'
        },
        {
          name: 'Healthcare AI',
          href: '/services?category=healthcare',
          icon: <Heart className="w-4 h-4" />,
          description: 'AI-powered healthcare solutions'
        },
        {
          name: 'Robotics',
          href: '/services?category=robotics',
          icon: <Bot className="w-4 h-4" />,
          description: 'Autonomous robotics platforms'
        },
        {
          name: 'Cybersecurity',
          href: '/services?category=cybersecurity',
          icon: <Shield className="w-4 h-4" />,
          description: 'Advanced security solutions'
        }
      ]
    },
    {
      name: 'Showcase',
      href: '/revolutionary-2026-services-showcase-v2',
      icon: <Star className="w-4 h-4" />
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: <Lightbulb className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ];

  const featuredServices = [
    {
      name: 'AI Consciousness Platform',
      href: '/services/ai-consciousness-platform',
      icon: <BrainCircuit className="w-5 h-5" />,
      category: 'AI Consciousness',
      price: '$4,999/mo'
    },
    {
      name: 'Quantum Financial Trading',
      href: '/services/ai-quantum-financial-trading-v2',
      icon: <DollarSign className="w-5 h-5" />,
      category: 'Quantum AI',
      price: '$2,499/mo'
    },
    {
      name: 'AI Healthcare Diagnostics',
      href: '/services/ai-healthcare-diagnostics-v2',
      icon: <Heart className="w-5 h-5" />,
      category: 'Healthcare AI',
      price: '$1,899/mo'
    }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900/90 to-pink-900/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/revolutionary-2026-services-showcase-v2" className="text-purple-400 hover:text-purple-300 transition-colors">
                🚀 New 2026 Services
              </Link>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400">Revolutionary AI Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Zion Tech Group</div>
                <div className="text-xs text-purple-400">Revolutionary 2026</div>
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
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2"
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
                      className="absolute top-full left-0 w-96 bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl"
                    >
                      <div className="grid grid-cols-1 gap-4">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                          >
                            <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-200">
                              {dropdownItem.icon}
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover:text-purple-300 transition-colors duration-200">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-gray-400">
                                {dropdownItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* Featured Services */}
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="text-sm font-medium text-gray-300 mb-3">Featured Services</div>
                        <div className="space-y-2">
                          {featuredServices.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                            >
                              <div className="flex items-center space-x-2">
                                <div className="p-1 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded">
                                  {service.icon}
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors duration-200">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-400">{service.category}</div>
                                </div>
                              </div>
                              <div className="text-sm font-bold text-purple-400">{service.price}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors duration-200 border border-white/20 hover:border-white/30"
              >
                Get Started
              </Link>
              <Link
                href="/revolutionary-2026-services-showcase-v2"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all duration-200 font-medium"
              >
                Explore 2026 Services
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
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
            className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-md border-l border-white/10 z-50 lg:hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="text-xl font-bold text-white">Menu</div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full text-left p-3 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                        >
                          <div className="flex items-center space-x-2">
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
                                className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
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
                        className="flex items-center space-x-2 p-3 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-6 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors border border-white/20"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/revolutionary-2026-services-showcase-v2"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium"
                  >
                    Explore 2026 Services
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-32"></div>
    </>
  );
}

// Icon components
const Home = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);