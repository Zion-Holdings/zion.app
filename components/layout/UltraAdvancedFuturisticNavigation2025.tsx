import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Brain, Rocket, Shield, 
  Zap, Target, Atom, BookOpen, Truck, DollarSign, 
  BarChart3, Globe, Users, Phone, Mail, MapPin, 
  ArrowRight, Star, Sparkles, Cpu, Lock, Cloud, 
  Settings, Eye, Award, Clock, Heart, Lightbulb,
  Search, User, ShoppingCart, Bell
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  category?: string;
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
    category: 'main',
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
    category: 'ai',
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' },
      { name: 'AI Autonomous Code Generation', href: '/ai-autonomous-code-generation', description: 'AI that writes code' },
      { name: 'AI Autonomous Marketing', href: '/ai-autonomous-marketing-platform', description: 'Autonomous marketing AI' },
      { name: 'AI Autonomous Sales', href: '/ai-autonomous-sales-platform', description: 'AI that closes deals' },
      { name: 'AI Autonomous Customer Service', href: '/ai-autonomous-customer-service', description: 'Autonomous support AI' },
      { name: 'AI Autonomous HR', href: '/ai-autonomous-hr-platform', description: 'Autonomous HR management' },
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' },
      { name: 'Cutting-Edge AI Innovations', href: '/cutting-edge-ai-innovations', description: 'Latest AI breakthroughs and innovations' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    category: 'quantum',
    children: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' },
      { name: 'Quantum-Secure Communication', href: '/quantum-secure-communication', description: 'Unbreakable communication platform' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure and security solutions',
    badge: 'Enterprise',
    category: 'enterprise',
    children: [
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Next-generation security architecture' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Autonomous Edge Computing', href: '/autonomous-edge-computing-network', description: 'Self-managing edge infrastructure' },
      { name: 'Advanced Cybersecurity Suite', href: '/advanced-cybersecurity-suite', description: 'Comprehensive security solutions' },
      { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimizer', description: 'Intelligent cloud cost management' },
      { name: 'Infrastructure Automation', href: '/infrastructure-automation-platform', description: 'Self-healing infrastructure' },
      { name: 'DevOps Intelligence', href: '/devops-intelligence-platform', description: 'AI-powered DevOps optimization' },
      { name: 'Network Security', href: '/network-security-platform', description: 'Advanced network protection' },
      { name: 'Data Protection', href: '/data-protection-platform', description: 'Comprehensive data security' },
      { name: 'Compliance Automation', href: '/compliance-automation-platform', description: 'Automated compliance management' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Innovative',
    category: 'saas',
    children: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'AI-powered business insights' },
      { name: 'Content Generation Platform', href: '/ai-content-generation-platform', description: 'Automated content creation' },
      { name: 'Customer Service AI', href: '/ai-customer-service', description: 'Intelligent customer support' },
      { name: 'Marketing Automation', href: '/ai-marketing-automation-platform', description: 'AI-driven marketing' },
      { name: 'Sales Intelligence', href: '/ai-sales-automation', description: 'AI-powered sales optimization' },
      { name: 'HR Automation', href: '/ai-hr-recruitment', description: 'Intelligent HR management' },
      { name: 'Financial Analytics', href: '/ai-quantum-financial-analytics', description: 'Advanced financial insights' },
      { name: 'Research Assistant', href: '/autonomous-ai-research-assistant', description: 'Autonomous research AI' },
      { name: 'Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'AI medical diagnostics' },
      { name: 'Manufacturing AI', href: '/autonomous-manufacturing-ai', description: 'Autonomous manufacturing' }
    ]
  },
  {
    name: 'Advanced AI Automation',
    href: '/advanced-ai-automation-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Revolutionary AI automation for development, testing, DevOps, and security',
    badge: 'Advanced',
    category: 'automation',
    children: [
      { name: 'AI Code Review', href: '/ai-autonomous-code-review', description: 'Automated code quality assurance' },
      { name: 'AI Testing Platform', href: '/ai-autonomous-testing', description: 'Intelligent test automation' },
      { name: 'AI DevOps', href: '/ai-devops-automation', description: 'AI-powered DevOps optimization' },
      { name: 'AI Security', href: '/ai-security-automation', description: 'Intelligent security automation' },
      { name: 'AI Data Pipeline', href: '/ai-data-pipeline-automation', description: 'Automated data processing' },
      { name: 'AI Monitoring', href: '/ai-monitoring-automation', description: 'Intelligent system monitoring' },
      { name: 'AI Incident Response', href: '/ai-incident-response-automation', description: 'Automated incident handling' },
      { name: 'AI Compliance', href: '/ai-compliance-automation', description: 'Automated compliance management' }
    ]
  },
  {
    name: 'Advanced IT Infrastructure',
    href: '/advanced-it-infrastructure-services',
    icon: <Cloud className="w-5 h-5" />,
    description: 'Next-generation infrastructure with quantum computing and edge computing',
    badge: 'Next-Gen',
    category: 'infrastructure',
    children: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-enhanced-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Autonomous Edge Computing', href: '/autonomous-edge-computing-network', description: 'Self-managing edge infrastructure' },
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture', description: 'Advanced security architecture' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', description: 'Quantum-secured infrastructure' },
      { name: 'Autonomous Operations', href: '/autonomous-operations-center', description: 'Self-managing infrastructure' },
      { name: 'Performance Optimization', href: '/performance-optimization-platform', description: 'Intelligent performance tuning' },
      { name: 'Scalability Solutions', href: '/scalability-solutions', description: 'Auto-scaling infrastructure' },
      { name: 'Disaster Recovery', href: '/disaster-recovery-automation', description: 'Automated disaster recovery' }
    ]
  },
  {
    name: 'Innovative Business Solutions',
    href: '/innovative-business-solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'AI-powered business intelligence, marketing, sales, and HR solutions',
    badge: 'Business',
    category: 'business',
    children: [
      { name: 'Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'AI-powered business insights' },
      { name: 'Marketing Automation', href: '/ai-marketing-automation-platform', description: 'Intelligent marketing optimization' },
      { name: 'Sales Intelligence', href: '/ai-sales-automation', description: 'AI-powered sales optimization' },
      { name: 'HR Automation', href: '/ai-hr-recruitment', description: 'Intelligent HR management' },
      { name: 'Customer Analytics', href: '/ai-customer-analytics', description: 'Advanced customer insights' },
      { name: 'Financial Intelligence', href: '/ai-financial-intelligence', description: 'AI-powered financial analysis' },
      { name: 'Supply Chain Optimization', href: '/ai-supply-chain-optimization', description: 'Intelligent supply chain management' },
      { name: 'Risk Management', href: '/ai-risk-management', description: 'AI-powered risk assessment' }
    ]
  }
];

const UltraAdvancedFuturisticNavigation2025: React.FC = () => {
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

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center space-x-4">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 text-cyan-300 hover:text-cyan-200 transition-colors">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-1 text-purple-300 hover:text-purple-200 transition-colors">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-pink-300">{contactInfo.address}</span>
              <a href={contactInfo.website} className="text-cyan-300 hover:text-cyan-200 transition-colors">
                {contactInfo.website.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Future Technology Solutions</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <motion.button
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeDropdown === item.name
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => toggleDropdown(item.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.slice(0, 8).map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={closeAllDropdowns}
                              className="flex items-center justify-between p-3 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                            >
                              <div>
                                <div className="font-medium">{child.name}</div>
                                <div className="text-xs text-gray-500">{child.description}</div>
                              </div>
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </Link>
                          ))}
                          {item.children && item.children.length > 8 && (
                            <Link
                              href={item.href}
                              onClick={closeAllDropdowns}
                              className="flex items-center justify-center p-3 rounded-lg text-sm text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200 border border-cyan-500/20"
                            >
                              View All {item.name} →
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Notifications */}
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </motion.button>

            {/* User Menu */}
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
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
                    className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </button>
                  
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-8 mt-2 space-y-2"
                    >
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={closeAllDropdowns}
                          className="block p-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                        >
                          <div className="font-medium">{child.name}</div>
                          <div className="text-xs text-gray-500">{child.description}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraAdvancedFuturisticNavigation2025;