import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Eye, Car, Factory, Leaf, Building2, Wifi, LockKeyhole,
  FileText
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations',
    icon: Rocket,
    color: 'from-violet-600 to-purple-600',
    description: 'Beyond the future of technology',
    services: [
      { name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-platform', description: 'Predict climate changes with 99.9% accuracy', price: '$2,999/month' },
      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall', description: 'Unbreakable quantum encryption', price: '$4,999/month' },
      { name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network', description: 'AI-powered drone delivery', price: '$1,999/month' },
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform', description: '95% accurate medical diagnosis', price: '$3,999/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Space Tech 2028',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    description: 'Quantum computing and space exploration',
    services: [
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Millisecond precision trading', price: '$8,999/month' },
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable internet security', price: '$3,999/month' },
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform', description: 'Quantum-powered ML', price: '$7,999/month' },
      { name: 'Space Debris Management AI', href: '/space-debris-management-ai-platform', description: 'AI space safety', price: '$5,999/month' }
    ]
  },
  {
    title: '🤖 AI & Machine Learning 2028',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1,499/month' },
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', description: 'AI-powered content generation', price: '$1,999/month' },
      { name: 'AI Healthcare Companion', href: '/ai-healthcare-companion-2026', description: 'Revolutionary healthcare AI', price: '$399/month' },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success', price: '$299/month' }
    ]
  },
  {
    title: '🏭 Autonomous & Manufacturing 2028',
    icon: Factory,
    color: 'from-orange-600 to-red-600',
    description: 'Self-optimizing systems',
    services: [
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai', description: 'Self-optimizing factories', price: '$6,999/month' },
      { name: 'Autonomous Vehicle Fleet Management', href: '/autonomous-vehicle-fleet-management', description: 'Intelligent fleet management', price: '$3,999/month' },
      { name: 'Smart Inventory Management', href: '/smart-inventory-management-system', description: 'AI inventory optimization', price: '$399/month' },
      { name: 'Automated HR Recruitment', href: '/automated-hr-recruitment-platform', description: 'AI-powered hiring', price: '$249/month' }
    ]
  },
  {
    title: '🏙️ Smart City & Infrastructure 2028',
    icon: Building2,
    color: 'from-gray-600 to-slate-600',
    description: 'Intelligent urban solutions',
    services: [
      { name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management', description: 'IoT and AI urban optimization', price: '$5,999/month' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', description: 'Intelligent edge computing', price: '$3,499/month' },
      { name: '5G Network Optimization Platform', href: '/5g-network-optimization-platform', description: 'AI-powered 5G optimization', price: '$4,999/month' },
      { name: 'Digital Twin Platform', href: '/digital-twin-platform', description: 'Virtual replicas for optimization', price: '$4,499/month' }
    ]
  },
  {
    title: '🔐 Security & Authentication 2028',
    icon: LockKeyhole,
    color: 'from-red-600 to-pink-600',
    description: 'Advanced security solutions',
    services: [
      { name: 'Biometric Authentication Platform', href: '/biometric-authentication-platform', description: 'Advanced biometric security', price: '$1,999/month' },
      { name: 'Zero Trust Architecture 2027', href: '/zero-trust-network-architecture-2026', description: 'Next-gen security architecture', price: 'Custom pricing' },
      { name: 'Blockchain Supply Chain Platform', href: '/blockchain-supply-chain-platform', description: 'Transparent supply chain', price: '$2,499/month' },
      { name: 'Incident Automation Suite', href: '/incident-automation-suite', description: 'Automated incident response', price: '$2,999/month' }
    ]
  },
  {
    title: '🌌 Metaverse & Digital Reality 2028',
    icon: Globe,
    color: 'from-pink-600 to-rose-600',
    description: 'Virtual and augmented reality',
    services: [
      { name: 'Holographic Metaverse', href: '/holographic-metaverse-development-platform', description: '3D holographic experiences', price: '$2,999/month' },
      { name: 'AI Multiverse Creation', href: '/ai-multiverse-creation-platform', description: 'Create AI-powered multiverses', price: '$29,999/month' },
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform', description: 'Holographic event platform', price: '$1,999/month' },
      { name: 'Digital Reality Interface 2027', href: '/digital-reality-interface-2027', description: 'Next-gen reality interface', price: '$4,999/month' }
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
  { name: '📰 News', href: '/news', icon: TrendingUp },
  { name: '🎯 Solutions', href: '/solutions', icon: Target },
  { name: '🔧 IT Services', href: '/it-services', icon: Cpu },
  { name: '🤖 AI Services', href: '/ai-services', icon: Brain },
  { name: '☁️ Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
  { name: '🔒 Security Services', href: '/security', icon: Shield },
  { name: '📱 Micro SAAS', href: '/micro-saas', icon: Zap },
  { name: '📈 Analytics', href: '/analytics', icon: TrendingUp },
  { name: '🔄 Automation', href: '/automation', icon: Layers },
  { name: '💼 Professional Services', href: '/professional-services', icon: Briefcase },
  { name: '🎓 Careers', href: '/careers', icon: Users },
  { name: '📞 Support', href: '/support', icon: MessageCircle },
  { name: '📋 Terms', href: '/terms', icon: FileText },
  { name: '🔒 Privacy', href: '/privacy', icon: Lock }
];

const quickServices = [
  { name: 'AI Climate Prediction', href: '/ai-climate-prediction-platform', icon: Leaf, color: 'from-emerald-500 to-teal-500' },
  { name: 'Quantum Security', href: '/quantum-cybersecurity-firewall', icon: ShieldCheck, color: 'from-purple-500 to-indigo-500' },
  { name: 'Drone Delivery', href: '/autonomous-drone-delivery-network', icon: Car, color: 'from-blue-500 to-cyan-500' },
  { name: 'AI Healthcare', href: '/ai-healthcare-diagnosis-platform', icon: Eye, color: 'from-red-500 to-pink-500' },
  { name: 'Smart Cities', href: '/smart-city-infrastructure-management', icon: Building2, color: 'from-gray-500 to-slate-500' },
  { name: '5G Optimization', href: '/5g-network-optimization-platform', icon: Wifi, color: 'from-green-500 to-emerald-500' }
];

export default function UltraFuturisticNavigation2028() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const filteredServices = serviceCategories.filter(category =>
    category.services.some(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <nav className="relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-purple-200">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 text-purple-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-3 w-3 text-purple-400" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-purple-300">2028 Futuristic Innovations</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Service Categories */}
            {serviceCategories.map((category) => (
              <div key={category.title} className="relative group">
                <button
                  className="flex items-center space-x-2 px-4 py-2 text-purple-200 hover:text-white transition-colors duration-200 group-hover:scale-105"
                  onMouseEnter={() => setActiveCategory(category.title)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.title.split(' ')[0]}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeCategory === category.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 p-6"
                      onMouseEnter={() => setActiveCategory(category.title)}
                      onMouseLeave={() => setActiveCategory(null)}
                    >
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                        <p className="text-purple-300 text-sm">{category.description}</p>
                      </div>
                      <div className="space-y-3">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-200 group"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-white group-hover:text-purple-200 transition-colors">
                                {service.name}
                              </h4>
                              <span className="text-sm font-bold text-purple-400">{service.price}</span>
                            </div>
                            <p className="text-sm text-purple-300">{service.description}</p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Company Links */}
            <div className="flex items-center space-x-6">
              {companyLinks.slice(0, 6).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-purple-200 hover:text-white transition-colors duration-200 hover:scale-105"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:flex relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-purple-400" />
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden md:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-purple-200 hover:text-white transition-colors duration-200"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400"
                />
                <Search className="absolute right-3 top-3.5 h-5 w-5 text-purple-400" />
              </div>

              {/* Quick Services */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Quick Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className={`p-3 rounded-xl bg-gradient-to-r ${service.color} hover:scale-105 transition-transform duration-200 text-white text-center`}
                      onClick={closeMenu}
                    >
                      <service.icon className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service Categories */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">All Services</h3>
                <div className="space-y-3">
                  {filteredServices.map((category) => (
                    <div key={category.title} className="border border-purple-500/20 rounded-xl p-4">
                      <h4 className="font-medium text-purple-200 mb-3">{category.title}</h4>
                      <div className="space-y-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block p-2 rounded-lg bg-purple-900/20 hover:bg-purple-800/30 text-white text-sm transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            <div className="flex items-center justify-between">
                              <span>{service.name}</span>
                              <span className="text-purple-400 font-medium">{service.price}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Company</h3>
                <div className="grid grid-cols-2 gap-3">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-purple-900/20 hover:bg-purple-800/30 text-purple-200 hover:text-white transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-purple-500/20">
                <div className="space-y-2 text-sm text-purple-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link
          href="/contact"
          className="flex items-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full shadow-2xl shadow-purple-500/30 hover:scale-110 transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
          <span className="hidden sm:inline">Get Started</span>
        </Link>
      </div>
    </nav>
  );
}