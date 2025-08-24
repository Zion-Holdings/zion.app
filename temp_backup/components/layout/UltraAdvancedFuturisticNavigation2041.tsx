import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Menu, X, Search, User, Bell, Settings, LogOut, Home, Briefcase, Users, Globe, Zap, Cpu, Brain, Rocket, Shield, Database, Server, CpuIcon, ZapIcon, Truck, BookOpen, FileText, Handshake, Newspaper, Grid, Atom, BarChart3, Palette, PaletteIcon, GraduationCap, HeartIcon, DollarSign, Target, Network, Cloud, Layers, Code, MessageCircle, TrendingUp, Monitor, Lock, Building, Phone, Mail, ArrowRight, Star, Sparkles, Eye, Fingerprint, Satellite, Telescope, Microscope, FlaskConical, TargetIcon, Globe2, ShieldCheck, LockKeyhole, Wifi, Bluetooth, Radio, SatelliteDish, Orbit
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
  price?: string;
  rating?: number;
  reviews?: number;
}

interface UltraAdvancedFuturisticNavigation2041Props {
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
}

function normalizeHref(href: string): string {
  if (!href) return href;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  if (!href.startsWith('/')) return href;
  const hasQueryOrHash = href.includes('?') || href.includes('#');
  if (hasQueryOrHash) return href;
  return href.endsWith('/') ? href : href + '/';
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Revolutionary Services 2041',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: 'New 2041',
    category: 'services',
    color: 'from-emerald-500 to-cyan-500',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete revolutionary services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum AI Consciousness', 
        href: '/quantum-ai-consciousness-platform', 
        description: 'Next-generation AI consciousness with quantum computing',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-cyan-600',
        featured: true,
        price: '$2,999/month',
        rating: 4.9,
        reviews: 89
      },
      { 
        name: 'Space Resource Intelligence', 
        href: '/space-resource-intelligence-platform', 
        description: 'AI-powered space resource discovery and mining',
        icon: <Satellite className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-600',
        featured: true,
        price: '$1,999/month',
        rating: 4.8,
        reviews: 56
      },
      { 
        name: 'Autonomous Business Intelligence', 
        href: '/autonomous-business-intelligence-2040', 
        description: 'Fully autonomous business intelligence platform',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-600',
        featured: true,
        price: '$1,499/month',
        rating: 4.9,
        reviews: 234
      },
      { 
        name: 'Quantum Cybersecurity Future', 
        href: '/quantum-cybersecurity-future-2040', 
        description: 'Future-proof cybersecurity with quantum resistance',
        icon: <ShieldCheck className="w-4 h-4" />,
        color: 'from-red-500 to-orange-600',
        featured: true,
        price: '$899/month',
        rating: 4.8,
        reviews: 187
      },
      { 
        name: 'Brain-Computer Interface', 
        href: '/brain-computer-interface-2040', 
        description: 'Next-generation neural interface technology',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-600',
        featured: true,
        price: '$3,999/month',
        rating: 4.9,
        reviews: 67
      },
      { 
        name: 'AI Autonomous Research', 
        href: '/ai-autonomous-research-2041', 
        description: 'Fully autonomous research platform',
        icon: <Microscope className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-600',
        price: '$2,499/month',
        rating: 4.9,
        reviews: 123
      },
      { 
        name: 'Quantum Internet Security', 
        href: '/quantum-internet-security-2041', 
        description: 'Quantum-secured internet infrastructure',
        icon: <Globe2 className="w-4 h-4" />,
        color: 'from-cyan-500 to-blue-600',
        price: '$1,799/month',
        rating: 4.8,
        reviews: 89
      },
      { 
        name: 'AI Customer Success', 
        href: '/ai-customer-success-2041', 
        description: 'Autonomous customer success platform',
        icon: <TargetIcon className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-600',
        price: '$599/month',
        rating: 4.9,
        reviews: 156
      },
      { 
        name: 'AI Sales Intelligence', 
        href: '/ai-sales-intelligence-2041', 
        description: 'Autonomous sales intelligence platform',
        icon: <DollarSign className="w-4 h-4" />,
        color: 'from-yellow-500 to-orange-600',
        price: '$799/month',
        rating: 4.8,
        reviews: 234
      },
      { 
        name: 'Quantum Cloud Infrastructure', 
        href: '/quantum-cloud-infrastructure-2041', 
        description: 'Quantum-powered cloud infrastructure',
        icon: <Cloud className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-600',
        price: '$1,299/month',
        rating: 4.9,
        reviews: 98
      }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness platforms',
    badge: 'Featured',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      {
        name: 'Quantum AI Consciousness Platform',
        href: '/quantum-ai-consciousness-platform',
        description: 'Next-generation AI consciousness with quantum computing',
        icon: <Brain className="w-4 h-4" />,
        featured: true,
        price: '$2,999/month',
        rating: 4.9,
        reviews: 89
      },
      {
        name: 'AI Autonomous Ecosystem Manager',
        href: '/ai-autonomous-ecosystem-manager',
        description: 'Fully autonomous AI ecosystem management',
        icon: <CpuIcon className="w-4 h-4" />,
        featured: true,
        price: '$399/month',
        rating: 4.8,
        reviews: 156
      },
      {
        name: 'AI Predictive Maintenance Platform',
        href: '/ai-predictive-maintenance-platform',
        description: 'Predict and prevent equipment failures',
        icon: <Settings className="w-4 h-4" />,
        featured: true,
        price: '$299/month',
        rating: 4.7,
        reviews: 98
      },
      {
        name: 'AI Content Personalization Engine',
        href: '/ai-content-personalization-engine',
        description: 'Hyper-personalized content experiences',
        icon: <Palette className="w-4 h-4" />,
        featured: true,
        price: '$199/month',
        rating: 4.8,
        reviews: 234
      },
      {
        name: 'AI Ethics & Governance Framework',
        href: '/ai-ethics-governance-framework',
        description: 'Comprehensive AI ethics and governance',
        icon: <Shield className="w-4 h-4" />,
        price: '$599/month',
        rating: 4.9,
        reviews: 67
      },
      {
        name: 'AI Autonomous Research Assistant',
        href: '/ai-autonomous-research-assistant',
        description: 'Fully autonomous research platform',
        icon: <BookOpen className="w-4 h-4" />,
        price: '$799/month',
        rating: 4.8,
        reviews: 123
      },
      {
        name: 'AI Creativity Studio',
        href: '/ai-creativity-studio',
        description: 'AI-powered creative tools',
        icon: <PaletteIcon className="w-4 h-4" />,
        price: '$149/month',
        rating: 4.7,
        reviews: 189
      }
    ]
  },
  {
    name: 'Quantum & Space Tech',
    href: '/quantum-space-tech',
    icon: <Atom className="w-5 h-5" />,
    description: 'Breakthrough quantum and space technologies',
    badge: 'Cutting Edge',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      {
        name: 'Quantum Neural Ecosystem 2040',
        href: '/quantum-neural-ecosystem-2040',
        description: 'Quantum-powered AI systems',
        icon: <Atom className="w-4 h-4" />,
        featured: true,
        price: '$1,999/month',
        rating: 4.9,
        reviews: 78
      },
      {
        name: 'Space Resource Intelligence Platform',
        href: '/space-resource-intelligence-platform',
        description: 'AI-powered space resource discovery',
        icon: <Satellite className="w-4 h-4" />,
        featured: true,
        price: '$1,999/month',
        rating: 4.8,
        reviews: 56
      },
      {
        name: 'Quantum Cybersecurity Future 2040',
        href: '/quantum-cybersecurity-future-2040',
        description: 'Future-proof security',
        icon: <ShieldCheck className="w-4 h-4" />,
        featured: true,
        price: '$899/month',
        rating: 4.8,
        reviews: 187
      },
      {
        name: 'Brain-Computer Interface 2040',
        href: '/brain-computer-interface-2040',
        description: 'Neural interface technology',
        icon: <Brain className="w-4 h-4" />,
        featured: true,
        price: '$3,999/month',
        rating: 4.9,
        reviews: 67
      },
      {
        name: 'Quantum Internet Security 2041',
        href: '/quantum-internet-security-2041',
        description: 'Quantum-secured internet infrastructure',
        icon: <Globe2 className="w-4 h-4" />,
        price: '$1,799/month',
        rating: 4.8,
        reviews: 89
      },
      {
        name: 'Quantum Cloud Infrastructure 2041',
        href: '/quantum-cloud-infrastructure-2041',
        description: 'Quantum-powered cloud infrastructure',
        icon: <Cloud className="w-4 h-4" />,
        price: '$1,299/month',
        rating: 4.9,
        reviews: 98
      },
      {
        name: 'Space Mining Operations',
        href: '/space-mining-operations',
        description: 'Advanced space resource extraction',
        icon: <Rocket className="w-4 h-4" />,
        price: '$2,499/month',
        rating: 4.7,
        reviews: 45
      }
    ]
  },
  {
    name: 'Business Solutions',
    href: '/business-solutions',
    icon: <Building className="w-5 h-5" />,
    description: 'Enterprise-grade business solutions',
    badge: 'Enterprise',
    category: 'business',
    color: 'from-green-500 to-emerald-500',
    children: [
      {
        name: 'Autonomous Business Intelligence 2040',
        href: '/autonomous-business-intelligence-2040',
        description: 'Consciousness-driven insights',
        icon: <BarChart3 className="w-4 h-4" />,
        featured: true,
        price: '$1,499/month',
        rating: 4.9,
        reviews: 234
      },
      {
        name: 'AI Customer Success 2041',
        href: '/ai-customer-success-2041',
        description: 'Autonomous customer success platform',
        icon: <TargetIcon className="w-4 h-4" />,
        featured: true,
        price: '$599/month',
        rating: 4.9,
        reviews: 156
      },
      {
        name: 'AI Sales Intelligence 2041',
        href: '/ai-sales-intelligence-2041',
        description: 'Autonomous sales intelligence platform',
        icon: <DollarSign className="w-4 h-4" />,
        featured: true,
        price: '$799/month',
        rating: 4.8,
        reviews: 234
      },
      {
        name: 'Enterprise Process Automation',
        href: '/enterprise-process-automation',
        description: 'Intelligent business process automation',
        icon: <Zap className="w-4 h-4" />,
        price: '$899/month',
        rating: 4.7,
        reviews: 167
      },
      {
        name: 'Digital Transformation Consulting',
        href: '/digital-transformation-consulting',
        description: 'Strategic digital transformation guidance',
        icon: <TrendingUp className="w-4 h-4" />,
        price: '$1,299/month',
        rating: 4.8,
        reviews: 89
      }
    ]
  },
  {
    name: 'Research & Development',
    href: '/research-development',
    icon: <FlaskConical className="w-5 h-5" />,
    description: 'Cutting-edge research and development',
    badge: 'Innovation',
    category: 'research',
    color: 'from-orange-500 to-red-500',
    children: [
      {
        name: 'AI Autonomous Research 2041',
        href: '/ai-autonomous-research-2041',
        description: 'Fully autonomous research platform',
        icon: <Microscope className="w-4 h-4" />,
        featured: true,
        price: '$2,499/month',
        rating: 4.9,
        reviews: 123
      },
      {
        name: 'Quantum Materials Discovery',
        href: '/quantum-materials-discovery',
        description: 'AI-powered materials research',
        icon: <Atom className="w-4 h-4" />,
        price: '$1,799/month',
        rating: 4.8,
        reviews: 67
      },
      {
        name: 'Space Technology Research',
        href: '/space-technology-research',
        description: 'Advanced space technology development',
        icon: <Telescope className="w-4 h-4" />,
        price: '$2,199/month',
        rating: 4.7,
        reviews: 45
      },
      {
        name: 'Biotechnology Innovation',
        href: '/biotechnology-innovation',
        description: 'Next-generation biotech solutions',
        icon: <FlaskConical className="w-4 h-4" />,
        price: '$1,599/month',
        rating: 4.8,
        reviews: 78
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'company',
    color: 'from-gray-500 to-slate-500',
    children: [
      { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
      { name: 'Our Team', href: '/team', icon: <Users className="w-4 h-4" /> },
      { name: 'Careers', href: '/careers', icon: <Briefcase className="w-4 h-4" /> },
      { name: 'News & Updates', href: '/news', icon: <Newspaper className="w-4 h-4" /> },
      { name: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" /> },
      { name: 'Partners', href: '/partners', icon: <Handshake className="w-4 h-4" /> },
      { name: 'Investors', href: '/investors', icon: <DollarSign className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Educational resources and tools',
    category: 'resources',
    color: 'from-indigo-500 to-purple-500',
    children: [
      { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
      { name: 'API Reference', href: '/api', icon: <Code className="w-4 h-4" /> },
      { name: 'Tutorials', href: '/tutorials', icon: <GraduationCap className="w-4 h-4" /> },
      { name: 'Webinars', href: '/webinars', icon: <Monitor className="w-4 h-4" /> },
      { name: 'White Papers', href: '/white-papers', icon: <FileText className="w-4 h-4" /> },
      { name: 'Blog', href: '/blog', icon: <Newspaper className="w-4 h-4" /> },
      { name: 'Support Center', href: '/support', icon: <MessageCircle className="w-4 h-4" /> }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function UltraAdvancedFuturisticNavigation2041({ 
  onMenuToggle, 
  isMenuOpen 
}: UltraAdvancedFuturisticNavigation2041Props) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // Handle search functionality
  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <nav className="relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/30">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-900/90 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            {/* Contact Information */}
            <div className="hidden md:flex items-center space-x-6 text-gray-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </a>
              <span className="flex items-center space-x-2">
                <Globe className="w-3 h-3" />
                <span>{contactInfo.website.replace('https://', '')}</span>
              </span>
            </div>
            
            {/* Quick Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Get Quote
              </a>
              <a href="/demo" className="text-purple-400 hover:text-purple-300 transition-colors">
                Book Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">Future Technology Solutions</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group ${
                    activeDropdown === item.name ? 'text-white bg-white/10' : ''
                  }`}
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup="true"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
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
                      className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden z-50"
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
                              href={normalizeHref(child.href)}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                            >
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                child.color ? `bg-gradient-to-br ${child.color}` : 'bg-gray-700'
                              }`}>
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {child.name}
                                  </h4>
                                  {child.featured && (
                                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                  )}
                                </div>
                                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                  {child.description}
                                </p>
                                {child.price && (
                                  <div className="flex items-center space-x-2 mt-2">
                                    <span className="text-xs font-medium text-green-400">{child.price}</span>
                                    {child.rating && (
                                      <div className="flex items-center space-x-1">
                                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                        <span className="text-xs text-gray-400">{child.rating}</span>
                                        <span className="text-xs text-gray-500">({child.reviews})</span>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                            </Link>
                          ))}
                        </div>
                        
                        {item.href !== '#' && (
                          <div className="mt-4 pt-4 border-t border-gray-700">
                            <Link
                              href={normalizeHref(item.href)}
                              className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                            >
                              <span>View All {item.name}</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/20 p-4"
                  >
                    <form onSubmit={handleSearch} className="space-y-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          ref={searchRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search services, solutions..."
                          className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                      >
                        Search
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Sign In</span>
              </button>
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <button className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                <span className="font-medium">Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}