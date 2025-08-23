import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronDown, ChevronRight, Search, Settings, User, 
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud, 
  BarChart3, Code, Smartphone, Server, Users, Award, 
  TrendingUp, BookOpen, FileText, GraduationCap, Headphones,
  Zap, Globe, Lock, Phone, Mail, MapPin, Star, MessageCircle,
  ExternalLink, Home, Briefcase, Info, HelpCircle, Shield as ShieldIcon, Play,
  Building
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
        { label: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution', badge: 'Hot', featured: true },
        { label: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence', badge: 'New' },
        { label: 'AI Autonomous Research', href: '/ai-autonomous-research', badge: 'Trending' },
        { label: 'AI Content Personalization', href: '/ai-content-personalization' },
        { label: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
        { label: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
        { label: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance' },
        { label: 'AI Customer Success', href: '/ai-customer-success' },
        { label: 'AI Sales Intelligence', href: '/ai-sales-intelligence' },
        { label: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
        { label: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
        { label: 'AI Manufacturing Optimization', href: '/ai-manufacturing-optimization' },
        { label: 'AI Market Research', href: '/ai-market-research' },
        { label: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
        { label: 'AI Autonomous Vehicle', href: '/ai-autonomous-vehicle' }
      ]
    },
    {
      id: 'quantum-tech',
      title: 'Quantum & Emerging Tech',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { label: 'Quantum Neural Ecosystem', href: '/quantum-neural-ecosystem', badge: 'Revolutionary', featured: true },
        { label: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', badge: 'Critical' },
        { label: 'Quantum Internet Security', href: '/quantum-internet-security' },
        { label: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
        { label: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
        { label: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
        { label: 'Quantum Financial Intelligence', href: '/quantum-financial-intelligence' },
        { label: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer' },
        { label: 'Quantum Financial Trading', href: '/quantum-financial-trading' },
        { label: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform' },
        { label: 'Quantum Storage Solutions', href: '/quantum-storage-solutions' },
        { label: 'Quantum Workload Orchestration', href: '/quantum-workload-orchestration' }
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
        { label: 'DevOps Automation', href: '/devops-automation', badge: 'Efficient' },
        { label: 'Mobile & Web Solutions', href: '/mobile-web-solutions', badge: 'Modern' },
        { label: 'Zero Trust Security', href: '/zero-trust-security' },
        { label: 'Edge Computing', href: '/edge-computing' },
        { label: 'Blockchain Infrastructure', href: '/blockchain-infrastructure' },
        { label: 'Multi-Cloud Management', href: '/multi-cloud-management' },
        { label: 'Network Automation', href: '/network-automation' },
        { label: 'IT Asset Management', href: '/it-asset-management' },
        { label: 'Compliance Automation', href: '/compliance-automation' }
      ]
    },
    {
      id: 'main-pages',
      title: 'Company & Resources',
      icon: Building,
      color: 'from-indigo-500 to-purple-500',
      items: [
        { label: 'About Us', href: '/about', badge: 'Company' },
        { label: 'Case Studies', href: '/case-studies', badge: 'Success' },
        { label: 'Blog', href: '/blog', badge: 'Insights' },
        { label: 'Careers', href: '/careers', badge: 'Join Us' },
        { label: 'Contact', href: '/contact', badge: 'Get In Touch' }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Platforms',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      items: [
        { label: 'AI Content Factory', href: '/ai-autonomous-content-factory', badge: 'Trending', featured: true },
        { label: 'Customer Success Platform', href: '/ai-customer-success-platform', badge: 'Popular' },
        { label: 'HR Analytics Platform', href: '/ai-hr-analytics-platform' },
        { label: 'Sales Intelligence', href: '/ai-sales-intelligence-platform' },
        { label: 'Brain-Computer Interface', href: '/brain-computer-interface-platform' },
        { label: 'Research Assistant', href: '/ai-autonomous-research-assistant' },
        { label: 'Sustainability Platform', href: '/ai-sustainability-platform' },
        { label: 'Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
        { label: 'Financial Intelligence', href: '/ai-financial-intelligence-suite' },
        { label: 'Space Resource Intelligence', href: '/space-resource-intelligence-platform' },
        { label: 'Materials Discovery', href: '/quantum-materials-discovery-platform' },
        { label: 'Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer' }
      ]
    },
    {
      id: 'space-tech',
      title: 'Space Technology',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      items: [
        { label: 'Space Resource Intelligence', href: '/space-resource-intelligence', badge: 'Future', featured: true },
        { label: 'Satellite Technology', href: '/satellite-technology' },
        { label: 'Space Data Analytics', href: '/space-data-analytics' },
        { label: 'Orbital Computing', href: '/orbital-computing' },
        { label: 'Space Cybersecurity', href: '/space-cybersecurity' },
        { label: 'Interplanetary Communication', href: '/interplanetary-communication' }
      ]
    },
    {
      id: 'company',
      title: 'Company & Resources',
      icon: Users,
      color: 'from-gray-500 to-slate-500',
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
        { label: 'Partners', href: '/partners' },
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Support', href: '/support' },
        { label: 'Training', href: '/training' },
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api-docs' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const quickActions = [
    { label: 'Get Started', href: '/get-started', icon: Rocket, color: 'from-cyan-500 to-blue-600' },
    { label: 'Contact Sales', href: '/contact', icon: MessageCircle, color: 'from-purple-500 to-pink-600' },
    { label: 'Request Demo', href: '/demo', icon: Play, color: 'from-green-500 to-emerald-600' },
    { label: 'Support', href: '/support', icon: HelpCircle, color: 'from-orange-500 to-red-600' }
  ];

  const filteredSections = sidebarSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

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
            className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-cyan-500/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h2>
                    <p className="text-xs text-gray-400">Revolutionary Technology</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
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
                  className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 border-b border-cyan-500/20">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action) => (
                  <Link key={action.label} href={action.href}>
                    <button className="w-full p-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-cyan-500/20 rounded-lg hover:border-cyan-500/40 transition-all duration-300 group">
                      <div className={`w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                        {action.label}
                      </span>
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="flex-1 overflow-y-auto">
              <nav className="p-6 space-y-6">
                {filteredSections.map((section) => (
                  <div key={section.id} className="space-y-3">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.color} bg-opacity-20 border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/50 transition-all duration-300`}>
                          <section.icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
                          {section.title}
                        </span>
                      </div>
                      {expandedSections.includes(section.id) ? (
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedSections.includes(section.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-11 space-y-2"
                        >
                          {section.items.map((item, index) => (
                            <motion.div
                              key={item.href}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                              <Link
                                href={item.href}
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                                onClick={onClose}
                              >
                                <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
                                  {item.label}
                                </span>
                                <div className="flex items-center space-x-2">
                                  {item.featured && (
                                    <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                                      Featured
                                    </span>
                                  )}
                                  {item.badge && !item.featured && (
                                    <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-400/30 rounded-full">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
            </div>

            {/* Contact Information */}
            <div className="p-6 border-t border-cyan-500/20 bg-gray-900/30">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-xs">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href={contactInfo.website} className="hover:text-cyan-400 transition-colors text-xs">
                    {contactInfo.website.replace('https://', '')}
                  </a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-4 pt-4 border-t border-cyan-500/20">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span>Innovation Leader 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-400 mt-2">
                  <ShieldIcon className="w-3 h-3 text-green-400" />
                  <span>Enterprise Security</span>
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