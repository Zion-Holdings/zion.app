import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2,
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon
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
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum AI Neural Networks 2046', 
        href: '/quantum-ai-neural-network-platform-2046', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'AI Autonomous Business Intelligence 2046', 
        href: '/autonomous-ai-business-intelligence-platform-2046', 
        description: 'AI-powered business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cybersecurity Intelligence 2046', 
        href: '/quantum-cybersecurity-intelligence-platform-2046', 
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Autonomous Healthcare AI 2046', 
        href: '/autonomous-healthcare-ai-platform-2046', 
        description: 'AI-powered healthcare',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500'
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
        name: 'AI Consciousness Evolution', 
        href: '/ai-consciousness-evolution-platform-2046', 
        description: 'Develop true AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum AI Neural Networks', 
        href: '/quantum-ai-neural-network-platform-2046', 
        description: 'Quantum-powered neural networks',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous AI Research', 
        href: '/autonomous-ai-research-platform-2046', 
        description: 'AI-driven scientific discovery',
        icon: <Eye className="w-4 h-4" />
      },
      { 
        name: 'Emotional AI Intelligence', 
        href: '/emotional-ai-intelligence-platform-2046', 
        description: 'Human-like emotional understanding',
        icon: <Heart className="w-4 h-4" />
      },
      { 
        name: 'Quantum AI Metaverse', 
        href: '/quantum-ai-metaverse-platform-2046', 
        description: 'Quantum-powered virtual worlds',
        icon: <Globe className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing solutions',
    badge: '2046',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      { 
        name: 'Quantum Cloud Infrastructure', 
        href: '/quantum-cloud-infrastructure-platform-2046', 
        description: 'Quantum-powered cloud computing',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Cybersecurity', 
        href: '/quantum-cybersecurity-intelligence-platform-2046', 
        description: 'Quantum-secure operations',
        icon: <Shield className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Space Intelligence', 
        href: '/quantum-space-resource-intelligence-platform-2046', 
        description: 'Space exploration with quantum tech',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'Quantum Data Centers', 
        href: '/quantum-data-center-management-platform-2046', 
        description: 'Quantum-powered data management',
        icon: <Database className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'IT Infrastructure',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced IT infrastructure solutions',
    badge: '2046',
    category: 'it',
    color: 'from-yellow-500 to-orange-500',
    children: [
      { 
        name: 'Autonomous DevOps', 
        href: '/autonomous-devops-intelligence-platform-2046', 
        description: 'AI-powered DevOps automation',
        icon: <Code className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous Network Management', 
        href: '/autonomous-network-management-platform-2046', 
        description: 'Self-managing networks',
        icon: <Network className="w-4 h-4" />
      },
      { 
        name: 'Autonomous Security Operations', 
        href: '/autonomous-security-operations-center-2046', 
        description: 'AI-driven security monitoring',
        icon: <Shield className="w-4 h-4" />
      },
      { 
        name: 'Quantum IT Service Management', 
        href: '/quantum-it-service-management-platform-2046', 
        description: 'Quantum-powered IT services',
        icon: <Settings className="w-4 h-4" />
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
        name: 'AI Financial Intelligence', 
        href: '/ai-quantum-financial-intelligence-platform-2046', 
        description: 'Quantum-powered financial analysis',
        icon: <DollarSign className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous Manufacturing', 
        href: '/autonomous-manufacturing-ai-platform-2046', 
        description: 'AI-driven production optimization',
        icon: <Building className="w-4 h-4" />
      },
      { 
        name: 'Autonomous Education', 
        href: '/autonomous-education-ai-platform-2046', 
        description: 'AI-powered personalized learning',
        icon: <Users className="w-4 h-4" />
      },
      { 
        name: 'AI Business Intelligence', 
        href: '/autonomous-ai-business-intelligence-platform-2046', 
        description: 'Autonomous business insights',
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
    color: 'from-gray-500 to-gray-600',
    children: [
      { 
        name: 'About Us', 
        href: '/about', 
        description: 'Our story and mission',
        icon: <Building className="w-4 h-4" />
      },
      { 
        name: 'Our Team', 
        href: '/team', 
        description: 'Meet our experts',
        icon: <Users className="w-4 h-4" />
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Award className="w-4 h-4" />
      },
      { 
        name: 'News & Updates', 
        href: '/news', 
        description: 'Latest developments',
        icon: <TrendingUp className="w-4 h-4" />
      },
      { 
        name: 'Contact Us', 
        href: '/contact', 
        description: 'Get in touch',
        icon: <Mail className="w-4 h-4" />
      }
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

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-purple-900/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-cyan-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-200 transition-colors">
                <PhoneIcon className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-200 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                Visit Website
              </a>
              <a href="/contact" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Zion Tech Group
                </div>
                <div className="text-xs text-cyan-400 font-semibold">2046</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl z-50"
                      onMouseLeave={closeDropdown}
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                child.color ? `bg-gradient-to-r ${child.color}` : 'bg-gray-700'
                              }`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {child.name}
                                  </span>
                                  {child.featured && (
                                    <Star className="w-4 h-4 text-yellow-400" />
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
              href="/contact"
              className="px-6 py-3 text-cyan-400 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/get-started"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          className="block p-3 rounded-lg hover:bg-white/5 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              child.color ? `bg-gradient-to-r ${child.color}` : 'bg-gray-700'
                            }`}>
                              {child.icon}
                            </div>
                            <div>
                              <div className="font-medium text-white">{child.name}</div>
                              <div className="text-sm text-gray-400">{child.description}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 text-center text-cyan-400 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/get-started"
                  className="block w-full px-4 py-3 text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
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