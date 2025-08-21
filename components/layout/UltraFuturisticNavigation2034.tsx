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
  TargetIcon, MicroscopeIcon, StarIcon, Infinity,
  CircuitBoard, Satellite, Dna, Microchip,
  Telescope, Beaker, TestTube, Syringe,
  Pill, Stethoscope, HeartPulse, Activity,
  Lightbulb, Flame, Battery, Power,
  Wifi, Bluetooth, Radio, Antenna, Signal,
  Compass, Navigation, Map, Globe2
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const mainNavigation = [
  {
    title: '🏠 Home',
    href: '/',
    description: 'Welcome to Zion Tech Group'
  },
  {
    title: '🚀 Services',
    href: '/services',
    description: 'Our comprehensive service portfolio'
  },
  {
    title: '💎 2034 Innovations',
    href: '/2034-innovations',
    description: 'Cutting-edge 2034 technology showcase'
  },
  {
    title: '💰 Pricing',
    href: '/pricing',
    description: 'Transparent pricing for all services'
  },
  {
    title: '📚 Resources',
    href: '/resources',
    description: 'Knowledge base and documentation'
  },
  {
    title: '📰 News',
    href: '/news',
    description: 'Latest updates and industry insights'
  },
  {
    title: '📞 Contact',
    href: '/contact',
    description: 'Get in touch with our team'
  }
];

const serviceCategories = [
  {
    title: '🧠 2034 AI Consciousness & Evolution',
    icon: BrainIcon,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    href: '/services/ai-consciousness',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' },
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' },
      { name: 'AI Dream Interpreter Platform', href: '/ai-dream-interpreter-platform', description: 'Dream analysis with AI psychology', price: '$299/month' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ]
  },
  {
    title: '⚛️ 2034 Quantum & Emerging Tech',
    icon: AtomIcon,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
    href: '/services/quantum-tech',
    services: [
      { name: 'Quantum DNA Computing Platform', href: '/quantum-dna-computing-platform', description: 'DNA-based quantum computation', price: '$25,999/month' },
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35,999/month' },
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio', description: 'Quantum-enhanced creativity', price: '$1,999/month' },
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform', description: 'Quantum-powered AI', price: '$9,999/month' }
    ]
  },
  {
    title: '🌌 2034 Space & Metaverse Tech',
    icon: RocketIcon,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and digital reality',
    href: '/services/space-tech',
    services: [
      { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' },
      { name: 'Metaverse AI Development Platform', href: '/metaverse-ai-development-platform', description: 'Build immersive virtual worlds', price: '$499/month' },
      { name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' },
      { name: 'Neural Interface Development Platform', href: '/neural-interface-development-platform', description: 'Brain-computer interfaces', price: '$12,999/month' }
    ]
  },
  {
    title: '🏙️ 2034 Enterprise IT Solutions',
    icon: CpuIcon,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
    href: '/services/enterprise-it',
    services: [
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', description: 'Fully autonomous DevOps', price: '$799/month' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Never trust, always verify', price: '$599/month' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed edge computing', price: '$449/month' },
      { name: 'AI-Powered IT Operations Center', href: '/ai-it-operations-center', description: 'Intelligent IT operations', price: '$699/month' },
      { name: 'Edge AI Computing Platform', href: '/edge-ai-computing-platform', description: 'AI computing at the edge', price: '$1,999/month' }
    ]
  },
  {
    title: '🎯 2034 Innovative Micro SAAS',
    icon: TargetIcon,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    href: '/services/micro-saas',
    services: [
      { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'Intelligent business insights', price: '$299/month' },
      { name: 'Quantum-Secure Communication Platform', href: '/quantum-secure-communication-platform', description: 'Unbreakable encryption', price: '$599/month' },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success', price: '$199/month' },
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end traceability', price: '$399/month' },
      { name: 'Digital Twin Simulation Platform', href: '/digital-twin-simulation-platform', description: 'Create and manage digital twins', price: '$3,999/month' }
    ]
  },
  {
    title: '🔬 2034 Research & Development',
    icon: MicroscopeIcon,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough technologies and innovations',
    href: '/services/research-development',
    services: [
      { name: 'Synthetic Biology Automation Platform', href: '/synthetic-biology-automation-platform', description: 'Automate genetic engineering', price: '$18,999/month' },
      { name: 'Nanotechnology Materials Platform', href: '/nanotechnology-materials-platform', description: 'Design advanced nanomaterials', price: '$22,999/month' },
      { name: 'Fusion Energy Control Platform', href: '/fusion-energy-control-platform', description: 'Control fusion energy systems', price: '$35,999/month' },
      { name: 'Swarm Robotics Orchestration Platform', href: '/swarm-robotics-orchestration-platform', description: 'Coordinate robot swarms', price: '$8,999/month' },
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform', description: 'AI-powered autonomous vehicles', price: '$6,999/month' }
    ]
  }
];

const additionalPages = [
  {
    title: '📊 Market Analysis',
    href: '/market-analysis',
    description: 'Industry insights and market trends'
  },
  {
    title: '🏆 Case Studies',
    href: '/case-studies',
    description: 'Success stories and implementations'
  },
  {
    title: '🎓 Careers',
    href: '/careers',
    description: 'Join our innovative team'
  },
  {
    title: '📋 About Us',
    href: '/about',
    description: 'Learn about Zion Tech Group'
  },
  {
    title: '🔒 Privacy Policy',
    href: '/privacy',
    description: 'Your privacy matters to us'
  },
  {
    title: '📄 Terms of Service',
    href: '/terms',
    description: 'Service terms and conditions'
  },
  {
    title: '🍪 Cookie Policy',
    href: '/cookies',
    description: 'How we use cookies'
  },
  {
    title: '📞 Support',
    href: '/support',
    description: 'Get help and support'
  }
];

export default function UltraFuturisticNavigation2034() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-purple-900/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-center md:justify-between text-sm text-cyan-200">
            <div className="flex items-center space-x-6">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeAllDropdowns}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400 -mt-1">2034 Innovation Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation Links */}
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group"
                onClick={closeAllDropdowns}
              >
                {item.title}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={() => toggleDropdown('services')}
              >
                <span>🚀 Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-screen max-w-6xl -ml-32 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviceCategories.map((category) => (
                          <div key={category.title} className="group">
                            <Link
                              href={category.href}
                              className="block p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-105"
                              onClick={closeAllDropdowns}
                            >
                              <div className="flex items-center space-x-3 mb-3">
                                <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                                  <category.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                    {category.title}
                                  </h3>
                                  <p className="text-sm text-gray-400">{category.description}</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {category.services.slice(0, 3).map((service) => (
                                  <div key={service.name} className="flex items-center justify-between text-sm">
                                    <span className="text-gray-300 truncate">{service.name}</span>
                                    <span className="text-cyan-400 font-medium">{service.price}</span>
                                  </div>
                                ))}
                                {category.services.length > 3 && (
                                  <div className="text-xs text-gray-500 text-center pt-2">
                                    +{category.services.length - 3} more services
                                  </div>
                                )}
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Additional Pages Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={() => toggleDropdown('more')}
              >
                <span>📚 More</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'more' ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'more' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {additionalPages.map((page) => (
                          <Link
                            key={page.href}
                            href={page.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 group"
                            onClick={closeAllDropdowns}
                          >
                            <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                              <span className="text-lg">{page.title.split(' ')[0]}</span>
                            </div>
                            <div>
                              <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                {page.title.split(' ').slice(1).join(' ')}
                              </h4>
                              <p className="text-xs text-gray-400">{page.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
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
                {/* Main Navigation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white border-b border-gray-700/50 pb-2">
                    Main Navigation
                  </h3>
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                      onClick={closeAllDropdowns}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                {/* Service Categories */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white border-b border-gray-700/50 pb-2">
                    Service Categories
                  </h3>
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="space-y-2">
                      <Link
                        href={category.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 font-medium"
                        onClick={closeAllDropdowns}
                      >
                        {category.title}
                      </Link>
                      <div className="ml-4 space-y-1">
                        {category.services.slice(0, 3).map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                            onClick={closeAllDropdowns}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Pages */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white border-b border-gray-700/50 pb-2">
                    Additional Pages
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {additionalPages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                        onClick={closeAllDropdowns}
                      >
                        {page.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 pt-4 border-t border-gray-700/50">
                  <h3 className="text-lg font-semibold text-white">Contact Information</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>{contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-pink-400" />
                      <span>{contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}