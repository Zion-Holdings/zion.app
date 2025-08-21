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
  Code, Wrench, Smartphone, BarChart3, Eye, Timer,
  Globe2, Satellite, Telescope, Microchip, Network,
  Server, Key, Fingerprint
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
      { name: 'AI Reality Augmentation Platform', href: '/ai-reality-augmentation-platform', description: 'Real-time AI reality enhancement', price: '$18,999/month' },
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Advanced AI with human-like emotions', price: '$22,999/month' },
      { name: 'AI Creativity Engine Platform', href: '/ai-creativity-engine-platform', description: 'Unleash unlimited AI creativity', price: '$28,999/month' }
    ]
  },
  {
    title: '⚛️ 2029 Quantum & Neuroscience',
    icon: Atom,
    color: 'from-indigo-600 to-purple-600',
    description: 'Quantum brain-computer interfaces',
    services: [
      { name: 'Quantum Brain-Computer Interface', href: '/quantum-brain-computer-interface', description: 'Direct quantum communication with brain', price: '$25,999/month' },
      { name: 'Quantum Time Manipulation Platform', href: '/quantum-time-manipulation-platform', description: 'Manipulate time perception', price: '$35,999/month' },
      { name: 'Quantum AI Hybrid Computing', href: '/quantum-ai-hybrid-computing', description: 'Quantum-classical AI hybrid', price: '$125,999/month' },
      { name: 'Quantum Cryptography Platform', href: '/quantum-cryptography-platform', description: 'Unbreakable quantum encryption', price: '$95,999/month' }
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
      { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automate asteroid and lunar mining', price: '$65,999/month' },
      { name: 'Quantum Space Propulsion System', href: '/quantum-space-propulsion-system', description: 'Faster-than-light travel', price: '$150,999/month' },
      { name: 'Space Elevator Automation Platform', href: '/space-elevator-automation-platform', description: 'Earth-to-orbit transportation', price: '$85,999/month' }
    ]
  },
  {
    title: '🏠 2029 Space Architecture & Energy',
    icon: Building,
    color: 'from-green-600 to-teal-600',
    description: 'Habitat design and space energy harvesting',
    services: [
      { name: 'Space Habitat Design Platform', href: '/space-habitat-design-platform', description: 'Design space habitats for any planet', price: '$45,999/month' },
      { name: 'Space Energy Harvesting Platform', href: '/space-energy-harvesting-platform', description: 'Harvest energy from space sources', price: '$55,999/month' },
      { name: 'Orbital Manufacturing Automation', href: '/orbital-manufacturing-automation', description: 'Automated manufacturing in space', price: '$75,999/month' },
      { name: 'Space Resource Processing Automation', href: '/space-resource-processing-automation', description: 'Process space resources', price: '$65,999/month' }
    ]
  },
  {
    title: '🌱 2029 Space Life Support & Agriculture',
    icon: Leaf,
    color: 'from-emerald-600 to-green-600',
    description: 'Advanced life support and space farming',
    services: [
      { name: 'Quantum Life Support Systems', href: '/quantum-life-support-systems', description: 'Quantum-enhanced life support', price: '$95,999/month' },
      { name: 'Space Agriculture Automation Platform', href: '/space-agriculture-automation-platform', description: 'Automated space farming', price: '$55,999/month' }
    ]
  },
  {
    title: '🔒 2029 Space Security & Intelligence',
    icon: Shield,
    color: 'from-red-600 to-pink-600',
    description: 'Advanced space security and threat intelligence',
    services: [
      { name: 'Quantum Space Security Platform', href: '/quantum-space-security-platform', description: 'Quantum space security', price: '$85,999/month' },
      { name: 'Space Threat Intelligence Platform', href: '/space-threat-intelligence-platform', description: 'AI-powered threat intelligence', price: '$65,999/month' }
    ]
  },
  {
    title: '💼 2029 Business Automation & Intelligence',
    icon: Briefcase,
    color: 'from-blue-600 to-cyan-600',
    description: 'Autonomous business operations',
    services: [
      { name: 'Autonomous Business Intelligence Platform', href: '/autonomous-business-intelligence-platform', description: 'AI-powered business intelligence', price: '$35,999/month' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading', price: '$85,999/month' },
      { name: 'Autonomous Supply Chain Platform', href: '/autonomous-supply-chain-platform', description: 'AI-powered supply chain', price: '$45,999/month' },
      { name: 'Autonomous Customer Experience Platform', href: '/autonomous-customer-experience-platform', description: 'AI-powered customer experience', price: '$38,999/month' }
    ]
  },
  {
    title: '☁️ 2029 IT Infrastructure & Security',
    icon: Cloud,
    color: 'from-cyan-600 to-blue-600',
    description: 'Quantum-enhanced IT infrastructure',
    services: [
      { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum-enhanced cloud computing', price: '$65,999/month' },
      { name: 'Autonomous Cybersecurity Platform', href: '/autonomous-cybersecurity-platform', description: 'AI-powered cybersecurity', price: '$55,999/month' },
      { name: 'Autonomous IT Operations Platform', href: '/autonomous-it-operations-platform', description: 'AI-powered IT operations', price: '$42,999/month' },
      { name: 'Quantum Data Analytics Platform', href: '/quantum-data-analytics-platform', description: 'Quantum-powered analytics', price: '$75,999/month' }
    ]
  },
  {
    title: '🤖 Advanced AI & Machine Learning',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation', description: 'Intelligent customer support', price: '$899/month' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1,499/month' },
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', description: 'Unlimited AI content creation', price: '$1,299/month' },
      { name: 'AI Autonomous Decision Platform', href: '/ai-autonomous-decision-platform', description: 'AI autonomous decision making', price: '$45,999/month' },
      { name: 'AI Predictive Intelligence Platform', href: '/ai-predictive-intelligence-platform', description: 'AI-powered predictive analytics', price: '$38,999/month' }
    ]
  },
  {
    title: '⛓️ Blockchain & Web3 Solutions',
    icon: Layers,
    color: 'from-orange-600 to-red-600',
    description: 'Decentralized and blockchain solutions',
    services: [
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
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform', description: 'Revolutionary medical diagnosis', price: '$3,999/month' },
      { name: 'Biotech Research Automation', href: '/biotech-research-automation', description: 'Automated biotechnology research', price: '$4,999/month' },
      { name: 'Personalized Medicine AI', href: '/personalized-medicine-ai', description: 'AI-powered personalized treatment', price: '$2,999/month' }
    ]
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    icon: Building,
    color: 'from-blue-600 to-indigo-600',
    description: 'Intelligent urban solutions',
    services: [
      { name: 'Smart City Management Platform', href: '/smart-city-management-platform', description: 'Comprehensive city management', price: '$5,999/month' },
      { name: 'IoT Infrastructure Automation', href: '/iot-infrastructure-automation', description: 'Automated IoT management', price: '$3,999/month' },
      { name: 'Urban Energy Optimization', href: '/urban-energy-optimization', description: 'Smart energy management', price: '$4,499/month' }
    ]
  }
];

const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai-services', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum-services', icon: Atom },
  { name: 'Space Tech', href: '/space-technology', icon: Rocket },
  { name: 'Business IT', href: '/it-services', icon: Cpu },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const UltraFuturisticNavigation2029: React.FC = () => {
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
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Enhanced Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 via-purple-900/80 to-pink-900/80 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center space-x-4 text-cyan-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-cyan-300">
                <MapPin className="w-3 h-3" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-3 h-3" />
                <span>{contactInfo.website}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-cyan-400 font-medium">2029 Future Technology</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 border border-cyan-500/30 text-cyan-400 font-medium rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Enhanced Service Categories Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400">{category.description}</p>
                    <div className="space-y-2">
                      {category.services.slice(0, 3).map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={closeMenu}
                          className="block p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800/80 transition-colors duration-300 group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                {service.name}
                              </h4>
                              <p className="text-xs text-slate-400 mt-1">{service.description}</p>
                            </div>
                            <span className="text-xs font-medium text-cyan-400">{service.price}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-cyan-500/20">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-xl text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={closeMenu}
                    className="flex-1 px-6 py-3 border border-cyan-500/30 text-cyan-400 font-medium rounded-xl text-center hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Desktop Service Categories */}
      <div className="hidden lg:block bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-4">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="relative group"
                onMouseEnter={() => setActiveCategory(category.title)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 py-2">
                  <category.icon className="w-4 h-4" />
                  <span className="font-medium">{category.title.split(' ')[0]}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {/* Enhanced Dropdown */}
                <AnimatePresence>
                  {activeCategory === category.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-xl rounded-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 p-6 z-50"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 pb-3 border-b border-cyan-500/20">
                          <category.icon className="w-6 h-6 text-cyan-400" />
                          <div>
                            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                            <p className="text-sm text-slate-400">{category.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 group hover:scale-105"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {service.name}
                                  </h4>
                                  <p className="text-xs text-slate-400 mt-1">{service.description}</p>
                                </div>
                                <span className="text-sm font-medium text-cyan-400 ml-4">{service.price}</span>
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

export default UltraFuturisticNavigation2029;