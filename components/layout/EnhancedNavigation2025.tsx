import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, 
  Brain, Cpu, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Microscope, Atom, Database,
  Lock, Cloud, BarChart3, Settings,
  Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck, ZapIcon,
  GlobeIcon, StarIcon, TrendingUpIcon, UsersIcon,
  CheckCircleIcon, ArrowRightIcon, CpuIcon,
  DollarSign, Phone, ArrowRight, Mail, MapPin, Dna,
  Sparkles, Crown, Flame, Infinity,
  BookOpen, Building, HelpCircle
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
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
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    color: 'from-cyan-500 to-blue-600',
    children: [
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025#search', description: 'Find specific services' }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    color: 'from-violet-500 to-purple-600',
    children: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro', description: 'Enterprise AI content generation' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', description: 'Autonomous AI decision making' },
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', description: 'Emotional intelligence and self-awareness' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion', description: 'Quantum-AI hybrid computing' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', description: 'Ethical AI frameworks' }
    ]
  },
  {
    name: 'Financial Technology',
    href: '/fintech-services',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Advanced AI-powered financial solutions',
    badge: 'Hot',
    color: 'from-green-500 to-emerald-600',
    children: [
      { name: 'Neural Finance AI', href: '/neural-finance-ai', description: 'AI-powered financial analysis' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite', description: 'Quantum-enhanced CRM platform' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'Quantum Risk Financial Manager', href: '/quantum-risk-financial-manager', description: 'Quantum risk management' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    href: '/healthcare-services',
    icon: <Microscope className="w-5 h-5" />,
    description: 'Advanced healthcare and biotechnology solutions',
    badge: 'New',
    color: 'from-red-500 to-pink-600',
    children: [
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', description: 'Medical AI diagnostics' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform', description: 'AI-powered research' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'Biotech AI', href: '/biotech-ai', description: 'Biotechnology AI platform' }
    ]
  },
  {
    name: 'Education & Learning',
    href: '/education-services',
    icon: <Users className="w-5 h-5" />,
    description: 'AI-powered educational technology solutions',
    badge: 'New',
    color: 'from-yellow-500 to-orange-600',
    children: [
      { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro', description: 'Personalized AI learning' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'AI-powered education' }
    ]
  },
  {
    name: 'Energy & Sustainability',
    href: '/energy-services',
    icon: <Zap className="w-5 h-5" />,
    description: 'Quantum energy and sustainability solutions',
    badge: 'New',
    color: 'from-orange-500 to-red-600',
    children: [
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization', description: 'Quantum energy management' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' }
    ]
  },
  {
    name: 'Robotics & Automation',
    href: '/robotics-services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'AI-powered robotics and automation solutions',
    badge: 'New',
    color: 'from-pink-500 to-purple-600',
    children: [
      { name: 'AI Autonomous Robotics Platform', href: '/ai-autonomous-robotics-platform', description: 'AI robotics control' },
      { name: 'Industrial Automation AI', href: '/industrial-automation-ai', description: 'Smart manufacturing' }
    ]
  },
  {
    name: 'Supply Chain & Logistics',
    href: '/supply-chain-services',
    icon: <Network className="w-5 h-5" />,
    description: 'Quantum and AI-powered supply chain solutions',
    badge: 'New',
    color: 'from-indigo-500 to-blue-600',
    children: [
      { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer', description: 'Quantum logistics optimization' },
      { name: 'AI Logistics Platform', href: '/ai-logistics-platform', description: 'Intelligent logistics' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    color: 'from-indigo-500 to-blue-600',
    children: [
      { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform', description: 'Quantum security solutions' },
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing', description: 'Quantum-biological hybrid processing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface', description: 'Neural interface technology' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai', description: 'Self-driving AI systems' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'Materials science acceleration' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Unbreakable encryption' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    color: 'from-blue-500 to-cyan-600',
    children: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration', description: 'Edge processing optimization' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture', description: 'Advanced cybersecurity' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops', description: 'Intelligent development automation' },
      { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum communication protocols' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations', description: 'Self-managing IT systems' },
      { name: 'Quantum Data Center', href: '/quantum-data-center', description: 'Next-gen data centers' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', description: 'Quantum security solutions' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', description: 'Seamless cloud transitions' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    children: [
      { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory', description: 'Fully automated content creation' },
      { name: 'Quantum CRM Intelligence', href: '/quantum-crm-intelligence', description: 'AI-powered customer relationship management' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', description: 'Intelligent business decision making' },
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-pro', description: 'AI-powered creative tools' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning experiences' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Advanced medical AI' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial market analysis' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental impact tracking' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform', description: 'Human-AI emotional collaboration' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions and consulting',
    children: [
      { name: 'AI Solutions', href: '/ai-solutions', description: 'Custom AI implementations' },
      { name: 'Quantum Solutions', href: '/quantum-solutions', description: 'Quantum computing applications' },
      { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', description: 'Advanced security implementations' },
      { name: 'Cloud Solutions', href: '/cloud-solutions', description: 'Cloud infrastructure and migration' },
      { name: 'Digital Transformation', href: '/digital-transformation', description: 'Business modernization' },
      { name: 'Consulting Services', href: '/consulting', description: 'Expert technology guidance' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge base and learning materials',
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical guides and APIs' },
      { name: 'Blog', href: '/blog', description: 'Industry insights and updates' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories and implementations' },
      { name: 'Whitepapers', href: '/whitepapers', description: 'In-depth research and analysis' },
      { name: 'Webinars', href: '/webinars', description: 'Live learning sessions' },
      { name: 'Training', href: '/training', description: 'Professional development courses' }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    children: [
      { name: 'About Us', href: '/about', description: 'Our mission and vision' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'News', href: '/news', description: 'Company updates and announcements' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
      { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
      { name: 'Investors', href: '/investors', description: 'Investment information' }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-ee1d
    ]
  }
];

const quickActions = [
  { name: 'Get Started', href: '/contact', icon: <ArrowRight className="w-4 h-4" />, color: 'from-cyan-500 to-blue-600' },
  { name: 'View Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" />, color: 'from-purple-500 to-pink-600' },
  { name: 'Book Demo', href: '/demo', icon: <Eye className="w-4 h-4" />, color: 'from-green-500 to-emerald-600' },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" />, color: 'from-orange-500 to-red-600' }
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
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              {contactInfo.mobile}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-400" />
              {contactInfo.email}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-400" />
              {contactInfo.address}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              {contactInfo.website}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Future Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
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
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
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
                              className="flex items-center p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                            >
                              <div className="flex-1">
                                <div className="text-white group-hover:text-cyan-400 transition-colors font-medium">
                                  {child.name}
                                </div>
                                <div className="text-sm text-gray-400">{child.description}</div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
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

          {/* Quick Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                href={action.href}
                className={`px-4 py-2 bg-gradient-to-r ${action.color} text-white rounded-lg font-medium hover:scale-105 transition-all duration-200 flex items-center gap-2`}
              >
                {action.icon}
                {action.name}
              </Link>
            ))}
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        {item.icon}
                        {item.name}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="ml-8 space-y-2 mt-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-800">
                  <div className="grid grid-cols-2 gap-3">
                    {quickActions.map((action) => (
                      <Link
                        key={action.name}
                        href={action.href}
                        className={`p-3 bg-gradient-to-r ${action.color} text-white rounded-lg text-center font-medium`}
                        onClick={() => setIsOpen(false)}
                      >
                        {action.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}