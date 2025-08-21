import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, 
  Brain, Cpu, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Microscope, Atom, Database,
  Lock, Cloud, BarChart3, Settings,
  Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck,
  DollarSign, Phone, ArrowRight
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: 'All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    children: [
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025#search', description: 'Find specific services' }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', description: 'Emotional intelligence and self-awareness' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion', description: 'Quantum-AI hybrid computing' },
      { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator', description: 'Cross-modal AI integration' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    children: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing', description: 'Quantum-biological hybrid processing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface', description: 'Neural interface technology' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai', description: 'Self-driving AI systems' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'Materials science acceleration' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Unbreakable encryption' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    children: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator', description: 'Edge processing optimization' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Advanced cybersecurity' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops', description: 'Intelligent development automation' },
      { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum communication protocols' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations', description: 'Self-managing IT systems' },
      { name: 'Quantum Data Center', href: '/quantum-data-center', description: 'Next-gen data centers' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', description: 'Quantum security solutions' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', description: 'Intelligent migration platform' }
    ]
  },
  {
    name: 'Space & Metaverse',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration and virtual worlds',
    children: [
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI-powered space operations' },
      { name: 'Metaverse Development Studio', href: '/metaverse-development-studio-pro', description: '3D world building tools' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Holographic events' },
      { name: 'Space Colonization Services', href: '/space-colonization-services', description: 'Interplanetary infrastructure' },
      { name: 'Orbital Mechanics Platform', href: '/orbital-mechanics', description: 'Trajectory optimization' },
      { name: 'Satellite Operations Center', href: '/satellite-operations', description: 'Mission control systems' }
    ]
  },
  {
    name: 'Advanced Micro SAAS',
    href: '/micro-saas',
    icon: <Target className="w-5 h-5" />,
    description: 'Innovative business solutions',
    badge: 'Popular',
    children: [
      { name: 'CustomerSuccess AI Pro', href: '/customer-success-ai-pro', description: 'AI-powered customer success' },
      { name: 'QuantumSupply Chain Optimizer', href: '/quantum-supply-chain-optimizer', description: 'Quantum-enhanced logistics' },
      { name: 'BlockID Verify Pro', href: '/blockid-verify-pro', description: 'Blockchain identity verification' },
      { name: 'HR Analytics AI Suite', href: '/hr-analytics-ai-suite', description: 'AI-powered HR analytics' },
      { name: 'QuantumRisk Financial Manager', href: '/quantum-risk-financial-manager', description: 'Quantum financial risk management' },
      { name: 'LegalDoc AI Analyzer', href: '/legaldoc-ai-analyzer', description: 'AI legal document analysis' },
      { name: 'QuantumShield Threat Detection', href: '/quantum-shield-threat-detection', description: 'Quantum cybersecurity' },
      { name: 'Marketing AI Automation Pro', href: '/marketing-ai-automation-pro', description: 'AI marketing automation' },
      { name: 'QuantumData Analytics Pro', href: '/quantum-data-analytics-pro', description: 'Quantum data analytics' },
      { name: 'ProjectAI Management Suite', href: '/project-ai-management-suite', description: 'AI project management' }
    ]
  },
  {
    name: 'Advanced AI Services',
    href: '/advanced-ai-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Cutting-edge AI solutions',
    badge: 'Revolutionary',
    children: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'AI consciousness development' },
      { name: 'Quantum AI Hybrid Computing', href: '/quantum-ai-hybrid-computing-platform', description: 'Quantum-AI hybrid platform' },
      { name: 'Multimodal AI Orchestrator Pro', href: '/multimodal-ai-orchestrator-pro', description: 'Multi-modal AI orchestration' },
      { name: 'AI Autonomous Ecosystem Platform', href: '/ai-autonomous-ecosystem-platform', description: 'Autonomous AI systems' },
      { name: 'AI Ethics & Governance Platform', href: '/ai-ethics-governance-platform', description: 'AI ethics and compliance' },
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-platform', description: 'AI-powered creativity' },
      { name: 'AI Education Platform Pro', href: '/ai-education-platform', description: 'AI-powered education' },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-platform', description: 'AI medical diagnostics' },
      { name: 'AI Financial Intelligence Pro', href: '/ai-financial-intelligence-platform', description: 'AI financial analytics' },
      { name: 'AI Sustainability Platform Pro', href: '/ai-sustainability-platform', description: 'AI sustainability solutions' }
    ]
  },
  {
    name: 'Advanced IT Services',
    href: '/advanced-it-services',
    icon: <Server className="w-5 h-5" />,
    description: 'Next-generation IT infrastructure',
    badge: 'Advanced',
    children: [
      { name: 'Quantum Cloud Infrastructure Pro', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum cloud computing' },
      { name: 'Edge Computing Orchestrator Pro', href: '/edge-computing-orchestrator-platform', description: 'Advanced edge computing' },
      { name: 'Zero Trust Security Pro', href: '/zero-trust-security-platform', description: 'Advanced zero trust security' },
      { name: 'Blockchain Enterprise Platform Pro', href: '/blockchain-enterprise-platform', description: 'Enterprise blockchain' },
      { name: 'AI DevOps Platform Pro', href: '/ai-devops-platform', description: 'AI-powered DevOps' },
      { name: 'Quantum Networking Pro', href: '/quantum-networking-platform', description: 'Quantum networking' },
      { name: 'Autonomous IT Operations Pro', href: '/autonomous-it-operations-platform', description: 'Autonomous IT management' },
      { name: 'Quantum Data Center Pro', href: '/quantum-data-center-platform', description: 'Quantum data centers' },
      { name: 'Quantum Cybersecurity Pro', href: '/quantum-cybersecurity-platform', description: 'Quantum security' },
      { name: 'Quantum Cloud Migration Pro', href: '/quantum-cloud-migration-platform', description: 'Quantum migration' }
    ]
  },
  {
    name: 'Emerging Technologies',
    href: '/emerging-tech',
    icon: <Microscope className="w-5 h-5" />,
    description: 'Breakthrough technologies',
    badge: 'Future',
    children: [
      { name: 'Space Mining Platform Pro', href: '/space-mining-platform', description: 'Advanced space mining' },
      { name: 'Quantum Bio-Computing Pro', href: '/quantum-bio-computing-platform', description: 'Quantum biology' },
      { name: 'Brain-Computer Interface Pro', href: '/brain-computer-interface-platform', description: 'Advanced BCI' },
      { name: 'Quantum Energy Platform Pro', href: '/quantum-energy-platform', description: 'Quantum energy' },
      { name: 'Autonomous Vehicle AI Pro', href: '/autonomous-vehicle-ai-platform', description: 'Autonomous vehicles' },
      { name: 'Quantum Materials Discovery Pro', href: '/quantum-materials-discovery-platform', description: 'Quantum materials' },
      { name: 'Quantum Robotics Pro', href: '/quantum-robotics-platform', description: 'Quantum robotics' },
      { name: 'Quantum Internet Security Pro', href: '/quantum-internet-security-platform', description: 'Quantum internet' },
      { name: 'Quantum Logistics Optimization Pro', href: '/quantum-logistics-optimization-platform', description: 'Quantum logistics' },
      { name: 'Metaverse AI Development Pro', href: '/metaverse-ai-development-platform', description: 'Metaverse AI' }
    ]
  }
];

const quickLinks = [
  { name: 'Services', href: '/services', icon: Star },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Contact', href: '/contact', icon: Phone },
  { name: 'About', href: '/about', icon: Users }
];

interface EnhancedNavigation2025Props {
  onMenuClick: () => void;
}

export default function EnhancedNavigation2025({ onMenuClick }: EnhancedNavigation2025Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const filteredNavigation = navigationItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.children?.some(child => 
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-1 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="ml-2 px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children?.slice(0, 6).map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                              onClick={closeMenu}
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-200"></div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                  {child.name}
                                </p>
                                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                  {child.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                          {item.children && item.children.length > 6 && (
                            <Link
                              href={item.href}
                              className="flex items-center justify-center w-full p-3 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10"
                              onClick={closeMenu}
                            >
                              View All {item.name} Services
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center">
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={onMenuClick}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {filteredNavigation.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="ml-6 mt-2 space-y-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block p-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Quick Links */}
              <div className="pt-6 border-t border-gray-800/50">
                <div className="grid grid-cols-2 gap-4">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center space-x-2 p-3 text-gray-400 hover:text-white transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-6">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}