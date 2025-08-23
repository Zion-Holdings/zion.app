import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Home, Star, Users, 
  HelpCircle, Mail, Phone, MapPin,
  Brain, Atom, Rocket, DollarSign,
  Zap,
  TrendingUp, Award, CheckCircle, Clock,
  Search, X as CloseIcon,
  Target, BookOpen, Calendar, Video, FileText,
  Layers, Server
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const sidebarSections = [
  {
    title: 'Featured Revolutionary Services',
    icon: <Star className="w-5 h-5" />,
    color: 'from-yellow-500 to-orange-500',
    items: [
      { name: 'AI Consciousness Evolution 2040', href: '/ai-consciousness-evolution-2040', badge: 'Breakthrough' },
      { name: 'Quantum Neural Ecosystem 2040', href: '/quantum-neural-ecosystem-2040', badge: 'New' },
      { name: 'Space Resource Intelligence 2040', href: '/space-resource-intelligence-2040', badge: 'Hot' },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040', badge: 'Featured' },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040', badge: 'Featured' },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040', badge: 'Featured' },
      { name: 'Holographic Quantum Workspace 2045', href: '/holographic-quantum-workspace-2045', badge: 'New' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: <Brain className="w-5 h-5" />,
    color: 'from-purple-500 to-pink-500',
    items: [
      { name: 'AI Consciousness Evolution 2040', href: '/ai-consciousness-evolution-2040' },
      { name: 'AI Emotional Intelligence 2040', href: '/ai-emotional-intelligence-2040' },
      { name: 'AI Autonomous Research 2041', href: '/ai-autonomous-research-2041' },
      { name: 'AI Content Personalization 2041', href: '/ai-content-personalization-2041' },
      { name: 'AI Ethics & Governance 2041', href: '/ai-ethics-governance-2041' },
      { name: 'AI Autonomous Ecosystem 2041', href: '/ai-autonomous-ecosystem-2041' },
      { name: 'AI Predictive Maintenance 2041', href: '/ai-predictive-maintenance-2041' },
      { name: 'AI Customer Success 2041', href: '/ai-customer-success-2041' },
      { name: 'AI Sales Intelligence 2041', href: '/ai-sales-intelligence-2041' },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040' },
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
      { name: 'AI Autonomous Testing Suite', href: '/ai-autonomous-testing-suite' },
      { name: 'AI Autonomous SEO Optimizer', href: '/ai-autonomous-seo-optimizer' },
      { name: 'AI Autonomous Customer Support', href: '/ai-autonomous-customer-support' },
      { name: 'AI Autonomous Social Media Manager', href: '/ai-autonomous-social-media-manager' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/healthcare-solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5" />,
    color: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'Quantum Neural Ecosystem 2040', href: '/quantum-neural-ecosystem-2040' },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040' },
      { name: 'Quantum Internet Security 2041', href: '/quantum-internet-security-2041' },
      { name: 'Quantum Cloud Infrastructure 2041', href: '/quantum-cloud-infrastructure-2041' },
      { name: 'Quantum Bio-Computing 2041', href: '/quantum-bio-computing-2041' },
      { name: 'Space Resource Intelligence 2040', href: '/space-resource-intelligence-2040' },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040' },
      { name: 'Autonomous Vehicle AI 2040', href: '/autonomous-vehicle-ai-2040' },
      { name: 'Quantum Materials Discovery 2040', href: '/quantum-materials-discovery-2040' },
      { name: 'Quantum Financial Intelligence 2040', href: '/quantum-financial-intelligence-2040' },
      { name: 'Quantum Encryption API', href: '/quantum-encryption-api' },
      { name: 'Quantum Data Compression API', href: '/quantum-data-compression-api' },
      { name: 'Quantum Payment Processor', href: '/quantum-payment-processor' },
      { name: 'Quantum Video Compression API', href: '/quantum-video-compression-api' },
      { name: 'Quantum AI Chatbot Platform', href: '/quantum-ai-chatbot-platform' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading' }
    ]
  },
  {
    title: 'IT & Infrastructure',
    icon: <Server className="w-5 h-5" />,
    color: 'from-green-500 to-emerald-500',
    items: [
      { name: 'Quantum Cloud Infrastructure 2045', href: '/quantum-cloud-infrastructure-2045' },
      { name: 'AI-Powered DevOps Automation 2045', href: '/ai-powered-devops-automation-2045' },
      { name: 'Quantum Database Platform 2045', href: '/quantum-database-platform-2045' },
      { name: 'AI-Powered Network Optimization 2045', href: '/ai-powered-network-optimization-2045' },
      { name: 'Quantum Storage Platform 2045', href: '/quantum-storage-platform-2045' },
      { name: 'AI-Powered Security Operations 2045', href: '/ai-powered-security-operations-2045' },
      { name: 'Quantum Application Platform 2045', href: '/quantum-application-platform-2045' },
      { name: 'AI-Powered IT Service Management 2045', href: '/ai-powered-it-service-management-2045' },
      { name: 'Quantum Integration Platform 2045', href: '/quantum-integration-platform-2045' },
      { name: 'AI-Powered Disaster Recovery 2045', href: '/ai-powered-disaster-recovery-2045' },
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud/' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation/' },
      { name: 'Quantum Networking', href: '/quantum-services' },
      { name: 'Quantum Data Center', href: '/quantum-services' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-infrastructure' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: <Layers className="w-5 h-5" />,
    color: 'from-purple-500 to-indigo-500',
    items: [
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
      { name: 'Quantum Encryption API', href: '/quantum-encryption-api' },
      { name: 'AI Autonomous Testing Suite', href: '/ai-autonomous-testing-suite' },
      { name: 'Quantum Data Compression API', href: '/quantum-data-compression-api' },
      { name: 'AI Autonomous SEO Optimizer', href: '/ai-autonomous-seo-optimizer' },
      { name: 'Quantum Payment Processor', href: '/quantum-payment-processor' },
      { name: 'AI Autonomous Customer Support', href: '/ai-autonomous-customer-support' },
      { name: 'Quantum Video Compression API', href: '/quantum-video-compression-api' },
      { name: 'AI Autonomous Social Media Manager', href: '/ai-autonomous-social-media-manager' },
      { name: 'Quantum AI Chatbot Platform', href: '/quantum-ai-chatbot-platform' },
      { name: 'AI Customer Success', href: '/ai-customer-success-platform' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization' },
      { name: 'Financial Planning AI', href: '/ai-financial-planning-platform' },
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform' },
      { name: 'Sales Intelligence AI', href: '/ai-sales-intelligence-platform' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'Smart CRM Suite', href: '/smart-crm-intelligence-suite' },
      { name: 'Financial Analytics', href: '/automated-financial-analytics-platform' },
      { name: 'Project Management', href: '/intelligent-project-management-suite' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence-suite' },
      { name: 'Marketing Automation', href: '/ai-autonomous-marketing-platform' },
      { name: 'Customer Service AI', href: '/ai-customer-service' },
      { name: 'HR & Recruitment', href: '/ai-hr-recruitment' },
      { name: 'Legal Contract Analysis', href: '/ai-legal-contract-analyzer' }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: <Target className="w-5 h-5" />,
    color: 'from-orange-500 to-red-500',
    items: [
      { name: 'Healthcare & Biotech', href: '/biotech-ai' },
      { name: 'Financial Services', href: '/billing-analytics' },
      { name: 'Manufacturing AI', href: '/autonomous-manufacturing' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Education Technology', href: '/training' },
      { name: 'Government Solutions', href: '/enterprise-solutions-showcase' },
      { name: 'Energy & Utilities', href: '/quantum-energy' },
      { name: 'Transportation & Logistics', href: '/quantum-logistics' },
      { name: 'Real Estate Technology', href: '/real-estate-technology-solutions' },
      { name: 'Entertainment & Media', href: '/entertainment-media-solutions' },
      { name: 'Space Technology', href: '/space-technology' },
      { name: 'Biotech & Healthcare', href: '/biotech-ai' }
    ]
  },
  {
    title: 'Resources & Support',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'from-cyan-500 to-blue-500',
    items: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-documentation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog & News', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Developer Resources', href: '/developer-resources' },
      { name: 'Research & Development', href: '/research-development' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Performance Reports', href: '/reports' },
      { name: 'Market Analysis', href: '/market-pricing' },
      { name: 'Services Advertising', href: '/services-advertising' },
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab/' },
      { name: 'API Performance Testing', href: '/api-performance-testing/' },
      { name: 'SOC2 Compliance Automation', href: '/soc2-compliance-automation' }
    ]
  },
  {
    title: 'Company & Contact',
    icon: <Users className="w-5 h-5" />,
    color: 'from-pink-500 to-rose-500',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership Team', href: '/leadership' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Press', href: '/news' },
      { name: 'Partners', href: '/partners' },
      { name: 'Investors', href: '/investors' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Locations', href: '/locations' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Diversity & Inclusion', href: '/diversity-inclusion' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  { name: 'All Services', href: '/comprehensive-services-showcase-2025', icon: <Star className="w-4 h-4" /> },
  { name: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Market Pricing', href: '/market-pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Services Advertising', href: '/services-advertising', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Get Quote', href: '/quote', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Book Demo', href: '/demo', icon: <Video className="w-4 h-4" /> },
  { name: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4" /> },
  { name: 'Resources', href: '/resources', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Events', href: '/events', icon: <Calendar className="w-4 h-4" /> },
  { name: 'Webinars', href: '/webinars', icon: <Video className="w-4 h-4" /> },
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> }
];

const companyLinks = [
  { name: 'About Us', href: '/about', description: 'Our mission and vision' },
  { name: 'Careers', href: '/careers', description: 'Join our team' },
  { name: 'News & Updates', href: '/news', description: 'Latest company news' },
  { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
  { name: 'Resources', href: '/resources', description: 'Whitepapers and guides' },
  { name: 'Blog', href: '/blog', description: 'Industry insights' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api-documentation', description: 'Developer documentation' },
  { name: 'Status Page', href: '/status-pages-slo', description: 'Service status' },
  { name: 'Training', href: '/training', description: 'Learn our platforms' },
  { name: 'Community', href: '/community', description: 'Connect with users' }
];

const stats = [
  { label: 'Services Delivered', value: '500+', icon: <CheckCircle className="w-5 h-5" /> },
  { label: 'Happy Clients', value: '200+', icon: <Users className="w-5 h-5" /> },
  { label: 'Years Experience', value: '15+', icon: <Clock className="w-5 h-5" /> },
  { label: 'Awards Won', value: '25+', icon: <Award className="w-5 h-5" /> }
];

interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedSidebar2025({ isOpen, onClose }: EnhancedSidebar2025Props) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  // Search functionality can be implemented here if needed
  // const filteredServices = sidebarSections.flatMap(section =>
  //   section.items.filter(item =>
  //     item.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   )
  // );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-r border-cyan-500/30 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-cyan-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-50" />
                  </div>
                  <div>
                    <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                      Zion Tech Group
                    </div>
                    <div className="text-xs text-cyan-400">2045 Future Technology</div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span>Company Stats</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Star className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h3>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href.endsWith('/') ? link.href : `${link.href}/`}
                    onClick={onClose}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                      {link.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Categories */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span>Service Categories</span>
              </h3>
              <div className="space-y-2">
                {sidebarSections.map((section) => (
                  <div key={section.title}>
                    <button
                      onClick={() => toggleCategory(section.title)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                          {section.icon}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                          {section.title}
                        </span>
                      </div>
                      <ChevronRight 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          expandedCategory === section.title ? 'rotate-90' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {expandedCategory === section.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-8 mt-2 space-y-1"
                        >
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href.endsWith('/') ? item.href : `${item.href}/`}
                              onClick={onClose}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                            >
                              <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                                {item.name}
                              </span>
                              {item.badge && (
                                <span className={`px-2 py-1 text-xs font-medium rounded-full text-white ${
                                  item.badge === 'Breakthrough' ? 'bg-gradient-to-r from-red-500 to-pink-600' :
                                  item.badge === 'New' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                                  item.badge === 'Hot' ? 'bg-gradient-to-r from-orange-500 to-red-600' :
                                  item.badge === 'Featured' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' :
                                  'bg-gradient-to-r from-purple-500 to-indigo-600'
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span>Company</span>
              </h3>
              <div className="space-y-2">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                      {link.name}
                    </div>
                    <div className="text-xs text-gray-500">{link.description}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Support Links */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-cyan-400" />
                <span>Support</span>
              </h3>
              <div className="space-y-2">
                {supportLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                      {link.name}
                    </div>
                    <div className="text-xs text-gray-500">{link.description}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="p-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-3">Ready to Get Started?</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Transform your business with cutting-edge technology solutions.
                </p>
                <Link href="/contact" onClick={onClose}>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
                    Contact Us Today
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}