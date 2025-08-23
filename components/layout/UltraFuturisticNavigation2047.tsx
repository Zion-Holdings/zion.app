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
  Truck,
  Microchip
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
  price?: string;
  marketSize?: string;
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
        label: 'AI & Consciousness',
        href: '/services?category=ai-consciousness',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI consciousness and evolution platforms',
        badge: 'Revolutionary',
        neonColor: 'shadow-purple-400/50',
        children: [
          {
            label: 'AI Consciousness Evolution Platform 2045',
            href: '/ai-consciousness-evolution-platform-2045',
            icon: <Brain className="w-4 h-4" />,
            description: 'Revolutionary AI platform that evolves consciousness',
            price: '$4,999/month',
            marketSize: '$200B AI research market'
          },
          {
            label: 'AI Emotional Intelligence Evolution',
            href: '/ai-emotional-intelligence-evolution-platform',
            icon: <Heart className="w-4 h-4" />,
            description: 'Advanced AI emotional intelligence platform',
            price: '$2,499/month',
            marketSize: '$75B emotional AI market'
          },
          {
            label: 'AI Creativity Orchestrator',
            href: '/ai-creativity-orchestrator-platform',
            icon: <Palette className="w-4 h-4" />,
            description: 'Revolutionary AI creativity enhancement platform',
            price: '$1,899/month',
            marketSize: '$60B creative AI market'
          },
          {
            label: 'AI Ethics Governance Autonomous',
            href: '/ai-ethics-governance-autonomous-platform',
            icon: <Shield className="w-4 h-4" />,
            description: 'Autonomous AI ethics governance platform',
            price: '$2,999/month',
            marketSize: '$45B AI governance market'
          }
        ]
      },
      {
        label: 'Quantum Technology',
        href: '/services?category=quantum-technology',
        icon: <Atom className="w-4 h-4" />,
        description: 'Quantum computing and quantum-secure solutions',
        badge: 'Cutting-Edge',
        neonColor: 'shadow-cyan-400/50',
        children: [
          {
            label: 'Quantum Edge Computing Orchestrator',
            href: '/quantum-edge-computing-orchestrator',
            icon: <Atom className="w-4 h-4" />,
            description: 'Quantum-powered edge computing platform',
            price: '$3,999/month',
            marketSize: '$85B edge computing market'
          },
          {
            label: 'Quantum Secure Cloud Hybrid Platform',
            href: '/quantum-secure-cloud-hybrid-platform',
            icon: <Shield className="w-4 h-4" />,
            description: 'Quantum-secured hybrid cloud platform',
            price: '$2,299/month',
            marketSize: '$120B hybrid cloud market'
          },
          {
            label: 'Quantum Data Center Automation',
            href: '/quantum-data-center-automation-platform',
            icon: <Server className="w-4 h-4" />,
            description: 'Quantum-powered data center automation',
            price: '$2,999/month',
            marketSize: '$95B data center market'
          }
        ]
      },
      {
        label: 'Autonomous Systems',
        href: '/services?category=autonomous-systems',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Fully autonomous AI and business systems',
        badge: 'Autonomous',
        neonColor: 'shadow-green-400/50',
        children: [
          {
            label: 'AI Autonomous Business Orchestrator',
            href: '/ai-autonomous-business-orchestrator',
            icon: <Building className="w-4 h-4" />,
            description: 'Fully autonomous business operations AI',
            price: '$1,299/month',
            marketSize: '$50B autonomous systems market'
          },
          {
            label: 'AI Autonomous Financial Trading',
            href: '/ai-autonomous-financial-trading-orchestrator',
            icon: <DollarSign className="w-4 h-4" />,
            description: 'Autonomous financial trading AI system',
            price: '$2,499/month',
            marketSize: '$150B algorithmic trading market'
          },
          {
            label: 'AI Autonomous Healthcare Diagnostics',
            href: '/ai-autonomous-healthcare-diagnostics-platform',
            icon: <Heart className="w-4 h-4" />,
            description: 'Autonomous healthcare diagnostics AI',
            price: '$1,899/month',
            marketSize: '$45B healthcare AI market'
          },
          {
            label: 'AI Autonomous Supply Chain',
            href: '/ai-autonomous-supply-chain-orchestrator',
            icon: <Truck className="w-4 h-4" />,
            description: 'Autonomous supply chain management AI',
            price: '$1,599/month',
            marketSize: '$75B supply chain management market'
          }
        ]
      },
      {
        label: 'IT Infrastructure',
        href: '/services?category=it-infrastructure',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Advanced IT infrastructure and DevOps solutions',
        badge: 'Enterprise',
        neonColor: 'shadow-orange-400/50',
        children: [
          {
            label: 'Autonomous DevOps Intelligence',
            href: '/autonomous-devops-intelligence-platform',
            icon: <Code className="w-4 h-4" />,
            description: 'Fully autonomous DevOps platform',
            price: '$1,799/month',
            marketSize: '$45B DevOps market'
          },
          {
            label: 'Autonomous Network Intelligence',
            href: '/autonomous-network-intelligence-system',
            icon: <Network className="w-4 h-4" />,
            description: 'Autonomous network management system',
            price: '$1,599/month',
            marketSize: '$65B network management market'
          }
        ]
      },
      {
        label: 'Micro SAAS Solutions',
        href: '/services?category=micro-saas',
        icon: <Store className="w-4 h-4" />,
        description: 'Innovative micro SAAS business solutions',
        badge: 'Innovative',
        neonColor: 'shadow-pink-400/50',
        children: [
          {
            label: 'AI Autonomous Customer Success',
            href: '/ai-autonomous-customer-success-platform',
            icon: <Users className="w-4 h-4" />,
            description: 'Autonomous customer success platform',
            price: '$799/month',
            marketSize: '$25B customer success market'
          },
          {
            label: 'Quantum Secure Communication Hub',
            href: '/quantum-secure-communication-hub',
            icon: <MessageCircle className="w-4 h-4" />,
            description: 'Quantum-secured communication platform',
            price: '$599/month',
            marketSize: '$35B secure communication market'
          },
          {
            label: 'Autonomous HR Intelligence Suite',
            href: '/autonomous-hr-intelligence-suite',
            icon: <Users className="w-4 h-4" />,
            description: 'Autonomous HR management platform',
            price: '$1,099/month',
            marketSize: '$40B HR tech market'
          },
          {
            label: 'AI Autonomous Marketing Orchestrator',
            href: '/ai-autonomous-marketing-orchestrator',
            icon: <TrendingUp className="w-4 h-4" />,
            description: 'Autonomous marketing platform',
            price: '$899/month',
            marketSize: '$30B marketing automation market'
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
    priority: 3,
    children: [
      {
        label: 'Healthcare',
        href: '/solutions/healthcare',
        icon: <Heart className="w-4 h-4" />,
        description: 'AI-powered healthcare solutions'
      },
      {
        label: 'Financial Services',
        href: '/solutions/financial',
        icon: <DollarSign className="w-4 h-4" />,
        description: 'Quantum-secure financial technology'
      },
      {
        label: 'Manufacturing',
        href: '/solutions/manufacturing',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Autonomous manufacturing solutions'
      },
      {
        label: 'Government',
        href: '/solutions/government',
        icon: <Building className="w-4 h-4" />,
        description: 'Secure government technology solutions'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge base and learning resources',
    neonColor: 'shadow-yellow-400/50',
    category: 'main',
    priority: 4,
    children: [
      {
        label: 'Documentation',
        href: '/resources/documentation',
        icon: <FileText className="w-4 h-4" />,
        description: 'Technical documentation and guides'
      },
      {
        label: 'Case Studies',
        href: '/resources/case-studies',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Success stories and implementations'
      },
      {
        label: 'API Reference',
        href: '/resources/api',
        icon: <Code className="w-4 h-4" />,
        description: 'API documentation and examples'
      }
    ]
  },
  {
    label: 'Company',
    href: '/about',
    icon: <Building className="w-4 h-4" />,
    description: 'About Zion Tech Group',
    neonColor: 'shadow-purple-400/50',
    category: 'main',
    priority: 5,
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Building className="w-4 h-4" />,
        description: 'Our mission and vision'
      },
      {
        label: 'Team',
        href: '/team',
        icon: <Users className="w-4 h-4" />,
        description: 'Meet our team of experts'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Award className="w-4 h-4" />,
        description: 'Join our revolutionary team'
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: <MessageCircle className="w-4 h-4" />,
        description: 'Get in touch with us'
      }
    ]
  }
];

const UltraFuturisticNavigation2047: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
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

  const filteredServices = useMemo(() => {
    if (!searchQuery) return navigationItems;
    
    const searchLower = searchQuery.toLowerCase();
    return navigationItems.filter(item => 
      item.label.toLowerCase().includes(searchLower) ||
      item.description?.toLowerCase().includes(searchLower) ||
      item.children?.some(child => 
        child.label.toLowerCase().includes(searchLower) ||
        child.description?.toLowerCase().includes(searchLower)
      )
    );
  }, [searchQuery]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
    >
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-cyan-900/90 via-purple-900/90 to-pink-900/90 border-b border-cyan-500/20">
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
            <div className="flex items-center space-x-4">
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <div className="hidden md:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-cyan-300">Revolutionary 2045 Technology</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {filteredServices.map((item) => (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleDropdown(item.label)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeDropdown === item.label
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="text-sm font-medium text-cyan-300 mb-3">
                          {item.description}
                        </div>
                        <div className="space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 group"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                  {child.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                                      {child.label}
                                    </span>
                                    {child.badge && (
                                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                                        {child.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-400 mt-1">
                                    {child.description}
                                  </p>
                                  {child.price && (
                                    <div className="flex items-center justify-between mt-2">
                                      <span className="text-xs text-cyan-400 font-medium">
                                        {child.price}
                                      </span>
                                      {child.marketSize && (
                                        <span className="text-xs text-gray-500">
                                          {child.marketSize}
                                        </span>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
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

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 bg-black/50 border border-cyan-500/30 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-cyan-300 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-black/50 border border-cyan-500/30 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
              </div>

              {/* Mobile Menu Items */}
              {filteredServices.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between p-3 text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {item.children && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.children && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block p-2 text-sm text-gray-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default UltraFuturisticNavigation2047;