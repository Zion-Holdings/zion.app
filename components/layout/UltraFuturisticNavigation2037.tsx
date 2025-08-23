import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Star, Sparkles, 
  Grid, List, TrendingUp, 
  Calendar, Calculator, GraduationCap,
  Cpu, Cloud, Settings, Monitor, Palette, Network, Layers, Code, Heart, ShoppingCart, Clock, MessageCircle, HelpCircle, Building
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
        href: '/ai-consciousness-evolution-2037',
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Quantum Neural Networks',
        href: '/quantum-neural-network-platform',
        description: 'Quantum-powered AI systems',
        icon: <Atom className="w-4 h-4" />
      },
      {
        name: 'Autonomous Business Operations',
        href: '/autonomous-business-operations-platform',
        description: 'AI-driven business automation',
        icon: <Settings className="w-4 h-4" />
      },
      {
        name: 'AI Predictive Maintenance',
        href: '/ai-predictive-maintenance-platform',
        description: 'Intelligent asset management',
        icon: <Monitor className="w-4 h-4" />
      },
      {
        name: 'AI Content Personalization',
        href: '/ai-content-personalization-engine',
        description: 'Personalized user experiences',
        icon: <Palette className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'IT Solutions',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Enterprise infrastructure',
    badge: 'Enterprise',
    category: 'it',
    color: 'from-orange-500 to-red-500',
    children: [
      {
        name: 'Quantum-Secure Cloud',
        href: '/quantum-secure-cloud-infrastructure',
        description: 'Future-proof cloud security',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Autonomous IT Operations',
        href: '/autonomous-it-operations-center',
        description: 'Self-managing infrastructure',
        icon: <Settings className="w-4 h-4" />
      },
      {
        name: 'Edge Computing Platform',
        href: '/edge-computing-orchestration-platform',
        description: 'Distributed edge management',
        icon: <Network className="w-4 h-4" />
      },
      {
        name: 'Blockchain Infrastructure',
        href: '/blockchain-infrastructure-platform',
        description: 'Enterprise blockchain solutions',
        icon: <Layers className="w-4 h-4" />
      },
      {
        name: 'AI-Powered DevOps',
        href: '/ai-powered-devops-platform',
        description: 'Intelligent development operations',
        icon: <Code className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Services',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing solutions',
    badge: 'Quantum',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      {
        name: 'Quantum Cybersecurity',
        href: '/quantum-cybersecurity-monitor',
        description: 'Future-proof security',
        icon: <Shield className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Quantum Financial Trading',
        href: '/quantum-financial-trading-platform',
        description: 'Quantum-powered trading',
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        name: 'Quantum Materials Discovery',
        href: '/quantum-materials-discovery-platform',
        description: 'Advanced materials science',
        icon: <Atom className="w-4 h-4" />
      },
      {
        name: 'Quantum Bio-Computing',
        href: '/quantum-bio-computing-platform',
        description: 'Biological quantum systems',
        icon: <Brain className="w-4 h-4" />
      },
      {
        name: 'Quantum Neural Networks',
        href: '/quantum-neural-network-platform',
        description: 'Quantum AI systems',
        icon: <Network className="w-4 h-4" />
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
    color: 'from-indigo-500 to-purple-500',
    children: [
      {
        name: 'Space Resource Mining',
        href: '/space-resource-mining-platform',
        description: 'Asteroid mining operations',
        icon: <Rocket className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI-Powered Space Tech',
        href: '/ai-powered-space-technology',
        description: 'Intelligent space systems',
        icon: <Brain className="w-4 h-4" />
      },
      {
        name: 'Space Infrastructure',
        href: '/space-infrastructure-platform',
        description: 'Orbital infrastructure',
        icon: <Building className="w-4 h-4" />
      },
      {
        name: 'Satellite Networks',
        href: '/satellite-network-platform',
        description: 'Global satellite systems',
        icon: <Globe className="w-4 h-4" />
      },
      {
        name: 'Space Communications',
        href: '/space-communications-platform',
        description: 'Interplanetary communication',
        icon: <Network className="w-4 h-4" />
      }
    ]
  },
        {
        name: 'Showcase & Pricing',
        href: '/comprehensive-services-showcase-2025',
        icon: <Star className="w-5 h-5" />,
        description: 'Services portfolio & pricing',
        badge: 'Showcase',
        category: 'showcase',
        color: 'from-yellow-500 to-orange-500',
        children: [
          {
            name: '2037 Futuristic Services',
            href: '/2037-futuristic-services-showcase',
            description: 'Latest revolutionary services',
            icon: <Sparkles className="w-4 h-4" />,
            featured: true
          },
          {
            name: 'All Services Overview',
            href: '/services',
            description: 'Complete services catalog',
            icon: <Grid className="w-4 h-4" />
          },
      {
        name: 'Pricing Plans',
        href: '/pricing',
        description: 'Service pricing options',
        icon: <DollarSign className="w-4 h-4" />
      },
      {
        name: 'Market Pricing',
        href: '/market-pricing',
        description: 'Competitive pricing analysis',
        icon: <BarChart3 className="w-4 h-4" />
      },
      {
        name: 'Service Comparison',
        href: '/service-comparison',
        description: 'Compare service features',
        icon: <List className="w-4 h-4" />
      },
      {
        name: 'ROI Calculator',
        href: '/roi-calculator',
        description: 'Calculate service ROI',
        icon: <Calculator className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Specialized Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    category: 'solutions',
    color: 'from-green-500 to-emerald-500',
    children: [
      {
        name: 'Healthcare Solutions',
        href: '/healthcare-solutions',
        description: 'Medical technology solutions',
        icon: <Heart className="w-4 h-4" />
      },
      {
        name: 'Financial Services',
        href: '/financial-solutions',
        description: 'Fintech and banking solutions',
        icon: <DollarSign className="w-4 h-4" />
      },
      {
        name: 'Manufacturing',
        href: '/manufacturing-solutions',
        description: 'Industrial automation',
        icon: <Settings className="w-4 h-4" />
      },
      {
        name: 'Retail & E-commerce',
        href: '/retail-solutions',
        description: 'Digital commerce solutions',
        icon: <ShoppingCart className="w-4 h-4" />
      },
      {
        name: 'Education & Training',
        href: '/education-solutions',
        description: 'Learning technology platforms',
        icon: <GraduationCap className="w-4 h-4" />
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
    <>
      {/* Enhanced Top Contact Bar */}
      <div className="relative z-40">
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                  <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <a href="tel:+1 302 464 0950" className="hover:text-cyan-400 transition-colors duration-200">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                  <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-200">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                  <MapPin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <span className="hover:text-cyan-400 transition-colors duration-200">
                    364 E Main St STE 1008 Middletown DE 19709
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                  <Globe className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.9/5 (200+ Reviews)</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-2">
                  <Link href="/contact" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                    <MessageCircle className="w-4 h-4" />
                    <span>Get Quote</span>
                  </Link>
                  <Link href="/contact" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                    <Calendar className="w-4 h-4" />
                    <span>Book Demo</span>
                  </Link>
                  <Link href="/support" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                    <HelpCircle className="w-4 h-4" />
                    <span>Live Chat</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-black/40 backdrop-blur-lg border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl shadow-lg shadow-cyan-500/25"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-500/50 rounded-xl animate-pulse"></div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ZionTech Group
                </span>
                <span className="text-xs text-white/60">Future Technology Solutions</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className={`px-2 py-1 text-xs bg-gradient-to-r ${item.color} text-white rounded-full`}>
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </button>

                  {/* Enhanced Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="mb-4">
                            <h3 className="text-white font-semibold text-lg mb-2">{item.name}</h3>
                            <p className="text-white/60 text-sm">{item.description}</p>
                          </div>
                          <div className="space-y-2">
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={normalizeHref(child.href)}
                                onClick={closeDropdown}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                              >
                                <div className="flex-shrink-0">
                                  {child.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <p className="text-white group-hover:text-cyan-400 transition-colors duration-200 font-medium">
                                      {child.name}
                                    </p>
                                    {child.featured && (
                                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-white/60 text-sm truncate">{child.description}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-cyan-400 transition-colors duration-200" />
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

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg"></div>
                    <span className="text-white font-bold text-lg">ZionTech</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-white hover:text-cyan-400 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center space-x-2 mb-3">
                        {item.icon}
                        <span className="text-white font-medium">{item.name}</span>
                        {item.badge && (
                          <span className={`px-2 py-1 text-xs bg-gradient-to-r ${item.color} text-white rounded-full`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="space-y-2 ml-6">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            onClick={() => setIsOpen(false)}
                            className="block p-2 text-white/70 hover:text-cyan-400 transition-colors duration-200 rounded"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}