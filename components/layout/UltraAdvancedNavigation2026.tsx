import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, Team, MessageCircle 
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Machine Learning 2026',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Consciousness Simulation', href: '/ai-consciousness-simulation-platform', description: 'Simulate human consciousness', price: '$4,999/month' },
      { name: 'Autonomous AI Agents', href: '/autonomous-ai-agents-platform-2026', description: 'Create autonomous AI agents', price: '$199/month' },
      { name: 'AI Healthcare Companion', href: '/ai-healthcare-companion-2026', description: 'Revolutionary healthcare AI', price: '$399/month' },
      { name: 'AI Content Creation Revolution', href: '/ai-content-creation-revolution', description: 'Unlimited AI content generation', price: '$599/month' }
    ]
  },
  {
    title: 'Quantum Computing & Security',
    icon: Atom,
    color: 'from-blue-600 to-cyan-600',
    description: 'Quantum-powered solutions',
    services: [
      { name: 'Quantum Neural Interface', href: '/quantum-neural-interface-platform', description: 'Brain-computer interface', price: '$8,999/month' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway', description: 'Unbreakable encryption', price: '$3,999/month' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-algorithm-platform', description: 'Quantum trading algorithms', price: '$12,999/month' },
      { name: 'Quantum Internet Infrastructure', href: '/quantum-internet-infrastructure-platform', description: 'Build the quantum internet', price: '$15,999/month' }
    ]
  },
  {
    title: 'Emerging Technologies 2026',
    icon: Sparkles,
    color: 'from-green-600 to-emerald-600',
    description: 'Cutting-edge innovations',
    services: [
      { name: 'Holographic Metaverse', href: '/holographic-metaverse-development-platform', description: '3D holographic experiences', price: '$2,999/month' },
      { name: 'Space Debris Management', href: '/space-debris-management-ai-platform', description: 'AI space safety', price: '$5,999/month' },
      { name: 'AI Climate Prediction', href: '/ai-climate-prediction-platform', description: 'Climate change prediction', price: '$1,999/month' },
      { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing-ai-platform', description: 'Self-optimizing manufacturing', price: '$3,499/month' }
    ]
  },
  {
    title: 'Enterprise IT Solutions 2026',
    icon: Shield,
    color: 'from-red-600 to-orange-600',
    description: 'Enterprise-grade solutions',
    services: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture-2026', description: 'Next-gen security', price: 'Custom pricing' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-2026', description: 'Intelligent edge computing', price: 'Custom pricing' },
      { name: '5G Private Networks', href: '/5g-private-network-solutions-2026', description: 'Enterprise 5G', price: 'Custom pricing' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform-2026', description: 'Enterprise blockchain', price: 'Custom pricing' }
    ]
  },
  {
    title: 'Healthcare & Life Sciences',
    icon: Microscope,
    color: 'from-teal-600 to-cyan-600',
    description: 'Healthcare innovation',
    services: [
      { name: 'AI Drug Discovery', href: '/ai-drug-discovery-platform', description: 'Accelerate drug development', price: '$4,999/month' },
      { name: 'Autonomous Healthcare AI', href: '/autonomous-healthcare-ai-platform', description: 'Self-learning healthcare', price: '$2,499/month' },
      { name: 'Quantum Machine Learning', href: '/quantum-machine-learning-platform', description: 'Quantum AI research', price: '$6,999/month' },
      { name: 'AI Legal Research', href: '/ai-legal-research-platform', description: 'Revolutionary legal tech', price: '$899/month' }
    ]
  },
  {
    title: 'Financial Technology',
    icon: DollarSign,
    color: 'from-emerald-600 to-green-600',
    description: 'Fintech solutions',
    services: [
      { name: 'Autonomous Supply Chain', href: '/autonomous-supply-chain-optimization-ai', description: 'AI supply chain optimization', price: '$899/month' },
      { name: 'Autonomous Marketing AI', href: '/autonomous-marketing-ai-platform', description: 'Self-optimizing marketing', price: '$1,499/month' },
      { name: 'AI Cybersecurity', href: '/ai-cybersecurity-platform', description: 'Next-gen security', price: '$2,999/month' },
      { name: 'AI Business Intelligence', href: '/autonomous-business-intelligence-network', description: 'Self-evolving BI', price: '$1,299/month' }
    ]
  }
];

const companyLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Users },
  { name: '2026 Services', href: '/2026-services-showcase', icon: Rocket },
  { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', icon: Sparkles },
  { name: '2026 Pricing', href: '/revolutionary-2026-pricing', icon: DollarSign },
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen },
  { name: 'Careers', href: '/careers', icon: Team },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const UltraAdvancedNavigation2026 = () => {
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
      name: 'AI Services',
      href: '/services?category=ai',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      description: 'Autonomous AI systems and consciousness interfaces',
      subItems: [
        { name: 'AI Autonomous Agents', href: '/services?category=ai-autonomous', description: 'Fully autonomous AI systems' },
        { name: 'AI Consciousness', href: '/services?category=ai-consciousness', description: 'Consciousness simulation and interfaces' },
        { name: 'AI Healthcare', href: '/services?category=ai-healthcare', description: 'Medical AI and diagnostics' },
        { name: 'AI Education', href: '/services?category=ai-education', description: 'Educational AI systems' },
        { name: 'AI Legal', href: '/services?category=ai-legal', description: 'Legal AI and compliance' },
        { name: 'AI Creative', href: '/services?category=ai-creative', description: 'Creative AI and content generation' }
      ]
    },
    {
      name: 'Quantum Tech',
      href: '/services?category=quantum',
      icon: Atom,
      color: 'from-purple-500 to-indigo-500',
      description: 'Quantum computing and space technology',
      subItems: [
        { name: 'Quantum Space Tech', href: '/services?category=quantum-space', description: 'Space exploration and communication' },
        { name: 'Quantum Computing', href: '/services?category=quantum-computing', description: 'Advanced quantum systems' },
        { name: 'Quantum AI', href: '/services?category=quantum-ai', description: 'Quantum-powered AI' },
        { name: 'Quantum Security', href: '/services?category=quantum-security', description: 'Quantum encryption and security' }
      ]
    },
    {
      name: 'Metaverse',
      href: '/services?category=metaverse',
      icon: Globe,
      color: 'from-pink-500 to-rose-500',
      description: 'Virtual worlds and digital reality',
      subItems: [
        { name: 'Metaverse Platforms', href: '/services?category=metaverse-platforms', description: 'Virtual world platforms' },
        { name: 'Digital Reality', href: '/services?category=digital-reality', description: 'Immersive experiences' },
        { name: 'Holographic Tech', href: '/services?category=holographic', description: '3D holographic systems' },
        { name: 'Consciousness Interface', href: '/services?category=consciousness-interface', description: 'Brain-computer interfaces' }
      ]
    },
    {
      name: 'Enterprise IT',
      href: '/services?category=enterprise',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      description: 'Enterprise solutions and infrastructure',
      subItems: [
        { name: 'Cloud Solutions', href: '/services?category=cloud', description: 'Cloud infrastructure and services' },
        { name: 'Cybersecurity', href: '/services?category=security', description: 'Advanced security solutions' },
        { name: 'Data Analytics', href: '/services?category=analytics', description: 'Business intelligence and analytics' },
        { name: 'DevOps', href: '/services?category=devops', description: 'Development and operations' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      {/* Enhanced Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology Solutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                              <item.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">{item.name}</h3>
                              <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block p-3 rounded-xl hover:bg-purple-500/10 transition-colors duration-200 group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="text-white font-medium group-hover:text-purple-300 transition-colors duration-200">
                                  {subItem.name}
                                </div>
                                <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">
                                  {subItem.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                          
                          <Link
                            href={item.href}
                            className="block w-full mt-4 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            View All {item.name}
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Quick Links */}
              <div className="flex items-center space-x-6">
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                  All Services
                </Link>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                  Pricing
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact Info - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">{contactInfo.phone}</span>
              </div>
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
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

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-purple-500/20 p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold text-lg">Menu</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-700/50 pb-4">
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 text-white hover:text-purple-300 transition-colors duration-200 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                    
                    {/* Mobile Sub-items */}
                    <div className="mt-3 ml-11 space-y-2">
                      {item.subItems.slice(0, 3).map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Quick Links */}
                <div className="space-y-3 pt-4">
                  <Link
                    href="/services"
                    className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    href="/pricing"
                    className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>

                {/* Contact Info - Mobile */}
                <div className="pt-6 border-t border-gray-700/50 space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>

                {/* Get Started Button - Mobile */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>
    </>
  );
}