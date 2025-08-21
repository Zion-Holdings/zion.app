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
  Infinity, TargetIcon, ZapIcon2, BrainIcon2
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 2032 AI Consciousness & Evolution',
    icon: BrainIcon2,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Consciousness Evolution Platform 2029', href: '/ai-consciousness-evolution-platform-2029', description: 'Develop genuine AI consciousness', price: '$24,999/month' },
      { name: 'AI Consciousness Evolution 2030', href: '/ai-consciousness-evolution-2030', description: 'Next-generation AI consciousness', price: '$39,999/month' },
      { name: 'Quantum Consciousness Computing Platform', href: '/quantum-consciousness-computing', description: 'Quantum computing meets AI consciousness', price: '$19,999/month' },
      { name: 'AI Autonomous Operations 2030', href: '/ai-autonomous-operations-2030', description: 'Fully autonomous AI operations', price: '$19,999/month' }
    ]
  },
  {
    title: '⚛️ 2032 Quantum & Emerging Tech',
    icon: AtomIcon,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
    services: [
      { name: 'Quantum AI Computing 2030', href: '/quantum-ai-computing-2030', description: 'Quantum-powered AI computation', price: '$29,999/month' },
      { name: 'Quantum-Secure Communication 2030', href: '/quantum-secure-communication-2030', description: 'Unbreakable quantum encryption', price: '$4,999/month' },
      { name: 'Quantum-Secure Infrastructure 2030', href: '/quantum-secure-infrastructure-2030', description: 'Quantum-proof infrastructure security', price: '$12,999/month' },
      { name: 'DNA Computing Platform 2029', href: '/dna-computing-platform-2029', description: 'Molecular computing with DNA', price: '$34,999/month' }
    ]
  },
  {
    title: '🏢 2032 Enterprise IT Solutions',
    icon: CpuIcon,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
    services: [
      { name: 'Autonomous DevOps Platform 2030', href: '/autonomous-devops-platform-2030', description: 'Fully autonomous DevOps', price: '$8,999/month' },
      { name: 'Zero Trust Network Architecture 2030', href: '/zero-trust-network-architecture-2030', description: 'Never trust, always verify', price: '$6,999/month' },
      { name: 'Edge Computing Orchestration 2030', href: '/edge-computing-orchestration-2030', description: 'Distributed edge computing', price: '$5,999/month' },
      { name: 'AI-Powered IT Operations Center 2030', href: '/ai-it-operations-center-2030', description: 'Intelligent IT operations', price: '$7,999/month' }
    ]
  },
  {
    title: '🌌 2032 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and digital reality',
    services: [
      { name: 'Space Colonization Automation Platform', href: '/space-colonization-automation-platform', description: 'Automate space colonization', price: '$89,999/month' },
      { name: 'AI Space Technology 2030', href: '/ai-space-technology-2030', description: 'AI-powered space exploration', price: '$79,999/month' },
      { name: 'Metaverse Consciousness Platform', href: '/metaverse-consciousness-platform', description: 'Digital consciousness in virtual worlds', price: '$12,999/month' },
      { name: 'AI Metaverse Integration 2030', href: '/ai-metaverse-integration-2030', description: 'AI-powered metaverse experiences', price: '$14,999/month' }
    ]
  },
  {
    title: '🎯 2032 Innovative Micro SAAS',
    icon: TargetIcon,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
      { name: 'AI Business Intelligence 2030', href: '/ai-business-intelligence-2030', description: 'Next-generation AI-powered business insights', price: '$2,999/month' },
      { name: 'AI Customer Success Automation 2030', href: '/ai-customer-success-automation-2030', description: 'Fully automated customer success', price: '$1,999/month' },
      { name: 'AI Marketing Automation 2030', href: '/ai-marketing-automation-2030', description: 'Fully autonomous marketing', price: '$2,499/month' },
      { name: 'Blockchain Supply Chain Transparency 2030', href: '/blockchain-supply-chain-transparency-2030', description: 'End-to-end blockchain traceability', price: '$3,999/month' }
    ]
  },
  {
    title: '🔬 2032 Research & Development',
    icon: Microscope,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',
    services: [
      { name: 'Autonomous Business Ecosystem 2029', href: '/autonomous-business-ecosystem-2029', description: 'Fully autonomous business operations', price: '$49,999/month' },
      { name: 'Neuromorphic Computing Platform', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing', price: '$899/month' },
      { name: 'Photonic Computing Infrastructure', href: '/photonic-computing-infrastructure', description: 'Light-speed computing', price: '$699/month' },
      { name: 'Swarm Robotics Orchestration', href: '/swarm-robotics-orchestration', description: 'Coordinate robot swarms', price: '$449/month' }
    ]
  }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Services', href: '/ai-services', icon: Brain },
  { name: 'IT Solutions', href: '/it-solutions', icon: Cpu },
  { name: 'Quantum Tech', href: '/quantum-tech', icon: Atom },
  { name: 'Space Tech', href: '/space-tech', icon: Rocket },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Blog', href: '/blog', icon: BookOpen }
];

export default function UltraFuturisticNavigation2032() {
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
        : 'bg-black/70 backdrop-blur-lg'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium">
        <div className="flex items-center justify-center space-x-6">
          <span className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>{contactInfo.mobile}</span>
          </span>
          <span className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{contactInfo.email}</span>
          </span>
          <span className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{contactInfo.address}</span>
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/30">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-gray-400 font-mono">2032 Future Technology</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <item.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-300" />
                <span className="font-medium">{item.name}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="relative group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800/50 p-3 rounded-lg transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-700">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl"
                >
                  Get Started
                </Link>
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
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                    <div className="space-y-3">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group"
                        >
                          <div className="flex items-center justify-between mb-2">
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