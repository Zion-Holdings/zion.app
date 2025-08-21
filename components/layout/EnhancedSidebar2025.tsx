import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Menu, Home, Globe, Brain, Atom, Shield, 
  Rocket, DollarSign, Users, FileText, HelpCircle, 
  Settings, TrendingUp, Award, CheckCircle, Clock,
  Zap, Star, Crown, Infinity, Target, Eye,
  MessageCircle, Calendar, ExternalLink, ChevronRight,
  ChevronDown, Search, Phone, Mail, MapPin,
  Building, Code, Sparkles, Lock, Database,
  Cpu, Network, Cloud, Server, Key, ShieldCheck,
  Globe as GlobeIcon, BarChart3, PieChart, Activity,
  Target as TargetIcon, Lightbulb, Flame,
  Calculator
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  color?: string;
  isNew?: boolean;
  isHot?: boolean;
  isPremium?: boolean;
  category?: string;
}

const sidebarItems: SidebarItem[] = [
  {
    name: '🏠 Home',
    href: '/',
    icon: <Home className="w-5 h-5" />,
    description: 'Welcome to Zion Tech Group',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: '🚀 All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio showcase',
    badge: 'Showcase',
    color: 'from-cyan-500 to-blue-600',
    isNew: true
  },
  {
    name: '🧠 AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness',
    badge: 'New',
    color: 'from-violet-500 to-purple-600',
    isHot: true,
    children: [
      { name: 'AI Consciousness Evolution Pro', href: '/ai-consciousness-evolution-pro', icon: <Brain className="w-4 h-4" />, isNew: true },
      { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion-platform', icon: <Atom className="w-4 h-4" />, isHot: true },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', icon: <Zap className="w-4 h-4" /> },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', icon: <Shield className="w-4 h-4" /> },
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-pro', icon: <Sparkles className="w-4 h-4" />, isNew: true }
    ]
  },
  {
    name: '⚛️ Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Cutting-edge quantum solutions',
    badge: 'Hot',
    color: 'from-blue-500 to-indigo-600',
    isHot: true,
    children: [
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform', icon: <Lock className="w-4 h-4" />, isPremium: true },
      { name: 'Quantum Bio-Computing Platform', href: '/quantum-bio-computing-platform', icon: <Database className="w-4 h-4" />, isNew: true },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform', icon: <Cpu className="w-4 h-4" />, isHot: true },
      { name: 'Space Mining Platform', href: '/space-mining-platform', icon: <Target className="w-4 h-4" />, isPremium: true },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', icon: <Flame className="w-4 h-4" />, isNew: true }
    ]
  },
  {
    name: '🏢 Enterprise IT',
    href: '/enterprise-it-services',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise-grade solutions',
    badge: 'New',
    color: 'from-green-500 to-emerald-600',
    isNew: true,
    children: [
      { name: 'Quantum Cloud Infrastructure Pro', href: '/quantum-cloud-infrastructure-pro', icon: <Cloud className="w-4 h-4" />, isNew: true },
      { name: 'Edge Computing Orchestrator Pro', href: '/edge-computing-orchestrator-pro', icon: <Server className="w-4 h-4" />, isHot: true },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', icon: <ShieldCheck className="w-4 h-4" />, isNew: true },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform', icon: <Settings className="w-4 h-4" />, isNew: true },
      { name: 'Quantum Data Center Platform', href: '/quantum-data-center-platform', icon: <Database className="w-4 h-4" />, isPremium: true }
    ]
  },
  {
    name: '💻 Micro SAAS',
    href: '/micro-saas-services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative micro solutions',
    badge: 'Hot',
    color: 'from-purple-500 to-pink-600',
    isHot: true,
    children: [
      { name: 'AI Content Factory Enterprise', href: '/ai-content-factory-enterprise', icon: <FileText className="w-4 h-4" />, isNew: true },
      { name: 'Quantum CRM Suite Enterprise', href: '/quantum-crm-suite-enterprise', icon: <Users className="w-4 h-4" />, isHot: true },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', icon: <Brain className="w-4 h-4" />, isNew: true },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', icon: <FileText className="w-4 h-4" />, isNew: true },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', icon: <TargetIcon className="w-4 h-4" />, isPremium: true }
    ]
  },
  {
    name: '💰 Pricing & Plans',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Transparent pricing structure',
    badge: 'Updated',
    color: 'from-yellow-500 to-orange-600',
    children: [
      { name: 'Market Pricing Analysis', href: '/market-pricing', icon: <BarChart3 className="w-4 h-4" /> },
      { name: 'Enterprise Pricing', href: '/enterprise-pricing', icon: <Building className="w-4 h-4" /> },
      { name: 'Custom Solutions', href: '/custom-solutions', icon: <Settings className="w-4 h-4" /> },
      { name: 'ROI Calculator', href: '/roi-calculator', icon: <Calculator className="w-4 h-4" /> }
    ]
  },
  {
    name: '📚 Resources',
    href: '/resources',
    icon: <FileText className="w-5 h-5" />,
    description: 'Knowledge base & insights',
    color: 'from-indigo-500 to-purple-600',
    children: [
      { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
      { name: 'API Reference', href: '/api-docs', icon: <Code className="w-4 h-4" /> },
      { name: 'Case Studies', href: '/case-studies', icon: <TrendingUp className="w-4 h-4" /> },
      { name: 'Blog & Insights', href: '/blog', icon: <Lightbulb className="w-4 h-4" /> },
      { name: 'Training Materials', href: '/training', icon: <Users className="w-4 h-4" /> }
    ]
  },
  {
    name: '🏢 Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    color: 'from-gray-500 to-slate-600',
    children: [
      { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
      { name: 'Careers', href: '/careers', icon: <Award className="w-4 h-4" /> },
      { name: 'News & Updates', href: '/news', icon: <FileText className="w-4 h-4" /> },
      { name: 'Contact Us', href: '/contact', icon: <MessageCircle className="w-4 h-4" /> },
      { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const getBadgeStyle = (item: SidebarItem) => {
  if (item.isPremium) return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black';
  if (item.isHot) return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
  if (item.isNew) return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
  if (item.badge === 'Updated') return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
  if (item.badge === 'Showcase') return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
  return 'bg-gradient-to-r from-gray-600 to-gray-700 text-white';
};

const getBadgeText = (item: SidebarItem) => {
  if (item.isPremium) return 'Premium';
  if (item.isHot) return 'Hot';
  if (item.isNew) return 'New';
  return item.badge || '';
};

interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedSidebar2025({ isOpen, onClose }: EnhancedSidebar2025Props) {
  const router = useRouter();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-expand current section
  useEffect(() => {
    const currentPath = router.pathname;
    const newExpandedItems = new Set<string>();
    
    sidebarItems.forEach(item => {
      if (item.children) {
        const hasActiveChild = item.children.some(child => 
          currentPath === child.href || currentPath.startsWith(child.href)
        );
        if (hasActiveChild) {
          newExpandedItems.add(item.name);
        }
      }
    });
    
    setExpandedItems(newExpandedItems);
  }, [router.pathname]);

  const toggleExpanded = (itemName: string) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(itemName)) {
      newExpandedItems.delete(itemName);
    } else {
      newExpandedItems.add(itemName);
    }
    setExpandedItems(newExpandedItems);
  };

  const filteredItems = sidebarItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.children?.some(child => 
      child.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const isActive = (href: string) => router.pathname === href;

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
            className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Zion Tech
                    </h3>
                    <p className="text-xs text-gray-400">Navigation</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors"
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
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors text-sm"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-4 border-b border-gray-800/50">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-cyan-400" />
                <span>Contact Info</span>
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="w-3 h-3 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="w-3 h-3 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="p-4 space-y-2">
              {filteredItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  {/* Main Item */}
                  <div className="relative">
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 group ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30'
                          : 'hover:bg-gray-800/50 hover:border-gray-700/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isActive(item.href)
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                            : 'bg-gray-800/50 group-hover:bg-gray-700/50'
                        }`}>
                          <div className={isActive(item.href) ? 'text-white' : 'text-gray-400 group-hover:text-white'}>
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className={`font-medium ${
                              isActive(item.href) ? 'text-white' : 'text-gray-200 group-hover:text-white'
                            }`}>
                              {item.name.replace(/^[^\s]+ /, '')}
                            </span>
                            {getBadgeText(item) && (
                              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${getBadgeStyle(item)}`}>
                                {getBadgeText(item)}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs text-gray-400 group-hover:text-gray-300">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      {item.children && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleExpanded(item.name);
                          }}
                          className="p-1 rounded hover:bg-gray-700/50 transition-colors"
                        >
                          {expandedItems.has(item.name) ? (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      )}
                    </Link>
                  </div>

                  {/* Children Items */}
                  {item.children && expandedItems.has(item.name) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-8 space-y-1"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 group ${
                            isActive(child.href)
                              ? 'bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20'
                              : 'hover:bg-gray-800/30'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded flex items-center justify-center ${
                            isActive(child.href)
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                              : 'bg-gray-700/50 group-hover:bg-gray-600/50'
                          }`}>
                            <div className={isActive(child.href) ? 'text-white' : 'text-gray-400 group-hover:text-white'}>
                              {child.icon}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm ${
                              isActive(child.href) ? 'text-white' : 'text-gray-300 group-hover:text-white'
                            }`}>
                              {child.name}
                            </span>
                            {getBadgeText(child) && (
                              <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${getBadgeStyle(child)}`}>
                                {getBadgeText(child)}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-gray-800/50">
              <h4 className="text-sm font-semibold text-white mb-3">Quick Actions</h4>
              <div className="space-y-2">
                <Link
                  href="/contact"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 hover:from-green-500/30 hover:to-emerald-600/30 transition-all duration-200 group"
                >
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-white">Get Quote</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-600/20 border border-blue-500/30 hover:from-blue-500/30 hover:to-cyan-600/30 transition-all duration-200 group"
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-white">Book Demo</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-600/30 transition-all duration-200 group"
                >
                  <MessageCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">Live Chat</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}