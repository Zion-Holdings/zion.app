import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Phone, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Home,
  Briefcase,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  Building,
  Users,
  BookOpen,
  FileText,
  Video,
  Code,
  Zap,
  Star,
  Sparkles,
  Globe,
  Cpu,
  Database,
  Eye,
  Heart,
  TrendingUp,
  Palette,
  Layers,
  Grid,
  BarChart3,
  Settings,
  HelpCircle,
  MessageCircle,
  Calendar,
  Award,
  Lightbulb,
  Play,
  DollarSign,
  GraduationCap,
  Lock,
  Key,
  Network,
  Satellite,
  Server,
  Store,
  Truck
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Define Node type for DOM event handling
type Node = HTMLElement | null;

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  featured?: boolean;
  neonColor?: string;
  category?: string;
  priority?: number;
}

// Enhanced navigation items with better organization and new services
const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />,
    neonColor: 'shadow-cyan-400/50',
    category: 'main',
    priority: 1
  },
  {
    label: 'Services',
    href: '/services',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'Explore our comprehensive technology solutions',
    badge: 'New',
    neonColor: 'shadow-blue-400/50',
    category: 'main',
    priority: 2,
    children: [
      {
        label: 'AI & Machine Learning',
        href: '/services?category=ai-ml',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        children: [
          {
            label: 'AI Autonomous Systems',
            href: '/services?category=ai-autonomous',
            icon: <Brain className="w-4 h-4" />,
            description: 'Fully autonomous AI business systems'
          },
          {
            label: 'AI Content & Marketing',
            href: '/services?category=ai-content',
            icon: <FileText className="w-4 h-4" />,
            description: 'AI-powered content creation and marketing'
          },
          {
            label: 'AI Healthcare & Legal',
            href: '/services?category=ai-specialized',
            icon: <Shield className="w-4 h-4" />,
            description: 'Specialized AI for healthcare and legal'
          }
        ],
        featured: true,
        neonColor: 'shadow-purple-400/50',
        category: 'ai',
        priority: 1
      },
      {
        label: 'AI Autonomous Systems',
        href: '/services?category=ai-autonomous',
        icon: <Brain className="w-4 h-4" />,
        description: 'Fully autonomous AI business systems',
        children: [
          {
            label: 'AI Autonomous Business Orchestrator',
            href: '/ai-autonomous-business-orchestrator',
            icon: <Brain className="w-4 h-4" />,
            description: 'Fully autonomous AI system for business operations',
            neonColor: 'shadow-purple-400/50',
            category: 'ai-autonomous',
            priority: 1
          },
          {
            label: 'AI Consciousness Development Platform',
            href: '/ai-consciousness-development-platform',
            icon: <Star className="w-4 h-4" />,
            description: 'Develop conscious AI systems with emotional intelligence',
            neonColor: 'shadow-pink-400/50',
            category: 'ai-consciousness',
            priority: 2
          },
          {
            label: 'AI Emotional Intelligence Platform',
            href: '/ai-emotional-intelligence-platform',
            icon: <Heart className="w-4 h-4" />,
            description: 'AI that understands and responds to human emotions',
            neonColor: 'shadow-rose-400/50',
            category: 'ai-emotional',
            priority: 3
          }
        ]
      },
      {
        label: 'Quantum Technology',
        href: '/services?category=quantum',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-indigo-400/50',
        category: 'quantum',
        priority: 2,
        children: [
          {
            label: 'Quantum AI Cybersecurity Sentinel',
            href: '/quantum-ai-cybersecurity-sentinel',
            icon: <Shield className="w-4 h-4" />,
            description: 'Quantum-powered AI security with consciousness-level detection',
            neonColor: 'shadow-blue-400/50',
            category: 'quantum-security',
            priority: 1
          },
          {
            label: 'Quantum Cloud Hybrid Platform',
            href: '/quantum-cloud-hybrid-platform',
            icon: <Cloud className="w-4 h-4" />,
            description: 'Quantum computing integrated with hybrid cloud',
            neonColor: 'shadow-cyan-400/50',
            category: 'quantum-cloud',
            priority: 2
          },
          {
            label: 'Quantum Cryptocurrency Wallet',
            href: '/quantum-cryptocurrency-wallet',
            icon: <DollarSign className="w-4 h-4" />,
            description: 'Quantum-secured crypto wallet with AI consciousness',
            neonColor: 'shadow-yellow-400/50',
            category: 'quantum-crypto',
            priority: 3
          }
        ]
      },
      {
        label: 'IT Infrastructure',
        href: '/services?category=it-infrastructure',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Cutting-edge infrastructure solutions',
        featured: true,
        neonColor: 'shadow-green-400/50',
        category: 'it-infrastructure',
        priority: 3,
        children: [
          {
            label: 'Autonomous Edge Computing Network',
            href: '/autonomous-edge-computing-network',
            icon: <Network className="w-4 h-4" />,
            description: 'Self-managing edge computing with AI optimization',
            neonColor: 'shadow-emerald-400/50',
            category: 'autonomous-edge',
            priority: 1
          },
          {
            label: 'Zero Trust Quantum Network',
            href: '/zero-trust-quantum-network',
            icon: <Lock className="w-4 h-4" />,
            description: 'Quantum-secured zero trust network infrastructure',
            neonColor: 'shadow-red-400/50',
            category: 'zero-trust-quantum',
            priority: 2
          },
          {
            label: 'Autonomous Data Center Orchestrator',
            href: '/autonomous-data-center-orchestrator',
            icon: <Building className="w-4 h-4" />,
            description: 'AI-powered data center management with zero intervention',
            neonColor: 'shadow-gray-400/50',
            category: 'autonomous-datacenter',
            priority: 3
          }
        ]
      },
      {
        label: 'Micro SAAS Solutions',
        href: '/services?category=micro-saas',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative micro SAAS breakthroughs',
        featured: true,
        neonColor: 'shadow-orange-400/50',
        category: 'micro-saas',
        priority: 4,
        children: [
          {
            label: 'Autonomous Content Creation Suite',
            href: '/autonomous-content-creation-suite',
            icon: <FileText className="w-4 h-4" />,
            description: 'AI that creates, edits, and publishes content autonomously',
            neonColor: 'shadow-blue-400/50',
            category: 'autonomous-content',
            priority: 1
          },
          {
            label: 'Consciousness-Based Learning Platform',
            href: '/consciousness-based-learning-platform',
            icon: <GraduationCap className="w-4 h-4" />,
            description: 'AI-powered learning that adapts to consciousness patterns',
            neonColor: 'shadow-indigo-400/50',
            category: 'consciousness-learning',
            priority: 2
          },
          {
            label: 'Quantum Supply Chain Optimizer',
            href: '/quantum-supply-chain-optimizer',
            icon: <Truck className="w-4 h-4" />,
            description: 'Quantum AI optimization for complex supply chains',
            neonColor: 'shadow-green-400/50',
            category: 'quantum-supply-chain',
            priority: 3
          }
        ]
      },
      {
        label: 'Space Technology',
        href: '/services?category=space-tech',
        icon: <Satellite className="w-4 h-4" />,
        description: 'Revolutionary space technology solutions',
        featured: false,
        neonColor: 'shadow-purple-400/50',
        category: 'space-tech',
        priority: 5,
        children: [
          {
            label: 'Quantum Space Technology Platform',
            href: '/quantum-space-technology-platform',
            icon: <Rocket className="w-4 h-4" />,
            description: 'Quantum computing meets space exploration',
            neonColor: 'shadow-orange-400/50',
            category: 'quantum-space',
            priority: 1
          }
        ]
      },
      {
        label: 'Advanced Computing',
        href: '/services?category=advanced-computing',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Next-generation computing infrastructure',
        featured: false,
        neonColor: 'shadow-cyan-400/50',
        category: 'advanced-computing',
        priority: 6,
        children: [
          {
            label: 'Neuromorphic Computing Infrastructure',
            href: '/neuromorphic-computing-infrastructure',
            icon: <Brain className="w-4 h-4" />,
            description: 'Brain-inspired computing for AI workloads',
            neonColor: 'shadow-purple-400/50',
            category: 'neuromorphic',
            priority: 1
          }
        ]
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific technology solutions',
    neonColor: 'shadow-emerald-400/50',
    category: 'main',
    priority: 3
  },
  {
    label: 'About',
    href: '/about',
    icon: <Users className="w-4 h-4" />,
    description: 'Learn about our company and mission',
    neonColor: 'shadow-teal-400/50',
    category: 'main',
    priority: 4
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <MessageCircle className="w-4 h-4" />,
    description: 'Get in touch with our team',
    neonColor: 'shadow-pink-400/50',
    category: 'main',
    priority: 5
  }
];

const UltraFuturisticNavigation2046: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }, [searchQuery, router]);

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    const results: NavigationItem[] = [];
    
    const searchInItems = (items: NavigationItem[]) => {
      items.forEach(item => {
        if (item.label.toLowerCase().includes(query) || 
            item.description?.toLowerCase().includes(query)) {
          results.push(item);
        }
        if (item.children) {
          searchInItems(item.children);
        }
      });
    };
    
    searchInItems(navigationItems);
    return results.slice(0, 10);
  }, [searchQuery]);

  return (
    <nav className="relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-300">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                +1 302 464 0950
              </span>
              <span className="flex items-center">
                <MessageCircle className="w-3 h-3 mr-1" />
                kleber@ziontechgroup.com
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="https://linkedin.com" className="hover:text-cyan-400 transition-colors">
                <Linkedin className="w-3 h-3" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-cyan-400 transition-colors">
                <Twitter className="w-3 h-3" />
              </Link>
              <Link href="https://github.com" className="hover:text-cyan-400 transition-colors">
                <Github className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => item.children && toggleDropdown(item.label)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    item.children 
                      ? 'hover:bg-cyan-500/10 hover:text-cyan-400 cursor-pointer' 
                      : 'hover:bg-cyan-500/10 hover:text-cyan-400'
                  } ${
                    router.asPath === item.href ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.children.map((child) => (
                              <div key={child.label}>
                                <Link
                                  href={child.href}
                                  className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                                >
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${child.neonColor} flex items-center justify-center flex-shrink-0`}>
                                    {child.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
                                      {child.label}
                                    </p>
                                    {child.description && (
                                      <p className="text-xs text-gray-400 mt-1">
                                        {child.description}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                                
                                {/* Sub-children */}
                                {child.children && (
                                  <div className="ml-8 mt-2 space-y-1">
                                    {child.children.slice(0, 3).map((subChild) => (
                                      <Link
                                        key={subChild.label}
                                        href={subChild.href}
                                        className="block text-xs text-gray-400 hover:text-cyan-400 transition-colors py-1"
                                      >
                                        {subChild.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                  >
                    <form onSubmit={handleSearch} className="p-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search services..."
                          className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                        />
                      </div>
                      
                      {filteredServices.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {filteredServices.map((service) => (
                            <Link
                              key={service.label}
                              href={service.href}
                              className="block p-2 rounded-lg hover:bg-cyan-500/10 transition-colors"
                              onClick={() => setIsSearchOpen(false)}
                            >
                              <p className="text-sm font-medium text-gray-200">{service.label}</p>
                              {service.description && (
                                <p className="text-xs text-gray-400">{service.description}</p>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get Started
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                  
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2046;