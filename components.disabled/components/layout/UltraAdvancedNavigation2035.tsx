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
  Sparkles as SparklesIcon, Zap as ZapIcon, Brain as BrainIcon, Play,
  Heart, BookOpen as BookOpenIcon, Microscope as MicroscopeIcon,
  Rocket as RocketIcon, Atom as AtomIcon, Shield as ShieldIcon2
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  color?: string;
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
    href: '/ultimate-futuristic-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all futuristic technology services',
    badge: 'Showcase',
    color: 'from-cyan-500 to-blue-600',
    children: [
      { name: 'View All Services', href: '/ultimate-futuristic-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/ultimate-futuristic-services-showcase-2025#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/ultimate-futuristic-services-showcase-2025#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/ultimate-futuristic-services-showcase-2025#search', description: 'Find specific services' }
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
      { name: 'AI Consciousness Evolution 2030', href: '/ai-consciousness-evolution-2030', description: 'Quantum emotional intelligence and self-awareness' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics-platform', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform', description: 'Human-AI emotional collaboration' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' }
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
      { name: 'Quantum AI Brain-Computer Interface', href: '/quantum-ai-brain-computer-interface', description: 'Neural interface technology' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum AI trading platform' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Unbreakable encryption' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'Materials science acceleration' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Unbreakable encryption' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum communication protocols' }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'AI-powered space exploration and resource extraction',
    badge: 'Revolutionary',
    color: 'from-blue-500 to-cyan-600',
    children: [
      { name: 'Space Mining AI Platform', href: '/space-mining-ai-platform', description: 'Asteroid mining and space resources' },
      { name: 'Space Exploration AI', href: '/space-exploration-ai', description: 'Autonomous space exploration' },
      { name: 'Satellite AI Management', href: '/satellite-ai-management', description: 'Intelligent satellite operations' },
      { name: 'Interplanetary Logistics', href: '/interplanetary-logistics', description: 'Space resource management' },
      { name: 'Space Safety Systems', href: '/space-safety-systems', description: 'AI-powered space safety' }
    ]
  },
  {
    name: 'Financial Technology',
    href: '/fintech',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Quantum AI-powered financial trading and analytics',
    badge: 'Advanced',
    color: 'from-green-500 to-emerald-600',
    children: [
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum AI trading platform' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'Quantum Financial Security', href: '/quantum-financial-security', description: 'Unbreakable financial security' },
      { name: 'AI Risk Assessment', href: '/ai-risk-assessment', description: 'Intelligent risk management' }
    ]
  },
  {
    name: 'Content & Marketing',
    href: '/content-marketing',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Autonomous AI content creation and management',
    badge: 'Popular',
    color: 'from-purple-500 to-pink-600',
    children: [
      { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory', description: 'Autonomous content creation' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'SEO Automation Suite', href: '/seo-automation', description: 'Intelligent SEO optimization' },
      { name: 'Social Media AI Manager', href: '/social-media-ai-manager', description: 'Autonomous social media management' },
      { name: 'Content Analytics Platform', href: '/content-analytics-platform', description: 'Advanced content insights' }
    ]
  },
  {
    name: 'Cybersecurity',
    href: '/cybersecurity',
    icon: <Shield className="w-5 h-5" />,
    description: 'Quantum encryption and advanced threat detection',
    badge: 'Secure',
    color: 'from-red-500 to-orange-600',
    children: [
      { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform', description: 'Unbreakable quantum encryption' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture', description: 'Advanced cybersecurity' },
      { name: 'AI Threat Detection', href: '/ai-threat-detection', description: 'Intelligent threat response' },
      { name: 'Incident Automation Suite', href: '/incident-automation-suite', description: 'Automated security response' },
      { name: 'Security Compliance Manager', href: '/security-compliance-manager', description: 'Automated compliance' }
    ]
  },
  {
    name: 'Healthcare Technology',
    href: '/healthcare-tech',
    icon: <Heart className="w-5 h-5" />,
    description: 'AI-powered medical diagnostics and treatment',
    badge: 'Life-Saving',
    color: 'from-teal-500 to-cyan-600',
    children: [
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics-platform', description: 'Medical AI solutions' },
      { name: 'AI Medical Imaging', href: '/ai-medical-imaging', description: 'Advanced medical imaging' },
      { name: 'Personalized Medicine AI', href: '/personalized-medicine-ai', description: 'Individualized treatment' },
      { name: 'Drug Discovery AI', href: '/drug-discovery-ai', description: 'Accelerated drug development' },
      { name: 'Healthcare Analytics Platform', href: '/healthcare-analytics-platform', description: 'Medical data insights' }
    ]
  },
  {
    name: 'Energy Technology',
    href: '/energy-tech',
    icon: <Zap className="w-5 h-5" />,
    description: 'Quantum computing for fusion power and energy optimization',
    badge: 'Sustainable',
    color: 'from-yellow-500 to-orange-600',
    children: [
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Smart Grid AI', href: '/smart-grid-ai', description: 'Intelligent energy management' },
      { name: 'Renewable Energy AI', href: '/renewable-energy-ai', description: 'Sustainable energy optimization' },
      { name: 'Energy Storage AI', href: '/energy-storage-ai', description: 'Advanced storage solutions' },
      { name: 'Climate Impact AI', href: '/climate-impact-ai', description: 'Environmental impact analysis' }
    ]
  },
  {
    name: 'Education Technology',
    href: '/edtech',
    icon: <BookOpenIcon className="w-5 h-5" />,
    description: 'Personalized AI-powered learning platforms',
    badge: 'Transformative',
    color: 'from-indigo-500 to-purple-600',
    children: [
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'Adaptive Learning AI', href: '/adaptive-learning-ai', description: 'Intelligent curriculum adaptation' },
      { name: 'AI Tutoring System', href: '/ai-tutoring-system', description: 'Personalized tutoring' },
      { name: 'Educational Content AI', href: '/educational-content-ai', description: 'AI-generated learning materials' },
      { name: 'Learning Analytics Platform', href: '/learning-analytics-platform', description: 'Educational insights' }
    ]
  },
  {
    name: 'Materials Science',
    href: '/materials-science',
    icon: <MicroscopeIcon className="w-5 h-5" />,
    description: 'AI-powered quantum materials research and discovery',
    badge: 'Breakthrough',
    color: 'from-cyan-500 to-blue-600',
    children: [
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'AI-powered materials research' },
      { name: 'Nanotechnology AI', href: '/nanotechnology-ai', description: 'Nano-scale material manipulation' },
      { name: 'Biomaterials AI', href: '/biomaterials-ai', description: 'Biological material development' },
      { name: 'Composite Materials AI', href: '/composite-materials-ai', description: 'Advanced material combinations' },
      { name: 'Materials Testing AI', href: '/materials-testing-ai', description: 'Automated material analysis' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Server className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    badge: 'Enterprise',
    color: 'from-gray-500 to-slate-600',
    children: [
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration', description: 'Edge processing optimization' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops', description: 'Intelligent development automation' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations', description: 'Self-managing IT systems' },
      { name: 'Quantum Data Center', href: '/quantum-data-center', description: 'Quantum-enhanced infrastructure' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent', description: 'Automated asset management' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: <Star className="w-4 h-4" /> },
  { name: 'All Services', href: '/ultimate-futuristic-services-showcase-2025', icon: <Globe className="w-4 h-4" /> },
  { name: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <Settings className="w-4 h-4" /> }
];

export default function UltraAdvancedNavigation2035() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const filteredServices = navigationItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900/50 via-black to-pink-900/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center hover:text-purple-400 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {contactInfo.mobile}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center hover:text-purple-400 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href={contactInfo.website} className="text-purple-400 hover:text-purple-300 transition-colors">
                {contactInfo.website.replace('https://', '')}
              </a>
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
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Future Technology Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-purple-400 transition-colors duration-300 group-hover:scale-105"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mr-3`}>
                              {item.icon}
                            </div>
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-300">{item.description}</p>
                        </div>
                        
                        <div className="space-y-2">
                          {item.children?.slice(0, 6).map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={closeMenu}
                              className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                                    {child.name}
                                  </div>
                                  <div className="text-xs text-gray-400">{child.description}</div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                              </div>
                            </Link>
                          ))}
                          
                          {item.children && item.children.length > 6 && (
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className="block p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
                            >
                              <div className="text-sm font-medium text-purple-400 text-center">
                                View All {item.name} Services →
                              </div>
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

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-purple-400 transition-colors"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {filteredServices.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="w-full flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                          {item.icon}
                        </div>
                        <div className="text-left">
                          <div className="text-white font-medium">{item.name}</div>
                          <div className="text-sm text-gray-400">{item.description}</div>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 ml-8 space-y-2"
                        >
                          {item.children?.slice(0, 4).map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={closeMenu}
                              className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                            >
                              <div className="text-sm text-white font-medium">{child.name}</div>
                              <div className="text-xs text-gray-400">{child.description}</div>
                            </Link>
                          ))}
                          
                          {item.children && item.children.length > 4 && (
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className="block p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg text-center"
                            >
                              <div className="text-sm text-purple-400 font-medium">
                                View All {item.name} Services →
                              </div>
                            </Link>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Quick Links */}
              <div className="pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    >
                      {link.icon}
                      <span className="text-white text-sm">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 block"
                >
                  Contact Our Experts
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}