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
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Future of transportation',
    services: [
      { name: 'Autonomous Fleet Management', href: '/autonomous-fleet-management', description: 'AI-powered fleet optimization', price: '$8,999/month' },
      { name: 'Smart Traffic Management', href: '/smart-traffic-management', description: 'Intelligent traffic optimization', price: '$6,999/month' },
      { name: 'Drone Delivery Network', href: '/drone-delivery-network', description: 'Autonomous delivery systems', price: '$12,999/month' },
      { name: 'Electric Vehicle Optimization', href: '/electric-vehicle-optimization', description: 'EV charging and management', price: '$4,999/month' }
    ]
  },
  {
    title: '🏭 Industry 5.0 & Manufacturing',
    icon: Factory,
    color: 'from-slate-600 via-gray-600 to-zinc-600',
    description: 'Next-generation manufacturing',
    services: [
      { name: 'Predictive Maintenance AI', href: '/predictive-maintenance-ai', description: 'AI-powered equipment monitoring', price: '$7,999/month' },
      { name: 'Supply Chain Optimization', href: '/supply-chain-optimization', description: 'Intelligent supply chain management', price: '$9,999/month' },
      { name: 'Quality Control AI', href: '/quality-control-ai', description: 'Automated quality assurance', price: '$5,999/month' },
      { name: 'Industrial IoT Platform', href: '/industrial-iot-platform', description: 'Connected manufacturing systems', price: '$6,999/month' }
    ]
  }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai-services', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum-services', icon: Atom },
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Building },
  { name: 'Micro SAAS', href: '/micro-saas', icon: Cloud },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Support', href: '/support', icon: MessageCircle }
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
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="hover:text-cyan-400 transition-colors">
                <a href={`tel:${contactInfo.mobile}`}>{contactInfo.mobile}</a>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-purple-400" />
              <span className="hover:text-purple-400 transition-colors">
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-pink-400" />
            <span className="text-gray-300">{contactInfo.address}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <item.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 font-medium"
              >
                Contact Sales
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Service Categories Dropdown */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-cyan-500/20"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {serviceCategories.map((category) => (
                    <motion.div
                      key={category.title}
                      whileHover={{ scale: 1.02 }}
                      className="group cursor-pointer"
                      onMouseEnter={() => setActiveCategory(category.title)}
                    >
                      <div className={`p-6 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300`}>
                        <div className="flex items-center space-x-3 mb-4">
                          <category.icon className="w-8 h-8 text-cyan-400" />
                          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-4">{category.description}</p>
                        <div className="space-y-3">
                          {category.services.slice(0, 3).map((service) => (
                            <div key={service.name} className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/40 transition-colors">
                              <div>
                                <h4 className="text-sm font-medium text-white">{service.name}</h4>
                                <p className="text-xs text-gray-400">{service.description}</p>
                              </div>
                              <span className="text-xs text-cyan-400 font-medium">{service.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeMenu} />
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-md border-l border-cyan-500/20">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-white">Menu</h2>
                  <button onClick={closeMenu} className="text-gray-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/10"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="space-y-4">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium"
                    >
                      Get Started
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium"
                    >
                      Contact Sales
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
};

export default UltraFuturisticNavigation2029;