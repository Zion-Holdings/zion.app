import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown,
  Brain, Rocket, Shield, 
  Zap,
  Target, Atom,
  BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, X, Phone, Mail, MapPin, ArrowRight,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3 as BarChart3Icon, Settings, Eye, Award, Clock, Heart, Lightbulb
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
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
    children: [
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025#search', description: 'Find specific services' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform', description: 'Human-AI emotional collaboration' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' }
    ]
  },
  {
    name: 'AI Automation',
    href: '/ai-automation-services',
    icon: <Zap className="w-5 h-5" />,
    description: 'Advanced AI-powered automation solutions',
    badge: 'Hot',
    children: [
      { name: 'AI Code Generation', href: '/ai-code-generation-review', description: 'Automated code generation and review' },
      { name: 'DevOps Automation', href: '/ai-devops-automation', description: 'Intelligent DevOps workflows' },
      { name: 'Customer Support AI', href: '/ai-customer-support-automation', description: 'AI-powered customer support' },
      { name: 'Marketing Automation', href: '/ai-marketing-automation', description: 'Intelligent marketing automation' },
      { name: 'Sales Intelligence', href: '/ai-sales-intelligence', description: 'AI-powered sales insights' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Advanced analytics and insights' },
      { name: 'Content Automation', href: '/ai-content-generation-platform', description: 'AI content creation' },
      { name: 'Process Automation', href: '/ai-process-automation', description: 'Intelligent workflow automation' },
      { name: 'Quality Assurance AI', href: '/ai-quality-assurance', description: 'Automated testing and QA' },
      { name: 'Data Processing AI', href: '/ai-data-processing', description: 'Intelligent data handling' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    children: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Unbreakable encryption' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' }
    ]
  },
  {
    name: 'Cybersecurity',
    href: '/cybersecurity-services',
    icon: <Shield className="w-5 h-5" />,
    description: 'Next-generation cybersecurity solutions',
    badge: 'Hot',
    children: [
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform', description: 'Advanced zero trust implementation' },
      { name: 'AI Threat Intelligence', href: '/ai-threat-intelligence', description: 'AI-powered threat detection' },
      { name: 'Cloud Security Posture', href: '/cloud-security-posture', description: 'Multi-cloud security management' },
      { name: 'DevSecOps Security', href: '/devsecops-security-platform', description: 'Security in DevOps pipelines' },
      { name: 'IoT Security Platform', href: '/iot-security-platform', description: 'IoT device protection' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', description: 'Quantum security solutions' },
      { name: 'Incident Response AI', href: '/incident-response-ai', description: 'Automated incident handling' },
      { name: 'Compliance Automation', href: '/compliance-automation', description: 'Regulatory compliance tools' },
      { name: 'Vulnerability Management', href: '/vulnerability-management', description: 'Automated vulnerability scanning' },
      { name: 'Security Analytics', href: '/security-analytics', description: 'Advanced security insights' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    children: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum-enhanced cloud computing' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration', description: 'Edge processing optimization' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops', description: 'Intelligent development automation' },
      { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum communication protocols' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'Self-managing IT systems' },
      { name: 'Quantum Data Center', href: '/quantum-data-center', description: 'Next-gen data centers' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', description: 'Seamless cloud transitions' },
      { name: 'IT Asset Management', href: '/it-asset-management', description: 'Comprehensive asset tracking' },
      { name: 'Infrastructure Monitoring', href: '/infrastructure-monitoring', description: 'Real-time system monitoring' }
    ]
  },
  {
    name: 'Blockchain & Web3',
    href: '/blockchain-web3-services',
    icon: <Globe className="w-5 h-5" />,
    description: 'Advanced blockchain and Web3 solutions',
    badge: 'New',
    children: [
      { name: 'DeFi Yield Optimization', href: '/defi-yield-optimization', description: 'Intelligent yield farming' },
      { name: 'NFT Marketplace', href: '/nft-marketplace-management', description: 'Custom NFT platforms' },
      { name: 'DAO Governance', href: '/dao-governance-management', description: 'Decentralized governance' },
      { name: 'Cross-Chain Bridge', href: '/cross-chain-bridge-interoperability', description: 'Multi-chain interoperability' },
      { name: 'Web3 Identity', href: '/web3-identity-authentication', description: 'Decentralized identity' },
      { name: 'Smart Contract Development', href: '/smart-contract-development', description: 'Advanced contract creation' },
      { name: 'DeFi Protocol Development', href: '/defi-protocol-development', description: 'Custom DeFi protocols' },
      { name: 'Web3 Analytics', href: '/web3-analytics', description: 'Blockchain insights' },
      { name: 'Token Economics', href: '/token-economics', description: 'Token design and modeling' },
      { name: 'Regulatory Compliance', href: '/web3-compliance', description: 'Compliance automation' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions',
    children: [
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine', description: 'Intelligent decision making' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform', description: 'AI content creation' },
      { name: 'Smart CRM Suite', href: '/smart-crm-intelligence-suite', description: 'AI-enhanced CRM' },
      { name: 'Financial Analytics', href: '/automated-financial-analytics-platform', description: 'AI financial analysis' },
      { name: 'Project Management', href: '/intelligent-project-management-suite', description: 'AI project optimization' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence', description: 'Advanced analytics' },
      { name: 'Marketing Automation', href: '/ai-marketing-automation', description: 'Intelligent marketing' },
      { name: 'Customer Service AI', href: '/ai-customer-service', description: 'Automated support' },
      { name: 'HR & Recruitment', href: '/ai-hr-recruitment', description: 'AI talent management' },
      { name: 'Legal Contract Analysis', href: '/ai-legal-contract-analyzer', description: 'Legal document review' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    href: '/healthcare-biotech-services',
    icon: <Heart className="w-5 h-5" />,
    description: 'AI-powered healthcare and biotechnology',
    badge: 'New',
    children: [
      { name: 'AI Drug Discovery', href: '/ai-drug-discovery-platform', description: 'AI-powered drug development' },
      { name: 'Precision Medicine', href: '/precision-medicine-genomics', description: 'Personalized healthcare' },
      { name: 'Medical Imaging AI', href: '/ai-medical-imaging-analysis', description: 'AI image analysis' },
      { name: 'Digital Health Platform', href: '/digital-health-telemedicine', description: 'Telemedicine solutions' },
      { name: 'Clinical Trial Management', href: '/clinical-trial-management-optimization', description: 'Trial optimization' },
      { name: 'Healthcare Analytics', href: '/healthcare-analytics', description: 'Health data insights' },
      { name: 'Patient Engagement', href: '/patient-engagement-platform', description: 'Patient communication' },
      { name: 'Medical Device AI', href: '/medical-device-ai', description: 'Smart medical devices' },
      { name: 'Healthcare Security', href: '/healthcare-cybersecurity', description: 'Medical data protection' },
      { name: 'Biotech Research Tools', href: '/biotech-research-tools', description: 'Research automation' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    children: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions', description: 'Medical technology solutions' },
      { name: 'Financial Services', href: '/financial-solutions', description: 'Fintech and banking solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Smart manufacturing' },
      { name: 'Retail Technology', href: '/retail-technology-solutions', description: 'E-commerce and retail' },
      { name: 'Education Technology', href: '/education-technology-solutions', description: 'EdTech solutions' },
      { name: 'Government Solutions', href: '/government-technology-solutions', description: 'Public sector technology' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions', description: 'Smart energy solutions' },
      { name: 'Transportation & Logistics', href: '/transportation-logistics-solutions', description: 'Smart mobility' },
      { name: 'Real Estate Technology', href: '/real-estate-technology-solutions', description: 'PropTech solutions' },
      { name: 'Entertainment & Media', href: '/entertainment-media-solutions', description: 'Digital media solutions' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and support',
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api-documentation', description: 'API documentation' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Blog & News', href: '/blog', description: 'Latest insights and updates' },
      { name: 'Support Center', href: '/support', description: 'Help and support' },
      { name: 'Training & Certification', href: '/training', description: 'Learning resources' },
      { name: 'Community Forum', href: '/community', description: 'User community' },
      { name: 'Developer Resources', href: '/developer-resources', description: 'Developer tools' },
      { name: 'Research & Development', href: '/research-development', description: 'R&D initiatives' },
      { name: 'White Papers', href: '/white-papers', description: 'Technical insights' }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Users className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    children: [
      { name: 'About Us', href: '/about', description: 'Company overview' },
      { name: 'Leadership Team', href: '/leadership', description: 'Executive team' },
      { name: 'Careers', href: '/careers', description: 'Job opportunities' },
      { name: 'News & Press', href: '/news', description: 'Company news' },
      { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
      { name: 'Investors', href: '/investors', description: 'Investment information' },
      { name: 'Contact Us', href: '/contact', description: 'Get in touch' },
      { name: 'Locations', href: '/locations', description: 'Global presence' },
      { name: 'Sustainability', href: '/sustainability', description: 'Environmental commitment' },
      { name: 'Diversity & Inclusion', href: '/diversity-inclusion', description: 'Our values' }
    ]
  }
];

export default function EnhancedNavigation2025() {
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-black/80 backdrop-blur-lg'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-300">
            <div className="flex items-center space-x-4">
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
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-3 h-3" />
                <span>{contactInfo.website}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-cyan-300">Future Technology Solutions</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full">
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
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold text-white mb-1">{item.title || item.name}</h3>
                          <p className="text-sm text-cyan-300">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={closeDropdown}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-200">
                                  {child.name}
                                </div>
                                <div className="text-xs text-gray-400 group-hover:text-cyan-200 transition-colors duration-200">
                                  {child.description}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
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
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-cyan-300 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
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
                    className="flex items-center justify-between p-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full">
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
                          className="block p-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                      {item.children.length > 3 && (
                        <Link
                          href={item.href}
                          className="block p-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          View all {item.children.length} services →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 text-center text-sm font-medium text-cyan-300 border border-cyan-500/50 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/25 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}