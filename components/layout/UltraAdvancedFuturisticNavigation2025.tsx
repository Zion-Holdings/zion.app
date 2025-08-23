import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Brain, Rocket, Shield, 
  Zap, Target, Atom, Cpu, Globe, Users, Phone, Mail, MapPin, 
  ArrowRight, Star, Sparkles, Lock, Cloud, 
  Search, Bell, Building,
  Palette, GraduationCap, DollarSign
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
  color?: string;
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
    href: '/services',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    category: 'main',
    color: 'from-cyan-500 to-blue-500',
    children: [
      { name: 'View All Services', href: '/services', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/services#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/services#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/services#search', description: 'Find specific services' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' },
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' },
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' }
    ]
  },
  {
    name: 'AI & Machine Learning',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
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
    color: 'from-green-500 to-emerald-500',
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
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum-enhanced trading' },
      { name: 'Quantum Space Technology', href: '/quantum-space-tech', description: 'Space exploration with quantum computing' },
      { name: 'Quantum Healthcare', href: '/quantum-healthcare', description: 'Medical breakthroughs with quantum computing' },
      { name: 'Quantum Manufacturing', href: '/quantum-manufacturing', description: 'Next-gen manufacturing processes' }
    ]
  },
  {
    name: 'IT & Infrastructure',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure and security',
    badge: 'Enterprise',
    category: 'it',
    color: 'from-blue-500 to-indigo-500',
    children: [
      { name: 'Zero Trust Security', href: '/zero-trust-network-architecture', description: 'Next-generation security framework' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed edge computing' },
      { name: '5G Private Network Solutions', href: '/5g-private-network-solutions', description: 'Enterprise 5G networks' },
      { name: 'Cloud Landing Zone', href: '/cloud-landing-zone', description: 'Secure cloud foundation' },
      { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer', description: 'Cloud cost management' },
      { name: 'Cloud Backup Compliance', href: '/cloud-backup-compliance', description: 'Compliant cloud backup' },
      { name: 'Infrastructure Drift Detector', href: '/infrastructure-drift-detector', description: 'Infrastructure monitoring' },
      { name: 'Kubernetes RBAC Auditor', href: '/kubernetes-rbac-auditor', description: 'K8s security auditing' },
      { name: 'Managed PostgreSQL HA', href: '/managed-postgres-ha', description: 'High-availability database' },
      { name: 'LLM Gateway', href: '/llm-gateway', description: 'AI model management' },
      { name: 'API Security Scanner', href: '/api-security-scanner', description: 'API security testing' },
      { name: 'API Observability', href: '/api-observability', description: 'API monitoring and analytics' },
      { name: 'API Mock Contract Testing', href: '/api-mock-contract-testing', description: 'API testing automation' },
      { name: 'API Latency SLO Tracker', href: '/api-latency-slo-tracker', description: 'Performance monitoring' },
      { name: 'API Documentation Generator', href: '/api-documentation-generator', description: 'Auto-generated API docs' }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Popular',
    category: 'saas',
    color: 'from-orange-500 to-red-500',
    children: [
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success with AI' },
      { name: 'AI Content Marketing Automation', href: '/ai-content-marketing-automation', description: 'AI-powered content marketing' },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', description: 'AI-powered sales insights' },
      { name: 'AI HR Analytics Platform', href: '/ai-hr-analytics-platform', description: 'AI-powered HR analytics' },
      { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization', description: 'AI-powered supply chain' },
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform', description: 'AI-powered financial planning' },
      { name: 'AI Legal Document Analysis', href: '/ai-legal-document-analysis', description: 'AI-powered legal analysis' },
      { name: 'AI Healthcare Analytics', href: '/ai-healthcare-analytics', description: 'AI-powered healthcare insights' },
      { name: 'AI Manufacturing Optimization', href: '/ai-manufacturing-optimization', description: 'AI-powered manufacturing' },
      { name: 'Sales Copilot', href: '/sales-copilot', description: 'AI-powered sales assistant' },
      { name: 'Incident Copilot', href: '/incident-copilot', description: 'AI-powered incident management' },
      { name: 'SEO Automation', href: '/seo-automation', description: 'Automated SEO optimization' },
      { name: 'Serverless Cron Manager', href: '/serverless-cron-manager', description: 'Serverless task scheduling' },
      { name: 'SOC2 Evidence Automation', href: '/soc2-evidence-automation', description: 'Compliance automation' },
      { name: 'Status Pages SLO', href: '/status-pages-slo', description: 'Service level monitoring' },
      { name: 'Synthetic Monitor Recorder', href: '/synthetic-monitor-recorder', description: 'Performance monitoring' }
    ]
  },
  {
    name: 'Business Automation',
    href: '/automation',
    icon: <Zap className="w-5 h-5" />,
    description: 'Intelligent automation and process optimization',
    badge: 'Efficient',
    category: 'automation',
    color: 'from-yellow-500 to-amber-500',
    children: [
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for business processes' },
      { name: 'Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'AI-powered business insights' },
      { name: 'Marketing Automation Platform', href: '/ai-marketing-automation', description: 'AI-powered marketing automation' },
      { name: 'Sales Process Automation', href: '/ai-sales-automation', description: 'Automated sales workflows' },
      { name: 'HR Process Automation', href: '/ai-hr-automation', description: 'Automated HR processes' },
      { name: 'Financial Process Automation', href: '/ai-financial-automation', description: 'Automated financial workflows' },
      { name: 'Customer Service Automation', href: '/ai-customer-service-automation', description: 'AI-powered customer support' },
      { name: 'Supply Chain Automation', href: '/ai-supply-chain-automation', description: 'Automated supply chain management' },
      { name: 'Quality Control Automation', href: '/ai-quality-control-automation', description: 'Automated quality assurance' },
      { name: 'Maintenance Automation', href: '/ai-maintenance-automation', description: 'Predictive maintenance automation' }
    ]
  },
  {
    name: 'Customer Success',
    href: '/customer-success',
    icon: <Users className="w-5 h-5" />,
    description: 'Customer success and retention automation',
    badge: 'Growth',
    category: 'customer-success',
    color: 'from-teal-500 to-cyan-500',
    children: [
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success with AI' },
      { name: 'Customer Health Scoring', href: '/customer-health-scoring', description: 'AI-powered customer health analysis' },
      { name: 'Churn Prediction Platform', href: '/churn-prediction-platform', description: 'Predict and prevent customer churn' },
      { name: 'Customer Journey Mapping', href: '/customer-journey-mapping', description: 'Visualize customer experiences' },
      { name: 'Success Metric Tracking', href: '/success-metric-tracking', description: 'Track customer success metrics' },
      { name: 'Automated Onboarding', href: '/automated-onboarding', description: 'Streamline customer onboarding' },
      { name: 'Expansion Opportunity Detection', href: '/expansion-opportunity-detection', description: 'Identify growth opportunities' },
      { name: 'Customer Feedback Analysis', href: '/customer-feedback-analysis', description: 'AI-powered feedback insights' },
      { name: 'Success Playbook Automation', href: '/success-playbook-automation', description: 'Automated success strategies' },
      { name: 'Customer Success Analytics', href: '/customer-success-analytics', description: 'Comprehensive success insights' }
    ]
  },
  {
    name: 'Marketing & Sales',
    href: '/marketing-sales',
    icon: <Target className="w-5 h-5" />,
    description: 'AI-powered marketing and sales intelligence',
    badge: 'Revenue',
    category: 'marketing',
    color: 'from-pink-500 to-rose-500',
    children: [
      { name: 'AI Content Marketing Automation', href: '/ai-content-marketing-automation', description: 'AI-powered content marketing' },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', description: 'AI-powered sales insights' },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation', description: 'Intelligent marketing workflows' },
      { name: 'AI Sales Automation', href: '/ai-sales-automation', description: 'Automated sales processes' },
      { name: 'AI Lead Scoring', href: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
      { name: 'AI Campaign Optimization', href: '/ai-campaign-optimization', description: 'Optimize marketing campaigns' },
      { name: 'AI Content Generation', href: '/ai-content-generation', description: 'AI-powered content creation' },
      { name: 'AI Social Media Management', href: '/ai-social-media-management', description: 'Automated social media' },
      { name: 'AI Email Marketing', href: '/ai-email-marketing', description: 'Intelligent email campaigns' },
      { name: 'AI Marketing Analytics', href: '/ai-marketing-analytics', description: 'Comprehensive marketing insights' }
    ]
  },
  {
    name: 'Finance & Legal',
    href: '/finance-legal',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Financial planning and legal document analysis',
    badge: 'Compliance',
    category: 'finance',
    color: 'from-emerald-500 to-green-500',
    children: [
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform', description: 'AI-powered financial planning' },
      { name: 'AI Legal Document Analysis', href: '/ai-legal-document-analysis', description: 'AI-powered legal analysis' },
      { name: 'AI Risk Assessment', href: '/ai-risk-assessment', description: 'Intelligent risk analysis' },
      { name: 'AI Compliance Monitoring', href: '/ai-compliance-monitoring', description: 'Automated compliance tracking' },
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics', description: 'Comprehensive financial insights' },
      { name: 'AI Contract Analysis', href: '/ai-contract-analysis', description: 'Intelligent contract review' },
      { name: 'AI Regulatory Compliance', href: '/ai-regulatory-compliance', description: 'Automated regulatory tracking' },
      { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting', description: 'Predictive financial modeling' },
      { name: 'AI Investment Analysis', href: '/ai-investment-analysis', description: 'Intelligent investment insights' },
      { name: 'AI Tax Optimization', href: '/ai-tax-optimization', description: 'Automated tax planning' }
    ]
  },
  {
    name: 'Healthcare & Manufacturing',
    href: '/healthcare-manufacturing',
    icon: <Building className="w-5 h-5" />,
    description: 'Healthcare analytics and manufacturing optimization',
    badge: 'Industry 4.0',
    category: 'healthcare',
    color: 'from-indigo-500 to-purple-500',
    children: [
      { name: 'AI Healthcare Analytics', href: '/ai-healthcare-analytics', description: 'AI-powered healthcare insights' },
      { name: 'AI Manufacturing Optimization', href: '/ai-manufacturing-optimization', description: 'AI-powered manufacturing' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', description: 'Predictive equipment maintenance' },
      { name: 'AI Quality Control', href: '/ai-quality-control', description: 'Automated quality assurance' },
      { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization', description: 'AI-powered supply chain' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'AI-powered medical diagnosis' },
      { name: 'AI Drug Discovery', href: '/ai-drug-discovery', description: 'Accelerated pharmaceutical research' },
      { name: 'AI Medical Imaging', href: '/ai-medical-imaging', description: 'AI-powered medical imaging' },
      { name: 'AI Patient Monitoring', href: '/ai-patient-monitoring', description: 'Intelligent patient care' },
      { name: 'AI Healthcare Compliance', href: '/ai-healthcare-compliance', description: 'Automated healthcare compliance' }
    ]
  },
  {
    name: 'Creative & Media',
    href: '/creative-media',
    icon: <Palette className="w-5 h-5" />,
    description: 'AI-powered creative tools and media production',
    badge: 'Creative',
    category: 'creative',
    color: 'from-violet-500 to-purple-500',
    children: [
      { name: 'AI Video Editing', href: '/ai-video-editing', description: 'AI-powered video production' },
      { name: 'AI Content Generation', href: '/ai-content-generation', description: 'AI-powered content creation' },
      { name: 'AI Image Generation', href: '/ai-image-generation', description: 'AI-powered image creation' },
      { name: 'AI Music Composition', href: '/ai-music-composition', description: 'AI-powered music creation' },
      { name: 'AI Storytelling', href: '/ai-storytelling', description: 'AI-powered narrative generation' },
      { name: 'AI Design Assistant', href: '/ai-design-assistant', description: 'AI-powered design tools' },
      { name: 'AI Animation Platform', href: '/ai-animation-platform', description: 'AI-powered animation' },
      { name: 'AI Voice Synthesis', href: '/ai-voice-synthesis', description: 'AI-powered voice generation' },
      { name: 'AI Translation Services', href: '/ai-translation-services', description: 'AI-powered language translation' },
      { name: 'AI Creative Analytics', href: '/ai-creative-analytics', description: 'Creative performance insights' }
    ]
  },
  {
    name: 'Education & Training',
    href: '/education-training',
    icon: <GraduationCap className="w-5 h-5" />,
    description: 'AI-powered learning and skill development',
    badge: 'Learning',
    category: 'education',
    color: 'from-blue-500 to-cyan-500',
    children: [
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'AI-powered learning platform' },
      { name: 'AI Skill Assessment', href: '/ai-skill-assessment', description: 'Intelligent skill evaluation' },
      { name: 'AI Learning Paths', href: '/ai-learning-paths', description: 'Personalized learning journeys' },
      { name: 'AI Content Curation', href: '/ai-content-curation', description: 'Intelligent content selection' },
      { name: 'AI Tutoring System', href: '/ai-tutoring-system', description: 'AI-powered tutoring' },
      { name: 'AI Language Learning', href: '/ai-language-learning', description: 'AI-powered language acquisition' },
      { name: 'AI Training Analytics', href: '/ai-training-analytics', description: 'Learning performance insights' },
      { name: 'AI Certification Platform', href: '/ai-certification-platform', description: 'Automated certification' },
      { name: 'AI Knowledge Management', href: '/ai-knowledge-management', description: 'Intelligent knowledge systems' },
      { name: 'AI Learning Analytics', href: '/ai-learning-analytics', description: 'Comprehensive learning insights' }
    ]
  }
];

const UltraAdvancedFuturisticNavigation2025: React.FC = () => {
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
        ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border-b border-gray-800/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-pink-400">
                <MapPin className="w-4 h-4" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="/" 
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className={`px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${item.color} text-white`}>
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
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                      onMouseLeave={closeDropdown}
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children?.slice(0, 8).map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                              onClick={closeDropdown}
                            >
                              <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                  {child.name}
                                </div>
                                <div className="text-xs text-gray-400">{child.description}</div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors duration-200" />
                            </Link>
                          ))}
                          {item.children && item.children.length > 8 && (
                            <Link
                              href={item.href}
                              className="flex items-center justify-center gap-2 p-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                              onClick={closeDropdown}
                            >
                              View All {item.children.length} Services
                              <ArrowRight className="w-4 h-4" />
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
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
              <Bell className="w-5 h-5" />
            </button>
            <Link
              href={`tel:${contactInfo.mobile}`}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className={`px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${item.color} text-white`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="ml-8 mt-2 space-y-2">
                        {item.children?.slice(0, 5).map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block p-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                        {item.children && item.children.length > 5 && (
                          <Link
                            href={item.href}
                            className="block p-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                            onClick={() => setIsOpen(false)}
                          >
                            View All Services →
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-800">
                  <Link
                    href={`tel:${contactInfo.mobile}`}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
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
  );
};

export default UltraAdvancedFuturisticNavigation2025;