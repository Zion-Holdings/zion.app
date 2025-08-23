<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2, Truck,
  Home, Briefcase, BookOpen, FileText, Video, GraduationCap, Award, Newspaper, MessageCircle
} from 'lucide-react';
=======
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
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
  Mail,
  ArrowRight,
  Network,
  ShoppingCart,
  Monitor,
  Lock,
  Server,
  Globe2,
  Newspaper
} from 'lucide-react';

// Define Node type for DOM event handling
type Node = HTMLElement | null;
>>>>>>> origin/main

interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  featured?: boolean;
  category?: string;
<<<<<<< HEAD
  neonColor?: string;
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
=======
  color?: string;
>>>>>>> origin/main
}

// Enhanced navigation items with better organization
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
        href: '/ai-services',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        featured: true,
        neonColor: 'shadow-purple-400/50',
        category: 'ai'
      },
      {
<<<<<<< HEAD
        label: 'Quantum Computing',
        href: '/quantum-services',
=======
        label: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution-2045',
        icon: <Brain className="w-4 h-4" />,
        description: 'Revolutionary AI consciousness platform',
        featured: true,
        neonColor: 'shadow-purple-400/50',
        category: 'ai'
      },
      {
        label: 'Quantum Neural Networks',
        href: '/quantum-neural-network-platform-2045',
>>>>>>> origin/main
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-blue-400/50',
        category: 'quantum'
      },
      {
<<<<<<< HEAD
        label: 'Space Technology',
        href: '/space-technology',
=======
        label: 'Space Resource Intelligence',
        href: '/space-resource-intelligence-2045',
>>>>>>> origin/main
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications',
        featured: true,
        neonColor: 'shadow-pink-400/50',
        category: 'space'
      },
      {
<<<<<<< HEAD
        label: 'Cybersecurity',
        href: '/cybersecurity',
=======
        label: 'AI Guardrails',
        href: '/ai-guardrails',
>>>>>>> origin/main
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security solutions',
        neonColor: 'shadow-red-400/50',
        category: 'security'
      },
      {
<<<<<<< HEAD
        label: 'Cloud Infrastructure',
        href: '/cloud-platform',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud solutions',
        neonColor: 'shadow-indigo-400/50',
        category: 'cloud'
      },
      {
        label: 'Edge Computing',
        href: '/edge-computing-orchestration',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Next-generation edge solutions',
        neonColor: 'shadow-green-400/50',
        category: 'edge'
=======
        label: 'Agentic RAG Platform',
        href: '/agentic-rag',
        icon: <Target className="w-4 h-4" />,
        description: 'Intelligent retrieval-augmented generation',
        neonColor: 'shadow-indigo-400/50',
        category: 'ai'
>>>>>>> origin/main
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific solutions and use cases',
    neonColor: 'shadow-emerald-400/50',
    category: 'main',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/enterprise-solutions-showcase',
        icon: <Building className="w-4 h-4" />,
        description: 'Large-scale enterprise implementations',
        neonColor: 'shadow-blue-400/50',
        category: 'enterprise'
      },
      {
        label: 'Healthcare Solutions',
        href: '/healthcare-ai-solutions',
        icon: <Heart className="w-4 h-4" />,
        description: 'AI-powered healthcare solutions',
        neonColor: 'shadow-red-400/50',
        category: 'healthcare'
      },
      {
        label: 'Financial Solutions',
        href: '/financial-solutions',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Fintech and financial services',
        neonColor: 'shadow-yellow-400/50',
        category: 'financial'
      },
      {
        label: 'Manufacturing Solutions',
        href: '/manufacturing-ai-solutions',
        icon: <Settings className="w-4 h-4" />,
        description: 'AI-powered manufacturing optimization',
        neonColor: 'shadow-orange-400/50',
        category: 'manufacturing'
      },
      {
        label: 'Government Solutions',
        href: '/government-technology-solutions',
        icon: <Shield className="w-4 h-4" />,
        description: 'Secure government implementations',
        neonColor: 'shadow-purple-400/50',
        category: 'government'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge base and learning resources',
    neonColor: 'shadow-orange-400/50',
    category: 'main',
    children: [
      {
        label: 'Documentation',
        href: '/resources/documentation',
        icon: <FileText className="w-4 h-4" />,
        description: 'Technical documentation and guides',
        neonColor: 'shadow-blue-400/50',
        category: 'docs'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Live and recorded webinars',
        neonColor: 'shadow-purple-400/50',
        category: 'webinars'
      },
      {
        label: 'Case Studies',
<<<<<<< HEAD
        href: '/case-studies',
=======
        href: '/resources/case-studies',
>>>>>>> origin/main
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Success stories and implementations',
        neonColor: 'shadow-green-400/50',
        category: 'case-studies'
      },
      {
        label: 'API Reference',
<<<<<<< HEAD
        href: '/api-docs',
=======
        href: '/resources/api',
>>>>>>> origin/main
        icon: <Code className="w-4 h-4" />,
        description: 'Developer API documentation',
        neonColor: 'shadow-indigo-400/50',
        category: 'api'
      },
      {
        label: 'Training',
        href: '/training',
        icon: <GraduationCap className="w-4 h-4" />,
        description: 'Training programs and certifications',
        neonColor: 'shadow-yellow-400/50',
        category: 'training'
      },
      {
        label: 'Blog',
        href: '/blog',
        icon: <FileText className="w-4 h-4" />,
        description: 'Latest insights and updates',
        neonColor: 'shadow-cyan-400/50',
        category: 'blog'
      }
    ]
  },
  {
    label: 'Company',
    href: '/company',
    icon: <Building className="w-4 h-4" />,
    description: 'About Zion Tech Group',
    neonColor: 'shadow-cyan-400/50',
    category: 'main',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Our story and mission',
        neonColor: 'shadow-blue-400/50',
        category: 'about'
      },
      {
        label: 'Mission',
        href: '/mission',
        icon: <Target className="w-4 h-4" />,
        description: 'Our vision and goals',
        neonColor: 'shadow-green-400/50',
        category: 'mission'
      },
      {
        label: 'Team',
        href: '/team',
        icon: <Users className="w-4 h-4" />,
<<<<<<< HEAD
        description: 'Meet our experts',
        neonColor: 'shadow-green-400/50',
=======
        description: 'Meet our team',
        neonColor: 'shadow-purple-400/50',
>>>>>>> origin/main
        category: 'team'
      },
      {
        label: 'Careers',
        href: '/careers',
<<<<<<< HEAD
        icon: <Briefcase className="w-4 h-4" />,
        description: 'Join our innovative team',
=======
        icon: <Award className="w-4 h-4" />,
        description: 'Join our team',
>>>>>>> origin/main
        neonColor: 'shadow-orange-400/50',
        category: 'careers'
      },
      {
<<<<<<< HEAD
        label: 'News & Press',
        href: '/news',
        icon: <Newspaper className="w-4 h-4" />,
        description: 'Latest company news and press releases',
        neonColor: 'shadow-yellow-400/50',
        category: 'news'
      },
      {
=======
        label: 'News',
        href: '/news',
        icon: <FileText className="w-4 h-4" />,
        description: 'Latest company news',
        neonColor: 'shadow-indigo-400/50',
        category: 'news'
      },
      {
        label: 'Press',
        href: '/press',
        icon: <FileText className="w-4 h-4" />,
        description: 'Press releases and media kit',
        neonColor: 'shadow-cyan-400/50',
        category: 'press'
      },
      {
        label: 'Media Kit',
        href: '/media-kit',
        icon: <FileText className="w-4 h-4" />,
        description: 'Brand assets and resources',
        neonColor: 'shadow-blue-400/50',
        category: 'media'
      }
    ]
  },
  {
    label: 'Support',
    href: '/support',
    icon: <HelpCircle className="w-4 h-4" />,
    description: 'Get help and support',
    neonColor: 'shadow-red-400/50',
    category: 'main',
    children: [
      {
        label: 'Help Center',
        href: '/support',
        icon: <HelpCircle className="w-4 h-4" />,
        description: 'Self-service help and guides',
        neonColor: 'shadow-blue-400/50',
        category: 'help'
      },
      {
>>>>>>> origin/main
        label: 'Contact Us',
        href: '/contact',
        icon: <MessageCircle className="w-4 h-4" />,
        description: 'Get in touch with our team',
<<<<<<< HEAD
        neonColor: 'shadow-red-400/50',
        category: 'contact'
=======
        neonColor: 'shadow-green-400/50',
        category: 'contact'
      },
      {
        label: 'Status',
        href: '/status',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Service status and uptime',
        neonColor: 'shadow-orange-400/50',
        category: 'status'
      },
      {
        label: 'Developer Resources',
        href: '/developer-resources',
        icon: <Code className="w-4 h-4" />,
        description: 'Developer tools and resources',
        neonColor: 'shadow-purple-400/50',
        category: 'dev'
>>>>>>> origin/main
      }
    ]
  },
  {
<<<<<<< HEAD
    label: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-4 h-4" />,
    neonColor: 'shadow-green-400/50',
    category: 'main'
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />,
    neonColor: 'shadow-red-400/50',
    category: 'main'
  }
];

const UltraFuturisticNavigation2045: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
=======
    label: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    badge: '2045',
    category: 'company',
    color: 'from-gray-500 to-slate-500',
    children: [
      { 
        label: 'About Us', 
        href: '/about', 
        description: 'Learn about our mission and values',
        icon: <Users className="w-4 h-4" />,
        featured: true
      },
      { 
        label: 'Our Team', 
        href: '/team', 
        description: 'Meet our leadership team',
        icon: <Users className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        label: 'Careers', 
        href: '/careers', 
        description: 'Join our innovative team',
        icon: <Briefcase className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        label: 'News & Blog', 
        href: '/blog', 
        description: 'Latest insights and updates',
        icon: <Newspaper className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        label: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories from our clients',
        icon: <FileText className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
      }
    ]
  }
];

// Quick action buttons
const quickActions = [
  {
    label: 'Get Started',
    href: '/get-started',
    icon: <Zap className="w-4 h-4" />,
    variant: 'primary' as const
  },
  {
    label: 'Demo',
    href: '/demo',
    icon: <Play className="w-4 h-4" />,
    variant: 'secondary' as const
  },
  {
    label: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-4 h-4" />,
    variant: 'outline' as const
  }
];

interface UltraFuturisticNavigation2045Props {
  className?: string;
}

const UltraFuturisticNavigation2045: React.FC<UltraFuturisticNavigation2045Props> = ({ 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
>>>>>>> origin/main

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };
=======
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, []);
>>>>>>> origin/main

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'AI & Consciousness', href: '/services/ai-consciousness', icon: Brain, description: 'Revolutionary AI consciousness solutions' },
        { name: 'Quantum Technology', href: '/services/quantum-technology', icon: Atom, description: 'Quantum computing and quantum AI' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced security and threat protection' },
        { name: 'Space Technology', href: '/services/space-technology', icon: Rocket, description: 'Space resource intelligence and mining' },
        { name: 'Business Solutions', href: '/services/business-solutions', icon: Target, description: 'AI-powered business transformation' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Cloud, description: 'Modern cloud and infrastructure solutions' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
<<<<<<< HEAD
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-blue-900/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label || '')}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group-hover:text-cyan-400"
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={normalizeHref(item.href)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group-hover:text-cyan-400"
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )}

                {/* Enhanced Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={normalizeHref(child.href)}
                              onClick={closeDropdown}
                              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30' 
                                  : 'hover:bg-gray-800/50'
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                child.neonColor 
                                  ? `bg-gradient-to-br ${child.neonColor.replace('shadow-', 'from-').replace('/50', ' to-').replace('-400', '-500')}` 
                                  : 'bg-gray-700'
                              }`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {child.label}
                                  </span>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-400">{child.description}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
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
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <a href="tel:+13024640950" className="text-sm font-medium">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <Mail className="w-4 h-4" />
              <a href="mailto:kleber@ziontechgroup.com" className="text-sm font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.label}</span>
                          {item.badge && (
                            <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="ml-4 mt-2 space-y-2 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={normalizeHref(child.href)}
                                onClick={() => { closeDropdown(); setIsOpen(false); }}
                                className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                    child.neonColor 
                                      ? `bg-gradient-to-br ${child.neonColor.replace('shadow-', 'from-').replace('/50', ' to-').replace('-400', '-500')}` 
                                      : 'bg-gray-700'
                                  }`}>
                                    {child.icon}
                                  </div>
                                  <span className="font-medium">{child.label}</span>
                                </div>
                              </Link>
=======
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeMobileMenu}>
            <motion.div 
              className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </motion.div>
            <div>
              <span className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech
              </span>
              <div className="text-xs lg:text-sm text-cyan-400 font-medium">
                Revolutionary Technology 2045
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                                >
                                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-200">
                                    <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                      {dropdownItem.name}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
                                </Link>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-700/50">
                              <Link
                                href={item.href}
                                className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                              >
                                View All Services
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/demo"
              className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            >
              Watch Demo
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-6">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-3"
                        aria-expanded={activeDropdown === item.name}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={closeMobileMenu}
                                className="flex items-center space-x-3 p-2 text-gray-400 hover:text-cyan-400 transition-colors rounded-lg"
                              >
                                <dropdownItem.icon className="w-4 h-4 text-cyan-400" />
                                <span>{dropdownItem.name}</span>
                              </Link>
>>>>>>> origin/main
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
<<<<<<< HEAD
                      href={normalizeHref(item.href)}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
=======
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors py-3"
                    >
                      {item.name}
>>>>>>> origin/main
                    </Link>
                  )}
                </div>
              ))}
<<<<<<< HEAD
            </div>
            
            <div className="pt-4 border-t border-gray-800">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="text-sm">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-sm">
                    kleber@ziontechgroup.com
                  </a>
                </div>
=======
              
              <div className="pt-6 border-t border-gray-700/50 space-y-4">
                <Link
                  href="/demo"
                  onClick={closeMobileMenu}
                  className="block text-center px-6 py-3 border border-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Watch Demo
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Get Started
                </Link>
>>>>>>> origin/main
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2045;