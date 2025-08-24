import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2,
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon,
  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;
  color?: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Innovative Services 2025',
    href: '/2025-innovative-services-showcase-v2',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Cutting-edge AI, quantum, and IT solutions',
    badge: 'New 2025',
    category: 'services',
    color: 'from-emerald-500 to-cyan-500',
    children: [
      { 
        name: 'AI Autonomous Ecosystem', 
        href: '/2025-innovative-services-showcase-v2', 
        description: 'Revolutionary AI autonomous solutions',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum & Emerging Tech', 
        href: '/2025-innovative-services-showcase-v2', 
        description: 'Quantum computing and breakthrough technologies',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'IT Infrastructure V2', 
        href: '/2025-innovative-services-showcase-v2', 
        description: 'Advanced IT infrastructure solutions',
        icon: <Cpu className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      }
    ]
  },
  {
    name: 'Revolutionary Services 2046',
    href: '/services',
    icon: <Sparkles className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: '2046',
    category: 'services',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete revolutionary services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Consciousness Evolution 2046', 
        href: '/ai-consciousness-evolution-platform-2046', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum AI Neural Networks 2046', 
        href: '/quantum-ai-neural-network-platform-2046', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Advanced AI consciousness solutions',
    badge: '2046',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'AI Consciousness Evolution', 
        href: '/ai-consciousness-evolution-platform-2046', 
        description: 'Next-generation AI consciousness platform',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'AI Autonomous Business Intelligence', 
        href: '/autonomous-ai-business-intelligence-platform-2046', 
        description: 'Fully autonomous AI business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'AI Content Factory Pro', 
        href: '/ai-autonomous-content-factory-pro-2025', 
        description: 'Autonomous AI content creation',
        icon: <FileText className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-technology',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and technology solutions',
    badge: '2046',
    category: 'quantum',
    color: 'from-blue-500 to-indigo-500',
    children: [
      { 
        name: 'Quantum AI Neural Networks', 
        href: '/quantum-ai-neural-network-platform-2046', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Quantum Cybersecurity Intelligence', 
        href: '/quantum-cybersecurity-intelligence-platform-2046', 
        description: 'Quantum-resistant security with AI',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Quantum AI Fusion Platform', 
        href: '/quantum-ai-neural-network-fusion-platform-2025', 
        description: 'Quantum-AI hybrid computing',
        icon: <Zap className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      }
    ]
  },
  {
    name: 'IT Infrastructure',
    href: '/it-infrastructure',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced IT infrastructure solutions',
    badge: '2025',
    category: 'it',
    color: 'from-emerald-500 to-teal-500',
    children: [
      { 
        name: 'Autonomous DevOps Intelligence', 
        href: '/autonomous-devops-intelligence-platform-2025', 
        description: 'AI-powered DevOps optimization',
        icon: <Code className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Edge Computing Orchestration', 
        href: '/edge-computing-orchestration-platform-2025', 
        description: 'Edge computing optimization platform',
        icon: <Network className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Multi-Cloud Management', 
        href: '/multi-cloud-management-intelligence-platform-2025', 
        description: 'AI-powered multi-cloud management',
        icon: <Cloud className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration and technology solutions',
    badge: '2046',
    category: 'space',
    color: 'from-indigo-500 to-purple-500',
    children: [
      { 
        name: 'Space Resource Intelligence', 
        href: '/space-resource-intelligence-platform-2025', 
        description: 'AI-powered space resource discovery',
        icon: <Globe className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        name: 'Space Mining Automation', 
        href: '/space-mining-automation-platform', 
        description: 'Automated space mining operations',
        icon: <Rocket className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      }
    ]
  }
];

const UltraFuturisticNavigation2047: React.FC = () => {
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

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Background Blur Effect */}
      <div className={`fixed inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-300 ${
        isOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsOpen(false)} />

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Brain className="w-7 h-7 text-white" />
              </motion.div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white">Zion Tech Group</div>
                <div className="text-xs text-cyan-400">Innovating the Future</div>
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
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
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
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden"
                        onMouseLeave={closeDropdown}
                      >
                        <div className="p-4">
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                          </div>
                          
                          <div className="space-y-2">
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                                  child.featured 
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20' 
                                    : 'hover:bg-gray-800/50'
                                }`}
                                onClick={closeDropdown}
                              >
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-600 to-gray-700'} flex items-center justify-center`}>
                                  {child.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {child.name}
                                  </div>
                                  <div className="text-xs text-gray-400">{child.description}</div>
                                </div>
                                {child.featured && (
                                  <Star className="w-4 h-4 text-yellow-400" />
                                )}
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
              <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Menu */}
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white transition-colors duration-200">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </button>
                
                <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2 space-y-1">
                    <Link href="/profile" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 text-gray-300 hover:text-white transition-colors duration-200">
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </Link>
                    <Link href="/settings" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 text-gray-300 hover:text-white transition-colors duration-200">
                      <Cog className="w-4 h-4" />
                      <span>Settings</span>
                    </Link>
                    <Link href="/logout" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 text-gray-300 hover:text-white transition-colors duration-200">
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl z-50 border-l border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="text-xl font-bold text-white">Menu</div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="ml-6 space-y-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block p-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-6 border-t border-gray-700">
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-medium text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraFuturisticNavigation2047;