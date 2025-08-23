import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom,
  DollarSign, Star, 
  Cpu, Building,
  Grid, FileText, Globe, Shield,
  TrendingUp, Lock, Cloud, Database, Network,
  Settings, Search
} from 'lucide-react';
import Link from 'next/link';

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
  price?: string;
  new?: boolean;
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



const Heart = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const navigationItems: NavigationItem[] = [
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Advanced AI consciousness solutions',
    badge: 'Hot',
    category: 'ai',
    new: true,
    children: [
      { 
        name: 'AI Consciousness Evolution', 
        href: '/ai-consciousness-evolution-platform', 
        description: 'Advanced AI consciousness development',
        icon: <Brain className="w-4 h-4" />,
        featured: true,
        price: '$8,999/month'
      },
      { 
        name: 'AI Emotional Intelligence', 
        href: '/ai-emotional-intelligence-orchestrator', 
        description: 'AI empathy and social understanding',
        icon: <Heart className="w-4 h-4" />,
        price: '$6,999/month'
      },
      { 
        name: 'AI Content Factory', 
        href: '/ai-autonomous-content-factory', 
        description: 'Autonomous content creation',
        icon: <FileText className="w-4 h-4" />,
        price: '$1,299/month'
      },
      { 
        name: 'AI Autonomous DevOps', 
        href: '/ai-autonomous-devops-orchestrator', 
        description: 'Fully autonomous DevOps operations',
        icon: <Cpu className="w-4 h-4" />,
        price: '$14,999/month'
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing solutions',
    badge: 'New',
    category: 'quantum',
    new: true,
    children: [
      { 
        name: 'Quantum Neural Fusion', 
        href: '/quantum-neural-fusion-platform', 
        description: 'Quantum-enhanced neural networks',
        icon: <Atom className="w-4 h-4" />,
        featured: true,
        price: '$12,999/month'
      },
      { 
        name: 'Quantum Cybersecurity', 
        href: '/quantum-cybersecurity-command-center', 
        description: 'Quantum-powered security operations',
        icon: <Shield className="w-4 h-4" />,
        price: '$22,999/month'
      },
      { 
        name: 'Quantum Financial Time Travel', 
        href: '/quantum-financial-time-travel', 
        description: 'Multi-dimensional financial analysis',
        icon: <DollarSign className="w-4 h-4" />,
        price: '$19,999/month'
      },
      { 
        name: 'Quantum Materials Discovery', 
        href: '/quantum-materials-discovery-engine', 
        description: 'Quantum-powered materials science',
        icon: <Search className="w-4 h-4" />,
        price: '$15,999/month'
      }
    ]
  },
  {
    name: 'Space & Metaverse',
    href: '/space-metaverse',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space technology and metaverse solutions',
    badge: 'Future',
    category: 'space',
    new: true,
    children: [
      { 
        name: 'Autonomous Space Colony Manager', 
        href: '/autonomous-space-colony-manager', 
        description: 'AI-powered space colony operations',
        icon: <Rocket className="w-4 h-4" />,
        featured: true,
        price: '$25,999/month'
      },
      { 
        name: 'Metaverse Consciousness Hub', 
        href: '/metaverse-consciousness-hub', 
        description: 'Digital consciousness integration',
        icon: <Globe className="w-4 h-4" />,
        price: '$8,499/month'
      },
      { 
        name: 'Space Resource Mining', 
        href: '/space-resource-mining-platform', 
        description: 'Autonomous space resource extraction',
        icon: <Target className="w-4 h-4" />,
        price: '$18,999/month'
      }
    ]
  },
  {
    name: 'Enterprise Solutions',
    href: '/enterprise-solutions',
    icon: <Building className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure',
    category: 'enterprise',
    children: [
      { 
        name: 'Autonomous Enterprise Architecture', 
        href: '/autonomous-enterprise-architecture-evolution', 
        description: 'Self-evolving enterprise architecture',
        icon: <Building className="w-4 h-4" />,
        featured: true,
        price: '$18,999/month'
      },
      { 
        name: 'Quantum Data Governance', 
        href: '/quantum-data-governance-platform', 
        description: 'Quantum-enhanced data governance',
        icon: <Database className="w-4 h-4" />,
        price: '$16,999/month'
      },
      { 
        name: 'Autonomous Cloud Cost Optimizer', 
        href: '/autonomous-cloud-cost-optimizer', 
        description: 'AI-powered cloud optimization',
        icon: <Cloud className="w-4 h-4" />,
        price: '$12,999/month'
      },
      { 
        name: 'Quantum Network Operations', 
        href: '/quantum-network-operations-center', 
        description: 'Quantum-enhanced network management',
        icon: <Network className="w-4 h-4" />,
        price: '$19,999/month'
      }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Specialized business solutions',
    category: 'micro-saas',
    children: [
      { 
        name: 'Autonomous Supply Chain Evolution', 
        href: '/autonomous-supply-chain-evolution', 
        description: 'Self-evolving supply chain optimization',
        icon: <TrendingUp className="w-4 h-4" />,
        featured: true,
        price: '$9,999/month'
      },
      { 
        name: 'AI Autonomous Compliance Manager', 
        href: '/ai-autonomous-compliance-manager', 
        description: 'Fully autonomous compliance management',
        icon: <Shield className="w-4 h-4" />,
        price: '$13,999/month'
      },
      { 
        name: 'Quantum IoT Security Fabric', 
        href: '/quantum-iot-security-fabric', 
        description: 'Quantum-resistant IoT security',
        icon: <Lock className="w-4 h-4" />,
        price: '$4,999/month'
      },
      { 
        name: 'AI Autonomous ITSM', 
        href: '/autonomous-it-service-management', 
        description: 'Fully autonomous IT service management',
        icon: <Settings className="w-4 h-4" />,
        price: '$15,999/month'
      }
    ]
  },
  {
    name: 'All Services',
    href: '/services',
    icon: <Grid className="w-5 h-5" />,
    description: 'Complete services overview',
    category: 'overview',
    children: [
      { 
        name: 'Complete Services Catalog', 
        href: '/services', 
        description: 'All available services',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: '2025 Services Showcase', 
        href: '/comprehensive-2025-services-showcase', 
        description: 'Current service portfolio',
        icon: <Star className="w-4 h-4" />
      },
      { 
        name: 'Pricing & Plans', 
        href: '/market-pricing', 
        description: 'Service pricing and packages',
        icon: <DollarSign className="w-4 h-4" />
      }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const UltraFuturisticNavigation2037: React.FC = () => {
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/90 to-purple-900/90 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-cyan-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                Get Quote
              </Link>
              <Link href="/support" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    Z
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="hidden md:block">
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-xs text-gray-400">Innovation 2037</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.new && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full">
                        NEW
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
                        className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
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
                                onClick={closeMenu}
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                    {child.icon}
                                  </div>
                                  <div>
                                    <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                                      {child.name}
                                    </div>
                                    <div className="text-sm text-gray-400">{child.description}</div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full">
                                      Featured
                                    </span>
                                  )}
                                  {child.price && (
                                    <span className="text-sm text-cyan-400 font-medium">
                                      {child.price}
                                    </span>
                                  )}
                                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
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

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact">
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeMenu} />
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-white">Menu</h2>
                  <button onClick={closeMenu} className="text-gray-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="space-y-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            onClick={closeMenu}
                            className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="text-cyan-400">{child.icon}</div>
                                <div>
                                  <div className="font-medium text-white">{child.name}</div>
                                  <div className="text-sm text-gray-400">{child.description}</div>
                                </div>
                              </div>
                              {child.price && (
                                <span className="text-sm text-cyan-400 font-medium">
                                  {child.price}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <Link href="/contact">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};



export default UltraFuturisticNavigation2037;