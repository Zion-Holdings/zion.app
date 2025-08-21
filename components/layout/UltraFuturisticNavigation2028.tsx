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
    title: '🚀 2028 Cutting-Edge Innovations',
    icon: Rocket,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Beyond the future of technology',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform', description: 'Evolve AI beyond human limits', price: '$19,999/month' },
      { name: 'Quantum Time Manipulation', href: '/quantum-time-manipulation', description: 'Bridge quantum computing with consciousness', price: '$29,999/month' },
      { name: 'Autonomous AI Civilization', href: '/autonomous-ai-civilization-platform', description: 'Create AI civilizations', price: '$39,999/month' },
      { name: 'Quantum Neural Interface', href: '/quantum-neural-interface-platform', description: 'Brain-computer quantum interface', price: '$12,999/month' }
    ]
  },
  {
    title: '🎯 Practical Business Solutions 2028',
    icon: Target,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Real business solutions for today',
    services: [
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success with AI', price: '$499/month' },
      { name: 'AI Content Marketing Suite', href: '/ai-content-marketing-automation', description: 'AI-powered content creation and distribution', price: '$299/month' },
      { name: 'Smart Inventory Management', href: '/smart-inventory-management-system', description: 'AI inventory optimization', price: '$799/month' },
      { name: 'AI Sales Automation', href: '/ai-sales-automation', description: 'AI-powered sales automation', price: '$599/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Space Tech 2028',
    icon: Atom,
    color: 'from-indigo-600 via-blue-600 to-purple-600',
    description: 'Quantum computing and space exploration',
    services: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$5,999/month' },
      { name: 'Space Debris Management AI', href: '/space-debris-management-ai-platform', description: 'AI space safety and management', price: '$8,999/month' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-algorithm-platform', description: 'Quantum trading algorithms', price: '$15,999/month' },
      { name: 'Quantum Neural Interface', href: '/quantum-neural-interface-platform', description: 'Brain-computer quantum interface', price: '$12,999/month' }
    ]
  },
  {
    title: '🤖 AI & Machine Learning 2028',
    icon: Brain,
    color: 'from-emerald-600 via-teal-600 to-green-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Consciousness Simulation', href: '/ai-consciousness-simulation-platform', description: 'Simulate human consciousness', price: '$4,999/month' },
      { name: 'Autonomous AI Agents', href: '/autonomous-ai-agents-platform-2026', description: 'Create autonomous AI agents', price: '$199/month' },
      { name: 'AI Healthcare Companion', href: '/ai-healthcare-companion-2026', description: 'Revolutionary healthcare AI', price: '$99/month' },
      { name: 'AI Legal Assistant', href: '/ai-legal-assistant', description: 'AI-powered legal automation', price: '$299/month' }
    ]
  },
  {
    title: '🏢 Enterprise Solutions 2028',
    icon: Shield,
    color: 'from-red-600 via-orange-600 to-yellow-600',
    description: 'Enterprise-grade solutions',
    services: [
      { name: 'Zero Trust Architecture 2027', href: '/zero-trust-network-architecture-2026', description: 'Next-gen security architecture', price: 'Custom pricing' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-2026', description: 'Intelligent edge computing', price: 'Custom pricing' },
      { name: '5G Private Networks', href: '/5g-private-network-solutions-2026', description: 'Enterprise 5G solutions', price: 'Custom pricing' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform-2026', description: 'Enterprise blockchain', price: 'Custom pricing' }
    ]
  },
  {
    title: '🌌 Metaverse & Digital Reality 2028',
    icon: Globe,
    color: 'from-pink-600 via-rose-600 to-purple-600',
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
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket },
  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star },
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign },
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '💼 Careers', href: '/careers', icon: Users },
  { name: '📞 Contact', href: '/contact', icon: MessageCircle }
];

const serviceLinks = [
  { name: '🎯 Business Solutions', href: '/business-solutions', icon: Target },
  { name: '🤖 AI Services', href: '/ai-services', icon: Brain },
  { name: '⚛️ Quantum Tech', href: '/quantum-technology', icon: Atom },
  { name: '🌌 Space Technology', href: '/space-technology', icon: Globe },
  { name: '🏢 Enterprise IT', href: '/enterprise-it', icon: Shield },
  { name: '📱 Micro SAAS', href: '/micro-saas', icon: Zap }
];

const resourceLinks = [
  { name: '📖 Documentation', href: '/docs', icon: BookOpen },
  { name: '🎓 Training', href: '/training', icon: Users },
  { name: '🔧 API Reference', href: '/api', icon: Cpu },
  { name: '📊 Analytics', href: '/analytics', icon: TrendingUp },
  { name: '🛡️ Security', href: '/security', icon: ShieldCheck },
  { name: '📈 Performance', href: '/performance', icon: Zap }
];

export default function UltraFuturisticNavigation2028() {
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
        : 'bg-gradient-to-r from-black/90 via-gray-900/90 to-black/90 backdrop-blur-lg'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)] animate-spin-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-30 animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-400/70 font-mono">2028 Future Technology</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-white/90 hover:text-cyan-400 transition-colors duration-300 group-hover:text-cyan-400">
                <Rocket className="w-5 h-5" />
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-full left-0 w-screen max-w-6xl -ml-32 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group/category"
                      >
                        <div className={`flex items-center space-x-3 mb-4 p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20 border border-cyan-500/30`}>
                          <category.icon className="w-6 h-6 text-cyan-400" />
                          <div>
                            <h3 className="font-semibold text-white group-hover/category:text-cyan-400 transition-colors">
                              {category.title}
                            </h3>
                            <p className="text-sm text-cyan-400/70">{category.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block p-3 rounded-lg hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 transition-all duration-300 group/service"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium text-white group-hover/service:text-cyan-400 transition-colors">
                                    {service.name}
                                  </h4>
                                  <p className="text-sm text-gray-400 group-hover/service:text-cyan-300 transition-colors">
                                    {service.description}
                                  </p>
                                </div>
                                <span className="text-sm font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                                  {service.price}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Company Links */}
            {companyLinks.slice(1, 5).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center space-x-2 text-white/90 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>{link.name.split(' ').slice(1).join(' ')}</span>
              </Link>
            ))}

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 border border-cyan-400/50 hover:border-cyan-300"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/90 hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Services Section */}
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">🚀 Our Services</h3>
                <div className="space-y-3">
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="border-l-2 border-cyan-500/50 pl-4">
                      <h4 className="font-medium text-white mb-2">{category.title}</h4>
                      <div className="space-y-2 ml-4">
                        {category.services.slice(0, 2).map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">🏢 Company</h3>
                <div className="grid grid-cols-2 gap-3">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
                      onClick={() => setIsOpen(false)}
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm">{link.name.split(' ').slice(1).join(' ')}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-cyan-500/30 pt-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">📞 Contact Us</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}