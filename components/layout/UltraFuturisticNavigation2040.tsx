import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Search,
  User,
  Bell,
  Settings,
  LogOut,
  Home,
  Briefcase,
  Users,
  Globe,
  Zap,
  Cpu,
  Brain,
  Rocket,
  Shield,
  Database,
  Server,
  CpuIcon,
  ZapIcon,
  Truck,
  BookOpen,
  FileText,
  Handshake,
  Newspaper,
  Grid,
  Atom,
  BarChart3,
  Palette,
  PaletteIcon,
  GraduationCap,
  HeartIcon,
  DollarSign,
  Target,
  Network,
  Cloud,
  Layers,
  Code,
  MessageCircle,
  TrendingUp,
  Monitor,
  Lock,
  Building,
  Phone,
  Mail,
  ArrowRight,
  Star
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
    name: 'Revolutionary Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: 'New 2040',
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
        name: 'AI Consciousness Evolution', 
        href: '/ai-consciousness-evolution-2040', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum Neural Ecosystem', 
        href: '/quantum-neural-ecosystem-2040', 
        description: 'Quantum-powered AI systems',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'Space Resource Intelligence', 
        href: '/space-resource-intelligence-2040', 
        description: 'AI-powered space exploration',
        icon: <Rocket className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        name: 'Autonomous Business Intelligence', 
        href: '/autonomous-business-intelligence-2040', 
        description: 'Consciousness-driven insights',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cybersecurity Future', 
        href: '/quantum-cybersecurity-future-2040', 
        description: 'Future-proof security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Brain-Computer Interface', 
        href: '/brain-computer-interface-2040', 
        description: 'Neural interface technology',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500'
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
        name: 'AI Consciousness Evolution 2040',
        href: '/ai-consciousness-evolution-2040',
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI Autonomous Ecosystem Manager',
        href: '/ai-autonomous-ecosystem-manager',
        description: 'Fully autonomous AI ecosystem management',
        icon: <CpuIcon className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI Predictive Maintenance Platform',
        href: '/ai-predictive-maintenance-platform',
        description: 'Predict and prevent equipment failures',
        icon: <Settings className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI Content Personalization Engine',
        href: '/ai-content-personalization-engine',
        description: 'Hyper-personalized content experiences',
        icon: <Palette className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI Ethics & Governance Framework',
        href: '/ai-ethics-governance-framework',
        description: 'Comprehensive AI ethics and governance',
        icon: <Shield className="w-4 h-4" />
      },
      {
        name: 'AI Autonomous Research Assistant',
        href: '/ai-autonomous-research-assistant',
        description: 'Fully autonomous research platform',
        icon: <BookOpen className="w-4 h-4" />
      },
      {
        name: 'AI Creativity Studio',
        href: '/ai-creativity-studio',
        description: 'AI-powered creative tools',
        icon: <PaletteIcon className="w-4 h-4" />
      },
      {
        name: 'AI Education Platform',
        href: '/ai-education-platform',
        description: 'Personalized AI-powered education',
        icon: <GraduationCap className="w-4 h-4" />
      },
      {
        name: 'AI Healthcare Diagnostics',
        href: '/ai-healthcare-diagnostics',
        description: 'AI-powered healthcare diagnostics',
        icon: <HeartIcon className="w-4 h-4" />
      },
      {
        name: 'AI Financial Intelligence',
        href: '/ai-financial-intelligence',
        description: 'Intelligent financial analysis',
        icon: <DollarSign className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing solutions',
    badge: 'Quantum',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      {
        name: 'Quantum Neural Ecosystem 2040',
        href: '/quantum-neural-ecosystem-2040',
        description: 'Quantum-powered neural networks',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Quantum Data Encryption Platform',
        href: '/quantum-data-encryption-platform',
        description: 'Future-proof quantum-resistant encryption',
        icon: <Lock className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Quantum Logistics Optimization',
        href: '/quantum-logistics-optimization',
        description: 'Quantum-powered logistics optimization',
        icon: <Truck className="w-4 h-4" />
      },
      {
        name: 'Quantum Financial Trading Platform',
        href: '/quantum-financial-trading-platform',
        description: 'Quantum-powered trading algorithms',
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        name: 'Quantum IoT Platform',
        href: '/quantum-iot-platform',
        description: 'Quantum-powered IoT platform',
        icon: <Network className="w-4 h-4" />
      },
      {
        name: 'Quantum Cybersecurity Future 2040',
        href: '/quantum-cybersecurity-future-2040',
        description: 'Future-proof quantum security',
        icon: <Shield className="w-4 h-4" />
      },
      {
        name: 'Quantum Internet Security 2041',
        href: '/quantum-internet-security-2041',
        description: 'Quantum internet protection',
        icon: <Network className="w-4 h-4" />
      },
      {
        name: 'Quantum Cloud Infrastructure 2041',
        href: '/quantum-cloud-infrastructure-2041',
        description: 'Quantum cloud computing',
        icon: <Cloud className="w-4 h-4" />
      },
      {
        name: 'Quantum Bio-Computing 2041',
        href: '/quantum-bio-computing-2041',
        description: 'Quantum biological computing',
        icon: <Atom className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure',
    badge: 'Enterprise',
    category: 'it',
    color: 'from-orange-500 to-red-500',
    children: [
      {
        name: 'Quantum-Secure Cloud Infrastructure',
        href: '/quantum-secure-cloud-infrastructure',
        description: 'Future-proof cloud infrastructure',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI-Powered DevOps Platform',
        href: '/ai-powered-devops-platform',
        description: 'Intelligent DevOps automation',
        icon: <ZapIcon className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Edge Computing Orchestration',
        href: '/edge-computing-orchestration',
        description: 'Intelligent edge computing management',
        icon: <Server className="w-4 h-4" />
      },
      {
        name: 'Blockchain Infrastructure Platform',
        href: '/blockchain-infrastructure-platform',
        description: 'Enterprise blockchain infrastructure',
        icon: <Layers className="w-4 h-4" />
      },
      {
        name: 'Zero Trust Security Platform',
        href: '/zero-trust-security-platform',
        description: 'Comprehensive zero trust security',
        icon: <Shield className="w-4 h-4" />
      },
      {
        name: 'Quantum Networking Platform',
        href: '/quantum-networking-platform',
        description: 'Next-generation quantum networking',
        icon: <Network className="w-4 h-4" />
      },
      {
        name: 'AI-Powered Data Center Management',
        href: '/ai-powered-data-center-management',
        description: 'Intelligent data center management',
        icon: <Database className="w-4 h-4" />
      },
      {
        name: 'Quantum Cloud Migration Platform',
        href: '/quantum-cloud-migration-platform',
        description: 'Intelligent cloud migration',
        icon: <Rocket className="w-4 h-4" />
      },
      {
        name: 'Autonomous Business Intelligence 2040',
        href: '/autonomous-business-intelligence-2040',
        description: 'Consciousness-driven BI',
        icon: <BarChart3 className="w-4 h-4" />,
        featured: true
      }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative micro SAAS solutions',
    badge: 'Hot',
    category: 'saas',
    color: 'from-green-500 to-emerald-500',
    children: [
      {
        name: 'AI Code Review Assistant',
        href: '/ai-code-review-assistant',
        description: 'Intelligent code review with AI',
        icon: <Code className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI Autonomous Customer Support',
        href: '/ai-autonomous-customer-support',
        description: 'Fully autonomous customer support',
        icon: <MessageCircle className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI Autonomous Marketing Platform',
        href: '/ai-autonomous-marketing-platform',
        description: 'Fully autonomous marketing',
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        name: 'AI Autonomous Sales Platform',
        href: '/ai-autonomous-sales-platform',
        description: 'Fully autonomous sales',
        icon: <DollarSign className="w-4 h-4" />
      },
      {
        name: 'Vector Search Starter',
        href: '/vector-search-starter',
        description: 'Production RAG starter',
        icon: <Search className="w-4 h-4" />
      },
      {
        name: 'Status Page & SLO Monitor',
        href: '/status-pages-slo',
        description: 'Public status pages and monitoring',
        icon: <Monitor className="w-4 h-4" />
      },
      {
        name: 'TLS Certificate Monitor',
        href: '/tls-certificate-monitor',
        description: 'Certificate expiry monitoring',
        icon: <Lock className="w-4 h-4" />
      },
      {
        name: 'SSO in a Box',
        href: '/sso-in-a-box',
        description: 'Enterprise SSO solution',
        icon: <Shield className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Comprehensive business solutions',
    category: 'solutions',
    color: 'from-indigo-500 to-purple-500',
    children: [
      {
        name: 'AI Solutions',
        href: '/ai-solutions',
        description: 'AI-powered business solutions',
        icon: <Brain className="w-4 h-4" />
      },
      {
        name: 'Quantum Solutions',
        href: '/quantum-solutions',
        description: 'Quantum computing solutions',
        icon: <Atom className="w-4 h-4" />
      },
      {
        name: 'IT Infrastructure',
        href: '/it-infrastructure',
        description: 'Enterprise IT infrastructure',
        icon: <Server className="w-4 h-4" />
      },
      {
        name: 'Cybersecurity',
        href: '/cybersecurity',
        description: 'Advanced security solutions',
        icon: <Shield className="w-4 h-4" />
      },
      {
        name: 'Cloud Migration',
        href: '/cloud-migration',
        description: 'Cloud migration services',
        icon: <Cloud className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and learning resources',
    category: 'resources',
    color: 'from-teal-500 to-cyan-500',
    children: [
      {
        name: 'Documentation',
        href: '/docs',
        description: 'Technical documentation',
        icon: <FileText className="w-4 h-4" />
      },
      {
        name: 'API Reference',
        href: '/api',
        description: 'API documentation',
        icon: <Code className="w-4 h-4" />
      },
      {
        name: 'Tutorials',
        href: '/tutorials',
        description: 'Step-by-step guides',
        icon: <GraduationCap className="w-4 h-4" />
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        description: 'Success stories',
        icon: <Star className="w-4 h-4" />
      },
      {
        name: 'Blog',
        href: '/blog',
        description: 'Latest insights and news',
        icon: <BookOpen className="w-4 h-4" />
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
        description: 'Our story and mission',
        icon: <Building className="w-4 h-4" />
      },
      {
        name: 'Team',
        href: '/team',
        description: 'Meet our team',
        icon: <Users className="w-4 h-4" />
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team',
        icon: <Briefcase className="w-4 h-4" />
      },
      {
        name: 'Partners',
        href: '/partners',
        description: 'Strategic partnerships',
        icon: <Handshake className="w-4 h-4" />
      },
      {
        name: 'News',
        href: '/news',
        description: 'Company updates',
        icon: <Newspaper className="w-4 h-4" />
      }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const UltraFuturisticNavigation2040: React.FC = () => {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-6 text-cyan-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:text-cyan-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-cyan-200 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                Visit Website
              </a>
              <span className="text-cyan-400">|</span>
              <span className="text-cyan-300">Revolutionary 2040-2041 Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-3 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-full h-full text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary 2040-2041</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-200 rounded-xl hover:bg-white/5"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
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
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
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
                              href={normalizeHref(child.href)}
                              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20' 
                                  : 'hover:bg-white/5'
                              }`}
                              onClick={closeDropdown}
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-gray-600'} p-2`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {child.name}
                                  </span>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-400">{child.description}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
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

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/revolutionary-2040-2041-pricing-showcase"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-white hover:text-cyan-400 transition-colors rounded-xl hover:bg-white/5"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
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
                          href={normalizeHref(child.href)}
                          className="block p-3 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-gray-600'} p-1.5`}>
                              {child.icon}
                            </div>
                            <span>{child.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link
                  href="/revolutionary-2040-2041-pricing-showcase"
                  className="block w-full text-center px-6 py-3 rounded-xl text-white bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="block w-full text-center px-6 py-3 rounded-xl text-cyan-400 border-2 border-cyan-400 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2040;