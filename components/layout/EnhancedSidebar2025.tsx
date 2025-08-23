import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronDown, ChevronRight, Search, Settings, User, 
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud, 
  BarChart3, Code, Smartphone, Server, Users, Award, 
  TrendingUp, BookOpen, FileText, GraduationCap, Headphones,
  Zap, Globe, Lock, Phone, Mail, MapPin, Star, MessageCircle,
  ExternalLink, Home, Briefcase, Info, HelpCircle, Shield as ShieldIcon, Play, Building,
  Heart, Palette, Target, Sparkles, Download
} from 'lucide-react';

const EnhancedSidebar2025: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ 
  isOpen, 
  onClose 
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['ai-services']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sidebarSections = [
    {
      id: 'ai-services',
      title: 'AI & Consciousness',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        { label: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', badge: 'Hot', featured: true },
        { label: 'AI Services Platform', href: '/ai-services', badge: 'New' },
        { label: 'AI Guardrails Suite', href: '/ai-guardrails', badge: 'Trending' },
        { label: 'Agentic RAG Platform', href: '/agentic-rag', badge: 'Featured' },
        { label: 'AI Content Personalization', href: '/ai-content-personalization-engine' },
        { label: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' },
        { label: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
        { label: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform' },
        { label: 'AI Customer Success', href: '/ai-customer-success-platform' },
        { label: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform' },
        { label: 'AI Financial Intelligence', href: '/ai-financial-planning-platform' },
        { label: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
        { label: 'AI Manufacturing Optimization', href: '/ai-manufacturing-optimization' },
        { label: 'AI Market Research', href: '/ai-market-research' },
        { label: 'AI Sustainability Platform', href: '/ai-sustainability-platform' }
      ]
    },
    {
      id: 'quantum-tech',
      title: 'Quantum & Emerging Tech',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { label: 'Quantum Neural Network 2045', href: '/quantum-neural-network-platform-2045', badge: 'Revolutionary', featured: true },
        { label: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', badge: 'Critical' },
        { label: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
        { label: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-2044' },
        { label: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' },
        { label: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },
        { label: 'Quantum Financial Intelligence', href: '/quantum-financial-trading-platform' },
        { label: 'Quantum Supply Chain Optimizer', href: '/quantum-logistics-optimization' },
        { label: 'Quantum Financial Trading', href: '/quantum-financial-trading' },
        { label: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform' },
        { label: 'Quantum Storage Solutions', href: '/quantum-storage-solutions-2044' },
        { label: 'Quantum Neural Network 2044', href: '/quantum-neural-network-platform-2044' }
      ]
    },
    {
      id: 'space-tech',
      title: 'Space Technology',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      items: [
        { label: 'Space Resource Intelligence 2045', href: '/space-resource-intelligence-2045', badge: 'Future', featured: true },
        { label: 'Space Technology', href: '/space-technology', badge: 'Core' },
        { label: 'Space Data Analytics', href: '/space-data-analytics' },
        { label: 'Orbital Computing', href: '/orbital-computing' },
        { label: 'Space Cybersecurity', href: '/space-cybersecurity' },
        { label: 'Interplanetary Communication', href: '/interplanetary-communication' },
        { label: 'Space Mining Platform', href: '/space-mining-platform' },
        { label: 'Space Colonization Services', href: '/space-colonization-services' }
      ]
    },
    {
      id: 'enterprise-it',
      title: 'Enterprise IT Solutions',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      items: [
        { label: 'IT Infrastructure', href: '/it-services', badge: 'Popular' },
        { label: 'Cloud Platform', href: '/cloud-platform', badge: 'Scalable' },
        { label: 'Cybersecurity', href: '/cybersecurity', badge: 'Critical' },
        { label: 'Data Analytics', href: '/data-analytics', badge: 'Insights' },
        { label: 'DevOps Automation', href: '/automation', badge: 'Efficient' },
        { label: 'Mobile & Web Solutions', href: '/mobile-web-solutions', badge: 'Modern' },
        { label: 'Zero Trust Security', href: '/zero-trust-security-platform' },
        { label: 'Network Management', href: '/autonomous-network-management-2044' },
        { label: 'Asset Management', href: '/it-asset-discovery-agent' },
        { label: 'Performance Monitoring', href: '/browser-performance-monitor' }
      ]
    },
    {
      id: 'business-solutions',
      title: 'Business Solutions',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      items: [
        { label: 'Business Intelligence', href: '/ai-autonomous-business-intelligence-2044', badge: 'AI-Powered', featured: true },
        { label: 'Customer Success', href: '/autonomous-customer-success-2044', badge: 'Automated' },
        { label: 'Sales Automation', href: '/ai-autonomous-sales-platform', badge: 'Intelligent' },
        { label: 'HR Management', href: '/ai-autonomous-hr-platform', badge: 'Smart' },
        { label: 'Marketing Automation', href: '/ai-autonomous-marketing-platform', badge: 'AI-Driven' },
        { label: 'Financial Planning', href: '/ai-financial-planning-platform', badge: 'Predictive' },
        { label: 'Supply Chain', href: '/ai-supply-chain-optimization', badge: 'Optimized' },
        { label: 'Content Factory', href: '/ai-autonomous-content-factory', badge: 'Automated' },
        { label: 'Research Assistant', href: '/ai-autonomous-research-assistant', badge: 'AI-Powered' },
        { label: 'Robotics Platform', href: '/ai-autonomous-robotics-platform', badge: 'Future' }
      ]
    },
    {
      id: 'industry-solutions',
      title: 'Industry Solutions',
      icon: Building,
      color: 'from-orange-500 to-red-500',
      items: [
        { label: 'Healthcare & Biotech', href: '/solutions/healthcare', badge: 'Life Sciences', featured: true },
        { label: 'Financial Services', href: '/solutions/financial', badge: 'Fintech' },
        { label: 'Manufacturing', href: '/solutions/manufacturing', badge: 'Smart Factory' },
        { label: 'Retail & E-commerce', href: '/solutions/retail', badge: 'Digital Commerce' },
        { label: 'Education', href: '/solutions/education', badge: 'Edtech' },
        { label: 'Government', href: '/solutions/government', badge: 'Public Sector' },
        { label: 'Entertainment & Media', href: '/entertainment-media-solutions', badge: 'Creative Tech' },
        { label: 'Energy & Utilities', href: '/energy-utilities-solutions', badge: 'Smart Energy' }
      ]
    },
    {
      id: 'resources',
      title: 'Resources & Support',
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-500',
      items: [
        { label: 'Documentation', href: '/docs', badge: 'Guides' },
        { label: 'API Reference', href: '/api-docs', badge: 'Developer' },
        { label: 'Blog & Insights', href: '/blog', badge: 'Latest' },
        { label: 'Webinars', href: '/webinars', badge: 'Learning' },
        { label: 'Case Studies', href: '/case-studies', badge: 'Success Stories' },
        { label: 'Training Programs', href: '/training', badge: 'Skill Development' },
        { label: 'Support Center', href: '/support', badge: 'Help' },
        { label: 'Status Page', href: '/status', badge: 'System Health' }
      ]
    }
  ];

  const quickActions = [
    { label: 'Get Started', href: '/contact', icon: Play, color: 'from-cyan-500 to-purple-500' },
    { label: 'View Pricing', href: '/pricing', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { label: 'Schedule Demo', href: '/demo', icon: MessageCircle, color: 'from-blue-500 to-indigo-500' },
    { label: 'Download Resources', href: '/resources', icon: Download, color: 'from-purple-500 to-pink-500' }
  ];

  const filteredSections = searchQuery 
    ? sidebarSections.map(section => ({
        ...section,
        items: section.items.filter(item => 
          item.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.items.length > 0)
    : sidebarSections;

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
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">Zion Tech</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Quick Actions */}
              <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      onClick={onClose}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs text-white font-medium">{action.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation Sections */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                  Services & Solutions
                </h3>
                
                {filteredSections.map((section) => (
                  <div key={section.id} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                          <section.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">{section.title}</span>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 text-white/60 transition-transform duration-300 ${
                          expandedSections.includes(section.id) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {expandedSections.includes(section.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/10"
                      >
                        <div className="p-2 space-y-1">
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center justify-between px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-all duration-300 group"
                              onClick={onClose}
                            >
                              <span className="truncate">{item.label}</span>
                              <div className="flex items-center space-x-2">
                                {item.featured && (
                                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full">
                                    Hot
                                  </span>
                                )}
                                {item.badge && !item.featured && (
                                  <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/60 rounded-full">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                  Contact Us
                </h3>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs">Middletown, DE 19709</span>
                  </div>
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