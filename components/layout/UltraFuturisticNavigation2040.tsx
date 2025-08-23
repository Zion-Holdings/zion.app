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
  Zap, Infinity, Eye, Heart as HeartIcon, Code as CodeIcon, Palette as PaletteIcon,
  BookOpen, FileText, Handshake, Users, Wrench, Dna, Car
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

interface UltraFuturisticNavigation2040Props {
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
      },
      { 
        name: 'AI Autonomous Research 2041', 
        href: '/ai-autonomous-research-2041', 
        description: 'Autonomous AI research systems',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'AI Content Personalization 2041', 
        href: '/ai-content-personalization-2041', 
        description: 'Conscious content personalization',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500'
      },
      { 
        name: 'AI Ethics & Governance 2041', 
        href: '/ai-ethics-governance-2041', 
        description: 'Ethical AI governance',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-green-500 to-blue-500'
      },
      { 
        name: 'AI Autonomous Ecosystem 2041', 
        href: '/ai-autonomous-ecosystem-2041', 
        description: 'Autonomous AI ecosystems',
        icon: <Network className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        name: 'AI Predictive Maintenance 2041', 
        href: '/ai-predictive-maintenance-2041', 
        description: 'Predictive maintenance AI',
        icon: <Wrench className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
      },
      { 
        name: 'AI Customer Success 2041', 
        href: '/ai-customer-success-2041', 
        description: 'Customer success AI',
        icon: <Users className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'AI Sales Intelligence 2041', 
        href: '/ai-sales-intelligence-2041', 
        description: 'Sales intelligence AI',
        icon: <TrendingUp className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Internet Security 2041', 
        href: '/quantum-internet-security-2041', 
        description: 'Quantum internet security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Quantum Cloud Infrastructure 2041', 
        href: '/quantum-cloud-infrastructure-2041', 
        description: 'Quantum cloud infrastructure',
        icon: <Cloud className="w-4 h-4" />,
        color: 'from-cyan-500 to-blue-500'
      },
      { 
        name: 'Quantum Bio-Computing 2041', 
        href: '/quantum-bio-computing-2041', 
        description: 'Quantum bio-computing',
        icon: <Dna className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Autonomous Vehicle AI 2040', 
        href: '/autonomous-vehicle-ai-2040', 
        description: 'Autonomous vehicle AI',
        icon: <Car className="w-4 h-4" />,
        color: 'from-blue-500 to-indigo-500'
      },
      { 
        name: 'Quantum Materials Discovery 2040', 
        href: '/quantum-materials-discovery-2040', 
        description: 'Quantum materials discovery',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Quantum Financial Intelligence 2040', 
        href: '/quantum-financial-intelligence-2040', 
        description: 'Quantum financial intelligence',
        icon: <DollarSign className="w-4 h-4" />,
        color: 'from-yellow-500 to-orange-500'
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    children: [
      { 
        name: 'Enterprise Solutions', 
        href: '/enterprise-solutions', 
        description: 'Large-scale enterprise transformations',
        icon: <Building className="w-4 h-4" />
      },
      { 
        name: 'Startup Solutions', 
        href: '/startup-solutions', 
        description: 'Accelerate startup growth',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'Government Solutions', 
        href: '/government-solutions', 
        description: 'Public sector innovation',
        icon: <Shield className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and tools',
    children: [
      { 
        name: 'Documentation', 
        href: '/docs', 
        description: 'Technical documentation and guides',
        icon: <FileText className="w-4 h-4" />
      },
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Latest insights and updates',
        icon: <BookOpen className="w-4 h-4" />
      },
      { 
        name: 'Training', 
        href: '/training', 
        description: 'Professional development programs',
        icon: <GraduationCap className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    children: [
      { 
        name: 'About Us', 
        href: '/about', 
        description: 'Our story and mission',
        icon: <Building className="w-4 h-4" />
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Users className="w-4 h-4" />
      },
      { 
        name: 'Contact', 
        href: '/contact', 
        description: 'Get in touch',
        icon: <MessageCircle className="w-4 h-4" />
      }
    ]
  }
];

const UltraFuturisticNavigation2040: React.FC<UltraFuturisticNavigation2040Props> = ({ 
  onMenuToggle, 
  isMenuOpen 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    onMenuToggle?.();
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAllDropdowns();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              aria-label="Zion Tech Group - Home"
              onClick={closeAllDropdowns}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleDropdownToggle(item.name);
                    }
                  }}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black rounded-md"
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup="true"
                  aria-label={`${item.name} menu`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-2 px-2 py-1 text-xs font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" aria-hidden="true" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby={`${item.name}-button`}
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
                              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group/item ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20' 
                                  : 'hover:bg-white/5'
                              }`}
                              onClick={closeAllDropdowns}
                              role="menuitem"
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                child.color 
                                  ? `bg-gradient-to-br ${child.color}` 
                                  : 'bg-gray-600'
                              }`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium text-white group-hover/item:text-cyan-400 transition-colors">
                                    {child.name}
                                  </span>
                                  {child.featured && (
                                    <Star className="w-4 h-4 text-yellow-400" aria-hidden="true" />
                                  )}
                                </div>
                                <p className="text-sm text-gray-400">{child.description}</p>
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
            <Link href="/contact">
              <button className="px-4 py-2 text-sm font-medium text-cyan-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black rounded-md">
                Contact
              </button>
            </Link>
            <Link href="/get-started">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-md hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                      aria-hidden="true" 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 space-y-2"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            className="block p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                            onClick={closeAllDropdowns}
                            role="menuitem"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-6 h-6 rounded bg-gray-600 flex items-center justify-center">
                                {child.icon}
                              </div>
                              <div>
                                <div className="font-medium">{child.name}</div>
                                <div className="text-sm text-gray-400">{child.description}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Link href="/contact" className="block">
                  <button className="w-full px-4 py-3 text-center text-cyan-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
                    Contact Us
                  </button>
                </Link>
                <Link href="/get-started" className="block">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
                    Get Started
                  </button>
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