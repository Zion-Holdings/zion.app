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
  GlobeIcon, StarIcon, TrendingUpIcon, UsersIcon,
  CheckCircleIcon, ArrowRightIcon, CpuIcon,
  DollarSign, Phone, ArrowRight, Mail, MapPin, Dna,
  Sparkles, Target as TargetIcon, Shield as ShieldIcon, BookOpen,
  Sparkles as SparklesIcon, Zap as ZapIcon, Brain as BrainIcon, Play, Heart, TrendingUp
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const navigationItems: NavigationItem[] = [
  {
    name: 'All Services',
    href: '/innovative-micro-saas-showcase',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    children: [
      { name: 'View All Services', href: '/innovative-micro-saas-showcase', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/innovative-micro-saas-showcase#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/innovative-micro-saas-showcase#search', description: 'Find specific services' }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    children: [
      { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory', description: 'Zero-human content generation' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Education Personalization', href: '/ai-education-personalization', description: 'Personalized learning AI' },
      { name: 'AI Biotech Research', href: '/ai-biotech-research', description: 'Biotechnology AI acceleration' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'AI Cybersecurity Sentinel', href: '/ai-cybersecurity-sentinel', description: 'AI threat detection' },
      { name: 'AI Autonomous Decision Engine', href: '/autonomous-decision-engine', description: 'Business decision automation' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform', description: 'Human-AI emotional collaboration' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-risk', description: 'Financial AI analytics' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    children: [
      { name: 'Quantum Brain-Computer Interface', href: '/quantum-brain-computer-interface', description: 'Neural interface technology' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum-enhanced trading' },
      { name: 'Quantum Logistics Optimizer', href: '/quantum-logistics-optimizer', description: 'Supply chain optimization' },
      { name: 'Quantum Space Mining', href: '/quantum-space-mining', description: 'Space resource exploration' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'Materials science acceleration' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Unbreakable encryption' },
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization', description: 'Smart grid optimization' },
      { name: 'Quantum Robotics Platform', href: '/quantum-robotics-platform', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Logistics Network', href: '/quantum-logistics-network', description: 'Global supply chain optimization' },
      { name: 'Quantum CRM Intelligence', href: '/quantum-crm-intelligence', description: 'AI-powered CRM with quantum insights' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    children: [
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture', description: 'Advanced cybersecurity' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration', description: 'Edge processing optimization' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops', description: 'Intelligent development automation' },
      { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum communication protocols' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations', description: 'Self-managing IT systems' },
      { name: 'Infrastructure Drift Detector', href: '/infrastructure-drift-detector', description: 'Infrastructure monitoring' },
      { name: 'Incident Automation Suite', href: '/incident-automation-suite', description: 'Automated incident response' },
      { name: 'Vendor Risk Automation', href: '/vendor-risk-automation', description: 'Vendor risk management' },
      { name: 'SOC2 Evidence Automation', href: '/soc2-evidence-automation', description: 'Compliance automation' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Popular',
    children: [
      { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory', description: 'Content generation automation' },
      { name: 'Quantum CRM Intelligence', href: '/quantum-crm-intelligence', description: 'AI-powered CRM platform' },
      { name: 'Autonomous Decision Engine', href: '/autonomous-decision-engine', description: 'Business decision automation' },
      { name: 'Quantum Logistics Optimizer', href: '/quantum-logistics-optimizer', description: 'Supply chain optimization' },
      { name: 'AI Cybersecurity Sentinel', href: '/ai-cybersecurity-sentinel', description: 'AI threat detection' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Education Personalization', href: '/ai-education-personalization', description: 'Personalized learning' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'Creative content generation' },
      { name: 'Swarm Robotics Intelligence', href: '/swarm-robotics-intelligence', description: 'Multi-robot coordination' },
      { name: 'Metaverse AI Development', href: '/metaverse-ai-development', description: 'AI-powered metaverse creation' }
    ]
  },
  {
    name: 'Transportation & Mobility',
    href: '/transportation-mobility',
    icon: <Target className="w-5 h-5" />,
    description: 'Next-generation transportation and mobility solutions',
    children: [
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Logistics Optimizer', href: '/quantum-logistics-optimizer', description: 'Route optimization' },
      { name: 'Swarm Robotics Intelligence', href: '/swarm-robotics-intelligence', description: 'Multi-robot coordination' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Edge processing' },
      { name: 'Quantum Logistics Network', href: '/quantum-logistics-network', description: 'Global supply chain optimization' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    href: '/healthcare-biotech',
    icon: <Heart className="w-5 h-5" />,
    description: 'Advanced healthcare and biotechnology solutions',
    children: [
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Biotech Research', href: '/ai-biotech-research', description: 'Biotechnology AI acceleration' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'Materials science acceleration' },
      { name: 'Quantum Brain-Computer Interface', href: '/quantum-brain-computer-interface', description: 'Neural interface technology' },
      { name: 'Biomedical AI Platform', href: '/biomedical-ai', description: 'Biomedical AI solutions' }
    ]
  },
  {
    name: 'Finance & Trading',
    href: '/finance-trading',
    icon: <TrendingUp className="w-5 h-5" />,
    description: 'Financial technology and trading solutions',
    children: [
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum-enhanced trading' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-risk', description: 'Financial AI analytics' },
      { name: 'Quantum CRM Intelligence', href: '/quantum-crm-intelligence', description: 'AI-powered CRM' },
      { name: 'Autonomous Decision Engine', href: '/autonomous-decision-engine', description: 'Business decision automation' },
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence', description: 'Business AI analytics' }
    ]
  },
  {
    name: 'Creativity & Design',
    href: '/creativity-design',
    icon: <Palette className="w-5 h-5" />,
    description: 'AI-powered creative and design solutions',
    children: [
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'Creative content generation' },
      { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory', description: 'Content automation' },
      { name: 'AI Brand Personality Generator', href: '/ai-brand-personality-generator', description: 'Brand personality AI' },
      { name: 'AI Video Editing', href: '/ai-video-editing', description: 'AI-powered video editing' },
      { name: 'AI Website Personalization', href: '/ai-website-personalization', description: 'Website personalization' }
    ]
  },
  {
    name: 'Research & Development',
    href: '/research-development',
    icon: <Microscope className="w-5 h-5" />,
    description: 'Advanced research and development platforms',
    children: [
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'Materials science acceleration' },
      { name: 'AI Biotech Research', href: '/ai-biotech-research', description: 'Biotechnology AI acceleration' },
      { name: 'Quantum Brain-Computer Interface', href: '/quantum-brain-computer-interface', description: 'Neural interface research' },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'Space technology AI' },
      { name: 'AI Research Scout', href: '/ai-research-scout', description: 'AI research assistance' }
    ]
  },
  {
    name: 'Energy & Sustainability',
    href: '/energy-sustainability',
    icon: <Zap className="w-5 h-5" />,
    description: 'Energy optimization and sustainability solutions',
    children: [
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization', description: 'Smart grid optimization' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Energy-efficient computing' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'Sustainable materials' }
    ]
  },
  {
    name: 'Security & Compliance',
    href: '/security-compliance',
    icon: <Lock className="w-5 h-5" />,
    description: 'Advanced security and compliance solutions',
    children: [
      { name: 'AI Cybersecurity Sentinel', href: '/ai-cybersecurity-sentinel', description: 'AI threat detection' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Unbreakable encryption' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture', description: 'Advanced cybersecurity' },
      { name: 'Vendor Risk Automation', href: '/vendor-risk-automation', description: 'Vendor risk management' },
      { name: 'SOC2 Evidence Automation', href: '/soc2-evidence-automation', description: 'Compliance automation' },
      { name: 'GDPR DSAR Automation', href: '/gdpr-dsar-automation', description: 'Data privacy automation' }
    ]
  },
  {
    name: 'Education & Training',
    href: '/education-training',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'AI-powered education and training solutions',
    children: [
      { name: 'AI Education Personalization', href: '/ai-education-personalization', description: 'Personalized learning' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'Creative education tools' },
      { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber-pro', description: 'Meeting transcription' },
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion', description: 'Mental health support' }
    ]
  },
  {
    name: 'Space & Metaverse',
    href: '/space-metaverse',
    icon: <GlobeIcon className="w-5 h-5" />,
    description: 'Space technology and metaverse solutions',
    children: [
      { name: 'Quantum Space Mining', href: '/quantum-space-mining', description: 'Space resource exploration' },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'Space technology AI' },
      { name: 'Metaverse AI Development', href: '/metaverse-ai-development', description: 'AI-powered metaverse creation' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Holographic events' }
    ]
  }
];

const quickActions = [
  { name: 'Get Started', href: '/contact', icon: <Rocket className="w-4 h-4" />, color: 'from-cyan-500 to-blue-600' },
  { name: 'View Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" />, color: 'from-purple-500 to-pink-600' },
  { name: 'Book Demo', href: '/demo', icon: <Play className="w-4 h-4" />, color: 'from-green-500 to-emerald-600' },
  { name: 'Support', href: '/support', icon: <Shield className="w-4 h-4" />, color: 'from-orange-500 to-red-600' }
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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    // TODO: Add search implementation
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border-b border-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-3 h-3" />
                {contactInfo.mobile}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-3 h-3" />
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/support" className="text-gray-300 hover:text-cyan-400 transition-colors">Support</a>
              <a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                <SparklesIcon className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-gray-400 -mt-1">Revolutionary Technology Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
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
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                      onMouseLeave={closeDropdown}
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.title || item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 group"
                            >
                              <div>
                                <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                  {child.name}
                                </div>
                                <div className="text-sm text-gray-400">{child.description}</div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
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

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Quick Actions */}
            <div className="flex items-center space-x-2">
              {quickActions.map((action) => (
                <Link key={action.name} href={action.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${action.color} text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                  >
                    {action.icon}
                    {action.name}
                  </motion.button>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between p-3 text-white hover:text-cyan-400 transition-colors rounded-lg hover:bg-gray-800/50"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                  {item.children && (
                    <div className="ml-8 space-y-1">
                      {item.children.slice(0, 3).map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block p-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors rounded"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                      {item.children.length > 3 && (
                        <Link
                          href={item.href}
                          className="block p-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors rounded font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          View all {item.children.length} services →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Quick Actions */}
              <div className="pt-4 border-t border-gray-800">
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <Link key={action.name} href={action.href}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-gradient-to-r ${action.color} text-white px-4 py-3 rounded-xl text-sm font-medium shadow-lg w-full flex items-center justify-center gap-2`}
                        onClick={() => setIsOpen(false)}
                      >
                        {action.icon}
                        {action.name}
                      </motion.button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}