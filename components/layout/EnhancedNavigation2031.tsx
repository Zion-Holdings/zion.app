import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, Target, Layers, Cpu, Database, Cloud, Lock, 
  ShieldCheck, Earth, Factory, Car, Building, GraduationCap, 
  Scale, Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain, Code, Wrench, 
  Smartphone, BarChart3, Eye, Network, Server, HardDrive, 
  Monitor, Laptop, Watch, Headphones, Speaker, Mic, 
  Keyboard, Mouse, DollarSign, Link, Robot, Home, Users, 
  Briefcase, BookOpen, MessageCircle, Star, TrendingUp
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const EnhancedNavigation2031: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: '2029 Innovation Hub', href: '/comprehensive-2029-services', icon: Sparkles },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Resources', href: '/resources', icon: BookOpen },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  const serviceCategories = [
    {
      title: '🚀 Revolutionary AI Services',
      icon: Brain,
      color: 'from-violet-600 via-purple-600 to-indigo-600',
      description: 'Next-generation AI consciousness and creativity',
      services: [
        { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' },
        { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' },
        { name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' },
        { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success', price: '$199/month' }
      ]
    },
    {
      title: '⚛️ Quantum & Emerging Tech',
      icon: Atom,
      color: 'from-indigo-600 via-blue-600 to-cyan-600',
      description: 'Quantum computing and beyond',
      services: [
        { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' },
        { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35,999/month' },
        { name: 'Quantum-Secure Communication Platform', href: '/quantum-secure-communication-platform', description: 'Unbreakable encryption', price: '$599/month' },
        { name: 'Photonic Computing Infrastructure', href: '/photonic-computing-infrastructure', description: 'Light-speed computing', price: '$699/month' }
      ]
    },
    {
      title: '🏙️ Enterprise IT Solutions',
      icon: Cpu,
      color: 'from-blue-600 via-cyan-600 to-teal-600',
      description: 'Autonomous enterprise infrastructure',
      services: [
        { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Never trust, always verify', price: '$599/month' },
        { name: 'AI-Powered IT Operations Center', href: '/ai-it-operations-center', description: 'Intelligent IT operations', price: '$699/month' },
        { name: 'Neuromorphic Computing Platform', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing', price: '$899/month' },
        { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'Intelligent business insights', price: '$299/month' }
      ]
    },
    {
      title: '🌌 Space & Metaverse Tech',
      icon: Rocket,
      color: 'from-teal-600 via-emerald-600 to-green-600',
      description: 'Space exploration and digital reality',
      services: [
        { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' },
        { name: 'Metaverse Development Platform', href: '/metaverse-development-platform', description: 'Build immersive virtual worlds', price: '$499/month' },
        { name: 'Swarm Robotics Orchestration', href: '/swarm-robotics-orchestration', description: 'Coordinate robot swarms', price: '$449/month' }
      ]
    },
    {
      title: '🧬 Biotech & DNA Computing',
      icon: Heart,
      color: 'from-green-600 via-yellow-600 to-orange-600',
      description: 'Biological computing and biotechnology',
      services: [
        { name: 'Biotech DNA Computing Platform', href: '/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25,999/month' }
      ]
    },
    {
      title: '🔗 Blockchain & Supply Chain',
      icon: Link,
      color: 'from-orange-600 via-red-600 to-pink-600',
      description: 'Transparent and secure supply chains',
      services: [
        { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end traceability', price: '$399/month' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Market Pricing', href: '/market-pricing', icon: DollarSign },
    { name: 'Enhanced Services', href: '/enhanced-services-showcase-2025', icon: Sparkles },
    { name: 'Revolutionary 2026', href: '/revolutionary-2026-services', icon: Rocket },
    { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', icon: Star },
    { name: 'Cutting Edge 2027', href: '/revolutionary-2027-services-showcase', icon: TrendingUp },
    { name: 'Innovative 2028', href: '/cutting-edge-2028-micro-saas', icon: Zap }
  ];

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-black border-b border-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeAllDropdowns}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                Z
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            </div>
            <div className="hidden md:block">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">2029 Innovation Hub</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                onClick={closeAllDropdowns}
              >
                <item.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-300" />
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <Briefcase className="w-4 h-4" />
                All Services
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-full left-0 w-screen max-w-7xl bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white`}>
                            <category.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{category.title}</h3>
                            <p className="text-sm text-gray-400">{category.description}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 group"
                              onClick={closeAllDropdowns}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {service.name}
                                  </div>
                                  <div className="text-sm text-gray-400">{service.description}</div>
                                </div>
                                <div className="text-sm font-semibold text-cyan-400">{service.price}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Quick Links */}
                  <div className="mt-8 pt-8 border-t border-gray-700/50">
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {quickLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 group"
                          onClick={closeAllDropdowns}
                        >
                          <link.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                            {link.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={`tel:${contactInfo.mobile}`}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Phone className="w-4 h-4" />
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                    onClick={closeAllDropdowns}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="pt-4 border-t border-gray-700/50">
                  <div className="text-lg font-semibold text-white mb-4">Our Services</div>
                  <div className="space-y-2">
                    {serviceCategories.slice(0, 3).map((category) => (
                      <div key={category.title} className="p-3 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white`}>
                            <category.icon className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-white">{category.title}</span>
                        </div>
                        <div className="text-sm text-gray-400 ml-11">{category.description}</div>
                      </div>
                    ))}
                    <Link
                      href="/comprehensive-2029-services"
                      className="block p-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      onClick={closeAllDropdowns}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-700/50">
                  <Link
                    href={`tel:${contactInfo.mobile}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300"
                    onClick={closeAllDropdowns}
                  >
                    <Phone className="w-5 h-5" />
                    Call {contactInfo.mobile}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation2031;