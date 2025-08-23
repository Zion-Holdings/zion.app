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
    name: 'AI & Machine Learning',
    href: '/ai-services',
    icon: <BrainIcon className="w-5 h-5" />,
    description: 'Advanced AI solutions',
    badge: 'AI',
    category: 'ai',
    featured: true,
    children: [
      { 
        name: 'AI Content Orchestrator', 
        href: '/ai-content-orchestrator', 
        description: 'Intelligent content creation and management',
        icon: <BrainIcon className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Legal Assistant', 
        href: '/ai-legal-assistant', 
        description: 'Legal research and document automation',
        icon: <FileText className="w-4 h-4" />
      },
      { 
        name: 'AI Healthcare Diagnostics', 
        href: '/ai-healthcare-diagnostics', 
        description: 'Medical imaging and diagnostic platform',
        icon: <Heart className="w-4 h-4" />
      },
      { 
        name: 'AI Creative Studio', 
        href: '/ai-creative-studio', 
        description: 'AI-driven content creation platform',
        icon: <Palette className="w-4 h-4" />
      },
      { 
        name: 'AI Supply Chain Optimizer', 
        href: '/ai-supply-chain-optimizer', 
        description: 'Intelligent supply chain optimization',
        icon: <Truck className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <AtomIcon className="w-5 h-5" />,
    description: 'Quantum computing solutions',
    badge: 'Quantum',
    category: 'quantum',
    featured: true,
    children: [
      { 
        name: 'Quantum Cybersecurity Suite', 
        href: '/quantum-cybersecurity-suite', 
        description: 'Quantum-resistant security platform',
        icon: <Shield className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Machine Learning', 
        href: '/quantum-machine-learning-platform', 
        description: 'Quantum-enhanced ML solutions',
        icon: <BrainIcon className="w-4 h-4" />
      },
      { 
        name: 'Quantum Financial Modeling', 
        href: '/quantum-financial-modeling', 
        description: 'Quantum-powered financial analysis',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Quantum Optimization Engine', 
        href: '/quantum-optimization-engine', 
        description: 'Quantum-powered optimization',
        icon: <TargetIcon className="w-4 h-4" />
      },
      { 
        name: 'Quantum Cryptography', 
        href: '/quantum-cryptography-platform', 
        description: 'Unbreakable quantum encryption',
        icon: <Lock className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration solutions',
    badge: 'Space',
    category: 'space',
    children: [
      { 
        name: 'Space Data Analytics', 
        href: '/space-data-analytics-platform', 
        description: 'Satellite data processing platform',
        icon: <BarChart3 className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Space Mining Operations', 
        href: '/space-mining-operations-platform', 
        description: 'Space resource extraction management',
        icon: <Truck className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Blockchain & Web3',
    href: '/blockchain-services',
    icon: <GlobeIcon className="w-5 h-5" />,
    description: 'Decentralized solutions',
    badge: 'Web3',
    category: 'blockchain',
    children: [
      { 
        name: 'Blockchain Governance', 
        href: '/blockchain-governance-platform', 
        description: 'Decentralized governance system',
        icon: <Users className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Blockchain Supply Chain', 
        href: '/blockchain-supply-chain-tracking', 
        description: 'Transparent supply chain tracking',
        icon: <Truck className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Edge Computing',
    href: '/edge-computing',
    icon: <ZapIcon className="w-5 h-5" />,
    description: 'Edge computing solutions',
    badge: 'Edge',
    category: 'edge',
    children: [
      { 
        name: 'Edge Computing Orchestrator', 
        href: '/edge-computing-orchestrator', 
        description: 'Intelligent edge management',
        icon: <Server className="w-4 h-4" />,
        featured: true
      }
    ]
  },
  {
    name: 'Metaverse & VR',
    href: '/metaverse-services',
    icon: <Globe className="w-5 h-5" />,
    description: 'Virtual reality solutions',
    badge: 'VR',
    category: 'metaverse',
    children: [
      { 
        name: 'Metaverse Development Studio', 
        href: '/metaverse-development-studio', 
        description: 'Complete metaverse creation platform',
        icon: <Gamepad2 className="w-4 h-4" />,
        featured: true
      }
    ]
  },
  {
    name: 'Services Showcase',
    href: '/revolutionary-2037-services-showcase',
    icon: <Star className="w-5 h-5" />,
    description: 'Complete services portfolio',
    badge: 'Showcase',
    category: 'showcase',
    featured: true,
    children: [
      { 
        name: '2037 Services Showcase', 
        href: '/revolutionary-2037-services-showcase', 
        description: 'Complete 2037 services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Pricing Plans', 
        href: '/pricing', 
        description: 'Service pricing information',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Market Pricing', 
        href: '/market-pricing', 
        description: 'Market price references',
        icon: <BarChart3 className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'company',
    children: [
      { 
        name: 'About Us', 
        href: '/about', 
        description: 'Company information',
        icon: <Building className="w-4 h-4" />
      },
      { 
        name: 'Contact', 
        href: '/contact', 
        description: 'Get in touch',
        icon: <MessageCircle className="w-4 h-4" />
      },
      { 
        name: 'Partners', 
        href: '/partners', 
        description: 'Partnership opportunities',
        icon: <Users className="w-4 h-4" />
      },
      { 
        name: 'Investors', 
        href: '/investors', 
        description: 'Investment information',
        icon: <DollarSign className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge & support',
    category: 'resources',
    children: [
      { 
        name: 'Documentation', 
        href: '/docs', 
        description: 'Technical documentation',
        icon: <FileText className="w-4 h-4" />
      },
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Latest insights',
        icon: <BookOpen className="w-4 h-4" />
      },
      { 
        name: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories',
        icon: <Award className="w-4 h-4" />
      },
      { 
        name: 'Support', 
        href: '/support', 
        description: 'Technical support',
        icon: <HelpCircle className="w-4 h-4" />
      }
    ]
  }
];

export default function UltraFuturisticNavigation2037() {
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

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-500/20"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeDropdown}
                              className="group flex items-center p-3 rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-200">
                                {child.icon}
                              </div>
                              <div className="ml-3 flex-1">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {child.name}
                                  </p>
                                  {child.featured && (
                                    <span className="text-xs text-cyan-400 font-semibold">FEATURED</span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-400 mt-1">
                                  {child.description}
                                </p>
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

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-200"
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
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
                        transition={{ duration: 0.3 }}
                        className="ml-8 mt-2 space-y-2"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            onClick={() => {
                              setIsOpen(false);
                              closeDropdown();
                            }}
                            className="block px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-colors duration-200"
                          >
                            <div className="flex items-center space-x-3">
                              {child.icon}
                              <span className="text-sm">{child.name}</span>
                              {child.featured && (
                                <span className="text-xs text-cyan-400 font-semibold">FEATURED</span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 mt-1 ml-7">
                              {child.description}
                            </p>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Mobile Contact */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Call {contactInfo.mobile}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}