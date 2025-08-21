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
  Code, Wrench, Smartphone, BarChart3, Eye, Zap as ZapIcon,
  Globe2, Satellite, Dna, Battery, Gamepad, Cpu as CpuIcon,
  ArrowRight
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028-2029 Futuristic Innovations',
    icon: Rocket,
    color: 'from-violet-600 to-purple-600',
    description: 'Beyond the future of technology',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' },
      { name: 'Quantum Time Manipulation Platform', href: '/quantum-time-manipulation-platform', description: 'Quantum temporal processing', price: '$25,999/month' },
      { name: 'Space Quantum Communication Network', href: '/space-quantum-communication-network', description: 'Interplanetary quantum communication', price: '$32,999/month' },
      { name: 'AI Autonomous Business Orchestrator', href: '/ai-autonomous-business-orchestrator', description: 'Fully autonomous business management', price: '$15,999/month' }
    ]
  },
  {
    title: '🤖 Advanced AI & Autonomous Systems',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Genuine emotional understanding', price: '$8,999/month' },
      { name: 'AI Creative Intelligence Suite', href: '/ai-creative-intelligence-suite', description: 'Revolutionary creative AI', price: '$12,999/month' },
      { name: 'AI Predictive Innovation Platform', href: '/ai-predictive-innovation-platform', description: 'Future trend prediction', price: '$18,999/month' },
      { name: 'AI Autonomous Cybersecurity Platform', href: '/ai-autonomous-cybersecurity', description: 'Self-learning security', price: '$14,999/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Space Technology',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    description: 'Quantum computing and beyond',
    services: [
      { name: 'Quantum Biological Computing Platform', href: '/quantum-biological-computing', description: 'Quantum-enhanced biotechnology', price: '$19,999/month' },
      { name: 'Quantum Energy Optimization Platform', href: '/quantum-energy-optimization', description: 'Quantum energy systems', price: '$22,999/month' },
      { name: 'Quantum Metaverse Platform', href: '/quantum-metaverse-platform', description: 'Quantum virtual worlds', price: '$16,999/month' },
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable internet security', price: '$3,999/month' }
    ]
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    icon: Building,
    color: 'from-blue-600 to-cyan-600',
    description: 'Intelligent urban solutions',
    services: [
      { name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management', description: 'IoT and AI urban optimization', price: '$5,999/month' },
      { name: 'IoT Energy Management System', href: '/iot-energy-management-system', description: 'Smart energy optimization', price: '$1,999/month' },
      { name: 'Digital Twin Manufacturing Platform', href: '/digital-twin-manufacturing-platform', description: 'Virtual manufacturing replicas', price: '$4,999/month' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai', description: 'Self-optimizing factories', price: '$6,999/month' }
    ]
  },
  {
    title: '⛓️ Blockchain & Web3',
    icon: Layers,
    color: 'from-orange-600 to-red-600',
    description: 'Decentralized solutions',
    services: [
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end supply chain visibility', price: '$2,499/month' },
      { name: 'Smart Contract Automation Platform', href: '/smart-contract-automation', description: 'Automated blockchain contracts', price: '$1,999/month' },
      { name: 'DeFi Yield Optimization', href: '/defi-yield-optimization', description: 'Maximize DeFi returns', price: '$3,999/month' },
      { name: 'NFT Marketplace Platform', href: '/nft-marketplace-platform', description: 'Complete NFT ecosystem', price: '$2,999/month' }
    ]
  },
  {
    title: '🚗 Autonomous & Mobility',
    icon: Car,
    color: 'from-red-600 to-pink-600',
    description: 'Self-driving and mobility solutions',
    services: [
      { name: 'Autonomous Vehicle Fleet Management', href: '/autonomous-vehicle-fleet-management', description: 'Intelligent fleet management', price: '$3,999/month' },
      { name: 'Smart Traffic Management System', href: '/smart-traffic-management', description: 'AI traffic optimization', price: '$4,999/month' },
      { name: 'Electric Vehicle Charging Network', href: '/ev-charging-network', description: 'Smart EV infrastructure', price: '$2,999/month' },
      { name: 'Mobility as a Service Platform', href: '/mobility-as-a-service', description: 'Integrated mobility solutions', price: '$1,999/month' }
    ]
  },
  {
    title: '🏥 Healthcare & Biotech',
    icon: Heart,
    color: 'from-pink-600 to-rose-600',
    description: 'Advanced healthcare solutions',
    services: [
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform', description: 'Revolutionary medical diagnosis', price: '$3,999/month' },
      { name: 'Telemedicine AI Platform', href: '/telemedicine-ai-platform', description: 'Intelligent remote healthcare', price: '$2,499/month' },
      { name: 'Drug Discovery AI Platform', href: '/drug-discovery-ai-platform', description: 'Accelerated drug development', price: '$5,999/month' },
      { name: 'Personalized Medicine AI', href: '/personalized-medicine-ai', description: 'Individualized treatment plans', price: '$4,499/month' }
    ]
  },
  {
    title: '🎓 Education & Learning',
    icon: GraduationCap,
    color: 'from-yellow-600 to-orange-600',
    description: 'Next-generation learning',
    services: [
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1,499/month' },
      { name: 'Virtual Reality Learning Platform', href: '/vr-learning-platform', description: 'Immersive educational experiences', price: '$2,999/month' },
      { name: 'Adaptive Learning AI', href: '/adaptive-learning-ai', description: 'Intelligent curriculum adaptation', price: '$1,999/month' },
      { name: 'Language Learning AI Platform', href: '/language-learning-ai', description: 'AI-powered language acquisition', price: '$899/month' }
    ]
  },
  {
    title: '💰 Fintech & Financial Services',
    icon: DollarSign,
    color: 'from-green-600 to-emerald-600',
    description: 'Innovative financial solutions',
    services: [
      { name: 'AI Financial Risk Management', href: '/ai-financial-risk', description: 'Intelligent risk assessment', price: '$3,999/month' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading', price: '$8,999/month' },
      { name: 'Cryptocurrency AI Trading Bot', href: '/crypto-ai-trading-bot', description: 'Intelligent crypto trading', price: '$1,999/month' },
      { name: 'AI Credit Scoring Platform', href: '/ai-credit-scoring', description: 'Advanced credit assessment', price: '$2,499/month' }
    ]
  },
  {
    title: '🌍 Sustainability & Green Tech',
    icon: Leaf,
    color: 'from-green-500 to-teal-500',
    description: 'Environmental solutions',
    services: [
      { name: 'Carbon Footprint Tracking AI', href: '/carbon-footprint-tracking-ai', description: 'Environmental impact monitoring', price: '$1,299/month' },
      { name: 'Renewable Energy Optimization AI', href: '/renewable-energy-optimization-ai', description: 'Smart energy management', price: '$3,499/month' },
      { name: 'Sustainable Supply Chain AI', href: '/sustainable-supply-chain-ai', description: 'Green supply chain optimization', price: '$2,999/month' },
      { name: 'Climate Change Prediction AI', href: '/climate-change-prediction-ai', description: 'Advanced climate modeling', price: '$4,999/month' }
    ]
  }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: '2028 Showcase', href: '/2028-services-showcase', icon: Rocket },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp }
];

export default function UltraFuturisticNavigation2029() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryHover = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  const filteredCategories = serviceCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.services.some(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <nav className="relative z-50 bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 via-blue-900/50 to-purple-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-300">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-3 w-3" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-300">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-cyan-400 font-medium">2029 Future Technology</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
              />
            </div>
            
            {/* Contact Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Services Mega Menu */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-cyan-500/20 shadow-2xl z-40"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredCategories.map((category) => (
                  <div
                    key={category.title}
                    className={`p-6 rounded-xl border transition-all duration-300 ${
                      activeCategory === category.title
                        ? 'border-cyan-500/50 bg-cyan-500/5'
                        : 'border-gray-700/50 bg-gray-800/20'
                    }`}
                    onMouseEnter={() => handleCategoryHover(category.title)}
                    onMouseLeave={handleCategoryLeave}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                        <category.icon className="h-5 w-5 text-white" />
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
                          className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                {service.name}
                              </h4>
                              <p className="text-sm text-gray-400">{service.description}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-cyan-400">{service.price}</p>
                              <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                            </div>
                          </div>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>

              {/* Mobile Navigation */}
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}

              {/* Mobile Contact Button */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}