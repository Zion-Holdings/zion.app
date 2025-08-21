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
  TrendingUpIcon, TargetIcon, UsersIcon, BriefcaseIcon,
  BookOpenIcon, MessageCircleIcon, StarIcon
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const mainNavigationRoutes = [
  { name: 'Home', href: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
  { name: 'Services', href: '/services', icon: Briefcase, description: 'Our comprehensive service portfolio' },
  { name: 'Solutions', href: '/solutions', icon: Target, description: 'Tailored solutions for your business' },
  { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Transparent pricing and packages' },
  { name: 'Resources', href: '/resources', icon: BookOpen, description: 'Knowledge base and documentation' },
  { name: 'Case Studies', href: '/case-studies', icon: Users, description: 'Success stories and implementations' },
  { name: 'Blog', href: '/blog', icon: MessageCircle, description: 'Latest insights and updates' },
  { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch with our team' }
];

const serviceCategories = [
  {
    title: '🚀 2032 Revolutionary AI Services',
    icon: BrainIcon,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' },
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' },
      { name: 'AI Dream Interpreter Platform', href: '/ai-dream-interpreter-platform', description: 'Dream analysis with AI psychology', price: '$299/month' }
    ]
  },
  {
    title: '⚛️ 2032 Quantum & Emerging Tech',
    icon: AtomIcon,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
    services: [
      { name: 'Quantum DNA Computing Platform', href: '/quantum-dna-computing-platform', description: 'Molecular computing with quantum entanglement', price: '$25,999/month' },
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35,999/month' },
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio', description: 'Quantum-enhanced creativity', price: '$1,999/month' }
    ]
  },
  {
    title: '🏙️ 2032 Enterprise IT Solutions',
    icon: CpuIcon,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
    services: [
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', description: 'Fully autonomous DevOps', price: '$799/month' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Never trust, always verify', price: '$599/month' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed edge computing', price: '$449/month' },
      { name: 'AI-Powered IT Operations Center', href: '/ai-powered-it-operations-center', description: 'Intelligent IT operations', price: '$699/month' }
    ]
  },
  {
    title: '🌌 2032 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and digital reality',
    services: [
      { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' },
      { name: 'Metaverse Development Platform', href: '/metaverse-development-platform', description: 'Build immersive virtual worlds', price: '$499/month' },
      { name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ]
  },
  {
    title: '🎯 2032 Innovative Micro SAAS',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
      { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'Intelligent business insights', price: '$299/month' },
      { name: 'Quantum-Secure Communication Platform', href: '/quantum-secure-communication-platform', description: 'Unbreakable encryption', price: '$599/month' },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success', price: '$199/month' },
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end traceability', price: '$399/month' }
    ]
  },
  {
    title: '🔬 2032 Research & Development',
    icon: Microscope,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',
    services: [
      { name: 'Neuromorphic Computing Platform', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing', price: '$899/month' },
      { name: 'DNA Computing Platform', href: '/dna-computing-platform', description: 'Molecular computing', price: '$1,299/month' },
      { name: 'Photonic Computing Infrastructure', href: '/photonic-computing-infrastructure', description: 'Light-speed computing', price: '$699/month' },
      { name: 'Swarm Robotics Orchestration', href: '/swarm-robotics-orchestration', description: 'Coordinate robot swarms', price: '$449/month' }
    ]
  }
];

const quickLinks = [
  { name: '2032 Services', href: '/2032-futuristic-services-showcase', icon: Star, description: 'Revolutionary 2032 services' },
  { name: 'Enhanced Pricing', href: '/enhanced-market-pricing-2032', icon: DollarSign, description: 'Comprehensive pricing analysis' },
  { name: 'Market Pricing', href: '/market-pricing', icon: DollarSign, description: 'Competitive pricing references' },
  { name: 'Enhanced Services', href: '/enhanced-services-showcase', icon: Star, description: 'Premium service showcase' },
  { name: 'Revolutionary 2026', href: '/revolutionary-2026-services', icon: TrendingUp, description: '2026 breakthrough services' },
  { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', icon: Target, description: 'Ultimate service portfolio' },
  { name: 'News & Updates', href: '/news', icon: MessageCircle, description: 'Latest company news' },
  { name: 'Support', href: '/support', icon: Users, description: 'Technical support and help' }
];

export default function UltraFuturisticNavigation2032() {
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
      <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6 text-cyan-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="https://ziontechgroup.com" className="text-cyan-300 hover:text-cyan-100 transition-colors">
                {contactInfo.website}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-10 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-cyan-300 font-medium">2032 Future Technology</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Main Routes */}
              <div className="flex items-center space-x-6">
                {mainNavigationRoutes.slice(0, 4).map((route) => (
                  <Link
                    key={route.name}
                    href={route.href}
                    className="group relative px-3 py-2 text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      <route.icon className="w-4 h-4" />
                      <span>{route.name}</span>
                    </div>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                ))}
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200 bg-black/20 rounded-lg border border-cyan-500/30 hover:border-cyan-500/50">
                  <Briefcase className="w-4 h-4" />
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-screen max-w-6xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20">
                    <div className="grid grid-cols-2 gap-6">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="group">
                          <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300`}>
                            <div className="flex items-center space-x-3 mb-3">
                              <category.icon className="w-6 h-6 text-cyan-400" />
                              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                            </div>
                            <p className="text-sm text-slate-300 mb-4">{category.description}</p>
                            <div className="space-y-2">
                              {category.services.map((service, serviceIndex) => (
                                <Link
                                  key={serviceIndex}
                                  href={service.href}
                                  className="block p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <div className="text-sm font-medium text-white">{service.name}</div>
                                      <div className="text-xs text-slate-400">{service.description}</div>
                                    </div>
                                    <div className="text-xs text-cyan-400 font-medium">{service.price}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex items-center space-x-4">
                {quickLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200 bg-black/20 rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 hover:bg-cyan-500/10"
                  >
                    <div className="flex items-center space-x-2">
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm">{link.name}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors duration-200"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-30 w-full z-40 bg-black/95 backdrop-blur-xl border-b border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Main Routes */}
              <div className="grid grid-cols-2 gap-4">
                {mainNavigationRoutes.map((route) => (
                  <Link
                    key={route.name}
                    href={route.href}
                    onClick={closeMenu}
                    className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <route.icon className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm font-medium text-white">{route.name}</div>
                        <div className="text-xs text-slate-400">{route.description}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Service Categories */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Service Categories</h3>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <category.icon className="w-5 h-5 text-cyan-400" />
                      <h4 className="text-sm font-medium text-white">{category.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 mb-3">{category.description}</p>
                    <div className="space-y-2">
                      {category.services.slice(0, 2).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.href}
                          onClick={closeMenu}
                          className="block p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-white">{service.name}</div>
                            <div className="text-xs text-cyan-400">{service.price}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <link.icon className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-white">{link.name}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30">
                <h3 className="text-sm font-medium text-white mb-3">Contact Information</h3>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-green-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-30"></div>
    </>
  );
}