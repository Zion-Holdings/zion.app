import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Atom,
  Star, 
  Grid, Zap, 
  Building, Search
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/90 to-purple-900/90 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-cyan-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-200 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/quote" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                Get Quote
              </a>
              <a href="/support" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Star className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-gray-400">Innovation Leader 2025</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                            >
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="text-white group-hover:text-cyan-300 transition-colors">
                                    {child.name}
                                  </span>
                                  {child.featured && (
                                    <Star className="w-4 h-4 text-yellow-400" />
                                  )}
                                </div>
                                <p className="text-sm text-gray-400 mt-1">{child.description}</p>
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

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/contact">
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
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
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block p-2 text-gray-400 hover:text-cyan-300 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-cyan-500/20">
                <Link href="/contact">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2040;