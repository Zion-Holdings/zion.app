import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Rocket, Phone, Mail, MapPin,
  Brain, Cpu, Shield, Zap, Star, Users, TrendingUp,
  Globe, Database, Cloud, Lock, Palette, Target,
  Layers, Sparkles, Atom, Microscope, Satellite,
  Search, Bell, User, Settings, LogOut, SparklesIcon,
  Home, Briefcase, BookOpen, Users as Team, MessageCircle,
  DollarSign
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
      { name: 'AI Consciousness Simulation', href: '/ai-consciousness-simulation-platform', description: 'Simulate human consciousness', price: '$4,999/month' },
      { name: 'Autonomous AI Agents', href: '/autonomous-ai-agents-platform-2026', description: 'Create autonomous AI agents', price: '$199/month' },
      { name: 'AI Healthcare Companion', href: '/ai-healthcare-companion-2026', description: 'Revolutionary healthcare AI', price: '$399/month' },
      { name: 'AI Creative Studio', href: '/ai-creative-studio-platform', description: 'Unlimited AI creativity', price: 'Custom pricing' }
    ]
  },
  {
    title: 'Quantum Computing & Security',
    icon: Atom,
    color: 'from-blue-600 to-cyan-600',
    description: 'Quantum-powered solutions',
    services: [
      { name: 'Quantum Neural Interface', href: '/quantum-neural-interface-platform', description: 'Brain-computer interface', price: '$8,999/month' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway', description: 'Unbreakable encryption', price: '$3,999/month' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-algorithm-platform', description: 'Quantum trading algorithms', price: '$12,999/month' },
      { name: 'Quantum Internet Infrastructure', href: '/quantum-internet-infrastructure-platform', description: 'Build the quantum internet', price: '$15,999/month' }
    ]
  },
  {
    title: 'Emerging Technologies 2026',
    icon: Sparkles,
    color: 'from-green-600 to-emerald-600',
    description: 'Cutting-edge innovations',
    services: [
      { name: 'Holographic Metaverse', href: '/holographic-metaverse-development-platform', description: '3D holographic experiences', price: '$2,999/month' },
      { name: 'Space Debris Management', href: '/space-debris-management-ai-platform', description: 'AI space safety', price: '$5,999/month' },
      { name: 'AI Climate Prediction', href: '/ai-climate-prediction-platform', description: 'Climate change prediction', price: '$1,999/month' },
      { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing-ai-platform', description: 'Self-optimizing manufacturing', price: '$3,499/month' }
    ]
  },
  {
    title: 'Enterprise IT Solutions 2026',
    icon: Shield,
    color: 'from-red-600 to-orange-600',
    description: 'Enterprise-grade solutions',
    services: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture-2026', description: 'Next-gen security', price: 'Custom pricing' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-2026', description: 'Intelligent edge computing', price: 'Custom pricing' },
      { name: '5G Private Networks', href: '/5g-private-network-solutions-2026', description: 'Enterprise 5G', price: 'Custom pricing' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform-2026', description: 'Enterprise blockchain', price: 'Custom pricing' }
    ]
  },
  {
    title: 'Healthcare & Life Sciences',
    icon: Microscope,
    color: 'from-teal-600 to-cyan-600',
    description: 'Healthcare innovation',
    services: [
      { name: 'AI Drug Discovery', href: '/ai-drug-discovery-platform', description: 'Accelerate drug development', price: '$4,999/month' },
      { name: 'Autonomous Healthcare AI', href: '/autonomous-healthcare-ai-platform', description: 'Self-learning healthcare', price: '$2,499/month' },
      { name: 'Quantum Machine Learning', href: '/quantum-machine-learning-platform', description: 'Quantum AI research', price: '$6,999/month' },
      { name: 'AI Legal Research', href: '/ai-legal-research-platform', description: 'Revolutionary legal tech', price: '$899/month' }
    ]
  },
  {
    title: 'Financial Technology',
    icon: DollarSign,
    color: 'from-emerald-600 to-green-600',
    description: 'Fintech solutions',
    services: [
      { name: 'Autonomous Supply Chain', href: '/autonomous-supply-chain-optimization-ai', description: 'AI supply chain optimization', price: '$899/month' },
      { name: 'Autonomous Marketing AI', href: '/autonomous-marketing-ai-platform', description: 'Self-optimizing marketing', price: '$1,499/month' },
      { name: 'AI Cybersecurity', href: '/ai-cybersecurity-platform', description: 'Next-gen security', price: '$2,999/month' },
      { name: 'AI Business Intelligence', href: '/autonomous-business-intelligence-network', description: 'Self-evolving BI', price: '$1,299/month' }
    ]
  }
];

const companyLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Users },
  { name: '2026 Services', href: '/2026-services-showcase', icon: Rocket },
  { name: '2026 Services V3', href: '/2026-services-showcase-v3', icon: Rocket },
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen },
  { name: 'Careers', href: '/careers', icon: Team },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const UltraAdvancedNavigation2026 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology 2026</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div variants={itemVariants} className="hidden lg:flex items-center space-x-8">
            {/* Service Categories */}
            {serviceCategories.map((category) => (
              <div key={category.title} className="relative group">
                <button
                  onClick={() => toggleDropdown(category.title)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-purple-400"
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.title.split(' ')[0]}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === category.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === category.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                            <category.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{category.title}</h3>
                            <p className="text-gray-400 text-sm">{category.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={closeAll}
                              className="block p-3 rounded-xl hover:bg-purple-500/10 transition-colors duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                                    {service.name}
                                  </h4>
                                  <p className="text-gray-400 text-sm">{service.description}</p>
                                </div>
                                <div className="text-right">
                                  <div className="text-purple-400 font-semibold">{service.price}</div>
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
              {companyLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                >
                  <link.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right Side Actions */}
          <motion.div variants={itemVariants} className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center space-x-2 bg-white/10 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/20">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white placeholder-gray-400 outline-none w-48"
              />
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Get Started</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl rounded-xl px-4 py-3 border border-white/20">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-gray-400 outline-none flex-1"
                />
              </div>

              {/* Mobile Service Categories */}
              <div className="space-y-4">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="border-b border-purple-500/20 pb-4">
                    <button
                      onClick={() => toggleDropdown(category.title)}
                      className="flex items-center justify-between w-full text-left text-white font-medium"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                          <category.icon className="w-4 h-4 text-white" />
                        </div>
                        <span>{category.title}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === category.title ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === category.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-3 ml-11 space-y-2"
                        >
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={closeAll}
                              className="block text-gray-300 hover:text-purple-400 transition-colors"
                            >
                              <div className="text-sm">
                                <div className="font-medium">{service.name}</div>
                                <div className="text-xs text-gray-500">{service.description}</div>
                                <div className="text-purple-400 text-xs">{service.price}</div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Company Links */}
              <div className="space-y-3">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeAll}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5"
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                <h3 className="text-white font-semibold mb-3">Contact Us</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default UltraAdvancedNavigation2026;