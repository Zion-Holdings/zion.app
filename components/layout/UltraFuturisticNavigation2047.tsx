import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2, Truck,
  Sparkles as SparklesIcon, ArrowUpRight, Star, Award, BookOpen, FileText, Video,
  MessageCircle, Calendar, MapPin, Clock, CheckCircle, ShieldCheck, Zap as ZapIcon2,
  GraduationCap
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
    name: 'Revolutionary Services 2047',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: 'New 2047',
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
        name: 'AI Consciousness Evolution 2047', 
        href: '/ai-consciousness-evolution-2047', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum Neural Network 2047', 
        href: '/quantum-neural-network-platform-2047', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'AI Autonomous Business Intelligence 2047', 
        href: '/ai-autonomous-business-intelligence-2047', 
        description: 'AI-powered business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cybersecurity 2047', 
        href: '/quantum-cybersecurity-platform-2047', 
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Autonomous Customer Success 2047', 
        href: '/autonomous-customer-success-2047', 
        description: 'AI-powered customer success',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500'
      },
      { 
        name: 'AI Customer Success Automation', 
        href: '/ai-customer-success-automation-2025', 
        description: 'AI-powered customer success automation',
        icon: <Users className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Intelligent Content Marketing', 
        href: '/intelligent-content-marketing-suite-2025', 
        description: 'AI-powered content marketing automation',
        icon: <FileText className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
      },
      { 
        name: 'Quantum Financial Trading', 
        href: '/quantum-financial-trading-platform-2025', 
        description: 'Quantum-powered trading platform',
        icon: <TrendingUp className="w-4 h-4" />,
        color: 'from-yellow-500 to-orange-500'
      },
      { 
        name: 'Autonomous Supply Chain', 
        href: '/autonomous-supply-chain-intelligence-2025', 
        description: 'AI-powered supply chain management',
        icon: <Truck className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Healthcare Analytics', 
        href: '/quantum-healthcare-analytics-platform-2025', 
        description: 'Quantum-powered healthcare insights',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-red-500 to-pink-500'
      },
      { 
        name: 'Autonomous Sales Intelligence', 
        href: '/autonomous-sales-intelligence-2025', 
        description: 'AI-powered sales automation',
        icon: <Target className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      }
    ]
  },
  {
    name: 'Technology Solutions',
    href: '/solutions',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced technology infrastructure',
    category: 'solutions',
    color: 'from-blue-500 to-indigo-500',
    children: [
      { 
        name: 'All Solutions', 
        href: '/solutions', 
        description: 'Complete technology solutions overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Cloud Infrastructure 2047', 
        href: '/quantum-cloud-infrastructure-2047', 
        description: 'Quantum-powered cloud computing',
        icon: <Cloud className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'Autonomous DevOps Platform 2047', 
        href: '/autonomous-devops-platform-2047', 
        description: 'Self-managing DevOps infrastructure',
        icon: <Code className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500',
        featured: true
      },
      { 
        name: 'Quantum Data Center Management 2047', 
        href: '/quantum-data-center-management-2047', 
        description: 'Quantum-optimized data centers',
        icon: <Server className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Autonomous Network Management 2047', 
        href: '/autonomous-network-management-2047', 
        description: 'Self-managing network infrastructure',
        icon: <Network className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Autonomous IT Service Management 2047', 
        href: '/autonomous-it-service-management-2047', 
        description: 'AI-powered IT service management',
        icon: <Settings className="w-4 h-4" />,
        color: 'from-yellow-500 to-orange-500'
      },
      { 
        name: 'Autonomous Security Operations Center 2047', 
        href: '/autonomous-security-operations-center-2047', 
        description: 'AI-powered security operations',
        icon: <Lock className="w-4 h-4" />,
        color: 'from-red-500 to-pink-500'
      },
      { 
        name: 'Zero Trust Quantum Network', 
        href: '/zero-trust-quantum-network', 
        description: 'Quantum-secured zero trust network',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
      },
      { 
        name: 'Autonomous Edge Computing Network', 
        href: '/autonomous-edge-computing-network', 
        description: 'Self-managing edge computing',
        icon: <Cpu className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-consciousness',
    icon: <Brain className="w-5 h-5" />,
    description: 'Advanced AI consciousness systems',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'AI Consciousness Overview', 
        href: '/ai-consciousness', 
        description: 'Complete AI consciousness overview',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Autonomous Business Orchestrator', 
        href: '/ai-autonomous-business-orchestrator', 
        description: 'Fully autonomous business AI',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum AI Cybersecurity Sentinel', 
        href: '/quantum-ai-cybersecurity-sentinel', 
        description: 'Quantum-powered AI security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'Quantum AI Fusion Platform', 
        href: '/quantum-ai-fusion-platform', 
        description: 'Quantum-AI hybrid systems',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        name: 'Autonomous Content Creation Suite', 
        href: '/autonomous-content-creation-suite', 
        description: 'AI autonomous content creation',
        icon: <FileText className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
      },
      { 
        name: 'AI Emotional Intelligence Platform', 
        href: '/ai-emotional-intelligence-platform', 
        description: 'AI with emotional understanding',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-pink-500 to-red-500'
      },
      { 
        name: 'Consciousness-Based Learning Platform', 
        href: '/consciousness-based-learning-platform', 
        description: 'AI-powered adaptive learning',
        icon: <BookOpen className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-technology',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and technology',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      { 
        name: 'Quantum Technology Overview', 
        href: '/quantum-technology', 
        description: 'Complete quantum technology overview',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Cloud Hybrid Platform', 
        href: '/quantum-cloud-hybrid-platform', 
        description: 'Quantum-classical hybrid computing',
        icon: <Cloud className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500',
        featured: true
      },
      { 
        name: 'Quantum Neural Network Platform', 
        href: '/quantum-neural-network-platform', 
        description: 'Quantum-powered neural networks',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum Cybersecurity Platform', 
        href: '/quantum-cybersecurity-platform', 
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Quantum Space Technology Platform', 
        href: '/quantum-space-technology-platform', 
        description: 'Quantum space technology',
        icon: <Rocket className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
      },
      { 
        name: 'Quantum Supply Chain Optimizer', 
        href: '/quantum-supply-chain-optimizer', 
        description: 'Quantum supply chain optimization',
        icon: <Truck className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cryptocurrency Wallet', 
        href: '/quantum-cryptocurrency-wallet', 
        description: 'Quantum-secured cryptocurrency',
        icon: <DollarSign className="w-4 h-4" />,
        color: 'from-yellow-500 to-orange-500'
      }
    ]
  },
  {
    name: 'Business Solutions',
    href: '/business-solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Enterprise business solutions',
    category: 'business',
    color: 'from-emerald-500 to-teal-500',
    children: [
      { 
        name: 'Business Solutions Overview', 
        href: '/business-solutions', 
        description: 'Complete business solutions overview',
        icon: <Target className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Autonomous Business Intelligence', 
        href: '/ai-autonomous-business-intelligence', 
        description: 'Autonomous business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500',
        featured: true
      },
      { 
        name: 'Autonomous Customer Success', 
        href: '/autonomous-customer-success', 
        description: 'AI-powered customer success',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500',
        featured: true
      },
      { 
        name: 'Autonomous Sales Intelligence', 
        href: '/autonomous-sales-intelligence-2025', 
        description: 'AI-powered sales automation',
        icon: <Target className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Autonomous Supply Chain Intelligence', 
        href: '/autonomous-supply-chain-intelligence-2025', 
        description: 'AI-powered supply chain',
        icon: <Truck className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'AI Customer Success Automation', 
        href: '/ai-customer-success-automation-2025', 
        description: 'Automated customer success',
        icon: <Users className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Intelligent Content Marketing Suite', 
        href: '/intelligent-content-marketing-suite-2025', 
        description: 'AI content marketing',
        icon: <FileText className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
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
      { 
        name: 'About Us', 
        href: '/about', 
        description: 'Learn about our mission and vision',
        icon: <Building className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Our Mission', 
        href: '/mission', 
        description: 'Our mission and values',
        icon: <Star className="w-4 h-4" />,
        color: 'from-yellow-500 to-orange-500'
      },
      { 
        name: 'Leadership Team', 
        href: '/team', 
        description: 'Meet our leadership team',
        icon: <Users className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Target className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'News & Updates', 
        href: '/news', 
        description: 'Latest company news',
        icon: <FileText className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Press Kit', 
        href: '/press', 
        description: 'Media resources',
        icon: <Database className="w-4 h-4" />,
        color: 'from-gray-500 to-slate-500'
      }
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
      { 
        name: 'Resources Overview', 
        href: '/resources', 
        description: 'Complete resources overview',
        icon: <BookOpen className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'White Papers', 
        href: '/white-papers', 
        description: 'In-depth research papers',
        icon: <FileText className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
      },
      { 
        name: 'Webinars', 
        href: '/webinars', 
        description: 'Educational webinars',
        icon: <Video className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Training', 
        href: '/training', 
        description: 'Professional training programs',
        icon: <GraduationCap className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Latest insights and updates',
        icon: <MessageCircle className="w-4 h-4" />,
        color: 'from-cyan-500 to-blue-500'
      },
      { 
        name: 'Events', 
        href: '/events', 
        description: 'Upcoming events and conferences',
        icon: <Calendar className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
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
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl shadow-blue-500/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                  <div className="text-xs text-gray-400 -mt-1">Revolutionary Technology 2047</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => handleDropdownToggle(item.category || '')}
                    className="flex items-center space-x-1 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 group"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-medium">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.category && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                        onMouseLeave={closeDropdowns}
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
                                className={`group/child flex items-start space-x-3 p-3 rounded-xl transition-all duration-200 ${
                                  child.featured 
                                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20' 
                                    : 'hover:bg-gray-800/50'
                                }`}
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                  child.color ? `bg-gradient-to-br ${child.color}` : 'bg-gray-700'
                                }`}>
                                  {child.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <span className="font-medium text-white group-hover/child:text-blue-400 transition-colors duration-200">
                                      {child.name}
                                    </span>
                                    {child.featured && (
                                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-medium">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                                    {child.description}
                                  </p>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/child:text-blue-400 transition-colors duration-200" />
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
              {/* Contact Info */}
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <a href="tel:+13024640950" className="flex items-center space-x-1 hover:text-blue-400 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-1 hover:text-blue-400 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => handleDropdownToggle(item.category || '')}
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-medium">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.category ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.category && item.children && (
                      <div className="mt-2 ml-8 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            className="block px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-700/50 space-y-3">
                  <a href="tel:+13024640950" className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default UltraFuturisticNavigation2047;