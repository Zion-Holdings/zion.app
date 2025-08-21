import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, Search, 
  Brain, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Atom, BarChart3, Settings,
  Palette, BookOpen, GraduationCap, Heart,
  Truck, DollarSign
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
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
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
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Target className="w-5 h-5" />,
    description: 'Innovative business solutions',
    badge: 'Popular',
    children: [
      { name: 'AI Content Generator Pro', href: '/ai-content-generator', description: 'Automated content generation' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm', description: 'Next-gen customer management' },
      { name: 'CyberShield Pro', href: '/cyber-shield-pro', description: 'Comprehensive cybersecurity' },
      { name: 'DataVault Hub', href: '/data-vault-hub', description: 'Secure data management' },
      { name: 'DevOps Automation Studio', href: '/devops-automation-studio', description: 'Development automation' },
      { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber', description: 'Meeting transcription' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Holographic events' },
      { name: 'AI Brand Personality Generator', href: '/ai-brand-personality-generator', description: 'Brand voice development' },
      { name: 'Quantum Logistics Optimization', href: '/quantum-logistics-optimization', description: 'Supply chain optimization' }
    ]
  },
  {
    name: 'Creative & Media',
    href: '/creative-services',
    icon: <Palette className="w-5 h-5" />,
    description: 'AI-powered creative solutions',
    children: [
      { name: 'AI Video Editing', href: '/ai-video-editing', description: 'Automated video production' },
      { name: 'AI Art Generation', href: '/ai-art-generation', description: 'AI-powered artwork' },
      { name: 'AI Music Composition', href: '/ai-music-composition', description: 'Automated music creation' },
      { name: 'AI Content Studio', href: '/ai-content-studio', description: 'Creative content generation' },
      { name: 'Virtual Event Platform', href: '/virtual-event-hologram-platform', description: 'Immersive events' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    href: '/healthcare-services',
    icon: <Heart className="w-5 h-5" />,
    description: 'Advanced healthcare solutions',
    children: [
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform', description: 'Biotechnology research' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface', description: 'Neural technology' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing', description: 'Quantum biology' },
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion', description: 'Mental health support' }
    ]
  },
  {
    name: 'Transportation & Logistics',
    href: '/transportation-services',
    icon: <Truck className="w-5 h-5" />,
    description: 'Smart transportation solutions',
    children: [
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai', description: 'Self-driving technology' },
      { name: 'Quantum Logistics Optimization', href: '/quantum-logistics-optimization', description: 'Supply chain optimization' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator', description: 'Edge processing' },
      { name: 'Smart City Infrastructure', href: '/smart-city-infrastructure', description: 'Urban technology' },
      { name: 'Fleet Management AI', href: '/fleet-management-ai', description: 'Intelligent fleet operations' }
    ]
  },
  {
    name: 'Education & Research',
    href: '/education-services',
    icon: <GraduationCap className="w-5 h-5" />,
    description: 'Learning and research platforms',
    children: [
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning' },
      { name: 'Research Automation', href: '/research-automation', description: 'Automated research tools' },
      { name: 'Quantum Research Tools', href: '/quantum-research-tools', description: 'Quantum computing research' },
      { name: 'Space Research Platform', href: '/space-research-platform', description: 'Space exploration tools' },
      { name: 'AI Research Assistant', href: '/ai-research-assistant', description: 'Research automation' }
    ]
  }
];

const quickLinks = [
  { name: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Case Studies', href: '/case-studies', icon: <BarChart3 className="w-4 h-4" /> },
  { name: 'Documentation', href: '/docs', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <Zap className="w-4 h-4" /> }
];

interface EnhancedNavigation2025Props {
  onMenuClick: () => void;
}

export default function EnhancedNavigation2025({ onMenuClick }: EnhancedNavigation2025Props) {
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

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-2 px-2 py-1 text-xs font-medium bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full">
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
                      className="absolute left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                  {child.name}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">{child.description}</p>
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

          {/* Right Side */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Links */}
            <div className="flex items-center space-x-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                  title={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={onMenuClick}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}