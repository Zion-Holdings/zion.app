import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Shield, Atom, BookOpen,
  DollarSign, BarChart3, Star, Sparkles, 
  Grid, Globe, Zap, Target, Users,
  HelpCircle, FileText, Video, 
  Building, MessageCircle, Cpu, Database,
  Cloud, Lock, Palette, Music, Film,
  Gamepad2, Smartphone, Camera, Headphones,
  Sparkles as SparklesIcon, Zap as ZapIcon, 
  Target as TargetIcon, Atom as AtomIcon, 
  Brain as BrainIcon, Shield as ShieldIcon
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

function normalizeHref(href: string): string {
  if (!href) return href;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  if (!href.startsWith('/')) return href;
  const hasQueryOrHash = href.includes('?') || href.includes('#');
  if (hasQueryOrHash) return href;
  return href.endsWith('/') ? href : href + '/';
}

const navigationItems: NavigationItem[] = [
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <BrainIcon className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    featured: true,
    category: 'AI',
    children: [
      { 
        name: 'AI Consciousness Evolution 2029', 
        href: '/ai-consciousness-evolution-2029', 
        description: 'Breakthrough AI consciousness platform',
        featured: true,
        badge: 'Revolutionary'
      },
      { 
        name: 'AI Emotional Intelligence Training', 
        href: '/ai-emotional-intelligence-training', 
        description: 'Train AI to understand human emotions',
        featured: true
      },
      { 
        name: 'AI Autonomous Research Assistant', 
        href: '/ai-autonomous-research-assistant', 
        description: 'Fully autonomous AI research agent',
        featured: true
      },
      { 
        name: 'AI Predictive Maintenance Platform', 
        href: '/ai-predictive-maintenance-platform', 
        description: 'Predict equipment failures with AI'
      },
      { 
        name: 'AI Content Personalization Engine', 
        href: '/ai-content-personalization-engine', 
        description: 'Personalize content for every user'
      },
      { 
        name: 'AI Autonomous Ecosystem Manager', 
        href: '/ai-autonomous-ecosystem-manager', 
        description: 'Autonomously manage business ecosystems'
      },
      { 
        name: 'AI Ethics & Governance Framework', 
        href: '/ai-ethics-governance-framework', 
        description: 'Ensure ethical AI development'
      },
      { 
        name: 'AI Customer Success Platform', 
        href: '/ai-customer-success-platform', 
        description: 'Predict churn and boost customer value'
      },
      { 
        name: 'AI Sales Intelligence Platform', 
        href: '/ai-sales-intelligence-platform', 
        description: 'Supercharge sales with AI intelligence'
      },
      { 
        name: 'AI Creativity Studio', 
        href: '/ai-creativity-studio', 
        description: 'Unleash creativity with AI-powered design'
      }
    ]
  },
  {
    name: 'Enterprise IT Solutions',
    href: '/it-services',
    icon: <ShieldIcon className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure solutions',
    badge: 'Enterprise',
    category: 'IT',
    children: [
      { 
        name: 'Quantum-Secure Cloud Infrastructure', 
        href: '/quantum-secure-cloud-infrastructure', 
        description: 'Future-proof cloud with quantum security',
        featured: true,
        badge: 'Quantum'
      },
      { 
        name: 'Autonomous IT Operations Center', 
        href: '/autonomous-it-operations-center', 
        description: 'Self-healing IT infrastructure',
        featured: true
      },
      { 
        name: 'Edge Computing Orchestration Platform', 
        href: '/edge-computing-orchestration-platform', 
        description: 'Intelligent edge computing management'
      },
      { 
        name: 'Blockchain Infrastructure Platform', 
        href: '/blockchain-infrastructure-platform', 
        description: 'Enterprise blockchain infrastructure'
      },
      { 
        name: 'AI-Powered DevOps Platform', 
        href: '/ai-powered-devops-platform', 
        description: 'Intelligent DevOps automation'
      },
      { 
        name: 'Zero Trust Security Platform', 
        href: '/zero-trust-security-platform', 
        description: 'Comprehensive zero trust security'
      },
      { 
        name: 'AI-Powered Cybersecurity Platform', 
        href: '/ai-powered-cybersecurity', 
        description: 'Intelligent threat detection and response'
      },
      { 
        name: 'AI-Powered IT Asset Management', 
        href: '/ai-powered-it-asset-management', 
        description: 'Intelligent IT asset tracking'
      },
      { 
        name: 'SOC 2 Compliance Automation', 
        href: '/soc2-compliance-automation', 
        description: 'Automate SOC 2 compliance'
      },
      { 
        name: 'RAG Evaluation Lab', 
        href: '/rag-evaluation-lab', 
        description: 'Measure RAG system quality and cost'
      }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Business',
    category: 'SAAS',
    children: [
      { 
        name: 'AI Content Automation Platform', 
        href: '/ai-content-automation-platform', 
        description: 'Generate and optimize content at scale',
        featured: true
      },
      { 
        name: 'AI Customer Success Platform', 
        href: '/ai-customer-success-platform', 
        description: 'Predict churn and boost customer value'
      },
      { 
        name: 'AI Sales Intelligence Platform', 
        href: '/ai-sales-intelligence-platform', 
        description: 'Supercharge sales with AI automation'
      },
      { 
        name: 'Intelligent HR Analytics Platform', 
        href: '/intelligent-hr-analytics-platform', 
        description: 'Transform HR with AI-powered insights'
      },
      { 
        name: 'Intelligent Supply Chain Optimization', 
        href: '/intelligent-supply-chain-optimization', 
        description: 'Optimize supply chains with AI'
      },
      { 
        name: 'AI Financial Planning Platform', 
        href: '/ai-financial-planning-platform', 
        description: 'Intelligent financial planning and analysis'
      },
      { 
        name: 'Smart CRM Intelligence Suite', 
        href: '/smart-crm-intelligence-suite', 
        description: 'AI-powered CRM with intelligent automation'
      },
      { 
        name: 'AI Project Management Suite', 
        href: '/ai-project-management-suite', 
        description: 'Intelligent project management with AI'
      },
      { 
        name: 'AI Business Intelligence Suite', 
        href: '/ai-business-intelligence-suite', 
        description: 'Transform data into actionable insights'
      },
      { 
        name: 'AI Marketing Automation Platform', 
        href: '/ai-marketing-automation-platform', 
        description: 'Automate marketing campaigns with AI'
      }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <AtomIcon className="w-5 h-5" />,
    description: 'Breakthrough quantum and space technologies',
    badge: 'Quantum',
    category: 'Quantum',
    children: [
      { 
        name: 'Quantum Neural Network Platform', 
        href: '/quantum-neural-network-platform', 
        description: 'Next-generation quantum computing',
        featured: true
      },
      { 
        name: 'Quantum Financial Trading Platform', 
        href: '/quantum-financial-trading', 
        description: 'Quantum-powered financial trading'
      },
      { 
        name: 'Quantum Materials Discovery Platform', 
        href: '/quantum-materials-discovery-platform', 
        description: 'Discover new materials with quantum computing'
      },
      { 
        name: 'Quantum Bio-Computing Platform', 
        href: '/quantum-bio-computing-platform', 
        description: 'Quantum computing for biological systems'
      },
      { 
        name: 'Quantum Internet Security Platform', 
        href: '/quantum-internet-security-platform', 
        description: 'Secure the quantum internet'
      },
      { 
        name: 'Quantum Cloud Infrastructure Platform', 
        href: '/quantum-cloud-infrastructure-platform', 
        description: 'Quantum-ready cloud infrastructure'
      },
      { 
        name: 'Space Resource Mining Platform', 
        href: '/space-resource-mining-platform', 
        description: 'Mine resources from space',
        featured: true
      },
      { 
        name: 'AI-Powered Space Technology', 
        href: '/ai-powered-space-technology', 
        description: 'AI for space exploration'
      },
      { 
        name: 'Brain-Computer Interface Platform', 
        href: '/brain-computer-interface-platform', 
        description: 'Direct brain-computer communication'
      },
      { 
        name: 'Autonomous Vehicle AI Platform', 
        href: '/autonomous-vehicle-ai-platform', 
        description: 'AI for autonomous vehicles'
      }
    ]
  },
  {
    name: 'All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    featured: true,
    category: 'All',
    children: [
      { 
        name: 'View All Services', 
        href: '/comprehensive-services-showcase-2025', 
        description: 'Complete services portfolio',
        featured: true
      },
      { 
        name: 'Ultimate 2035 Futuristic', 
        href: '/ultimate-2035-futuristic-services-showcase', 
        description: 'Revolutionary future technology',
        featured: true
      },
      { 
        name: 'Ultimate 2025 Micro SAAS', 
        href: '/ultimate-2025-micro-saas-showcase', 
        description: 'Latest innovative services',
        featured: true
      },
      { 
        name: 'Service Categories', 
        href: '/comprehensive-services-showcase-2025', 
        description: 'Browse by category'
      },
      { 
        name: 'Pricing Comparison', 
        href: '/comprehensive-services-showcase-2025', 
        description: 'Compare service costs'
      },
      { 
        name: 'Service Search', 
        href: '/comprehensive-services-showcase-2025', 
        description: 'Find specific services'
      },
      { 
        name: 'Market Pricing', 
        href: '/market-pricing', 
        description: 'Average market prices & references'
      },
      { 
        name: 'Latest Innovations', 
        href: '/revolutionary-2025-services-showcase', 
        description: 'Cutting-edge solutions'
      },
      { 
        name: '2026 Services', 
        href: '/revolutionary-2026-services', 
        description: 'Next generation solutions'
      },
      { 
        name: '2027 Services', 
        href: '/revolutionary-2027-services-showcase', 
        description: 'Future-ready services'
      },
      { 
        name: 'Ultimate 2026', 
        href: '/ultimate-2026-services-showcase', 
        description: 'Premium service collection'
      },
      { 
        name: 'Enterprise Solutions', 
        href: '/enterprise-solutions-showcase', 
        description: 'Enterprise-grade solutions'
      },
      { 
        name: 'Innovative Business Solutions', 
        href: '/innovative-business-solutions', 
        description: 'Business transformation services'
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Educational content and resources',
    category: 'Resources',
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api', description: 'API documentation' },
      { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'White Papers', href: '/white-papers', description: 'Research and insights' },
      { name: 'Webinars', href: '/webinars', description: 'Educational webinars' },
      { name: 'Training', href: '/training', description: 'Professional training' },
      { name: 'Support', href: '/support', description: 'Technical support' }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'Company',
    children: [
      { name: 'About Us', href: '/about', description: 'Our story and mission' },
      { name: 'Team', href: '/team', description: 'Meet our team' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'Partners', href: '/partners', description: 'Partnership opportunities' },
      { name: 'Investors', href: '/investors', description: 'Investor information' },
      { name: 'News', href: '/news', description: 'Company news and updates' },
      { name: 'Blog', href: '/blog', description: 'Industry insights' },
      { name: 'Contact', href: '/contact', description: 'Get in touch' }
    ]
  }
];

export default function UltraFuturisticNavigation2037() {
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

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group" onClick={closeAllDropdowns}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <AtomIcon className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Future Technology Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
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
                      className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        
                        <div className="space-y-3">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeAllDropdowns}
                              className="flex items-center justify-between p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-200 group"
                            >
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {child.name}
                                  </span>
                                  {child.badge && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full">
                                      {child.badge}
                                    </span>
                                  )}
                                  {child.featured && (
                                    <Star className="w-4 h-4 text-yellow-400" />
                                  )}
                                </div>
                                <p className="text-sm text-gray-400 mt-1">{child.description}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
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

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-8 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          onClick={closeAllDropdowns}
                          className="block p-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                        >
                          <div className="flex items-center space-x-2">
                            <span>{child.name}</span>
                            {child.badge && (
                              <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full">
                                {child.badge}
                              </span>
                            )}
                            {child.featured && (
                              <Star className="w-4 h-4 text-yellow-400" />
                            )}
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{child.description}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-700">
                <Link href="/contact">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
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