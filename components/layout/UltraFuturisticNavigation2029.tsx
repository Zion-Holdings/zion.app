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
  Satellite, Network, Server, CpuIcon
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2029 Revolutionary AI Services',
    icon: Brain,
    color: 'from-violet-600 to-purple-600',
    description: 'Next-generation artificial intelligence',
    services: [
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform-2029', description: 'Real-time emotion detection and response', price: '$3,999/month' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator-2029', description: 'Multi-model creativity fusion', price: '$5,999/month' },
      { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform-2029', description: 'IoT-powered predictive maintenance', price: '$2,999/month' },
      { name: 'AI Personalized Learning Platform', href: '/ai-personalized-learning-platform-2029', description: 'Adaptive learning with AI', price: '$1,999/month' },
      { name: 'AI Healthcare Diagnostic Platform', href: '/ai-healthcare-diagnostic-platform-2029', description: 'Advanced medical AI diagnostics', price: '$4,999/month' }
    ]
  },
  {
    title: '⚛️ 2029 Quantum Innovation Services',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    description: 'Quantum computing breakthroughs',
    services: [
      { name: 'Quantum Financial Optimization Platform', href: '/quantum-financial-optimization-platform-2029', description: 'Quantum-powered financial optimization', price: '$12,999/month' },
      { name: 'Quantum Cybersecurity Fortress', href: '/quantum-cybersecurity-fortress-2029', description: 'Unbreakable quantum encryption', price: '$8,999/month' },
      { name: 'Quantum Drug Discovery Platform', href: '/quantum-drug-discovery-platform-2029', description: '1000x faster drug discovery', price: '$15,999/month' },
      { name: 'Quantum Logistics Optimization Platform', href: '/quantum-logistics-optimization-platform-2029', description: 'Quantum supply chain optimization', price: '$6,999/month' }
    ]
  },
  {
    title: '🌌 2029 Space Innovation Services',
    icon: Rocket,
    color: 'from-blue-600 to-cyan-600',
    description: 'Space technology breakthroughs',
    services: [
      { name: 'Autonomous Space Mining Platform', href: '/autonomous-space-mining-platform-2029', description: 'Asteroid and lunar mining', price: '$25,999/month' },
      { name: 'Space Weather Prediction Platform', href: '/space-weather-prediction-platform-2029', description: 'Solar storm and cosmic radiation prediction', price: '$4,999/month' },
      { name: 'Satellite Constellation Management', href: '/satellite-constellation-management-2029', description: 'Intelligent satellite network management', price: '$8,999/month' },
      { name: 'Space Debris Tracking Platform', href: '/space-debris-tracking-platform-2029', description: 'Real-time debris monitoring', price: '$3,999/month' }
    ]
  },
  {
    title: '🧬 2029 Emerging Technology Services',
    icon: Microscope,
    color: 'from-emerald-600 to-teal-600',
    description: 'Cutting-edge emerging technologies',
    services: [
      { name: 'DNA Computing Platform', href: '/dna-computing-platform-2029', description: 'Molecular computing with DNA', price: '$19,999/month' },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform-2029', description: 'Direct brain-computer communication', price: '$12,999/month' },
      { name: 'Quantum-Biological Computing Platform', href: '/quantum-biological-computing-2029', description: 'Hybrid quantum-biological systems', price: '$22,999/month' },
      { name: 'Synthetic Biology Automation Platform', href: '/synthetic-biology-automation-2029', description: 'Automated biological system design', price: '$9,999/month' }
    ]
  },
  {
    title: '🏢 2029 Enterprise IT Services',
    icon: Building,
    color: 'from-orange-600 to-red-600',
    description: 'Enterprise-grade IT solutions',
    services: [
      { name: 'Zero-Trust Enterprise Platform', href: '/zero-trust-enterprise-platform-2029', description: 'Continuous verification security', price: '$7,999/month' },
      { name: 'AI-Powered IT Automation Platform', href: '/ai-powered-it-automation-platform-2029', description: 'Intelligent IT operations automation', price: '$5,999/month' },
      { name: 'Quantum-Ready Enterprise Platform', href: '/quantum-ready-enterprise-platform-2029', description: 'Future-proof quantum enterprise', price: '$15,999/month' },
      { name: 'Autonomous Enterprise Operations Platform', href: '/autonomous-enterprise-operations-2029', description: 'Self-managing enterprise systems', price: '$12,999/month' }
    ]
  },
  {
    title: '🔒 Advanced Cybersecurity Solutions',
    icon: Shield,
    color: 'from-red-600 to-pink-600',
    description: 'Next-generation security',
    services: [
      { name: 'Zero-Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Continuous verification security', price: '$4,999/month' },
      { name: 'Vulnerability Assessment & Penetration Testing', href: '/vulnerability-assessment-penetration-testing', description: 'Comprehensive security testing', price: '$3,999/month' },
      { name: 'SOC2 Evidence Automation', href: '/soc2-evidence-automation', description: 'Automated compliance evidence', price: '$2,999/month' },
      { name: 'TLS Certificate Monitor', href: '/tls-certificate-monitor', description: 'SSL/TLS certificate management', price: '$1,999/month' }
    ]
  },
  {
    title: '📊 Data & Analytics Solutions',
    icon: BarChart3,
    color: 'from-green-600 to-emerald-600',
    description: 'Intelligent data solutions',
    services: [
      { name: 'Data Catalog & Lineage', href: '/data-catalog-lineage', description: 'Comprehensive data governance', price: '$2,999/month' },
      { name: 'Data Pipeline Health Monitor', href: '/data-pipeline-health', description: 'Real-time pipeline monitoring', price: '$1,999/month' },
      { name: 'Data Quality Monitor', href: '/data-quality-monitor', description: 'Automated data quality assurance', price: '$2,499/month' },
      { name: 'Vector Search Starter', href: '/vector-search-starter', description: 'AI-powered vector search', price: '$1,499/month' }
    ]
  },
  {
    title: '☁️ Cloud & Infrastructure',
    icon: Cloud,
    color: 'from-blue-600 to-indigo-600',
    description: 'Scalable cloud solutions',
    services: [
      { name: 'Managed PostgreSQL HA', href: '/managed-postgresql-ha', description: 'High-availability database management', price: '$3,999/month' },
      { name: 'Infrastructure Drift Detector', href: '/infrastructure-drift-detector', description: 'Automated drift detection', price: '$2,999/month' },
      { name: 'Serverless Cron Manager', href: '/serverless-cron-manager', description: 'Cloud-native job scheduling', price: '$1,999/month' },
      { name: 'Cron Job Scheduler', href: '/cron-job-scheduler', description: 'Advanced job scheduling', price: '$1,499/month' }
    ]
  },
  {
    title: '🤖 AI & Machine Learning',
    icon: CpuIcon,
    color: 'from-purple-600 to-violet-600',
    description: 'Intelligent AI solutions',
    services: [
      { name: 'LLM Gateway', href: '/llm-gateway', description: 'Large language model management', price: '$4,999/month' },
      { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber-pro', description: 'Advanced meeting transcription', price: '$2,999/month' },
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion', description: 'AI-powered mental health support', price: '$1,999/month' },
      { name: 'AI Multimodal Fusion Platform', href: '/ai-multimodal-fusion-platform', description: 'Multi-modal AI processing', price: '$3,999/month' }
    ]
  },
  {
    title: '🚀 Space & Emerging Tech',
    icon: Satellite,
    color: 'from-cyan-600 to-blue-600',
    description: 'Space technology solutions',
    services: [
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI-powered space solutions', price: '$5,999/month' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Holographic event technology', price: '$4,999/month' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Intelligent edge computing', price: '$3,999/month' },
      { name: 'Metaverse AI Development Platform', href: '/metaverse-ai-development-platform', description: 'AI-powered metaverse development', price: '$6,999/month' }
    ]
  }
];

const UltraFuturisticNavigation2029 = () => {
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
        ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/30' 
        : 'bg-gradient-to-r from-black/80 via-purple-900/80 to-black/80 backdrop-blur-lg'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>{contactInfo.mobile}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{contactInfo.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{contactInfo.address}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-gray-400">2029 Revolutionary Technology</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {serviceCategories.map((category) => (
              <div key={category.title} className="relative group">
                <button
                  onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group-hover:text-purple-400"
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.title.split(' ')[0]}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeCategory === category.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeCategory === category.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                          <p className="text-sm text-gray-400">{category.description}</p>
                        </div>
                        <div className="space-y-3">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={closeMenu}
                              className="block p-3 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors duration-300">
                                    {service.name}
                                  </h4>
                                  <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-medium text-purple-400">{service.price}</div>
                                </div>
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

            {/* Contact Button */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-300"
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-2">
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  <div className="pl-4 space-y-2">
                    {category.services.slice(0, 3).map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={closeMenu}
                        className="block p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-300"
                      >
                        <div className="text-white font-medium">{service.name}</div>
                        <div className="text-sm text-gray-400">{service.description}</div>
                        <div className="text-sm text-purple-400 font-medium mt-1">{service.price}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Mobile Contact Button */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-3 rounded-xl font-medium"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2029;