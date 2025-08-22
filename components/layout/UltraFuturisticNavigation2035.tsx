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
  Building
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
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const navigationItems: NavigationItem[] = [
  {
    name: 'All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    featured: true,
    children: [
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025#search', description: 'Find specific services' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' },
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' },
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    featured: true,
    children: [
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', description: 'Predict and prevent churn with AI', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Supercharge sales with AI automation' },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', description: 'Intelligent financial forecasting' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine', description: 'AI-powered business decisions' },
      { name: 'AI Content Automation', href: '/intelligent-content-automation-platform', description: 'Automate content creation' },
      { name: 'AI HR Analytics', href: '/intelligent-hr-analytics-platform', description: 'Transform HR with AI insights' },
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' },
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development and DevOps' }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Hot',
    featured: true,
    children: [
      { name: 'Customer Success Platform', href: '/ai-customer-success-platform', description: 'AI-powered customer retention', featured: true },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', description: 'Intelligent supply chain management' },
      { name: 'Financial Planning AI', href: '/ai-financial-planning-platform', description: 'AI-powered financial planning' },
      { name: 'HR Analytics Platform', href: '/intelligent-hr-analytics-platform', description: 'Transform HR with data insights' },
      { name: 'Sales Intelligence AI', href: '/ai-sales-intelligence-platform', description: 'Supercharge sales performance' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine', description: 'AI-powered business decisions' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform', description: 'Automate content creation' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite', description: 'Smart CRM with AI insights' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Breakthrough quantum computing and space technology',
    badge: 'Future',
    children: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Quantum-secured cloud platform' },
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'AI-powered space mining operations' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Next-gen quantum security' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Revolutionary neural interface' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'AI-quantum materials research' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving vehicle intelligence' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum biological computing' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Quantum energy optimization' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure and security',
    badge: 'Enterprise',
    children: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Quantum-secured cloud platform' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'Self-managing IT infrastructure' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', description: 'Intelligent edge computing' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', description: 'Intelligent DevOps automation' },
      { name: 'Zero Trust Security', href: '/zero-trust-network-architecture', description: 'Advanced security architecture' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-services', description: 'Quantum-secured cybersecurity' },
      { name: 'AI Incident Response', href: '/ai-incident-response-automation', description: 'Automated incident response' }
    ]
  },
  {
    name: 'Business Solutions',
    href: '/business-solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'AI-powered business intelligence and automation',
    badge: 'Business',
    children: [
      { name: 'Business Intelligence Suite', href: '/ai-business-intelligence', description: 'AI-powered business insights' },
      { name: 'Marketing Automation', href: '/ai-marketing-automation', description: 'Intelligent marketing automation' },
      { name: 'Sales Intelligence Platform', href: '/ai-sales-intelligence', description: 'AI-powered sales optimization' },
      { name: 'Customer Success AI', href: '/ai-customer-success', description: 'AI customer success platform' },
      { name: 'Financial Risk Assessment', href: '/ai-financial-risk', description: 'AI financial risk analysis' },
      { name: 'Supply Chain AI', href: '/ai-supply-chain-optimization', description: 'Intelligent supply chain' },
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics', description: 'AI-powered HR insights' },
      { name: 'Legal Document AI', href: '/ai-legal-document-analysis', description: 'AI legal document analysis' }
    ]
  },
  {
    name: 'Industry Solutions',
    href: '/industry-solutions',
    icon: <Building className="w-5 h-5" />,
    description: 'Tailored solutions for specific industries',
    children: [
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions', description: 'AI-powered healthcare solutions' },
      { name: 'Financial Services', href: '/financial-ai-solutions', description: 'AI financial technology' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Smart manufacturing solutions' },
      { name: 'Retail Technology', href: '/retail-ai-solutions', description: 'AI retail technology' },
      { name: 'Education Technology', href: '/education-ai-solutions', description: 'AI education platforms' },
      { name: 'Government Solutions', href: '/government-ai-solutions', description: 'AI government technology' },
      { name: 'Energy & Utilities', href: '/energy-ai-solutions', description: 'AI energy optimization' },
      { name: 'Transportation & Logistics', href: '/transportation-ai-solutions', description: 'AI logistics solutions' }
    ]
  }
];

const quickActions = [
  { name: 'Get Started', href: '/contact', icon: <ArrowRight className="w-4 h-4" />, primary: true },
  { name: 'View Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Documentation', href: '/docs', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> }
];

const UltraFuturisticNavigation2035: React.FC = () => {
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

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    closeDropdowns();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
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
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                        onMouseLeave={closeDropdowns}
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            {item.icon}
                            <div>
                              <h3 className="font-semibold text-white">{item.title || item.name}</h3>
                              {item.description && (
                                <p className="text-sm text-gray-400">{item.description}</p>
                              )}
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                                  child.featured 
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20' 
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                }`}
                                onClick={closeDropdowns}
                              >
                                {child.featured && <Star className="w-4 h-4 text-cyan-400" />}
                                <div className="flex-1">
                                  <div className="font-medium">{child.name}</div>
                                  {child.description && (
                                    <div className="text-sm opacity-75">{child.description}</div>
                                  )}
                                </div>
                                <ArrowRight className="w-4 h-4 opacity-50" />
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
            <div className="hidden lg:flex items-center gap-4">
              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    href={action.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      action.primary
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {action.icon}
                    <span>{action.name}</span>
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.mobile}</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.email}</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
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
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-6">
                  {/* Mobile Navigation Items */}
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span>{item.name}</span>
                          {item.badge && (
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              item.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                              item.badge === 'Hot' ? 'bg-red-500/20 text-red-400' :
                              item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
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
                            transition={{ duration: 0.2 }}
                            className="ml-6 mt-2 space-y-2"
                          >
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={`block p-3 rounded-lg transition-colors duration-200 ${
                                  child.featured 
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400' 
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                }`}
                                onClick={closeMobileMenu}
                              >
                                <div className="font-medium">{child.name}</div>
                                {child.description && (
                                  <div className="text-sm opacity-75 mt-1">{child.description}</div>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  {/* Mobile Quick Actions */}
                  <div className="pt-4 border-t border-gray-800/50">
                    <div className="space-y-3">
                      {quickActions.map((action) => (
                        <Link
                          key={action.name}
                          href={action.href}
                          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                            action.primary
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                          }`}
                          onClick={closeMobileMenu}
                        >
                          {action.icon}
                          <span>{action.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="pt-4 border-t border-gray-800/50">
                    <div className="space-y-3 text-sm text-gray-400">
                      <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-3 p-3 rounded-lg hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200">
                        <Phone className="w-4 h-4" />
                        <span>{contactInfo.mobile}</span>
                      </a>
                      <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200">
                        <Mail className="w-4 h-4" />
                        <span>{contactInfo.email}</span>
                      </a>
                      <div className="flex items-center gap-3 p-3 rounded-lg">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default UltraFuturisticNavigation2035;