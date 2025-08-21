import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye,
  Network, Server, HardDrive, Monitor,
  Laptop, Watch, Headphones, Speaker, Mic, 
  Keyboard, Mouse, CpuIcon, DatabaseIcon, 
  CloudIcon, LockIcon, ShieldIcon, GlobeIcon,
  ZapIcon, SparklesIcon, BrainIcon, AtomIcon,
  HeartIcon, RocketIcon, ShieldIcon as ShieldIcon2,
  TargetIcon, MicroscopeIcon, StarIcon, ArrowRight
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 2033 Revolutionary AI Services',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Consciousness Evolution Platform 2033', href: '/ai-consciousness-evolution-platform-2033', description: 'Develop genuine AI consciousness', price: '$24,999/month' },
      { name: 'AI Emotional Intelligence Platform 2033', href: '/ai-emotional-intelligence-platform-2033', description: 'Real-time emotion analysis and response', price: '$3,999/month' },
      { name: 'AI Creativity Orchestrator 2033', href: '/ai-creativity-orchestrator-2033', description: 'Multi-model creativity fusion', price: '$5,999/month' },
      { name: 'AI Dream Interpreter Platform 2033', href: '/ai-dream-interpreter-platform-2033', description: 'Dream analysis with AI psychology', price: '$299/month' },
      { name: 'AI Autonomous Business Manager 2033', href: '/ai-autonomous-business-manager-2033', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ]
  },
  {
    title: '⚛️ 2033 Quantum & Emerging Tech',
    icon: Atom,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
    services: [
      { name: 'Quantum Internet Security Gateway 2033', href: '/quantum-internet-security-gateway-2033', description: 'Unbreakable quantum encryption', price: '$19,999/month' },
      { name: 'Biotech DNA Computing Platform 2033', href: '/biotech-dna-computing-platform-2033', description: 'DNA-based computation', price: '$29,999/month' },
      { name: 'Quantum Financial Trading Platform 2033', href: '/quantum-financial-trading-platform-2033', description: 'Quantum-powered trading algorithms', price: '$35,999/month' },
      { name: 'Quantum Creativity Studio 2033', href: '/quantum-creativity-studio-2033', description: 'Quantum-enhanced creativity', price: '$1,999/month' }
    ]
  },
  {
    title: '🏙️ 2033 Enterprise IT Solutions',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
    services: [
      { name: 'Autonomous DevOps Platform 2033', href: '/autonomous-devops-platform-2033', description: 'Fully autonomous DevOps', price: '$899/month' },
      { name: 'Zero Trust Network Architecture 2033', href: '/zero-trust-network-architecture-2033', description: 'Never trust, always verify', price: '$799/month' },
      { name: 'Edge Computing Orchestration 2033', href: '/edge-computing-orchestration-2033', description: 'Distributed edge computing', price: '$599/month' },
      { name: 'AI-Powered IT Operations Center 2033', href: '/ai-powered-it-operations-center-2033', description: 'Intelligent IT operations', price: '$899/month' }
    ]
  },
  {
    title: '🌌 2033 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and digital reality',
    services: [
      { name: 'Space Mining Automation Platform 2033', href: '/space-mining-automation-platform-2033', description: 'Automated asteroid mining', price: '$49,999/month' },
      { name: 'Metaverse Development Platform 2033', href: '/metaverse-development-platform-2033', description: 'Build immersive virtual worlds', price: '$699/month' },
      { name: 'AI Predictive Health Analytics 2033', href: '/ai-predictive-health-analytics-2033', description: 'Predictive health outcomes', price: '$7,999/month' },
      { name: 'Holographic Event Platform 2033', href: '/holographic-event-platform-2033', description: 'Immersive holographic experiences', price: '$2,999/month' }
    ]
  },
  {
    title: '🎯 2033 Innovative Micro SAAS',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
      { name: 'AI Business Intelligence Suite 2033', href: '/ai-business-intelligence-suite-2033', description: 'Intelligent business insights', price: '$399/month' },
      { name: 'AI Customer Success Automation 2033', href: '/ai-customer-success-automation-2033', description: 'Automate customer success', price: '$299/month' },
      { name: 'Blockchain Supply Chain Transparency 2033', href: '/blockchain-supply-chain-transparency-2033', description: 'End-to-end traceability', price: '$499/month' },
      { name: 'AI Sales Automation Platform 2033', href: '/ai-sales-automation-platform-2033', description: 'Intelligent sales automation', price: '$399/month' }
    ]
  },
  {
    title: '🔬 2033 Research & Development',
    icon: Microscope,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',
    services: [
      { name: 'Neuromorphic Computing Platform 2033', href: '/neuromorphic-computing-platform-2033', description: 'Brain-inspired computing', price: '$1,299/month' },
      { name: 'DNA Computing Platform 2033', href: '/dna-computing-platform-2033', description: 'Molecular computing', price: '$1,299/month' },
      { name: 'Photonic Computing Infrastructure 2033', href: '/photonic-computing-infrastructure-2033', description: 'Light-speed computing', price: '$699/month' }
    ]
  }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Services', href: '/ai-services', icon: Brain },
  { name: 'IT Solutions', href: '/it-services', icon: Cpu },
  { name: 'Micro SAAS', href: '/micro-saas', icon: Target },
  { name: 'Quantum Tech', href: '/quantum-services', icon: Atom },
  { name: 'Space Tech', href: '/space-tech', icon: Rocket },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const UltraFuturisticNavigation2033: React.FC = () => {
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
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.mobile}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-cyan-300">🚀 Leading the Future of Technology</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">2033 Future Technology</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group relative"
              >
                <item.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <span>{item.name}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              Get Started
            </button>
            <button className="px-6 py-2.5 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
              Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Service Categories Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-3">
                    <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                      <category.icon className="w-5 h-5" />
                      <span>{category.title}</span>
                    </h3>
                    <div className="space-y-2">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={closeMenu}
                          className="block p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors border border-gray-700/50 hover:border-cyan-500/50"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-sm font-medium text-white">{service.name}</h4>
                              <p className="text-xs text-gray-400">{service.description}</p>
                            </div>
                            <span className="text-xs text-cyan-400 font-medium">{service.price}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <div className="flex flex-col space-y-3">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                    Get Started
                  </button>
                  <button className="w-full px-6 py-3 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Service Categories Hover */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-6 gap-4 py-4">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="group relative"
                onMouseEnter={() => setActiveCategory(category.title)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="cursor-pointer p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <category.icon className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-sm font-medium text-white">{category.title.split(' ')[0]}</h3>
                  </div>
                </div>

                {/* Hover Dropdown */}
                <AnimatePresence>
                  {activeCategory === category.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-80 bg-black/95 backdrop-blur-xl rounded-lg border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 p-4 z-50"
                    >
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white border-b border-gray-700/50 pb-2">
                          {category.title}
                        </h4>
                        <p className="text-sm text-gray-400 pb-3">{category.description}</p>
                        <div className="space-y-2">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors border border-gray-700/50 hover:border-cyan-500/50"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h5 className="text-sm font-medium text-white">{service.name}</h5>
                                  <p className="text-xs text-gray-400">{service.description}</p>
                                </div>
                                <span className="text-xs text-cyan-400 font-medium">{service.price}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UltraFuturisticNavigation2033;