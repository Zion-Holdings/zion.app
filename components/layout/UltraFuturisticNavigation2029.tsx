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
      { name: 'Neural Interface Platform', href: '/neural-interface-platform-2029', description: 'Direct brain-to-computer communication', price: '$15,999/month' },
      { name: 'Quantum Biotech Synthesis', href: '/quantum-biotech-synthesis-2029', description: 'Quantum-powered drug discovery', price: '$12,999/month' },
      { name: 'Autonomous Space Mining', href: '/autonomous-space-mining-2029', description: 'Asteroid resource extraction', price: '$45,999/month' },
      { name: 'Quantum Internet Protocol', href: '/quantum-internet-protocol-2029', description: 'Unbreakable quantum communication', price: '$32,999/month' }
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
      { name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management-2029', description: 'IoT and AI urban optimization', price: '$5,999/month' },
      { name: 'Digital Twin Manufacturing Platform', href: '/digital-twin-manufacturing-platform-2029', description: 'Virtual manufacturing replicas', price: '$4,999/month' },
      { name: 'IoT Energy Management System', href: '/iot-energy-management-system-2029', description: 'Smart energy optimization', price: '$1,999/month' }
    ]
  },
  {
    title: '🌍 Metaverse & Digital Reality',
    icon: Globe,
    color: 'from-purple-600 via-pink-600 to-rose-600',
    description: 'Virtual worlds and experiences',
    services: [
      { name: 'Quantum Metaverse Platform', href: '/quantum-metaverse-platform-2029', description: 'Quantum-enhanced virtual worlds', price: '$4,999/month' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform-2029', description: '3D holographic events', price: '$2,999/month' },
      { name: 'AI Multimodal Fusion Platform', href: '/ai-multimodal-fusion-platform-2029', description: 'Multi-sensory AI experiences', price: '$3,999/month' },
      { name: 'AI Brand Personality Generator', href: '/ai-brand-personality-generator-2029', description: 'AI-powered brand development', price: '$2,999/month' }
    ]
  },
  {
    title: '🔬 Biotechnology & Research',
    icon: Microscope,
    color: 'from-green-600 via-emerald-600 to-teal-600',
    description: 'Advanced biotech solutions',
    services: [
      { name: 'DNA Computing Platform', href: '/dna-computing-platform-2029', description: 'Molecular information processing', price: '$29,999/month' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform-2029', description: 'AI-powered biotech research', price: '$3,999/month' },
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion-2029', description: 'Intelligent mental health support', price: '$1,999/month' },
      { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber-pro-2029', description: 'Real-time meeting transcription', price: '$1,999/month' }
    ]
  },
  {
    title: '🚗 Autonomous & Mobility',
    icon: Car,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Self-driving and smart transportation',
    services: [
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-2029', description: 'Level 5 autonomous driving', price: '$39,999/month' },
      { name: 'Smart Traffic Management', href: '/smart-traffic-management-2029', description: 'AI-powered traffic optimization', price: '$8,999/month' },
      { name: 'Drone Delivery Network', href: '/drone-delivery-network-2029', description: 'Autonomous delivery system', price: '$12,999/month' },
      { name: 'Electric Vehicle Optimization', href: '/electric-vehicle-optimization-2029', description: 'Smart EV management', price: '$6,999/month' }
    ]
  },
  {
    title: '💰 Financial Technology',
    icon: DollarSign,
    color: 'from-yellow-600 via-orange-600 to-red-600',
    description: 'Next-gen financial solutions',
    services: [
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-2029', description: 'Quantum-powered trading', price: '$38,999/month' },
      { name: 'AI Risk Management Platform', href: '/ai-risk-management-2029', description: 'Intelligent risk assessment', price: '$22,999/month' },
      { name: 'Blockchain Financial Platform', href: '/blockchain-financial-2029', description: 'Decentralized finance', price: '$18,999/month' },
      { name: 'AI Fraud Detection', href: '/ai-fraud-detection-2029', description: 'Real-time fraud prevention', price: '$14,999/month' }
    ]
  },
  {
    title: '🎨 Creative & Media AI',
    icon: Palette,
    color: 'from-pink-600 via-purple-600 to-indigo-600',
    description: 'AI-powered creative tools',
    services: [
      { name: 'AI Video Editing Platform', href: '/ai-video-editing-2029', description: 'Professional video automation', price: '$3,499/month' },
      { name: 'AI Content Generation', href: '/ai-content-generation-2029', description: 'Automated content creation', price: '$2,499/month' },
      { name: 'AI Music Composition', href: '/ai-music-composition-2029', description: 'Intelligent music creation', price: '$2,999/month' },
      { name: 'AI Design Assistant', href: '/ai-design-assistant-2029', description: 'Smart design automation', price: '$1,999/month' }
    ]
  },
  {
    title: '🏥 Healthcare & Wellness',
    icon: Heart,
    color: 'from-red-600 via-pink-600 to-purple-600',
    description: 'Advanced healthcare solutions',
    services: [
      { name: 'AI Healthcare Diagnosis', href: '/ai-healthcare-diagnosis-2029', description: '99.8% accurate diagnosis', price: '$28,999/month' },
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion-2029', description: '24/7 mental health support', price: '$1,999/month' },
      { name: 'Telemedicine AI Platform', href: '/telemedicine-ai-2029', description: 'Intelligent remote healthcare', price: '$9,999/month' },
      { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-2029', description: 'Accelerated pharmaceutical research', price: '$24,999/month' }
    ]
  },
  {
    title: '🌱 Sustainability & Green Tech',
    icon: Leaf,
    color: 'from-green-600 via-emerald-600 to-teal-600',
    description: 'Environmental solutions',
    services: [
      { name: 'AI Climate Prediction', href: '/ai-climate-prediction-2029', description: '99.9% accurate climate modeling', price: '$16,999/month' },
      { name: 'Smart Energy Management', href: '/smart-energy-management-2029', description: 'AI-powered energy optimization', price: '$8,999/month' },
      { name: 'Carbon Footprint Tracking', href: '/carbon-footprint-tracking-2029', description: 'Real-time environmental monitoring', price: '$4,999/month' },
      { name: 'Renewable Energy Optimization', href: '/renewable-energy-optimization-2029', description: 'Smart renewable integration', price: '$12,999/month' }
    ]
  },
  {
    title: '🔒 Cybersecurity & Privacy',
    icon: Shield,
    color: 'from-gray-600 via-slate-600 to-zinc-600',
    description: 'Advanced security solutions',
    services: [
      { name: 'Quantum Cybersecurity Fortress', href: '/quantum-cybersecurity-fortress-2029', description: 'Future-proof security', price: '$1,599/month' },
      { name: 'AI Threat Detection', href: '/ai-threat-detection-2029', description: 'Intelligent security monitoring', price: '$3,999/month' },
      { name: 'Zero-Trust Security Platform', href: '/zero-trust-security-2029', description: 'Advanced access control', price: '$5,999/month' },
      { name: 'Privacy Protection AI', href: '/privacy-protection-ai-2029', description: 'Automated privacy compliance', price: '$2,999/month' }
    ]
  }
];

const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

export default function UltraFuturisticNavigation2029() {
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
        ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">2029 Revolutionary Technology</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}

            {/* Services Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
              onMouseEnter={() => setActiveCategory('services')}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <button className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Briefcase className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              {/* Services Mega Menu */}
              <AnimatePresence>
                {activeCategory === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 mt-2 w-screen max-w-7xl bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {serviceCategories.map((category, index) => (
                          <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group/category"
                          >
                            <div className="flex items-center space-x-3 mb-4">
                              <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover/category:scale-110 transition-transform duration-300`}>
                                <category.icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-white group-hover/category:text-cyan-400 transition-colors duration-300">
                                  {category.title}
                                </h3>
                                <p className="text-sm text-gray-400">{category.description}</p>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              {category.services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="block p-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300 group/service"
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <div className="text-white group-hover/service:text-cyan-400 transition-colors duration-300 font-medium">
                                        {service.name}
                                      </div>
                                      <div className="text-sm text-gray-400">{service.description}</div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-cyan-400 font-semibold">{service.price}</div>
                                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover/service:text-cyan-400 transition-colors duration-300 ml-auto" />
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:hidden"
          >
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>
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
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-3 rounded-lg hover:bg-purple-500/10"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile Contact Button */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300"
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