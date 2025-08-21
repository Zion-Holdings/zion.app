import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, Search, 
  Brain, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Atom, BarChart3, Settings,
  Palette, BookOpen, GraduationCap, Heart,
  Truck, DollarSign, Lock, Cpu, Database,
  Cloud, Wifi, ShieldCheck, Code, Layers
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
    name: 'AI & Consciousness',
    href: '/services#ai-consciousness',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    color: 'from-cyan-500 to-blue-500',
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', description: 'Emotional intelligence and self-awareness', badge: 'Revolutionary' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion', description: 'Quantum-AI hybrid computing', badge: 'Cutting-Edge' },
      { name: 'Autonomous AI Ecosystem', href: '/autonomous-ai-ecosystem', description: 'Self-managing AI systems', badge: 'Innovative' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', description: 'Ethical AI frameworks', badge: 'Essential' },
      { name: 'AI Content Generator Pro', href: '/ai-content-generator', description: 'Professional AI content creation', badge: 'Popular' },
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber', description: 'AI-powered meeting transcription', badge: 'Efficient' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/services#quantum-emerging',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    color: 'from-purple-500 to-pink-500',
    children: [
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum-powered algorithmic trading', badge: 'Premium' },
      { name: 'Quantum Networking Platform', href: '/quantum-networking-platform', description: 'Quantum-secure communication', badge: 'Secure' },
      { name: 'Quantum Cybersecurity Suite', href: '/quantum-cybersecurity-suite', description: 'Quantum-resistant security', badge: 'Future-Proof' },
      { name: 'Quantum Data Analytics', href: '/quantum-data-analytics-platform', description: 'Quantum-powered big data analytics', badge: 'Fast' },
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Asteroid mining and space resources', badge: 'Space' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface', description: 'Neural interface technology', badge: 'Advanced' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/services#enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    color: 'from-green-500 to-emerald-500',
    children: [
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-automation', description: 'Intelligent development automation', badge: 'Efficient' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise-platform', description: 'Enterprise blockchain solutions', badge: 'Secure' },
      { name: 'Quantum Data Center', href: '/quantum-data-center', description: 'Next-gen data centers', badge: 'Future' },
      { name: '5G Private Network Solutions', href: '/5g-private-network-solutions', description: 'Advanced 5G infrastructure', badge: 'Fast' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Advanced cybersecurity', badge: 'Secure' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations', description: 'Self-managing IT systems', badge: 'Smart' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/services#micro-saas',
    icon: <Target className="w-5 h-5" />,
    description: 'Innovative business solutions',
    badge: 'Popular',
    color: 'from-orange-500 to-red-500',
    children: [
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', description: 'Predictive customer success', badge: 'Smart' },
      { name: 'AI Sales Automation', href: '/ai-powered-sales-automation', description: 'Intelligent sales process automation', badge: 'Efficient' },
      { name: 'CyberShield Pro', href: '/cyber-shield-pro', description: 'Comprehensive cybersecurity', badge: 'Secure' },
      { name: 'DataVault Hub', href: '/data-vault-hub', description: 'Secure data management', badge: 'Safe' },
      { name: 'DevOps Automation Studio', href: '/devops-automation-studio', description: 'Development automation', badge: 'Fast' },
      { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber', description: 'Meeting transcription', badge: 'Accurate' }
    ]
  },
  {
    name: 'Financial Technology',
    href: '/services#financial-technology',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Quantum and AI-powered financial solutions',
    color: 'from-green-500 to-emerald-600',
    children: [
      { name: 'Quantum Trading Platform', href: '/quantum-financial-trading-platform', description: 'Ultra-fast quantum trading', badge: 'Premium' },
      { name: 'AI Risk Management', href: '/ai-risk-management', description: 'Intelligent risk assessment', badge: 'Smart' },
      { name: 'Blockchain Finance', href: '/blockchain-finance', description: 'Decentralized finance solutions', badge: 'Modern' },
      { name: 'Quantum Portfolio Optimization', href: '/quantum-portfolio-optimization', description: 'Quantum-powered investment strategies', badge: 'Advanced' }
    ]
  },
  {
    name: 'Customer Success',
    href: '/services#customer-success',
    icon: <Users className="w-5 h-5" />,
    description: 'AI-powered customer success and retention',
    color: 'from-blue-500 to-indigo-600',
    children: [
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', description: 'Predictive customer success', badge: 'Smart' },
      { name: 'Customer Health Monitoring', href: '/customer-health-monitoring', description: 'Real-time customer insights', badge: 'Proactive' },
      { name: 'Churn Prevention AI', href: '/churn-prevention-ai', description: 'AI-powered retention strategies', badge: 'Effective' },
      { name: 'Customer Journey Optimization', href: '/customer-journey-optimization', description: 'Optimize customer experiences', badge: 'Smooth' }
    ]
  },
  {
    name: 'Space & Metaverse',
    href: '/services#space-metaverse',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration and virtual worlds',
    color: 'from-pink-500 to-rose-500',
    children: [
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI-powered space operations', badge: 'Space' },
      { name: 'Metaverse Development Studio', href: '/metaverse-development-studio-pro', description: '3D world building tools', badge: 'Creative' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Holographic events', badge: 'Immersive' },
      { name: 'Space Colonization Services', href: '/space-colonization-services', description: 'Interplanetary infrastructure', badge: 'Future' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    href: '/services#healthcare-biotech',
    icon: <Heart className="w-5 h-5" />,
    description: 'Advanced healthcare solutions',
    color: 'from-red-500 to-pink-500',
    children: [
      { name: 'AI Biotech Platform', href: '/ai-powered-biotech-platform', description: 'AI-powered drug discovery', badge: 'Life-Saving' },
      { name: 'Quantum Medical Imaging', href: '/quantum-medical-imaging', description: 'Quantum-enhanced diagnostics', badge: 'Precise' },
      { name: 'Personalized Medicine AI', href: '/personalized-medicine-ai', description: 'AI-driven treatment plans', badge: 'Personal' },
      { name: 'Biotech Research Automation', href: '/biotech-research-automation', description: 'Automated research workflows', badge: 'Fast' }
    ]
  }
];

export default function UltraFuturisticNavigation2035() {
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-cyan-300">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                +1 302 464 0950
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                kleber@ziontechgroup.com
              </span>
            </div>
            <div className="text-gray-400">
              364 E Main St STE 1008, Middletown DE 19709
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
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Future Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-300 transition-colors duration-300 group-hover:scale-105"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="text-sm text-gray-400 mb-3">{item.description}</div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 group"
                            >
                              <div className="flex-1">
                                <div className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-200">
                                  {child.name}
                                </div>
                                <div className="text-sm text-gray-400">{child.description}</div>
                              </div>
                              {child.badge && (
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 rounded-full">
                                  {child.badge}
                                </span>
                              )}
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

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/services"
              className="px-6 py-3 text-white hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 text-white hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-300 transition-colors duration-300"
          >
            <Menu className="w-6 h-6" />
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full px-4 py-3 text-white hover:text-cyan-300 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-gray-300 hover:text-cyan-300 transition-colors duration-200"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-700/50 space-y-3">
                <Link
                  href="/services"
                  className="block px-4 py-3 text-white hover:text-cyan-300 transition-colors duration-300"
                >
                  All Services
                </Link>
                <Link
                  href="/pricing"
                  className="block px-4 py-3 text-white hover:text-cyan-300 transition-colors duration-300"
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl text-center font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}