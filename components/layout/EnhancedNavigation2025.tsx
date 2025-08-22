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
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3 as BarChart3Icon, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Palette, Microscope, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Database, Network, Code, Bot
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
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network-platform', description: 'Hybrid AI-Quantum computing platform' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio-platform', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-powered-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    children: [
      { name: 'Quantum Computing as a Service', href: '/quantum-computing-as-a-service', description: 'Cloud quantum computing access' },
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
      { name: 'Quantum Financial Trading', href: '/quantum-ai-trading-platform', description: 'Quantum trading algorithms' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    children: [
      { name: 'Zero Trust Security', href: '/zero-trust-security-architecture', description: 'Never trust, always verify' },
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Future-proof cloud security' },
      { name: 'Autonomous DevOps', href: '/autonomous-devops-orchestrator', description: 'Self-healing infrastructure' },
      { name: 'Edge Computing', href: '/edge-computing-orchestration-platform', description: 'Intelligent edge orchestration' },
      { name: 'AI Data Pipeline', href: '/ai-powered-data-pipeline-platform', description: 'Intelligent data processing' },
      { name: 'Quantum Communication', href: '/quantum-secure-communication-platform', description: 'Unbreakable encryption' },
      { name: 'Autonomous Network', href: '/autonomous-network-management-platform', description: 'Self-optimizing networks' },
      { name: 'AI IT Service Management', href: '/ai-powered-it-service-management', description: 'Intelligent service delivery' },
      { name: 'Quantum Database', href: '/quantum-database-management-system', description: 'Next-gen database system' },
      { name: 'Autonomous API Management', href: '/autonomous-api-management-platform', description: 'Intelligent API lifecycle' },
      { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics-engine', description: 'Future insights with AI' },
      { name: 'AI Computer Vision', href: '/ai-computer-vision-platform', description: 'See through AI eyes' },
      { name: 'AI NLP Suite', href: '/ai-nlp-suite', description: 'Understand human language' },
      { name: 'AI Fraud Detection', href: '/ai-fraud-detection-system', description: 'Protect with intelligent detection' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    children: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Transform data into insights' },
      { name: 'AI Content Generation', href: '/ai-content-generation-platform', description: 'Create content in seconds' },
      { name: 'AI Customer Service', href: '/ai-customer-service-automation', description: 'Automate support with AI' },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Boost sales performance' },
      { name: 'AI Project Management', href: '/ai-project-management-suite', description: 'Streamline workflows' },
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform', description: 'Smarter financial decisions' },
      { name: 'AI HR Management', href: '/ai-hr-management-platform', description: 'Optimize HR operations' },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Automate and optimize campaigns' },
      { name: 'AI Supply Chain', href: '/ai-supply-chain-optimization', description: 'Optimize with AI insights' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio-platform', description: 'Unleash creativity with AI' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning experiences' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-powered-healthcare-diagnostics', description: 'Revolutionary medical diagnostics' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Transform financial decision-making' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Drive environmental impact' }
    ]
  },
  {
    name: 'Creative & Design',
    href: '/creative-design',
    icon: <Palette className="w-5 h-5" />,
    description: 'AI-powered creative tools and design solutions',
    badge: 'New',
    children: [
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio-platform', description: 'AI-powered artistic tools' },
      { name: 'AI Content Generation', href: '/ai-content-generation-platform', description: 'Generate engaging content' },
      { name: 'AI Design Automation', href: '/ai-design-automation-platform', description: 'Automate design processes' },
      { name: 'AI Video Creation', href: '/ai-video-creation-platform', description: 'Create videos with AI' },
      { name: 'AI Music Generation', href: '/ai-music-generation-platform', description: 'Compose music with AI' },
      { name: 'AI 3D Modeling', href: '/ai-3d-modeling-platform', description: 'Generate 3D models' },
      { name: 'AI Brand Management', href: '/ai-brand-management-platform', description: 'Manage brand identity' },
      { name: 'AI Marketing Design', href: '/ai-marketing-design-platform', description: 'Design marketing materials' }
    ]
  },
  {
    name: 'Research & Development',
    href: '/research-development',
    icon: <Microscope className="w-5 h-5" />,
    description: 'Cutting-edge research tools and development platforms',
    badge: 'Hot',
    children: [
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'Quantum Computing', href: '/quantum-computing-as-a-service', description: 'Access quantum power' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Space Technology', href: '/space-technology-ai-platform', description: 'AI-powered space solutions' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform', description: 'Biological AI research' },
      { name: 'AI Materials Science', href: '/ai-materials-science-platform', description: 'Accelerate materials discovery' },
      { name: 'AI Drug Discovery', href: '/ai-drug-discovery-platform', description: 'Pharmaceutical AI research' },
      { name: 'AI Climate Research', href: '/ai-climate-research-platform', description: 'Environmental AI research' }
    ]
  },
  {
    name: 'Industry Solutions',
    href: '/industry-solutions',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Specialized solutions for specific industries',
    children: [
      { name: 'Manufacturing AI', href: '/ai-manufacturing-platform', description: 'Smart manufacturing solutions' },
      { name: 'Healthcare AI', href: '/ai-healthcare-solutions', description: 'Medical AI applications' },
      { name: 'Financial AI', href: '/ai-financial-solutions', description: 'Financial technology AI' },
      { name: 'Retail AI', href: '/ai-retail-solutions', description: 'Retail automation AI' },
      { name: 'Transportation AI', href: '/ai-transportation-solutions', description: 'Smart transportation AI' },
      { name: 'Energy AI', href: '/ai-energy-solutions', description: 'Energy optimization AI' },
      { name: 'Education AI', href: '/ai-education-solutions', description: 'Educational AI platforms' },
      { name: 'Government AI', href: '/ai-government-solutions', description: 'Public sector AI solutions' }
    ]
  },
  {
    name: 'Infrastructure',
    href: '/infrastructure',
    icon: <Database className="w-5 h-5" />,
    description: 'Advanced infrastructure and platform solutions',
    children: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Future-proof cloud security' },
      { name: 'Edge Computing', href: '/edge-computing-orchestration-platform', description: 'Intelligent edge orchestration' },
      { name: 'Autonomous DevOps', href: '/autonomous-devops-orchestrator', description: 'Self-healing infrastructure' },
      { name: 'AI Data Pipeline', href: '/ai-powered-data-pipeline-platform', description: 'Intelligent data processing' },
      { name: 'Quantum Database', href: '/quantum-database-management-system', description: 'Next-gen database system' },
      { name: 'Autonomous Network', href: '/autonomous-network-management-platform', description: 'Self-optimizing networks' },
      { name: 'AI Service Management', href: '/ai-powered-it-service-management', description: 'Intelligent service delivery' },
      { name: 'Autonomous API Management', href: '/autonomous-api-management-platform', description: 'Intelligent API lifecycle' }
    ]
  },
  {
    name: 'Security & Privacy',
    href: '/security-privacy',
    icon: <Lock className="w-5 h-5" />,
    description: 'Advanced security and privacy solutions',
    children: [
      { name: 'Zero Trust Security', href: '/zero-trust-security-architecture', description: 'Never trust, always verify' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Quantum Communication', href: '/quantum-secure-communication-platform', description: 'Military-grade security' },
      { name: 'AI Fraud Detection', href: '/ai-fraud-detection-system', description: 'Intelligent fraud prevention' },
      { name: 'AI Threat Intelligence', href: '/ai-threat-intelligence-platform', description: 'Advanced threat detection' },
      { name: 'AI Security Analytics', href: '/ai-security-analytics-platform', description: 'Security insights with AI' },
      { name: 'Privacy-Preserving AI', href: '/privacy-preserving-ai-platform', description: 'AI without compromising privacy' },
      { name: 'AI Compliance Management', href: '/ai-compliance-management-platform', description: 'Automated compliance' }
    ]
  },
  {
    name: 'Analytics & Intelligence',
    href: '/analytics-intelligence',
    icon: <BarChart3 className="w-5 h-5" />,
    description: 'Advanced analytics and business intelligence',
    children: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Transform data into insights' },
      { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics-engine', description: 'Future insights with AI' },
      { name: 'AI Data Pipeline', href: '/ai-powered-data-pipeline-platform', description: 'Intelligent data processing' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized experiences' },
      { name: 'AI Customer Analytics', href: '/ai-customer-analytics-platform', description: 'Customer behavior insights' },
      { name: 'AI Market Intelligence', href: '/ai-market-intelligence-platform', description: 'Market trend analysis' },
      { name: 'AI Performance Analytics', href: '/ai-performance-analytics-platform', description: 'Performance optimization' },
      { name: 'AI Risk Analytics', href: '/ai-risk-analytics-platform', description: 'Risk assessment and management' }
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
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-black/80 backdrop-blur-lg'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>{contactInfo.mobile}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{contactInfo.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{contactInfo.address}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">Future Technology Solutions</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
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
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 p-4 z-50"
                        onMouseLeave={closeDropdown}
                      >
                        <div className="space-y-3">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                              onClick={closeDropdown}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                <div className="flex-1">
                                  <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                    {child.name}
                                  </h4>
                                  <p className="text-sm text-gray-400 mt-1">
                                    {child.description}
                                  </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
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
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
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
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300"
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
  );
}