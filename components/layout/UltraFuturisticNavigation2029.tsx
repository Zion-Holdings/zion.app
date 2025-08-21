import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye,
  Infinity
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2029 Cutting-Edge Innovations',
    icon: Rocket,
    color: 'from-violet-600 to-purple-600',
    description: 'Beyond the future of technology',
    services: [
      { name: 'AI Neuromorphic Computing', href: '/ai-neuromorphic-computing-platform', description: 'Brain-inspired computing for next-generation AI', price: '$12,999/month' },
      { name: 'Quantum Internet Protocol v2.0', href: '/quantum-internet-protocol-v2', description: 'Next-generation quantum internet infrastructure', price: '$8,999/month' },
      { name: 'Autonomous Space Mining', href: '/autonomous-space-mining-platform', description: 'AI-powered asteroid mining and resource extraction', price: '$25,999/month' },
      { name: 'Biotech AI Drug Discovery', href: '/biotech-ai-drug-discovery', description: 'AI-powered pharmaceutical research and development', price: '$15,999/month' }
    ]
  },
  {
    title: '⚡ Emerging Technology Solutions',
    icon: Zap,
    color: 'from-blue-600 to-cyan-600',
    description: 'Next-generation tech infrastructure',
    services: [
      { name: 'Smart City IoT Management', href: '/smart-city-iot-management', description: 'Intelligent urban infrastructure management', price: '$7,999/month' },
      { name: 'Edge AI Computing Network', href: '/edge-ai-computing-network', description: 'Distributed AI processing at the network edge', price: '$5,999/month' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai', description: 'Self-optimizing intelligent manufacturing', price: '$9,999/month' },
      { name: 'Digital Twin Platform', href: '/digital-twin-platform', description: 'Virtual replicas for real-world optimization', price: '$6,999/month' }
    ]
  },
  {
    title: '💼 Micro SAAS Solutions',
    icon: Briefcase,
    color: 'from-emerald-600 to-teal-600',
    description: 'Practical business automation tools',
    services: [
      { name: 'AI Content Marketing Suite', href: '/ai-content-marketing-suite', description: 'Intelligent content creation and distribution', price: '$299/month' },
      { name: 'Smart Invoice & Expense Manager', href: '/smart-invoice-expense-manager', description: 'Automated financial management for businesses', price: '$199/month' },
      { name: 'AI Customer Support Automation', href: '/ai-customer-support-automation', description: 'Intelligent customer service automation', price: '$399/month' },
      { name: 'Smart Project Management Platform', href: '/smart-project-management-platform', description: 'AI-powered project planning and execution', price: '$249/month' }
    ]
  },
  {
    title: '🤖 AI & Machine Learning',
    icon: Brain,
    color: 'from-indigo-600 to-blue-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-platform', description: 'Predict climate changes with 99.9% accuracy', price: '$2,999/month' },
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform', description: 'Revolutionary medical diagnosis', price: '$3,999/month' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1,499/month' },
      { name: 'AI Legal Research Platform', href: '/ai-legal-research-platform', description: 'Intelligent legal research', price: '$2,999/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Advanced Tech',
    icon: Atom,
    color: 'from-purple-600 to-indigo-600',
    description: 'Quantum computing and beyond',
    services: [
      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall', description: 'Unbreakable quantum encryption', price: '$4,999/month' },
      { name: 'Quantum Financial Trading AI', href: '/quantum-financial-trading-ai', description: 'Quantum-powered algorithmic trading', price: '$18,999/month' },
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform', description: 'Quantum computing for ML', price: '$7,999/month' },
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable internet security', price: '$3,999/month' }
    ]
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    icon: Building,
    color: 'from-cyan-600 to-blue-600',
    description: 'Intelligent urban solutions',
    services: [
      { name: '6G Network Infrastructure', href: '/6g-network-infrastructure', description: 'Next-generation wireless communication', price: '$14,999/month' },
      { name: 'IoT Energy Management System', href: '/iot-energy-management-system', description: 'Smart energy optimization', price: '$1,999/month' },
      { name: 'Smart Traffic Management System', href: '/smart-traffic-management', description: 'AI traffic optimization', price: '$4,999/month' },
      { name: 'Electric Vehicle Charging Network', href: '/ev-charging-network', description: 'Smart EV infrastructure', price: '$2,999/month' }
    ]
  }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Resources', href: '/resources', icon: BookOpen }
];

export default function UltraFuturisticNavigation2029() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900/90 to-blue-900/90 backdrop-blur-sm border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-purple-200">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-purple-300" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-purple-300" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3 text-purple-300" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-purple-300">Future Technology Solutions</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative flex items-center space-x-2 text-purple-200 hover:text-white transition-colors duration-200"
              >
                <item.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
                <span className="font-medium">{item.name}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Service Categories Dropdown */}
          <div className="hidden lg:block relative">
            <button
              onMouseEnter={() => setActiveCategory('services')}
              onMouseLeave={() => setActiveCategory(null)}
              className="group flex items-center space-x-2 text-purple-200 hover:text-white transition-colors duration-200"
            >
              <Briefcase className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
              <span className="font-medium">All Services</span>
              <ChevronDown className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
            </button>

            <AnimatePresence>
              {activeCategory === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setActiveCategory('services')}
                  onMouseLeave={() => setActiveCategory(null)}
                  className="absolute top-full left-0 mt-2 w-[800px] bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 p-6"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center shadow-lg`}>
                            <category.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                              {category.title}
                            </h3>
                            <p className="text-xs text-purple-300">{category.description}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block p-3 rounded-lg hover:bg-purple-900/30 transition-all duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors duration-200">
                                    {service.name}
                                  </h4>
                                  <p className="text-xs text-purple-300 mt-1">{service.description}</p>
                                </div>
                                <span className="text-xs text-purple-400 font-medium">{service.price}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="relative group px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-medium text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-purple-200 hover:text-white transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 text-purple-200 hover:text-white transition-colors duration-200 p-3 rounded-lg hover:bg-purple-900/30"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-purple-500/30">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-medium text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
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
}