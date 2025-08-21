import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, Search, 
  Brain, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Atom, BarChart3, Settings,
  Palette, BookOpen, GraduationCap, Heart,
  Truck, DollarSign, X, Phone, Mail, MapPin
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
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    color: 'from-purple-500 to-pink-500',
    children: [
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform', description: 'Advanced AI that understands human emotions' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion-platform', description: 'Quantum-AI hybrid computing' },
      { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator', description: 'Cross-modal AI integration' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-platform', description: 'Ethical AI frameworks' },
      { name: 'AI Content Generator Pro', href: '/ai-content-generator', description: 'Professional AI content creation' },
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber', description: 'AI-powered meeting transcription' },
      { name: 'AI Brand Personality', href: '/ai-brand-personality-generator', description: 'Consistent brand voice with AI' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    color: 'from-cyan-500 to-blue-500',
    children: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator', description: 'Edge processing optimization' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Advanced cybersecurity' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    color: 'from-green-500 to-emerald-500',
    children: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Next-gen cloud with quantum capabilities' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-automation', description: 'Intelligent development automation' },
      { name: 'Quantum Networking', href: '/quantum-networking-solutions', description: 'Quantum communication protocols' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'Self-managing IT systems' },
      { name: 'Quantum Data Center', href: '/quantum-data-center-platform', description: 'Next-gen data centers' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-suite', description: 'Quantum security solutions' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', description: 'Intelligent migration platform' },
      { name: '5G Private Network Solutions', href: '/5g-private-network-solutions', description: 'Advanced 5G infrastructure' }
    ]
  },
  {
    name: 'Space & Metaverse',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration and virtual worlds',
    color: 'from-pink-500 to-rose-500',
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
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Target className="w-5 h-5" />,
    description: 'Innovative business solutions',
    badge: 'Popular',
    color: 'from-orange-500 to-red-500',
    children: [
      { name: 'AI Legal Document Generator', href: '/ai-legal-document-generator', description: 'Professional legal document creation' },
      { name: 'Quantum Financial Forecasting', href: '/quantum-financial-forecasting', description: 'Next-gen financial predictions' },
      { name: 'AI Healthcare Diagnostic', href: '/ai-healthcare-diagnostic-assistant', description: 'AI-powered medical diagnosis' },
      { name: 'Quantum Cybersecurity Suite', href: '/quantum-cybersecurity-suite', description: 'Quantum-resistant security' },
      { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', description: 'Intelligent supply chain management' },
      { name: 'Quantum Data Analytics', href: '/quantum-data-analytics-platform', description: 'Quantum-enhanced analytics' }
    ]
  },
  {
    name: 'Creative & Media',
    href: '/creative-media',
    icon: <Palette className="w-5 h-5" />,
    description: 'AI-powered creative solutions',
    color: 'from-indigo-500 to-purple-500',
    children: [
      { name: 'AI Content Generator Pro', href: '/ai-content-generator', description: 'Professional content creation' },
      { name: 'AI Video Production', href: '/ai-video-production', description: 'Automated video creation' },
      { name: 'AI Music Composer', href: '/ai-music-composer', description: 'AI-generated music' },
      { name: 'AI Design Assistant', href: '/ai-design-assistant', description: 'Intelligent design tools' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    href: '/healthcare-biotech',
    icon: <Heart className="w-5 h-5" />,
    description: 'Advanced healthcare solutions',
    color: 'from-red-500 to-pink-500',
    children: [
      { name: 'AI Healthcare Diagnostic', href: '/ai-healthcare-diagnostic-assistant', description: 'AI-powered medical diagnosis' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological processing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'AI Drug Discovery', href: '/ai-drug-discovery', description: 'Accelerated drug development' }
    ]
  },
  {
    name: 'Transportation & Logistics',
    href: '/transportation-logistics',
    icon: <Truck className="w-5 h-5" />,
    description: 'Smart transportation solutions',
    color: 'from-blue-500 to-cyan-500',
    children: [
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', description: 'Intelligent supply chain management' },
      { name: 'Smart Fleet Management', href: '/smart-fleet-management', description: 'AI-powered fleet optimization' },
      { name: 'Logistics AI Platform', href: '/logistics-ai-platform', description: 'Intelligent logistics management' }
    ]
  },
  {
    name: 'Education & Research',
    href: '/education-research',
    icon: <GraduationCap className="w-5 h-5" />,
    description: 'Learning and research platforms',
    color: 'from-yellow-500 to-orange-500',
    children: [
      { name: 'AI Learning Platform', href: '/ai-learning-platform', description: 'Personalized AI education' },
      { name: 'Research AI Assistant', href: '/research-ai-assistant', description: 'AI-powered research tools' },
      { name: 'Virtual Lab Platform', href: '/virtual-lab-platform', description: 'Digital research environment' },
      { name: 'Knowledge Management AI', href: '/knowledge-management-ai', description: 'Intelligent knowledge systems' }
    ]
  }
];

const UltraFuturisticNavigation2035: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
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

  const filteredNavigation = navigationItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Phone className="w-3 h-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Mail className="w-3 h-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-3 h-3" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                Z
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">Zion Tech Group</div>
              <div className="text-xs text-gray-400">Future Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {filteredNavigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown */}
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
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                            >
                              <div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                {child.name}
                              </div>
                              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                                {child.description}
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
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center space-x-2 bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-700/50">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white placeholder-gray-400 outline-none w-48"
              />
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Search results dropdown */}
      {searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="p-4 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 border border-gray-700/30"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    {item.icon}
                    <span className="font-medium text-white">{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default UltraFuturisticNavigation2035;