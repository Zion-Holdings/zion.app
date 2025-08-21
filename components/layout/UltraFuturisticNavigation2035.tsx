import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, 
  Brain, Cpu, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Microscope, Atom, Database,
  Lock, Cloud, BarChart3, Settings,
  Home, Briefcase, Phone, Mail,
  MapPin, Calendar, FileText, Award, DollarSign
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  color?: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: '🏠 Home',
    href: '/',
    icon: <Home className="w-5 h-5" />,
    description: 'Welcome to Zion Tech Group',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    name: '🧠 AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    color: 'from-violet-400 to-purple-500',
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', description: 'Emotional intelligence and self-awareness' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion', description: 'Quantum-AI hybrid computing' },
      { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator', description: 'Cross-modal AI integration' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'Business Intelligence AI Pro', href: '/business-intelligence-ai-pro', description: 'Advanced AI-powered BI platform' },
      { name: 'Customer Analytics AI', href: '/customer-analytics-ai', description: 'AI-powered customer insights' },
      { name: 'Financial Risk AI', href: '/financial-risk-ai', description: 'AI-powered risk management' },
      { name: 'Supply Chain AI', href: '/supply-chain-ai', description: 'AI-powered supply chain optimization' },
      { name: 'Healthcare Diagnostics AI', href: '/healthcare-diagnostics-ai', description: 'AI-powered medical diagnostics' },
      { name: 'Legal Document AI', href: '/legal-document-ai', description: 'AI-powered legal analysis' },
      { name: 'Marketing Automation AI', href: '/marketing-automation-ai', description: 'AI-powered marketing automation' },
      { name: 'Sales Optimization AI', href: '/sales-optimization-ai', description: 'AI-powered sales optimization' },
      { name: 'HR Recruitment AI', href: '/hr-recruitment-ai', description: 'AI-powered recruitment' },
      { name: 'Cybersecurity AI', href: '/cybersecurity-ai', description: 'AI-powered cybersecurity' }
    ]
  },
  {
    name: '⚛️ Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    color: 'from-indigo-400 to-blue-500',
    children: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing', description: 'Quantum-biological hybrid processing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface', description: 'Neural interface technology' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai', description: 'Self-driving AI systems' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'Materials science acceleration' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Unbreakable encryption' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'SpaceMining Operations', href: '/space-mining-operations', description: 'Advanced space mining platform' },
      { name: 'QuantumBio Computing', href: '/quantum-bio-computing', description: 'Quantum-biological hybrid computing' },
      { name: 'BrainInterface Pro', href: '/brain-interface-pro', description: 'Advanced neural interface platform' },
      { name: 'QuantumEnergy Fusion', href: '/quantum-energy-fusion', description: 'Quantum fusion power platform' },
      { name: 'AutonomousVehicle AI', href: '/autonomous-vehicle-ai', description: 'Advanced autonomous vehicle AI' },
      { name: 'QuantumMaterials Discovery', href: '/quantum-materials-discovery', description: 'Quantum materials discovery platform' },
      { name: 'QuantumRobotics Pro', href: '/quantum-robotics-pro', description: 'Quantum-enhanced robotics platform' },
      { name: 'QuantumInternet Security', href: '/quantum-internet-security', description: 'Quantum internet security platform' },
      { name: 'QuantumLogistics Pro', href: '/quantum-logistics-pro', description: 'Quantum logistics optimization platform' },
      { name: 'QuantumMetaverse Pro', href: '/quantum-metaverse-pro', description: 'Quantum metaverse development platform' }
    ]
  },
  {
    name: '🏙️ Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    color: 'from-blue-400 to-cyan-500',
    children: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator', description: 'Edge processing optimization' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Advanced cybersecurity' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops', description: 'Intelligent development automation' },
      { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum communication protocols' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations', description: 'Self-managing IT systems' },
      { name: 'Quantum Data Center', href: '/quantum-data-center', description: 'Next-gen data centers' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', description: 'Quantum security solutions' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', description: 'Intelligent migration platform' },
      { name: 'QuantumCloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud infrastructure' },
      { name: 'EdgeComputing AI', href: '/edge-computing-ai', description: 'AI-powered edge computing orchestration' },
      { name: 'ZeroTrust Security Pro', href: '/zero-trust-security-pro', description: 'Comprehensive zero-trust security' },
      { name: 'EnterpriseBlockchain Pro', href: '/enterprise-blockchain-pro', description: 'Enterprise-grade blockchain platform' },
      { name: 'DevOps AI Pro', href: '/devops-ai-pro', description: 'AI-powered DevOps platform' },
      { name: 'QuantumNet Pro', href: '/quantum-net-pro', description: 'Quantum networking platform' },
      { name: 'AutonomousIT Pro', href: '/autonomous-it-pro', description: 'AI-powered autonomous IT operations' },
      { name: 'QuantumDataCenter Pro', href: '/quantum-data-center-pro', description: 'Quantum-enhanced data center platform' },
      { name: 'QuantumCyber Pro', href: '/quantum-cyber-pro', description: 'Quantum cybersecurity platform' },
      { name: 'QuantumMigration Pro', href: '/quantum-migration-pro', description: 'Quantum-enhanced cloud migration platform' }
    ]
  },
  {
    name: '🌌 Space & Metaverse',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration and virtual worlds',
    color: 'from-teal-400 to-emerald-500',
    children: [
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI-powered space operations' },
      { name: 'Metaverse Development Studio', href: '/metaverse-development-studio-pro', description: '3D world building tools' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Holographic events' },
      { name: 'Space Colonization Services', href: '/space-colonization-services', description: 'Interplanetary infrastructure' },
      { name: 'Orbital Mechanics Platform', href: '/orbital-mechanics', description: 'Trajectory optimization' },
      { name: 'Satellite Operations Center', href: '/satellite-operations', description: 'Mission control systems' }
    ]
  },
  {
    name: '🎯 Micro SAAS',
    href: '/micro-saas',
    icon: <Target className="w-5 h-5" />,
    description: 'Innovative business solutions',
    badge: 'Popular',
    color: 'from-green-400 to-yellow-500',
    children: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory', description: 'Automated content generation' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm', description: 'Next-gen customer management' },
      { name: 'CyberShield Pro', href: '/cyber-shield-pro', description: 'Comprehensive cybersecurity' },
      { name: 'DataVault Hub', href: '/data-vault-hub', description: 'Enterprise data management' },
      { name: 'CustomerSuccess AI Pro', href: '/customer-success-ai-pro', description: 'AI-powered customer success platform' },
      { name: 'SmartInventory AI', href: '/smart-inventory-ai', description: 'AI-powered inventory optimization' },
      { name: 'HRCompliance Pro', href: '/hr-compliance-pro', description: 'Automated HR compliance suite' },
      { name: 'ExpenseAI Manager', href: '/expense-ai-manager', description: 'AI-powered expense management' },
      { name: 'ContractFlow AI', href: '/contract-flow-ai', description: 'Intelligent contract automation platform' },
      { name: 'VendorIQ Pro', href: '/vendor-iq-pro', description: 'AI-powered vendor management' },
      { name: 'ProjectAI Manager', href: '/project-ai-manager', description: 'Intelligent project management' },
      { name: 'WorkflowAI Studio', href: '/workflow-ai-studio', description: 'AI-powered workflow automation' },
      { name: 'DataGuardian AI', href: '/data-guardian-ai', description: 'Intelligent data governance platform' },
      { name: 'APIGuardian Pro', href: '/api-guardian-pro', description: 'AI-powered API management suite' }
    ]
  },
  {
    name: '🔬 Research & Development',
    href: '/research-development',
    icon: <Microscope className="w-5 h-5" />,
    description: 'Breakthrough technologies and innovations',
    color: 'from-orange-400 to-red-500',
    children: [
      { name: 'Quantum Computing Research', href: '/quantum-computing-research', description: 'Advanced quantum research' },
      { name: 'AI Consciousness Studies', href: '/ai-consciousness-studies', description: 'AI consciousness research' },
      { name: 'Space Technology Research', href: '/space-technology-research', description: 'Space exploration research' },
      { name: 'Biotechnology Innovation', href: '/biotechnology-innovation', description: 'Bio-tech breakthroughs' },
      { name: 'Energy Technology Research', href: '/energy-technology-research', description: 'Sustainable energy research' }
    ]
  },
  {
    name: '💼 Services',
    href: '/services',
    icon: <Briefcase className="w-5 h-5" />,
    description: 'Comprehensive service portfolio',
    color: 'from-purple-400 to-pink-500',
    children: [
      { name: 'All Services', href: '/services', description: 'Complete service catalog' },
      { name: 'AI Services', href: '/ai-services', description: 'AI and consciousness solutions' },
      { name: 'IT Services', href: '/it-services', description: 'Enterprise IT solutions' },
      { name: 'Quantum Services', href: '/quantum-services', description: 'Quantum computing solutions' },
      { name: 'Space Technology', href: '/space-technology', description: 'Space exploration solutions' }
    ]
  },
  {
    name: '💰 Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Transparent pricing and plans',
    color: 'from-yellow-400 to-orange-500',
    children: [
      { name: 'Current Pricing', href: '/pricing', description: 'Current service pricing' },
      { name: '2025 Pricing', href: '/pricing-2025', description: '2025 service pricing' },
      { name: '2026 Pricing', href: '/pricing-2026', description: '2026 service pricing' },
      { name: 'Enterprise Pricing', href: '/enterprise-pricing', description: 'Enterprise solutions pricing' }
    ]
  },
  {
    name: '📞 Contact',
    href: '/contact',
    icon: <Phone className="w-5 h-5" />,
    description: 'Get in touch with our team',
    color: 'from-green-400 to-blue-500',
    children: [
      { name: 'Contact Form', href: '/contact', description: 'Send us a message' },
      { name: 'Phone Support', href: 'tel:+13024640950', description: 'Call us directly' },
      { name: 'Email Support', href: 'mailto:kleber@ziontechgroup.com', description: 'Email our team' },
      { name: 'Office Location', href: '/contact#location', description: 'Visit our office' }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function UltraFuturisticNavigation2035() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const filteredServices = navigationItems.flatMap(item => 
    item.children?.filter(child => 
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-4">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                <Phone className="w-3 h-3 mr-1" />
                {contactInfo.mobile}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                <Mail className="w-3 h-3 mr-1" />
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Leading Future Technology Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Future Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  {item.icon}
                  <span>{item.name.split(' ').slice(1).join(' ')}</span>
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold text-white mb-2">{item.name.split(' ').slice(1).join(' ')}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                          </div>
                          <div className="space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                                onClick={closeMenu}
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                      {child.name}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">{child.description}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-white/5 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center justify-between w-full p-3 text-left text-white hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/5"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span>{item.name.split(' ').slice(1).join(' ')}</span>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.children && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      )}
                    </button>

                    {/* Mobile Dropdown */}
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 mt-2 space-y-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block p-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/5"
                            onClick={closeMenu}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <p className="text-sm font-medium">{child.name}</p>
                                <p className="text-xs text-gray-500 mt-1">{child.description}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-500/20">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results Overlay */}
      {searchQuery && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-cyan-500/20 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="p-4 bg-white/5 border border-cyan-500/20 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setSearchQuery('')}
                >
                  <h4 className="text-white font-medium mb-2">{service.name}</h4>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}