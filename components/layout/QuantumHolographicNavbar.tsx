import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Globe, Bot, Cloud, Shield, Sparkles, Rocket, Cpu, Database, Brain, Atom, Eye, Lock, BarChart3, Users, Target, TrendingUp, Star, Award, ZapIcon, CloudIcon, BotIcon, ShieldIcon, GlobeIcon, CpuIcon, DatabaseIcon, BrainIcon, AtomIcon, EyeIcon, LockIcon, BarChart3Icon, UsersIcon, TargetIcon, TrendingUpIcon, StarIcon, AwardIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as HeadlessMenu, X as HeadlessX, Zap as HeadlessZap, Sparkles as HeadlessSparkles, ChevronDown, Globe as HeadlessGlobe, Shield as HeadlessShield, Cpu as HeadlessCpu, Brain as HeadlessBrain } from 'lucide-react';

export default function QuantumHolographicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  const navItems = [
    { 
      name: 'Home', 
      href: '/', 
      icon: <Zap className="w-4 h-4" />,
      description: 'Welcome to the future'
    },
    { 
      name: 'AI Services', 
      href: '/ai-services', 
      icon: <Brain className="w-4 h-4" />,
      description: 'LLM, RAG, MLOps'
    },
    { 
      name: 'IT Services', 
      href: '/it-services', 
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud, DevOps, SRE'
    },
    { 
      name: 'Services', 
      href: '/services', 
      icon: <Cloud className="w-4 h-4" />,
      description: '350+ Micro SaaS Solutions',
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning', icon: <Brain className="w-4 h-4" />, description: 'Advanced AI solutions' },
        { name: 'Quantum Computing', href: '/services?category=Quantum%20Computing', icon: <Atom className="w-4 h-4" />, description: 'Quantum-powered platforms' },
        { name: 'IoT & Smart Cities', href: '/services?category=IoT%20%26%20Smart%20Cities', icon: <Cpu className="w-4 h-4" />, description: 'Intelligent edge computing' },
        { name: 'Robotics & Automation', href: '/services?category=Robotics%20%26%20Automation', icon: <Bot className="w-4 h-4" />, description: 'Self-learning automation' },
        { name: 'Biotechnology & Healthcare', href: '/services?category=Biotechnology%20%26%20Healthcare', icon: <Eye className="w-4 h-4" />, description: 'Biomedical breakthroughs' },
        { name: 'Cybersecurity', href: '/services?category=Cybersecurity', icon: <Lock className="w-4 h-4" />, description: 'Quantum-safe security' },
        { name: 'Analytics & Business Intelligence', href: '/services?category=Analytics%20%26%20Business%20Intelligence', icon: <BarChart3 className="w-4 h-4" />, description: 'Intelligent insights' },
        { name: 'Cloud & Infrastructure', href: '/services?category=Cloud%20%26%20Infrastructure', icon: <Sparkles className="w-4 h-4" />, description: 'Future innovations' }
      ]
    },
    { 
      name: 'Micro SaaS', 
      href: '/micro-saas', 
      icon: <Bot className="w-4 h-4" />,
      description: 'Innovative Solutions'
    },
    { 
      name: 'AI Services', 
      href: '/ai-services', 
      icon: <Brain className="w-4 h-4" />,
      description: 'LLM, RAG, MLOps'
    },
    { 
      name: 'IT Services', 
      href: '/it-services', 
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud, DevOps, SRE'
    },
    { 
      name: 'Pricing', 
      href: '/pricing', 
      icon: <Globe className="w-4 h-4" />,
      description: 'Transparent Plans'
    },
    { 
      name: 'About', 
      href: '/about', 
      icon: <Shield className="w-4 h-4" />,
      description: 'Our Mission'
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      icon: <Zap className="w-4 h-4" />,
      description: 'Get in Touch'
    },
  ];

  const handleDropdownEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-2xl border-b border-cyan-500/40 shadow-2xl shadow-cyan-500/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-purple-600 to-blue-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-lg shadow-cyan-500/30">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-600 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-600 to-blue-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-gray-400 font-medium tracking-wider">
                FUTURE-FORWARD SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleDropdownEnter(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors duration-200 group-hover:bg-white/5"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.dropdown && (
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Enhanced Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group/item"
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                              {dropdownItem.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-white group-hover/item:text-cyan-400 transition-colors duration-200">
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
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button + Quick Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="px-3 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Call us"
            >
              +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-3 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Email us"
            >
              Email
            </a>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-cyan-500/30">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
                {item.dropdown && (
                  <div className="ml-8 mt-2 space-y-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
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
            <div className="pt-4 border-t border-cyan-500/30 space-y-3">
              <a href="tel:+13024640950" className="block w-full text-center px-6 py-3 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setIsOpen(false)}>Call +1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="block w-full text-center px-6 py-3 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setIsOpen(false)}>Email Us</a>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}