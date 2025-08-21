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
  DollarSign, Phone, ArrowRight, Mail, MapPin, Dna, HelpCircle
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string; // Added for dropdown titles
  color?: string; // Added for dropdown colors
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
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', description: 'Intelligent migration platform' }
    ]
  },
  {
    name: 'Space & Metaverse',
    href: '/space-metaverse',
    icon: <Star className="w-5 h-5" />,
    description: 'Space technology and metaverse development',
    badge: 'New',
    color: 'from-purple-500 to-pink-600',
    children: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI space technology' },
      { name: 'Metaverse Development Studio Pro', href: '/metaverse-development-studio-pro', description: 'Metaverse development' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Holographic events' },
      { name: 'Space Colonization Services', href: '/space-colonization-services', description: 'Space settlement solutions' },
      { name: 'Orbital Mechanics', href: '/orbital-mechanics', description: 'Orbital calculations' },
      { name: 'Satellite Operations', href: '/satellite-operations', description: 'Satellite management' }
    ]
  },
  {
    name: 'Content & Marketing',
    href: '/content-marketing',
    icon: <Palette className="w-5 h-5" />,
    description: 'AI-powered content creation and marketing',
    color: 'from-pink-500 to-rose-600',
    children: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro', description: 'Enterprise AI content generation' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'Marketing AI Platform', href: '/marketing-ai-platform', description: 'Intelligent marketing automation' }
    ]
  },
  {
    name: 'Sales & CRM',
    href: '/sales-crm',
    icon: <BarChart3 className="w-5 h-5" />,
    description: 'Advanced sales and customer relationship management',
    color: 'from-emerald-500 to-teal-600',
    children: [
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite', description: 'Quantum-enhanced CRM platform' },
      { name: 'AI Sales Automation', href: '/ai-sales-automation', description: 'Intelligent sales automation' },
      { name: 'Customer Intelligence Platform', href: '/customer-intelligence-platform', description: 'Customer insights and analytics' }
    ]
  },
  {
    name: 'Cybersecurity',
    href: '/cybersecurity',
    icon: <ShieldCheck className="w-5 h-5" />,
    description: 'Advanced cybersecurity and threat protection',
    color: 'from-red-500 to-orange-600',
    children: [
      { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform', description: 'Quantum security solutions' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture', description: 'Advanced cybersecurity' },
      { name: 'AI Threat Detection', href: '/ai-threat-detection', description: 'AI-powered security monitoring' }
    ]
  },
  {
    name: 'Support & Resources',
    href: '/support',
    icon: <HelpCircle className="w-5 h-5" />,
    description: 'Customer support and resource center',
    color: 'from-gray-500 to-slate-600',
    children: [
      { name: 'Help Center', href: '/help', description: 'Documentation and guides' },
      { name: 'Contact Support', href: '/contact', description: 'Get help from our team' },
      { name: 'Status Page', href: '/status', description: 'Service status and uptime' },
      { name: 'Training', href: '/training', description: 'Learn to use our platforms' },
      { name: 'Community', href: '/community', description: 'Connect with other users' }
    ]
  }
];

const companyInfo = [
  { name: 'About Us', href: '/about', description: 'Learn about our mission and vision' },
  { name: 'Careers', href: '/careers', description: 'Join our innovative team' },
  { name: 'News & Updates', href: '/news', description: 'Latest company news and updates' },
  { name: 'Case Studies', href: '/case-studies', description: 'Success stories and implementations' },
  { name: 'Resources', href: '/resources', description: 'Whitepapers, guides, and tools' },
  { name: 'Blog', href: '/blog', description: 'Insights and industry trends' }
];

const supportInfo = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical documentation and guides' },
  { name: 'API Reference', href: '/api-docs', description: 'Developer API documentation' },
  { name: 'Status Page', href: '/status', description: 'Service status and uptime' },
  { name: 'Training', href: '/training', description: 'Learn to use our platforms' },
  { name: 'Community', href: '/community', description: 'Connect with other users' }
];

export default function EnhancedNavigation2025() {
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
      isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-cyan-500/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">Zion Tech Group</div>
              <div className="text-xs text-cyan-400">Revolutionary Technology</div>
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
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
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
                      className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                      onMouseLeave={closeDropdown}
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.title || item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                            >
                              <div>
                                <div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                  {child.name}
                                </div>
                                <div className="text-sm text-gray-400">{child.description}</div>
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

            {/* Company & Support Dropdowns */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'company' ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    onMouseLeave={closeDropdown}
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                      <div className="space-y-2">
                        {companyInfo.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                          >
                            <div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-400">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown('support')}
                className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
              >
                <span>Support</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'support' ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'support' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    onMouseLeave={closeDropdown}
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                      <div className="space-y-2">
                        {supportInfo.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                          >
                            <div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-400">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side - Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Contact Information */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Contact Info */}
              <div className="p-4 bg-gray-900/50 rounded-lg border border-cyan-500/30">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-cyan-400">
                    <Phone className="w-4 h-4" />
                    <span className="text-white">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-cyan-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-white">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-white text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-white font-medium hover:text-cyan-400 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {item.badge && (
                      <span className="ml-2 px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.slice(0, 3).map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                      {item.children.length > 3 && (
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          View all {item.name} services →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link href="/contact">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
                    Get Started Today
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}