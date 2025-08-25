import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Rocket, Phone, Mail, MapPin,
  Brain, Cpu, Shield, Zap, Star, Users, TrendingUp,
  Globe, Database, Cloud, Lock, Palette, Target,
  Layers, Sparkles, Atom, Microscope, Satellite,
  Car, Factory, Leaf, Heart, Building2, Gauge
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Cutting-edge AI solutions for modern businesses',
    services: [
      { name: 'AI Business Intelligence Elite', href: '/ai-business-intelligence-elite', description: 'Transform data into actionable insights with AI', price: '$299/month', popular: true },
      { name: 'AI Legal Document Automation', href: '/ai-legal-document-automation', description: 'Automate legal document creation and review', price: '$199/month', popular: true },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Revolutionary AI-powered medical diagnostics', price: '$799/month', popular: true },
      { name: 'AI Metaverse Development', href: '/ai-metaverse-development-platform', description: 'Create immersive metaverse experiences with AI', price: '$499/month', popular: false },
      { name: 'AI Content Generator Elite', href: '/ai-content-generator-elite', description: 'Professional AI-powered content creation at scale', price: '$49/month', popular: true }
    ]
  },
  {
    title: 'Quantum Computing',
    icon: Atom,
    description: 'Next-generation quantum solutions for the future',
    services: [
      { name: 'Quantum-Secure Communication', href: '/quantum-secure-communication', description: 'Unbreakable encryption for the quantum era', price: '$599/month', popular: true },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum computing for financial market advantage', price: '$999/month', popular: true },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Next-generation internet security with quantum technology', price: '$699/month', popular: false },
      { name: 'Quantum Space Mining', href: '/quantum-space-mining-platform', description: 'Revolutionary space resource exploration and mining', price: '$1,299/month', popular: false }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Sparkles,
    description: 'Breakthrough technologies shaping tomorrow',
    services: [
      { name: 'Neuromorphic Computing', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing for next-generation AI', price: '$1,499/month', popular: false },
      { name: 'DNA Computing Platform', href: '/dna-computing-platform', description: 'Molecular computing for complex problem solving', price: '$2,999/month', popular: false },
      { name: 'Photonic Computing', href: '/photonic-computing-platform', description: 'Light-speed computing with photonic processors', price: '$1,999/month', popular: false },
      { name: 'Holographic Display', href: '/holographic-display-platform', description: 'Next-generation 3D holographic visualization', price: '$699/month', popular: true }
    ]
  },
  {
    title: 'Autonomous Systems',
    icon: Target,
    description: 'Self-managing systems for modern operations',
    services: [
      { name: 'Autonomous Supply Chain', href: '/autonomous-supply-chain-optimization', description: 'AI-powered supply chain management and optimization', price: '$399/month', popular: true },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai', description: 'AI-powered manufacturing automation and optimization', price: '$599/month', popular: true },
      { name: 'Swarm Robotics Platform', href: '/swarm-robotics-platform', description: 'Coordinated multi-robot systems for complex tasks', price: '$899/month', popular: false },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'AI-powered autonomous vehicle management and optimization', price: '$799/month', popular: true },
      { name: 'Autonomous Energy Management', href: '/autonomous-energy-management', description: 'AI-powered energy optimization and management', price: '$499/month', popular: true },
      { name: 'Autonomous Agriculture', href: '/autonomous-agriculture-platform', description: 'AI-powered agricultural automation and optimization', price: '$399/month', popular: true },
      { name: 'Autonomous Healthcare', href: '/autonomous-healthcare-platform', description: 'AI-powered healthcare automation and patient care', price: '$899/month', popular: true }
    ]
  },
  {
    title: 'Space Technology',
    icon: Satellite,
    description: 'Cutting-edge space exploration and technology',
    services: [
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI-powered space technology and satellite management', price: '$699/month', popular: false },
      { name: 'Quantum Space Mining', href: '/quantum-space-mining-platform', description: 'Revolutionary space resource exploration and mining', price: '$1,299/month', popular: false }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: Shield,
    description: 'Enterprise-grade IT solutions and infrastructure',
    services: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture', description: 'Advanced network security', price: 'Custom pricing', popular: false },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed computing management', price: 'Custom pricing', popular: false },
      { name: '5G Private Networks', href: '/5g-private-network-solutions', description: 'High-speed private networks', price: 'Custom pricing', popular: false },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Secure blockchain solutions', price: 'Custom pricing', popular: false }
    ]
  },
  {
    title: 'Innovative SaaS',
    icon: Zap,
    description: 'Revolutionary software-as-a-service solutions',
    services: [
      { name: 'AI Autonomous Business', href: '/ai-autonomous-business-platform', description: 'Run your business with AI', price: 'Custom pricing', popular: false },
      { name: 'AI Creative Studio', href: '/ai-creative-studio-platform', description: 'Unlimited AI-powered creativity', price: 'Custom pricing', popular: false },
      { name: 'AI Healthcare Companion', href: '/ai-healthcare-companion', description: 'Personalized healthcare AI', price: 'Custom pricing', popular: false },
      { name: 'Quantum Logistics Platform', href: '/quantum-logistics-platform', description: 'Optimize supply chains with quantum', price: 'Custom pricing', popular: false }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' }
];

export default function UltraAdvancedNavigationV2() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">
              Zion Tech Group
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
              >
                <Sparkles className="w-5 h-5" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6"
                    onMouseLeave={closeDropdown}
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="space-y-3">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <category.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                              <p className="text-sm text-gray-400">{category.description}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                                onClick={closeDropdown}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                        {service.name}
                                      </span>
                                      {service.popular && (
                                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                                          POPULAR
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-cyan-400 font-semibold">{service.price}</div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-white/10 text-center">
                      <Link
                        href="/services"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                        onClick={closeDropdown}
                      >
                        <Rocket className="w-5 h-5" />
                        <span>View All Services</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
              >
                <Building2 className="w-5 h-5" />
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'company' ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4"
                    onMouseLeave={closeDropdown}
                  >
                    <div className="space-y-2">
                      {companyLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-3 text-white hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                          onClick={closeDropdown}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Links */}
            <Link href="/pricing" className="text-white hover:text-cyan-400 transition-colors duration-200">
              Pricing
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white/80 text-sm">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.mobile}</span>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors duration-200 p-2"
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
              {/* Mobile Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Services</span>
                </h3>
                <div className="space-y-3">
                  {serviceCategories.slice(0, 3).map((category) => (
                    <div key={category.title} className="pl-4">
                      <h4 className="text-cyan-400 font-medium mb-2">{category.title}</h4>
                      <div className="space-y-2">
                        {category.services.slice(0, 2).map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block text-white/80 hover:text-white transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link
                    href="/services"
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>
              </div>

              {/* Mobile Company Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <div className="space-y-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-white/80 hover:text-white transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact */}
              <div className="pt-4 border-t border-white/10">
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4"
                >
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}