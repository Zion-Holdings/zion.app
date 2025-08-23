import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Shield, Atom, BookOpen,
  DollarSign, BarChart3, Star, Sparkles, 
  Grid, Globe, Cpu, Database, Cloud, Palette,
  HelpCircle, FileText, Video, Building, MessageCircle,
  Zap, Target, Users, Award, TrendingUp, Lock, Clock, Calendar
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
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', description: 'Predict and prevent churn with AI', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Supercharge sales with AI automation', featured: true },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'Advanced emotional AI training', featured: true },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Autonomous research and analysis', featured: true },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Predictive maintenance with AI', featured: true },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content with AI', featured: true },
      { name: 'AI Autonomous Operations', href: '/autonomous-business-operations-platform', description: 'Fully autonomous business operations', featured: true },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'AI ethics and governance framework', featured: true }
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
      { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks', featured: true },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum financial optimization', featured: true },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Quantum materials research', featured: true },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Quantum-secured communications', featured: true },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum cloud computing', featured: true },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum biological computing', featured: true },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Quantum threat protection', featured: true },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Quantum energy optimization', featured: true }
    ]
  },
  {
    name: 'Enterprise IT Solutions',
    href: '/enterprise-solutions',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure solutions',
    badge: 'Enterprise',
    category: 'IT Infrastructure',
    children: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Quantum-secured cloud platform', featured: true },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'AI-powered IT operations', featured: true },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', description: 'Edge computing management', featured: true },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain platform', featured: true },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', description: 'Intelligent DevOps automation', featured: true },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform', description: 'Zero trust security framework', featured: true },
      { name: 'AI Cybersecurity', href: '/ai-powered-cybersecurity', description: 'AI-powered threat protection', featured: true },
      { name: 'IT Asset Management', href: '/ai-powered-it-asset-management', description: 'Intelligent asset management', featured: true }
    ]
  },
  {
    name: 'Micro SAAS Services',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'New',
    category: 'Business Solutions',
    children: [
      { name: 'AI Content Generator', href: '/ai-content-generator', description: 'AI-powered content creation', featured: true },
      { name: 'AI Code Review', href: '/ai-code-review', description: 'Intelligent code analysis', featured: true },
      { name: 'AI HR Analytics', href: '/intelligent-hr-analytics-platform', description: 'HR intelligence platform', featured: true },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', description: 'Intelligent financial planning', featured: true },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', description: 'AI supply chain optimization', featured: true },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform', description: 'Automated content management', featured: true },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite', description: 'Intelligent CRM platform', featured: true },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite', description: 'Automated SEO optimization', featured: true }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Revolutionary space exploration and resource management',
    badge: 'Space',
    category: 'Space Technology',
    children: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Space resource extraction', featured: true },
      { name: 'AI-Powered Space Tech', href: '/ai-powered-space-technology', description: 'AI space technology platform', featured: true },
      { name: 'Space Intelligence 2040', href: '/space-resource-intelligence-2040', description: 'Future space intelligence', featured: true },
      { name: 'Autonomous Space Operations', href: '/autonomous-space-operations-center', description: 'AI space mission control', featured: true },
      { name: 'Space Resource Intelligence', href: '/space-resource-intelligence-2040', description: 'Space resource analytics', featured: true }
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
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud', description: 'Scalable browser automation', featured: true },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation', description: 'Automated security management', featured: true },
      { name: 'API Performance Testing', href: '/api-performance-testing', description: 'API performance optimization', featured: true },
      { name: 'Sales Copilot', href: '/sales-copilot', description: 'AI-powered sales assistance', featured: true },
      { name: 'Serverless Cron Manager', href: '/serverless-cron-manager', description: 'Serverless task scheduling', featured: true },
      { name: 'SSO in a Box', href: '/sso-in-a-box', description: 'Single sign-on solution', featured: true },
      { name: 'Status Pages & SLO', href: '/status-pages-slo', description: 'Service monitoring and status', featured: true },
      { name: 'Synthetic Monitor Recorder', href: '/synthetic-monitor-recorder', description: 'Automated monitoring', featured: true }
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
      { name: 'All Services Portfolio', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio', featured: true },
      { name: 'Ultimate 2035 Futuristic', href: '/ultimate-2035-futuristic-services-showcase', description: 'Revolutionary future technology', featured: true },
      { name: 'Ultimate 2025 Micro SAAS', href: '/ultimate-2025-micro-saas-showcase', description: 'Latest innovative services', featured: true },
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions', featured: true },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services', featured: true },
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection', featured: true },
      { name: 'Market Pricing', href: '/market-pricing', description: 'Average market prices & references', featured: true },
      { name: 'Pricing Comparison', href: '/pricing', description: 'Service pricing comparison', featured: true }
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

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
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
                <Link href="/contact" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <MessageCircle className="w-4 h-4" />
                  <span>Get Quote</span>
                </Link>
                <Link href="/contact" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <Calendar className="w-4 h-4" />
                  <span>Book Demo</span>
                </Link>
                <Link href="/support" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <MessageCircle className="w-4 h-4" />
                  <span>Live Chat</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-black/40 backdrop-blur-lg'
      }`}>
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl shadow-lg shadow-cyan-500/25"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-500/50 rounded-xl animate-pulse"></div>
                </motion.div>
                <div className="flex flex-col">
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    ZionTech Group
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xs text-white/60"
                  >
                    Future Technology Solutions
                  </motion.span>
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
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          item.badge === 'Featured' ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' :
                          item.badge === 'New' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' :
                          item.badge === 'Quantum' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                          item.badge === 'Space' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' :
                          item.badge === 'Enterprise' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' :
                          'bg-gradient-to-r from-gray-500 to-slate-500 text-white'
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
                          className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="mb-4">
                              <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                              <p className="text-white/60 text-sm">{item.description}</p>
                            </div>
                            <div className="space-y-2">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.name}
                                  href={normalizeHref(child.href)}
                                  onClick={closeAllDropdowns}
                                  className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                                >
                                  <div>
                                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                      {child.name}
                                    </div>
                                    <div className="text-white/60 text-sm">{child.description}</div>
                                  </div>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                      Featured
                                    </span>
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

              {/* CTA Button */}
              <div className="hidden lg:flex items-center space-x-4">
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
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
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">{item.name}</span>
                      {item.badge && (
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          item.badge === 'Featured' ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' :
                          item.badge === 'New' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' :
                          item.badge === 'Quantum' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                          item.badge === 'Space' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' :
                          item.badge === 'Enterprise' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' :
                          'bg-gradient-to-r from-gray-500 to-slate-500 text-white'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="pl-4 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          onClick={closeAllDropdowns}
                          className="block text-white/70 hover:text-cyan-400 transition-colors text-sm"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
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