import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronRight, Home, Star, Users, 
  Settings, HelpCircle, Mail, Phone, MapPin,
  Brain, Atom, Shield, Rocket, DollarSign,
  Globe, Cpu, Database, Lock, Zap,
  TrendingUp, Award, CheckCircle, Clock,
  ArrowRight, Search, Menu, X as CloseIcon,
  Target, BookOpen
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const sidebarSections = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5" />,
    color: 'text-violet-400',
    items: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', badge: 'New' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', badge: 'Hot' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', badge: 'New' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', badge: 'Popular' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', badge: 'New' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', badge: 'New' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' },
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab', badge: 'New' },
      { name: 'API Performance Testing', href: '/api-performance-testing' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/healthcare-solutions', badge: 'Popular' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', badge: 'New' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', badge: 'New' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5" />,
    color: 'text-indigo-400',
    items: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', badge: 'Hot' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', badge: 'New' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', badge: 'New' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', badge: 'New' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', badge: 'New' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', badge: 'New' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot', badge: 'New' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5" />,
    color: 'text-blue-400',
    items: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', badge: 'New' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', badge: 'New' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', badge: 'New' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', badge: 'New' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', badge: 'New' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation' },
      { name: 'Quantum Networking', href: '/quantum-services' },
      { name: 'Quantum Data Center', href: '/quantum-services' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-infrastructure' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5" />,
    color: 'text-emerald-400',
    items: [
      { name: 'AI Customer Success', href: '/ai-customer-success-platform', badge: 'New' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', badge: 'New' },
      { name: 'Financial Planning AI', href: '/ai-financial-planning-platform', badge: 'New' },
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform', badge: 'New' },
      { name: 'Sales Intelligence AI', href: '/ai-sales-intelligence-platform', badge: 'New' },
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
    title: 'Solutions',
    icon: <Target className="w-5 h-5" />,
    color: 'text-orange-400',
    items: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
      { name: 'Financial Services', href: '/financial-solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Education Technology', href: '/education-technology-solutions' },
      { name: 'Government Solutions', href: '/government-technology-solutions' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
      { name: 'Transportation & Logistics', href: '/transportation-logistics-solutions' },
      { name: 'Real Estate Technology', href: '/real-estate-technology-solutions' },
      { name: 'Entertainment & Media', href: '/entertainment-media-solutions' },
      { name: 'Space Technology', href: '/space-technology' },
      { name: 'Biotech & Healthcare', href: '/biotech-ai-research-platform' }
    ]
  },
  {
    title: 'Resources',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-cyan-400',
    items: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-documentation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog & News', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Community Forum', href: '/resources' },
      { name: 'Developer Resources', href: '/developer' },
      { name: 'Research & Development', href: '/research-development' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Performance Reports', href: '/reports' },
      { name: 'Market Analysis', href: '/market-pricing' },
      { name: 'Services Advertising', href: '/services-advertising' }
    ]
  },
  {
    title: 'Company',
    icon: <Users className="w-5 h-5" />,
    color: 'text-pink-400',
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

  const filteredServices = sidebarSections.flatMap(section =>
    section.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

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
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">Zion Tech Group</div>
                    <div className="text-xs text-cyan-400">Revolutionary Technology</div>
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
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
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
                    href={link.href}
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

            {/* Compact Links */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span>Quick Access</span>
              </h3>
              <div className="mt-6 space-y-2">
                <a href="/services" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">All Services</a>
                <a href="/pricing" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Pricing</a>
                <a href="/market-pricing" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Market Pricing</a>
                <a href="/services-advertising" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Services Advertising</a>
                <a href="/contact" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Contact</a>
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
                        <div className={`w-8 h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
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
                              href={item.href}
                              onClick={onClose}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                            >
                              <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                                {item.name}
                              </span>
                              {item.badge && (
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
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
              <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-3">Ready to Get Started?</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Transform your business with cutting-edge technology solutions.
                </p>
                <Link href="/contact" onClick={onClose}>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
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