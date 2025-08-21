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
    title: '🧠 2029 AI Consciousness & Evolution',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    description: 'Beyond human consciousness simulation',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Evolve AI consciousness beyond human understanding', price: '$25,999/month' },
      { name: 'Autonomous AI Decision Engine', href: '/autonomous-ai-decision-engine', description: 'AI systems that make complex decisions autonomously', price: '$22,999/month' },
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'AI systems with advanced emotional intelligence', price: '$16,999/month' },
      { name: 'AI Multimodal Fusion Platform', href: '/ai-multimodal-fusion-platform', description: 'AI that processes multiple data types simultaneously', price: '$19,999/month' }
    ]
  },
  {
    title: '⚛️ 2029 Quantum & Advanced Infrastructure',
    icon: Atom,
    color: 'from-indigo-600 to-purple-600',
    description: 'Quantum-powered infrastructure solutions',
    services: [
      { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum-powered cloud computing infrastructure', price: '$15,999/month' },
      { name: 'Zero Trust Quantum Security Platform', href: '/zero-trust-quantum-security', description: 'Quantum-powered zero trust security architecture', price: '$8,999/month' },
      { name: 'Quantum Edge Computing Orchestration', href: '/quantum-edge-computing-orchestration', description: 'Quantum-powered edge computing management', price: '$12,999/month' },
      { name: 'Quantum Blockchain Infrastructure', href: '/quantum-blockchain-infrastructure', description: 'Quantum-secured blockchain infrastructure', price: '$9,999/month' }
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
    color: 'from-cyan-600 to-blue-600',
    description: 'Intelligent urban solutions',
    services: [
      { name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management', description: 'Comprehensive urban management', price: '$5,999/month' },
      { name: 'IoT Energy Management System', href: '/iot-energy-management-system', description: 'Smart energy optimization', price: '$3,999/month' },
      { name: 'Digital Twin Manufacturing Platform', href: '/digital-twin-manufacturing-platform', description: 'Virtual manufacturing optimization', price: '$4,999/month' }
    ]
  },
  {
    title: '💼 Business & Enterprise Solutions',
    icon: Briefcase,
    color: 'from-violet-600 to-purple-600',
    description: 'Enterprise-grade business solutions',
    services: [
      { name: 'AI Brand Personality Generator', href: '/ai-brand-personality-generator', description: 'Generate unique brand personalities with AI', price: '$299/month' },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success with intelligent AI', price: '$499/month' },
      { name: 'Smart Inventory Management System', href: '/smart-inventory-management-system', description: 'AI-powered inventory optimization', price: '$599/month' }
    ]
  },
  {
    title: '🔒 Cybersecurity & Compliance',
    icon: Shield,
    color: 'from-red-600 to-pink-600',
    description: 'Advanced security solutions',
    services: [
      { name: 'API Security Scanner', href: '/api-security-scanner', description: 'Automated OWASP and supply chain checks', price: '$59/month' },
      { name: 'Vulnerability Assessment & Penetration Testing', href: '/vulnerability-assessment-penetration-testing', description: 'Comprehensive security testing', price: '$2,999/month' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Advanced network security', price: '$4,999/month' }
    ]
  }
];

const UltraFuturisticNavigation2029: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
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
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900/90 to-blue-900/90 border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-cyan-300">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2 text-pink-300">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-blue-300">
              <MapPin className="w-3 h-3" />
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
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur opacity-30"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">2029 Future Technology</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-purple-400 transition-colors duration-200">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="grid grid-cols-2 gap-6">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <category.icon className="w-5 h-5 text-purple-400" />
                        <h3 className="font-semibold text-white">{category.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400">{category.description}</p>
                      <div className="space-y-2">
                        {category.services.slice(0, 3).map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            className="block p-3 rounded-lg bg-gray-900/50 hover:bg-purple-900/30 border border-gray-800 hover:border-purple-500/50 transition-all duration-200 group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-white group-hover:text-purple-300 transition-colors">
                                  {service.name}
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">{service.description}</p>
                              </div>
                              <span className="text-sm font-semibold text-purple-400">{service.price}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Explore our complete service catalog</p>
                    <Link
                      href="/services"
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/pricing" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg bg-gray-900/50 hover:bg-purple-900/30 border border-gray-800 hover:border-purple-500/50 transition-all duration-200"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="block text-white hover:text-purple-400 transition-colors duration-200"
              >
                Home
              </Link>
              
              {/* Mobile Services Accordion */}
              <div className="space-y-2">
                <button
                  onClick={() => setActiveCategory(activeCategory === 0 ? null : 0)}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-900/50 hover:bg-purple-900/30 border border-gray-800 hover:border-purple-500/50 transition-all duration-200"
                >
                  <span className="text-white">Services</span>
                  <ChevronDown className={`w-4 h-4 text-purple-400 transition-transform duration-200 ${
                    activeCategory === 0 ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeCategory === 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 space-y-2"
                  >
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="text-sm font-medium text-purple-400">{category.title}</h4>
                        {category.services.slice(0, 2).map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            onClick={closeMenu}
                            className="block p-2 rounded bg-gray-800/50 hover:bg-purple-800/30 transition-colors duration-200"
                          >
                            <div className="text-sm text-white">{service.name}</div>
                            <div className="text-xs text-gray-400">{service.price}</div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              <Link
                href="/pricing"
                onClick={closeMenu}
                className="block text-white hover:text-purple-400 transition-colors duration-200"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block text-white hover:text-purple-400 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block text-white hover:text-purple-400 transition-colors duration-200"
              >
                Contact
              </Link>
              
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
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
};

export default UltraFuturisticNavigation2029;