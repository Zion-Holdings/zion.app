import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight, Home, Rocket, Target, Building, BookOpen, MessageCircle,
  Brain, Atom, Shield, Cloud, BarChart, Code, Rocket as RocketIcon, Users, Info, Briefcase,
  Heart, DollarSign, Cog, FileText, Calendar, Lightbulb, HelpCircle, Monitor, Zap, Star,
  Settings, Globe, Lock, Server, Database, Network, Palette, Cpu, Layers, Globe2, Truck, Accessibility
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  featured?: boolean;
  category?: string;
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5" />,
    color: 'text-violet-400',
    items: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', badge: 'New' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', badge: 'Hot' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', badge: 'New' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', badge: 'Popular' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', badge: 'New' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', badge: 'New' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' },
      { name: 'AI Evaluation Orchestrator', href: '/services/ai-evaluation-orchestrator', badge: 'New' },
      { name: 'AI Support Triage Router', href: '/services/ai-support-triage-router', badge: 'New' },
      { name: 'AI Code Review Assistant Pro', href: '/services/ai-code-review-assistant-pro', badge: 'New' },
      { name: 'AI Revenue Forecasting Copilot', href: '/services/ai-revenue-forecasting-copilot', badge: 'New' },
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab/', badge: 'New' },
      { name: 'API Performance Testing', href: '/api-performance-testing/' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/healthcare-solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
    ]
  },
  {
    name: 'Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    color: 'text-emerald-400',
    items: [
      { name: 'AI Customer Success', href: '/ai-customer-success-platform', badge: 'New' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', badge: 'New' },
      { name: 'Financial Planning AI', href: '/ai-financial-planning-platform', badge: 'New' },
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform', badge: 'New' },
      { name: 'Sales Intelligence AI', href: '/ai-sales-intelligence-platform', badge: 'New' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'Smart CRM Suite', href: '/smart-crm-intelligence-suite' },
      { name: 'Financial Analytics', href: '/automated-financial-analytics-platform' },
      { name: 'Project Management', href: '/intelligent-project-management-suite' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence-suite' },
      { name: 'Marketing Automation', href: '/ai-autonomous-marketing-platform' }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: <Target className="w-5 h-5" />,
    color: 'text-orange-400',
    items: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions', badge: 'New' },
      { name: 'Financial Solutions', href: '/financial-solutions', badge: 'New' },
      { name: 'Government Solutions', href: '/government-technology-solutions', badge: 'New' },
      { name: 'Retail Solutions', href: '/retail-technology-solutions', badge: 'New' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', badge: 'New' },
      { name: 'Education Technology', href: '/education-technology-solutions' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
      { name: 'Entertainment & Media', href: '/entertainment-media-solutions' },
      { name: 'Real Estate Technology', href: '/real-estate-technology-solutions' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform' }
    ]
  },
  {
    title: 'Resources & Support',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-purple-400',
    items: [
      { name: 'Documentation', href: '/docs', badge: 'New' },
      { name: 'Blog & Insights', href: '/blog', badge: 'New' },
      { name: 'Case Studies', href: '/case-studies', badge: 'New' },
      { name: 'Support Center', href: '/support', badge: 'New' },
      { name: 'Training Resources', href: '/training' },
      { name: 'Performance Reports', href: '/reports' },
      { name: 'API Documentation', href: '/api-docs' },
      { name: 'Developer Resources', href: '/developer-resources' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Events & Webinars', href: '/events' }
    ]
  },
  {
    title: 'Company & Contact',
    icon: <Building className="w-5 h-5" />,
    color: 'text-gray-400',
    items: [
      { name: 'About Us', href: '/about', badge: 'New' },
      { name: 'Contact Information', href: '/contact', badge: 'New' },
      { name: 'Partnerships', href: '/partners', badge: 'New' },
      { name: 'Investment Info', href: '/investors', badge: 'New' },
      { name: 'Career Opportunities', href: '/careers', badge: 'New' },
      { name: 'News & Updates', href: '/news' },
      { name: 'Company Status', href: '/status' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  { name: 'All Services', href: '/comprehensive-2025-services-showcase', icon: <Star className="w-4 h-4" /> },
  { name: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Market Pricing', href: '/market-pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Services Advertising', href: '/services-advertising', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Get Quote', href: '/quote', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Book Demo', href: '/demo', icon: <Video className="w-4 h-4" /> },
  { name: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4" /> },
  { name: 'Resources', href: '/resources', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Events', href: '/events', icon: <Calendar className="w-4 h-4" /> },
  { name: 'Webinars', href: '/webinars', icon: <Video className="w-4 h-4" /> },
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> }
];

const companyLinks = [
  { name: 'About Us', href: '/about', description: 'Our mission and vision' },
  { name: 'Leadership Team', href: '/leadership', description: 'Executive team' },
  { name: 'Careers', href: '/careers', description: 'Join our team' },
  { name: 'News & Updates', href: '/news', description: 'Latest company news' },
  { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
  { name: 'Resources', href: '/resources', description: 'Whitepapers and guides' },
  { name: 'Blog', href: '/blog', description: 'Industry insights' },
  { name: 'Partners', href: '/partners', description: 'Partnership opportunities' },
  { name: 'Investors', href: '/investors', description: 'Investment information' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api-docs', description: 'Developer documentation' },
  { name: 'Status Page', href: '/status', description: 'Service status' },
  { name: 'Training', href: '/training', description: 'Learn our platforms' },
  { name: 'Community', href: '/community', description: 'Connect with users' },
  { name: 'FAQ', href: '/support', description: 'Frequently asked questions' },
  { name: 'Contact Us', href: '/contact', description: 'Get in touch directly' }
];

const stats = [
  { label: 'Services Delivered', value: '500+', icon: <CheckCircle className="w-5 h-5" /> },
  { label: 'Happy Clients', value: '200+', icon: <Users className="w-5 h-5" /> },
  { label: 'Years Experience', value: '15+', icon: <Clock className="w-5 h-5" /> },
  { label: 'Awards Won', value: '25+', icon: <Award className="w-5 h-5" /> }
];

interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

const EnhancedSidebar2025: React.FC<EnhancedSidebar2025Props> = ({ isOpen, onClose }) => {
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
          currentPath === child.href || currentPath.startsWith(child.href + '/')
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

  const isActive = (href: string) => {
    return router.pathname === href || router.pathname.startsWith(href + '/');
  };

  const filteredItems = sidebarItems.filter(item => {
    if (!searchQuery) return true;
    const matchesName = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDescription = item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesChildren = item.children?.some(child => 
      child.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return matchesName || matchesDescription || matchesChildren;
  });

  const handleItemClick = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-white/10 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-white/10 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search navigation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="p-4 space-y-2">
              {filteredItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleExpanded(item.name)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 group ${
                          isActive(item.href) 
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                            : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.name}</span>
                          {item.badge && (
                            <span className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {expandedItems.has(item.name) ? (
                          <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                        ) : (
                          <ChevronRight className="w-4 h-4 transition-transform duration-200" />
                        )}
                      </button>
                      
                      {/* Children */}
                      <AnimatePresence>
                        {expandedItems.has(item.name) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-6 mt-2 space-y-1"
                          >
                            {item.children.map((child) => (
                              <button
                                key={child.name}
                                onClick={() => handleItemClick(child.href)}
                                className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 text-sm group ${
                                  isActive(child.href)
                                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                                    : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                                }`}
                              >
                                {child.icon}
                                <span>{child.name}</span>
                                {child.featured && (
                                  <span className="ml-auto px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded">
                                    Featured
                                  </span>
                                )}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleItemClick(item.href)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                        isActive(item.href)
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="ml-auto px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-black/80 backdrop-blur-md border-t border-cyan-500/20 p-4 mt-8">
              <div className="space-y-3">
                <div className="text-xs text-gray-500 text-center">
                  © 2025 Zion Tech Group
                </div>
                <div className="flex justify-center space-x-4">
                  <Link
                    href="/contact"
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/support"
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Support
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Privacy
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnhancedSidebar2025;