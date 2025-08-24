import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Rocket, Brain, Shield, Factory, 
  Globe, Zap, Building2, FlaskConical, Leaf, Car, Truck, 
  Microscope, GraduationCap, ShieldCheck, Globe2, Cloud, 
  Cpu, Database, Lock, Smartphone, Palette, Search, 
  MessageSquare, FileText, Calendar, CreditCard, BarChart3, 
  Code, BookOpen, Activity, Settings, Mail, Phone, MapPin, 
  Sparkles, Atom, Eye, Trophy, Dna, ArrowRight, ExternalLink, 
  Star, Users, ChevronRight, Play, Check
} from 'lucide-react';
import Button from '../ui/Button';

const Navigation = () => {
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
      icon: <Rocket className="w-4 h-4" />,
      dropdown: [
        { name: 'Micro SaaS', href: '/micro-saas', icon: '🚀' },
        { name: 'AI Solutions', href: '/ai-assistant', icon: '🧠' },
        { name: 'Automation', href: '/automation', icon: '⚡' },
        { name: 'Analytics', href: '/analytics', icon: '📊' },
        { name: 'Cloud Platform', href: '/cloud-platform', icon: '☁️' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'Quantum Computing', href: '/solutions/quantum', icon: '⚛️' },
        { name: 'Autonomous Systems', href: '/solutions/autonomous', icon: '🤖' },
        { name: 'Space Technology', href: '/solutions/space', icon: '🚀' },
        { name: 'Biomedical AI', href: '/solutions/biomedical', icon: '🧬' },
        { name: 'Metaverse', href: '/solutions/metaverse', icon: '🌐' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: <BookOpen className="w-4 h-4" />,
      dropdown: [
        { name: 'Documentation', href: '/docs', icon: '📚' },
        { name: 'Blog', href: '/blog', icon: '✍️' },
        { name: 'Case Studies', href: '/case-studies', icon: '📊' },
        { name: 'News', href: '/news', icon: '📰' },
        { name: 'Support', href: '/support', icon: '🆘' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: <Building2 className="w-4 h-4" />,
      dropdown: [
        { name: 'About Us', href: '/about', icon: '🏢' },
        { name: 'Careers', href: '/careers', icon: '💼' },
        { name: 'Contact', href: '/contact', icon: '📞' },
        { name: 'Terms', href: '/terms', icon: '📋' },
        { name: 'Privacy', href: '/privacy', icon: '🔒' }
      ]
    }
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl shadow-black/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Revolutionary Technology</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group-hover:text-cyan-400"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="p-2">
                        {item.dropdown?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300 group/item"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="text-lg">{dropdownItem.icon}</span>
                            <span className="group-hover/item:text-cyan-400 transition-colors duration-300">
                              {dropdownItem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button href="/pricing" variant="secondary" size="sm">
              Pricing
            </Button>
            <Button href="/contact" variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-6">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-8 mt-2 space-y-2 overflow-hidden"
                        >
                          {item.dropdown?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="text-lg">{dropdownItem.icon}</span>
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className="pt-6 border-t border-gray-700/50">
                  <div className="flex flex-col space-y-3">
                    <Button href="/pricing" variant="secondary" size="sm" className="w-full">
                      Pricing
                    </Button>
                    <Button href="/contact" variant="primary" size="sm" className="w-full">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;