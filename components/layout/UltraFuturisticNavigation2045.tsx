import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Shield, Atom, BookOpen,
  DollarSign, BarChart3, Star, Sparkles, 
  Grid, Globe, Zap, Cpu, Database, Cloud,
  HelpCircle, FileText, Video, 
  Building, MessageCircle, Target, Palette,
  Heart, Truck, GraduationCap, Lock, Eye,
  Users, TrendingUp, Award, Globe2,
  Search, Filter, Settings, Bell, User, Clock, Calendar
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
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'Featured',
    featured: true,
    category: 'AI Services',
    children: [
      { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029', description: 'Next-generation AI consciousness platform', featured: true },
      { name: 'AI Emotional Intelligence Training', href: '/ai-emotional-intelligence-training', description: 'Advanced emotional AI development' },
      { name: 'Autonomous Business Operations', href: '/autonomous-business-operations-platform', description: 'AI-powered business automation' },
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant', description: 'Self-directed research AI' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Intelligent maintenance prediction' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Dynamic content optimization' },
      { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager', description: 'Ecosystem-wide AI management' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI development framework' },
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', description: 'Predictive customer success' },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'AI-powered sales optimization' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Breakthrough quantum and space technologies',
    badge: 'Quantum',
    featured: true,
    category: 'Quantum Technology',
    children: [
      { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks', featured: true },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum financial optimization' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Quantum materials research' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Biological quantum computing' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Quantum-secure internet' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum cloud computing' },
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Space resource extraction' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology', description: 'Intelligent space systems' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving vehicle intelligence' }
    ]
  },
  {
    name: 'Enterprise IT Solutions',
    href: '/it-solutions',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure solutions',
    badge: 'Enterprise',
    category: 'IT Infrastructure',
    children: [
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure', description: 'Quantum-secure cloud computing' },
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center', description: 'Self-managing IT operations' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', description: 'Intelligent edge computing' },
      { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform', description: 'Intelligent DevOps automation' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Advanced security framework' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity', description: 'Intelligent threat detection' },
      { name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management', description: 'Smart asset management' },
      { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation', description: 'Automated compliance management' },
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab', description: 'RAG quality assessment' }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'New',
    category: 'Business Solutions',
    children: [
      { name: 'AI Content Generator', href: '/ai-content-generator', description: 'Intelligent content creation' },
      { name: 'AI Code Review', href: '/ai-code-review', description: 'Automated code analysis' },
      { name: 'Intelligent HR Analytics Platform', href: '/intelligent-hr-analytics-platform', description: 'AI-powered HR insights' },
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform', description: 'Intelligent financial planning' },
      { name: 'Intelligent Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', description: 'Supply chain intelligence' },
      { name: 'Intelligent Content Automation Platform', href: '/intelligent-content-automation-platform', description: 'Content workflow automation' },
      { name: 'Smart CRM Intelligence Suite', href: '/smart-crm-intelligence-suite', description: 'Intelligent CRM optimization' },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite', description: 'Automated SEO optimization' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent', description: 'Automated asset discovery' },
      { name: 'Managed Postgres HA', href: '/managed-postgres-ha', description: 'High-availability database management' }
    ]
  },
  {
    name: 'Specialized Solutions',
    href: '/specialized-solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific and specialized services',
    badge: 'Specialized',
    category: 'Specialized Services',
    children: [
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud', description: 'Scalable browser automation' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation', description: 'Automated security management' },
      { name: 'API Performance Testing', href: '/api-performance-testing', description: 'Comprehensive API testing' },
      { name: 'Sales Copilot', href: '/sales-copilot', description: 'AI-powered sales assistance' },
      { name: 'Serverless Cron Manager', href: '/serverless-cron-manager', description: 'Serverless task scheduling' },
      { name: 'SSO in a Box', href: '/sso-in-a-box', description: 'Complete SSO solution' },
      { name: 'Status Pages & SLO Monitor', href: '/status-pages-slo', description: 'Service monitoring and status' },
      { name: 'Synthetic Monitor Recorder', href: '/synthetic-monitor-recorder', description: 'Automated monitoring setup' },
      { name: 'TLS Certificate Monitor', href: '/tls-certificate-monitor', description: 'Certificate lifecycle management' },
      { name: 'Uptime SLO Monitor', href: '/uptime-slo-monitor', description: 'Uptime and performance monitoring' }
    ]
  },
  {
    name: 'Showcase & Pricing',
    href: '/comprehensive-services-showcase-2025',
    icon: <Star className="w-5 h-5" />,
    description: 'Complete portfolio and pricing information',
    badge: 'Showcase',
    featured: true,
    category: 'Portfolio',
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
  }
];

const UltraFuturisticNavigation2045: React.FC = () => {
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

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <>
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
                  <MessageCircle className="w-4 h-4" />
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-black/40 backdrop-blur-lg'
      }`}>
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-1">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="relative group"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    custom={index}
                  >
                    <button
                      className="flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                      onClick={() => toggleDropdown(item.name)}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className={`px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full ${
                          item.featured ? 'animate-pulse' : ''
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
                          className="absolute top-full left-0 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-cyan-500/25 p-4"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="space-y-3">
                            {item.children?.map((child) => (
                              <motion.div key={child.name} variants={itemVariants}>
                                <Link
                                  href={normalizeHref(child.href)}
                                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                                    child.featured 
                                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30' 
                                      : 'hover:bg-white/5'
                                  }`}
                                  onClick={closeDropdown}
                                >
                                  <div className={`w-2 h-2 rounded-full ${
                                    child.featured 
                                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse' 
                                      : 'bg-gray-400'
                                  }`} />
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2">
                                      <span className={`text-sm font-medium ${
                                        child.featured ? 'text-cyan-300' : 'text-white'
                                      }`}>
                                        {child.name}
                                      </span>
                                      {child.featured && (
                                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1">{child.description}</p>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Right Side Actions */}
              <div className="hidden lg:flex items-center space-x-4">
                <motion.a
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:scale-105"
                  href="/contact/"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Get Started
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors duration-200"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="pl-4 space-y-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
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
    </>
  );
};

export default UltraFuturisticNavigation2045;