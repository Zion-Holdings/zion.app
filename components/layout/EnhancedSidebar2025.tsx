import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Home, Star, Users, 
  HelpCircle, Mail, Phone, MapPin,
  Brain, Atom, Shield, Rocket, DollarSign,
  Zap, Settings, Globe, Heart, Eye, Lock, Cloud,
  BarChart3, Network, Database, Code, Award, Cpu,
  TrendingUp, CheckCircle, Clock, Grid, Sparkles,
  Search, X as CloseIcon,
  Target, BookOpen, Calendar, Video, FileText,
  Truck, ShoppingCart, BookOpenCheck, Building, MessageCircle, User
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const sidebarSections = [
  {
    title: 'Main Navigation',
    icon: <Home className="w-5 h-5" />,
    items: [
      { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
      { name: 'About Us', href: '/about', icon: <Building className="w-4 h-4" /> },
      { name: 'Contact', href: '/contact', icon: <MessageCircle className="w-4 h-4" /> },
      { name: 'Services', href: '/services', icon: <Rocket className="w-4 h-4" /> },
      { name: 'Solutions', href: '/solutions', icon: <Target className="w-4 h-4" /> },
      { name: 'Resources', href: '/resources', icon: <BookOpen className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Core Services',
    icon: <Star className="w-5 h-5" />,
    items: [
      { name: 'AI & Machine Learning', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
      { name: 'Quantum Computing', href: '/quantum-services', icon: <Atom className="w-4 h-4" /> },
      { name: 'Space Technology', href: '/space-technology', icon: <Rocket className="w-4 h-4" /> },
      { name: 'Enterprise IT', href: '/it-services', icon: <Cpu className="w-4 h-4" /> },
      { name: 'Micro SAAS', href: '/micro-saas', icon: <Zap className="w-4 h-4" /> },
      { name: 'Cybersecurity', href: '/security', icon: <Shield className="w-4 h-4" /> },
      { name: 'Cloud Platform', href: '/cloud-platform', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Automation', href: '/automation', icon: <Settings className="w-4 h-4" /> }
    ]
  },
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5" />,
    items: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', icon: <Brain className="w-4 h-4" /> },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', icon: <Heart className="w-4 h-4" /> },
      { name: 'AI Autonomous Operations', href: '/ai-autonomous-business-operations-platform', icon: <Settings className="w-4 h-4" /> },
      { name: 'AI Research Assistant', href: '/ai-autonomous-research-assistant', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', icon: <Eye className="w-4 h-4" /> },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', icon: <FileText className="w-4 h-4" /> },
      { name: 'AI Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager', icon: <Globe className="w-4 h-4" /> },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', icon: <Shield className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5" />,
    items: [
      { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform', icon: <Brain className="w-4 h-4" /> },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', icon: <BarChart3 className="w-4 h-4" /> },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', icon: <Atom className="w-4 h-4" /> },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', icon: <Heart className="w-4 h-4" /> },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', icon: <Lock className="w-4 h-4" /> },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', icon: <Rocket className="w-4 h-4" /> },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', icon: <Brain className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Enterprise Solutions',
    icon: <Shield className="w-5 h-5" />,
    items: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', icon: <Settings className="w-4 h-4" /> },
      { name: 'Edge Computing Platform', href: '/edge-computing-orchestration-platform', icon: <Network className="w-4 h-4" /> },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', icon: <Database className="w-4 h-4" /> },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', icon: <Code className="w-4 h-4" /> },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform', icon: <Lock className="w-4 h-4" /> },
      { name: 'AI Cybersecurity', href: '/ai-powered-cybersecurity', icon: <Shield className="w-4 h-4" /> },
      { name: 'SOC 2 Compliance', href: '/soc2-compliance-automation', icon: <Award className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Business Solutions',
    icon: <Rocket className="w-5 h-5" />,
    items: [
      { name: 'AI Content Generator', href: '/ai-content-generator', icon: <FileText className="w-4 h-4" /> },
      { name: 'AI Code Review', href: '/ai-code-review', icon: <Code className="w-4 h-4" /> },
      { name: 'AI HR Analytics', href: '/intelligent-hr-analytics-platform', icon: <Users className="w-4 h-4" /> },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', icon: <BarChart3 className="w-4 h-4" /> },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', icon: <Truck className="w-4 h-4" /> },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform', icon: <FileText className="w-4 h-4" /> },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', icon: <TrendingUp className="w-4 h-4" /> },
      { name: 'AI Customer Success', href: '/ai-customer-success-platform', icon: <Users className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: <Target className="w-5 h-5" />,
    items: [
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions', icon: <Heart className="w-4 h-4" /> },
      { name: 'Financial Technology', href: '/financial-solutions', icon: <BarChart3 className="w-4 h-4" /> },
      { name: 'Government Tech', href: '/government-technology-solutions', icon: <Building className="w-4 h-4" /> },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', icon: <Settings className="w-4 h-4" /> },
      { name: 'Retail Technology', href: '/retail-technology-solutions', icon: <ShoppingCart className="w-4 h-4" /> },
      { name: 'Education Technology', href: '/education-technology-solutions', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions', icon: <Zap className="w-4 h-4" /> },
      { name: 'Space Technology', href: '/space-technology', icon: <Rocket className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Showcase & Pricing',
    icon: <Star className="w-5 h-5" />,
    items: [
      { name: 'Services Showcase 2025', href: '/comprehensive-services-showcase-2025', icon: <Grid className="w-4 h-4" /> },
      { name: 'Pricing Plans', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
      { name: 'Market Pricing', href: '/market-pricing', icon: <BarChart3 className="w-4 h-4" /> },
      { name: '2026 Services', href: '/revolutionary-2026-services', icon: <TrendingUp className="w-4 h-4" /> },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', icon: <Sparkles className="w-4 h-4" /> },
      { name: 'Ultimate Showcase', href: '/ultimate-2026-services-showcase', icon: <Star className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Company & Resources',
    icon: <Building className="w-5 h-5" />,
    items: [
      { name: 'Partners', href: '/partners', icon: <Users className="w-4 h-4" /> },
      { name: 'Investors', href: '/investors', icon: <DollarSign className="w-4 h-4" /> },
      { name: 'Careers', href: '/careers', icon: <User className="w-4 h-4" /> },
      { name: 'News', href: '/news', icon: <FileText className="w-4 h-4" /> },
      { name: 'Blog', href: '/blog', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Case Studies', href: '/case-studies', icon: <Award className="w-4 h-4" /> },
      { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
      { name: 'Training', href: '/training', icon: <BookOpenCheck className="w-4 h-4" /> }
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
                <a href="/about" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">About Us</a>
                <a href="/careers" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Careers</a>
                <a href="/get-started" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Get Started</a>
                <a href="/quote" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Quote Request</a>
                <a href="/demo" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Book Demo</a>
                <a href="/contact" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Contact</a>
                <a href="/blog" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Blog</a>
                <a href="/case-studies" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Case Studies</a>
                <a href="/resources" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Resources</a>
                <a href="/rag-evaluation-lab" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">RAG Evaluation Lab</a>
                <a href="/soc2-compliance-automation" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">SOC 2 Compliance Automation</a>
                <a href="/browser-automation-cloud" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Browser Automation Cloud</a>
                <a href="/secrets-rotation-automation" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">Secrets Rotation Automation</a>
                <a href="/api-performance-testing" className="block px-3 py-2 rounded-lg hover:bg-cyan-500/10">API Performance Testing</a>
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
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
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