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
  Network, Server, ShieldCheck, ZapIcon,
  GlobeIcon, StarIcon, TrendingUpIcon, UsersIcon,
  CheckCircleIcon, ArrowRightIcon, CpuIcon,
  DollarSign, Phone, ArrowRight, BarChart,
  PieChart, LineChart, Activity, TrendingUp,
  BarChart3 as BarChart3Icon, PieChart as PieChartIcon
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  color?: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: 'All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    color: 'from-cyan-500 to-blue-600',
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
    color: 'from-violet-500 to-purple-600',
    children: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro', description: 'Enterprise AI content generation' },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', description: 'Medical AI diagnostics' },
      { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro', description: 'Personalized AI learning' },
      { name: 'AI Autonomous Robotics Platform', href: '/ai-autonomous-robotics-platform', description: 'AI robotics control' },
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', description: 'Emotional intelligence and self-awareness' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion', description: 'Quantum-AI hybrid computing' },
      { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator', description: 'Cross-modal AI integration' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' }
    ]
  },
  {
    name: 'Financial Technology',
    href: '/fintech-services',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Advanced AI-powered financial solutions',
    badge: 'Hot',
    color: 'from-green-500 to-emerald-600',
    children: [
      { name: 'Neural Finance AI', href: '/neural-finance-ai', description: 'AI-powered financial analysis' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite', description: 'Quantum-enhanced CRM platform' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'Quantum Risk Financial Manager', href: '/quantum-risk-financial-manager', description: 'Quantum risk management' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    color: 'from-indigo-500 to-blue-600',
    children: [
      { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer', description: 'Quantum logistics optimization' },
      { name: 'Quantum Cybersecurity Suite', href: '/quantum-cybersecurity-suite', description: 'Quantum security solutions' },
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization', description: 'Quantum energy management' },
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
    color: 'from-blue-500 to-cyan-600',
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
    name: 'Healthcare & Biotech',
    href: '/healthcare-services',
    icon: <Microscope className="w-5 h-5" />,
    description: 'Advanced healthcare and biotechnology solutions',
    badge: 'New',
    color: 'from-red-500 to-pink-600',
    children: [
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', description: 'Medical AI diagnostics' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform', description: 'AI-powered research' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'Biotech AI', href: '/biotech-ai', description: 'Biotechnology AI platform' }
    ]
  },
  {
    name: 'Education & Learning',
    href: '/education-services',
    icon: <Users className="w-5 h-5" />,
    description: 'AI-powered educational technology solutions',
    badge: 'New',
    color: 'from-yellow-500 to-orange-600',
    children: [
      { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro', description: 'Personalized AI learning' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'AI-powered education' }
    ]
  },
  {
    name: 'Energy & Sustainability',
    href: '/energy-services',
    icon: <Zap className="w-5 h-5" />,
    description: 'Quantum energy and sustainability solutions',
    badge: 'New',
    color: 'from-orange-500 to-red-600',
    children: [
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization', description: 'Quantum energy management' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' }
    ]
  },
  {
    name: 'Robotics & Automation',
    href: '/robotics-services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'AI-powered robotics and automation solutions',
    badge: 'New',
    color: 'from-pink-500 to-purple-600',
    children: [
      { name: 'AI Autonomous Robotics Platform', href: '/ai-autonomous-robotics-platform', description: 'AI robotics control' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai', description: 'Self-driving AI systems' }
    ]
  },
  {
    name: 'Supply Chain & Logistics',
    href: '/supply-chain-services',
    icon: <Network className="w-5 h-5" />,
    description: 'Quantum-powered supply chain optimization',
    badge: 'New',
    color: 'from-teal-500 to-green-600',
    children: [
      { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer', description: 'Quantum logistics optimization' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' }
    ]
  },
  {
    name: 'Space & Metaverse',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration and virtual worlds',
    color: 'from-purple-500 to-pink-600',
    children: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI space technology' },
      { name: 'Metaverse Development Studio Pro', href: '/metaverse-development-studio-pro', description: 'Metaverse development' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Holographic events' },
      { name: 'Space Colonization Services', href: '/space-colonization-services', description: 'Space settlement solutions' },
      { name: 'Orbital Mechanics', href: '/orbital-mechanics', description: 'Orbital calculations' },
      { name: 'Satellite Operations', href: '/satellite-operations', description: 'Satellite management' }
    ]
  }
];

const EnhancedNavigation2025: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const filteredServices = navigationItems.flatMap(item => 
    item.children?.filter(child => 
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-black/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Star className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Future Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className={`group px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeDropdown === item.name
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                      item.badge === 'New' ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' :
                      item.badge === 'Hot' ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white' :
                      'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        
                        <div className="space-y-2">
                          {item.children?.map((child, index) => (
                            <Link
                              key={index}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                            >
                              <div className={`w-8 h-8 bg-gradient-to-r ${item.color || 'from-gray-500 to-gray-600'} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                                <Star className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                  {child.name}
                                </h4>
                                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                  {child.description}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm"
              />
              
              {/* Search Results Dropdown */}
              {searchQuery && filteredServices.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
                  <div className="p-4">
                    <div className="space-y-2">
                      {filteredServices.slice(0, 8).map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          onClick={() => setSearchQuery('')}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Star className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-white">{service.name}</h4>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-1">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden md:block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation2025;