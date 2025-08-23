import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Star, Sparkles, 
  Grid, List, TrendingUp, 
  Calendar, Calculator, GraduationCap,
  Cpu, Cloud, Settings, Monitor, Palette, Network, Layers, Code, Heart, ShoppingCart, Clock, MessageCircle, HelpCircle, Building,
  Zap, Users, Database, Lock, ShieldCheck, CpuIcon, Server, Wifi, Smartphone, Watch, Camera, Video, Music, Gamepad2
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
    name: 'Micro SAAS Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions',
    badge: 'New',
    category: 'services',
    color: 'from-emerald-500 to-cyan-500',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI & Consciousness', 
        href: '/ai-services', 
        description: 'Advanced AI solutions',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Space Technology', 
        href: '/space-technology', 
        description: 'Space exploration solutions',
        icon: <Rocket className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        name: 'IT Solutions', 
        href: '/it-services', 
        description: 'Enterprise IT infrastructure',
        icon: <Cpu className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
      },
      { 
        name: 'Specialized Solutions', 
        href: '/solutions', 
        description: 'Industry-specific solutions',
        icon: <Target className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      }
    ]
  },
  {
    name: 'AI Services',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI platforms',
    badge: 'Featured',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      {
        name: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution-2038',
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true,
        badge: 'New'
      },
      {
        name: 'Quantum AI Fusion',
        href: '/quantum-ai-fusion-platform',
        description: 'Quantum-AI hybrid computing',
        icon: <Atom className="w-4 h-4" />,
        badge: 'Revolutionary'
      },
      {
        name: 'Autonomous AI Ecosystem',
        href: '/autonomous-ai-ecosystem-manager',
        description: 'Self-managing AI systems',
        icon: <Settings className="w-4 h-4" />
      },
      {
        name: 'AI Emotional Intelligence',
        href: '/ai-emotional-intelligence-coach-2038',
        description: 'Advanced EQ development',
        icon: <Heart className="w-4 h-4" />
      },
      {
        name: 'AI Predictive Maintenance',
        href: '/ai-predictive-maintenance-platform-2038',
        description: 'Intelligent maintenance',
        icon: <Monitor className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Services',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing solutions',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      {
        name: 'Quantum Cloud Infrastructure',
        href: '/quantum-cloud-infrastructure-platform',
        description: 'Quantum-enhanced cloud computing',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Quantum Cybersecurity',
        href: '/quantum-cybersecurity-threat-hunter',
        description: 'Future-proof security',
        icon: <ShieldCheck className="w-4 h-4" />
      },
      {
        name: 'Quantum Financial Risk',
        href: '/quantum-financial-risk-analyzer',
        description: 'Advanced risk analysis',
        icon: <DollarSign className="w-4 h-4" />
      },
      {
        name: 'Quantum Materials',
        href: '/quantum-materials-simulation-platform',
        description: 'Materials discovery',
        icon: <Layers className="w-4 h-4" />
      },
      {
        name: 'Quantum IoT Security',
        href: '/quantum-iot-security-platform',
        description: 'IoT protection',
        icon: <Wifi className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'IT Solutions',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Enterprise IT infrastructure',
    category: 'it',
    color: 'from-orange-500 to-red-500',
    children: [
      {
        name: 'Autonomous DevOps',
        href: '/autonomous-devops-intelligence-platform',
        description: 'AI-powered DevOps',
        icon: <Code className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Edge Computing',
        href: '/edge-computing-orchestration-platform',
        description: 'Edge computing management',
        icon: <Network className="w-4 h-4" />
      },
      {
        name: 'Quantum Network Security',
        href: '/quantum-network-security-platform',
        description: 'Network protection',
        icon: <Shield className="w-4 h-4" />
      },
      {
        name: 'AI Data Governance',
        href: '/ai-powered-data-governance-platform',
        description: 'Intelligent data management',
        icon: <Database className="w-4 h-4" />
      },
      {
        name: 'Quantum Database',
        href: '/quantum-database-optimization-platform',
        description: 'Database optimization',
        icon: <Server className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration solutions',
    category: 'space',
    color: 'from-indigo-500 to-purple-500',
    children: [
      {
        name: 'AI Space Mission Planner',
        href: '/ai-powered-space-mission-planner',
        description: 'Intelligent mission planning',
        icon: <Rocket className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Space Resource Mining',
        href: '/space-resource-mining-platform',
        description: 'Resource extraction',
        icon: <Target className="w-4 h-4" />
      },
      {
        name: 'Space Technology AI',
        href: '/ai-powered-space-technology',
        description: 'AI space solutions',
        icon: <Brain className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    category: 'solutions',
    color: 'from-green-500 to-emerald-500',
    children: [
      {
        name: 'Healthcare AI',
        href: '/healthcare-ai-solutions',
        description: 'Healthcare technology',
        icon: <Heart className="w-4 h-4" />
      },
      {
        name: 'Financial Solutions',
        href: '/financial-solutions',
        description: 'Fintech innovations',
        icon: <DollarSign className="w-4 h-4" />
      },
      {
        name: 'Government Technology',
        href: '/government-technology-solutions',
        description: 'Public sector solutions',
        icon: <Building className="w-4 h-4" />
      },
      {
        name: 'Entertainment & Media',
        href: '/entertainment-media-solutions',
        description: 'Media technology',
        icon: <Video className="w-4 h-4" />
      }
    ]
  }
];

const UltraFuturisticNavigation2038: React.FC = () => {
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
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+13024640950" 
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
              <div className="flex items-center text-blue-400">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Get Quote
              </a>
              <a href="/demo" className="text-purple-400 hover:text-purple-300 transition-colors">
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Future Technology Solutions</p>
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
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeDropdown}
                              className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-200"
                            >
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                child.color ? `bg-gradient-to-r ${child.color}` : 'bg-gray-700'
                              }`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                    {child.name}
                                  </h3>
                                  {child.badge && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                  {child.description}
                                </p>
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
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/quote"
              className="px-6 py-2 border border-cyan-500/30 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          onClick={() => {
                            setIsOpen(false);
                            closeDropdown();
                          }}
                          className="block p-3 text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-cyan-500/20 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/quote"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-3 border border-cyan-500/30 text-cyan-400 rounded-full font-semibold text-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2038;