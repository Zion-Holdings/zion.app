import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, ChevronRight, Star, Brain, Atom, Shield, Target,
  Zap, Globe, Database, Lock, Cloud, BarChart3, Settings,
  Home, Users, FileText, Mail, Phone, MapPin
} from 'lucide-react';

interface SidebarItem {
  title: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: SidebarItem[];
  badge?: string;
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: Home
  },
  {
    title: 'Services',
    icon: Star,
    children: [
      {
        title: 'AI & Consciousness',
        href: '/services#ai-consciousness',
        icon: Brain,
        children: [
          { title: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', icon: Brain },
          { title: 'Quantum AI Fusion', href: '/quantum-ai-fusion', icon: Brain },
          { title: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator', icon: Brain },
          { title: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', icon: Brain },
          { title: 'AI Ethics & Governance', href: '/ai-ethics-governance', icon: Brain }
        ]
      },
      {
        title: 'Quantum & Emerging Tech',
        href: '/services#quantum-emerging',
        icon: Atom,
        children: [
          { title: 'Space Mining Platform', href: '/space-mining-platform', icon: Atom },
          { title: 'Quantum Bio-Computing', href: '/quantum-bio-computing', icon: Atom },
          { title: 'Brain-Computer Interface', href: '/brain-computer-interface', icon: Atom },
          { title: 'Quantum Energy Platform', href: '/quantum-energy-platform', icon: Atom },
          { title: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai', icon: Atom }
        ]
      },
      {
        title: 'Enterprise IT',
        href: '/services#enterprise-it',
        icon: Shield,
        children: [
          { title: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', icon: Shield },
          { title: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator', icon: Shield },
          { title: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', icon: Shield },
          { title: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise-platform', icon: Shield },
          { title: 'AI-Powered DevOps', href: '/ai-powered-devops', icon: Shield }
        ]
      },
      {
        title: 'Micro SAAS',
        href: '/services#micro-saas',
        icon: Target,
        children: [
          { title: 'AI Content Factory Pro', href: '/ai-content-factory', icon: Target },
          { title: 'Quantum CRM Suite', href: '/quantum-crm', icon: Target },
          { title: 'CyberShield Pro', href: '/cyber-shield-pro', icon: Target },
          { title: 'DataVault Hub', href: '/data-vault-hub', icon: Target },
          { title: 'DevOps Automation Studio', href: '/devops-automation-studio', icon: Target }
        ]
      }
    ]
  },
  {
    title: 'About',
    href: '/about',
    icon: Users
  },
  {
    title: 'Resources',
    icon: FileText,
    children: [
      { title: 'Documentation', href: '/docs', icon: FileText },
      { title: 'API Reference', href: '/api', icon: FileText },
      { title: 'Case Studies', href: '/case-studies', icon: FileText },
      { title: 'Blog', href: '/blog', icon: FileText },
      { title: 'Whitepapers', href: '/whitepapers', icon: FileText }
    ]
  },
  {
    title: 'Contact',
    icon: Mail,
    children: [
      { title: 'Get Support', href: '/contact', icon: Mail },
      { title: 'Sales Inquiry', href: '/sales', icon: Mail },
      { title: 'Partnership', href: '/partnership', icon: Mail }
    ]
  }
];

interface SidebarItemComponentProps {
  item: SidebarItem;
  level?: number;
}

const SidebarItemComponent: React.FC<SidebarItemComponentProps> = ({ item, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(level === 0);
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  const itemContent = (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-3">
        <item.icon className={`w-4 h-4 ${level === 0 ? 'text-cyan-400' : 'text-gray-400'}`} />
        <span className={`${level === 0 ? 'text-white font-medium' : 'text-gray-300'}`}>
          {item.title}
        </span>
      </div>
      {hasChildren && (
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-4 h-4 text-gray-500" />
        </motion.div>
      )}
      {item.badge && (
        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
          {item.badge}
        </span>
      )}
    </div>
  );

  return (
    <div className="space-y-1">
      {item.href ? (
        <Link
          href={item.href}
          className={`block px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-800/50 hover:text-white ${
            level === 0 ? 'hover:bg-cyan-500/10 hover:border-l-2 hover:border-l-cyan-500' : ''
          }`}
        >
          {itemContent}
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-800/50 hover:text-white ${
            level === 0 ? 'hover:bg-cyan-500/10 hover:border-l-2 hover:border-l-cyan-500' : ''
          }`}
        >
          {itemContent}
        </button>
      )}

      {hasChildren && (
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-4 space-y-1 border-l border-gray-700/50"
            >
              {item.children!.map((child, index) => (
                <SidebarItemComponent
                  key={child.title}
                  item={child}
                  level={level + 1}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

const EnhancedSidebar2025: React.FC<EnhancedSidebar2025Props> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-r border-gray-800/50 z-50 lg:relative lg:translate-x-0 lg:border-r-0 lg:bg-transparent`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech
              </div>
              <div className="text-xs text-gray-400">Navigation</div>
            </div>
          </div>
          
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden w-8 h-8 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-120px)]">
          {sidebarItems.map((item, index) => (
            <SidebarItemComponent key={item.title} item={item} />
          ))}
        </nav>

        {/* Contact Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800/50 bg-gray-900/95">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <Mail className="w-4 h-4 text-purple-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-pink-400" />
              <span className="text-xs">Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default EnhancedSidebar2025;