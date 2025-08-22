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
  Building, MessageCircle, Briefcase, FlaskConical, Microscope, Satellite,
  Car, Plane, Ship, Train, Factory, Hospital, School, Landmark
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
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions',
    badge: 'New',
    children: [
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-automation', description: 'Automate customer success with AI', featured: true },
      { name: 'AI Content Marketing Automation', href: '/ai-content-marketing-automation', description: 'AI-powered content creation and optimization', featured: true },
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform', description: 'Intelligent financial planning and analysis', featured: true },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', description: 'AI-powered sales optimization', featured: true },
      { name: 'AI HR Analytics Platform', href: '/ai-hr-analytics-platform', description: 'Human resources analytics and insights' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine', description: 'AI-powered business decision support' },
      { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform', description: 'Intelligent content creation and management' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite', description: 'Smart CRM with AI insights' },
      { name: 'AI Legal Document Intelligence', href: '/ai-legal-document-intelligence', description: 'AI-powered legal document analysis', featured: true },
      { name: 'AI Creative Content Studio', href: '/ai-creative-content-studio', description: 'AI-powered creative content generation', featured: true },
      { name: 'AI Education Intelligence', href: '/ai-education-intelligence-platform', description: 'AI-powered personalized education', featured: true }
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
      { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029', description: 'Next-generation AI consciousness', featured: true },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Quantum-enhanced AI neural networks' },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations', description: 'Fully autonomous business AI systems' },
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant', description: 'AI-powered research automation' },
      { name: 'AI Emotional Intelligence Training', href: '/ai-emotional-intelligence-training', description: 'AI emotional intelligence development' },
      { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform', description: 'AI-powered predictive maintenance' },
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine', description: 'AI content personalization' },
      { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager', description: 'AI ecosystem management' },
      { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework', description: 'AI ethics and governance' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics-platform', description: 'AI-powered medical diagnostics', featured: true }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Breakthrough quantum and space technologies',
    badge: 'Revolutionary',
    featured: true,
    children: [
      { name: 'Quantum Financial Risk Management', href: '/quantum-financial-risk-management', description: 'Quantum-powered financial risk assessment', featured: true },
      { name: 'Quantum Cybersecurity Intelligence', href: '/quantum-cybersecurity-intelligence', description: 'Unbreakable quantum security', featured: true },
      { name: 'Quantum Internet Infrastructure', href: '/quantum-internet-infrastructure', description: 'Next-generation quantum internet', featured: true },
      { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform', description: 'Quantum-secure internet' },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure', description: 'Quantum-secure cloud platforms' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading', description: 'Quantum-enhanced trading' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology', description: 'AI space exploration' },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery-platform', description: 'Quantum materials science' },
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform', description: 'AI autonomous vehicles' },
      { name: 'Quantum Bio-Computing Platform', href: '/quantum-bio-computing-platform', description: 'Quantum-biological computing' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Quantum energy solutions' },
      { name: 'Quantum Robotics Platform', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' }
    ]
  },
  {
    name: 'Enterprise IT Solutions',
    href: '/it-services',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure solutions',
    badge: 'Enterprise',
    children: [
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center', description: 'Self-managing IT infrastructure' },
      { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform', description: 'Edge computing management' },
      { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform', description: 'AI-enhanced DevOps' },
      { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum cloud platforms' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Zero trust security architecture' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity', description: 'AI cybersecurity solutions' },
      { name: 'Autonomous Manufacturing Intelligence', href: '/autonomous-manufacturing-intelligence', description: 'AI-powered manufacturing', featured: true },
      { name: 'Autonomous Supply Chain Orchestration', href: '/autonomous-supply-chain-orchestration', description: 'Self-managing supply chains', featured: true }
    ]
  },
  {
    name: 'Industry Solutions',
    href: '/industry-solutions',
    icon: <Building className="w-5 h-5" />,
    description: 'Industry-specific technology solutions',
    badge: 'Specialized',
    children: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions', description: 'Healthcare technology solutions' },
      { name: 'Financial Services', href: '/financial-solutions', description: 'Financial technology solutions' },
      { name: 'Manufacturing AI Solutions', href: '/manufacturing-ai-solutions', description: 'AI manufacturing solutions' },
      { name: 'Retail Technology Solutions', href: '/retail-technology-solutions', description: 'Retail technology' },
      { name: 'Education Technology Solutions', href: '/education-technology-solutions', description: 'Educational technology' },
      { name: 'Government Technology Solutions', href: '/government-technology-solutions', description: 'Government technology' },
      { name: 'Energy & Utilities Solutions', href: '/energy-utilities-solutions', description: 'Energy technology' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform', description: 'Biotechnology AI research' }
    ]
  },
  {
    name: 'All Services Showcase',
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
    name: 'Resources & Support',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Documentation, support, and learning resources',
    children: [
      { name: 'Blog & Insights', href: '/blog', description: 'Latest technology insights' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories and implementations' },
      { name: 'Support Center', href: '/support', description: 'Technical support and help' },
      { name: 'Training & Certification', href: '/training', description: 'Professional development' },
      { name: 'Market Pricing Guide', href: '/market-pricing', description: 'Market pricing and references' },
      { name: 'Services Advertising', href: '/services-advertising', description: 'Service marketing materials' },
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab', description: 'RAG quality assessment' },
      { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation', description: 'Compliance automation' },
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud', description: 'Browser automation services' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation', description: 'Security automation' },
      { name: 'API Performance Testing', href: '/api-performance-testing', description: 'API testing services' }
    ]
  }
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

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
        : 'bg-black/40 backdrop-blur-lg border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group" onClick={closeAllDropdowns}>
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-xl lg:text-2xl bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  ZionTech Group
                </span>
                <p className="text-xs text-gray-400">Future of Technology</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 group-hover:bg-white/10 ${
                    activeDropdown === item.name
                      ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                      item.featured 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                        : 'bg-cyan-400/20 text-cyan-400'
                    }`}>
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
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.title || item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeAllDropdowns}
                              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30' 
                                  : 'hover:bg-white/10'
                              }`}
                            >
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className={`text-sm font-medium ${
                                    child.featured ? 'text-cyan-400' : 'text-white'
                                  }`}>
                                    {child.name}
                                  </span>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-400 mt-1">{child.description}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
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

          {/* Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+13024640950"
                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>
            
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/10 overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {/* Mobile Contact Info */}
                <div className="px-4 py-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="space-y-3">
                    <a
                      href="tel:+13024640950"
                      className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>+1 302 464 0950</span>
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center space-x-3 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>kleber@ziontechgroup.com</span>
                    </a>
                    <div className="flex items-start space-x-3 text-gray-400">
                      <MapPin className="w-5 h-5 mt-0.5" />
                      <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation Items */}
                {navigationItems.map((item) => (
                  <div key={item.name} className="px-4">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-200 ${
                        activeDropdown === item.name
                          ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30'
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                        {item.badge && (
                          <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                            item.featured 
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                              : 'bg-cyan-400/20 text-cyan-400'
                          }`}>
                            {item.badge}
                          </span>
                        )}
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
                          className="mt-2 ml-8 space-y-2"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeAllDropdowns}
                              className={`block p-3 rounded-lg transition-all duration-200 ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400' 
                                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">{child.name}</span>
                                {child.featured && (
                                  <span className="px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                                    Featured
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{child.description}</p>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="px-4">
                  <Link
                    href="/contact"
                    onClick={closeAllDropdowns}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started Today
                  </Link>
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