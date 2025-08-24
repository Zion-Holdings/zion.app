import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight,
  Home, Search, Settings, User, 
  Brain, Cpu, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Microscope, Atom, Database,
  Lock, Cloud, BarChart3, Settings as SettingsIcon,
  Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck, ZapIcon,
  GlobeIcon, StarIcon, TrendingUpIcon, UsersIcon,
  CheckCircleIcon, ArrowRightIcon, CpuIcon,
  DollarSign, Phone, ArrowRight, Mail, MapPin, Dna, HelpCircle,
  Sparkles, Crown, Award, Target as TargetIcon, Zap as ZapIcon2, MessageCircle,
  Calendar, ExternalLink, BookOpen, FileText, Video, Headphones
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const navigationItems = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-violet-500 to-purple-600',
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    children: [
      { name: 'AI Consciousness Evolution Pro', href: '/ai-consciousness-evolution-pro', description: 'Advanced AI consciousness development' },
      { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion-platform', description: 'Quantum-AI hybrid computing' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-platform', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-pro', description: 'AI-powered creative platform' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal AI analysis platform' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-indigo-500 to-blue-600',
    description: 'Breakthrough quantum computing and space technology solutions',
    badge: 'Revolutionary',
    children: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unhackable quantum communication' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum molecular simulation' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface platform' },
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Autonomous space mining' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Quantum energy optimization' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'Quantum materials research' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-400" />,
    color: 'from-blue-500 to-cyan-600',
    description: 'Advanced enterprise infrastructure and security solutions',
    badge: 'Enterprise',
    children: [
      { name: 'Quantum Cloud Infrastructure Pro', href: '/quantum-cloud-infrastructure-pro', description: 'Quantum-enhanced cloud platform' },
      { name: 'Edge Computing Orchestrator Pro', href: '/edge-computing-orchestrator-pro', description: 'Advanced edge computing' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Comprehensive zero trust security' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform', description: 'Intelligent DevOps automation' },
      { name: 'Quantum Data Center Platform', href: '/quantum-data-center-platform', description: 'Quantum data center solutions' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    color: 'from-teal-500 to-emerald-600',
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Popular',
    children: [
      { name: 'AI Content Factory Enterprise', href: '/ai-content-factory-enterprise', description: 'Enterprise AI content generation' },
      { name: 'Quantum CRM Suite Enterprise', href: '/quantum-crm-suite-enterprise', description: 'Quantum-enhanced CRM platform' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', description: 'Autonomous decision making' },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', description: 'Advanced medical AI diagnostics' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal AI analysis platform' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' }
    ]
  },
  {
    title: 'Financial Technology',
    icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
    color: 'from-green-500 to-emerald-600',
    description: 'Advanced AI-powered financial solutions',
    badge: 'Hot',
    children: [
      { name: 'Neural Finance AI', href: '/neural-finance-ai', description: 'AI-powered financial analysis' },
      { name: 'Quantum Risk Financial Manager', href: '/quantum-risk-financial-manager', description: 'Quantum risk management' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'Autonomous Trading System', href: '/autonomous-quantum-trading-system', description: 'AI-powered trading' },
      { name: 'Financial Compliance AI', href: '/financial-compliance-ai', description: 'Regulatory compliance automation' },
      { name: 'Cryptocurrency Analytics', href: '/cryptocurrency-analytics-platform', description: 'Crypto market analysis' }
    ]
  },
  {
    title: 'Healthcare & Biotech',
    icon: <Microscope className="w-5 h-5 text-red-400" />,
    color: 'from-red-500 to-pink-600',
    description: 'Advanced healthcare and biotechnology solutions',
    badge: 'New',
    children: [
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', description: 'Advanced medical AI diagnostics' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform', description: 'AI-powered research platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum molecular simulation' },
      { name: 'Neural Interface Development', href: '/brain-computer-interface-platform', description: 'Brain-computer interfaces' },
      { name: 'Personalized Medicine AI', href: '/personalized-medicine-ai', description: 'AI-powered personalized medicine' },
      { name: 'Medical Imaging AI', href: '/medical-imaging-ai', description: 'Advanced medical imaging analysis' }
    ]
  },
  {
    title: 'Space & Metaverse',
    icon: <Globe className="w-5 h-5 text-pink-400" />,
    color: 'from-pink-500 to-rose-600',
    description: 'Space exploration and virtual reality solutions',
    badge: 'Future',
    children: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Autonomous space mining' },
      { name: 'Metaverse AI Development', href: '/metaverse-ai-development-platform', description: 'AI-powered metaverse' },
      { name: 'Satellite Operations', href: '/satellite-operations-platform', description: 'Satellite management systems' },
      { name: 'Virtual Reality AI', href: '/virtual-reality-ai-platform', description: 'AI-enhanced VR experiences' },
      { name: 'Space Debris Management', href: '/space-debris-management', description: 'Orbital debris tracking' },
      { name: 'Holographic Events Platform', href: '/holographic-events-platform', description: '3D holographic experiences' }
    ]
  }
];

const quickActions = [
  { name: 'Get Quote', href: '/quote', icon: <DollarSign className="w-4 h-4" />, color: 'from-green-500 to-emerald-600' },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" />, color: 'from-blue-500 to-cyan-600' },
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" />, color: 'from-purple-500 to-pink-600' },
  { name: 'Contact Support', href: '/support', icon: <HelpCircle className="w-4 h-4" />, color: 'from-orange-500 to-red-600' }
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs', icon: <BookOpen className="w-4 h-4" />, description: 'Technical guides and API docs' },
  { name: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" />, description: 'Success stories and implementations' },
  { name: 'Video Tutorials', href: '/tutorials', icon: <Video className="w-4 h-4" />, description: 'Step-by-step video guides' },
  { name: 'Webinars', href: '/webinars', icon: <Headphones className="w-4 h-4" />, description: 'Live and recorded sessions' }
];

export default function EnhancedSidebar2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (title: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedItems(newExpanded);
  };

  const filteredItems = navigationItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.children?.some(child => 
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isOpen && !target.closest('.sidebar') && !target.closest('.sidebar-toggle')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="sidebar-toggle fixed top-4 left-4 z-40 lg:hidden p-3 bg-black/80 backdrop-blur-lg border border-cyan-500/30 rounded-lg text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-200"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="sidebar fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/30 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-cyan-500/30">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h2>
                    <p className="text-xs text-gray-400">Future Technology Solutions</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
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
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Quick Actions</span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    href={action.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-center space-x-2 px-3 py-2 text-xs font-medium text-white rounded-lg bg-gradient-to-r ${action.color} hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                  >
                    {action.icon}
                    <span>{action.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto">
              <nav className="p-6 space-y-2">
                {filteredItems.map((item) => (
                  <div key={item.title} className="space-y-1">
                    <button
                      onClick={() => toggleItem(item.title)}
                      className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <div className="text-left">
                          <div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-400">{item.description}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {item.badge && (
                          <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${item.color} text-white`}>
                            {item.badge}
                          </span>
                        )}
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedItems.has(item.title) ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedItems.has(item.title) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-8 space-y-1"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block p-2 text-gray-400 hover:text-cyan-400 rounded transition-colors duration-200 hover:bg-white/5 group"
                            >
                              <div className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200" />
                                <div>
                                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                    {child.name}
                                  </p>
                                  <p className="text-xs text-gray-500">{child.description}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
            </div>

            {/* Resources */}
            <div className="p-6 border-t border-cyan-500/30">
              <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Resources</span>
              </h3>
              <div className="space-y-2">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 p-2 text-gray-400 hover:text-cyan-400 rounded transition-colors duration-200 hover:bg-white/5 group"
                  >
                    {link.icon}
                    <div>
                      <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                        {link.name}
                      </p>
                      <p className="text-xs text-gray-500">{link.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-6 border-t border-cyan-500/30">
              <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-cyan-400" />
                <span>Contact Info</span>
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-xs">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}