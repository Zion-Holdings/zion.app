import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin,
  Brain, Rocket, Dna, Globe, Shield, Wifi, Package,
  Bot, Car, Building2, DollarSign, Monitor, Users,
  Cpu, Zap, Star, Grid, Lock, Truck, Gamepad2, 
  Factory, List, ArrowRight, Home, Briefcase, 
  BookOpen, Users as UsersIcon, MessageSquare
} from 'lucide-react';
import Link from 'next/link';

const UltraAdvancedNavigation: React.FC = () => {
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
      icon: Home
    },
    {
      name: 'Services',
      href: '#',
      icon: Briefcase,
      dropdown: [
        {
          name: 'AI & Machine Learning',
          href: '/ai-services',
          icon: Brain,
          description: 'Advanced AI solutions and machine learning platforms',
          subItems: [
            { name: 'AI Content Generation', href: '/ai-content-generator' },
            { name: 'AI Code Review', href: '/ai-code-review' },
            { name: 'AI Customer Service', href: '/ai-customer-service' },
            { name: 'AI Sales Automation', href: '/ai-sales-automation' },
            { name: 'AI Market Research', href: '/ai-market-research' }
          ]
        },
        {
          name: 'Quantum Computing',
          href: '/quantum-services',
          icon: Zap,
          description: 'Quantum computing and quantum AI solutions',
          subItems: [
            { name: 'Quantum AI Platform', href: '/ai-quantum-computing-platform' },
            { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-suite' },
            { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
            { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
            { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' }
          ]
        },
        {
          name: 'Space Technology',
          href: '/space-technology',
          icon: Rocket,
          description: 'Space mission control and satellite management',
          subItems: [
            { name: 'AI Space Mission Control', href: '/ai-space-mission-control' },
            { name: 'Satellite Operations', href: '/satellite-operations' },
            { name: 'Space Traffic Management', href: '/space-traffic-management' }
          ]
        },
        {
          name: 'Biotech & Healthcare',
          href: '/biotech-ai',
          icon: Dna,
          description: 'AI-powered biotechnology and healthcare solutions',
          subItems: [
            { name: 'AI Biotech Discovery', href: '/ai-biotech-discovery-platform' },
            { name: 'Drug Discovery AI', href: '/ai-drug-discovery' },
            { name: 'Medical AI Platform', href: '/medical-ai-platform' }
          ]
        },
        {
          name: 'Enterprise IT',
          href: '/it-services',
          icon: Building2,
          description: 'Enterprise IT infrastructure and management',
          subItems: [
            { name: 'Autonomous IT Infrastructure', href: '/autonomous-it-infrastructure' },
            { name: 'Cloud Migration', href: '/cloud-migration-optimization' },
            { name: 'IT Asset Management', href: '/it-asset-discovery-agent' }
          ]
        },
        {
          name: 'Cybersecurity',
          href: '/security',
          icon: Shield,
          description: 'Advanced cybersecurity and threat protection',
          subItems: [
            { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-suite' },
            { name: 'AI Threat Hunting', href: '/ai-cybersecurity-threat-hunting' },
            { name: 'SOC Operations', href: '/soc-operations' }
          ]
        },
        {
          name: 'Micro SaaS',
          href: '/micro-saas',
          icon: Package,
          description: 'Innovative micro SaaS solutions',
          subItems: [
            { name: 'AI Sales Automation', href: '/ai-powered-sales-automation' },
            { name: 'AI Customer Service', href: '/ai-powered-customer-service-platform' },
            { name: 'DevOps Platform', href: '/ai-powered-devops-platform' }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Grid
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: BookOpen
    },
    {
      name: 'About',
      href: '/about',
      icon: UsersIcon
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: MessageSquare
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
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary Technology</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-4">
                          {item.dropdown.map((dropdownItem, index) => (
                            <div key={dropdownItem.name} className="mb-4 last:mb-0">
                              <Link
                                href={dropdownItem.href}
                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 group"
                              >
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                                  <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-xs text-gray-400 mt-1">
                                    {dropdownItem.description}
                                  </div>
                                  {dropdownItem.subItems && (
                                    <div className="mt-2 space-y-1">
                                      {dropdownItem.subItems.slice(0, 3).map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          className="block text-xs text-gray-500 hover:text-cyan-400 transition-colors duration-300"
                                        >
                                          • {subItem.name}
                                        </Link>
                                      ))}
                                      {dropdownItem.subItems.length > 3 && (
                                        <div className="text-xs text-gray-600">
                                          +{dropdownItem.subItems.length - 3} more
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-300"
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-2"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-6 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-gray-400 hover:text-white transition-colors duration-300 py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-800">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-xs">{contactInfo.address}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-6 py-3 rounded-lg font-medium text-center block transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraAdvancedNavigation;