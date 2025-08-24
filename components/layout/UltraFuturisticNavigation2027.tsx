import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2027 Cutting-Edge Innovations',
    icon: Rocket,
    color: 'from-violet-600 to-purple-600',
    description: 'Beyond the future of technology',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform', description: 'Evolve AI beyond human limits', price: '$9,999/month' },
      { name: 'Quantum Consciousness Interface', href: '/quantum-consciousness-interface', description: 'Bridge quantum computing with consciousness', price: '$15,999/month' },
      { name: 'Autonomous AI Civilization', href: '/autonomous-ai-civilization-platform', description: 'Create AI civilizations', price: '$19,999/month' },
      { name: 'Quantum Time Manipulation', href: '/quantum-time-manipulation-platform', description: 'Manipulate time through quantum computing', price: '$25,999/month' }
    ]
  },
  {
    title: '🤖 2027 Advanced AI Automation',
    icon: Brain,
    color: 'from-blue-600 to-cyan-600',
    description: 'Intelligent automation solutions',
    services: [
      { name: 'AI Customer Success Automation', href: '/services/ai-customer-success-automation', description: 'Automate customer success with AI', price: '$299/month' },
      { name: 'Automated Content Marketing Suite', href: '/services/automated-content-marketing-suite', description: 'AI-powered content creation', price: '$199/month' },
      { name: 'Smart Inventory Management', href: '/services/smart-inventory-management-system', description: 'AI inventory optimization', price: '$399/month' },
      { name: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management', description: 'Intelligent risk assessment', price: '$599/month' }
    ]
  },
  {
    title: '🎯 Practical Micro SAAS 2027',
    icon: Target,
    color: 'from-blue-600 to-cyan-600',
    description: 'Real business solutions for today',
    services: [
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success with AI', price: '$299/month' },
      { name: 'Automated Content Marketing', href: '/automated-content-marketing-suite', description: 'AI-powered content creation and distribution', price: '$199/month' },
      { name: 'Smart Inventory Management', href: '/smart-inventory-management-system', description: 'AI inventory optimization', price: '$399/month' },
      { name: 'Automated HR Recruitment', href: '/automated-hr-recruitment-platform', description: 'AI-powered hiring automation', price: '$249/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Space Tech 2027',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    description: 'Quantum computing and space exploration',
    services: [
      { name: 'Quantum Neural Interface', href: '/quantum-neural-interface-platform', description: 'Brain-computer quantum interface', price: '$8,999/month' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$3,999/month' },
      { name: 'Space Debris Management AI', href: '/space-debris-management-ai-platform', description: 'AI space safety and management', price: '$5,999/month' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-algorithm-platform', description: 'Quantum trading algorithms', price: '$12,999/month' }
    ]
  },
  {
    title: '🤖 AI & Machine Learning 2027',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Consciousness Simulation', href: '/ai-consciousness-simulation-platform', description: 'Simulate human consciousness', price: '$4,999/month' },
      { name: 'Autonomous AI Agents', href: '/autonomous-ai-agents-platform-2026', description: 'Create autonomous AI agents', price: '$199/month' },
      { name: 'AI Healthcare Companion', href: '/ai-healthcare-companion-2026', description: 'Revolutionary healthcare AI', price: '$399/month' },
      { name: 'AI Content Creation Revolution', href: '/ai-content-creation-revolution', description: 'Unlimited AI content generation', price: '$599/month' }
    ]
  },
  {
    title: '🏢 Enterprise Solutions 2027',
    icon: Shield,
    color: 'from-red-600 to-orange-600',
    description: 'Enterprise-grade solutions',
    services: [
      { name: 'Zero Trust Architecture 2027', href: '/zero-trust-network-architecture-2026', description: 'Next-gen security architecture', price: 'Custom pricing' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-2026', description: 'Intelligent edge computing', price: 'Custom pricing' },
      { name: '5G Private Networks', href: '/5g-private-network-solutions-2026', description: 'Enterprise 5G solutions', price: 'Custom pricing' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform-2026', description: 'Enterprise blockchain', price: 'Custom pricing' }
    ]
  },
  {
    title: '🌌 Metaverse & Digital Reality 2027',
    icon: Globe,
    color: 'from-pink-600 to-rose-600',
    description: 'Virtual and augmented reality',
    services: [
      { name: 'Holographic Metaverse', href: '/holographic-metaverse-development-platform', description: '3D holographic experiences', price: '$2,999/month' },
      { name: 'AI Multiverse Creation', href: '/ai-multiverse-creation-platform', description: 'Create AI-powered multiverses', price: '$29,999/month' },
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform', description: 'Holographic event platform', price: '$1,999/month' },
      { name: 'Digital Reality Interface', href: '/digital-reality-interface-2027', description: 'Next-gen reality interface', price: '$4,999/month' }
    ]
  }
];

const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home },
  { name: '🚀 2027 Services', href: '/2027-services-showcase', icon: Rocket },
  { name: '🔮 Advanced 2027', href: '/2027-advanced-services-showcase', icon: Sparkles },
  { name: '⭐ Ultimate 2027', href: '/ultimate-2027-services-showcase', icon: Star },
  { name: '💰 2027 Pricing', href: '/revolutionary-2027-pricing', icon: DollarSign },
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '📈 Reports', href: '/reports', icon: TrendingUp },
  { name: '🔧 Solutions', href: '/solutions', icon: Layers },
  { name: '💼 Careers', href: '/careers', icon: Users },
  { name: '📞 Contact', href: '/contact', icon: MessageCircle }
];

const technologyLinks = [
  { name: '🤖 AI Services', href: '/ai-services', icon: Brain },
  { name: '⚛️ Quantum Services', href: '/quantum-services', icon: Atom },
  { name: '☁️ Cloud Platform', href: '/cloud-platform', icon: Cloud },
  { name: '🔒 Cybersecurity', href: '/cybersecurity', icon: Lock },
  { name: '📊 Analytics', href: '/analytics', icon: Database },
  { name: '🔄 Automation', href: '/automation', icon: Cpu }
];

export default function UltraFuturisticNavigation2027() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/90 via-purple-900/90 to-pink-900/90 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-300">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-cyan-400 font-semibold">🚀 Zion Tech Group 2027</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-2xl shadow-cyan-500/50">
                Z
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur opacity-75 animate-pulse"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-400 font-medium">2027 Innovation Hub</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-300 group-hover:text-cyan-400"
              >
                <Rocket className="w-5 h-5" />
                <span>Services 2027</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[800px] bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-0">
                      {serviceCategories.map((category, index) => (
                        <motion.div
                          key={category.title}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-6 hover:bg-white/5 transition-colors duration-300"
                        >
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}>
                              <category.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                              <p className="text-cyan-400 text-xs">{category.description}</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 group"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors duration-300">
                                      {service.name}
                                    </h4>
                                    <p className="text-gray-400 text-xs">{service.description}</p>
                                  </div>
                                  <span className="text-cyan-400 font-semibold text-sm">{service.price}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Links */}
            {companyLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-300 group"
              >
                <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden xl:block">{link.name.replace(/^[^\s]*\s/, '')}</span>
              </Link>
            ))}

            {/* Technology Links */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('tech')}
                className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-300 group-hover:text-cyan-400"
              >
                <Cpu className="w-5 h-5" />
                <span>Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'tech' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'tech' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 p-4"
                  >
                    <div className="space-y-2">
                      {technologyLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 group"
                        >
                          <link.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {link.name.replace(/^[^\s]*\s/, '')}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-300"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Services */}
              <div className="space-y-4">
                <h3 className="text-cyan-400 font-semibold text-lg">🚀 Services 2027</h3>
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-3">
                    <h4 className="text-white font-medium">{category.title}</h4>
                    <div className="space-y-2 pl-4">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h5 className="text-white font-medium text-sm">{service.name}</h5>
                              <p className="text-gray-400 text-xs">{service.description}</p>
                            </div>
                            <span className="text-cyan-400 font-semibold text-sm">{service.price}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Company Links */}
              <div className="space-y-4">
                <h3 className="text-cyan-400 font-semibold text-lg">🏢 Company</h3>
                <div className="grid grid-cols-2 gap-3">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <link.icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-white text-sm">{link.name.replace(/^[^\s]*\s/, '')}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="space-y-3 pt-4 border-t border-cyan-500/30">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="block w-full px-6 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl text-center hover:bg-cyan-500/10 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}