import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Atom, Shield, Rocket, Target, BookOpen, Users,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe,
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones, 
  Code, Database, Network, Server, Monitor, Smartphone, Camera, Gamepad2,
  Palette, Music, Film, BookOpenCheck, Building, Truck, DollarSign
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
      { name: 'Ultimate 2025 Micro SAAS', href: '/ultimate-2025-micro-saas-showcase', description: 'Latest innovative services', featured: true },
      { name: 'Comprehensive Services 2025', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025#search', description: 'Find specific services' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' },
      { name: 'Revolutionary 2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' },
      { name: 'Ultimate 2026 Showcase', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' },
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' },
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
      { name: 'Decision Engine', href: '/ai-powered-decision-engine', description: 'AI-powered business decisions' },
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations', description: 'Fully autonomous business management' },
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
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    featured: true,
    children: [
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-services', description: 'Next-gen quantum security' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud' },
      { name: 'Space Technology AI', href: '/space-technology-ai-platform', description: 'AI-powered space solutions' },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure', description: 'Unbreakable quantum encryption' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading', description: 'Ultra-fast quantum trading' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security', description: 'Future-proof internet security' },
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
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology', description: 'Revolutionary space AI' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure and security solutions',
    badge: 'Enterprise',
    featured: true,
    children: [
      { name: 'Zero Trust Security', href: '/zero-trust-network-architecture', description: 'Next-gen security architecture' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Edge computing management' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'Self-managing IT systems' },
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Quantum-secured cloud' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', description: 'Intelligent DevOps automation' },
      { name: 'Infrastructure Drift Detection', href: '/infrastructure-drift-detector', description: 'Automated drift detection' },
      { name: 'Incident Automation Suite', href: '/incident-automation-suite', description: 'Automated incident response' },
      { name: 'Vulnerability Assessment', href: '/vulnerability-assessment-penetration-testing', description: 'Comprehensive security testing' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', description: 'Distributed edge computing' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum cloud platform' },
      { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum network infrastructure' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity', description: 'Autonomous threat detection' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent', description: 'Asset management automation' },
      { name: 'Kubernetes RBAC Auditor', href: '/kubernetes-rbac-auditor', description: 'K8s security auditing' },
      { name: 'LLM Gateway', href: '/llm-gateway', description: 'AI model management' },
      { name: 'Managed PostgreSQL HA', href: '/managed-postgres-ha', description: 'High-availability database' }
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
    name: 'Advanced AI Automation',
    href: '/advanced-ai-automation-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI automation for development, testing, DevOps, and security',
    badge: 'Advanced',
    children: [
      { name: 'AI Code Review Copilot', href: '/ai-code-review-copilot', description: 'Intelligent code review' },
      { name: 'AI Testing Automation', href: '/ai-testing-automation', description: 'Automated testing' },
      { name: 'DevOps Intelligence', href: '/devops-intelligence-platform', description: 'AI-powered DevOps' },
      { name: 'Security Automation', href: '/security-automation-suite', description: 'Automated security' },
      { name: 'Data Pipeline Automation', href: '/data-pipeline-automation', description: 'Automated data processing' },
      { name: 'API Testing Automation', href: '/api-testing-automation', description: 'Automated API testing' },
      { name: 'Performance Monitoring', href: '/performance-monitoring-ai', description: 'AI performance tracking' },
      { name: 'Quality Assurance AI', href: '/quality-assurance-ai', description: 'Automated QA' }
    ]
  },
  {
    name: 'Advanced IT Infrastructure',
    href: '/advanced-it-infrastructure-services',
    icon: <Cloud className="w-5 h-5" />,
    description: 'Next-generation infrastructure with quantum computing and edge computing',
    badge: 'Advanced',
    children: [
      { name: 'Quantum Cloud Platform', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum-enhanced cloud' },
      { name: 'Edge Computing Platform', href: '/edge-computing-orchestration-platform', description: 'Distributed edge computing' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform', description: 'Advanced security framework' },
      { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum network infrastructure' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity', description: 'Autonomous threat detection' },
      { name: 'Infrastructure Drift Detector', href: '/infrastructure-drift-detector', description: 'Configuration monitoring' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent', description: 'Asset management automation' },
      { name: 'Kubernetes RBAC Auditor', href: '/kubernetes-rbac-auditor', description: 'K8s security auditing' },
      { name: 'LLM Gateway', href: '/llm-gateway', description: 'AI model management' },
      { name: 'Managed PostgreSQL HA', href: '/managed-postgres-ha', description: 'High-availability database' }
    ]
  },
  {
    name: 'Innovative Business Solutions',
    href: '/innovative-business-solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'AI-powered business intelligence, marketing, sales, and HR solutions',
    badge: 'Innovative',
    children: [
      { name: 'Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'AI-powered analytics' },
      { name: 'Marketing Automation', href: '/ai-autonomous-marketing-platform', description: 'Autonomous marketing AI' },
      { name: 'Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'AI-powered sales automation' },
      { name: 'HR Analytics Platform', href: '/intelligent-hr-analytics-platform', description: 'AI-powered HR insights' },
      { name: 'Customer Success Platform', href: '/ai-customer-success-platform', description: 'AI-powered customer retention' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', description: 'AI-powered supply chain management' },
      { name: 'Financial Planning AI', href: '/ai-financial-planning-platform', description: 'Intelligent financial planning' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform', description: 'AI-powered content management' }
    ]
  }
];

export default function UltraFuturisticNavigation2035() {
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-black/80 backdrop-blur-lg'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center text-cyan-300 hover:text-cyan-200 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {contactInfo.mobile}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center text-cyan-300 hover:text-cyan-200 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {contactInfo.email}
              </a>
              <div className="flex items-center text-cyan-300">
                <MapPin className="w-4 h-4 mr-2" />
                {contactInfo.address}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href={contactInfo.website} className="text-cyan-300 hover:text-cyan-200 transition-colors">
                {contactInfo.website}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-sm text-gray-400">Innovation • Intelligence • Impact</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      item.badge === 'Advanced' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                      item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      item.badge === 'Innovative' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                      'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                      onMouseLeave={closeDropdown}
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.title || item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                            >
                              <div>
                                <div className="text-white group-hover:text-cyan-400 transition-colors">
                                  {child.name}
                                </div>
                                <div className="text-sm text-gray-400">{child.description}</div>
                              </div>
                              {child.featured && (
                                <Star className="w-4 h-4 text-cyan-400" />
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

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 border border-cyan-500/30 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
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
                      className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                            item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                            item.badge === 'Advanced' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                            item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                            item.badge === 'Innovative' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                            'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
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
                            className="block p-3 text-gray-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-gray-800/50"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">{child.name}</div>
                            <div className="text-sm">{child.description}</div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/pricing"
                    className="block w-full px-6 py-3 border border-cyan-500/30 text-cyan-400 font-medium rounded-lg text-center hover:bg-cyan-500/10 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}