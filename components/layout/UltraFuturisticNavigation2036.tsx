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
  Target as TargetIcon, Atom as AtomIcon, Brain as BrainIcon,
  Cpu as Quantum, Brain as AI, Code as MicroSaas, Server as ITServices, 
  Globe as Metaverse, Shield as Cybersecurity
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
    name: 'Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Complete technology solutions',
    badge: 'Main',
    category: 'services',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI & Machine Learning', 
        href: '/ai-services', 
        description: 'Advanced AI solutions',
        icon: <BrainIcon className="w-4 h-4" />
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <AtomIcon className="w-4 h-4" />
      },
      { 
        name: 'Space Technology', 
        href: '/space-technology', 
        description: 'Space exploration solutions',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'IT Solutions', 
        href: '/it-services', 
        description: 'Enterprise IT infrastructure',
        icon: <Cpu className="w-4 h-4" />
      },
      { 
        name: 'Specialized Solutions', 
        href: '/solutions', 
        description: 'Industry-specific solutions',
        icon: <TargetIcon className="w-4 h-4" />
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
    children: [
      {
        name: '2025 Services Showcase',
        href: '/comprehensive-services-showcase-2025',
        description: 'Complete 2025 services overview',
        icon: <Star className="w-4 h-4" />,
        featured: true
      },
      {
        name: '2026 Services Showcase',
        href: '/ultimate-2026-services-showcase',
        description: 'Advanced 2026 services',
        icon: <Sparkles className="w-4 h-4" />
      },
      {
        name: '2035 Futuristic Services',
        href: '/ultimate-2035-futuristic-services-showcase',
        description: 'Future-ready services',
        icon: <Zap className="w-4 h-4" />
      },
      {
        name: 'Revolutionary Pricing',
        href: '/revolutionary-2025-pricing',
        description: 'Innovative pricing models',
        icon: <DollarSign className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <MicroSaas className="w-5 h-5" />,
    description: 'Micro software solutions',
    badge: 'New',
    category: 'micro-saas',
    children: [
      {
        name: 'All Micro SAAS',
        href: '/micro-saas',
        description: 'Complete micro SAAS overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI Micro SAAS',
        href: '/ai-micro-saas',
        description: 'AI-powered micro solutions',
        icon: <Brain className="w-4 h-4" />
      },
      {
        name: 'Quantum Micro SAAS',
        href: '/quantum-micro-saas',
        description: 'Quantum computing solutions',
        icon: <Atom className="w-4 h-4" />
      },
      {
        name: 'Business Tools',
        href: '/business-tools',
        description: 'Business productivity tools',
        icon: <Building className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'AI Services',
    href: '/ai-services',
    icon: <AI className="w-5 h-5" />,
    description: 'Artificial intelligence solutions',
    badge: 'Hot',
    category: 'ai-services',
    children: [
      {
        name: 'All AI Services',
        href: '/ai-services',
        description: 'Complete AI services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Machine Learning',
        href: '/machine-learning',
        description: 'ML and deep learning solutions',
        icon: <Brain className="w-4 h-4" />
      },
      {
        name: 'Natural Language Processing',
        href: '/nlp-services',
        description: 'Text and language AI',
        icon: <MessageCircle className="w-4 h-4" />
      },
      {
        name: 'Computer Vision',
        href: '/computer-vision',
        description: 'Image and video AI',
        icon: <Eye className="w-4 h-4" />
      },
      {
        name: 'Predictive Analytics',
        href: '/predictive-analytics',
        description: 'AI-powered forecasting',
        icon: <BarChart3 className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'IT Services',
    href: '/it-services',
    icon: <ITServices className="w-5 h-5" />,
    description: 'Information technology solutions',
    badge: 'Core',
    category: 'it-services',
    children: [
      {
        name: 'All IT Services',
        href: '/it-services',
        description: 'Complete IT services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Cloud Infrastructure',
        href: '/cloud-infrastructure',
        description: 'Cloud computing solutions',
        icon: <Cloud className="w-4 h-4" />
      },
      {
        name: 'Cybersecurity',
        href: '/cybersecurity',
        description: 'Security and protection',
        icon: <Shield className="w-4 h-4" />
      },
      {
        name: 'DevOps & Automation',
        href: '/devops-automation',
        description: 'Development operations',
        icon: <Settings className="w-4 h-4" />
      },
      {
        name: 'Data Management',
        href: '/data-management',
        description: 'Data storage and analytics',
        icon: <Database className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Services',
    href: '/quantum-services',
    icon: <Quantum className="w-5 h-5" />,
    description: 'Quantum computing solutions',
    badge: 'Future',
    category: 'quantum-services',
    children: [
      {
        name: 'All Quantum Services',
        href: '/quantum-services',
        description: 'Complete quantum services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Quantum Computing',
        href: '/quantum-computing',
        description: 'Quantum processing solutions',
        icon: <Atom className="w-4 h-4" />
      },
      {
        name: 'Quantum AI',
        href: '/quantum-ai',
        description: 'Quantum-enhanced AI',
        icon: <Brain className="w-4 h-4" />
      },
      {
        name: 'Quantum Security',
        href: '/quantum-security',
        description: 'Quantum-resistant cryptography',
        icon: <Lock className="w-4 h-4" />
      },
      {
        name: 'Quantum Finance',
        href: '/quantum-finance',
        description: 'Financial quantum solutions',
        icon: <DollarSign className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration solutions',
    badge: 'Space',
    category: 'space-tech',
    children: [
      {
        name: 'All Space Tech',
        href: '/space-technology',
        description: 'Complete space technology overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Satellite Technology',
        href: '/satellite-technology',
        description: 'Satellite solutions',
        icon: <Globe className="w-4 h-4" />
      },
      {
        name: 'Space Mining',
        href: '/space-mining',
        description: 'Resource extraction',
        icon: <Truck className="w-4 h-4" />
      },
      {
        name: 'Space AI',
        href: '/space-ai',
        description: 'AI for space exploration',
        icon: <Brain className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Metaverse',
    href: '/metaverse',
    icon: <Metaverse className="w-5 h-5" />,
    description: 'Virtual reality solutions',
    badge: 'VR',
    category: 'metaverse',
    children: [
      {
        name: 'All Metaverse',
        href: '/metaverse',
        description: 'Complete metaverse overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Virtual Reality',
        href: '/virtual-reality',
        description: 'VR experiences',
        icon: <Eye className="w-4 h-4" />
      },
      {
        name: 'Augmented Reality',
        href: '/augmented-reality',
        description: 'AR solutions',
        icon: <Camera className="w-4 h-4" />
      },
      {
        name: '3D Worlds',
        href: '/3d-worlds',
        description: '3D environment creation',
        icon: <Globe className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and tools',
    category: 'resources',
    children: [
      {
        name: 'All Resources',
        href: '/resources',
        description: 'Complete resources overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Documentation',
        href: '/documentation',
        description: 'Technical documentation',
        icon: <FileText className="w-4 h-4" />
      },
      {
        name: 'Tutorials',
        href: '/tutorials',
        description: 'Learning resources',
        icon: <Video className="w-4 h-4" />
      },
      {
        name: 'API Reference',
        href: '/api',
        description: 'API documentation',
        icon: <Code className="w-4 h-4" />
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
        icon: <Building className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Contact',
        href: '/contact',
        description: 'Get in touch',
        icon: <MessageCircle className="w-4 h-4" />
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Job opportunities',
        icon: <Users className="w-4 h-4" />
      },
      {
        name: 'News',
        href: '/news',
        description: 'Company updates',
        icon: <FileText className="w-4 h-4" />
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
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-purple-900/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center space-x-4">
              <a 
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-1 text-cyan-300 hover:text-cyan-100 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-1 text-cyan-300 hover:text-cyan-100 transition-colors"
              >
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-cyan-300">{contactInfo.address}</span>
              <a 
                href={contactInfo.website}
                className="text-cyan-300 hover:text-cyan-100 transition-colors"
              >
                {contactInfo.website.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeDropdown}
                              className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                                child.featured
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 hover:from-cyan-500/20 hover:to-purple-500/20'
                                  : 'hover:bg-white/5'
                              }`}
                            >
                              <div className="flex-shrink-0">
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium ${
                                  child.featured ? 'text-cyan-300' : 'text-white'
                                }`}>
                                  {child.name}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {child.description}
                                </p>
                              </div>
                              {child.featured && (
                                <Star className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              )}
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

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link 
              href="/get-started"
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
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
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <span className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && item.children && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-400 hover:text-white transition-colors py-1"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-cyan-500/20">
                <Link 
                  href="/get-started"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
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