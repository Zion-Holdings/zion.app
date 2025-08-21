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
  Code, Wrench, Smartphone, BarChart3, Dna, Eye,
  Network, CpuIcon, Globe2, ZapIcon, SparklesIcon
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2029 Futuristic AI Services',
    icon: Brain,
    color: 'from-violet-600 to-purple-600',
    description: 'Next-generation artificial intelligence',
    services: [
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform-2029', description: 'Real-time emotion detection and response', price: '$3,999/month' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator-2029', description: 'Multi-model creativity fusion', price: '$5,999/month' },
      { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform-2029', description: 'IoT-powered predictive analytics', price: '$2,999/month' },
      { name: 'AI Healthcare Diagnostic Platform', href: '/ai-healthcare-diagnostic-platform-2029', description: 'Advanced medical AI diagnostics', price: '$4,999/month' }
    ]
  },
  {
    title: '⚛️ 2029 Quantum Innovation',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    description: 'Quantum computing breakthroughs',
    services: [
      { name: 'Quantum Financial Optimization', href: '/quantum-financial-optimization-platform-2029', description: 'Quantum-powered portfolio optimization', price: '$12,999/month' },
      { name: 'Quantum Cybersecurity Fortress', href: '/quantum-cybersecurity-fortress-2029', description: 'Unbreakable quantum encryption', price: '$8,999/month' },
      { name: 'Quantum Drug Discovery Platform', href: '/quantum-drug-discovery-platform-2029', description: '1000x faster drug discovery', price: '$15,999/month' },
      { name: 'Quantum Logistics Optimization', href: '/quantum-logistics-optimization-2029', description: 'Quantum supply chain optimization', price: '$6,999/month' }
    ]
  },
  {
    title: '🌌 2029 Space Innovation',
    icon: Rocket,
    color: 'from-blue-600 to-cyan-600',
    description: 'Revolutionary space technology',
    services: [
      { name: 'Autonomous Space Mining Platform', href: '/autonomous-space-mining-platform-2029', description: 'AI-powered space resource extraction', price: '$25,999/month' },
      { name: 'Space Weather Prediction Platform', href: '/space-weather-prediction-platform-2029', description: 'AI-powered space weather forecasting', price: '$9,999/month' },
      { name: 'Orbital Debris Cleanup Platform', href: '/orbital-debris-cleanup-platform-2029', description: 'Autonomous space debris removal', price: '$18,999/month' },
      { name: 'Space-Based Solar Power Platform', href: '/space-based-solar-power-platform-2029', description: 'Wireless power transmission from space', price: '$35,999/month' }
    ]
  },
  {
    title: '🧬 2029 Biotech Innovation',
    icon: Dna,
    color: 'from-emerald-600 to-teal-600',
    description: 'Cutting-edge biotechnology',
    services: [
      { name: 'DNA Computing Platform', href: '/dna-computing-platform-2029', description: 'Molecular computing with DNA', price: '$45,999/month' },
      { name: 'Synthetic Biology Platform', href: '/synthetic-biology-platform-2029', description: 'Design and build synthetic organisms', price: '$32,999/month' },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform-2029', description: 'Direct brain-computer communication', price: '$28,999/month' },
      { name: 'Quantum Biology Platform', href: '/quantum-biology-platform-2029', description: 'Quantum effects in biological systems', price: '$22,999/month' }
    ]
  },
  {
    title: '🌐 2029 Metaverse Innovation',
    icon: Globe2,
    color: 'from-orange-600 to-red-600',
    description: 'Next-generation digital reality',
    services: [
      { name: 'Holographic Communication Platform', href: '/holographic-communication-platform-2029', description: 'Real-time 3D holographic communication', price: '$7,999/month' },
      { name: 'Digital Twin Universe Platform', href: '/digital-twin-universe-platform-2029', description: 'Comprehensive digital world replicas', price: '$12,999/month' },
      { name: 'Virtual Economy Platform', href: '/virtual-economy-platform-2029', description: 'Metaverse economy management', price: '$5,999/month' },
      { name: 'Immersive Education Metaverse', href: '/immersive-education-metaverse-2029', description: '3D learning environments', price: '$3,999/month' }
    ]
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    icon: Building,
    color: 'from-green-600 to-emerald-600',
    description: 'Intelligent urban solutions',
    services: [
      { name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management', description: 'IoT and AI urban optimization', price: '$5,999/month' },
      { name: 'IoT Energy Management System', href: '/iot-energy-management-system', description: 'Smart energy optimization', price: '$1,999/month' },
      { name: 'Digital Twin Manufacturing Platform', href: '/digital-twin-manufacturing-platform', description: 'Virtual manufacturing replicas', price: '$4,999/month' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai', description: 'Self-optimizing factories', price: '$6,999/month' }
    ]
  }
];

const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum-technology', icon: Atom },
  { name: 'Space Tech', href: '/space-technology', icon: Rocket },
  { name: 'Biotech', href: '/biotechnology', icon: Dna },
  { name: 'Metaverse', href: '/metaverse', icon: Globe2 },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

export default function UltraFuturisticNavigation2029() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">2029 Technology</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group-hover:text-cyan-400"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
                
                {/* Hover effect */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
              </motion.div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-4 text-sm text-gray-300"
            >
              <a href="tel:+13024640950" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+1 302 464 0950</span>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">kleber@ziontechgroup.com</span>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 py-3 border-b border-gray-800/50"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-3"
                >
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Categories Dropdown */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-purple-500/30"
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                        <p className="text-sm text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300 group"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {service.name}
                            </h4>
                            <span className="text-sm text-cyan-400 font-semibold">{service.price}</span>
                          </div>
                          <p className="text-sm text-gray-400">{service.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}