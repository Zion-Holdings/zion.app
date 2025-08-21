import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, Search, 
  Brain, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Atom, BarChart3, Settings,
  Palette, BookOpen, GraduationCap, Heart,
  Truck, DollarSign, TrendingUp, Lock,
  Cpu, Database, Cloud, Code, Monitor,
  Smartphone, Camera, Video, Music, Gamepad2
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
    href: '/services#ai-consciousness',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    color: 'from-cyan-500 to-blue-500',
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', description: 'Emotional intelligence and self-awareness' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion', description: 'Quantum-AI hybrid computing' },
      { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator', description: 'Cross-modal AI integration' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', description: 'Ethical AI frameworks' },
      { name: 'AI Content Generator Pro', href: '/ai-content-generator', description: 'Professional AI content creation' },
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber', description: 'AI-powered meeting transcription' },
      { name: 'AI Brand Personality', href: '/ai-brand-personality-generator', description: 'Consistent brand voice with AI' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/services#quantum-emerging',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    color: 'from-purple-500 to-pink-500',
    children: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing', description: 'Quantum-biological hybrid processing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface', description: 'Neural interface technology' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai', description: 'Self-driving AI systems' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator', description: 'Edge processing optimization' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Advanced cybersecurity' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/services#enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    color: 'from-green-500 to-emerald-500',
    children: [
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops', description: 'Intelligent development automation' },
      { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum communication protocols' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations', description: 'Self-managing IT systems' },
      { name: 'Quantum Data Center', href: '/quantum-data-center', description: 'Next-gen data centers' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', description: 'Quantum security solutions' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', description: 'Intelligent migration platform' },
      { name: '5G Private Network Solutions', href: '/5g-private-network-solutions', description: 'Advanced 5G infrastructure' }
    ]
  },
  {
    name: 'Space & Metaverse',
    href: '/services#space-metaverse',
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
    href: '/services#micro-saas',
    icon: <Target className="w-5 h-5" />,
    description: 'Innovative business solutions',
    badge: 'Popular',
    color: 'from-orange-500 to-red-500',
    children: [
      { name: 'AI Content Generator Pro', href: '/ai-content-generator', description: 'Automated content generation' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm', description: 'Next-gen customer management' },
      { name: 'CyberShield Pro', href: '/cyber-shield-pro', description: 'Comprehensive cybersecurity' },
      { name: 'DataVault Hub', href: '/data-vault-hub', description: 'Secure data management' },
      { name: 'DevOps Automation Studio', href: '/devops-automation-studio', description: 'Development automation' },
      { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber', description: 'Meeting transcription' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Holographic events' }
    ]
  },
  {
    name: 'Financial Technology',
    href: '/services#financial-technology',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Quantum and AI-powered financial solutions',
    color: 'from-green-500 to-emerald-600',
    children: [
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms' },
      { name: 'AI Risk Management', href: '/ai-risk-management', description: 'Intelligent risk assessment' },
      { name: 'Blockchain Finance', href: '/blockchain-finance', description: 'Decentralized financial solutions' },
      { name: 'Quantum Cryptography', href: '/quantum-cryptography', description: 'Unbreakable encryption' }
    ]
  },
  {
    name: 'Cybersecurity',
    href: '/services#cybersecurity',
    icon: <Lock className="w-5 h-5" />,
    description: 'Quantum-resistant security solutions',
    color: 'from-red-500 to-pink-600',
    children: [
      { name: 'Quantum Cybersecurity Suite', href: '/quantum-cybersecurity-suite', description: 'Quantum-resistant security' },
      { name: 'AI Threat Detection', href: '/ai-threat-detection', description: 'Intelligent threat analysis' },
      { name: 'Zero Trust Security', href: '/zero-trust-security', description: 'Advanced access control' },
      { name: 'Quantum Key Distribution', href: '/quantum-key-distribution', description: 'Unhackable communication' }
    ]
  },
  {
    name: 'Creative & Media',
    href: '/services#creative-media',
    icon: <Palette className="w-5 h-5" />,
    description: 'AI-powered creative solutions',
    color: 'from-indigo-500 to-purple-500',
    children: [
      { name: 'AI Video Generation', href: '/ai-video-generation', description: 'AI-powered video creation' },
      { name: 'Quantum Art Studio', href: '/quantum-art-studio', description: 'Quantum-inspired creativity' },
      { name: 'AI Music Composer', href: '/ai-music-composer', description: 'Intelligent music generation' },
      { name: 'Holographic Design', href: '/holographic-design', description: '3D holographic creation' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    href: '/services#healthcare-biotech',
    icon: <Heart className="w-5 h-5" />,
    description: 'Advanced healthcare solutions',
    color: 'from-red-500 to-pink-500',
    children: [
      { name: 'AI Biotech Platform', href: '/ai-powered-biotech-platform', description: 'AI-powered drug discovery' },
      { name: 'Quantum Medical Imaging', href: '/quantum-medical-imaging', description: 'Quantum-enhanced diagnostics' },
      { name: 'AI Health Analytics', href: '/ai-health-analytics', description: 'Intelligent health insights' },
      { name: 'Quantum DNA Computing', href: '/quantum-dna-computing', description: 'Molecular computing' }
    ]
  }
];

const mainNavItems = [
  { name: 'Home', href: '/', icon: <Star className="w-5 h-5" /> },
  { name: 'Services', href: '/services', icon: <Zap className="w-5 h-5" /> },
  { name: 'Pricing', href: '/pricing', icon: <DollarSign className="w-5 h-5" /> },
  { name: 'Resources', href: '/resources', icon: <BookOpen className="w-5 h-5" /> },
  { name: 'Case Studies', href: '/case-studies', icon: <BarChart3 className="w-5 h-5" /> },
  { name: 'Blog', href: '/blog', icon: <BookOpen className="w-5 h-5" /> },
  { name: 'Contact', href: '/contact', icon: <Users className="w-5 h-5" /> }
];

interface UltraFuturisticNavigation2035Props {
  onMenuClick: () => void;
}

const UltraFuturisticNavigation2035: React.FC<UltraFuturisticNavigation2035Props> = ({ onMenuClick }) => {
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-cyan-300">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                +1 302 464 0950
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                kleber@ziontechgroup.com
              </span>
            </div>
            <div className="text-gray-400">
              364 E Main St STE 1008, Middletown DE 19709
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                Z
              </div>
              <div className="hidden md:block">
                <div className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  Zion Tech Group
                </div>
                <div className="text-xs text-cyan-400">Future Technology Solutions</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                {item.icon}
                <span className="group-hover:text-cyan-300 transition-colors duration-300">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Service Categories Dropdown */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.slice(0, 6).map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <span className="group-hover:text-cyan-300 transition-colors duration-300">
                    {item.name}
                  </span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="text-sm text-cyan-400 font-medium mb-3">{item.description}</div>
                        <div className="space-y-2">
                          {item.children?.slice(0, 4).map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 group"
                            >
                              <div className="text-white group-hover:text-cyan-300 transition-colors duration-200 font-medium">
                                {child.name}
                              </div>
                              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                                {child.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-700/50">
                          <Link
                            href={item.href}
                            className="block text-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                          >
                            View All {item.name} Services →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
            </div>
            
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default UltraFuturisticNavigation2035;