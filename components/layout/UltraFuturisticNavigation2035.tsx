import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, Star, 
  Sparkles, Cpu, Lock, Cloud, Settings, Eye, Award, 
  Clock, Heart, Lightbulb, Search, User, ShoppingCart,
  Bell, HelpCircle, FileText, Video, Headphones, 
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
    href: '/ultimate-2025-futuristic-services-showcase',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'New',
    featured: true,
    children: [
      { name: 'Ultimate 2025 Showcase', href: '/ultimate-2025-futuristic-services-showcase', description: 'Most advanced services ever created' },
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/ultimate-2025-futuristic-services-showcase#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/ultimate-2025-futuristic-services-showcase#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/ultimate-2025-futuristic-services-showcase#search', description: 'Find specific services' },
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
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Unbreakable cloud security' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'Self-managing IT systems' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', description: 'Distributed edge computing' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', description: 'Intelligent DevOps automation' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum cloud platform' },
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
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Popular',
    featured: true,
    children: [
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations', description: 'Fully autonomous business management' },
      { name: 'AI Customer Success', href: '/ai-customer-success-platform', description: 'Intelligent customer support' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', description: 'AI-powered logistics' },
      { name: 'Financial Planning AI', href: '/ai-financial-planning-platform', description: 'Intelligent financial management' },
      { name: 'HR Analytics Platform', href: '/intelligent-hr-analytics-platform', description: 'People analytics' },
      { name: 'Sales Intelligence AI', href: '/ai-sales-intelligence-platform', description: 'Sales automation' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine', description: 'Automated decision making' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform', description: 'Content creation automation' },
      { name: 'Smart CRM Suite', href: '/smart-crm-intelligence-suite', description: 'Intelligent CRM' },
      { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'AI-powered analytics' },
      { name: 'AI Content Generation Platform', href: '/ai-content-generation-platform', description: 'Automated content creation' },
      { name: 'Sales Copilot', href: '/sales-copilot', description: 'AI sales assistant' },
      { name: 'Customer Service AI', href: '/customer-service-ai', description: 'Intelligent support' },
      { name: 'AI HR Recruitment', href: '/ai-hr-recruitment', description: 'Automated hiring' },
      { name: 'AI Sales Automation', href: '/ai-sales-automation', description: 'Sales process automation' }
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
    badge: 'Next-Gen',
    children: [
      { name: 'Quantum Cloud', href: '/quantum-cloud-infrastructure', description: 'Quantum computing cloud' },
      { name: 'Edge Computing', href: '/edge-computing-platform', description: 'Distributed edge infrastructure' },
      { name: 'Zero Trust Security', href: '/zero-trust-network-architecture', description: 'Advanced security architecture' },
      { name: 'Hybrid Cloud Management', href: '/hybrid-cloud-management', description: 'Multi-cloud orchestration' },
      { name: 'Container Orchestration', href: '/container-orchestration-platform', description: 'Kubernetes management' },
      { name: 'Serverless Architecture', href: '/serverless-architecture-platform', description: 'Event-driven computing' },
      { name: 'Microservices Platform', href: '/microservices-platform', description: 'Service mesh management' },
      { name: 'Data Center Automation', href: '/data-center-automation', description: 'Automated infrastructure' }
    ]
  },
  {
    name: 'Innovative Business Solutions',
    href: '/innovative-business-solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'AI-powered business intelligence, marketing, sales, and HR solutions',
    badge: 'Business',
    children: [
      { name: 'Business Intelligence', href: '/business-intelligence-platform', description: 'AI-powered analytics' },
      { name: 'Marketing Automation', href: '/marketing-automation-ai', description: 'Intelligent marketing' },
      { name: 'Sales Intelligence', href: '/sales-intelligence-platform', description: 'Sales optimization' },
      { name: 'HR Analytics', href: '/hr-analytics-platform', description: 'People analytics' },
      { name: 'Financial Planning', href: '/financial-planning-ai', description: 'AI financial management' },
      { name: 'Supply Chain Intelligence', href: '/supply-chain-intelligence', description: 'Logistics optimization' },
      { name: 'Customer Intelligence', href: '/customer-intelligence-platform', description: 'Customer insights' },
      { name: 'Risk Management AI', href: '/risk-management-ai', description: 'Intelligent risk assessment' }
    ]
  },
  {
    name: 'Industry Solutions',
    href: '/industry-solutions',
    icon: <Building className="w-5 h-5" />,
    description: 'Specialized solutions for specific industries',
    badge: 'Industry',
    children: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions', description: 'Medical technology solutions' },
      { name: 'Financial Services', href: '/financial-solutions', description: 'Fintech and banking solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Smart manufacturing' },
      { name: 'Retail Technology', href: '/retail-technology-solutions', description: 'Retail innovation' },
      { name: 'Education Technology', href: '/education-technology-solutions', description: 'EdTech solutions' },
      { name: 'Government Solutions', href: '/government-technology-solutions', description: 'Public sector tech' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions', description: 'Energy optimization' },
      { name: 'Transportation & Logistics', href: '/transportation-logistics-solutions', description: 'Logistics innovation' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform', description: 'Biotechnology AI' },
      { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing-ai', description: 'Smart factory automation' },
      { name: 'Space Technology', href: '/ai-powered-space-technology', description: 'Space exploration AI' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge base, documentation, and learning resources',
    badge: 'Learn',
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api-documentation', description: 'API documentation' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Blog & News', href: '/blog', description: 'Latest insights' },
      { name: 'Support Center', href: '/support', description: 'Help and support' },
      { name: 'Training & Certification', href: '/training', description: 'Professional development' },
      { name: 'Community Forum', href: '/community', description: 'User community' },
      { name: 'Developer Resources', href: '/developer-resources', description: 'Developer tools' },
      { name: 'Video Tutorials', href: '/video-tutorials', description: 'Learning videos' },
      { name: 'Webinars', href: '/webinars', description: 'Live learning sessions' }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Users className="w-5 h-5" />,
    description: 'About Zion Tech Group and company information',
    badge: 'About',
    children: [
      { name: 'About Us', href: '/about', description: 'Company overview' },
      { name: 'Our Team', href: '/team', description: 'Meet our experts' },
      { name: 'Careers', href: '/careers', description: 'Job opportunities' },
      { name: 'Press & Media', href: '/press', description: 'Media resources' },
      { name: 'Partners', href: '/partners', description: 'Partnership opportunities' },
      { name: 'Contact Us', href: '/contact', description: 'Get in touch' },
      { name: 'Newsletter', href: '/newsletter', description: 'Stay updated' },
      { name: 'Events', href: '/events', description: 'Upcoming events' }
    ]
  }
];

export default function UltraFuturisticNavigation2035() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      scrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-300">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/support" className="hover:text-cyan-100 transition-colors">
                <HelpCircle className="w-3 h-3" />
              </Link>
              <Link href="/docs" className="hover:text-cyan-100 transition-colors">
                <FileText className="w-3 h-3" />
              </Link>
              <Link href="/training" className="hover:text-cyan-100 transition-colors">
                <BookOpenCheck className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-cyan-400/70">Future Technology Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    item.featured
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 hover:from-cyan-500/30 hover:to-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      item.badge === 'Popular' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      item.badge === 'Enterprise' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                      item.badge === 'Advanced' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                      item.badge === 'Next-Gen' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' :
                      item.badge === 'Business' ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' :
                      item.badge === 'Industry' ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30' :
                      item.badge === 'Learn' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      item.badge === 'About' ? 'bg-gray-500/20 text-gray-400 border border-gray-500/30' :
                      'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
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
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                          <p className="text-sm text-cyan-300/70">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.slice(0, 8).map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={closeDropdown}
                              className="flex items-center space-x-3 p-3 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                              <div className="flex-1">
                                <div className="font-medium">{child.name}</div>
                                <div className="text-xs text-cyan-300/60">{child.description}</div>
                              </div>
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </Link>
                          ))}
                          {item.children && item.children.length > 8 && (
                            <Link
                              href={item.href}
                              onClick={closeDropdown}
                              className="flex items-center justify-center p-3 mt-2 rounded-lg text-sm text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200 border border-cyan-500/30"
                            >
                              View All {item.name}
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
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 relative">
              <Bell className="w-5 h-5" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>

            {/* Cart */}
            <Link href="/cart" className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 relative">
              <ShoppingCart className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                3
              </div>
            </Link>

            {/* User Menu */}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        item.badge === 'Popular' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                  {item.children && (
                    <div className="ml-6 space-y-1">
                      {item.children.slice(0, 3).map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block p-2 rounded text-sm text-cyan-300/70 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                      {item.children.length > 3 && (
                        <Link
                          href={item.href}
                          className="block p-2 rounded text-sm text-cyan-400 hover:text-cyan-300 transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          View All {item.name} →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}