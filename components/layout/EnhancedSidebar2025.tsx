import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight, Home, Rocket, Brain, Atom, Shield, Cpu,
  DollarSign, Mail, Users, Target, FileText, Briefcase, Globe, Database, Cloud,
  Zap, Star, TrendingUp, Settings, HelpCircle, BookOpen, Code, BarChart3
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  children?: SidebarItem[];
  badge?: string;
  color?: string;
}

const EnhancedSidebar2025: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const router = useRouter();

  const sidebarItems: SidebarItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: <Home className="w-5 h-5" />
    },
    {
      name: 'Revolutionary Services 2044',
      href: '/services',
      icon: <Rocket className="w-5 h-5" />,
      badge: 'New 2044',
      color: 'from-emerald-500 to-cyan-500',
      children: [
        { name: 'All Services', href: '/services', icon: <Rocket className="w-4 h-4" /> },
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2044', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform-2044', icon: <Atom className="w-4 h-4" /> },
        { name: 'Space Resource Intelligence', href: '/space-resource-intelligence-2044', icon: <Globe className="w-4 h-4" /> },
        { name: 'Autonomous Business Intelligence', href: '/ai-autonomous-business-intelligence-2044', icon: <BarChart3 className="w-4 h-4" /> }
      ]
    },
    {
      name: 'AI & Consciousness',
      href: '/ai-services',
      icon: <Brain className="w-5 h-5" />,
      badge: '2044',
      color: 'from-purple-500 to-pink-500',
      children: [
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2044', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum AI Cognitive', href: '/quantum-ai-cognitive-2044', icon: <Atom className="w-4 h-4" /> },
        { name: 'Autonomous AI Research', href: '/autonomous-ai-research-2044', icon: <TrendingUp className="w-4 h-4" /> },
        { name: 'Emotional AI Intelligence', href: '/emotional-ai-intelligence-2044', icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Quantum Technology',
      href: '/quantum-services',
      icon: <Atom className="w-5 h-5" />,
      badge: '2044',
      color: 'from-blue-500 to-cyan-500',
      children: [
        { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-2044', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Quantum Data Center Management', href: '/quantum-data-center-management-2044', icon: <Database className="w-4 h-4" /> },
        { name: 'Quantum Storage Solutions', href: '/quantum-storage-solutions-2044', icon: <Database className="w-4 h-4" /> },
        { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform-2044', icon: <Brain className="w-4 h-4" /> }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: <Cpu className="w-5 h-5" />,
      badge: '2044',
      color: 'from-emerald-500 to-teal-500',
      children: [
        { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform-2044', icon: <Settings className="w-4 h-4" /> },
        { name: 'Autonomous Network Management', href: '/autonomous-network-management-2044', icon: <Globe className="w-4 h-4" /> },
        { name: 'Autonomous IT Service Management', href: '/autonomous-it-service-management-2044', icon: <Cpu className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Space Technology',
      href: '/space-technology',
      icon: <Globe className="w-5 h-5" />,
      badge: '2044',
      color: 'from-indigo-500 to-purple-500',
      children: [
        { name: 'Space Resource Intelligence', href: '/space-resource-intelligence-2044', icon: <Globe className="w-4 h-4" /> },
        { name: 'Quantum Space Computing', href: '/quantum-space-computing-2044', icon: <Atom className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: <Users className="w-5 h-5" />,
      color: 'from-gray-500 to-gray-600',
      children: [
        { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
        { name: 'Our Mission', href: '/mission', icon: <Target className="w-4 h-4" /> },
        { name: 'Leadership Team', href: '/team', icon: <Users className="w-4 h-4" /> },
        { name: 'Careers', href: '/careers', icon: <Briefcase className="w-4 h-4" /> },
        { name: 'News & Updates', href: '/news', icon: <FileText className="w-4 h-4" /> },
        { name: 'Press Kit', href: '/press', icon: <FileText className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'from-yellow-500 to-orange-500',
      children: [
        { name: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4" /> },
        { name: 'Documentation', href: '/docs', icon: <BookOpen className="w-4 h-4" /> },
        { name: 'API Reference', href: '/api', icon: <Code className="w-4 h-4" /> },
        { name: 'Support Center', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
        { name: 'Status Page', href: '/status', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'Security', href: '/security', icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Mail className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isExpanded = (itemName: string) => expandedItems.includes(itemName);
  const isActive = (href: string) => router.pathname === href;

  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const expanded = isExpanded(item.name);
    const active = isActive(item.href);

    return (
      <div key={item.name} className="mb-1">
        <div className="relative">
          {hasChildren ? (
            <button
              onClick={() => toggleExpanded(item.name)}
              className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-xl transition-all duration-300 hover:bg-gray-800/50 ${
                active ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-gray-300 hover:text-white'
              }`}
              style={{ paddingLeft: `${level * 16 + 16}px` }}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 ${item.color ? `bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center` : ''}`}>
                  {item.icon}
                </div>
                <span className="font-medium">{item.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                {item.badge && (
                  <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                    {item.badge}
                  </span>
                )}
                {expanded ? (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                ) : (
                  <ChevronRight className="w-4 h-4 transition-transform duration-300" />
                )}
              </div>
            </button>
          ) : (
            <Link
              href={item.href}
              onClick={closeSidebar}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gray-800/50 ${
                active ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-gray-300 hover:text-white'
              }`}
              style={{ paddingLeft: `${level * 16 + 16}px` }}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 ${item.color ? `bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center` : ''}`}>
                  {item.icon}
                </div>
                <span className="font-medium">{item.name}</span>
              </div>
              {item.badge && (
                <span className="ml-auto px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          )}
        </div>

        {/* Children */}
        {hasChildren && expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 space-y-1"
          >
            {item.children!.map(child => renderSidebarItem(child, level + 1))}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900/90 backdrop-blur-xl rounded-xl border border-gray-700/50 text-white hover:bg-gray-800/90 transition-all duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-r border-gray-800/50 z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-2">
                {sidebarItems.map(item => renderSidebarItem(item))}
              </nav>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-800/50">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">+1 302 464 0950</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-r border-gray-800/50 overflow-y-auto">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Zion Tech Group
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2">
            {sidebarItems.map(item => renderSidebarItem(item))}
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-800/50">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default EnhancedSidebar2025;