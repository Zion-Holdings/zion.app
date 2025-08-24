import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Rocket, Phone, Mail, MapPin,
  Brain, Cpu, Shield, Zap, Star, Users, TrendingUp,
  Globe, Database, Cloud, Lock, Palette, Target,
  Layers, Sparkles, Atom, Microscope, Satellite,
  Search, Bell, User, Settings, LogOut, SparklesIcon,
  Eye, Code, Server, Network, Globe2,
  Smartphone, Monitor, Laptop, Watch, Camera, Headphones
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Machine Learning 2026',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Business Intelligence Elite 2026', href: '/ai-business-intelligence-elite-2026', description: 'Next-generation AI-powered business analytics', price: '$299/month', popular: true },
      { name: 'Autonomous AI Agents Platform 2026', href: '/autonomous-ai-agents-platform-2026', description: 'Create and manage autonomous AI agents', price: '$199/month', popular: true },
      { name: 'AI Healthcare Companion 2026', href: '/ai-healthcare-companion-2026', description: 'Revolutionary AI-powered healthcare assistance', price: '$399/month', popular: true },
      { name: 'AI Creative Studio Platform 2026', href: '/ai-creative-studio-platform-2026', description: 'Unlimited AI-powered creativity', price: '$149/month', popular: true },
      { name: 'AI Financial Risk Management', href: '/ai-financial-risk', description: 'Advanced AI-powered financial risk analysis', price: '$599/month', popular: false },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Intelligent legal document analysis', price: '$299/month', popular: false }
    ]
  },
  {
    title: 'Quantum Computing & Security',
    icon: Atom,
    color: 'from-blue-600 to-cyan-600',
    description: 'Quantum-era solutions',
    services: [
      { name: 'Quantum Cybersecurity Suite 2026', href: '/quantum-cybersecurity-suite-2026', description: 'Quantum-resistant cybersecurity', price: '$599/month', popular: true },
      { name: 'Quantum Internet Security Platform 2026', href: '/quantum-internet-security-platform-2026', description: 'Secure the future of the internet', price: '$799/month', popular: false },
      { name: 'Quantum Financial Trading Platform 2026', href: '/quantum-financial-trading-platform-2026', description: 'Quantum-powered financial trading', price: '$1,299/month', popular: false },
      { name: 'Quantum-Secure Communication', href: '/quantum-secure-communication', description: 'Unbreakable encryption for the quantum era', price: '$599/month', popular: false },
      { name: 'Quantum AI Brain Interface', href: '/quantum-ai-brain-computer-interface', description: 'Revolutionary brain-computer interface', price: '$2,999/month', popular: false }
    ]
  },
  {
    title: 'Emerging Technologies 2026',
    icon: Sparkles,
    color: 'from-green-600 to-emerald-600',
    description: 'Cutting-edge innovations',
    services: [
      { name: 'Neuromorphic Computing Platform 2026', href: '/neuromorphic-computing-platform-2026', description: 'Brain-inspired computing for next-generation AI', price: '$2,499/month', popular: false },
      { name: 'DNA Computing Platform 2026', href: '/dna-computing-platform-2026', description: 'Molecular computing for complex problem solving', price: '$3,999/month', popular: false },
      { name: 'Photonic Computing Platform 2026', href: '/photonic-computing-platform-2026', description: 'Light-speed computing with photonic processors', price: '$1,999/month', popular: false },
      { name: 'Holographic Display Platform 2026', href: '/holographic-display-platform-2026', description: 'Next-generation 3D holographic visualization', price: '$899/month', popular: true },
      { name: 'Metaverse AI Development Platform', href: '/metaverse-ai-development-platform', description: 'AI-powered metaverse creation', price: '$1,499/month', popular: false }
    ]
  },
  {
    title: 'Enterprise IT Solutions 2026',
    icon: Shield,
    color: 'from-red-600 to-orange-600',
    description: 'Enterprise-grade solutions',
    services: [
      { name: 'Zero Trust Network Architecture 2026', href: '/zero-trust-network-architecture-2026', description: 'Next-generation network security', price: 'Custom pricing', popular: false },
      { name: 'Edge Computing Orchestration 2026', href: '/edge-computing-orchestration-2026', description: 'Intelligent edge computing management', price: 'Custom pricing', popular: false },
      { name: '5G Private Network Solutions 2026', href: '/5g-private-network-solutions-2026', description: 'Enterprise-grade 5G private networks', price: 'Custom pricing', popular: false },
      { name: 'Blockchain Infrastructure Platform 2026', href: '/blockchain-infrastructure-platform-2026', description: 'Enterprise blockchain infrastructure', price: 'Custom pricing', popular: false },
      { name: 'Cloud Landing Zone', href: '/cloud-landing-zone', description: 'Secure cloud infrastructure setup', price: '$2,999/month', popular: false }
    ]
  },
  {
    title: 'Autonomous Systems & Robotics',
    icon: Target,
    color: 'from-indigo-600 to-purple-600',
    description: 'Intelligent automation',
    services: [
      { name: 'Swarm Robotics Platform 2026', href: '/swarm-robotics-platform-2026', description: 'Coordinated multi-robot systems', price: '$1,299/month', popular: false },
      { name: 'AI Autonomous Business Platform 2026', href: '/ai-autonomous-business-platform-2026', description: 'Run your business with autonomous AI', price: 'Custom pricing', popular: false },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing', description: 'AI-powered manufacturing automation', price: '$599/month', popular: false },
      { name: 'Autonomous Supply Chain Optimization', href: '/autonomous-supply-chain-optimization', description: 'AI-powered supply chain management', price: '$399/month', popular: false },
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform', description: 'Advanced autonomous vehicle systems', price: '$1,999/month', popular: false }
    ]
  },
  {
    title: 'Space Technology & Innovation',
    icon: Satellite,
    color: 'from-yellow-600 to-orange-600',
    description: 'Space-age solutions',
    services: [
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI-powered space exploration', price: '$3,999/month', popular: false },
      { name: 'Quantum Space Mining Platform', href: '/quantum-space-mining-platform', description: 'Revolutionary space resource exploration', price: '$1,299/month', popular: false },
      { name: 'Satellite Operations AI', href: '/satellite-operations-ai', description: 'Intelligent satellite management', price: '$2,999/month', popular: false },
      { name: 'Space Debris Tracking System 2026', href: '/space-debris-tracking-system-2026', description: 'Advanced space debris monitoring', price: '$1,999/month', popular: false },
      { name: 'Space Tourism AI Platform', href: '/space-tourism-ai-platform', description: 'AI-powered space tourism experiences', price: '$2,499/month', popular: false }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: Code,
    color: 'from-teal-600 to-green-600',
    description: 'Scalable SaaS platforms',
    services: [
      { name: 'AI Content Generator Elite', href: '/ai-content-generator', description: 'Professional AI-powered content creation', price: '$49/month', popular: true },
      { name: 'AI Guardrails Suite', href: '/ai-guardrails', description: 'Policy, safety and governance for LLM apps', price: '$99/month', popular: false },
      { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber-pro', description: 'Advanced meeting transcription and analysis', price: '$79/month', popular: false },
      { name: 'AI SEO Optimization Suite', href: '/ai-seo-optimization', description: 'AI-powered SEO optimization', price: '$89/month', popular: false },
      { name: 'AI Video Editing Platform', href: '/ai-video-editing', description: 'Professional AI video editing', price: '$129/month', popular: false }
    ]
  },
  {
    title: 'Cybersecurity & Compliance',
    icon: Lock,
    color: 'from-red-600 to-pink-600',
    description: 'Advanced security solutions',
    services: [
      { name: 'Vulnerability Assessment & Penetration Testing', href: '/vulnerability-assessment-penetration-testing', description: 'Comprehensive security testing', price: '$2,999/month', popular: false },
      { name: 'SOC2 Evidence Automation', href: '/soc2-evidence-automation', description: 'Automated compliance evidence collection', price: '$399/month', popular: false },
      { name: 'TLS Certificate Monitor', href: '/tls-certificate-monitor', description: 'Automated certificate management', price: '$29/month', popular: false },
      { name: 'API Security Scanner', href: '/api-security-scanner', description: 'Advanced API security testing', price: '$199/month', popular: false },
      { name: 'Incident Automation Suite', href: '/incident-automation-suite', description: 'Automated incident response', price: '$299/month', popular: false }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: '2026 Services', href: '/2026-services-showcase', icon: Sparkles },
  { name: 'News & Updates', href: '/news', icon: Bell },
  { name: 'Case Studies', href: '/case-studies', icon: TrendingUp },
  { name: 'Blog & Resources', href: '/blog', icon: Globe },
  { name: 'Careers', href: '/careers', icon: Target },
  { name: 'Contact', href: '/contact', icon: Mail }
];

const EnhancedNavigation2026V2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const filteredServices = serviceCategories.flatMap(category =>
    category.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Revolutionary 2026</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Service Categories */}
            {serviceCategories.map((category) => (
              <div key={category.title} className="relative group">
                <button
                  onClick={() => toggleDropdown(category.title)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-white"
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.title.split(' ')[0]}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === category.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === category.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                            <category.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{category.title}</h3>
                            <p className="text-sm text-gray-400">{category.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2">
                                    <h4 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                                      {service.name}
                                    </h4>
                                    {service.popular && (
                                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full">
                                        Popular
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-400 mt-1">{service.description}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-bold text-purple-400">{service.price}</p>
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

            {/* Company Links */}
            <div className="flex items-center space-x-6">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <link.icon className="w-4 h-4" />
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              
              {/* Search Results */}
              {searchQuery && filteredServices.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl max-h-96 overflow-y-auto">
                  {filteredServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block p-3 hover:bg-white/5 transition-colors duration-200"
                    >
                      <h4 className="text-sm font-medium text-white">{service.name}</h4>
                      <p className="text-xs text-gray-400 mt-1">{service.description}</p>
                      <p className="text-xs text-purple-400 mt-1">{service.price}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Contact</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              {/* Mobile Service Categories */}
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <button
                    onClick={() => toggleDropdown(category.title)}
                    className="w-full flex items-center justify-between p-3 text-left text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === category.title ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === category.title && (
                    <div className="mt-2 ml-8 space-y-2">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block p-2 text-gray-300 hover:text-white transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm">{service.name}</span>
                            <span className="text-xs text-purple-400">{service.price}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Company Links */}
              <div className="pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center space-x-2 p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-white/10">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation2026V2;