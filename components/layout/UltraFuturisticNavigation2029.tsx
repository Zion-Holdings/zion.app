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
  Code, Wrench, Smartphone, BarChart3, Eye, CpuIcon,
  Network, Server, DatabaseIcon, Globe2, ZapIcon
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2029 Futuristic AI Services',
    icon: Brain,
    color: 'from-violet-600 to-purple-600',
    description: 'Next-generation AI consciousness and quantum hybrid computing',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-2029', description: 'Develop genuine AI consciousness and self-awareness', price: '$24,999/month' },
      { name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing-2029', description: 'Quantum-classical hybrid AI computing', price: '$19,999/month' },
      { name: 'AI Multimodal Fusion Platform', href: '/ai-multimodal-fusion-platform-2029', description: 'Seamless text, image, video, and audio AI', price: '$12,999/month' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine-2029', description: 'Autonomous AI decision making with ethics', price: '$15,999/month' }
    ]
  },
  {
    title: '⚛️ 2029 Quantum Innovation Services',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    description: 'Revolutionary quantum computing and communication',
    services: [
      { name: 'Quantum Internet Protocol', href: '/quantum-internet-protocol-2029', description: 'Faster-than-light quantum communication', price: '$29,999/month' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform-2029', description: 'Quantum-powered algorithmic trading', price: '$39,999/month' },
      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall-2029', description: 'Unbreakable quantum encryption', price: '$18,999/month' },
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform-2029', description: 'Quantum computing for ML acceleration', price: '$22,999/month' }
    ]
  },
  {
    title: '🌌 2029 Emerging Technology Services',
    icon: Rocket,
    color: 'from-blue-600 to-cyan-600',
    description: 'Space mining, biotech, and autonomous systems',
    services: [
      { name: 'Space Mining Autonomous Platform', href: '/space-mining-autonomous-platform-2029', description: 'Autonomous asteroid and space mining', price: '$49,999/month' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform-2029', description: 'AI-powered drug discovery and research', price: '$32,999/month' },
      { name: 'Metaverse AI Development Platform', href: '/metaverse-ai-development-platform-2029', description: 'AI-powered virtual world creation', price: '$16,999/month' },
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform-2029', description: 'Advanced self-driving AI systems', price: '$28,999/month' }
    ]
  },
  {
    title: '🏢 2029 Enterprise IT Services',
    icon: Building,
    color: 'from-emerald-600 to-teal-600',
    description: 'Advanced enterprise security and automation',
    services: [
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture-2029', description: 'Continuous verification security', price: '$21,999/month' },
      { name: 'Cloud Native Automation Platform', href: '/cloud-native-automation-platform-2029', description: 'Multi-cloud DevOps automation', price: '$14,999/month' },
      { name: 'AI-Powered IT Service Desk', href: '/ai-powered-it-service-desk-2029', description: 'Intelligent IT support automation', price: '$9,999/month' },
      { name: 'Data Governance Automation', href: '/data-governance-automation-platform-2029', description: 'Automated compliance and quality', price: '$19,999/month' }
    ]
  },
  {
    title: '💼 2029 Practical Business Solutions',
    icon: Briefcase,
    color: 'from-orange-600 to-red-600',
    description: 'Real-world business AI automation',
    services: [
      { name: 'AI E-commerce Optimization', href: '/ai-powered-ecommerce-optimization-2029', description: 'AI-powered sales and customer optimization', price: '$7,999/month' },
      { name: 'AI Financial Advisory Platform', href: '/ai-financial-advisory-platform-2029', description: 'Intelligent investment and planning', price: '$11,999/month' },
      { name: 'AI HR Recruitment Automation', href: '/ai-hr-recruitment-automation-2029', description: 'Automated talent acquisition', price: '$6,999/month' },
      { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization-2029', description: 'Intelligent logistics and inventory', price: '$13,999/month' }
    ]
  },
  {
    title: '🔬 2029 Research & Development',
    icon: Microscope,
    color: 'from-pink-600 to-rose-600',
    description: 'Cutting-edge research and innovation',
    services: [
      { name: 'AI Research Collaboration Platform', href: '/ai-research-collaboration-2029', description: 'Global AI research network', price: '$34,999/month' },
      { name: 'Quantum Research Laboratory', href: '/quantum-research-laboratory-2029', description: 'Virtual quantum research environment', price: '$44,999/month' },
      { name: 'Biotech Innovation Hub', href: '/biotech-innovation-hub-2029', description: 'AI-powered biotech research', price: '$39,999/month' },
      { name: 'Space Technology Research Platform', href: '/space-technology-research-2029', description: 'Advanced space research tools', price: '$54,999/month' }
    ]
  }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'AI Services', href: '/ai-services', icon: Brain },
  { name: 'Quantum Services', href: '/quantum-services', icon: Atom },
  { name: 'Space Technology', href: '/space-tech', icon: Rocket },
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Building },
  { name: 'Business Solutions', href: '/solutions', icon: Briefcase },
  { name: 'Research & Development', href: '/research', icon: Microscope },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
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
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href={contactInfo.website} className="text-cyan-400 hover:text-white transition-colors">
              Visit Website
            </a>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Leading 2029 Technology Innovation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/30' 
          : 'bg-gradient-to-r from-black/95 via-purple-900/95 to-black/95 backdrop-blur-xl'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h1>
                  <p className="text-xs text-gray-400">2029 Technology Innovation</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <item.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                  <Sparkles className="w-4 h-4" />
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-xl p-4 shadow-2xl">
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="group/cat">
                          <button
                            onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
                            className="w-full text-left p-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 hover:from-purple-800/50 hover:to-blue-800/50 transition-all duration-200 border border-gray-700/50 hover:border-purple-500/50"
                          >
                            <div className="flex items-center space-x-3">
                              <category.icon className={`w-6 h-6 bg-gradient-to-r ${category.color} rounded-lg p-1`} />
                              <div className="flex-1">
                                <h3 className="font-semibold text-white">{category.title}</h3>
                                <p className="text-sm text-gray-400">{category.description}</p>
                              </div>
                              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                                activeCategory === category.title ? 'rotate-180' : ''
                              }`} />
                            </div>
                          </button>
                          
                          <AnimatePresence>
                            {activeCategory === category.title && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-2 space-y-2"
                              >
                                {category.services.map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    className="block p-3 rounded-lg bg-gray-800/30 hover:bg-purple-800/30 transition-all duration-200 border border-gray-700/30 hover:border-purple-500/30"
                                  >
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <h4 className="font-medium text-white">{service.name}</h4>
                                        <p className="text-sm text-gray-400">{service.description}</p>
                                      </div>
                                      <span className="text-sm font-semibold text-cyan-400">{service.price}</span>
                                    </div>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
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
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 p-3 rounded-lg hover:bg-purple-800/30"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="border-t border-purple-500/30 pt-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                  <div className="space-y-3">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="space-y-2">
                        <h4 className="font-medium text-purple-400">{category.title}</h4>
                        <div className="pl-4 space-y-2">
                          {category.services.slice(0, 2).map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={closeMenu}
                              className="block text-sm text-gray-400 hover:text-white transition-colors duration-200"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Contact */}
                <div className="border-t border-purple-500/30 pt-4">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-center py-3 rounded-xl font-semibold transition-all duration-200"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-32"></div>
    </>
  );
}