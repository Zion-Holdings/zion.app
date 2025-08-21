import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight,
  Home, Zap, Brain, Atom, Shield, Rocket,
  Users, FileText, HelpCircle, Settings,
  TrendingUp, Award, CheckCircle, Clock,
  Globe, Cpu, Database, Lock, Star,
  Mail, Phone, MapPin, Search, ArrowRight,
  Heart, Palette, GraduationCap, Hospital, Coins, Leaf, Scale,
  BarChart3, Layers, Code, Terminal, Cloud, Server, Network, DollarSign
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const mainNavigation = [
  {
    title: 'Home',
    href: '/',
    icon: <Home className="w-5 h-5" />,
    description: 'Main landing page'
  },
  {
    title: 'All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Layers className="w-5 h-5" />,
    description: 'Complete service catalog'
  },
  {
    title: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Service pricing plans'
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <Mail className="w-5 h-5" />,
    description: 'Get in touch with us'
  }
];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-cyan-500/20 to-blue-600/20',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', popular: true },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion', popular: false },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', popular: true },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', popular: false },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', popular: true },
      { name: 'AI Education Platform', href: '/ai-education-platform', popular: false },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', popular: true },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', popular: true },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', popular: false },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform', popular: false }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500/20 to-purple-600/20',
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', popular: true },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing', popular: false },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface', popular: true },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', popular: false },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai', popular: true },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', popular: false },
      { name: 'Quantum Robotics', href: '/quantum-robotics', popular: true },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', popular: true },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', popular: false },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', popular: true }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-400" />,
    color: 'from-green-500/20 to-emerald-600/20',
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', popular: true },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration', popular: false },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture', popular: true },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform', popular: false },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops', popular: true },
      { name: 'Quantum Networking', href: '/quantum-networking', popular: false },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations', popular: true },
      { name: 'Quantum Data Center', href: '/quantum-data-center', popular: false },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', popular: true },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', popular: false }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    color: 'from-purple-500/20 to-pink-600/20',
    services: [
      { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory', popular: true },
      { name: 'Quantum CRM Intelligence Suite', href: '/quantum-crm-intelligence-suite', popular: true },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', popular: false },
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-pro', popular: true },
      { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro', popular: false },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', popular: true },
      { name: 'AI Financial Intelligence Pro', href: '/ai-financial-intelligence-pro', popular: true },
      { name: 'AI Sustainability Platform Pro', href: '/ai-sustainability-platform-pro', popular: false },
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', popular: false },
      { name: 'AI Legal Contract Analyzer Pro', href: '/ai-legal-contract-analyzer-pro', popular: false }
    ]
  }
];

const quickLinks = [
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api-docs', icon: <Code className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
  { name: 'Status', href: '/status', icon: <BarChart3 className="w-4 h-4" /> },
  { name: 'Training', href: '/training', icon: <GraduationCap className="w-4 h-4" /> },
  { name: 'Community', href: '/community', icon: <Users className="w-4 h-4" /> }
];

const companyLinks = [
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Careers', href: '/careers', icon: <Award className="w-4 h-4" /> },
  { name: 'News', href: '/news', icon: <TrendingUp className="w-4 h-4" /> },
  { name: 'Case Studies', href: '/case-studies', icon: <CheckCircle className="w-4 h-4" /> }
];

interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedSidebar2025({ isOpen, onClose }: EnhancedSidebar2025Props) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryTitle) 
        ? prev.filter(cat => cat !== categoryTitle)
        : [...prev, categoryTitle]
    );
  };

  const filteredServices = serviceCategories.flatMap(category =>
    category.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black border-r border-gray-800 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">Zion Tech</div>
                    <div className="text-xs text-cyan-400">Tech Solutions</div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            {/* Main Navigation */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Main Navigation
                </h3>
                <div className="space-y-2">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 group"
                    >
                      <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Service Categories
                </h3>
                <div className="space-y-2">
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="border border-gray-800 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleCategory(category.title)}
                        className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                            {category.icon}
                          </div>
                          <span className="font-medium">{category.title}</span>
                        </div>
                        {expandedCategories.includes(category.title) ? (
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {expandedCategories.includes(category.title) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-800/30"
                          >
                            <div className="p-3 space-y-2">
                              {category.services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={onClose}
                                  className="flex items-center justify-between p-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 rounded transition-colors duration-200 group"
                                >
                                  <span className="truncate">{service.name}</span>
                                  {service.popular && (
                                    <Star className="w-3 h-3 text-yellow-400" />
                                  )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 group"
                    >
                      <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company Links */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Company
                </h3>
                <div className="space-y-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 group"
                    >
                      <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 border-t border-gray-800 bg-gray-800/20">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="truncate">{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span className="text-xs leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <Link
                href="/contact"
                onClick={onClose}
                className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}