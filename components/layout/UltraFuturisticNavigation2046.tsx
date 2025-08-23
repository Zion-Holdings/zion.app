import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight, Search, User, ShoppingCart, 
  Brain, Atom, Shield, Rocket, Cpu, Database, Target, Sparkles,
  Home, Briefcase, Users, FileText, Phone, Mail, MapPin, Globe,
  Zap, Star, TrendingUp, Award, Clock, CheckCircle, ExternalLink,
  BarChart3, Palette, Layers, Code, Server, Cloud, Lock, Eye,
  Smartphone, Monitor, Wifi, Settings, HelpCircle, Info, DollarSign,
  GraduationCap, Handshake, Heart, Shield as ShieldIcon, Network,
  Database as DatabaseIcon, Cpu as CpuIcon, Brain as BrainIcon,
  Atom as AtomIcon, Rocket as RocketIcon, Target as TargetIcon
} from 'lucide-react';

const UltraFuturisticNavigation2046: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      description: 'Welcome to the future of technology'
    },
    {
      name: 'Services',
      href: '/services',
      icon: Briefcase,
      description: 'Explore our revolutionary solutions',
      dropdown: [
        {
          name: 'Micro SAAS Solutions',
          href: '/services/micro-saas',
          icon: Target,
          description: 'Innovative micro SAAS platforms',
          color: 'from-emerald-500 to-teal-500',
          subItems: [
            { name: 'AI Content & SEO Suite', href: '/services/ai-content-seo-suite', price: '$199/month' },
            { name: 'Intelligent Support Automation', href: '/services/intelligent-support-automation', price: '$149/month' },
            { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation', price: '$299/month' },
            { name: 'Quantum Financial Trading Intelligence', href: '/services/quantum-financial-trading-intelligence', price: '$899/month' },
            { name: 'Autonomous Healthcare Analytics', href: '/services/autonomous-healthcare-analytics', price: '$599/month' },
            { name: 'Space Resource Mining Intelligence', href: '/services/space-resource-mining-intelligence', price: '$1,299/month' }
          ]
        },
        {
          name: 'IT Infrastructure & DevOps',
          href: '/services/it-infrastructure',
          icon: Cpu,
          description: 'Cloud and infrastructure solutions',
          color: 'from-blue-500 to-cyan-500',
          subItems: [
            { name: 'Quantum Cloud Infrastructure Platform', href: '/services/quantum-cloud-infrastructure-platform', price: '$1,499/month' },
            { name: 'Autonomous DevOps Intelligence Platform', href: '/services/autonomous-devops-intelligence-platform', price: '$699/month' },
            { name: 'Quantum Data Center Management', href: '/services/quantum-data-center-management', price: '$1,199/month' },
            { name: 'Autonomous Network Security Operations', href: '/services/autonomous-network-security-operations', price: '$899/month' },
            { name: 'Quantum API Gateway & Management', href: '/services/quantum-api-gateway-management', price: '$549/month' },
            { name: 'Autonomous Database Intelligence Platform', href: '/services/autonomous-database-intelligence-platform', price: '$799/month' }
          ]
        },
        {
          name: 'AI & Machine Learning',
          href: '/services/ai-machine-learning',
          icon: Brain,
          description: 'AI consciousness evolution and development',
          color: 'from-purple-500 to-pink-500',
          subItems: [
            { name: 'AI Consciousness Evolution Platform', href: '/services/ai-consciousness-evolution-platform', price: '$2,499/month' },
            { name: 'Quantum Neural Network Platform', href: '/services/quantum-neural-network-platform', price: '$1,899/month' },
            { name: 'Autonomous AI Research Platform', href: '/services/autonomous-ai-research-platform', price: '$1,299/month' },
            { name: 'Emotional AI Intelligence Platform', href: '/services/emotional-ai-intelligence-platform', price: '$999/month' },
            { name: 'Quantum AI Metaverse Platform', href: '/services/quantum-ai-metaverse-platform', price: '$1,599/month' },
            { name: 'Autonomous AI Business Intelligence', href: '/services/autonomous-ai-business-intelligence', price: '$799/month' }
          ]
        },
        {
          name: 'Cybersecurity & Compliance',
          href: '/services/cybersecurity',
          icon: Shield,
          description: 'Advanced security and protection',
          color: 'from-red-500 to-orange-500',
          subItems: [
            { name: 'Quantum Cybersecurity Threat Intelligence', href: '/services/quantum-cybersecurity-threat-intelligence', price: '$799/month' },
            { name: 'Autonomous Security Operations Center', href: '/services/autonomous-security-operations-center', price: '$1,199/month' },
            { name: 'Zero Trust Network Architecture', href: '/services/zero-trust-network-architecture', price: '$899/month' },
            { name: 'Vulnerability Assessment & Penetration Testing', href: '/services/vulnerability-assessment-penetration-testing', price: '$599/month' },
            { name: 'SOC2 Compliance Automation', href: '/services/soc2-compliance-automation', price: '$399/month' },
            { name: 'Vendor Risk Automation', href: '/services/vendor-risk-automation', price: '$299/month' }
          ]
        },
        {
          name: 'Space & Quantum Technology',
          href: '/services/space-quantum-tech',
          icon: Rocket,
          description: 'Space exploration and quantum computing',
          color: 'from-orange-500 to-red-500',
          subItems: [
            { name: 'Space Resource Intelligence Platform', href: '/services/space-resource-intelligence-platform', price: '$1,499/month' },
            { name: 'Quantum Space Computing Platform', href: '/services/quantum-space-computing-platform', price: '$1,899/month' },
            { name: 'Space Technology AI Platform', href: '/services/space-technology-ai-platform', price: '$999/month' },
            { name: 'Quantum Energy Platform', href: '/services/quantum-energy-platform', price: '$799/month' },
            { name: 'Quantum Materials Discovery Platform', href: '/services/quantum-materials-discovery-platform', price: '$1,299/month' },
            { name: 'Quantum Neural Ecosystem Platform', href: '/services/quantum-neural-ecosystem-platform', price: '$1,599/month' }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      description: 'Industry-specific solutions',
      dropdown: [
        {
          name: 'Healthcare & Life Sciences',
          href: '/solutions/healthcare',
          icon: Heart,
          description: 'AI-powered healthcare solutions',
          color: 'from-pink-500 to-red-500'
        },
        {
          name: 'Financial Services',
          href: '/solutions/financial',
          icon: DollarSign,
          description: 'Quantum financial technology',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Manufacturing & Logistics',
          href: '/solutions/manufacturing',
          icon: Cpu,
          description: 'Smart manufacturing solutions',
          color: 'from-blue-500 to-indigo-500'
        },
        {
          name: 'Retail & E-commerce',
          href: '/solutions/retail',
          icon: ShoppingCart,
          description: 'AI-powered retail solutions',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'Government & Defense',
          href: '/solutions/government',
          icon: Shield,
          description: 'Secure government solutions',
          color: 'from-gray-500 to-slate-500'
        }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      description: 'Knowledge and insights',
      dropdown: [
        {
          name: 'Documentation',
          href: '/docs',
          icon: Code,
          description: 'Technical documentation',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Blog & News',
          href: '/blog',
          icon: Globe,
          description: 'Latest insights and updates',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Case Studies',
          href: '/case-studies',
          icon: TrendingUp,
          description: 'Success stories and results',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'White Papers',
          href: '/white-papers',
          icon: FileText,
          description: 'In-depth research and analysis',
          color: 'from-orange-500 to-red-500'
        },
        {
          name: 'Webinars',
          href: '/webinars',
          icon: Monitor,
          description: 'Educational sessions and demos',
          color: 'from-indigo-500 to-purple-500'
        }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      description: 'About Zion Tech Group',
      dropdown: [
        {
          name: 'About Us',
          href: '/about',
          icon: Info,
          description: 'Our story and mission',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Our Team',
          href: '/team',
          icon: Users,
          description: 'Meet our experts',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Careers',
          href: '/careers',
          icon: Award,
          description: 'Join our team',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'Partners',
          href: '/partners',
          icon: Handshake,
          description: 'Strategic partnerships',
          color: 'from-orange-500 to-red-500'
        },
        {
          name: 'Contact',
          href: '/contact',
          icon: Phone,
          description: 'Get in touch',
          color: 'from-indigo-500 to-purple-500'
        }
      ]
    }
  ];

  const quickActions = [
    { name: 'Get Started', href: '/get-started', icon: Rocket, color: 'from-cyan-500 to-blue-500' },
    { name: 'Contact Sales', href: '/contact', icon: Phone, color: 'from-green-500 to-emerald-500' },
    { name: 'Support', href: '/support', icon: HelpCircle, color: 'from-purple-500 to-pink-500' },
    { name: 'Documentation', href: '/docs', icon: Code, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-200">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Address: 364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-gray-400">Pioneering the Future</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-3">
                            {item.dropdown.map((dropdownItem, index) => (
                              <motion.div
                                key={dropdownItem.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                className="group"
                              >
                                <Link
                                  href={dropdownItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                                  onClick={closeMobileMenu}
                                >
                                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center flex-shrink-0`}>
                                    <dropdownItem.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                        {dropdownItem.name}
                                      </p>
                                      {dropdownItem.price && (
                                        <span className="text-xs text-cyan-400 font-medium">
                                          {dropdownItem.price}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1">
                                      {dropdownItem.description}
                                    </p>
                                  </div>
                                </Link>
                              </motion.div>
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

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <div className={`flex items-center space-x-2 bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 transition-all duration-200 ${
                isSearchFocused ? 'border-cyan-500/50 bg-gray-900/80' : ''
              }`}>
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="bg-transparent text-white placeholder-gray-400 text-sm outline-none w-48"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  className={`px-4 py-2 rounded-lg bg-gradient-to-r ${action.color} text-white text-sm font-medium hover:scale-105 transition-all duration-200 shadow-lg`}
                >
                  {action.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <div className="flex items-center space-x-2 bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-3">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white placeholder-gray-400 text-sm outline-none flex-1"
                  />
                </div>
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                      >
                        <div className="flex items-center space-x-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-90' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-6 space-y-2 border-l border-cyan-500/20 pl-4"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 py-1"
                              onClick={closeMobileMenu}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                      onClick={closeMobileMenu}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Quick Actions */}
              <div className="pt-4 border-t border-cyan-500/20">
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      href={action.href}
                      className={`px-4 py-3 rounded-lg bg-gradient-to-r ${action.color} text-white text-sm font-medium text-center hover:scale-105 transition-all duration-200 shadow-lg`}
                      onClick={closeMobileMenu}
                    >
                      {action.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2046;