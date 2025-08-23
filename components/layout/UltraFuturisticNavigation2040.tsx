import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, Globe, Lock, 
  Phone, Mail, MapPin, ArrowRight, Star, Users, Award,
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud,
  BarChart3, Palette, Code, Smartphone, Monitor, Server,
  Target, TrendingUp, Lightbulb, Zap, Globe2,
  Clock, DollarSign, Calendar, MessageCircle
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
  icon?: React.ReactNode;
  description?: string;
  badge?: string;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Zap className="w-4 h-4" />
  },
  {
    label: 'AI Services',
    children: [
      {
        label: 'AI Consciousness',
        href: '/ai-consciousness-evolution-2029',
        icon: <Brain className="w-4 h-4" />,
        description: 'Revolutionary AI consciousness development',
        badge: 'Hot'
      },
      {
        label: 'AI & Machine Learning',
        href: '/ai-services',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        badge: 'Featured'
      },
      {
        label: 'AI Autonomous Operations',
        href: '/ai-autonomous-business-operations',
        icon: <Cpu className="w-4 h-4" />,
        description: 'End-to-end business automation',
        badge: 'New'
      },
      {
        label: 'AI Healthcare',
        href: '/ai-healthcare-diagnostics',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced medical AI diagnostics',
        badge: 'Critical'
      },
      {
        label: 'AI Finance',
        href: '/ai-financial-intelligence',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Intelligent financial solutions',
        badge: 'Popular'
      },
      {
        label: 'AI Education',
        href: '/ai-education-personalization',
        icon: <Lightbulb className="w-4 h-4" />,
        description: 'Personalized learning platforms',
        badge: 'Innovative'
      }
    ]
  },
  {
    label: 'Quantum Computing',
    children: [
      {
        label: 'Quantum Neural Networks',
        href: '/quantum-neural-network-platform',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum-AI integration',
        badge: 'Revolutionary'
      },
      {
        label: 'Quantum Security',
        href: '/quantum-cybersecurity-platform',
        icon: <Shield className="w-4 h-4" />,
        description: 'Quantum-resistant cybersecurity',
        badge: 'Critical'
      },
      {
        label: 'Quantum Cloud',
        href: '/quantum-cloud-infrastructure-platform',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Quantum-enhanced cloud infrastructure',
        badge: 'Future'
      },
      {
        label: 'Quantum Materials',
        href: '/quantum-materials-discovery-platform',
        icon: <Atom className="w-4 h-4" />,
        description: 'Advanced materials discovery',
        badge: 'Breakthrough'
      },
      {
        label: 'Quantum Bio-Computing',
        href: '/quantum-bio-computing-platform',
        icon: <Brain className="w-4 h-4" />,
        description: 'Biological quantum computing',
        badge: 'Innovative'
      }
    ]
  },
  {
    label: 'Space Technology',
    children: [
      {
        label: 'Space Resource Mining',
        href: '/space-resource-mining-platform',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space resource extraction',
        badge: 'Space'
      },
      {
        label: 'AI-Powered Space Tech',
        href: '/ai-powered-space-technology',
        icon: <Globe2 className="w-4 h-4" />,
        description: 'AI-enhanced space operations',
        badge: 'Future'
      },
      {
        label: 'Satellite Operations',
        href: '/satellite-operations-platform',
        icon: <Globe className="w-4 h-4" />,
        description: 'Advanced satellite management',
        badge: 'Critical'
      }
    ]
  },
  {
    label: 'IT Solutions',
    children: [
      {
        label: 'Cloud Infrastructure',
        href: '/quantum-secure-cloud-infrastructure',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Enterprise cloud solutions',
        badge: 'Popular'
      },
      {
        label: 'Cybersecurity',
        href: '/ai-powered-cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security solutions',
        badge: 'Critical'
      },
      {
        label: 'DevOps & Automation',
        href: '/ai-powered-devops-platform',
        icon: <Code className="w-4 h-4" />,
        description: 'Development automation',
        badge: 'Efficient'
      },
      {
        label: 'Data Analytics',
        href: '/ai-powered-data-governance',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Business intelligence & analytics',
        badge: 'Insights'
      },
      {
        label: 'Edge Computing',
        href: '/edge-computing-orchestration-platform',
        icon: <Server className="w-4 h-4" />,
        description: 'Distributed computing solutions',
        badge: 'Scalable'
      }
    ]
  },
  {
    label: 'Micro SAAS',
    children: [
      {
        label: 'AI Content Factory',
        href: '/ai-autonomous-content-factory',
        icon: <Brain className="w-4 h-4" />,
        description: 'Autonomous content creation',
        badge: 'Hot'
      },
      {
        label: 'Supply Chain Optimization',
        href: '/quantum-supply-chain-optimizer',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Quantum-optimized logistics',
        badge: 'Efficient'
      },
      {
        label: 'Customer Success',
        href: '/ai-customer-success-platform',
        icon: <Users className="w-4 h-4" />,
        description: 'AI-powered customer success',
        badge: 'Popular'
      },
      {
        label: 'Sales Intelligence',
        href: '/ai-sales-intelligence-platform',
        icon: <Target className="w-4 h-4" />,
        description: 'Intelligent sales optimization',
        badge: 'Revenue'
      },
      {
        label: 'HR Analytics',
        href: '/intelligent-hr-analytics-platform',
        icon: <Users className="w-4 h-4" />,
        description: 'Workforce optimization',
        badge: 'Efficient'
      }
    ]
  },
  {
    label: 'Specialized Solutions',
    children: [
      {
        label: 'Brain-Computer Interface',
        href: '/brain-computer-interface-platform',
        icon: <Brain className="w-4 h-4" />,
        description: 'Revolutionary neurotechnology',
        badge: 'Breakthrough'
      },
      {
        label: 'Autonomous Vehicles',
        href: '/autonomous-vehicle-ai-platform',
        icon: <Rocket className="w-4 h-4" />,
        description: 'AI-powered transportation',
        badge: 'Future'
      },
      {
        label: 'Financial Trading',
        href: '/quantum-financial-trading-platform',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Quantum-enhanced trading',
        badge: 'High-Performance'
      },
      {
        label: 'Healthcare Diagnostics',
        href: '/ai-healthcare-diagnostics',
        icon: <Shield className="w-4 h-4" />,
        description: 'AI medical diagnostics',
        badge: 'Critical'
      }
    ]
  },
  {
    label: 'Showcase & Pricing',
    children: [
      {
        label: '2025 Services Showcase',
        href: '/comprehensive-2025-services-showcase',
        icon: <Star className="w-4 h-4" />,
        description: 'Comprehensive service overview',
        badge: 'Showcase'
      },
      {
        label: 'Pricing Plans',
        href: '/pricing',
        icon: <DollarSign className="w-4 h-4" />,
        description: 'Transparent pricing',
        badge: 'Pricing'
      },
      {
        label: 'Market Pricing',
        href: '/market-pricing',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Competitive market analysis',
        badge: 'Market'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <Award className="w-4 h-4" />,
        description: 'Success stories',
        badge: 'Success'
      }
    ]
  }
];

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30' 
          : 'bg-black/40 backdrop-blur-lg border-b border-white/5'
      }`}
    >
      {/* Top Contact Bar */}
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
                <a href="/contact" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <Mail className="w-4 h-4" />
                  <span>Get Quote</span>
                </a>
                <a href="/contact" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <Calendar className="w-4 h-4" />
                  <span>Book Demo</span>
                </a>
                <a href="/support" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <MessageCircle className="w-4 h-4" />
                  <span>Live Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group" ref={dropdownRef}>
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/25 p-4"
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href || '#'}
                          onClick={closeMobileMenu}
                          className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-200">
                            {child.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                {child.label}
                              </p>
                              {child.badge && (
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                  {child.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-400 mt-1">
                              {child.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                      >
                        <span className="flex items-center space-x-3">
                          {item.icon}
                          <span>{item.label}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeDropdown === item.label && (
                        <div className="ml-8 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href || '#'}
                              onClick={closeMobileMenu}
                              className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                            >
                              <div className="flex items-center space-x-2">
                                {child.icon}
                                <span>{child.label}</span>
                                {child.badge && (
                                  <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                    {child.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-4 py-3 text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-cyan-500/30">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
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
};

export default UltraFuturisticNavigation2040;