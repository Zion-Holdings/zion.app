import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2, Truck,
  FileText, Space
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
    name: 'Revolutionary Services 2046',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: 'New 2046',
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
        name: 'AI Consciousness Evolution 2046', 
        href: '/ai-consciousness-evolution-platform-2046', 
        description: 'Next-generation AI consciousness with quantum computing',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum AI Neural Network 2046', 
        href: '/quantum-ai-neural-network-platform-2046', 
        description: 'Quantum-powered AI neural networks with consciousness',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'Autonomous Quantum Business Intelligence 2046', 
        href: '/autonomous-quantum-business-intelligence-suite-2046', 
        description: 'Fully autonomous quantum business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cybersecurity Intelligence 2046', 
        href: '/quantum-cybersecurity-intelligence-platform-2046', 
        description: 'Quantum-resistant security with AI consciousness',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Autonomous Quantum DevOps Intelligence 2046', 
        href: '/autonomous-quantum-devops-intelligence-2046', 
        description: 'AI-powered quantum DevOps optimization',
        icon: <Code className="w-4 h-4" />,
        color: 'from-yellow-500 to-orange-500'
      },
      { 
        name: 'Quantum Cloud Infrastructure 2046', 
        href: '/quantum-cloud-infrastructure-platform-2046', 
        description: 'Quantum-powered cloud with consciousness',
        icon: <Cloud className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        name: 'Quantum Space Resource Intelligence 2046', 
        href: '/quantum-space-resource-intelligence-platform-2046', 
        description: 'Quantum-powered space resource intelligence',
        icon: <Globe className="w-4 h-4" />,
        color: 'from-cyan-500 to-blue-500'
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
        name: 'AI Consciousness Evolution 2046', 
        href: '/ai-consciousness-evolution-platform-2046', 
        description: 'Next-generation AI consciousness evolution',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum AI Neural Network 2046', 
        href: '/quantum-ai-neural-network-platform-2046', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous AI Research 2046', 
        href: '/autonomous-ai-research-platform-2046', 
        description: 'Fully autonomous AI research platform',
        icon: <Eye className="w-4 h-4" />
      },
      { 
        name: 'Emotional AI Intelligence 2046', 
        href: '/emotional-ai-intelligence-platform-2046', 
        description: 'Quantum-powered emotional AI intelligence',
        icon: <Heart className="w-4 h-4" />
      },
      { 
        name: 'Quantum AI Metaverse 2046', 
        href: '/quantum-ai-metaverse-platform-2046', 
        description: 'Quantum-powered AI metaverse platform',
        icon: <Globe2 className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-technology',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing solutions',
    badge: '2046',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      { 
        name: 'Quantum Cloud Infrastructure 2046', 
        href: '/quantum-cloud-infrastructure-platform-2046', 
        description: 'Quantum-powered cloud infrastructure',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Cybersecurity Intelligence 2046', 
        href: '/quantum-cybersecurity-intelligence-platform-2046', 
        description: 'Quantum-resistant cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Space Resource Intelligence 2046', 
        href: '/quantum-space-resource-intelligence-platform-2046', 
        description: 'Quantum-powered space resource intelligence',
        icon: <Globe className="w-4 h-4" />
      },
      { 
        name: 'Quantum AI Neural Network 2046', 
        href: '/quantum-ai-neural-network-platform-2046', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Business Solutions',
    href: '/business-solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Enterprise business solutions',
    badge: '2046',
    category: 'business',
    color: 'from-emerald-500 to-teal-500',
    children: [
      { 
        name: 'Autonomous Quantum Business Intelligence 2046', 
        href: '/autonomous-quantum-business-intelligence-suite-2046', 
        description: 'Fully autonomous quantum business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Quantum Content Intelligence 2046', 
        href: '/ai-quantum-content-intelligence-platform-2046', 
        description: 'Quantum-powered content intelligence',
        icon: <Brain className="w-4 h-4" />
      },
      { 
        name: 'Quantum Customer Success Automation 2046', 
        href: '/quantum-customer-success-automation-2046', 
        description: 'Quantum-powered customer success',
        icon: <Heart className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'IT Infrastructure',
    href: '/it-infrastructure',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced IT infrastructure solutions',
    badge: '2046',
    category: 'it',
    color: 'from-yellow-500 to-orange-500',
    children: [
      { 
        name: 'Autonomous Quantum DevOps Intelligence 2046', 
        href: '/autonomous-quantum-devops-intelligence-2046', 
        description: 'AI-powered quantum DevOps optimization',
        icon: <Code className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous Quantum Data Center Management 2046', 
        href: '/autonomous-quantum-data-center-management-2046', 
        description: 'Quantum-powered data center management',
        icon: <Server className="w-4 h-4" />
      },
      { 
        name: 'Quantum Network Management Intelligence 2046', 
        href: '/quantum-network-management-intelligence-2046', 
        description: 'Quantum-powered network management',
        icon: <Network className="w-4 h-4" />
      },
      { 
        name: 'Autonomous Quantum IT Service Management 2046', 
        href: '/autonomous-quantum-it-service-management-2046', 
        description: 'Quantum-powered IT service management',
        icon: <Settings className="w-4 h-4" />
      },
      { 
        name: 'Quantum Security Operations Center 2046', 
        href: '/quantum-security-operations-center-2046', 
        description: 'Quantum-powered security operations',
        icon: <Shield className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'company',
    color: 'from-gray-500 to-gray-600',
    children: [
      { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
      { name: 'Our Mission', href: '/mission', icon: <Target className="w-4 h-4" /> },
      { name: 'Leadership Team', href: '/team', icon: <Users className="w-4 h-4" /> },
      { name: 'Careers', href: '/careers', icon: <Users className="w-4 h-4" /> },
      { name: 'News & Updates', href: '/news', icon: <Sparkles className="w-4 h-4" /> },
      { name: 'Press Kit', href: '/press', icon: <FileText className="w-4 h-4" /> }
    ]
  }
];

const UltraFuturisticNavigation2046: React.FC = () => {
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

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-purple-900/80 border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-cyan-300">Revolutionary Technology 2046</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeAllDropdowns}>
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gradient group-hover:text-gradient-cyan transition-colors">
                Zion Tech Group
              </div>
              <div className="text-xs text-cyan-400 font-medium">Revolutionary Technology 2046</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-3 text-white hover:text-cyan-300 transition-colors rounded-xl hover:bg-white/5"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
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
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
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
                              onClick={closeAllDropdowns}
                              className={`flex items-start space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20' 
                                  : 'hover:bg-white/5'
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                child.color 
                                  ? `bg-gradient-to-br ${child.color}` 
                                  : 'bg-gray-700'
                              }`}>
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h4 className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                                    {child.name}
                                  </h4>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-400 line-clamp-2">{child.description}</p>
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

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-3 text-cyan-300 hover:text-cyan-200 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/services"
              className="btn-futuristic px-6 py-3 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-300 transition-colors"
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-400/20 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:text-cyan-300 transition-colors rounded-xl hover:bg-white/5"
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
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="mt-2 ml-8 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          onClick={closeAllDropdowns}
                          className="block px-4 py-2 text-gray-300 hover:text-cyan-300 transition-colors rounded-lg hover:bg-white/5"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-cyan-400/20">
                <Link
                  href="/contact"
                  onClick={closeAllDropdowns}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
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
};

export default UltraFuturisticNavigation2046;