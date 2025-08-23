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
  Infinity,
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
  ShieldCheck,
  Network,
  Server,
  HardDrive,
  Wifi,
  Smartphone,
  Monitor,
  Laptop,
  Tablet,
  Watch,
  Camera,
  Microphone,
  Headphones,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bike,
  Walk,
  Run,
  Swim,
  Dumbbell,
  HeartPulse,
  Pill,
  Stethoscope,
  Syringe,
  Thermometer,
  Bandage,
  EyeOff,
  EyeOn,
  Ear,
  Nose,
  Mouth,
  Hand,
  Foot,
  BrainCircuit,
  CircuitBoard,
  Chip,
  Memory,
  Storage,
  Power,
  Battery,
  Solar,
  Wind,
  Water,
  Fire,
  Earth,
  Moon,
  Sun,
  Planet,
  Galaxy,
  Universe,
  BlackHole,
  Wormhole,
  Time,
  Clock,
  Hourglass,
  CalendarDays,
  CalendarRange,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarClock,
  CalendarHeart,
  CalendarStar,
  CalendarAward,
  CalendarTrophy,
  CalendarGift,
  CalendarMusic,
  CalendarVideo,
  CalendarImage,
  CalendarFile,
  CalendarFolder,
  CalendarDatabase,
  CalendarCloud,
  CalendarServer,
  CalendarNetwork,
  CalendarSecurity,
  CalendarLock,
  CalendarKey,
  CalendarShield,
  CalendarCheckCircle,
  CalendarXCircle,
  CalendarPlusCircle,
  CalendarMinusCircle,
  CalendarClockCircle,
  CalendarHeartCircle,
  CalendarStarCircle,
  CalendarAwardCircle,
  CalendarTrophyCircle,
  CalendarGiftCircle,
  CalendarMusicCircle,
  CalendarVideoCircle,
  CalendarImageCircle,
  CalendarFileCircle,
  CalendarFolderCircle,
  CalendarDatabaseCircle,
  CalendarCloudCircle,
  CalendarServerCircle,
  CalendarNetworkCircle,
  CalendarSecurityCircle,
  CalendarLockCircle,
  CalendarKeyCircle,
  CalendarShieldCircle
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
  price?: string;
  marketSize?: string;
}

// Enhanced navigation items with comprehensive organization
const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />,
    neonColor: 'shadow-cyan-400/50',
    category: 'main'
  },
  {
    label: 'Services',
    href: '/services',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'Explore our comprehensive technology solutions',
    badge: 'New',
    neonColor: 'shadow-blue-400/50',
    category: 'main',
    children: [
      {
        label: 'AI & Machine Learning',
        href: '/services?category=ai-ml',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        featured: true,
        neonColor: 'shadow-purple-400/50',
        category: 'ai',
        price: 'From $2,999/month',
        marketSize: '$52.8B by 2025'
      },
      {
        label: 'Quantum Computing',
        href: '/services?category=quantum',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-cyan-400/50',
        category: 'quantum',
        price: 'From $4,999/month',
        marketSize: '$35.2B by 2025'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security and compliance',
        featured: true,
        neonColor: 'shadow-red-400/50',
        category: 'security',
        price: 'From $3,499/month',
        marketSize: '$45.8B by 2025'
      },
      {
        label: 'Cloud Infrastructure',
        href: '/services?category=cloud',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud solutions',
        featured: true,
        neonColor: 'shadow-blue-400/50',
        category: 'cloud',
        price: 'From $4,999/month',
        marketSize: '$42.8B by 2025'
      },
      {
        label: 'DevOps & Automation',
        href: '/services?category=devops',
        icon: <Code className="w-4 h-4" />,
        description: 'Automated development operations',
        neonColor: 'shadow-green-400/50',
        category: 'devops',
        price: 'From $2,499/month',
        marketSize: '$18.7B by 2025'
      },
      {
        label: 'Data Analytics',
        href: '/services?category=data',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Advanced data insights',
        neonColor: 'shadow-yellow-400/50',
        category: 'data',
        price: 'From $3,999/month',
        marketSize: '$28.9B by 2025'
      },
      {
        label: 'IoT & Edge Computing',
        href: '/services?category=iot',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Connected device solutions',
        neonColor: 'shadow-orange-400/50',
        category: 'iot',
        price: 'From $3,499/month',
        marketSize: '$24.7B by 2025'
      },
      {
        label: 'Blockchain & FinTech',
        href: '/services?category=blockchain',
        icon: <Database className="w-4 h-4" />,
        description: 'Distributed ledger technology',
        neonColor: 'shadow-emerald-400/50',
        category: 'blockchain',
        price: 'From $3,999/month',
        marketSize: '$67.8B by 2025'
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
    children: [
      {
        label: 'Enterprise',
        href: '/solutions/enterprise',
        icon: <Building className="w-4 h-4" />,
        description: 'Large enterprise solutions',
        neonColor: 'shadow-blue-400/50',
        category: 'enterprise'
      },
      {
        label: 'Financial Services',
        href: '/solutions/financial',
        icon: <DollarSign className="w-4 h-4" />,
        description: 'Banking and financial technology',
        neonColor: 'shadow-green-400/50',
        category: 'financial'
      },
      {
        label: 'Healthcare',
        href: '/solutions/healthcare',
        icon: <HeartPulse className="w-4 h-4" />,
        description: 'Healthcare technology solutions',
        neonColor: 'shadow-red-400/50',
        category: 'healthcare'
      },
      {
        label: 'Manufacturing',
        href: '/solutions/manufacturing',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Industrial automation and IoT',
        neonColor: 'shadow-orange-400/50',
        category: 'manufacturing'
      },
      {
        label: 'Retail & E-commerce',
        href: '/solutions/retail',
        icon: <ShoppingCart className="w-4 h-4" />,
        description: 'Digital commerce solutions',
        neonColor: 'shadow-purple-400/50',
        category: 'retail'
      },
      {
        label: 'Education',
        href: '/solutions/education',
        icon: <GraduationCap className="w-4 h-4" />,
        description: 'Educational technology platforms',
        neonColor: 'shadow-indigo-400/50',
        category: 'education'
      }
    ]
  },
  {
    label: 'Products',
    href: '/products',
    icon: <Package className="w-4 h-4" />,
    description: 'Our innovative product portfolio',
    neonColor: 'shadow-purple-400/50',
    category: 'main',
    children: [
      {
        label: 'Micro SAAS Platforms',
        href: '/products/micro-saas',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Specialized software solutions',
        featured: true,
        neonColor: 'shadow-cyan-400/50',
        category: 'saas'
      },
      {
        label: 'AI Tools & APIs',
        href: '/products/ai-tools',
        icon: <Brain className="w-4 h-4" />,
        description: 'Artificial intelligence solutions',
        featured: true,
        neonColor: 'shadow-purple-400/50',
        category: 'ai'
      },
      {
        label: 'Security Products',
        href: '/products/security',
        icon: <Shield className="w-4 h-4" />,
        description: 'Cybersecurity and compliance',
        neonColor: 'shadow-red-400/50',
        category: 'security'
      },
      {
        label: 'DevOps Tools',
        href: '/products/devops',
        icon: <Code className="w-4 h-4" />,
        description: 'Development and operations tools',
        neonColor: 'shadow-green-400/50',
        category: 'devops'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge and learning resources',
    neonColor: 'shadow-yellow-400/50',
    category: 'main',
    children: [
      {
        label: 'Documentation',
        href: '/docs',
        icon: <FileText className="w-4 h-4" />,
        description: 'Technical documentation and guides',
        neonColor: 'shadow-blue-400/50',
        category: 'docs'
      },
      {
        label: 'Blog',
        href: '/blog',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Latest insights and updates',
        neonColor: 'shadow-green-400/50',
        category: 'blog'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Success stories and implementations',
        neonColor: 'shadow-purple-400/50',
        category: 'case-studies'
      },
      {
        label: 'White Papers',
        href: '/white-papers',
        icon: <FileText className="w-4 h-4" />,
        description: 'In-depth research and analysis',
        neonColor: 'shadow-orange-400/50',
        category: 'white-papers'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Educational webinars and training',
        neonColor: 'shadow-red-400/50',
        category: 'webinars'
      }
    ]
  },
  {
    label: 'Company',
    href: '/about',
    icon: <Building className="w-4 h-4" />,
    description: 'Learn about Zion Tech Group',
    neonColor: 'shadow-indigo-400/50',
    category: 'main',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Building className="w-4 h-4" />,
        description: 'Our story and mission',
        neonColor: 'shadow-blue-400/50',
        category: 'about'
      },
      {
        label: 'Leadership',
        href: '/leadership',
        icon: <Users className="w-4 h-4" />,
        description: 'Meet our leadership team',
        neonColor: 'shadow-purple-400/50',
        category: 'leadership'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Briefcase className="w-4 h-4" />,
        description: 'Join our team',
        neonColor: 'shadow-green-400/50',
        category: 'careers'
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: <MessageCircle className="w-4 h-4" />,
        description: 'Get in touch with us',
        neonColor: 'shadow-cyan-400/50',
        category: 'contact'
      }
    ]
  }
];

// Add missing icon components
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const Package = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const UltraFuturisticNavigation2046: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  }, [searchQuery, router]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Filter services by search query
  const filteredServices = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return navigationItems
      .flatMap(item => item.children || [])
      .filter(service => 
        service.label.toLowerCase().includes(query) ||
        service.description?.toLowerCase().includes(query) ||
        service.category?.toLowerCase().includes(query)
      )
      .slice(0, 8);
  }, [searchQuery]);

  return (
    <>
      {/* Top contact bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-2 px-4 text-sm"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://linkedin.com" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="https://twitter.com" className="hover:text-cyan-400 transition-colors">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="https://github.com" className="hover:text-cyan-400 transition-colors">
              <Github className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Main navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-400/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    ZION TECH GROUP
                  </div>
                  <div className="text-xs text-gray-400">Future Technology Solutions</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative dropdown">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeDropdown === item.label
                        ? 'bg-cyan-400/20 text-cyan-400'
                        : 'text-white hover:text-cyan-400 hover:bg-white/10'
                    }`}
                    style={{
                      boxShadow: activeDropdown === item.label ? item.neonColor : 'none'
                    }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </motion.button>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-400/20 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-3">
                          {item.children.map((child) => (
                            <motion.div
                              key={child.href}
                              whileHover={{ scale: 1.02, x: 5 }}
                              className="group"
                            >
                              <Link
                                href={child.href}
                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-purple-500/40 transition-all duration-300">
                                  {child.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                      {child.label}
                                    </p>
                                    {child.featured && (
                                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  {child.description && (
                                    <p className="text-xs text-gray-400 mt-1">
                                      {child.description}
                                    </p>
                                  )}
                                  {child.price && (
                                    <p className="text-xs text-cyan-400 mt-1">
                                      {child.price}
                                    </p>
                                  )}
                                  {child.marketSize && (
                                    <p className="text-xs text-purple-400 mt-1">
                                      Market: {child.marketSize}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Search and Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 bg-white/10 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
                
                {/* Search Results Dropdown */}
                {searchQuery && filteredServices.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-cyan-400/20 rounded-lg shadow-2xl max-h-96 overflow-y-auto"
                  >
                    {filteredServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block p-3 hover:bg-cyan-400/10 transition-colors border-b border-gray-800 last:border-b-0"
                        onClick={() => setSearchQuery('')}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                            {service.icon}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{service.label}</p>
                            {service.description && (
                              <p className="text-xs text-gray-400">{service.description}</p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </form>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-cyan-400 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-cyan-400/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>

              {/* Mobile Navigation Items */}
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-white hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                    
                    {/* Mobile Submenu */}
                    {item.children && (
                      <div className="ml-8 mt-2 space-y-1">
                        {item.children.slice(0, 3).map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.icon}
                            <span>{child.label}</span>
                          </Link>
                        ))}
                        {item.children.length > 3 && (
                          <Link
                            href={item.href}
                            className="flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:text-cyan-300 rounded-lg transition-colors text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            <ChevronDown className="w-4 h-4" />
                            <span>View all {item.children.length} items</span>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-800">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraFuturisticNavigation2046;