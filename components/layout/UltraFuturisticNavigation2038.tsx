import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Shield, Atom, BookOpen,
  DollarSign, BarChart3, Star, Sparkles, 
  Grid, Globe, Zap, Cpu, Database, Cloud,
  HelpCircle, FileText, Video, 
  Building, MessageCircle, Target, Eye, Lock, Clock
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
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    featured: true,
    children: [
      { name: 'AI Consciousness Evolution 2037', href: '/ai-consciousness-evolution-2037', description: 'Revolutionary AI consciousness platform', featured: true },
      { name: 'AI Emotional Intelligence Training', href: '/ai-emotional-intelligence-2037', description: 'Advanced AI empathy and emotional understanding', featured: true },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations-2037', description: 'Fully autonomous business decision-making', featured: true },
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', description: 'Predict and prevent churn with AI' },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Supercharge sales with AI automation' },
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro-2037', description: 'Advanced AI content creation platform' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'AI-powered equipment maintenance' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI development framework' }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Breakthrough quantum computing and quantum AI',
    badge: 'Quantum',
    featured: true,
    children: [
      { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-2037', description: 'Revolutionary quantum-powered neural networks', featured: true },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-2037', description: 'Quantum-powered financial trading', featured: true },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure-2037', description: 'Future-proof quantum-resistant security' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'AI-powered materials discovery' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Next-generation internet security' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum biological computing' },
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-platform', description: 'Quantum energy management' },
      { name: 'Quantum Logistics Optimization', href: '/quantum-logistics-optimization', description: 'Quantum supply chain optimization' }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-tech',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Revolutionary space exploration and resource mining',
    badge: 'Space',
    featured: true,
    children: [
      { name: 'Space Resource Mining Platform', href: '/space-resource-mining-2037', description: 'Automated space resource extraction', featured: true },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology', description: 'AI-driven space exploration' },
      { name: 'Space Colonization Services', href: '/space-colonization-services', description: 'Human space settlement solutions' },
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform', description: 'Automated space mining operations' },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI space technology integration' },
      { name: 'Space Resource Optimization', href: '/space-resource-optimization', description: 'Space resource management' }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    href: '/micro-saas',
    icon: <Zap className="w-5 h-5" />,
    description: 'Innovative business automation and productivity tools',
    badge: 'Featured',
    children: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro-2037', description: 'Professional AI content creation', featured: true },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation-2037', description: 'Intelligent customer success platform', featured: true },
      { name: 'AI HR Analytics Platform', href: '/intelligent-hr-analytics-platform', description: 'AI-powered HR insights' },
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform', description: 'Intelligent financial planning' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', description: 'AI supply chain management' },
      { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform', description: 'Automated content management' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite', description: 'AI-powered CRM insights' },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite', description: 'Technical SEO automation' }
    ]
  },
  {
    name: 'IT Infrastructure',
    href: '/it-solutions',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure and security',
    badge: 'Enterprise',
    children: [
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure-2037', description: 'Quantum-resistant cloud security', featured: true },
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-2037', description: 'Fully autonomous IT operations', featured: true },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Advanced security architecture' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity', description: 'Intelligent threat detection' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', description: 'Edge computing management' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform', description: 'Intelligent DevOps automation' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent', description: 'Agentless IT asset discovery' }
    ]
  },
  {
    name: 'Specialized Solutions',
    href: '/specialized-solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific and specialized services',
    children: [
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud', description: 'Scale headless browser flows' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation', description: 'Policy-driven key rotation' },
      { name: 'API Performance Testing', href: '/api-performance-testing', description: 'Load/soak tests with CI gates' },
      { name: 'Sales Copilot', href: '/sales-copilot', description: 'AI-powered sales assistance' },
      { name: 'Serverless Cron Manager', href: '/serverless-cron-manager', description: 'Serverless task scheduling' },
      { name: 'SSO in a Box', href: '/sso-in-a-box', description: 'Single sign-on solution' },
      { name: 'Status Pages & SLO Monitor', href: '/status-pages-slo', description: 'Service level monitoring' },
      { name: 'Synthetic Monitor Recorder', href: '/synthetic-monitor-recorder', description: 'Automated monitoring setup' }
    ]
  },
  {
    name: 'Showcase & Pricing',
    href: '/comprehensive-2037-innovative-services-showcase',
    icon: <Star className="w-5 h-5" />,
    description: 'Complete portfolio and pricing information',
    badge: 'Showcase',
    featured: true,
    children: [
      { name: '2037 Innovative Services Showcase', href: '/comprehensive-2037-innovative-services-showcase', description: 'Complete 2037 services portfolio', featured: true },
      { name: 'Comprehensive Services 2025', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Ultimate 2035 Futuristic', href: '/ultimate-2035-futuristic-services-showcase', description: 'Revolutionary future technology' },
      { name: 'Ultimate 2025 Micro SAAS', href: '/ultimate-2025-micro-saas-showcase', description: 'Latest innovative services' },
      { name: 'Revolutionary 2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: 'Revolutionary 2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' },
      { name: 'Ultimate 2026 Services', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' },
      { name: 'Enterprise Solutions', href: '/enterprise-solutions-showcase', description: 'Enterprise-grade solutions' }
    ]
  }
];

const UltraFuturisticNavigation2038: React.FC = () => {
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
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
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <span className="hover:text-cyan-400 transition-colors duration-200">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Globe className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
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
                  <BookOpen className="w-4 h-4" />
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

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-black/40 backdrop-blur-lg border-b border-white/5'
      }`}>
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
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
                  <div key={item.name} className="relative group">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          item.badge === 'New' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          item.badge === 'Quantum' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                          item.badge === 'Space' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                          item.badge === 'Featured' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          item.badge === 'Enterprise' ? 'bg-gradient-to-r from-indigo-500 to-purple-500' :
                          item.badge === 'Showcase' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                          'bg-gradient-to-r from-cyan-500 to-purple-500'
                        } text-white`}>
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
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                          onMouseLeave={closeDropdown}
                        >
                          <div className="p-4">
                            <div className="mb-4">
                              <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                              <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                            <div className="space-y-1">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.name}
                                  href={normalizeHref(child.href)}
                                  className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 group ${
                                    child.featured 
                                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30' 
                                      : 'hover:bg-white/5'
                                  }`}
                                  onClick={closeDropdown}
                                >
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2">
                                      <span className={`font-medium ${
                                        child.featured ? 'text-cyan-400' : 'text-white'
                                      }`}>
                                        {child.name}
                                      </span>
                                      {child.featured && (
                                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-sm text-gray-400 mt-1">{child.description}</p>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
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
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 transform hover:scale-105"
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
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full p-3 text-left text-white hover:text-cyan-400 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="ml-6 space-y-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            className="block p-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">{child.name}</div>
                            <div className="text-sm text-gray-500">{child.description}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
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

export default UltraFuturisticNavigation2038;