import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  BookOpen, FileText, MessageCircle, HelpCircle, GraduationCap, Star, Handshake, Code
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
    name: 'Revolutionary Services 2043',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: 'New 2043',
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
        name: 'AI Consciousness Evolution 2043', 
        href: '/ai-consciousness-evolution-2043', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum Neural Network 2043', 
        href: '/quantum-ai-neural-2043', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'AI Business Intelligence 2043', 
        href: '/ai-business-intelligence-2043', 
        description: 'AI-powered business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cybersecurity 2043', 
        href: '/quantum-cybersecurity-2043', 
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Brain-Computer Interface', 
        href: '/brain-computer-interface-2040', 
        description: 'Neural interface technology',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500'
      }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness platforms',
    badge: 'Featured',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'AI Consciousness Evolution 2043', 
        href: '/ai-consciousness-evolution-2043', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum AI Neural Network 2043', 
        href: '/quantum-ai-neural-2043', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous AI Research 2043', 
        href: '/autonomous-ai-research-2043', 
        description: 'Fully autonomous AI research',
        icon: <Cpu className="w-4 h-4" />
      },
      { 
        name: 'AI Content Personalization 2043', 
        href: '/ai-content-personalization-2043', 
        description: 'Intelligent content personalization',
        icon: <Palette className="w-4 h-4" />
      },
      { 
        name: 'AI Ethics & Governance 2043', 
        href: '/ai-ethics-governance-2043', 
        description: 'AI ethics and governance',
        icon: <Shield className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Breakthrough quantum computing solutions',
    badge: 'Quantum',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      { 
        name: 'Quantum Cloud Infrastructure 2043', 
        href: '/quantum-cloud-infrastructure-2043', 
        description: 'Quantum-powered cloud infrastructure',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum Database Platform 2043', 
        href: '/quantum-database-2043', 
        description: 'Quantum-powered database',
        icon: <Database className="w-4 h-4" />
      },
      { 
        name: 'Quantum Edge Computing 2043', 
        href: '/quantum-edge-computing-2043', 
        description: 'Quantum-powered edge computing',
        icon: <Cpu className="w-4 h-4" />
      },
      { 
        name: 'Quantum API Gateway 2043', 
        href: '/quantum-api-gateway-2043', 
        description: 'Quantum-powered API gateway',
        icon: <Network className="w-4 h-4" />
      },
      {
        name: 'Quantum Cloud Infrastructure 2041',
        href: '/quantum-cloud-infrastructure-2041',
        description: 'Quantum cloud computing',
        icon: <Cloud className="w-4 h-4" />
      },
      {
        name: 'Quantum Bio-Computing 2041',
        href: '/quantum-bio-computing-2041',
        description: 'Quantum biological computing',
        icon: <Atom className="w-4 h-4" />
      },
      {
        name: 'Quantum Neural Network Simulator',
        href: '/quantum-neural-network-simulator',
        description: 'Simulate quantum neural networks',
        icon: <Brain className="w-4 h-4" />
      },
      {
        name: 'Quantum-Enhanced Cybersecurity',
        href: '/quantum-cybersecurity-suite',
        description: 'Future-proof quantum security',
        icon: <Shield className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Cybersecurity',
    href: '/cybersecurity',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced security solutions',
    badge: 'Secure',
    category: 'security',
    color: 'from-red-500 to-orange-500',
    children: [
      { 
        name: 'Quantum Cybersecurity 2043', 
        href: '/quantum-cybersecurity-2043', 
        description: 'Quantum-resistant cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Network Security 2043', 
        href: '/ai-network-security-2043', 
        description: 'AI-powered network security',
        icon: <Network className="w-4 h-4" />
      },
      { 
        name: 'Quantum Internet Security 2043', 
        href: '/quantum-internet-security-2043', 
        description: 'Quantum internet security',
        icon: <Globe className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Business Solutions',
    href: '/business-solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Enterprise business solutions',
    badge: 'Business',
    category: 'business',
    color: 'from-emerald-500 to-teal-500',
    children: [
      { 
        name: 'AI Business Intelligence 2043', 
        href: '/ai-business-intelligence-2043', 
        description: 'AI-powered business intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Zero-Trust Network Architecture',
        href: '/zero-trust-network-architecture-platform',
        description: 'Secure every connection',
        icon: <Shield className="w-4 h-4" />
      },
      {
        name: 'Autonomous Cloud Infrastructure',
        href: '/autonomous-cloud-infrastructure-manager',
        description: 'Self-managing cloud infrastructure',
        icon: <Cloud className="w-4 h-4" />
      },
      {
        name: 'Intelligent API Gateway',
        href: '/intelligent-api-gateway-and-management',
        description: 'Smart API management',
        icon: <Network className="w-4 h-4" />
      },
      {
        name: 'AI Customer Success 2041',
        href: '/ai-customer-success-2041',
        description: 'Autonomous customer management',
        icon: <Heart className="w-4 h-4" />
      },
      { 
        name: 'AI Marketing Automation 2043', 
        href: '/ai-marketing-automation-2043', 
        description: 'Intelligent marketing automation',
        icon: <TrendingUp className="w-4 h-4" />
      },
      { 
        name: 'Autonomous Supply Chain 2043', 
        href: '/autonomous-supply-chain-2043', 
        description: 'AI-powered supply chain',
        icon: <ShoppingCart className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'IT Services',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced IT infrastructure solutions',
    badge: 'IT',
    category: 'it',
    color: 'from-blue-500 to-indigo-500',
    children: [
      { 
        name: 'Autonomous DevOps Platform 2043', 
        href: '/autonomous-devops-2043', 
        description: 'AI-powered autonomous DevOps',
        icon: <Settings className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Autonomous Data Center 2043', 
        href: '/autonomous-data-center-2043', 
        description: 'AI-powered data center management',
        icon: <Building className="w-4 h-4" />
      },
      { 
        name: 'AI IT Service Management 2043', 
        href: '/ai-itsm-2043', 
        description: 'Intelligent IT service management',
        icon: <Monitor className="w-4 h-4" />
      },
      {
        name: 'Autonomous AI Research Assistant',
        href: '/autonomous-ai-research-assistant',
        description: 'Self-directed research with AI',
        icon: <Brain className="w-4 h-4" />
      },
      {
        name: 'Emotional Intelligence AI',
        href: '/emotional-intelligence-ai-platform',
        description: 'Human-like emotional understanding',
        icon: <Heart className="w-4 h-4" />
      },
      {
        name: 'Autonomous Content Creation',
        href: '/autonomous-content-creation-engine',
        description: 'Self-generating content with AI',
        icon: <Code className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    badge: 'Solutions',
    category: 'solutions',
    color: 'from-orange-500 to-red-500',
    children: [
      {
        name: 'Healthcare Solutions',
        href: '/healthcare-solutions',
        description: 'AI-powered healthcare technology',
        icon: <Heart className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Financial Services',
        href: '/financial-solutions',
        description: 'Quantum financial intelligence',
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        name: 'Manufacturing AI',
        href: '/manufacturing-ai-solutions',
        description: 'Autonomous manufacturing',
        icon: <Cpu className="w-4 h-4" />
      },
      {
        name: 'Retail Technology',
        href: '/retail-technology-solutions',
        description: 'Smart retail solutions',
        icon: <ShoppingCart className="w-4 h-4" />
      },
      {
        name: 'Government Solutions',
        href: '/government-technology-solutions',
        description: 'Public sector technology',
        icon: <Building className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and support resources',
    badge: 'Resources',
    category: 'resources',
    color: 'from-cyan-500 to-blue-500',
    children: [
      {
        name: 'Documentation',
        href: '/docs',
        description: 'Technical documentation',
        icon: <FileText className="w-4 h-4" />
      },
      {
        name: 'Blog & News',
        href: '/blog',
        description: 'Latest insights and updates',
        icon: <MessageCircle className="w-4 h-4" />
      },
      {
        name: 'Support Center',
        href: '/support',
        description: 'Get help and support',
        icon: <HelpCircle className="w-4 h-4" />
      },
      {
        name: 'Training',
        href: '/training',
        description: 'Learn and get certified',
        icon: <GraduationCap className="w-4 h-4" />
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        description: 'Success stories and examples',
        icon: <Star className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    badge: 'Company',
    category: 'company',
    color: 'from-purple-500 to-pink-500',
    children: [
      {
        name: 'About Us',
        href: '/about',
        description: 'Learn about our mission',
        icon: <Building className="w-4 h-4" />
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team',
        icon: <Star className="w-4 h-4" />
      },
      {
        name: 'Contact',
        href: '/contact',
        description: 'Get in touch',
        icon: <Mail className="w-4 h-4" />
      },
      {
        name: 'Partners',
        href: '/partners',
        description: 'Partnership opportunities',
        icon: <Handshake className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    href: '/healthcare',
    icon: <Heart className="w-5 h-5" />,
    description: 'Advanced healthcare solutions',
    badge: 'Health',
    category: 'healthcare',
    color: 'from-red-500 to-pink-500',
    children: [
      { 
        name: 'AI Healthcare Platform 2043', 
        href: '/ai-healthcare-platform-2043', 
        description: 'AI-powered healthcare',
        icon: <Heart className="w-4 h-4" />,
        featured: true
      }
    ]
  },
  {
    name: 'Financial Technology',
    href: '/fintech',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Next-generation financial solutions',
    badge: 'FinTech',
    category: 'fintech',
    color: 'from-green-500 to-emerald-500',
    children: [
      { 
        name: 'Quantum Financial Trading 2043', 
        href: '/quantum-financial-trading-2043', 
        description: 'Quantum-powered financial trading',
        icon: <TrendingUp className="w-4 h-4" />,
        featured: true
      }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const UltraFuturisticNavigation2040: React.FC = () => {
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
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-6 text-cyan-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:text-cyan-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-cyan-200 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                Visit Website
              </a>
              <span className="text-cyan-400">|</span>
              <span className="text-cyan-300">Revolutionary 2040-2041 Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-3 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-full h-full text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary 2040-2041</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-200 rounded-xl hover:bg-white/5"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
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
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                      onMouseLeave={closeDropdown}
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
                              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20' 
                                  : 'hover:bg-white/5'
                              }`}
                              onClick={closeDropdown}
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-gray-600'} p-2`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {child.name}
                                  </span>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                                      Featured
                                    </span>
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
              href="/revolutionary-2040-2041-pricing-showcase"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle mobile menu"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-white hover:text-cyan-400 transition-colors rounded-xl hover:bg-white/5"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="ml-6 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          className="block p-3 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-gray-600'} p-1.5`}>
                              {child.icon}
                            </div>
                            <span>{child.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link
                  href="/revolutionary-2040-2041-pricing-showcase"
                  className="block w-full text-center px-6 py-3 rounded-xl text-white bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="block w-full text-center px-6 py-3 rounded-xl text-cyan-400 border-2 border-cyan-400 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Explore Services
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