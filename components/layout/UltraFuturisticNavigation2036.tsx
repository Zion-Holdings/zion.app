import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles, 
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon,
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones, 
  Code, Database, Network, Server, Monitor, Smartphone,
  Camera, Gamepad2, Palette, Music, Film, BookOpenCheck,
  Building, MessageCircle, Sparkles as SparklesIcon, Zap as ZapIcon,
  Target as TargetIcon, Atom as AtomIcon, Brain as BrainIcon
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
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

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
    name: 'Micro SAAS Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions',
    badge: 'New',
    category: 'services',
    children: [
      { 
        name: 'AI & Consciousness', 
        href: '/services#ai-consciousness', 
        description: 'AI consciousness and emotional intelligence',
        icon: <BrainIcon className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Technology', 
        href: '/services#quantum', 
        description: 'Quantum computing and security',
        icon: <AtomIcon className="w-4 h-4" />
      },
      { 
        name: 'Space Technology', 
        href: '/services#space-tech', 
        description: 'Space exploration and resource mining',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'Autonomous Systems', 
        href: '/services#autonomous', 
        description: 'AI-powered autonomous operations',
        icon: <ZapIcon className="w-4 h-4" />
      },
      { 
        name: 'Emerging Tech', 
        href: '/services#emerging', 
        description: 'Cutting-edge technologies',
        icon: <SparklesIcon className="w-4 h-4" />
      },
      { 
        name: 'Business Solutions', 
        href: '/services#business', 
        description: 'Enterprise and SMB solutions',
        icon: <Building className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'AI Services',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Advanced AI and machine learning',
    badge: 'Featured',
    category: 'ai',
    featured: true,
    children: [
      { 
        name: 'AI Consciousness Evolution', 
        href: '/ai-consciousness-evolution-2029', 
        description: 'Revolutionary AI consciousness development',
        icon: <BrainIcon className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Emotional Intelligence', 
        href: '/ai-emotional-intelligence-training', 
        description: 'AI empathy and social intelligence',
        icon: <Heart className="w-4 h-4" />
      },
      { 
        name: 'AI Autonomous Operations', 
        href: '/ai-autonomous-business-operations', 
        description: 'Fully autonomous business systems',
        icon: <ZapIcon className="w-4 h-4" />
      },
      { 
        name: 'AI Research Assistant', 
        href: '/ai-autonomous-research-assistant', 
        description: 'Autonomous research and analysis',
        icon: <BookOpen className="w-4 h-4" />
      },
      { 
        name: 'AI Content Generation', 
        href: '/ai-content-generator', 
        description: 'Intelligent content creation',
        icon: <FileText className="w-4 h-4" />
      },
      { 
        name: 'AI Decision Engine', 
        href: '/ai-powered-decision-engine', 
        description: 'AI-powered decision making',
        icon: <TargetIcon className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'IT Solutions',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Enterprise IT infrastructure',
    badge: 'Enterprise',
    category: 'it',
    children: [
      { 
        name: 'Quantum-Secure Cloud', 
        href: '/quantum-secure-cloud-infrastructure', 
        description: 'Post-quantum cryptography cloud',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous IT Operations', 
        href: '/autonomous-it-operations-center', 
        description: 'AI-powered IT operations',
        icon: <Settings className="w-4 h-4" />
      },
      { 
        name: 'Edge Computing', 
        href: '/edge-computing-orchestration-platform', 
        description: 'Intelligent edge orchestration',
        icon: <Globe className="w-4 h-4" />
      },
      { 
        name: 'Blockchain Infrastructure', 
        href: '/blockchain-infrastructure-platform', 
        description: 'Enterprise blockchain solutions',
        icon: <Network className="w-4 h-4" />
      },
      { 
        name: 'AI DevOps Platform', 
        href: '/ai-powered-devops-platform', 
        description: 'Intelligent DevOps automation',
        icon: <Code className="w-4 h-4" />
      },
      { 
        name: 'Zero Trust Security', 
        href: '/zero-trust-security-platform', 
        description: 'Comprehensive zero trust security',
        icon: <ShieldIcon className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Services',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and security',
    badge: 'Quantum',
    category: 'quantum',
    children: [
      { 
        name: 'Quantum Neural Networks', 
        href: '/quantum-neural-network-platform', 
        description: 'Quantum-powered AI networks',
        icon: <BrainIcon className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Financial Trading', 
        href: '/quantum-financial-trading-platform', 
        description: 'Quantum-powered trading',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Quantum Materials Discovery', 
        href: '/quantum-materials-discovery-platform', 
        description: 'AI-powered materials discovery',
        icon: <AtomIcon className="w-4 h-4" />
      },
      { 
        name: 'Quantum Bio-Computing', 
        href: '/quantum-bio-computing-platform', 
        description: 'Quantum-biological computing',
        icon: <Database className="w-4 h-4" />
      },
      { 
        name: 'Quantum Internet Security', 
        href: '/quantum-internet-security-platform', 
        description: 'Quantum-secure internet',
        icon: <GlobeIcon className="w-4 h-4" />
      },
      { 
        name: 'Quantum Cloud Infrastructure', 
        href: '/quantum-cloud-infrastructure-platform', 
        description: 'Quantum-ready cloud platform',
        icon: <Cloud className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration and mining',
    badge: 'Space',
    category: 'space',
    children: [
      { 
        name: 'Space Resource Mining', 
        href: '/space-resource-mining-platform', 
        description: 'AI-powered space mining',
        icon: <Rocket className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Space Technology', 
        href: '/ai-powered-space-technology', 
        description: 'AI-powered space exploration',
        icon: <BrainIcon className="w-4 h-4" />
      },
      { 
        name: 'Space Tech AI Platform', 
        href: '/space-technology-ai-platform', 
        description: 'Comprehensive space AI platform',
        icon: <Cpu className="w-4 h-4" />
      },
      { 
        name: 'Virtual Event Holograms', 
        href: '/virtual-event-hologram-platform', 
        description: 'Holographic event technology',
        icon: <Camera className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Showcase & Pricing',
    href: '/comprehensive-services-showcase-2025',
    icon: <Star className="w-5 h-5" />,
    description: 'Complete services portfolio',
    badge: 'Showcase',
    category: 'showcase',
    featured: true,
    children: [
      { 
        name: 'Ultimate 2035 Services', 
        href: '/ultimate-2035-futuristic-services-showcase', 
        description: 'Revolutionary future technology',
        icon: <SparklesIcon className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Ultimate 2025 Micro SAAS', 
        href: '/ultimate-2025-micro-saas-showcase', 
        description: 'Latest innovative services',
        icon: <Rocket className="w-4 h-4" />,
        featured: true
      },
      { 
        name: '2026 Services', 
        href: '/revolutionary-2026-services', 
        description: 'Next generation solutions',
        icon: <ZapIcon className="w-4 h-4" />
      },
      { 
        name: '2027 Services', 
        href: '/revolutionary-2027-services-showcase', 
        description: 'Future-ready services',
        icon: <TargetIcon className="w-4 h-4" />
      },
      { 
        name: 'Market Pricing', 
        href: '/market-pricing', 
        description: 'Average market prices & references',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Revolutionary 2026 Pricing', 
        href: '/revolutionary-2026-pricing', 
        description: 'Next-gen pricing models',
        icon: <BarChart3 className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Specialized Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    category: 'solutions',
    children: [
      { 
        name: 'SOC 2 Compliance', 
        href: '/soc2-compliance-automation', 
        description: 'Automated compliance evidence',
        icon: <ShieldIcon className="w-4 h-4" />
      },
      { 
        name: 'RAG Evaluation Lab', 
        href: '/rag-evaluation-lab', 
        description: 'RAG quality measurement',
        icon: <BrainIcon className="w-4 h-4" />
      },
      { 
        name: 'Browser Automation', 
        href: '/browser-automation-cloud', 
        description: 'Scalable browser automation',
        icon: <Globe className="w-4 h-4" />
      },
      { 
        name: 'Secrets Rotation', 
        href: '/secrets-rotation-automation', 
        description: 'Automated key rotation',
        icon: <Lock className="w-4 h-4" />
      },
      { 
        name: 'API Performance Testing', 
        href: '/api-performance-testing', 
        description: 'Load testing with CI gates',
        icon: <ZapIcon className="w-4 h-4" />
      },
      { 
        name: 'SEO Automation Suite', 
        href: '/seo-automation-suite', 
        description: 'Technical SEO automation',
        icon: <TrendingUp className="w-4 h-4" />
      }
    ]
  }
];

export default function UltraFuturisticNavigation2036() {
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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-black/40 backdrop-blur-lg border-b border-white/5'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-white/80">
            <div className="flex items-center space-x-4">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{contactInfo.address}</span>
              </span>
              <a href={contactInfo.website} className="hover:text-cyan-400 transition-colors">
                {contactInfo.website.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl shadow-lg shadow-cyan-500/25"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-500/50 rounded-xl animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ZionTech Group
              </span>
              <span className="text-xs text-white/60">Future Technology Solutions</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeDropdown === item.name
                      ? 'text-cyan-400 bg-white/10 border border-cyan-400/30'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                          <p className="text-white/60 text-sm">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeAllDropdowns}
                              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                                child.featured
                                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30'
                                  : 'hover:bg-white/5'
                              }`}
                            >
                              {child.icon}
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="text-white font-medium">{child.name}</span>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-white/60 text-sm">{child.description}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-white/40" />
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
            <Link
              href="/contact"
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          onClick={closeAllDropdowns}
                          className="flex items-center space-x-3 p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {child.icon}
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={closeAllDropdowns}
                  className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}