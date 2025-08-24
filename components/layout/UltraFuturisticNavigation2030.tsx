import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Brain, Atom, Globe, Zap, Sparkles, Shield, 
  DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye,
  BrainCircuit, Rocket, Microscope, Lightbulb
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2030 AI & Consciousness',
    icon: BrainCircuit,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' },
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' },
      { name: 'AI Dream Interpreter Platform', href: '/ai-dream-interpreter-platform', description: 'Dream analysis with AI psychology', price: '$299/month' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ]
  },
  {
    title: '⚛️ 2030 Quantum & Biotech',
    icon: Atom,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and biotechnology breakthroughs',
    services: [
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' },
      { name: 'Biotech DNA Computing Platform', href: '/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25,999/month' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35,999/month' },
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio', description: 'Quantum-enhanced creativity', price: '$1,999/month' },
      { name: 'Biotech Personalized Nutrition', href: '/biotech-personalized-nutrition', description: 'DNA-based nutrition plans', price: '$599/month' }
    ]
  },
  {
    title: '🌌 2030 Space & Metaverse',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and digital reality',
    services: [
      { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' },
      { name: 'Metaverse Digital Reality Platform', href: '/metaverse-digital-reality-platform', description: 'Immersive virtual worlds', price: '$8,999/month' },
      { name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' }
    ]
  },
  {
    title: '🏢 2030 Enterprise IT',
    icon: Building,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
    services: [
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', description: 'Fully autonomous DevOps', price: '$6,999/month' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud performance', price: '$18,999/month' },
      { name: 'AI-Powered Enterprise Security', href: '/ai-powered-enterprise-security', description: 'AI-driven threat detection', price: '$9,999/month' },
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center', description: 'Self-managing IT infrastructure', price: '$14,999/month' }
    ]
  },
  {
    title: '🎯 2030 Micro SAAS',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
      { name: 'AI Emotion-Based Marketing', href: '/ai-emotion-based-marketing', description: 'Emotion-driven marketing campaigns', price: '$899/month' },
      { name: 'Quantum Learning Accelerator', href: '/quantum-learning-accelerator', description: 'Quantum-enhanced education', price: '$799/month' },
      { name: 'Intelligent Data Governance', href: '/intelligent-data-governance', description: 'AI-powered data management', price: '$7,999/month' }
    ]
  },
  {
    title: '🔬 2030 Research & Innovation',
    icon: Microscope,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',
    services: [
      { name: 'Advanced Research Automation', href: '/advanced-research-automation', description: 'Automated research workflows', price: '$4,999/month' },
      { name: 'Quantum Research Platform', href: '/quantum-research-platform', description: 'Quantum computing research', price: '$8,999/month' },
      { name: 'AI Research Assistant', href: '/ai-research-assistant', description: 'Intelligent research support', price: '$2,999/month' },
      { name: 'Biotech Research Suite', href: '/biotech-research-suite', description: 'Comprehensive biotech tools', price: '$6,999/month' }
    ]
  }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Layers },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
  { name: 'Careers', href: '/careers', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const quickLinks = [
  { name: 'AI Services', href: '/services/ai', icon: Brain },
  { name: 'Quantum Tech', href: '/services/quantum', icon: Atom },
  { name: 'Space Technology', href: '/services/space', icon: Rocket },
  { name: 'Enterprise IT', href: '/services/enterprise', icon: Cpu },
  { name: 'Micro SAAS', href: '/services/micro-saas', icon: Target },
  { name: 'Research Tools', href: '/services/research', icon: Microscope }
];

const UltraFuturisticNavigation2030: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl' 
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
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech
                </span>
                <span className="text-xs text-slate-400 font-medium">2030 Innovation Hub</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 group"
                >
                  <item.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Service Categories Dropdown */}
          <div className="hidden lg:block relative">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onMouseEnter={() => setActiveCategory(0)}
              onMouseLeave={() => setActiveCategory(null)}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 group px-4 py-2 rounded-lg hover:bg-slate-800/50"
            >
              <Briefcase className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
              <span className="font-medium">All Services</span>
              <ChevronDown className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
            </motion.button>

            <AnimatePresence>
              {activeCategory !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setActiveCategory(0)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl p-6"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <category.icon className="w-5 h-5 text-purple-400" />
                          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                        </div>
                        <p className="text-sm text-slate-400">{category.description}</p>
                        <div className="space-y-2">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.href}
                              className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors duration-200">
                                    {service.name}
                                  </h4>
                                  <p className="text-xs text-slate-400 mt-1">{service.description}</p>
                                </div>
                                <span className="text-xs font-bold text-purple-400">{service.price}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <Link
              href={`tel:${contactInfo.mobile}`}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 group"
            >
              <Phone className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
              <span className="text-sm font-medium">{contactInfo.mobile}</span>
            </Link>
            <Link
              href={`mailto:${contactInfo.email}`}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 group"
            >
              <Mail className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
              <span className="text-sm font-medium">{contactInfo.email}</span>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
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
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/20"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-3">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200 p-3 rounded-lg hover:bg-slate-800/50"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Quick Links */}
              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-sm font-semibold text-slate-400 mb-3">Quick Access</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 p-3 rounded-lg hover:bg-slate-800/50"
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-slate-700 pt-6 space-y-3">
                <h3 className="text-sm font-semibold text-slate-400">Contact Information</h3>
                <div className="space-y-2">
                  <Link
                    href={`tel:${contactInfo.mobile}`}
                    className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.mobile}</span>
                  </Link>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </Link>
                  <div className="flex items-start space-x-3 text-slate-300">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span className="text-sm">{contactInfo.address}</span>
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

export default UltraFuturisticNavigation2030;