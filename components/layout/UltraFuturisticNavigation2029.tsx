import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye, Timer
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 2029 AI Consciousness & Innovation',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    description: 'Beyond human consciousness simulation',
    services: [
      { name: 'AI Consciousness Simulation Platform', href: '/ai-consciousness-simulation-platform', description: 'Simulate human consciousness in AI systems', price: '$12,999/month' },
      { name: 'Autonomous AI Corporation Platform', href: '/autonomous-ai-corporation-platform', description: 'AI systems that run entire corporations', price: '$45,999/month' },
      { name: 'AI Reality Augmentation Platform', href: '/ai-reality-augmentation-platform', description: 'Real-time AI reality enhancement', price: '$18,999/month' }
    ]
  },
  {
    title: '⚛️ 2029 Quantum & Neuroscience',
    icon: Atom,
    color: 'from-indigo-600 to-purple-600',
    description: 'Quantum brain-computer interfaces',
    services: [
      { name: 'Quantum Brain-Computer Interface', href: '/quantum-brain-computer-interface', description: 'Direct quantum communication with brain', price: '$25,999/month' },
      { name: 'Quantum Time Manipulation Platform', href: '/quantum-time-manipulation-platform', description: 'Manipulate time perception', price: '$35,999/month' }
    ]
  },
  {
    title: '🚀 2029 Space Colonization & Mining',
    icon: Rocket,
    color: 'from-red-600 to-orange-600',
    description: 'Interplanetary expansion and resource extraction',
    services: [
      { name: 'Mars Colonization Automation Platform', href: '/mars-colonization-automation-platform', description: 'Automate Mars colonization process', price: '$99,999/month' },
      { name: 'Interplanetary Communication Network', href: '/interplanetary-communication-network', description: 'Real-time solar system communication', price: '$75,999/month' },
      { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automate asteroid and lunar mining', price: '$65,999/month' }
    ]
  },
  {
    title: '🏠 2029 Space Architecture & Energy',
    icon: Building,
    color: 'from-green-600 to-teal-600',
    description: 'Habitat design and space energy harvesting',
    services: [
      { name: 'Space Habitat Design Platform', href: '/space-habitat-design-platform', description: 'Design space habitats for any planet', price: '$45,999/month' },
      { name: 'Space Energy Harvesting Platform', href: '/space-energy-harvesting-platform', description: 'Harvest energy from space sources', price: '$55,999/month' }
    ]
  },
  {
    title: '🤖 Advanced AI & Machine Learning',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'AI that understands human emotions', price: '$2,999/month' },
      { name: 'AI Multimodal Fusion Platform', href: '/ai-multimodal-fusion-platform', description: 'Unified text, image, audio, video AI', price: '$4,999/month' },
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation', description: 'Intelligent customer support', price: '$899/month' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1,499/month' },
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', description: 'Unlimited AI content creation', price: '$1,299/month' }
    ]
  },
  {
    title: '⛓️ Blockchain & Web3 Solutions',
    icon: Layers,
    color: 'from-orange-600 to-red-600',
    description: 'Decentralized and blockchain solutions',
    services: [
      { name: 'Quantum Blockchain Platform', href: '/quantum-blockchain-platform', description: 'Quantum-resistant blockchain security', price: '$6,999/month' },
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end supply chain visibility', price: '$2,499/month' },
      { name: 'Smart Contract Automation Platform', href: '/smart-contract-automation', description: 'Automated blockchain contracts', price: '$1,999/month' },
      { name: 'DeFi Yield Optimization', href: '/defi-yield-optimization', description: 'Maximize DeFi returns', price: '$3,999/month' }
    ]
  },
  {
    title: '🏥 Healthcare & Biotech Innovation',
    icon: Heart,
    color: 'from-pink-600 to-rose-600',
    description: 'Advanced healthcare solutions',
    services: [
      { name: 'AI Personalized Medicine Platform', href: '/ai-personalized-medicine-platform', description: 'AI-powered personalized treatment', price: '$8,999/month' },
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform', description: 'Revolutionary medical diagnosis', price: '$3,999/month' },
      { name: 'Biotech Research Automation', href: '/biotech-research-automation', description: 'Automated biotechnology research', price: '$4,999/month' }
    ]
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    icon: Building,
    color: 'from-slate-600 to-gray-600',
    description: 'Intelligent urban management',
    services: [
      { name: 'AI Smart City Orchestrator', href: '/ai-smart-city-orchestrator', description: 'Comprehensive city infrastructure AI', price: '$12,999/month' },
      { name: 'Smart Traffic Management', href: '/smart-traffic-management', description: 'AI-powered traffic optimization', price: '$3,999/month' },
      { name: 'Energy Grid Optimization', href: '/energy-grid-optimization', description: 'Smart energy management', price: '$5,999/month' }
    ]
  },
  {
    title: '🔬 Research & Development',
    icon: Microscope,
    color: 'from-blue-600 to-indigo-600',
    description: 'Advanced research tools and platforms',
    services: [
      { name: 'AI Research Assistant', href: '/ai-research-assistant', description: 'AI-powered research acceleration', price: '$1,999/month' },
      { name: 'Data Analysis Platform', href: '/data-analysis-platform', description: 'Advanced data analytics', price: '$2,499/month' },
      { name: 'Research Collaboration Hub', href: '/research-collaboration-hub', description: 'Global research collaboration', price: '$1,799/month' }
    ]
  },
  {
    title: '💼 Enterprise & Business Solutions',
    icon: Briefcase,
    color: 'from-emerald-600 to-blue-600',
    description: 'Corporate and business automation',
    services: [
      { name: 'Enterprise AI Operations Center', href: '/enterprise-ai-operations-center', description: 'Centralized AI operations', price: '$15,999/month' },
      { name: 'Business Process Automation', href: '/business-process-automation', description: 'End-to-end process automation', price: '$4,999/month' },
      { name: 'Corporate Intelligence Platform', href: '/corporate-intelligence-platform', description: 'AI-powered business intelligence', price: '$7,999/month' }
    ]
  }
];

const mainNavItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Support', href: '/support', icon: MessageCircle },
  { name: 'Contact', href: '/contact', icon: Phone }
];

export default function UltraFuturisticNavigation2029() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone size={14} />
              <span>{contactInfo.mobile}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Mail size={14} />
              <span>{contactInfo.email}</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href={contactInfo.website} className="hover:text-cyan-300 transition-colors">
              {contactInfo.website.replace('https://', '')}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-gray-400">2029 Innovation Hub</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <item.icon size={16} className="group-hover:text-cyan-400 transition-colors" />
                    <span>{item.name}</span>
                  </div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                  <Briefcase size={16} className="group-hover:text-cyan-400 transition-colors" />
                  <span>All Services</span>
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>
                
                {/* Mega Menu */}
                <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-6 grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceCategories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className={`p-4 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>
                          <div className="flex items-center space-x-3 mb-3">
                            <category.icon size={20} className="text-cyan-400" />
                            <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {category.title}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-400 mb-4">{category.description}</p>
                          <div className="space-y-2">
                            {category.services.slice(0, 3).map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block p-2 rounded bg-black/30 hover:bg-cyan-500/20 transition-all duration-200 group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                    {service.name}
                                  </span>
                                  <span className="text-xs text-cyan-400 font-mono">
                                    {service.price}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeMenu} />
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/30 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">Zion Tech</span>
                  </div>
                  <button onClick={closeMenu} className="text-gray-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-4">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all duration-200"
                    >
                      <item.icon size={20} className="text-cyan-400" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Mobile Services */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                  <div className="space-y-3">
                    {serviceCategories.slice(0, 6).map((category) => (
                      <div key={category.title} className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                        <h4 className="font-medium text-white mb-2">{category.title}</h4>
                        <p className="text-sm text-gray-400 mb-3">{category.description}</p>
                        <div className="space-y-2">
                          {category.services.slice(0, 2).map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={closeMenu}
                              className="block p-2 rounded bg-black/30 hover:bg-cyan-500/20 transition-all duration-200"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300">{service.name}</span>
                                <span className="text-xs text-cyan-400 font-mono">{service.price}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
}