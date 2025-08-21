import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Rocket, Phone, Mail, MapPin,
  Brain, Cpu, Shield, Zap, Star, Users, TrendingUp,
  Globe, Database, Cloud, Lock, Palette, Target,
  Layers, Sparkles, Atom, Microscope, Satellite,
  Heart, Dna, Eye, Car, Factory, RocketIcon
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'Revolutionary AI 2025',
    icon: Brain,
    color: 'from-pink-500 to-rose-600',
    services: [
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Human-like emotional understanding and response generation', price: '$299/month', icon: '❤️' },
      { name: 'AI Brain-Computer Interface', href: '/ai-brain-computer-interface', description: 'Direct brain-to-computer communication with AI assistance', price: '$5,999/month', icon: '🧠' },
      { name: 'AI Holographic Communication', href: '/ai-holographic-communication', description: '3D holographic meetings with AI-powered interaction', price: '$799/month', icon: '👁️' },
      { name: 'AI Autonomous Manufacturing', href: '/ai-autonomous-manufacturing', description: 'Self-optimizing factories with zero human intervention', price: '$2,499/month', icon: '🏭' }
    ]
  },
  {
    title: 'Quantum Technology',
    icon: Atom,
    color: 'from-cyan-500 to-blue-600',
    services: [
      { name: 'Quantum AI Drug Discovery', href: '/quantum-ai-drug-discovery', description: 'Accelerate pharmaceutical research with quantum-enhanced AI', price: '$1,999/month', icon: '🧬' },
      { name: 'Quantum Cybersecurity Suite', href: '/quantum-cybersecurity-suite', description: 'Unbreakable encryption powered by quantum mechanics', price: '$1,499/month', icon: '🔐' },
      { name: 'Quantum Machine Learning', href: '/quantum-machine-learning-platform', description: 'Supercharge ML with quantum computing acceleration', price: '$2,999/month', icon: '⚛️' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Next-generation internet security with quantum technology', price: '$699/month', icon: '🌐' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Sparkles,
    color: 'from-purple-500 to-violet-600',
    services: [
      { name: 'AI Metaverse Creation', href: '/ai-metaverse-creation-platform', description: 'Build immersive metaverses with AI-powered content generation', price: '$1,299/month', icon: '🌐' },
      { name: 'AI Synthetic Biology', href: '/ai-synthetic-biology-platform', description: 'Design and engineer life with AI-powered biology', price: '$3,499/month', icon: '🧬' },
      { name: 'AI Autonomous Vehicles', href: '/ai-autonomous-vehicle-platform', description: 'Build self-driving vehicles with advanced AI systems', price: '$4,999/month', icon: '🚗' },
      { name: 'AI Fusion Energy', href: '/ai-fusion-energy-platform', description: 'Revolutionize energy with AI-controlled fusion reactors', price: '$9,999/month', icon: '☢️' }
    ]
  },
  {
    title: 'Space & Advanced Tech',
    icon: RocketIcon,
    color: 'from-slate-500 to-gray-600',
    services: [
      { name: 'Space Technology AI Platform', href: '/space-tech-ai-platform', description: 'AI-powered space exploration and satellite management', price: '$3,999/month', icon: '🚀' },
      { name: 'AI Humanoid Robotics', href: '/ai-humanoid-robotics-platform', description: 'Create human-like robots with advanced AI capabilities', price: '$6,999/month', icon: '🤖' },
      { name: 'AI IoT Autonomous Cities', href: '/ai-iot-autonomous-cities', description: 'Self-managing smart cities with AI and IoT integration', price: '$4,999/month', icon: '🏙️' },
      { name: 'AI Blockchain Governance', href: '/ai-blockchain-governance', description: 'Intelligent blockchain governance with AI-powered decision making', price: '$899/month', icon: '⛓️' }
    ]
  },
  {
    title: 'Enterprise IT 2025',
    icon: Shield,
    color: 'from-red-500 to-rose-600',
    services: [
      { name: 'Zero Trust AI Security', href: '/zero-trust-ai-security', description: 'AI-powered zero trust security with continuous verification', price: '$2,999/month', icon: '🛡️' },
      { name: 'Multi-Cloud Orchestration', href: '/multi-cloud-orchestration', description: 'Seamless management across AWS, Azure, GCP, and private clouds', price: '$1,999/month', icon: '☁️' },
      { name: 'AI Data Governance', href: '/ai-data-governance-platform', description: 'Intelligent data governance with AI-powered compliance and quality', price: '$1,799/month', icon: '📊' },
      { name: '5G Enterprise Network', href: '/5g-enterprise-network', description: 'Private 5G networks with enterprise-grade security and performance', price: '$3,999/month', icon: '📡' }
    ]
  },
  {
    title: 'Innovative SaaS',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    services: [
      { name: 'AI DevOps Automation', href: '/ai-devops-automation', description: 'Intelligent DevOps with AI-powered automation and optimization', price: '$1,499/month', icon: '⚡' },
      { name: 'Enterprise AI Operations', href: '/enterprise-ai-operations', description: 'Centralized AI operations with enterprise governance and monitoring', price: '$4,999/month', icon: '🤖' },
      { name: 'Digital Transformation Orchestrator', href: '/digital-transformation-orchestrator', description: 'End-to-end digital transformation with AI-powered optimization', price: '$5,999/month', icon: '🔄' },
      { name: 'AI Creative Studio', href: '/ai-creative-studio-platform', description: 'Unlimited AI-powered creativity', price: 'Custom pricing', icon: '🎨' }
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

export default function EnhancedNavigation2025() {
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
        ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-black/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary Technology</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                    onMouseLeave={closeDropdown}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviceCategories.map((category) => (
                          <div key={category.title} className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                                <category.icon className="w-5 h-5 text-white" />
                              </div>
                              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                            </div>
                            <div className="space-y-2">
                              {category.services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                                  onClick={closeDropdown}
                                >
                                  <div className="flex items-start space-x-3">
                                    <span className="text-xl">{service.icon}</span>
                                    <div className="flex-1 min-w-0">
                                      <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                        {service.name}
                                      </div>
                                      <div className="text-xs text-gray-400 mt-1 line-clamp-2">
                                        {service.description}
                                      </div>
                                      <div className="text-xs text-cyan-400 font-medium mt-1">
                                        {service.price}
                                      </div>
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
            </div>

            {/* Other Navigation Links */}
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Contact
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-2">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.title}</span>
                    </div>
                    <div className="ml-8 space-y-2">
                      {category.services.slice(0, 2).map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                <Link href="/pricing" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Pricing
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-800/50">
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-xs">{contactInfo.address}</span>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started Today
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}