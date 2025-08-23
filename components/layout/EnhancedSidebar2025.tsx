import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight, Home, Rocket, Target, Building, BookOpen, MessageCircle,
  Brain, Atom, Shield, Cloud, BarChart, Code, Rocket as RocketIcon, Users, Info, Briefcase,
  Heart, DollarSign, Cog, FileText, Calendar, Lightbulb, HelpCircle, Monitor, Zap, Star,
  Settings, Globe, Lock, Server, Database, Network, Palette, Cpu, Layers, Globe2, Truck
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
    name: 'Home',
    href: '/',
    icon: <Home className="w-5 h-5" />,
    description: 'Welcome to Zion Tech Group'
  },
  {
    name: 'Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Our comprehensive technology solutions',
    badge: 'Featured',
    children: [
      { name: 'All Services', href: '/services', icon: <Rocket className="w-4 h-4" />, featured: true },
      { name: 'AI & Machine Learning', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
      { name: 'Quantum Technology', href: '/quantum-services', icon: <Atom className="w-4 h-4" /> },
      { name: 'Cybersecurity', href: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
      { name: 'Cloud & Infrastructure', href: '/it-services', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Business Intelligence', href: '/data-analytics', icon: <BarChart className="w-4 h-4" /> },
      { name: 'DevOps & Automation', href: '/devops-automation', icon: <Code className="w-4 h-4" /> },
      { name: 'Space Technology', href: '/space-tech', icon: <RocketIcon className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    children: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: <Building className="w-4 h-4" /> },
      { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: <Heart className="w-4 h-4" /> },
      { name: 'Financial Solutions', href: '/solutions/financial', icon: <DollarSign className="w-4 h-4" /> },
      { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: <Cog className="w-4 h-4" /> },
      { name: 'Retail Solutions', href: '/retail-technology-solutions', icon: <Target className="w-4 h-4" /> },
      { name: 'Government Solutions', href: '/government-technology-solutions', icon: <Shield className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    children: [
      { name: 'About Us', href: '/about', icon: <Info className="w-4 h-4" /> },
      { name: 'Our Mission', href: '/mission', icon: <Target className="w-4 h-4" /> },
      { name: 'Leadership Team', href: '/leadership', icon: <Users className="w-4 h-4" /> },
      { name: 'Company Culture', href: '/culture', icon: <Heart className="w-4 h-4" /> },
      { name: 'Our Values', href: '/values', icon: <Star className="w-4 h-4" /> },
      { name: 'Careers', href: '/careers', icon: <Briefcase className="w-4 h-4" /> },
      { name: 'News & Press', href: '/press', icon: <FileText className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and resources',
    children: [
      { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
      { name: 'Blog & Articles', href: '/blog', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Case Studies', href: '/case-studies', icon: <BarChart className="w-4 h-4" /> },
      { name: 'White Papers', href: '/white-papers', icon: <FileText className="w-4 h-4" /> },
      { name: 'Webinars', href: '/webinars', icon: <Calendar className="w-4 h-4" /> },
      { name: 'Events', href: '/events-webinars', icon: <Calendar className="w-4 h-4" /> },
      { name: 'Training', href: '/training', icon: <Lightbulb className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Support',
    href: '/support',
    icon: <MessageCircle className="w-5 h-5" />,
    description: 'Get help and support',
    children: [
      { name: 'Contact Us', href: '/contact', icon: <MessageCircle className="w-4 h-4" /> },
      { name: 'Get Started', href: '/get-started', icon: <Zap className="w-4 h-4" /> },
      { name: 'Support Center', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
      { name: 'Status Page', href: '/status', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Developer Resources', href: '/developer-resources', icon: <Code className="w-4 h-4" /> }
    ]
  }
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
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-md border-r border-cyan-500/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-cyan-500/20 p-4">
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