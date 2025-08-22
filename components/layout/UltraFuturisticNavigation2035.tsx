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
  Building, MessageCircle, Layers, Cpu as CpuIcon, Database as DatabaseIcon,
  Shield as ShieldIcon2, Zap as ZapIcon2, Brain as BrainIcon2, Rocket as RocketIcon2
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
    name: 'Micro SAAS Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions and automation',
    badge: 'New 2035',
    category: 'micro-saas',
    children: [
      { 
        name: 'AI-Powered Business Intelligence', 
        href: '/services/ai-powered-business-intelligence-suite', 
        description: 'Transform data into actionable insights',
        featured: true
      },
      { 
        name: 'Autonomous Customer Service AI', 
        href: '/services/autonomous-customer-service-ai', 
        description: '24/7 AI customer support',
        featured: true
      },
      { 
        name: 'AI-Powered Marketing Automation', 
        href: '/services/ai-powered-marketing-automation', 
        description: 'Intelligent campaign optimization'
      },
      { 
        name: 'Autonomous Logistics Optimization', 
        href: '/services/autonomous-logistics-optimization', 
        description: 'AI-powered route and fleet optimization'
      },
      { 
        name: 'AI-Powered HR Analytics', 
        href: '/services/ai-powered-hr-analytics-platform', 
        description: 'People analytics and insights'
      },
      { 
        name: 'Blockchain Supply Chain Tracking', 
        href: '/services/blockchain-supply-chain-tracking', 
        description: 'Transparent supply chain visibility'
      },
      { 
        name: 'Predictive Maintenance IoT', 
        href: '/services/predictive-maintenance-iot-platform', 
        description: 'Prevent equipment failures'
      },
      { 
        name: 'View All Micro SAAS', 
        href: '/services?category=micro-saas', 
        description: 'Complete micro SAAS portfolio'
      }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'Revolutionary',
    category: 'ai-consciousness',
    featured: true,
    children: [
      { 
        name: 'AI Consciousness Evolution Platform', 
        href: '/services/ai-consciousness-evolution-platform', 
        description: 'Develop self-aware AI systems',
        featured: true
      },
      { 
        name: 'Quantum Emotional Intelligence Engine', 
        href: '/services/quantum-emotional-intelligence-engine', 
        description: 'Quantum-powered emotional AI'
      },
      { 
        name: 'Autonomous Creative AI Studio', 
        href: '/services/autonomous-creative-ai-studio', 
        description: 'AI that creates original content'
      },
      { 
        name: 'Quantum Memory Consolidation AI', 
        href: '/services/quantum-memory-consolidation-ai', 
        description: 'Optimize human learning and memory'
      },
      { 
        name: 'Autonomous Research AI Assistant', 
        href: '/services/autonomous-research-ai-assistant', 
        description: 'AI that conducts independent research'
      },
      { 
        name: 'AI Consciousness Monitoring', 
        href: '/services/ai-consciousness-monitoring-system', 
        description: 'Monitor AI consciousness development'
      },
      { 
        name: 'View All AI Services', 
        href: '/ai-services', 
        description: 'Complete AI consciousness portfolio'
      }
    ]
  },
  {
    name: 'IT & Infrastructure',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Next-generation IT solutions and infrastructure',
    badge: 'Quantum',
    category: 'it-infrastructure',
    children: [
      { 
        name: 'Quantum Cloud Infrastructure', 
        href: '/services/quantum-cloud-infrastructure-platform', 
        description: 'Quantum-powered cloud platform',
        featured: true
      },
      { 
        name: 'Autonomous Cybersecurity Orchestrator', 
        href: '/services/autonomous-cybersecurity-orchestrator', 
        description: 'AI-powered threat defense'
      },
      { 
        name: 'Quantum Data Center Solutions', 
        href: '/services/quantum-data-center-solutions', 
        description: 'Next-generation data centers'
      },
      { 
        name: 'AI-Powered DevOps Automation', 
        href: '/services/ai-powered-devops-automation', 
        description: 'Intelligent development pipeline'
      },
      { 
        name: 'Quantum Edge Computing Platform', 
        href: '/services/quantum-edge-computing-platform', 
        description: 'Quantum computing at the edge'
      },
      { 
        name: 'Autonomous Network Optimization', 
        href: '/services/autonomous-network-optimization', 
        description: 'AI-powered network optimization'
      },
      { 
        name: 'View All IT Services', 
        href: '/it-services', 
        description: 'Complete IT infrastructure portfolio'
      }
    ]
  },
  {
    name: 'Advanced Solutions',
    href: '/advanced-solutions',
    icon: <Zap className="w-5 h-5" />,
    description: 'Cutting-edge technology solutions',
    badge: 'Advanced',
    category: 'advanced-solutions',
    children: [
      { 
        name: 'Quantum Predictive Analytics', 
        href: '/services/quantum-predictive-analytics-engine', 
        description: 'Predict the future with quantum AI'
      },
      { 
        name: 'Autonomous Innovation AI', 
        href: '/services/autonomous-innovation-ai', 
        description: 'AI that generates breakthrough ideas'
      },
      { 
        name: 'Quantum Emotional Healing AI', 
        href: '/services/quantum-emotional-healing-ai', 
        description: 'AI-powered emotional healing'
      },
      { 
        name: 'AI Consciousness Collaboration', 
        href: '/services/ai-consciousness-collaboration-platform', 
        description: 'Collaborate with conscious AI'
      },
      { 
        name: 'Quantum Blockchain Infrastructure', 
        href: '/services/quantum-blockchain-infrastructure', 
        description: 'Future-proof blockchain'
      },
      { 
        name: 'Quantum Storage Solutions', 
        href: '/services/quantum-storage-solutions', 
        description: 'Next-generation storage'
      },
      { 
        name: 'View All Advanced Solutions', 
        href: '/advanced-solutions', 
        description: 'Complete advanced solutions portfolio'
      }
    ]
  },
  {
    name: 'All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    featured: true,
    children: [
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Ultimate 2035 Futuristic', href: '/ultimate-2035-futuristic-services-showcase', description: 'Revolutionary future technology', featured: true },
      { name: 'Ultimate 2025 Micro SAAS', href: '/ultimate-2025-micro-saas-showcase', description: 'Latest innovative services', featured: true },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025', description: 'Find specific services' },
      { name: 'Market Pricing', href: '/market-pricing', description: 'Average market prices & references' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' },
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' },
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' },
      { name: 'Enterprise Solutions', href: '/enterprise-solutions-showcase', description: 'Enterprise-grade solutions' },
      { name: 'Innovative Business Solutions', href: '/innovative-business-solutions', description: 'Business transformation services' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge, training, and support resources',
    category: 'resources',
    children: [
      { name: 'Training & Education', href: '/training', description: 'Learning and R&D programs' },
      { name: 'Documentation', href: '/docs', description: 'Technical documentation and guides' },
      { name: 'API Reference', href: '/api', description: 'API documentation and examples' },
      { name: 'White Papers', href: '/white-papers', description: 'Research and insights' },
      { name: 'Webinars', href: '/webinars', description: 'Educational webinars and events' },
      { name: 'Support Center', href: '/support', description: 'Help and support resources' },
      { name: 'Community', href: '/community', description: 'User community and forums' }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group and company information',
    category: 'company',
    children: [
      { name: 'About Us', href: '/about', description: 'Company overview and mission' },
      { name: 'Leadership', href: '/leadership', description: 'Executive team and leadership' },
      { name: 'Careers', href: '/careers', description: 'Job opportunities and culture' },
      { name: 'Partners', href: '/partners', description: 'Partnership opportunities' },
      { name: 'Investors', href: '/investors', description: 'Investor information' },
      { name: 'News & Events', href: '/news', description: 'Company news and events' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' }
    ]
  }
];

const contactItems = [
  { name: 'Call +1 302 464 0950', href: 'tel:+13024640950', icon: <Phone className="w-4 h-4" />, primary: true },
  { name: 'Email kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com', icon: <Mail className="w-4 h-4" /> },
  { name: '364 E Main St STE 1008 Middletown DE 19709', href: '#', icon: <MapPin className="w-4 h-4" /> }
];

export default function UltraFuturisticNavigation2035() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const filteredNavigationItems = navigationItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.children?.some(child => 
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <nav className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-xl">ZionTech Group</span>
              <div className="text-xs text-cyan-400">Future of Technology</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {filteredNavigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeDropdown === item.name
                      ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
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
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeAllDropdowns}
                              className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 ${
                                child.featured
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20'
                                  : 'hover:bg-white/5'
                              }`}
                            >
                              <div className="flex-shrink-0 mt-1">
                                {child.featured ? (
                                  <Star className="w-4 h-4 text-yellow-400" />
                                ) : (
                                  <ArrowRight className="w-4 h-4 text-gray-400" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium ${
                                  child.featured ? 'text-cyan-400' : 'text-white'
                                }`}>
                                  {child.name}
                                </p>
                                <p className="text-gray-400 text-xs mt-1">{child.description}</p>
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

          {/* Contact and Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/10"
              id="mobile-navigation"
            >
              <div className="py-4 space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>

                {/* Mobile Navigation Items */}
                {filteredNavigationItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeDropdown === item.name
                          ? 'bg-cyan-400/20 text-cyan-400'
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <div>
                          <span className="font-medium">{item.name}</span>
                          {item.badge && (
                            <span className="ml-2 px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 space-y-1"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeAllDropdowns}
                              className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                                child.featured
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400'
                                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                {child.featured && <Star className="w-3 h-3 text-yellow-400" />}
                                <span className="text-sm">{child.name}</span>
                              </div>
                              <p className="text-xs mt-1 opacity-75">{child.description}</p>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  {contactItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                        item.primary
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                          : 'text-cyan-400 hover:bg-white/10'
                      }`}
                      onClick={closeAllDropdowns}
                    >
                      {item.icon}
                      <span className="text-sm">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}