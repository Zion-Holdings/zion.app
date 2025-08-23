import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight, Search, User, ShoppingCart, 
  Brain, Atom, Shield, Rocket, Cpu, Database, Target, Sparkles,
  Home, Briefcase, Users, FileText, Phone, Mail, MapPin, Globe,
  Zap, Star, TrendingUp, Award, Clock, CheckCircle, ExternalLink,
  Building, GraduationCap, Heart, Palette, BarChart3, Cloud, Lock,
  Handshake, Video, BookOpen
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const navigationItems: NavigationItem[] = [
  {
    name: 'AI & Machine Learning',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    featured: true,
    children: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-platform', description: 'Transform data into actionable insights', featured: true },
      { name: 'AI Customer Service', href: '/ai-customer-service-automation', description: '24/7 intelligent customer support', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Supercharge sales with AI automation', featured: true },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Automate and optimize marketing campaigns' },
      { name: 'AI Content Creation', href: '/ai-content-creation-suite', description: 'Create engaging content at scale' },
      { name: 'AI HR Analytics', href: '/ai-hr-analytics-platform', description: 'Transform HR with data-driven insights' },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', description: 'Intelligent financial planning and wealth management' },
      { name: 'AI Healthcare Analytics', href: '/ai-healthcare-analytics-platform', description: 'Transform healthcare with AI-powered insights' }
    ]
  },
  {
    name: 'Quantum Computing',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Next-generation quantum computing solutions',
    badge: 'Quantum',
    children: [
      { name: 'Quantum Machine Learning', href: '/quantum-machine-learning-platform', description: 'Unlock quantum advantage in ML', featured: true },
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Future-proof security with quantum encryption' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Secure the future of the internet' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum advantage in financial markets' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Discover new materials with quantum computing' },
      { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform', description: 'Advanced quantum neural computing' }
    ]
  },
  {
    name: 'Emerging Technologies',
    href: '/emerging-tech',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Cutting-edge emerging technology solutions',
    badge: 'Future',
    children: [
      { name: 'Metaverse Development', href: '/metaverse-development-platform', description: 'Build immersive virtual worlds', featured: true },
      { name: 'Space Technology AI', href: '/space-technology-ai-platform', description: 'AI-powered space exploration' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Revolutionary neural interface technology' },
      { name: 'Autonomous Vehicles', href: '/autonomous-vehicle-ai-platform', description: 'AI-powered autonomous vehicle technology' },
      { name: 'Synthetic Biology', href: '/synthetic-biology-platform', description: 'Design and engineer biological systems' },
      { name: 'Digital Twin Platform', href: '/digital-twin-platform', description: 'Create virtual replicas of physical systems' }
    ]
  },
  {
    name: 'Enterprise Solutions',
    href: '/enterprise',
    icon: <Building className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure solutions',
    badge: 'Enterprise',
    children: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform', description: 'Self-healing infrastructure with AI', featured: true },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Manage distributed edge infrastructure' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity-platform', description: 'Intelligent threat detection and response' },
      { name: 'Blockchain Identity Management', href: '/blockchain-identity-management', description: 'Secure, decentralized identity verification' },
      { name: 'Supply Chain Optimization', href: '/ai-supply-chain-optimization', description: 'Optimize supply chain with intelligent AI' },
      { name: 'Manufacturing AI', href: '/ai-manufacturing-platform', description: 'Optimize manufacturing with AI' }
    ]
  },
  {
    name: 'Innovative Services',
    href: '/innovative-services-showcase-2025',
    icon: <Star className="w-5 h-5" />,
    description: 'Cutting-edge AI, quantum, and emerging technology services',
    badge: '2025',
    featured: true,
    children: [
      { name: 'AI-Powered Solutions', href: '/innovative-services-showcase-2025?category=ai', description: 'Advanced AI and machine learning services', featured: true },
      { name: 'Quantum Computing', href: '/innovative-services-showcase-2025?category=quantum', description: 'Quantum computing and emerging tech solutions' },
      { name: 'Industry Solutions', href: '/innovative-services-showcase-2025?category=industry', description: 'Specialized industry-focused services' },
      { name: 'Cybersecurity', href: '/innovative-services-showcase-2025?category=cybersecurity', description: 'AI-powered security and threat intelligence' },
      { name: 'Emerging Technologies', href: '/innovative-services-showcase-2025?category=emerging', description: 'Blockchain, IoT, and metaverse solutions' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Zap className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'SAAS',
    children: [
      { name: 'AI Content Creation', href: '/ai-content-creation-suite', description: 'Create engaging content at scale', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Supercharge sales with AI insights' },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Automate and optimize marketing' },
      { name: 'AI Customer Success', href: '/ai-customer-success-platform', description: 'Predict and prevent churn with AI' },
      { name: 'AI HR Analytics', href: '/ai-hr-analytics-platform', description: 'Transform HR with data-driven insights' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalize learning with AI' }
    ]
  },
  {
    name: 'All Services',
    href: '/services',
    icon: <Grid className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    featured: true,
    children: [
      { name: 'View All Services', href: '/services', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/services', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/pricing', description: 'Compare service costs' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' },
      { name: 'Market Pricing', href: '/market-pricing', description: 'Average market prices & references' }
    ]
  }
];

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

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
          name: 'Revolutionary 2046 Services',
          href: '/revolutionary-2046-services-showcase',
          icon: Sparkles,
          description: 'Next-generation 2046 technology solutions',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'AI & Consciousness',
          href: '/services/ai-consciousness',
          icon: Brain,
          description: 'AI consciousness evolution and development',
          color: 'from-cyan-500 to-blue-500'
        },
        {
          name: 'Quantum Technology',
          href: '/services/quantum-technology',
          icon: Atom,
          description: 'Quantum computing and hybrid systems',
          color: 'from-blue-500 to-indigo-500'
        },
        {
          name: 'Cybersecurity',
          href: '/services/cybersecurity',
          icon: Shield,
          description: 'Advanced security and protection',
          color: 'from-red-500 to-orange-500'
        },
        {
          name: 'Business Solutions',
          href: '/services/business-solutions',
          icon: Target,
          description: 'Micro SAAS and business automation',
          color: 'from-emerald-500 to-teal-500'
        },
        {
          name: 'IT Infrastructure',
          href: '/services/it-infrastructure',
          icon: Cpu,
          description: 'Cloud and infrastructure solutions',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          name: 'Space Technology',
          href: '/services/space-technology',
          icon: Rocket,
          description: 'Space exploration and resource management',
          color: 'from-pink-500 to-red-500'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Sparkles,
      description: 'Industry-specific technology solutions',
      dropdown: [
        {
          name: 'Healthcare & Biotech',
          href: '/solutions/healthcare',
          icon: Heart,
          description: 'AI-powered healthcare solutions',
          color: 'from-red-500 to-pink-500'
        },
        {
          name: 'Financial Services',
          href: '/solutions/financial',
          icon: TrendingUp,
          description: 'Fintech and banking solutions',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Manufacturing',
          href: '/solutions/manufacturing',
          icon: Cpu,
          description: 'Smart manufacturing and automation',
          color: 'from-blue-500 to-indigo-500'
        },
        {
          name: 'Retail & E-commerce',
          href: '/solutions/retail',
          icon: ShoppingCart,
          description: 'Digital commerce solutions',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'Education',
          href: '/solutions/education',
          icon: GraduationCap,
          description: 'Edtech and learning platforms',
          color: 'from-indigo-500 to-purple-500'
        },
        {
          name: 'Government',
          href: '/solutions/government',
          icon: Building,
          description: 'Public sector technology',
          color: 'from-gray-500 to-blue-500'
        },
        {
          name: 'Entertainment & Media',
          href: '/entertainment-media-solutions',
          icon: Palette,
          description: 'Creative technology solutions',
          color: 'from-pink-500 to-rose-500'
        },
        {
          name: 'Energy & Utilities',
          href: '/energy-utilities-solutions',
          icon: Zap,
          description: 'Smart energy management',
          color: 'from-yellow-500 to-orange-500'
        }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      description: 'Learn about our mission and team'
    },
    {
      name: 'Careers',
      href: '/careers',
      icon: Users,
      description: 'Join our revolutionary team'
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: FileText,
      description: 'Insights and thought leadership'
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: TrendingUp,
      description: 'Client success stories'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone,
      description: 'Get in touch with our experts'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </div>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors duration-300 py-2"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors duration-300 py-2 font-medium"
                    >
                      {item.name}
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
                          className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="group/item flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                                >
                                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}>
                                    <dropdownItem.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300">
                                      {dropdownItem.name}
                                    </div>
                                    <div className="text-sm text-white/60 mt-1">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-white/40 group-hover/item:text-white/60 transition-colors duration-300" />
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

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              </div>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <div className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}>
          <div className="flex items-center justify-between h-16 px-4">
            {/* Mobile Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Zion Tech</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-cyan-400 transition-colors duration-300"
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
              className="bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-10 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                </div>

                {/* Navigation Items */}
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full p-3 text-left text-white hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={closeMobileMenu}
                                className="flex items-center space-x-3 p-3 text-white/80 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
                              >
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center`}>
                                  <dropdownItem.icon className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm">{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block p-3 text-white hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
                      >
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}

                {/* Contact Info */}
                <div className="pt-4 border-t border-white/10">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-white/80">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <a href={`tel:${contactInfo.phone}`} className="text-sm hover:text-white transition-colors duration-300">
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-white/80">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-white transition-colors duration-300">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-white/80">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Started Today
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20 lg:h-20" />
    </>
  );
};

export default UltraFuturisticNavigation2040;