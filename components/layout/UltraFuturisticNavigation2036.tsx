import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, Star, 
  Sparkles, Cpu, Lock, Cloud, Settings, Eye, Award, 
  Clock, Heart, Lightbulb, Search, User, ShoppingCart,
  Bell, HelpCircle, FileText, Video, Headphones, 
  Code, Database, Network, Server, Monitor, Smartphone,
  Camera, Gamepad2, Palette, Music, Film, BookOpenCheck,
  Building, Home, Briefcase, Layers, TrendingUp, 
  Smartphone as Mobile, Globe as World, Zap as Lightning,
  Shield as Security, Brain as AI, Rocket as Launch
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
    name: 'Home',
    href: '/',
    icon: <Home className="w-5 h-5" />,
    description: 'Welcome to Zion Tech Group',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    featured: true,
    color: 'from-purple-500 to-pink-500',
    children: [
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025#search', description: 'Find specific services' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' },
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' },
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Hot',
    featured: true,
    color: 'from-emerald-500 to-teal-500',
    children: [
      { name: 'Ultimate Real Micro SAAS', href: '/ultimate-real-micro-saas-showcase-2025', description: 'Real, market-ready micro SAAS services' },
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'AI-powered business insights' },
      { name: 'AI Content Marketing', href: '/ai-content-marketing-platform', description: 'AI-driven content creation' },
      { name: 'AI Customer Success', href: '/ai-customer-success-platform', description: 'Predict and prevent churn' },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-suite', description: 'Transform your sales team' },
      { name: 'AI HR & Recruitment', href: '/ai-hr-recruitment-platform', description: 'AI-powered hiring solutions' },
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform', description: 'Data-driven financial insights' },
      { name: 'AI Supply Chain', href: '/ai-supply-chain-optimization', description: 'Optimize your supply chain' },
      { name: 'AI Legal Tech', href: '/ai-legal-document-analysis', description: 'Legal document analysis' },
      { name: 'AI Healthcare', href: '/ai-healthcare-analytics-platform', description: 'Healthcare analytics platform' },
      { name: 'AI Real Estate', href: '/ai-real-estate-analytics', description: 'Real estate market insights' },
      { name: 'AI Education', href: '/ai-education-technology-platform', description: 'Personalized learning platform' }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    featured: true,
    color: 'from-violet-500 to-purple-600',
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations', description: 'Fully autonomous business management' },
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
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    featured: true,
    color: 'from-indigo-500 to-blue-600',
    children: [
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure', description: 'Unbreakable quantum encryption' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading', description: 'Ultra-fast quantum trading' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security', description: 'Future-proof internet security' },
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Space Technology', href: '/space-technology', description: 'Advanced space solutions' },
      { name: 'Metaverse Development', href: '/metaverse-ai-development-platform', description: 'Virtual world creation' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform', description: 'Biological AI research' },
      { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing', description: 'Smart factory solutions' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure and security solutions',
    badge: 'Enterprise',
    featured: true,
    color: 'from-blue-500 to-cyan-600',
    children: [
      { name: 'Zero Trust Security Architecture', href: '/zero-trust-network-architecture', description: 'Advanced security framework' },
      { name: 'Quantum Cybersecurity Services', href: '/quantum-cybersecurity-services', description: 'Future-proof security' },
      { name: 'Enterprise AI Operations Center', href: '/enterprise-ai-operations-center', description: 'AI-powered operations' },
      { name: 'Advanced IT Infrastructure', href: '/advanced-it-infrastructure-services', description: 'Next-gen infrastructure' },
      { name: 'Comprehensive IT Services', href: '/comprehensive-it-services', description: 'Full IT solutions' },
      { name: 'Cutting-Edge IT Services', href: '/cutting-edge-it-services', description: 'Innovative IT solutions' },
      { name: 'Enterprise IT 2025', href: '/enterprise-it-2025-services', description: '2025 IT services' },
      { name: 'Enterprise IT 2026', href: '/enterprise-it-2026-services', description: '2026 IT services' },
      { name: 'Enterprise IT 2029', href: '/enterprise-it-2029-services', description: '2029 IT services' },
      { name: 'Enterprise IT 2031', href: '/enterprise-it-2031-services', description: '2031 IT services' },
      { name: 'Enterprise IT 2032', href: '/enterprise-it-2032-services', description: '2032 IT services' }
    ]
  },
  {
    name: 'Business Solutions',
    href: '/business-solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'AI-powered business intelligence, marketing, sales, and HR solutions',
    badge: 'Business',
    featured: true,
    color: 'from-green-500 to-emerald-600',
    children: [
      { name: 'Innovative Business Solutions', href: '/innovative-business-solutions', description: 'AI-powered business solutions' },
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation services' },
      { name: 'Innovative Business Solutions 2025', href: '/innovative-business-solutions-2025', description: '2025 business solutions' },
      { name: 'Professional Services', href: '/professional-services', description: 'Professional business services' },
      { name: 'Industry Real Services', href: '/industry-real-services', description: 'Industry-specific solutions' },
      { name: 'Fintech Financial 2025', href: '/fintech-financial-2025', description: 'Financial technology solutions' },
      { name: 'Healthcare Biotech 2025', href: '/healthcare-biotech-2025', description: 'Healthcare technology' },
      { name: 'Blockchain Web3 2025', href: '/blockchain-web3-2025', description: 'Blockchain solutions' },
      { name: 'Education E-Learning 2025', href: '/education-elearning-2025', description: 'Educational technology' }
    ]
  },
  {
    name: 'Innovations',
    href: '/innovations',
    icon: <Sparkles className="w-5 h-5" />,
    description: 'Cutting-edge innovations and emerging technologies',
    badge: 'Innovation',
    featured: true,
    color: 'from-pink-500 to-rose-500',
    children: [
      { name: 'Revolutionary 2025 Innovations', href: '/revolutionary-2025-innovations', description: '2025 breakthrough innovations' },
      { name: 'Revolutionary 2026 Innovations', href: '/revolutionary-2026-innovations', description: '2026 breakthrough innovations' },
      { name: 'Revolutionary 2027 Innovations', href: '/revolutionary-2027-innovations', description: '2027 breakthrough innovations' },
      { name: 'Next-Gen AI 2026', href: '/next-gen-ai-2026-services', description: 'Next generation AI' },
      { name: 'Next-Gen AI Services', href: '/next-generation-ai-services', description: 'Advanced AI services' },
      { name: 'Next-Gen Innovations 2025', href: '/next-gen-innovations-2025', description: '2025 innovations' },
      { name: 'Emerging Tech 2025', href: '/emerging-tech-2025-innovations', description: '2025 emerging tech' },
      { name: 'Emerging Tech 2026', href: '/emerging-tech-2026-services', description: '2026 emerging tech' },
      { name: 'Emerging Tech 2027', href: '/emerging-tech-2027-services', description: '2027 emerging tech' },
      { name: 'Emerging Tech Services', href: '/emerging-technology-services', description: 'Emerging technology' },
      { name: 'Space Tech Services', href: '/space-tech-services', description: 'Space technology solutions' },
      { name: 'Quantum Advanced Services', href: '/quantum-advanced-services', description: 'Advanced quantum solutions' },
      { name: 'Quantum AI Services 2025', href: '/quantum-ai-services-2025', description: '2025 quantum AI' },
      { name: 'Quantum Space Services', href: '/quantum-space-services', description: 'Quantum space solutions' }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Transparent pricing for all our services',
    badge: 'Pricing',
    color: 'from-yellow-500 to-orange-500',
    children: [
      { name: 'Market Pricing', href: '/market-pricing', description: 'Competitive market pricing' },
      { name: 'Pricing 2033', href: '/pricing-2033', description: 'Future pricing models' },
      { name: 'Pricing Enhanced 2026', href: '/pricing-enhanced-2026', description: 'Enhanced 2026 pricing' },
      { name: 'Revolutionary 2025 Pricing', href: '/revolutionary-2025-pricing', description: '2025 revolutionary pricing' },
      { name: 'Revolutionary 2026 Pricing', href: '/revolutionary-2026-pricing', description: '2026 revolutionary pricing' },
      { name: 'Revolutionary 2028 Pricing', href: '/revolutionary-2028-pricing', description: '2028 revolutionary pricing' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge base, documentation, and learning resources',
    color: 'from-teal-500 to-cyan-500',
    children: [
      { name: 'News & Updates', href: '/news', description: 'Latest news and updates' },
      { name: 'API Documentation', href: '/api-documentation-generator', description: 'API documentation' },
      { name: 'Analytics Dashboard', href: '/analytics', description: 'Analytics and insights' },
      { name: 'Automation Tools', href: '/automation', description: 'Automation solutions' },
      { name: 'Support Center', href: '/support', description: 'Customer support' }
    ]
  },
  {
    name: 'Company',
    href: '/company',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group and our mission',
    color: 'from-gray-500 to-slate-500',
    children: [
      { name: 'Contact Us', href: '/contact', description: 'Get in touch with us' },
      { name: 'About Us', href: '/about', description: 'Learn about our company' },
      { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
      { name: 'Privacy Policy', href: '/privacy', description: 'Privacy and data protection' },
      { name: 'Security', href: '/security', description: 'Security information' }
    ]
  }
];

export default function UltraFuturisticNavigation2036() {
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

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6 text-gray-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                {contactInfo.mobile}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="/contact" className="text-purple-400 hover:text-white transition-colors font-medium">
                Get Started
              </a>
              <a href="/support" className="text-gray-400 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeAllDropdowns}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Innovation • Technology • Future</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeDropdown === item.name
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  {item.name}
                  {item.badge && (
                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                      item.badge === 'New' ? 'bg-green-500 text-black' :
                      item.badge === 'Hot' ? 'bg-red-500 text-white' :
                      item.badge === 'Enterprise' ? 'bg-blue-500 text-white' :
                      item.badge === 'Business' ? 'bg-emerald-500 text-white' :
                      item.badge === 'Innovation' ? 'bg-pink-500 text-white' :
                      item.badge === 'Pricing' ? 'bg-yellow-500 text-black' :
                      item.badge === 'Showcase' ? 'bg-purple-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
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
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={closeAllDropdowns}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-200" />
                              <div className="flex-1">
                                <div className="text-white font-medium group-hover:text-purple-400 transition-colors duration-200">
                                  {child.name}
                                </div>
                                <div className="text-sm text-gray-400">{child.description}</div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors duration-200" />
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
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex items-center justify-between p-3 rounded-lg text-left text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                          item.badge === 'New' ? 'bg-green-500 text-black' :
                          item.badge === 'Hot' ? 'bg-red-500 text-white' :
                          item.badge === 'Enterprise' ? 'bg-blue-500 text-white' :
                          item.badge === 'Business' ? 'bg-emerald-500 text-white' :
                          item.badge === 'Innovation' ? 'bg-pink-500 text-white' :
                          item.badge === 'Pricing' ? 'bg-yellow-500 text-black' :
                          item.badge === 'Showcase' ? 'bg-purple-500 text-white' :
                          'bg-gray-500 text-white'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={closeAllDropdowns}
                          className="block p-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <div className="font-medium">{child.name}</div>
                          <div className="text-sm">{child.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <Link href="/contact">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Get Started
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