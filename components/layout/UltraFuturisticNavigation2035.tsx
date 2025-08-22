import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles, 
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon
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
    href: '/ultimate-2025-micro-saas-showcase',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    featured: true,
    children: [
      { name: 'Ultimate 2025 Micro SAAS', href: '/ultimate-2025-micro-saas-showcase', description: 'Latest innovative services', featured: true },
      { name: 'Comprehensive Services 2025', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Revolutionary 2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: 'Ultimate 2026 Showcase', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' },
      { name: 'Enterprise Solutions', href: '/enterprise-solutions-showcase', description: 'Enterprise-grade solutions' },
      { name: 'Innovative Business Solutions', href: '/innovative-business-solutions', description: 'Business transformation services' }
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
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', description: 'AI-powered supply chain management' },
      { name: 'Financial Planning Platform', href: '/ai-financial-planning-platform', description: 'Intelligent financial planning' },
      { name: 'HR Analytics Platform', href: '/intelligent-hr-analytics-platform', description: 'AI-powered HR insights' },
      { name: 'Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', description: 'AI-powered sales automation' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite', description: 'Transform your CRM with AI' },
      { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform', description: 'AI-powered content management' },
      { name: 'Decision Engine', href: '/ai-powered-decision-engine', description: 'AI-powered business decisions' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    children: [
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-services', description: 'Next-gen quantum security' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud' },
      { name: 'Space Technology AI', href: '/space-technology-ai-platform', description: 'AI-powered space solutions' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure and security solutions',
    badge: 'Enterprise',
    children: [
      { name: 'Zero Trust Security', href: '/zero-trust-network-architecture', description: 'Next-gen security architecture' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Edge computing management' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'Self-managing IT systems' },
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Quantum-secured cloud' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', description: 'Intelligent DevOps automation' },
      { name: 'Infrastructure Drift Detection', href: '/infrastructure-drift-detector', description: 'Automated drift detection' },
      { name: 'Incident Automation Suite', href: '/incident-automation-suite', description: 'Automated incident response' },
      { name: 'Vulnerability Assessment', href: '/vulnerability-assessment-penetration-testing', description: 'Comprehensive security testing' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions and use cases',
    children: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions', description: 'AI-powered healthcare technology' },
      { name: 'Financial Services', href: '/financial-solutions', description: 'Fintech and financial automation' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Smart manufacturing solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions', description: 'Retail automation and analytics' },
      { name: 'Education Technology', href: '/education-technology-solutions', description: 'EdTech and learning platforms' },
      { name: 'Government Solutions', href: '/government-technology-solutions', description: 'Public sector technology' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions', description: 'Energy management and optimization' },
      { name: 'Transportation & Logistics', href: '/transportation-logistics-solutions', description: 'Smart logistics solutions' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Documentation, case studies, and learning resources',
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation and guides' },
      { name: 'API Reference', href: '/api-documentation', description: 'API documentation and examples' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories and implementations' },
      { name: 'Blog & News', href: '/blog', description: 'Latest insights and updates' },
      { name: 'Support Center', href: '/support', description: 'Technical support and help' },
      { name: 'Training & Certification', href: '/training', description: 'Professional development' },
      { name: 'Community Forum', href: '/community', description: 'Connect with other users' },
      { name: 'Developer Resources', href: '/developer-resources', description: 'Tools and resources for developers' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' }
];

export default function UltraFuturisticNavigation2035() {
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
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-cyan-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center hover:text-cyan-200 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {contactInfo.mobile}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center hover:text-cyan-200 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/contact" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                Get Started
              </a>
              <a href="/support" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-black/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Innovation • Intelligence • Impact</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeDropdown === item.name
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        item.badge === 'Showcase' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        item.badge === 'Enterprise' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
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
                                href={child.href}
                                onClick={closeAllDropdowns}
                                className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 ${
                                  child.featured 
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20' 
                                    : 'hover:bg-cyan-500/5'
                                }`}
                              >
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <span className="text-sm font-medium text-white">{child.name}</span>
                                    {child.featured && (
                                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-400">{child.description}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              </Link>
                            ))}
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-cyan-500/20">
                            <Link
                              href={item.href}
                              onClick={closeAllDropdowns}
                              className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                            >
                              View All {item.name}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
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
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.name}</span>
                          {item.badge && (
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              item.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                              item.badge === 'Hot' ? 'bg-red-500/20 text-red-400' :
                              item.badge === 'Showcase' ? 'bg-blue-500/20 text-blue-400' :
                              item.badge === 'Enterprise' ? 'bg-purple-500/20 text-purple-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-6 mt-2 space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={closeAllDropdowns}
                              className={`block p-3 rounded-lg transition-colors ${
                                child.featured 
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20' 
                                  : 'hover:bg-cyan-500/5'
                              }`}
                            >
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-sm font-medium text-white">{child.name}</span>
                                {child.featured && (
                                  <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                                    Featured
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-400">{child.description}</p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-cyan-500/20">
                    <Link
                      href="/contact"
                      onClick={closeAllDropdowns}
                      className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}