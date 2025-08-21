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
    color: 'from-orange-500 via-red-500 to-pink-500',
    description: 'Self-driving and smart transportation',
    services: [
      { name: 'Autonomous Vehicle Fleet Management', href: '/autonomous-vehicle-fleet-management', description: 'AI-powered fleet optimization', price: '$12,999/month' },
      { name: 'Smart Traffic Management System', href: '/smart-traffic-management-system', description: 'Real-time traffic optimization', price: '$8,999/month' },
      { name: 'Drone Delivery Network Platform', href: '/drone-delivery-network-platform', description: 'Autonomous delivery systems', price: '$15,999/month' },
      { name: 'Electric Vehicle Charging Network', href: '/electric-vehicle-charging-network', description: 'Smart charging infrastructure', price: '$6,999/month' }
    ]
  },
  {
    title: '💼 Business & Enterprise Solutions',
    icon: Briefcase,
    color: 'from-slate-600 via-gray-600 to-zinc-600',
    description: 'Enterprise-grade business tools',
    services: [
      { name: 'AI Customer Service Platform', href: '/ai-customer-service-platform', description: 'Intelligent customer support', price: '$8,999/month' },
      { name: 'Intelligent Inventory Management', href: '/intelligent-inventory-management', description: 'AI-powered inventory optimization', price: '$6,999/month' },
      { name: 'Automated Marketing Platform', href: '/automated-marketing-platform', description: 'AI-driven marketing automation', price: '$9,999/month' },
      { name: 'Smart HR Management Platform', href: '/smart-hr-management-platform', description: 'AI-powered HR optimization', price: '$7,999/month' }
    ]
  }
];

const mainNavigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai-services', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum-services', icon: Atom },
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Building },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Contact', href: '/support', icon: MessageCircle }
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
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-2 px-4 text-sm">
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
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-pink-400" />
              <span className="text-xs">{contactInfo.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-emerald-400" />
              <a href={contactInfo.website} className="hover:text-emerald-400 transition-colors">
                {contactInfo.website.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
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
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavigationItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative group"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                  
                  {/* Hover indicator */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="hidden lg:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/support"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={toggleMenu}
                className="text-white hover:text-cyan-400 transition-colors"
                whileTap={{ scale: 0.95 }}
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
              className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/20"
            >
              <div className="px-4 py-6 space-y-4">
                {mainNavigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-slate-800/50"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-cyan-500/20">
                  <Link
                    href="/support"
                    onClick={closeMenu}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Service Categories Mega Menu */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-32 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl"
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {serviceCategories
                  .filter(cat => cat.title.includes(activeCategory))
                  .map((category) => (
                    <div key={category.title} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{category.title}</h3>
                          <p className="text-slate-400">{category.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block p-4 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-200 group"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                  {service.name}
                                </h4>
                                <p className="text-sm text-slate-400 mt-1">{service.description}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors mt-1" />
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

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
};

export default UltraFuturisticNavigation2029;