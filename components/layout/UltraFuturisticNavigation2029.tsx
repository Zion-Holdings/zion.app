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
  CircuitBoard, Satellite, Dna, Beaker, TestTube,
  Truck, Plane, Ship, Train, Bus, ArrowRight
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2029 Revolutionary Innovations',
    icon: Rocket,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Beyond the future of technology',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-2029', description: 'Develop truly conscious AI systems', price: '$24,999/month' },
      { name: 'Quantum Biotech Synthesis Platform', href: '/quantum-biotech-synthesis-2029', description: 'Quantum-powered drug discovery', price: '$18,999/month' },
      { name: 'Autonomous Space Mining Operations', href: '/autonomous-space-mining-2029', description: 'Asteroid resource extraction', price: '$45,999/month' },
      { name: 'Quantum Internet Protocol Suite', href: '/quantum-internet-protocol-2029', description: 'Unbreakable quantum communication', price: '$32,999/month' }
    ]
  },
  {
    title: '🧠 Advanced AI & Consciousness',
    icon: Brain,
    color: 'from-emerald-600 via-teal-600 to-cyan-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-2029', description: '99.9% accurate climate modeling', price: '$16,999/month' },
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-2029', description: 'Revolutionary medical diagnosis', price: '$28,999/month' },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-2029', description: 'Direct brain-to-computer communication', price: '$42,999/month' },
      { name: 'AI Business Automation Platform', href: '/ai-business-automation-2029', description: 'Complete business process automation', price: '$19,999/month' }
    ]
  },
  {
    title: '⚛️ Quantum Computing & Technology',
    icon: Atom,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
    services: [
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-2029', description: 'Quantum-powered trading algorithms', price: '$38,999/month' },
      { name: 'Quantum Robotics Platform', href: '/quantum-robotics-2029', description: 'Quantum-enhanced autonomous systems', price: '$36,999/month' },
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization-2029', description: 'Smart grid quantum optimization', price: '$26,999/month' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot-platform-2029', description: 'Quantum-enhanced sensor networks', price: '$24,999/month' }
    ]
  },
  {
    title: '🏙️ Smart Cities & Infrastructure',
    icon: Building,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Intelligent urban solutions',
    services: [
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai-2029', description: 'Self-optimizing factories', price: '$34,999/month' },
      { name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management', description: 'IoT and AI urban optimization', price: '$5,999/month' },
      { name: 'Digital Twin Manufacturing Platform', href: '/digital-twin-manufacturing-platform', description: 'Virtual manufacturing replicas', price: '$4,999/month' },
      { name: 'IoT Energy Management System', href: '/iot-energy-management-system', description: 'Smart energy optimization', price: '$1,999/month' }
    ]
  },
  {
    title: '🌍 Metaverse & Digital Reality',
    icon: Globe,
    color: 'from-purple-600 via-pink-600 to-rose-600',
    description: 'Virtual worlds and experiences',
    services: [
      { name: 'Metaverse Digital Reality Platform', href: '/metaverse-digital-reality-2029', description: 'Immersive virtual experiences', price: '$22,999/month' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: '3D holographic events', price: '$2,999/month' },
      { name: 'AI Multimodal Fusion Platform', href: '/ai-multimodal-fusion-platform', description: 'Multi-sensory AI experiences', price: '$3,999/month' },
      { name: 'Quantum Metaverse Platform', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds', price: '$4,999/month' }
    ]
  },
  {
    title: '🔬 Biotechnology & Research',
    icon: Microscope,
    color: 'from-green-600 via-emerald-600 to-teal-600',
    description: 'Advanced biotech solutions',
    services: [
      { name: 'DNA Computing Platform', href: '/dna-computing-platform-2029', description: 'Molecular information processing', price: '$29,999/month' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform', description: 'AI-powered biotech research', price: '$3,999/month' },
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion', description: 'Intelligent mental health support', price: '$1,999/month' },
      { name: 'Quantum Biotech Synthesis', href: '/quantum-biotech-synthesis-2029', description: 'Quantum-powered drug discovery', price: '$18,999/month' }
    ]
  },
  {
    title: '🚗 Autonomous & Mobility',
    icon: Car,
    color: 'from-red-600 via-orange-600 to-yellow-600',
    description: 'Self-driving and mobility solutions',
    services: [
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform', description: 'Intelligent autonomous vehicles', price: '$3,999/month' },
      { name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network', description: 'AI-powered drone delivery', price: '$1,999/month' },
      { name: 'Smart Traffic Management System', href: '/smart-traffic-management', description: 'AI traffic optimization', price: '$4,999/month' },
      { name: 'Electric Vehicle Charging Network', href: '/ev-charging-network', description: 'Smart EV infrastructure', price: '$2,999/month' }
    ]
  },
  {
    title: '🏥 Healthcare & Medical AI',
    icon: Heart,
    color: 'from-pink-600 via-rose-600 to-red-600',
    description: 'Advanced healthcare solutions',
    services: [
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-2029', description: 'Revolutionary medical diagnosis', price: '$28,999/month' },
      { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber-pro', description: 'Advanced meeting transcription', price: '$1,499/month' },
      { name: 'AI Phone Agent', href: '/ai-phone-agent', description: 'Intelligent phone automation', price: '$2,999/month' },
      { name: 'Vulnerability Assessment & Penetration Testing', href: '/vulnerability-assessment-penetration-testing', description: 'Comprehensive security testing', price: '$4,999/month' }
    ]
  },
  {
    title: '💼 Business & Enterprise Solutions',
    icon: Briefcase,
    color: 'from-gray-600 via-slate-600 to-zinc-600',
    description: 'Enterprise-grade solutions',
    services: [
      { name: 'AI Customer Intelligence Platform', href: '/ai-customer-intelligence-2029', description: 'Customer behavior analysis', price: '$15,999/month' },
      { name: 'AI Financial Advisory Platform', href: '/ai-financial-advisory-2029', description: 'Automated financial planning', price: '$22,999/month' },
      { name: 'AI Legal Automation Platform', href: '/ai-legal-automation-2029', description: 'Legal process automation', price: '$18,999/month' },
      { name: 'AI HR & Recruitment Platform', href: '/ai-hr-recruitment-2029', description: 'HR process automation', price: '$16,999/month' }
    ]
  },
  {
    title: '⛓️ Blockchain & Web3',
    icon: Layers,
    color: 'from-orange-600 via-amber-600 to-yellow-600',
    description: 'Decentralized solutions',
    services: [
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end supply chain visibility', price: '$2,499/month' },
      { name: 'Smart Contract Automation Platform', href: '/smart-contract-automation', description: 'Automated blockchain contracts', price: '$1,999/month' },
      { name: 'DeFi Yield Optimization', href: '/defi-yield-optimization', description: 'Maximize DeFi returns', price: '$3,999/month' },
      { name: 'NFT Marketplace Platform', href: '/nft-marketplace-platform', description: 'Complete NFT ecosystem', price: '$2,999/month' }
    ]
  },
  {
    title: '🔒 Cybersecurity & Compliance',
    icon: Shield,
    color: 'from-red-600 via-pink-600 to-purple-600',
    description: 'Advanced security solutions',
    services: [
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Advanced network security', price: '$3,999/month' },
      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall', description: 'Unbreakable quantum encryption', price: '$4,999/month' },
      { name: 'Incident Automation Suite', href: '/incident-automation-suite', description: 'Automated incident response', price: '$2,999/month' },
      { name: 'SOC2 Evidence Automation', href: '/soc2-evidence-automation', description: 'Compliance automation', price: '$2,499/month' }
    ]
  },
  {
    title: '📊 Data & Analytics',
    icon: BarChart3,
    color: 'from-blue-600 via-indigo-600 to-purple-600',
    description: 'Data-driven insights',
    services: [
      { name: 'AI Data Analytics Platform', href: '/ai-data-analytics', description: 'Advanced data analysis', price: '$2,999/month' },
      { name: 'Data Pipeline Health Monitor', href: '/data-pipeline-health', description: 'Pipeline performance monitoring', price: '$1,999/month' },
      { name: 'Data Quality Monitor', href: '/data-quality-monitor', description: 'Data quality assurance', price: '$1,999/month' },
      { name: 'Vector Search Starter', href: '/vector-search-starter', description: 'AI-powered search', price: '$1,499/month' }
    ]
  }
];

const UltraFuturisticNavigation2029: React.FC = () => {
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
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="hover:text-cyan-400 transition-colors">
                <a href={`tel:${contactInfo.mobile}`}>{contactInfo.mobile}</a>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="hover:text-cyan-400 transition-colors">
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-cyan-400">🚀 2029 Revolutionary Technology Services</span>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400">Leading Innovation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl' 
          : 'bg-gradient-to-r from-black/95 via-purple-900/95 to-black/95 backdrop-blur-lg'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-gray-400">2029 Revolutionary Technology</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="relative group">
                  <button
                    className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                    onMouseEnter={() => setActiveCategory(index)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="font-medium">{category.title.split(' ')[0]}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {activeCategory === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-96 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl p-6 z-50"
                        onMouseEnter={() => setActiveCategory(index)}
                        onMouseLeave={() => setActiveCategory(null)}
                      >
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                          <p className="text-gray-400 text-sm">{category.description}</p>
                        </div>
                        
                        <div className="space-y-3">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.href}
                              className="block p-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300 group"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {service.name}
                                  </h4>
                                  <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                                </div>
                                <div className="text-right">
                                  <span className="text-sm font-bold text-cyan-400">{service.price}</span>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-purple-500/30">
                          <Link
                            href={`/services?category=${encodeURIComponent(category.title)}`}
                            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <span>View All {category.title.split(' ')[0]} Services</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Quick Links */}
              <div className="flex items-center space-x-4">
                <Link
                  href="/pricing"
                  className="text-white hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  <DollarSign className="w-5 h-5 inline mr-2" />
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Contact
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  <Users className="w-5 h-5 inline mr-2" />
                  About
                </Link>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-purple-500/30 z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={closeMenu}
                  className="text-white hover:text-cyan-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {serviceCategories.map((category, index) => (
                  <div key={index} className="border-b border-purple-500/30 pb-4">
                    <h3 className="text-lg font-semibold text-white mb-3">{category.title}</h3>
                    <div className="space-y-2">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.href}
                          onClick={closeMenu}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-4">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center py-3 rounded-xl font-medium"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-32"></div>
    </>
  );
};

export default UltraFuturisticNavigation2029;